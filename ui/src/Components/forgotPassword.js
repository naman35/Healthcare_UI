function ForgotPassword(){
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
                        <span>
                    <button id-type="button" className="btn btn-success" style={{marginTop:"10px",backgroundColor:"white",color:"black"}}>Logout</button>
                </span>
                    </div>
                </nav>
            </div>
            <div style={{paddingLeft:"18vw"}}>
                <div className="card p-3 shadow mb-5 bg-white rounded" style={{margin:"20px",backgroundColor:"white",width:"60vw"}}>
                    <div className="card-body">
                        <form className="row" style={{padding:"10px",textAlign:"left"}}>
                            <div style={{marginTop:"4px"}}>
                                <label>Email ID</label>
                                <input type="text" className="form-control" id="emailId" required>
                                </input>
                            </div>
                            <div style={{marginTop:"4px"}}>
                                <label>New Password</label>
                                <input type="password" className="form-control" id="newPass" required></input>
                            </div>
                            <div style={{marginTop:"4px"}}>
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" id="confPass" required></input>
                            </div>
                            <div style={{marginTop:"4px",textAlign:"center"}}>
                                <button type="button" id="editBtn" onClick={changePass} className="btn" style={{marginTop:"10px",backgroundColor:"lightgreen",color:"black"}}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default ForgotPassword;