export const getButtonClasses = (variant, className, loading) => {
    const baseClass = "button transition-colors";
    const variantClass = `button--${variant}`;
    const loadingClass = loading ? "button--loading" : "";
    return `${baseClass} ${variantClass} ${className} ${loadingClass}`.trim();
};
