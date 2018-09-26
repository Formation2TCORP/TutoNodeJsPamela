
let http = require('http')
let fs = require('fs')
let monmodule = require('./monmodule')
let url = require('url')
var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();

let server = http.createServer((request, response) => {
    //Créer un serveur
    
    /* response.writeHead(200)
    let page = url.parse(request.url,true).pathname
    let query = url.parse(request.url,true).query
    let name = query.name === undefined ? 'anonyme' : query.name
    let surname = query.surname === undefined ? 'inconnu' : query.surname

   
    if(page == '/')
    {
        response.write('Vous êtes sur la page d\accueil')
        response.end()
    }
    else if(page == '/index')
    {
        response.write('C\est bien toi' + ' ' + name + ' ' + surname + ' ' +  'tu es sur la page '+ page)
        response.end()
    }
    else if (page == '/index1')
    {
        response.write('Vous êtes sur la page ' + page, {
            
            'Content-type': 'text/html; charset=utf-8'
        })
        response.end()
    }
    else{
        response.write('Cette page n\existe pas')
    }
    response.end()
    */

    //Evenements
  /* response.writeHead(200)
   jeu.on('gameover', function(message){
    console.log(message);
    });
    jeu.emit('gameover', 'Vous avez perdu !');
   response.end()*/



   //Test des modules
   monmodule.direBonjour();
   monmodule.direByeBye();
   response.end('Les modules marches')
})
    
    server.listen(8083)
