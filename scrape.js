const request = require ('request');
const cheerio = require ('cheerio');


const express = require('express'); //cria um aplicativo/app express, onde a função express() 
const app = express();              //é uma função de nível superior exportada pelo módulo.


app.get('/scrape', (req, res) => {
    request('http://www.b3.com.br/pt_br/market-data-e-indices/servicos-de-dados/market-data/cotacoes/indices.htm', (error, response, html) => {
        if (!error && response.statusCode == 200){  //resposta de requisição bem sucedida
            //console.log (html);
            const $ = cheerio.load(html);
            
            //const a = ('.home-description');
            
            //    console.log(siteHeading.html());
            //    console.log(siteHeading.text());
            // const output = a.find('p').text;
            res.send($('.bg-conteudo').html());
            console.log($('.bg-conteudo').text());
       
        }
    });
    // res.send('eae');
});


app.use((req, res) => {
    res.send('pagina certa é a /scrape');
});


app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`server running at ${process.env.PORT} and ${process.env.IP}`);
});


// https.get('https://fatecrl.edu.br/', (error, response, html) => {
//     const $ = cheerio.load(html);
    
//     console.log($);
// });
