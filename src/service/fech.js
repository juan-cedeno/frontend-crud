

const BASE_URL = process.env.REACT_APP_API_URL


export  const fechApi = (endPoint , data , method = 'GET') => {

    const url = `${BASE_URL}/${endPoint}`

    if(method === 'GET') {
        return fetch(url)
    }else {
        return fetch(url , {
            method,
            headers : {
                'Content-type':'application/json'
            },
            body : JSON.stringify(data)
        })
    }

}