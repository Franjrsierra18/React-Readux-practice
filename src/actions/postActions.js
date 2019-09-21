import {FETCH_POST, NEW_POST} from './types';

export function fetchPosts() {
  return function(dispatch) {
    console.log('fetching')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => dispatch({
        type: FETCH_POST,
        payload: posts
      }))
      .catch(err => console.log(err));
  }
}

export function createPost(postData) {
  return function(dispatch) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(posts => dispatch({
        type: NEW_POST,
        payload: posts
      }))
  }
}