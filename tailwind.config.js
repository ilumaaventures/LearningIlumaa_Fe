/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#EEF4FB",
        "bg-secondary": "#E2EDF8",
        "bg-card": "#101D38",
        "accent-blue": "#4D7CFF",
        "accent-cyan": "#38BDF8",
        "accent-violet": "#8B5CF6",
        "accent-teal": "#14B8A6",
        "accent-gold": "#F59E0B",
        "text-primary": "#0F172A",
        "text-secondary": "#A7B4D0",
        "border-subtle": "rgba(148,163,184,0.16)",
      },
      fontFamily: {
        heading: ['"Outfit"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56,189,248,0.18), 0 24px 60px rgba(77,124,255,0.18)",
        gold: "0 18px 40px rgba(245,158,11,0.24)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35", transform: "scaleX(0.96)" },
          "50%": { opacity: "1", transform: "scaleX(1)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(16px, -18px, 0) scale(1.04)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-line": "pulseLine 3s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
