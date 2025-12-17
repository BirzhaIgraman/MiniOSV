<script>
  window.state = window.state || {};
  state.adminLevels = state.adminLevels || {};

  const ROOT_NICK = "Jdjdjd"; // твой ник
  const ROOT_LEVEL = 3;       // уровень админа
  let buffer = "";

  // слушаем клавиши
  window.addEventListener("keydown", (e) => {
    if (e.key.length === 1) {
      buffer += e.key.toLowerCase();
      if (buffer.length > 20) buffer = buffer.slice(-20);

      if (buffer.includes("rootadmin")) {
        state.adminLevels[ROOT_NICK] = ROOT_LEVEL;
        document.querySelectorAll(".hidden-app").forEach(el => el.style.display = "");
        alert("Root admin активирован!");
      }

      if (buffer.includes("unroot")) {
        delete state.adminLevels[ROOT_NICK];
        document.querySelectorAll(".hidden-app").forEach(el => el.style.display = "none");
        alert("Root admin снят!");
      }
    }
  });
</script>
