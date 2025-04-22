type BlueprintBorderProps = {
    color: string;
}

export default function BlueprintBorder({color = 'gray-200'}: BlueprintBorderProps) {
    return (
        <>
            {/* 顶部水平线条 */}
            <div className={`absolute top-[-1px] left-[calc(-50vw+50%)] w-[100vw] h-px bg-${color}`} />

            {/* 底部水平线条 */}
            <div className={`absolute bottom-[-1px] left-[calc(-50vw+50%)] w-[100vw] h-px bg-${color}`} />

            {/* 左侧垂直线条 */}
            <div className={`absolute top-[calc(-50vh+50%)] left-[-1px] h-[100vh] w-px bg-${color}`} />

            {/* 右侧垂直线条 */}
            <div className={`absolute top-[calc(-50vh+50%)] right-[-1px] h-[100vh] w-px bg-${color}`} />
        </>
    )
}