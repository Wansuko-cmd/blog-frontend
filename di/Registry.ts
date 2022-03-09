import {container} from "tsyringe";
import ArticleRepositoryImpl from "../repositories/article/ArticleRepositoryImpl";
import GetArticleUseCaseImpl from "../usecase/article/get/GetArticleUseCaseImpl";
import "reflect-metadata"
import UseCaseTypes from "./UseCaseTypes";
import RepositoryTypes from "./RepositoryTypes";
import CommentRepositoryImpl from "../repositories/comment/CommentRepositoryImpl";
import GetCommentUseCaseImpl from "../usecase/comment/get/GetCommentUseCaseImpl";


/*** UseCase ***/
container.register(UseCaseTypes.GetArticleUseCase, { useClass: GetArticleUseCaseImpl })
container.register(UseCaseTypes.GetCommentUseCase, { useClass: GetCommentUseCaseImpl })

/*** Repository ***/
container.register(RepositoryTypes.ArticleRepository, { useClass: ArticleRepositoryImpl })
container.register(RepositoryTypes.CommentRepository, { useClass: CommentRepositoryImpl })

export { container }
