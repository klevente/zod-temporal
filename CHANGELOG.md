# zod-temporal

## 0.0.1

### Patch Changes

- 3c5fac4: Add `instant` schema:

  ```ts
  import { instant } from 'zod-temporal';

  const value = instant.parse('2023-02-08T13:43Z');
  console.log(value.toJSON()); // 2023-02-08T13:43:00Z
  ```
