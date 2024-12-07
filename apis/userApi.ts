import { BaseApi } from './baseApi';

export class UserApi extends BaseApi {
  async getUser(userId: string) {
    return this.get(`/users/${userId}`);
  }

  async createUser(userData: any) {
    return this.post('/users', userData);
  }

  async updateUser(userId: string, userData: any) {
    return this.put(`/users/${userId}`, userData);
  }

  async deleteUser(userId: string) {
    return this.delete(`/users/${userId}`);
  }

  async listUsers(page: number) {
    return this.get(`/users?page=${page}`);
  }

  async register(username: string, email: string, password: string) {
    return this.post('/register', { username, email, password });
  }
}
