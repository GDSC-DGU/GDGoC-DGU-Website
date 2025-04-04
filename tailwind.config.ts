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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
      },
      fontFamily: {
        NotoSansKR: ["NotoSansKR"],
      },
      fontSize: {
        caption: ["0.75rem", { lineHeight: "16px", letterSpacing: "-0.3px" }], // 12px
        Body1: ["1.25rem", { lineHeight: "28px", letterSpacing: "-0.5px" }], // 20px
        Body2: ["1rem", { lineHeight: "24px", letterSpacing: "-0.4px" }], // 16px
        Body3: ["0.875rem", { lineHeight: "20px", letterSpacing: "-0.35px" }], // 14px
        Body4: ["1.25rem", { lineHeight: "30px", letterSpacing: "-0.5px" }], // 20px
        Body5: ["0.625rem", { lineHeight: "15px", letterSpacing: "-0.25px" }], // 10px
        Head1: ["1.625rem", { lineHeight: "35px", letterSpacing: "-0.625px" }], //26px
        Head2: ["0.75rem", { lineHeight: "18px", letterSpacing: "-0.3px" }], // 12px
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
