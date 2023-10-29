import getConversationId from "@/app/actions/getConversationById";
import getMessage from "@/app/actions/getMessage";
import EmptyState from "@/app/components/EmptyState";
import HeaderBoxChat from "./components/HeaderBoxChat";
import BodyBoxChat from "./components/BodyBoxChat";
import InputForm from "./components/Form";

interface IDPrams {
    conversationId: string;
} 

const ConversationId = async ({ params}: { params: IDPrams }) => {
    const conversation = await getConversationId(params.conversationId);
    const message = await getMessage(params.conversationId);
    if(!conversation) {
        return (
            <div className="lg:pl-80 h-screen">
                <div className="h-screen flex flex-col">
                    <EmptyState/>
                </div>
            </div>
        )
    }
    return (
        <div className="lg:pl-80 h-screen">
            <div className="h-screen flex flex-col">
               <HeaderBoxChat conversation={conversation}/>
               <BodyBoxChat initialMessage={message} />
               <InputForm />
            </div>
        </div>
    )
}
export default ConversationId