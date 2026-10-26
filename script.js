function switchTab(lang) {
    document.querySelectorAll('.lang-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
        btn.classList.add('bg-slate-100', 'text-slate-600');
    });
    document.getElementById(`content-${lang}`).classList.remove('hidden');
    const activeBtn = document.getElementById(`btn-${lang}`);
    activeBtn.classList.remove('bg-slate-100', 'text-slate-600');
    activeBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
}

function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

function handleTrialSubmit(e) {
    e.preventDefault();
    alert('¡Solicitud enviada con éxito!');
    closeModal('trialModal');
}