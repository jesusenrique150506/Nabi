const NABI_WHATSAPP = "5218332522060";
const NABI_PHONE_DISPLAY = "+52 1 833 252 2060";

// Sanitización de entradas para prevención de XSS e inyección
function sanitizeText(input, maxLen = 100) {
    if (typeof input !== 'string') return '';
    return input
        .replace(/[<>'"`\\]/g, '')
        .replace(/[\u0000-\u001F\u007F]/g, '')
        .trim()
        .slice(0, maxLen);
}

const languagesData = {
    ingles: {
        name: "Inglés",
        title: "Inglés Integral & Global",
        subtitle: "Fluidez Conversacional, Negocios y Preparación Internacional",
        badge: "Idioma Universal • MCER A1–C2",
        flagId: "#flag-us",
        watermark: "EN",
        greetingPill: "Hello! • Global & Business English",
        themeClass: "theme-panel-ingles",
        accentBg: "bg-[#1E3A8A]",
        description: "Domina el idioma global desde las bases hasta un nivel ejecutivo. Clases prácticas enfocadas en perder el miedo a hablar, destacar en entrevistas laborales y prepararte para certificaciones internacionales.",
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
            { code: "PREP", name: "Preparación TOEFL® / Cambridge®", desc: "Simulacros cronometrados, estrategias de examen y fortalecimiento de las 4 habilidades." }
        ],
        modalities: [
            { icon: "fa-laptop", title: "Online en Vivo", schedule: "Lun a Jue • Matutino o Vespertino", tag: "Más popular" },
            { icon: "fa-chalkboard-user", title: "Presencial en Nabi", schedule: "2 o 3 veces por semana", tag: "Inmersivo" },
            { icon: "fa-calendar-day", title: "Sabatino Intensivo", schedule: "Sábados 9:00 a 13:00 hrs", tag: "Fines de semana" },
            { icon: "fa-user-tie", title: "1-a-1 Personalizado", schedule: "Horario 100% a tu medida", tag: "Ejecutivo" }
        ],
        advantages: [
            "Preparación académica orientada a exámenes Cambridge® (B2 First, C1 Advanced), TOEFL® e IELTS®.",
            "Speaking Clubs semanales incluidos para practicar conversación en escenarios reales.",
            "Enfoque en entrevistas de trabajo en inglés, presentaciones ejecutivas y vocabulario profesional."
        ]
    },
    frances: {
        name: "Francés",
        title: "Francés: Elegancia & Cultura",
        subtitle: "Diplomacia, Movilidad Académica y Preparación DELF / DALF",
        badge: "Europa & Canadá • MCER A1–C1",
        flagId: "#flag-fr",
        watermark: "FR",
        greetingPill: "Bonjour ! • L'Art de Parler Français",
        themeClass: "theme-panel-frances",
        accentBg: "bg-[#312E81]",
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
            { code: "B1", name: "Seuil & Autonomie", desc: "Nivel requerido para intercambios universitarios y trámites de movilidad o trabajo." },
            { code: "B2 - C1", name: "Avancé & Académique", desc: "Argumentación estructurada, francés profesional y cultura francófona contemporánea." },
            { code: "PREP", name: "Preparación DELF® / TCF®", desc: "Entrenamiento integral en las 4 competencias del Marco Común Europeo." }
        ],
        modalities: [
            { icon: "fa-laptop", title: "Francés Online en Vivo", schedule: "Lun & Mié o Mar & Jue", tag: "Interactivo" },
            { icon: "fa-calendar-day", title: "Sabatino Cultural", schedule: "Sábados 9:30 a 13:00 hrs", tag: "Ideal universitarios" },
            { icon: "fa-plane-departure", title: "Francés para Viajeros y Becas", schedule: "Cursos trimestrales", tag: "Enfoque Canadá/Francia" },
            { icon: "fa-comments", title: "Atelier de Conversation", schedule: "Viernes culturales", tag: "Práctica oral" }
        ],
        advantages: [
            "Entrenamiento especializado en pronunciación y comprensión oral desde la primera sesión.",
            "Preparación académica para evaluaciones DELF® B1/B2 y TCF® Québec / Canadá.",
            "Inmersión cultural: cine francés, música francófona y expresiones cotidianas."
        ]
    },
    italiano: {
        name: "Italiano",
        title: "Italiano: Arte, Viajes & Pasión",
        subtitle: "Cultura Viva, Ciudadanía B1 y Preparación CILS / CELI",
        badge: "Cultura & Raíces • MCER A1–C1",
        flagId: "#flag-it",
        watermark: "IT",
        greetingPill: "Ciao! • Benvenuti nella Cultura Italiana",
        themeClass: "theme-panel-italiano",
        accentBg: "bg-[#065F46]",
        description: "Aprende el idioma de la música, el diseño, la gastronomía y el arte. Ideal para viajeros apasionados, preparación de requisito B1 Cittadinanza o estudios en Italia.",
        phraseNative: '"Imparare l\'italiano è vivere la dolce vita ogni giorno."',
        phraseRaw: "Imparare l'italiano è vivere la dolce vita ogni giorno.",
        phraseLang: "it-IT",
        phraseTranslation: "“Aprender italiano es vivir la dolce vita cada día.”",
        stats: {
            levels: "A1 a C1",
            group: "Máx. 8 alum.",
            cert: "CILS / CELI"
        },
        levels: [
            { code: "A1 - A2", name: "Benvenuti in Italia", desc: "Expresiones cotidianas, viajes por Italia, restaurantes, compras y conversación fluida." },
            { code: "B1", name: "Italiano Intermedio & Cittadinanza", desc: "Dominio conversacional y preparación enfocada en el nivel B1 Cittadinanza." },
            { code: "B2 - C1", name: "Cultura, Arte & Design", desc: "Italiano avanzado para estudios de arquitectura, moda, música, gastronomía o negocios." },
            { code: "PREP", name: "Preparación CILS® / CELI® / PLIDA®", desc: "Práctica con modelos de evaluación de fluidez escrita, auditiva y oral." }
        ],
        modalities: [
            { icon: "fa-laptop", title: "Online en Vivo", schedule: "2 sesiones por semana", tag: "Flexible" },
            { icon: "fa-calendar-day", title: "Sabatino Italiano", schedule: "Sábados matutino", tag: "Ambiente dinámico" },
            { icon: "fa-passport", title: "Ruta B1 Ciudadanía", schedule: "Programa enfocado en examen B1", tag: "Especializado" },
            { icon: "fa-wine-glass", title: "Italiano para Viajeros", schedule: "Módulos intensivos de 8 semanas", tag: "Práctico" }
        ],
        advantages: [
            "Avance ágil para hispanohablantes con énfasis en evitar 'falsos amigos' y hablar con autenticidad.",
            "Preparación estructurada para evaluaciones de certificación CILS®, CELI® y PLIDA®.",
            "Inmersión en cultura italiana contemporánea, regiones, arte y gastronomía."
        ]
    },
    coreano: {
        name: "Coreano",
        title: "Coreano (한국어) • Programa Insignia",
        subtitle: "Alfabeto Hangul, Cultura Hallyu y Preparación TOPIK",
        badge: "Idioma Insignia Nabi 🦋 • TOPIK I & II",
        flagId: "#flag-kr",
        watermark: "한",
        greetingPill: "안녕하세요! • 나비 (Nabi) Korean Program",
        themeClass: "theme-panel-coreano",
        accentBg: "bg-[#881337]",
        description: "¡'Nabi' (나비) significa mariposa en coreano! Aprende a leer y escribir Hangul desde la primera semana, comprende el idioma sin subtítulos y prepárate para viajar o estudiar en Corea del Sur.",
        phraseNative: '"나비와 함께 한국어로 새로운 세상을 만나보세요!"',
        phraseRaw: "나비와 함께 한국어로 새로운 세상을 만나보세요!",
        phraseLang: "ko-KR",
        phraseTranslation: "“¡Conoce un nuevo mundo en coreano junto a Nabi!”",
        stats: {
            levels: "Niveles 1 a 6",
            group: "Máx. 8 alum.",
            cert: "TOPIK I & II"
        },
        levels: [
            { code: "Nivel 1", name: "Hangul & Coreano Básico", desc: "Lectura y escritura del alfabeto coreano (Hangul), pronunciación y frases esenciales." },
            { code: "TOPIK I", name: "Elemental (Niveles 1 y 2)", desc: "Conversaciones del día a día, niveles de cortesía coreanos y comprensión de K-Culture." },
            { code: "TOPIK II", name: "Intermedio - Avanzado (3 a 6)", desc: "Coreano académico y profesional, preparación para becas GKS y universidades en Corea." },
            { code: "HALLYU", name: "Club K-Culture & Conversación", desc: "Práctica auditiva con situaciones reales, expresiones cotidianas y caligrafía." }
        ],
        modalities: [
            { icon: "fa-laptop", title: "Coreano Online en Vivo", schedule: "Entre semana • Horarios tarde/noche", tag: "Alta demanda" },
            { icon: "fa-calendar-day", title: "Sabatino K-Nabi", schedule: "Sábados matutino o vespertino", tag: "Favorito" },
            { icon: "fa-graduation-cap", title: "Preparación TOPIK® & Becas", schedule: "Entrenamiento intensivo", tag: "Académico" },
            { icon: "fa-seedling", title: "Taller Hangul Desde Cero", schedule: "Inicios cada mes", tag: "Principiantes" }
        ],
        advantages: [
            "Aprende a leer Hangul fluidamente sin depender de la romanización desde tus primeras clases.",
            "Entrenamiento paso a paso para presentar las evaluaciones TOPIK® I y TOPIK® II.",
            "Profesores apasionados por la lengua y cultura coreana con material visual e interactivo."
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
        btn.classList.remove('bg-[#EE9FB2]', 'text-[#46141D]', 'shadow-md', 'sm:scale-105');
        btn.classList.add('text-[#FADCE4]', 'hover:bg-white/10');
    });
    const activeDock = document.getElementById(`dock-${langKey}`);
    if (activeDock) {
        activeDock.classList.remove('text-[#FADCE4]', 'hover:bg-white/10');
        activeDock.classList.add('bg-[#EE9FB2]', 'text-[#46141D]', 'shadow-md', 'sm:scale-105');
    }

    // 2. Actualizar selección en las tarjetas Bento
    document.querySelectorAll('.lang-bento-card').forEach(card => {
        card.classList.remove('selected-card');
    });
    const activeCard = document.getElementById(`card-${langKey}`);
    if (activeCard) {
        activeCard.classList.add('selected-card');
    }

    // 3. Actualizar tema visual propio e identidad del Panel Maestro
    const masterPanel = document.getElementById('masterPanel');
    masterPanel.classList.remove('panel-animate');
    void masterPanel.offsetWidth;
    masterPanel.classList.add('panel-animate');

    const sidebar = document.getElementById('panelSidebar');
    if (sidebar) {
        sidebar.classList.remove('theme-panel-ingles', 'theme-panel-frances', 'theme-panel-italiano', 'theme-panel-coreano');
        sidebar.classList.add(data.themeClass);
    }

    const watermark = document.getElementById('panelWatermark');
    if (watermark) watermark.textContent = data.watermark;

    const flagUse = document.getElementById('panelFlagUse');
    if (flagUse) flagUse.setAttribute('href', data.flagId);

    const greetingPill = document.getElementById('panelGreetingPill');
    if (greetingPill) {
        greetingPill.innerHTML = `<i class="fa-solid fa-sparkles text-[10px]"></i><span>${data.greetingPill}</span>`;
    }

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
    if (ctaBtn) {
        ctaBtn.setAttribute('onclick', `openTrialWithLang('${data.name}')`);
        ctaBtn.innerHTML = `<i class="fa-solid fa-calendar-check"></i><span>Clase Muestra (${data.name})</span>`;
    }

    const waBtn = document.getElementById('panelWaBtn');
    if (waBtn) {
        waBtn.setAttribute('onclick', `openWhatsAppForLang('${data.name}', 'informes')`);
        waBtn.innerHTML = `<i class="fa-brands fa-whatsapp text-base"></i><span>Informes de ${data.name}</span>`;
    }

    // Renderizar Sub-pestaña 1: Niveles con animación en cascada y color temático
    const levelsList = document.getElementById('levelsList');
    levelsList.innerHTML = data.levels.map((lvl, idx) => `
        <div style="animation-delay: ${idx * 70}ms" class="stagger-item p-4 rounded-2xl bg-[#FDF8F9] border border-[#EE9FB2]/30 hover:border-[#46141D]/40 sm:hover:-translate-y-1 transition duration-300 space-y-1.5">
            <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-lg ${data.accentBg} text-white text-[11px] font-extrabold">${lvl.code}</span>
                <i class="fa-solid fa-circle-check text-[#8C2D41] text-xs"></i>
            </div>
            <h5 class="font-extrabold text-sm text-[#46141D] pt-1">${lvl.name}</h5>
            <p class="text-xs text-slate-600 leading-relaxed">${lvl.desc}</p>
        </div>
    `).join('');

    // Renderizar Sub-pestaña 2: Modalidades con animación en cascada
    const modalitiesList = document.getElementById('modalitiesList');
    modalitiesList.innerHTML = data.modalities.map((mod, idx) => `
        <div style="animation-delay: ${idx * 70}ms" class="stagger-item p-4 rounded-2xl bg-[#FDF8F9] border border-[#EE9FB2]/30 hover:border-[#46141D]/40 sm:hover:-translate-y-1 transition duration-300 flex items-start gap-3.5">
            <div class="w-10 h-10 rounded-xl ${data.accentBg} text-white flex items-center justify-center shrink-0 font-bold shadow-sm">
                <i class="fa-solid ${mod.icon}"></i>
            </div>
            <div class="space-y-1 min-w-0">
                <div class="flex flex-wrap items-center gap-1.5">
                    <h5 class="font-extrabold text-sm text-[#46141D]">${mod.title}</h5>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#46141D]/10 text-[#46141D]">${mod.tag}</span>
                </div>
                <p class="text-xs text-slate-600">${mod.schedule}</p>
            </div>
        </div>
    `).join('');

    // Renderizar Sub-pestaña 3: Ventajas y Certificación con animación en cascada
    const advantagesList = document.getElementById('advantagesList');
    advantagesList.innerHTML = data.advantages.map((adv, idx) => `
        <div style="animation-delay: ${idx * 80}ms" class="stagger-item p-4 rounded-2xl bg-[#FDF8F9] border border-[#EE9FB2]/30 hover:border-[#46141D]/40 sm:hover:translate-x-1 transition duration-300 flex items-center gap-3.5">
            <div class="w-8 h-8 rounded-full ${data.accentBg} text-white flex items-center justify-center shrink-0 text-xs shadow-sm">
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
    if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.querySelectorAll('.stagger-item').forEach(item => {
            item.classList.remove('stagger-item');
            void item.offsetWidth;
            item.classList.add('stagger-item');
        });
    }

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
            card.classList.remove('panel-animate');
            void card.offsetWidth;
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

    const waveContainer = document.getElementById('soundWaveContainer');
    const speakIcon = document.getElementById('speakIcon');
    const speakLabel = document.getElementById('speakLabel');

    const utterance = new SpeechSynthesisUtterance(data.phraseRaw);
    utterance.lang = data.phraseLang;
    utterance.rate = 0.95;

    utterance.onstart = () => {
        if (waveContainer) {
            waveContainer.classList.remove('hidden');
            waveContainer.classList.add('inline-flex', 'speaking');
        }
        if (speakIcon) speakIcon.classList.add('hidden');
        if (speakLabel) speakLabel.textContent = 'Escuchando';
    };

    const resetAudioUI = () => {
        if (waveContainer) {
            waveContainer.classList.add('hidden');
            waveContainer.classList.remove('inline-flex', 'speaking');
        }
        if (speakIcon) speakIcon.classList.remove('hidden');
        if (speakLabel) speakLabel.textContent = 'Escuchar';
    };

    utterance.onend = resetAudioUI;
    utterance.onerror = resetAudioUI;

    window.speechSynthesis.speak(utterance);
}

// ==========================================
// CONEXIÓN SEGURA CON WHATSAPP (+52 1 833 252 2060)
// ==========================================
function openWhatsAppForLang(langName, type) {
    const safeLang = sanitizeText(langName, 30);
    let text = '';
    if (type === 'clase') {
        text = `Hola Nabi Centro de Idiomas 🦋, me gustaría agendar mi Clase Muestra Gratis de ${safeLang}.`;
    } else {
        text = `Hola Nabi Centro de Idiomas 🦋, me gustaría recibir informes, horarios y costos del curso de ${safeLang}.`;
    }
    const url = `https://wa.me/${NABI_WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
}

function copyPhoneNumber() {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(NABI_PHONE_DISPLAY).then(() => {
            const label = document.getElementById('copyPhoneText');
            if (label) {
                label.textContent = '¡Copiado!';
                setTimeout(() => { label.textContent = 'Copiar número'; }, 2500);
            }
            showNotification(`Número ${NABI_PHONE_DISPLAY} copiado al portapapeles.`);
        });
    }
}

function handleDirectContactSubmit(e) {
    e.preventDefault();
    // Verificación anti-bots (Honeypot)
    const hp = document.getElementById('contactHp');
    if (hp && hp.value !== '') return;

    const privacyCheck = document.getElementById('contactPrivacyCheck');
    if (privacyCheck && !privacyCheck.checked) {
        showNotification('Por favor acepta el Aviso de Privacidad para continuar.');
        return;
    }

    const name = sanitizeText(document.getElementById('contactName').value, 80);
    if (!name) {
        showNotification('Por favor ingresa tu nombre para atenderte.');
        return;
    }
    const type = sanitizeText(document.getElementById('contactType').value, 60);
    const lang = sanitizeText(document.getElementById('contactLang').value, 30);
    const modality = sanitizeText(document.getElementById('contactModality').value, 40);

    const message = `Hola Nabi Centro de Idiomas 🦋, soy ${name}. Me gustaría ${type} de ${lang} en modalidad ${modality}.`;
    const url = `https://wa.me/${NABI_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    showNotification(`Redirigiendo de forma segura a WhatsApp (${NABI_PHONE_DISPLAY})...`);
}

function handleTrialSubmit(e) {
    e.preventDefault();
    const hp = document.getElementById('trialHp');
    if (hp && hp.value !== '') return;

    const privacyCheck = document.getElementById('trialPrivacyCheck');
    if (privacyCheck && !privacyCheck.checked) {
        showNotification('Por favor acepta el Aviso de Privacidad para continuar.');
        return;
    }

    const nameInput = document.getElementById('trialNameInput');
    const name = nameInput ? sanitizeText(nameInput.value, 80) : '';
    if (!name) {
        showNotification('Por favor ingresa tu nombre completo.');
        return;
    }
    const lang = sanitizeText(document.getElementById('trialLangSelect').value, 30);
    const modSelect = document.getElementById('trialModalitySelect');
    const modality = modSelect ? sanitizeText(modSelect.value, 40) : 'Online en Vivo';

    closeModal('trialModal');
    const message = `Hola Nabi Centro de Idiomas 🦋, soy ${name}. Quiero reservar mi Clase Muestra Gratis de ${lang} (${modality}).`;
    const url = `https://wa.me/${NABI_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    showNotification(`¡Solicitud lista! Conectando al WhatsApp ${NABI_PHONE_DISPLAY}`);
}

function handleLevelSubmit(e) {
    e.preventDefault();
    const lang = sanitizeText(document.getElementById('levelLangSelect').value, 30);
    const exp = sanitizeText(document.getElementById('levelExpSelect').value, 50);
    closeModal('levelModal');
    const message = `Hola Nabi Centro de Idiomas 🦋, hice el diagnóstico en la web para ${lang} (Nivel estimado: ${exp}) y me gustaría recibir informes o agendar mi evaluación.`;
    const url = `https://wa.me/${NABI_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    showNotification(`Nivel sugerido en ${lang}: ${exp}. Conectando al ${NABI_PHONE_DISPLAY}`);
}

// ==========================================
// CONTROL INTERACTIVO DEL MENÚ BLANCO Y MENÚ MÓVIL/TABLET
// ==========================================
function toggleMegaMenu(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('megaMenu');
    const btn = document.getElementById('idiomasMenuBtn');
    const chevron = document.getElementById('idiomasChevron');
    if (!menu) return;

    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
        menu.classList.remove('hidden');
        menu.classList.add('active');
        if (btn) {
            btn.setAttribute('aria-expanded', 'true');
            btn.classList.add('bg-white/15', 'text-white', 'ring-1', 'ring-[#EE9FB2]/50');
        }
        if (chevron) chevron.classList.add('rotate-180');
    } else {
        closeMegaMenu();
    }
}

function closeMegaMenu() {
    const menu = document.getElementById('megaMenu');
    const btn = document.getElementById('idiomasMenuBtn');
    const chevron = document.getElementById('idiomasChevron');
    if (menu) {
        menu.classList.add('hidden');
        menu.classList.remove('active');
    }
    if (btn) {
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('bg-white/15', 'text-white', 'ring-1', 'ring-[#EE9FB2]/50');
    }
    if (chevron) chevron.classList.remove('rotate-180');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    if (!mobileMenu) return;

    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('mobile-menu-animate');
        if (menuIcon) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        }
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('mobile-menu-animate');
    }
    if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
}

document.addEventListener('click', (e) => {
    const container = document.getElementById('navDropdownContainer');
    if (container && !container.contains(e.target)) {
        closeMegaMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMegaMenu();
        closeMobileMenu();
        closeModal('trialModal');
        closeModal('levelModal');
        closeModal('privacyModal');
        closeModal('termsModal');
    }
});

function openTrialWithLang(langName) {
    const select = document.getElementById('trialLangSelect');
    if (select && langName) {
        select.value = langName;
    }
    openModal('trialModal');
}

function openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
}

function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed inset-x-4 bottom-20 sm:left-auto sm:right-6 sm:w-auto z-50 bg-[#46141D] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#EE9FB2] flex items-center gap-3 panel-animate';
    const iconSpan = document.createElement('span');
    iconSpan.className = 'text-xl shrink-0';
    iconSpan.textContent = '🦋';
    const textSpan = document.createElement('span');
    textSpan.className = 'text-xs sm:text-sm font-bold';
    textSpan.textContent = message;
    toast.appendChild(iconSpan);
    toast.appendChild(textSpan);
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4200);
}

// ==========================================
// BANNER DE CONSENTIMIENTO DE PRIVACIDAD (LFPDPPP)
// ==========================================
function initPrivacyBanner() {
    try {
        const accepted = localStorage.getItem('nabi_privacy_accepted_v1');
        if (!accepted) {
            const banner = document.getElementById('cookieBanner');
            if (banner) banner.classList.remove('hidden');
        }
    } catch (_) {
        // Si localStorage está restringido en modo incógnito estricto, no bloquear
    }
}

function acceptPrivacyBanner() {
    try {
        localStorage.setItem('nabi_privacy_accepted_v1', 'true');
    } catch (_) {}
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.classList.add('hidden');
}

// ==========================================
// INICIALIZAR ANIMACIONES MODERNAS (SCROLL REVEAL & SPOTLIGHT)
// ==========================================
function initModernAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('is-visible'));
    }

    document.querySelectorAll('.lang-bento-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    closeMegaMenu();
    closeMobileMenu();
    selectLanguage('ingles');
    initModernAnimations();
    initPrivacyBanner();
});
