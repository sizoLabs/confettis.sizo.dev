export default function Background() {
    return (
        <>
            <div className="absolute inset-x-0 top-0 w-full h-screen lg:h-auto -z-1 backdrop-blur-2xl">
                <img className="h-200 min-w-200 lg:w-full lg:h-auto opacity-30 lg:-mt-100 lg:-ml-80" src="/images/hero.webp" />
            </div>
        </>
    )
}