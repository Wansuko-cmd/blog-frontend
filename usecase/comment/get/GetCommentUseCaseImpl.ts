import GetCommentUseCase from "./GetCommentUseCase";
import RepositoryTypes from "../../../di/RepositoryTypes";
import CommentRepository from "../../../models/comment/CommentRepository";
import {inject, injectable} from "tsyringe";
import {CommentUseCaseModel} from "../CommentUseCaseModel";

@injectable()
class GetCommentUseCaseImpl implements GetCommentUseCase {

    constructor(@inject(RepositoryTypes.CommentRepository) private commentRepository: CommentRepository) {}

    async getAllByArticleId(articleId: string): Promise<CommentUseCaseModel[]> {
        return await this.commentRepository.getAllByArticleId(articleId)
            .then((comments) =>
                comments.map((comment) =>
                    CommentUseCaseModel.fromComment(comment)
                )
            );
    }
}

export default GetCommentUseCaseImpl
