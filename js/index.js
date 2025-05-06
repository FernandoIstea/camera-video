const videos = [
    { speed: "4g", video: "media/video-1920_1080_30fps.mp4", tag: "Video High Quality" },
    { speed: "3g", video: "media/video-960_540_30fps.mp4", tag: "Video Medium Quality" },
    { speed: "2g", video: "media/video-426_240_30fps.mp4", tag: "Video Standard Quality" },
]

const video = document.querySelector("video")
const videoName = document.querySelector("p#videoName")

/* 
    // agregamos a la ecuación el análisis de la batería del dispositivo

    let batteryLevel = 100

    navigator.getBattery().then((result)=> {
        batteryLevel = result.level * 100
        console.log(batteryLevel)
    })

    if (batteryLevel > 25) {
        // speed = "2g" // simulamos que la conexión es de 2G para enviar un video de menor calidad
    } else {
        const speed = navigator.connection.effectiveType
    }
*/

function cargarVideoXvelocidad() {
    const speed = navigator.connection.effectiveType
    const media = videos.find((v)=> v.speed === speed)

    videoName.textContent = media.tag
    video.src = media.video
    video.play()
}

cargarVideoXvelocidad()

navigator.connection.addEventListener("change", ()=> cargarVideoXvelocidad() )