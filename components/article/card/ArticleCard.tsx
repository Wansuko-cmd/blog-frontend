import Image from 'next/image'
import BaseCard from "../../common/BaseCard";
import ModifiedAt from "../common/ModifiedAt";

interface ArticleCardProps{
    src: string
    alt: string
    title: string
    modifiedAt: string
}

const ArticleCard = (props: ArticleCardProps) => {
    return (
        <>
            <BaseCard className='w-96 h-72'>
                <Image src={props.src} alt={props.alt} width={400} height={200}/>
                <div className='m-4 mt-2'>
                    <div className='text-2xl break-words'>{props.title}</div>
                    <ModifiedAt className='justify-end' modifiedAt={props.modifiedAt} />
                </div>
            </BaseCard>
        </>
    )
}

export default ArticleCard
