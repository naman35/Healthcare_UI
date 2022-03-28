function DoctorDashboard(){
    // fetch("http://a6b5-103-156-19-229.ngrok.io/getDetails",{
    //     method:"GET",
    // })
    //     .then((response) => response.json())
    //     .then((responseData)=>{
    //         document.getElementById("firstName").value = responseData[0].username;
    //         document.getElementById("lastName").value = responseData[0].username;
    //         document.getElementById("address").value = responseData[0].id;
    //         document.getElementById("contactNo").value = responseData[0].role;
    //         document.getElementById("age").value = responseData[0].id;
    //     })
    function saveInfo(){
        let first = document.getElementById("firstName").value
        let last = document.getElementById("lastName").value
        let addr = document.getElementById("address").value
        let contact = document.getElementById("contactNo").value
        let age = document.getElementById("age").value
        let person = {
            firstName:first,
            lastName:last,
            address:addr,
            contactNo:contact,
            age:age
        }
        document.getElementById("firstName").disabled=true;
        document.getElementById("lastName").disabled=true;
        document.getElementById("address").disabled=true;
        document.getElementById("contactNo").disabled=true;
        document.getElementById("age").disabled=true;
        document.getElementById("editBtn").style.display="block";
        document.getElementById("saveBtn").style.display="none";
    }
    function editInfo(){
        document.getElementById("firstName").disabled=false;
        document.getElementById("lastName").disabled=false;
        document.getElementById("address").disabled=false;
        document.getElementById("contactNo").disabled=false;
        document.getElementById("age").disabled=false;
        document.getElementById("editBtn").style.display="none";
        document.getElementById("saveBtn").style.display="block";
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
                    <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action" style={{backgroundColor:"lightgreen"}}>
                            Raj Oberoi
                        </button>
                        <button type="button" className="list-group-item list-group-item-action" style={{backgroundColor:"white"}}>Virat Kohli</button>
                        <button type="button" className="list-group-item list-group-item-action" style={{backgroundColor:"lightgreen"}}>James Bond
                        </button>
                        <button type="button" className="list-group-item list-group-item-action" style={{backgroundColor:"white"}}>Bhuvan Bam
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default DoctorDashboard;