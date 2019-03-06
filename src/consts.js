let backendHost = "https://api.org.br/api";
const hostname = window && window.location && window.location.hostname;
let tagManengerid = "GTM-5RB953Z"

if (hostname === 'localhost' || hostname === '127.0.0.1') {
    backendHost = 'http://localhost:8000/';
    //backendHost = 'http://local.api.br/api';
}

export default{
    API: backendHost,
    GTM: tagManengerid
} 
