import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader } from "../loader/loader";
import "./css/button.css";
import "../../styles/global.css";
import { getButtonClasses } from "./utils/utils";
export const Button = (props) => {
    const { children, width = "fit-content", className = "", loading = false, loadingText = "Vennligst vent", variant = "default", ...rest } = props;
    // link or icon variant
    const isLink = variant === "link" || variant === "icon";
    const classNames = getButtonClasses(variant, className, loading, rest);
    // Separate props for button and link to avoid passing invalid props
    const commonProps = {
        className: classNames,
        style: { width },
        "aria-disabled": loading ? true : undefined,
    };
    if (isLink) {
        const { href, onClick, ...linkProps } = rest;
        const { border, ...finalProps } = linkProps;
        // Prioritize onClick over href if both are provided
        const linkHandler = onClick
            ? (e) => {
                e.preventDefault(); // Prevent default if href is present but onClick should be prioritized
                onClick(e);
            }
            : undefined;
        return (_jsx("a", { ...commonProps, href: href, onClick: linkHandler, ...finalProps, children: loading ? (_jsxs("span", { className: "isLoading", children: [_jsx(Loader, {}), loadingText] })) : (children) }));
    }
    else {
        const { disabled, ...buttonProps } = rest;
        return (_jsx("button", { ...commonProps, disabled: disabled || loading, ...buttonProps, children: loading ? (_jsxs("span", { className: "isLoading", children: [_jsx(Loader, {}), loadingText] })) : (children) }));
    }
};
