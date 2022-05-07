import React from 'react'
import { Translations_Fr } from "../translateFr"
import { Translations_En } from "../translateEn"
import { Translations_Hn} from "../translateHn";
import i18n from "i18next";
import { initReactI18next,useTranslation} from "react-i18next";
import {Navbar,Container,Nav,Button} from "react-bootstrap";
import Blog from "./Blog"
i18n
    .use(initReactI18next)
    .init({
        resources:{
            en:{translation:Translations_En},
            fr:{translation:Translations_Fr},
            hn:{translation:Translations_Hn}
        },
        lng:"en",
        fallbackLng:"en",
        interpolation:{escapeValue:false}
    });

function Landingpage(){
    const { t } = useTranslation();
    function updLang(val){
        i18n.changeLanguage(val);
    }



    return (

        <> <div style={{backgroundImage:"url('https://wallpaperaccess.com/full/3910193.jpg')" ,backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
    <Navbar bg="light" variant="light" style={{opacity:0.8}} >
        <Container >
            <Navbar.Brand href="landingpage">
                Push-D
            </Navbar.Brand>
            <Nav className="me-auto" >

                <Button href="login" variant="outline-success" style={{border:0}} >Login</Button>
                <Button href="signup" variant="outline-success" style={{border:0}}>Signup</Button>
                <Button href="About" variant="outline-success" style={{border:0}}>About</Button>
                <Button href="login" variant="outline-success" style={{border:0}}>ContactUs</Button>
                <div className="btn-group">
                    <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Translate
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={()=>updLang('en')}>English</a></li>
                        <li><a className="dropdown-item" href="#" onClick={()=>updLang('fr')}>French</a></li>
                        <li><a className="dropdown-item" href="#" onClick={()=>updLang('hn')}>Hindi</a></li>
                    </ul>
                </div>
            </Nav>
        </Container>
    </Navbar>


<Blog/>
            </div>





        </>



)}
export default Landingpage