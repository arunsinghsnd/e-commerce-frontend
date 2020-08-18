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


export const signin = user => {
    return fetch(`${API}/signin`,{
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


export const authenticate = (date, next) =>{
    if(typeof window != "undefined"){
        localStorage.setItem('jwt', JSON.stringify(data))
        next();
    }
}


export const signout = next => {
    if(typeof window != "undefined"){
        localStorage.removeItem("jwt")
        next();

        return fetch(`${API}/signout`,{
            method: "GET"
        })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err))
    }
};




export const isAutheticated  = () =>{
    if(typeof window != "undefined"){
        return false     
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"));
    }else{
        return false;
    }
}