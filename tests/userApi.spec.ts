import { test, expect } from '@playwright/test';
import { ApiFactory } from '../utils/apiFactory';
import {logger} from '../utils/logger';
import { UserApi } from '../apis/userApi';

test.describe('User API Tests', () => {
  let userApi: UserApi;

  test.beforeAll(async () => {
    userApi = await ApiFactory.getUserApi();
  });

  test('should create a new user', async () => {
    const userData = { name: 'John Doe', job: 'Software Developer' };
    const response = await userApi.createUser(userData);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.name).toBe(userData.name);
    logger.info(`User created with ID: ${responseBody.id}`);
  });

  test('should get user details', async () => {
    const userId = '2';
    const response = await userApi.getUser(userId);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.data.id).toBe(parseInt(userId));
    logger.info(`User details retrieved for ID: ${userId}`);
  });

  test('should update a user', async () => {
    const userId = '2';
    const userData = { name: 'Jane Doe', job: 'Product Manager' };
    const response = await userApi.updateUser(userId, userData);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.name).toBe(userData.name);
    logger.info(`User updated with ID: ${userId}`);
  });

  test('should delete a user', async () => {
    const userId = '2';
    const response = await userApi.deleteUser(userId);
    expect(response.status()).toBe(204);
    logger.info(`User deleted with ID: ${userId}`);
  });

  test('should list users', async () => {
    const page = 2;
    const response = await userApi.listUsers(page);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.page).toBe(page);
    logger.info(`Users listed for page: ${page}`);
  });
});
