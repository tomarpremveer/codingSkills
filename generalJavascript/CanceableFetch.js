/*
Using the AbortController Api, we can cancel the ongoing fetch requests.
If the request is already completed, the browser will just ignore the cancel call.

Links
1.https://developer.chrome.com/blog/abortable-fetch/
*/

const controller = new AbortController();
const signal = controller.signal;

fetch(url, { signal }).then(response => {
    return response.text();
}).then(text => {
    console.log(text);
}).catch(err => {
    if (err.name === 'AbortError') {
    console.log('Fetch aborted');
    } else {
    console.error('Uh oh, an error!', err);
    }
});

controller.abort();

/*
we can cancel using the abort method on the AbortController instance.
We can also react to the abort request, when aborted a error is thrown with name AbortError
*/

