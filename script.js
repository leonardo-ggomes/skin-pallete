document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("cpSleeve").addEventListener("input", (colorpicker) => {
        let chosenColor = colorpicker.target.value
        let svgObject = document.querySelector("#svgObject").contentDocument
        let shirtSleeve = svgObject.querySelectorAll(".shirt-sleeve")
    
        shirtSleeve.forEach(sleeve => sleeve.setAttribute("fill",chosenColor));
    })

    document.getElementById("cpShirt").addEventListener("input", (colorpicker) => {
        let chosenColor = colorpicker.target.value
        let svgObject = document.querySelector("#svgObject").contentDocument
        let shirtBody = svgObject.querySelectorAll(".shirt-body")
    
        shirtBody.forEach(body => body.setAttribute("fill",chosenColor));
    })

})

