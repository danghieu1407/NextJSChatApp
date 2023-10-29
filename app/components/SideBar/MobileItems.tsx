"use client"
import Link from "next/link";
import clsx from "clsx";

interface MobileItemsProps {
    icon: React.ReactNode | any;
    href: string;
    active?: boolean;
    onClick?: () => void;
}

const MobileItems:React.FC<MobileItemsProps> = ({
    icon: Icon,
    href,
    active,
    onClick,
   }) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }
    return (
        <Link
         onClick={onClick}
         className={clsx(`
            group
            flex
            gap-x-3
            text-sm
            leading-6
            font-semibold
            w-full
            justify-center
            hover:text-black
            hover:bg-gray-200
         `, active && 'bg-gray-400 text-white')}
         href={href}>
            <Icon></Icon>
        </Link>
    )
}   
export default MobileItems;