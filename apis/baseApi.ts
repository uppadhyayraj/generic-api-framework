import { APIRequestContext } from '@playwright/test';
import { httpLogger } from '../utils/logger';

export class BaseApi {
  protected request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(endpoint: string) {
    httpLogger.logger.info(`GET request to ${endpoint}`);
    const response = await this.request.get(endpoint);
    httpLogger.logger.info(`Response: ${response.status()} ${response.statusText()}`);
    return response;
  }

  async post(endpoint: string, data: any) {
    httpLogger.logger.info(`POST request to ${endpoint} with data: ${JSON.stringify(data)}`);
    const response = await this.request.post(endpoint, { data });
    httpLogger.logger.info(`Response: ${response.status()} ${response.statusText()}`);
    return response;
  }

  async put(endpoint: string, data: any) {
    httpLogger.logger.info(`PUT request to ${endpoint} with data: ${JSON.stringify(data)}`);
    const response = await this.request.put(endpoint, { data });
    httpLogger.logger.info(`Response: ${response.status()} ${response.statusText()}`);
    return response;
  }

  async delete(endpoint: string) {
    httpLogger.logger.info(`DELETE request to ${endpoint}`);
    const response = await this.request.delete(endpoint);
    httpLogger.logger.info(`Response: ${response.status()} ${response.statusText()}`);
    return response;
  }
}
