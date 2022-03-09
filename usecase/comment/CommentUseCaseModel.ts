import {Comment, Reply} from "../../models/comment/Comment";

export class CommentUseCaseModel {
    constructor(
        public id: string,
        public articleId: string,
        public body: string,
        public replies: ReplyUseCaseModel[],
        public createdAt: string,
        public modifiedAt: string,
    ) {}

    static toJson(target: CommentUseCaseModel): any
    static toJson(target: CommentUseCaseModel[]): any
    static toJson(target: any) {
        return JSON.parse(JSON.stringify(target))
    }

    static fromComment(comment: Comment) {
        return new CommentUseCaseModel(
            comment.id,
            comment.articleId,
            comment.body,
            comment.replies.map((reply) => ReplyUseCaseModel.fromReply(reply)),
            comment.createdAt,
            comment.modifiedAt,
        )
    }
}

export class ReplyUseCaseModel {
    constructor(
        public id: string,
        public commentId: string,
        public body: string,
        public createdAt: string,
        public modifiedAt: string,
    ) {}

    static toJson(target: ReplyUseCaseModel): any
    static toJson(target: ReplyUseCaseModel[]): any
    static toJson(target: any) {
        return JSON.parse(JSON.stringify(target))
    }

    static fromReply(reply: Reply) {
        return new ReplyUseCaseModel(
            reply.id,
            reply.commentId,
            reply.body,
            reply.createdAt,
            reply.modifiedAt,
        )
    }
}
