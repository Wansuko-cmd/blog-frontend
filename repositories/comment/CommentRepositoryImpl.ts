import CommentRepository from "../../models/comment/CommentRepository";
import {Comment, Reply} from "../../models/comment/Comment";
import axios from "axios";
import {CommentResponse} from "./CommentResponse";
import {injectable} from "tsyringe";

@injectable()
class CommentRepositoryImpl implements CommentRepository {
    getAllByArticleId(articleId: string): Promise<Comment[]> {
        return axios.get<CommentResponse[]>(`${process.env.BACKEND_URL}/articles/${articleId}/comments`)
            .then((response) => response.data
                .map((data) => CommentResponse.toComment(data)));
    }

    insertComment(comment: Comment): void {
    }

    insertReply(reply: Reply): void {
    }
}

export default CommentRepositoryImpl
