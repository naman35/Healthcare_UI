import {Link} from 'react-router-dom'
import {Navbar,Container,Nav} from "react-bootstrap"
function Responses(){
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
    fetch("http://localhost:8084/patientResponese/"+pid,{
        method:"GET",
    })
        .then((response) => response.json())
        .then((responseData)=>{
            console.log(responseData);
            document.getElementById("FirstName").value = responseData.username;
            document.getElementById("LastName").value = responseData.username;
            document.getElementById("Address").value = responseData.id;
            document.getElementById("ContactNo").value = responseData.role;
            document.getElementById("age").value = responseData.id;
        })

    return <>
        <div>
            <div>
                <nav className="navbar" style={{backgroundColor:"gainsboro"}}>
                    <div className="container-fluid">
            <span className="navbar-text">
            Push-D Logo
            </span>
                        <span>
                <button id-type="button" className="btn btn-success" style={{marginTop:"10px",backgroundColor:"white",color:"black"}}>Logout</button>
            </span>
                    </div>
                </nav>
            </div>
            <div className="card shadow p-3 mb-5 bg-white rounded" style={{margin:"20px",backgroundColor:"white",textAlign:"left"}}>
                <div className="card-header" style={{backgroundColor:"lightsteelblue"}}>
                    <ul className="nav nav-tabs card-header-tabs" >
                        <li className="nav-item" id="detailsTab" onClick={details} style={{backgroundColor:"white"}}>
                            <a className="nav-link" href="#" style={{color:"black"}}>Patient Details</a>
                        </li>
                        <li className="nav-item" id="sectionsTab" onClick={sections}>
                            <a className="nav-link" href="#"  style={{color:"black"}}>Sections performed</a>
                        </li>
                        <li className="nav-item" id="chatTab"  onClick={chat}>
                            <a className="nav-link" href="#" style={{color:"black"}}>Chat</a>
                        </li>
                    </ul>
                </div>
                <div className="table-responsive" id="patientsList" style={{marginTop:"40px"}}>
                    <table className="table table-bordered border border-dark border-1 align-middle">
                        <thead>
                        <tr>
                            <th>
                                Question
                            </th>
                            <th>
                                Section ID
                            </th>
                            <th>
                                Subsection ID
                            </th>
                            <th>
                                Response
                            </th>
                        </tr>
                        </thead>
                        <tbody id="travelList">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
}

export default Responses;