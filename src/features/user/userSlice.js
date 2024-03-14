import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
    winter: "winter",
    dracula: "dracula",
};

const getUserFromLocalStorage = () => {
    return localStorage.getItem("user") || null;
};

const getThemeFromLocalStorage = () => {
    // Phải set default là winter nếu không thì key ban đầu sẽ là undefined
    const theme = localStorage.getItem("theme") || themes.winter;
    //Set cho body vì ở lần đầu lấy ra nếu không set sẽ không được màu mong muốn
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
};

const initialState = {
    user: getUserFromLocalStorage(),
    theme: getThemeFromLocalStorage(),
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const user = { ...action.payload.user, token: action.payload.jwt };
            state.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        logoutUser: (state, action) => {
            state.user = null;
            localStorage.removeItem("user");
            toast.success("Successfully log out");
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
