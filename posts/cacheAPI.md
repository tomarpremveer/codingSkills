# The Cache Api

- This Api can be used to cache network responses.
- Also can be used as a general storage mechanism.
- Any type of data that can be transfered over the http can be cached.

## Feature Detection ##
```
var cacheAvailable = caches in self;
```
It can be present on window, servicer worker, worker and iframe.

How much data can be stored?
Usually depends upon the storage available on the device.

## Creating/ Open a cache ##
```
const cache = await caches.open('my-cache');
```

## Adding to cache ##
Three methods are avaible **add**, **addAll** and **put**.
All these methods returns a promise.

## add: ##
- Takes one parameter, either a request object or URL(String).
- It makes a request to the server with that request and store the response.
- No response is stored if request fails or respose status is not in 200 range.

## addAll ##
- Works similarly as **add** but takes an array of request objects or strings.
- Promise reject if any of the response is not saved.

## put ##
- Takes two params i.e a request object and an response object.
- Allows you to store a response from server or a response created in your code.

```
cache.put('/test.json', new Response('{"foo": "bar"}')
```

To set type of response.
```
const options = {
    headers: {
        'Content-Type' :'application/json'
    }
}
```

## Retrieving from a cache ##
- match method is used to retrieve data from the cache.

```
const response = await cache.match(request);
```
If two requests have different query strings, VARY headers or http methods GET, PUT, POST
then they are considered as different requests.
But these can also be ignored,

```
const options = {
    ignoreSearch : true,
    ignoreMethod: true,
    ignoreVary: true
}
const response = cache.match(request,options);
```

If many cached response are matched, then the one which was created first(FIFO) is served.
If you want have all of the matched response, then use **matchAll** method.

## delete from cache ##

```
cache.delete(request);
```

 



