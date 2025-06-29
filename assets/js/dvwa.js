const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

// Initial welcome text
const welcomeText = `
[+] Welcome to the DVWA Hydra Automation Terminal
[+] Type 'help' to see available commands.

`;

output.innerText = welcomeText;

const responses = {
  "help": `
Available commands:
- objectives: Show what this project aimed to achieve.
- methodology: See how the brute-force was executed.
- report: Show findings and conclusions.
- github: View the project repo on GitHub.
- clear: Clear the terminal.
- help: Show available commands.
  `,
  "objectives": `
[+] Project Objectives:

• Simulate a real-world brute-force attack on DVWA login.
• Automate the attack using Hydra with a Python wrapper.
• Generate a professional-style PDF pentest report.
• Demonstrate ethical hacking methodology.
  `,
  "methodology": `
[+] Methodology:

1. Target Identified: DVWA hosted on Metasploitable 2.
2. Recon: Scanned for login form using browser & source view.
3. Brute Force:
   $ hydra -l admin -P rockyou.txt 192.168.1.5 http-post-form "/dvwa/login.php:username=^USER^&password=^PASS^:Login failed"
4. Automation:
   • Python wrapper to customize brute-force conditions.
   • Script logs response and extracts valid creds.
5. Access gained → dashboard → report generation.
  `,
  "report": `
[+] Findings:

• DVWA accepts repeated login attempts without lockout.
• Weak credentials used: admin / password123
• Login bypassed using brute-force and Hydra.
• Demonstrated need for rate-limiting & strong auth controls.
• Full PDF report available in GitHub repo.
  `,
  "github": `
🔗 GitHub Repository:
https://github.com/rootprowler/dvwa-login-bruteforce
  `,
  "clear": "clear"
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    const prompt = `<span class="terminal-prompt">root@dvwa:~#</span> ${command}\n`;

    if (responses.hasOwnProperty(command)) {
      if (command === "clear") {
        output.innerHTML = welcomeText;
      } else {
        output.innerHTML += prompt + responses[command] + "\n";
      }
    } else {
      output.innerHTML += prompt + `bash: ${command}: command not found\n`;
    }

    output.scrollTop = output.scrollHeight;
    input.value = "";
  }
});
