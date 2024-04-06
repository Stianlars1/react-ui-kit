export const getIcon = (icon: string | React.ReactNode) => {
  console.log("icon", icon);
  if (typeof icon === "string") {
    return <img src={icon} alt="icon" />;
  }

  if (typeof icon === "function") {
    const Icon = () => icon;
    return <Icon />;
  }

  return icon;
};
