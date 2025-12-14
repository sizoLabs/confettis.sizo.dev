import React from "react"

export default function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a 
            className="bg-white/10 hover:bg-white/20 duration-300 border border-white/20 hover:border-white/50 text-white text-[16px] font-inter-bold mr-2 px-4 py-3 rounded-[4px]"
            href={ props.href }
            target="_blank"
            {...props}
        >
            { props.children }
        </a>
    )
}