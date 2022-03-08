import type {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import IndexArticleCard from "../components/index/article/IndexArticleCard";
import IndexArticlesHeading from "../components/index/article/IndexArticlesHeading";
import LayoutIntroductionCard from "../components/layout/sidebar/LayoutIntroductionCard";
import {container} from "../di/Registry";
import GetArticleUseCase from "../usecase/article/get/GetArticleUseCase";
import UseCaseTypes from "../di/UseCaseTypes";
import ArticleUseCaseModel from "../usecase/article/ArticleUseCaseModel";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Home: NextPage<Props> = (props) => {

    return (
        <>
            <IndexArticlesHeading text='Title'/>
            {props.articles?.map((article: ArticleUseCaseModel, index: number) => (
                <div key={index} className='m-5'>
                    <IndexArticleCard src='/dev/Kotlin.png' alt='kotlin' title={article.title} modifiedAt={article.modifiedAt}/>
                </div>
            ))}
            <LayoutIntroductionCard/>
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
