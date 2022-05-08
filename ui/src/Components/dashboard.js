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

function Dashboard(){
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
            <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY" height={"100%"} width={"50%"}></iframe>
        </div>
        <div style={{marginTop:"10px",opacity:0.7}}>
            <div className="row" style={{textAlign:"center"}}>
                <div className="col-md-6">
                    <button id="overviewBtn" type="button" className="btn btn-success" style={{marginTop:"10px",backgroundColor:'#15983e',color:"white",width:"40vw"}} onClick={showOverview}>Overview</button>
                </div>
                <div className="col-md-6">
                    <button id="signBoardBtn" type="button" className="btn btn-success" style={{marginTop:"10px",backgroundColor:'#15983e',color:"white",width:"40vw"}} onClick={showSign}>Sign Boards</button>
                </div>
            </div>
            <div className="row" style={{textAlign:"center"}}>
                <div className="col-md-6">
                    <button id="tipsBtn" type="button" className="btn btn-success" style={{marginTop:"10px",backgroundColor:'#15983e',color:"white",width:"40vw"}} onClick={showTips}>Tips of Completion</button>
                </div>
                <div className="col-md-6">
                    <button id="termUseBtn" type="button" className="btn btn-success" style={{marginTop:"10px",backgroundColor:'#15983e',color:"white",width:"40vw"}} onClick={showTerms}>Terms of Use</button>
                </div>
            </div>
        </div>
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{margin:"20px",backgroundColor:"white"}}>
                <div className="card-body" id="overview" style={{textAlign:"left"}}>
                    <div id="0">
                            <p><strong>{t("OVERVIEW")}</strong></p>
                                <p>{t("dashboardparaone")}</p>
                                <p class="pclass">
                                    <strong>{t("dashboardPara2")}</strong>
                                </p>
                                <p>
									{t("dashboardPara3")}
                                </p>
                                <p class="pclass">
                                    <strong>{t("dashboardPara4")}</strong>
                                </p>
                                <p>
									{t("dashboardPara5")}
                                </p>
                                <div class="image">
                                    {/* <img alt="" src="images/path.png" width="1024px;" height="450px;" class="img-responsive">
                                    </img> */}
                                    <h2><span>
                                        <a href="/session" className="btn btn-success" style={{marginTop:"10px",backgroundColor:'#15983e',color:"white",width:"30vw"}} data-toggle="modal" data-target="#showmoreModal">{t("dashboardLink1")}</a>
                                    </span></h2>

                                </div>
                    </div>
                </div>
                <div className="card-body"  style={{display:"none",textAlign:"left"}} id="signBoard">
                    <div id="1">
                    <p><strong>{t("dashboardPara6")}</strong></p>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" height="190" width="190" alt="...">
                                    </img>
                            </div>
                            <div className="col-md-8">
                                <h4>
									{t("dashboardH4_1")}
                                </h4>
								{t("dashboardPara7")}
                            </div>
                        </div>
                        <hr></hr>
                        <hr></hr>

                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" height="190" width="190" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <h4>
									{t("dashboardH4_2")}
                                </h4>
								{t("dashboardPara8")}
                            </div>
                        </div>
                        <hr></hr>
                        <hr></hr>

                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" height="190" width="190" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <h4>
									{t("dashboardH4_3")}
                                </h4>
								{t("dashboardPara9")}
                            </div>
                        </div>
                        <hr></hr>
                        <hr></hr>

                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" height="190" width="190" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <h4>
									{t("dashboardH4_4")}
                                </h4>
								{t("dashboardPara10")}
                            </div>
                        </div>
                        <hr></hr>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" height="190" width="190" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <h4 className="media-heading">
									{t("dashboardH4_5")}
                                </h4>
								{t("dashboardPara11")}
                            </div>
                        </div>
                        <hr></hr>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" height="190" width="190" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <h4 className="media-heading">
									{t("dashboardH4_6")}
                                </h4>
								{t("dashboardPara12")}
                            </div>
                        </div>

                    </div><a href="/session" className="btn btn-success" style={{marginTop:"10px",backgroundColor:'#15983e',color:"white",width:"30vw"}} data-toggle="modal" data-target="#showmoreModal">{t("dashboardLink1")}</a>
                </div>
                <div className="card-body"  style={{display:"none",textAlign:"left"}} id="tips">
                    <div id="2">

							<p><strong>TIPS FOR COMPLETION</strong></p>
							<p>
								<strong>OUR STRONG RECOMMENDATIONS AND TIPS FOR YOU
									ABOUT COMPLETING PUSH-D PROGRAM:</strong>
							</p>
							<ul>
								<li><strong>Total duration : </strong>For maximum benefits,
									we recommend that you make all attempts to complete the program
									within 1.5 months of registering for the same. Your
									registration to this site is valid for a period of 3 months
									from the date of completing your registration process.</li>
                                    <br></br>
								<li><strong>Frequency of engaging with the
										program/number of slots per week : </strong>Regularity and continuity
									are critical for deriving benefit of this self-care program.</li>
                                <br></br>
								<li>We suggest you to keep aside at least two slots on two
									different weekdays (Non-consecutive days, e.g. Monday and
									Thursday rather than Monday and Tuesday) for working on this
									program. This way, you are likely to finish the program in
									about one and half to two months.</li>
                                <br></br>
								<li><strong>Your slot is your session : </strong>A slot
									here refers to a continuous time period during which you go
									over the contents of the program and complete the exercises
									contained therein. A slot is similar to a session that people
									might have with a therapist/counsellor in face-to-face
									interactions.</li>
                                <br></br>
								<li><strong>Slot-duration : </strong>As this is a self-care
									program, we recommend you to keep each slot for minimum 20
									minutes and maximum up to 45 minutes.</li>
                                <br></br>
								<li><strong>Time-estimates for various sections :
								</strong>We have provided a rough estimate of the time required to
									complete each section, which may help you to plan as you move
									from one section to the next. <br></br>If you were just
									mechanically/passively reading the content under each of the
									sections, you might just finish it in a very short period of
									time. But, this may not be of much use! <br></br>We would want
									you to take your time to think about what you are reading as
									well as during the interval period between slots when you are
									trying to apply what you read. <br></br>We encourage you to go
									over the content in each section at least one more time after
									you have gone over it once. This is similar to what happens in
									direct face to face sessions with a therapist, wherein a few
									key ideas may be discussed in more than one session so that you
									can consolidate your learning and see its personal relevance. <br></br>The
									time-estimates and the recommended number of sessions provided
									at the start of each section take into account the time needed
									to go over the section more than once.</li>
								<br></br>
								<li><strong>Apply and Practice : </strong>You will derive
									maximum benefit when you try to apply and practice what you
									discover/learn during your sessions. We recommend that you use
									your workbook and complete various exercises and keep a record
									of how you apply in your daily life whatever you learn in the
									program. Workbook  can be  accessed  on the  web-browser  version  of PUSH-D and  is best used on laptop/desktop.</li>
								<br></br>
								<li><strong>Schedule your next slot and receive a
										mobile reminder : </strong>At the end of each slot, you have the
									facility of scheduling your next slot for yourself. A mobile
									prompt will be sent as a reminder to you on the day you have
									scheduled the next slot.</li>
								<br></br>
								<li><strong>E-Assistance: : </strong>We will be
									periodically sending mobile based messages/prompts and /or
									emails to keep you motivated to engage in self-care. You can
									mail us for troubleshooting any difficulty in completing
									PUSH-D/ any new mental health problem/requesting for our
									suggestions regarding seeking face to face professional
									consultation/for seeking an appointment with PUSH-D
									consultants.</li>
								<br></br>
								<li><strong>Connect over email : </strong>You may choose to
									drop us a mail to clarify your doubts regarding the program
									exercises etc. Such e-mails would be responded to within three
									working days.<br></br>Mail id :  push.d.nimhans@gmail.com</li>
								<br></br>
							</ul>
                    </div>
					<a href="/session" className="btn btn-success" style={{marginTop:"10px",backgroundColor:'#15983e',color:"white",width:"30vw"}} data-toggle="modal" data-target="#showmoreModal">{t("dashboardLink1")}</a>
                </div>
                <div className="card-body" id="termUse" style={{display:"none",textAlign:"left"}}>
                    <div id="3">
						<p><strong>TERMS OF USE</strong></p><br></br>
							<p>
								<strong>The delimited scope and purpose of the Push-D
									program</strong>
							</p>
							<p>The Information contained in, or accessed through, this
								website is for your general information and Self-development use
								only and is not intended to be used as medical advice and should
								not be used to diagnose, treat, cure or prevent any medical
								condition.</p>
							<p>The diagnosis and treatment of clinical depression and
								anxiety requires a medical practitioner or qualified mental
								health practitioner. People seeking a diagnosis or treatment of
								depression, anxiety or other mental health disorders should
								consult a medical practitioner or mental health professional.
								The website is not designed to treat common mental health
								disorders. It is merely designed to help people to help
								themselves to cope better with depressive symptoms. In a general
								sense, people are likely to find the information on self-care to
								be useful; however this is NOT a substitute for seeking
								professional consultation and advice. There is no claim made
								that the material contained on this website is likely to be of
								help for everyone who uses this website.</p>
							<p>If you have a mental health condition or if you are likely
								to have a diagnosis of mental health condition, you should seek
								professional consultation from a trained mental health
								professional or a medical consultant.</p>
							<p>If at the time of registering for this self-care program
								or at any point of time after registering for this self-care
								program, you notice that you are getting thoughts about harming
								yourself or harming another person, you should not use or
								continue to use this Program but instead should seek urgent
								medical advice. If Push-D becomes aware that you are
								experiencing suicidal thoughts or thoughts of harming yourself
								or any other person in any way, it would strongly recommend you
								to immediately seek medical help through a direct/face-to face
								contact with any trained professional of your choice. If you so
								desire, the Push-D team will try its best to provide you some
								information regarding the availability of centers/trained mental
								health professional in your region, if such information is
								available to the Push-D team.</p>
							<p>We strongly recommend that you always seek the advice of a
								medical practitioner or qualified mental health practitioner for
								any questions regarding personal health or medical conditions.
								We strongly recommend that you never disregard, avoid or delay
								just obtaining medical advice from your medical practitioner or
								qualified mental health practitioner just because of something you
								have read on this webite.</p>
							<p>If you think you may have a medical emergency, call a
								local help-line/reach out to an emergency service.</p>
							<p>NIMHANS does not recommend or endorse any specific tests,
								providers (including, but not limited to, hospitals and
								physicians), products, procedures, or other information that may
								be mentioned on the website. Any opinions expressed on the
								website are the opinions of the individual authors, not of
								NIMHANS.</p>
							<p>The few questionnaires available on this Website are
								intended solely for the purpose of identifying the anxiety and
								depressive symptoms or giving you a rough idea of a particular
								issue and are not designed to provide a diagnosis.</p>
							<p>You represent and warrant that you are at least 18 years
								of age or older. Persons under age 18 with depressive symptoms
								are advised to talk with their parents/guardians about getting
								direct help from a qualified mental health professional/medical
								professional.</p>
							<p>By accessing and using the website, or any portion of the
								website, you agree to be bound by each of the Terms of Use and
								all applicable laws and regulations governing the website. If
								you do not agree with any of the Terms of Use, you are not
								authorized to access or use the website for any purpose. We
								reserve the right to modify these Terms of Use at any time. Your
								use of the website following any such modification constitutes
								your agreement to follow and be bound by the Terms of Use as
								modified.</p>
							<br></br>
							<p>
								<strong>Fees, charges and cancellation</strong>
							</p>
							<p>There is no fee or charge for you to register with the
								PUSH-D. However, if you access the Program through the use of a
								mobile phone or the Internet, your normal phone/Internet charges
								will apply.</p>
							<p>There is no minimum contract associated with the use of
								PUSH-D. You may choose to stop using the Program at any time.</p>
							<br></br>
							<p>
								<strong>License to Use</strong>
							</p>
							<p>The information and materials on the website unless
								otherwise stated, are copyrighted by the National Institute for
								Mental Health and Neuro Sciences (NIMHANS), and may be used by
								registered users solely for their own personal use. We grant you
								a limited, personal, non-exclusive, non-transferable license to
								use our content for your own personal, non-commercial use.
								Except as otherwise provided, you acknowledge and agree that you
								have no right to modify, edit, copy, reproduce, create
								derivative works of, reverse engineer, alter, enhance or in any
								way exploit any of the content in any manner, except for
								modifications in filling out the forms for your authorized use.
								You shall not remove any copyright notice from any page/form.</p>
							<br></br>
							<p>
								<strong>Disclaimer of Warranties</strong>
							</p>
							<p>You agree to assume total responsibility and risk for your
								use of the website, the service and the content. We make no
								express or implied warranties, representations or endorsements
								whatsoever with respect to the website, the service or the
								content. We expressly disclaim all warranties, including, but
								not limited to, implied warranties of merchantability, fitness
								for a particular purpose, title and non-infringement with regard
								to the website, the service, and the content. We do not warrant
								that the functions performed by the website or the service will
								be uninterrupted, timely, secure or error-free, free of viruses
								or other malicious code, or that defects in the website/server
								or the service will be corrected. We do not warrant the
								accuracy, currency, or completeness of the content, or that any
								errors in the content will be corrected. We reserve the right to
								correct any errors, inaccuracies or omissions and to change or
								update information at any time without prior notice. We do not,
								however, guarantee that any errors, inaccuracies or omissions
								will be corrected.The site, the service and the content are
								provided on an 'as is' and 'as available' basis. The foregoing
								does not affect any warranties which cannot be excluded or
								limited under applicable law.</p>
							<br></br>
							<p>
								<strong>Disclaimer of liability</strong>
							</p>
							<p>
								You understand and agree that under no circumstances we will be
								liable for any damages whatsoever, including, but not limited to
								direct, indirect, incidental, consequential, or punitive damages
								arising out of the use of or inability to use the website, the
								service, or the content. If you are dissatisfied with the
								website, the service, the content, or the terms of use, your
								sole and exclusive remedy is to discontinue using the website.
								You acknowledge, by your use of the website, that your use of
								the website is at your sole risk. <strong>We are not
									liable to any user or person for any decision made or action
									taken in reliance upon information or content displayed or
									provided in this website.</strong> It is your responsibility to make
								your own decisions about the currency, completeness, accuracy,
								reliability and suitability of information, services, programs
								and communities of interest contained in (or accessible from)
								linked websites.
							</p>
							<br></br>
							<p>
								<strong>Security, viruses, errors and availability</strong>
							</p>
							<p>The internet is an insecure public network which means
								there are risks that information sent to or from this website
								may be intercepted, corrupted or modified by third parties. In
								addition, files obtained from or through this website may
								contain computer viruses, disabling codes, worms or other
								devices or defects. You bear the risks and responsibility for
								any loss or damage caused, directly or indirectly, by these
								risks and we accept no liability for any interference with, or
								damage to, your computer system, software or data occurring in
								connection with this Website.</p>
							<br></br>
							<p>
								<strong>Use of cookies</strong>
							</p>
							<p>
								<strong>The website uses transient or session cookies.
								</strong>Cookies are pieces of information that a website transfers to
								your computer's hard disk when you open the program pages.
								Cookies by themselves do not identify you or any user but they
								do identify your browser. Because this website uses 'transient'
								cookies, your computer does not retain the information delivered
								in the cookie once you leave the website. When you log out, the
								transient cookie set up by the website is destroyed, and no
								personal information is retained which could identify you or
								your browser next time you log on to the website. Most web
								browsers are set up to accept cookies, and while you can set
								your browser to not accept cookies you will not be able to use
								this website if you do this.
							</p>
							<p>The website may impose limits on the size of files
								uploaded by the users into their workbook. We may also filter,
								remove or refuse to post files which interfere with the
								technical operations of the program, including files which
								threaten to overload or crash a system.</p>
							<br></br>
							<p>
								<strong>Privacy</strong>
							</p>
							<p>This statement sets out the National Institute for Mental
								Health and Neuro Sciences policy relating to the collection and
								use of your personal information in the PUSH-D Program. This
								Notice is in addition to the Terms of Use. Your registration as
								a PUSH-D user constitutes your agreement to terms of the Privacy
								Notice and the Terms of Use.</p>
							<p>Please note that this Privacy Notice applies only to the
								PUSH-D site and not to any other sites that are linked to the
								PUSH-D site or mentioned on the website.</p>
							<br></br>
							<p>
								<strong>Your personal information is important to us</strong>
							</p>
							<p>NIMHANS recognizes that your privacy is very important to
								you and that we are under a legal and ethical obligation to
								protect the integrity of your personal information. When you
								register with PUSH-D you will be asked to enter your username.
								We suggest that you use a pseudonym or a made-up username.</p>
							<br></br>
							<p>
								<strong>Why the program collects personal information
									from you</strong>
							</p>
							<p>When you enter the PUSH-D Program you will be asked to
								complete a number of tests and enter some information, which you
								may consider to be sensitive, about yourself. The program asks
								for this information in order to provide you with tailored and
								specifically relevant information about stress, anxiety and
								depression. The information is stored in your workbook in the
								PUSH-D database along with information about the date and time
								you complete each exercise. Information is also collected in
								summary form about most frequently visited pages. This is
								intended to help the PUSH-D designers understand how visitors
								use the Program. All the information gathered is stored on the
								NIMHANS server and is subject to stringent security measures.</p>
							<ul>
								<li>We will not use or disclose any information about you
									without your consent unless we are required to do so by law;</li>
								<li>We will never use your personal information to send you
									unsolicited information or "spam".</li>
							</ul>
							<p>Like most Internet sites, this website is accessible
								worldwide. However, not all products or Services are available
								to all persons or in all geographic locations. PUSH-D reserves
								the right to limit the provision of its products and Services to
								any person, geographic area, or jurisdiction. This website is
								not intended for use outside India and its content may not be
								most appropriate for those residing outside the country. You
								agree to comply with all applicable laws and local rules or
								restrictions relating to this website.</p>
							<br></br>
							<p>
								<strong>Risks and benefits</strong>
							</p>
							<p>PUSH-D offers a set of tools and techniques which aim to
								benefit users by;</p>
							<ol>
								<li>Helping them to better understand their sad mood</li>
								<li>Helping them to better understand the things
									(situations) that trigger their sad mood or anxious
									mood/stress.</li>
								<li>Providing suggestions for minimizing the triggers, and
									coping with and managing the symptoms of mild levels of sadness</li>
								<li>Providing (interactive) self-help instruction and
									guidance and exercises for managing depressive symptoms of low
									severity. The suggestions are based on the available research
									literature and commonly used psychological principles in
									management of depression.</li>
							</ol>
							<p>PUSH-D does not 'treat' you, or replace treatment provided
								by a health and/or mental health professional.</p>
							<p>Therefore, there are risks associated with its use,
								including;</p>
							<ol>
								<li>the possibility that your symptoms persist while using
									the Program</li>
								<li>the possibility that your symptoms worsen while using
									the Program</li>
								<li>the possibility that new symptoms or health conditions
									develop while using the Program</li>
								<li>the possibility that the Program is not suitable for
									you at a particular point in time.</li>
							</ol>
							<br></br>
							<p>
								<strong>External links</strong>
							</p>
							<p>Links to external websites on the Program are provided for
								easy access to various sources of information for your
								convenience only. Such links do not constitute or imply an
								endorsement, sponsorship, or recommendation by NIMHANS of the
								third party, the third-party website, or the information
								contained therein. You acknowledge and agree that the NIMHANS or
								PUSH-D Team is not responsible for the availability of any such
								site and that it does not endorse or warrant, and is not
								responsible or liable for, any such website, its content, its
								privacy policy or practices, or the acts or omissions of its
								operators. PUSH-D makes no warranty and accepts no
								responsibility or liability in relation to any information,
								products, services or advice provided by these external links
								and any views or recommendations provided in linked websites do
								not necessarily represent those of PUSH-D. You acknowledge that
								you enter any third party websites at your own risk.</p>
							<br></br>
							<p>
								<strong>Copyright </strong>
							</p>
							<p>NIMHANS and the PUSH-D team respect the intellectual
								property rights of others. If you believe that your work has
								been copied in a way that constitutes copyright infringement,
								please provide the following information in writing to us</p>
							<ul>
								<li>A physical or electronic signature of a person
									authorized to act on behalf of the owner of the copyright.</li>
								<li>A description of the copyrighted work that you claim
									has been infringed.</li>
								<li>A description of the material that you claim to be
									infringing or to be the subject of infringing activity and that
									is to be removed or access to which is to be disabled, and
									information sufficient to permit us to locate the material.</li>
								<li>Information so that we can contact you, such as
									address, telephone number and e-mail address.</li>
								<li>A statement that you have a good faith belief that use
									of the material in the manner complained of is not authorized
									by the copyright owner, its agent, or the law.</li>
								<li>A statement that the information in the notification is
									accurate that you are the copyright owner or are authorized to
									act on behalf of the owner of a copyright that is allegedly
									infringed.</li>
							</ul>
							<p>Upon the receipt of a proper notice of claimed
								infringement, we shall respond at the earliest to resolve the
								claim between the notifying party and the alleged infringer who
								provided the content in issue, including, where applicable,
								removing, or disabling access to content claimed to be
								infringing or by removing or disabling access to links to such
								content.</p>
							<br></br>
							<p>
								<strong>Your obligations</strong>
							</p>
							<p>You are solely responsible for any content or material
								which you post or upload on the Program, or which is posted by
								another person using your user name or password. PUSH-D excludes
								all liability (to the extent permitted by law) for any loss,
								damage or expenses suffered by you or claims made against you
								arising from content or material which you post or upload on the
								Program, or which is posted by another person (whether using
								your username or password or otherwise).</p>
							<br></br>
							<p>
								<strong>Use of the website</strong>
							</p>
							<ul>
								<li>You agree not to use the website for unlawful purposes,
									and you agree to comply with all applicable laws, rules and
									regulations while using the website.</li>
								<li>You agree not to use the website for any commercial
									purposes, including any advertisement, commercial solicitation,
									or promotion of any specific goods or services.</li>
								<li>You agree not to collect or use any information or
									other data available via the website inappropriately.</li>
								<li>You may not distribute, modify, copy (except as set
									forth in these Terms of Use), transmit, display, reuse,
									reproduce, publish, license, create derivative works from,
									transfer, translate, sell, reverse engineer, decompile or
									disassemble, or otherwise use the website or the Content (as
									defined herein), except as specifically authorized in the Terms
									of Use, without written permission from NIMHANS..</li>
								<li>You agree not to use the website to post or transmit
									any threatening, harmful, false, misleading, abusive,
									harassing, libelous, defamatory, vulgar, obscene, scandalous,
									inflammatory, pornographic, or profane material or any material
									that could constitute or encourage conduct that would be
									considered a criminal offense, give rise to civil liability, or
									otherwise violate any law.</li>
								<li>You agree not to use the website to advertise or
									perform any commercial solicitation, or otherwise exploiting
									for any commercial purposes any portion of, use of or access to
									the website.</li>
								<li>You agree not to incorporate any code into the code of
									the website or to use the website to post or transmit any
									virus, worm, Trojan Horse, time bomb, spyware, bot, tracking
									device, screen scraping software or other computer code, file
									or program that is harmful or invasive or is intended to damage
									or hijack the operation of, or to monitor the use or operation
									of the Site or any user of the website.</li>
								<li>You agree not to use the website in conjunction with
									any screen scraping software.</li>
								<li>You agree not to restrict or inhibit any other person
									from use of the website. You agree not to interfere with or
									disrupt the operation of the website or the servers or networks
									used to make the website available, or violate any
									requirements, procedures, policies or regulations of such
									networks.</li>
								<li>You agree not to use the website to harvest or collect
									personally identifiable information about users of the Site.</li>
								<li>You agree not to use the website to disrespect the
									privacy or views of others.</li>
								<li>You agree not to use the website to impersonate another
									person or supply false information about yourself or another
									person.</li>
								<li>You agree not to allow any other person or entity to
									use your identification to post or view comments, or to
									otherwise access or use the website.</li>
								<li>You agree not to post material on the website that
									infringes on the copyright or other intellectual property
									rights of others, or the privacy, publicity, or other personal
									rights of others.</li>
							</ul>
							<br></br>
							<p>
								<strong>Your Suggestions</strong>
							</p>
							<p>We appreciate your feedback or other suggestions about the
								website, the Service and the Content, but you understand that we
								may use your feedback or other suggestions without any
								obligation to compensate you for them.</p>
							<p>For any queries or suggestions or complaints, you may
								contact: push.d.nimhans@gmail.com</p>
							<br></br>
							<p>
								<strong>Last Updated on : 1 July 2018 </strong>
							</p>
							<hr></hr>
							<p>
								I agree to the terms
								<Link to="/session"><button id="agree" type="button" class="btn btn-success" onclick="agreeButton()" disabled="">Agree &amp; Continue to Exercise</button></Link>
							</p>
							<p>Contact Us : push.d.nimhans@gmail.com</p>
                    </div>
                </div>
        </div>
		</div>

    </>
}

export default Dashboard;