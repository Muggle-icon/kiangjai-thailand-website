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
  $$('[data-contact]').forEach(button => button.addEventListener('click', () => {
    $('#kj-copy-feedback').textContent = '';
    openDialog($('#contact-dialog'), button);
  }));
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
  // Preserve the reviewed prototype's copy and download simulation behavior.
  const reviewedCopy = {
  "copySuccess": "คัดลอกหมายเลขโทรศัพท์บริษัทแล้ว",
  "copyFailure": "คัดลอกไม่สำเร็จ โปรดเลือกและคัดลอกด้วยตนเอง: 0812341407",
  "sampleCopy": "โหมดตรวจทาน: เว็บไซต์จริงจะคัดลอกข้อมูลที่ตั้งค่าไว้ แต่แบบจำลองนี้จะไม่คัดลอกข้อมูลตัวอย่าง",
  "android": "จำลอง: จะเปิด Google Play ยังไม่ได้ตั้งค่าลิงก์ดาวน์โหลด แบบจำลองนี้จึงไม่เปิดลิงก์จริง",
  "ios": "จำลอง: จะเปิด App Store ยังไม่ได้ตั้งค่าลิงก์ดาวน์โหลด แบบจำลองนี้จึงไม่เปิดลิงก์จริง",
  "impersonation": "แจ้งแอป / เว็บไซต์ปลอม",
  "fraud": "แจ้งเบาะแสมิจฉาชีพ"
};
  let copyTimer;
  $$('[data-copy-phone]').forEach(button => button.addEventListener('click', async () => {
    const isContact = button.dataset.copyPhone === 'contact';
    const feedback = $('#kj-copy-feedback');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText('0812341407');
      if (isContact) {
        feedback.textContent = reviewedCopy.copySuccess;
        clearTimeout(copyTimer);
        copyTimer = setTimeout(() => { feedback.textContent = ''; }, 2000);
      } else notify(reviewedCopy.copySuccess);
    } catch {
      if (isContact) feedback.textContent = reviewedCopy.copyFailure;
      else notify(reviewedCopy.copyFailure);
    }
  }));
  $$('[data-copy-security]').forEach(button => button.addEventListener('click', () => notify(reviewedCopy.sampleCopy)));
  $$('[data-report]').forEach(button => button.addEventListener('click', () => {
    $('#kj-report-topic').textContent = button.dataset.report === 'impersonation' ? reviewedCopy.impersonation : reviewedCopy.fraud;
    const channel = $('#kj-report-channel');
    channel.hidden = false;
    channel.scrollIntoView({ block: 'start', behavior: 'auto' });
  }));
  $$('[data-store]').forEach(button => button.addEventListener('click', () => {
    $('#kj-store-feedback').textContent = button.dataset.store === 'android' ? reviewedCopy.android : reviewedCopy.ios;
  }));
  const menu = $('.menu-toggle');
  const setMenu = expand => {
    menu.setAttribute('aria-expanded', String(expand));
    menu.setAttribute('aria-label', expand ? 'ปิดเมนู' : 'เปิดเมนู');
    $('#main-nav').classList.toggle('is-open', expand);
  };
  menu.addEventListener('click', () => {
    const expand = menu.getAttribute('aria-expanded') !== 'true';
    setMenu(expand);
  });
  $$('#main-nav a').forEach(link => link.addEventListener('click', () => {
    setMenu(false);
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menu.focus();
    }
  });
  // Mobile gallery: native swiping and three accessible screen selectors.
  const gallery = $('#app-gallery');
  if (gallery) {
    const screens = [...gallery.querySelectorAll('figure')];
    const controls = $$('[data-app-view]');
    const updateGallery = () => {
      const start = gallery.getBoundingClientRect().left + parseFloat(getComputedStyle(gallery).paddingLeft);
      const distances = screens.map(screen => Math.abs(screen.getBoundingClientRect().left - start));
      const current = distances.indexOf(Math.min(...distances));
      controls.forEach((control, index) => control.setAttribute('aria-pressed', String(index === current)));
    };
    controls.forEach(control => control.addEventListener('click', () => {
      const screen = screens[Number(control.dataset.appView)];
      const inset = parseFloat(getComputedStyle(gallery).paddingLeft);
      const left = screen.getBoundingClientRect().left - gallery.getBoundingClientRect().left + gallery.scrollLeft - inset;
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
      gallery.scrollTo({ left, behavior });
    }));
    let frame;
    gallery.addEventListener('scroll', () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateGallery);
    }, { passive: true });
    updateGallery();
  }
  // Keep the in-page navigation aligned with the section being read.
  const sectionLinks = $$('#main-nav a[href*="#"]').map(link => ({
    link,
    section: document.getElementById(new URL(link.href).hash.slice(1))
  })).filter(item => item.section);
  if (sectionLinks.length) {
    let navFrame = 0;
    const updateActiveSection = () => {
      navFrame = 0;
      const header = $('.site-header');
      const fixed = getComputedStyle(header).position === 'sticky';
      const readingLine = (fixed ? header.getBoundingClientRect().bottom : 0) + 112;
      let active = null;
      sectionLinks.forEach(item => {
        if (item.section.getBoundingClientRect().top <= readingLine) active = item.link;
      });
      sectionLinks.forEach(({ link }) => {
        if (link === active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };
    const scheduleActiveSection = () => {
      if (!navFrame) navFrame = requestAnimationFrame(updateActiveSection);
    };
    window.addEventListener('scroll', scheduleActiveSection, { passive: true });
    window.addEventListener('resize', scheduleActiveSection);
    window.addEventListener('hashchange', scheduleActiveSection);
    window.addEventListener('load', scheduleActiveSection);
    document.fonts?.ready.then(scheduleActiveSection);
    updateActiveSection();
  }
  const pageName = location.pathname.split('/').pop();
  if (pageName === 'security.html') $('#main-nav a[href="security.html"]').setAttribute('aria-current', 'page');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    $$('.reveal').forEach(element => observer.observe(element));
  }
})();
