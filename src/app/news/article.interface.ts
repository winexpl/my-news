import { DateTime } from "luxon";

export interface IArticle {
    id: string;
    name: string;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    content: string;
    publishAt: DateTime

}
