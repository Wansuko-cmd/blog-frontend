import {ReactNode} from "react";

interface BackCardProps {
    children: ReactNode,
    className?: string,
}

const BaseCard = (props: BackCardProps) => {
    return (
        <div className={`bg-card rounded-lg overflow-hidden shadow-lg border border-gray-400 ${props.className}`}>
            { props.children }
        </div>
    )
}

export default BaseCard
