import PatientTrack from "./patientTrack";
import React, {Suspense} from "react";
import {Navbar,Container,Nav} from "react-bootstrap"
import { Translations_Fr } from "./translateFr"
import { Translations_En } from "./translateEn"
import { Translations_Hn} from "./translateHn";
import i18n from "i18next";
import { initReactI18next,useTranslation} from "react-i18next";
import {Button} from "@material-ui/core";

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

function DoctorDashboard(){
    const { t } = useTranslation();
    function updLang(val){
        i18n.changeLanguage(val);
    }
    fetch("http://localhost:8084/patientDetailsDoc/2",{
        method:"GET",
    })
        .then((response) => response.json())
        .then((responseData)=>{
            console.log(responseData);
            document.getElementById("patientsList").innerHTML='';
            let sz = responseData.length;
            console.log(sz);
            let html = '';
            for(let i=0;i<sz;i++)
            {
                let row = '';
                if(i%2==0)
                {
                    row = '<a type="button" href="/patientTracker?id='+responseData[i].pid+'" class="list-group-item list-group-item-action" style="background-color:lightgreen;">'+responseData[i].username+
                        '</a>';
                }
                else
                {
                    row = '<a type="button" href="/patientTracker?id='+responseData[i].pid+'" class="list-group-item list-group-item-action" style="background-color:white;">'+responseData[i].username+
                        '</a>';
                }
                html=html+row;
            }
            document.getElementById("patientsList").innerHTML = html;
        })


    return <>
        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVhY2V8ZW58MHx8MHx8&w=1000&q=80')" ,backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
            <div>
                <div >
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
                                        <li><a className="dropdown-item" href="#" onClick={()=>updLang('en')} >English</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={()=>updLang('fr')} >French</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={()=>updLang('hn')} >Hindi</a></li>
                                    </ul>
                                </div>
                            </Nav>
                        </Container>
                    </Navbar>
        <div>
            <div>
                <p>{t("welcome")}</p>
                <nav className="navbar" style={{backgroundColor:"gainsboro"}}>
                    <div className="container-fluid">
                <span className="navbar-text">
                Push-D Logo
                </span>
                <span style={{float:"right"}}>
                    <div className="btn-group">
                      <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        {t("translate")}
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={()=>updLang('en')}>English</a></li>
                        <li><a className="dropdown-item" href="#" onClick={()=>updLang('fr')}>French</a></li>
                        <li><a className="dropdown-item" href="#" onClick={()=>updLang('hn')}>Hindi</a></li>
                      </ul>
                    </div>
                </span>
                <span>
                    <button id-type="button" className="btn btn-success" style={{marginTop:"10px",backgroundColor:"white",color:"black"}}>{t("logout")}</button>
                </span>
                    </div>
                </nav>
            </div>
            <div className="card p-3 shadow mb-5 bg-white rounded" style={{margin:"20px",backgroundColor:"white"}}>
                <div className="card-body">
                    <div style={{textAlign:"center",margin:"1vw"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" alt="Avatar" style={{borderRadius:"50%"}}></img>
                    </div>
                    <h3 style={{textAlign:"left"}}>
                        {t("patientList")}
                    </h3>
                    <div className="list-group" id="patientsList">

                    </div>
                </div>
            </div>
        </div>
                </div></div></div>
    </>
}

export default DoctorDashboard;