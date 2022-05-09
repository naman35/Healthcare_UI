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
    let pid = parseInt(str);
    fetch("http://localhost:8084/getTimestamp/"+pid,{
        method:"GET",
    })
        .then((response) => response.json())
        .then((responseData)=>{
            console.log(responseData);
            document.getElementById("activityList").innerHTML='';
            let sz = responseData.length;
            let html = '';
            for(let i=0;i<sz;i++) {
                let row = '';
                if (i % 2 == 0) {
                    row = '<tr style="background-color:lavender;">' +
                        '<td>' + responseData[i].loginTime + '</td>' +
                        '<td>' + responseData[i].logoutTime + '</td>' +
                        '<td>' + responseData[i].usefulSession + '</td>' +
                        '</tr>';
                } else {
                    row = '<tr style="background-color:azure;">' +
                        '<td>' + responseData[i].loginTime + '</td>' +
                        '<td>' + responseData[i].logoutTime + '</td>' +
                        '<td>' + responseData[i].usefulSession + '</td>' +
                        '</tr>';
                }
                html = html + row;
            }
            document.getElementById("activityList").innerHTML = html;
        });

    function navigate()
    {
        window.location.href="/patientTracker?id="+pid;
    }

    function logout()
    {
        window.location.href = "/login";
    }

    return <>
        <div>
            <div>
                <nav className="navbar" style={{backgroundColor:"gainsboro"}}>
                    <div className="container-fluid">
            <span className="navbar-text">
            Push-D Logo
            </span>
                        <span>
                <button onClick={navigate} className="btn btn-success" style={{marginTop:"10px",backgroundColor:"white",color:"black"}}>Back</button>
            </span>
                        <span>
                <button onClick={logout} className="btn btn-success" style={{marginTop:"10px",backgroundColor:"white",color:"black"}}>Logout</button>
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
                                Login Time
                            </th>
                            <th>
                                Logout Time
                            </th>
                            <th>
                                Useful Time
                            </th>
                        </tr>
                        </thead>
                        <tbody id="activityList">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
}

export default Responses;