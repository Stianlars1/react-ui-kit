import { ReactElement } from "react";
import "./css/loader.css";
import { LoaderType } from "./loaderTypes";
export const Loader: React.FC<LoaderType> = ({
  widthAndHeight,
}): ReactElement => {
  const width = widthAndHeight || 24;

  const widthAndHeightInPixels = `${width}px`;
  return (
    <div
      className="loader"
      style={{ width: widthAndHeightInPixels, height: widthAndHeightInPixels }}
    ></div>
  );
};
