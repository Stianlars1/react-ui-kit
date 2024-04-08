import { IconChevron } from "../../../assets/icons/icons";
import "../../../styles/global.css";
import "./css/simpleCard.css";
import { SimpleCardProps } from "./types/simpleCardTypes";
import { getIcon } from "./utils/utils";

export const SimpleCard = ({
  title,
  description,
  icon,
  href = undefined,
  onClick,
  width,
  chevron,
}: SimpleCardProps) => {
  const Icon = icon ? getIcon(icon) : undefined;
  if (href) {
    const showChevron = chevron === undefined ? true : chevron;
    return (
      <a
        href={href}
        className="simple-card simple-card-clickable"
        onClick={() => onClick && onClick()}
        style={{ width: width }}
      >
        {Icon !== undefined && (
          <div className="simple-card__icon-wrapper">{Icon}</div>
        )}

        <div className="simple-card__content">
          {<h2 className="simple-card__content__title">{title}</h2>}
          {description && (
            <p className="simple-card__content__description">{description}</p>
          )}
        </div>

        {showChevron && (
          <div className="simple-card__linkIcon">
            <IconChevron />
          </div>
        )}
      </a>
    );
  }

  return (
    <div
      className={`simple-card ${
        onClick !== undefined ? "simple-card-clickable" : ""
      }`}
      onClick={() => onClick && onClick()}
      style={{ width: width }}
    >
      {Icon !== undefined && (
        <div className="simple-card__icon-wrapper">{Icon}</div>
      )}

      <div className="simple-card__content">
        {<h2 className="simple-card__content__title">{title}</h2>}
        {description && (
          <p className="simple-card__content__description">{description}</p>
        )}
      </div>

      {chevron && (
        <div className="simple-card__linkIcon">
          <IconChevron />
        </div>
      )}
    </div>
  );
};
