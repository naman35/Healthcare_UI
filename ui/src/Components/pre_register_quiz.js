function PreRegister(){

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
    function markAnswer(data){
        document.getElementById(data).style.backgroundColor="lightgreen";
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
                    <div >
                        <div className="row" style={{marginBottom:"5px"}}>
                            A good mood is solution for all your problems. What about your mood today?
                        </div>
                        {/*<div>*/}
                        {/*    <ul className="list-group list-group-horizontal">*/}
                        {/*        <li className="list-group-item"><button>An item</button></li>*/}
                        {/*        <li className="list-group-item">A second item</li>*/}
                        {/*        <li className="list-group-item">A third item</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        <div className="row" id="patientsList">
                            <ul className="list-group list-group-horizontal">
                            <button type="button" id="btn1" onClick={()=>markAnswer("btn1")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>
                                Bad
                            </button>
                            <button type="button" id="btn2" onClick={()=>markAnswer("btn2")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>okay</button>
                            <button type="button" id="btn3" onClick={()=>markAnswer("btn3")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>happy
                            </button>
                            <button type="button" id="btn4" onClick={()=>markAnswer("btn4")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>jolly
                            </button></ul>
                        </div>
                        <div className="row" style={{marginBottom:"5px"}}>
                            Negative thoughts ruins everything.  Do you frequently get such thoughts?
                        </div>
                        {/*<div>*/}
                        {/*    <ul className="list-group list-group-horizontal">*/}
                        {/*        <li className="list-group-item"><button>An item</button></li>*/}
                        {/*        <li className="list-group-item">A second item</li>*/}
                        {/*        <li className="list-group-item">A third item</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        <div className="row" id="patientsList">
                            <ul className="list-group list-group-horizontal">
                                <button type="button" id="btn1" onClick={()=>markAnswer("btn1")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>
                                    Bad
                                </button>
                                <button type="button" id="btn2" onClick={()=>markAnswer("btn2")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>okay</button>
                                <button type="button" id="btn3" onClick={()=>markAnswer("btn3")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>happy
                                </button>
                                <button type="button" id="btn4" onClick={()=>markAnswer("btn4")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>jolly
                                </button></ul>
                        </div>
                        <div className="row" style={{marginBottom:"5px"}}>
                            Sharing your problems with someone helps you to overcome them. Let us know what's the issue you are facing?
                        </div>
                        <div className="row" id="patientsList">
                            <ul className="list-group list-group-horizontal">
                                <button type="button" id="btn1" onClick={()=>markAnswer("btn1")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>
                                    Bad
                                </button>
                                <button type="button" id="btn2" onClick={()=>markAnswer("btn2")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>okay</button>
                                <button type="button" id="btn3" onClick={()=>markAnswer("btn3")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>happy
                                </button>
                                <button type="button" id="btn4" onClick={()=>markAnswer("btn4")} className="optBtn list-group-item list-group-item-action" style={{width:"80px",backgroundColor:"coral"}}>jolly
                                </button></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default PreRegister;