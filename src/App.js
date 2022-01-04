import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    Person: {
      fullName: "AJROUDI Khaoula",
      bio: "I ... ",
      imgSrc:
        "https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1641235818~hmac=d01491a4ea0eed7aabe0363056fbc8f9",
      profession: "web devlopment",
    },
    show: true,
  };

  ShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="header">
        {this.state.show && (
          <>
            <img
              src={this.state.Person.imgSrc}
              alt="logo"
              className="img"
            ></img>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <h1>{this.state.Person.profession}</h1>
          </>
        )}

        <button onClick={this.ShowPerson} className="btn">
          Show Détails
        </button>
      </div>
    );
  }
}

export default App;
