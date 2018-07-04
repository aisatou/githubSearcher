
/*
  1. Find my getElementById
  2. add an event listner to that getElementById
  3. store a variable with the event's value
  4. Log it to the console
*/


// init the classes Im using:
const github = new Github();
const ui = new UI();


// search input
const searchUser = document.getElementById('searchUser')

// search input event listner
searchUser.addEventListener('keyup',(e)=>{
    // get input text
    const userText = e.target.value;

    // make sure the variable has a value

    if(userText !== ""){
      // make the http call
      github.getUser(userText).
      then(data => {
        if(data.profile.message === 'Not Found'){
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          // show profile
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        }
      })
    } else {
      // clear profile
      ui.clearProfile();
    }
})
