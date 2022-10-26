window.onload = function (e) {
    console.log('documento cargado')
}

function ocultarTexto(num) {
    let z = document.getElementById(`contenidos_${num}`);

    if (z.style.display === "none") {
        z.style.display = "block"
        document.getElementById(`enlace_${num}`).innerHTML = "Ocultar contenidos"
    } else {
        z.style.display = "none"
        document.getElementById(`enlace_${num}`).innerHTML = "Mostrar contenidos"
    }
}