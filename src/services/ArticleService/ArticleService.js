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

  static async createArticle(newArticle) {
    try {
      console.log(JSON.stringify(newArticle));
      if (localStorage.getItem('userData')) {
        const token = JSON.parse(localStorage.getItem('userData')).user.token;
        const response = await fetch(`${BASE_URL}/articles`, {
          method: 'POST',
          body: JSON.stringify(newArticle),
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          return await response.json();
        }
      } else {
        return;
      }
    } catch (error) {
      throw Error('Во время получения статьи произошла ошибка: ', error.message);
    }
  }
}
