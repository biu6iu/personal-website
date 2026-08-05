export const THEME_INIT_SCRIPT = `<script>
        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark-mode");
        }
    </script>`;
