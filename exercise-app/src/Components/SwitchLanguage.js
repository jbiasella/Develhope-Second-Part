import React from "react";


export class LanguageSwitch extends React.Component {
    state = {
        language: 'en'
    }

    handleLanguageChange= (event) =>{
        this.setState({
            language: event.target.value
        })
    }
    render() {
        return (
            <select value={this.state.language} onChange={this.handleLanguageChange}>
                <option value='en'>ENGLISH</option>
                <option value='it'>ITALIANO</option>
            </select>
        )
    }
}