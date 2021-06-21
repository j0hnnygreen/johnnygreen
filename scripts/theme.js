function toggle_dark_mode() {

  if (localStorage.theme === "dark") {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  } else {
    localStorage.theme = 'dark';
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }
}