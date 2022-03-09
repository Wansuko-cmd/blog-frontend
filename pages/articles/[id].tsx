import {GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage} from "next";
import GetArticleUseCase from "../../usecase/article/get/GetArticleUseCase";
import {container} from "../../di/Registry";
import UseCaseTypes from "../../di/UseCaseTypes";
import ArticleUseCaseModel from "../../usecase/article/ArticleUseCaseModel";
import {CommentUseCaseModel, ReplyUseCaseModel} from "../../usecase/comment/CommentUseCaseModel";
import GetCommentUseCase from "../../usecase/comment/get/GetCommentUseCase";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const ArticleIndex: NextPage<Props> = (props) => {
    return (
        <>
            {props.article.title}
            {props.comments.map((comment: CommentUseCaseModel, index: number) => (
                <div key={index}>
                    {comment.body}
                    {comment.replies.map((reply: ReplyUseCaseModel) => (
                        <div key={reply.id} className='bg-red-400'>
                            {reply.body}
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

export default ArticleIndex

export const getServerSideProps: GetServerSideProps = async ({ params }: GetServerSidePropsContext) => {

    const articleId = params?.id?.toString()
    if(articleId == null) return { notFound: true }

    const getArticleUseCase: GetArticleUseCase = container.resolve<GetArticleUseCase>(UseCaseTypes.GetArticleUseCase)
    const article: ArticleUseCaseModel = await getArticleUseCase.getById(articleId)
        .then((article) => ArticleUseCaseModel.toJson(article))

    const getCommentUseCase: GetCommentUseCase = container.resolve<GetCommentUseCase>(UseCaseTypes.GetCommentUseCase)
    const comments: CommentUseCaseModel[] = await getCommentUseCase.getAllByArticleId(articleId)
        .then((comments) => CommentUseCaseModel.toJson(comments))

    return {
        props: {
            article: article,
            comments: comments,
        }
    }
}
