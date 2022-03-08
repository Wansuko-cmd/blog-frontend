import Image from 'next/image'

interface ModifiedAtProps {
    modifiedAt: string
    className?: string
}

const ModifiedAt = (props: ModifiedAtProps) => {
    return (
        <div className={`flex text-thin ${props.className}`}>
            <Image src='/img/common/modified_at_icon.svg' alt='modifiedAt' width={24} height={24}/>
            {props.modifiedAt}
        </div>
    )
}

export default ModifiedAt
