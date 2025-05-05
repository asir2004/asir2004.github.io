export default function H2({ children }: any) {
    const lines = typeof children === 'string' ? children.split('\n') : [children];

    return (
        <h2>
            {children}
        </h2>
    );
}