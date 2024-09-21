// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No puedo ser tu amor", time: 17 },
  { text: "Mira, es demasiado trivial para ti ahora", time: 23 },
  { text: "Oh, mi vida se está desmoronando", time: 30 },
  { text: "Tal vez nadie se dará cuenta si desaparezco", time: 48 },
  { text: "Pero rezaré por ti todo el tiempo", time: 50 },
  { text: "Si pudiera estar a tu lado", time: 66 },
  { text: "Te daría mi vida entera, mis estaciones", time: 72 },
  { text: "No puedo ser tu amor", time: 82 },
  { text: "Porque temo arruinar tu vida", time: 92 },
  { text: "Mientras las hojas se marchitan", time: 101 },
  { text: "Y crecían de nuevo", time: 112 },
  { text: "Tú te has ido lejos", time: 124 },
  { text: "Estaré cortando margaritas", time: 135 },
  { text: "Y traeré todas las oportunidades aquí", time: 145 },
  { text: "Pero rezaré por ti todo el tiempo", time: 158 },
  { text: "Si pudiera estar a tu lado", time: 170 },
  { text: "Te daría mi vida entera, mis estaciones", time: 182 },
  { text: "A tu lado, seré tus estaciones", time: 195 },
  { text: "Mi amor", time: 208 }
  
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);