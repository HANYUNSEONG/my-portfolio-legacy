import React, { useEffect, useState } from 'react';

// style
import './styles/init.scss';

// components
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Awards from './components/awards/Awards';
import Info from './components/info/Info';
import Project from './components/project/Project';

// images
import AboutBackgroundImage from './asset/images/about.jfif';

// dev logos
import htmlLogo from './asset/images/dev_logos/html.png';
import css3Logo from './asset/images/dev_logos/css3.svg';
import javascriptLogo from './asset/images/dev_logos/javascript.png';
import jqueryLogo from './asset/images/dev_logos/jquery.png';
import reactLogo from './asset/images/dev_logos/react.png';
import nodejsLogo from './asset/images/dev_logos/nodejs.png';
import mysqlLogo from './asset/images/dev_logos/mysql.svg';
import oracleLogo from './asset/images/dev_logos/oracle.png';
import gitLogo from './asset/images/dev_logos/git.png';
import phpLogo from './asset/images/dev_logos/php.svg';

const App = () => {
    let [toggle, setToggle] = useState(false);
    let [aboutTitle, setAboutTitle] = useState("");

    let [levels] = useState(['Basic', 'Intermediate', 'Expert']);
    let [skills] = useState(
        [
            {
                name: 'HTML5',
                level: 'Expert',
                logo: htmlLogo
            },
            {
                name: 'CSS3',
                level: 'Intermediate',
                logo: css3Logo
            },
            {
                name: 'JavaScript',
                level: 'Intermediate',
                logo: javascriptLogo
            },
            {
                name: 'jQuery',
                level: 'Intermediate',
                logo: jqueryLogo
            },
            {
                name: 'React',
                level: 'Basic',
                logo: reactLogo
            },
            {
                name: 'Node.js',
                level: 'Basic',
                logo: nodejsLogo
            },
            {
                name: 'MySql',
                level: 'Basic',
                logo: mysqlLogo
            },
            {
                name: 'Oracle',
                level: 'Basic',
                logo: oracleLogo
            },
            {
                name: 'Git',
                level: 'Basic',
                logo: gitLogo
            },
            {
                name: 'PHP',
                level: 'Basic',
                logo: phpLogo
            }
        ]
    )

    let [awards] = useState([
        {
            title: '2018 인천지방기능경기대회 웹디자인 및 개발 금메달',
            agency: '한국산업인력공단'
        },
        {
            title: '2019 인천지방기능경기대회 웹디자인 및 개발 동메달',
            agency: '한국산업인력공단'
        },
        {
            title: '2019 전국기능경기대회 웹디자인 및 개발 장려상',
            agency: '한국산업인력공단'
        },
        {
            title: '2019 전국기능경기대회 웹디자인 및 개발 Team Challenge 최우수상',
            agency: '한국산업인력공단'
        }
    ])

    let [license] = useState([
        {
            name: '웹디자인기능사',
            date: '2018.06',
            agency: '한국산업인력공단'
        },
        {
            name: '정보처리기능사',
            date: '2019.07',
            agency: '한국산업인력공단'
        }
    ])

    let [educations] = useState([
        {
            name: '인평자동차정보고등학교 [졸업]',
            major: '웹콘텐츠과',
            status: '졸업',
            date: '2020.02'
        }
    ])

    let [projects] = useState([
        {
            name: '김포시킥복싱협회 홈페이지',
            date: '2019.04 - 2019.05',
            useLanguage: 'HTML5, CSS3, JavaScript, jQuery, PHP',
            thumbnail: ''
        },
        {
            name: '코로나 마스크 맵',
            date: '2020.02',
            useLanguage: 'HTML5, CSS3, JavaScript, jQuery',
            thumbnail: ''
        }
    ])

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

    const handleHeaderToggle = (target) => {
        document.querySelector('header nav').classList.toggle('nav_on');
        document.querySelector('header .ham_btn').classList.toggle('ham_btn_on');
    }

    useEffect(() => {
        document.addEventListener('scroll', () => {
            headerToggle();
        })
        aboutTypingEffect();
    }, [])

    return (
        <>
            <Header toggle={toggle} handleHeaderToggle={handleHeaderToggle} />
            <About aboutTitle={aboutTitle} AboutBackgroundImage={AboutBackgroundImage} />
            <Skills skills={skills} levels={levels} />
            {/* <Awards awards={awards} /> */}
            <Project />
            <Info license={license} educations={educations} awards={awards} />
        </>
    )
}

export default App;