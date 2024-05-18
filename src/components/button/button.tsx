import { ReactElement } from "react";
import "../../styles/global.css";
import { Loader } from "../loader/loader";
import {
  ButtonProps,
  ButtonVariantProps,
  IconVariantPropsWithHref,
  IconVariantPropsWithOnClick,
  LinkVariantPropsWithHref,
  LinkVariantPropsWithOnClick,
} from "./buttonTypes";
import "./css/button.css";
import { getButtonClasses } from "./utils/utils";

export const Button: React.FC<ButtonProps> = (props): ReactElement => {
  const {
    children,
    width = "fit-content",
    className = "",
    loading = false,
    loadingText = "Vennligst vent",
    variant = "default",
    ...rest
  } = props;

  // link or icon variant
  const isLink = variant === "link" || variant === "icon";
  const classNames = getButtonClasses(variant, className, loading, rest);

  // Separate props for button and link to avoid passing invalid props
  const commonProps = {
    className: `${classNames} `, // Apply the ui-kit class here
    style: { width },
    "aria-disabled": loading ? true : undefined,
  };

  if (isLink) {
    const { href, onClick, ...linkProps } = rest as
      | LinkVariantPropsWithHref
      | LinkVariantPropsWithOnClick
      | IconVariantPropsWithHref
      | IconVariantPropsWithOnClick;

    const { border, ...finalProps } = linkProps as typeof linkProps & {
      border?: any;
    };

    // Prioritize onClick over href if both are provided
    const linkHandler = onClick
      ? (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          e.preventDefault(); // Prevent default if href is present but onClick should be prioritized
          onClick(e);
        }
      : undefined;

    return (
      <a {...commonProps} href={href} onClick={linkHandler} {...finalProps}>
        {loading ? (
          <span className="isLoading">
            <Loader />
            {loadingText}
          </span>
        ) : (
          children
        )}
      </a>
    );
  } else {
    const { disabled, ...buttonProps } = rest as ButtonVariantProps;
    return (
      <button {...commonProps} disabled={disabled || loading} {...buttonProps}>
        {loading ? (
          <span className="isLoading">
            <Loader />
            {loadingText}
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
};
