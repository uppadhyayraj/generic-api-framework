import { test, expect } from '@playwright/test';
import { ApiFactory } from '../utils/apiFactory';
import {logger} from '../utils/logger';
import { UserApi } from '../apis/userApi';

test.describe('User API Tests', () => {
  let userApi: UserApi;

  test.beforeAll(async (playwright) => {
    userApi = await ApiFactory.getUserApi();
  });

  test('Should get user details with given userId', async () => {
    const userId = 2;
    const response = await userApi.getUser(userId);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.data.id).toBe(userId);
    logger.info(`User details retrieved for ID: ${userId}`);
  });

  test('Should update a user with given userId', async () => {
    const userId = '2';
    //const userData = { name: 'Jane Doe', job: 'Product Manager' };
    const response = await userApi.updateUser(userId, null);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.updatedAt).not.toBeNull();
    logger.info(`User updated with ID: ${userId} and values: ${JSON.stringify(responseBody)}`);
  });

  test('Should delete a user with given userId', async () => {
    const userId = '2';
    const response = await userApi.deleteUser(userId);
    expect(response.status()).toBe(204);
    logger.info(`User deleted with ID: ${userId}`);
  });

  test('Should list users', async () => {
    const page = 2;
    const response = await userApi.listUsers(page);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.page).toBe(page);
    logger.info(`Users listed for page: ${page}`);
  });
});
