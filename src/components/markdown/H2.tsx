export default function H2({ children }: any) {
    return (
        <h2 className="relative inline-flex after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-black after:transform after:scale-x-0 after:origin-right after:transition-transform after:duration-[450ms] after:ease-[cubic-bezier(0.55,0,0.1,1)] hover:after:origin-left hover:after:scale-x-100">
            {children}
        </h2>
    );
}