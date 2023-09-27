document.addEventListener("DOMContentLoaded", () => {

    const svgObject = document.getElementById("svgObject")  

    svgObject.addEventListener("load", () => {
        let svgDoc = svgObject.contentDocument;

        document.getElementById("cpShoes").addEventListener("input", (colorpicker) => {
            let chosenColor = colorpicker.target.value
            let shirtSleeve = svgDoc.querySelectorAll(".shoes")
        
            shirtSleeve.forEach(sleeve => sleeve.setAttribute("fill",chosenColor));
        })
    
        document.getElementById("cpShirt").addEventListener("input", (colorpicker) => {
            let chosenColor = colorpicker.target.value
            let shirtBody = svgDoc.querySelectorAll(".shirt-body")
        
            shirtBody.forEach(body => body.setAttribute("fill",chosenColor));
        })

        document.getElementById("cpHair").addEventListener("input", (colorpicker) => {
            let chosenColor = colorpicker.target.value
            let shirtBody = svgDoc.querySelectorAll(".hair")
        
            shirtBody.forEach(body => body.setAttribute("fill",chosenColor));
        })

        document.getElementById("btnWhite").addEventListener("click", (colorpicker) => {
            let chosenColor = "#ffb6b6"
            let shirtBody = svgDoc.querySelectorAll(".skin")
        
            shirtBody.forEach(body => body.setAttribute("fill",chosenColor));
        })

        document.getElementById("btnBlack").addEventListener("click", (colorpicker) => {
            let chosenColor = "#570000"
            let shirtBody = svgDoc.querySelectorAll(".skin")
        
            shirtBody.forEach(body => body.setAttribute("fill",chosenColor));
        })


    })
})

