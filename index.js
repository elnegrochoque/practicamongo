const express=require('express')
const app= express()
const path=require('path')
app.use(express.static('css'));
app.listen(3000,()=>{
    console.log('aplicacion corriendo en el puerto 3000')
})
app.get('/',(request,response)=>{
    response.sendFile(path.resolve(__dirname, 'index.html'))
    app.use(express.static(__dirname ));
    console.log(__dirname)
})
app.get('/contacto',(request,response)=>{
    response.json({
        nombre: "jose"

    })
})
// const http=require('http')
// const fs=require('fs')
// const paginaIndex=fs.readFileSync('index.html')
// const jsValidacion=fs.readFileSync('js/app.js')
// const server=http.createServer((request, response) =>{
//     console.log(request.url)
//     if (request.url === '/empresa') {
        

//         response.end('pagina empresa')
//     }else if (request.url === '/contacto') {
        
//         response.end('Pagina de contacto')
//     }

//     else if (request.url === '/') {
//         response.end(paginaIndex)
        

//     }
//     else {
//         response.writeHead(404)
//         response.end('Pagina no encontrada')
//     }
// })
// server.listen(3000)