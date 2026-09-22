document.addEventListener('DOMContentLoaded', () => {
  const cfg = window.SEMEADURA_CONFIG || {};
  document.querySelectorAll('[data-version]').forEach(el => el.textContent = cfg.appVersion || '0.8.4');

  const download = document.getElementById('downloadButton');
  if (download) {
    download.href = cfg.downloadUrl || '#';
    download.addEventListener('click', (e) => {
      if (!cfg.downloadUrl || cfg.downloadUrl.includes('SEU_USUARIO')) {
        e.preventDefault();
        alert('Antes de publicar, edite o arquivo config.js e informe o endereço da Release do GitHub.');
      }
    });
  }

  const email = cfg.email || 'SEU_EMAIL_AQUI';
  const emailLink = document.getElementById('emailLink');
  if (emailLink) { emailLink.textContent = email; emailLink.href = `mailto:${email}`; }

  const pix = cfg.pixKey || 'SUA_CHAVE_PIX_AQUI';
  const pixEl = document.getElementById('pixKey');
  if (pixEl) pixEl.textContent = pix;

  const copy = document.getElementById('copyPix');
  if (copy) copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(pix);
      copy.textContent = 'Chave copiada ✓';
      setTimeout(() => copy.textContent = 'Copiar chave PIX', 1800);
    } catch { alert(`Chave PIX: ${pix}`); }
  });
});
