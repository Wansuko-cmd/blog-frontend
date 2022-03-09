import Article from "../../models/article/Article";

class ArticleUseCaseModel {
    constructor(
        public id: string,
        public thumbnailPath: string,
        public title: string,
        public body: string,
        public goodCount: number,
        public createdAt: string,
        public modifiedAt: string,
    ){}

    static toJson(target: ArticleUseCaseModel): any
    static toJson(target: ArticleUseCaseModel[]): any
    static toJson(target: any) {
        return JSON.parse(JSON.stringify(target))
    }

    static fromArticle(article: Article) {
        return new ArticleUseCaseModel(
            article.id,
            article.thumbnailPath,
            article.title,
            article.body,
            article.goodCount,
            article.createdAt,
            article.modifiedAt
        )
    }
}

export default ArticleUseCaseModel
