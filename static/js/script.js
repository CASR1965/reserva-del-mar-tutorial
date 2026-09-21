document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "Tutorial Front End - Condominio Reserva del Mar"
    );

    console.log(
        "Página cargada correctamente."
    );


    // ========================================================
    // NAVEGACIÓN DEL ÍNDICE
    // ========================================================

    const enlacesIndice =
        document.querySelectorAll(".indice a");

    enlacesIndice.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            console.log(
                "Navegando al tema: " +
                enlace.textContent.trim()
            );

        });

    });


    // ========================================================
    // VIDEOS DE YOUTUBE
    // ========================================================

    const contenedoresVideos =
        document.querySelectorAll(
            ".video-contenedor[data-youtube-id]"
        );

    console.log(
        "Videos encontrados: " +
        contenedoresVideos.length
    );


    // ========================================================
    // FUNCIÓN PARA CREAR MINIATURA
    // ========================================================

    function crearMiniaturaYouTube(contenedor) {

        const id =
            contenedor.getAttribute("data-youtube-id");

        if (!id) {
            return;
        }


        const iframe =
            contenedor.querySelector("iframe");

        if (!iframe) {
            return;
        }


        const titulo =
            iframe.getAttribute("title") ||
            "Video de YouTube";


        const enlace =
            document.createElement("a");

        enlace.className =
            "video-contenedor miniatura-video";


        enlace.href =
            "https://www.youtube.com/watch?v=" +
            encodeURIComponent(id);


        enlace.target = "_blank";

        enlace.rel =
            "noopener noreferrer";


        enlace.setAttribute(
            "aria-label",
            "Ver en YouTube: " + titulo
        );


        const imagen =
            document.createElement("img");


        imagen.src =
            "https://img.youtube.com/vi/" +
            encodeURIComponent(id) +
            "/hqdefault.jpg";


        imagen.alt = titulo;

        imagen.loading = "lazy";


        const capa =
            document.createElement("span");

        capa.className =
            "miniatura-capa";


        const icono =
            document.createElement("span");

        icono.className =
            "reproducir-icono";

        icono.textContent = "▶";


        const texto =
            document.createElement("span");

        texto.className =
            "texto-miniatura";

        texto.textContent =
            "Ver en YouTube";


        capa.appendChild(icono);

        capa.appendChild(texto);

        enlace.appendChild(imagen);

        enlace.appendChild(capa);


        contenedor.replaceWith(enlace);

    }


    // ========================================================
    // MODO FILE://
    //
    // Cuando el HTML se abre directamente desde el computador,
    // YouTube puede impedir la reproducción del iframe.
    //
    // En ese caso utilizamos miniaturas.
    // ========================================================

    if (window.location.protocol === "file:") {

        console.log(
            "Modo archivo local detectado."
        );

        console.log(
            "Se utilizarán miniaturas de YouTube."
        );


        contenedoresVideos.forEach(
            crearMiniaturaYouTube
        );

    }


    // ========================================================
    // DETECCIÓN DEL ESTADO DEL IFRAME
    //
    // No todos los errores de YouTube pueden detectarse desde
    // JavaScript por las restricciones de seguridad del navegador.
    //
    // Por eso el botón "Ver en YouTube" permanece disponible
    // dentro de la información de cada video cuando corresponde.
    // ========================================================


    // ========================================================
    // AÑO AUTOMÁTICO DEL PIE DE PÁGINA
    // ========================================================

    const añoActual =
        new Date().getFullYear();

    const pieLegal =
        document.querySelector(".pie-legal");

    if (pieLegal) {

        const textos =
            pieLegal.querySelectorAll("p");

        if (textos.length > 0) {

            textos[0].innerHTML =
                textos[0].innerHTML.replace(
                    /©\s*\d{4}/,
                    "© " + añoActual
                );

        }

    }


    // ========================================================
    // LOG FINAL
    // ========================================================

    console.log(
        "Sistema Front End inicializado correctamente."
    );

});
