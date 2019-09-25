import React, { Component } from 'react';

import './registrationForm.scss';

const InputText = ({type, labelText, icon}) => 
    <input 
        type={type}
        placeholder={labelText}
        data-icon={icon}
        className="inputFrmRegistration"
        autoComplete="false"/>;

class RegistrationForm extends Component {
    render() {
        return (
            <form id="formRegistration">
                <h2 id="registerFormTitle">Cadastre sua imobiliária</h2>

                <InputText type="text" labelText="Nome" icon=""/>
                <InputText type="email" labelText="Email" icon=""/>
                <InputText type="phone" labelText="Telefone" icon=""/>

                <button className="submitRegistration" type="submit">Enviar</button>
            </form>
        );
    }
}

export default RegistrationForm;