export default function InlineCode({ children }: any) {
    return (
        <span className="px-2 rounded-xs font-mono font-semibold bg-gray-300">{ children }</span>
    )
}