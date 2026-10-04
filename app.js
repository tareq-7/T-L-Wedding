(() => {
  const wedding = new Date('2027-04-30T18:00:00+03:00').getTime();
  function updateCountdown() {
    const seconds = Math.max(0, Math.floor((wedding - Date.now()) / 1000));
    const values = { days: Math.floor(seconds / 86400), hours: Math.floor(seconds / 3600) % 24, minutes: Math.floor(seconds / 60) % 60, seconds: seconds % 60 };
    for (const [id, value] of Object.entries(values)) {
      const element = document.getElementById(id);
      if (element) element.textContent = id === 'days' ? String(value) : String(value).padStart(2, '0');
    }
    if (!seconds && document.getElementById('countdown-message')) document.getElementById('countdown-message').textContent = 'Our wedding day has arrived!';
  }
  updateCountdown();
  if (document.getElementById('days')) setInterval(updateCountdown, 1000);
  const id = window.WEDDING_CONFIG?.tallyFormId;
  const container = document.getElementById('rsvp-container');
  if (container && typeof id === 'string' && /^[a-zA-Z0-9]+$/.test(id)) {
    const iframe = document.createElement('iframe');
    iframe.title = 'RSVP for Tareq and Layan’s wedding';
    iframe.src = `https://tally.so/embed/${encodeURIComponent(id)}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
    iframe.loading = 'lazy';
    container.replaceChildren(iframe);
    const script = document.createElement('script'); script.src = 'https://tally.so/widgets/embed.js';
    document.body.appendChild(script);
    const fallback = document.createElement('a'); fallback.href = `https://tally.so/r/${encodeURIComponent(id)}`;
    fallback.textContent = 'Open the RSVP form in a new tab'; fallback.className = 'text-link'; fallback.target = '_blank'; fallback.rel = 'noopener noreferrer';
    container.appendChild(fallback);
  }
})();
