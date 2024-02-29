import useTheme from "./contextApi/context/theme";

export default function ThemeToggler() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.target.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={onChangeBtn}
        value=""
        checked={themeMode === "dark"}
      />
    </div>
  );
}
