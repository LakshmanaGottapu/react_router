import { Routes, Route, Link, Outlet } from "react-router-dom";
import Book from "./Book"
function BooksLayout(){
    return(
        <>
            <ul>
                <li><Link to={"/books/lakshman"}>lakshman</Link></li>
                <li><Link to={"/books/saikumar"}>saikumar</Link></li>
                <li><Link to={"/books/naveen"}>naveen</Link></li>
            </ul>
            <Outlet context={{hello:"World"}}/>
        </>
    )
}

export default BooksLayout;