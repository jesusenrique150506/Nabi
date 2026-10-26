const languagesData = {
    ingles: {
        name: "Inglés",
        title: "Inglés Integral & Global",
        subtitle: "Fluidez Conversacional, Negocios y Certificación Internacional",
        badge: "Idioma Universal • MCER A1–C2",
        flag: "🇺🇸",
        description: "Domina el idioma global desde las bases hasta un nivel ejecutivo. Clases prácticas enfocadas en perder el miedo a hablar, destacar en entrevistas laborales y obtener certificaciones oficiales.",
        phraseNative: '"Unlock your world, one conversation at a time."',
        phraseRaw: "Unlock your world, one conversation at a time.",
        phraseLang: "en-US",
        phraseTranslation: "“Abre tu mundo, una conversación a la vez.”",
        stats: {
            levels: "A1 a C2",
            group: "Máx. 8 alum.",
            cert: "TOEFL / IELTS"
        },
        levels: [
            { code: "A1 - A2", name: "Foundations & Survival", desc: "Comunicación cotidiana, viajes, presentaciones y pronunciación clara desde el primer mes." },
            { code: "B1 - B2", name: "Fluency & Confidence", desc: "Debates, presentaciones laborales, fluidez espontánea y comprensión auditiva natural." },
            { code: "C1 - C2", name: "Mastery & Executive", desc: "Inglés de negocios, negociación internacional, redacción académica y dominio avanzado." },
            { code: "PREP", name: "Certificación TOEFL / Cambridge", desc: "Simulacros cronometrados, estrategias de examen y puntaje garantizado." }
        ],
        modalities: [
            { icon: "fa-laptop", title: "Online en Vivo", schedule: "Lun a Jue • Matutino o Vespertino", tag: "Más popular" },
            { icon: "fa-chalkboard-user", title: "Presencial en Nabi", schedule: "2 o 3 veces por semana", tag: "Inmersivo" },
            { icon: "fa-calendar-day", title: "Sabatino Intensivo", schedule: "Sábados 9:00 a 13:00 hrs", tag: "Fines de semana" },
            { icon: "fa-user-tie", title: "1-a-1 Personalizado", schedule: "Horario 100% a tu medida", tag: "Ejecutivo" }
        ],
        advantages: [
            "Preparación directa para exámenes Cambridge (B2 First, C1 Advanced), TOEFL iBT e IELTS.",
            "Speaking Clubs semanales incluidos sin costo adicional para practicar conversación real.",
            "Enfoque en entrevistas de trabajo en inglés, presentaciones y vocabulario profesional."
        ]
    },
    frances: {
        name: "Francés",
        title: "Francés: Elegancia & Cultura",
        subtitle: "Diplomacia, Movilidad Académica y Preparación DELF / DALF",
        badge: "Alianza & Europa • MCER A1–C1",
        flag: "🇫🇷",
        description: "Abre las puertas a universidades e intercambios en Francia, Canadá, Suiza y Bélgica. Domina la fonética francesa con profesores especializados y metodología comunicativa.",
        phraseNative: '"Chaque langue est une nouvelle façon de voir la vie."',
        phraseRaw: "Chaque langue est une nouvelle façon de voir la vie.",
        phraseLang: "fr-FR",
        phraseTranslation: "“Cada idioma es una nueva forma de ver la vida.”",
        stats: {
            levels: "A1 a C1",
            group: "Máx. 8 alum.",
            cert: "DELF / DALF"
        },
        levels: [
            { code: "A1 - A2", name: "Débutant & Découverte", desc: "Fonética francesa, enlaces (liaisons), conversaciones en cafés, viajes y vida diaria." },
            { code: "B1", name: "Seuil & Autonomie", desc: "Nivel requerido para intercambios universitarios y trámites de residencia o trabajo." },
            { code: "B2 - C1", name: "Avancé & Académique", desc: "Argumentación estructurada, francés profesional y literatura contemporánea." },
            { code: "DELF", name: "Taller Oficial DELF / TCF", desc: "Entrenamiento en las 4 competencias evaluadas por el Ministerio de Educación francés." }
        ],
        modalities: [
            { icon: "fa-laptop", title: "Francés Online en Vivo", schedule: "Lun & Mié o Mar & Jue", tag: "Interactivo" },
            { icon: "fa-calendar-day", title: "Sabatino Cultural", schedule: "Sábados 9:30 a 13:00 hrs", tag: "Ideal universitarios" },
            { icon: "fa-plane-departure", title: "Francés para Viajeros y Becas", schedule: "Cursos trimestrales", tag: "Enfoque Canadá/Francia" },
            { icon: "fa-comments", title: "Atelier de Conversation", schedule: "Viernes culturales", tag: "Práctica oral" }
        ],
        advantages: [
            "Entrenamiento especializado en pronunciación y comprensión oral nativa desde la primera sesión.",
            "Asesoría y preparación para certificaciones DELF B1/B2 y TCF Québec / Canadá.",
            "Actividades de inmersión: cine francés, música francófona y gastronomía."
        ]
    },
    italiano: {
        name: "Italiano",
        title: "Italiano: Arte, Viajes & Pasión",
        subtitle: "Cultura Viva, Ciudadanía Italiana y Certificación CILS / CELI",
        badge: "Cultura & Raíces • MCER A1–C1",
        flag: "🇮🇹",
        description: "Aprende el idioma de la música, el diseño, la gastronomía y el arte. Ideal para viajeros apasionados, trámites de ciudadanía por matrimonio (B1 Cittadinanza) o estudios en Italia.",
        phraseNative: '"Imparare l\'italiano è vivere la dolce vita ogni giorno."',
        phraseRaw: "Imparare l'italiano è vivere la dolce vita ogni giorno.",
        phraseLang: "it-IT",
        phraseTranslation: "“Aprender italiano es vivir la dolce vita cada día.”",
        stats: {
            levels: "A1 a C1",
            group: "Máx. 8 alum.",
            cert: "CILS / PLIDA"
        },
        levels: [
            { code: "A1 - A2", name: "Benvenuti in Italia", desc: "Expresiones cotidianas, viajes por Italia, restaurantes, compras y conversación fluida." },
            { code: "B1", name: "Italiano Intermedio & Cittadinanza", desc: "Dominio conversacional y preparación específica para el examen B1 Cittadinanza." },
            { code: "B2 - C1", name: "Cultura, Arte & Design", desc: "Italiano avanzado para estudios de arquitectura, moda, música, gastronomía o negocios." },
            { code: "CILS", name: "Certificación CILS / CELI / PLIDA", desc: "Práctica con exámenes reales de la Universidad para Extranjeros de Siena y Perugia." }
        ],
        modalities: [
            { icon: "fa-laptop", title: "Online en Vivo", schedule: "2 sesiones por semana", tag: "Flexible" },
            { icon: "fa-calendar-day", title: "Sabatino Italiano", schedule: "Sábados matutino", tag: "Ambiente dinámico" },
            { icon: "fa-passport", title: "Ruta B1 Ciudadanía", schedule: "Programa enfocado en certificación", tag: "Oficial" },
            { icon: "fa-wine-glass", title: "Italiano para Viajeros", schedule: "Módulos intensivos de 8 semanas", tag: "Práctico" }
        ],
        advantages: [
            "Avance rápido para hispanohablantes con énfasis en evitar 'falsos amigos' y hablar con autenticidad.",
            "Preparación integral para los exámenes oficiales CILS, CELI y PLIDA.",
            "Inmersión en cultura italiana contemporánea, regiones, cine y expresiones reales."
        ]
    },
    coreano: {
        name: "Coreano",
        title: "Coreano (한국어) • Programa Insignia",
        subtitle: "Alfabeto Hangul, Cultura Hallyu, K-Dramas y Examen TOPIK",
        badge: "Idioma Insignia Nabi 🦋 • TOPIK I & II",
        flag: "🇰🇷",
        description: "¡'Nabi' (나비) significa mariposa en coreano! Aprende a leer y escribir Hangul desde la primera semana, comprende el idioma sin subtítulos y prepárate para viajar o estudiar en Corea del Sur.",
        phraseNative: '"나비와 함께 한국어로 새로운 세상을 만나보세요!"',
        phraseRaw: "나비와 함께 한국어로 새로운 세상을 만나보세요!",
        phraseLang: "ko-KR",
        phraseTranslation: "“¡Conoce un nuevo mundo en coreano junto a Nabi!”",
        stats: {
            levels: "TOPIK 1 a 6",
            group: "Máx. 8 alum.",
            cert: "TOPIK I & II"
        },
        levels: [
            { code: "Nivel 1", name: "Hangul & Coreano Básico", desc: "Lectura y escritura del alfabeto coreano (Hangul), pronunciación y frases esenciales." },
            { code: "TOPIK I", name: " Elemental (Niveles 1 y 2)", desc: "Conversaciones del día a día, niveles de cortesía coreanos y comprensión de K-Culture." },
            { code: "TOPIK II", name: "Intermedio - Avanzado (3 a 6)", desc: "Coreano académico y profesional, preparación para becas GKS y universidades en Corea." },
            { code: "HALLYU", name: "Club K-Culture & Conversación", desc: "Práctica auditiva con escenas reales, expresiones juveniles, modismos y caligrafía." }
        ],
        modalities: [
            { icon: "fa-laptop", title: "Coreano Online en Vivo", schedule: "Entre semana • Horarios tarde/noche", tag: "Alta demanda" },
            { icon: "fa-calendar-day", title: "Sabatino K-Nabi", schedule: "Sábados matutino o vespertino", tag: "Favorito" },
            { icon: "fa-graduation-cap", title: "Preparación TOPIK & Becas", schedule: "Entrenamiento intensivo", tag: "Certificación" },
            { icon: "fa-seedling", title: "Taller Hangul Desde Cero", schedule: "Inicios cada mes", tag: "Principiantes" }
        ],
        advantages: [
            "Aprende a leer Hangul sin depender de la romanización desde tus primeras clases.",
            "Guía paso a paso para presentar el examen oficial TOPIK I y TOPIK II y postular a becas en Corea.",
            "Profesores apasionados por la lengua y cultura coreana con material visual y dinámico."
        ]
    }
};

let currentLangKey = 'ingles';

function selectLanguage(langKey) {
    const data = languagesData[langKey];
    if (!data) return;
    currentLangKey = langKey;

    // 1. Actualizar botones del Menú Dock
    document.querySelectorAll('.dock-btn').forEach(btn => {
        btn.classList.remove('bg-[#EE9FB2]', 'text-[#46141D]', 'shadow-md');
        btn.classList.add('text-[#FADCE4]', 'hover:bg-white/10');
    });
    const activeDock = document.getElementById(`dock-${langKey}`);
    if (activeDock) {
        activeDock.classList.remove('text-[#FADCE4]', 'hover:bg-white/10');
        activeDock.classList.add('bg-[#EE9FB2]', 'text-[#46141D]', 'shadow-md');
    }

    // 2. Actualizar selección en las tarjetas Bento
    document.querySelectorAll('.lang-bento-card').forEach(card => {
        card.classList.remove('selected-card');
    });
    const activeCard = document.getElementById(`card-${langKey}`);
    if (activeCard) {
        activeCard.classList.add('selected-card');
    }

    // 3. Animar y actualizar contenido del Panel Maestro
    const masterPanel = document.getElementById('masterPanel');
    masterPanel.classList.remove('panel-animate');
    void masterPanel.offsetWidth; // trigger reflow
    masterPanel.classList.add('panel-animate');

    document.getElementById('panelBgFlag').textContent = data.flag;
    document.getElementById('panelFlag').textContent = data.flag;
    document.getElementById('panelBadge').textContent = data.badge;
    document.getElementById('panelTitle').textContent = data.title;
    document.getElementById('panelSubtitle').textContent = data.subtitle;
    document.getElementById('panelDescription').textContent = data.description;
    document.getElementById('panelPhraseNative').textContent = data.phraseNative;
    document.getElementById('panelPhraseTranslation').textContent = data.phraseTranslation;

    document.getElementById('panelStatLevels').textContent = data.stats.levels;
    document.getElementById('panelStatGroup').textContent = data.stats.group;
    document.getElementById('panelStatCert').textContent = data.stats.cert;

    const ctaBtn = document.getElementById('panelCtaBtn');
    ctaBtn.setAttribute('onclick', `openTrialWithLang('${data.name}')`);
    ctaBtn.innerHTML = `<span>Inscribirme o Pedir Clase Muestra de ${data.name}</span><i class="fa-solid fa-arrow-right"></i>`;

    // Renderizar Sub-pestaña 1: Niveles
    const levelsList = document.getElementById('levelsList');
    levelsList.innerHTML = data.levels.map(lvl => `
        <div class="p-4 rounded-2xl bg-[#FDF8F9] border border-[#EE9FB2]/30 hover:border-[#46141D]/40 transition space-y-1.5">
            <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-lg bg-[#46141D] text-[#FBDBAA] text-[11px] font-extrabold">${lvl.code}</span>
                <i class="fa-solid fa-circle-check text-[#8C2D41] text-xs"></i>
            </div>
            <h5 class="font-extrabold text-sm text-[#46141D] pt-1">${lvl.name}</h5>
            <p class="text-xs text-slate-600 leading-relaxed">${lvl.desc}</p>
        </div>
    `).join('');

    // Renderizar Sub-pestaña 2: Modalidades
    const modalitiesList = document.getElementById('modalitiesList');
    modalitiesList.innerHTML = data.modalities.map(mod => `
        <div class="p-4 rounded-2xl bg-[#FDF8F9] border border-[#EE9FB2]/30 flex items-start gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-[#FADCE4] text-[#46141D] flex items-center justify-center shrink-0 font-bold">
                <i class="fa-solid ${mod.icon}"></i>
            </div>
            <div class="space-y-1">
                <div class="flex items-center gap-2">
                    <h5 class="font-extrabold text-sm text-[#46141D]">${mod.title}</h5>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#46141D]/10 text-[#46141D]">${mod.tag}</span>
                </div>
                <p class="text-xs text-slate-600">${mod.schedule}</p>
            </div>
        </div>
    `).join('');

    // Renderizar Sub-pestaña 3: Ventajas y Certificación
    const advantagesList = document.getElementById('advantagesList');
    advantagesList.innerHTML = data.advantages.map(adv => `
        <div class="p-4 rounded-2xl bg-[#FDF8F9] border border-[#EE9FB2]/30 flex items-center gap-3.5">
            <div class="w-8 h-8 rounded-full bg-[#46141D] text-[#EE9FB2] flex items-center justify-center shrink-0 text-xs">
                <i class="fa-solid fa-star"></i>
            </div>
            <p class="text-xs sm:text-sm font-medium text-slate-700">${adv}</p>
        </div>
    `).join('');
}

function switchSubTab(tabName) {
    document.querySelectorAll('.subcontent').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.subtab-btn').forEach(btn => {
        btn.classList.remove('bg-[#46141D]', 'text-white', 'shadow-sm');
        btn.classList.add('text-slate-600');
    });

    const targetContent = document.getElementById(`subcontent-${tabName}`);
    if (targetContent) targetContent.classList.remove('hidden');

    const activeBtn = document.getElementById(`subtab-${tabName}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-slate-600');
        activeBtn.classList.add('bg-[#46141D]', 'text-white', 'shadow-sm');
    }
}

function filterBento(filterTag) {
    document.querySelectorAll('.bento-filter-btn').forEach(btn => {
        if (btn.dataset.filter === filterTag) {
            btn.classList.remove('bg-[#FADCE4]/60', 'text-[#46141D]');
            btn.classList.add('bg-[#46141D]', 'text-white');
        } else {
            btn.classList.remove('bg-[#46141D]', 'text-white');
            btn.classList.add('bg-[#FADCE4]/60', 'text-[#46141D]');
        }
    });

    document.querySelectorAll('.lang-bento-card').forEach(card => {
        const tags = card.dataset.tags || '';
        if (tags.includes(filterTag)) {
            card.classList.remove('hidden');
            card.classList.add('panel-animate');
        } else {
            card.classList.add('hidden');
        }
    });
}

function speakCurrentPhrase() {
    const data = languagesData[currentLangKey];
    if (!data || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(data.phraseRaw);
    utterance.lang = data.phraseLang;
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
}

function toggleMegaMenu(e) {
    e.stopPropagation();
    const menu = document.getElementById('megaMenu');
    menu.classList.toggle('active');
}

function closeMegaMenu() {
    const menu = document.getElementById('megaMenu');
    if (menu) menu.classList.remove('active');
}

document.addEventListener('click', (e) => {
    const container = document.getElementById('navDropdownContainer');
    if (container && !container.contains(e.target)) {
        closeMegaMenu();
    }
});

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
}

function openTrialWithLang(langName) {
    const select = document.getElementById('trialLangSelect');
    if (select && langName) {
        select.value = langName;
    }
    openModal('trialModal');
}

function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-50 bg-[#46141D] text-white px-6 py-4 rounded-2xl shadow-2xl border border-[#EE9FB2] flex items-center gap-3 panel-animate';
    toast.innerHTML = `<span class="text-xl">🦋</span><span class="text-sm font-bold">${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

function handleTrialSubmit(e) {
    e.preventDefault();
    const lang = document.getElementById('trialLangSelect').value;
    closeModal('trialModal');
    showNotification(`¡Listo! Tu clase muestra de ${lang} en Nabi ha sido registrada.`);
}

function handleLevelSubmit(e) {
    e.preventDefault();
    const lang = document.getElementById('levelLangSelect').value;
    const exp = document.getElementById('levelExpSelect').value;
    closeModal('levelModal');
    showNotification(`Nivel sugerido en ${lang}: ${exp}. ¡Agenda tu clase muestra gratis!`);
}

// Inicializar panel al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    selectLanguage('ingles');
});
