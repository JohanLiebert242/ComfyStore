import { createSlice } from "@reduxjs/toolkit";

const themes = {
    winter: "winter",
    dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
    // Phải set default là winter nếu không thì key ban đầu sẽ là undefined
    const theme = localStorage.getItem("theme") || themes.winter;
    //Set cho body vì ở lần đầu lấy ra nếu không set sẽ không được màu mong muốn
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
};

const initialState = {
    user: { username: "JohanLiebert" },
    theme: getThemeFromLocalStorage(),
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log("Login!");
        },
        logoutUser: (state, action) => {
            console.log("Logout!");
        },
        toggleTheme: (state, action) => {
            const { winter, dracula } = themes;
            state.theme = state.theme === winter ? dracula : winter;
            document.documentElement.setAttribute("data-theme", state.theme);
            localStorage.setItem("theme", state.theme);
        },
    },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
