import { useOutletContext, useParams } from "react-router-dom";
function Book(){
    const {bookname} = useParams();
    const obj = useOutletContext();
    return(
        <div>
            <h1>The Book Name is: {bookname} {obj.hello} </h1>
        </div>
    )
}

export default Book;