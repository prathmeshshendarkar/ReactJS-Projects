import classnames from "tailwindcss-classnames";

export const themeStyle = (currentTheme) => {
    return classnames('flex flex-col justify-around items-center w-[90%] h-[85%] rounded-md', currentTheme)
}