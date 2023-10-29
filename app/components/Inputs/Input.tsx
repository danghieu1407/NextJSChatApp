"use client"
import clsx from "clsx";
import { FieldError, FieldValues, UseFormRegister} from "react-hook-form"

interface InputProps {
    label: string;
    id: string;
    type: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldError;
    required?: boolean;
    disabled?: boolean;
}
const Input:React.FC<InputProps> = ({
    label,
    id,
    type,
    register,
    errors,
    required,
    disabled,
}) => {
    return (
        <div>
            <label 
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor={id}>
                {label}
            </label>
            <div className="mt-2">
                <input 
                id={id}
                type={type}
                {...register(id, {required})}
                disabled={disabled}
                className={clsx(`
                    form-input
                    block
                    w-full
                    rounded-md
                    boder-0
                    py-1.5
                    text-gray-900
                    shadow-sm
                    ring-1
                    ring-gray-300
                    ring-inset
                    placeholder-gray-400
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-indigo-500
                    sm:text-sm
                    sm:leading-6`,
                    errors[id] && 'ring-red-500')}
                />
            </div>
        </div>
    );
}
export default Input;