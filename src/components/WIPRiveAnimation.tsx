import { useRive } from "@rive-app/react-canvas"

export default function WIPRiveAnimation() {
    const { rive, RiveComponent } = useRive({
        src: '/riveAnimations/wip_v1.riv',
        stateMachines: 'State Machine 1',
        autoplay: true,
    })

    const handleMouseEnter = () => {
        if (rive) {
            rive.setInputState("State Machine 1", "Dev Mode", true);
        }
    };

    const handleMouseLeave = () => {
        if (rive) {
            rive.setInputState("State Machine 1", "Dev Mode", false); // Replace 'isHover' with your input name
        }
    };

    return (
        <RiveComponent
            className={`w-full h-full`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    )
}