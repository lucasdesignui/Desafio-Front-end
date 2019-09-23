import React, { Component } from 'react';
import './home.scss';
import Header from 'components/Header/Header.jsx';

class Home extends Component {

    render() {
        return (
            <div className="container containerOwli" id="homeContainer">

                <section id="secSubscribe">
                    <Header />
                </section>
            </div>

        );
    }
}

export default Home;