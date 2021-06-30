import React, { Component } from 'react'
import axios from 'axios'

import './contactForm.css'

export default class ContactForm extends Component {

    constructor(props) {
        super(props)

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeAreaCode = this.onChangeAreaCode.bind(this)
        this.onChangeNumberPrefix = this.onChangeNumberPrefix.bind(this)
        this.onChangeSubNumber = this.onChangeSubNumber.bind(this)

        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',  
            areaCode: '',
            numberPrefix: '',
            subNumber: ''
        }
    }

    // componentDidMount() {
    //     this.setState({

    //     })
    // }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeAreaCode(e) {
        this.setState({
            areaCode: e.target.value
        })
    }

    onChangeNumberPrefix(e) {
        this.setState({
            numberPrefix: e.target.value
        })
    }

    onChangeSubNumber(e) {
        this.setState({
            subNumber: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const Supporters = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            areaCode: this.state.areaCode,
            numberPrefix: this.state.numberPrefix,
            subNumber: this.state.subNumber
        }

        console.log(Supporters)

        axios.post('http://localhost:5000/supporters/add', Supporters)
        .then(res => console.log(res.data))

        // window.location = '/'
    }

    render() {
        return (
            <div className='contactContainer volPageContainer'>
                <h2>Sign up to Volunteer.</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='formInput'>
                        <label>First Name? </label>
                        <input 
                            type='text'
                            required
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                            />
                    </div>
                    <div className='formInput'>
                        <label>Last Name?</label>
                        <input 
                            type='text'
                            required
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                            />
                    </div>
                    <div className='formInput'>
                        <label>Please enter your email.</label>
                        <input 
                            type='email'
                            required
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                    </div>
                    <div>
                        <label>Please enter your phone number.</label>
                        <input 
                            type='string'
                            required
                            value={this.state.areaCode}
                            onChange={this.onChangeAreaCode}
                            placeholder='555'
                            maxLength='3'
                            />-
                            <input 
                            type='string'
                            required
                            value={this.state.numberPrefix}
                            onChange={this.onChangeNumberPrefix}
                            placeholder='555'
                            maxLength='3'
                            />-
                            <input 
                            type='string'
                            required
                            value={this.state.subNumber}
                            onChange={this.onChangeSubNumber}
                            placeholder='5555'
                            maxLength='4'
                            />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}