// let showDetails = ""
document.getElementById("btn").addEventListener('click',showDetails)



 function showDetails(){

    console.log("HI")


let username = document.getElementById('gitname').value

// api url
let api_url = 'https://api.github.com/users/'+username
//  fetch(api_url).then(res=>res.json()).then(data=>{
//         console.log(data)
//             alert('working')

//     }).catch(e =>{
//         console.log(e)
//         alert('not working')
//     })
getapi(api_url);

// Defining async function
async function getapi(url) {
	
    console.log(url)
   
    
	// Storing response
	const response = await fetch(url);
	
  
	// Storing data in form of JSON
	var data = await response.json();

	console.log(data);

	if (response) {
		hideloader();
        alert("not workking")
	}
        show(data);
        alert("working")
}

// // Calling that async function
// getapi(api_url);

// Function to hide the loader
function hideloader() {
    alert('no data')
	document.getElementById('users').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Bio</th>
		<th>Repositories</th>
		<th>Email</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.bio}</td>
	<td>${r.repos_url}</td>
	<td>${r.email}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("users").innerHTML = tab;
}
 }
