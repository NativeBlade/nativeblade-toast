import './toast.css';

let el = null;
let hideTimer = null;

export function render(data) {
    if (!data) return;

    if (!el) {
        el = document.createElement('div');
        el.id = 'nb-toast';
        document.body.appendChild(el);
    }

    const type = data.type || 'info';
    el.className = `nb-toast nb-toast-${type}`;
    el.textContent = data.message || '';
    el.style.display = 'flex';

    void el.offsetHeight;
    el.classList.add('nb-toast-show');

    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, parseInt(data.duration) || 3000);
}

export function hide() {
    if (!el) return;
    el.classList.remove('nb-toast-show');
    setTimeout(() => {
        if (el) el.style.display = 'none';
    }, 300);
}
