import React from 'react';
import ValidationError from './validationError';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            repeatPassword: {
                value: '',
                touched: false
            }
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const { name, password, repeatPassword } = this.state;
        console.log('Name: ', name);
        console.log('Password: ', password);
        console.log('repeatPassword', repeatPassword)
    }

    updateName(name) {
        this.setState({

            name: {
                value: name,
                touched: true
            },
        })
    }

    updatePassword(password) {
        this.setState({

            password: {
                value: password,
                touched: true
            },
        })
    }

    updateRepeatPassword(repeatPassword) {
        this.setState({

            repeatPassword: {
                value: repeatPassword,
                touched: true
            },
        });
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        } else if (name.length < 3) {
            return 'Name must be at least 3 characters long';
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
            return 'Password is required';
        }
        else if (password.length < 6 || password.length > 72) {
            return 'Password must be between 6 and 72 letters.';
        }
        else if (!password.match(/[0-9]/)) {
            return 'Password must contain at least one number';
        }
    }

    validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();

        if (!(repeatPassword === password)) {
            return 'Passwords must match.'
        }
    }

    render() {
        const nameError = this.validateName();
        const passwordError = this.validatePassword();
        const repeatPasswordError = this.validateRepeatPassword();

        return (
            <form onSubmit={e => this.onSubmitForm(e)} className="registration">
                <h2>Register</h2>
                <div className="registration__hint">* required field</div>
                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input onChange={e => this.updateName(e.target.value)} type="text" className="registration__control"
                        name="name" id="name" />
                    {this.state.name.touched &&
                        <ValidationError message={nameError} />}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input onChange={e => this.updatePassword(e.target.value)} type="password" className="registration__control"
                        name="password" id="password" />
                    {this.state.password.touched &&
                        <ValidationError message={passwordError} />}
                    <div className="registration__hint">6 to 72 characters, must include a number</div>
                </div>
                <div className="form-group">
                    <label htmlFor="repeatPassword">Repeat Password *</label>
                    <input onChange={e => this.updateRepeatPassword(e.target.value)} type="password" className="registration__control"
                        name="repeatPassword" id="repeatPassword" />
                    {this.state.repeatPassword.touched &&
                        <ValidationError message={repeatPasswordError} />}
                </div>

                <div className="registration__button__group">
                    <button type="reset" className="registration__button">
                        Cancel
             </button>
                    <button type="submit"
                        className="registration__button"
                    // disabled={
                    //     this.validateName() ||
                    //     this.validatePassword() ||
                    //     this.validateRepeatPassword()
                    // }
                    >
                        Save
             </button>
                </div>
            </form>
        )
    }
}

export default RegistrationForm;