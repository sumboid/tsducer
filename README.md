# tsducer

![npm](https://img.shields.io/npm/v/tsducer?style=for-the-badge)
![GitHub branch checks state](https://img.shields.io/github/checks-status/sumboid/tsducer/master?style=for-the-badge)

## Example

```typescript
import * as tsd from 'tsducer';

const xf = tsd.compose(
  tsd.filter((x: number) => x % 2 !== 0),
  tsd.map((x) => x * 2),
  tsd.map((x) => x.toString()),
  tsd.take(2)
);
const beep = tsd.transduce(xf, tsd.append, [] as string[]);

beep([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // -> ['2', '6']
```

## References

https://clojure.org/reference/transducers
