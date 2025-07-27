import type { Config } from "tailwindcss";

/**
 * Tailwind CSS 설정 파일입니다.
 * @author 도형
 * 디자인 시스템 color 추가하였습니다.
 * @author 태욱
 */

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        rotateBorder: "rotateBorder 4s linear infinite",
      },
      keyframes: {
        rotateBorder: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-green": "linear-gradient(23deg, #FFF 65.9%, #C7E1CE 100%)",
        "gradient-blue": "linear-gradient(23deg, #FFF 65.9%, #C3DAFF 100%)",
        "gradient-red": "linear-gradient(23deg, #FFF 65.9%, #FFE3E3 100%)",
        "conic-custom":
          "conic-gradient(from 0deg at 51.34% 63.22%, #FCFCFC 20.82deg, #E7EBFF 49.33deg, #EBFFF5 115.78deg, #FFF 185.33deg, #FFF 196.51deg, #FFEAEA 276.85deg, #FFF 360deg)",
        "gradient-blue-bottom-fade": "linear-gradient(180deg, rgba(255,255,255,0) 48.45%, #B0CEFF 100%)",
        "gradient-blue-top-fade": "linear-gradient(180deg, #B0CEFF 0%, rgba(255,255,255,0) 27.47%)",
        "gradient-white-black": "linear-gradient(180deg, #FFF 0%, #000 100%)",
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",

        //gray
        "gray-100": "#F1F3F9",
        "gray-200": "#E2E5F0",
        "gray-300": "#CBD1E1",
        "gray-400": "#949DB8",
        "gray-500": "#646E8B",
        "gray-600": "#475069",
        "gray-700": "#333C55",
        "gray-800": "#1E253B",
        "gray-900": "#0F162A",

        //blue-grey
        "blue-grey-50": "#F7F8FA",
        "blue-grey-100": "#EAEBED",
        "blue-grey-200": "#CACDD2",
        "blue-grey-300": "#AAB0B5",
        "blue-grey-400": "#9FA4A8",
        "blue-grey-500": "#73787E",
        "blue-grey-600": "#474C52",
        "blue-grey-700": "#3E4348",
        "blue-grey-800": "#27282C",
        "blue-grey-900": "#1C1D1F",

        //red
        red: "#EA4335",
        "red-50": "#FFE7E9",
        "red-100": "#FFC5C5",
        "red-200-S": "#F28B82",
        "red-300": "#E45F54",
        "red-400": "#E6524F",
        "red-500-P": "#EA4236",
        "red-600": "#DB3935",
        "red-700": "#C92F30",
        "red-800": "#BC2928",
        "red-900": "#AD1D1D",

        //orange
        "orange-50": "#FFF3E0",
        "orange-100": "#FFE0B2",
        "orange-200-S": "#FFCC80",
        "orange-300": "#FFB74E",
        "orange-400": "#FFA727",
        "orange-500": "#FF9800",
        "orange-600": "#FB8C00",
        "orange-700": "#F57D01",
        "orange-800": "#EF6D00",
        "orange-900": "#E65000",

        //yellow
        yellow: "#FBBC04",
        "yellow-50": "#FEF9E5",
        "yellow-100": "#FDEDBD",
        "yellow-200-S": "#FBE393",
        "yellow-300": "#FBD967",
        "yellow-400": "#FBCE47",
        "yellow-500": "#FBC638",
        "yellow-600-P": "#F7AA01",
        "yellow-700": "#F9A72B",
        "yellow-800": "#F89728",
        "yellow-900": "#F77A1F",

        //green
        green: "#0F9D58",
        "green-50": "#E7F6EC",
        "green-100": "#C6E7D1",
        "green-200": "#A4D8B4",
        "green-300-S": "#80C996",
        "green-400": "#67BD80",
        "green-500": "#48B368",
        "green-600-P": "#33A852",
        "green-700": "#299547",
        "green-800": "#20843C",
        "green-900": "#0A6429",

        //blue
        blue: "#4285F4",
        "blue-50": "#E7F2FF",
        "blue-100": "#C6DEFD",
        "blue-200": "#A7C9FC",
        "blue-300-S": "#8AB5F8",
        "blue-400": "#7BA3F5",
        "blue-500": "#679EF8",
        "blue-600-P": "#4186F4",
        "blue-700": "#4073DF",
        "blue-800": "#3D62CD",
        "blue-900": "#3842AD",
      },
      boxShadow: {
        "gray-gradiate": "0 0 5px 0 rgba(0, 0, 0, 0.25)",
        "green-gradiate": "0px 0px 10px 0px rgba(15, 157, 88, 0.70)",
        "red-gradiate": "0px 4px 4px 0px rgba(226, 65, 53, 0.50)",
        "blue-gradiate": "0px 4px 4px 0px #4285F4",
        "lightgreen-gradiate": "0px 4px 4px 0px #0F9D58",
      },
      fontFamily: {
        NotoSansKR: ["NotoSansKR"],
      },
      fontSize: {
        Caption: ["0.75rem", { lineHeight: "16px", letterSpacing: "-0.025em", fontWeight: "700" }],
        Body1: ["1.25rem", { lineHeight: "28px", letterSpacing: "-0.025em", fontWeight: "500" }],
        Body2: ["1rem", { lineHeight: "24px", letterSpacing: "-0.025em", fontWeight: "500" }],
        Body2R: ["1rem", { lineHeight: "24px", letterSpacing: "-0.025em", fontWeight: "400" }],
        Body3: ["0.88rem", { lineHeight: "20px", letterSpacing: "-0.025em", fontWeight: "500" }],
        Body4: ["0.75rem", { lineHeight: "16px", letterSpacing: "-0.025em", fontWeight: "500" }],
        Body5: ["0.625rem", { lineHeight: "15px", letterSpacing: "-0.25px" }], // 10px
        Body6: ["1.25rem", { lineHeight: "24px" }], // 20px
        Body7: ["1rem", { lineHeight: "16px" }], //16px
        Body8: ["1.6rem", { lineHeight: "30px" }], //25px
        Button1: ["1.25rem", { lineHeight: "28px", letterSpacing: "-0.025em", fontWeight: "700" }],
        Button2: ["1rem", { lineHeight: "24px", letterSpacing: "-0.025em", fontWeight: "700" }],
        Head1: ["2rem", { lineHeight: "40px", letterSpacing: "-0.005em", fontWeight: "700" }],
        Head2: ["1.75rem", { lineHeight: "36px", fontWeight: "700" }],
        Head3: ["1.5rem", { lineHeight: "32px", fontWeight: "700" }],
        Head4: ["3.375rem", { lineHeight: "66px" }], // 54px
        Head4Mobile: ["1.25rem", { lineHeight: "1.2" }],
        Head4Tablet: ["2.625rem", { lineHeight: "1.2" }],
        Head5: ["2.2rem", { lineHeight: "28px", letterSpacing: "-0.875px" }], //35px
        Head5Mobile: ["0.937rem", { lineHeight: "28px" }],
        Head5Tablet: ["1.687rem", { lineHeight: "28px" }],
        Head6: ["2.56rem", { lineHeight: "28px", letterSpacing: "-1.025px" }], //41px
        Head6Tablet: ["2.0625rem", { lineHeight: "28px", letterSpacing: "-0.825px" }],
        Head6Moblie: ["1.25rem", { lineHeight: "28px", letterSpacing: "-0.5px" }],
        Head7: ["2.625rem", { lineHeight: "103px", letterSpacing: "-1.025px" }], //42px
        Head8: ["3.25rem", { lineHeight: "52px", letterSpacing: "-1.3px" }], //52px
      },
    },

    screens: {
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      desktop: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [require("@tailwindcss/typography"), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

export default config;
