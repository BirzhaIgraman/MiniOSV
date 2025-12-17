<div id="terminal">
  <input id="command" placeholder="Введите команду..." />
  <button onclick="runCommand()">Выполнить</button>
  <div id="output"></div>
</div>

<script>
  window.state = window.state || {};
  state.adminLevels = state.adminLevels || {};

  function runCommand() {
    const cmd = document.getElementById("command").value.trim();
    const parts = cmd.split(" ");

    if (parts[0] === "giveadmin") {
      const nick = parts[1];
      const level = parseInt(parts[2], 10);
      state.adminLevels[nick] = level;
      document.getElementById("output").innerText =
        nick + " теперь админ Lv" + level;
    } else {
      document.getElementById("output").innerText = "Неизвестная команда";
    }
  }
</script>
</body>
</html>
