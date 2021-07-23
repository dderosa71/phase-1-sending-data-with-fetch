// Add your code here
function submitData(userName, userEmail){

    const formData = {userName: `${userName}`, userEmail: `${userEmail}`};

    const configurationObject = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json',
                 "Accept": "application/json"},
        body: JSON.stringify(formData)}

    fetch('http://localhost:3000/users', configurationObject)
    .then(resp => resp.JSON())
    .then(resp => {
        // let body = document.querySelector('body')
        let div = body.createElement("div");
        div.append(`${resp}`)
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    })
}

    
    // .then(resp => resp.JSON())
    // .then(resp => {
    //     // let body = document.querySelector('body')
    //     let div = body.createElement("div");
    //     div.append(`${resp}`)
    // })

