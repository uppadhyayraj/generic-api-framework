import { UserApi } from '../apis/userApi';
import ApiContext from './apiContext';

/**
 * A factory class for creating instances of various API classes.
 *
 * The `ApiFactory` class provides static methods to retrieve instances of different
 * API classes, such as `UserApi`. These methods handle the creation and initialization
 * of the API instances, ensuring that they are properly configured with the necessary
 * context.
 */
export class ApiFactory {
  /**
   * Retrieves an instance of the UserApi.
   *
   * This method asynchronously obtains the ApiContext instance and uses it to create
   * and return a new UserApi instance.
   *
   * @returns {Promise<UserApi>} A promise that resolves to an instance of UserApi.
   */
  public static async getUserApi(): Promise<UserApi> {
    const context = await ApiContext.getInstance();
    return new UserApi(context);
  }
}
