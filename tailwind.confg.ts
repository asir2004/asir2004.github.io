/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}', // 扫描你的源文件，确保 Tailwind 识别所有类
    ],
    theme: {
        extend: {}, // 可选：扩展 Tailwind 主题
    },
    plugins: [],
    corePlugins: {
        preflight: false, // 禁用 Tailwind 的 CSS 重置，防止干扰 Prism.js
    },
    safelist: [
        'line-numbers', // 保留 Prism.js 的 line-numbers 类
        { pattern: /^language-/ }, // 保留 Prism.js 的语言类（如 language-javascript）
    ],
};