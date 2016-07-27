const URL = 'http://private-70048-reactnativeit.apiary-mock.com'

export const fetchPosts = () => {
  return fetch(`${URL}/posts`, {
    credentials: 'same-origin'
  })
    .then(response => { return response.json() })
}
