import type {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import IndexArticleCard from "../components/index/article/IndexArticleCard";
import IndexArticlesHeading from "../components/index/article/IndexArticlesHeading";
import LayoutIntroductionCard from "../components/layout/sidebar/LayoutIntroductionCard";
import Article from "../models/article/Article";
import {container} from "../di/Registry";
import GetArticleUseCase from "../usecase/article/get/GetArticleUseCase";
import UseCaseTypes from "../di/UseCaseTypes";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Home: NextPage<Props> = (props) => {

    return (
        <>
            {props.articles?.map((article: Article, index: number) => (
                <div key={index}>
                    {article.createdAt}
                </div>
            ))}
            <div className='m-5'>
                <IndexArticlesHeading text='Title'/>
                <IndexArticleCard src='/dev/Kotlin.png' alt='kotlin' title='Hello' modifiedAt='modifiedAt'/>
            </div>

            <LayoutIntroductionCard/>
        </>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
    const getArticleUseCase: GetArticleUseCase = container.resolve<GetArticleUseCase>(UseCaseTypes.GetArticleUseCase)
    const articles: Article[] = await getArticleUseCase.getAll()
        .then((articles) =>
            articles.map((article) =>
                article.toJson()
            )
        )
    return { props: { articles: articles } }
}
