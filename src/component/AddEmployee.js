import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';

class AddEmployee extends Component{
    state = {
        nom: '',
        adresse: '',
        salaire: '',
        grade: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    onChangeEmployeNom = (e) => {
        this.setState({ nom: e.target.value })
    }

    onChangeEmployeAdresse = (e) => {
        this.setState({ adresse: e.target.value })
    }

    onChangeEmployeSalaire = (e) => {
        this.setState({ salaire: e.target.value })
    }

    onChangeEmployeGrade = (e) => {
        this.setState({ grade: e.target.value })
    }

    onChangeEmployeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onChangeEmployePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    onChangeEmployeConfirmPassword = (e) => {
        this.setState({ confirmPassword: e.target.value })
    }

    onHandleSubmit = (e) => {
        e.preventDefault()
        const employee = {
            nom: this.state.nom,
            adresse: this.state.adresse,
            salaire: parseFloat(this.state.salaire),
            grade: this.state.grade,
            email: this.state.email,
            password: this.state.password
          };

          if (employee.password != this.state.confirmPassword ) {
            alert("Les deux mot de passe ne se resemblent pas")

            return;
          }

          if (employee.grade == "ingénieur" && employee.salaire < 3000) {
            alert("Le salire minimal doit etre superieur à 3000")
            return;
          }else if (employee.grade == "administrateur" && employee.salaire < 4500) {
            alert("Le salire minimal doit etre superieur à 4500")
            return;
          }

          axios.post('https://62dfa15c9c47ff309e89e4fe.mockapi.io/employee', employee)
            .then(res => console.log(res.data));
      
          this.setState({
            nom: '',
            adresse: '',
            salaire: '',
            grade: '',
            email: '',
            password: ''
        })
    }

    render(){
        return (
            <div>
                <Form onSubmit={this.onHandleSubmit}>
                    <fieldset >
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="TextInput">Nom</Form.Label>
                            <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeNom} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="TextInput">Adresse</Form.Label>
                            <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeAdresse} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="TextInput">Salaire</Form.Label>
                            <Form.Control id="TextInput" placeholder="" onChange={this.onChangeEmployeSalaire} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="Select">Grade</Form.Label>
                            <Form.Select id="Select" onChange={this.onChangeEmployeGrade}>
                                <option></option>
                                <option>ouvrier</option>
                                <option>ingénieur</option>
                                <option>administrateur</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="TextInput">Email</Form.Label>
                            <Form.Control type='email' id="TextInput" placeholder=""  onChange={this.onChangeEmployeEmail}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="TextInput">Password</Form.Label>
                            <Form.Control type='password' id="TextInput" placeholder="" onChange={this.onChangeEmployePassword} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="TextInput">Confirmation Password</Form.Label>
                            <Form.Control type='password' id="TextInput" placeholder="" onChange={this.onChangeEmployeConfirmPassword} />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </fieldset>
                    </Form>
            </div>
        )
   }
}

export default AddEmployee