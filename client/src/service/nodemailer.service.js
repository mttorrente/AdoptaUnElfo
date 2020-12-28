import axios from 'axios'

export default class EmailService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/email',
            withCredentials: true
        })
    } 
    sendEmail = emailInfo => this.apiHandler.post('/send-email', emailInfo)
}