// app.js - Main Application Engine for "The Wonders of Kalyan"

// ==========================================================================
// 1. STORYBOOK PAGES DATA & GLOSSARY DATA
// ==========================================================================

const storybookPages = [
  {
    pageNumber: 1,
    level: 1,
    levelTitle: "LEVEL 1: SPICE ROUTE",
    title: "THE SALTY DEEP-WATER PORT OF APARANTA",
    story: "Welcome to ancient Aparanta! Long ago, Kalyan was a marvelous deep-water harbor where three rushing rivers—the Ulhas, Kalu, and Bhatsa—met the salty sea. Aarya, Veer, and Nisha stand on a wooden pier, watching giant merchant ships glide into the sheltered port. The air smells of rich cloves, sweet dates, and fresh cotton cloths. \"Look how deep the blue water is!\" cries Aarya, holding up a tiny, hand-carved clay pot. Let's play the harbor game! Help the captain steer the massive Roman merchant ships safely through the river currents. Avoid the rocks and guide them to the dock so they can trade their shiny Mediterranean pearls for soft local muslin!",
    didYouKnow: "In ancient times, Kalyan’s natural deep-water harbor made it a famous international port known to Greek and Roman sailors as Calliena. It exported ironware, copperware, and cotton textiles to distant kingdoms in exchange for cloves and dates.",
    imagePath: "images/page1_port.png",
    gameTitle: "Sort the Cargo!",
    gameType: "cargo_sorting"
  },
  {
    pageNumber: 2,
    level: 1,
    levelTitle: "LEVEL 1: SPICE ROUTE",
    title: "THE SECRETS OF BAMBOO MANNA",
    story: "Squeak, squeak! The children follow a friendly Greek merchant through a forest of tall, green bamboo. They are searching for tabashir, a magical, sweet medicine hidden inside the hollow bamboo joints. \"I found some bamboo manna!\" laughs Veer, pointing his wooden toy sword at a shiny stem. But watch out! An ancient ruler named Sandanes has sent guards to redirect the spice ships to another port! To help our friends, tap the bamboo stems to collect the medicine, and trace the cave inscriptions to help the wealthy merchant guilds donate coins to carve the beautiful Lonad and Kanheri caves. Can you help the monks finish their peaceful stone homes?",
    didYouKnow: "Kalyan was famous for exporting tabashir, a rare bamboo medicine documented by ancient Greek writers. The rich merchant guilds of Calliena used their trade profits to fund the famous Buddhist caves at Lonad and Kanheri.",
    imagePath: "images/page2_bamboo.png",
    gameTitle: "Harvest the Tabashir!",
    gameType: "bamboo_harvest"
  },
  {
    pageNumber: 3,
    level: 2,
    levelTitle: "LEVEL 2: MEDIEVAL TEMPLES",
    title: "THE TEMPLE BUILT IN A SINGLE NIGHT",
    story: "Step softly! Aarya, Veer, and Nisha stand before the magnificent stone gates of the Ambarnath Temple. The walls are covered in beautiful carvings of dancing figures, musicians, and friendly forest animals. \"The roof is wide open to the stars!\" whispers Nisha, twirling happily in her pink salwar kameez. Local stories say the legendary Pandava brothers built this entire stone temple in just a single night, running out of time before they could finish the roof! Let's help King Chhittaraja finish the job. In this 3D puzzle game, slide the heavy, carved stone spires of the temple into place, and guide the kids down the steps into the cool, underground sanctum.",
    didYouKnow: "In 1060 CE, King Chhittaraja of the Shilahara dynasty built the Ambarnath Mandir in a special architectural style featuring an underground sanctum. A local legend tells that the Pandavas constructed the temple in a single night.",
    imagePath: "images/page3_temple.png",
    gameTitle: "Reconstruct the Spire!",
    gameType: "temple_jigsaw"
  },
  {
    pageNumber: 4,
    level: 2,
    levelTitle: "LEVEL 2: MEDIEVAL TEMPLES",
    title: "THE TEN THOUSAND HORSES",
    story: "Neigh! The dusty streets are filled with the sound of thousands of galloping hooves! Long ago, Kalyan imported thousands of strong warhorses from Arabia for the regional kings. \"Look at that giant stone wall!\" shouts Veer, pretending to ride a grand stallion. To protect the busy city, the Mughal commander Matabar Khan built a massive stone wall with eleven tall watchtowers. But oh no! The local potters and fisherfolk are stuck outside the big gates because they cannot pay the entry tax. Let's help them! Solve the matching game to help the potters carry their clay pots safely through the gates, and lead the thirsty warhorses to drink from the sparkling Kala Talao lake.",
    didYouKnow: "During the Yadava dynasty, Arab geographers wrote that Kalyan imported up to 10,000 horses at a time. Later, a Mughal commander built a 1.95-kilometer stone wall around the city, requiring working-class residents to pay a special tax to enter.",
    imagePath: "images/page4_wall.png",
    gameTitle: "Help the Craftsmen Enter!",
    gameType: "gate_match"
  },
  {
    pageNumber: 5,
    level: 3,
    levelTitle: "LEVEL 3: SHIPS & SETTLERS",
    title: "THE FIRE OF DUDHANAKA",
    story: "A gentle breeze carries the scent of sandalwood and fresh-cut timber. Aarya, Veer, and Nisha visit the historic area of Dudhanaka, where Parsi families settled long ago. These creative settlers thrived as timber merchants, building a beautiful Fire Temple to keep their sacred traditions alive. \"The wood piles are stacked as high as houses!\" gasps Aarya, looking at the logs. Let's help the merchants! In this math game, count and stack the miniature timber logs to help the Parsi families organize their shipyards. Build a safe harbor where families from all different backgrounds—Christian, Muslim, Parsi, and Hindu—can live peacefully side-by-side. Drag the houses to build a happy, united neighborhood!",
    didYouKnow: "In 1533, Parsi refugees moved to Kalyan to escape religious conversion, settling in Dudhanaka. They became highly successful timber merchants and built their historic Fire Temple in 1788 alongside established Christian, Muslim, and Hindu communities.",
    imagePath: "images/page5_parsi.png",
    gameTitle: "Stack the Timber!",
    gameType: "timber_stack"
  },
  {
    pageNumber: 6,
    level: 3,
    levelTitle: "LEVEL 3: SHIPS & SETTLERS",
    title: "THE STITCHED SHIPS OF RETI BUNDER",
    story: "Tap, tap, stitch! Down at Reti Bunder, local builders are using a magical technique to build sturdy wooden ships. Instead of using heavy iron nails, they stitch the thick timber planks together using strong ropes made from coconut fibers! \"It’s like sewing a giant wooden dress!\" laughs Nisha, pretending to pull a long thread. Help the shipwrights build a strong trading ship to protect the coast! Tap your screen to guide the giant golden needle through the planks, weaving the coir rope tight. Make sure the joints are strong enough to sail past the Portuguese fort at Ghodbunder. Your stitched ship is ready to sail!",
    didYouKnow: "Local shipbuilders in Kalyan used traditional Konkan techniques to stitch timber ships together using coir (coconut fiber) rope. This flexible design helped ships survive rough ocean waves much better than ships held together by stiff iron nails.",
    imagePath: "images/page6_shipyard.png",
    gameTitle: "Stitch the Ship!",
    gameType: "ship_stitch"
  },
  {
    pageNumber: 7,
    level: 4,
    levelTitle: "LEVEL 4: SWARAJYA NAVY",
    title: "THE SECRET OF DURGADI HILL",
    story: "Climb up Durgadi Hill! In 1657, the brave leader Chhatrapati Shivaji Maharaj came to Kalyan. While digging the foundations for a new fort to protect the land, the workers gasped as they uncovered a chest of gold coins hidden in the dirt! \"A secret treasure!\" cheers Veer, waving his tiny saffron flag in excitement. Shivaji Maharaj believed the treasure was a gift from the goddess Durga, so he built a beautiful temple inside the fort. In this adventure, help Veer dig for the hidden treasure under Durgadi Fort! Swipe away the soft dirt, collect the gold coins, and help build the strong stone walls of the fort.",
    didYouKnow: "Durgadi Fort was named after a hidden treasury discovered while digging its foundation. Many historians believe Chhatrapati Shivaji Maharaj built the fort's wooden Durga Devi temple to honor the goddess who blessed their search.",
    imagePath: "images/page7_maratha.png",
    gameTitle: "Uncover the Hidden Gold!",
    gameType: "durgadi_dig"
  },
  {
    pageNumber: 8,
    level: 4,
    levelTitle: "LEVEL 4: SWARAJYA NAVY",
    title: "THE SHIPWRIGHTS' FIRST FLEET",
    story: "Splash! The very first ships of the Maratha Navy are launched into the Kalyan creek! Shivaji Maharaj hired clever Portuguese shipwrights to teach the local artisans how to build fast war vessels called gurabs and gallivats. \"Look at those sails catch the wind!\" gasps Aarya, looking through a small cardboard telescope. But wait! Siddi and Mughal boats are approaching! Let's play the naval defense game. Position your twenty Maratha warships to guard the harbor, and help Peshwa Governor Ramaji Mahadev coordinate the ships from his headquarters at Subhedarwada. Keep the port safe and celebrate the birth of India's first navy!",
    didYouKnow: "Shivaji Maharaj established the first Maratha Navy shipyard in Kalyan, hiring Portuguese shipwrights to help build a fleet of 20 warships. Later, Peshwa Governor Ramaji Mahadev Biwalkar managed regional trade from his headquarters at Subhedarwada in Kalyan.",
    imagePath: "images/page8_navy.png",
    gameTitle: "Anchor the Fleet!",
    gameType: "navy_defense"
  },
  {
    pageNumber: 9,
    level: 5,
    levelTitle: "LEVEL 5: THE IRON HORSE",
    title: "THE FIRST TRAIN AND THE TAX REBELLION",
    story: "Chugga-chugga, choo-choo! In 1853, history was made as India’s first train puffed from Bori Bunder to Thane, soon extending directly to Kalyan Junction! The British took down the stone walls of Durgadi Fort to build strong piers for the iron tracks. \"The train is so loud and fast!\" laughs Nisha, chugging along the path. But when the British introduced unfair taxes, the brave citizens of Kalyan rebelled, publicly discarding the tax forms in protest! Ramji Bhangare led the Koli and Bhil communities to stand up for their rights. Help lay the tracks! Solve the maze game to connect Kalyan Junction to the main railway line!",
    didYouKnow: "In 1853, India's first passenger train line reached Kalyan, using stones from dismantled forts to build the railway piers. In the 1860s, local residents bravely protested British rule by publicly throwing away newly introduced income tax forms.",
    imagePath: "images/page9_train.png",
    gameTitle: "Lay the Tracks Maze!",
    gameType: "train_maze"
  },
  {
    pageNumber: 10,
    level: 5,
    levelTitle: "LEVEL 5: THE IRON HORSE",
    title: "DOCTORS, LEADERS, AND WINDOW TREATS",
    story: "Kalyan is home to incredible heroes! Here, young Anandibai Joshi grew up to become India’s very first female doctor. Later, Lokmanya Tilak organized the first public Ganesh festival in Kalyan to bring people together in unity. \"I want to help people too!\" says Nisha, looking at Dr. Anandibai's medical book. And after a long day of learning, it is time for a snack! The Vaze family is opening a small wooden window to serve the very first Khidki Vada Pav to rushing commuters. Help serve the treats! Match the hot, spicy potato sliders to the hungry train travelers before the whistle blows. Yum!",
    didYouKnow: "Kalyan is the birthplace of Dr. Anandibai Joshi, who became India’s first female Western doctor in 1886. Years later, in 1968, the famous \"Khidki Vada Pav\" was founded in Kalyan, selling delicious snacks through a window to busy commuters.",
    imagePath: "images/page10_railway.png",
    gameTitle: "Vada Pav Master!",
    gameType: "vada_pav_serve"
  },
  {
    pageNumber: 11,
    level: 6,
    levelTitle: "LEVEL 6: SMART CITY",
    title: "CLEANING UP ADHARWADI WITH AI",
    story: "Welcome to the super-smart Kalyan of today! The city now uses high-tech magic, like an AI-driven command center with smart traffic lights and cameras to keep everyone safe. \"Look at the giant mechanical digger!\" shouts Veer, pointing at a clean, green park. For many years, the old Adharwadi dumping ground was filled with towers of trash. Today, smart biomining machines are turning that old waste into useful fuel to power homes! Let's help clean up the environment! Play the sorting game: drag the plastic bottles and paper boxes into the smart recycling bins to help Aarya and Veer clean up the park.",
    didYouKnow: "Kalyan has permanently closed the polluted Adharwadi dumping ground. A massive biomining project is currently converting 9 lakh metric tonnes of old waste into clean, Refuse-Derived Fuel to help protect the environment.",
    imagePath: "images/page11_recycling.png",
    gameTitle: "Smart Sorting Machine!",
    gameType: "smart_sorting"
  },
  {
    pageNumber: 12,
    level: 6,
    levelTitle: "LEVEL 6: SMART CITY",
    title: "THE METRO EXPRESS TO THE FUTURE",
    story: "Whoosh! The orange Metro Line 5 train zooms past on high, elevated tracks! Modern Kalyan is building massive roads, freeways through Parsik Hill, and the giant Kalyan Growth Centre to create thousands of fun new jobs. \"We are flying above the traffic!\" cheers Nisha, looking out the window of the sleek, orange train. Let's drive the future express! Guide the orange metro train through the special underground heritage tunnel in Bhiwandi, taking care not to disturb the ancient monuments above. Cross the new Mankoli-Motagaon Bridge in record time and park at the smart terminal. The future of Kalyan is bright, and you are the driver!",
    didYouKnow: "Kalyan is building a massive modern transit web, including the 33.30-kilometer Kalyan Ring Road and Metro Line 5, which features a specialized 5-kilometer underground tunnel to protect Bhiwandi's heritage structures.",
    imagePath: "images/page12_smartcity.png",
    gameTitle: "Drive the Orange Metro!",
    gameType: "metro_simulator"
  }
];

const glossaryItems = [
  { term: "Tabashir", definition: "A sweet, sticky medicine made from the inside of bamboo plants, highly prized by ancient traders." },
  { term: "Guilds", definition: "Friendly groups of ancient merchants who worked together and pooled their money to fund caves and temples." },
  { term: "Swarajya", definition: "A word meaning 'self-rule' or freedom, used by the Marathas to describe their independent kingdom." },
  { term: "Coir", definition: "A very tough rope made from the hairy outer shell of coconuts, used to stitch ships together." },
  { term: "Biomining", definition: "A clever, eco-friendly way of using natural helpers to clean up and clear away old city trash." },
  { term: "Vada Pav", definition: "A delicious local snack made of a spicy potato patty tucked inside a soft bread bun." },
  { term: "Gurabs & Gallivats", definition: "Fast, sturdy wooden warships built by the Maratha navy to protect the coastline." },
  { term: "Growth Centre", definition: "A large, master-planned area built with smart offices, parks, and schools where people can work and live." }
];

// ==========================================================================
// 2. STATE MANAGER & GLOBALS
// ==========================================================================

let currentPageIndex = 0;
let isMusicOn = false;
let isSoundOn = true;
let isSpeaking = false;
let voiceSettingsOpen = false;

let speechSynth = window.speechSynthesis;
let currentUtterances = []; // Queue list for multi-voice conversation sentences
let voiceFemale = null; // Sophisticated female Indian storyteller (Aarya / Nisha)
let voiceMale = null; // Sophisticated male Indian storyteller (Veer / Narrator)
let currentWordIndex = 0;
let storyWords = [];

// ==========================================================================
// 3. UI INITIALIZER
// ==========================================================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

function initApp() {
  setupGlobalEvents();
  renderGlossary();
  setupLevelDots();
  loadSpeechVoices();
  setupSwipeGestures();
}

function setupGlobalEvents() {
  // Start the Adventure button click transition
  const btnStart = document.getElementById("btn-start-reading");
  if (btnStart) {
    btnStart.addEventListener("click", startStorybook);
  }

  // Navigation Logo click returns to cover
  const btnLogo = document.getElementById("btn-home-logo");
  if (btnLogo) {
    btnLogo.addEventListener("click", () => {
      stopNarration();
      showScreen("screen-cover");
    });
  }

  // Sound toggles
  const btnMusic = document.getElementById("btn-toggle-music");
  if (btnMusic) {
    btnMusic.addEventListener("click", () => {
      isMusicOn = !isMusicOn;
      btnMusic.classList.toggle("active", isMusicOn);
      if (isMusicOn) {
        if (window.storyAudio) window.storyAudio.startBackgroundMusic();
        btnMusic.innerText = "🎶";
      } else {
        if (window.storyAudio) window.storyAudio.stopBackgroundMusic();
        btnMusic.innerText = "🎵";
      }
    });
  }

  const btnSound = document.getElementById("btn-toggle-sound");
  if (btnSound) {
    btnSound.addEventListener("click", () => {
      isSoundOn = !isSoundOn;
      btnSound.classList.toggle("active", !isSoundOn);
      if (window.storyAudio) window.storyAudio.muted = !isSoundOn;
      btnSound.innerText = isSoundOn ? "🔊" : "🔇";
    });
  }

  const btnSpeech = document.getElementById("btn-toggle-speech-panel");
  if (btnSpeech) {
    btnSpeech.addEventListener("click", () => {
      const select = document.getElementById("select-speech-voice");
      if (select) {
        voiceSettingsOpen = !voiceSettingsOpen;
        select.style.display = voiceSettingsOpen ? "inline-block" : "none";
      }
      btnSpeech.classList.toggle("active", voiceSettingsOpen);
    });
  }

  // Narration button on right page
  const btnNarrate = document.getElementById("btn-narrate-page");
  if (btnNarrate) {
    btnNarrate.addEventListener("click", toggleNarration);
  }

  // Scroll Indicator button click/touch scrolls down to the mini-game
  const scrollIndicator = document.getElementById("scroll-indicator");
  if (scrollIndicator) {
    let scrollTriggered = false;
    const triggerScroll = (e) => {
      // Prevent browser default behavior and double-firing from click emulation
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();

      if (scrollTriggered) return;
      scrollTriggered = true;
      setTimeout(() => { scrollTriggered = false; }, 1000); // 1s cooldown

      const storyPage = document.querySelector(".story-page");
      if (storyPage) {
        // Try smooth scrolling, fallback to instant scroll if smooth is unsupported/buggy on mobile WebView
        try {
          storyPage.scrollTo({
            top: storyPage.scrollHeight,
            behavior: "smooth"
          });
        } catch (err) {
          storyPage.scrollTop = storyPage.scrollHeight;
        }
      }
    };

    // Listen to touchstart for instant response on mobile, fallback to click for desktop
    scrollIndicator.addEventListener("touchstart", triggerScroll, { passive: false });
    scrollIndicator.addEventListener("click", triggerScroll);
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    const screenReader = document.getElementById("screen-reader");
    if (screenReader && screenReader.classList.contains("active")) {
      if (e.key === "ArrowLeft") prevPage();
      if (e.key === "ArrowRight") nextPage();
    }
  });
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(scr => scr.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

function toggleDrawer(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle("active");
    if (isSoundOn) window.storyAudio.playCorrect();
  }
}

// Render glossary accordions
function renderGlossary() {
  const container = document.getElementById("glossary-accordion-container");
  container.innerHTML = "";
  glossaryItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "accordion-item";
    div.id = `glossary-item-${index}`;
    div.innerHTML = `
      <div class="accordion-title" onclick="toggleAccordion('glossary-item-${index}')">
        <span>${item.term}</span>
      </div>
      <div class="accordion-content">
        <p>${item.definition}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

function toggleAccordion(id) {
  const el = document.getElementById(id);
  const wasActive = el.classList.contains("active");
  document.querySelectorAll(".accordion-item").forEach(item => item.classList.remove("active"));
  if (!wasActive) el.classList.add("active");
  if (isSoundOn) window.storyAudio.playCorrect();
}

// Setup navigation dots for 12 pages
function setupLevelDots() {
  const container = document.getElementById("dots-navigator");
  container.innerHTML = "";
  storybookPages.forEach((page, idx) => {
    const dot = document.createElement("div");
    dot.className = `level-dot ${idx === 0 ? 'active' : ''}`;
    dot.id = `nav-dot-${idx}`;
    dot.title = page.title;
    dot.onclick = () => {
      stopNarration();
      goToPage(idx);
    };
    container.appendChild(dot);
  });
}

// ==========================================================================
// 4. STORY READER LOGIC & SPEECH ENGINE
// ==========================================================================

function startStorybook() {
  showScreen("screen-reader");
  goToPage(0);
}

function goToPage(index) {
  if (index < 0 || index >= storybookPages.length) return;
  currentPageIndex = index;

  const page = storybookPages[currentPageIndex];

  // Update text blocks
  const elPageNum = document.getElementById("reader-page-number");
  if (elPageNum) elPageNum.innerText = `PAGE ${page.pageNumber}`;
  
  const elLevelBadge = document.getElementById("reader-level-badge");
  if (elLevelBadge) elLevelBadge.innerText = page.levelTitle;
  
  const elPlaqueText = document.getElementById("reader-plaque-text");
  if (elPlaqueText) elPlaqueText.innerText = page.title;
  
  const elFactContent = document.getElementById("reader-fact-content");
  if (elFactContent) elFactContent.innerText = page.didYouKnow;
  
  const elIllustration = document.getElementById("reader-illustration");
  if (elIllustration) elIllustration.src = page.imagePath;

  // Split story into spans for read-aloud word highlighting
  const storyBox = document.getElementById("reader-story-box");
  if (storyBox) {
    storyBox.innerHTML = "";
    storyWords = page.story.split(" ");
    storyWords.forEach((word, idx) => {
      const span = document.createElement("span");
      span.className = "word-span";
      span.id = `word-${idx}`;
      span.innerText = word;
      storyBox.appendChild(span);
    });
  }

  // Setup navigation state buttons
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === storybookPages.length - 1;

  const btnPrev = document.getElementById("btn-prev-page");
  if (btnPrev) btnPrev.disabled = isFirstPage;
  
  const btnNext = document.getElementById("btn-next-page");
  if (btnNext) btnNext.disabled = isLastPage;

  const floatPrev = document.getElementById("btn-float-prev");
  const floatNext = document.getElementById("btn-float-next");
  if (floatPrev) floatPrev.disabled = isFirstPage;
  if (floatNext) floatNext.disabled = isLastPage;

  // Update dots navigator
  document.querySelectorAll(".level-dot").forEach(dot => dot.classList.remove("active"));
  const activeDot = document.getElementById(`nav-dot-${currentPageIndex}`);
  if (activeDot) activeDot.classList.add("active");

  // Load interactive game frame
  loadMiniGame(page.gameType);

  // Show signature only on the last page (Page 12, index 11)
  const readerSig = document.getElementById("reader-signature");
  if (readerSig) {
    const isLastPage = currentPageIndex === storybookPages.length - 1;
    readerSig.style.display = isLastPage ? "flex" : "none";
  }

  // Reset scroll of story card to top on page flip & setup dynamic scroll helper
  const storyPage = document.querySelector(".story-page");
  if (storyPage) {
    storyPage.scrollTop = 0;
    
    const scrollIndicator = document.getElementById("scroll-indicator");
    if (scrollIndicator) {
      scrollIndicator.style.opacity = "1";
      setTimeout(() => {
        const isScrollable = storyPage.scrollHeight > storyPage.clientHeight + 10;
        scrollIndicator.style.display = isScrollable ? "flex" : "none";
      }, 100);

      storyPage.onscroll = () => {
        if (storyPage.scrollTop > 30) {
          scrollIndicator.style.opacity = "0";
          setTimeout(() => {
            if (storyPage.scrollTop > 30) scrollIndicator.style.display = "none";
          }, 300);
        } else {
          const isScrollable = storyPage.scrollHeight > storyPage.clientHeight + 10;
          if (isScrollable) {
            scrollIndicator.style.display = "flex";
            scrollIndicator.style.opacity = "1";
          }
        }
      };
    }
  }

  // Remove next button pulsing from previous pages
  if (btnNext) btnNext.classList.remove("pulse-attention");
  if (floatNext) floatNext.classList.remove("pulse-attention");

  // Play normal paging page sound
  if (isSoundOn) window.storyAudio.playPageFlip();
}

function prevPage() {
  stopNarration();
  if (currentPageIndex > 0) goToPage(currentPageIndex - 1);
}

function nextPage() {
  stopNarration();
  if (currentPageIndex < storybookPages.length - 1) goToPage(currentPageIndex + 1);
}

// Speech TTS engine with dynamic boundary listener
function loadSpeechVoices() {
  if (!speechSynth || typeof speechSynth.getVoices !== "function") return;
  const select = document.getElementById("select-speech-voice");
  if (!select) return;
  
  const voicesChanged = () => {
    try {
      const voices = speechSynth.getVoices();
      if (!voices || voices.length === 0) return;
      select.innerHTML = "";
      
      // 1. Identify the most sophisticated Indian English female & male voices
      let bestFemaleScore = -1;
      let bestMaleScore = -1;
      
      voices.forEach(voice => {
        if (voice && voice.lang) {
          const langLower = voice.lang.toLowerCase();
          const nameLower = voice.name.toLowerCase();
          
          if (langLower.includes("en-in") || langLower.includes("en_in") || nameLower.includes("india")) {
            // Identify gender based on typical system voice naming conventions
            const isMaleName = nameLower.includes("prabhat") || nameLower.includes("ravi") || nameLower.includes("male");
            
            let score = 0;
            if (nameLower.includes("neerja")) score += 100;
            if (nameLower.includes("prabhat")) score += 100;
            if (nameLower.includes("online")) score += 80;
            if (nameLower.includes("natural")) score += 70;
            if (nameLower.includes("google")) score += 50;
            if (nameLower.includes("ravi")) score += 40;
            if (nameLower.includes("heera")) score += 40;

            if (isMaleName) {
              if (score > bestMaleScore) {
                bestMaleScore = score;
                voiceMale = voice;
              }
            } else {
              if (score > bestFemaleScore) {
                bestFemaleScore = score;
                voiceFemale = voice;
              }
            }
          }
        }
      });
      
      // Fallback cross-assignments if one gender is missing in local Indian voices
      if (!voiceFemale && voiceMale) voiceFemale = voiceMale;
      if (!voiceMale && voiceFemale) voiceMale = voiceFemale;
      
      // Fallback to standard non-IN voices of opposite genders if still missing
      if (!voiceFemale || !voiceMale) {
        voices.forEach(voice => {
          if (voice && voice.lang && voice.lang.toLowerCase().includes("en")) {
            const nameLower = voice.name.toLowerCase();
            const isMaleName = nameLower.includes("david") || nameLower.includes("james") || nameLower.includes("male") || nameLower.includes("mark");
            if (isMaleName && !voiceMale) voiceMale = voice;
            if (!isMaleName && !voiceFemale) voiceFemale = voice;
          }
        });
      }
      
      // Final hardware fallbacks
      if (!voiceFemale) voiceFemale = voices[0] || null;
      if (!voiceMale) voiceMale = voiceFemale;

      // 2. Populate voice options, starting with our premium Conversational Duo as the pre-selected default!
      const duoOpt = document.createElement("option");
      duoOpt.value = "conversational_duo";
      duoOpt.innerText = "Sadaltager (Natural Indian Accent Duo 👫)";
      duoOpt.selected = true;
      select.appendChild(duoOpt);
      
      voices.forEach(voice => {
        if (voice && voice.lang && (voice.lang.includes("en") || voice.lang.includes("IN") || voice.lang.includes("in"))) {
          const opt = document.createElement("option");
          opt.value = voice.name;
          opt.innerText = `${voice.name} (${voice.lang})`;
          select.appendChild(opt);
        }
      });
    } catch (e) {
      console.warn("Voices retrieval error:", e);
    }
  };

  speechSynth.onvoiceschanged = voicesChanged;
  voicesChanged();
}

function toggleNarration() {
  if (isSpeaking) {
    stopNarration();
  } else {
    startNarration();
  }
}

function startNarration() {
  if (!speechSynth) return;
  stopNarration();

  const page = storybookPages[currentPageIndex];
  
  // Detect mobile device to bypass Web Speech API queue restrictions
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 0);
  
  const voiceSelect = document.getElementById("select-speech-voice");
  const userSelectedVoiceName = voiceSelect ? voiceSelect.value : "conversational_duo";

  // Force single voice fallback on mobile devices to prevent iOS Safari/Android WebView queue blocks!
  if (isMobile && userSelectedVoiceName === "conversational_duo") {
    console.log("Mobile device detected. Falling back to single high-fidelity voice to prevent SpeechSynthesis queue blocking.");
    const chosenVoice = voiceFemale || voiceMale;
    
    const utterance = new SpeechSynthesisUtterance(page.story);
    if (chosenVoice) utterance.voice = chosenVoice;
    
    utterance.rate = 0.92;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      isSpeaking = true;
      document.getElementById("narrate-icon").innerText = "⏹️";
      document.getElementById("narrate-text").innerText = "Stop Reading";
    };

    utterance.onend = () => {
      stopNarration();
    };

    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        const charIndex = event.charIndex;
        const cumulativeText = page.story.substring(0, charIndex);
        const spokenWordCount = (cumulativeText.match(/\S+/g) || []).length;
        
        document.querySelectorAll(".word-span").forEach(span => span.classList.remove("speaking"));
        
        const currentWordSpan = document.getElementById(`word-${spokenWordCount}`);
        if (currentWordSpan) {
          currentWordSpan.classList.add("speaking");
          currentWordSpan.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    };

    // Store in our array so stopNarration can clean it up
    currentUtterances = [utterance];
    speechSynth.speak(utterance);
    return;
  }

  // 1. Convert story words array to individual sentences to ensure 100% exact index mapping
  const fullStoryWords = page.story.split(" ");
  const sentences = [];
  let currentSentenceWords = [];
  let currentStartIdx = 0;

  fullStoryWords.forEach((word, idx) => {
    currentSentenceWords.push(word);
    const cleanWord = word.trim();
    const isEnding = cleanWord.endsWith(".") || cleanWord.endsWith("!") || cleanWord.endsWith("?") || cleanWord.endsWith('."') || cleanWord.endsWith('!"') || cleanWord.endsWith('?"');
    
    if (isEnding || idx === fullStoryWords.length - 1) {
      sentences.push({
        text: currentSentenceWords.join(" "),
        startIdx: currentStartIdx,
        wordCount: currentSentenceWords.length
      });
      currentSentenceWords = [];
      currentStartIdx = idx + 1;
    }
  });

  currentUtterances = [];
  isSpeaking = true;
  document.getElementById("narrate-icon").innerText = "⏹️";
  document.getElementById("narrate-text").innerText = "Stop Reading";

  const voiceSelect = document.getElementById("select-speech-voice");
  const userSelectedVoiceName = voiceSelect ? voiceSelect.value : "conversational_duo";

  sentences.forEach((sentence, sIdx) => {
    const utterance = new SpeechSynthesisUtterance(sentence.text);
    
    // 2. Select voice based on user preference or dynamic conversational-duo rules
    if (userSelectedVoiceName && userSelectedVoiceName !== "conversational_duo") {
      const voices = speechSynth.getVoices();
      const voice = voices.find(v => v.name === userSelectedVoiceName);
      if (voice) utterance.voice = voice;
    } else {
      // Dynamic conversational alternate rules
      const textLower = sentence.text.toLowerCase();
      let chosenVoice = null;
      
      // Look for male/female character keywords
      if (textLower.includes("veer") || textLower.includes("merchant") || textLower.includes("shivaji") || textLower.includes("tilak") || textLower.includes("bhangare") || textLower.includes("commander") || textLower.includes("khan") || textLower.includes("king")) {
        chosenVoice = voiceMale || voiceFemale;
      } else if (textLower.includes("aarya") || textLower.includes("nisha") || textLower.includes("anandibai") || textLower.includes("female") || textLower.includes("devi")) {
        chosenVoice = voiceFemale || voiceMale;
      } else {
        // Natural alternate conversation
        chosenVoice = (sIdx % 2 === 0) ? (voiceFemale || voiceMale) : (voiceMale || voiceFemale);
      }
      
      if (chosenVoice) utterance.voice = chosenVoice;
    }

    // 3. Set sophisticated storytelling parameters
    utterance.rate = 0.92; // Elegant, measured speed
    utterance.pitch = 1.0; // Crystal clear pitch

    // 4. Exact word highlighting boundaries
    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        const charIndex = event.charIndex;
        const textBeforeChar = sentence.text.substring(0, charIndex);
        const spokenWordCount = textBeforeChar.split(" ").filter(w => w.length > 0).length;
        const globalWordIndex = sentence.startIdx + spokenWordCount;

        document.querySelectorAll(".word-span").forEach(span => span.classList.remove("speaking"));
        
        const currentWordSpan = document.getElementById(`word-${globalWordIndex}`);
        if (currentWordSpan) {
          currentWordSpan.classList.add("speaking");
          currentWordSpan.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    };

    utterance.onend = () => {
      if (sIdx === sentences.length - 1) {
        stopNarration();
      }
    };

    utterance.onerror = () => {
      if (sIdx === sentences.length - 1) {
        stopNarration();
      }
    };

    currentUtterances.push(utterance);
    speechSynth.speak(utterance);
  });
}

function stopNarration() {
  if (speechSynth) {
    speechSynth.cancel();
  }
  currentUtterances = [];
  isSpeaking = false;
  document.getElementById("narrate-icon").innerText = "🔊";
  document.getElementById("narrate-text").innerText = "Read Aloud";
  document.querySelectorAll(".word-span").forEach(span => span.classList.remove("speaking"));
}

// ==========================================================================
// 5. 12 DYNAMIC MINI-GAME PLAYLOADS
// ==========================================================================

function celebrateGameSuccess() {
  if (isSoundOn) window.storyAudio.playFanfare();
  const overlay = document.getElementById("game-success-overlay");
  overlay.style.display = "flex";
  
  // Conspicuously pulse the Next buttons to draw attention to progress!
  const btnNext = document.getElementById("btn-next-page");
  const floatNext = document.getElementById("btn-float-next");
  if (btnNext) btnNext.classList.add("pulse-attention");
  if (floatNext) floatNext.classList.add("pulse-attention");
  
  // Confetti micro-trigger could go here, or just basic celebration
  setTimeout(() => {
    overlay.style.display = "none";
  }, 3500);
}

function loadMiniGame(type) {
  const container = document.getElementById("game-sandbox-pane");
  container.innerHTML = "";
  
  // Hide success overlay
  document.getElementById("game-success-overlay").style.display = "none";

  switch (type) {
    case "cargo_sorting":
      initCargoSortingGame(container);
      break;
    case "bamboo_harvest":
      initBambooHarvestGame(container);
      break;
    case "temple_jigsaw":
      initTempleJigsawGame(container);
      break;
    case "gate_match":
      initGateMatchGame(container);
      break;
    case "timber_stack":
      initTimberStackGame(container);
      break;
    case "ship_stitch":
      initShipStitchGame(container);
      break;
    case "durgadi_dig":
      initDurgadiDigGame(container);
      break;
    case "navy_defense":
      initNavyDefenseGame(container);
      break;
    case "train_maze":
      initTrainMazeGame(container);
      break;
    case "vada_pav_serve":
      initVadaPavGame(container);
      break;
    case "smart_sorting":
      initSmartSortingGame(container);
      break;
    case "metro_simulator":
      initMetroSimulatorGame(container);
      break;
    default:
      container.innerHTML = "<p>Interactive game loading...</p>";
  }
}

// GAME 1: Cargo Sorting
function initCargoSortingGame(container) {
  document.getElementById("activity-title-text").innerText = "Sort the Cargo!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:8px; text-align:center;">Sort spices and silk to the correct ship!</p>
    <div class="cargo-game-container">
      <div id="cargo-manna" class="cargo-item" onclick="selectCargo('manna')">🍯 Bamboo Manna</div>
      <div id="cargo-pepper" class="cargo-item" onclick="selectCargo('pepper')">🌶️ Spices</div>
    </div>
    <div style="display:flex; justify-content:center; gap:20px; margin-top:15px; width:100%;">
      <div id="ship-greek" class="cargo-ship" onclick="dropCargo('greek')">⛵ Greek Vessel</div>
      <div id="ship-roman" class="cargo-ship" onclick="dropCargo('roman')">🚢 Roman Vessel</div>
    </div>
  `;

  let selectedCargo = null;
  let matches = 0;

  window.selectCargo = (item) => {
    selectedCargo = item;
    document.querySelectorAll(".cargo-item").forEach(el => el.style.borderColor = "var(--color-saffron)");
    document.getElementById(`cargo-${item}`).style.borderColor = "var(--color-crimson)";
    if (isSoundOn) window.storyAudio.playCorrect();
  };

  window.dropCargo = (ship) => {
    if (!selectedCargo) return;
    
    // Rule: manna -> greek, pepper -> roman
    if ((selectedCargo === 'manna' && ship === 'greek') || (selectedCargo === 'pepper' && ship === 'roman')) {
      document.getElementById(`cargo-${selectedCargo}`).style.display = "none";
      document.getElementById(`ship-${ship}`).style.backgroundColor = "var(--color-saffron-light)";
      if (isSoundOn) window.storyAudio.playCorrect();
      matches++;
      selectedCargo = null;
      if (matches === 2) celebrateGameSuccess();
    } else {
      if (isSoundOn) window.storyAudio.playIncorrect();
      document.getElementById(`cargo-${selectedCargo}`).style.transform = "translateX(5px)";
      setTimeout(() => {
        document.getElementById(`cargo-${selectedCargo}`).style.transform = "none";
      }, 200);
    }
  };
}

// GAME 2: Bamboo Harvest
function initBambooHarvestGame(container) {
  document.getElementById("activity-title-text").innerText = "Harvest the Tabashir!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:8px; text-align:center;">Tap the glowing bamboo stalks to collect the medicine!</p>
    <div class="bamboo-grid">
      <div id="bamboo-0" class="bamboo-stalk" onclick="tapBamboo(0)"></div>
      <div id="bamboo-1" class="bamboo-stalk" onclick="tapBamboo(1)"></div>
      <div id="bamboo-2" class="bamboo-stalk" onclick="tapBamboo(2)"></div>
      <div id="bamboo-3" class="bamboo-stalk" onclick="tapBamboo(3)"></div>
    </div>
  `;

  let activeIndex = Math.floor(Math.random() * 4);
  let score = 0;

  const setManna = () => {
    document.querySelectorAll(".bamboo-stalk").forEach(b => b.classList.remove("has-manna"));
    document.getElementById(`bamboo-${activeIndex}`).classList.add("has-manna");
  };

  setManna();

  window.tapBamboo = (idx) => {
    if (idx === activeIndex) {
      score++;
      if (isSoundOn) window.storyAudio.playCorrect();
      if (score >= 3) {
        celebrateGameSuccess();
      } else {
        let oldIdx = activeIndex;
        while (activeIndex === oldIdx) {
          activeIndex = Math.floor(Math.random() * 4);
        }
        setManna();
      }
    } else {
      if (isSoundOn) window.storyAudio.playIncorrect();
    }
  };
}

// GAME 3: Temple Jigsaw
function initTempleJigsawGame(container) {
  document.getElementById("activity-title-text").innerText = "Reconstruct the Spire!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:8px; text-align:center;">Tap blocks to rotate them until they point straight up!</p>
    <div class="jigsaw-container">
      <div id="piece-0" class="jigsaw-piece" style="transform: rotate(90deg);" onclick="rotatePiece(0)">🛕</div>
      <div id="piece-1" class="jigsaw-piece" style="transform: rotate(180deg);" onclick="rotatePiece(1)">🛕</div>
      <div id="piece-2" class="jigsaw-piece" style="transform: rotate(270deg);" onclick="rotatePiece(2)">🛕</div>
    </div>
  `;

  let rotations = [90, 180, 270];

  window.rotatePiece = (idx) => {
    rotations[idx] = (rotations[idx] + 90) % 360;
    document.getElementById(`piece-${idx}`).style.transform = `rotate(${rotations[idx]}deg)`;
    
    if (isSoundOn) window.storyAudio.playCorrect();

    if (rotations.every(r => r === 0)) {
      celebrateGameSuccess();
    }
  };
}

// GAME 4: Gate Match
function initGateMatchGame(container) {
  document.getElementById("activity-title-text").innerText = "Help the Craftsmen Enter!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:6px; text-align:center;">Match the guild worker to their tool!</p>
    <div style="display:flex; justify-content:space-around; width:100%; margin-bottom:10px;">
      <div id="worker-potter" class="cargo-item" onclick="selectWorker('potter')">🏺 Clay Potter</div>
      <div id="worker-rider" class="cargo-item" onclick="selectWorker('rider')">🏇 Horse Rider</div>
    </div>
    <div style="display:flex; justify-content:space-around; width:100%;">
      <div id="tool-wheel" class="cargo-ship" onclick="dropWorker('wheel')">🔄 Potter Wheel</div>
      <div id="tool-saddle" class="cargo-ship" onclick="dropWorker('saddle')">🐴 Stable Saddle</div>
    </div>
  `;

  let selectedWorker = null;
  let matches = 0;

  window.selectWorker = (item) => {
    selectedWorker = item;
    document.querySelectorAll("#worker-potter, #worker-rider").forEach(el => el.style.borderColor = "var(--color-saffron)");
    document.getElementById(`worker-${item}`).style.borderColor = "var(--color-crimson)";
    if (isSoundOn) window.storyAudio.playCorrect();
  };

  window.dropWorker = (tool) => {
    if (!selectedWorker) return;
    
    if ((selectedWorker === 'potter' && tool === 'wheel') || (selectedWorker === 'rider' && tool === 'saddle')) {
      document.getElementById(`worker-${selectedWorker}`).style.display = "none";
      document.getElementById(`tool-${tool}`).style.backgroundColor = "var(--color-saffron-light)";
      if (isSoundOn) window.storyAudio.playCorrect();
      matches++;
      selectedWorker = null;
      if (matches === 2) celebrateGameSuccess();
    } else {
      if (isSoundOn) window.storyAudio.playIncorrect();
    }
  };
}

// GAME 5: Timber Stack
function initTimberStackGame(container) {
  document.getElementById("activity-title-text").innerText = "Stack the Timber!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:8px; text-align:center;">Click the log to stack them! We need exactly 5 logs.</p>
    <div id="wood-stack-area" style="display:flex; flex-direction:column-reverse; width:120px; height:80px; border-bottom:4px solid var(--wood-brown); justify-content:flex-start; align-items:center; gap:2px; margin-bottom:8px;">
      <!-- Logs get added here -->
    </div>
    <button class="narrate-btn" onclick="addTimberLog()">🪵 Add Log</button>
  `;

  let logCount = 0;

  window.addTimberLog = () => {
    if (logCount >= 5) return;
    logCount++;

    const log = document.createElement("div");
    log.style.width = "90px";
    log.style.height = "12px";
    log.style.background = "var(--wood-brown)";
    log.style.border = "1px solid var(--gold-flat)";
    log.style.borderRadius = "5px";
    log.style.animation = "slideDown 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    document.getElementById("wood-stack-area").appendChild(log);
    
    if (isSoundOn) window.storyAudio.playCorrect();

    if (logCount === 5) {
      celebrateGameSuccess();
    }
  };
}

// GAME 6: Ship Stitch
function initShipStitchGame(container) {
  document.getElementById("activity-title-text").innerText = "Stitch the Ship!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:6px; text-align:center;">Click dots in order: 1 ➔ 2 ➔ 3 ➔ 4 to stitch the boat planks!</p>
    <div style="position:relative; width:220px; height:85px; background:var(--bg-cream-dark); border-radius:10px; border:2px dashed var(--bg-sepia-accent);">
      <svg id="stitch-svg" style="width:100%; height:100%; position:absolute; top:0; left:0; pointer-events:none;"></svg>
      <div id="dot-1" class="icon-btn" style="position:absolute; left:20px; top:35px; width:24px; height:24px; font-size:0.8rem;" onclick="clickDot(1)">1</div>
      <div id="dot-2" class="icon-btn" style="position:absolute; left:75px; top:15px; width:24px; height:24px; font-size:0.8rem;" onclick="clickDot(2)">2</div>
      <div id="dot-3" class="icon-btn" style="position:absolute; left:135px; top:55px; width:24px; height:24px; font-size:0.8rem;" onclick="clickDot(3)">3</div>
      <div id="dot-4" class="icon-btn" style="position:absolute; left:180px; top:25px; width:24px; height:24px; font-size:0.8rem;" onclick="clickDot(4)">4</div>
    </div>
  `;

  let nextDot = 1;
  const coords = {
    1: {x: 32, y: 47},
    2: {x: 87, y: 27},
    3: {x: 147, y: 67},
    4: {x: 192, y: 37}
  };

  window.clickDot = (num) => {
    if (num === nextDot) {
      document.getElementById(`dot-${num}`).style.background = "var(--color-green)";
      document.getElementById(`dot-${num}`).style.color = "white";
      
      if (nextDot > 1) {
        // Draw line from prev to current
        const svg = document.getElementById("stitch-svg");
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", coords[nextDot - 1].x);
        line.setAttribute("y1", coords[nextDot - 1].y);
        line.setAttribute("x2", coords[nextDot].x);
        line.setAttribute("y2", coords[nextDot].y);
        line.setAttribute("stroke", "var(--color-saffron)");
        line.setAttribute("stroke-width", "4");
        line.setAttribute("stroke-dasharray", "4,4");
        svg.appendChild(line);
      }

      if (isSoundOn) window.storyAudio.playCorrect();
      nextDot++;
      
      if (nextDot > 4) {
        celebrateGameSuccess();
      }
    } else {
      if (isSoundOn) window.storyAudio.playIncorrect();
    }
  };
}

// GAME 7: Durgadi Dig
function initDurgadiDigGame(container) {
  document.getElementById("activity-title-text").innerText = "Uncover the Hidden Gold!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:8px; text-align:center;">Click the dirt piles on Durgadi Hill to find the gold chest!</p>
    <div style="display:flex; justify-content:center; gap:12px; width:100%; max-width:240px;">
      <div id="pile-1" style="background:#C4A484; width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;" onclick="digPile(1)">🪨</div>
      <div id="pile-2" style="background:#C4A484; width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;" onclick="digPile(2)">🪨</div>
      <div id="pile-3" style="background:#C4A484; width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;" onclick="digPile(3)">🪨</div>
    </div>
  `;

  let uncovered = 0;
  const treasures = { 1: false, 2: true, 3: false }; // Chest inside pile 2

  window.digPile = (num) => {
    const pile = document.getElementById(`pile-${num}`);
    if (treasures[num]) {
      pile.innerHTML = "👑";
      pile.style.background = "var(--gold-trim)";
      celebrateGameSuccess();
    } else {
      pile.innerHTML = "❌";
      pile.style.background = "#EADECA";
      if (isSoundOn) window.storyAudio.playIncorrect();
    }
  };
}

// GAME 8: Navy Defense
function initNavyDefenseGame(container) {
  document.getElementById("activity-title-text").innerText = "Anchor the Fleet!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:6px; text-align:center;">Click on 3 open sea spots to position the Maratha warships!</p>
    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:6px; width:150px; height:90px;">
      <div class="jigsaw-piece" style="background:var(--color-green-glow); border-color:var(--bg-sepia-accent);" onclick="placeShip(this)">🌊</div>
      <div class="jigsaw-piece" style="background:var(--color-green-glow); border-color:var(--bg-sepia-accent);" onclick="placeShip(this)">🌊</div>
      <div class="jigsaw-piece" style="background:var(--color-green-glow); border-color:var(--bg-sepia-accent);" onclick="placeShip(this)">🌊</div>
      <div class="jigsaw-piece" style="background:var(--color-green-glow); border-color:var(--bg-sepia-accent);" onclick="placeShip(this)">🌊</div>
      <div class="jigsaw-piece" style="background:var(--color-green-glow); border-color:var(--bg-sepia-accent);" onclick="placeShip(this)">🌊</div>
      <div class="jigsaw-piece" style="background:var(--color-green-glow); border-color:var(--bg-sepia-accent);" onclick="placeShip(this)">🌊</div>
    </div>
  `;

  let count = 0;

  window.placeShip = (el) => {
    if (el.innerHTML === "⛵") return;
    el.innerHTML = "⛵";
    el.style.background = "white";
    el.style.borderColor = "var(--color-saffron)";
    
    if (isSoundOn) window.storyAudio.playCorrect();
    count++;
    
    if (count === 3) {
      celebrateGameSuccess();
    }
  };
}

// GAME 9: Train Maze
function initTrainMazeGame(container) {
  document.getElementById("activity-title-text").innerText = "Lay the Tracks Maze!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:6px; text-align:center;">Click the arrow buttons to drive the steam train into Kalyan Junction!</p>
    <div style="display:flex; justify-content:center; align-items:center; gap:20px;">
      <div style="position:relative; width:100px; height:60px; background:white; border:2px solid var(--bg-sepia-accent); border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:1.5rem;">
        <span id="maze-train" style="position:absolute; left:5px; transition:left 0.5s ease;">🚂</span>
        <span style="position:absolute; right:5px;">🚉</span>
      </div>
      <button class="narrate-btn" onclick="moveTrain()">➔ Go!</button>
    </div>
  `;

  let pos = 5;

  window.moveTrain = () => {
    if (pos >= 70) return;
    pos += 32;
    document.getElementById("maze-train").style.left = `${pos}px`;
    
    if (isSoundOn) window.storyAudio.playCorrect();

    if (pos >= 69) {
      celebrateGameSuccess();
    }
  };
}

// GAME 10: Vada Pav Serve
function initVadaPavGame(container) {
  document.getElementById("activity-title-text").innerText = "Vada Pav Master!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:6px; text-align:center;">Fry the Vada and wrap it in Pav bread to serve the commuter!</p>
    <div style="display:flex; justify-content:space-around; align-items:center; width:100%;">
      <button id="btn-fry" class="narrate-btn" onclick="stepVada(1)">🍳 Fry Potato</button>
      <div id="vada-status" style="font-size:1.6rem;">🥔</div>
      <button id="btn-wrap" class="narrate-btn" style="display:none;" onclick="stepVada(2)">🍔 Wrap in Pav</button>
    </div>
  `;

  window.stepVada = (step) => {
    if (step === 1) {
      document.getElementById("vada-status").innerText = "🔥";
      document.getElementById("btn-fry").style.display = "none";
      document.getElementById("btn-wrap").style.display = "inline-block";
      if (isSoundOn) window.storyAudio.playCorrect();
    } else if (step === 2) {
      document.getElementById("vada-status").innerText = "🍔";
      document.getElementById("btn-wrap").style.display = "none";
      if (isSoundOn) window.storyAudio.playCorrect();
      setTimeout(celebrateGameSuccess, 400);
    }
  };
}

// GAME 11: Smart Sorting
function initSmartSortingGame(container) {
  document.getElementById("activity-title-text").innerText = "Smart Sorting Machine!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:6px; text-align:center;">Match the trash item to the correct bin!</p>
    <div style="display:flex; justify-content:space-around; width:100%; margin-bottom:10px;">
      <div id="trash-bottle" class="cargo-item" onclick="selectTrash('bottle')">🧴 Plastic</div>
      <div id="trash-banana" class="cargo-item" onclick="selectTrash('banana')">🍌 Compost</div>
    </div>
    <div style="display:flex; justify-content:space-around; width:100%;">
      <div id="bin-recycling" class="cargo-ship" onclick="dropTrash('recycling')">♻️ Recycling</div>
      <div id="bin-bio" class="cargo-ship" onclick="dropTrash('bio')">🌿 Bio-Bin</div>
    </div>
  `;

  let selectedTrash = null;
  let matches = 0;

  window.selectTrash = (item) => {
    selectedTrash = item;
    document.querySelectorAll("#trash-bottle, #trash-banana").forEach(el => el.style.borderColor = "var(--color-saffron)");
    document.getElementById(`trash-${item}`).style.borderColor = "var(--color-crimson)";
    if (isSoundOn) window.storyAudio.playCorrect();
  };

  window.dropTrash = (bin) => {
    if (!selectedTrash) return;
    
    if ((selectedTrash === 'bottle' && bin === 'recycling') || (selectedTrash === 'banana' && bin === 'bio')) {
      document.getElementById(`trash-${selectedTrash}`).style.display = "none";
      document.getElementById(`bin-${bin}`).style.backgroundColor = "var(--color-saffron-light)";
      if (isSoundOn) window.storyAudio.playCorrect();
      matches++;
      selectedTrash = null;
      if (matches === 2) celebrateGameSuccess();
    } else {
      if (isSoundOn) window.storyAudio.playIncorrect();
    }
  };
}

// GAME 12: Metro Simulator
function initMetroSimulatorGame(container) {
  document.getElementById("activity-title-text").innerText = "Drive the Orange Metro!";
  container.innerHTML = `
    <p style="font-size:0.85rem; margin-bottom:6px; text-align:center;">Slide the lever to speed up the train to 60 km/h!</p>
    <input type="range" id="metro-lever" class="metro-slider" min="0" max="120" value="0" oninput="slideMetro(this.value)">
    <div style="font-size:0.9rem; font-weight:700; color:var(--color-crimson); margin-top:8px;">
      Current Speed: <span id="metro-speed">0</span> km/h
    </div>
  `;

  window.slideMetro = (val) => {
    document.getElementById("metro-speed").innerText = val;
    if (parseInt(val) >= 55 && parseInt(val) <= 65) {
      document.getElementById("metro-speed").style.color = "var(--color-green)";
      celebrateGameSuccess();
      // Disable further sliding
      document.getElementById("metro-lever").disabled = true;
    } else {
      document.getElementById("metro-speed").style.color = "var(--color-crimson)";
    }
  };
}

// Add swipe gestures on mobile for screen-reader page transitions
function setupSwipeGestures() {
  const storybook = document.querySelector(".storybook-layout");
  if (!storybook) return;

  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  storybook.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  storybook.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Horizontal swipe threshold of 60px, ensuring horizontal movement dominates
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 60) {
      if (diffX < 0) {
        nextPage();
      } else {
        prevPage();
      }
    }
  }
}
