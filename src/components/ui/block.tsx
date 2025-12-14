import Confetti from "@component/ui/buttons/confetti"
import Code from '@component/ui/code'

type Props = {
    children: React.ReactNode
    title: string
    description: string
    toggle?: boolean
    callback: () => void
}

export default function ConfettiBlock(props: Props) {
	return (
        <div className="relative">
            <div className="absolute top-0 h-full w-full z-[-10]">
                <img className="w-full h-full opacity-[0.7]" src="/images/example.webp" />
            </div>
            <div className="relative p-5 lg:p-0">
                <div className="bg-white/5 border border-white/5 rounded-md shadow-xl p-[15px] md:p-[50px] mb-[80px] z-10 relative">

                    <div className="text-[16px] mt-[15px] text-white font-inter w-[100%] text-left">

                        <div className="text-[16px] mt-[-5px] text-white font-inter float-right">
                            <Confetti onClick={ props.callback }>
                                { props.toggle && (
                                    <>
                                        <i className="ti ti-confetti"></i> Toggle!
                                    </>
                                ) }
                                { !props.toggle && (
                                    <>
                                        <i className="ti ti-confetti"></i> Test!
                                    </>
                                ) }
                            </Confetti>
                        </div>

                        <h2 className="text-[28px] font-inter-bold">
                            { props.title }
                            <span className="text-[14px] font-inter block mt-[10px]">
                                { props.description }
                            </span>
                        </h2>

                        <Code className="language-javascript">
                            { props.children }
                        </Code>

                    </div>

                </div>
            </div>
        </div>
	)

}