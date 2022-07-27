import { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

class Listuser extends Component{

    state = {
        users: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/users')
          .then(res => {
            const users = res.data
            this.setState({users});
          })
          .catch((error) => {
            console.log(error);
          })
      }

      deleteRow(id, e){
        axios.delete(`http://localhost:8080/api/users/${id}`)
        .then(response => {
        console.log(response);
        console.log(response.data);
        const users = this.state.users.filter(item => item.id !== id);
        this.setState({ users });
        })
        
      }

      render(){
        return(
            <div className="table-wrapper">
                <Table>
                    <thead>
                    <tr>
                        <th>Prenom</th>
                        <th>nom</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.job}</td>
                        <td>{user.age}</td>
                        <td>
                        <button className="btn btn-danger" onClick={(e) => this.deleteRow(user.id, e)}>Delete</button>
                        </td>
                    </tr>
              ))}
                    </tbody>
                </Table>
            </div>
        );
      }


}
export default Listuser;