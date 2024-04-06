/// <reference types="react" />
export type SimpleCardProps = {
    title: string;
    description?: string;
    icon?: string | React.ReactNode;
    href?: string;
    width?: "fit-content" | "100%";
    chevron?: boolean | undefined;
    onClick?: () => void;
};
