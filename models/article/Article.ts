class Article {
    id: string
    thumbnailPath: string
    title: string
    body: string
    goodCount: number
    createdAt: string
    modifiedAt: string

    constructor(
        id: string,
        thumbnailPath: string | null,
        title: string,
        body: string,
        goodCount: number,
        createdAt: string,
        modifiedAt: string,
    ) {
        this.id = id
        this.thumbnailPath = thumbnailPath ?? ""
        this.title = title
        this.body = body
        this.goodCount = goodCount
        this.createdAt = createdAt
        this.modifiedAt = modifiedAt
    }
}

export default Article
