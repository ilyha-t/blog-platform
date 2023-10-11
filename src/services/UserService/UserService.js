import { BASE_URL } from '../../config/config';

export default class UserService {
  static async createUser(newUser) {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      throw Error(e);
    }
  }

  static async loginUser(user) {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      throw Error(e);
    }
  }

  static async getCurrentUser() {
    try {
      if (localStorage.getItem('userData')) {
        const token = JSON.parse(localStorage.getItem('userData')).user.token;
        const response = await fetch(`${BASE_URL}/user`, {
          method: 'GET',
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
    } catch (e) {
      throw Error(e);
    }
  }
}
