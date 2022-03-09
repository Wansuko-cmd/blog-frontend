import Image from 'next/image'
import Link from 'next/link';
import BaseCard from "../../common/BaseCard";

interface LayoutIntroductionCardProps {
    className: string | null
}

const LayoutIntroductionCard = (props: LayoutIntroductionCardProps) => {
    return (
        <>
            <BaseCard className={props.className ?? ""}>
                <div className='flex'>
                    <Image className='rounded-full' src='/img/バグリー犬.jpg' alt='バグリー犬' width={150} height={150} />
                    <div>
                        <div className='text-3xl font-bold'>バグリー犬</div>
                        アイコン
                    </div>
                </div>

                <div className='text-default text-lg font-medium'>
                    紹介文紹介文紹介文
                </div>

                <div className='text-lg text-right text-blue-400 font-medium'>
                    <Link href='#'>詳しくはこちら</Link>
                </div>

            </BaseCard>
        </>
    )
}

export default LayoutIntroductionCard
