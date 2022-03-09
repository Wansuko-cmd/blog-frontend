import Image from 'next/image'
import BaseCard from "../../common/BaseCard";
import ModifiedAt from "../../common/ModifiedAt";

interface IndexArticleCardProps{
    src: string
    alt: string
    title: string
    modifiedAt: string
}

const IndexArticleCard = (props: IndexArticleCardProps) => {
    return (
        <>
            <BaseCard>
                <Image src={props.src} alt={props.alt} width={400} height={200}/>
                <div className='m-4 mt-2'>
                    <div className='text-2xl break-words'>{props.title}</div>
                    <ModifiedAt className='justify-end' modifiedAt={props.modifiedAt} />
                </div>
            </BaseCard>
        </>
    )
}

export default IndexArticleCard
