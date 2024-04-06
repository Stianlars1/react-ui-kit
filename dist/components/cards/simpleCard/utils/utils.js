import { jsx as _jsx } from "react/jsx-runtime";
export const getIcon = (icon) => {
    if (typeof icon === "string") {
        return _jsx("img", { src: icon, alt: "icon" });
    }
    if (typeof icon === "function") {
        const Icon = () => icon;
        return _jsx(Icon, {});
    }
    return icon;
};
