// The Fetch API provides a JavaScript interface for accessing and manipulating parts of the
//  protocol, such as requests and responses. It also provides a global fetch() method that
//   provides an easy, logical way to fetch resources asynchronously across the network.

// A fetch() promise only rejects when a network error is encountered 
// (which is usually when there's a permissions issue or similar). A fetch() promise does not
//  reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok 
//  and/or Response.status properties.

// Unlike XMLHttpRequest that is a callback-based API, Fetch is promise-based and provides 
// a better alternative that can be easily used in service workers. Fetch also integrates 
//advanced HTTP concepts such as CORS and other extensions to HTTP.

// micro task queue or priority queue is the name given for queue which is made specially 
// fetch task to complete, therefore it is called earlier than any async function, even if 
// the function is written before the fetch.