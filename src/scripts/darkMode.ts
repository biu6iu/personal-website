document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle") as HTMLButtonElement;

    const isDark = document.documentElement.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "Dark Mode" : "Light Mode";

    themeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark-mode");
        const isDark = document.documentElement.classList.contains("dark-mode");
        themeToggle.textContent = isDark ? "Dark Mode" : "Light Mode";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});