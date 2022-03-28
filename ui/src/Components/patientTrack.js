function PatientTrack(){
    let sec = "12345";
    let nums = [];
    for(let i=0;i<sec.length;i++){
        nums[i] = parseInt(sec[i]);
    }
    let j =0;
    while(j<nums.length)
    {
        console.log(nums[j]);
        j++;
    }
    function details()
    {
        document.getElementById("detailsTab").style.backgroundColor="white"
        document.getElementById("sectionsTab").style.backgroundColor="lightsteelblue"
        document.getElementById("chatTab").style.backgroundColor="lightsteelblue"
        document.getElementById("details").style.display="block";
        document.getElementById("sections").style.display="none";
        document.getElementById("chat").style.display="none";
    }
    function sections()
    {
        document.getElementById("sectionsTab").style.backgroundColor="white"
        document.getElementById("detailsTab").style.backgroundColor="lightsteelblue"
        document.getElementById("chatTab").style.backgroundColor="lightsteelblue"
        document.getElementById("details").style.display="none";
        document.getElementById("sections").style.display="block";
        document.getElementById("chat").style.display="none";
    }
    function chat()
    {
        document.getElementById("chatTab").style.backgroundColor="white"
        document.getElementById("sectionsTab").style.backgroundColor="lightsteelblue"
        document.getElementById("detailsTab").style.backgroundColor="lightsteelblue"
        document.getElementById("details").style.display="none";
        document.getElementById("sections").style.display="none";
        document.getElementById("chat").style.display="block";
    }

    let chk = [false,false,false,false,false];
    function handleChange(val){
        chk[val] = !chk[val];
    }
    function updateSection()
    {
        let res = "";
        for(let i=1;i<=chk.length;i++)
        {
            if(chk[i])
            {
                res = res + i.toString();
            }
        }
        console.log(res);
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
                <div className="card-body" id="details">
                    <h5 className="card-title">Profile Details</h5>
                    <form className="row" style={{padding:"20px"}}>
                        <div style={{textAlign:"center"}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" alt="Avatar" style={{borderRadius:"50%"}}></img>
                        </div>
                        <div style={{marginTop:"4px"}}>
                            <label>First Name</label>
                            <input type="text" className="form-control" id="firstName" disabled={true}>
                            </input>
                        </div>
                        <div style={{marginTop:"4px"}}>
                            <label>Last Name</label>
                            <input type="text" className="form-control" id="lastName" disabled={true}></input>
                        </div>
                        <div style={{marginTop:"4px"}}>
                            <label>Address</label>
                            <input type="text" className="form-control" id="address" disabled={true}></input>
                        </div>
                        <div style={{marginTop:"4px"}}>
                            <label>Contact No</label>
                            <input type="text" className="form-control" id="contactNo" disabled={true}></input>
                        </div>
                        <div style={{marginTop:"4px",textAlign:"center"}}>
                            <button type="button" id="editBtn" className="btn" style={{marginTop:"10px",backgroundColor:"gainsboro",color:"black"}}>Analytics</button>
                        </div>
                    </form>
                </div>
                <div className="card-body" id="sections" style={{display:"none"}}>
                    <h5 className="card-title">Exercise Performed</h5>
                    <p className="card-text">These are the sections which patient can skip and are not necessary.</p>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <input className="form-check-input me-1" onChange={()=>handleChange(1)} type="checkbox" value="1" aria-label="..."></input>
                                Understanding Depression
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" onChange={()=>handleChange(2)} type="checkbox" value="2" aria-label="..."></input>
                                Enhancing Self Care Motivation
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" onChange={()=>handleChange(3)} type="checkbox" value="3" aria-label="..."></input>
                                Activate: Baby Steps to Move ahead
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" onChange={()=>handleChange(4)} type="checkbox" value="4" aria-label="..."></input>
                                Manage Excessive Worries
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" onChange={()=>handleChange(5)} type="checkbox" value="5" aria-label="..."></input>
                                Learn Self Compassion
                        </li>
                    </ul>
                    <button type="button" onClick={updateSection} className="btn btn-primary" style={{marginTop:"2vw"}}>Update</button>
                </div>
                <div className="card-body" id="chat" style={{display:"none"}}>
                    <h5 className="card-title">Chat</h5>
                </div>
            </div>
        </div>

    </>
}

export default PatientTrack;