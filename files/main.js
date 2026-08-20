// Local time in the terminal bar
function updateClock() {
  const el = document.getElementById('local-time');
  if (!el) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  el.textContent = `LOCAL ${hh}:${mm}:${ss}`;
}
updateClock();
setInterval(updateClock, 1000);

// Format seconds as HH:MM:SS
function formatElapsed(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);
  return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
}

// Tick each "job" timer up from its base offset, purely cosmetic
const timers = document.querySelectorAll('.job-timer');
const start = Date.now();
function tickTimers() {
  const elapsedNow = (Date.now() - start) / 1000;
  timers.forEach(cell => {
    const base = parseFloat(cell.dataset.base) || 0;
    cell.textContent = formatElapsed(base + elapsedNow);
  });
}
tickTimers();
setInterval(tickTimers, 1000);

// Make entire queue rows clickable (keyboard accessible too)
document.querySelectorAll('.queue-row').forEach(row => {
  const href = row.dataset.href;
  if (!href) return;
  row.tabIndex = 0;
  row.setAttribute('role', 'link');
  row.addEventListener('click', () => { window.location.href = href; });
  row.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.location.href = href;
    }
  });
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
