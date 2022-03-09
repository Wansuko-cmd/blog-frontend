import {Comment, Reply} from "../../models/comment/Comment";

export class CommentResponse {
    constructor(
        public id: string,
        public article_id: string,
        public body: string,
        public replies: ReplyResponse[],
        public created_at: string,
        public modified_at: string,
    ) {
    }

    static toComment(comment: CommentResponse) {
        return new Comment(
            comment.id,
            comment.article_id,
            comment.body,
            comment.replies.map((reply) => ReplyResponse.toReply(reply)),
            comment.created_at,
            comment.modified_at
        )
    }
}

export class ReplyResponse {
    constructor(
        public id: string,
        public comment_id: string,
        public body: string,
        public created_at: string,
        public modified_at: string,
    ) {
    }

    static toReply(reply: ReplyResponse) {
        return new Reply(
            reply.id,
            reply.comment_id,
            reply.body,
            reply.created_at,
            reply.modified_at,
        )
    }
}
