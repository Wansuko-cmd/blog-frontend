import ArticleRepository from "../../models/article/ArticleRepository";
import Article from "../../models/article/Article";
import axios from "axios";
import ArticleResponse from "./ArticleResponse";

class ArticleRepositoryImpl implements ArticleRepository {
    async getAll(): Promise<Article[]> {
        return await axios.get<ArticleResponse[]>("http://localhost:8000/articles")
            .then((response) => response.data
                .map((data) => new Article(
                    data.id,
                    data.thumbnail_path,
                    data.title,
                    data.body,
                    data.good_count,
                    data.created_at,
                    data.modified_at,
                ))
            )
    }

    async getById(id: string): Promise<Article> {
        return new Article("", null, "", "", 0, "", "");
    }
}

export default ArticleRepositoryImpl
