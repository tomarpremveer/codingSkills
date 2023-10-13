self.onmessage = function (event) {
    const { data } = event;
    const { type } = data;

    if (type === 'fetchJsonData') {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => self.postMessage({type: 'fetchJsonData', posts: data}))
            .catch(err => console.error(err))
    }
}

