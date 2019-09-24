import React, { Component } from 'react';
import './home.scss';
import Header from 'components/Header/Header.jsx';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm.jsx';

class Home extends Component {

    render() {
        return (
            <>
                <section className="container" id="secSubscribe">
                    <div className="row">
                        <div className="col s12">
                            <Header />
                        </div>
                    </div>

                    <div className="row" id="rowSubscribeMain">

                        <div className="col xl7">
                            <h1 id="titleHomePage">A nova área do cliente</h1>
                            <h3 id="subtitleHomePage">Aplicativo para locatários e proprietários de imóveis</h3 >
                            <button id="btnBePart">Quero fazer parte</button>
                        </div>
                        <div className="col xl5">
                            <RegistrationForm />
                        </div>
                    </div>
                </section>

                <section className="container" id="meetOurResources">
                    <div id="row" className="rowMeetOurResources">
                        <div className="col xl6">
                            <h2 id="meetResourcesTitle">Conheça todos os nossos recursos</h2>
                        </div>
                        <div className="col xl3"></div>
                        <div className="col xl3"></div>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;