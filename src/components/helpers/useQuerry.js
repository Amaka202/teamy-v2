import {useLocation} from "react-router-dom";

function useQuerry() {
    return new URLSearchParams(useLocation().search);
}

export default useQuerry;
