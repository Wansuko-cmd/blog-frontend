import IReply from "./IReply";

interface IComment {
    id: string
    articleId: string
    body: string
    replies: IReply[]
    cratedAt: string
    modifiedAt: string
}

export default IComment
