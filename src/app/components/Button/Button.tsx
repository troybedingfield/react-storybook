'use client';

import './Button.scss'

interface ButtonProps {


    /**
     * What color do you want the button
     */
    color?: 'default' | 'success' | 'warning' | 'error' | 'disabled' | undefined;
    /**
     * What color do you want the button
     */
    fill?: 'solid' | 'outline' | 'clear' | undefined;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large' | undefined;
    /**
     * Button contents
     */
    children?: any;
    /**
     * minimum width
     */
    minWidth?: number | undefined;
    /**
     * minimum width
     */
    maxWidth?: number | undefined;
    /**
     *  is the buttondisabled
     */
    disabled?: boolean | undefined | null;
    /**
     *  should the button label be uppercase
     */
    uppercase?: 'true' | undefined;

    custombgcolor?: string | undefined;
    customcolor?: string | undefined;
    custombordercolor?: string | undefined;


    /**
     * Optional click handler
     */
    buttonClick?: () => void;








}

export default function Button({ ...props }) {
    const {
        children = undefined,
        color = undefined,
        disabled = undefined,
        fill = undefined,
        size = undefined,
        uppercase = undefined,
        maxWidth = undefined,
        minWidth = undefined,
        custombgcolor = undefined,
        customcolor = undefined,
        custombordercolor = undefined,
        buttonClick,

    }: ButtonProps = props

    return (
        <button style={{ minWidth: minWidth + 'px', maxWidth: maxWidth + 'px', backgroundColor: custombgcolor, borderColor: custombordercolor, color: customcolor }} className={[color, fill, size, uppercase === "true" ? 'text-uppercase' : ''].join(' ')} onClick={buttonClick} disabled={disabled ? disabled : undefined} {...props}>{children}</button>
    )
}