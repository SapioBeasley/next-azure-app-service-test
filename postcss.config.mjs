/** @type {import('postcss-load-config').Config} */
const config = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'standalone',
  plugins: {
    tailwindcss: {},
  },
};

export default config;
