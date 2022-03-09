import Article from "../../models/article/Article";

class ArticleResponse {
    constructor(
        public id: string,
        public thumbnail_path: string | null,
        public title: string,
        public body: string,
        public good_count: number,
        public created_at: string,
        public modified_at: string,
    ) {
    }

    static toArticle(article: ArticleResponse): Article {
        return new Article(
            article.id,
            article.thumbnail_path,
            article.title,
            article.body,
            article.good_count,
            article.created_at,
            article.modified_at,
        )
    }
}

export default ArticleResponse
