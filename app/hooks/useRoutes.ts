import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { MessageCircle, User, LogOut  } from 'lucide-react';

import {signOut} from 'next-auth/react'
import useConversation from "./useConversation";

const useRoutes = () => {
    const pathname = usePathname();
    const {conversationId} = useConversation();

    const routes = useMemo(() => 
        [
            {
                label: 'Chat',
                href: '/conversation',
                icon: MessageCircle,
                active: pathname === '/conversation' || !!conversationId
            },
            {
                label: 'Profile',
                href: '/users',
                icon: User,
                active: pathname === '/users'
            },
            {
                label: 'LogOut',
                href: '#',
                icon: LogOut,
                onClick: () => signOut(),
                active: false
            }
        ], [pathname, conversationId]);
        
        return routes;


}

export default useRoutes;