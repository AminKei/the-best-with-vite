import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  lang: "en" | "es" | "fa";
}

const storedLanguage =
  (localStorage.getItem("language") as "en" | "es" | "fa") || "en";

const initialState: LanguageState = {
  lang: storedLanguage,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"en" | "es" | "fa">) => {
      localStorage.setItem("language", action.payload);
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
