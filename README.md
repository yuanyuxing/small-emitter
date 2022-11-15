## Installation

```bash
npm i -S @yyxing/small-emitter
```

use:

```ts
// ES Module
import { createEmitter } from "small-emitter";

const emit = createEmitter();

emit.on();

emit.once();

emit.off();

emit.emit();
```

```ts
// common.js
const { createEmitter } = require("small-emitter");

const emit = createEmitter();

emit.on();

emit.once();

emit.off();

emit.emit();
```
