import { Link, NavLink, Outlet, useNavigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import BooksLayout from "./BooksLayout";
import Book from "./Book";
import About from "./About";
import NewBook from "./NewBook";
import NotFound from "./NotFound";
import BooksList from "./BooksList";
function Home(){
    let navigate = useNavigate();
    function clickhandler(e){
        navigate(e.target.innerText)
        //window.location.href = e.target.innerText;
    }
    return(
        <>
            <div>
                <center>
                    <h1>Welcome to Homepage!</h1>
                    <NavLink to={"/"} style={({isActive})=>{
                        return {color: isActive? 'red' : 'grey'};
                    }}>
                        <button>Home</button>
                    </NavLink>
                    <Link to={"/dashboard"}><button>Login</button></Link>
                    <button onClick={clickhandler}>about</button>
                    <button onClick={clickhandler} >books</button>
                    <button onClick={()=>navigate(-1)} >go back</button>
                    {/* <Outlet/> */}
                </center>
            </div>
            <Routes>
                <Route path="/" element={<center><h1>Home</h1></center>}> </Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route> 
                <Route path="/about" element={<About/>}></Route> 
                <Route path="/books" element={<BooksLayout/>}>
                    <Route index element={<BooksList/>}></Route>
                    <Route path=":bookname"  element={<Book/>}></Route>
                    <Route path= "new" element={<NewBook/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Route> 
            </Routes>
        </>
    )
}

export default Home;