import {useContext} from "react";
import AppContext from "../../storage/app-context";


function Alert() {

    const {error} = useContext(AppContext);

    return (
        <div className="alert alert-danger text-center text-white col-lg-6 col-md-10 col-6 mx-auto mt-5" role="alert">
            {error}
        </div>
    );
}

export default Alert;
