import {API} from '../../backend'
// API maeans :- REACT_APP_BACKEND=http://localhost:8000/api/

export const signup = user => {
    return fetch(`${API}/signup`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application"
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => console.log(err))
};




