import React from 'react';
import PropTypes from "prop-types";
import { Container } from './ui'

const propTypes = {
    listening: PropTypes.bool,
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool,
    startListening: PropTypes.func,
    stopListening: PropTypes.func,
    recognition: PropTypes.object,
    addItem: PropTypes.func
};

const Home = ({

}) => {

    return (
        <div>
            <Container>
                <div>
                    <div>
                        <span>Welcome to CC App</span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

Home.propTypes = propTypes;

export default Home;