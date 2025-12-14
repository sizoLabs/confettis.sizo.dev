import Logo from '@component/ui/logo'

export default function Header() {

    return (
        <div className="relative z-10 lg:mx-auto lg:max-w-[900px] mb-[20px] lg:mb-[50px]">
            <div className="lg:pt-[100px]">
                <Logo />
            </div>
        </div>
    )

}
