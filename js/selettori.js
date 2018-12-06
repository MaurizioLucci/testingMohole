// Posticipa l'esecuzione del codice fino al caricamento della pagina
document.addEventListener('DOMContentLoaded', function(){
  // NB: L'alert ti blocca tutto lo script fino alla sua chiusura
  // alert("Questo è un alert");
  document.querySelector('h1').style.color = "#ff0000";

  document.querySelector('#testo').innerHTML = 'Ma anche no';

  const paragrafi = document.querySelectorAll('p');


  console.log(paragrafi[5]);

})
