import ArticleUseCaseModel from "../ArticleUseCaseModel";

interface GetArticleUseCase {
    getAll(): Promise<ArticleUseCaseModel[]>
}

export default GetArticleUseCase
