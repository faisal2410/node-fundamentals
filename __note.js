/**
 * http module
 * https://nodejs.org/dist/latest-v16.x/docs/api/http.html
 * 
 * fs module
 * https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
 * 
 * url module
 * https://nodejs.org/dist/latest-v16.x/docs/api/url.html
 * 
 * path module
 * https://nodejs.org/dist/latest-v16.x/docs/api/path.html
 * 
 * https://www.youtube.com/watch?v=FBkZ2TJZZUY
 * 
 * */ 

/**
 * curl -v localhost:3000
 * curl -v localhost:3000/node.png --output -
 * curl -v www.google.com
 *  http message :
        // 1. start-line - CHECK
        // 2. header
        // 3. body
 * http is native to NodeJS. We just have to ask for it
 *  the http module has a createServer method
// takes 1 arg:
// 1. callback, callback, has 2 args: req, res* 
// createServer returns an object with a listen method
// listen takes 1 arg:
// 1. port to listen for http traffic on
 * 
 * */ 

/**
 * fs = file system module! fs is built into Node. see above
// fs gives node access to THIS computers file system.
 * 
 * 
 * 
 * */ 

/**
 * the user wants the home page! we know, because the req object has / in the url property
        // console.log(req)
        // res = our way of responding to the requester
        // http message 
        // 1. start-line - CHECK
        // 2. header
        // 3. body
        // writeHead takes 2 args:
        // 1. status code
        // 2. object for the mime-type
 * 
 * 
 * 
 * */ 