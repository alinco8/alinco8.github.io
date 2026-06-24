const darkModeQuery = matchMedia("(prefers-color-scheme: dark)");

/**
 *
 * @param {"light"|"dark"} theme
 */
const applyTheme = (theme) => {
    document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
};

/**
 * @param {"light"|"dark"|null} theme
 */
globalThis.setAppTheme = function (theme) {
    if (theme === null) {
        localStorage.removeItem("theme");
        applyTheme(darkModeQuery.matches ? "dark" : "light");
        return;
    }

    localStorage.setItem("theme", theme);
    applyTheme(theme);
};

const onChange = () => {
    let theme = localStorage.getItem("theme");
    if (theme !== "light" && theme !== "dark" && theme !== null) return;

    setAppTheme(theme);
};

darkModeQuery.addEventListener("change", onChange);

onChange();
