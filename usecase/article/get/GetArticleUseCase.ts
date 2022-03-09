import ArticleUseCaseModel from "../ArticleUseCaseModel";

interface GetArticleUseCase {
    getAll(): Promise<ArticleUseCaseModel[]>

    getById(id: string): Promise<ArticleUseCaseModel>
}

export default GetArticleUseCase
