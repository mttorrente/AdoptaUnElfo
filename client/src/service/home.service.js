import axios from 'axios'

export default class HomeService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/homes',
            withCredentials: true
        })
    }

    getHomes = () => this.apiHandler.get('/all-homes')
    getHome= home_id => this.apiHandler.get(`/${home_id}`)
    saveHome = homeInfo => this.apiHandler.post(`/new-dinner`, homeInfo)
    deleteHome = home_id => this.apiHandler.delete(`/${home_id}`)
}