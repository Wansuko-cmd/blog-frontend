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

    toJson() {
        return JSON.parse(JSON.stringify(this))
    }

    static toJson(articles: ArticleUseCaseModel[]) {
        return articles.map((article) => article.toJson())
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
