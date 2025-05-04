import { useRive } from "rive-react";

export default function WIPRiveAnimation() {
    const { rive, RiveComponent } = useRive({
        src: "/riveAnimations/wip_v1.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
    });

    const handleMouseEnter = () => {
        if (rive) {
            // 获取状态机的输入
            const inputs = rive.stateMachineInputs("State Machine 1");
            // 找到名为 "Dev Mode" 的输入
            const devModeInput = inputs?.find((input) => input.name === "Dev Mode");
            // 如果输入存在且是布尔类型，设置为 true
            if (devModeInput) {
                devModeInput.value = true;
            }
        }
    };

    const handleMouseLeave = () => {
        if (rive) {
            // 获取状态机的输入
            const inputs = rive.stateMachineInputs("State Machine 1");
            // 找到名为 "Dev Mode" 的输入
            const devModeInput = inputs?.find((input) => input.name === "Dev Mode");
            // 如果输入存在且是布尔类型，设置为 false
            if (devModeInput) {
                devModeInput.value = false;
            }
        }
    };

    return (
        <RiveComponent
            className="w-full h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
}