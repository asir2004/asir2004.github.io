type BlueprintBorderProps = {
    color?: string;
    expandInifinitely?: boolean;
  };
  
  export default function BlueprintBorder({
    color = 'gray-200',
    expandInifinitely = false,
  }: BlueprintBorderProps) {
    // 根据 expandInifinitely 动态设置类名
    const horizontalGradient = expandInifinitely
      ? `bg-${color}`
      : `bg-gradient-to-r from-${color}/0 via-${color}/100 to-${color}/0`;
  
    const verticalGradient = expandInifinitely
      ? `bg-${color}`
      : `bg-gradient-to-t from-${color}/0 via-${color}/100 to-${color}/0`;
  
    return (
      <>
        {/* 顶部水平线条 */}
        <div
          className={`absolute top-[-1px] left-[calc(-50vw+50%)] w-[100vw] h-px ${horizontalGradient}`}
        />
  
        {/* 底部水平线条 */}
        <div
          className={`absolute bottom-[-1px] left-[calc(-50vw+50%)] w-[100vw] h-px ${horizontalGradient}`}
        />
  
        {/* 左侧垂直线条 */}
        <div
          className={`absolute top-[calc(-50vh+50%)] left-[-1px] h-[100vh] w-px ${verticalGradient}`}
        />
  
        {/* 右侧垂直线条 */}
        <div
          className={`absolute top-[calc(-50vh+50%)] right-[-1px] h-[100vh] w-px ${verticalGradient}`}
        />
      </>
    );
  }