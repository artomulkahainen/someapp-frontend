import { CSSProperties } from 'react';

interface ITextProps {
    children: string;
    className?: string;
    strong?: boolean;
    style?: CSSProperties;
    variant?: 'h1' | 'h2' | 'h3';
}

const Text = ({ children, className, strong, style, variant }: ITextProps) => {
    const childrenToRender = strong ? <strong>{children}</strong> : children;

    if (variant === 'h1') {
        return (
            <h1 className={className} style={{ ...style }}>
                {childrenToRender}
            </h1>
        );
    }

    if (variant === 'h2') {
        return (
            <h2 className={className} style={{ ...style }}>
                {childrenToRender}
            </h2>
        );
    }

    if (variant === 'h3') {
        return (
            <h3 className={className} style={{ ...style }}>
                {childrenToRender}
            </h3>
        );
    }

    return (
        <p className={className} style={{ ...style }}>
            {childrenToRender}
        </p>
    );
};

export default Text;
