
document.getElementById("btn").addEventListener('click',myFunction)


getData =()=>{}

async function myFunction() {

    
let username = document.getElementById('gitName').value

try{
	 let api_url = `https://api.github.com/users/${username}`
	//const api_url = `https://api.github.com/search/users?q=${username}`
	
	
    const response = await fetch(api_url)
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	  }

    const data = await response.json()
	
    console.log(data)
    showData(data)


}catch(e){
	console.error(e)
	displayError(error.message)

}
 
    function showData(data){
		document.getElementById("image").innerHTML = `<img src="${data.avatar_url}" style="width:250px; height:250px;border-radius:150px; padding:36px">
		<P style="margin-top:25px"><strong>Hello  👋 I'M ${data.login}</P>
		<p>${data.bio}</P>
		<p><strong><i class="bi bi-people-fill me-2"></i>${data.followers}</P>
		<p><strong><i class="bi bi-person-fill-up"></i>${data.following}</P>
		`
		
		document.getElementById("bio").innerHTML =`	
		<p>${data.name}</P>
		
		<p><i class="bi bi-geo-alt me-2"></i>I'M lived in ${data.location}</P>
		<p><i class="bi bi-buildings"></i>${data.company}</P>
		<p><i class="bi bi-flag-fill"></i>Number of repos: ${data.public_repos}</P>
		<p>${data.html_url}</P>
		<p>Date created${data.created_at}</P>
		<p>${data.html_url}</P>
		<p>You can Visit my Blog <a href="${data.html_url}">link text</a></P>
		`
		let bio = document.getElementById("bio");
		bio.style.padding="50px 60px"
	
	}
    
  

	
  }

   