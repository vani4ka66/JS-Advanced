function validateRequest(arr) {

    if (!arr.hasOwnProperty('method')){
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!arr.hasOwnProperty('version')){
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!arr.hasOwnProperty('uri')){
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!arr.hasOwnProperty('message')){
        throw new Error('Invalid request header: Invalid Message');
    }

    let str = {};

    if(arr.method === 'GET' || arr.method === 'POST' ||
        arr.method === 'DELETE' || arr.method === 'CONNECT'){
            str.method = arr.method;
    }
    else{
        throw new Error ('Invalid request header: Invalid Method');
    }

    if(arr.uri === ''){
        throw new Error('Invalid request header: Invalid URI');
    }

    let match1;
    let pattern = /^([.]*[a-zA-Z0-9.]+[.]*)$/g;

    match1 = pattern.exec(arr.uri);
    if(match1){
        str.uri = match1[1];
    }
    else{
        throw new Error('Invalid request header: Invalid URI');
    }

    if(arr.version === 'HTTP/0.9' ||arr.version === 'HTTP/1.0' ||
        arr.version === 'HTTP/1.1' || arr.version === 'HTTP/2.0'){
        str.version = arr.version;
    }
    else{
        throw new Error('Invalid request header: Invalid Version');
    }

    if(arr.message.includes('<') || arr.message.includes('>') ||arr.message.includes("'") ||
        arr.message.includes('"') ||arr.message.includes('&') ||arr.message.includes('\\') ){
        throw new Error('Invalid request header: Invalid Message');
    }
    else{
        str.message = arr.message;
    }

    return str;
    
}

validateRequest({
    method: 'POST',
    uri: 'kkk.jjjj',
    version: 'HTTP/1.1',
    message: ''
});
