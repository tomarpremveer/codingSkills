## domContentLoaded ##
This event is fired when the document has been completely loaded and parsed without waiting for stylesheets, images and subframes.

## load ##
This event is fired when everything is loaded on the webpage i.e stylesheets, images etc
[domContentLoadedvsload](https://stackoverflow.com/questions/2414750/difference-between-domcontentloaded-and-load-events)

## Parser blocking vs render blocking resources ##

### Parsing Blocking ###
Suppose there are two javascript resources at some page. The parser sees the first one, it has to stop the parsing while it fetches and then execute the javascript because it might contain document.write method calls that fundamentally change how the subsquent markup is to be parsed.

### Render blocking ###
CSS resources are different, when the parser sees a stylesheet to load, it issues a request to the server and moves on. When CSS resources are loaded only then HTML is painted on the screen.

## how browsers work? ##
[How browser works?](https://web.dev/howbrowserswork/)

[crictical code](https://github.com/addyosmani/critical/blob/master/README.md)

Note : when there is script tag after a link tag then the domcontentloaded event is blocked until and unless the whole css is loaded, this is because of the script tag that waits for the whole of the stylesheet to download.

## How can we achieve great FCP ##
- Inline all of the crictical and above fold css and scripts and defer the below the fold css and js. 