import axios from 'axios'

export default class UserService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/users',
            withCredentials: true
        })
    }

    getUsers = () => this.apiHandler.get('/all-users')
    getUser = user_id => this.apiHandler.get(`/${user_id}`)
    editUser = (user_id, userInfo) => this.apiHandler.put(`/${user_id}`, userInfo)
  
}