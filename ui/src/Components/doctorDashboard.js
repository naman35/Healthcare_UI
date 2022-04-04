import PatientTrack from "./patientTrack";

function DoctorDashboard(){
    // function Redirect(val){
    //     alert(val);
    // }
    fetch("http://0f76-119-161-98-68.ngrok.io/patientDetails/1",{
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
            <div className="card p-3 shadow mb-5 bg-white rounded" style={{margin:"20px",backgroundColor:"white"}}>
                <div className="card-body">
                    <div style={{textAlign:"center",margin:"1vw"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" alt="Avatar" style={{borderRadius:"50%"}}></img>
                    </div>
                    <h3 style={{textAlign:"left"}}>
                        List of patients
                    </h3>
                    <div className="list-group" id="patientsList">

                    </div>
                </div>
            </div>
        </div>

    </>
}

export default DoctorDashboard;