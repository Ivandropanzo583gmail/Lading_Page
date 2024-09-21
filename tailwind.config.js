//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' }, // Pode ajustar a distância que quiser
        },
      },
      animation: {
        'move-image': 'move 20s infinite linear', // Duração e repetição da animação
      }
    },
  },
  plugins: [],
}

