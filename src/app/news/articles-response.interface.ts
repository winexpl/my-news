import { IArticle } from "./article.interface";

export interface INewsPage {
    totalResult: number;
    articles: IArticle[]
}
