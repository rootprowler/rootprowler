document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  const banner = `
Hello, friend.

You've connected to fsociety.
Today your education begins.

Type a command to proceed:
- prepare
- f-society
- inform
- question
- wake up
- join
`;

  output.innerText = banner;
  input.focus();

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const command = input.value.trim().toLowerCase();
      const prompt = document.createElement('div');
      prompt.innerHTML = `<span class="prompt">root@fsociety:~$</span> ${command}`;
      output.appendChild(prompt);

      processCommand(command);
      input.value = '';
      output.scrollTop = output.scrollHeight;
    }
  });

  function processCommand(command) {
    const response = document.createElement('div');
    response.classList.add('line');

    switch (command) {
      case 'prepare':
        response.innerHTML = `Preparing terminal for fsociety operations...<br>Target system: Mr. Robot<br>Status: Armed 🔓`;
        break;

      case 'f-society':
        response.innerHTML = `
          <pre class="ascii">
  ______ ______   _____  _____   _____   ____   __     __
 |  ____|  ____| |  __ \\|  __ \\ / ____| |  _ \\  \\ \\   / /
 | |__  | |__    | |__) | |__) | (___   | |_) |  \\ \\_/ / 
 |  __| |  __|   |  _  /|  ___/ \\___ \\  |  _ <    \\   /  
 | |____| |____  | | \\ \\| |     ____) | | |_) |    | |   
 |______|______| |_|  \\_\\_|    |_____/  |____/     |_|   
          </pre>
          <p>We are fsociety. We are anonymous. We do not forget. We do not forgive.</p>
        `;
        break;

      case 'inform':
        response.innerHTML = `
          <p>Reconnaissance reveals:</p>
          <ul>
            <li>Nmap: Port 80 open</li>
            <li>Gobuster: /wp-login.php found</li>
            <li>Hydra: admin:welcome</li>
          </ul>
        `;
        break;

      case 'question':
        response.innerHTML = `What is control? Who decides what you do every day? It's time to ask bigger questions.`;
        break;

      case 'wake up':
        response.innerHTML = `You've opened your eyes. The real hack begins now. 🔓<br>Launching shell payloads...`;
        break;

      case 'join':
        response.innerHTML = `
          Welcome to the movement. You have joined fsociety.<br>
          <a href="https://github.com/rootprowler/Operation-Mr.Robot" class="command-link" target="_blank">[ View Full Mr. Robot Pentest on GitHub ]</a>
        `;
        break;

      default:
        response.innerHTML = `Command not recognized: ${command}`;
        break;
    }

    output.appendChild(response);
  }
});
