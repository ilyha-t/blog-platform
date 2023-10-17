import { BASE_URL, paginationNumber } from '../../config/config';

export default class ArticleService {
  static async getArticles(offset) {
    try {
      let token;
      if (localStorage.getItem('userData')) {
        token = JSON.parse(localStorage.getItem('userData')).user.token;
      }

      const response = await fetch(
        `${BASE_URL}/articles?offset=${offset}&limit=${paginationNumber}`,
        {
          method: 'GET',
          headers: {
            Authorization: token ? `Token ${token}` : '',
            'Content-Type': 'application/json',
          },
        }
      );
      return await response.json();
    } catch (error) {
      throw Error('Во время получения статей произошла ошибка: ', error.message);
    }
  }

  static async getArticleBySlug(slug) {
    try {
      let token;
      if (localStorage.getItem('userData')) {
        token = JSON.parse(localStorage.getItem('userData')).user.token;
      }

      const response = await fetch(`${BASE_URL}/articles/${slug}`, {
        method: 'GET',
        headers: {
          Authorization: token ? `Token ${token}` : '',
          'Content-Type': 'application/json',
        },
      });
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

  static async deleteArticle(slug) {
    try {
      if (localStorage.getItem('userData')) {
        const token = JSON.parse(localStorage.getItem('userData')).user.token;
        const response = await fetch(`${BASE_URL}/articles/${slug}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        if (response.ok) {
          return await response.json();
        }
      } else {
        return;
      }
    } catch (error) {
      throw Error('Во время удаления статьи произошла ошибка: ', error.message);
    }
  }

  static async updateArticle(slug, updatedArticle) {
    try {
      if (localStorage.getItem('userData')) {
        const token = JSON.parse(localStorage.getItem('userData')).user.token;
        const response = await fetch(`${BASE_URL}/articles/${slug}`, {
          method: 'PUT',
          body: JSON.stringify(updatedArticle),
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
      throw Error('Во время обновления статьи произошла ошибка: ', error.message);
    }
  }

  static async favoriteArticle(slug) {
    try {
      if (localStorage.getItem('userData')) {
        const token = JSON.parse(localStorage.getItem('userData')).user.token;
        const response = await fetch(`${BASE_URL}/articles/${slug}/favorite`, {
          method: 'POST',
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        if (response.ok) {
          return await response.json();
        }
      } else {
        return;
      }
    } catch (error) {
      throw Error('Во время установки реакции на статью произошла ошибка: ', error.message);
    }
  }

  static async unFavoriteArticle(slug) {
    try {
      if (localStorage.getItem('userData')) {
        const token = JSON.parse(localStorage.getItem('userData')).user.token;
        const response = await fetch(`${BASE_URL}/articles/${slug}/favorite`, {
          method: 'DELETE',
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        if (response.ok) {
          return await response.json();
        }
      } else {
        return;
      }
    } catch (error) {
      throw Error('Во время удаления реакции со статьи произошла ошибка: ', error.message);
    }
  }
}
