import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
export type ButtonType = "default" | "primary" | "secondary" | "link" | "ghost" | "outline";
export interface BaseProps {
    width?: "fit-content" | "100%" | "auto" | "max-content" | "min-content";
    loading?: boolean;
    className?: string;
    loadingText?: string;
}
export interface ButtonVariantProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseProps {
    variant?: Exclude<ButtonType, "link">;
}
export interface LinkVariantPropsWithHref extends AnchorHTMLAttributes<HTMLAnchorElement>, BaseProps {
    variant: "link";
    href: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export interface LinkVariantPropsWithOnClick extends AnchorHTMLAttributes<HTMLAnchorElement>, BaseProps {
    variant: "link";
    onClick: React.MouseEventHandler<HTMLAnchorElement>;
    href?: never;
}
export type ButtonProps = ButtonVariantProps | LinkVariantPropsWithHref | LinkVariantPropsWithOnClick;
