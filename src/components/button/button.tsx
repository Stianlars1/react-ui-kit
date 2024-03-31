import { ReactElement } from "react";
import { Loader } from "../loader/loader";
import {
  ButtonProps,
  ButtonVariantProps,
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

  const isLink = variant === "link";
  const classNames = getButtonClasses(variant, className, loading);

  // Separate props for button and link to avoid passing invalid props
  const commonProps = {
    className: classNames,
    style: { width },
    "aria-disabled": loading ? true : undefined,
  };

  if (isLink) {
    const { href, onClick, ...linkProps } = rest as
      | LinkVariantPropsWithHref
      | LinkVariantPropsWithOnClick;
    // Prioritize onClick over href if both are provided
    const linkHandler = onClick
      ? (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          e.preventDefault(); // Prevent default if href is present but onClick should be prioritized
          onClick(e);
        }
      : undefined;

    return (
      <a {...commonProps} href={href} onClick={linkHandler} {...linkProps}>
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
