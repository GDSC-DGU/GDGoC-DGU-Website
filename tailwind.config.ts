import type { Config } from "tailwindcss";

/**
 * Tailwind CSS 설정 파일입니다.
 * @author 도형
 */

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--neutral-700)",
        secondary: "var(--neutral-500)",
        datadogPrimary: "#632CA6",
      },
      fontFamily: {
        sans: ["Pretendard", "Apple SD Gothic Neo", "sans-serif"],
        Pretendard: ["Pretendard", "sans-serif"],
        Tossface: ["Tossface", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        AppleSDGothicNeo: ["Apple SD Gothic Neo", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
