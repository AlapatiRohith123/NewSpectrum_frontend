import React from "react";
import "./../files/nav.css";
function Post_problem(){
    return(
        <body style={{marginTop: "52px", height: "100%"}}>
            <div className="container-fluid" style={{backgroundColor: "rgba(134, 187, 195,0.7)", minHeight: "100%"}}>
                <div className="content3">
                    <h1>Problem statement</h1>
                    <label for="myfile">Enter field:</label>
                    <input type="text" placeholder="Enter field here.."/>
                    <textarea id="solution" placeholder="Enter your problem here"></textarea>
                    <label for="myfile">Select last date:</label>
                    <input type="date" />
                    <input type="submit" value="Submit" style={{fontSize: "large", padding: "5px", display: "block"}}/>
                </div>
            </div>
        </body>
    )
}
export default Post_problem;