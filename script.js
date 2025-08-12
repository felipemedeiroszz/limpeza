document.addEventListener('DOMContentLoaded', () => {
  // --- i18n dictionaries ---
  const i18n = {
    es: {
      ui: { openMenu: 'Abrir menú', closeMenu: 'Cerrar menú' },
      nav: { about: 'Sobre nosotros', services: 'Nuestros servicios', zone: 'Zona', testimonials: 'Testimonios', quote: 'Solicitar', gallery: 'Galería', contact: 'Contacto' },
      hero: { title: 'Ponte en contacto', subtitle: '“Deja el trabajo pesado con nosotros. Desde el polvo de la obra hasta la preparación para huéspedes, cuidamos de todo con atención a cada detalle.”', cta: 'Habla con nosotros' },
      about: { title: 'Cuidamos tu hogar como si fuera nuestro', p1: 'En Brilla Hogar Benidorm creemos que un ambiente limpio es sinónimo de bienestar. Con un equipo cualificado y productos de alta calidad, ofrecemos servicios personalizados para viviendas, apartamentos turísticos, limpieza posobra y poseventos.', p2: 'Nuestro compromiso es la puntualidad, la seguridad y la satisfacción total de nuestros clientes.' },
      services: {
        title: 'Nuestros servicios',
        residential: { title: 'Limpieza residencial', desc: 'Limpieza completa o parcial, adaptada a tus necesidades, dejando cada estancia impecable.' },
        tourism: { title: 'Limpieza turística (Airbnb, temporada)', desc: 'Preparación e higienización de inmuebles para huéspedes, incluyendo cambio y lavado de ropa de cama y toallas.' },
        postwork: { title: 'Limpieza posobra', desc: 'Eliminación de polvo, residuos y manchas, dejando el inmueble listo para usar.' },
        postevent: { title: 'Limpieza posevento', desc: 'Devolvemos el espacio a su mejor estado, retirando basura, manchas y organizando todo.' },
        laundry: { title: 'Lavado de ropa de cama y toallas', desc: 'Servicio de recogida y entrega, con lavado profesional e higienización completa.' }
      },
      zone: { title: 'Zona', subtitle: 'Benidorm y alrededores' },
      gallery: {
        title: 'Galería', subtitle: 'Algunos registros de nuestro trabajo en acción',
        item1: { alt: 'Equipo trabajando en la limpieza', caption: 'Equipo en acción' },
        item2: { alt: 'Habitación ordenada con toallas dobladas', caption: 'Habitación ordenada' },
        item3: { alt: 'Cocina reluciente tras la limpieza', caption: 'Cocina reluciente' }
      },
      testimonials: { title: 'Testimonios de clientes', t1: '“Contraté la limpieza posevento y quedé impresionada con la rapidez y el cuidado. ¡Recomiendo!”', t2: '“Mis huéspedes siempre elogian la limpieza del apartamento. ¡Servicio impecable!”' },
      quote: {
        title: 'Solicita tu Presupuesto',
        name: { label: 'Nombre', ph: 'Tu nombre' },
        phone: { label: 'Teléfono/WhatsApp', ph: '(xx) xxxxx-xxxx' },
        service: { label: 'Tipo de servicio deseado', select: 'Selecciona', opt1: 'Limpieza residencial', opt2: 'Limpieza turística (Airbnb, temporada)', opt3: 'Limpieza posobra', opt4: 'Limpieza posevento', opt5: 'Lavado de ropa de cama y toallas' },
        date: { label: 'Fecha deseada' },
        time: { label: 'Horario deseado' },
        address: {
          street: { label: 'Calle', ph: 'Tu calle' },
          number: { label: 'Número', ph: 'Número' },
          city: { label: 'Ciudad', ph: 'Ciudad' },
          province: { label: 'Provincia', ph: 'Provincia' },
          postal: { label: 'Código postal', ph: 'Código postal' }
        },
        details: {
          bathrooms: { label: 'Baños', ph: '0' },
          rooms: { label: 'Habitaciones/Comodos', ph: '0' },
          bedrooms: { label: 'Dormitorios', ph: '0' }
        },
        laundry: {
          linens: { label: 'Ropa de cama (unidades)', ph: '0' },
          towels: { label: 'Toallas (unidades)', ph: '0' }
        },
        msg: { label: 'Mensaje', ph: 'Cuéntanos un poco sobre el servicio...' },
        submit: 'Enviar solicitud',
        wa: { name: 'Nombre', phone: 'Teléfono/WhatsApp', service: 'Servicio', date: 'Fecha deseada', time: 'Horario deseado', street: 'Calle', number: 'Número', city: 'Ciudad', province: 'Provincia', postal: 'Código postal', bathrooms: 'Baños', rooms: 'Habitaciones/Comodos', bedrooms: 'Dormitorios', linens: 'Ropa de cama (unidades)', towels: 'Toallas (unidades)', msg: 'Mensaje' }
      },
      contact: { title: 'Contacto', phone: { label: 'Teléfono:' }, whatsapp: { label: 'WhatsApp:', cta: 'Hablar por WhatsApp' }, email: { label: 'Email:' }, region: { label: 'Región:', value: 'Benidorm y región' } }
    },
    en: {
      ui: { openMenu: 'Open menu', closeMenu: 'Close menu' },
      nav: { about: 'About us', services: 'Our services', zone: 'Area', testimonials: 'Testimonials', quote: 'Request', gallery: 'Gallery', contact: 'Contact' },
      hero: { title: 'Get in touch', subtitle: '“Leave the heavy work to us. From construction dust to guest-ready prep, we handle it all with attention to every detail.”', cta: 'Talk to us' },
      about: { title: 'We care for your home as if it were ours', p1: 'At Brilla Hogar Benidorm, we believe a clean environment means well-being. With a qualified team and high-quality products, we offer tailored services for homes, vacation rentals, post-construction, and post-event cleaning.', p2: 'Our commitment is punctuality, safety, and total customer satisfaction.' },
      services: {
        title: 'Our services',
        residential: { title: 'Residential cleaning', desc: 'Full or partial cleaning tailored to your needs, leaving every room spotless.' },
        tourism: { title: 'Tourist cleaning (Airbnb, seasonal)', desc: 'Preparation and sanitization for guests, including changing and washing bed linens and towels.' },
        postwork: { title: 'Post-construction cleaning', desc: 'Removal of dust, debris and stains, leaving the property ready to use.' },
        postevent: { title: 'Post-event cleaning', desc: 'We restore the space to its best state, removing trash, stains and organizing everything.' },
        laundry: { title: 'Laundry of bed linens and towels', desc: 'Pickup and delivery service with professional washing and complete sanitization.' }
      },
      zone: { title: 'Area', subtitle: 'Benidorm and surroundings' },
      gallery: {
        title: 'Gallery', subtitle: 'Some records of our work in action',
        item1: { alt: 'Team working on cleaning', caption: 'Team in action' },
        item2: { alt: 'Tidy room with folded towels', caption: 'Tidy room' },
        item3: { alt: 'Shiny kitchen after cleaning', caption: 'Shiny kitchen' }
      },
      testimonials: { title: 'Customer testimonials', t1: '“I hired post-event cleaning and was impressed with the speed and care. Highly recommend!”', t2: '“My guests always praise the cleanliness of the apartment. Impeccable service!”' },
      quote: {
        title: 'Request a Quote',
        name: { label: 'Name', ph: 'Your name' },
        phone: { label: 'Phone/WhatsApp', ph: '(xx) xxxxx-xxxx' },
        service: { label: 'Desired service type', select: 'Select', opt1: 'Residential cleaning', opt2: 'Tourist cleaning (Airbnb, seasonal)', opt3: 'Post-construction cleaning', opt4: 'Post-event cleaning', opt5: 'Laundry of bed linens and towels' },
        date: { label: 'Desired date' },
        time: { label: 'Desired time' },
        address: {
          street: { label: 'Street', ph: 'Your street' },
          number: { label: 'Number', ph: 'Number' },
          city: { label: 'City', ph: 'City' },
          province: { label: 'Province', ph: 'Province' },
          postal: { label: 'Postal code', ph: 'Postal code' }
        },
        details: {
          bathrooms: { label: 'Bathrooms', ph: '0' },
          rooms: { label: 'Rooms', ph: '0' },
          bedrooms: { label: 'Bedrooms', ph: '0' }
        },
        laundry: {
          linens: { label: 'Bed linens (units)', ph: '0' },
          towels: { label: 'Towels (units)', ph: '0' }
        },
        msg: { label: 'Message', ph: 'Tell us a bit about the service...' },
        submit: 'Send request',
        wa: { name: 'Name', phone: 'Phone/WhatsApp', service: 'Service', date: 'Desired date', time: 'Desired time', street: 'Street', number: 'Number', city: 'City', province: 'Province', postal: 'Postal code', bathrooms: 'Bathrooms', rooms: 'Rooms', bedrooms: 'Bedrooms', linens: 'Bed linens (units)', towels: 'Towels (units)', msg: 'Message' }
      },
      contact: { title: 'Contact', phone: { label: 'Phone:' }, whatsapp: { label: 'WhatsApp:', cta: 'Chat on WhatsApp' }, email: { label: 'Email:' }, region: { label: 'Region:', value: 'Benidorm and area' } }
    }
  };

  let currentLang = localStorage.getItem('lang') || 'es';

  const docEl = document.documentElement;
  const setLangAttr = (lang) => { docEl.setAttribute('lang', lang); };

  // Apply translations for data-i18n, data-i18n-placeholder and data-i18n-alt
  const getByPath = (obj, path) => path.split('.').reduce((o, k) => (o && k in o ? o[k] : undefined), obj);

  const applyI18n = (lang) => {
    const dict = i18n[lang] || i18n.es;
    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getByPath(dict, key);
      if (typeof val === 'string') el.textContent = val;
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getByPath(dict, key);
      if (typeof val === 'string') el.setAttribute('placeholder', val);
    });
    // Alts
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      const val = getByPath(dict, key);
      if (typeof val === 'string') el.setAttribute('alt', val);
    });
    // Special: select options may need re-selection text only, value preserved
    // Also update nav labels that may not have data-i18n on container
    // Update contact region value span handled by data-i18n
    // Update hamburger aria-label according to state
    reflectAriaAndIcon();
  };

  const hamburger = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.nav-menu');
  if (!hamburger || !menu) return;

  const openClass = 'active';

  const reflectAriaAndIcon = () => {
    const isOpen = menu.classList.contains(openClass);
    const dict = i18n[currentLang] || i18n.es;
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    hamburger.setAttribute('aria-label', isOpen ? dict.ui.closeMenu : dict.ui.openMenu);
    hamburger.classList.toggle('open', isOpen);
  };

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Ensure we can close the menu from various handlers
  const close = () => {
    if (!menu) return;
    if (menu.classList.contains(openClass)) {
      menu.classList.remove(openClass);
      reflectAriaAndIcon();
    }
  };

  const toggle = () => {
    menu.classList.toggle(openClass);
    reflectAriaAndIcon();
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggle();
  });

  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });

  // Flag click handlers
  document.querySelectorAll('.flag[data-lang]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = a.getAttribute('data-lang');
      if (!i18n[lang]) return;
      currentLang = lang;
      localStorage.setItem('lang', currentLang);
      setLangAttr(currentLang);
      applyI18n(currentLang);
    });
  });

  // Apply initial language
  setLangAttr(currentLang);
  applyI18n(currentLang);

  // Show/hide details row after selecting a service
  const serviceSelect = document.getElementById('q-service');
  const detailsRow = document.getElementById('q-details');
  const laundryRow = document.getElementById('q-laundry');
  const toggleDetails = () => {
    if (!serviceSelect) return;
    const idx = serviceSelect.selectedIndex; // 0 = placeholder
    const isLaundry = idx === 5; // opt5 = Lavado de ropa de cama y toallas
    const hasService = idx > 0;
    if (detailsRow) detailsRow.style.display = hasService && !isLaundry ? '' : 'none';
    if (laundryRow) laundryRow.style.display = hasService && isLaundry ? '' : 'none';
  };
  serviceSelect?.addEventListener('change', toggleDetails);
  // Initialize on load
  toggleDetails();

  // Reveal gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length) {
    if (prefersReduced || !('IntersectionObserver' in window)) {
      galleryItems.forEach(g => g.classList.add('in-view'));
    } else {
      const gio = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
      galleryItems.forEach(g => gio.observe(g));
    }
  }

  // Quote form -> WhatsApp
  const form = document.getElementById('quote-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('q-name')?.value?.trim() || '';
    const phone = document.getElementById('q-phone')?.value?.trim() || '';
    const service = document.getElementById('q-service')?.value?.trim() || '';
    const date = document.getElementById('q-date')?.value?.trim() || '';
    const time = document.getElementById('q-time')?.value?.trim() || '';
    const linens = document.getElementById('q-linens')?.value?.trim() || '';
    const towels = document.getElementById('q-towels')?.value?.trim() || '';
    const bathrooms = document.getElementById('q-bathrooms')?.value?.trim() || '';
    const rooms = document.getElementById('q-rooms')?.value?.trim() || '';
    const bedrooms = document.getElementById('q-bedrooms')?.value?.trim() || '';
    const street = document.getElementById('q-street')?.value?.trim() || '';
    const number = document.getElementById('q-number')?.value?.trim() || '';
    const city = document.getElementById('q-city')?.value?.trim() || '';
    const province = document.getElementById('q-province')?.value?.trim() || '';
    const postal = document.getElementById('q-postal')?.value?.trim() || '';
    const message = document.getElementById('q-message')?.value?.trim() || '';

    const d = i18n[currentLang]?.quote?.wa || i18n.es.quote.wa;
    const idx = document.getElementById('q-service')?.selectedIndex ?? 0;
    const isLaundry = idx === 5;
    const parts = [
      name && `${d.name}: ${name}`,
      phone && `${d.phone}: ${phone}`,
      service && `${d.service}: ${service}`,
      date && `${d.date}: ${date}`,
      time && `${d.time}: ${time}`,
      !isLaundry && bathrooms && `${d.bathrooms}: ${bathrooms}`,
      !isLaundry && rooms && `${d.rooms}: ${rooms}`,
      !isLaundry && bedrooms && `${d.bedrooms}: ${bedrooms}`,
      isLaundry && linens && `${d.linens}: ${linens}`,
      isLaundry && towels && `${d.towels}: ${towels}`,
      street && `${d.street}: ${street}`,
      number && `${d.number}: ${number}`,
      city && `${d.city}: ${city}`,
      province && `${d.province}: ${province}`,
      postal && `${d.postal}: ${postal}`,
      message && `${d.msg}: ${message}`
    ].filter(Boolean);

    const finalMsg = parts.join('\n');
    const url = `https://wa.me/34672835065?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener');
  });

  // Close when clicking any menu link (better UX)
  menu.addEventListener('click', (e) => {
    const target = e.target;
    if (target instanceof Element && target.closest('a')) {
      close();
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    if (!menu.contains(t) && !hamburger.contains(t)) {
      close();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // On resize to desktop, ensure menu is closed (CSS shows as inline on desktop anyway)
  const mq = window.matchMedia('(min-width: 769px)');
  const handleResize = () => close();
  if (mq.addEventListener) {
    mq.addEventListener('change', handleResize);
  } else if (mq.addListener) {
    // Older Safari
    mq.addListener(handleResize);
  }

  // Initialize ARIA state on load
  reflectAriaAndIcon();

  // ===== Reveal de cartões de serviço =====
  const cards = document.querySelectorAll('.service-card');
  if (cards.length) {
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      cards.forEach(c => c.classList.add('in-view'));
    } else {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
      cards.forEach(c => io.observe(c));
    }
  }

  // ===== Reveal de depoimentos =====
  const testimonials = document.querySelectorAll('.testimonial');
  if (testimonials.length) {
    if (prefersReduced || !('IntersectionObserver' in window)) {
      testimonials.forEach(t => t.classList.add('in-view'));
    } else {
      const tio = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
      testimonials.forEach(t => tio.observe(t));
    }
  }
});

