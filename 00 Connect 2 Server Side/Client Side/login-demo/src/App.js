import { Component } from 'react';
import './App.css';

const apiUrlAbs = 'http://localhost:58094/';
const apiUrl = 'http://localhost:58094/api/StudentsRWCustom/';

export default class App extends Component {

  btnLogin = () => {

    const studentObj =  //pay attention case sensitive!!!! should be exactly as the prop in C#!
    {
      ID: 0,
      Name: null,
      Grade: 0,
      //Email: this.state.emailTxt,
      //Password: this.state.passTxt
      Email: "avi@a.com",
      Password: "avi123"
    };

    console.log(studentObj);
    const studentObjStr = JSON.stringify(studentObj);
    console.log(studentObjStr);

    fetch(apiUrlAbs + 'login',
      {
        method: 'POST',
        body: studentObjStr,
        headers: new Headers({
          'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
          'Accept': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
        })
      })
      .then(response => {
        console.log('response=', response);
        if (response.status === 200) {
          return response.json()
        }
        else if (response.status === 404) {
          console.log('was not found');
          this.setState({ lblTxt: 'was not found' });
          return null;
        }
        else {
          console.log('Error on server side!!!');
          this.setState({ lblTxt: 'Error on server side!!!' });
          return null;
        }

      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          this.setState({ student: result });
          console.log(` ID=${result.ID}  
                
Name=${result.Name} 
Grade=${result.Grade} 
Email=${result.Email} 
Password=${result.Password}`);

          const str = ` ID=${result.ID}  
              Name=${result.Name} 
              Grade=${result.Grade} 
              Email=${result.Email} 
              Password=${result.Password}`;

          const str2 = 'ID=' + result.ID + "<br/> Name=" + result.Name;

          if (result != null) {
            console.log(result.Grade);
            this.setState({
              lblTxt: str2
            });
          }
        },
        (error) => {
          console.log("err post=", error);
        });

  }

  changeEmail = (e) => {
    this.setState({ emailTxt: e.target.value });
  }

  render() {
    //console.log(this.state != null ? this.state.emailTxt : ' ');
    //console.log(this.state != null ? this.state.passTxt : ' ');
    return (
      <div className="App">
        <header className="App-header">
          EMAIL: <input type="text" onChange={this.changeEmail} />
          PASS: <input type="text" onChange={text => { this.setState({ passTxt: text.target.value }) }} /> <br />
          <button onClick={this.btnLogin} >Login</button>
          <div>{this.state ? this.state.lblTxt : '...'}</div>
          {/* <div>{this.state.student.Grade}</div> */}
        </header>
      </div>
    );
  }
}
