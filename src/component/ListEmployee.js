import { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

class ListEmployee extends Component{

    state = {
        employees: []
    }

    componentDidMount() {
        axios.get('https://62dfa15c9c47ff309e89e4fe.mockapi.io/employee')
          .then(res => {
            const employees = res.data
            this.setState({employees});
          })
          .catch((error) => {
            console.log(error);
          })
      }

      deleteRow(id, e){
        axios.delete(`https://62dfa15c9c47ff309e89e4fe.mockapi.io/employee/${id}`)
        .then(response => {
        console.log(response);
        console.log(response.data);
        const employees = this.state.employees.filter(item => item.id !== id);
        this.setState({ employees });
        })
        
      }

      render(){
        return(
            <div className="table-wrapper">
                <Table>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Grade</th>
                        <th>Salaire</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.employees.map((employee, index) => (
                    <tr key={index}>
                        <td>{employee.nom}</td>
                        <td>{employee.adresse}</td>
                        <td>{employee.grade}</td>
                        <td>{employee.salaire}</td>
                        <td>{employee.email}</td>
                        <td>
                        <button className="btn btn-danger" onClick={(e) => this.deleteRow(employee.id, e)}>Delete</button>
                        </td>
                    </tr>
              ))}
                    </tbody>
                </Table>
            </div>
        );
      }


}
export default ListEmployee;