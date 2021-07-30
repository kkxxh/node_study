const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.github.com/kkxxh');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():',query);
console.log('querystring.stringify():',querystring.stringify(query));
