"use client"

import { FullMessageType } from "@/app/types";
import { useState, useRef, useEffect } from "react";
import  useConversation  from "@/app/hooks/useConversation";
import MessageBox from "./MessageBox";
import axios from "axios";
import { pusherClient } from "@/app/libs/pusher";
import { find, set } from "lodash";

interface BodyBoxChatProps {
    initialMessage: FullMessageType[]; 
}

const BodyBoxChat:React.FC<BodyBoxChatProps> = ({
    initialMessage
}) => {
    const [messages, setMessages] = useState(initialMessage);
    const bottonRef = useRef<HTMLDivElement>(null);
    const {conversationId} = useConversation();

    useEffect(() => {
        axios.post(`/api/conversation/${conversationId}/seen`)
    }, [conversationId]);

    useEffect(() => {
         pusherClient.subscribe(conversationId);
         bottonRef?.current?.scrollIntoView();
         const messageHandler = (message: FullMessageType) => {
            axios.post(`/api/conversation/${conversationId}/seen`)
            setMessages((current) => {
                if (find(current, {id: message.id})) {
                    return current;
                }
                return [...current, message];
            })
            bottonRef?.current?.scrollIntoView();
            
        }

        const updateMessageHandler = (newMessage: FullMessageType) => {
            setMessages((current) => current.map((cureentMessage)=> {
                if (cureentMessage.id === newMessage.id) {
                    return newMessage;
                }
                return cureentMessage;
            }))
        }

         pusherClient.bind('messages:new', messageHandler);
         pusherClient.bind('message:update', updateMessageHandler);

         return () => {
            pusherClient.unsubscribe(conversationId);
            pusherClient.unbind('messages:new', messageHandler);
            pusherClient.unbind('message:update', updateMessageHandler);
         }
    }, [conversationId]);
    
    return (
        <div className="h-full flex-2 overflow-y-auto">
            {messages.map((message, index) => (
                <MessageBox
                    isLast={index === messages.length - 1}
                    key={message.id}
                    data={message}     
                />
            ))}
            <div ref={bottonRef} className="pt-24"/>
        </div>
    )
}

export default BodyBoxChat