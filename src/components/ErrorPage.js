import { useRouteError } from "react-router-dom";
import "../styling/ErrorPage.css";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='ErrorPage'>
            <p>You messed up!! Not me, definitely not.</p>
            <p><strong>Error Message: </strong>{error.statusText || error.message}</p>
        </div>
    );
}

export default ErrorPage;
