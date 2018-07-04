class UI {
  constructor(){
    this.profile = document.getElementById('profile')
  }


  // append profile to the dom
  showProfile(user){
    this.profile.innerHTML = `
    <div class = "card card-body mb-3">
      <div class= "row">

        <div clas= "col-md-3">
          <img class= "img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4"> View Profile </a>
         </div>


         <div class="col-md-9">
            <span class="badge badge-primary"> Public Repos: ${user.public_repos}</span>
            <span class="badge badge-success"> Public Gists: ${user.public_gists}</span>
            <span class="badge badge-primary"> Followers: ${user.followers}</span>
            <span class="badge badge-primary"> Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Blog: ${user.blog}</li>
              <li class="list-group-item">Member Since: ${user.created_at.slice(0,10)}</li>
              <li class="list-group-item">Hireable: ${user.hireable}</li>
            </ul>
          </div>
      </div>
    </div>

    <h3 class="page-heading mb-3"> Latest Repos <h3>
    <div id = "repos"> </div>
    `
  }

// clear profile when no text available
  clearProfile(){
    this.profile.innerHTML = "";
  }

  //show repos
  showRepos(repos){

    let output = '';

    // iterate over the repos data returned from git hub
    repos.forEach(function(repo){
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>

            <div class="col-md-6 mb-2">
              <span class="badge badge-primary"> Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-success"> Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-primary"> Forks: ${repo.forks_count}</span>
            </div>

          </div>
        </div>
      `;
    });

    // output the repositories
    document.getElementById('repos').innerHTML = output
  }

// show alert message
  showAlert(message, className){

    // clear any remaining alerts
    this.clearAlert();
    // Create a div
    const div = document.createElement('div');
    // Add the class name
    div.className = className
    // add Text to a child node
    div.appendChild(document.createTextNode(message));
    //get a parent node to append child to
    const container = document.querySelector('.searchContainer')
    // get the searchbox
    const search = document.querySelector('.search');
    // insert the alert
    container.insertBefore(div,search);

    // timeout alerts after 3 seconds
    setTimeout(()=>{
      this.clearAlert()
    }, 3000)
  }

  // clear alert message
  clearAlert(){
    // store the current alert
    const currentAlert = document.querySelector('.alert')
    // check to see if an alert exist
    if (currentAlert){
      currentAlert.remove();
    }
  }


  // class end
}
