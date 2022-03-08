class Article {

    public thumbnailPath: string

    constructor(
        public id: string,
        thumbnailPath: string | null,
        public title: string,
        public body: string,
        public goodCount: number,
        public createdAt: string,
        public modifiedAt: string,
    ) {
        this.thumbnailPath = thumbnailPath ?? ""
    }
}

export default Article
