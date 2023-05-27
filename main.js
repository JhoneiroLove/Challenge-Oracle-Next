// Seleccionar el elemento textarea con la clase "texto"
const textArea = document.querySelector('.texto');

// Seleccionar el elemento con la clase "mensaje"
const mensaje = document.querySelector('.mensaje');

// Función para encriptar el texto del textarea
function btnEncriptar() {
  // Obtener el valor del textarea
    const textoEncriptado = encriptar(textArea.value);

  // Asignar el texto encriptado al elemento de mensaje
    mensaje.value = textoEncriptado;

  // Limpiar el valor del textarea
    textArea.value = "";

  // Restablecer el fondo del elemento mensaje
    mensaje.style.backgroundImage = "none";
}

// Función para encriptar un string
function encriptar(stringEncriptada) {
  // Definir una matriz de códigos de reemplazo
    const matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

  // Convertir el string encriptado a minúsculas
    stringEncriptada = stringEncriptada.toLowerCase();

  // Iterar sobre la matriz de códigos
    for (let i = 0; i < matrizCodigo.length; i++) {
    // Verificar si el string contiene el código a reemplazar
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
        // Reemplazar todas las ocurrencias del código por su equivalente
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

  // Retornar el string encriptado
    return stringEncriptada;    
}

// Función para desencriptar el texto del textarea
function btnDesencriptar() {
  // Obtener el valor del textarea
    const textoEncriptado = desencriptar(textArea.value);

  // Asignar el texto desencriptado al elemento de mensaje
    mensaje.value = textoEncriptado;

  // Limpiar el valor del textarea
    textArea.value = "";
}

// Función para desencriptar un string
function desencriptar(stringDesencriptada) {
    // Definir una matriz de códigos de reemplazo
    const matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    // Convertir el string desencriptado a minúsculas
    stringDesencriptada = stringDesencriptada.toLowerCase();

    // Iterar sobre la matriz de códigos
    for (let i = 0; i < matrizCodigo.length; i++) {
        // Verificar si el string contiene el código a reemplazar
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
        // Reemplazar todas las ocurrencias del código por su equivalente
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

// Retornar el string desencriptado
    return stringDesencriptada;    
}

// Función para copiar el contenido de un elemento al portapapeles
function btnCopiar(id_elemento) {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
}
