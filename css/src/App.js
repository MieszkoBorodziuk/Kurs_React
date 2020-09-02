import React, { Component } from 'react';


class App extends Component {
  state = {
    active: false,
  }
  render() {

    // const btn_off = {
    //   padding: '10px 20px',
    //   fontFamily: 'arial',
    //   fontSize: 30,
    //   display: 'block',
    //   margin: '20px auto',
    //   bacgroundColor: 'white',
    //   border: '2px solid black',
    // }

    // const btn_on = {
    //   padding: '10px 20px',
    //   fontFamily: 'arial',
    //   fontSize: 30,
    //   display: 'block',
    //   margin: '20px auto',
    //   backgroundColor: 'cadetblue',
    //   color: 'white',
    //   border: '2px solid black',
    // }

    const styles = {
      btn_off: {
        padding: '10px 20px',
        fontFamily: 'arial',
        fontSize: 30,
        display: 'block',
        margin: '20px auto',
        bacgroundColor: 'white',
        border: '2px solid black',
      },
       btn_on: {
        padding: '10px 20px',
        fontFamily: 'arial',
        fontSize: 30,
        display: 'block',
        margin: '20px auto',
        backgroundColor: 'cadetblue',
        color: 'white',
        border: '2px solid black'
       }
    }

    return (
      <div>
        <button style={this.state.active ? styles.btn_on : styles.btn_off} onClick={() => this.setState({ active: !this.state.active })}>{this.state.active ? "Wyłącz" : "Włącz"}</button>
      </div>
    );
  }
}

export default App;
