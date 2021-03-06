


const request = require ('request');  //váriavel request fazendo o require do módulo "request" 
const cheerio = require ('cheerio');  //forma de como chamamos as bibliotecas no Node 


const express = require('express');  //cria um aplicativo/app express, onde a função express() 
const app = express();               //é uma função de nível superior exportada pelo módulo express.



app.get('/scrape2', (req, res) => {                                         //O objeto do aplicativo denota convencionalmente o aplicativo Express. 
    request('https://www.kabum.com.br/', (error, response, html) => {       //Crie-o chamando a função express() de nível superior exportada pelo módulo Express:
        if (!error && response.statusCode == 200){      //requisição foi bem sucedida. O significado do sucesso varia de acordo com o metodo HTTP -> GET: O recurso foi buscado e transmitido no corpo da mensagem.
            
            const $ = cheerio.load(html);           //carrega a página HTML
            
            
            //res.send($('.drop').text());          
            //console.log($('.drop').text());       
            
            res.send($('.box_page').html());     //exibe resposta da requisição no navegador, tela gráfica
            console.log($('.box_page').text());     //exibe resposta da requisção no console, no bash
            
        }
    });
   
});


app.use((req, res) => {                         //informa a página correta para uso
    res.send('pagina certa é a /scrape2');      //mostra informação 
});


app.listen(process.env.PORT, process.env.IP, () => {            //faz com que seu servidor seja capaz de aceitar um parâmetro do ambiente para qual porta escutar.
    console.log(`server running at ${process.env.PORT} and ${process.env.IP}`);  //então o servidor roda no processo tal e na porta tal e IP tal
});






