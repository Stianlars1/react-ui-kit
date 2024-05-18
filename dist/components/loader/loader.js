import { jsx as _jsx } from "react/jsx-runtime";
import "../../styles/global.css";
import "./css/loader.css";
export const Loader = ({ widthAndHeight, }) => {
    const width = widthAndHeight || "1em";
    return (_jsx("div", { className: "loader ui-kit", style: { width: width, height: width } }));
};
