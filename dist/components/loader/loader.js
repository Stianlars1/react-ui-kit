import { jsx as _jsx } from "react/jsx-runtime";
import "./css/loader.css";
export const Loader = ({ widthAndHeight, }) => {
    const width = widthAndHeight || 24;
    const widthAndHeightInPixels = `${width}px`;
    return (_jsx("div", { className: "loader", style: { width: widthAndHeightInPixels, height: widthAndHeightInPixels } }));
};
