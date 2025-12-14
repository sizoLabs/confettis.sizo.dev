import React from "react"

export default function Test(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="hover:bg-[#ffcf69bf] bg-white/10 text-white px-[14px] py-[5px] text-[37px] rounded-[100px] duration-300 active:duration-100 active:scale-[95%] scale-[100%] cursor-pointer"
            onClick={ props.onClick }
        >
            { props.children }
        </button>
    )
}