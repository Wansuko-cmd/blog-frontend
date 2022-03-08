import Article from "./Article";

interface ArticleRepository {
    getAll(): Promise<Article[]>
    getById(id: string): Promise<Article>
}

export default ArticleRepository
