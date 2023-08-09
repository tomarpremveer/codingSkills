**Preload** 
Allows crictical resources to be load before they are discovered. Only Preload resources that need to be used instantly(1-3sec). You shouldn't be improving for interactivity at the cost of delaying resources which are important for FCP & LCP(Hero Images and fonts).
A preloaded resource will get preloaded no matter what[low bandwidth, poor internet connection]
Preload scanner will go through the markup and check which resources has been requested to preload.

Links:
1.https://www.patterns.dev/posts/preload/
2.https://web.dev/preload-critical-assets/

**Preconnect and dns prefetch**
Using preconnect resource hint, we let the browser know that we want to connect to some domain as soon as possible. It will resolve the domain, setup connection using tcp and then encrpyt the connection using TLS.
It's totally upto the browser whether to execute resource hints or ignore them basis of available bandwidth or if the user has data saver mode on.

*Use case*
 1.When you want to download multiple resources from a cdn and you don't know the exact path. (downloading images based on media queries or runtime feature checks on browser)

 2.Streaming Media.

Preconnecting is effect for the domains other than origin domain.
dns-prefetch helps in fetching the domain name information as soon as possible also 
it works as a fallback for preconnect.

Don't use too much of prefetch as TLS certificates setup takes bandwidth.

**Prefetch**
Using prefetch we can download resources we might be need for future navigations.

Only fetch when you are certain that users will need them.

*Use Cases*
1.Future navigation links can be fetched on a new page.
2.Some famous products can be fetched on a search product page.
3.Fetching shoping cart page on a e-commerce website.
4.Prefetching js can improve FID, prefectching images can improve LCP ,prefetching styles can improve FCP and LCP and prefetching fonts can improve layout shifts.
5.Prefetch resources are fetched by the browser on the lowest possible priority so that they don't contend for the bandwidth required for the current page resources.
