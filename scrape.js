const request = require ('request');
const cheerio = require ('cheerio');


const express = require('express'); //cria um aplicativo/app express, onde a função express() 
const app = express();              //é uma função de nível superior exportada pelo módulo.


app.get('/scrape', (req, res) => {
    request('https://fatecrl.edu.br/', (error, response, html) => {
        if (!error && response.statusCode == 200){
            //console.log (html);
            const $ = cheerio.load(html);
            
            //const a = ('.home-description');
            
            //    console.log(siteHeading.html());
            //    console.log(siteHeading.text());
            // const output = a.find('p').text;
            res.send($('.home-description').text());
            console.log($('.home-description').text());
       
        }
    });
    // res.send('eae');
});


app.use((req, res) => {
    res.send('pagina certa é a /scrape');
});