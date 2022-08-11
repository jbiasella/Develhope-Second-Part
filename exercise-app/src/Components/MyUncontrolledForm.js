import React, {createRef} from "react"


export default class UncontrolledForm extends React.Component {

    _formRef = createRef()

    handleFormSubmit = (event) => {

        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked



        console.log({
            username, 
            password, 
            remember
        })
    }


    handleFormPrefill = () => {

        this._formRef.current.elements.username.value = 'Billy'
        this._formRef.current.elements.password.value = 'hello121212'
        this._formRef.current.elements.remember.checked = true

    }

    render() {

        return (
            <div>
                <h3>My Uncontrolled Form</h3>

                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>

                    <input  name="username" defaultValue="Ciao"/>
                    <input  name="password" type="password" />
                    <input  name="remember" type="checkbox"/>

                    <button type="submit">LOGIN</button>
                    <button type="reset">RESET</button>
                    <button type="button" onClick={this.handleFormPrefill}>PREFILL FORM</button>
                </form>
            </div>
        )
    }
}