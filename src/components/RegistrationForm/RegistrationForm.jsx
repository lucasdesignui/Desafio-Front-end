import React, { Component } from 'react';

const InputText = (type, labelText, icon) => 
    <input type={type}
        value={labelText}
        data-icon={icon}/>;

class RegistrationForm extends Component {
    render() {
        return (
            <form>
                <h2 id="registerFormTitle">Cadastre sua imobiliária</h2>
                <InputText />
            </form>
        );
    }
}

export default RegistrationForm;