import React, { Component } from "react"
import './Footer.css'

class Footer extends Component {
    constructor() {
        super()
            this.state = {}
    }
    render() {
        return (
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Copyright</p>
            </footer>
        )
    }
}
export default Footer