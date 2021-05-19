


export default function api(path, method, params) {
    let options;
 

    options = {
        headers: {

            'Content-Type': 'application/json',

        },
        method: method,
        body: JSON.stringify(params) 
    };

    return fetch(path, options)
        .then(resp => resp.json())
        .then(json => {

            return json
        })
        .catch(error => {

            alert('Network error. Please make sure you are connected to internet.')
            console.log(error.message)

        });
}