import React from 'react';
import Home from './Home';
import { Container } from './ui';

const Header = () =>
    (<div style={{ padding: "50px" }}>

    </div>)

const App = () => {

    return (
        <Container>
            <Header />
            <Home />
        </Container>
    )
}

export default App;