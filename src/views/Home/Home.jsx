import React, { Component } from 'react';
import './home.scss';
import Header from 'components/Header/Header.jsx';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm.jsx';

class Home extends Component {

    render() {
        return (
            <div className="container containerOwli" id="homeContainer">

                <section id="secSubscribe">
                    <Header />

                    <div className="row" id="rowSubscribeMain">

                        <div className="col xl7">
                            <h1 id="titleHomePage">A nova área do cliente</h1>
                            <h2 id="subtitleHomePage">Aplicativo para locatários e proprietários de imóveis</h2>
                            <button id="btnBePart">Quero fazer parte</button>
                        </div>
                        <div className="col xl5">
                            <RegistrationForm />
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default Home;