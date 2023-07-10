/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: '#3C404A',
	white: twColors.white,
	primary: '#F9A22E',
	secondary: '#171C24',
	'bg-color': '#F2F2F5',
	aqua: '#268697'
}

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		// './components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors,
		extend: {
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-in-out'
			}
		}
	},
	plugins: []
}
