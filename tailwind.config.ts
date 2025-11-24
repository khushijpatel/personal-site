import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Portfolio theme colors - nature inspired with more variety
        forest: {
          900: "#022c22",
          800: "#064e3b",
          700: "#047857",
        },
        aurora: "#34d399",
        // Enhanced color palette with blues and purples
        blue: {
          "100": "#7dd3fc", // ocean-300
          "200": "#38bdf8", // sky-400
          "300": "#0ea5e9", // ocean-500
          DEFAULT: "#0ea5e9", // ocean-500
        },
        purple: {
          "400": "#a855f7", // violet-500
          "500": "#8b5cf6", // violet-500
          DEFAULT: "#CBACF9", // light purple for accents
        },
        // Keep existing structure but enhance with more colors
        black: {
          DEFAULT: "#022c22", // forest-900
          100: "#064e3b", // forest-800
          200: "rgba(2, 44, 34, 0.75)", // forest-900 with opacity
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#f5f5f4", // sand-100
          100: "#d6d3d1", // sand-300
          200: "#a8a29e", // sand-500
        },
        // Galaxy-themed color palette
        'deep-space': {
          50: '#f0f0ff',   // starlight
          100: '#e0e0ff',  // light star
          200: '#c0c0ff',  // bright star
          300: '#a0a0ff',  // stellar blue
          400: '#8080ff',  // cosmic blue
          500: '#6060ff',  // nebula blue
          600: '#4040ff',  // deep nebula
          700: '#2020ff',  // space blue
          800: '#1a1a2e',  // midnight
          900: '#0f0f23',  // deep space
        },
        'cosmic-purple': {
          50: '#faf5ff',   // nebula white
          100: '#f3e8ff',  // light nebula
          200: '#e9d5ff',  // soft nebula
          300: '#d8b4fe',  // nebula glow
          400: '#c084fc',  // stellar purple
          500: '#a855f7',  // cosmic purple
          600: '#9333ea',  // deep purple
          700: '#7c3aed',  // space purple
          800: '#6b46c1',  // dark purple
          900: '#581c87',  // void purple
        },
        'nebula-pink': {
          50: '#fdf2f8',   // pink starlight
          100: '#fce7f3',  // soft pink
          200: '#fbcfe8',  // light nebula
          300: '#f9a8d4',  // pink glow
          400: '#f472b6',  // bright nebula
          500: '#ff6bff',  // nebula pink
          600: '#ec4899',  // cosmic pink
          700: '#db2777',  // stellar pink
          800: '#be185d',  // deep pink
          900: '#9d174d',  // void pink
        },
        'stardust': {
          50: '#f8fafc',   // pure starlight  
          100: '#f1f5f9',  // bright dust
          200: '#e2e8f0',  // light dust
          300: '#cbd5e1',  // stellar dust
          400: '#94a3b8',  // cosmic dust
          500: '#64748b',  // nebula dust
          600: '#475569',  // dark dust
          700: '#334155',  // space dust
          800: '#1e293b',  // void dust
          900: '#0f172a',  // deep void
        },
        // Beach-themed color palette
        'ocean': {
          50: '#f0f9ff',   // light sky
          100: '#e0f2fe',  // pale blue
          200: '#bae6fd',  // light blue
          300: '#7dd3fc',  // sky blue
          400: '#38bdf8',  // bright blue
          500: '#0ea5e9',  // ocean blue
          600: '#0284c7',  // deep blue
          700: '#0369a1',  // darker blue
          800: '#075985',  // navy blue
          900: '#003366',  // deep ocean
        },
        'sand': {
          50: '#fffbf0',   // cream white
          100: '#fff8e7',  // light cream
          200: '#ffecc4',  // pale sand
          300: '#ffd591',  // light sand
          400: '#ffb84d',  // warm sand
          500: '#f4e4bc',  // beach sand
          600: '#d4a574',  // tan
          700: '#b8956a',  // brown sand
          800: '#9c7c54',  // dark sand
          900: '#7a5f3e',  // deep sand
        },
        'coral': {
          50: '#fff7ed',   // light peach
          100: '#ffedd5',  // soft coral
          200: '#fed7aa',  // pale coral
          300: '#fdba74',  // light coral
          400: '#fb923c',  // warm coral
          500: '#ff7f50',  // coral
          600: '#ea580c',  // deep coral
          700: '#c2410c',  // darker coral
          800: '#9a3412',  /* burnt coral */
          900: '#7c2d12',  /* deep coral */
        },
        'tropical': {
          50: '#ecfdf5',   /* light mint */
          100: '#d1fae5',  /* pale tropical */
          200: '#a7f3d0',  /* light tropical */
          300: '#6ee7b7',  /* mint green */
          400: '#34d399',  /* tropical green */
          500: '#14b8a6',  /* tropical teal */
          600: '#0d9488',  /* teal */
          700: '#0f766e',  /* dark teal */
          800: '#115e59',  /* deep teal */
          900: '#134e4a',  /* darkest teal */
        },
        'sunset': {
          50: '#fffbeb',   /* light yellow */
          100: '#fef3c7',  /* pale yellow */
          200: '#fde68a',  /* light gold */
          300: '#fcd34d',  /* gold */
          400: '#fbbf24',  /* amber */
          500: '#f0e68c',  /* khaki */
          600: '#d69e2e',  /* darker gold */
          700: '#b7791f',  /* bronze */
          800: '#975a16',  /* dark bronze */
          900: '#744210',  /* deep bronze */
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "galaxy-shift": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        twinkle: {
          "0%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
          "100%": { opacity: "0.3", transform: "scale(1)" },
        },
        "nebula-drift": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(-20px, -10px) rotate(1deg)" },
          "50%": { transform: "translate(10px, -20px) rotate(-0.5deg)" },
          "75%": { transform: "translate(-10px, 10px) rotate(0.5deg)" },
        },
        "shooting-star": {
          "0%": { 
            transform: "translateX(-100px) translateY(-100px) rotate(45deg)",
            opacity: "0"
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { 
            transform: "translateX(100vw) translateY(100vh) rotate(45deg)",
            opacity: "0"
          },
        },
        "wave-motion": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        drift: {
          "0%": { opacity: "0.3", transform: "translateY(0px) scale(1)" },
          "50%": { opacity: "1", transform: "translateY(-10px) scale(1.1)" },
          "100%": { opacity: "0.3", transform: "translateY(0px) scale(1)" },
        },
        "ocean-waves": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(-15px, -5px) rotate(0.5deg)" },
          "50%": { transform: "translate(10px, -15px) rotate(-0.3deg)" },
          "75%": { transform: "translate(-5px, 5px) rotate(0.3deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
        "galaxy-shift": "galaxyShift 20s ease infinite",
        "twinkle": "twinkle 4s linear infinite",
        "nebula-drift": "nebulaDrift 30s ease-in-out infinite",
        "shooting-star": "shootingStar 3s linear infinite",
        "wave-motion": "waveMotion 25s ease infinite",
        "drift": "drift 6s linear infinite",
        "ocean-waves": "oceanWaves 20s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

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