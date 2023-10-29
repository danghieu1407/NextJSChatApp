import React from "react";
import ConversationList from "./components/ConversationList";
import getConversation from "../actions/getConversation";
import SideBar from "../components/SideBar/Sidebar";
import getUsers from "../actions/getUsers";

export default async function ConversationLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const conversation = await getConversation();
    const users = await getUsers();

    return (
        <SideBar>
        <div className="h-full">
            <ConversationList users={users} Items={conversation}/>
            {children}
        </div>
        </SideBar>
    );
}