import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {
    state = {
        text: "",
        checked: false,
        date: new Date().toISOString().slice(0, 10),
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    }

    handleClick = () => {

        const { text, checked, date } = this.state;
        if (text.length > 2) {
            const add = this.props.add(text, date, checked)
            if (add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: new Date().toISOString().slice(0, 10),
                })
            }
        }else{ alert("za krotka nazwa")}
    }


    render() {
        return (
            <div className="form">
                <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText}></input>
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox}></input>
                <label htmlFor="important" >Priorytet</label>
                <br />
                <label htmlFor="date">Do kiedy zrobić</label>
                <input type="date" value={this.state.date} onChange={this.handleDate}></input>
                <br />
                <button onClick={this.handleClick}>Dodaj</button>
            </div>
        );
    }
}

export default AddTask;