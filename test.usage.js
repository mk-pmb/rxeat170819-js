/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

try { require('usnam-pmb'); } catch (ignore) {}


(function readmeDemo() {
  //#u
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

  //#r
}());









console.log("+OK usage test passed.");    //= "+OK usage test passed."
