import { BASE_URL } from '../../config/config';

export default class UserService {
  static async createUser(newUser) {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }
}
