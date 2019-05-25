const request = require ('request');  //váriavel request fazendo o require do módulo "request" 
const cheerio = require ('cheerio');  //forma de como chamamos as bibliotecas no Node 


const express = require('express');  //cria um aplicativo/app express, onde a função express() 
const app = express();               //é uma função de nível superior exportada pelo módulo.


app.get('/scrape2', (req, res) => {                                         //O objeto do aplicativo denota convencionalmente o aplicativo Express. 
    request('https://www.kabum.com.br/', (error, response, html) => {       //Crie-o chamando a função express() de nível superior exportada pelo módulo Express:
        if (!error && response.statusCode == 200){
            
            const $ = cheerio.load(html);           //carrega a página HTML
            
            
            //res.send($('.drop').text());          
            //console.log($('.drop').text());       
            
            res.send($('.box_page').text())         //exibe resposta da requisição no navegador, tela gráfica
            console.log($('.box_page').text());     //exibe resposta da requisção no console, no bash
            
            
            
            
       
        }
    });
   
});




