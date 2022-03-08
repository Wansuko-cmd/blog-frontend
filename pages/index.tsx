import type {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import BaseCard from "../components/common/BaseCard";
import IndexArticleCard from "../components/index/article/IndexArticleCard";
import IndexArticlesHeading from "../components/index/article/IndexArticlesHeading";
import LayoutIntroductionCard from "../components/layout/sidebar/LayoutIntroductionCard";
import ArticleRepositoryImpl from "../repositories/article/ArticleRepositoryImpl";
import Article from "../models/article/Article";

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
    const articleRepository = new ArticleRepositoryImpl()
    const articles: Article[] = await articleRepository.getAll().then((data) => JSON.parse(JSON.stringify(data)))
    return { props: { articles: articles } }
}
