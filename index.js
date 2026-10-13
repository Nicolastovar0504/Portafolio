let menuVisible = false;

// Muestra u oculta el menú en móvil
function mostrarOcultarMenu(){
    document.getElementById("nav").className = menuVisible ? "" : "responsive";
    menuVisible = !menuVisible;
}

// Oculta el menú al elegir una opción
function seleccionar(){
    document.getElementById("nav").className = "";
    menuVisible = false;
}

// Anima las barras de habilidades cuando la sección entra en pantalla
function efectoHabilidades(){
    const skills = document.getElementById("skills");
    if(window.innerHeight - skills.getBoundingClientRect().top >= 300){
        document.querySelectorAll(".progreso").forEach(h => h.classList.add(h.dataset.skill));
    }
}
window.addEventListener("scroll", efectoHabilidades);
efectoHabilidades();

// Filtros de proyectos
const botones = document.querySelectorAll(".filtros button");
const tarjetas = document.querySelectorAll(".tarjeta");
botones.forEach(b => b.addEventListener("click", () => {
    botones.forEach(x => x.classList.remove("activo"));
    b.classList.add("activo");
    const f = b.dataset.f;
    tarjetas.forEach(t => t.classList.toggle("oculta", f !== "todos" && !t.dataset.cat.split(" ").includes(f)));
}));

// Visor de imágenes (lightbox)
const visor = document.getElementById("visor");
const imagenGrande = document.getElementById("imagenGrande");
const cerrarVisor = () => { visor.style.display = "none"; };
document.querySelectorAll(".miniaturas img").forEach(img => img.addEventListener("click", () => {
    imagenGrande.src = img.src;
    imagenGrande.alt = img.alt;
    visor.style.display = "flex";
}));
document.querySelector(".cerrar").addEventListener("click", cerrarVisor);
visor.addEventListener("click", e => { if(e.target === visor) cerrarVisor(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") cerrarVisor(); });
