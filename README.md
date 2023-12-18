
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
