# React Sharing-State-Between-Components (React 19 + Vite)

https://www.youtube.com/watch?v=1JYtdE1VRLM&t=17s

This project demonstrates sharing state between components in React:

- **Uncontrolled components**: each panel manages its own `isActive`.
- **Lifting state up**: move state to the nearest common parent.
- **Controlled components**: parent owns `activeIndex` and passes props down.
- **Single source of truth**: toggle whole app mode from the top-level `App`.

## Requirements
- Node.js 18+ recommended

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production
```bash
npm run build
npm run preview
```
