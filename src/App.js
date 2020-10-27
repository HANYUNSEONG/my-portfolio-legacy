import React, { useState } from 'react';

// style
import './styles/init.scss';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

const App = () => {
    let [toggle, setToggle] = useState(false);

    document.addEventListener('scroll', (e) => {
        if(window.scrollY > 10) setToggle(true)
        else setToggle(false)
    })

    return (
        <>
            <Header toggle={toggle} />
            <About />
            <Skills />
        </>
    )
}

export default App;