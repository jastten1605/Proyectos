const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

mobileMenu.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});



const champions = {
    asesinos: {
        name: "PYKE",
        title: "El Destripador de los Puertos",
        image: "/media/pyke.png",
        background: "/media/asesino_fondo.avif"
    },
    luchadores: {
        name: "MORDEKAISER",
        title: "La Pesadilla de Hierro",
        image: "/media/morde.png",
        background: "/media/luchador_fondo.webp"
    },
    magos: {
        name: "TWISTED FATE",
        title: "El Maestro de las Cartas",
        image: "/media/tf.png",
        background: "/media/mago_fondo.avif"
    },
    tiradores: {
        name: "JHIN",
        title: "El Virtuoso",
        image: "/media/jhin.png",
        background: "/media/adc_fondo.svg"
    },
    apoyos: {
        name: "NAUTILUS",
        title: "El Titán Abisal",
        image: "/media/nautilus.png",
        background: "/media/support_fondo.avif"
    },
    tanques: {
        name: "ORNN",
        title: "Las Llamas de la Forja",
        image: "/media/ornn.png",
        background: "/media/tanque_fondo.avif"
    }
};

const roleButtons = document.querySelectorAll('.role-btn');
const championImage = document.getElementById('championImage');
const championName = document.getElementById('championName');
const championTitle = document.getElementById('championTitle');
const championSelector = document.querySelector('.champion-selector');

function updateChampion(role) {
    const champion = champions[role];
    championImage.src = champion.image;
    championImage.alt = champion.name;
    championName.textContent = champion.name;
    championTitle.textContent = champion.title;
    championSelector.style.backgroundImage = `url('${champion.background}')`;
    championSelector.style.backgroundSize = 'cover';
    championSelector.style.backgroundRepeat = 'no-repeat';
    championSelector.style.backgroundPosition = 'center';
    roleButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.role === role) {
            btn.classList.add('active');
        }
    });
}

roleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const role = button.dataset.role;
        updateChampion(role);
    });
});

const backgrounds = {
    "Grieta del Invocador": "media/grieta_fondo.avif",
    "ARAM": "media/aram_fondo.webp",
    "Teamfight Tactics": "media/tft_fondo.webp"
};

document.querySelectorAll('.game-mode').forEach(mode => {
    mode.addEventListener('click', () => {
        const videoSrc = mode.getAttribute('data-video'); 
        const description = mode.getAttribute('data-text'); 
        const title = mode.getAttribute('data-title'); // Obtén el título desde data-title
        const videoElement = document.querySelector('.preview-circle video');
        const descriptionElement = document.getElementById('gameModeDescription');
        const container = document.querySelector('.game-modes'); 

        // Actualiza el video
        videoElement.querySelector('source').setAttribute('src', videoSrc);
        videoElement.load(); 
        videoElement.play(); 

        // Actualiza la descripción
        descriptionElement.innerHTML = description;

        // Cambia el fondo según el título
        if (backgrounds[title]) {
            container.style.backgroundImage = `url('${backgrounds[title]}')`;
        }

        // Cambia el estado activo
        document.querySelectorAll('.game-mode').forEach(btn => btn.classList.remove('active'));
        mode.classList.add('active');
    });
});