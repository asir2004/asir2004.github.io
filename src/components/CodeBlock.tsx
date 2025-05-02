type CodeBlockProps = {
    children?: any;
}

export default function CodeBlock({ children }: CodeBlockProps) {
    return (
        <div className='text-wrap bg-gray-50'>
            {children}
        </div>
    )
}