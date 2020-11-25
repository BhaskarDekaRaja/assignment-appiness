import React, { Component } from 'react'
import "./EmployeeListpage.css";

class EmployeeList extends Component {
    constructor(props){
        super(props)
        this.state= {
            user:[{
                "id":1,
                "name":"test1",
                "age" : "11",
                "gender":"male",
                "email" : "test1@gmail.com",
                "phoneNo" : "9415346313"
                },
                {
                "id" : 2,
                "name":"test2",
                "age" : "12",
                "gender":"male",
                "email" : "test2@gmail.com",
                "phoneNo" : "9415346314"
                },
                {
                "id":3,
                "name":"test3",
                
                "age" : "13",
                "gender":"male",
                "email" : "test3@gmail.com",
                "phoneNo" : "9415346315"
                },
                {
                "id":4,
                "name":"test4",
                "age" : "14",
                "gender":"male",
                "email" : "test4@gmail.com",
                "phoneNo" : "9415346316"
                },
                {
                "id":5,
                "name":"test5",
                "age" : "15",
                "gender":"male",
                "email" : "test5@gmail.com",
                "phoneNo" : "9415346317"
                },
                {
                "id":6,
                "name":"test6",
                "age" : "16",
                "gender":"male",
                "email" : "test6@gmail.com",
                "phoneNo" : "9415346318"
                }
                ]
        }
    }


    handleLogout = ()=>{
        sessionStorage.clear();
        this.props.history.push('/login');        
    }
    
    
        

    render() {
        return (
            <div className="container-employeeList">
                <button className="button-logout" onClick={this.handleLogout}>Logout</button>
                <header>EmployeeList</header>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Gender</td>
                            <td>Email</td>
                            <td>Phone No</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.user.map((list,key)=>
                               <tr key={key}>
                                <td>{list.id}</td>
                                <td>{list.name}</td>
                                <td>{list.age}</td>
                                <td>{list.gender}</td>
                                <td>{list.email}</td>
                                <td>{list.phoneNo}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeList

