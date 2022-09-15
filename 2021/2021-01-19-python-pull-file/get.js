const fetch = require('node-fetch');
const fs = require('fs');

const url = "https://paas-api-production.pluralsight.com/rest/course-progress";
const token = 'put_token_here';

(async () => {
  const res = await fetch(url, {headers: {authorization: `Bearer ${token}`}})
  const dest = fs.createWriteStream('./data.csv');
  res.body.pipe(dest);
})()