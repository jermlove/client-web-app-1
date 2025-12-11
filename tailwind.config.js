module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navigator-orange': '#FF8C42',
        'navigator-tangerine': '#FFB366',
        'navigator-teal': '#00D9C0',
        'navigator-cyan': '#00FFF5',
        'navigator-dark': '#1A1A2E',
        'navigator-charcoal': '#16213E',
      },
    },
  },
  plugins: [],
}
