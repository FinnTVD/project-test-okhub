/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                "3xl": "1600px",
            },
            fontFamily: {
                pop: ["Poppins", "sans-serif"],
                mon: ["Montserrat", "sans-serif"],
                man: ["Manrope", "sans-serif"],
            },
            backgroundImage: {
                linearTour:
                    "linear-gradient(180deg, #2e3192 0%, #1bffff 78.4%)",
                linearBtn: "linear-gradient(90deg, #84C4FF 0%, #5CC4BB 100%)",
                linearBlend:
                    "linear-gradient(0deg, #222222 0%, rgba(34, 34, 34, 0) 83.81%)",
                linearGold:
                    "linear-gradient(90deg, #FFD579 0%, #FFD579 0.01%, #FFBA26 100%)",
                linearOrangeBlur2:
                    "radial-gradient(50% 50% at 50% 50%, rgba(255, 153, 0, 0.2) 0%, rgba(255, 153, 0, 0) 100%)",
                linearOrangeBlur15:
                    "radial-gradient(50% 50% at 50% 50%, rgba(255, 153, 0, 0.15) 0%, rgba(255, 153, 0, 0) 100%)",
                linearOrangeBlur1:
                    "radial-gradient(50% 50% at 50% 50%, rgba(255, 153, 0, 0.1) 0%, rgba(255, 153, 0, 0) 100%)",
                linearBlueBlur1:
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 102, 255, 0.1) 0%, rgba(0, 102, 255, 0) 100%)",
                linearBlueBlur15:
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 102, 255, 0.15) 0%, rgba(0, 102, 255, 0) 100%)",
                linearBlueBlur25:
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 194, 255, 0.25) 0%, rgba(0, 102, 255, 0) 100%)",
                linearBlueBlur3:
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 194, 255, 0.3) 0%, rgba(0, 102, 255, 0) 100%)",
                linearRedBlur1:
                    "radial-gradient(50% 50% at 50% 50%, rgba(255, 61, 0, 0.1) 0%, rgba(255, 61, 0, 0) 100%)",
            },
            blur: {
                config: "101px",
            },
            boxShadow: {
                btn: "4px 8px 48px rgba(92, 196, 187, 0.3)",
            },
        },
    },
    plugins: [],
};
