const safeMod = (n: number, mod: number) => ((n % mod) + mod) % mod;

type Color = string;
type CircleGradient = [Color, Color]

// const LogoCirclesWithColors: Record<number, CircleGradient> = {
//     0: ['#C7432E', '#D6803B'],
//     1: ['#DB9349', '#ECDE5A'],
//     2: ['#DEE669', '#B5F289'],
//     3: ['#A6F398', '#8BB9FE'],
//     4: ['#4B4EB1', '#6E83EC'],
//     5: ['#4AB3FA', '#FFB29F'],
// }

const LogoCirclesWithColors: Record<number, CircleGradient> = {
    0: ['#A6F398', '#6E83EC'],
    1: ['#A6F398', '#6E83EC'],
    2: ['#A6F398', '#6E83EC'],
    3: ['#A6F398', '#6E83EC'],
    4: ['#A6F398', '#6E83EC'],
    5: ['#A6F398', '#6E83EC'],
}

interface LogoAnimatedProps {
    offset?: number;
    rotation?: number;
}

export default function LogoAnimated({ offset = 20, rotation = -90 }: LogoAnimatedProps) {
    const offsetX = 100 + offset;
    const totalCirclesCount = Object.keys(LogoCirclesWithColors).length;
    const rotationStep = 360 / totalCirclesCount;

    return (
        <div className="relative w-full h-full min-w-50 min-h-50">
            <svg viewBox="0 0 200 200" transform={`rotate(${rotation})`}>
                {Object.entries(LogoCirclesWithColors).map(([id, [start, end]]) => (
                    <g>
                        <linearGradient id={`gradient-${id}`}>
                            <stop offset="0%" stopColor={start} />
                            <stop offset="100%" stopColor={end} />
                        </linearGradient>

                        <mask id={`mask-${id}`}>
                            <g transform={`rotate(${parseInt(id) * rotationStep}, 100, 100)`}>
                                <rect x="0" y="0" width="200" height="200" fill="white" />
                                <circle id={`mask-circle-${id}`} cx={offsetX} cy={100} r={50} fill="black" />
                            </g>
                        </mask>

                        <g mask={`url(#mask-${safeMod((parseInt(id) + 1), totalCirclesCount)})`}>
                            <circle id={`circle-${id}`} cx={offsetX} cy={100} r={50} fill={`url(#gradient-${id})`} transform={`rotate(${parseInt(id) * rotationStep}, 100, 100)`} />
                        </g>
                    </g>
                ))}
            </svg>
        </div>
    )
}