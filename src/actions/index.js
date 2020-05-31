import {setCSGO, setDOTA} from "./creators";

const fetchBlogs = () => (dispatch) => {
    fetch(' http://localhost:3000/')
        .then(resp => {
            return resp.json();
        })
        .then(body => {
            dispatch(setCSGO(body));
        })
}

export {fetchBlogs}