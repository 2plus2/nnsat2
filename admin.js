// NNSAT CPANEL - ADMINISTRATIVE CONTROL SYSTEM LOGIC

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
    email: "info@lightgoldenrodyellow-hornet-176913.hostingersite.com\nnnsat@navy.mil.ng",
    address: "NNSAT Kachia Base,\nKaduna State, Nigeria",
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
    social: "Navy training command"
  }
};

let db = {};
let sessionUser = "";

// Global editing state trackers
let editingCourseIndex = null;
let editingEventId = null;
let editingNewsId = null;
let editingGalleryIndex = null;
let editingLibraryIndex = null;
let editingLeaderIndex = null;
let editingFacilityId = null;

// Initialize Database from LocalStorage
function initDB() {
  const savedData = localStorage.getItem("nnsat_db");
  if (savedData) {
    try {
      db = JSON.parse(savedData);
      
      // Assure table structures exist
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

function saveDB() {
  localStorage.setItem("nnsat_db", JSON.stringify(db));
}

function resetToDefaults() {
  if (confirm("Restore NNSAT CPanel to factory template values? This wipes all edits, user changes, and inbox items.")) {
    db = JSON.parse(JSON.stringify(INITIAL_DATABASE));
    saveDB();
    showToast("CPanel restored to factory defaults.", "success");
    loadAdminDashboard("general");
  }
}

// Authentication Logic
function checkSession() {
  const isAuth = sessionStorage.getItem("cpanel_session");
  const username = sessionStorage.getItem("cpanel_username");
  const authBox = document.getElementById("admin-auth");
  const dashboard = document.getElementById("admin-dashboard");
  const userLabel = document.getElementById("logged-user-label");
  
  if (isAuth === "true" && username) {
    sessionUser = username;
    authBox.style.display = "none";
    dashboard.style.display = "block";
    if (userLabel) userLabel.innerText = `User: ${sessionUser}`;
    loadAdminDashboard("general");
  } else {
    authBox.style.display = "block";
    dashboard.style.display = "none";
  }
}

function verifyAdminPassword() {
  const userField = document.getElementById("admin-username");
  const passField = document.getElementById("admin-password");
  
  const username = userField.value.trim().toLowerCase();
  const password = passField.value;
  
  const matchedUser = db.users.find(u => u.username.toLowerCase() === username && u.password === password);
  
  if (matchedUser) {
    sessionUser = matchedUser.username;
    sessionStorage.setItem("cpanel_session", "true");
    sessionStorage.setItem("cpanel_username", matchedUser.username);
    checkSession();
    showToast(`Access Granted. Welcome, ${matchedUser.username}.`, "success");
    
    // Clear inputs
    userField.value = "";
    passField.value = "";
  } else {
    showToast("Invalid CPanel login credentials. Access denied.", "danger");
  }
}

function logoutAdmin() {
  sessionUser = "";
  sessionStorage.removeItem("cpanel_session");
  sessionStorage.removeItem("cpanel_username");
  checkSession();
  showToast("Admin session ended successfully.", "success");
}

// CPanel Tab Loader
function loadAdminDashboard(section) {
  document.querySelectorAll(".admin-menu-item").forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("onclick").includes(section)) {
      item.classList.add("active");
    }
  });
  
  const contentArea = document.getElementById("admin-content-area");
  contentArea.innerHTML = "";
  
  switch (section) {
    case "general":
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">General Website Copy Settings</h2>
        <form class="admin-form" onsubmit="saveGeneralCopy(); return false;">
          <div class="form-group">
            <label class="form-label">Hero Title</label>
            <input type="text" id="edit-hero-title" class="form-input" value="${db.hero.title}">
          </div>
          <div class="form-group">
            <label class="form-label">Hero Subtitle</label>
            <input type="text" id="edit-hero-sub" class="form-input" value="${db.hero.subtitle}">
          </div>
          <div class="form-group">
            <label class="form-label">Hero Badge</label>
            <input type="text" id="edit-hero-badge" class="form-input" value="${db.hero.badge || ''}">
          </div>
          <div class="form-group">
            <label class="form-label">Hero Image (URL or Local Upload)</label>
            <input type="text" id="edit-hero-img" class="form-input" value="${db.hero.image}">
            <input type="file" class="form-input" style="margin-top:0.5rem;" onchange="handleImageUpload(this, 'edit-hero-img')">
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1.5rem; margin-top:2rem; border-top:1px solid var(--border); padding-top:2rem;">
            <div style="display:flex; flex-direction:column; gap:1rem;">
              <div class="form-group">
                <label class="form-label">Officers Trained Stat</label>
                <input type="text" id="edit-stat-off" class="form-input" value="${db.stats.officers}">
              </div>
              <div class="form-group">
                <label class="form-label">Officers Trained Label</label>
                <input type="text" id="edit-stat-off-label" class="form-input" value="${db.stats.officersLabel || ''}">
              </div>
              <div class="form-group">
                <label class="form-label">Officers Trained Description</label>
                <input type="text" id="edit-stat-off-desc" class="form-input" value="${db.stats.officersDesc || ''}">
              </div>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:1rem;">
              <div class="form-group">
                <label class="form-label">Ratings Spec Stat</label>
                <input type="text" id="edit-stat-rat" class="form-input" value="${db.stats.ratings}">
              </div>
              <div class="form-group">
                <label class="form-label">Ratings Spec Label</label>
                <input type="text" id="edit-stat-rat-label" class="form-input" value="${db.stats.ratingsLabel || ''}">
              </div>
              <div class="form-group">
                <label class="form-label">Ratings Spec Description</label>
                <input type="text" id="edit-stat-rat-desc" class="form-input" value="${db.stats.ratingsDesc || ''}">
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:1rem;">
              <div class="form-group">
                <label class="form-label">Weapons Systems Stat</label>
                <input type="text" id="edit-stat-sys" class="form-input" value="${db.stats.systems}">
              </div>
              <div class="form-group">
                <label class="form-label">Weapons Systems Label</label>
                <input type="text" id="edit-stat-sys-label" class="form-input" value="${db.stats.systemsLabel || ''}">
              </div>
              <div class="form-group">
                <label class="form-label">Weapons Systems Description</label>
                <input type="text" id="edit-stat-sys-desc" class="form-input" value="${db.stats.systemsDesc || ''}">
              </div>
            </div>
          </div>
          
          <div class="form-group" style="border-top:1px solid var(--border); padding-top:2rem;">
            <label class="form-label">Commandant Name</label>
            <input type="text" id="edit-comm-name" class="form-input" value="${db.commandant.name}">
          </div>
          <div class="form-group">
            <label class="form-label">Commandant Title</label>
            <input type="text" id="edit-comm-title" class="form-input" value="${db.commandant.title || ''}">
          </div>
          <div class="form-group">
            <label class="form-label">Commandant Photo (URL or Local Upload)</label>
            <input type="text" id="edit-comm-img" class="form-input" value="${db.commandant.image}">
            <input type="file" class="form-input" style="margin-top:0.5rem;" onchange="handleImageUpload(this, 'edit-comm-img')">
          </div>
          <div class="form-group">
            <label class="form-label">Commandant Greeting</label>
            <textarea id="edit-comm-welcome" class="form-input" style="height:120px; resize:vertical;">${db.commandant.welcomeText}</textarea>
          </div>
          <div class="form-group" style="border-top:1px solid var(--border); padding-top:2rem;">
            <label class="form-label">NNSAT History</label>
            <textarea id="edit-about-history" class="form-input" style="height:150px; resize:vertical;">${db.about.history}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">NNSAT Mission</label>
            <textarea id="edit-about-mission" class="form-input" style="height:85px; resize:vertical;">${db.about.mission}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">NNSAT Vision</label>
            <textarea id="edit-about-vision" class="form-input" style="height:85px; resize:vertical;">${db.about.vision}</textarea>
          </div>
          <div class="form-group" style="border-top:1px solid var(--border); padding-top:2rem;">
            <label class="form-label">Contact Sidebar Emails (one per line)</label>
            <textarea id="edit-contact-email" class="form-input" style="height:60px; resize:vertical;">${db.contact.email}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Contact Sidebar Address</label>
            <textarea id="edit-contact-address" class="form-input" style="height:60px; resize:vertical;">${db.contact.address}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">FOC Registry Title</label>
            <input type="text" id="edit-contact-foc-title" class="form-input" value="${db.contact.focTitle}">
          </div>
          <div class="form-group">
            <label class="form-label">FOC Registry Description Text</label>
            <textarea id="edit-contact-foc-text" class="form-input" style="height:80px; resize:vertical;">${db.contact.focText}</textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="margin-top:1rem;">Save Copy Coordinates</button>
        </form>
      `;
      break;
      
    case "titles":
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">Page Titles & Footers Settings</h2>
        <form class="admin-form" onsubmit="saveTitlesAndFooters(); return false;">
          <h3 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--white); margin:1.5rem 0 1rem 0; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">Homepage Section Titles</h3>
          
          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">News Section Title</label>
              <input type="text" id="edit-hdr-homeNewsTitle" class="form-input" value="${db.headers.homeNewsTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">News Section Description</label>
              <input type="text" id="edit-hdr-homeNewsDesc" class="form-input" value="${db.headers.homeNewsDesc || ''}">
            </div>
          </div>

          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Events Section Title</label>
              <input type="text" id="edit-hdr-homeEventsTitle" class="form-input" value="${db.headers.homeEventsTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Events Section Description</label>
              <input type="text" id="edit-hdr-homeEventsDesc" class="form-input" value="${db.headers.homeEventsDesc || ''}">
            </div>
          </div>

          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Request Event Title</label>
              <input type="text" id="edit-hdr-homeRequestTitle" class="form-input" value="${db.headers.homeRequestTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Request Event Description</label>
              <input type="text" id="edit-hdr-homeRequestDesc" class="form-input" value="${db.headers.homeRequestDesc || ''}">
            </div>
          </div>

          <h3 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--white); margin:2.5rem 0 1rem 0; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">About Us Page Titles</h3>
          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">About Page Title</label>
              <input type="text" id="edit-hdr-aboutTitle" class="form-input" value="${db.headers.aboutTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">About Page Description</label>
              <input type="text" id="edit-hdr-aboutDesc" class="form-input" value="${db.headers.aboutDesc || ''}">
            </div>
          </div>
          <div class="grid-3" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Origins & Mandate Sub-title</label>
              <input type="text" id="edit-hdr-aboutHistoryTitle" class="form-input" value="${db.headers.aboutHistoryTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Mission Sub-title</label>
              <input type="text" id="edit-hdr-aboutMissionTitle" class="form-input" value="${db.headers.aboutMissionTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Vision Sub-title</label>
              <input type="text" id="edit-hdr-aboutVisionTitle" class="form-input" value="${db.headers.aboutVisionTitle || ''}">
            </div>
          </div>
          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Leadership Section Title</label>
              <input type="text" id="edit-hdr-aboutLeadershipTitle" class="form-input" value="${db.headers.aboutLeadershipTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Facilities Section Title</label>
              <input type="text" id="edit-hdr-aboutFacilitiesTitle" class="form-input" value="${db.headers.aboutFacilitiesTitle || ''}">
            </div>
          </div>

          <h3 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--white); margin:2.5rem 0 1rem 0; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">Academics Page Titles</h3>
          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Academics Page Title</label>
              <input type="text" id="edit-hdr-academicsTitle" class="form-input" value="${db.headers.academicsTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Academics Page Description</label>
              <input type="text" id="edit-hdr-academicsDesc" class="form-input" value="${db.headers.academicsDesc || ''}">
            </div>
          </div>
          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Officers Program Sub-title</label>
              <input type="text" id="edit-hdr-academicsOfficersTitle" class="form-input" value="${db.headers.academicsOfficersTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Ratings Program Sub-title</label>
              <input type="text" id="edit-hdr-academicsRatingsTitle" class="form-input" value="${db.headers.academicsRatingsTitle || ''}">
            </div>
          </div>

          <h3 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--white); margin:2.5rem 0 1rem 0; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">Other Page Titles</h3>
          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Events Page Title</label>
              <input type="text" id="edit-hdr-eventsTitle" class="form-input" value="${db.headers.eventsTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Events Page Description</label>
              <input type="text" id="edit-hdr-eventsDesc" class="form-input" value="${db.headers.eventsDesc || ''}">
            </div>
          </div>
          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">News Page Title</label>
              <input type="text" id="edit-hdr-newsTitle" class="form-input" value="${db.headers.newsTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">News Page Description</label>
              <input type="text" id="edit-hdr-newsDesc" class="form-input" value="${db.headers.newsDesc || ''}">
            </div>
          </div>
          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Gallery Page Title</label>
              <input type="text" id="edit-hdr-galleryTitle" class="form-input" value="${db.headers.galleryTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Gallery Page Description</label>
              <input type="text" id="edit-hdr-galleryDesc" class="form-input" value="${db.headers.galleryDesc || ''}">
            </div>
          </div>
          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">E-Library Page Title</label>
              <input type="text" id="edit-hdr-elibraryTitle" class="form-input" value="${db.headers.elibraryTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">E-Library Page Description</label>
              <input type="text" id="edit-hdr-elibraryDesc" class="form-input" value="${db.headers.elibraryDesc || ''}">
            </div>
          </div>
          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Contact Page Title</label>
              <input type="text" id="edit-hdr-contactTitle" class="form-input" value="${db.headers.contactTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Contact Page Description</label>
              <input type="text" id="edit-hdr-contactDesc" class="form-input" value="${db.headers.contactDesc || ''}">
            </div>
          </div>
          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Contact Form Title</label>
              <input type="text" id="edit-hdr-contactFormTitle" class="form-input" value="${db.headers.contactFormTitle || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Contact Sidebar Title</label>
              <input type="text" id="edit-hdr-contactSidebarTitle" class="form-input" value="${db.headers.contactSidebarTitle || ''}">
            </div>
          </div>

          <h3 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--white); margin:2.5rem 0 1rem 0; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">Navigation & General UI Labels</h3>
          
          <div class="grid-3" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Nav Label: Home</label>
              <input type="text" id="edit-hdr-navHome" class="form-input" value="${db.headers.navHome || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Nav Label: About Us</label>
              <input type="text" id="edit-hdr-navAbout" class="form-input" value="${db.headers.navAbout || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Nav Label: Academics</label>
              <input type="text" id="edit-hdr-navAcademics" class="form-input" value="${db.headers.navAcademics || ''}">
            </div>
          </div>

          <div class="grid-3" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Nav Label: Events</label>
              <input type="text" id="edit-hdr-navEvents" class="form-input" value="${db.headers.navEvents || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Nav Label: News Portal</label>
              <input type="text" id="edit-hdr-navNews" class="form-input" value="${db.headers.navNews || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Nav Label: Media Gallery</label>
              <input type="text" id="edit-hdr-navGallery" class="form-input" value="${db.headers.navGallery || ''}">
            </div>
          </div>

          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Nav Label: E-Library</label>
              <input type="text" id="edit-hdr-navELibrary" class="form-input" value="${db.headers.navELibrary || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Nav Label: Contact</label>
              <input type="text" id="edit-hdr-navContact" class="form-input" value="${db.headers.navContact || ''}">
            </div>
          </div>

          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Footer Nav Title</label>
              <input type="text" id="edit-hdr-footHdrNav" class="form-input" value="${db.headers.footHdrNav || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Footer Contact Title</label>
              <input type="text" id="edit-hdr-footHdrContact" class="form-input" value="${db.headers.footHdrContact || ''}">
            </div>
          </div>

          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Hero Button 1 (Explore)</label>
              <input type="text" id="edit-hdr-heroBtnExplore" class="form-input" value="${db.headers.heroBtnExplore || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Hero Button 2 (Courses)</label>
              <input type="text" id="edit-hdr-heroBtnCourses" class="form-input" value="${db.headers.heroBtnCourses || ''}">
            </div>
          </div>

          <div class="grid-2" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Commandant Section Tag</label>
              <input type="text" id="edit-hdr-commSectTag" class="form-input" value="${db.headers.commSectTag || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Commandant Section Title</label>
              <input type="text" id="edit-hdr-commSectTitle" class="form-input" value="${db.headers.commSectTitle || ''}">
            </div>
          </div>

          <div class="grid-3" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">Home News Section Tag</label>
              <input type="text" id="edit-hdr-homeNewsTag" class="form-input" value="${db.headers.homeNewsTag || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Home News Archive Button</label>
              <input type="text" id="edit-hdr-homeNewsArchiveBtn" class="form-input" value="${db.headers.homeNewsArchiveBtn || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Home Events Section Tag</label>
              <input type="text" id="edit-hdr-homeEventsTag" class="form-input" value="${db.headers.homeEventsTag || ''}">
            </div>
          </div>

          <div class="grid-3" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">About Us Section Tag</label>
              <input type="text" id="edit-hdr-aboutSectTag" class="form-input" value="${db.headers.aboutSectTag || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Academics Section Tag</label>
              <input type="text" id="edit-hdr-acadSectTag" class="form-input" value="${db.headers.acadSectTag || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Events Section Tag</label>
              <input type="text" id="edit-hdr-eventsSectTag" class="form-input" value="${db.headers.eventsSectTag || ''}">
            </div>
          </div>

          <div class="grid-3" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label class="form-label">News Section Tag</label>
              <input type="text" id="edit-hdr-newsSectTag" class="form-input" value="${db.headers.newsSectTag || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Gallery Section Tag</label>
              <input type="text" id="edit-hdr-gallerySectTag" class="form-input" value="${db.headers.gallerySectTag || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">E-Library Section Tag</label>
              <input type="text" id="edit-hdr-elibrarySectTag" class="form-input" value="${db.headers.elibrarySectTag || ''}">
            </div>
          </div>

          <div class="form-group" style="margin-bottom:1.5rem;">
            <label class="form-label">Contact Section Tag</label>
            <input type="text" id="edit-hdr-contactSectTag" class="form-input" value="${db.headers.contactSectTag || ''}">
          </div>

          <h3 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--white); margin:2.5rem 0 1rem 0; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">Footer Settings</h3>
          <div class="form-group">
            <label class="form-label">Footer Description Note</label>
            <textarea id="edit-footer-desc" class="form-input" style="height:60px; resize:vertical;">${db.footer.desc || ''}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Footer Social Note</label>
            <input type="text" id="edit-footer-social" class="form-input" value="${db.footer.social || ''}">
          </div>

          <button type="submit" class="btn btn-primary" style="margin-top:1.5rem;">Save Titles & Footers</button>
        </form>
      `;
      break;

    case "leadership":
      let leaderRows = db.leadership.map((item, index) => `
        <tr>
          <td><img src="${item.image}" style="width:40px; height:40px; object-fit:cover; border-radius:50%; border:1px solid var(--border)" onerror="this.src='https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=100'"></td>
          <td style="font-weight:600; color:var(--white);">${item.name}</td>
          <td>${item.role}</td>
          <td>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--gold); color:var(--gold); margin-right:0.5rem;" onclick="startEditLeader(${index})">Edit</button>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteLeader(${index})">Delete</button>
          </td>
        </tr>
      `).join("");

      contentArea.innerHTML = `
        <h2 class="admin-panel-title">Leadership Directory Manager</h2>
        
        <h3 style="margin-bottom:1rem; font-family:var(--font-serif); font-size:1.3rem;">Command Officers</h3>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Officer Name</th>
              <th>Role / Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${leaderRows}
          </tbody>
        </table>
        
        <h3 id="leader-form-title" style="margin-bottom:1.5rem; font-family:var(--font-serif); font-size:1.3rem; margin-top:3rem; border-top:1px solid var(--border); padding-top:2rem;">Add New Command Leader</h3>
        <form class="admin-form" onsubmit="saveLeaderForm(); return false;">
          <div class="form-group">
            <label class="form-label">Leader Name</label>
            <input type="text" id="add-leader-name" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Role / Rank (e.g. Commandant, Chief of the Naval Staff)</label>
            <input type="text" id="add-leader-role" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Photo Source (URL or Local Upload)</label>
            <input type="text" id="add-leader-img" class="form-input" required>
            <input type="file" class="form-input" style="margin-top:0.5rem;" onchange="handleImageUpload(this, 'add-leader-img')">
          </div>
          <button type="submit" id="leader-form-submit-btn" class="btn btn-primary">Add Leader</button>
        </form>
      `;
      break;

    case "facilities":
      let facilityRows = db.facilities.map((item, index) => `
        <tr>
          <td><img src="${item.image}" style="width:50px; height:35px; object-fit:cover; border-radius:4px; border:1px solid var(--border)" onerror="this.src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100'"></td>
          <td style="font-weight:600; color:var(--white);">${item.title}</td>
          <td>${item.description.substring(0, 80)}${item.description.length > 80 ? '...' : ''}</td>
          <td>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--gold); color:var(--gold); margin-right:0.5rem;" onclick="startEditFacility(${index})">Edit</button>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteFacility(${index})">Delete</button>
          </td>
        </tr>
      `).join("");

      contentArea.innerHTML = `
        <h2 class="admin-panel-title">Campus Facilities Manager</h2>
        
        <h3 style="margin-bottom:1rem; font-family:var(--font-serif); font-size:1.3rem;">Campus Infrastructure</h3>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Facility Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${facilityRows}
          </tbody>
        </table>
        
        <h3 id="facility-form-title" style="margin-bottom:1.5rem; font-family:var(--font-serif); font-size:1.3rem; margin-top:3rem; border-top:1px solid var(--border); padding-top:2rem;">Add New Campus Facility</h3>
        <form class="admin-form" onsubmit="saveFacilityForm(); return false;">
          <div class="form-group">
            <label class="form-label">Facility Title</label>
            <input type="text" id="add-facility-title" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Facility Description</label>
            <textarea id="add-facility-desc" class="form-input" style="height:100px; resize:vertical;" required></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Facility Photo (URL or Local Upload)</label>
            <input type="text" id="add-facility-img" class="form-input" required>
            <input type="file" class="form-input" style="margin-top:0.5rem;" onchange="handleImageUpload(this, 'add-facility-img')">
          </div>
          <button type="submit" id="facility-form-submit-btn" class="btn btn-primary">Add Facility</button>
        </form>
      `;
      break;

    case "academics":
      let courseRows = db.courses.map((item, index) => `
        <tr>
          <td style="font-weight:600; color:var(--white);">${item.title}</td>
          <td>${item.category}</td>
          <td>${item.duration}</td>
          <td>${item.description.substring(0, 80)}${item.description.length > 80 ? '...' : ''}</td>
          <td>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--gold); color:var(--gold); margin-right:0.5rem;" onclick="startEditCourse(${index})">Edit</button>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteCourse(${index})">Delete</button>
          </td>
        </tr>
      `).join("");
      
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">Academics Curriculum Manager</h2>
        
        <h3 style="margin-bottom:1rem; font-family:var(--font-serif); font-size:1.3rem;">Courses Roster</h3>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${courseRows}
          </tbody>
        </table>
        
        <h3 id="course-form-title" style="margin-bottom:1.5rem; font-family:var(--font-serif); font-size:1.3rem; margin-top:3rem; border-top:1px solid var(--border); padding-top:2rem;">Add New Training Program</h3>
        <form class="admin-form" onsubmit="addCourse(); return false;">
          <div class="form-group">
            <label class="form-label">Course Title</label>
            <input type="text" id="add-course-title" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="add-course-cat" class="form-input" required>
              <option value="Officers">Officers</option>
              <option value="Ratings">Ratings</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Duration (e.g. 6 Weeks, 12 Weeks)</label>
            <input type="text" id="add-course-duration" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea id="add-course-desc" class="form-input" style="height:100px; resize:vertical;" required></textarea>
          </div>
          <button type="submit" id="course-form-submit-btn" class="btn btn-primary">Add Course</button>
        </form>
      `;
      break;

    case "events":
      let eventRows = db.events.map(item => `
        <tr>
          <td style="font-weight:600; color:var(--white);">${item.title}</td>
          <td>${item.date}</td>
          <td><span class="cpanel-badge" style="${item.status === 'Completed' ? '' : 'background:rgba(212, 175, 55, 0.05); color:var(--text-secondary);'}">${item.status}</span></td>
          <td>${item.description.substring(0, 80)}${item.description.length > 80 ? '...' : ''}</td>
          <td>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--gold); color:var(--gold); margin-right:0.5rem;" onclick="startEditEvent(${item.id})">Edit</button>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteEvent(${item.id})">Delete</button>
          </td>
        </tr>
      `).join("");
      
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">Events Calendar Manager</h2>
        
        <h3 style="margin-bottom:1rem; font-family:var(--font-serif); font-size:1.3rem;">Scheduled Events</h3>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Event Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${eventRows}
          </tbody>
        </table>
        
        <h3 id="event-form-title" style="margin-bottom:1.5rem; font-family:var(--font-serif); font-size:1.3rem; margin-top:3rem; border-top:1px solid var(--border); padding-top:2rem;">Add New Calendar Event</h3>
        <form class="admin-form" onsubmit="addEvent(); return false;">
          <div class="form-group">
            <label class="form-label">Event Title</label>
            <input type="text" id="add-event-title" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Event Date (e.g. July 15, 2026)</label>
            <input type="text" id="add-event-date" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Status</label>
            <select id="add-event-status" class="form-input" required>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea id="add-event-desc" class="form-input" style="height:100px; resize:vertical;" required></textarea>
          </div>
          <button type="submit" id="event-form-submit-btn" class="btn btn-primary">Publish Event</button>
        </form>
      `;
      break;

    case "elibrary":
      let libRows = db.elibrary.map((item, index) => `
        <tr>
          <td style="font-weight:600; color:var(--white);">${item.title}</td>
          <td>${item.category}</td>
          <td>${item.description.substring(0, 80)}${item.description.length > 80 ? '...' : ''}</td>
          <td><a href="${item.url}" target="_blank" style="color:var(--gold); text-decoration:underline;">${item.url}</a></td>
          <td>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--gold); color:var(--gold); margin-right:0.5rem;" onclick="startEditELibraryResource(${index})">Edit</button>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteELibraryResource(${index})">Delete</button>
          </td>
        </tr>
      `).join("");
      
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">E-Library Reference Manager</h2>
        
        <h3 style="margin-bottom:1rem; font-family:var(--font-serif); font-size:1.3rem;">Library Inventory</h3>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Resource Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>URL / Reference</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${libRows}
          </tbody>
        </table>
        
        <h3 id="lib-form-title" style="margin-bottom:1.5rem; font-family:var(--font-serif); font-size:1.3rem; margin-top:3rem; border-top:1px solid var(--border); padding-top:2rem;">Add E-Library Reference Item</h3>
        <form class="admin-form" onsubmit="addELibraryResource(); return false;">
          <div class="form-group">
            <label class="form-label">Resource Title</label>
            <input type="text" id="add-lib-title" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="add-lib-cat" class="form-input" required>
              <option value="Portals">Portal / External Library</option>
              <option value="Manuals">Military Reference Manual</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">URL Link (Use '#' if referencing offline material)</label>
            <input type="text" id="add-lib-url" class="form-input" required value="#">
          </div>
          <div class="form-group">
            <label class="form-label">Description / Summary</label>
            <textarea id="add-lib-desc" class="form-input" style="height:100px; resize:vertical;" required></textarea>
          </div>
          <button type="submit" id="lib-form-submit-btn" class="btn btn-primary">Add Resource</button>
        </form>
      `;
      break;

    case "news":
      let tableRows = db.news.map(item => `
        <tr>
          <td><img src="${item.image}" style="width:50px; height:35px; object-fit:cover; border-radius:4px; border:1px solid var(--border)" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100'"></td>
          <td style="font-weight:600;">${item.title}</td>
          <td>${item.date}</td>
          <td>${item.category}</td>
          <td>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--gold); color:var(--gold); margin-right:0.5rem;" onclick="startEditNews(${item.id})">Edit</button>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteNews(${item.id})">Delete</button>
          </td>
        </tr>
      `).join("");
      
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">Operational News Manager</h2>
        
        <h3 style="margin-bottom:1rem; font-family:var(--font-serif); font-size:1.3rem;">Published Logs</h3>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Article Title</th>
              <th>Date</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
        
        <h3 id="news-form-title" style="margin-bottom:1.5rem; font-family:var(--font-serif); font-size:1.3rem; margin-top:3rem; border-top:1px solid var(--border); padding-top:2rem;">Add New Operational Log</h3>
        <form class="admin-form" onsubmit="addNewsArticle(); return false;">
          <div class="form-group">
            <label class="form-label">Article Title</label>
            <input type="text" id="add-news-title" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Publish Date (e.g., 21 June 2026)</label>
            <input type="text" id="add-news-date" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="add-news-cat" class="form-input" required>
              <option value="Events">Events</option>
              <option value="Visits">Visits</option>
              <option value="General">General</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Log Image (URL or Local Upload)</label>
            <input type="text" id="add-news-img" class="form-input" required>
            <input type="file" class="form-input" style="margin-top:0.5rem;" onchange="handleImageUpload(this, 'add-news-img')">
          </div>
          <div class="form-group">
            <label class="form-label">Short Summary (Excerpt)</label>
            <input type="text" id="add-news-excerpt" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Article Text Content</label>
            <textarea id="add-news-content" class="form-input" style="height:180px; resize:vertical;" required></textarea>
          </div>
          <button type="submit" id="news-form-submit-btn" class="btn btn-primary">Publish to Live Portal</button>
        </form>
      `;
      break;
      
    case "gallery":
      let galleryRows = db.gallery.map((item, index) => `
        <tr>
          <td><img src="${item.image}" style="width:60px; height:45px; object-fit:cover; border-radius:4px; border:1px solid var(--border)"></td>
          <td style="font-weight:600;">${item.title}</td>
          <td>${item.category}</td>
          <td>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--gold); color:var(--gold); margin-right:0.5rem;" onclick="startEditGalleryItem(${index})">Edit</button>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteGalleryItem(${index})">Remove</button>
          </td>
        </tr>
      `).join("");
      
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">Media Gallery Manager</h2>
        
        <h3 style="margin-bottom:1rem; font-family:var(--font-serif); font-size:1.3rem;">Roster Photos</h3>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Caption</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${galleryRows}
          </tbody>
        </table>
        
        <h3 id="gal-form-title" style="margin-bottom:1.5rem; font-family:var(--font-serif); font-size:1.3rem; margin-top:3rem; border-top:1px solid var(--border); padding-top:2rem;">Add Photo to Gallery</h3>
        <form class="admin-form" onsubmit="addGalleryItem(); return false;">
          <div class="form-group">
            <label class="form-label">Image Caption</label>
            <input type="text" id="add-gal-title" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="add-gal-cat" class="form-input" required>
              <option value="visits">Visits</option>
              <option value="events">Events</option>
              <option value="drills">Drills</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Photo Source (URL or Local Upload)</label>
            <input type="text" id="add-gal-img" class="form-input" required>
            <input type="file" class="form-input" style="margin-top:0.5rem;" onchange="handleImageUpload(this, 'add-gal-img')">
          </div>
          <button type="submit" id="gal-form-submit-btn" class="btn btn-primary">Upload Photo</button>
        </form>
      `;
      break;

    case "messages":
      let msgRows = db.messages.length > 0 ? db.messages.map(item => `
        <div class="stat-card" style="text-align:left; border-top:none; border-left:3px solid var(--gold); padding:2rem; margin-bottom:1.5rem; position:relative;">
          <button class="btn btn-outline" style="position:absolute; top:2rem; right:2rem; padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteMessage(${item.id})">Delete</button>
          <span style="font-size:0.8rem; font-weight:700; color:var(--gold); text-transform:uppercase;">Received: ${item.date}</span>
          <h3 style="font-family:var(--font-serif); font-size:1.3rem; color:var(--white); margin:0.25rem 0;">${item.subject}</h3>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1rem;"><strong>From:</strong> ${item.name} (${item.email})</p>
          <p style="color:var(--text-primary); font-size:0.95rem; line-height:1.6; border-top:1px solid var(--border); padding-top:1rem;">${item.content}</p>
        </div>
      `).reverse().join("") : `<p style="color:var(--text-secondary); text-align:center; padding:3rem;">Inbox is empty. No messages submitted yet.</p>`;

      contentArea.innerHTML = `
        <h2 class="admin-panel-title">Registry Inbox Messages</h2>
        <div style="max-width:800px;">
          ${msgRows}
        </div>
      `;
      break;

    case "accounts":
      let userList = db.users.map(u => `
        <tr>
          <td style="font-weight:600; color:var(--white);">${u.username}</td>
          <td>••••••••</td>
          <td>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteUser('${u.username}')" ${u.username === 'admin' ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''}>Delete</button>
          </td>
        </tr>
      `).join("");

      contentArea.innerHTML = `
        <h2 class="admin-panel-title">User Accounts Control</h2>
        
        <div class="grid-2" style="align-items: flex-start; gap: 3rem;">
          <!-- LIST USERS -->
          <div>
            <h3 style="margin-bottom:1rem; font-family:var(--font-serif); font-size:1.3rem;">System User Accounts</h3>
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${userList}
              </tbody>
            </table>
          </div>

          <!-- USER ACTIONS -->
          <div style="display:flex; flex-direction:column; gap:2.5rem;">
            <!-- CREATE USER -->
            <div style="background:var(--navy-light); border:1px solid var(--border); padding:2rem; border-radius:var(--radius-md);">
              <h4 style="font-family:var(--font-serif); font-size:1.15rem; color:var(--white); margin-bottom:1rem;">Create New Operator User</h4>
              <form onsubmit="createNewUser(); return false;">
                <div class="form-group">
                  <label class="form-label">Username</label>
                  <input type="text" id="add-user-name" class="form-input" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Password</label>
                  <input type="password" id="add-user-pass" class="form-input" required>
                </div>
                <button type="submit" class="btn btn-primary" style="padding:0.5rem 1.2rem; font-size:0.85rem;">Create Account</button>
              </form>
            </div>

            <!-- CHANGE PASSWORD -->
            <div style="background:var(--navy-light); border:1px solid var(--border); padding:2rem; border-radius:var(--radius-md);">
              <h4 style="font-family:var(--font-serif); font-size:1.15rem; color:var(--white); margin-bottom:1rem;">Change Existing Password</h4>
              <form onsubmit="changeUserPassword(); return false;">
                <div class="form-group">
                  <label class="form-label">Target Username</label>
                  <select id="change-user-name" class="form-input" required>
                    ${db.users.map(u => `<option value="${u.username}">${u.username}</option>`).join("")}
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">New Password</label>
                  <input type="password" id="change-user-pass" class="form-input" required>
                </div>
                <button type="submit" class="btn btn-primary" style="padding:0.5rem 1.2rem; font-size:0.85rem;">Update Password</button>
              </form>
            </div>
          </div>
        </div>
      `;
      break;
      
    case "reset":
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">System Settings</h2>
        <div style="background:var(--navy-light); border:1px solid var(--border); padding:2rem; border-radius:var(--radius-md); max-width:600px;">
          <h3 style="font-family:var(--font-serif); font-size:1.3rem; color:var(--white); margin-bottom:1rem;">Clear System Storage</h3>
          <p style="color:var(--text-secondary); margin-bottom:2rem; font-size:0.95rem;">Restoring system storage will reset NNSAT's database back to initial factory defaults, wiping out all custom edits, user modifications, and inbox submissions.</p>
          <button class="btn" style="background:var(--danger); color:var(--white);" onclick="resetToDefaults()">Reset Database to Defaults</button>
        </div>
      `;
      break;
  }
}

// Save copy operations
function saveGeneralCopy() {
  db.hero.title = document.getElementById("edit-hero-title").value;
  db.hero.subtitle = document.getElementById("edit-hero-sub").value;
  db.hero.image = document.getElementById("edit-hero-img").value;
  db.hero.badge = document.getElementById("edit-hero-badge").value;
  
  db.stats.officers = document.getElementById("edit-stat-off").value;
  db.stats.officersLabel = document.getElementById("edit-stat-off-label").value;
  db.stats.officersDesc = document.getElementById("edit-stat-off-desc").value;
  
  db.stats.ratings = document.getElementById("edit-stat-rat").value;
  db.stats.ratingsLabel = document.getElementById("edit-stat-rat-label").value;
  db.stats.ratingsDesc = document.getElementById("edit-stat-rat-desc").value;
  
  db.stats.systems = document.getElementById("edit-stat-sys").value;
  db.stats.systemsLabel = document.getElementById("edit-stat-sys-label").value;
  db.stats.systemsDesc = document.getElementById("edit-stat-sys-desc").value;
  
  db.commandant.name = document.getElementById("edit-comm-name").value;
  db.commandant.title = document.getElementById("edit-comm-title").value;
  db.commandant.image = document.getElementById("edit-comm-img").value;
  db.commandant.welcomeText = document.getElementById("edit-comm-welcome").value;
  db.about.history = document.getElementById("edit-about-history").value;
  db.about.mission = document.getElementById("edit-about-mission").value;
  db.about.vision = document.getElementById("edit-about-vision").value;
  
  db.contact.email = document.getElementById("edit-contact-email").value;
  db.contact.address = document.getElementById("edit-contact-address").value;
  db.contact.focTitle = document.getElementById("edit-contact-foc-title").value;
  db.contact.focText = document.getElementById("edit-contact-foc-text").value;
  
  saveDB();
  showToast("Copy settings saved successfully.", "success");
}

// Titles and Footers
function saveTitlesAndFooters() {
  db.headers.homeNewsTitle = document.getElementById("edit-hdr-homeNewsTitle").value;
  db.headers.homeNewsDesc = document.getElementById("edit-hdr-homeNewsDesc").value;
  db.headers.homeEventsTitle = document.getElementById("edit-hdr-homeEventsTitle").value;
  db.headers.homeEventsDesc = document.getElementById("edit-hdr-homeEventsDesc").value;
  db.headers.homeRequestTitle = document.getElementById("edit-hdr-homeRequestTitle").value;
  db.headers.homeRequestDesc = document.getElementById("edit-hdr-homeRequestDesc").value;

  db.headers.aboutTitle = document.getElementById("edit-hdr-aboutTitle").value;
  db.headers.aboutDesc = document.getElementById("edit-hdr-aboutDesc").value;
  db.headers.aboutHistoryTitle = document.getElementById("edit-hdr-aboutHistoryTitle").value;
  db.headers.aboutMissionTitle = document.getElementById("edit-hdr-aboutMissionTitle").value;
  db.headers.aboutVisionTitle = document.getElementById("edit-hdr-aboutVisionTitle").value;
  db.headers.aboutLeadershipTitle = document.getElementById("edit-hdr-aboutLeadershipTitle").value;
  db.headers.aboutFacilitiesTitle = document.getElementById("edit-hdr-aboutFacilitiesTitle").value;

  db.headers.academicsTitle = document.getElementById("edit-hdr-academicsTitle").value;
  db.headers.academicsDesc = document.getElementById("edit-hdr-academicsDesc").value;
  db.headers.academicsOfficersTitle = document.getElementById("edit-hdr-academicsOfficersTitle").value;
  db.headers.academicsRatingsTitle = document.getElementById("edit-hdr-academicsRatingsTitle").value;

  db.headers.eventsTitle = document.getElementById("edit-hdr-eventsTitle").value;
  db.headers.eventsDesc = document.getElementById("edit-hdr-eventsDesc").value;

  db.headers.newsTitle = document.getElementById("edit-hdr-newsTitle").value;
  db.headers.newsDesc = document.getElementById("edit-hdr-newsDesc").value;

  db.headers.galleryTitle = document.getElementById("edit-hdr-galleryTitle").value;
  db.headers.galleryDesc = document.getElementById("edit-hdr-galleryDesc").value;

  db.headers.elibraryTitle = document.getElementById("edit-hdr-elibraryTitle").value;
  db.headers.elibraryDesc = document.getElementById("edit-hdr-elibraryDesc").value;

  db.headers.contactTitle = document.getElementById("edit-hdr-contactTitle").value;
  db.headers.contactDesc = document.getElementById("edit-hdr-contactDesc").value;
  db.headers.contactFormTitle = document.getElementById("edit-hdr-contactFormTitle").value;
  db.headers.contactSidebarTitle = document.getElementById("edit-hdr-contactSidebarTitle").value;

  // New extended headers save logic
  db.headers.navHome = document.getElementById("edit-hdr-navHome").value;
  db.headers.navAbout = document.getElementById("edit-hdr-navAbout").value;
  db.headers.navAcademics = document.getElementById("edit-hdr-navAcademics").value;
  db.headers.navEvents = document.getElementById("edit-hdr-navEvents").value;
  db.headers.navNews = document.getElementById("edit-hdr-navNews").value;
  db.headers.navGallery = document.getElementById("edit-hdr-navGallery").value;
  db.headers.navELibrary = document.getElementById("edit-hdr-navELibrary").value;
  db.headers.navContact = document.getElementById("edit-hdr-navContact").value;
  
  db.headers.footHdrNav = document.getElementById("edit-hdr-footHdrNav").value;
  db.headers.footHdrContact = document.getElementById("edit-hdr-footHdrContact").value;
  
  db.headers.heroBtnExplore = document.getElementById("edit-hdr-heroBtnExplore").value;
  db.headers.heroBtnCourses = document.getElementById("edit-hdr-heroBtnCourses").value;
  
  db.headers.commSectTag = document.getElementById("edit-hdr-commSectTag").value;
  db.headers.commSectTitle = document.getElementById("edit-hdr-commSectTitle").value;
  
  db.headers.homeNewsTag = document.getElementById("edit-hdr-homeNewsTag").value;
  db.headers.homeNewsArchiveBtn = document.getElementById("edit-hdr-homeNewsArchiveBtn").value;
  db.headers.homeEventsTag = document.getElementById("edit-hdr-homeEventsTag").value;
  
  db.headers.aboutSectTag = document.getElementById("edit-hdr-aboutSectTag").value;
  db.headers.acadSectTag = document.getElementById("edit-hdr-acadSectTag").value;
  db.headers.eventsSectTag = document.getElementById("edit-hdr-eventsSectTag").value;
  
  db.headers.newsSectTag = document.getElementById("edit-hdr-newsSectTag").value;
  db.headers.gallerySectTag = document.getElementById("edit-hdr-gallerySectTag").value;
  db.headers.elibrarySectTag = document.getElementById("edit-hdr-elibrarySectTag").value;
  db.headers.contactSectTag = document.getElementById("edit-hdr-contactSectTag").value;

  db.footer.desc = document.getElementById("edit-footer-desc").value;
  db.footer.social = document.getElementById("edit-footer-social").value;

  saveDB();
  showToast("Titles and Footers saved successfully.", "success");
}

// Leadership CRUD Operations
function startEditLeader(index) {
  editingLeaderIndex = index;
  const leader = db.leadership[index];
  document.getElementById("add-leader-name").value = leader.name;
  document.getElementById("add-leader-role").value = leader.role;
  document.getElementById("add-leader-img").value = leader.image;
  
  document.getElementById("leader-form-title").innerText = "Edit Command Leader";
  document.getElementById("leader-form-submit-btn").innerText = "Save Leader Changes";
  document.getElementById("add-leader-name").scrollIntoView({ behavior: 'smooth' });
}

function saveLeaderForm() {
  const name = document.getElementById("add-leader-name").value;
  const role = document.getElementById("add-leader-role").value;
  const image = document.getElementById("add-leader-img").value;
  
  if (editingLeaderIndex !== null) {
    db.leadership[editingLeaderIndex] = { name, role, image };
    editingLeaderIndex = null;
    showToast("Leader profile updated successfully.", "success");
  } else {
    db.leadership.push({ name, role, image });
    showToast("New command leader added.", "success");
  }
  saveDB();
  loadAdminDashboard("leadership");
}

function deleteLeader(index) {
  if (confirm("Are you sure you want to remove this officer from the leadership directory?")) {
    db.leadership.splice(index, 1);
    saveDB();
    showToast("Officer removed.", "success");
    loadAdminDashboard("leadership");
  }
}

// Campus Facilities CRUD Operations
function startEditFacility(index) {
  editingFacilityId = index;
  const facility = db.facilities[index];
  document.getElementById("add-facility-title").value = facility.title;
  document.getElementById("add-facility-desc").value = facility.description;
  document.getElementById("add-facility-img").value = facility.image;
  
  document.getElementById("facility-form-title").innerText = "Edit Campus Facility";
  document.getElementById("facility-form-submit-btn").innerText = "Save Facility Changes";
  document.getElementById("add-facility-title").scrollIntoView({ behavior: 'smooth' });
}

function saveFacilityForm() {
  const title = document.getElementById("add-facility-title").value;
  const description = document.getElementById("add-facility-desc").value;
  const image = document.getElementById("add-facility-img").value;
  
  if (editingFacilityId !== null) {
    const oldFacility = db.facilities[editingFacilityId];
    db.facilities[editingFacilityId] = { id: oldFacility.id, title, description, image };
    editingFacilityId = null;
    showToast("Facility updated successfully.", "success");
  } else {
    // Generate slug from title
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4);
    db.facilities.push({ id: slug, title, description, image });
    showToast("Campus facility added successfully.", "success");
  }
  saveDB();
  loadAdminDashboard("facilities");
}

function deleteFacility(index) {
  if (confirm("Are you sure you want to delete this facility from the campus directory?")) {
    db.facilities.splice(index, 1);
    saveDB();
    showToast("Facility removed.", "success");
    loadAdminDashboard("facilities");
  }
}

function startEditNews(id) {
  editingNewsId = id;
  const article = db.news.find(n => n.id === id);
  if (!article) return;
  
  document.getElementById("add-news-title").value = article.title;
  document.getElementById("add-news-date").value = article.date;
  document.getElementById("add-news-cat").value = article.category;
  document.getElementById("add-news-img").value = article.image;
  document.getElementById("add-news-excerpt").value = article.excerpt;
  document.getElementById("add-news-content").value = article.content;
  
  document.getElementById("news-form-title").innerText = "Edit News Article";
  document.getElementById("news-form-submit-btn").innerText = "Save Article Changes";
  document.getElementById("add-news-title").scrollIntoView({ behavior: 'smooth' });
}

function addNewsArticle() {
  const title = document.getElementById("add-news-title").value;
  const date = document.getElementById("add-news-date").value;
  const category = document.getElementById("add-news-cat").value;
  const image = document.getElementById("add-news-img").value;
  const excerpt = document.getElementById("add-news-excerpt").value;
  const content = document.getElementById("add-news-content").value;
  
  if (editingNewsId !== null) {
    db.news = db.news.map(n => {
      if (n.id === editingNewsId) {
        return { ...n, title, date, category, image, excerpt, content };
      }
      return n;
    });
    editingNewsId = null;
    showToast("News article updated successfully.", "success");
  } else {
    const nextId = db.news.length > 0 ? Math.max(...db.news.map(n => n.id)) + 1 : 1;
    const newArticle = { id: nextId, title, date, category, image, excerpt, content };
    db.news.push(newArticle);
    showToast("Article published successfully.", "success");
  }
  
  saveDB();
  loadAdminDashboard("news");
}

function deleteNews(id) {
  if (confirm("Are you sure you want to delete this news article?")) {
    db.news = db.news.filter(n => n.id !== id);
    saveDB();
    showToast("Article deleted.", "success");
    loadAdminDashboard("news");
  }
}

function startEditGalleryItem(index) {
  editingGalleryIndex = index;
  const item = db.gallery[index];
  document.getElementById("add-gal-title").value = item.title;
  document.getElementById("add-gal-cat").value = item.category;
  document.getElementById("add-gal-img").value = item.image;
  
  document.getElementById("gal-form-title").innerText = "Edit Gallery Photo";
  document.getElementById("gal-form-submit-btn").innerText = "Save Photo Changes";
  document.getElementById("add-gal-title").scrollIntoView({ behavior: 'smooth' });
}

function addGalleryItem() {
  const title = document.getElementById("add-gal-title").value;
  const category = document.getElementById("add-gal-cat").value;
  const image = document.getElementById("add-gal-img").value;
  
  if (editingGalleryIndex !== null) {
    db.gallery[editingGalleryIndex] = { title, category, image };
    editingGalleryIndex = null;
    showToast("Gallery photo updated successfully.", "success");
  } else {
    db.gallery.push({ title, category, image });
    showToast("Gallery photo added successfully.", "success");
  }
  saveDB();
  loadAdminDashboard("gallery");
}

function deleteGalleryItem(index) {
  if (confirm("Remove this image from the gallery?")) {
    db.gallery.splice(index, 1);
    saveDB();
    showToast("Gallery photo removed.", "success");
    loadAdminDashboard("gallery");
  }
}

// Message operations
function deleteMessage(id) {
  if (confirm("Permanently delete this message from registry inbox?")) {
    db.messages = db.messages.filter(m => m.id !== id);
    saveDB();
    showToast("Message deleted.", "success");
    loadAdminDashboard("messages");
  }
}

// User accounts operations
function createNewUser() {
  const uName = document.getElementById("add-user-name").value.trim().toLowerCase();
  const uPass = document.getElementById("add-user-pass").value;
  
  if (!uName || !uPass) return;
  
  const alreadyExists = db.users.some(u => u.username.toLowerCase() === uName);
  if (alreadyExists) {
    showToast("Username already exists in the registry.", "danger");
    return;
  }
  
  db.users.push({ username: uName, password: uPass });
  saveDB();
  showToast(`Operator user account '${uName}' created successfully.`, "success");
  
  loadAdminDashboard("accounts");
}

function changeUserPassword() {
  const uName = document.getElementById("change-user-name").value;
  const uPass = document.getElementById("change-user-pass").value;
  
  if (!uName || !uPass) return;
  
  db.users = db.users.map(u => {
    if (u.username === uName) {
      return { ...u, password: uPass };
    }
    return u;
  });
  
  saveDB();
  showToast(`Password updated successfully for account '${uName}'.`, "success");
  
  // If editing self, logout to enforce login with new password
  if (uName === sessionUser) {
    logoutAdmin();
  } else {
    loadAdminDashboard("accounts");
  }
}

function deleteUser(username) {
  if (username === 'admin') {
    showToast("Cannot delete system primary administrator account.", "danger");
    return;
  }
  if (username === sessionUser) {
    showToast("Cannot self-terminate active logged-in user account.", "danger");
    return;
  }
  if (confirm(`Are you sure you want to permanently delete user account '${username}'?`)) {
    db.users = db.users.filter(u => u.username !== username);
    saveDB();
    showToast(`Account '${username}' deleted.`, "success");
    loadAdminDashboard("accounts");
  }
}

// Notification alerts
function showToast(message, type = "success") {
  const toast = document.getElementById("toast-alert");
  toast.className = `alert-toast alert-${type} show`;
  toast.querySelector(".toast-message").innerText = message;
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Academics Operations
function startEditCourse(index) {
  editingCourseIndex = index;
  const course = db.courses[index];
  document.getElementById("add-course-title").value = course.title;
  document.getElementById("add-course-cat").value = course.category;
  document.getElementById("add-course-duration").value = course.duration;
  document.getElementById("add-course-desc").value = course.description;
  
  document.getElementById("course-form-title").innerText = "Edit Training Course";
  document.getElementById("course-form-submit-btn").innerText = "Save Course Changes";
  document.getElementById("add-course-title").scrollIntoView({ behavior: 'smooth' });
}

function addCourse() {
  const title = document.getElementById("add-course-title").value;
  const category = document.getElementById("add-course-cat").value;
  const duration = document.getElementById("add-course-duration").value;
  const description = document.getElementById("add-course-desc").value;
  
  if (editingCourseIndex !== null) {
    db.courses[editingCourseIndex] = { title, category, duration, description };
    editingCourseIndex = null;
    showToast("Course program updated successfully.", "success");
  } else {
    db.courses.push({ title, category, duration, description });
    showToast("Course program added successfully.", "success");
  }
  saveDB();
  loadAdminDashboard("academics");
}

function deleteCourse(index) {
  if (confirm("Are you sure you want to delete this course program?")) {
    db.courses.splice(index, 1);
    saveDB();
    showToast("Course program deleted.", "success");
    loadAdminDashboard("academics");
  }
}

// Events Operations
function startEditEvent(id) {
  editingEventId = id;
  const evt = db.events.find(e => e.id === id);
  if (!evt) return;
  document.getElementById("add-event-title").value = evt.title;
  document.getElementById("add-event-date").value = evt.date;
  document.getElementById("add-event-status").value = evt.status;
  document.getElementById("add-event-desc").value = evt.description;
  
  document.getElementById("event-form-title").innerText = "Edit Calendar Event";
  document.getElementById("event-form-submit-btn").innerText = "Save Event Changes";
  document.getElementById("add-event-title").scrollIntoView({ behavior: 'smooth' });
}

function addEvent() {
  const title = document.getElementById("add-event-title").value;
  const date = document.getElementById("add-event-date").value;
  const status = document.getElementById("add-event-status").value;
  const description = document.getElementById("add-event-desc").value;
  
  if (editingEventId !== null) {
    db.events = db.events.map(e => {
      if (e.id === editingEventId) {
        return { ...e, date, title, status, description };
      }
      return e;
    });
    editingEventId = null;
    showToast("Calendar event updated successfully.", "success");
  } else {
    const nextId = db.events.length > 0 ? Math.max(...db.events.map(e => e.id)) + 1 : 1;
    db.events.push({ id: nextId, date, title, status, description });
    showToast("Calendar event published.", "success");
  }
  saveDB();
  loadAdminDashboard("events");
}

function deleteEvent(id) {
  if (confirm("Are you sure you want to cancel and delete this event?")) {
    db.events = db.events.filter(e => e.id !== id);
    saveDB();
    showToast("Calendar event deleted.", "success");
    loadAdminDashboard("events");
  }
}

// E-Library Operations
function startEditELibraryResource(index) {
  editingLibraryIndex = index;
  const item = db.elibrary[index];
  document.getElementById("add-lib-title").value = item.title;
  document.getElementById("add-lib-cat").value = item.category;
  document.getElementById("add-lib-url").value = item.url;
  document.getElementById("add-lib-desc").value = item.description;
  
  document.getElementById("lib-form-title").innerText = "Edit E-Library Reference";
  document.getElementById("lib-form-submit-btn").innerText = "Save Reference Changes";
  document.getElementById("add-lib-title").scrollIntoView({ behavior: 'smooth' });
}

function addELibraryResource() {
  const title = document.getElementById("add-lib-title").value;
  const category = document.getElementById("add-lib-cat").value;
  const url = document.getElementById("add-lib-url").value;
  const description = document.getElementById("add-lib-desc").value;
  
  if (editingLibraryIndex !== null) {
    db.elibrary[editingLibraryIndex] = { title, category, description, url };
    editingLibraryIndex = null;
    showToast("E-Library resource updated successfully.", "success");
  } else {
    db.elibrary.push({ title, category, description, url });
    showToast("E-Library resource added successfully.", "success");
  }
  saveDB();
  loadAdminDashboard("elibrary");
}

function deleteELibraryResource(index) {
  if (confirm("Remove this reference resource from E-Library?")) {
    db.elibrary.splice(index, 1);
    saveDB();
    showToast("E-Library resource deleted.", "success");
    loadAdminDashboard("elibrary");
  }
}

// Bootstrap Init
window.addEventListener("DOMContentLoaded", () => {
  initDB();
  checkSession();
});
