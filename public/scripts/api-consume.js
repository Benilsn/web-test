async function getClient() {

    const resp =
        await fetch('http://localhost:8080/api/v1/client/')
    .then(function(resp) {
        return resp.json();
    })

    .then(function(data) {
        console.log(data);
        dataToTable(data);
    })

    .catch(function(error) {
        console.warn('Somethin went wrong!', error);
    });
}

getClient();

// Function to define innerHTML for HTML table
function dataToTable(data) {
    list = data;
    let tab =
        `<tr>
    <th>Client ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Age</th>
    <th>Email</th>
    <th>Role</th>
    <th>Username</th>
    <th>Password</th>
    </tr>`;

   list.forEach(data => {
    tab += `<tr> 
    <td>${data.clientId} </td>
    <td>${data.firstName}</td>
    <td>${data.lastName}</td> 
    <td>${data.age}</td>  
    <td>${data.email}</td>   
    <td>${data.role}</>
    <td>${data.userName}</>
    <td>${data.userPassword}</>          
    </tr>`;

   });
    

    // Setting innerHTML as tab variable
    document.getElementById("clients").innerHTML = tab;
}