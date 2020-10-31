# jacobs-alumni-style
Style Elements for Jacobs Alumni Portal and Website

This is intended to be used with [webpack](https://webpack.js.org/) like:

```javascript
require("jacobs-alumni-style");
```

In [NextJS](https://nextjs.org/) it can instead be used like:

```typescript
// in _app.js / _app.tsx
import "jacobs-alumni-style/src/style.scss";
import globalInit from "jacobs-alumni-style/src/style.mjs";

// ...
export default class App extends NextApp {
    componentDidMount() {
        globalInit();
    }
    render() {
        // ...
    }
}


// if you're using typescript, you also want to use this in next-env.d.ts:

/// <reference types="jacobs-alumni-style" />
```

This will add both required JavaScript and CSS to the page. 
