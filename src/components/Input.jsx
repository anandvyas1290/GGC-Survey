export const Input = ({
    label,
    type,
    placeholder,
    value,
    name,
    className,
    errMsg,
    onChange,
    prefix,
}) => {
    return (
        <div className="flex flex-col">
            {label ? (
                <label className="px-1 py-1 text-sm font-bold text-gray-600">
                    {label}
                </label>
            ) : null}
            <input
                value={value}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className={`relative w-full rounded-full !px-5 !py-2.5 !outline-none border-none bg-gray-100 ${className}`}
                prefix={prefix}
            />
            {errMsg && (
                <span className=" text-xs pl-5 text-red-500">{errMsg}</span>
            )}
        </div>
    );
};

export const Textarea = ({ value, placeholder, name, onChange, errMsg }) => {
    return (
        <>
            <textarea
                value={value}
                name={name}
                placeholder={placeholder}
                id=""
                cols="30"
                rows="10"
                onChange={onChange}
                className="w-full border-[1px] border-gray-200 relative rounded-xl h-40 px-5 outline-none  bg-gray-100"
            />
            {errMsg && (
                <span className="text-xs pl-5 text-red-500">{errMsg}</span>
            )}
        </>
    );
};
