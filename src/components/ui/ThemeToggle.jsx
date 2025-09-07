import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { toggleTheme } from "../../store/themeSlice";

function ThemeToggle() {
  const themeState = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeState === "dark");
    localStorage.setItem("theme", themeState);
  }, [themeState]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className="relative p-2 rounded-full bg-card border border-base shadow-theme hover:shadow-theme-lg transition-all duration-300 hover:scale-110 focus-ring cursor-pointer"
      aria-label={`Switch to ${themeState === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <IoMdSunny
          className={`absolute text-lg text-yellow-500 transition-all duration-300 ${
            themeState === "light" 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 rotate-180 scale-75"
          }`}
        />
        <IoMdMoon
          className={`absolute text-lg text-blue-400 transition-all duration-300 ${
            themeState === "dark" 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-180 scale-75"
          }`}
        />
      </div>
    </button>
  );
}

export default ThemeToggle;
