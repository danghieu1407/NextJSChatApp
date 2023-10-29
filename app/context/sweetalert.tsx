import {Swal} from "sweetalert2";

const sweetalert  = () = {
    return (
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    );
}

export default sweetalert;