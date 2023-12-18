![1](https://github.com/nivescho/Revision/assets/152449888/c8fc615e-d91e-4ed3-9383-feab1adfe0fe)
[Uploading index.html…]()<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codigo Enigma</title>
    <link rel="stylesheet" href="1.css">
    <link rel="icon" href="https://www.lausina.com.ar/wp-content/uploads/2017/07/criptograma-reloj.jpg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
</head>
<body onload="contadorCaracteres()">
    <header>
        <h1> Codigo enigma </h1>  
    <nav >
        <a  id="codigo" href="https://www.youtube.com/watch?v=IYsrI15PNUI"class="nav-link">Que es un codigo enigma? - </a>
        <a  id ="codigo"href="https://historia.nationalgeographic.com.es/a/alan-turing-arma-secreta-aliados_16352"class="nav-link">Quien fue su creador? - </a>
        <a  id ="codigo"href="https://www.shutterstock.com/es/search/enigma-code"class="nav-link"> Fotos e imagenes </a>
    </nav>
    </header>
    <section>
        <label id="mensaje">Mensaje secreto:</label>
        <textarea  class="textarea" id="text"  rows="20" cols="90" placeholder="Escribe tu gran mensaje secreto justo aqui"></textarea>
        <div class="col-lg-6">
         <div id="textvista">0/100</div>
        </div>
        <label id="clave">Clave secreta:</label>
        
    </section>
</header>


<input   type="text" id="textoencriptado">
<textarea name="resultado"id="textodesencriptado"cols="90" rows="10"></textarea>
<main>
  <section class="container">
    <div class="btnGroup">
      <button class="cifrado" name="cipher" type="button">
        <i class="fas fa-lock"></i> Cifrar
      </button>
      <button class="decifrado" name="decipher" type="button">
        <i class="fas fa-lock-open"></i> Descifrar
      </button>
    </div>
    <label id="resultado">Resultado:</label>
  </section>
</main>
  
<footer>
  <div>
  <p>Copyright &copy;2023 Las creadoras comparten licencia creativa</p>
  <p>Grupo Grace Hopper</p>   
</div>
</footer>
    
    
    <script src="./1.js"></script>
    
</body>
</html>


![Uploading 1.gif…
function getID(id) {
    return document.getElementById(id).value; 
}

function innerHTML(id,result){
    return document.getElementById(id).innerHTML=result;
}

function contadorCaracteres(){
    setInterval(function(){
        var c = getID("text");
        if (c.lenght>100) {
            innerHTML("textvista","SOLO PERMITE 100 CARACTERES");
        }else{
            innerHTML("textvista", c.lenght);
        }
    },1000);
}



function encriptar(){
    var frase=document.getElementById("offset").value.
    toLowerCase();
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codigo Enigma</title>
    <link rel="stylesheet" href="1.css">
    <link rel="icon" href="https://www.lausina.com.ar/wp-content/uploads/2017/07/criptograma-reloj.jpg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
</head>
<body onload="contadorCaracteres()">
    <header>
        <h1> Codigo enigma </h1>  
    <nav >
        <a  id="codigo" href="https://www.youtube.com/watch?v=IYsrI15PNUI"class="nav-link">Que es un codigo enigma? - </a>
        <a  id ="codigo"href="https://historia.nationalgeographic.com.es/a/alan-turing-arma-secreta-aliados_16352"class="nav-link">Quien fue su creador? - </a>
        <a  id ="codigo"href="https://www.shutterstock.com/es/search/enigma-code"class="nav-link"> Fotos e imagenes </a>
    </nav>
    </header>
    <section>
        <label id="mensaje">Mensaje secreto:</label>
        <textarea  class="textarea" id="text"  rows="20" cols="90" placeholder="Escribe tu gran mensaje secreto justo aqui"></textarea>
        <div class="col-lg-6">
         <div id="textvista">0/100</div>
        </div>
        <label id="clave">Clave secreta:</label>
        
    </section>
</header>


<input   type="text" id="textoencriptado">
<textarea name="resultado"id="textodesencriptado"cols="90" rows="10"></textarea>
<main>
  <section class="container">
    <div class="btnGroup">
      <button class="cifrado" name="cipher" type="button">
        <i class="fas fa-lock"></i> Cifrar
      </button>
      <button class="decifrado" name="decipher" type="button">
        <i class="fas fa-lock-open"></i> Descifrar
      </button>
    </div>
    <label id="resultado">Resultado:</label>
  </section>
</main>
  
<footer>
  <div>
  <p>Copyright &copy;2023 Las creadoras comparten licencia creativa</p>
  <p>Grupo Grace Hopper</p>   
</div>
</footer>
    
    
    <script src="./1.js"></script>
    
</body>
</html>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Nova+Square&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Nova Square',sans-serif;
}

body {
    background-image:url(./1.gif);
    text-align: center;
    font-family: calibri;
    font-size: 200%;
    background-size: cover;     
}

nav {
    justify-content: space-between;
    margin-right: 90px;
    font: rgb(243, 239, 239);
}

a {
    text-decoration: none;
    font: rgb(247, 246, 246)
   

}

header {
    text-align: left;
    color: beige;
    background-color:rgb(35, 194, 101);
    display: flex;
    justify-content: space-between;
    align-items: center;  
    padding: 10px;
    box-sizing: border-box;
}


.container {
    height: 50vh;
}

label{
    color: rgb(255, 255, 255);
    font-size: 40px;
    margin-top: 70px;
    display: flex;
    margin-left: 500px;
    


}

.cifrado{
    font-weight: 200px;
    font-size: 30px;
    cursor: pointer;
    padding: 20px ;
    border-radius: 10px;
    background-color: beige;
    color: rgb(75, 75, 71);
    border: none;
    margin-bottom: 4px;
    height: 100px;
    width:300px;
    
}

.decifrado{
    font-weight: 200px;
    font-size: 30px;
    padding: 20px ;
    cursor: pointer;
    border-radius: 10px;
    background-color: beige;
    color: rgb(75, 75, 71);
    border: none;
    height: 100px;
    width: 300px;
    margin-top: 50px;
}


.cifrado:hover{
    background-color: rgb(0, 255, 76);
}

.decifrado:hover{
    background-color: rgb(0, 255, 76);
}

textarea{
    border-radius: 10px;
    margin-top:30px;
    position: absolute;
    left: 500px;
}


footer{
    background-color: rgba(46, 204, 112, 0.603) ;
    width: 100%;
    height: 10%;
    color: aliceblue;
    margin-top: 80px;

}


#leer{
    width: 100px;
    height: 100px;
    background-color: rgb(243, 245, 247);
    border-radius: 5px;
}

#codigo{
   text-decoration: none;
   color: rgb(22, 22, 22);
   text-align: right;
   font-size: 25px;
   
   
}

p{
    background-color:rgba(46, 204, 112, 0.603) ;
    color: white;
}

span{
    color: rgb(255, 255, 255);
    font-size: 20px; 
    
}

#clave{
    color: rgb(243, 241, 241);
    display: flex ;
    margin-top: 20px;
    margin-left: 500px;
    padding: 2px;
    
}

input{
    font-weight: 40px;
    font-size: 30px;
    color: var(--color-white);
    border: 0.15rem solid var(--color-secondary);
    border-radius: 10px;
    margin-top: 30px;
    width: 40%;
    height: 90px;
    text-align:center;
}
  

#textvista{
    padding: 1px;
    display: flex;
    margin-top: 360px;
    margin-left: 1080px;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    width: 100px;
}

#textodesencriptado{
    display: flex;
    margin-top: 280px;
    margin-left: 10px;
}

#resultado{
    display: flex;
    



}
]()

