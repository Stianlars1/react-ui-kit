import { ReactElement } from "react";
import "../../styles/global.css";
import "./css/loader.css";
import { LoaderType } from "./loaderTypes";
export const Loader: React.FC<LoaderType> = ({
  widthAndHeight,
}): ReactElement => {
  const width = widthAndHeight || "1em";

  return <div className="loader " style={{ width: width, height: width }} />;
};
