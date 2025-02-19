/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		colors: {
		  background: 'hsl(189, 41%, 97%)', // Very light grayish cyan
		  foreground: 'hsl(0, 0%, 0%)', // You can specify this based on your design
		  card: {
			DEFAULT: 'hsl(185, 41%, 84%)', // Light grayish cyan
			foreground: 'hsl(0, 0%, 0%)', // You can specify this based on your design
		  },
		  popover: {
			DEFAULT: 'hsl(186, 14%, 43%)', // Dark grayish cyan
			foreground: 'hsl(0, 0%, 0%)', // You can specify this based on your design
		  },
		  primary: {
			DEFAULT: 'hsl(172, 67%, 45%)', // Strong cyan
			foreground: 'hsl(0, 0%, 100%)', // White
		  },
		  secondary: {
			DEFAULT: 'hsl(183, 100%, 15%)', // Very dark cyan
			foreground: 'hsl(0, 0%, 100%)', // White
		  },
		  muted: {
			DEFAULT: 'hsl(184, 14%, 56%)', // Grayish cyan
			foreground: 'hsl(0, 0%, 0%)', // You can specify this based on your design
		  },
		  accent: {
			DEFAULT: 'hsl(172, 67%, 45%)', // Strong cyan
			foreground: 'hsl(0, 0%, 100%)', // White
		  },
		  destructive: {
			DEFAULT: 'hsl(0, 100%, 50%)', // Specify your destructive color
			foreground: 'hsl(0, 0%, 100%)', // You can specify this based on your design
		  },
		  border: 'hsl(186, 14%, 43%)', // Dark grayish cyan
		  input: 'hsl(185, 41%, 84%)', // Light grayish cyan
		  ring: 'hsl(186, 14%, 43%)', // Dark grayish cyan
		  chart: {
			'1': 'hsl(172, 67%, 45%)',
			'2': 'hsl(183, 100%, 15%)',
			'3': 'hsl(186, 14%, 43%)',
			'4': 'hsl(184, 14%, 56%)',
			'5': 'hsl(185, 41%, 84%)',
		  },
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }
  