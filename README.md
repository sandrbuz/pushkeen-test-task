# Pushkeen test task

## 🌐 Live Demo

**[Try it online →](https://pushkeen-test-task.netlify.app/)**

### Usage

Install all dependencies:

```
npm i
```

Run the development server (localhost:3000):

```
npm run dev
```

### Card Data

The initial set of cards is located in [`constants/cards.ts`](./src/constants/cards.ts).  
Since the card data is static and not subject to runtime updates (e.g., adding/removing cards), it is treated as a **constant**, not component state.

### Styles/cross-browser compatibility

- Styled-components has a style reset for cross-browser compatibility
- Checked cross-browser compatibility on BrowserStack and used modern, supported css - properties
