/*

*/
class Github {

  constructor(){
    this.client_id = '1f29e74f9dc5d4727c67'
    this.client_secret = '3c1d5e0c9add7bd99edcb06ec2df77fa18c44110'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);



    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos
    }

  }
}
