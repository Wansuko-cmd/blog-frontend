import type {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import IndexArticleCard from "../components/index/article/IndexArticleCard";
import IndexArticlesHeading from "../components/index/article/IndexArticlesHeading";
import LayoutIntroductionCard from "../components/layout/sidebar/LayoutIntroductionCard";
import {container} from "../di/Registry";
import GetArticleUseCase from "../usecase/article/get/GetArticleUseCase";
import UseCaseTypes from "../di/UseCaseTypes";
import ArticleUseCaseModel from "../usecase/article/ArticleUseCaseModel";
import Link from 'next/link';
import BaseCard from "../components/common/BaseCard";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Home: NextPage<Props> = (props) => {

    return (
        <>
            <IndexArticlesHeading text='Title'/>
            <div className='grid grid-cols-4 gap-40'>
                <div className='col-span-3 grid grid-cols-2 gap-40 mx-40'>
                    {props.articles?.map((article: ArticleUseCaseModel, index: number) => (
                        <div key={index} className='col-span-1 m-5'>
                            <Link passHref={true} href={`articles/${article.id}`}>
                                <a>
                                    <IndexArticleCard src='/dev/Kotlin.png' alt='kotlin' title={article.title} modifiedAt={article.modifiedAt}/>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
                <LayoutIntroductionCard className='col-span-1'/>
            </div>



        </>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
    const getArticleUseCase: GetArticleUseCase = container.resolve<GetArticleUseCase>(UseCaseTypes.GetArticleUseCase)
    const articles: ArticleUseCaseModel[] = await getArticleUseCase.getAll()
        .then((articles) => ArticleUseCaseModel.toJson(articles) )
    return { props: { articles: articles } }
}
