// Íconos SVG limpios generados en código
const ICONS = {
  speaker: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
  pause: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`,
  cardArrow: `<svg viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>`,
  warning: `<svg viewBox="0 0 120 110" fill="none" stroke="#000000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M60 10 L112 100 H8 Z"/><line x1="60" y1="42" x2="60" y2="70"/><circle cx="60" cy="84" r="2.5" fill="#000000"/></svg>`,
  arrowUp: `<svg viewBox="0 0 120 120" fill="none" stroke="#000000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="60" y1="100" x2="60" y2="22"/><polyline points="30,52 60,22 90,52"/></svg>`,
  arrowRight: `<svg viewBox="0 0 120 120" fill="none" stroke="#000000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M36 105 V55 C36 42 46 32 59 32 H76 V16 L104 40 L76 64 V48 H59 C54 48 50 52 50 57 V105 Z"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 120 120" fill="none" stroke="#000000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M84 105 V55 C84 42 74 32 61 32 H44 V16 L16 40 L44 64 V48 H61 C66 48 70 52 70 57 V105 Z"/></svg>`,
  trafficLight: `<svg viewBox="0 0 120 140" fill="none" aria-hidden="true"><rect x="38" y="10" width="44" height="120" rx="14" fill="#000000"/><circle cx="60" cy="36" r="12" fill="#FFFFFF"/><circle cx="60" cy="70" r="12" fill="#FFFFFF"/><circle cx="60" cy="104" r="12" fill="#FFFFFF"/></svg>`
};

// Base de datos de todas las pantallas de Web 3: Cubo del Sur
const SCREENS = {
  // PANTALLAS INICIALES (18 y 19)
  intro: {
    title: "Museo de la Movilidad y las Identidades",
    paragraphs: [
      "Somos un museo de la Intendencia de Montevideo. Acá contamos cómo las personas se han desplazado a lo largo del tiempo, y cómo esos movimientos han construido nuestra sociedad, la cultura y las identidades."
    ],
    highlight: "¿Vamos a descubrirlo?",
    audio: "audio/pagina1.mp3",
    audioLabel: "Escuchar presentación",
    primaryLabel: "Continuar",
    next: "selector"
  },

  selector: {
    type: "selector",
    title: "Elegí entre dos recorridos: histórico o directo ¿Cuál preferís hacer?",
    options: [
      {
        title: "Recorrido histórico",
        description: "Vas a conocer puntos clave sobre el Montevideo colonial.",
        buttonLabel: "Elegir este recorrido",
        next: "hist_111"
      },
      {
        title: "Recorrido directo",
        description: "Esta es la forma más simple y rápida de llegar al museo.",
        buttonLabel: "Elegir este recorrido",
        next: "dir_20"
      }
    ]
  },

  // ==========================================
  // RECORRIDO DIRECTO (Pantallas 20 a 27)
  // ==========================================
  dir_20: {
    title: "Estás en el Cubo del Sur, ¿Vamos hasta el MuMI?",
    image: "img/mapa-directo.png",
    imageType: "map",
    imageAlt: "Mapa del recorrido directo desde Cubo del Sur hasta el MuMI",
    paragraphs: [
      "Este recorrido te guía desde el Cubo del Sur hasta el museo. Podés seguir las instrucciones en pantalla o seguir escuchando este audio."
    ],
    audio: "audio/pagina20.mp3",
    audioLabel: "Escuchar indicaciones",
    primaryLabel: "Comenzar recorrido",
    next: "dir_21"
  },

  dir_21: {
    icon: "warning",
    center: true,
    title: "Circulá con precaución",
    paragraphs: [
      "Las instrucciones sobre cómo llegar a pie no siempre reflejan las condiciones reales de la calle."
    ],
    audio: "audio/pagina4.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "dir_22"
  },

  dir_22: {
    badge: "Paso 1 de 6",
    icon: "arrowUp",
    title: "Avanzá en línea recta",
    paragraphs: [
      "De espaldas al Cubo del Sur, caminá 250 metros apróx. hacia la derecha sobre la Rambla Gran Bretaña."
    ],
    audio: "audio/pagina22.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "dir_23"
  },

  dir_23: {
    badge: "Paso 2 de 6",
    icon: "arrowLeft",
    title: "Girá a tu izquierda",
    paragraphs: [
      "Cruzá las calles en el primer semáforo a tu izquierda desde el Cubo del Sur. Al cruzar la primera calle vas a llegar a un isla peatonal para poder cruzar la segunda calle de la Rambla Gran Bretaña."
    ],
    audio: "audio/pagina23.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "dir_24"
  },

  dir_24: {
    badge: "Paso 3 de 6",
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: [
      "Cruzaste las calles de la Rambla. Girá a tu derecha y cruzá la calle por Maldonado.\nCaminá derecho por la Plaza Irineo Evangelista y cruzá a la vereda de enfrente. Vas a estar sobre la esquina de Maldonado y Ciudadela."
    ],
    audio: "audio/pagina24.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "dir_25"
  },

  dir_25: {
    badge: "Paso 4 de 6",
    icon: "arrowLeft",
    title: "Girá a tu izquierda",
    paragraphs: [
      "Cruzá la calle a tu izquierda. Caminá derecho una cuadra por Ciudadela.\nA final de cuadra, hay un semáforo para cruzar hacia la izquierda."
    ],
    audio: "audio/pagina25.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "dir_26"
  },

  dir_26: {
    badge: "Paso 5 de 6",
    icon: "arrowLeft",
    title: "Girá a tu izquierda",
    paragraphs: [
      "Cruzá la calle a tu izquierda, vas a estar sobre la calle Camacuá.\nCruzá nuevamente hacia la derecha, vas a llegar a Bartolomé Mitre."
    ],
    audio: "audio/pagina26.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "dir_27"
  },

  dir_27: {
    badge: "Paso 6 de 6",
    icon: "arrowUp",
    title: "Seguí por esta calle",
    paragraphs: [
      "Doblá ligeramente hacia la derecha para entrar en Bartolomé Mitre, luego caminá siete cuadras derecho."
    ],
    audio: "audio/pagina27.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "arrival"
  },

  // ==========================================
  // RECORRIDO HISTÓRICO (Pantallas 111 a 132)
  // ==========================================
  hist_111: {
    image: "img/mapa-historico.png",
    imageType: "map",
    imageAlt: "Mapa del recorrido histórico desde Cubo del Sur hasta el MuMI",
    paragraphs: [
      "Este recorrido te guía desde el Cubo del Sur hasta el museo, atravesando algunos de los puntos históricos más interesantes de nuestra ciudad."
    ],
    highlight: "¿Vamos a descubrirlo?",
    audio: "audio/pagina111.mp3",
    audioLabel: "Escuchar presentación",
    primaryLabel: "Comenzar recorrido",
    next: "hist_112"
  },

  hist_112: {
    icon: "warning",
    center: true,
    title: "Circulá con precaución",
    paragraphs: [
      "Las instrucciones sobre cómo llegar a pie no siempre reflejan las condiciones reales de la calle."
    ],
    audio: "audio/pagina4.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_113"
  },

  hist_113: {
    title: "Estás en el Cubo del Sur",
    paragraphs: [
      "El Cubo del Sur es una de las pocas partes que quedan de las antiguas murallas de Montevideo. Era una construcción militar que servía para defender la parte sur de la ciudad contra los ataques.",
      "Su construcción empezó cerca del año 1740 y fue hecha por personas esclavizadas. Tenía forma de semicírculo y paredes de piedra muy gruesas para resistir los golpes y sostener cañones pesados.",
      "Con los años, Montevideo dejó de necesitar murallas para defenderse y en 1829 empezaron a derribarlas. En 1841 se vendió ese terreno y más tarde se construyó allí el antiguo Templo Inglés usando parte de sus piedras como base. En los años 1930, cuando se hizo la Rambla Sur, se derribó el templo y se hicieron obras para recuperar la forma original del Cubo del Sur.",
      "Este lugar también es muy importante para la historia y la cultura afrodescendiente. En la época colonial, las personas africanas esclavizadas y sus hijos se reunían en esta zona para cantar, bailar y tocar tambores. Esos encuentros fueron el origen del candombe y un espacio muy valioso de unión y resistencia frente a la esclavitud."
    ],
    audio: "audio/pagina113.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_114"
  },

  hist_114: {
    badge: "Punto de partida",
    title: "Cubo del Sur",
    image: "img/cubo-del-sur.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica del Cubo del Sur",
    primaryLabel: "Continuar",
    next: "hist_115"
  },

  hist_115: {
    icon: "arrowRight",
    title: "Gire a la derecha",
    paragraphs: [
      "Caminá por la rambla hasta llegar al próximo semáforo"
    ],
    audio: "audio/pagina115.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_116"
  },

  hist_116: {
    icon: "trafficLight",
    title: "Cruce de semáforo",
    paragraphs: [
      "Cruzá el semáforo hasta llegar a la estación de ANCAP y rodeala hasta llegar a la Plaza España"
    ],
    audio: "audio/pagina116.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_117"
  },

  hist_117: {
    title: "Llegaste a la Plaza España",
    paragraphs: [
      "La Plaza España es un espacio público ubicado junto a la Rambla de Montevideo, ideal para pasear y reunirse. Tiene jardines, lugares abiertos para caminar y vistas hacia el Río de la Plata.",
      "Este espacio empezó a formarse entre 1926 y 1934, cuando se construyó la Rambla Sur. Más tarde, cerca del año 1976, la Intendencia de Montevideo la arregló para convertirla en una plaza y recuperar los restos de las antiguas murallas coloniales.",
      "En la plaza todavía se pueden ver partes de la vieja muralla de piedra y del antiguo Portón de San Juan, que servían para defender la ciudad. También hay monumentos dedicados a personajes españoles, como Don Quijote de la Mancha e Isabel la Católica. Antes de poner la estatua de Isabel la Católica en 1985, allí estaban las estatuas de los caciques indígenas Zapicán y Abayubá, que fueron retiradas cuando se reformó la plaza.",
      "Hoy en día, la Plaza España es un lugar muy agradable para disfrutar frente al río y conocer de cerca las antiguas defensas de Montevideo."
    ],
    audio: "audio/pagina117.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_118"
  },

  hist_118: {
    badge: "Parada 1 de 4",
    title: "Plaza España",
    image: "img/plaza-espana.png",
    imageType: "photo",
    imageAlt: "Fotografía de la Plaza España",
    primaryLabel: "Continuar",
    next: "hist_119"
  },

  hist_119: {
    icon: "arrowUp",
    title: "Dirigite a la calle de la derecha",
    paragraphs: [
      "Dirigite a la calle Ciudadela que se encuentra a la derecha de la plaza en dirección contraria al río. Avanzá a la siguiente esquina de Ciudadela y Camacuá"
    ],
    audio: "audio/pagina119.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_120"
  },

  hist_120: {
    icon: "arrowLeft",
    title: "Girá a la izquierda",
    paragraphs: [
      "En la intersección, avanzá por la calle de adoquines, no por la de asfalto.\nHacé el giro a la derecha que sigue la calle de Bartolomé Mitre"
    ],
    audio: "audio/pagina120.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_121"
  },

  hist_121: {
    icon: "arrowUp",
    title: "Avanzá 2 cuadras",
    paragraphs: [
      "Seguí caminando por Bartolomé Mitre 2 cuadras hasta llegar a la calle Buenos aires"
    ],
    audio: "audio/pagina121.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_122"
  },

  hist_122: {
    title: "Llegaste al Baluarte de San Sebastián",
    paragraphs: [
      "El Baluarte de San Sebastián es una parte de las antiguas murallas que protegían Montevideo. Tenía una forma especial que permitía vigilar muy bien los alrededores. Desde allí, los soldados cuidaban la ciudad y usaban sus armas para defenderse de los ataques.",
      "En el año 1807, soldados ingleses atacaron Montevideo. Durante esa pelea, lograron romper una parte de las murallas para entrar. Ese lugar roto dio origen al nombre de la actual calle Brecha. Esta historia demuestra lo importantes que eran las murallas y los baluartes para defender la ciudad.",
      "Hoy es muy importante cuidar los restos del Baluarte de San Sebastián. Es una de las pocas partes visibles que quedan de las antiguas defensas de Montevideo. Aunque ahora está rodeado de calles y edificios modernos, nos ayuda a imaginar cómo era la vida y la defensa de la ciudad hace muchos años."
    ],
    audio: "audio/pagina122.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_123"
  },

  hist_123: {
    badge: "Parada 2 de 4",
    title: "Baluarte de San Sebastián",
    image: "img/baluarte.png",
    imageType: "photo",
    imageAlt: "Placa y restos del Baluarte de San Sebastián",
    primaryLabel: "Continuar",
    next: "hist_124"
  },

  hist_124: {
    icon: "arrowUp",
    title: "Cruzá la calle",
    paragraphs: [
      "En esa misma esquina de Bartolomé Mitre y Buenos aires, del otro lado de la calle, se encuentra el Teatro Solís"
    ],
    audio: "audio/pagina124.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_125"
  },

  hist_125: {
    title: "Llegaste al Teatro Solís",
    paragraphs: [
      "El Teatro Solís es uno de los teatros más importantes de Uruguay. Su construcción empezó en el año 1842, cuando Uruguay era un país joven. Un grupo de 156 personas decidió crearlo para tener un gran lugar de música y teatro en Montevideo. Las obras se frenaron en 1843 por una guerra llamada Guerra Grande. Finalmente, el teatro abrió sus puertas el 25 de agosto de 1856, el día en que se celebra la independencia de Uruguay.",
      "En la inauguración se presentó una ópera llamada Ernani, creada por el músico italiano Giuseppe Verdi. A esa primera función asistió el presidente de Uruguay de esa época, Gabriel Antonio Pereira. El teatro lleva el nombre de Juan Díaz de Solís, un navegante que llegó al Río de la Plata en el año 1516.",
      "El edificio tiene un estilo antiguo llamado neoclásico, inspirado en las construcciones de Grecia y Roma. En su frente tiene 8 columnas grandes y un techo triangular. Fue diseñado así para mostrar la importancia de Uruguay como un país independiente.",
      "Al principio, el teatro era privado, es decir, tenía dueños particulares. En el año 1937, la Intendencia de Montevideo lo compró y pasó a ser un lugar público para todas las personas.",
      "El Teatro Solís es clave para la cultura del país. En 1947 se creó la Comedia Nacional y presentó allí su primera obra. En 1949 se creó una escuela municipal para formar actores y actrices en Uruguay.",
      "Cuando se construyó el teatro, Montevideo todavía tenía murallas que protegían la ciudad. Cerca de allí estaba la Fuente de Viana, que daba agua a los vecinos. Hoy, el Teatro Solís es mucho más que un lugar de espectáculos: es parte de la historia y la cultura de Uruguay."
    ],
    audio: "audio/pagina125.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_126"
  },

  hist_126: {
    badge: "Parada 3 de 4",
    title: "Teatro Solís",
    image: "img/teatro-solis.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica del Teatro Solís",
    primaryLabel: "Continuar",
    next: "hist_127"
  },

  hist_127: {
    icon: "arrowUp",
    title: "Cruzá la calle",
    paragraphs: [
      "En esa misma esquina de Bartolomé Mitre y Buenos aires, cruzando la calle vas a encontrar la peatonal de Bacaray, continuá por ella"
    ],
    audio: "audio/pagina127.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_128"
  },

  hist_128: {
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: [
      "Cuando llegues a la esquina entre las dos peatonales de Sarandí y Bacaray, girá a la derecha y continuá por Sarandí hasta la Puerta de la Ciudadela"
    ],
    audio: "audio/pagina128.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_129"
  },

  hist_129: {
    title: "Llegaste a la Puerta de la Ciudadela",
    paragraphs: [
      "La Puerta de la Ciudadela es una construcción muy antigua de Montevideo. Antes formaba parte de unas grandes murallas que rodeaban y protegían la ciudad.",
      "Hoy está en la Plaza Independencia y marca la entrada a la Ciudad Vieja. La puerta se empezó a construir en el año 1742.",
      "En ese momento, Montevideo estaba gobernada por España. Los españoles construyeron la fortaleza llamada La Ciudadela para defenderse de los ataques. Servía para entrar desde la ciudad hacia esa fortaleza. Tenía un puente que subía y bajaba con cadenas para controlar quién entraba. Hoy todavía se pueden ver las marcas de esas cadenas en la piedra.",
      "Con los años, Montevideo creció y necesitó más espacio para hacer casas y calles. Por eso, entre los años 1829 y 1877, se derribaron las murallas y la fortaleza. Pero la puerta no se destruyó: se desarmó con cuidado y se guardaron sus piedras.",
      "La puerta cambió de lugar varias veces. En el año 1879 la llevaron a otro lugar de la ciudad. Después la pusieron en la entrada de una escuela. En el año 1959 volvió a la Plaza Independencia. La volvieron a armar usando sus piedras originales y desde entonces sigue ahí.",
      "En el año 1975 fue declarada Monumento Histórico Nacional. Es muy importante cuidarla porque nos ayuda a imaginar cómo era Montevideo hace muchos años."
    ],
    audio: "audio/pagina129.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_130"
  },

  hist_130: {
    badge: "Parada 4 de 4",
    title: "Puerta de la Ciudadela",
    image: "img/puerta.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica de la Puerta de la Ciudadela",
    primaryLabel: "Continuar",
    next: "hist_131"
  },

  hist_131: {
    icon: "arrowLeft",
    title: "Girá a la izquierda",
    paragraphs: [
      "Luego de visitar la Puerta de la Ciudadela, girá a la izquierda en la peatonal de Sarandí y dirigite por la calle Juncal, bajando 4 cuadras"
    ],
    audio: "audio/pagina131.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_132"
  },

  hist_132: {
    icon: "arrowLeft",
    title: "Girá a la izquierda",
    paragraphs: [
      "Después de 4 cuadras, te vas a encontrar con la calle Piedras. Girá a la izquierda por esa calle y avanzá a la siguiente esquina."
    ],
    audio: "audio/pagina132.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "arrival"
  },

  // PENÚLTIMA PANTALLA UNIFICADA (Accesos al MuMI)
  arrival: {
    type: "arrival",
    title: "Estás en la entrada principal del MuMI",
    lead: "¡Bienvenido! Elegí por qué acceso querés ingresar",
    sections: [
      {
        heading: "Puerta principal (con opción accesible)",
        body: "El acceso por la puerta principal tiene escalones y una puerta grande de madera y vidrio que se abre hacia los dos lados. Si preferís evitar los escalones, caminá unos 3 metros (unos 4 o 5 pasos) hacia tu derecha, sobre la calle Bartolomé Mitre. Allí se encuentra la entrada accesible a nivel del suelo."
      },
      {
        heading: "Entrada por Muralla Abierta",
        body: "Para entrar por la Muralla Abierta, avanzá hacia tu izquierda por la calle Piedras hasta sentir que el piso cambia a una vereda de adoquines. En ese punto, girá hacia tu derecha y vas a encontrar el portón de ingreso. Tené en cuenta que en esta entrada no hay recepción."
      }
    ],
    audio: "audio/llegada.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Finalizar recorrido",
    next: "final"
  },

  // PANTALLA FINAL NEGRA
  final: {
    type: "final"
  }
};

// Elementos del DOM
const appContainer = document.getElementById('app');
const appHeader = document.getElementById('app-header');
const screenContent = document.getElementById('screen-content');
const screenFooter = document.getElementById('screen-footer');
const audioPlayer = document.getElementById('audio-player');
const btnHome = document.getElementById('btn-home');
const btnBack = document.getElementById('btn-back');

let isPlaying = false;
let historyStack = [];

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  isPlaying = false;
}

function toggleAudio(src, btnElement, originalLabel) {
  if (isPlaying) {
    stopAudio();
    btnElement.classList.remove('playing');
    btnElement.innerHTML = `${ICONS.speaker}<span>${originalLabel}</span>`;
  } else {
    audioPlayer.src = src;
    audioPlayer.play().then(() => {
      isPlaying = true;
      btnElement.classList.add('playing');
      btnElement.innerHTML = `${ICONS.pause}<span>Pausar audio</span>`;
    }).catch(err => {
      console.error("Error reproduciendo audio:", err);
    });
  }
}

audioPlayer.addEventListener('ended', () => {
  isPlaying = false;
  const activeBtn = document.querySelector('.btn-audio.playing');
  if (activeBtn) {
    activeBtn.classList.remove('playing');
    activeBtn.innerHTML = `${ICONS.speaker}<span>${activeBtn.dataset.label}</span>`;
  }
});

function navigateTo(screenId) {
  const currentId = historyStack[historyStack.length - 1];
  if (currentId !== screenId) {
    historyStack.push(screenId);
  }
  renderScreen(screenId);
}

function goBack() {
  if (historyStack.length > 1) {
    historyStack.pop();
    const prevScreen = historyStack[historyStack.length - 1];
    renderScreen(prevScreen);
  }
}

function resetToHome() {
  historyStack = ['intro'];
  renderScreen('intro');
}

function renderScreen(screenId) {
  stopAudio();
  const data = SCREENS[screenId];
  if (!data) return;

  btnBack.hidden = historyStack.length <= 1 || data.type === 'final';

  screenContent.scrollTop = 0;
  screenContent.innerHTML = '';
  screenFooter.innerHTML = '';
  appContainer.classList.remove('dark-mode');
  appHeader.style.display = 'flex';
  screenContent.className = 'screen-content';

  // Pantalla Final Negra
  if (data.type === 'final') {
    appContainer.classList.add('dark-mode');
    appHeader.style.display = 'none';
    screenContent.classList.add('final-dark');

    screenContent.innerHTML = `
      <img src="img/logo-pantalla-final.svg" alt="MuMI | Muralla Abierta" class="final-logo">
      <button class="btn-restart-dark" onclick="resetToHome()">Volver al inicio</button>
    `;
    return;
  }

  // Pantalla 19: Selector de recorrido con tarjetas
  if (data.type === 'selector') {
    screenContent.classList.add('selector-layout');

    const titleEl = document.createElement('h1');
    titleEl.className = 'screen-title';
    titleEl.textContent = data.title;
    screenContent.appendChild(titleEl);

    const cardsWrapper = document.createElement('div');
    cardsWrapper.className = 'selector-cards';

    data.options.forEach(opt => {
      const card = document.createElement('div');
      card.className = 'choice-card';
      card.innerHTML = `
        <div class="choice-card-header">
          <h2>${opt.title}</h2>
          ${ICONS.cardArrow}
        </div>
        <p>${opt.description}</p>
        <button class="btn btn-primary">${opt.buttonLabel}</button>
      `;
      card.querySelector('button').addEventListener('click', () => navigateTo(opt.next));
      cardsWrapper.appendChild(card);
    });

    screenContent.appendChild(cardsWrapper);
    return;
  }

  // Penúltima pantalla: Accesos al MuMI con scroll
  if (data.type === 'arrival') {
    const titleEl = document.createElement('h1');
    titleEl.className = 'screen-title';
    titleEl.textContent = data.title;
    screenContent.appendChild(titleEl);

    const leadEl = document.createElement('p');
    leadEl.className = 'arrival-lead';
    leadEl.textContent = data.lead;
    screenContent.appendChild(leadEl);

    data.sections.forEach(sec => {
      const secDiv = document.createElement('section');
      secDiv.className = 'arrival-section';
      secDiv.innerHTML = `
        <h2>${sec.heading}</h2>
        <p>${sec.body}</p>
      `;
      screenContent.appendChild(secDiv);
    });

    if (data.audio) {
      const label = data.audioLabel || 'Escuchar instrucción';
      const audioBtn = document.createElement('button');
      audioBtn.className = 'btn btn-audio';
      audioBtn.dataset.label = label;
      audioBtn.innerHTML = `${ICONS.speaker}<span>${label}</span>`;
      audioBtn.addEventListener('click', () => toggleAudio(data.audio, audioBtn, label));
      screenFooter.appendChild(audioBtn);
    }

    if (data.primaryLabel && data.next) {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'btn btn-primary';
      nextBtn.textContent = data.primaryLabel;
      nextBtn.addEventListener('click', () => navigateTo(data.next));
      screenFooter.appendChild(nextBtn);
    }
    return;
  }

  // Pantallas Estándar
  if (data.center) {
    screenContent.classList.add('center-content');
  }

  if (data.badge) {
    const badgeEl = document.createElement('div');
    badgeEl.className = 'step-badge';
    badgeEl.textContent = data.badge;
    screenContent.appendChild(badgeEl);
  }

  if (data.icon && ICONS[data.icon]) {
    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon-wrapper';
    iconDiv.innerHTML = ICONS[data.icon];
    screenContent.appendChild(iconDiv);
  }

  if (data.title) {
    const titleEl = document.createElement('h1');
    titleEl.className = 'screen-title';
    titleEl.textContent = data.title;
    screenContent.appendChild(titleEl);
  }

  if (data.subtitle) {
    const subEl = document.createElement('h2');
    subEl.className = 'screen-subtitle';
    subEl.textContent = data.subtitle;
    screenContent.appendChild(subEl);
  }

  if (data.image) {
    const mediaDiv = document.createElement('div');
    mediaDiv.className = 'media-wrapper';
    const imgClass = data.imageType === 'map' ? 'map-img' : 'photo-img';
    mediaDiv.innerHTML = `<img src="${data.image}" alt="${data.imageAlt || ''}" class="${imgClass}">`;
    screenContent.appendChild(mediaDiv);
  }

  if (data.paragraphs && data.paragraphs.length > 0) {
    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'screen-body';
    data.paragraphs.forEach(text => {
      const p = document.createElement('p');
      p.innerHTML = text.replace(/\n/g, '<br>');
      bodyDiv.appendChild(p);
    });
    screenContent.appendChild(bodyDiv);
  }

  if (data.highlight) {
    const highEl = document.createElement('p');
    highEl.className = 'screen-highlight';
    highEl.textContent = data.highlight;
    screenContent.appendChild(highEl);
  }

  if (data.audio) {
    const label = data.audioLabel || 'Escuchar presentación';
    const audioBtn = document.createElement('button');
    audioBtn.className = 'btn btn-audio';
    audioBtn.dataset.label = label;
    audioBtn.innerHTML = `${ICONS.speaker}<span>${label}</span>`;
    audioBtn.addEventListener('click', () => toggleAudio(data.audio, audioBtn, label));
    screenFooter.appendChild(audioBtn);
  }

  if (data.primaryLabel && data.next) {
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-primary';
    nextBtn.textContent = data.primaryLabel;
    nextBtn.addEventListener('click', () => navigateTo(data.next));
    screenFooter.appendChild(nextBtn);
  }
}

btnHome.addEventListener('click', resetToHome);
btnBack.addEventListener('click', goBack);

resetToHome();
