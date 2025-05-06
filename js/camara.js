const picture = document.querySelector("div.container img")
const filePicture = document.querySelector("input[type=file]")

filePicture.addEventListener("change", ()=> {
    console.clear()
    console.log(filePicture.files[0])
    console.log(filePicture.files[0].name)
    console.log(filePicture.files.length)

    // mostrar la imagen en el navegador sin convertirla.
    const objectURL = URL.createObjectURL(filePicture.files[0])
    picture.src = objectURL
    const reader = new FileReader()

    reader.addEventListener("load", ()=> {
        const base64Str = reader.result
        console.log("Imagen:", base64Str)
    })

    reader.addEventListener("error", ()=> {
        console.error("Error al leer el archivo:", error)
    })
    // convierte la imagen a base64, para enviar al backend: POST.
    reader.readAsDataURL(filePicture.files[0])
})