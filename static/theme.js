const darkModeQuery = matchMedia("(prefers-color-scheme: dark)");

/**
 * @param {"light"|"dark"} theme
 * @returns {boolean}
 */
const applyTheme = (theme) => {
    const isDark = theme === "dark";
    const alreadyDark = document.documentElement.classList.contains("dark");

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");

    return isDark !== alreadyDark;
};

/**
 * @param {"light"|"dark"|null} theme
 * @returns {boolean}
 */
globalThis.setAppTheme = function (theme) {
    if (theme === null) {
        localStorage.removeItem("theme");

        return applyTheme(darkModeQuery.matches ? "dark" : "light");
    }

    localStorage.setItem("theme", theme);
    return applyTheme(theme);
};

const onChange = () => {
    let theme = localStorage.getItem("theme");
    if (theme !== "light" && theme !== "dark" && theme !== null) return;

    setAppTheme(theme);
};

darkModeQuery.addEventListener("change", onChange);

onChange();
