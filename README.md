
<!--#echo json="package.json" key="name" underline="=" -->
rxeat170819
===========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
If the regexp matches, eat the matched part and optionally digest it.
<!--/#echo -->


Usage
-----

from [test.usage.js](test.usage.js):

<!--#include file="test.usage.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="41" -->
```javascript
var rxEat = require('rxeat170819'), e, m,
  same = require('assert').deepStrictEqual;

e = rxEat('Hello huuungry wooorld!');
same(e.m, false);
same(e.tx, 'Hello huuungry wooorld!');

m = e(/yu(m+)y/);
same(m, false);
same(e.tx, 'Hello huuungry wooorld!');

m = e(/h(u+)ngry\s*/);
same(m.slice(), ['huuungry ', 'uuu']);
same(m.index, 6);
same(e.tx, 'Hello wooorld!');
same(e(0), 'huuungry ');
same(e(1), 'uuu');
same(e.pos, 6);
same(e.len, 9);

// transform result with a digest function:
function lenx(x) { return { x: x, n: x.length }; }
m = e(/w(o+)rld/, lenx);
same(m, { x: 'ooo', n: 3 });
same(e.tx, 'Hello !');
same(e(0), 'wooorld');
same(e(1), 'ooo');
same(e.pos, 6);
same(e.len, 7);

m = e(/sw(e+)t/, lenx);
same(m, false);
// no new match means old match cache values are kept:
same(e.tx, 'Hello !');
same(e(0), 'wooorld');
same(e(1), 'ooo');
same(e.pos, 6);
same(e.len, 7);

```
<!--/include-->



<!--#toc stop="scan" -->



Known issues
------------

* needs more/better tests and docs




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
