const diploma = [
    {
        nombre: "Curso de SCRUM",
        imagen: "img/courses-diploma/diploma-scrum_page-0001.jpg",
        terminado: "Junio/2022",
        link: "https://platzi.com/p/MrAgustin/curso/1750-scrum/diploma/detalle/"
    },
    {
        nombre: "Curso de SQL y MySQL",
        imagen: "img/courses-diploma/diploma-sql-mysql_page-0001.jpg",
        terminado: "Mayo/2022",
        link: "https://platzi.com/p/MrAgustin/curso/1272-sql-mysql/diploma/detalle/"
    },
    {
        nombre: "Curso de Fundamentos de Spring Boot",
        imagen: "img/courses-diploma/diploma-spring-boot_page-0001.jpg",
        terminado: "Junio/2022",
        link: "https://platzi.com/p/MrAgustin/curso/2317-spring-boot/diploma/detalle/"
    }
];



/*
    ______________________
    |SECCIÓN DE FUNCIONES|
    ______________________
*/
catalogo = function(){
    const seccionCertificados = document.getElementById("catalogoProductos");
    diploma.forEach(curso => {
        seccionCertificados.innerHTML += `
        <div class="text-center col-12 col-lg-6">
            <div class="card  m-2">
                <div class="card-header bg-dark text-light">
                    <h3 class="card-title" style="font-weight:bolder;">${curso.nombre}</h3>
                </div>
                <div class="card-body">
                    <img src=${curso.imagen} alt="${curso.nombre}" width="100%" height="100%">
                    <p class="card-text" style="font-weight: bolder;"><i>${curso.terminado}</i></p>
                    <button class="btn btn-success" href=${curso.link}>Ir A Diploma</button>
                </div>
            </div>
        </div>
        `;
    });
}