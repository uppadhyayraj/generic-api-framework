import { APIRequestContext } from '@playwright/test';
import { logger } from '../utils/logger';

/**
 * A base class for making API requests.
 * 
 * @remarks
 * This class provides methods for sending GET, POST, PUT, and DELETE requests
 * to specified endpoints using the provided `APIRequestContext`.
 * 
 * @example
 * ```typescript
 * const api = new BaseApi(requestContext);
 * const response = await api.get('/endpoint');
 * ```
 * 
 * @public
 */
class BaseApi {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  /**
   * Sends a GET request to the specified endpoint.
   *
   * @param endpoint - The endpoint to send the GET request to.
   * @returns A promise that resolves to the response of the GET request.
   *
   * @throws Will throw an error if the request fails.
   */
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

  /**
   * Sends a POST request to the specified endpoint with the provided data.
   *
   * @param {string} endpoint - The endpoint to which the POST request is sent.
   * @param {any} data - The data to be sent in the POST request.
   * @returns {Promise<Response>} - A promise that resolves to the response of the POST request.
   */
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

  /**
   * Sends a PUT request to the specified endpoint with the provided data.
   *
   * @param endpoint - The API endpoint to send the PUT request to.
   * @param data - Optional data to be sent with the PUT request.
   * @returns A promise that resolves to the response of the PUT request.
   *
   * @example
   * ```typescript
   * const response = await api.put('/update-item', { id: 1, name: 'New Name' });
   * if (response.ok()) {
   *   console.log('Update successful');
   * } else {
   *   console.error('Update failed');
   * }
   * ```
   */
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

  /**
   * Sends a DELETE request to the specified endpoint.
   *
   * @param endpoint - The endpoint to send the DELETE request to.
   * @returns A promise that resolves to the response of the DELETE request.
   *
   * @remarks
   * Logs the request and response details using the logger.
   * If the response is successful, logs the status and status text as info.
   * If the response is not successful, logs the status and status text as an error.
   */
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
