import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };


    render() {
        return(
            <div className="sign-in">
                <h2>Já tenho uma conta</h2>
                <span>Entre com seu e-mail e senha</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={ this.state.email } handleChange={this.handleChange} required label="Email"/>
                    <FormInput name="password" type="password" value={ this.state.password } handleChange={this.handleChange} required label="Senha" />
                    <div className="buttons">
                        <CustomButton type="submit">Enviar</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Entrar com Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;