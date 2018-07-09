import axios from 'axios'

const GitHubUser = {
  getByUsername: (username) => axios.get(`https://api.github.com/users/${username}`),
  getReposByUsername: (username) => axios.get(`https://api.github.com/users/${username}/repos`)
}

export default GitHubUser