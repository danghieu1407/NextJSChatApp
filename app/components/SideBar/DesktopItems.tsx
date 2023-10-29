"use client"
import clsx from "clsx";
import Link from "next/link";

interface DesktopItemsProps {
    icon: React.ReactNode | any;
    href: string;
    active: boolean;
    label: string;
    onClick?: () => void;
}
const DesktopItems:React.FC<DesktopItemsProps> = ({
    icon: Icon,
    href,
    active,
    label,
    onClick,
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
        console.log(label);
    }
    return (
        <li  className='pb-2' onClick={handleClick}>
            <Link href={href}
            className={
                clsx(`
                    group
                    flex
                    gap-x-3
                    rounded-md
                    p-3
                    text-sm
                    leading-6
                    text-gray-600
                    hover:text-black
                    hover:bg-gray-200
                `,
                active && 'bg-gray-400 text-white ')
            }>
                <Icon className="h-6 w-6 shrink-0" />
                <span className="sr-only">
                    {label}
                </span>
            </Link>
        </li>
    );
}
export default DesktopItems;