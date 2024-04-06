import { ButtonType } from "../buttonTypes";

export const getButtonClasses = (
  variant: ButtonType,
  className: string,
  loading: boolean,
  rest?: any
) => {
  const iconBorder =
    variant === "icon" && rest?.border ? "button--icon-border" : "";

  const baseClass = "button transition-colors";
  const variantClass = `button--${variant}`;
  const loadingClass = loading ? "button--loading" : "";
  return `${baseClass} ${variantClass} ${className} ${loadingClass} ${iconBorder}`.trim();
};
