import React from "react"

export default function Confetti(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="hover:bg-emerald-500 hover:border-emerald-400 bg-white/10 border border-white/10 text-white px-[16px] py-[7px] text-[16px] rounded-[5px] duration-300 active:duration-100 active:scale-[95%] scale-[100%] cursor-pointer font-inter"
            onClick={ props.onClick }
        >
            { props.children }
        </button>
    )
}