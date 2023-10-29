"use client"
import clsx from "clsx";

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}


const Button:React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled,
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(`
                flex
                justify-center
                rounded-md
                px-3
                py-2
                text-sm
                font-semibold
                focus-visible:ring-2
                focus-visible:ring-offset-2
                focus-visible:ring-blue-500
                text-white
                `,
                fullWidth && 'w-full',
                secondary && 'bg-gray-900 text-white hover:bg-gray-700',
                danger && 'bg-red-500 hover:bg-red-600',
                disabled && 'opacity-50 cursor-not-allowed',
                !secondary && !danger && 'bg-blue-500 hover:bg-blue-600',
            )}
        >
            {children}
        </button>
    );
};
export default Button;