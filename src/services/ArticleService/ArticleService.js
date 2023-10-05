import { BASE_URL } from '../../config/config';

export default class ArticleService {
  static async getArticles() {
    try {
      const response = await fetch(`${BASE_URL}/articles`);
      return await response.json();
    } catch (error) {
      throw Error('Во время получения статей произошла ошибка: ', error.message);
    }
  }
}
