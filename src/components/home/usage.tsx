import Code from '@component/ui/code'
import version from '@utils/version'

const v = await version()

const unpkgUrl = `https://unpkg.com/confettis@${v}/lib/confettis.min.js`
const localUrl = `/lib/confettis.min.js`

export default function Usage() {

    return (
        <div className="relative z-10 lg:mx-auto lg:max-w-[900px] mb-[20px] lg:mb-[50px]">


                <div className="relative p-5 lg:p-0">
                    <div className="p-[15px] md:p-[50px] mb-[80px] z-10 relative">

                        <div className="text-[16px] mt-[15px] text-white font-inter w-[100%] text-left">

                            <h2 className="text-[28px] md:text-[40px] font-inter-bold text-center">
                                Usage
                            </h2>


                            <div className="my-10">
                                <h2 className="text-[18px] font-inter-bold mb-[-15px]">Node.js</h2>
                                <Code className="language-shell">
                                    npm install confettis --save
                                </Code>
                                <Code className="language-javascript">
                                    import * as confetti from 'confettis'
                                </Code>
                            </div>

                            <div className="my-10">
                                <h2 className="text-[18px] font-inter-bold mb-[-15px]">Deno</h2>
                                <Code className="language-javascript">
                                    import * as confetti from 'https://esm.sh/confettis@{ v }'
                                </Code>
                            </div>

                            <div className="my-10">

                                <h2 className="text-[18px] font-inter-bold">Browser</h2>

                                <h2 className="text-[14px] font-inter font-normal mb-[-15px] mt-[15px]">CDN</h2>
                                <Code className="html">
                                    { `<script src="` + unpkgUrl + `"></script>` }
                                </Code>

                                <h2 className="text-[14px] font-inter font-normal mb-[-15px] mt-[20px]">Local</h2>
                                <Code className="html">
                                    { `<script src="` + localUrl + `"></script>` }
                                </Code>

                            </div>
                            
                        </div>

                    </div>
                </div>
                

        </div>
    )

}