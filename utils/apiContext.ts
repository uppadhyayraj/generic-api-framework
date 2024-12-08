import { request, APIRequestContext } from '@playwright/test';
import config from '../playwright.config';

class ApiContext {
  private static instance: APIRequestContext;

  private constructor() { }

  public static async getInstance(): Promise<APIRequestContext> {
    if (!ApiContext.instance) {
      ApiContext.instance = await request.newContext({
        baseURL: config.use?.baseURL,
        extraHTTPHeaders: config.use?.extraHTTPHeaders,
      });
    }
    return ApiContext.instance;
  }
}

export default ApiContext;
