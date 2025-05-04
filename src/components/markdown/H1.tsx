export default function H1({ children }: any) {
    return (
        <>
            <h1>
                {children}
            </h1>
            <div className="h-[1px] bg-gray-300 w-full"></div>
        </>
    );
}