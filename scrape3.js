const request = require ('request');
const cheerio = require ('cheerio');


const express = require('express');
const app = express();


app.get('/scrape3', (req, res) => {
    request('https://www.imdb.com/movies-in-theaters/?ref_=nv_mv_inth', (error, response, html) => {
        if (!error && response.statusCode == 200){
            
             const $ = cheerio.load(html);
            
            
             res.send($('#main').text());
             console.log($('#main').text());
            
       
        }
    });
   
});






