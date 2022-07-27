import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';


class AddUser extends Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        job: '',
        age: ''
    }

    onChangeFirstName = (e) => {
        this.setState({ firstName: e.target.value })
    }

    onChangeLastName = (e) => {
        this.setState({ lastName: e.target.value })
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onChangeJob = (e) => {
        this.setState({ job: e.target.value })
    }

    onChangeAge = (e) => {
        this.setState({ age: parseInt(e.target.value) })
    }

    
    onHandleSubmit = (e) => {
        e.preventDefault()
        const user = {
            firstName: this.state.firstName,
            lastName:  this.state.lastName,
            email:  this.state.email,
            job:  this.state.job,
            age:  this.state.age
          };

          var reg = new RegExp('^[0-9]*$');
          if (reg.test(user.age) === false) {
            alert('Age: seulement les valeurs numeriques sont accepté.');
            return;
          }

          

          axios.post('http://localhost:8080/api/users', user)
            .then(res => console.log(res.data));
      
          this.setState({
            firstName: '',
            lastName: '',
            email: '',
            job: '',
            age: ''
        })
    }

    render(){
        return (
            <div>
                <Form onSubmit={this.onHandleSubmit}>
                    <fieldset >
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="TextInput">Prenom</Form.Label>
                            <Form.Control id="TextInput" placeholder="" onChange={this.onChangeFirstName} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="TextInput">Nom</Form.Label>
                            <Form.Control id="TextInput" placeholder="" onChange={this.onChangeLastName} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="TextInput">Email</Form.Label>
                            <Form.Control type='email' id="TextInput" placeholder=""  onChange={this.onChangeEmail} required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="TextInput">Job</Form.Label>
                            <Form.Control type='text' id="TextInput" placeholder="" onChange={this.onChangeJob} required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="TextInput">Age </Form.Label>
                            <Form.Control type='text' id="TextInput" placeholder="" onChange={this.onChangeAge} required/>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </fieldset>
                    </Form>
            </div>
        )
   }
}

export default AddUser