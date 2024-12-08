import BaseApi  from './baseApi';

export class UserApi extends BaseApi {
  async getUser(userId: number) {
    return this.get(`/api/users/${userId}`);
  }

  async createUser(userData: any) {
    return this.post('/api/users', userData);
  }

  async updateUser(userId: string, userData: any) {
    return this.put(`/api/users/${userId}`);
  }

  async deleteUser(userId: string) {
    return this.delete(`/api/users/${userId}`);
  }

  async listUsers(page: number) {
    return this.get(`/api/users?page=${page}`);
  }

  async register(username: string, email: string, password: string) {
    return this.post('/api/register', { username, email, password });
  }
}
