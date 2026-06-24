// NNSAT CORE APPLICATION STATE & CONTROLLER (WEBSITE SIDE)

// Initial Mock Database
const INITIAL_DATABASE = {
  hero: {
    title: "Nigerian Navy School of Armament Technology",
    subtitle: "The centre of excellence in naval armament technology and Above Water Warfare technical training",
    badge: "Naval Training Command",
    image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/FRONT-1.png"
  },
  stats: {
    officers: "450+",
    officersLabel: "Officers Trained",
    officersDesc: "AWW Specialist Graduates",
    ratings: "1,200+",
    ratingsLabel: "Ratings Spec",
    ratingsDesc: "Seaman branch instructors",
    systems: "30+",
    systemsLabel: "Weapon Systems",
    systemsDesc: "Technical training labs"
  },
  commandant: {
    name: "Commodore Chikaji Aminu Isah",
    title: "Commandant, NNSAT",
    image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/IMG_0161.jpg.-1-scaled.jpg",
    welcomeText: "It is my pleasure to welcome you to the official portal of the Nigerian Navy School of Armament Technology (NNSAT), Kachia. NNSAT stands as a beacon of professional military education and armament engineering in Sub-Saharan Africa. Our mandate is to train the finest officers and ratings of the Seaman branch, instilling high discipline, tactical agility, and technical mastery in Above Water Warfare (AWW) weapons systems. We invite you to explore our training activities, historical achievements, and digital resources."
  },
  about: {
    history: "The Nigerian Navy School of Armament Technology (NNSAT), located in Kachia, Kaduna State, is a premier training establishment under the Naval Training Command (NAVTRAC). Established to centralize armament technology training and tactical training within the Nigerian Navy, the school conducts specialized programs for officers and ratings. Over the years, NNSAT has played a pivotal role in training sea-going personnel, helping secure national maritime boundaries and combating piracy in the Gulf of Guinea. The school is continuously upgrading its training infrastructure, classrooms, and simulators to match current international standards.",
    mission: "To facilitate qualitative training for officers and ratings in Above Water Warfare and general weaponry, in order to enhance naval operational efficiency and national security objectives.",
    vision: "To be a world-class training institution dedicated to armament technology and technical warfare capabilities."
  },
  leadership: [
    {
      name: "Vice Admiral Idi Abbas",
      role: "Chief of the Naval Staff",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2025/11/IMG_20251117_102928-scaled.jpg"
    },
    {
      name: "Rear Admiral Ebiobowei Abraham Zipele",
      role: "FOC, Naval Training Command",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/R-ADM-EA-ZIPELE.png"
    },
    {
      name: "Commodore Chikaji Aminu Isah",
      role: "Commandant, NNSAT",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/IMG_0161.jpg.-1-scaled.jpg"
    }
  ],
  facilities: [
    {
      id: "drillshed",
      title: "The Drill Shed",
      description: "A state-of-the-art facility designed for military parades, drills, and physical training. It serves as the training hub for establishing tactical discipline, teamwork, and high standards of navigation maneuvers. The facility is regularly inspected by visiting naval officers.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/FRONT-1.png"
    },
    {
      id: "firingrange",
      title: "Tactical Firing Range",
      description: "Our range classification facility is designed for live fire arms training. Trainees practice handling light armaments, assault weapons, and gunnery tracking procedures. Range safety officers oversee the drills to ensure compliance with strict naval fire regulations.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/range.png"
    },
    {
      id: "ictcentre",
      title: "ICT & Simulation Center",
      description: "Equipped with modern computer systems, the ICT center provides software-based training and digital simulators. This allows trainees to analyze radar coordinates, weapon ranges, and ballistic mathematics in a controlled environment.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/Untitled.png"
    }
  ],
  courses: [
    {
      title: "Sub-Lieutenant Technical Course",
      category: "Officers",
      duration: "6 Weeks",
      description: "Organised for newly commissioned officers, focusing on the Above Water Warfare module. Equip trainees with the requisite watchkeeping knowledge required onboard Nigerian Navy ships."
    },
    {
      title: "Special Duty Post Commissioning Course",
      category: "Officers",
      duration: "6 Weeks",
      description: "Conducted for exceptional ratings commissioned as officers. Leverages their practical experience to transition them into officer roles with advanced weapons systems control."
    },
    {
      title: "Advanced AWW Long Course",
      category: "Officers",
      duration: "52 Weeks",
      description: "Advanced specialist training module (Officers' Long Course). Includes a 6-month intensive professional armament phase at NNSAT before returning to NNS QUORRA."
    },
    {
      title: "Ratings Specialization Training",
      category: "Ratings",
      duration: "Variable",
      description: "Selected ratings from the Seaman Branch undergo courses in gunnery, weapon maintenance, Ballistics, and advanced tactical combat support."
    },
    {
      title: "Basic Gunnery Instructor Course",
      category: "Ratings",
      duration: "12 Weeks",
      description: "Prepares senior ratings to serve as gunnery and armament training instructors. Focuses on leadership, range safety procedures, and weaponry theory instruction."
    }
  ],
  news: [
    {
      id: 1,
      title: "Courtesy Visit by the Commander Army Central Ammunition Depot Agunu to NNSAT",
      date: "29 April 2026",
      category: "Visits",
      excerpt: "Brigadier General EC Ineme, Commander ACADA, paid a courtesy visit to NNSAT to discuss training collaboration, tactical support, and inter-service cooperation.",
      content: "The Commander, Army Central Ammunition Depot Agunu (ACADA), Brigadier General EC Ineme, paid a courtesy and familiarisation visit to the Nigerian Navy School of Armament Technology (NNSAT), Kachia. On arrival, the senior officer was received with a quarter guard in honour of his visit and participated in a ceremonial tree planting exercise. The Commander and his team were received by the Commandant NNSAT, Commodore Chikaji Aminu Isah. Discussions centered on professional interest, particularly in armament training, technical development, and inter-service cooperation. Brigadier General Ineme commended the standards maintained at NNSAT, noting its critical role in enhancing the operational capability of the Armed Forces of Nigeria.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-03-at-9.06.41-AM-300x230.jpeg"
    },
    {
      id: 2,
      title: "Chief of the Naval Staff Undertakes Working Visit to NNSAT",
      date: "17 April 2026",
      category: "Visits",
      excerpt: "Vice Admiral Idi Abbas, Chief of the Naval Staff, toured training blocks, classrooms, and inspected the site for the new Marine Technology Centre.",
      content: "The Chief of the Naval Staff (CNS), Vice Admiral Idi Abbas, conducted a working visit to the Nigerian Navy School of Armament Technology (NNSAT), Kachia. The CNS was received by the Commandant NNSAT, Commodore Chikaji Aminu Isah, and briefed on training activities, infrastructure development, and operational requirements. The CNS commended the staff for their dedication to excellence and expressed satisfaction with ongoing infrastructural upgrades. Furthermore, the CNS inspected the land allocated for the development of the Nigerian Navy Marine Technology Centre (NNMTC) at Anturu, Kachia.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-21-at-10.30.32-PM-300x223.jpeg"
    },
    {
      id: 3,
      title: "NNSAT Conducts 2026 First Quarter Route March",
      date: "11 April 2026",
      category: "Events",
      excerpt: "Officers, ratings, and trainees participated in a 10km route march to maintain physical fitness and build teamwork.",
      content: "The Nigerian Navy School of Armament Technology (NNSAT) conducted its 2026 First Quarter Route March. The exercise, led by the Commandant, Commodore Chikaji Aminu Isah, was designed to improve the physical fitness, mental resilience, and combat preparedness of personnel. Trainees and staff marched through designated routes covering a distance of 10 kilometers before returning to the take-off point for aerobic endurance drills. The Commandant commended the personnel for their resilience and loyalty, emphasizing the importance of physical training.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-21-at-10.26.59-PM-300x169.jpeg"
    },
    {
      id: 4,
      title: "NNSAT Explores Collaboration with Defence Industries Corporation of Nigeria (DICON)",
      date: "31 March 2026",
      category: "Events",
      excerpt: "Commandant NNSAT visited DICON engineering plants to discuss local armament production and joint technical training.",
      content: "NNSAT has taken steps to strengthen indigenous defence capability following an operational training visit to the Defence Industries Corporation of Nigeria (DICON). The NNSAT team, led by Commandant Commodore CA Isah, toured production and engineering facilities guided by DICON's Director of Engineering Services, Commodore IU Agwu. The visit aimed to explore opportunities for technical training, engineering, and local maintenance of weapon platforms.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/04/IMG-20260412-WA0012-300x199.jpg"
    }
  ],
  gallery: [
    { title: "Quarter Guard for FOC Visit", category: "visits", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/03/IMG-20260317-WA0029.jpg" },
    { title: "CNS Inspection at Anturu", category: "visits", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-21-at-10.30.33-PM.jpeg" },
    { title: "Range Live Fire Exercises", category: "drills", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/range.png" },
    { title: "Quarterly Route March Aerobics", category: "events", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-21-at-10.28.05-PM-225x300.jpeg" },
    { title: "Tree Planting Commemoration", category: "visits", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/03/IMG-20260317-WA0036.jpg" },
    { title: "ACADA Commander Received", category: "visits", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-03-at-9.06.41-AM-300x230.jpeg" }
  ],
  elibrary: [
    {
      title: "National Virtual Library of Nigeria",
      category: "Portals",
      description: "Access the national educational repository including academic papers, technical documentation, and historical records.",
      url: "https://virtuall.nln.gov.ng/"
    },
    {
      title: "National Digital Library of India",
      category: "Portals",
      description: "An open-access digital educational database hosting technical, engineering, and science publications.",
      url: "https://ndl.iitkgp.ac.in/"
    },
    {
      title: "British Council Digital Library",
      category: "Portals",
      description: "Resource database offering digital journals, professional development materials, and global archives.",
      url: "https://www.britishcouncil.org.ng/digital-library-nigeria"
    },
    {
      title: "AWW Basic Weapons Manual",
      category: "Manuals",
      description: "Simulated resource guidelines detailing Above Water Warfare watchkeeping and armament logistics.",
      url: "#"
    },
    {
      title: "Naval Ballistics Reference Guide",
      category: "Manuals",
      description: "Reference manual for officers, detailing coordinate mapping, sensor settings, and target ranges.",
      url: "#"
    }
  ],
  users: [
    { username: "admin", password: "nnsat2026" }
  ],
  messages: [
    { id: 1, name: "Lieutenant Commander J. Bello", email: "j.bello@navy.mil.ng", subject: "AWW Training Manual Request", content: "Good day, I would like to request digital access coordinates for the new Above Water Warfare training outlines for our incoming officers.", date: "18 June 2026" }
  ],
  events: [
    { id: 1, date: "March 11, 2026", title: "FOC NAVTRAC Inspection Visit", status: "Completed", description: "Familiarisation inspection of NNSAT facilities, Drill Shed, ICT rooms, and ongoing ratings' accommodation structures by Rear Admiral E.A. Zipele." },
    { id: 2, date: "April 11, 2026", title: "2026 First Quarter Route March", status: "Completed", description: "10-kilometer fitness march led by the Commandant, Commodore Chikaji Aminu Isah, involving all trainees, ratings, and officers." },
    { id: 3, date: "April 17, 2026", title: "Chief of the Naval Staff Working Tour", status: "Completed", description: "Official visitation by CNS Vice Admiral Idi Abbas, inspecting classrooms and the site allocated for the new Marine Technology Centre (NNMTC)." },
    { id: 4, date: "July 15, 2026", title: "Second Quarter Route March", status: "Scheduled", description: "Mandatory physical endurance training for all command personnel to maintain operational fitness indexes." },
    { id: 5, date: "August 10, 2026", title: "Sub-Lieutenant Technical Course Opening", status: "Scheduled", description: "Academic induction and weapons handling briefing for incoming cohort officers." }
  ],
  contact: {
    email: "nnsatweb@gmail.com",
    address: "NNSAT Kachia, Kaduna State, Nigeria",
    focTitle: "FOC Naval Training Command",
    focText: "For administrative concerns beyond school operations, personnel should address requests to the Headquarters, Naval Training Command (NAVTRAC) Registry, Lagos."
  },
  headers: {
    homeNewsTitle: "News & Announcements",
    homeNewsDesc: "Latest updates, courtesy visits, and official announcements from the base.",
    homeEventsTitle: "Upcoming Activities",
    homeEventsDesc: "Keep track of scheduled route marches, course inductions, and inspections.",
    homeRequestTitle: "Request Event Details",
    homeRequestDesc: "For official military visit protocols and passing out parade schedules, please write to our registry office.",
    aboutTitle: "History & Leadership",
    aboutDesc: "Training competent sea-going operators and maintaining weaponry dominance.",
    aboutHistoryTitle: "Origins & Mandate",
    aboutMissionTitle: "Our Mission",
    aboutVisionTitle: "Our Vision",
    aboutLeadershipTitle: "Command Leadership",
    aboutFacilitiesTitle: "Campus Facilities & Infrastructure",
    academicsTitle: "Course Curricula",
    academicsDesc: "Comprehensive training profiles structured to prepare naval personnel for combat platforms.",
    academicsOfficersTitle: "Commissioned Officers' Programs",
    academicsRatingsTitle: "Ratings' Specialization Training",
    eventsTitle: "Institutional Events Calendar",
    eventsDesc: "A month-by-month breakdown of physical route marches, academic semesters, and official visitations.",
    eventsRequestTitle: "Request Event Details",
    eventsRequestDesc: "For official military visit protocols and passing out parade schedules, please write to our registry office.",
    newsTitle: "News Archives & Updates",
    newsDesc: "Search through previous operations, routine logs, and military inspections.",
    galleryTitle: "Media Showcase",
    galleryDesc: "Visual summaries of parade inspections, tactical ranges, and route marches.",
    elibraryTitle: "Digital Reference Archives",
    elibraryDesc: "Access reference guides, external virtual libraries, and armament technology documents.",
    contactTitle: "Get in Touch",
    contactDesc: "Direct official inquiries, registry operations, and school credentials requests.",
    contactFormTitle: "Send Official Message",
    contactSidebarTitle: "NNSAT Registry Office",
    contactSidebarFocTitle: "FOC Naval Training Command",
    navHome: "Home",
    navAbout: "About Us",
    navAcademics: "Academics",
    navEvents: "Events",
    navNews: "News Portal",
    navGallery: "Media Gallery",
    navELibrary: "E-Library",
    navContact: "Contact",
    footHdrNav: "Navigation",
    footHdrContact: "Contact Command",
    heroBtnExplore: "Explore History",
    heroBtnCourses: "View Courses",
    commSectTag: "Welcome Message",
    commSectTitle: "Commandant's Welcome Address",
    homeNewsTag: "Updates",
    homeNewsArchiveBtn: "View News Archive",
    homeEventsTag: "Calendar",
    aboutSectTag: "Establishment",
    acadSectTag: "Programs",
    eventsSectTag: "Schedules",
    newsSectTag: "Announcements",
    gallerySectTag: "Photos",
    elibrarySectTag: "Reference",
    contactSectTag: "Connect"
  },
  footer: {
    desc: "The centre of excellence in naval armament engineering and Above Water Warfare technical training.",
    social: "Naval training command"
  }
};

// Database state
let db = {};

// Load Database
function initDB() {
  const savedData = localStorage.getItem("nnsat_db");
  if (savedData) {
    try {
      db = JSON.parse(savedData);
      
      // Upgrade database schema dynamically if missing new attributes
      if (!db.users) {
        db.users = [...INITIAL_DATABASE.users];
        saveDB();
      }
      if (!db.messages) {
        db.messages = [...INITIAL_DATABASE.messages];
        saveDB();
      }
      if (!db.events) {
        db.events = [...INITIAL_DATABASE.events];
        saveDB();
      }
      if (!db.contact) {
        db.contact = { ...INITIAL_DATABASE.contact };
        saveDB();
      }
      if (!db.headers) {
        db.headers = { ...INITIAL_DATABASE.headers };
        saveDB();
      } else {
        let updated = false;
        for (let key in INITIAL_DATABASE.headers) {
          if (db.headers[key] === undefined) {
            db.headers[key] = INITIAL_DATABASE.headers[key];
            updated = true;
          }
        }
        if (updated) saveDB();
      }
      if (!db.footer) {
        db.footer = { ...INITIAL_DATABASE.footer };
        saveDB();
      } else {
        let updated = false;
        for (let key in INITIAL_DATABASE.footer) {
          if (db.footer[key] === undefined) {
            db.footer[key] = INITIAL_DATABASE.footer[key];
            updated = true;
          }
        }
        if (updated) saveDB();
      }
      if (db.hero && db.hero.badge === undefined) {
        db.hero.badge = INITIAL_DATABASE.hero.badge;
        saveDB();
      }
      if (db.commandant && db.commandant.title === undefined) {
        db.commandant.title = INITIAL_DATABASE.commandant.title;
        saveDB();
      }
      if (db.stats && !db.stats.officersLabel) {
        db.stats = { ...INITIAL_DATABASE.stats, officers: db.stats.officers, ratings: db.stats.ratings, systems: db.stats.systems };
        saveDB();
      }
      
      // Migrate existing local database to remove research/R&D terms
      let upgraded = false;
      if (db.hero && db.hero.subtitle && db.hero.subtitle.includes("research and development")) {
        db.hero.subtitle = INITIAL_DATABASE.hero.subtitle;
        upgraded = true;
      }
      if (db.about && db.about.history && db.about.history.includes("technical research")) {
        db.about.history = INITIAL_DATABASE.about.history;
        upgraded = true;
      }
      if (db.about && db.about.vision && db.about.vision.includes("training and research")) {
        db.about.vision = INITIAL_DATABASE.about.vision;
        upgraded = true;
      }
      if (db.news) {
        db.news.forEach(item => {
          if (item.content && item.content.includes("technical training, research,")) {
            item.content = item.content.replace("technical training, research,", "technical training, engineering,");
            upgraded = true;
          }
        });
      }
      if (db.elibrary && db.elibrary[0] && db.elibrary[0].description && db.elibrary[0].description.includes("academic papers, research,")) {
        db.elibrary[0].description = INITIAL_DATABASE.elibrary[0].description;
        upgraded = true;
      }
      if (upgraded) {
        saveDB();
      }
    } catch (e) {
      db = { ...INITIAL_DATABASE };
    }
  } else {
    db = { ...INITIAL_DATABASE };
    saveDB();
  }
}

// Save Database
function saveDB() {
  localStorage.setItem("nnsat_db", JSON.stringify(db));
}

// VIEW NAVIGATION
function switchView(viewId) {
  // Hide all views
  document.querySelectorAll(".page-view").forEach(view => {
    view.classList.remove("active-view");
  });
  
  // Show active view
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add("active-view");
  }
  
  // Update nav menu active states
  document.querySelectorAll(".nav-links li").forEach(li => {
    li.classList.remove("active");
    const link = li.querySelector("a");
    if (link && link.getAttribute("onclick").includes(viewId)) {
      li.classList.add("active");
    }
  });

  // Close mobile nav menu
  document.querySelector(".nav-links").classList.remove("open");
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// MOBILE NAVIGATION TOGGLE
function toggleMobileMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("open");
}

// ABOUT TAB SWITCHER
function switchAboutTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active-tab");
  });
  document.querySelectorAll(".facility-panel").forEach(panel => {
    panel.classList.remove("active-panel");
  });
  
  document.querySelector(`[data-tab="${tabId}"]`).classList.add("active-tab");
  document.getElementById(tabId).classList.add("active-panel");
}

// NOTIFICATION TOASTS
function showToast(message, type = "success") {
  const toast = document.getElementById("toast-alert");
  if (!toast) return;
  toast.className = `alert-toast alert-${type} show`;
  toast.querySelector(".toast-message").innerText = message;
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// RENDER PROCEDURES
function renderAllViews() {
  renderHeadersAndFooters();
  renderHome();
  renderAbout();
  renderAcademics();
  renderNews();
  renderGallery();
  renderELibrary();
  renderEvents();
  renderContactSidebar();
}

// 1. HOME VIEW RENDERER
function renderHome() {
  // Hero Section
  const heroElement = document.getElementById("home");
  if (heroElement) {
    const heroBg = heroElement.querySelector(".hero-bg");
    const heroTitle = heroElement.querySelector(".hero-title");
    const heroSubtitle = heroElement.querySelector(".hero-subtitle");
    const heroBadge = document.getElementById("hero-badge");
    
    if (heroBg) heroBg.style.backgroundImage = `url('${db.hero.image}')`;
    if (heroTitle) heroTitle.innerText = db.hero.title;
    if (heroSubtitle) heroSubtitle.innerText = db.hero.subtitle;
    if (heroBadge) heroBadge.innerText = db.hero.badge || "Naval Training Command";
  }
  
  // Stats
  document.getElementById("stat-officers").innerText = db.stats.officers;
  document.getElementById("stat-officers-label").innerText = db.stats.officersLabel || "";
  document.getElementById("stat-officers-desc").innerText = db.stats.officersDesc || "";
  
  document.getElementById("stat-ratings").innerText = db.stats.ratings;
  document.getElementById("stat-ratings-label").innerText = db.stats.ratingsLabel || "";
  document.getElementById("stat-ratings-desc").innerText = db.stats.ratingsDesc || "";
  
  document.getElementById("stat-systems").innerText = db.stats.systems;
  document.getElementById("stat-systems-label").innerText = db.stats.systemsLabel || "";
  document.getElementById("stat-systems-desc").innerText = db.stats.systemsDesc || "";
  
  // Commandant
  document.getElementById("home-comm-img").src = db.commandant.image;
  document.getElementById("home-comm-text").innerText = db.commandant.welcomeText;
  document.getElementById("home-comm-name").innerText = db.commandant.name;
  
  const commTitle = document.getElementById("home-comm-title");
  if (commTitle) commTitle.innerText = db.commandant.title || "Commandant, NNSAT";
  
  // Homepage Events Preview List
  const previewList = document.getElementById("home-events-preview-list");
  if (previewList) {
    previewList.innerHTML = "";
    const homepageEvents = db.events.slice(0, 3);
    homepageEvents.forEach(evt => {
      const item = document.createElement("div");
      item.style.marginBottom = "1.5rem";
      item.style.paddingLeft = "1rem";
      item.style.borderLeft = "2px solid var(--gold)";
      item.innerHTML = `
        <span style="font-size:0.75rem; color:var(--gold); font-weight:600; text-transform:uppercase;">${evt.date}</span>
        <h4 style="font-size:1.05rem; color:var(--white); margin:0.1rem 0;">${evt.title}</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary);">${evt.description.substring(0, 100)}${evt.description.length > 100 ? '...' : ''}</p>
      `;
      previewList.appendChild(item);
    });
  }
  
  // Latest News (3 items)
  const latestNewsGrid = document.getElementById("home-news-grid");
  latestNewsGrid.innerHTML = "";
  
  const latestNews = [...db.news].reverse().slice(0, 3);
  
  latestNews.forEach(item => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="news-img" onerror="this.src='https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600'">
      <div class="news-card-content">
        <span class="news-date">${item.date}</span>
        <h3 class="news-card-title">${item.title}</h3>
        <p class="news-excerpt">${item.excerpt}</p>
        <a href="javascript:void(0)" class="news-read-more" onclick="openNewsModal(${item.id})">Read Article &rarr;</a>
      </div>
    `;
    latestNewsGrid.appendChild(card);
  });
}

// 2. ABOUT VIEW RENDERER
function renderAbout() {
  document.getElementById("about-history-p").innerText = db.about.history;
  document.getElementById("about-mission-p").innerText = db.about.mission;
  document.getElementById("about-vision-p").innerText = db.about.vision;
  
  // Leadership
  const leadershipGrid = document.getElementById("about-leadership-grid");
  leadershipGrid.innerHTML = "";
  db.leadership.forEach(leader => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.style.padding = "1.5rem";
    card.innerHTML = `
      <img src="${leader.image}" alt="${leader.name}" style="width:100%; height:260px; object-fit:cover; border-radius:var(--radius-md); border:1px solid var(--border); margin-bottom:1rem;">
      <h3 style="font-family:var(--font-serif); font-size:1.25rem; color:var(--white);">${leader.name}</h3>
      <p style="font-size:0.8rem; color:var(--gold); text-transform:uppercase; font-weight:600; margin-top:0.25rem;">${leader.role}</p>
    `;
    leadershipGrid.appendChild(card);
  });
  
  // Facilities Dynamic Generation
  const tabsContainer = document.getElementById("facilities-tabs-container");
  const panelsContainer = document.getElementById("facilities-panels-container");
  
  if (tabsContainer && panelsContainer) {
    tabsContainer.innerHTML = "";
    panelsContainer.innerHTML = "";
    
    db.facilities.forEach((fac, index) => {
      // Create tab button
      const tabBtn = document.createElement("button");
      tabBtn.className = `tab-btn${index === 0 ? " active-tab" : ""}`;
      tabBtn.setAttribute("data-tab", fac.id);
      tabBtn.setAttribute("onclick", `switchAboutTab('${fac.id}')`);
      tabBtn.innerText = fac.title;
      tabsContainer.appendChild(tabBtn);
      
      // Create panel
      const panel = document.createElement("div");
      panel.id = fac.id;
      panel.className = `facility-panel${index === 0 ? " active-panel" : ""} grid-2`;
      panel.innerHTML = `
        <div class="welcome-image-wrapper">
          <img src="${fac.image}" alt="${fac.title}" class="welcome-image" onerror="this.src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600'">
        </div>
        <div style="display:flex; flex-direction:column; justify-content:center;">
          <h3 style="font-family:var(--font-serif); font-size:1.8rem; color:var(--white); margin-bottom:1.5rem; border-left:3px solid var(--gold); padding-left:1rem;">${fac.title}</h3>
          <p style="color:var(--text-secondary); margin-bottom:1.5rem;">${fac.description}</p>
        </div>
      `;
      panelsContainer.appendChild(panel);
    });
  }
}

// 2b. HEADERS AND FOOTERS RENDERER
function renderHeadersAndFooters() {
  if (!db.headers) return;
  
  // Home Page Headers
  const hdrHomeNewsTitle = document.getElementById("hdr-home-news-title");
  const hdrHomeNewsDesc = document.getElementById("hdr-home-news-desc");
  const hdrHomeEventsTitle = document.getElementById("hdr-home-events-title");
  const hdrHomeEventsDesc = document.getElementById("hdr-home-events-desc");
  const hdrHomeRequestTitle = document.getElementById("hdr-home-request-title");
  const hdrHomeRequestDesc = document.getElementById("hdr-home-request-desc");
  
  if (hdrHomeNewsTitle) hdrHomeNewsTitle.innerText = db.headers.homeNewsTitle || "";
  if (hdrHomeNewsDesc) hdrHomeNewsDesc.innerText = db.headers.homeNewsDesc || "";
  if (hdrHomeEventsTitle) hdrHomeEventsTitle.innerText = db.headers.homeEventsTitle || "";
  if (hdrHomeEventsDesc) hdrHomeEventsDesc.innerText = db.headers.homeEventsDesc || "";
  if (hdrHomeRequestTitle) hdrHomeRequestTitle.innerText = db.headers.homeRequestTitle || "";
  if (hdrHomeRequestDesc) hdrHomeRequestDesc.innerText = db.headers.homeRequestDesc || "";

  // About Us Page Headers
  const hdrAboutTitle = document.getElementById("hdr-about-title");
  const hdrAboutDesc = document.getElementById("hdr-about-desc");
  const hdrAboutHistoryTitle = document.getElementById("hdr-about-history-title");
  const hdrAboutMissionTitle = document.getElementById("hdr-about-mission-title");
  const hdrAboutVisionTitle = document.getElementById("hdr-about-vision-title");
  const hdrAboutLeadershipTitle = document.getElementById("hdr-about-leadership-title");
  const hdrAboutFacilitiesTitle = document.getElementById("hdr-about-facilities-title");
  
  if (hdrAboutTitle) hdrAboutTitle.innerText = db.headers.aboutTitle || "";
  if (hdrAboutDesc) hdrAboutDesc.innerText = db.headers.aboutDesc || "";
  if (hdrAboutHistoryTitle) hdrAboutHistoryTitle.innerText = db.headers.aboutHistoryTitle || "";
  if (hdrAboutMissionTitle) hdrAboutMissionTitle.innerText = db.headers.aboutMissionTitle || "";
  if (hdrAboutVisionTitle) hdrAboutVisionTitle.innerText = db.headers.aboutVisionTitle || "";
  if (hdrAboutLeadershipTitle) hdrAboutLeadershipTitle.innerText = db.headers.aboutLeadershipTitle || "";
  if (hdrAboutFacilitiesTitle) hdrAboutFacilitiesTitle.innerText = db.headers.aboutFacilitiesTitle || "";

  // Academics Page Headers
  const hdrAcadTitle = document.getElementById("hdr-acad-title");
  const hdrAcadDesc = document.getElementById("hdr-acad-desc");
  const hdrAcadOfficersTitle = document.getElementById("hdr-acad-officers-title");
  const hdrAcadRatingsTitle = document.getElementById("hdr-acad-ratings-title");
  
  if (hdrAcadTitle) hdrAcadTitle.innerText = db.headers.academicsTitle || "";
  if (hdrAcadDesc) hdrAcadDesc.innerText = db.headers.academicsDesc || "";
  if (hdrAcadOfficersTitle) hdrAcadOfficersTitle.innerText = db.headers.academicsOfficersTitle || "";
  if (hdrAcadRatingsTitle) hdrAcadRatingsTitle.innerText = db.headers.academicsRatingsTitle || "";

  // Events Page Headers
  const hdrEventsTitle = document.getElementById("hdr-events-title");
  const hdrEventsDesc = document.getElementById("hdr-events-desc");
  
  if (hdrEventsTitle) hdrEventsTitle.innerText = db.headers.eventsTitle || "";
  if (hdrEventsDesc) hdrEventsDesc.innerText = db.headers.eventsDesc || "";

  // News Page Headers
  const hdrNewsTitle = document.getElementById("hdr-news-title");
  const hdrNewsDesc = document.getElementById("hdr-news-desc");
  
  if (hdrNewsTitle) hdrNewsTitle.innerText = db.headers.newsTitle || "";
  if (hdrNewsDesc) hdrNewsDesc.innerText = db.headers.newsDesc || "";

  // Gallery Page Headers
  const hdrGalleryTitle = document.getElementById("hdr-gallery-title");
  const hdrGalleryDesc = document.getElementById("hdr-gallery-desc");
  
  if (hdrGalleryTitle) hdrGalleryTitle.innerText = db.headers.galleryTitle || "";
  if (hdrGalleryDesc) hdrGalleryDesc.innerText = db.headers.galleryDesc || "";

  // E-Library Page Headers
  const hdrELibraryTitle = document.getElementById("hdr-elibrary-title");
  const hdrELibraryDesc = document.getElementById("hdr-elibrary-desc");
  
  if (hdrELibraryTitle) hdrELibraryTitle.innerText = db.headers.elibraryTitle || "";
  if (hdrELibraryDesc) hdrELibraryDesc.innerText = db.headers.elibraryDesc || "";

  // Contact Page Headers
  const hdrContactTitle = document.getElementById("hdr-contact-title");
  const hdrContactDesc = document.getElementById("hdr-contact-desc");
  const hdrContactFormTitle = document.getElementById("hdr-contact-form-title");
  const hdrContactSidebarTitle = document.getElementById("hdr-contact-sidebar-title");
  
  if (hdrContactTitle) hdrContactTitle.innerText = db.headers.contactTitle || "";
  if (hdrContactDesc) hdrContactDesc.innerText = db.headers.contactDesc || "";
  if (hdrContactFormTitle) hdrContactFormTitle.innerText = db.headers.contactFormTitle || "";
  if (hdrContactSidebarTitle) hdrContactSidebarTitle.innerText = db.headers.contactSidebarTitle || "";

  // Navigation menu items
  const navHome = document.getElementById("nav-lnk-home");
  const navAbout = document.getElementById("nav-lnk-about");
  const navAcademics = document.getElementById("nav-lnk-academics");
  const navEvents = document.getElementById("nav-lnk-events");
  const navNews = document.getElementById("nav-lnk-news");
  const navGallery = document.getElementById("nav-lnk-gallery");
  const navELibrary = document.getElementById("nav-lnk-elibrary");
  const navContact = document.getElementById("nav-lnk-contact");
  
  if (navHome) navHome.innerText = db.headers.navHome || "";
  if (navAbout) navAbout.innerText = db.headers.navAbout || "";
  if (navAcademics) navAcademics.innerText = db.headers.navAcademics || "";
  if (navEvents) navEvents.innerText = db.headers.navEvents || "";
  if (navNews) navNews.innerText = db.headers.navNews || "";
  if (navGallery) navGallery.innerText = db.headers.navGallery || "";
  if (navELibrary) navELibrary.innerText = db.headers.navELibrary || "";
  if (navContact) navContact.innerText = db.headers.navContact || "";

  // Footer Navigation menu items
  const footLnkHome = document.getElementById("foot-lnk-home");
  const footLnkAbout = document.getElementById("foot-lnk-about");
  const footLnkAcademics = document.getElementById("foot-lnk-academics");
  const footLnkEvents = document.getElementById("foot-lnk-events");
  const footLnkNews = document.getElementById("foot-lnk-news");
  const footLnkGallery = document.getElementById("foot-lnk-gallery");
  const footLnkELibrary = document.getElementById("foot-lnk-elibrary");
  const footLnkContact = document.getElementById("foot-lnk-contact");
  
  if (footLnkHome) footLnkHome.innerText = db.headers.navHome || "";
  if (footLnkAbout) footLnkAbout.innerText = db.headers.navAbout || "";
  if (footLnkAcademics) footLnkAcademics.innerText = db.headers.navAcademics || "";
  if (footLnkEvents) footLnkEvents.innerText = db.headers.navEvents || "";
  if (footLnkNews) footLnkNews.innerText = db.headers.navNews || "";
  if (footLnkGallery) footLnkGallery.innerText = db.headers.navGallery || "";
  if (footLnkELibrary) footLnkELibrary.innerText = db.headers.navELibrary || "";
  if (footLnkContact) footLnkContact.innerText = db.headers.navContact || "";

  // Footer Navigation Headers
  const footHdrNav = document.getElementById("foot-hdr-nav");
  const footHdrContact = document.getElementById("foot-hdr-contact");
  if (footHdrNav) footHdrNav.innerText = db.headers.footHdrNav || "";
  if (footHdrContact) footHdrContact.innerText = db.headers.footHdrContact || "";

  // Hero Buttons
  const heroBtnExplore = document.getElementById("hero-btn-explore");
  const heroBtnCourses = document.getElementById("hero-btn-courses");
  if (heroBtnExplore) heroBtnExplore.innerText = db.headers.heroBtnExplore || "";
  if (heroBtnCourses) heroBtnCourses.innerText = db.headers.heroBtnCourses || "";

  // Commandant Welcome elements
  const commSectTag = document.getElementById("comm-sect-tag");
  const commSectTitle = document.getElementById("comm-sect-title");
  if (commSectTag) commSectTag.innerText = db.headers.commSectTag || "";
  if (commSectTitle) commSectTitle.innerText = db.headers.commSectTitle || "";

  // Section Tags and buttons
  const homeNewsTag = document.getElementById("home-news-tag");
  const homeNewsArchiveBtn = document.getElementById("home-news-archive-btn");
  const homeEventsTag = document.getElementById("home-events-tag");
  const aboutSectTag = document.getElementById("about-sect-tag");
  const acadSectTag = document.getElementById("acad-sect-tag");
  const eventsSectTag = document.getElementById("events-sect-tag");
  const newsSectTag = document.getElementById("news-sect-tag");
  const gallerySectTag = document.getElementById("gallery-sect-tag");
  const elibrarySectTag = document.getElementById("elibrary-sect-tag");
  const contactSectTag = document.getElementById("contact-sect-tag");

  if (homeNewsTag) homeNewsTag.innerText = db.headers.homeNewsTag || "";
  if (homeNewsArchiveBtn) homeNewsArchiveBtn.innerText = db.headers.homeNewsArchiveBtn || "";
  if (homeEventsTag) homeEventsTag.innerText = db.headers.homeEventsTag || "";
  if (aboutSectTag) aboutSectTag.innerText = db.headers.aboutSectTag || "";
  if (acadSectTag) acadSectTag.innerText = db.headers.acadSectTag || "";
  if (eventsSectTag) eventsSectTag.innerText = db.headers.eventsSectTag || "";
  if (newsSectTag) newsSectTag.innerText = db.headers.newsSectTag || "";
  if (gallerySectTag) gallerySectTag.innerText = db.headers.gallerySectTag || "";
  if (elibrarySectTag) elibrarySectTag.innerText = db.headers.elibrarySectTag || "";
  if (contactSectTag) contactSectTag.innerText = db.headers.contactSectTag || "";

  // Footer Content
  const footerDescText = document.getElementById("footer-desc-text");
  const footerSocialText = document.getElementById("footer-social-text");
  const footerEmails = document.getElementById("footer-emails");
  const footerAddress = document.getElementById("footer-address");
  
  if (footerDescText) footerDescText.innerText = db.footer.desc || "";
  if (footerSocialText) footerSocialText.innerText = db.footer.social || "";
  if (footerEmails && db.contact) footerEmails.innerHTML = db.contact.email.replace(/\n/g, "<br>");
  if (footerAddress && db.contact) footerAddress.innerHTML = db.contact.address.replace(/\n/g, "<br>");
}

// 3. ACADEMICS VIEW RENDERER
function renderAcademics() {
  const officersGrid = document.getElementById("acad-officers-grid");
  const ratingsGrid = document.getElementById("acad-ratings-grid");
  
  officersGrid.innerHTML = "";
  ratingsGrid.innerHTML = "";
  
  db.courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <div class="course-header">
        <span class="course-duration">${course.duration}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--gold);"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
      </div>
      <h3 class="course-title">${course.title}</h3>
      <p class="course-text">${course.description}</p>
      <div class="course-meta">
        <span>Syllabus: Armament & Gunnery</span>
        <span>${course.category}</span>
      </div>
    `;
    
    if (course.category === "Officers") {
      officersGrid.appendChild(card);
    } else {
      ratingsGrid.appendChild(card);
    }
  });
}

// 4. NEWS VIEW RENDERER
let newsSearchQuery = "";
let newsActiveCategory = "All";

function filterNews(category) {
  newsActiveCategory = category;
  document.querySelectorAll(".news-filter-btn").forEach(btn => {
    btn.classList.remove("active-tab");
  });
  event.target.classList.add("active-tab");
  renderNews();
}

document.getElementById("news-search").addEventListener("input", (e) => {
  newsSearchQuery = e.target.value.toLowerCase();
  renderNews();
});

function renderNews() {
  const newsGrid = document.getElementById("news-portal-grid");
  newsGrid.innerHTML = "";
  
  const filtered = db.news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(newsSearchQuery) || item.content.toLowerCase().includes(newsSearchQuery);
    const matchesCategory = newsActiveCategory === "All" || item.category === newsActiveCategory;
    return matchesSearch && matchesCategory;
  });
  
  if (filtered.length === 0) {
    newsGrid.innerHTML = `<div style="grid-column: span 3; text-align:center; padding: 4rem; color: var(--text-secondary);">No articles found matching the filters.</div>`;
    return;
  }
  
  [...filtered].reverse().forEach(item => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="news-img" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600'">
      <div class="news-card-content">
        <span class="news-date">${item.date}</span>
        <h3 class="news-card-title">${item.title}</h3>
        <p class="news-excerpt">${item.excerpt}</p>
        <a href="javascript:void(0)" class="news-read-more" onclick="openNewsModal(${item.id})">Read Article &rarr;</a>
      </div>
    `;
    newsGrid.appendChild(card);
  });
}

// NEWS DETAILED MODAL
function openNewsModal(id) {
  const item = db.news.find(article => article.id === id);
  if (!item) return;
  
  const modal = document.getElementById("news-modal");
  modal.querySelector(".modal-img").src = item.image;
  modal.querySelector(".modal-title").innerText = item.title;
  modal.querySelector(".modal-meta").innerText = `Published: ${item.date} | Category: ${item.category}`;
  
  const paragraphs = item.content.split("\n").map(p => `<p>${p}</p>`).join("");
  modal.querySelector(".modal-text").innerHTML = paragraphs;
  
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeNewsModal() {
  const modal = document.getElementById("news-modal");
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// 5. GALLERY VIEW RENDERER
let galleryActiveCategory = "all";

function filterGallery(category) {
  galleryActiveCategory = category;
  document.querySelectorAll(".gallery-filter-btn").forEach(btn => {
    btn.classList.remove("active-tab");
  });
  event.target.classList.add("active-tab");
  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById("gallery-items-grid");
  grid.innerHTML = "";
  
  const filtered = db.gallery.filter(item => galleryActiveCategory === "all" || item.category === galleryActiveCategory);
  
  filtered.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.onclick = () => openLightbox(filtered, index);
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600'">
      <div class="gallery-overlay">
        <span class="gallery-caption">${item.title}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// GALLERY LIGHTBOX
let currentLightboxList = [];
let currentLightboxIndex = 0;

function openLightbox(list, index) {
  currentLightboxList = list;
  currentLightboxIndex = index;
  
  const lightbox = document.getElementById("gallery-lightbox");
  const img = lightbox.querySelector(".lightbox-img");
  const cap = lightbox.querySelector(".lightbox-caption");
  
  img.src = list[index].image;
  cap.innerText = list[index].title;
  
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("gallery-lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) currentLightboxIndex = currentLightboxList.length - 1;
  if (currentLightboxIndex >= currentLightboxList.length) currentLightboxIndex = 0;
  
  const lightbox = document.getElementById("gallery-lightbox");
  lightbox.querySelector(".lightbox-img").src = currentLightboxList[currentLightboxIndex].image;
  lightbox.querySelector(".lightbox-caption").innerText = currentLightboxList[currentLightboxIndex].title;
}

// 6. E-LIBRARY RENDERER
let librarySearchQuery = "";
document.getElementById("lib-search").addEventListener("input", (e) => {
  librarySearchQuery = e.target.value.toLowerCase();
  renderELibrary();
});

function renderELibrary() {
  const grid = document.getElementById("library-catalog-grid");
  grid.innerHTML = "";
  
  const filtered = db.elibrary.filter(item => {
    return item.title.toLowerCase().includes(librarySearchQuery) || 
           item.description.toLowerCase().includes(librarySearchQuery) ||
           item.category.toLowerCase().includes(librarySearchQuery);
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: span 2; text-align:center; padding: 4rem; color: var(--text-secondary);">No references found matching your query.</div>`;
    return;
  }
  
  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "library-card";
    card.innerHTML = `
      <div class="lib-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v19M6.5 6H16M6.5 10H16"/></svg>
      </div>
      <div class="lib-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <span style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:var(--text-muted); display:block; margin-bottom:0.75rem;">Category: ${item.category}</span>
        <a href="${item.url}" target="_blank" class="lib-link">Launch Portal &rarr;</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render Events Dynamic Timeline
function renderEvents() {
  const eventsList = document.getElementById("events-timeline-list");
  if (!eventsList) return;
  eventsList.innerHTML = "";
  
  if (!db.events || db.events.length === 0) {
    eventsList.innerHTML = `<div style="text-align:center; padding: 4rem; color: var(--text-secondary);">No scheduled events found.</div>`;
    return;
  }
  
  db.events.forEach(item => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.style.textAlign = "left";
    card.style.borderTop = "none";
    card.style.borderLeft = "4px solid var(--gold)";
    card.style.padding = "2rem";
    
    // Check status to style badge
    const isCompleted = item.status === "Completed";
    const badgeStyle = isCompleted ? "" : "background:rgba(212, 175, 55, 0.05); color:var(--text-secondary);";
    
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <span style="font-size:0.8rem; font-weight:700; color:var(--gold); text-transform:uppercase; letter-spacing:1px;">${item.date}</span>
        <span class="cpanel-badge" style="font-size:0.65rem; ${badgeStyle}">${item.status}</span>
      </div>
      <h3 style="font-family:var(--font-serif); font-size:1.4rem; color:var(--white); margin-bottom:0.5rem;">${item.title}</h3>
      <p style="color:var(--text-secondary);">${item.description}</p>
    `;
    eventsList.appendChild(card);
  });
}

// Render Contact Sidebar Dynamic Content
function renderContactSidebar() {
  const emailsContainer = document.getElementById("contact-sidebar-emails");
  const addressContainer = document.getElementById("contact-sidebar-address");
  const focTitleContainer = document.getElementById("contact-sidebar-foc-title");
  const focTextContainer = document.getElementById("contact-sidebar-foc-text");
  
  if (!db.contact) return;
  
  if (emailsContainer) {
    emailsContainer.innerHTML = db.contact.email.replace(/\n/g, "<br>");
  }
  if (addressContainer) {
    addressContainer.innerHTML = db.contact.address.replace(/\n/g, "<br>");
  }
  if (focTitleContainer) {
    focTitleContainer.innerText = db.contact.focTitle;
  }
  if (focTextContainer) {
    focTextContainer.innerText = db.contact.focText;
  }
}

// 7. CONTACT FORM SUBMISSION
function submitContactForm() {
  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const subject = document.getElementById("contact-subject").value;
  const content = document.getElementById("contact-msg").value;
  
  if (!name || !email || !subject || !content) return;
  
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const today = new Date().toLocaleDateString("en-US", options);
  
  const nextMsgId = db.messages.length > 0 ? Math.max(...db.messages.map(m => m.id)) + 1 : 1;
  const newMessage = { id: nextMsgId, name, email, subject, content, date: today };
  
  db.messages.push(newMessage);
  saveDB();
  
  // Clear inputs
  document.getElementById("contact-form").reset();
  showToast("Message transmitted to NNSAT CPanel Inbox successfully.", "success");
}

// Listen for updates from other tabs/windows (like admin.html) to keep data synchronized instantly
window.addEventListener("storage", (e) => {
  if (e.key === "nnsat_db") {
    initDB();
    renderAllViews();
  }
});

// BOOTSTRAP INITIALIZATION
window.addEventListener("DOMContentLoaded", () => {
  initDB();
  renderAllViews();
  switchView('home');
});
