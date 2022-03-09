import GetArticleUseCase from "./GetArticleUseCase";
import {inject, injectable} from "tsyringe";
import ArticleRepository from "../../../models/article/ArticleRepository";
import ArticleUseCaseModel from "../ArticleUseCaseModel";
import RepositoryTypes from "../../../di/RepositoryTypes";

@injectable()
class GetArticleUseCaseImpl implements GetArticleUseCase {

    constructor(@inject(RepositoryTypes.ArticleRepository) private articleRepository: ArticleRepository) {}

    async getAll(): Promise<ArticleUseCaseModel[]> {
        return await this.articleRepository.getAll()
            .then((articles) =>
                articles.map((article) =>
                    ArticleUseCaseModel.fromArticle(article)
                )
            );
    }

    async getById(id: string): Promise<ArticleUseCaseModel> {
        return await this.articleRepository.getById(id)
            .then((article) => ArticleUseCaseModel.fromArticle(article))
    }
}

export default GetArticleUseCaseImpl
