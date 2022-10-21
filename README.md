# tsducer

[![npm](https://img.shields.io/npm/v/tsducer?style=for-the-badge)](https://www.npmjs.com/package/tsducer)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/sumboid/tsducer/Build%20&%20test?style=for-the-badge)](https://github.com/sumboid/tsducer/actions/workflows/ci.yaml)

## Example

```typescript
import * as tsd from 'tsducer';

const xf = tsd.compose(
  tsd.filter((x: number) => x % 2 !== 0),
  tsd.map((x) => x * 2),
  tsd.map((x) => x.toString()),
  tsd.take(2)
);
const tTransform = tsd.transduce(xf, tsd.append, [] as string[]);
const iTransform = tsd.into([], xf);

tTransform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // -> ['2', '6']
iTransform([], xf)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // -> ['2', '6']
[...tsd.sequence(xf, [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10])] // -> ['2', '6']
```

## References

https://clojure.org/reference/transducers
