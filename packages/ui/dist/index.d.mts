import * as class_variance_authority_types from 'class-variance-authority/types';
import React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const buttonVariants: (props?: ({
    variant?: "filled" | "tonal" | "outlined" | "text" | null | undefined;
    size?: "sm" | "md" | "lg" | "icon" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * A material design ripple effect component.
 * To use this, the parent container must have `relative` and `overflow-hidden`.
 */
declare const Ripple: () => react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, Ripple };
