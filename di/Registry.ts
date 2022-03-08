import {container} from "tsyringe";
import ArticleRepositoryImpl from "../repositories/article/ArticleRepositoryImpl";
import GetArticleUseCaseImpl from "../usecase/article/get/GetArticleUseCaseImpl";
import "reflect-metadata"
import UseCaseTypes from "./UseCaseTypes";
import RepositoryTypes from "./RepositoryTypes";


/*** UseCase ***/
container.register(UseCaseTypes.GetArticleUseCase, { useClass: GetArticleUseCaseImpl })

/*** Repository ***/
container.register(RepositoryTypes.ArticleRepository, { useClass: ArticleRepositoryImpl })

export { container }
