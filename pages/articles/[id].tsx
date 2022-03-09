import {GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage} from "next";
import GetArticleUseCase from "../../usecase/article/get/GetArticleUseCase";
import {container} from "../../di/Registry";
import UseCaseTypes from "../../di/UseCaseTypes";
import ArticleUseCaseModel from "../../usecase/article/ArticleUseCaseModel";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const ArticleIndex: NextPage<Props> = (props) => {
    return (
        <>
            {props.article.title}
        </>
    )
}

export default ArticleIndex

export const getServerSideProps: GetServerSideProps = async ({ params }: GetServerSidePropsContext) => {

    const articleId: string = params?.id?.toString() ?? ""

    const getArticleUseCase: GetArticleUseCase = container.resolve<GetArticleUseCase>(UseCaseTypes.GetArticleUseCase)
    const article: ArticleUseCaseModel = await getArticleUseCase.getById(articleId)
        .then((article) => article.toJson())

    return { props: { article: article } }
}
