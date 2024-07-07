import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';
import './Button.scss'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        children: {
            control: { type: 'text' },
            defaultValue: { summary: ' ' }
        },
        color: {
            options: ['default', 'success', 'warning', 'error', 'disabled', undefined],
            control: { type: 'select' },
            defaultValue: { summary: 'default' }
        },
        fill: {
            options: ['solid', 'outline', 'clear', undefined],
            control: { type: 'select' },
            defaultValue: { summary: 'solid' }
        },
        size: {
            options: ['small', 'medium', 'large', undefined],
            control: { type: 'select' },
            defaultValue: { summary: 'medium' }
        },
        uppercase: {
            options: ['true', undefined],
            control: { type: 'select' },
            defaultValue: { summary: undefined }
        },
        minWidth: {
            control: { type: 'number' },
            defaultValue: { summary: undefined }
        },
        maxWidth: {
            control: { type: 'number' },
            defaultValue: { summary: undefined }
        },
        disabled: {
            control: { type: 'boolean' },
            defaultValue: { summary: undefined }
        },
        custombgcolor: {
            control: { type: 'color' },
            defaultValue: { summary: undefined }
        },
        customcolor: {
            control: { type: 'color' },
            defaultValue: { summary: undefined }
        },
        custombordercolor: {
            control: { type: 'color' },
            defaultValue: { summary: undefined }
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};

export const Color_Default: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Color_Success: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: 'success',
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Color_Warning: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: 'warning',
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Color_Error: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: 'error',
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Outline_Default: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: 'outline',
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Outline_Success: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: 'outline',
        color: 'success',
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Outline_Warning: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: 'outline',
        color: 'warning',
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Outline_Error: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: 'outline',
        color: 'error',
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Clear_Default: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: 'clear',
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Clear_Success: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: 'clear',
        color: 'success',
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Clear_Warning: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: 'clear',
        color: 'warning',
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Clear_Error: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: 'clear',
        color: 'error',
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Size_Default: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Size_Small: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: 'small',
        fill: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Size_Medium: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: 'medium',
        fill: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Size_Large: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: 'large',
        fill: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Uppercase: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: undefined,
        uppercase: 'true',
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Disabled: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: true,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Custom_Text_Color: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: '#0af1f1',
        custombordercolor: undefined

    },
};
export const Custom_Background_Color: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: '#e60cf1',
        customcolor: undefined,
        custombordercolor: undefined

    },
};
export const Custom_Border_Color: Story = {
    args: {
        onClick: fn(),
        children: 'Button',
        size: undefined,
        fill: 'outline',
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        custombgcolor: undefined,
        customcolor: undefined,
        custombordercolor: '#ffb000'

    },
};


