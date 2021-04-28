import axios from 'axios';

const API_URL = 'https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41';

class ItemService {

    getAll() {
        return axios.get(API_URL)
            .then(response => {
                localStorage.setItem("data", JSON.stringify(response.data));
                return response.data;
            });
    }


    getCurrentData() {
        return JSON.parse(localStorage.getItem('data'));
    }

}


export default new ItemService();