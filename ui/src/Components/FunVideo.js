import {Link} from 'react-router-dom'
import {Button} from "@material-ui/core";
import React from "react";
import i18n from "i18next";
import {Navbar,Container,Nav} from "react-bootstrap"
import {initReactI18next, useTranslation} from "react-i18next";
import {Translations_En} from "./translateEn";
import {Translations_Fr} from "./translateFr";
import {Translations_Hn} from "./translateHn";

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

function FunVideo(){
	const { t } = useTranslation();
	function updLang(val){
		i18n.changeLanguage(val);
	}

	let pth = window.location.href;
	let x = pth.indexOf("=");
	let y = pth.length;
	let k = x+1;
	let str = "";
	while(k<y)
	{
		str = str + pth[k];
		k++;
	}
	console.log(str);
	let pid = parseInt(str);
    function showOverview(){
        document.getElementById("overview").style.display="block";
        document.getElementById("signBoard").style.display="none";
        document.getElementById("tips").style.display="none";
        document.getElementById("termUse").style.display="none";
        document.getElementById("overviewBtn").style.backgroundColor="#51b052";
        document.getElementById("termUseBtn").style.backgroundColor="#218622";
        document.getElementById("signBoardBtn").style.backgroundColor="#218622";
        document.getElementById("tipsBtn").style.backgroundColor="#218622";
    }
    function showSign(){
        document.getElementById("overview").style.display="none";
        document.getElementById("signBoard").style.display="block";
        document.getElementById("tips").style.display="none";
        document.getElementById("termUse").style.display="none";
        document.getElementById("signBoardBtn").style.backgroundColor="#51b052";
        document.getElementById("overviewBtn").style.backgroundColor="#218622";
        document.getElementById("termUseBtn").style.backgroundColor="#218622";
        document.getElementById("tipsBtn").style.backgroundColor="#218622";
    }
    function showTips(){
        document.getElementById("overview").style.display="none";
        document.getElementById("signBoard").style.display="none";
        document.getElementById("tips").style.display="block";
        document.getElementById("termUse").style.display="none";
        document.getElementById("tipsBtn").style.backgroundColor="#51b052";
        document.getElementById("overviewBtn").style.backgroundColor="#218622";
        document.getElementById("signBoardBtn").style.backgroundColor="#218622";
        document.getElementById("termUseBtn").style.backgroundColor="#218622";
    }
    function showTerms(){
        document.getElementById("overview").style.display="none";
        document.getElementById("signBoard").style.display="none";
        document.getElementById("tips").style.display="none";
        document.getElementById("termUse").style.display="block";
        document.getElementById("termUseBtn").style.backgroundColor="#51b052";
        document.getElementById("overviewBtn").style.backgroundColor="#218622";
        document.getElementById("signBoardBtn").style.backgroundColor="#218622";
        document.getElementById("tipsBtn").style.backgroundColor="#218622";
    }
    return <>


		<div style={{backgroundImage:"url('https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVhY2V8ZW58MHx8MHx8&w=1000&q=80')" ,backgroundSize: 'cover',
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
										<li><a className="dropdown-item" href="#" onClick={()=>updLang('en')} >English</a></li>
										<li><a className="dropdown-item" href="#" onClick={()=>updLang('fr')} >French</a></li>
										<li><a className="dropdown-item" href="#" onClick={()=>updLang('hn')} >Hindi</a></li>
									</ul>
								</div>
							</Nav>
						</Container>
					</Navbar>
        <div className="container" style={{textAlign:"center",marginTop:"10px",height:"20vw"}}>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/a1Y1ocyudjs"
					title="YouTube video player" frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>

        </div>
			<br/>
			<br/>
		<div className="container" style={{textAlign: "center", marginTop: "10px", height: "20vw"}}>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/eRXGwffy_90"
					title="YouTube video player" frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>

		</div>
			<br/>
			<br/>
		<div className="container" style={{textAlign: "center", marginTop: "10px", height: "20vw"}}>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/Yv_dvG_2VLI"
					title="YouTube video player" frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>

		</div>
			<br/>
			<br/>
		<div className="container" style={{textAlign: "center", marginTop: "10px", height: "20vw"}}>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/8Su5VtKeXU8"
					title="YouTube video player" frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
			<Button>Click Me</Button>
		</div>
			<br/>
			<br/>
		</div>

    </>
}

export default FunVideo;