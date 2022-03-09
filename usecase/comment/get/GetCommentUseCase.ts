import {CommentUseCaseModel} from "../CommentUseCaseModel";

interface GetCommentUseCase {
    getAllByArticleId(articleId: string): Promise<CommentUseCaseModel[]>
}

export default GetCommentUseCase
