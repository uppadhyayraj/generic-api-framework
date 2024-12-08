import BaseApi  from './baseApi';

/**
 * The UserApi class provides methods to interact with the user-related endpoints of the API.
 * It extends the BaseApi class and includes methods for retrieving, creating, updating,
 * and deleting users, as well as fetching a list of users.
 */
export class UserApi extends BaseApi {
  async getUser(userId: number) {
    return this.get(`/api/users/${userId}`);
  }

  /**
   * Creates a new user by sending a POST request to the '/api/users' endpoint.
   *
   * @param userData - The data of the user to be created.
   * @returns A promise that resolves with the response of the POST request.
   */
  async createUser(userData: any) {
    return this.post('/api/users', userData);
  }

  /**
   * Updates the user information for the specified user ID.
   *
   * @param userId - The unique identifier of the user to be updated.
   * @param userData - The data to update the user with.
   * @returns A promise that resolves with the response of the update operation.
   */
  async updateUser(userId: string, userData: any) {
    return this.put(`/api/users/${userId}`);
  }

  /**
   * Deletes a user by their user ID.
   *
   * @param userId - The unique identifier of the user to be deleted.
   * @returns A promise that resolves when the user is successfully deleted.
   */
  async deleteUser(userId: string) {
    return this.delete(`/api/users/${userId}`);
  }

  /**
   * Fetches a list of users from the API.
   *
   * @param {number} page - The page number to retrieve.
   * @returns {Promise<any>} A promise that resolves to the list of users.
   */
  async listUsers(page: number) {
    return this.get(`/api/users?page=${page}`);
  }
}
