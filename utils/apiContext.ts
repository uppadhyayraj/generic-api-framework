import { request, APIRequestContext } from '@playwright/test';

class ApiContext {
  private static instance: APIRequestContext;

  private constructor() {}

  public static async getInstance(): Promise<APIRequestContext> {
    if (!ApiContext.instance) {
      ApiContext.instance = await request.newContext();
    }
    return ApiContext.instance;
  }
}

export default ApiContext;
