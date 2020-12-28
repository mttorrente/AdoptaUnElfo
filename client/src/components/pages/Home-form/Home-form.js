import React, { Component } from "react"
import { Form, Button, Spinner } from "react-bootstrap"
import './Home-form.css'

import HomeService from './../../../service/home.service'
import FilesService from './../../../service/upload.service'


class HomeForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            home: {
                name: '',
                description: '',
                street: '',
                image: '',
                phone: '',
                diet: '',
                owner: props.logged ? props.logged._id : ''
            },
            uploadingActive: false
        }
        this.homeService = new HomeService()
        this.filesService = new FilesService()
    }


    handleInputChange = e => this.setState({ home: {...this.state.home, [e.target.name]: e.target.value } })
    
    handleSubmit = e => {
        e.preventDefault()

        this.homeService
            .saveHome(this.state.home)
            .then(() => {
                this.props.closeModal()
                this.props.history.push('/lista-casas')
            })
            .catch(err => console.log(err)) 
    }
    

    handleImageUpload = e => {
        
        const uploadData = new FormData()
        uploadData.append('image', e.target.files[0])

        this.setState({ uploadingActive: true })

        this.filesService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({
                    home: { ...this.state.home, image: response.data.secure_url },
                    uploadingActive: false
                })
            })
            .catch(err => console.log('ERRORRR!', err))
    }


    render() {
        
        return (
                <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="street">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" name="street" value={this.state.street} onChange={this.handleInputChange} />
                            </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
                        </Form.Group>
                            <Form.Control as="select" type="text" name="diet" value={this.state.diet} onChange={this.handleInputChange} >
                                <option>Vegana</option>
                                <option>Vegetariana</option>
                                <option>Gluten-free</option>
                                <option>Mediterránea</option>
                                <option>Keto</option>
                                <option>Orgánica</option>
                            </Form.Control>
                        <Form.Group>
                            <Form.Label>Imagen {this.state.uploadingActive && <Spinner animation="grow" variant="success" size="sm" />}</Form.Label>
                                    <Form.File id="custom-file-translate-scss" label="Subir imagen" lang="en" custom type="file" onChange={this.handleImageUpload} />
                                </Form.Group>
                    <Button className="btn-block button-form" variant="dark" type="submit" disabled={this.state.uploadingActive}>{this.state.uploadingActive ? 'Subiendo imagen...' : 'Crear cena'}</Button>
                </Form>
        )
    }
 }

 export default HomeForm