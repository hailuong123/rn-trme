import endpoint from '../../endpoint';

export let fetchData = (queryStr: string, method: string, body: object) => {
  let apiurl = endpoint.host + queryStr;
  
  const requestOptions: RequestInit = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetch(apiurl, requestOptions).then(handleResponse);
} 
 
function handleResponse(response: any) {
  if (response.status >= 404) {
    return alert('Can\'t connect to server, Please try again');
  }
  if (!response.ok) {
    return Promise.reject(response.json());
  }
  return response.json();
}