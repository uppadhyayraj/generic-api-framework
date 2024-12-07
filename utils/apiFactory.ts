import { UserApi } from '../apis/userApi';
import ApiContext from './apiContext';

export class ApiFactory {
  public static async getUserApi(): Promise<UserApi> {
    const context = await ApiContext.getInstance();
    return new UserApi(context);
  }
}
