import { useEffect } from 'react'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import shell from 'highlight.js/lib/languages/shell'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('shell', shell)
hljs.configure({ ignoreUnescapedHTML: true })

export default function Check(props: React.HTMLAttributes<HTMLButtonElement>) {

    useEffect(() => {
        hljs.highlightAll()
    })

    return (
        <div className="relative w-full max-h-80 squircle squircle-md backdrop-blur-5xl border border-white/10 overflow-y-scroll no-scrollbar-but-scroll">
            <pre>
                <code className={ props.className }>
                    { props.children }
                </code>
            </pre>
        </div>
    )

}