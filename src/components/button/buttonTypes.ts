import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonType =
  | "default"
  | "primary"
  | "secondary"
  | "link"
  | "ghost"
  | "outline"
  | "icon";

export interface BaseProps {
  width?: "fit-content" | "100%" | "auto" | "max-content" | "min-content";
  loading?: boolean;
  className?: string;
  loadingText?: string;
}

// Props for button variants excluding 'link'
export interface ButtonVariantProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BaseProps {
  variant?: Exclude<ButtonType, "link" | "icon">;
}

// Enhanced link variant props allowing optional href if onClick is provided
export interface LinkVariantPropsWithHref
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseProps {
  variant: "link";
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface LinkVariantPropsWithOnClick
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseProps {
  variant: "link";
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  href?: never; // Make href explicitly never here to avoid confusion
}

// Enhanced icon variant props allowing optional href if onClick is provided
export interface IconVariantPropsWithHref
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseProps {
  variant: "icon";
  href: string;
  border?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export interface IconVariantPropsWithOnClick
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseProps {
  variant: "icon";
  href?: string;
  border?: boolean;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

// Union type for component props, including the new link variant options
export type ButtonProps =
  | ButtonVariantProps
  | LinkVariantPropsWithHref
  | LinkVariantPropsWithOnClick
  | IconVariantPropsWithHref
  | IconVariantPropsWithOnClick;
