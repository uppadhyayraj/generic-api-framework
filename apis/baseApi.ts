import { APIRequestContext } from '@playwright/test';
import { logger } from '../utils/logger';

class BaseApi {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(endpoint: string) {
    logger.info(`GET request to ${endpoint}`);
    const response = await this.request.get(endpoint);
    if (response.ok()) {
      logger.info(`Response: ${response.status()} ${response.statusText()}`);
    } else {
      logger.error(`Response: ${response.status()} ${response.statusText()}`);
    }
    return response;
  }

  async post(endpoint: string, data: any) {
    logger.info(`POST request to ${endpoint} with data: ${JSON.stringify(data)}`);
    const response = await this.request.post(endpoint, { data });
    if (response.ok()) {
      logger.info(`Response: ${response.status()} ${response.statusText()}`);
    } else {
      logger.error(`Response: ${response.status()} ${response.statusText()}`);
    }
    return response;
  }

  async put(endpoint: string, data?: any) {
    logger.info(`PUT request to ${endpoint} with data: ${JSON.stringify(data)}`);
    const response = await this.request.put(endpoint, data ? { data } : {});
    if (response.ok()) {
      logger.info(`Response: ${response.status()} ${response.statusText()}`);
    } else {
      logger.error(`Response: ${response.status()} ${response.statusText()}`);
    }
    return response;
  }

  async delete(endpoint: string) {
    logger.info(`DELETE request to ${endpoint}`);
    const response = await this.request.delete(endpoint);
    if (response.ok()) {
      logger.info(`Response: ${response.status()} ${response.statusText()}`);
    } else {
      logger.error(`Response: ${response.status()} ${response.statusText()}`);
    }
    return response;
  }
}

export default BaseApi;
