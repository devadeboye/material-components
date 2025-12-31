import * as class_variance_authority_types from 'class-variance-authority/types';
import React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const buttonVariants: (props?: ({
    variant?: "filled" | "tonal" | "outlined" | "text" | "elevated" | null | undefined;
    size?: "sm" | "md" | "lg" | "icon" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    leadingIcon?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const cardVariants: (props?: ({
    variant?: "filled" | "outlined" | "elevated" | null | undefined;
    padding?: "none" | "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;

/**
 * A material design ripple effect component.
 * To use this, the parent container must have `relative` and `overflow-hidden`.
 */
declare const Ripple: () => react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, Card, type CardProps, Ripple };
