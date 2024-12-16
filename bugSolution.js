The issue was resolved by modifying `tailwind.config.js` to include the dynamically generated component's template file in the `purge` option:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // Added this line to include the dynamic component's template
    './src/components/DynamicComponent.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Alternatively, if you know the specific classes that are causing the issue, you can use `safelist` to explicitly include them in the final output without needing to modify `purge`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other configurations
  safelist: ['bg-red-500', 'text-white'], //add the classes you want to be safe listed
}
```