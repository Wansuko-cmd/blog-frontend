import {ReactNode} from "react";

interface BackCardProps {
    children: ReactNode,
    className?: string,
}

const BaseCard = (props: BackCardProps) => {
    return (
        <div className={`bg-background rounded-md shadow-md ${props.className}`}>
            { props.children }
        </div>
    )
}

export default BaseCard
