"use client"
import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { set } from "date-fns";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import Modal from "@/app/components/Modal";
import { FiAlertTriangle } from "react-icons/fi";
import { Dialog } from "@headlessui/react";
import Button from "@/app/components/Button/Button";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const ConfirmModal: React.FC<ConfirmModalProps> = ({
    isOpen,
    onClose
}) => {
    const router = useRouter();
    const { conversationId } = useConversation();
    const [isLoading, setIsLoading] = useState(false);

    const onDelete = useCallback(() => {
        setIsLoading(true);
        axios.delete(`/api/conversation/${conversationId}`).then(() => {
            onClose();
            router.push('/conversation');
            router.refresh();
        })
            .catch(() => toast.error('Failed to delete conversation')).finally(() => {
                setIsLoading(false)
            })
    }, [conversationId, onClose, router])
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="sm:flex sm:items-center">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 items-center justify-center">
                    <FiAlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Delete Conversation
                    </Dialog.Title>
                    <div className="mt-2">
                        <p>
                            Are you sure you want to delete this conversation? All of your data will be permanently removed. This action cannot be undone.
                        </p>
                    </div>
                </div>
            </div>
        <div className="mt-5
        sm:mt-4 sm:flex
        sm:flex-row-reverse
        gap-2">
            <Button disabled={isLoading} danger onClick={onDelete}>
                Delete
            </Button>
            <Button disabled={isLoading} secondary onClick={onClose}>
                Cancel
            </Button>
        </div>
        </Modal>
    )
}
export default ConfirmModal