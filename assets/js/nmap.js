const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

const responses = {
  "help": `
Available commands:
- summary: Overview of the Nmap scan objective.
- scan: Full scan output and command used.
- tools: Tools used in the reconnaissance.
- github: View GitHub repository.
- clear: Clear the terminal.
- help: Show available commands.
  `,

  "summary": `
[+] Project: Nmap Scan on DVWA

• Goal: Identify open ports and services on DVWA (Metasploitable 2)
• IP Address: 192.168.254.131
• Method: SYN scan (-sS) and full port scan
  `,

  "scan": `
[+] Scan Command:
$ nmap -sS 192.168.254.131

[+] Output (Summary):
PORT     STATE SERVICE
21/tcp   open  ftp
22/tcp   open  ssh
80/tcp   open  http
3306/tcp open  mysql
| OS Detection: Linux 2.6.X or 3.X
| MAC Address: 00:0C:29:XX:XX:XX (VMware)
  `,

  "tools": `
[+] Tools Used:

• Netdiscover → Identify IP addresses on the network
• Nmap → Scan for ports, services, and OS detection
• Wireshark (optional) → Packet inspection
  `,

  "github": `
🔗 GitHub Repository:
https://github.com/rootprowler/nmap-dvwa-scan
  `,

  "clear": "clear"
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    const prompt = `<span class="terminal-prompt">root@nmap:~#</span> ${command}\n`;

    if (responses.hasOwnProperty(command)) {
      if (command === "clear") {
        output.innerHTML = "";
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
