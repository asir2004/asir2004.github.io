import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

type CodeBlockProps = {
    children?: any;
}

export default function CodeBlock({ children }: CodeBlockProps) {
    const codeRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [children]);

    return (
        <pre className="line-numbers bg-gray-900 text-white rounded-lg p-4">
            <code ref={codeRef} className={`language-javascript font-mono text-sm`} style={{ whiteSpace: 'pre-wrap' }}>
                {children}
            </code>
        </pre>
    )
}