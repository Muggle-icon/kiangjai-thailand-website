(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  let trigger = null;
  let toastTimer;
  const notify = message => {
    const toast = $('#toast');
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 4500);
  };
  const openDialog = (dialog, button) => {
    trigger = button;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  };
  $$('[data-download]').forEach(button => button.addEventListener('click', () => openDialog($('#download-dialog'), button)));
  $$('[data-contact]').forEach(button => button.addEventListener('click', () => openDialog($('#contact-dialog'), button)));
  $$('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
      trigger?.focus({ preventScroll: true });
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    });
  });
  $$('[data-faq]').forEach(button => button.addEventListener('click', () => {
    const expand = button.getAttribute('aria-expanded') !== 'true';
    $$('[data-faq]').forEach(other => {
      other.setAttribute('aria-expanded', 'false');
      other.lastElementChild.textContent = '＋';
      document.getElementById(other.getAttribute('aria-controls')).hidden = true;
    });
    button.setAttribute('aria-expanded', String(expand));
    button.lastElementChild.textContent = expand ? '−' : '＋';
    document.getElementById(button.getAttribute('aria-controls')).hidden = !expand;
  }));
  $$('[data-copy-phone]').forEach(button => button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('0812341407');
      notify('คัดลอกหมายเลขโทรศัพท์แล้ว');
    } catch {
      notify('โปรดเลือกและคัดลอกหมายเลขด้วยตนเอง: 0812341407');
    }
  }));
  $$('[data-report], [data-copy-security]').forEach(button => button.addEventListener('click', () => notify('ช่องทางทางการอยู่ระหว่างยืนยัน เว็บไซต์ตัวอย่างยังไม่รับแจ้งข้อมูล')));
  const menu = $('.menu-toggle');
  menu.addEventListener('click', () => {
    const expand = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(expand));
    $('#main-nav').classList.toggle('is-open', expand);
  });
  $$('#main-nav a').forEach(link => link.addEventListener('click', () => {
    menu.setAttribute('aria-expanded', 'false');
    $('#main-nav').classList.remove('is-open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      menu.setAttribute('aria-expanded', 'false');
      $('#main-nav').classList.remove('is-open');
      menu.focus();
    }
  });
  const pageName = location.pathname.split('/').pop();
  if (pageName === 'security.html') $('#main-nav a[href="security.html"]').setAttribute('aria-current', 'page');
})();
