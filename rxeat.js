/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = function makeRxEater(tx) {
  var f = function eatRx(r, digest) {
    if (r === +r) { return f.m[r]; }
    var m = r.exec(f.tx);
    if (!m) { return false; }
    f.m = m;
    f.pos = m.index;
    f.len = m[0].length;
    f.head = f.tx.slice(0, f.pos);
    f.tail = f.tx.slice(f.pos + f.len);
    f.tx = (f.pos ? f.head + f.tail : f.tail);
    if (digest) { return digest.apply(f, m.slice(1)); }
    return m;
  };
  f.m = false;
  f.tx = tx;
  return f;
};
