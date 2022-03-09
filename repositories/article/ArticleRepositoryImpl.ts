import ArticleRepository from "../../models/article/ArticleRepository";
import Article from "../../models/article/Article";
import axios from "axios";
import ArticleResponse from "./ArticleResponse";
import {injectable} from "tsyringe";

@injectable()
class ArticleRepositoryImpl implements ArticleRepository {
    async getAll(): Promise<Article[]> {
        return await axios.get<ArticleResponse[]>(`${process.env.BACKEND_URL}/articles`)
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
        return await axios.get<ArticleResponse>(`${process.env.BACKEND_URL}/articles/${id}`)
            .then((response) => response.data)
            .then((data) => new Article(
                data.id,
                data.thumbnail_path,
                data.title,
                data.body,
                data.good_count,
                data.created_at,
                data.modified_at
            ));
    }
}

export default ArticleRepositoryImpl
