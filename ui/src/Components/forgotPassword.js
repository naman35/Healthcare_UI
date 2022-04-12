import { Translations_Fr } from "./translateFr"
import { Translations_En } from "./translateEn"
import { Translations_Hn} from "./translateHn";
import i18n from "i18next";
import { initReactI18next,useTranslation} from "react-i18next";

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


function ForgotPassword(){
    const { t } = useTranslation();
    function updLang(val){
        i18n.changeLanguage(val);
    }
    function changePass(){
        let email = document.getElementById("emailId").value
        let p = document.getElementById("newPass").value;
        let cp = document.getElementById("confPass").value;
        if(email === "" || email === " ")
        {
            alert("Please enter valid email Id");
            return;
        }
        if(p === "" || p === " ")
        {
            alert("Invalid Password");
            return;
        }
        if(cp === p)
        {
            alert("Password Changed");
            window.location.href="/dashboard";
        }
        else
        {
            alert("Password mismatch");
        }
    }
    return <>
        <div>
            <div>
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
            <div style={{paddingLeft:"18vw"}}>
                <div className="card p-3 shadow mb-5 bg-white rounded" style={{margin:"20px",backgroundColor:"white",width:"60vw"}}>
                    <div className="card-body">
                        <form className="row" style={{padding:"10px",textAlign:"left"}}>
                            <div style={{marginTop:"4px"}}>
                                <label>{t("emailid")}</label>
                                <input type="text" className="form-control" id="emailId" required>
                                </input>
                            </div>
                            <div style={{marginTop:"4px"}}>
                                <label>{t("newPassword")}</label>
                                <input type="password" className="form-control" id="newPass" required></input>
                            </div>
                            <div style={{marginTop:"4px"}}>
                                <label>{t("confPassword")}</label>
                                <input type="password" className="form-control" id="confPass" required></input>
                            </div>
                            <div style={{marginTop:"4px",textAlign:"center"}}>
                                <button type="button" id="editBtn" onClick={changePass} className="btn" style={{marginTop:"10px",backgroundColor:"lightgreen",color:"black"}}>{t("submit")}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default ForgotPassword;