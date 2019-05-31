const request = require ('request');
const cheerio = require ('cheerio');


const express = require('express');
const app = express();

app.use(express.static('./assets'));


app.get('/scrape3', (req, res) => {
    request('https://www.imdb.com/movies-in-theaters/?ref_=nv_mv_inth', (error, response, html) => {
        if (!error && response.statusCode == 200){
            
             const $ = cheerio.load(html);
            
            
             res.send($('#main').html());
             console.log($('#main').text());
            
       
        }
    });
   
});



app.use((req, res) => {
    res.send('pagina certa é a /scrape3');
});


app.listen(process.env.PORT, process.env.IP, () => {
   console.log(`server running at ${process.env.PORT} and ${process.env.IP}`);
});






