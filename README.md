# Tailwind Purge Conflict with Dynamic Components

This repository demonstrates a bug where Tailwind CSS classes fail to apply due to a conflict between the purge functionality and dynamically generated components.  The issue arises when components are created and rendered after the initial Tailwind build process.  The solution involves carefully configuring Tailwind's purge options to ensure that dynamically generated classes are included in the final CSS output.

## Steps to Reproduce

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe that the dynamically generated component does not have Tailwind classes applied.

## Solution

The solution involves modifying the `tailwind.config.js` file to correctly handle the dynamically generated components. This is achieved by adjusting the `purge` options to include the necessary paths or using `safelist` to explicitly include the classes.