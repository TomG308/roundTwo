import React, { Component } from 'react'

export default class CreateSupporters extends Component {

    constructor(props) {
        super(props)

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeAreaCode = this.onChangeAreaCode.bind(this)
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',  
            areaCode: Number,
            phoneNumber: Number
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

    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        // const supporters = {
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     email: this.state.email,
        //     areaCode: this.state.areaCode,
        //     phoneNumber: this.state.phoneNumber
        // }

        // console.log(supporters)

        window.location = '/'
    }

    render() {
        return (
            <div>
                <h2>h0i create component</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>First Name? </label>
                        <input 
                            type='text'
                            required
                            className='form-control'
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Last Name?</label>
                        <input 
                            type='text'
                            required
                            className='form-control'
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Please enter your email.</label>
                        <input 
                            type='text'
                            required
                            className='form-control'
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                    </div>
                    <div className='form-group'>
                        <label>please enter your area code and phone number.</label>
                        <input 
                            type='number'
                            required
                            className='form-control'
                            value={this.state.areaCode}
                            onChange={this.onChangeAreaCode}
                            placeholder='801'
                            />
                        <input 
                            type='number'
                            required
                            className='form-control'
                            value={this.state.phoneNumber}
                            onChange={this.onChangePhoneNumber}
                            placeholder='5555555'
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}