(function () {
  // Dark mode styles for every page
  const style = document.createElement("style");
  style.textContent = `
    body.dark { background-color: #1e1b24; color: #eee; }
    body.dark h1, body.dark h2 { color: #d9a7e0; }
    body.dark a { color: #d9a7e0; }
    body.dark nav a { color: white; }
    body.dark nav { background-color: #3a2a45; }
    body.dark .game-card { background-color: #2d2838; color: #d9a7e0; }
    body.dark .tile.open { background-color: #4a4458; }

    #themeToggle {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 32px;
      height: 32px;
      padding: 0;
      font-size: 16px;
      line-height: 1;
      border-radius: 50%;
      border: none;
      background-color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  // The small emoji-only button
  const toggle = document.createElement("button");
  toggle.id = "themeToggle";
  toggle.title = "Switch light/dark mode";
  document.body.appendChild(toggle);

  function applyTheme(isDark) {
    document.body.classList.toggle("dark", isDark);
    toggle.textContent = isDark ? "☀️" : "🌙";
  }

  // Load the saved choice
  applyTheme(localStorage.getItem("theme") === "dark");

  toggle.addEventListener("click", function () {
    const isDark = !document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    applyTheme(isDark);
  });
})();