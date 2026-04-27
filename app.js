const icons = {
  plane: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 16l20-9-6 14-4-6-6-1-4 2z"/><path d="M12 15l10-8"/></svg>',
  bed: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11V5"/><path d="M21 19v-7a3 3 0 0 0-3-3H9v10"/><path d="M3 19V9h4a2 2 0 0 1 2 2v8"/><path d="M3 15h18"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>',
  route: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M8 17c5-5 3-7 8-10"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-5"/></svg>',
  users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
};

const content = {
  en: {
    meta: {
      title: 'Premium Electric Transfers in Thessaloniki | Private Transfers SKG',
      description: 'Premium private electric transfers in Thessaloniki, Greece, serving Thessaloniki Airport Makedonia / SKG, Halkidiki and Northern Greece.',
      ogTitle: 'Premium Electric Transfers in Thessaloniki',
      ogDescription: 'Private airport transfers, business rides and tailor-made tours with 100% electric vehicles.'
    },
    skip: 'Skip to content',
    menu: 'Open navigation menu',
    brand: {
      name: 'Company Name',
      tagline: 'Electric Transfers',
      location: 'Thessaloniki, Greece'
    },
    nav: {
      home: 'Home',
      services: 'Services',
      fleet: 'Fleet',
      destinations: 'Destinations',
      why: 'Why Us',
      about: 'About',
      contact: 'Contact',
      book: 'Book Now'
    },
    hero: {
      eyebrow: 'Thessaloniki, Greece / SKG Airport',
      title: 'Premium Electric Transfers in Thessaloniki',
      text: 'Private airport transfers, business rides and tailor-made tours with 100% electric vehicles.',
      primary: 'Book Your Transfer',
      secondary: 'Request a Quote',
      badge: 'Zero-emission private travel'
    },
    stats: {
      electric: 'Electric fleet',
      availability: 'Availability',
      airport: 'Airport transfers'
    },
    sections: {
      servicesLabel: 'Private transport',
      fleetLabel: 'Clean luxury mobility',
      destinationsLabel: 'Northern Greece',
      whyLabel: 'Reliable by design',
      aboutLabel: 'About us',
      contactLabel: 'Bookings & quotes'
    },
    services: {
      title: 'Our Services',
      items: [
        { icon: 'plane', title: 'Airport Transfers', text: 'From and to Thessaloniki Airport “Makedonia” / SKG.' },
        { icon: 'bed', title: 'Hotel Transfers', text: 'Comfortable private transfers to hotels, villas and resorts.' },
        { icon: 'briefcase', title: 'Business Transfers', text: 'Reliable transport for executives, meetings and corporate guests.' },
        { icon: 'route', title: 'Private Tours', text: 'Custom tours in Thessaloniki, Halkidiki and Northern Greece.' },
        { icon: 'shield', title: 'VIP Transfers', text: 'Premium door-to-door transportation with discretion and comfort.' },
        { icon: 'users', title: 'Group Transfers', text: 'Transfers for families, small groups and business delegations.' }
      ]
    },
    fleet: {
      title: '100% Electric Fleet',
      text: 'Travel in comfort with modern fully electric vehicles, offering a quiet, smooth and environmentally friendly ride.',
      features: ['Zero emissions', 'Quiet ride', 'Comfortable interior', 'Modern vehicles', 'Fully insured', 'Professional drivers']
    },
    destinations: {
      title: 'Popular Destinations',
      items: [
        'Thessaloniki Airport SKG',
        'Thessaloniki City Center',
        'Halkidiki',
        'Peraia',
        'Nea Moudania',
        'Nikiti',
        'Sani',
        'Ouranoupoli',
        'Kavala',
        'Meteora',
        'Vergina',
        'Edessa',
        'Mount Olympus'
      ]
    },
    why: {
      title: 'Why Choose Us',
      items: [
        '100% electric transportation',
        'Premium private service',
        'Professional drivers',
        'Fixed prices with no hidden costs',
        '24/7 availability',
        'Airport pickup assistance',
        'Comfortable and quiet ride',
        'Eco-friendly travel experience'
      ]
    },
    about: {
      title: 'Modern private transfers from Thessaloniki',
      text: 'We are a modern transfer and tour company based in Thessaloniki, specializing in premium private transportation with 100% electric vehicles. Our goal is to offer reliable, comfortable and sustainable travel experiences across Thessaloniki, Halkidiki and Northern Greece.'
    },
    contact: {
      title: 'Book Your Electric Transfer',
      text: 'Send your trip details and our team will reply with availability and a clear fixed price.'
    },
    form: {
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      pickup: 'Pickup Location',
      dropoff: 'Drop-off Location',
      date: 'Date',
      time: 'Time',
      passengers: 'Number of Passengers',
      message: 'Message',
      submit: 'Send Request',
      success: 'Thank you. Your request is ready to be connected to email or a booking system.'
    },
    footer: {
      copy: 'Premium electric private transfers in Thessaloniki, Halkidiki and Northern Greece.',
      quick: 'Quick links',
      contact: 'Contact',
      legal: 'Legal',
      phone: '+30 2310 000 000',
      whatsapp: 'WhatsApp: +30 690 000 0000',
      email: 'info@example.com',
      backTop: 'Back to top'
    },
    legal: {
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      cookies: 'Cookies Policy'
    },
    images: {
      vehicle: 'Premium electric vehicle placeholder',
      interior: 'Modern electric vehicle interior placeholder',
      thessaloniki: 'Thessaloniki waterfront placeholder'
    }
  },
  el: {
    meta: {
      title: 'Premium Ηλεκτρικές Μεταφορές στη Θεσσαλονίκη | Ιδιωτικές Μεταφορές SKG',
      description: 'Premium ιδιωτικές ηλεκτρικές μεταφορές στη Θεσσαλονίκη, με εξυπηρέτηση στο Thessaloniki Airport Makedonia / SKG, τη Χαλκιδική και τη Βόρεια Ελλάδα.',
      ogTitle: 'Premium Ηλεκτρικές Μεταφορές στη Θεσσαλονίκη',
      ogDescription: 'Ιδιωτικές μεταφορές αεροδρομίου, επαγγελματικές διαδρομές και εξατομικευμένες εκδρομές με 100% ηλεκτρικά οχήματα.'
    },
    skip: 'Μετάβαση στο περιεχόμενο',
    menu: 'Άνοιγμα μενού πλοήγησης',
    brand: {
      name: 'Όνομα Εταιρείας',
      tagline: 'Ηλεκτρικές Μεταφορές',
      location: 'Θεσσαλονίκη, Ελλάδα'
    },
    nav: {
      home: 'Αρχική',
      services: 'Υπηρεσίες',
      fleet: 'Στόλος',
      destinations: 'Προορισμοί',
      why: 'Γιατί εμείς',
      about: 'Σχετικά',
      contact: 'Επικοινωνία',
      book: 'Κράτηση'
    },
    hero: {
      eyebrow: 'Θεσσαλονίκη, Ελλάδα / Αεροδρόμιο SKG',
      title: 'Premium Ηλεκτρικές Μεταφορές στη Θεσσαλονίκη',
      text: 'Ιδιωτικές μεταφορές αεροδρομίου, επαγγελματικές διαδρομές και εξατομικευμένες εκδρομές με 100% ηλεκτρικά οχήματα.',
      primary: 'Κλείστε τη Μεταφορά σας',
      secondary: 'Ζητήστε Προσφορά',
      badge: 'Ιδιωτική μετακίνηση μηδενικών ρύπων'
    },
    stats: {
      electric: 'Ηλεκτρικός στόλος',
      availability: 'Διαθεσιμότητα',
      airport: 'Μεταφορές αεροδρομίου'
    },
    sections: {
      servicesLabel: 'Ιδιωτική μετακίνηση',
      fleetLabel: 'Καθαρή πολυτελής κινητικότητα',
      destinationsLabel: 'Βόρεια Ελλάδα',
      whyLabel: 'Αξιοπιστία σε κάθε διαδρομή',
      aboutLabel: 'Σχετικά με εμάς',
      contactLabel: 'Κρατήσεις & προσφορές'
    },
    services: {
      title: 'Οι Υπηρεσίες μας',
      items: [
        { icon: 'plane', title: 'Μεταφορές Αεροδρομίου', text: 'Από και προς το Thessaloniki Airport “Makedonia” / SKG.' },
        { icon: 'bed', title: 'Μεταφορές Ξενοδοχείων', text: 'Άνετες ιδιωτικές μεταφορές σε ξενοδοχεία, βίλες και resorts.' },
        { icon: 'briefcase', title: 'Επαγγελματικές Μεταφορές', text: 'Αξιόπιστη μετακίνηση για στελέχη, συναντήσεις και εταιρικούς επισκέπτες.' },
        { icon: 'route', title: 'Ιδιωτικές Εκδρομές', text: 'Εξατομικευμένες εκδρομές στη Θεσσαλονίκη, τη Χαλκιδική και τη Βόρεια Ελλάδα.' },
        { icon: 'shield', title: 'VIP Μεταφορές', text: 'Premium μεταφορά από πόρτα σε πόρτα με διακριτικότητα και άνεση.' },
        { icon: 'users', title: 'Ομαδικές Μεταφορές', text: 'Μεταφορές για οικογένειες, μικρές ομάδες και επαγγελματικές αποστολές.' }
      ]
    },
    fleet: {
      title: '100% Ηλεκτρικός Στόλος',
      text: 'Μετακινηθείτε άνετα με σύγχρονα αμιγώς ηλεκτρικά οχήματα, που προσφέρουν αθόρυβη, ομαλή και φιλική προς το περιβάλλον εμπειρία.',
      features: ['Μηδενικοί ρύποι', 'Αθόρυβη διαδρομή', 'Άνετο εσωτερικό', 'Σύγχρονα οχήματα', 'Πλήρης ασφάλιση', 'Επαγγελματίες οδηγοί']
    },
    destinations: {
      title: 'Δημοφιλείς Προορισμοί',
      items: [
        'Αεροδρόμιο Θεσσαλονίκης SKG',
        'Κέντρο Θεσσαλονίκης',
        'Χαλκιδική',
        'Περαία',
        'Νέα Μουδανιά',
        'Νικήτη',
        'Σάνη',
        'Ουρανούπολη',
        'Καβάλα',
        'Μετέωρα',
        'Βεργίνα',
        'Έδεσσα',
        'Όλυμπος'
      ]
    },
    why: {
      title: 'Γιατί να μας επιλέξετε',
      items: [
        '100% ηλεκτρική μετακίνηση',
        'Premium ιδιωτική εξυπηρέτηση',
        'Επαγγελματίες οδηγοί',
        'Σταθερές τιμές χωρίς κρυφές χρεώσεις',
        'Διαθεσιμότητα 24/7',
        'Υποστήριξη παραλαβής από το αεροδρόμιο',
        'Άνετη και αθόρυβη διαδρομή',
        'Οικολογική ταξιδιωτική εμπειρία'
      ]
    },
    about: {
      title: 'Σύγχρονες ιδιωτικές μεταφορές από τη Θεσσαλονίκη',
      text: 'Είμαστε μια σύγχρονη εταιρεία μεταφορών και εκδρομών με έδρα τη Θεσσαλονίκη, εξειδικευμένη στις premium ιδιωτικές μετακινήσεις με 100% ηλεκτρικά οχήματα. Στόχος μας είναι να προσφέρουμε αξιόπιστες, άνετες και βιώσιμες μετακινήσεις στη Θεσσαλονίκη, τη Χαλκιδική και τη Βόρεια Ελλάδα.'
    },
    contact: {
      title: 'Κλείστε την Ηλεκτρική σας Μεταφορά',
      text: 'Στείλτε τα στοιχεία της διαδρομής σας και η ομάδα μας θα απαντήσει με διαθεσιμότητα και ξεκάθαρη σταθερή τιμή.'
    },
    form: {
      name: 'Ονοματεπώνυμο',
      email: 'Email',
      phone: 'Τηλέφωνο / WhatsApp',
      pickup: 'Σημείο Παραλαβής',
      dropoff: 'Σημείο Αποβίβασης',
      date: 'Ημερομηνία',
      time: 'Ώρα',
      passengers: 'Αριθμός Επιβατών',
      message: 'Μήνυμα',
      submit: 'Αποστολή Αιτήματος',
      success: 'Ευχαριστούμε. Το αίτημά σας είναι έτοιμο να συνδεθεί με email ή σύστημα κρατήσεων.'
    },
    footer: {
      copy: 'Premium ηλεκτρικές ιδιωτικές μεταφορές στη Θεσσαλονίκη, τη Χαλκιδική και τη Βόρεια Ελλάδα.',
      quick: 'Γρήγοροι σύνδεσμοι',
      contact: 'Επικοινωνία',
      legal: 'Νομικά',
      phone: '+30 2310 000 000',
      whatsapp: 'WhatsApp: +30 690 000 0000',
      email: 'info@example.com',
      backTop: 'Πίσω στην κορυφή'
    },
    legal: {
      privacy: 'Πολιτική Απορρήτου',
      terms: 'Όροι & Προϋποθέσεις',
      cookies: 'Πολιτική Cookies'
    },
    images: {
      vehicle: 'Placeholder εικόνας premium ηλεκτρικού οχήματος',
      interior: 'Placeholder εικόνας εσωτερικού σύγχρονου ηλεκτρικού οχήματος',
      thessaloniki: 'Placeholder εικόνας παραλίας Θεσσαλονίκης'
    }
  }
};

const getValue = (source, path) => path.split('.').reduce((value, key) => value?.[key], source);

const renderServices = (lang) => {
  const target = document.querySelector('[data-render="services"]');
  target.innerHTML = content[lang].services.items
    .map((item) => `
      <article class="service-card">
        <div class="icon">${icons[item.icon]}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `)
    .join('');
};

const renderFleetFeatures = (lang) => {
  const target = document.querySelector('[data-render="fleetFeatures"]');
  target.innerHTML = content[lang].fleet.features
    .map((item) => `<div class="feature-item"><span class="feature-dot"></span><span>${item}</span></div>`)
    .join('');
};

const renderDestinations = (lang) => {
  const target = document.querySelector('[data-render="destinations"]');
  target.innerHTML = content[lang].destinations.items
    .map((item) => `<span class="destination-chip">${item}</span>`)
    .join('');
};

const renderWhy = (lang) => {
  const target = document.querySelector('[data-render="whyItems"]');
  target.innerHTML = content[lang].why.items
    .map((item) => `<article class="why-card"><span class="check">✓</span><span>${item}</span></article>`)
    .join('');
};

const setLanguage = (lang) => {
  const dictionary = content[lang];
  document.documentElement.lang = lang;
  document.title = dictionary.meta.title;
  document.querySelector('[data-i18n-meta="description"]').setAttribute('content', dictionary.meta.description);
  document.querySelector('[data-i18n-meta="ogTitle"]').setAttribute('content', dictionary.meta.ogTitle);
  document.querySelector('[data-i18n-meta="ogDescription"]').setAttribute('content', dictionary.meta.ogDescription);

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = getValue(dictionary, node.dataset.i18n);
    if (value) node.textContent = value;
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
    const value = getValue(dictionary, node.dataset.i18nAlt);
    if (value) node.setAttribute('alt', value);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
    const value = getValue(dictionary, node.dataset.i18nAria);
    if (value) node.setAttribute('aria-label', value);
  });

  renderServices(lang);
  renderFleetFeatures(lang);
  renderDestinations(lang);
  renderWhy(lang);

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  localStorage.setItem('preferred-language', lang);
};

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.lang-btn').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

document.querySelector('.booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const lang = document.documentElement.lang === 'el' ? 'el' : 'en';
  document.querySelector('[data-form-status]').textContent = content[lang].form.success;
  event.currentTarget.reset();
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

const savedLanguage = localStorage.getItem('preferred-language');
const browserLanguage = navigator.language?.toLowerCase().startsWith('el') ? 'el' : 'en';
setLanguage(savedLanguage || browserLanguage);
