import ApiService from "@/services/api/apiService.js";
import store from "@/store/store.js";

export default class UserApiService {

    static servicePath = '/user';

    static async getAll() {
        return await ApiService.get(`${UserApiService.servicePath}`);
    }

    static async deleteAccount(password) {
        const token = store.state.auth.token;
        let deleteObject = {
            password: password,
        }
        return await ApiService.post(`${UserApiService.servicePath}/delete-account`, deleteObject, token);
    }

    static async updateUserMail(password, newMail) {
        const token = store.state.auth.token;
        let requestObject = {
            password: password,
            newMail : newMail
        }
        return await ApiService.post(`${UserApiService.servicePath}/update-mail`, requestObject, token);
    }


}