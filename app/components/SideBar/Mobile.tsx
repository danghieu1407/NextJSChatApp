"use client"

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItems from "./MobileItems";

const Mobile = () => {
    const routes = useRoutes();
    const {isOpen} = useConversation();
    if (isOpen) {
        return null;
    }
    return (
        <div className="
        fixed
        justify-between
        w-full
        bottom-0
        z-40
        flex
        items-center
        bg-white
        border-t-[1px]
        lg:hidden">
            {routes.map((route) => (
                <MobileItems 
                    key={route.label}
                    href={route.href}
                    active={route.active}
                    icon={route.icon}
                    onClick={route.onClick}
                />

            ))}
        </div>
    )
}
export default Mobile;