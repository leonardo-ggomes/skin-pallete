document.addEventListener("DOMContentLoaded", () => {

    const svgObject = document.getElementById("svgObject")  

    svgObject.addEventListener("load", () => {
        let svgDoc = svgObject.contentDocument;

        document.getElementById("cpSleeve").addEventListener("input", (colorpicker) => {
            let chosenColor = colorpicker.target.value
            let shirtSleeve = svgDoc.querySelectorAll(".shirt-sleeve")
        
            shirtSleeve.forEach(sleeve => sleeve.setAttribute("fill",chosenColor));
        })
    
        document.getElementById("cpShirt").addEventListener("input", (colorpicker) => {
            let chosenColor = colorpicker.target.value
            let shirtBody = svgDoc.querySelectorAll(".shirt-body")
        
            shirtBody.forEach(body => body.setAttribute("fill",chosenColor));
        })

    })
})

