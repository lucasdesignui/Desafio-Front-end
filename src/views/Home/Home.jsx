import React, { Component } from 'react';
import './home.scss';
import Header from 'components/Header/Header.jsx';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm.jsx';
import economyIcon from 'assets/svg/economy.svg';
import centralizedIcon from 'assets/svg/centralized.svg';

const Resource = (props) => {

    return (
        <div className="col s12 resourceWraper">
            <img className="resourceIcon" src={props.imgIcon} alt={props.resourceName + ' icon'}/>
            <dt className="resourceName">{props.resourceName}</dt>
            <dd className="resourceDescription">{props.resourceDescription}</dd>
        </div>
    );

};

class Home extends Component {

    render() {

        const lorem = 'lorem ipsum dolor sit amet';

        return (
            <>
                <div id="containerBgOwli">
                    <section className="container" id="secSubscribe">
                        <div className="row">
                            <div className="col s12 colHeader">
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
                </div>
                <section className="container" id="meetOurResources">
                    <div id="rowMeetOurResources" className="row">
                        <h2 id="meetResourcesTitle">
                            <div>Conheça todos</div>
                            <div>os nossos recursos</div>
                        </h2>

                        <dl id="resourceList">
                            <Resource imgIcon={economyIcon} resourceDescription={lorem} resourceName='Economia' />
                            <Resource imgIcon={centralizedIcon} resourceDescription={lorem} resourceName='Centralizado' />
                        </dl>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;