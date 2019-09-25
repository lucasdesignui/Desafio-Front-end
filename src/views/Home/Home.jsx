import React, { Component } from 'react';
import './home.scss';
import Header from 'components/Header/Header.jsx';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm.jsx';
import economyIcon from 'assets/svg/economy.svg';
import centralizedIcon from 'assets/svg/centralized.svg';

const ResourcesList = (props) => {

    return (
        <dl className="resourceList">
            {
                props.resources.map((resource) => 
                    <div className="itemResource">
                        <img className="resourceIcon" src={resource.imgIcon} alt={resource.resourceName + ' icon'}/>
                        <dt className="resourceName">{resource.resourceName}</dt>
                        <dd className="resourceDescription">{resource.resourceDescription}</dd>
                    </div>
                )
            }
        </dl>
    );

};

class Home extends Component {

    render() {

        const lorem = 'Lorem ipsum dolor sit amet';
        const resources = [
            {
                imgIcon: economyIcon,
                resourceDescription: lorem,
                resourceName: 'Economia'
            },
            {
                imgIcon: centralizedIcon,
                resourceDescription: lorem,
                resourceName: 'Centralizado'
            }
        ];

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

                        <ResourcesList resources={resources} />
                    </div>
                </section>
                <section className="container" id="secPlans">
                    <div className="row rowPlans">
                    </div>
                    <div className="row rowCarousel">
                    </div>
                </section>
            </>
        );
    }
}

export default Home;