const queryToObject = function() {
    const obj = {};
    let pair = null;
    const pageURL = window.location.search.substring(1);
    const arr = pageURL.split('&');
    for (let i = 0; i < arr.length; i++) {
        pair = arr[i].split('=');
        obj[pair[0]] = pair[1];
    };

    return obj;
};

console.log(queryToObject());
