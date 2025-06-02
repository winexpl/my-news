import { DateTime } from "luxon";

/**
 * 🗞️ Статья - карточка новости/публикации
 * 
 * @property {string} id - Уникальный идентификатор статьи (UUID)
 * @property {string} name - Название источника/издателя
 * @property {string} author - Автор статьи (формат: "Имя Фамилия")
 * @property {string} title - Заголовок статьи
 * @property {string} description - Краткое описание (превью)
 * @property {string} url - Прямая ссылка на статью
 * @property {string} urlToImage - URL главного изображения (разрешение 1200x630)
 * @property {string} content - Полный текст статьи (HTML-форматированный)
 * @property {DateTime} publishedAt - Дата публикации в ISO-формате
 * 
 * @example
 * {
 *   id: "a1b2c3d4-e5f6-7890",
 *   name: "Tech Insights",
 *   author: "Алексей Петров",
 *   title: "Новые тенденции во фронтенд-разработке",
 *   description: "Обзор современных фреймворков...",
 *   url: "https://example.com/article123",
 *   urlToImage: "https://example.com/img/article123.jpg",
 *   content: "<p>В 2023 году React сохраняет лидерство...</p>",
 *   publishedAt: DateTime.fromISO("2023-10-15T14:30:00Z")
 * }
 */
export interface IArticle {
    source: ISource
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    content: string;
    publishedAt: DateTime;
}

interface ISource {
    id: string;
    name: string;
}