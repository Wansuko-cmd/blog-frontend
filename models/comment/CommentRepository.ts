import {Comment, Reply} from "./Comment";

interface CommentRepository {
    getAllByArticleId(articleId: string): Promise<Comment[]>

    insertComment(comment: Comment): void
    insertReply(reply: Reply): void
}

export default CommentRepository
