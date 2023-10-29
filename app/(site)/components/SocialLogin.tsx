import { IconType } from "react-icons";
import clsx from "clsx";

interface SocialLoginProps {
    icon: IconType;
    onClick: () => void;
}
const SocialLogin:React.FC<SocialLoginProps> = ({
    icon: Icon,
    onClick,
}) => {
    return (
        <button 
        type="button"
        onClick={onClick}
        className="
            w-full
            justify-center
            rounded-md
            inline-flex
            bg-white
            px-4
            py-2
            text-gray-500
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
            hover:bg-gray-50
            focus:outline-offset-0"
        >
            <Icon/> 
        </button>
    );
};
export default SocialLogin;