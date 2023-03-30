
document.getElementById("btn").addEventListener('click',myFunction)


async function myFunction() {

	
	let detailLeft = document.getElementById("details-left");
	detailLeft.classList.add("bg-mycolor");

	let detailRight = document.getElementById("details-right");
	detailRight.classList.add("bg-mycolor");
    
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
	alert(error.message)

}
 
    function showData(data){


		document.getElementById("image").innerHTML = `
		<div class="mx-auto px-auto text-center" style="max-width: 250px;">
		<img src="${data.avatar_url}" class="rounded-circle border border-3 img-fluid "  >
        </div>
		<P style="margin-top:25px"><strong>Hello  👋 I'M ${data.login}</P>
		<p>${data.bio}</P>
		
			<div class="col d-flex justify-content-center bd-highlight mb-3">
			<p class="me-3"><strong><i class="bi bi-people-fill me-1"></i>${data.followers}</P>
			<p><strong><i class="bi bi-person-fill-up me-1"></i> ${data.following}</P>
			</div>
	
		

		`
		
		document.getElementById("bio").innerHTML = `	
		<ul class="list-group mt-5">
			
			<li class="" >
				<p>${data.name}</P>
			</li>
			<li class="" >
				<p><i class="bi bi-geo-alt me-2"></i>  I'M lived in ${data.location}</P>
			</li>
			<li class="" >
				<p><i class="bi bi-buildings"></i>  ${data.company}</P>
			</li>
			<li class="" >
				<p><i class="bi bi-flag-fill"></i>  Number of repos: ${data.public_repos}</P>
			</li>
			<li class="" >
				<p>You can Visit my Blog <a href="${data.html_url}">link text</a></P>	
			</li>
			<li class="" >
				<p>Date created ${data.created_at}</P>	
			</li>
		</ul>
		`
		let bio = document.getElementById("bio");
		bio.style.padding="50px 60px"
	
	}
    
  

	
  }


  
   