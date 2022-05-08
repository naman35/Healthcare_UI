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
    fetch("http://1839-103-156-19-229.ngrok.io/ViewResponse/23",{
        method:"GET",
    })
        .then((response) => response.json())
        .then((responseData)=>{
            console.log(responseData);
            document.getElementById("responseList").innerHTML='';
            let sz = responseData.length;
            console.log(sz);
            let html = '';
            for(let i=0;i<sz;i++) {
                let row = '';
                if (i % 2 == 0) {
                    row = '<tr style="background-color:lavender;">' +
                        '<td>' + responseData[i].quesContent + '</td>' +
                        '<td>' + responseData[i].sectionid + '</td>' +
                        '<td>' + responseData[i].subsection_id + '</td>' +
                        '<td>' + responseData[i].response + '</td>' +
                        '</tr>';
                } else {
                    row = '<tr style="background-color:azure;">' +
                        '<td>' + responseData[i].quesContent + '</td>' +
                        '<td>' + responseData[i].sectionid + '</td>' +
                        '<td>' + responseData[i].subsection_id + '</td>' +
                        '<td>' + responseData[i].response + '</td>' +
                        '</tr>';
                }
                html = html + row;
            }
            document.getElementById("responseList").innerHTML = html;
        });

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
                        <tbody id="responseList">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
}

export default Responses;