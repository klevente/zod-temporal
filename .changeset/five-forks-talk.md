---
'zod-temporal': patch
---

Add `instant` schema:

```ts
import { instant } from 'zod-temporal';

const value = instant.parse('2023-02-08T13:43Z');
console.log(value.toJSON()); // 2023-02-08T13:43:00Z
```
