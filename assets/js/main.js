// Wait for page to fully load
window.addEventListener("DOMContentLoaded", () => {
  // AOS Init
  AOS.init();

  // Typed Terminal Animation
  const typedTarget = document.querySelector(".terminal-text");
  if (typedTarget) {
    new Typed(typedTarget, {
      strings: [
        "[~/rootprowler] Initializing portfolio interface...",
        "起動中... ハッカー・モードを有効にしています",
        "Target: DVWA (Metasploitable 2)",
        "enum_web.sh >> payload injected ✅",
        "AI-Enhanced Recon Mode [ACTIVE]"
      ],
      typeSpeed: 40,
      backSpeed: 0,
      backDelay: 1200,
      startDelay: 500,
      showCursor: true,
      cursorChar: "_",
      loop: true
    });
  }

  // Terminal Modal Elements
  const terminalBtn = document.getElementById("terminalBtn");
  const terminalModal = document.getElementById("terminalModal");
  const terminalOutput = document.getElementById("terminalOutput");
  let terminalRunning = false;

  if (terminalBtn && terminalModal && terminalOutput) {
    terminalBtn.addEventListener("click", () => {
      if (!terminalRunning) {
        terminalModal.classList.add("active");
        simulateTerminal();
        terminalRunning = true;
      }
    });

    terminalModal.addEventListener("click", () => {
      terminalModal.classList.remove("active");
      terminalOutput.innerHTML = "";
      terminalRunning = false;
    });
  }

  // Simulate Terminal Commands
  function simulateTerminal() {
    const commands = [
      "$ whoami",
      "rahul_m",
      "$ ls projects/",
      "dvwa-nmap  brute-hydra  mr-robot-infiltration",
      "$ cat mission.log",
      "Mission: Infiltrate VulnHub targets and report with precision.",
      "Status: 🔓 Root Access Achieved."
    ];

    terminalOutput.innerHTML = "";
    let i = 0;

    const typeNext = () => {
      if (i < commands.length) {
        const line = document.createElement("div");
        line.textContent = commands[i];
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        i++;
        setTimeout(typeNext, 800);
      }
    };

    typeNext();
  }
});

// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    header.style.top = '0';
    return;
  }
  if (currentScroll > lastScroll) {
    header.style.top = '-100px'; // Hides navbar
  } else {
    header.style.top = '0'; // Reveals navbar
  }
  lastScroll = currentScroll;
});
