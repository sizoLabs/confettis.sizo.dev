import * as confetti from "confettis"

const props = {
    count: 10
}

export default function Home() {

    return (
        <>
            <div className="lg:max-w-[1200px] mx-auto">
                <div className="relative p-5 lg:p-0">

                    <div className="bg-[#00000040] rounded-md shadow-xl p-[15px] md:p-[50px] mb-[80px] z-10 relative">
                        <div className="text-[16px] mt-[15px] text-white font-inter w-[100%] text-left">

                            <input type="range" min="0" max="100" onChange={ changeRangeValue } value="0" className="editor-range" />

                            {  }

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

const createCanvas = () => {
    const canvas = document.createElement("canvas")

}

const changeRangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {

    const value = event.target.value;
   
    return value;
    
}