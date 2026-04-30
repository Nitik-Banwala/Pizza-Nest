const Button = ({ text, className, onClick ,variants = "first" }) => {
    const variant = {
        first : "bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] text-white active:border-transparent rounded-lg active:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] font-semibold hover:border-white transition-all duration-500 border border-transparent hover:bg-transparent hover:bg-none",
        second : "border border-white active:border-[#FEFEFE] active:bg-transparent active:bg-none px-8 py-4 rounded-xl font-semibold text-white hover:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] transition-all hover:border-transparent duration-500",
        third : "'w-9 h-9 rounded-full p-3 border-[1.5px] border-[#ddd] bg-white flex items-center justify-center text-[15px] text-[#555] cursor-pointer hover:bg-[#e8601a] hover:border-[#e8601a] hover:text-white transition-all'"
    }
    return (
       
        <button
            onClick={onClick}
            className={`cursor-pointer duration-500 transform ${className} ${variant[variants]}`}
        >
            {text}
        </button>
    );
};

export default Button;