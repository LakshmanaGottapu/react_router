import { Routes, useParams, Route } from "react-router-dom";

function About(){
    const {id} = useParams();
    return(
        <>
            <div>
                <center>
                    <h1>Welcome to About!</h1>
                </center>
            </div>
            <Routes>
                <Route path={"/about/:id"} element={<span>id</span>}></Route>
            </Routes>
        </>
        
    )
}

export default About;