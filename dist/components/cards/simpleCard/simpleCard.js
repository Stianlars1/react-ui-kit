import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconChevron } from "../../../assets/icons/icons";
import "../../../styles/global.css";
import "./css/simpleCard.css";
import { getIcon } from "./utils/utils";
export const SimpleCard = ({ title, description, icon, href = undefined, onClick, width, chevron, }) => {
    const Icon = icon ? getIcon(icon) : undefined;
    if (href) {
        const showChevron = chevron === undefined ? true : chevron;
        return (_jsxs("a", { href: href, className: "simple-card simple-card-clickable", onClick: () => onClick && onClick(), style: { width: width }, children: [Icon !== undefined && (_jsx("div", { className: "simple-card__icon-wrapper", children: Icon })), _jsxs("div", { className: "simple-card__content", children: [_jsx("h2", { className: "simple-card__content__title", children: title }), description && (_jsx("p", { className: "simple-card__content__description", children: description }))] }), showChevron && (_jsx("div", { className: "simple-card__linkIcon", children: _jsx(IconChevron, {}) }))] }));
    }
    return (_jsxs("div", { className: `simple-card  ${onClick !== undefined ? "simple-card-clickable" : ""}`, onClick: () => onClick && onClick(), style: { width: width }, children: [Icon !== undefined && (_jsx("div", { className: "simple-card__icon-wrapper", children: Icon })), _jsxs("div", { className: "simple-card__content", children: [_jsx("h2", { className: "simple-card__content__title", children: title }), description && (_jsx("p", { className: "simple-card__content__description", children: description }))] }), chevron && (_jsx("div", { className: "simple-card__linkIcon", children: _jsx(IconChevron, {}) }))] }));
};
