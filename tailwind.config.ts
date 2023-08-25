/** @type {import('tailwindcss').Config} */

//@ts-ignore
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            borderWidth: px0_10,
            fontSize: px0_100,
            lineHeight: px0_100,
            minWidth: px0_2000,
            minHeight: px0_2000,
            maxWidth: px0_2000,
            maxHeight: px0_2000,
            spacing: px0_200,
            borderRadius: px0_100,
            width: px0_2000,
            height: px0_2000,
            animation: {
                zoomAndMove: "zoomAndMove 2s forwards",
            },
            fontFamily: {},
            colors: {
                transparent: "transparent",
                current: "currentColor",
                white: "#ffffff",
                sp_pink: "#FF83DC",
                sp_green: "#29FDA4",
                sp_light_blue: "#A9DEF9",
                sp_blue: "#0EAEFF",
            },
            backgroundImage: () => ({
                'gradient-linear': 'linear-gradient(180deg, #C3A9F9 10%, #FECBFF 100%)',
            })
        },
        variants: {
            extend: {
                padding: ['active'],
            },
        },
        screens: {
            lg: { max: "1023px" },
            md: { max: "767px" },
        },
    },
    plugins: [],
};
