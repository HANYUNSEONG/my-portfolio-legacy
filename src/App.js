import React, { useEffect, useState } from 'react';

// style
import './styles/init.scss';

// components
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

const App = () => {
    let [toggle, setToggle] = useState(false);
    let [aboutTitle, setAboutTitle] = useState("");

    let [levels] = useState(['Basic', 'Intermediate', 'Expert']);
    let [skills] = useState(
        [
            {
                name: 'HTML5',
                level: 'Expert'
            },
            {
                name: 'CSS3',
                level: 'Intermediate'
            },
            {
                name: 'JavaScript',
                level: 'Intermediate'
            },
            {
                name: 'jQuery',
                level: 'Intermediate'
            },
            {
                name: 'React',
                level: 'Basic'
            },
            {
                name: 'Node.js',
                level: 'Basic'
            },
            {
                name: 'MySql',
                level: 'Basic'
            },
            {
                name: 'Oracle',
                level: 'Basic'
            },
            {
                name: 'Git',
                level: 'Basic'
            }
        ]
    )

    const headerToggle = () => {
        if(window.scrollY > 10) setToggle(true)
        else setToggle(false)
    }

    const aboutTypingEffect = () => {
        let i = 0;
        let text = "안녕하세요! 개발자 한윤성입니다.";
        let interval = setInterval(() => {
            if(text.length > i) {
                setAboutTitle(aboutTitle = aboutTitle+text[i])
            } else {
                clearInterval(interval);
            }

            i++;
        }, 200)
    }

    useEffect(() => {
        document.addEventListener('scroll', () => {
            headerToggle();
        })
        aboutTypingEffect();
    }, [])

    return (
        <>
            <Header toggle={toggle} />
            <About aboutTitle={aboutTitle} />
            <Skills skills={skills} levels={levels} />
        </>
    )
}

export default App;