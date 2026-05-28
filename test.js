// test.js - Automated Functional E2E Testing Suite for "The Wonders of Kalyan"
// This script runs automatically if "?test=true" is in the URL.

(function() {
  console.log("🚀 Automated Test Suite Initialized!");

  // Create test console overlay
  const overlay = document.createElement("div");
  overlay.id = "test-overlay";
  overlay.style.position = "fixed";
  overlay.style.bottom = "20px";
  overlay.style.left = "20px";
  overlay.style.width = "380px";
  overlay.style.maxHeight = "400px";
  overlay.style.background = "rgba(253, 251, 247, 0.95)";
  overlay.style.border = "3px solid var(--wood-brown, #8B5A2B)";
  overlay.style.outline = "2px solid var(--color-saffron, #F48C06)";
  overlay.style.borderRadius = "12px";
  overlay.style.boxShadow = "0 8px 30px rgba(0,0,0,0.3)";
  overlay.style.zIndex = "200000";
  overlay.style.padding = "15px";
  overlay.style.fontFamily = "'Quicksand', sans-serif";
  overlay.style.fontSize = "13px";
  overlay.style.overflowY = "auto";
  overlay.style.color = "var(--wood-brown, #5c3a21)";

  overlay.innerHTML = `
    <h3 style="margin: 0 0 10px 0; color: var(--color-crimson, #9D0208); display:flex; align-items:center; justify-content:space-between;">
      <span>🧪 Automated Functional Test</span>
      <span id="test-status" style="font-size:10px; background:#F48C06; color:white; padding:2px 8px; border-radius:10px;">RUNNING</span>
    </h3>
    <div id="test-log" style="line-height: 1.6; max-height: 280px; overflow-y: auto;">
      <p style="color:#666;">Waiting for application load...</p>
    </div>
  `;
  document.body.appendChild(overlay);

  const logContainer = document.getElementById("test-log");
  const statusBadge = document.getElementById("test-status");

  function log(message, isSuccess = true) {
    const p = document.createElement("p");
    p.style.margin = "4px 0";
    p.style.color = isSuccess ? "#2D6A4F" : "#D90429";
    p.innerHTML = (isSuccess ? "✅ " : "❌ ") + message;
    logContainer.appendChild(p);
    logContainer.scrollTop = logContainer.scrollHeight;
  }

  // Helper delay
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  async function runTests() {
    try {
      await sleep(1000); // Wait for page to initialize fully
      logContainer.innerHTML = "";
      log("Initializing Functional Tests...");

      // 1. Verify Cover Screen
      const coverScreen = document.getElementById("screen-cover");
      const btnStart = document.getElementById("btn-start-reading");
      
      if (!coverScreen || !btnStart) {
        throw new Error("Cover screen elements are missing!");
      }
      log("Cover Screen elements verified successfully.");

      // 2. Click Start the Adventure
      log("Simulating click on 'Start the Adventure!'...");
      btnStart.click();
      await sleep(500);

      // Verify transition
      const readerScreen = document.getElementById("screen-reader");
      if (!readerScreen || !readerScreen.classList.contains("active")) {
        throw new Error("Failed to transition to Storybook Reader screen!");
      }
      log("Transitioned to Storybook Reader screen successfully.");

      // 3. Loop through all 12 pages
      const totalPages = 12;
      for (let i = 0; i < totalPages; i++) {
        log(`Validating Page ${i + 1}...`);
        
        // Wait for page load
        await sleep(350);

        // Verify elements
        const pageMarker = document.getElementById("reader-page-number").innerText;
        if (!pageMarker.includes(`PAGE ${i + 1}`)) {
          throw new Error(`Page marker mismatch! Expected PAGE ${i + 1}, got ${pageMarker}`);
        }

        const plaqueText = document.getElementById("reader-plaque-text").innerText;
        if (!plaqueText) {
          throw new Error(`Plaque text is missing on Page ${i + 1}!`);
        }

        const illustration = document.getElementById("reader-illustration");
        if (!illustration || !illustration.src) {
          throw new Error(`Illustration image is missing on Page ${i + 1}!`);
        }

        const factContent = document.getElementById("reader-fact-content").innerText;
        if (!factContent) {
          throw new Error(`Fact content is missing on Page ${i + 1}!`);
        }

        const sandbox = document.getElementById("game-sandbox-pane");
        if (!sandbox || !sandbox.innerHTML.trim()) {
          throw new Error(`Mini-game sandbox container is empty on Page ${i + 1}!`);
        }

        log(`Page ${i + 1} ("${plaqueText.substring(0, 16)}...") verified successfully.`, true);

        // Click next if not last page
        if (i < totalPages - 1) {
          const btnNext = document.getElementById("btn-next-page");
          if (!btnNext || btnNext.disabled) {
            throw new Error(`Next button is disabled or missing on Page ${i + 1}!`);
          }
          btnNext.click();
        }
      }

      // 4. Return to Cover
      log("Testing return to Cover Page...");
      const btnHome = document.getElementById("btn-home-logo");
      if (!btnHome) throw new Error("Home logo button is missing!");
      btnHome.click();
      await sleep(500);

      if (!coverScreen.classList.contains("active")) {
        throw new Error("Failed to return to Cover page upon clicking home logo!");
      }
      log("Returned to Cover Page successfully.");

      // 5. Test Glossary Drawer
      log("Testing Glossary Drawer...");
      const btnGlossary = document.getElementById("btn-open-glossary");
      if (!btnGlossary) throw new Error("Glossary button is missing!");
      btnGlossary.click();
      await sleep(400);

      const drawerGlossary = document.getElementById("drawer-glossary");
      if (!drawerGlossary || !drawerGlossary.classList.contains("active")) {
        throw new Error("Glossary drawer failed to open!");
      }
      log("Glossary drawer opened successfully.");

      // Close Glossary
      const closeGlossary = drawerGlossary.querySelector(".icon-btn");
      if (closeGlossary) closeGlossary.click();
      await sleep(300);

      // 6. Test Teacher Guide Drawer
      log("Testing Teacher Guide Drawer...");
      const btnGuide = document.getElementById("btn-open-guide");
      if (!btnGuide) throw new Error("Teacher Guide button is missing!");
      btnGuide.click();
      await sleep(400);

      const drawerGuide = document.getElementById("drawer-guide");
      if (!drawerGuide || !drawerGuide.classList.contains("active")) {
        throw new Error("Teacher Guide drawer failed to open!");
      }
      log("Teacher Guide drawer opened successfully.");

      // Close Guide
      const closeGuide = drawerGuide.querySelector(".icon-btn");
      if (closeGuide) closeGuide.click();
      await sleep(300);

      // All tests completed successfully!
      statusBadge.innerText = "PASSED";
      statusBadge.style.background = "#2D6A4F";
      log("ALL TESTS COMPLETED SUCCESSFULLY! No errors detected. 🏆", true);

    } catch (error) {
      statusBadge.innerText = "FAILED";
      statusBadge.style.background = "#D90429";
      log(`Test Suite crashed: ${error.message}`, false);
      console.error(error);
    }
  }

  // Start test suite
  runTests();
})();
