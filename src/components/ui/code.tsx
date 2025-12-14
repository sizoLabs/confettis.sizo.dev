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
        <div className="mt-[25px]">
            <pre>
                <code className={ props.className }>
                    { props.children }
                </code>
            </pre>
        </div>
    )

}