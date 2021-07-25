// Add your code here
function submitData(name, email){

    const formData = {name: `${name}`, email: `${email}`};

    const configurationObject = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json',
                 "Accept": "application/json"},
        body: JSON.stringify(formData)}
   
    return  fetch('http://localhost:3000/users', configurationObject)
    .then(resp => resp.json())
    .then(resp => {
        // let body = document.querySelector('body')
        let body = document.querySelector('body');
        body.append(`${resp.id}`)
        // p.append(`${resp.id}`)
    })
    .catch(function(error) {
        alert(error.message);
        console.log(error.message);
        document.querySelector('body').append(`${error}`)
    })
    
}

    
    // .then(resp => resp.JSON())
    // .then(resp => {
    //     // let body = document.querySelector('body')
    //     let div = body.createElement("div");
    //     div.append(`${resp}`)
    // })

