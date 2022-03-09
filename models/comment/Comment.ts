export class Comment {
    constructor(
        public id: string,
        public articleId: string,
        public body: string,
        public replies: Reply[],
        public createdAt: string,
        public modifiedAt: string,
    ) {}
}

export class Reply {
    constructor(
        public id: string,
        public commentId: string,
        public body: string,
        public createdAt: string,
        public modifiedAt: string,
    ) {}
}
