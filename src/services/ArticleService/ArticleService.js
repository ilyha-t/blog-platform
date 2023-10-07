import { BASE_URL } from '../../config/config';

export default class ArticleService {
  static async getArticles(limit) {
    try {
      const response = await fetch(`${BASE_URL}/articles?limit=${limit}`);
      return await response.json();
    } catch (error) {
      throw Error('Во время получения статей произошла ошибка: ', error.message);
    }
  }

  static async getArticleBySlug(slug) {
    try {
      const response = await fetch(`${BASE_URL}/articles/${slug}`);
      return await response.json();
    } catch (error) {
      throw Error('Во время получения статьи произошла ошибка: ', error.message);
    }
  }
}
