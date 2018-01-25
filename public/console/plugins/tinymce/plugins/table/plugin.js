(function () {
var table = (function () {
  'use strict';

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var noop = function () {
  };
  var noarg = function (f) {
    return function () {
      return f();
    };
  };
  var compose = function (fa, fb) {
    return function () {
      return fa(fb.apply(null, arguments));
    };
  };
  var constant = function (value) {
    return function () {
      return value;
    };
  };
  var identity = function (x) {
    return x;
  };
  var tripleEquals = function (a, b) {
    return a === b;
  };
  var curry = function (f) {
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    return function () {
      var newArgs = new Array(arguments.length);
      for (var j = 0; j < newArgs.length; j++)
        newArgs[j] = arguments[j];
      var all = args.concat(newArgs);
      return f.apply(null, all);
    };
  };
  var not = function (f) {
    return function () {
      return !f.apply(null, arguments);
    };
  };
  var die = function (msg) {
    return function () {
      throw new Error(msg);
    };
  };
  var apply = function (f) {
    return f();
  };
  var call = function (f) {
    f();
  };
  var never$1 = constant(false);
  var always$1 = constant(true);
  var $_17hg00jijctdj3jv = {
    noop: noop,
    noarg: noarg,
    compose: compose,
    constant: constant,
    identity: identity,
    tripleEquals: tripleEquals,
    curry: curry,
    not: not,
    die: die,
    apply: apply,
    call: call,
    never: never$1,
    always: always$1
  };

  var never = $_17hg00jijctdj3jv.never;
  var always = $_17hg00jijctdj3jv.always;
  var none = function () {
    return NONE;
  };
  var NONE = function () {
    var eq = function (o) {
      return o.isNone();
    };
    var call = function (thunk) {
      return thunk();
    };
    var id = function (n) {
      return n;
    };
    var noop = function () {
    };
    var me = {
      fold: function (n, s) {
        return n();
      },
      is: never,
      isSome: never,
      isNone: always,
      getOr: id,
      getOrThunk: call,
      getOrDie: function (msg) {
        throw new Error(msg || 'error: getOrDie called on none.');
      },
      or: id,
      orThunk: call,
      map: none,
      ap: none,
      each: noop,
      bind: none,
      flatten: none,
      exists: never,
      forall: always,
      filter: none,
      equals: eq,
      equals_: eq,
      toArray: function () {
        return [];
      },
      toString: $_17hg00jijctdj3jv.constant('none()')
    };
    if (Object.freeze)
      Object.freeze(me);
    return me;
  }();
  var some = function (a) {
    var constant_a = function () {
      return a;
    };
    var self = function () {
      return me;
    };
    var map = function (f) {
      return some(f(a));
    };
    var bind = function (f) {
      return f(a);
    };
    var me = {
      fold: function (n, s) {
        return s(a);
      },
      is: function (v) {
        return a === v;
      },
      isSome: always,
      isNone: never,
      getOr: constant_a,
      getOrThunk: constant_a,
      getOrDie: constant_a,
      or: self,
      orThunk: self,
      map: map,
      ap: function (optfab) {
        return optfab.fold(none, function (fab) {
          return some(fab(a));
        });
      },
      each: function (f) {
        f(a);
      },
      bind: bind,
      flatten: constant_a,
      exists: bind,
      forall: bind,
      filter: function (f) {
        return f(a) ? me : NONE;
      },
      equals: function (o) {
        return o.is(a);
      },
      equals_: function (o, elementEq) {
        return o.fold(never, function (b) {
          return elementEq(a, b);
        });
      },
      toArray: function () {
        return [a];
      },
      toString: function () {
        return 'some(' + a + ')';
      }
    };
    return me;
  };
  var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
  };
  var $_41pgl8jhjctdj3jt = {
    some: some,
    none: none,
    from: from
  };

  var rawIndexOf = function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) {
      return pIndexOf.call(xs, x);
    };
    var slowIndex = function (xs, x) {
      return slowIndexOf(xs, x);
    };
    return pIndexOf === undefined ? slowIndex : fastIndex;
  }();
  var indexOf = function (xs, x) {
    var r = rawIndexOf(xs, x);
    return r === -1 ? $_41pgl8jhjctdj3jt.none() : $_41pgl8jhjctdj3jt.some(r);
  };
  var contains = function (xs, x) {
    return rawIndexOf(xs, x) > -1;
  };
  var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
  };
  var range = function (num, f) {
    var r = [];
    for (var i = 0; i < num; i++) {
      r.push(f(i));
    }
    return r;
  };
  var chunk = function (array, size) {
    var r = [];
    for (var i = 0; i < array.length; i += size) {
      var s = array.slice(i, i + size);
      r.push(s);
    }
    return r;
  };
  var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i, xs);
    }
    return r;
  };
  var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var eachr = function (xs, f) {
    for (var i = xs.length - 1; i >= 0; i--) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var partition = function (xs, pred) {
    var pass = [];
    var fail = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      var arr = pred(x, i, xs) ? pass : fail;
      arr.push(x);
    }
    return {
      pass: pass,
      fail: fail
    };
  };
  var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        r.push(x);
      }
    }
    return r;
  };
  var groupBy = function (xs, f) {
    if (xs.length === 0) {
      return [];
    } else {
      var wasType = f(xs[0]);
      var r = [];
      var group = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        var type = f(x);
        if (type !== wasType) {
          r.push(group);
          group = [];
        }
        wasType = type;
        group.push(x);
      }
      if (group.length !== 0) {
        r.push(group);
      }
      return r;
    }
  };
  var foldr = function (xs, f, acc) {
    eachr(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var foldl = function (xs, f, acc) {
    each(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var find = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return $_41pgl8jhjctdj3jt.some(x);
      }
    }
    return $_41pgl8jhjctdj3jt.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return $_41pgl8jhjctdj3jt.some(i);
      }
    }
    return $_41pgl8jhjctdj3jt.none();
  };
  var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  };
  var push = Array.prototype.push;
  var flatten = function (xs) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!Array.prototype.isPrototypeOf(xs[i]))
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      push.apply(r, xs[i]);
    }
    return r;
  };
  var bind = function (xs, f) {
    var output = map(xs, f);
    return flatten(output);
  };
  var forall = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      var x = xs[i];
      if (pred(x, i, xs) !== true) {
        return false;
      }
    }
    return true;
  };
  var equal = function (a1, a2) {
    return a1.length === a2.length && forall(a1, function (x, i) {
      return x === a2[i];
    });
  };
  var slice = Array.prototype.slice;
  var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
  };
  var difference = function (a1, a2) {
    return filter(a1, function (x) {
      return !contains(a2, x);
    });
  };
  var mapToObject = function (xs, f) {
    var r = {};
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      r[String(x)] = f(x, i);
    }
    return r;
  };
  var pure = function (x) {
    return [x];
  };
  var sort = function (xs, comparator) {
    var copy = slice.call(xs, 0);
    copy.sort(comparator);
    return copy;
  };
  var head = function (xs) {
    return xs.length === 0 ? $_41pgl8jhjctdj3jt.none() : $_41pgl8jhjctdj3jt.some(xs[0]);
  };
  var last = function (xs) {
    return xs.length === 0 ? $_41pgl8jhjctdj3jt.none() : $_41pgl8jhjctdj3jt.some(xs[xs.length - 1]);
  };
  var $_cya8qajgjctdj3jm = {
    map: map,
    each: each,
    eachr: eachr,
    partition: partition,
    filter: filter,
    groupBy: groupBy,
    indexOf: indexOf,
    foldr: foldr,
    foldl: foldl,
    find: find,
    findIndex: findIndex,
    flatten: flatten,
    bind: bind,
    forall: forall,
    exists: exists,
    contains: contains,
    equal: equal,
    reverse: reverse,
    chunk: chunk,
    difference: difference,
    mapToObject: mapToObject,
    pure: pure,
    sort: sort,
    range: range,
    head: head,
    last: last
  };

  var keys = function () {
    var fastKeys = Object.keys;
    var slowKeys = function (o) {
      var r = [];
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          r.push(i);
        }
      }
      return r;
    };
    return fastKeys === undefined ? slowKeys : fastKeys;
  }();
  var each$1 = function (obj, f) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i, obj);
    }
  };
  var objectMap = function (obj, f) {
    return tupleMap(obj, function (x, i, obj) {
      return {
        k: i,
        v: f(x, i, obj)
      };
    });
  };
  var tupleMap = function (obj, f) {
    var r = {};
    each$1(obj, function (x, i) {
      var tuple = f(x, i, obj);
      r[tuple.k] = tuple.v;
    });
    return r;
  };
  var bifilter = function (obj, pred) {
    var t = {};
    var f = {};
    each$1(obj, function (x, i) {
      var branch = pred(x, i) ? t : f;
      branch[i] = x;
    });
    return {
      t: t,
      f: f
    };
  };
  var mapToArray = function (obj, f) {
    var r = [];
    each$1(obj, function (value, name) {
      r.push(f(value, name));
    });
    return r;
  };
  var find$1 = function (obj, pred) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      if (pred(x, i, obj)) {
        return $_41pgl8jhjctdj3jt.some(x);
      }
    }
    return $_41pgl8jhjctdj3jt.none();
  };
  var values = function (obj) {
    return mapToArray(obj, function (v) {
      return v;
    });
  };
  var size = function (obj) {
    return values(obj).length;
  };
  var $_5bka9ljkjctdj3kc = {
    bifilter: bifilter,
    each: each$1,
    map: objectMap,
    mapToArray: mapToArray,
    tupleMap: tupleMap,
    find: find$1,
    keys: keys,
    values: values,
    size: size
  };

  var Immutable = function () {
    var fields = arguments;
    return function () {
      var values = new Array(arguments.length);
      for (var i = 0; i < values.length; i++)
        values[i] = arguments[i];
      if (fields.length !== values.length)
        throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
      var struct = {};
      $_cya8qajgjctdj3jm.each(fields, function (name, i) {
        struct[name] = $_17hg00jijctdj3jv.constant(values[i]);
      });
      return struct;
    };
  };

  var typeOf = function (x) {
    if (x === null)
      return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
      return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
      return 'string';
    return t;
  };
  var isType = function (type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };
  var $_exkoajjpjctdj3kq = {
    isString: isType('string'),
    isObject: isType('object'),
    isArray: isType('array'),
    isNull: isType('null'),
    isBoolean: isType('boolean'),
    isUndefined: isType('undefined'),
    isFunction: isType('function'),
    isNumber: isType('number')
  };

  var sort$1 = function (arr) {
    return arr.slice(0).sort();
  };
  var reqMessage = function (required, keys) {
    throw new Error('All required keys (' + sort$1(required).join(', ') + ') were not specified. Specified keys were: ' + sort$1(keys).join(', ') + '.');
  };
  var unsuppMessage = function (unsupported) {
    throw new Error('Unsupported keys for object: ' + sort$1(unsupported).join(', '));
  };
  var validateStrArr = function (label, array) {
    if (!$_exkoajjpjctdj3kq.isArray(array))
      throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    $_cya8qajgjctdj3jm.each(array, function (a) {
      if (!$_exkoajjpjctdj3kq.isString(a))
        throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
    });
  };
  var invalidTypeMessage = function (incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort$1(incorrect).join(', ') + ') were not.');
  };
  var checkDupes = function (everything) {
    var sorted = sort$1(everything);
    var dupe = $_cya8qajgjctdj3jm.find(sorted, function (s, i) {
      return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
      throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
  };
  var $_1ud6jhjojctdj3ko = {
    sort: sort$1,
    reqMessage: reqMessage,
    unsuppMessage: unsuppMessage,
    validateStrArr: validateStrArr,
    invalidTypeMessage: invalidTypeMessage,
    checkDupes: checkDupes
  };

  var MixedBag = function (required, optional) {
    var everything = required.concat(optional);
    if (everything.length === 0)
      throw new Error('You must specify at least one required or optional field.');
    $_1ud6jhjojctdj3ko.validateStrArr('required', required);
    $_1ud6jhjojctdj3ko.validateStrArr('optional', optional);
    $_1ud6jhjojctdj3ko.checkDupes(everything);
    return function (obj) {
      var keys = $_5bka9ljkjctdj3kc.keys(obj);
      var allReqd = $_cya8qajgjctdj3jm.forall(required, function (req) {
        return $_cya8qajgjctdj3jm.contains(keys, req);
      });
      if (!allReqd)
        $_1ud6jhjojctdj3ko.reqMessage(required, keys);
      var unsupported = $_cya8qajgjctdj3jm.filter(keys, function (key) {
        return !$_cya8qajgjctdj3jm.contains(everything, key);
      });
      if (unsupported.length > 0)
        $_1ud6jhjojctdj3ko.unsuppMessage(unsupported);
      var r = {};
      $_cya8qajgjctdj3jm.each(required, function (req) {
        r[req] = $_17hg00jijctdj3jv.constant(obj[req]);
      });
      $_cya8qajgjctdj3jm.each(optional, function (opt) {
        r[opt] = $_17hg00jijctdj3jv.constant(Object.prototype.hasOwnProperty.call(obj, opt) ? $_41pgl8jhjctdj3jt.some(obj[opt]) : $_41pgl8jhjctdj3jt.none());
      });
      return r;
    };
  };

  var $_2gilnfjljctdj3kj = {
    immutable: Immutable,
    immutableBag: MixedBag
  };

  var dimensions = $_2gilnfjljctdj3kj.immutable('width', 'height');
  var grid = $_2gilnfjljctdj3kj.immutable('rows', 'columns');
  var address = $_2gilnfjljctdj3kj.immutable('row', 'column');
  var coords = $_2gilnfjljctdj3kj.immutable('x', 'y');
  var detail = $_2gilnfjljctdj3kj.immutable('element', 'rowspan', 'colspan');
  var detailnew = $_2gilnfjljctdj3kj.immutable('element', 'rowspan', 'colspan', 'isNew');
  var extended = $_2gilnfjljctdj3kj.immutable('element', 'rowspan', 'colspan', 'row', 'column');
  var rowdata = $_2gilnfjljctdj3kj.immutable('element', 'cells', 'section');
  var elementnew = $_2gilnfjljctdj3kj.immutable('element', 'isNew');
  var rowdatanew = $_2gilnfjljctdj3kj.immutable('element', 'cells', 'section', 'isNew');
  var rowcells = $_2gilnfjljctdj3kj.immutable('cells', 'section');
  var rowdetails = $_2gilnfjljctdj3kj.immutable('details', 'section');
  var bounds = $_2gilnfjljctdj3kj.immutable('startRow', 'startCol', 'finishRow', 'finishCol');
  var $_6gworajrjctdj3ky = {
    dimensions: dimensions,
    grid: grid,
    address: address,
    coords: coords,
    extended: extended,
    detail: detail,
    detailnew: detailnew,
    rowdata: rowdata,
    elementnew: elementnew,
    rowdatanew: rowdatanew,
    rowcells: rowcells,
    rowdetails: rowdetails,
    bounds: bounds
  };

  var fromHtml = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      console.error('HTML does not have a single root node', html);
      throw 'HTML must have a single root node';
    }
    return fromDom(div.childNodes[0]);
  };
  var fromTag = function (tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom(node);
  };
  var fromText = function (text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom(node);
  };
  var fromDom = function (node) {
    if (node === null || node === undefined)
      throw new Error('Node cannot be null or undefined');
    return { dom: $_17hg00jijctdj3jv.constant(node) };
  };
  var fromPoint = function (doc, x, y) {
    return $_41pgl8jhjctdj3jt.from(doc.dom().elementFromPoint(x, y)).map(fromDom);
  };
  var $_4jfq4gjvjctdj3lt = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var $_g4j77jwjctdj3lx = {
    ATTRIBUTE: 2,
    CDATA_SECTION: 4,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    ELEMENT: 1,
    TEXT: 3,
    PROCESSING_INSTRUCTION: 7,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    NOTATION: 12
  };

  var ELEMENT = $_g4j77jwjctdj3lx.ELEMENT;
  var DOCUMENT = $_g4j77jwjctdj3lx.DOCUMENT;
  var is = function (element, selector) {
    var elem = element.dom();
    if (elem.nodeType !== ELEMENT)
      return false;
    else if (elem.matches !== undefined)
      return elem.matches(selector);
    else if (elem.msMatchesSelector !== undefined)
      return elem.msMatchesSelector(selector);
    else if (elem.webkitMatchesSelector !== undefined)
      return elem.webkitMatchesSelector(selector);
    else if (elem.mozMatchesSelector !== undefined)
      return elem.mozMatchesSelector(selector);
    else
      throw new Error('Browser lacks native selectors');
  };
  var bypassSelector = function (dom) {
    return dom.nodeType !== ELEMENT && dom.nodeType !== DOCUMENT || dom.childElementCount === 0;
  };
  var all = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? [] : $_cya8qajgjctdj3jm.map(base.querySelectorAll(selector), $_4jfq4gjvjctdj3lt.fromDom);
  };
  var one = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? $_41pgl8jhjctdj3jt.none() : $_41pgl8jhjctdj3jt.from(base.querySelector(selector)).map($_4jfq4gjvjctdj3lt.fromDom);
  };
  var $_659m8xjujctdj3li = {
    all: all,
    is: is,
    one: one
  };

  var toArray = function (target, f) {
    var r = [];
    var recurse = function (e) {
      r.push(e);
      return f(e);
    };
    var cur = f(target);
    do {
      cur = cur.bind(recurse);
    } while (cur.isSome());
    return r;
  };
  var $_57f65rjyjctdj3m9 = { toArray: toArray };

  var global = typeof window !== 'undefined' ? window : Function('return this;')();

  var path = function (parts, scope) {
    var o = scope !== undefined && scope !== null ? scope : global;
    for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
      o = o[parts[i]];
    return o;
  };
  var resolve = function (p, scope) {
    var parts = p.split('.');
    return path(parts, scope);
  };
  var step = function (o, part) {
    if (o[part] === undefined || o[part] === null)
      o[part] = {};
    return o[part];
  };
  var forge = function (parts, target) {
    var o = target !== undefined ? target : global;
    for (var i = 0; i < parts.length; ++i)
      o = step(o, parts[i]);
    return o;
  };
  var namespace = function (name, target) {
    var parts = name.split('.');
    return forge(parts, target);
  };
  var $_9v5ttmk2jctdj3ms = {
    path: path,
    resolve: resolve,
    forge: forge,
    namespace: namespace
  };

  var unsafe = function (name, scope) {
    return $_9v5ttmk2jctdj3ms.resolve(name, scope);
  };
  var getOrDie = function (name, scope) {
    var actual = unsafe(name, scope);
    if (actual === undefined || actual === null)
      throw name + ' not available on this browser';
    return actual;
  };
  var $_4qtf1sk1jctdj3mq = { getOrDie: getOrDie };

  var node = function () {
    var f = $_4qtf1sk1jctdj3mq.getOrDie('Node');
    return f;
  };
  var compareDocumentPosition = function (a, b, match) {
    return (a.compareDocumentPosition(b) & match) !== 0;
  };
  var documentPositionPreceding = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
  };
  var documentPositionContainedBy = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
  };
  var $_55etklk0jctdj3mo = {
    documentPositionPreceding: documentPositionPreceding,
    documentPositionContainedBy: documentPositionContainedBy
  };

  var cached = function (f) {
    var called = false;
    var r;
    return function () {
      if (!called) {
        called = true;
        r = f.apply(null, arguments);
      }
      return r;
    };
  };
  var $_frqvtyk5jctdj3mw = { cached: cached };

  var firstMatch = function (regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];
      if (x.test(s))
        return x;
    }
    return undefined;
  };
  var find$2 = function (regexes, agent) {
    var r = firstMatch(regexes, agent);
    if (!r)
      return {
        major: 0,
        minor: 0
      };
    var group = function (i) {
      return Number(agent.replace(r, '$' + i));
    };
    return nu$1(group(1), group(2));
  };
  var detect$2 = function (versionRegexes, agent) {
    var cleanedAgent = String(agent).toLowerCase();
    if (versionRegexes.length === 0)
      return unknown$1();
    return find$2(versionRegexes, cleanedAgent);
  };
  var unknown$1 = function () {
    return nu$1(0, 0);
  };
  var nu$1 = function (major, minor) {
    return {
      major: major,
      minor: minor
    };
  };
  var $_z4js0k8jctdj3n1 = {
    nu: nu$1,
    detect: detect$2,
    unknown: unknown$1
  };

  var edge = 'Edge';
  var chrome = 'Chrome';
  var ie = 'IE';
  var opera = 'Opera';
  var firefox = 'Firefox';
  var safari = 'Safari';
  var isBrowser = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown = function () {
    return nu({
      current: undefined,
      version: $_z4js0k8jctdj3n1.unknown()
    });
  };
  var nu = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isEdge: isBrowser(edge, current),
      isChrome: isBrowser(chrome, current),
      isIE: isBrowser(ie, current),
      isOpera: isBrowser(opera, current),
      isFirefox: isBrowser(firefox, current),
      isSafari: isBrowser(safari, current)
    };
  };
  var $_4s0u4ek7jctdj3mz = {
    unknown: unknown,
    nu: nu,
    edge: $_17hg00jijctdj3jv.constant(edge),
    chrome: $_17hg00jijctdj3jv.constant(chrome),
    ie: $_17hg00jijctdj3jv.constant(ie),
    opera: $_17hg00jijctdj3jv.constant(opera),
    firefox: $_17hg00jijctdj3jv.constant(firefox),
    safari: $_17hg00jijctdj3jv.constant(safari)
  };

  var windows = 'Windows';
  var ios = 'iOS';
  var android = 'Android';
  var linux = 'Linux';
  var osx = 'OSX';
  var solaris = 'Solaris';
  var freebsd = 'FreeBSD';
  var isOS = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$2 = function () {
    return nu$2({
      current: undefined,
      version: $_z4js0k8jctdj3n1.unknown()
    });
  };
  var nu$2 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isWindows: isOS(windows, current),
      isiOS: isOS(ios, current),
      isAndroid: isOS(android, current),
      isOSX: isOS(osx, current),
      isLinux: isOS(linux, current),
      isSolaris: isOS(solaris, current),
      isFreeBSD: isOS(freebsd, current)
    };
  };
  var $_fnyyxuk9jctdj3n3 = {
    unknown: unknown$2,
    nu: nu$2,
    windows: $_17hg00jijctdj3jv.constant(windows),
    ios: $_17hg00jijctdj3jv.constant(ios),
    android: $_17hg00jijctdj3jv.constant(android),
    linux: $_17hg00jijctdj3jv.constant(linux),
    osx: $_17hg00jijctdj3jv.constant(osx),
    solaris: $_17hg00jijctdj3jv.constant(solaris),
    freebsd: $_17hg00jijctdj3jv.constant(freebsd)
  };

  var DeviceType = function (os, browser, userAgent) {
    var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    var isiPhone = os.isiOS() && !isiPad;
    var isAndroid3 = os.isAndroid() && os.version.major === 3;
    var isAndroid4 = os.isAndroid() && os.version.major === 4;
    var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
    var isTouch = os.isiOS() || os.isAndroid();
    var isPhone = isTouch && !isTablet;
    var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    return {
      isiPad: $_17hg00jijctdj3jv.constant(isiPad),
      isiPhone: $_17hg00jijctdj3jv.constant(isiPhone),
      isTablet: $_17hg00jijctdj3jv.constant(isTablet),
      isPhone: $_17hg00jijctdj3jv.constant(isPhone),
      isTouch: $_17hg00jijctdj3jv.constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: $_17hg00jijctdj3jv.constant(iOSwebview)
    };
  };

  var detect$3 = function (candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return $_cya8qajgjctdj3jm.find(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };
  var detectBrowser = function (browsers, userAgent) {
    return detect$3(browsers, userAgent).map(function (browser) {
      var version = $_z4js0k8jctdj3n1.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };
  var detectOs = function (oses, userAgent) {
    return detect$3(oses, userAgent).map(function (os) {
      var version = $_z4js0k8jctdj3n1.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };
  var $_clkpkzkbjctdj3na = {
    detectBrowser: detectBrowser,
    detectOs: detectOs
  };

  var addToStart = function (str, prefix) {
    return prefix + str;
  };
  var addToEnd = function (str, suffix) {
    return str + suffix;
  };
  var removeFromStart = function (str, numChars) {
    return str.substring(numChars);
  };
  var removeFromEnd = function (str, numChars) {
    return str.substring(0, str.length - numChars);
  };
  var $_6nlnzikejctdj3nl = {
    addToStart: addToStart,
    addToEnd: addToEnd,
    removeFromStart: removeFromStart,
    removeFromEnd: removeFromEnd
  };

  var first = function (str, count) {
    return str.substr(0, count);
  };
  var last$1 = function (str, count) {
    return str.substr(str.length - count, str.length);
  };
  var head$1 = function (str) {
    return str === '' ? $_41pgl8jhjctdj3jt.none() : $_41pgl8jhjctdj3jt.some(str.substr(0, 1));
  };
  var tail = function (str) {
    return str === '' ? $_41pgl8jhjctdj3jt.none() : $_41pgl8jhjctdj3jt.some(str.substring(1));
  };
  var $_etiuaskfjctdj3nm = {
    first: first,
    last: last$1,
    head: head$1,
    tail: tail
  };

  var checkRange = function (str, substr, start) {
    if (substr === '')
      return true;
    if (str.length < substr.length)
      return false;
    var x = str.substr(start, start + substr.length);
    return x === substr;
  };
  var supplant = function (str, obj) {
    var isStringOrNumber = function (a) {
      var t = typeof a;
      return t === 'string' || t === 'number';
    };
    return str.replace(/\${([^{}]*)}/g, function (a, b) {
      var value = obj[b];
      return isStringOrNumber(value) ? value : a;
    });
  };
  var removeLeading = function (str, prefix) {
    return startsWith(str, prefix) ? $_6nlnzikejctdj3nl.removeFromStart(str, prefix.length) : str;
  };
  var removeTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? $_6nlnzikejctdj3nl.removeFromEnd(str, prefix.length) : str;
  };
  var ensureLeading = function (str, prefix) {
    return startsWith(str, prefix) ? str : $_6nlnzikejctdj3nl.addToStart(str, prefix);
  };
  var ensureTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? str : $_6nlnzikejctdj3nl.addToEnd(str, prefix);
  };
  var contains$2 = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };
  var capitalize = function (str) {
    return $_etiuaskfjctdj3nm.head(str).bind(function (head) {
      return $_etiuaskfjctdj3nm.tail(str).map(function (tail) {
        return head.toUpperCase() + tail;
      });
    }).getOr(str);
  };
  var startsWith = function (str, prefix) {
    return checkRange(str, prefix, 0);
  };
  var endsWith = function (str, suffix) {
    return checkRange(str, suffix, str.length - suffix.length);
  };
  var trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var lTrim = function (str) {
    return str.replace(/^\s+/g, '');
  };
  var rTrim = function (str) {
    return str.replace(/\s+$/g, '');
  };
  var $_9dhzfckdjctdj3nh = {
    supplant: supplant,
    startsWith: startsWith,
    removeLeading: removeLeading,
    removeTrailing: removeTrailing,
    ensureLeading: ensureLeading,
    ensureTrailing: ensureTrailing,
    endsWith: endsWith,
    contains: contains$2,
    trim: trim,
    lTrim: lTrim,
    rTrim: rTrim,
    capitalize: capitalize
  };

  var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
  var checkContains = function (target) {
    return function (uastring) {
      return $_9dhzfckdjctdj3nh.contains(uastring, target);
    };
  };
  var browsers = [
    {
      name: 'Edge',
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function (uastring) {
        var monstrosity = $_9dhzfckdjctdj3nh.contains(uastring, 'edge/') && $_9dhzfckdjctdj3nh.contains(uastring, 'chrome') && $_9dhzfckdjctdj3nh.contains(uastring, 'safari') && $_9dhzfckdjctdj3nh.contains(uastring, 'applewebkit');
        return monstrosity;
      }
    },
    {
      name: 'Chrome',
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        normalVersionRegex
      ],
      search: function (uastring) {
        return $_9dhzfckdjctdj3nh.contains(uastring, 'chrome') && !$_9dhzfckdjctdj3nh.contains(uastring, 'chromeframe');
      }
    },
    {
      name: 'IE',
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: function (uastring) {
        return $_9dhzfckdjctdj3nh.contains(uastring, 'msie') || $_9dhzfckdjctdj3nh.contains(uastring, 'trident');
      }
    },
    {
      name: 'Opera',
      versionRegexes: [
        normalVersionRegex,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: checkContains('opera')
    },
    {
      name: 'Firefox',
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: checkContains('firefox')
    },
    {
      name: 'Safari',
      versionRegexes: [
        normalVersionRegex,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: function (uastring) {
        return ($_9dhzfckdjctdj3nh.contains(uastring, 'safari') || $_9dhzfckdjctdj3nh.contains(uastring, 'mobile/')) && $_9dhzfckdjctdj3nh.contains(uastring, 'applewebkit');
      }
    }
  ];
  var oses = [
    {
      name: 'Windows',
      search: checkContains('win'),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'iOS',
      search: function (uastring) {
        return $_9dhzfckdjctdj3nh.contains(uastring, 'iphone') || $_9dhzfckdjctdj3nh.contains(uastring, 'ipad');
      },
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: 'Android',
      search: checkContains('android'),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'OSX',
      search: checkContains('os x'),
      versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: 'Linux',
      search: checkContains('linux'),
      versionRegexes: []
    },
    {
      name: 'Solaris',
      search: checkContains('sunos'),
      versionRegexes: []
    },
    {
      name: 'FreeBSD',
      search: checkContains('freebsd'),
      versionRegexes: []
    }
  ];
  var $_a4twu6kcjctdj3nc = {
    browsers: $_17hg00jijctdj3jv.constant(browsers),
    oses: $_17hg00jijctdj3jv.constant(oses)
  };

  var detect$1 = function (userAgent) {
    var browsers = $_a4twu6kcjctdj3nc.browsers();
    var oses = $_a4twu6kcjctdj3nc.oses();
    var browser = $_clkpkzkbjctdj3na.detectBrowser(browsers, userAgent).fold($_4s0u4ek7jctdj3mz.unknown, $_4s0u4ek7jctdj3mz.nu);
    var os = $_clkpkzkbjctdj3na.detectOs(oses, userAgent).fold($_fnyyxuk9jctdj3n3.unknown, $_fnyyxuk9jctdj3n3.nu);
    var deviceType = DeviceType(os, browser, userAgent);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };
  var $_76th5nk6jctdj3mx = { detect: detect$1 };

  var detect = $_frqvtyk5jctdj3mw.cached(function () {
    var userAgent = navigator.userAgent;
    return $_76th5nk6jctdj3mx.detect(userAgent);
  });
  var $_61ae92k4jctdj3mu = { detect: detect };

  var eq = function (e1, e2) {
    return e1.dom() === e2.dom();
  };
  var isEqualNode = function (e1, e2) {
    return e1.dom().isEqualNode(e2.dom());
  };
  var member = function (element, elements) {
    return $_cya8qajgjctdj3jm.exists(elements, $_17hg00jijctdj3jv.curry(eq, element));
  };
  var regularContains = function (e1, e2) {
    var d1 = e1.dom(), d2 = e2.dom();
    return d1 === d2 ? false : d1.contains(d2);
  };
  var ieContains = function (e1, e2) {
    return $_55etklk0jctdj3mo.documentPositionContainedBy(e1.dom(), e2.dom());
  };
  var browser = $_61ae92k4jctdj3mu.detect().browser;
  var contains$1 = browser.isIE() ? ieContains : regularContains;
  var $_dptc54jzjctdj3ma = {
    eq: eq,
    isEqualNode: isEqualNode,
    member: member,
    contains: contains$1,
    is: $_659m8xjujctdj3li.is
  };

  var owner = function (element) {
    return $_4jfq4gjvjctdj3lt.fromDom(element.dom().ownerDocument);
  };
  var documentElement = function (element) {
    var doc = owner(element);
    return $_4jfq4gjvjctdj3lt.fromDom(doc.dom().documentElement);
  };
  var defaultView = function (element) {
    var el = element.dom();
    var defaultView = el.ownerDocument.defaultView;
    return $_4jfq4gjvjctdj3lt.fromDom(defaultView);
  };
  var parent = function (element) {
    var dom = element.dom();
    return $_41pgl8jhjctdj3jt.from(dom.parentNode).map($_4jfq4gjvjctdj3lt.fromDom);
  };
  var findIndex$1 = function (element) {
    return parent(element).bind(function (p) {
      var kin = children(p);
      return $_cya8qajgjctdj3jm.findIndex(kin, function (elem) {
        return $_dptc54jzjctdj3ma.eq(element, elem);
      });
    });
  };
  var parents = function (element, isRoot) {
    var stop = $_exkoajjpjctdj3kq.isFunction(isRoot) ? isRoot : $_17hg00jijctdj3jv.constant(false);
    var dom = element.dom();
    var ret = [];
    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var parent = $_4jfq4gjvjctdj3lt.fromDom(rawParent);
      ret.push(parent);
      if (stop(parent) === true)
        break;
      else
        dom = rawParent;
    }
    return ret;
  };
  var siblings = function (element) {
    var filterSelf = function (elements) {
      return $_cya8qajgjctdj3jm.filter(elements, function (x) {
        return !$_dptc54jzjctdj3ma.eq(element, x);
      });
    };
    return parent(element).map(children).map(filterSelf).getOr([]);
  };
  var offsetParent = function (element) {
    var dom = element.dom();
    return $_41pgl8jhjctdj3jt.from(dom.offsetParent).map($_4jfq4gjvjctdj3lt.fromDom);
  };
  var prevSibling = function (element) {
    var dom = element.dom();
    return $_41pgl8jhjctdj3jt.from(dom.previousSibling).map($_4jfq4gjvjctdj3lt.fromDom);
  };
  var nextSibling = function (element) {
    var dom = element.dom();
    return $_41pgl8jhjctdj3jt.from(dom.nextSibling).map($_4jfq4gjvjctdj3lt.fromDom);
  };
  var prevSiblings = function (element) {
    return $_cya8qajgjctdj3jm.reverse($_57f65rjyjctdj3m9.toArray(element, prevSibling));
  };
  var nextSiblings = function (element) {
    return $_57f65rjyjctdj3m9.toArray(element, nextSibling);
  };
  var children = function (element) {
    var dom = element.dom();
    return $_cya8qajgjctdj3jm.map(dom.childNodes, $_4jfq4gjvjctdj3lt.fromDom);
  };
  var child = function (element, index) {
    var children = element.dom().childNodes;
    return $_41pgl8jhjctdj3jt.from(children[index]).map($_4jfq4gjvjctdj3lt.fromDom);
  };
  var firstChild = function (element) {
    return child(element, 0);
  };
  var lastChild = function (element) {
    return child(element, element.dom().childNodes.length - 1);
  };
  var childNodesCount = function (element) {
    return element.dom().childNodes.length;
  };
  var hasChildNodes = function (element) {
    return element.dom().hasChildNodes();
  };
  var spot = $_2gilnfjljctdj3kj.immutable('element', 'offset');
  var leaf = function (element, offset) {
    var cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
  };
  var $_4vj6djjxjctdj3lz = {
    owner: owner,
    defaultView: defaultView,
    documentElement: documentElement,
    parent: parent,
    findIndex: findIndex$1,
    parents: parents,
    siblings: siblings,
    prevSibling: prevSibling,
    offsetParent: offsetParent,
    prevSiblings: prevSiblings,
    nextSibling: nextSibling,
    nextSiblings: nextSiblings,
    children: children,
    child: child,
    firstChild: firstChild,
    lastChild: lastChild,
    childNodesCount: childNodesCount,
    hasChildNodes: hasChildNodes,
    leaf: leaf
  };

  var firstLayer = function (scope, selector) {
    return filterFirstLayer(scope, selector, $_17hg00jijctdj3jv.constant(true));
  };
  var filterFirstLayer = function (scope, selector, predicate) {
    return $_cya8qajgjctdj3jm.bind($_4vj6djjxjctdj3lz.children(scope), function (x) {
      return $_659m8xjujctdj3li.is(x, selector) ? predicate(x) ? [x] : [] : filterFirstLayer(x, selector, predicate);
    });
  };
  var $_2e5amtjtjctdj3ld = {
    firstLayer: firstLayer,
    filterFirstLayer: filterFirstLayer
  };

  var name = function (element) {
    var r = element.dom().nodeName;
    return r.toLowerCase();
  };
  var type = function (element) {
    return element.dom().nodeType;
  };
  var value = function (element) {
    return element.dom().nodeValue;
  };
  var isType$1 = function (t) {
    return function (element) {
      return type(element) === t;
    };
  };
  var isComment = function (element) {
    return type(element) === $_g4j77jwjctdj3lx.COMMENT || name(element) === '#comment';
  };
  var isElement = isType$1($_g4j77jwjctdj3lx.ELEMENT);
  var isText = isType$1($_g4j77jwjctdj3lx.TEXT);
  var isDocument = isType$1($_g4j77jwjctdj3lx.DOCUMENT);
  var $_gao3elkhjctdj3nw = {
    name: name,
    type: type,
    value: value,
    isElement: isElement,
    isText: isText,
    isDocument: isDocument,
    isComment: isComment
  };

  var rawSet = function (dom, key, value) {
    if ($_exkoajjpjctdj3kq.isString(value) || $_exkoajjpjctdj3kq.isBoolean(value) || $_exkoajjpjctdj3kq.isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attr.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };
  var set = function (element, key, value) {
    rawSet(element.dom(), key, value);
  };
  var setAll = function (element, attrs) {
    var dom = element.dom();
    $_5bka9ljkjctdj3kc.each(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };
  var get = function (element, key) {
    var v = element.dom().getAttribute(key);
    return v === null ? undefined : v;
  };
  var has = function (element, key) {
    var dom = element.dom();
    return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
  };
  var remove = function (element, key) {
    element.dom().removeAttribute(key);
  };
  var hasNone = function (element) {
    var attrs = element.dom().attributes;
    return attrs === undefined || attrs === null || attrs.length === 0;
  };
  var clone = function (element) {
    return $_cya8qajgjctdj3jm.foldl(element.dom().attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };
  var transferOne = function (source, destination, attr) {
    if (has(source, attr) && !has(destination, attr))
      set(destination, attr, get(source, attr));
  };
  var transfer = function (source, destination, attrs) {
    if (!$_gao3elkhjctdj3nw.isElement(source) || !$_gao3elkhjctdj3nw.isElement(destination))
      return;
    $_cya8qajgjctdj3jm.each(attrs, function (attr) {
      transferOne(source, destination, attr);
    });
  };
  var $_fdrkf1kgjctdj3no = {
    clone: clone,
    set: set,
    setAll: setAll,
    get: get,
    has: has,
    remove: remove,
    hasNone: hasNone,
    transfer: transfer
  };

  var inBody = function (element) {
    var dom = $_gao3elkhjctdj3nw.isText(element) ? element.dom().parentNode : element.dom();
    return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
  };
  var body = $_frqvtyk5jctdj3mw.cached(function () {
    return getBody($_4jfq4gjvjctdj3lt.fromDom(document));
  });
  var getBody = function (doc) {
    var body = doc.dom().body;
    if (body === null || body === undefined)
      throw 'Body is not available yet';
    return $_4jfq4gjvjctdj3lt.fromDom(body);
  };
  var $_75el39kkjctdj3o5 = {
    body: body,
    getBody: getBody,
    inBody: inBody
  };

  var all$2 = function (predicate) {
    return descendants$1($_75el39kkjctdj3o5.body(), predicate);
  };
  var ancestors$1 = function (scope, predicate, isRoot) {
    return $_cya8qajgjctdj3jm.filter($_4vj6djjxjctdj3lz.parents(scope, isRoot), predicate);
  };
  var siblings$2 = function (scope, predicate) {
    return $_cya8qajgjctdj3jm.filter($_4vj6djjxjctdj3lz.siblings(scope), predicate);
  };
  var children$2 = function (scope, predicate) {
    return $_cya8qajgjctdj3jm.filter($_4vj6djjxjctdj3lz.children(scope), predicate);
  };
  var descendants$1 = function (scope, predicate) {
    var result = [];
    $_cya8qajgjctdj3jm.each($_4vj6djjxjctdj3lz.children(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }
      result = result.concat(descendants$1(x, predicate));
    });
    return result;
  };
  var $_6q6oomkjjctdj3nz = {
    all: all$2,
    ancestors: ancestors$1,
    siblings: siblings$2,
    children: children$2,
    descendants: descendants$1
  };

  var all$1 = function (selector) {
    return $_659m8xjujctdj3li.all(selector);
  };
  var ancestors = function (scope, selector, isRoot) {
    return $_6q6oomkjjctdj3nz.ancestors(scope, function (e) {
      return $_659m8xjujctdj3li.is(e, selector);
    }, isRoot);
  };
  var siblings$1 = function (scope, selector) {
    return $_6q6oomkjjctdj3nz.siblings(scope, function (e) {
      return $_659m8xjujctdj3li.is(e, selector);
    });
  };
  var children$1 = function (scope, selector) {
    return $_6q6oomkjjctdj3nz.children(scope, function (e) {
      return $_659m8xjujctdj3li.is(e, selector);
    });
  };
  var descendants = function (scope, selector) {
    return $_659m8xjujctdj3li.all(selector, scope);
  };
  var $_cifrp6kijctdj3ny = {
    all: all$1,
    ancestors: ancestors,
    siblings: siblings$1,
    children: children$1,
    descendants: descendants
  };

  var ClosestOrAncestor = function (is, ancestor, scope, a, isRoot) {
    return is(scope, a) ? $_41pgl8jhjctdj3jt.some(scope) : $_exkoajjpjctdj3kq.isFunction(isRoot) && isRoot(scope) ? $_41pgl8jhjctdj3jt.none() : ancestor(scope, a, isRoot);
  };

  var first$2 = function (predicate) {
    return descendant$1($_75el39kkjctdj3o5.body(), predicate);
  };
  var ancestor$1 = function (scope, predicate, isRoot) {
    var element = scope.dom();
    var stop = $_exkoajjpjctdj3kq.isFunction(isRoot) ? isRoot : $_17hg00jijctdj3jv.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_4jfq4gjvjctdj3lt.fromDom(element);
      if (predicate(el))
        return $_41pgl8jhjctdj3jt.some(el);
      else if (stop(el))
        break;
    }
    return $_41pgl8jhjctdj3jt.none();
  };
  var closest$1 = function (scope, predicate, isRoot) {
    var is = function (scope) {
      return predicate(scope);
    };
    return ClosestOrAncestor(is, ancestor$1, scope, predicate, isRoot);
  };
  var sibling$1 = function (scope, predicate) {
    var element = scope.dom();
    if (!element.parentNode)
      return $_41pgl8jhjctdj3jt.none();
    return child$2($_4jfq4gjvjctdj3lt.fromDom(element.parentNode), function (x) {
      return !$_dptc54jzjctdj3ma.eq(scope, x) && predicate(x);
    });
  };
  var child$2 = function (scope, predicate) {
    var result = $_cya8qajgjctdj3jm.find(scope.dom().childNodes, $_17hg00jijctdj3jv.compose(predicate, $_4jfq4gjvjctdj3lt.fromDom));
    return result.map($_4jfq4gjvjctdj3lt.fromDom);
  };
  var descendant$1 = function (scope, predicate) {
    var descend = function (element) {
      for (var i = 0; i < element.childNodes.length; i++) {
        if (predicate($_4jfq4gjvjctdj3lt.fromDom(element.childNodes[i])))
          return $_41pgl8jhjctdj3jt.some($_4jfq4gjvjctdj3lt.fromDom(element.childNodes[i]));
        var res = descend(element.childNodes[i]);
        if (res.isSome())
          return res;
      }
      return $_41pgl8jhjctdj3jt.none();
    };
    return descend(scope.dom());
  };
  var $_3ulq7wkmjctdj3ob = {
    first: first$2,
    ancestor: ancestor$1,
    closest: closest$1,
    sibling: sibling$1,
    child: child$2,
    descendant: descendant$1
  };

  var first$1 = function (selector) {
    return $_659m8xjujctdj3li.one(selector);
  };
  var ancestor = function (scope, selector, isRoot) {
    return $_3ulq7wkmjctdj3ob.ancestor(scope, function (e) {
      return $_659m8xjujctdj3li.is(e, selector);
    }, isRoot);
  };
  var sibling = function (scope, selector) {
    return $_3ulq7wkmjctdj3ob.sibling(scope, function (e) {
      return $_659m8xjujctdj3li.is(e, selector);
    });
  };
  var child$1 = function (scope, selector) {
    return $_3ulq7wkmjctdj3ob.child(scope, function (e) {
      return $_659m8xjujctdj3li.is(e, selector);
    });
  };
  var descendant = function (scope, selector) {
    return $_659m8xjujctdj3li.one(selector, scope);
  };
  var closest = function (scope, selector, isRoot) {
    return ClosestOrAncestor($_659m8xjujctdj3li.is, ancestor, scope, selector, isRoot);
  };
  var $_8qdzookljctdj3o9 = {
    first: first$1,
    ancestor: ancestor,
    sibling: sibling,
    child: child$1,
    descendant: descendant,
    closest: closest
  };

  var lookup = function (tags, element, _isRoot) {
    var isRoot = _isRoot !== undefined ? _isRoot : $_17hg00jijctdj3jv.constant(false);
    if (isRoot(element))
      return $_41pgl8jhjctdj3jt.none();
    if ($_cya8qajgjctdj3jm.contains(tags, $_gao3elkhjctdj3nw.name(element)))
      return $_41pgl8jhjctdj3jt.some(element);
    var isRootOrUpperTable = function (element) {
      return $_659m8xjujctdj3li.is(element, 'table') || isRoot(element);
    };
    return $_8qdzookljctdj3o9.ancestor(element, tags.join(','), isRootOrUpperTable);
  };
  var cell = function (element, isRoot) {
    return lookup([
      'td',
      'th'
    ], element, isRoot);
  };
  var cells = function (ancestor) {
    return $_2e5amtjtjctdj3ld.firstLayer(ancestor, 'th,td');
  };
  var notCell = function (element, isRoot) {
    return lookup([
      'caption',
      'tr',
      'tbody',
      'tfoot',
      'thead'
    ], element, isRoot);
  };
  var neighbours = function (selector, element) {
    return $_4vj6djjxjctdj3lz.parent(element).map(function (parent) {
      return $_cifrp6kijctdj3ny.children(parent, selector);
    });
  };
  var neighbourCells = $_17hg00jijctdj3jv.curry(neighbours, 'th,td');
  var neighbourRows = $_17hg00jijctdj3jv.curry(neighbours, 'tr');
  var firstCell = function (ancestor) {
    return $_8qdzookljctdj3o9.descendant(ancestor, 'th,td');
  };
  var table = function (element, isRoot) {
    return $_8qdzookljctdj3o9.closest(element, 'table', isRoot);
  };
  var row = function (element, isRoot) {
    return lookup(['tr'], element, isRoot);
  };
  var rows = function (ancestor) {
    return $_2e5amtjtjctdj3ld.firstLayer(ancestor, 'tr');
  };
  var attr = function (element, property) {
    return parseInt($_fdrkf1kgjctdj3no.get(element, property), 10);
  };
  var grid$1 = function (element, rowProp, colProp) {
    var rows = attr(element, rowProp);
    var cols = attr(element, colProp);
    return $_6gworajrjctdj3ky.grid(rows, cols);
  };
  var $_1mbzcijsjctdj3l1 = {
    cell: cell,
    firstCell: firstCell,
    cells: cells,
    neighbourCells: neighbourCells,
    table: table,
    row: row,
    rows: rows,
    notCell: notCell,
    neighbourRows: neighbourRows,
    attr: attr,
    grid: grid$1
  };

  var fromTable = function (table) {
    var rows = $_1mbzcijsjctdj3l1.rows(table);
    return $_cya8qajgjctdj3jm.map(rows, function (row) {
      var element = row;
      var parent = $_4vj6djjxjctdj3lz.parent(element);
      var parentSection = parent.bind(function (parent) {
        var parentName = $_gao3elkhjctdj3nw.name(parent);
        return parentName === 'tfoot' || parentName === 'thead' || parentName === 'tbody' ? parentName : 'tbody';
      });
      var cells = $_cya8qajgjctdj3jm.map($_1mbzcijsjctdj3l1.cells(row), function (cell) {
        var rowspan = $_fdrkf1kgjctdj3no.has(cell, 'rowspan') ? parseInt($_fdrkf1kgjctdj3no.get(cell, 'rowspan'), 10) : 1;
        var colspan = $_fdrkf1kgjctdj3no.has(cell, 'colspan') ? parseInt($_fdrkf1kgjctdj3no.get(cell, 'colspan'), 10) : 1;
        return $_6gworajrjctdj3ky.detail(cell, rowspan, colspan);
      });
      return $_6gworajrjctdj3ky.rowdata(element, cells, parentSection);
    });
  };
  var fromPastedRows = function (rows, example) {
    return $_cya8qajgjctdj3jm.map(rows, function (row) {
      var cells = $_cya8qajgjctdj3jm.map($_1mbzcijsjctdj3l1.cells(row), function (cell) {
        var rowspan = $_fdrkf1kgjctdj3no.has(cell, 'rowspan') ? parseInt($_fdrkf1kgjctdj3no.get(cell, 'rowspan'), 10) : 1;
        var colspan = $_fdrkf1kgjctdj3no.has(cell, 'colspan') ? parseInt($_fdrkf1kgjctdj3no.get(cell, 'colspan'), 10) : 1;
        return $_6gworajrjctdj3ky.detail(cell, rowspan, colspan);
      });
      return $_6gworajrjctdj3ky.rowdata(row, cells, example.section());
    });
  };
  var $_1x2v4fjqjctdj3ks = {
    fromTable: fromTable,
    fromPastedRows: fromPastedRows
  };

  var key = function (row, column) {
    return row + ',' + column;
  };
  var getAt = function (warehouse, row, column) {
    var raw = warehouse.access()[key(row, column)];
    return raw !== undefined ? $_41pgl8jhjctdj3jt.some(raw) : $_41pgl8jhjctdj3jt.none();
  };
  var findItem = function (warehouse, item, comparator) {
    var filtered = filterItems(warehouse, function (detail) {
      return comparator(item, detail.element());
    });
    return filtered.length > 0 ? $_41pgl8jhjctdj3jt.some(filtered[0]) : $_41pgl8jhjctdj3jt.none();
  };
  var filterItems = function (warehouse, predicate) {
    var all = $_cya8qajgjctdj3jm.bind(warehouse.all(), function (r) {
      return r.cells();
    });
    return $_cya8qajgjctdj3jm.filter(all, predicate);
  };
  var generate = function (list) {
    var access = {};
    var cells = [];
    var maxRows = list.length;
    var maxColumns = 0;
    $_cya8qajgjctdj3jm.each(list, function (details, r) {
      var currentRow = [];
      $_cya8qajgjctdj3jm.each(details.cells(), function (detail, c) {
        var start = 0;
        while (access[key(r, start)] !== undefined) {
          start++;
        }
        var current = $_6gworajrjctdj3ky.extended(detail.element(), detail.rowspan(), detail.colspan(), r, start);
        for (var i = 0; i < detail.colspan(); i++) {
          for (var j = 0; j < detail.rowspan(); j++) {
            var cr = r + j;
            var cc = start + i;
            var newpos = key(cr, cc);
            access[newpos] = current;
            maxColumns = Math.max(maxColumns, cc + 1);
          }
        }
        currentRow.push(current);
      });
      cells.push($_6gworajrjctdj3ky.rowdata(details.element(), currentRow, details.section()));
    });
    var grid = $_6gworajrjctdj3ky.grid(maxRows, maxColumns);
    return {
      grid: $_17hg00jijctdj3jv.constant(grid),
      access: $_17hg00jijctdj3jv.constant(access),
      all: $_17hg00jijctdj3jv.constant(cells)
    };
  };
  var justCells = function (warehouse) {
    var rows = $_cya8qajgjctdj3jm.map(warehouse.all(), function (w) {
      return w.cells();
    });
    return $_cya8qajgjctdj3jm.flatten(rows);
  };
  var $_13w1akojctdj3op = {
    generate: generate,
    getAt: getAt,
    findItem: findItem,
    filterItems: filterItems,
    justCells: justCells
  };

  var isSupported = function (dom) {
    return dom.style !== undefined;
  };
  var $_3gqqk5kqjctdj3pj = { isSupported: isSupported };

  var internalSet = function (dom, property, value) {
    if (!$_exkoajjpjctdj3kq.isString(value)) {
      console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
      throw new Error('CSS value must be a string: ' + value);
    }
    if ($_3gqqk5kqjctdj3pj.isSupported(dom))
      dom.style.setProperty(property, value);
  };
  var internalRemove = function (dom, property) {
    if ($_3gqqk5kqjctdj3pj.isSupported(dom))
      dom.style.removeProperty(property);
  };
  var set$1 = function (element, property, value) {
    var dom = element.dom();
    internalSet(dom, property, value);
  };
  var setAll$1 = function (element, css) {
    var dom = element.dom();
    $_5bka9ljkjctdj3kc.each(css, function (v, k) {
      internalSet(dom, k, v);
    });
  };
  var setOptions = function (element, css) {
    var dom = element.dom();
    $_5bka9ljkjctdj3kc.each(css, function (v, k) {
      v.fold(function () {
        internalRemove(dom, k);
      }, function (value) {
        internalSet(dom, k, value);
      });
    });
  };
  var get$1 = function (element, property) {
    var dom = element.dom();
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    var v = r === '' && !$_75el39kkjctdj3o5.inBody(element) ? getUnsafeProperty(dom, property) : r;
    return v === null ? undefined : v;
  };
  var getUnsafeProperty = function (dom, property) {
    return $_3gqqk5kqjctdj3pj.isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };
  var getRaw = function (element, property) {
    var dom = element.dom();
    var raw = getUnsafeProperty(dom, property);
    return $_41pgl8jhjctdj3jt.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };
  var getAllRaw = function (element) {
    var css = {};
    var dom = element.dom();
    if ($_3gqqk5kqjctdj3pj.isSupported(dom)) {
      for (var i = 0; i < dom.style.length; i++) {
        var ruleName = dom.style.item(i);
        css[ruleName] = dom.style[ruleName];
      }
    }
    return css;
  };
  var isValidValue = function (tag, property, value) {
    var element = $_4jfq4gjvjctdj3lt.fromTag(tag);
    set$1(element, property, value);
    var style = getRaw(element, property);
    return style.isSome();
  };
  var remove$1 = function (element, property) {
    var dom = element.dom();
    internalRemove(dom, property);
    if ($_fdrkf1kgjctdj3no.has(element, 'style') && $_9dhzfckdjctdj3nh.trim($_fdrkf1kgjctdj3no.get(element, 'style')) === '') {
      $_fdrkf1kgjctdj3no.remove(element, 'style');
    }
  };
  var preserve = function (element, f) {
    var oldStyles = $_fdrkf1kgjctdj3no.get(element, 'style');
    var result = f(element);
    var restore = oldStyles === undefined ? $_fdrkf1kgjctdj3no.remove : $_fdrkf1kgjctdj3no.set;
    restore(element, 'style', oldStyles);
    return result;
  };
  var copy = function (source, target) {
    var sourceDom = source.dom();
    var targetDom = target.dom();
    if ($_3gqqk5kqjctdj3pj.isSupported(sourceDom) && $_3gqqk5kqjctdj3pj.isSupported(targetDom)) {
      targetDom.style.cssText = sourceDom.style.cssText;
    }
  };
  var reflow = function (e) {
    return e.dom().offsetWidth;
  };
  var transferOne$1 = function (source, destination, style) {
    getRaw(source, style).each(function (value) {
      if (getRaw(destination, style).isNone())
        set$1(destination, style, value);
    });
  };
  var transfer$1 = function (source, destination, styles) {
    if (!$_gao3elkhjctdj3nw.isElement(source) || !$_gao3elkhjctdj3nw.isElement(destination))
      return;
    $_cya8qajgjctdj3jm.each(styles, function (style) {
      transferOne$1(source, destination, style);
    });
  };
  var $_43s1eukpjctdj3p3 = {
    copy: copy,
    set: set$1,
    preserve: preserve,
    setAll: setAll$1,
    setOptions: setOptions,
    remove: remove$1,
    get: get$1,
    getRaw: getRaw,
    getAllRaw: getAllRaw,
    isValidValue: isValidValue,
    reflow: reflow,
    transfer: transfer$1
  };

  var before = function (marker, element) {
    var parent = $_4vj6djjxjctdj3lz.parent(marker);
    parent.each(function (v) {
      v.dom().insertBefore(element.dom(), marker.dom());
    });
  };
  var after = function (marker, element) {
    var sibling = $_4vj6djjxjctdj3lz.nextSibling(marker);
    sibling.fold(function () {
      var parent = $_4vj6djjxjctdj3lz.parent(marker);
      parent.each(function (v) {
        append(v, element);
      });
    }, function (v) {
      before(v, element);
    });
  };
  var prepend = function (parent, element) {
    var firstChild = $_4vj6djjxjctdj3lz.firstChild(parent);
    firstChild.fold(function () {
      append(parent, element);
    }, function (v) {
      parent.dom().insertBefore(element.dom(), v.dom());
    });
  };
  var append = function (parent, element) {
    parent.dom().appendChild(element.dom());
  };
  var appendAt = function (parent, element, index) {
    $_4vj6djjxjctdj3lz.child(parent, index).fold(function () {
      append(parent, element);
    }, function (v) {
      before(v, element);
    });
  };
  var wrap = function (element, wrapper) {
    before(element, wrapper);
    append(wrapper, element);
  };
  var $_a6a55bkrjctdj3pl = {
    before: before,
    after: after,
    prepend: prepend,
    append: append,
    appendAt: appendAt,
    wrap: wrap
  };

  var before$1 = function (marker, elements) {
    $_cya8qajgjctdj3jm.each(elements, function (x) {
      $_a6a55bkrjctdj3pl.before(marker, x);
    });
  };
  var after$1 = function (marker, elements) {
    $_cya8qajgjctdj3jm.each(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      $_a6a55bkrjctdj3pl.after(e, x);
    });
  };
  var prepend$1 = function (parent, elements) {
    $_cya8qajgjctdj3jm.each(elements.slice().reverse(), function (x) {
      $_a6a55bkrjctdj3pl.prepend(parent, x);
    });
  };
  var append$1 = function (parent, elements) {
    $_cya8qajgjctdj3jm.each(elements, function (x) {
      $_a6a55bkrjctdj3pl.append(parent, x);
    });
  };
  var $_f7m4npktjctdj3pq = {
    before: before$1,
    after: after$1,
    prepend: prepend$1,
    append: append$1
  };

  var empty = function (element) {
    element.dom().textContent = '';
    $_cya8qajgjctdj3jm.each($_4vj6djjxjctdj3lz.children(element), function (rogue) {
      remove$2(rogue);
    });
  };
  var remove$2 = function (element) {
    var dom = element.dom();
    if (dom.parentNode !== null)
      dom.parentNode.removeChild(dom);
  };
  var unwrap = function (wrapper) {
    var children = $_4vj6djjxjctdj3lz.children(wrapper);
    if (children.length > 0)
      $_f7m4npktjctdj3pq.before(wrapper, children);
    remove$2(wrapper);
  };
  var $_7l6mlmksjctdj3pm = {
    empty: empty,
    remove: remove$2,
    unwrap: unwrap
  };

  var stats = $_2gilnfjljctdj3kj.immutable('minRow', 'minCol', 'maxRow', 'maxCol');
  var findSelectedStats = function (house, isSelected) {
    var totalColumns = house.grid().columns();
    var totalRows = house.grid().rows();
    var minRow = totalRows;
    var minCol = totalColumns;
    var maxRow = 0;
    var maxCol = 0;
    $_5bka9ljkjctdj3kc.each(house.access(), function (detail) {
      if (isSelected(detail)) {
        var startRow = detail.row();
        var endRow = startRow + detail.rowspan() - 1;
        var startCol = detail.column();
        var endCol = startCol + detail.colspan() - 1;
        if (startRow < minRow)
          minRow = startRow;
        else if (endRow > maxRow)
          maxRow = endRow;
        if (startCol < minCol)
          minCol = startCol;
        else if (endCol > maxCol)
          maxCol = endCol;
      }
    });
    return stats(minRow, minCol, maxRow, maxCol);
  };
  var makeCell = function (list, seenSelected, rowIndex) {
    var row = list[rowIndex].element();
    var td = $_4jfq4gjvjctdj3lt.fromTag('td');
    $_a6a55bkrjctdj3pl.append(td, $_4jfq4gjvjctdj3lt.fromTag('br'));
    var f = seenSelected ? $_a6a55bkrjctdj3pl.append : $_a6a55bkrjctdj3pl.prepend;
    f(row, td);
  };
  var fillInGaps = function (list, house, stats, isSelected) {
    var totalColumns = house.grid().columns();
    var totalRows = house.grid().rows();
    for (var i = 0; i < totalRows; i++) {
      var seenSelected = false;
      for (var j = 0; j < totalColumns; j++) {
        if (!(i < stats.minRow() || i > stats.maxRow() || j < stats.minCol() || j > stats.maxCol())) {
          var needCell = $_13w1akojctdj3op.getAt(house, i, j).filter(isSelected).isNone();
          if (needCell)
            makeCell(list, seenSelected, i);
          else
            seenSelected = true;
        }
      }
    }
  };
  var clean = function (table, stats) {
    var emptyRows = $_cya8qajgjctdj3jm.filter($_2e5amtjtjctdj3ld.firstLayer(table, 'tr'), function (row) {
      return row.dom().childElementCount === 0;
    });
    $_cya8qajgjctdj3jm.each(emptyRows, $_7l6mlmksjctdj3pm.remove);
    if (stats.minCol() === stats.maxCol() || stats.minRow() === stats.maxRow()) {
      $_cya8qajgjctdj3jm.each($_2e5amtjtjctdj3ld.firstLayer(table, 'th,td'), function (cell) {
        $_fdrkf1kgjctdj3no.remove(cell, 'rowspan');
        $_fdrkf1kgjctdj3no.remove(cell, 'colspan');
      });
    }
    $_fdrkf1kgjctdj3no.remove(table, 'width');
    $_fdrkf1kgjctdj3no.remove(table, 'height');
    $_43s1eukpjctdj3p3.remove(table, 'width');
    $_43s1eukpjctdj3p3.remove(table, 'height');
  };
  var extract = function (table, selectedSelector) {
    var isSelected = function (detail) {
      return $_659m8xjujctdj3li.is(detail.element(), selectedSelector);
    };
    var list = $_1x2v4fjqjctdj3ks.fromTable(table);
    var house = $_13w1akojctdj3op.generate(list);
    var stats = findSelectedStats(house, isSelected);
    var selector = 'th:not(' + selectedSelector + ')' + ',td:not(' + selectedSelector + ')';
    var unselectedCells = $_2e5amtjtjctdj3ld.filterFirstLayer(table, 'th,td', function (cell) {
      return $_659m8xjujctdj3li.is(cell, selector);
    });
    $_cya8qajgjctdj3jm.each(unselectedCells, $_7l6mlmksjctdj3pm.remove);
    fillInGaps(list, house, stats, isSelected);
    clean(table, stats);
    return table;
  };
  var $_7i5tsejjjctdj3jy = { extract: extract };

  var clone$1 = function (original, deep) {
    return $_4jfq4gjvjctdj3lt.fromDom(original.dom().cloneNode(deep));
  };
  var shallow = function (original) {
    return clone$1(original, false);
  };
  var deep = function (original) {
    return clone$1(original, true);
  };
  var shallowAs = function (original, tag) {
    var nu = $_4jfq4gjvjctdj3lt.fromTag(tag);
    var attributes = $_fdrkf1kgjctdj3no.clone(original);
    $_fdrkf1kgjctdj3no.setAll(nu, attributes);
    return nu;
  };
  var copy$1 = function (original, tag) {
    var nu = shallowAs(original, tag);
    var cloneChildren = $_4vj6djjxjctdj3lz.children(deep(original));
    $_f7m4npktjctdj3pq.append(nu, cloneChildren);
    return nu;
  };
  var mutate = function (original, tag) {
    var nu = shallowAs(original, tag);
    $_a6a55bkrjctdj3pl.before(original, nu);
    var children = $_4vj6djjxjctdj3lz.children(original);
    $_f7m4npktjctdj3pq.append(nu, children);
    $_7l6mlmksjctdj3pm.remove(original);
    return nu;
  };
  var $_43w7amkvjctdj3q9 = {
    shallow: shallow,
    shallowAs: shallowAs,
    deep: deep,
    copy: copy$1,
    mutate: mutate
  };

  var NodeValue = function (is, name) {
    var get = function (element) {
      if (!is(element))
        throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
      return getOption(element).getOr('');
    };
    var getOptionIE10 = function (element) {
      try {
        return getOptionSafe(element);
      } catch (e) {
        return $_41pgl8jhjctdj3jt.none();
      }
    };
    var getOptionSafe = function (element) {
      return is(element) ? $_41pgl8jhjctdj3jt.from(element.dom().nodeValue) : $_41pgl8jhjctdj3jt.none();
    };
    var browser = $_61ae92k4jctdj3mu.detect().browser;
    var getOption = browser.isIE() && browser.version.major === 10 ? getOptionIE10 : getOptionSafe;
    var set = function (element, value) {
      if (!is(element))
        throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
      element.dom().nodeValue = value;
    };
    return {
      get: get,
      getOption: getOption,
      set: set
    };
  };

  var api = NodeValue($_gao3elkhjctdj3nw.isText, 'text');
  var get$2 = function (element) {
    return api.get(element);
  };
  var getOption = function (element) {
    return api.getOption(element);
  };
  var set$2 = function (element, value) {
    api.set(element, value);
  };
  var $_4wxri4kyjctdj3qj = {
    get: get$2,
    getOption: getOption,
    set: set$2
  };

  var getEnd = function (element) {
    return $_gao3elkhjctdj3nw.name(element) === 'img' ? 1 : $_4wxri4kyjctdj3qj.getOption(element).fold(function () {
      return $_4vj6djjxjctdj3lz.children(element).length;
    }, function (v) {
      return v.length;
    });
  };
  var isEnd = function (element, offset) {
    return getEnd(element) === offset;
  };
  var isStart = function (element, offset) {
    return offset === 0;
  };
  var NBSP = '\xA0';
  var isTextNodeWithCursorPosition = function (el) {
    return $_4wxri4kyjctdj3qj.getOption(el).filter(function (text) {
      return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
    }).isSome();
  };
  var elementsWithCursorPosition = [
    'img',
    'br'
  ];
  var isCursorPosition = function (elem) {
    var hasCursorPosition = isTextNodeWithCursorPosition(elem);
    return hasCursorPosition || $_cya8qajgjctdj3jm.contains(elementsWithCursorPosition, $_gao3elkhjctdj3nw.name(elem));
  };
  var $_br7eb1kxjctdj3qf = {
    getEnd: getEnd,
    isEnd: isEnd,
    isStart: isStart,
    isCursorPosition: isCursorPosition
  };

  var first$3 = function (element) {
    return $_3ulq7wkmjctdj3ob.descendant(element, $_br7eb1kxjctdj3qf.isCursorPosition);
  };
  var last$2 = function (element) {
    return descendantRtl(element, $_br7eb1kxjctdj3qf.isCursorPosition);
  };
  var descendantRtl = function (scope, predicate) {
    var descend = function (element) {
      var children = $_4vj6djjxjctdj3lz.children(element);
      for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        if (predicate(child))
          return $_41pgl8jhjctdj3jt.some(child);
        var res = descend(child);
        if (res.isSome())
          return res;
      }
      return $_41pgl8jhjctdj3jt.none();
    };
    return descend(scope);
  };
  var $_bc2n4jkwjctdj3qd = {
    first: first$3,
    last: last$2
  };

  var cell$1 = function () {
    var td = $_4jfq4gjvjctdj3lt.fromTag('td');
    $_a6a55bkrjctdj3pl.append(td, $_4jfq4gjvjctdj3lt.fromTag('br'));
    return td;
  };
  var replace = function (cell, tag, attrs) {
    var replica = $_43w7amkvjctdj3q9.copy(cell, tag);
    $_5bka9ljkjctdj3kc.each(attrs, function (v, k) {
      if (v === null)
        $_fdrkf1kgjctdj3no.remove(replica, k);
      else
        $_fdrkf1kgjctdj3no.set(replica, k, v);
    });
    return replica;
  };
  var pasteReplace = function (cellContent) {
    return cellContent;
  };
  var newRow = function (doc) {
    return function () {
      return $_4jfq4gjvjctdj3lt.fromTag('tr', doc.dom());
    };
  };
  var cloneFormats = function (oldCell, newCell, formats) {
    var first = $_bc2n4jkwjctdj3qd.first(oldCell);
    return first.map(function (firstText) {
      var formatSelector = formats.join(',');
      var parents = $_cifrp6kijctdj3ny.ancestors(firstText, formatSelector, function (element) {
        return $_dptc54jzjctdj3ma.eq(element, oldCell);
      });
      return $_cya8qajgjctdj3jm.foldr(parents, function (last, parent) {
        var clonedFormat = $_43w7amkvjctdj3q9.shallow(parent);
        $_a6a55bkrjctdj3pl.append(last, clonedFormat);
        return clonedFormat;
      }, newCell);
    }).getOr(newCell);
  };
  var cellOperations = function (mutate, doc, formatsToClone) {
    var newCell = function (prev) {
      var doc = $_4vj6djjxjctdj3lz.owner(prev.element());
      var td = $_4jfq4gjvjctdj3lt.fromTag($_gao3elkhjctdj3nw.name(prev.element()), doc.dom());
      var formats = formatsToClone.getOr([
        'strong',
        'em',
        'b',
        'i',
        'span',
        'font',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'div'
      ]);
      var lastNode = formats.length > 0 ? cloneFormats(prev.element(), td, formats) : td;
      $_a6a55bkrjctdj3pl.append(lastNode, $_4jfq4gjvjctdj3lt.fromTag('br'));
      $_43s1eukpjctdj3p3.copy(prev.element(), td);
      $_43s1eukpjctdj3p3.remove(td, 'height');
      if (prev.colspan() !== 1)
        $_43s1eukpjctdj3p3.remove(prev.element(), 'width');
      mutate(prev.element(), td);
      return td;
    };
    return {
      row: newRow(doc),
      cell: newCell,
      replace: replace,
      gap: cell$1
    };
  };
  var paste = function (doc) {
    return {
      row: newRow(doc),
      cell: cell$1,
      replace: pasteReplace,
      gap: cell$1
    };
  };
  var $_23eg8kujctdj3pt = {
    cellOperations: cellOperations,
    paste: paste
  };

  var fromHtml$1 = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    return $_4vj6djjxjctdj3lz.children($_4jfq4gjvjctdj3lt.fromDom(div));
  };
  var fromTags = function (tags, scope) {
    return $_cya8qajgjctdj3jm.map(tags, function (x) {
      return $_4jfq4gjvjctdj3lt.fromTag(x, scope);
    });
  };
  var fromText$1 = function (texts, scope) {
    return $_cya8qajgjctdj3jm.map(texts, function (x) {
      return $_4jfq4gjvjctdj3lt.fromText(x, scope);
    });
  };
  var fromDom$1 = function (nodes) {
    return $_cya8qajgjctdj3jm.map(nodes, $_4jfq4gjvjctdj3lt.fromDom);
  };
  var $_fleitnl0jctdj3qo = {
    fromHtml: fromHtml$1,
    fromTags: fromTags,
    fromText: fromText$1,
    fromDom: fromDom$1
  };

  var TagBoundaries = [
    'body',
    'p',
    'div',
    'article',
    'aside',
    'figcaption',
    'figure',
    'footer',
    'header',
    'nav',
    'section',
    'ol',
    'ul',
    'li',
    'table',
    'thead',
    'tbody',
    'tfoot',
    'caption',
    'tr',
    'td',
    'th',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'pre',
    'address'
  ];

  var DomUniverse = function () {
    var clone = function (element) {
      return $_4jfq4gjvjctdj3lt.fromDom(element.dom().cloneNode(false));
    };
    var isBoundary = function (element) {
      if (!$_gao3elkhjctdj3nw.isElement(element))
        return false;
      if ($_gao3elkhjctdj3nw.name(element) === 'body')
        return true;
      return $_cya8qajgjctdj3jm.contains(TagBoundaries, $_gao3elkhjctdj3nw.name(element));
    };
    var isEmptyTag = function (element) {
      if (!$_gao3elkhjctdj3nw.isElement(element))
        return false;
      return $_cya8qajgjctdj3jm.contains([
        'br',
        'img',
        'hr',
        'input'
      ], $_gao3elkhjctdj3nw.name(element));
    };
    var comparePosition = function (element, other) {
      return element.dom().compareDocumentPosition(other.dom());
    };
    var copyAttributesTo = function (source, destination) {
      var as = $_fdrkf1kgjctdj3no.clone(source);
      $_fdrkf1kgjctdj3no.setAll(destination, as);
    };
    return {
      up: $_17hg00jijctdj3jv.constant({
        selector: $_8qdzookljctdj3o9.ancestor,
        closest: $_8qdzookljctdj3o9.closest,
        predicate: $_3ulq7wkmjctdj3ob.ancestor,
        all: $_4vj6djjxjctdj3lz.parents
      }),
      down: $_17hg00jijctdj3jv.constant({
        selector: $_cifrp6kijctdj3ny.descendants,
        predicate: $_6q6oomkjjctdj3nz.descendants
      }),
      styles: $_17hg00jijctdj3jv.constant({
        get: $_43s1eukpjctdj3p3.get,
        getRaw: $_43s1eukpjctdj3p3.getRaw,
        set: $_43s1eukpjctdj3p3.set,
        remove: $_43s1eukpjctdj3p3.remove
      }),
      attrs: $_17hg00jijctdj3jv.constant({
        get: $_fdrkf1kgjctdj3no.get,
        set: $_fdrkf1kgjctdj3no.set,
        remove: $_fdrkf1kgjctdj3no.remove,
        copyTo: copyAttributesTo
      }),
      insert: $_17hg00jijctdj3jv.constant({
        before: $_a6a55bkrjctdj3pl.before,
        after: $_a6a55bkrjctdj3pl.after,
        afterAll: $_f7m4npktjctdj3pq.after,
        append: $_a6a55bkrjctdj3pl.append,
        appendAll: $_f7m4npktjctdj3pq.append,
        prepend: $_a6a55bkrjctdj3pl.prepend,
        wrap: $_a6a55bkrjctdj3pl.wrap
      }),
      remove: $_17hg00jijctdj3jv.constant({
        unwrap: $_7l6mlmksjctdj3pm.unwrap,
        remove: $_7l6mlmksjctdj3pm.remove
      }),
      create: $_17hg00jijctdj3jv.constant({
        nu: $_4jfq4gjvjctdj3lt.fromTag,
        clone: clone,
        text: $_4jfq4gjvjctdj3lt.fromText
      }),
      query: $_17hg00jijctdj3jv.constant({
        comparePosition: comparePosition,
        prevSibling: $_4vj6djjxjctdj3lz.prevSibling,
        nextSibling: $_4vj6djjxjctdj3lz.nextSibling
      }),
      property: $_17hg00jijctdj3jv.constant({
        children: $_4vj6djjxjctdj3lz.children,
        name: $_gao3elkhjctdj3nw.name,
        parent: $_4vj6djjxjctdj3lz.parent,
        isText: $_gao3elkhjctdj3nw.isText,
        isComment: $_gao3elkhjctdj3nw.isComment,
        isElement: $_gao3elkhjctdj3nw.isElement,
        getText: $_4wxri4kyjctdj3qj.get,
        setText: $_4wxri4kyjctdj3qj.set,
        isBoundary: isBoundary,
        isEmptyTag: isEmptyTag
      }),
      eq: $_dptc54jzjctdj3ma.eq,
      is: $_dptc54jzjctdj3ma.is
    };
  };

  var leftRight = $_2gilnfjljctdj3kj.immutable('left', 'right');
  var bisect = function (universe, parent, child) {
    var children = universe.property().children(parent);
    var index = $_cya8qajgjctdj3jm.findIndex(children, $_17hg00jijctdj3jv.curry(universe.eq, child));
    return index.map(function (ind) {
      return {
        before: $_17hg00jijctdj3jv.constant(children.slice(0, ind)),
        after: $_17hg00jijctdj3jv.constant(children.slice(ind + 1))
      };
    });
  };
  var breakToRight$2 = function (universe, parent, child) {
    return bisect(universe, parent, child).map(function (parts) {
      var second = universe.create().clone(parent);
      universe.insert().appendAll(second, parts.after());
      universe.insert().after(parent, second);
      return leftRight(parent, second);
    });
  };
  var breakToLeft$2 = function (universe, parent, child) {
    return bisect(universe, parent, child).map(function (parts) {
      var prior = universe.create().clone(parent);
      universe.insert().appendAll(prior, parts.before().concat([child]));
      universe.insert().appendAll(parent, parts.after());
      universe.insert().before(parent, prior);
      return leftRight(prior, parent);
    });
  };
  var breakPath$2 = function (universe, item, isTop, breaker) {
    var result = $_2gilnfjljctdj3kj.immutable('first', 'second', 'splits');
    var next = function (child, group, splits) {
      var fallback = result(child, $_41pgl8jhjctdj3jt.none(), splits);
      if (isTop(child))
        return result(child, group, splits);
      else {
        return universe.property().parent(child).bind(function (parent) {
          return breaker(universe, parent, child).map(function (breakage) {
            var extra = [{
                first: breakage.left,
                second: breakage.right
              }];
            var nextChild = isTop(parent) ? parent : breakage.left();
            return next(nextChild, $_41pgl8jhjctdj3jt.some(breakage.right()), splits.concat(extra));
          }).getOr(fallback);
        });
      }
    };
    return next(item, $_41pgl8jhjctdj3jt.none(), []);
  };
  var $_7mt2eql9jctdj3sr = {
    breakToLeft: breakToLeft$2,
    breakToRight: breakToRight$2,
    breakPath: breakPath$2
  };

  var all$3 = function (universe, look, elements, f) {
    var head = elements[0];
    var tail = elements.slice(1);
    return f(universe, look, head, tail);
  };
  var oneAll = function (universe, look, elements) {
    return elements.length > 0 ? all$3(universe, look, elements, unsafeOne) : $_41pgl8jhjctdj3jt.none();
  };
  var unsafeOne = function (universe, look, head, tail) {
    var start = look(universe, head);
    return $_cya8qajgjctdj3jm.foldr(tail, function (b, a) {
      var current = look(universe, a);
      return commonElement(universe, b, current);
    }, start);
  };
  var commonElement = function (universe, start, end) {
    return start.bind(function (s) {
      return end.filter($_17hg00jijctdj3jv.curry(universe.eq, s));
    });
  };
  var $_85hplslajctdj3sy = { oneAll: oneAll };

  var eq$1 = function (universe, item) {
    return $_17hg00jijctdj3jv.curry(universe.eq, item);
  };
  var unsafeSubset = function (universe, common, ps1, ps2) {
    var children = universe.property().children(common);
    if (universe.eq(common, ps1[0]))
      return $_41pgl8jhjctdj3jt.some([ps1[0]]);
    if (universe.eq(common, ps2[0]))
      return $_41pgl8jhjctdj3jt.some([ps2[0]]);
    var finder = function (ps) {
      var topDown = $_cya8qajgjctdj3jm.reverse(ps);
      var index = $_cya8qajgjctdj3jm.findIndex(topDown, eq$1(universe, common)).getOr(-1);
      var item = index < topDown.length - 1 ? topDown[index + 1] : topDown[index];
      return $_cya8qajgjctdj3jm.findIndex(children, eq$1(universe, item));
    };
    var startIndex = finder(ps1);
    var endIndex = finder(ps2);
    return startIndex.bind(function (sIndex) {
      return endIndex.map(function (eIndex) {
        var first = Math.min(sIndex, eIndex);
        var last = Math.max(sIndex, eIndex);
        return children.slice(first, last + 1);
      });
    });
  };
  var ancestors$4 = function (universe, start, end, _isRoot) {
    var isRoot = _isRoot !== undefined ? _isRoot : $_17hg00jijctdj3jv.constant(false);
    var ps1 = [start].concat(universe.up().all(start));
    var ps2 = [end].concat(universe.up().all(end));
    var prune = function (path) {
      var index = $_cya8qajgjctdj3jm.findIndex(path, isRoot);
      return index.fold(function () {
        return path;
      }, function (ind) {
        return path.slice(0, ind + 1);
      });
    };
    var pruned1 = prune(ps1);
    var pruned2 = prune(ps2);
    var shared = $_cya8qajgjctdj3jm.find(pruned1, function (x) {
      return $_cya8qajgjctdj3jm.exists(pruned2, eq$1(universe, x));
    });
    return {
      firstpath: $_17hg00jijctdj3jv.constant(pruned1),
      secondpath: $_17hg00jijctdj3jv.constant(pruned2),
      shared: $_17hg00jijctdj3jv.constant(shared)
    };
  };
  var subset$2 = function (universe, start, end) {
    var ancs = ancestors$4(universe, start, end);
    return ancs.shared().bind(function (shared) {
      return unsafeSubset(universe, shared, ancs.firstpath(), ancs.secondpath());
    });
  };
  var $_5dshkdlbjctdj3t8 = {
    subset: subset$2,
    ancestors: ancestors$4
  };

  var sharedOne$1 = function (universe, look, elements) {
    return $_85hplslajctdj3sy.oneAll(universe, look, elements);
  };
  var subset$1 = function (universe, start, finish) {
    return $_5dshkdlbjctdj3t8.subset(universe, start, finish);
  };
  var ancestors$3 = function (universe, start, finish, _isRoot) {
    return $_5dshkdlbjctdj3t8.ancestors(universe, start, finish, _isRoot);
  };
  var breakToLeft$1 = function (universe, parent, child) {
    return $_7mt2eql9jctdj3sr.breakToLeft(universe, parent, child);
  };
  var breakToRight$1 = function (universe, parent, child) {
    return $_7mt2eql9jctdj3sr.breakToRight(universe, parent, child);
  };
  var breakPath$1 = function (universe, child, isTop, breaker) {
    return $_7mt2eql9jctdj3sr.breakPath(universe, child, isTop, breaker);
  };
  var $_7rzn1yl8jctdj3sp = {
    sharedOne: sharedOne$1,
    subset: subset$1,
    ancestors: ancestors$3,
    breakToLeft: breakToLeft$1,
    breakToRight: breakToRight$1,
    breakPath: breakPath$1
  };

  var universe = DomUniverse();
  var sharedOne = function (look, elements) {
    return $_7rzn1yl8jctdj3sp.sharedOne(universe, function (universe, element) {
      return look(element);
    }, elements);
  };
  var subset = function (start, finish) {
    return $_7rzn1yl8jctdj3sp.subset(universe, start, finish);
  };
  var ancestors$2 = function (start, finish, _isRoot) {
    return $_7rzn1yl8jctdj3sp.ancestors(universe, start, finish, _isRoot);
  };
  var breakToLeft = function (parent, child) {
    return $_7rzn1yl8jctdj3sp.breakToLeft(universe, parent, child);
  };
  var breakToRight = function (parent, child) {
    return $_7rzn1yl8jctdj3sp.breakToRight(universe, parent, child);
  };
  var breakPath = function (child, isTop, breaker) {
    return $_7rzn1yl8jctdj3sp.breakPath(universe, child, isTop, function (u, p, c) {
      return breaker(p, c);
    });
  };
  var $_2uu2y5l5jctdj3rz = {
    sharedOne: sharedOne,
    subset: subset,
    ancestors: ancestors$2,
    breakToLeft: breakToLeft,
    breakToRight: breakToRight,
    breakPath: breakPath
  };

  var inSelection = function (bounds, detail) {
    var leftEdge = detail.column();
    var rightEdge = detail.column() + detail.colspan() - 1;
    var topEdge = detail.row();
    var bottomEdge = detail.row() + detail.rowspan() - 1;
    return leftEdge <= bounds.finishCol() && rightEdge >= bounds.startCol() && (topEdge <= bounds.finishRow() && bottomEdge >= bounds.startRow());
  };
  var isWithin = function (bounds, detail) {
    return detail.column() >= bounds.startCol() && detail.column() + detail.colspan() - 1 <= bounds.finishCol() && detail.row() >= bounds.startRow() && detail.row() + detail.rowspan() - 1 <= bounds.finishRow();
  };
  var isRectangular = function (warehouse, bounds) {
    var isRect = true;
    var detailIsWithin = $_17hg00jijctdj3jv.curry(isWithin, bounds);
    for (var i = bounds.startRow(); i <= bounds.finishRow(); i++) {
      for (var j = bounds.startCol(); j <= bounds.finishCol(); j++) {
        isRect = isRect && $_13w1akojctdj3op.getAt(warehouse, i, j).exists(detailIsWithin);
      }
    }
    return isRect ? $_41pgl8jhjctdj3jt.some(bounds) : $_41pgl8jhjctdj3jt.none();
  };
  var $_65b1ezlejctdj3tm = {
    inSelection: inSelection,
    isWithin: isWithin,
    isRectangular: isRectangular
  };

  var getBounds = function (detailA, detailB) {
    return $_6gworajrjctdj3ky.bounds(Math.min(detailA.row(), detailB.row()), Math.min(detailA.column(), detailB.column()), Math.max(detailA.row() + detailA.rowspan() - 1, detailB.row() + detailB.rowspan() - 1), Math.max(detailA.column() + detailA.colspan() - 1, detailB.column() + detailB.colspan() - 1));
  };
  var getAnyBox = function (warehouse, startCell, finishCell) {
    var startCoords = $_13w1akojctdj3op.findItem(warehouse, startCell, $_dptc54jzjctdj3ma.eq);
    var finishCoords = $_13w1akojctdj3op.findItem(warehouse, finishCell, $_dptc54jzjctdj3ma.eq);
    return startCoords.bind(function (sc) {
      return finishCoords.map(function (fc) {
        return getBounds(sc, fc);
      });
    });
  };
  var getBox$1 = function (warehouse, startCell, finishCell) {
    return getAnyBox(warehouse, startCell, finishCell).bind(function (bounds) {
      return $_65b1ezlejctdj3tm.isRectangular(warehouse, bounds);
    });
  };
  var $_avb1colfjctdj3tr = {
    getAnyBox: getAnyBox,
    getBox: getBox$1
  };

  var moveBy$1 = function (warehouse, cell, row, column) {
    return $_13w1akojctdj3op.findItem(warehouse, cell, $_dptc54jzjctdj3ma.eq).bind(function (detail) {
      var startRow = row > 0 ? detail.row() + detail.rowspan() - 1 : detail.row();
      var startCol = column > 0 ? detail.column() + detail.colspan() - 1 : detail.column();
      var dest = $_13w1akojctdj3op.getAt(warehouse, startRow + row, startCol + column);
      return dest.map(function (d) {
        return d.element();
      });
    });
  };
  var intercepts$1 = function (warehouse, start, finish) {
    return $_avb1colfjctdj3tr.getAnyBox(warehouse, start, finish).map(function (bounds) {
      var inside = $_13w1akojctdj3op.filterItems(warehouse, $_17hg00jijctdj3jv.curry($_65b1ezlejctdj3tm.inSelection, bounds));
      return $_cya8qajgjctdj3jm.map(inside, function (detail) {
        return detail.element();
      });
    });
  };
  var parentCell = function (warehouse, innerCell) {
    var isContainedBy = function (c1, c2) {
      return $_dptc54jzjctdj3ma.contains(c2, c1);
    };
    return $_13w1akojctdj3op.findItem(warehouse, innerCell, isContainedBy).bind(function (detail) {
      return detail.element();
    });
  };
  var $_29soyzldjctdj3th = {
    moveBy: moveBy$1,
    intercepts: intercepts$1,
    parentCell: parentCell
  };

  var moveBy = function (cell, deltaRow, deltaColumn) {
    return $_1mbzcijsjctdj3l1.table(cell).bind(function (table) {
      var warehouse = getWarehouse(table);
      return $_29soyzldjctdj3th.moveBy(warehouse, cell, deltaRow, deltaColumn);
    });
  };
  var intercepts = function (table, first, last) {
    var warehouse = getWarehouse(table);
    return $_29soyzldjctdj3th.intercepts(warehouse, first, last);
  };
  var nestedIntercepts = function (table, first, firstTable, last, lastTable) {
    var warehouse = getWarehouse(table);
    var startCell = $_dptc54jzjctdj3ma.eq(table, firstTable) ? first : $_29soyzldjctdj3th.parentCell(warehouse, first);
    var lastCell = $_dptc54jzjctdj3ma.eq(table, lastTable) ? last : $_29soyzldjctdj3th.parentCell(warehouse, last);
    return $_29soyzldjctdj3th.intercepts(warehouse, startCell, lastCell);
  };
  var getBox = function (table, first, last) {
    var warehouse = getWarehouse(table);
    return $_avb1colfjctdj3tr.getBox(warehouse, first, last);
  };
  var getWarehouse = function (table) {
    var list = $_1x2v4fjqjctdj3ks.fromTable(table);
    return $_13w1akojctdj3op.generate(list);
  };
  var $_f0k3dslcjctdj3te = {
    moveBy: moveBy,
    intercepts: intercepts,
    nestedIntercepts: nestedIntercepts,
    getBox: getBox
  };

  var lookupTable = function (container, isRoot) {
    return $_8qdzookljctdj3o9.ancestor(container, 'table');
  };
  var identified = $_2gilnfjljctdj3kj.immutableBag([
    'boxes',
    'start',
    'finish'
  ], []);
  var identify = function (start, finish, isRoot) {
    var getIsRoot = function (rootTable) {
      return function (element) {
        return isRoot(element) || $_dptc54jzjctdj3ma.eq(element, rootTable);
      };
    };
    if ($_dptc54jzjctdj3ma.eq(start, finish)) {
      return $_41pgl8jhjctdj3jt.some(identified({
        boxes: $_41pgl8jhjctdj3jt.some([start]),
        start: start,
        finish: finish
      }));
    } else {
      return lookupTable(start, isRoot).bind(function (startTable) {
        return lookupTable(finish, isRoot).bind(function (finishTable) {
          if ($_dptc54jzjctdj3ma.eq(startTable, finishTable)) {
            return $_41pgl8jhjctdj3jt.some(identified({
              boxes: $_f0k3dslcjctdj3te.intercepts(startTable, start, finish),
              start: start,
              finish: finish
            }));
          } else if ($_dptc54jzjctdj3ma.contains(startTable, finishTable)) {
            var ancestorCells = $_cifrp6kijctdj3ny.ancestors(finish, 'td,th', getIsRoot(startTable));
            var finishCell = ancestorCells.length > 0 ? ancestorCells[ancestorCells.length - 1] : finish;
            return $_41pgl8jhjctdj3jt.some(identified({
              boxes: $_f0k3dslcjctdj3te.nestedIntercepts(startTable, start, startTable, finish, finishTable),
              start: start,
              finish: finishCell
            }));
          } else if ($_dptc54jzjctdj3ma.contains(finishTable, startTable)) {
            var ancestorCells = $_cifrp6kijctdj3ny.ancestors(start, 'td,th', getIsRoot(finishTable));
            var startCell = ancestorCells.length > 0 ? ancestorCells[ancestorCells.length - 1] : start;
            return $_41pgl8jhjctdj3jt.some(identified({
              boxes: $_f0k3dslcjctdj3te.nestedIntercepts(finishTable, start, startTable, finish, finishTable),
              start: start,
              finish: startCell
            }));
          } else {
            return $_2uu2y5l5jctdj3rz.ancestors(start, finish).shared().bind(function (lca) {
              return $_8qdzookljctdj3o9.closest(lca, 'table', isRoot).bind(function (lcaTable) {
                var finishAncestorCells = $_cifrp6kijctdj3ny.ancestors(finish, 'td,th', getIsRoot(lcaTable));
                var finishCell = finishAncestorCells.length > 0 ? finishAncestorCells[finishAncestorCells.length - 1] : finish;
                var startAncestorCells = $_cifrp6kijctdj3ny.ancestors(start, 'td,th', getIsRoot(lcaTable));
                var startCell = startAncestorCells.length > 0 ? startAncestorCells[startAncestorCells.length - 1] : start;
                return $_41pgl8jhjctdj3jt.some(identified({
                  boxes: $_f0k3dslcjctdj3te.nestedIntercepts(lcaTable, start, startTable, finish, finishTable),
                  start: startCell,
                  finish: finishCell
                }));
              });
            });
          }
        });
      });
    }
  };
  var retrieve$1 = function (container, selector) {
    var sels = $_cifrp6kijctdj3ny.descendants(container, selector);
    return sels.length > 0 ? $_41pgl8jhjctdj3jt.some(sels) : $_41pgl8jhjctdj3jt.none();
  };
  var getLast = function (boxes, lastSelectedSelector) {
    return $_cya8qajgjctdj3jm.find(boxes, function (box) {
      return $_659m8xjujctdj3li.is(box, lastSelectedSelector);
    });
  };
  var getEdges = function (container, firstSelectedSelector, lastSelectedSelector) {
    return $_8qdzookljctdj3o9.descendant(container, firstSelectedSelector).bind(function (first) {
      return $_8qdzookljctdj3o9.descendant(container, lastSelectedSelector).bind(function (last) {
        return $_2uu2y5l5jctdj3rz.sharedOne(lookupTable, [
          first,
          last
        ]).map(function (tbl) {
          return {
            first: $_17hg00jijctdj3jv.constant(first),
            last: $_17hg00jijctdj3jv.constant(last),
            table: $_17hg00jijctdj3jv.constant(tbl)
          };
        });
      });
    });
  };
  var expandTo = function (finish, firstSelectedSelector) {
    return $_8qdzookljctdj3o9.ancestor(finish, 'table').bind(function (table) {
      return $_8qdzookljctdj3o9.descendant(table, firstSelectedSelector).bind(function (start) {
        return identify(start, finish).bind(function (identified) {
          return identified.boxes().map(function (boxes) {
            return {
              boxes: $_17hg00jijctdj3jv.constant(boxes),
              start: $_17hg00jijctdj3jv.constant(identified.start()),
              finish: $_17hg00jijctdj3jv.constant(identified.finish())
            };
          });
        });
      });
    });
  };
  var shiftSelection = function (boxes, deltaRow, deltaColumn, firstSelectedSelector, lastSelectedSelector) {
    return getLast(boxes, lastSelectedSelector).bind(function (last) {
      return $_f0k3dslcjctdj3te.moveBy(last, deltaRow, deltaColumn).bind(function (finish) {
        return expandTo(finish, firstSelectedSelector);
      });
    });
  };
  var $_et8bsml4jctdj3rf = {
    identify: identify,
    retrieve: retrieve$1,
    shiftSelection: shiftSelection,
    getEdges: getEdges
  };

  var retrieve = function (container, selector) {
    return $_et8bsml4jctdj3rf.retrieve(container, selector);
  };
  var retrieveBox = function (container, firstSelectedSelector, lastSelectedSelector) {
    return $_et8bsml4jctdj3rf.getEdges(container, firstSelectedSelector, lastSelectedSelector).bind(function (edges) {
      var isRoot = function (ancestor) {
        return $_dptc54jzjctdj3ma.eq(container, ancestor);
      };
      var firstAncestor = $_8qdzookljctdj3o9.ancestor(edges.first(), 'thead,tfoot,tbody,table', isRoot);
      var lastAncestor = $_8qdzookljctdj3o9.ancestor(edges.last(), 'thead,tfoot,tbody,table', isRoot);
      return firstAncestor.bind(function (fA) {
        return lastAncestor.bind(function (lA) {
          return $_dptc54jzjctdj3ma.eq(fA, lA) ? $_f0k3dslcjctdj3te.getBox(edges.table(), edges.first(), edges.last()) : $_41pgl8jhjctdj3jt.none();
        });
      });
    });
  };
  var $_1tporrl3jctdj3r8 = {
    retrieve: retrieve,
    retrieveBox: retrieveBox
  };

  var selected = 'data-mce-selected';
  var selectedSelector = 'td[' + selected + '],th[' + selected + ']';
  var attributeSelector = '[' + selected + ']';
  var firstSelected = 'data-mce-first-selected';
  var firstSelectedSelector = 'td[' + firstSelected + '],th[' + firstSelected + ']';
  var lastSelected = 'data-mce-last-selected';
  var lastSelectedSelector = 'td[' + lastSelected + '],th[' + lastSelected + ']';
  var $_fxid8jlgjctdj3tv = {
    selected: $_17hg00jijctdj3jv.constant(selected),
    selectedSelector: $_17hg00jijctdj3jv.constant(selectedSelector),
    attributeSelector: $_17hg00jijctdj3jv.constant(attributeSelector),
    firstSelected: $_17hg00jijctdj3jv.constant(firstSelected),
    firstSelectedSelector: $_17hg00jijctdj3jv.constant(firstSelectedSelector),
    lastSelected: $_17hg00jijctdj3jv.constant(lastSelected),
    lastSelectedSelector: $_17hg00jijctdj3jv.constant(lastSelectedSelector)
  };

  var generate$1 = function (cases) {
    if (!$_exkoajjpjctdj3kq.isArray(cases)) {
      throw new Error('cases must be an array');
    }
    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }
    var constructors = [];
    var adt = {};
    $_cya8qajgjctdj3jm.each(cases, function (acase, count) {
      var keys = $_5bka9ljkjctdj3kc.keys(acase);
      if (keys.length !== 1) {
        throw new Error('one and only one name per case');
      }
      var key = keys[0];
      var value = acase[key];
      if (adt[key] !== undefined) {
        throw new Error('duplicate key detected:' + key);
      } else if (key === 'cata') {
        throw new Error('cannot have a case named cata (sorry)');
      } else if (!$_exkoajjpjctdj3kq.isArray(value)) {
        throw new Error('case arguments must be an array');
      }
      constructors.push(key);
      adt[key] = function () {
        var argLength = arguments.length;
        if (argLength !== value.length) {
          throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
        }
        var args = new Array(argLength);
        for (var i = 0; i < args.length; i++)
          args[i] = arguments[i];
        var match = function (branches) {
          var branchKeys = $_5bka9ljkjctdj3kc.keys(branches);
          if (constructors.length !== branchKeys.length) {
            throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
          }
          var allReqd = $_cya8qajgjctdj3jm.forall(constructors, function (reqKey) {
            return $_cya8qajgjctdj3jm.contains(branchKeys, reqKey);
          });
          if (!allReqd)
            throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
          return branches[key].apply(null, args);
        };
        return {
          fold: function () {
            if (arguments.length !== cases.length) {
              throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + arguments.length);
            }
            var target = arguments[count];
            return target.apply(null, args);
          },
          match: match,
          log: function (label) {
            console.log(label, {
              constructors: constructors,
              constructor: key,
              params: args
            });
          }
        };
      };
    });
    return adt;
  };
  var $_3ek5yplijctdj3u0 = { generate: generate$1 };

  var type$1 = $_3ek5yplijctdj3u0.generate([
    { none: [] },
    { multiple: ['elements'] },
    { single: ['selection'] }
  ]);
  var cata = function (subject, onNone, onMultiple, onSingle) {
    return subject.fold(onNone, onMultiple, onSingle);
  };
  var $_ejtj79lhjctdj3tx = {
    cata: cata,
    none: type$1.none,
    multiple: type$1.multiple,
    single: type$1.single
  };

  var selection = function (cell, selections) {
    return $_ejtj79lhjctdj3tx.cata(selections.get(), $_17hg00jijctdj3jv.constant([]), $_17hg00jijctdj3jv.identity, $_17hg00jijctdj3jv.constant([cell]));
  };
  var unmergable = function (cell, selections) {
    var hasSpan = function (elem) {
      return $_fdrkf1kgjctdj3no.has(elem, 'rowspan') && parseInt($_fdrkf1kgjctdj3no.get(elem, 'rowspan'), 10) > 1 || $_fdrkf1kgjctdj3no.has(elem, 'colspan') && parseInt($_fdrkf1kgjctdj3no.get(elem, 'colspan'), 10) > 1;
    };
    var candidates = selection(cell, selections);
    return candidates.length > 0 && $_cya8qajgjctdj3jm.forall(candidates, hasSpan) ? $_41pgl8jhjctdj3jt.some(candidates) : $_41pgl8jhjctdj3jt.none();
  };
  var mergable = function (table, selections) {
    return $_ejtj79lhjctdj3tx.cata(selections.get(), $_41pgl8jhjctdj3jt.none, function (cells, _env) {
      if (cells.length === 0) {
        return $_41pgl8jhjctdj3jt.none();
      }
      return $_1tporrl3jctdj3r8.retrieveBox(table, $_fxid8jlgjctdj3tv.firstSelectedSelector(), $_fxid8jlgjctdj3tv.lastSelectedSelector()).bind(function (bounds) {
        return cells.length > 1 ? $_41pgl8jhjctdj3jt.some({
          bounds: $_17hg00jijctdj3jv.constant(bounds),
          cells: $_17hg00jijctdj3jv.constant(cells)
        }) : $_41pgl8jhjctdj3jt.none();
      });
    }, $_41pgl8jhjctdj3jt.none);
  };
  var $_ckwfr4l2jctdj3qv = {
    mergable: mergable,
    unmergable: unmergable,
    selection: selection
  };

  var noMenu = function (cell) {
    return {
      element: $_17hg00jijctdj3jv.constant(cell),
      mergable: $_41pgl8jhjctdj3jt.none,
      unmergable: $_41pgl8jhjctdj3jt.none,
      selection: $_17hg00jijctdj3jv.constant([cell])
    };
  };
  var forMenu = function (selections, table, cell) {
    return {
      element: $_17hg00jijctdj3jv.constant(cell),
      mergable: $_17hg00jijctdj3jv.constant($_ckwfr4l2jctdj3qv.mergable(table, selections)),
      unmergable: $_17hg00jijctdj3jv.constant($_ckwfr4l2jctdj3qv.unmergable(cell, selections)),
      selection: $_17hg00jijctdj3jv.constant($_ckwfr4l2jctdj3qv.selection(cell, selections))
    };
  };
  var notCell$1 = function (element) {
    return noMenu(element);
  };
  var paste$1 = $_2gilnfjljctdj3kj.immutable('element', 'clipboard', 'generators');
  var pasteRows = function (selections, table, cell, clipboard, generators) {
    return {
      element: $_17hg00jijctdj3jv.constant(cell),
      mergable: $_41pgl8jhjctdj3jt.none,
      unmergable: $_41pgl8jhjctdj3jt.none,
      selection: $_17hg00jijctdj3jv.constant($_ckwfr4l2jctdj3qv.selection(cell, selections)),
      clipboard: $_17hg00jijctdj3jv.constant(clipboard),
      generators: $_17hg00jijctdj3jv.constant(generators)
    };
  };
  var $_8dhzxcl1jctdj3qr = {
    noMenu: noMenu,
    forMenu: forMenu,
    notCell: notCell$1,
    paste: paste$1,
    pasteRows: pasteRows
  };

  var extractSelected = function (cells) {
    return $_1mbzcijsjctdj3l1.table(cells[0]).map($_43w7amkvjctdj3q9.deep).map(function (replica) {
      return [$_7i5tsejjjctdj3jy.extract(replica, $_fxid8jlgjctdj3tv.attributeSelector())];
    });
  };
  var serializeElement = function (editor, elm) {
    return editor.selection.serializer.serialize(elm.dom(), {});
  };
  var registerEvents = function (editor, selections, actions, cellSelection) {
    editor.on('BeforeGetContent', function (e) {
      var multiCellContext = function (cells) {
        e.preventDefault();
        extractSelected(cells).each(function (elements) {
          e.content = $_cya8qajgjctdj3jm.map(elements, function (elm) {
            return serializeElement(editor, elm);
          }).join('');
        });
      };
      if (e.selection === true) {
        $_ejtj79lhjctdj3tx.cata(selections.get(), $_17hg00jijctdj3jv.noop, multiCellContext, $_17hg00jijctdj3jv.noop);
      }
    });
    editor.on('BeforeSetContent', function (e) {
      if (e.selection === true && e.paste === true) {
        var cellOpt = $_41pgl8jhjctdj3jt.from(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
        cellOpt.each(function (domCell) {
          var cell = $_4jfq4gjvjctdj3lt.fromDom(domCell);
          var table = $_1mbzcijsjctdj3l1.table(cell);
          table.bind(function (table) {
            var elements = $_cya8qajgjctdj3jm.filter($_fleitnl0jctdj3qo.fromHtml(e.content), function (content) {
              return $_gao3elkhjctdj3nw.name(content) !== 'meta';
            });
            if (elements.length === 1 && $_gao3elkhjctdj3nw.name(elements[0]) === 'table') {
              e.preventDefault();
              var doc = $_4jfq4gjvjctdj3lt.fromDom(editor.getDoc());
              var generators = $_23eg8kujctdj3pt.paste(doc);
              var targets = $_8dhzxcl1jctdj3qr.paste(cell, elements[0], generators);
              actions.pasteCells(table, targets).each(function (rng) {
                editor.selection.setRng(rng);
                editor.focus();
                cellSelection.clear(table);
              });
            }
          });
        });
      }
    });
  };
  var $_datyonjfjctdj3j7 = { registerEvents: registerEvents };

  var makeTable = function () {
    return $_4jfq4gjvjctdj3lt.fromTag('table');
  };
  var tableBody = function () {
    return $_4jfq4gjvjctdj3lt.fromTag('tbody');
  };
  var tableRow = function () {
    return $_4jfq4gjvjctdj3lt.fromTag('tr');
  };
  var tableHeaderCell = function () {
    return $_4jfq4gjvjctdj3lt.fromTag('th');
  };
  var tableCell = function () {
    return $_4jfq4gjvjctdj3lt.fromTag('td');
  };
  var render = function (rows, columns, rowHeaders, columnHeaders) {
    var table = makeTable();
    $_43s1eukpjctdj3p3.setAll(table, {
      'border-collapse': 'collapse',
      width: '100%'
    });
    $_fdrkf1kgjctdj3no.set(table, 'border', '1');
    var tbody = tableBody();
    $_a6a55bkrjctdj3pl.append(table, tbody);
    var trs = [];
    for (var i = 0; i < rows; i++) {
      var tr = tableRow();
      for (var j = 0; j < columns; j++) {
        var td = i < rowHeaders || j < columnHeaders ? tableHeaderCell() : tableCell();
        if (j < columnHeaders) {
          $_fdrkf1kgjctdj3no.set(td, 'scope', 'row');
        }
        if (i < rowHeaders) {
          $_fdrkf1kgjctdj3no.set(td, 'scope', 'col');
        }
        $_a6a55bkrjctdj3pl.append(td, $_4jfq4gjvjctdj3lt.fromTag('br'));
        $_43s1eukpjctdj3p3.set(td, 'width', 100 / columns + '%');
        $_a6a55bkrjctdj3pl.append(tr, td);
      }
      trs.push(tr);
    }
    $_f7m4npktjctdj3pq.append(tbody, trs);
    return table;
  };
  var $_e2yghplljctdj3ub = { render: render };

  var $_7ujobhlkjctdj3u9 = { render: $_e2yghplljctdj3ub.render };

  var get$3 = function (element) {
    return element.dom().innerHTML;
  };
  var set$3 = function (element, content) {
    var owner = $_4vj6djjxjctdj3lz.owner(element);
    var docDom = owner.dom();
    var fragment = $_4jfq4gjvjctdj3lt.fromDom(docDom.createDocumentFragment());
    var contentElements = $_fleitnl0jctdj3qo.fromHtml(content, docDom);
    $_f7m4npktjctdj3pq.append(fragment, contentElements);
    $_7l6mlmksjctdj3pm.empty(element);
    $_a6a55bkrjctdj3pl.append(element, fragment);
  };
  var getOuter = function (element) {
    var container = $_4jfq4gjvjctdj3lt.fromTag('div');
    var clone = $_4jfq4gjvjctdj3lt.fromDom(element.dom().cloneNode(true));
    $_a6a55bkrjctdj3pl.append(container, clone);
    return get$3(container);
  };
  var $_97fokqlmjctdj3uj = {
    get: get$3,
    set: set$3,
    getOuter: getOuter
  };

  var placeCaretInCell = function (editor, cell) {
    editor.selection.select(cell.dom(), true);
    editor.selection.collapse(true);
  };
  var selectFirstCellInTable = function (editor, tableElm) {
    $_8qdzookljctdj3o9.descendant(tableElm, 'td,th').each($_17hg00jijctdj3jv.curry(placeCaretInCell, editor));
  };
  var insert = function (editor, columns, rows) {
    var tableElm;
    var renderedHtml = $_7ujobhlkjctdj3u9.render(rows, columns, 0, 0);
    $_fdrkf1kgjctdj3no.set(renderedHtml, 'id', '__mce');
    var html = $_97fokqlmjctdj3uj.getOuter(renderedHtml);
    editor.insertContent(html);
    tableElm = editor.dom.get('__mce');
    editor.dom.setAttrib(tableElm, 'id', null);
    editor.$('tr', tableElm).each(function (index, row) {
      editor.fire('newrow', { node: row });
      editor.$('th,td', row).each(function (index, cell) {
        editor.fire('newcell', { node: cell });
      });
    });
    editor.dom.setAttribs(tableElm, editor.settings.table_default_attributes || {});
    editor.dom.setStyles(tableElm, editor.settings.table_default_styles || {});
    selectFirstCellInTable(editor, $_4jfq4gjvjctdj3lt.fromDom(tableElm));
    return tableElm;
  };
  var $_ddzxjrljjctdj3u3 = { insert: insert };

  var Dimension = function (name, getOffset) {
    var set = function (element, h) {
      if (!$_exkoajjpjctdj3kq.isNumber(h) && !h.match(/^[0-9]+$/))
        throw name + '.set accepts only positive integer values. Value was ' + h;
      var dom = element.dom();
      if ($_3gqqk5kqjctdj3pj.isSupported(dom))
        dom.style[name] = h + 'px';
    };
    var get = function (element) {
      var r = getOffset(element);
      if (r <= 0 || r === null) {
        var css = $_43s1eukpjctdj3p3.get(element, name);
        return parseFloat(css) || 0;
      }
      return r;
    };
    var getOuter = get;
    var aggregate = function (element, properties) {
      return $_cya8qajgjctdj3jm.foldl(properties, function (acc, property) {
        var val = $_43s1eukpjctdj3p3.get(element, property);
        var value = val === undefined ? 0 : parseInt(val, 10);
        return isNaN(value) ? acc : acc + value;
      }, 0);
    };
    var max = function (element, value, properties) {
      var cumulativeInclusions = aggregate(element, properties);
      var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
      return absoluteMax;
    };
    return {
      set: set,
      get: get,
      getOuter: getOuter,
      aggregate: aggregate,
      max: max
    };
  };

  var api$1 = Dimension('height', function (element) {
    return $_75el39kkjctdj3o5.inBody(element) ? element.dom().getBoundingClientRect().height : element.dom().offsetHeight;
  });
  var set$4 = function (element, h) {
    api$1.set(element, h);
  };
  var get$5 = function (element) {
    return api$1.get(element);
  };
  var getOuter$1 = function (element) {
    return api$1.getOuter(element);
  };
  var setMax = function (element, value) {
    var inclusions = [
      'margin-top',
      'border-top-width',
      'padding-top',
      'padding-bottom',
      'border-bottom-width',
      'margin-bottom'
    ];
    var absMax = api$1.max(element, value, inclusions);
    $_43s1eukpjctdj3p3.set(element, 'max-height', absMax + 'px');
  };
  var $_71eh7ylrjctdj3vp = {
    set: set$4,
    get: get$5,
    getOuter: getOuter$1,
    setMax: setMax
  };

  var api$2 = Dimension('width', function (element) {
    return element.dom().offsetWidth;
  });
  var set$5 = function (element, h) {
    api$2.set(element, h);
  };
  var get$6 = function (element) {
    return api$2.get(element);
  };
  var getOuter$2 = function (element) {
    return api$2.getOuter(element);
  };
  var setMax$1 = function (element, value) {
    var inclusions = [
      'margin-left',
      'border-left-width',
      'padding-left',
      'padding-right',
      'border-right-width',
      'margin-right'
    ];
    var absMax = api$2.max(element, value, inclusions);
    $_43s1eukpjctdj3p3.set(element, 'max-width', absMax + 'px');
  };
  var $_386unjltjctdj3vv = {
    set: set$5,
    get: get$6,
    getOuter: getOuter$2,
    setMax: setMax$1
  };

  var platform = $_61ae92k4jctdj3mu.detect();
  var needManualCalc = function () {
    return platform.browser.isIE() || platform.browser.isEdge();
  };
  var toNumber = function (px, fallback) {
    var num = parseFloat(px);
    return isNaN(num) ? fallback : num;
  };
  var getProp = function (elm, name, fallback) {
    return toNumber($_43s1eukpjctdj3p3.get(elm, name), fallback);
  };
  var getCalculatedHeight = function (cell) {
    var paddingTop = getProp(cell, 'padding-top', 0);
    var paddingBottom = getProp(cell, 'padding-bottom', 0);
    var borderTop = getProp(cell, 'border-top-width', 0);
    var borderBottom = getProp(cell, 'border-bottom-width', 0);
    var height = cell.dom().getBoundingClientRect().height;
    var boxSizing = $_43s1eukpjctdj3p3.get(cell, 'box-sizing');
    var borders = borderTop + borderBottom;
    return boxSizing === 'border-box' ? height : height - paddingTop - paddingBottom - borders;
  };
  var getWidth = function (cell) {
    return getProp(cell, 'width', $_386unjltjctdj3vv.get(cell));
  };
  var getHeight$1 = function (cell) {
    return needManualCalc() ? getCalculatedHeight(cell) : getProp(cell, 'height', $_71eh7ylrjctdj3vp.get(cell));
  };
  var $_bd6glqlqjctdj3vj = {
    getWidth: getWidth,
    getHeight: getHeight$1
  };

  var genericSizeRegex = /(\d+(\.\d+)?)(\w|%)*/;
  var percentageBasedSizeRegex = /(\d+(\.\d+)?)%/;
  var pixelBasedSizeRegex = /(\d+(\.\d+)?)px|em/;
  var setPixelWidth = function (cell, amount) {
    $_43s1eukpjctdj3p3.set(cell, 'width', amount + 'px');
  };
  var setPercentageWidth = function (cell, amount) {
    $_43s1eukpjctdj3p3.set(cell, 'width', amount + '%');
  };
  var setHeight = function (cell, amount) {
    $_43s1eukpjctdj3p3.set(cell, 'height', amount + 'px');
  };
  var getHeightValue = function (cell) {
    return $_43s1eukpjctdj3p3.getRaw(cell, 'height').getOrThunk(function () {
      return $_bd6glqlqjctdj3vj.getHeight(cell) + 'px';
    });
  };
  var convert = function (cell, number, getter, setter) {
    var newSize = $_1mbzcijsjctdj3l1.table(cell).map(function (table) {
      var total = getter(table);
      return Math.floor(number / 100 * total);
    }).getOr(number);
    setter(cell, newSize);
    return newSize;
  };
  var normalizePixelSize = function (value, cell, getter, setter) {
    var number = parseInt(value, 10);
    return $_9dhzfckdjctdj3nh.endsWith(value, '%') && $_gao3elkhjctdj3nw.name(cell) !== 'table' ? convert(cell, number, getter, setter) : number;
  };
  var getTotalHeight = function (cell) {
    var value = getHeightValue(cell);
    if (!value)
      return $_71eh7ylrjctdj3vp.get(cell);
    return normalizePixelSize(value, cell, $_71eh7ylrjctdj3vp.get, setHeight);
  };
  var get$4 = function (cell, type, f) {
    var v = f(cell);
    var span = getSpan(cell, type);
    return v / span;
  };
  var getSpan = function (cell, type) {
    return $_fdrkf1kgjctdj3no.has(cell, type) ? parseInt($_fdrkf1kgjctdj3no.get(cell, type), 10) : 1;
  };
  var getRawWidth = function (element) {
    var cssWidth = $_43s1eukpjctdj3p3.getRaw(element, 'width');
    return cssWidth.fold(function () {
      return $_41pgl8jhjctdj3jt.from($_fdrkf1kgjctdj3no.get(element, 'width'));
    }, function (width) {
      return $_41pgl8jhjctdj3jt.some(width);
    });
  };
  var normalizePercentageWidth = function (cellWidth, tableSize) {
    return cellWidth / tableSize.pixelWidth() * 100;
  };
  var choosePercentageSize = function (element, width, tableSize) {
    if (percentageBasedSizeRegex.test(width)) {
      var percentMatch = percentageBasedSizeRegex.exec(width);
      return parseFloat(percentMatch[1]);
    } else {
      var fallbackWidth = $_386unjltjctdj3vv.get(element);
      var intWidth = parseInt(fallbackWidth, 10);
      return normalizePercentageWidth(intWidth, tableSize);
    }
  };
  var getPercentageWidth = function (cell, tableSize) {
    var width = getRawWidth(cell);
    return width.fold(function () {
      var width = $_386unjltjctdj3vv.get(cell);
      var intWidth = parseInt(width, 10);
      return normalizePercentageWidth(intWidth, tableSize);
    }, function (width) {
      return choosePercentageSize(cell, width, tableSize);
    });
  };
  var normalizePixelWidth = function (cellWidth, tableSize) {
    return cellWidth / 100 * tableSize.pixelWidth();
  };
  var choosePixelSize = function (element, width, tableSize) {
    if (pixelBasedSizeRegex.test(width)) {
      var pixelMatch = pixelBasedSizeRegex.exec(width);
      return parseInt(pixelMatch[1], 10);
    } else if (percentageBasedSizeRegex.test(width)) {
      var percentMatch = percentageBasedSizeRegex.exec(width);
      var floatWidth = parseFloat(percentMatch[1]);
      return normalizePixelWidth(floatWidth, tableSize);
    } else {
      var fallbackWidth = $_386unjltjctdj3vv.get(element);
      return parseInt(fallbackWidth, 10);
    }
  };
  var getPixelWidth = function (cell, tableSize) {
    var width = getRawWidth(cell);
    return width.fold(function () {
      var width = $_386unjltjctdj3vv.get(cell);
      var intWidth = parseInt(width, 10);
      return intWidth;
    }, function (width) {
      return choosePixelSize(cell, width, tableSize);
    });
  };
  var getHeight = function (cell) {
    return get$4(cell, 'rowspan', getTotalHeight);
  };
  var getGenericWidth = function (cell) {
    var width = getRawWidth(cell);
    return width.bind(function (width) {
      if (genericSizeRegex.test(width)) {
        var match = genericSizeRegex.exec(width);
        return $_41pgl8jhjctdj3jt.some({
          width: $_17hg00jijctdj3jv.constant(match[1]),
          unit: $_17hg00jijctdj3jv.constant(match[3])
        });
      } else {
        return $_41pgl8jhjctdj3jt.none();
      }
    });
  };
  var setGenericWidth = function (cell, amount, unit) {
    $_43s1eukpjctdj3p3.set(cell, 'width', amount + unit);
  };
  var $_3ilspslpjctdj3v5 = {
    percentageBasedSizeRegex: $_17hg00jijctdj3jv.constant(percentageBasedSizeRegex),
    pixelBasedSizeRegex: $_17hg00jijctdj3jv.constant(pixelBasedSizeRegex),
    setPixelWidth: setPixelWidth,
    setPercentageWidth: setPercentageWidth,
    setHeight: setHeight,
    getPixelWidth: getPixelWidth,
    getPercentageWidth: getPercentageWidth,
    getGenericWidth: getGenericWidth,
    setGenericWidth: setGenericWidth,
    getHeight: getHeight,
    getRawWidth: getRawWidth
  };

  var halve = function (main, other) {
    var width = $_3ilspslpjctdj3v5.getGenericWidth(main);
    width.each(function (width) {
      var newWidth = width.width() / 2;
      $_3ilspslpjctdj3v5.setGenericWidth(main, newWidth, width.unit());
      $_3ilspslpjctdj3v5.setGenericWidth(other, newWidth, width.unit());
    });
  };
  var $_91q8iilojctdj3v3 = { halve: halve };

  var attached = function (element, scope) {
    var doc = scope || $_4jfq4gjvjctdj3lt.fromDom(document.documentElement);
    return $_3ulq7wkmjctdj3ob.ancestor(element, $_17hg00jijctdj3jv.curry($_dptc54jzjctdj3ma.eq, doc)).isSome();
  };
  var windowOf = function (element) {
    var dom = element.dom();
    if (dom === dom.window)
      return element;
    return $_gao3elkhjctdj3nw.isDocument(element) ? dom.defaultView || dom.parentWindow : null;
  };
  var $_ai8k2xlyjctdj3wa = {
    attached: attached,
    windowOf: windowOf
  };

  var r = function (left, top) {
    var translate = function (x, y) {
      return r(left + x, top + y);
    };
    return {
      left: $_17hg00jijctdj3jv.constant(left),
      top: $_17hg00jijctdj3jv.constant(top),
      translate: translate
    };
  };

  var boxPosition = function (dom) {
    var box = dom.getBoundingClientRect();
    return r(box.left, box.top);
  };
  var firstDefinedOrZero = function (a, b) {
    return a !== undefined ? a : b !== undefined ? b : 0;
  };
  var absolute = function (element) {
    var doc = element.dom().ownerDocument;
    var body = doc.body;
    var win = $_ai8k2xlyjctdj3wa.windowOf($_4jfq4gjvjctdj3lt.fromDom(doc));
    var html = doc.documentElement;
    var scrollTop = firstDefinedOrZero(win.pageYOffset, html.scrollTop);
    var scrollLeft = firstDefinedOrZero(win.pageXOffset, html.scrollLeft);
    var clientTop = firstDefinedOrZero(html.clientTop, body.clientTop);
    var clientLeft = firstDefinedOrZero(html.clientLeft, body.clientLeft);
    return viewport(element).translate(scrollLeft - clientLeft, scrollTop - clientTop);
  };
  var relative = function (element) {
    var dom = element.dom();
    return r(dom.offsetLeft, dom.offsetTop);
  };
  var viewport = function (element) {
    var dom = element.dom();
    var doc = dom.ownerDocument;
    var body = doc.body;
    var html = $_4jfq4gjvjctdj3lt.fromDom(doc.documentElement);
    if (body === dom)
      return r(body.offsetLeft, body.offsetTop);
    if (!$_ai8k2xlyjctdj3wa.attached(element, html))
      return r(0, 0);
    return boxPosition(dom);
  };
  var $_eb1nr3lxjctdj3w8 = {
    absolute: absolute,
    relative: relative,
    viewport: viewport
  };

  var rowInfo = $_2gilnfjljctdj3kj.immutable('row', 'y');
  var colInfo = $_2gilnfjljctdj3kj.immutable('col', 'x');
  var rtlEdge = function (cell) {
    var pos = $_eb1nr3lxjctdj3w8.absolute(cell);
    return pos.left() + $_386unjltjctdj3vv.getOuter(cell);
  };
  var ltrEdge = function (cell) {
    return $_eb1nr3lxjctdj3w8.absolute(cell).left();
  };
  var getLeftEdge = function (index, cell) {
    return colInfo(index, ltrEdge(cell));
  };
  var getRightEdge = function (index, cell) {
    return colInfo(index, rtlEdge(cell));
  };
  var getTop = function (cell) {
    return $_eb1nr3lxjctdj3w8.absolute(cell).top();
  };
  var getTopEdge = function (index, cell) {
    return rowInfo(index, getTop(cell));
  };
  var getBottomEdge = function (index, cell) {
    return rowInfo(index, getTop(cell) + $_71eh7ylrjctdj3vp.getOuter(cell));
  };
  var findPositions = function (getInnerEdge, getOuterEdge, array) {
    if (array.length === 0)
      return [];
    var lines = $_cya8qajgjctdj3jm.map(array.slice(1), function (cellOption, index) {
      return cellOption.map(function (cell) {
        return getInnerEdge(index, cell);
      });
    });
    var lastLine = array[array.length - 1].map(function (cell) {
      return getOuterEdge(array.length - 1, cell);
    });
    return lines.concat([lastLine]);
  };
  var negate = function (step, _table) {
    return -step;
  };
  var height = {
    delta: $_17hg00jijctdj3jv.identity,
    positions: $_17hg00jijctdj3jv.curry(findPositions, getTopEdge, getBottomEdge),
    edge: getTop
  };
  var ltr = {
    delta: $_17hg00jijctdj3jv.identity,
    edge: ltrEdge,
    positions: $_17hg00jijctdj3jv.curry(findPositions, getLeftEdge, getRightEdge)
  };
  var rtl = {
    delta: negate,
    edge: rtlEdge,
    positions: $_17hg00jijctdj3jv.curry(findPositions, getRightEdge, getLeftEdge)
  };
  var $_9p78gglwjctdj3w0 = {
    height: height,
    rtl: rtl,
    ltr: ltr
  };

  var $_9960g7lvjctdj3vy = {
    ltr: $_9p78gglwjctdj3w0.ltr,
    rtl: $_9p78gglwjctdj3w0.rtl
  };

  var TableDirection = function (directionAt) {
    var auto = function (table) {
      return directionAt(table).isRtl() ? $_9960g7lvjctdj3vy.rtl : $_9960g7lvjctdj3vy.ltr;
    };
    var delta = function (amount, table) {
      return auto(table).delta(amount, table);
    };
    var positions = function (cols, table) {
      return auto(table).positions(cols, table);
    };
    var edge = function (cell) {
      return auto(cell).edge(cell);
    };
    return {
      delta: delta,
      edge: edge,
      positions: positions
    };
  };

  var getGridSize = function (table) {
    var input = $_1x2v4fjqjctdj3ks.fromTable(table);
    var warehouse = $_13w1akojctdj3op.generate(input);
    return warehouse.grid();
  };
  var $_4i1xy4m0jctdj3wf = { getGridSize: getGridSize };

  var Cell = function (initial) {
    var value = initial;
    var get = function () {
      return value;
    };
    var set = function (v) {
      value = v;
    };
    var clone = function () {
      return Cell(get());
    };
    return {
      get: get,
      set: set,
      clone: clone
    };
  };

  var base = function (handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
      validate: $_exkoajjpjctdj3kq.isFunction,
      label: 'function'
    });
  };
  var baseWith = function (handleUnsupported, required, pred) {
    if (required.length === 0)
      throw new Error('You must specify at least one required field.');
    $_1ud6jhjojctdj3ko.validateStrArr('required', required);
    $_1ud6jhjojctdj3ko.checkDupes(required);
    return function (obj) {
      var keys = $_5bka9ljkjctdj3kc.keys(obj);
      var allReqd = $_cya8qajgjctdj3jm.forall(required, function (req) {
        return $_cya8qajgjctdj3jm.contains(keys, req);
      });
      if (!allReqd)
        $_1ud6jhjojctdj3ko.reqMessage(required, keys);
      handleUnsupported(required, keys);
      var invalidKeys = $_cya8qajgjctdj3jm.filter(required, function (key) {
        return !pred.validate(obj[key], key);
      });
      if (invalidKeys.length > 0)
        $_1ud6jhjojctdj3ko.invalidTypeMessage(invalidKeys, pred.label);
      return obj;
    };
  };
  var handleExact = function (required, keys) {
    var unsupported = $_cya8qajgjctdj3jm.filter(keys, function (key) {
      return !$_cya8qajgjctdj3jm.contains(required, key);
    });
    if (unsupported.length > 0)
      $_1ud6jhjojctdj3ko.unsuppMessage(unsupported);
  };
  var allowExtra = $_17hg00jijctdj3jv.noop;
  var $_fapub0m4jctdj3xd = {
    exactly: $_17hg00jijctdj3jv.curry(base, handleExact),
    ensure: $_17hg00jijctdj3jv.curry(base, allowExtra),
    ensureWith: $_17hg00jijctdj3jv.curry(baseWith, allowExtra)
  };

  var elementToData = function (element) {
    var colspan = $_fdrkf1kgjctdj3no.has(element, 'colspan') ? parseInt($_fdrkf1kgjctdj3no.get(element, 'colspan'), 10) : 1;
    var rowspan = $_fdrkf1kgjctdj3no.has(element, 'rowspan') ? parseInt($_fdrkf1kgjctdj3no.get(element, 'rowspan'), 10) : 1;
    return {
      element: $_17hg00jijctdj3jv.constant(element),
      colspan: $_17hg00jijctdj3jv.constant(colspan),
      rowspan: $_17hg00jijctdj3jv.constant(rowspan)
    };
  };
  var modification = function (generators, _toData) {
    contract(generators);
    var position = Cell($_41pgl8jhjctdj3jt.none());
    var toData = _toData !== undefined ? _toData : elementToData;
    var nu = function (data) {
      return generators.cell(data);
    };
    var nuFrom = function (element) {
      var data = toData(element);
      return nu(data);
    };
    var add = function (element) {
      var replacement = nuFrom(element);
      if (position.get().isNone())
        position.set($_41pgl8jhjctdj3jt.some(replacement));
      recent = $_41pgl8jhjctdj3jt.some({
        item: element,
        replacement: replacement
      });
      return replacement;
    };
    var recent = $_41pgl8jhjctdj3jt.none();
    var getOrInit = function (element, comparator) {
      return recent.fold(function () {
        return add(element);
      }, function (p) {
        return comparator(element, p.item) ? p.replacement : add(element);
      });
    };
    return {
      getOrInit: getOrInit,
      cursor: position.get
    };
  };
  var transform = function (scope, tag) {
    return function (generators) {
      var position = Cell($_41pgl8jhjctdj3jt.none());
      contract(generators);
      var list = [];
      var find = function (element, comparator) {
        return $_cya8qajgjctdj3jm.find(list, function (x) {
          return comparator(x.item, element);
        });
      };
      var makeNew = function (element) {
        var cell = generators.replace(element, tag, { scope: scope });
        list.push({
          item: element,
          sub: cell
        });
        if (position.get().isNone())
          position.set($_41pgl8jhjctdj3jt.some(cell));
        return cell;
      };
      var replaceOrInit = function (element, comparator) {
        return find(element, comparator).fold(function () {
          return makeNew(element);
        }, function (p) {
          return comparator(element, p.item) ? p.sub : makeNew(element);
        });
      };
      return {
        replaceOrInit: replaceOrInit,
        cursor: position.get
      };
    };
  };
  var merging = function (generators) {
    contract(generators);
    var position = Cell($_41pgl8jhjctdj3jt.none());
    var combine = function (cell) {
      if (position.get().isNone())
        position.set($_41pgl8jhjctdj3jt.some(cell));
      return function () {
        var raw = generators.cell({
          element: $_17hg00jijctdj3jv.constant(cell),
          colspan: $_17hg00jijctdj3jv.constant(1),
          rowspan: $_17hg00jijctdj3jv.constant(1)
        });
        $_43s1eukpjctdj3p3.remove(raw, 'width');
        $_43s1eukpjctdj3p3.remove(cell, 'width');
        return raw;
      };
    };
    return {
      combine: combine,
      cursor: position.get
    };
  };
  var contract = $_fapub0m4jctdj3xd.exactly([
    'cell',
    'row',
    'replace',
    'gap'
  ]);
  var $_g9a63gm2jctdj3x2 = {
    modification: modification,
    transform: transform,
    merging: merging
  };

  var blockList = [
    'body',
    'p',
    'div',
    'article',
    'aside',
    'figcaption',
    'figure',
    'footer',
    'header',
    'nav',
    'section',
    'ol',
    'ul',
    'table',
    'thead',
    'tfoot',
    'tbody',
    'caption',
    'tr',
    'td',
    'th',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'pre',
    'address'
  ];
  var isList$1 = function (universe, item) {
    var tagName = universe.property().name(item);
    return $_cya8qajgjctdj3jm.contains([
      'ol',
      'ul'
    ], tagName);
  };
  var isBlock$1 = function (universe, item) {
    var tagName = universe.property().name(item);
    return $_cya8qajgjctdj3jm.contains(blockList, tagName);
  };
  var isFormatting$1 = function (universe, item) {
    var tagName = universe.property().name(item);
    return $_cya8qajgjctdj3jm.contains([
      'address',
      'pre',
      'p',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6'
    ], tagName);
  };
  var isHeading$1 = function (universe, item) {
    var tagName = universe.property().name(item);
    return $_cya8qajgjctdj3jm.contains([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6'
    ], tagName);
  };
  var isContainer$1 = function (universe, item) {
    return $_cya8qajgjctdj3jm.contains([
      'div',
      'li',
      'td',
      'th',
      'blockquote',
      'body',
      'caption'
    ], universe.property().name(item));
  };
  var isEmptyTag$1 = function (universe, item) {
    return $_cya8qajgjctdj3jm.contains([
      'br',
      'img',
      'hr',
      'input'
    ], universe.property().name(item));
  };
  var isFrame$1 = function (universe, item) {
    return universe.property().name(item) === 'iframe';
  };
  var isInline$1 = function (universe, item) {
    return !(isBlock$1(universe, item) || isEmptyTag$1(universe, item)) && universe.property().name(item) !== 'li';
  };
  var $_5cef4em7jctdj3y1 = {
    isBlock: isBlock$1,
    isList: isList$1,
    isFormatting: isFormatting$1,
    isHeading: isHeading$1,
    isContainer: isContainer$1,
    isEmptyTag: isEmptyTag$1,
    isFrame: isFrame$1,
    isInline: isInline$1
  };

  var universe$1 = DomUniverse();
  var isBlock = function (element) {
    return $_5cef4em7jctdj3y1.isBlock(universe$1, element);
  };
  var isList = function (element) {
    return $_5cef4em7jctdj3y1.isList(universe$1, element);
  };
  var isFormatting = function (element) {
    return $_5cef4em7jctdj3y1.isFormatting(universe$1, element);
  };
  var isHeading = function (element) {
    return $_5cef4em7jctdj3y1.isHeading(universe$1, element);
  };
  var isContainer = function (element) {
    return $_5cef4em7jctdj3y1.isContainer(universe$1, element);
  };
  var isEmptyTag = function (element) {
    return $_5cef4em7jctdj3y1.isEmptyTag(universe$1, element);
  };
  var isFrame = function (element) {
    return $_5cef4em7jctdj3y1.isFrame(universe$1, element);
  };
  var isInline = function (element) {
    return $_5cef4em7jctdj3y1.isInline(universe$1, element);
  };
  var $_7v9vg4m6jctdj3xu = {
    isBlock: isBlock,
    isList: isList,
    isFormatting: isFormatting,
    isHeading: isHeading,
    isContainer: isContainer,
    isEmptyTag: isEmptyTag,
    isFrame: isFrame,
    isInline: isInline
  };

  var merge = function (cells) {
    var isBr = function (el) {
      return $_gao3elkhjctdj3nw.name(el) === 'br';
    };
    var advancedBr = function (children) {
      return $_cya8qajgjctdj3jm.forall(children, function (c) {
        return isBr(c) || $_gao3elkhjctdj3nw.isText(c) && $_4wxri4kyjctdj3qj.get(c).trim().length === 0;
      });
    };
    var isListItem = function (el) {
      return $_gao3elkhjctdj3nw.name(el) === 'li' || $_3ulq7wkmjctdj3ob.ancestor(el, $_7v9vg4m6jctdj3xu.isList).isSome();
    };
    var siblingIsBlock = function (el) {
      return $_4vj6djjxjctdj3lz.nextSibling(el).map(function (rightSibling) {
        if ($_7v9vg4m6jctdj3xu.isBlock(rightSibling))
          return true;
        if ($_7v9vg4m6jctdj3xu.isEmptyTag(rightSibling)) {
          return $_gao3elkhjctdj3nw.name(rightSibling) === 'img' ? false : true;
        }
      }).getOr(false);
    };
    var markCell = function (cell) {
      return $_bc2n4jkwjctdj3qd.last(cell).bind(function (rightEdge) {
        var rightSiblingIsBlock = siblingIsBlock(rightEdge);
        return $_4vj6djjxjctdj3lz.parent(rightEdge).map(function (parent) {
          return rightSiblingIsBlock === true || isListItem(parent) || isBr(rightEdge) || $_7v9vg4m6jctdj3xu.isBlock(parent) && !$_dptc54jzjctdj3ma.eq(cell, parent) ? [] : [$_4jfq4gjvjctdj3lt.fromTag('br')];
        });
      }).getOr([]);
    };
    var markContent = function () {
      var content = $_cya8qajgjctdj3jm.bind(cells, function (cell) {
        var children = $_4vj6djjxjctdj3lz.children(cell);
        return advancedBr(children) ? [] : children.concat(markCell(cell));
      });
      return content.length === 0 ? [$_4jfq4gjvjctdj3lt.fromTag('br')] : content;
    };
    var contents = markContent();
    $_7l6mlmksjctdj3pm.empty(cells[0]);
    $_f7m4npktjctdj3pq.append(cells[0], contents);
  };
  var $_wskufm5jctdj3xg = { merge: merge };

  var shallow$1 = function (old, nu) {
    return nu;
  };
  var deep$1 = function (old, nu) {
    var bothObjects = $_exkoajjpjctdj3kq.isObject(old) && $_exkoajjpjctdj3kq.isObject(nu);
    return bothObjects ? deepMerge(old, nu) : nu;
  };
  var baseMerge = function (merger) {
    return function () {
      var objects = new Array(arguments.length);
      for (var i = 0; i < objects.length; i++)
        objects[i] = arguments[i];
      if (objects.length === 0)
        throw new Error('Can\'t merge zero objects');
      var ret = {};
      for (var j = 0; j < objects.length; j++) {
        var curObject = objects[j];
        for (var key in curObject)
          if (curObject.hasOwnProperty(key)) {
            ret[key] = merger(ret[key], curObject[key]);
          }
      }
      return ret;
    };
  };
  var deepMerge = baseMerge(deep$1);
  var merge$1 = baseMerge(shallow$1);
  var $_1hzsjvm9jctdj3yh = {
    deepMerge: deepMerge,
    merge: merge$1
  };

  var cat = function (arr) {
    var r = [];
    var push = function (x) {
      r.push(x);
    };
    for (var i = 0; i < arr.length; i++) {
      arr[i].each(push);
    }
    return r;
  };
  var findMap = function (arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var r = f(arr[i], i);
      if (r.isSome()) {
        return r;
      }
    }
    return $_41pgl8jhjctdj3jt.none();
  };
  var liftN = function (arr, f) {
    var r = [];
    for (var i = 0; i < arr.length; i++) {
      var x = arr[i];
      if (x.isSome()) {
        r.push(x.getOrDie());
      } else {
        return $_41pgl8jhjctdj3jt.none();
      }
    }
    return $_41pgl8jhjctdj3jt.some(f.apply(null, r));
  };
  var $_5ravs6majctdj3yj = {
    cat: cat,
    findMap: findMap,
    liftN: liftN
  };

  var addCell = function (gridRow, index, cell) {
    var cells = gridRow.cells();
    var before = cells.slice(0, index);
    var after = cells.slice(index);
    var newCells = before.concat([cell]).concat(after);
    return setCells(gridRow, newCells);
  };
  var mutateCell = function (gridRow, index, cell) {
    var cells = gridRow.cells();
    cells[index] = cell;
  };
  var setCells = function (gridRow, cells) {
    return $_6gworajrjctdj3ky.rowcells(cells, gridRow.section());
  };
  var mapCells = function (gridRow, f) {
    var cells = gridRow.cells();
    var r = $_cya8qajgjctdj3jm.map(cells, f);
    return $_6gworajrjctdj3ky.rowcells(r, gridRow.section());
  };
  var getCell = function (gridRow, index) {
    return gridRow.cells()[index];
  };
  var getCellElement = function (gridRow, index) {
    return getCell(gridRow, index).element();
  };
  var cellLength = function (gridRow) {
    return gridRow.cells().length;
  };
  var $_7xgnk1mdjctdj3yz = {
    addCell: addCell,
    setCells: setCells,
    mutateCell: mutateCell,
    getCell: getCell,
    getCellElement: getCellElement,
    mapCells: mapCells,
    cellLength: cellLength
  };

  var getColumn = function (grid, index) {
    return $_cya8qajgjctdj3jm.map(grid, function (row) {
      return $_7xgnk1mdjctdj3yz.getCell(row, index);
    });
  };
  var getRow = function (grid, index) {
    return grid[index];
  };
  var findDiff = function (xs, comp) {
    if (xs.length === 0)
      return 0;
    var first = xs[0];
    var index = $_cya8qajgjctdj3jm.findIndex(xs, function (x) {
      return !comp(first.element(), x.element());
    });
    return index.fold(function () {
      return xs.length;
    }, function (ind) {
      return ind;
    });
  };
  var subgrid = function (grid, row, column, comparator) {
    var restOfRow = getRow(grid, row).cells().slice(column);
    var endColIndex = findDiff(restOfRow, comparator);
    var restOfColumn = getColumn(grid, column).slice(row);
    var endRowIndex = findDiff(restOfColumn, comparator);
    return {
      colspan: $_17hg00jijctdj3jv.constant(endColIndex),
      rowspan: $_17hg00jijctdj3jv.constant(endRowIndex)
    };
  };
  var $_193wqomcjctdj3yv = { subgrid: subgrid };

  var toDetails = function (grid, comparator) {
    var seen = $_cya8qajgjctdj3jm.map(grid, function (row, ri) {
      return $_cya8qajgjctdj3jm.map(row.cells(), function (col, ci) {
        return false;
      });
    });
    var updateSeen = function (ri, ci, rowspan, colspan) {
      for (var r = ri; r < ri + rowspan; r++) {
        for (var c = ci; c < ci + colspan; c++) {
          seen[r][c] = true;
        }
      }
    };
    return $_cya8qajgjctdj3jm.map(grid, function (row, ri) {
      var details = $_cya8qajgjctdj3jm.bind(row.cells(), function (cell, ci) {
        if (seen[ri][ci] === false) {
          var result = $_193wqomcjctdj3yv.subgrid(grid, ri, ci, comparator);
          updateSeen(ri, ci, result.rowspan(), result.colspan());
          return [$_6gworajrjctdj3ky.detailnew(cell.element(), result.rowspan(), result.colspan(), cell.isNew())];
        } else {
          return [];
        }
      });
      return $_6gworajrjctdj3ky.rowdetails(details, row.section());
    });
  };
  var toGrid = function (warehouse, generators, isNew) {
    var grid = [];
    for (var i = 0; i < warehouse.grid().rows(); i++) {
      var rowCells = [];
      for (var j = 0; j < warehouse.grid().columns(); j++) {
        var element = $_13w1akojctdj3op.getAt(warehouse, i, j).map(function (item) {
          return $_6gworajrjctdj3ky.elementnew(item.element(), isNew);
        }).getOrThunk(function () {
          return $_6gworajrjctdj3ky.elementnew(generators.gap(), true);
        });
        rowCells.push(element);
      }
      var row = $_6gworajrjctdj3ky.rowcells(rowCells, warehouse.all()[i].section());
      grid.push(row);
    }
    return grid;
  };
  var $_2fkjidmbjctdj3yr = {
    toDetails: toDetails,
    toGrid: toGrid
  };

  var setIfNot = function (element, property, value, ignore) {
    if (value === ignore)
      $_fdrkf1kgjctdj3no.remove(element, property);
    else
      $_fdrkf1kgjctdj3no.set(element, property, value);
  };
  var render$1 = function (table, grid) {
    var newRows = [];
    var newCells = [];
    var renderSection = function (gridSection, sectionName) {
      var section = $_8qdzookljctdj3o9.child(table, sectionName).getOrThunk(function () {
        var tb = $_4jfq4gjvjctdj3lt.fromTag(sectionName, $_4vj6djjxjctdj3lz.owner(table).dom());
        $_a6a55bkrjctdj3pl.append(table, tb);
        return tb;
      });
      $_7l6mlmksjctdj3pm.empty(section);
      var rows = $_cya8qajgjctdj3jm.map(gridSection, function (row) {
        if (row.isNew()) {
          newRows.push(row.element());
        }
        var tr = row.element();
        $_7l6mlmksjctdj3pm.empty(tr);
        $_cya8qajgjctdj3jm.each(row.cells(), function (cell) {
          if (cell.isNew()) {
            newCells.push(cell.element());
          }
          setIfNot(cell.element(), 'colspan', cell.colspan(), 1);
          setIfNot(cell.element(), 'rowspan', cell.rowspan(), 1);
          $_a6a55bkrjctdj3pl.append(tr, cell.element());
        });
        return tr;
      });
      $_f7m4npktjctdj3pq.append(section, rows);
    };
    var removeSection = function (sectionName) {
      $_8qdzookljctdj3o9.child(table, sectionName).bind($_7l6mlmksjctdj3pm.remove);
    };
    var renderOrRemoveSection = function (gridSection, sectionName) {
      if (gridSection.length > 0) {
        renderSection(gridSection, sectionName);
      } else {
        removeSection(sectionName);
      }
    };
    var headSection = [];
    var bodySection = [];
    var footSection = [];
    $_cya8qajgjctdj3jm.each(grid, function (row) {
      switch (row.section()) {
      case 'thead':
        headSection.push(row);
        break;
      case 'tbody':
        bodySection.push(row);
        break;
      case 'tfoot':
        footSection.push(row);
        break;
      }
    });
    renderOrRemoveSection(headSection, 'thead');
    renderOrRemoveSection(bodySection, 'tbody');
    renderOrRemoveSection(footSection, 'tfoot');
    return {
      newRows: $_17hg00jijctdj3jv.constant(newRows),
      newCells: $_17hg00jijctdj3jv.constant(newCells)
    };
  };
  var copy$2 = function (grid) {
    var rows = $_cya8qajgjctdj3jm.map(grid, function (row) {
      var tr = $_43w7amkvjctdj3q9.shallow(row.element());
      $_cya8qajgjctdj3jm.each(row.cells(), function (cell) {
        var clonedCell = $_43w7amkvjctdj3q9.deep(cell.element());
        setIfNot(clonedCell, 'colspan', cell.colspan(), 1);
        setIfNot(clonedCell, 'rowspan', cell.rowspan(), 1);
        $_a6a55bkrjctdj3pl.append(tr, clonedCell);
      });
      return tr;
    });
    return rows;
  };
  var $_c5h8jcmejctdj3z2 = {
    render: render$1,
    copy: copy$2
  };

  var repeat = function (repititions, f) {
    var r = [];
    for (var i = 0; i < repititions; i++) {
      r.push(f(i));
    }
    return r;
  };
  var range$1 = function (start, end) {
    var r = [];
    for (var i = start; i < end; i++) {
      r.push(i);
    }
    return r;
  };
  var unique = function (xs, comparator) {
    var result = [];
    $_cya8qajgjctdj3jm.each(xs, function (x, i) {
      if (i < xs.length - 1 && !comparator(x, xs[i + 1])) {
        result.push(x);
      } else if (i === xs.length - 1) {
        result.push(x);
      }
    });
    return result;
  };
  var deduce = function (xs, index) {
    if (index < 0 || index >= xs.length - 1)
      return $_41pgl8jhjctdj3jt.none();
    var current = xs[index].fold(function () {
      var rest = $_cya8qajgjctdj3jm.reverse(xs.slice(0, index));
      return $_5ravs6majctdj3yj.findMap(rest, function (a, i) {
        return a.map(function (aa) {
          return {
            value: aa,
            delta: i + 1
          };
        });
      });
    }, function (c) {
      return $_41pgl8jhjctdj3jt.some({
        value: c,
        delta: 0
      });
    });
    var next = xs[index + 1].fold(function () {
      var rest = xs.slice(index + 1);
      return $_5ravs6majctdj3yj.findMap(rest, function (a, i) {
        return a.map(function (aa) {
          return {
            value: aa,
            delta: i + 1
          };
        });
      });
    }, function (n) {
      return $_41pgl8jhjctdj3jt.some({
        value: n,
        delta: 1
      });
    });
    return current.bind(function (c) {
      return next.map(function (n) {
        var extras = n.delta + c.delta;
        return Math.abs(n.value - c.value) / extras;
      });
    });
  };
  var $_eahflsmhjctdj3zz = {
    repeat: repeat,
    range: range$1,
    unique: unique,
    deduce: deduce
  };

  var columns = function (warehouse) {
    var grid = warehouse.grid();
    var cols = $_eahflsmhjctdj3zz.range(0, grid.columns());
    var rows = $_eahflsmhjctdj3zz.range(0, grid.rows());
    return $_cya8qajgjctdj3jm.map(cols, function (col) {
      var getBlock = function () {
        return $_cya8qajgjctdj3jm.bind(rows, function (r) {
          return $_13w1akojctdj3op.getAt(warehouse, r, col).filter(function (detail) {
            return detail.column() === col;
          }).fold($_17hg00jijctdj3jv.constant([]), function (detail) {
            return [detail];
          });
        });
      };
      var isSingle = function (detail) {
        return detail.colspan() === 1;
      };
      var getFallback = function () {
        return $_13w1akojctdj3op.getAt(warehouse, 0, col);
      };
      return decide(getBlock, isSingle, getFallback);
    });
  };
  var decide = function (getBlock, isSingle, getFallback) {
    var inBlock = getBlock();
    var singleInBlock = $_cya8qajgjctdj3jm.find(inBlock, isSingle);
    var detailOption = singleInBlock.orThunk(function () {
      return $_41pgl8jhjctdj3jt.from(inBlock[0]).orThunk(getFallback);
    });
    return detailOption.map(function (detail) {
      return detail.element();
    });
  };
  var rows$1 = function (warehouse) {
    var grid = warehouse.grid();
    var rows = $_eahflsmhjctdj3zz.range(0, grid.rows());
    var cols = $_eahflsmhjctdj3zz.range(0, grid.columns());
    return $_cya8qajgjctdj3jm.map(rows, function (row) {
      var getBlock = function () {
        return $_cya8qajgjctdj3jm.bind(cols, function (c) {
          return $_13w1akojctdj3op.getAt(warehouse, row, c).filter(function (detail) {
            return detail.row() === row;
          }).fold($_17hg00jijctdj3jv.constant([]), function (detail) {
            return [detail];
          });
        });
      };
      var isSingle = function (detail) {
        return detail.rowspan() === 1;
      };
      var getFallback = function () {
        return $_13w1akojctdj3op.getAt(warehouse, row, 0);
      };
      return decide(getBlock, isSingle, getFallback);
    });
  };
  var $_17hcg1mgjctdj3zt = {
    columns: columns,
    rows: rows$1
  };

  var col = function (column, x, y, w, h) {
    var blocker = $_4jfq4gjvjctdj3lt.fromTag('div');
    $_43s1eukpjctdj3p3.setAll(blocker, {
      position: 'absolute',
      left: x - w / 2 + 'px',
      top: y + 'px',
      height: h + 'px',
      width: w + 'px'
    });
    $_fdrkf1kgjctdj3no.setAll(blocker, {
      'data-column': column,
      'role': 'presentation'
    });
    return blocker;
  };
  var row$1 = function (row, x, y, w, h) {
    var blocker = $_4jfq4gjvjctdj3lt.fromTag('div');
    $_43s1eukpjctdj3p3.setAll(blocker, {
      position: 'absolute',
      left: x + 'px',
      top: y - h / 2 + 'px',
      height: h + 'px',
      width: w + 'px'
    });
    $_fdrkf1kgjctdj3no.setAll(blocker, {
      'data-row': row,
      'role': 'presentation'
    });
    return blocker;
  };
  var $_8snn64mijctdj405 = {
    col: col,
    row: row$1
  };

  var css = function (namespace) {
    var dashNamespace = namespace.replace(/\./g, '-');
    var resolve = function (str) {
      return dashNamespace + '-' + str;
    };
    return { resolve: resolve };
  };
  var $_gdj6f7mkjctdj40c = { css: css };

  var styles = $_gdj6f7mkjctdj40c.css('ephox-snooker');
  var $_28s9vfmjjctdj40a = { resolve: styles.resolve };

  var Toggler = function (turnOff, turnOn, initial) {
    var active = initial || false;
    var on = function () {
      turnOn();
      active = true;
    };
    var off = function () {
      turnOff();
      active = false;
    };
    var toggle = function () {
      var f = active ? off : on;
      f();
    };
    var isOn = function () {
      return active;
    };
    return {
      on: on,
      off: off,
      toggle: toggle,
      isOn: isOn
    };
  };

  var read = function (element, attr) {
    var value = $_fdrkf1kgjctdj3no.get(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };
  var add$2 = function (element, attr, id) {
    var old = read(element, attr);
    var nu = old.concat([id]);
    $_fdrkf1kgjctdj3no.set(element, attr, nu.join(' '));
  };
  var remove$5 = function (element, attr, id) {
    var nu = $_cya8qajgjctdj3jm.filter(read(element, attr), function (v) {
      return v !== id;
    });
    if (nu.length > 0)
      $_fdrkf1kgjctdj3no.set(element, attr, nu.join(' '));
    else
      $_fdrkf1kgjctdj3no.remove(element, attr);
  };
  var $_fmcf3smojctdj40o = {
    read: read,
    add: add$2,
    remove: remove$5
  };

  var supports = function (element) {
    return element.dom().classList !== undefined;
  };
  var get$7 = function (element) {
    return $_fmcf3smojctdj40o.read(element, 'class');
  };
  var add$1 = function (element, clazz) {
    return $_fmcf3smojctdj40o.add(element, 'class', clazz);
  };
  var remove$4 = function (element, clazz) {
    return $_fmcf3smojctdj40o.remove(element, 'class', clazz);
  };
  var toggle$1 = function (element, clazz) {
    if ($_cya8qajgjctdj3jm.contains(get$7(element), clazz)) {
      remove$4(element, clazz);
    } else {
      add$1(element, clazz);
    }
  };
  var $_4vszm3mnjctdj40m = {
    get: get$7,
    add: add$1,
    remove: remove$4,
    toggle: toggle$1,
    supports: supports
  };

  var add = function (element, clazz) {
    if ($_4vszm3mnjctdj40m.supports(element))
      element.dom().classList.add(clazz);
    else
      $_4vszm3mnjctdj40m.add(element, clazz);
  };
  var cleanClass = function (element) {
    var classList = $_4vszm3mnjctdj40m.supports(element) ? element.dom().classList : $_4vszm3mnjctdj40m.get(element);
    if (classList.length === 0) {
      $_fdrkf1kgjctdj3no.remove(element, 'class');
    }
  };
  var remove$3 = function (element, clazz) {
    if ($_4vszm3mnjctdj40m.supports(element)) {
      var classList = element.dom().classList;
      classList.remove(clazz);
    } else
      $_4vszm3mnjctdj40m.remove(element, clazz);
    cleanClass(element);
  };
  var toggle = function (element, clazz) {
    return $_4vszm3mnjctdj40m.supports(element) ? element.dom().classList.toggle(clazz) : $_4vszm3mnjctdj40m.toggle(element, clazz);
  };
  var toggler = function (element, clazz) {
    var hasClasslist = $_4vszm3mnjctdj40m.supports(element);
    var classList = element.dom().classList;
    var off = function () {
      if (hasClasslist)
        classList.remove(clazz);
      else
        $_4vszm3mnjctdj40m.remove(element, clazz);
    };
    var on = function () {
      if (hasClasslist)
        classList.add(clazz);
      else
        $_4vszm3mnjctdj40m.add(element, clazz);
    };
    return Toggler(off, on, has$1(element, clazz));
  };
  var has$1 = function (element, clazz) {
    return $_4vszm3mnjctdj40m.supports(element) && element.dom().classList.contains(clazz);
  };
  var $_uldqkmljctdj40d = {
    add: add,
    remove: remove$3,
    toggle: toggle,
    toggler: toggler,
    has: has$1
  };

  var resizeBar = $_28s9vfmjjctdj40a.resolve('resizer-bar');
  var resizeRowBar = $_28s9vfmjjctdj40a.resolve('resizer-rows');
  var resizeColBar = $_28s9vfmjjctdj40a.resolve('resizer-cols');
  var BAR_THICKNESS = 7;
  var clear = function (wire) {
    var previous = $_cifrp6kijctdj3ny.descendants(wire.parent(), '.' + resizeBar);
    $_cya8qajgjctdj3jm.each(previous, $_7l6mlmksjctdj3pm.remove);
  };
  var drawBar = function (wire, positions, create) {
    var origin = wire.origin();
    $_cya8qajgjctdj3jm.each(positions, function (cpOption, i) {
      cpOption.each(function (cp) {
        var bar = create(origin, cp);
        $_uldqkmljctdj40d.add(bar, resizeBar);
        $_a6a55bkrjctdj3pl.append(wire.parent(), bar);
      });
    });
  };
  var refreshCol = function (wire, colPositions, position, tableHeight) {
    drawBar(wire, colPositions, function (origin, cp) {
      var colBar = $_8snn64mijctdj405.col(cp.col(), cp.x() - origin.left(), position.top() - origin.top(), BAR_THICKNESS, tableHeight);
      $_uldqkmljctdj40d.add(colBar, resizeColBar);
      return colBar;
    });
  };
  var refreshRow = function (wire, rowPositions, position, tableWidth) {
    drawBar(wire, rowPositions, function (origin, cp) {
      var rowBar = $_8snn64mijctdj405.row(cp.row(), position.left() - origin.left(), cp.y() - origin.top(), tableWidth, BAR_THICKNESS);
      $_uldqkmljctdj40d.add(rowBar, resizeRowBar);
      return rowBar;
    });
  };
  var refreshGrid = function (wire, table, rows, cols, hdirection, vdirection) {
    var position = $_eb1nr3lxjctdj3w8.absolute(table);
    var rowPositions = rows.length > 0 ? hdirection.positions(rows, table) : [];
    refreshRow(wire, rowPositions, position, $_386unjltjctdj3vv.getOuter(table));
    var colPositions = cols.length > 0 ? vdirection.positions(cols, table) : [];
    refreshCol(wire, colPositions, position, $_71eh7ylrjctdj3vp.getOuter(table));
  };
  var refresh = function (wire, table, hdirection, vdirection) {
    clear(wire);
    var list = $_1x2v4fjqjctdj3ks.fromTable(table);
    var warehouse = $_13w1akojctdj3op.generate(list);
    var rows = $_17hcg1mgjctdj3zt.rows(warehouse);
    var cols = $_17hcg1mgjctdj3zt.columns(warehouse);
    refreshGrid(wire, table, rows, cols, hdirection, vdirection);
  };
  var each$2 = function (wire, f) {
    var bars = $_cifrp6kijctdj3ny.descendants(wire.parent(), '.' + resizeBar);
    $_cya8qajgjctdj3jm.each(bars, f);
  };
  var hide = function (wire) {
    each$2(wire, function (bar) {
      $_43s1eukpjctdj3p3.set(bar, 'display', 'none');
    });
  };
  var show = function (wire) {
    each$2(wire, function (bar) {
      $_43s1eukpjctdj3p3.set(bar, 'display', 'block');
    });
  };
  var isRowBar = function (element) {
    return $_uldqkmljctdj40d.has(element, resizeRowBar);
  };
  var isColBar = function (element) {
    return $_uldqkmljctdj40d.has(element, resizeColBar);
  };
  var $_4t0ps8mfjctdj3zh = {
    refresh: refresh,
    hide: hide,
    show: show,
    destroy: clear,
    isRowBar: isRowBar,
    isColBar: isColBar
  };

  var fromWarehouse = function (warehouse, generators) {
    return $_2fkjidmbjctdj3yr.toGrid(warehouse, generators, false);
  };
  var deriveRows = function (rendered, generators) {
    var findRow = function (details) {
      var rowOfCells = $_5ravs6majctdj3yj.findMap(details, function (detail) {
        return $_4vj6djjxjctdj3lz.parent(detail.element()).map(function (row) {
          var isNew = $_4vj6djjxjctdj3lz.parent(row).isNone();
          return $_6gworajrjctdj3ky.elementnew(row, isNew);
        });
      });
      return rowOfCells.getOrThunk(function () {
        return $_6gworajrjctdj3ky.elementnew(generators.row(), true);
      });
    };
    return $_cya8qajgjctdj3jm.map(rendered, function (details) {
      var row = findRow(details.details());
      return $_6gworajrjctdj3ky.rowdatanew(row.element(), details.details(), details.section(), row.isNew());
    });
  };
  var toDetailList = function (grid, generators) {
    var rendered = $_2fkjidmbjctdj3yr.toDetails(grid, $_dptc54jzjctdj3ma.eq);
    return deriveRows(rendered, generators);
  };
  var findInWarehouse = function (warehouse, element) {
    var all = $_cya8qajgjctdj3jm.flatten($_cya8qajgjctdj3jm.map(warehouse.all(), function (r) {
      return r.cells();
    }));
    return $_cya8qajgjctdj3jm.find(all, function (e) {
      return $_dptc54jzjctdj3ma.eq(element, e.element());
    });
  };
  var run = function (operation, extract, adjustment, postAction, genWrappers) {
    return function (wire, table, target, generators, direction) {
      var input = $_1x2v4fjqjctdj3ks.fromTable(table);
      var warehouse = $_13w1akojctdj3op.generate(input);
      var output = extract(warehouse, target).map(function (info) {
        var model = fromWarehouse(warehouse, generators);
        var result = operation(model, info, $_dptc54jzjctdj3ma.eq, genWrappers(generators));
        var grid = toDetailList(result.grid(), generators);
        return {
          grid: $_17hg00jijctdj3jv.constant(grid),
          cursor: result.cursor
        };
      });
      return output.fold(function () {
        return $_41pgl8jhjctdj3jt.none();
      }, function (out) {
        var newElements = $_c5h8jcmejctdj3z2.render(table, out.grid());
        adjustment(table, out.grid(), direction);
        postAction(table);
        $_4t0ps8mfjctdj3zh.refresh(wire, table, $_9p78gglwjctdj3w0.height, direction);
        return $_41pgl8jhjctdj3jt.some({
          cursor: out.cursor,
          newRows: newElements.newRows,
          newCells: newElements.newCells
        });
      });
    };
  };
  var onCell = function (warehouse, target) {
    return $_1mbzcijsjctdj3l1.cell(target.element()).bind(function (cell) {
      return findInWarehouse(warehouse, cell);
    });
  };
  var onPaste = function (warehouse, target) {
    return $_1mbzcijsjctdj3l1.cell(target.element()).bind(function (cell) {
      return findInWarehouse(warehouse, cell).map(function (details) {
        return $_1hzsjvm9jctdj3yh.merge(details, {
          generators: target.generators,
          clipboard: target.clipboard
        });
      });
    });
  };
  var onPasteRows = function (warehouse, target) {
    var details = $_cya8qajgjctdj3jm.map(target.selection(), function (cell) {
      return $_1mbzcijsjctdj3l1.cell(cell).bind(function (lc) {
        return findInWarehouse(warehouse, lc);
      });
    });
    var cells = $_5ravs6majctdj3yj.cat(details);
    return cells.length > 0 ? $_41pgl8jhjctdj3jt.some($_1hzsjvm9jctdj3yh.merge({ cells: cells }, {
      generators: target.generators,
      clipboard: target.clipboard
    })) : $_41pgl8jhjctdj3jt.none();
  };
  var onMergable = function (warehouse, target) {
    return target.mergable();
  };
  var onUnmergable = function (warehouse, target) {
    return target.unmergable();
  };
  var onCells = function (warehouse, target) {
    var details = $_cya8qajgjctdj3jm.map(target.selection(), function (cell) {
      return $_1mbzcijsjctdj3l1.cell(cell).bind(function (lc) {
        return findInWarehouse(warehouse, lc);
      });
    });
    var cells = $_5ravs6majctdj3yj.cat(details);
    return cells.length > 0 ? $_41pgl8jhjctdj3jt.some(cells) : $_41pgl8jhjctdj3jt.none();
  };
  var $_7v3lefm8jctdj3y6 = {
    run: run,
    toDetailList: toDetailList,
    onCell: onCell,
    onCells: onCells,
    onPaste: onPaste,
    onPasteRows: onPasteRows,
    onMergable: onMergable,
    onUnmergable: onUnmergable
  };

  var value$1 = function (o) {
    var is = function (v) {
      return o === v;
    };
    var or = function (opt) {
      return value$1(o);
    };
    var orThunk = function (f) {
      return value$1(o);
    };
    var map = function (f) {
      return value$1(f(o));
    };
    var each = function (f) {
      f(o);
    };
    var bind = function (f) {
      return f(o);
    };
    var fold = function (_, onValue) {
      return onValue(o);
    };
    var exists = function (f) {
      return f(o);
    };
    var forall = function (f) {
      return f(o);
    };
    var toOption = function () {
      return $_41pgl8jhjctdj3jt.some(o);
    };
    return {
      is: is,
      isValue: $_17hg00jijctdj3jv.constant(true),
      isError: $_17hg00jijctdj3jv.constant(false),
      getOr: $_17hg00jijctdj3jv.constant(o),
      getOrThunk: $_17hg00jijctdj3jv.constant(o),
      getOrDie: $_17hg00jijctdj3jv.constant(o),
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: each,
      bind: bind,
      exists: exists,
      forall: forall,
      toOption: toOption
    };
  };
  var error = function (message) {
    var getOrThunk = function (f) {
      return f();
    };
    var getOrDie = function () {
      return $_17hg00jijctdj3jv.die(message)();
    };
    var or = function (opt) {
      return opt;
    };
    var orThunk = function (f) {
      return f();
    };
    var map = function (f) {
      return error(message);
    };
    var bind = function (f) {
      return error(message);
    };
    var fold = function (onError, _) {
      return onError(message);
    };
    return {
      is: $_17hg00jijctdj3jv.constant(false),
      isValue: $_17hg00jijctdj3jv.constant(false),
      isError: $_17hg00jijctdj3jv.constant(true),
      getOr: $_17hg00jijctdj3jv.identity,
      getOrThunk: getOrThunk,
      getOrDie: getOrDie,
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: $_17hg00jijctdj3jv.noop,
      bind: bind,
      exists: $_17hg00jijctdj3jv.constant(false),
      forall: $_17hg00jijctdj3jv.constant(true),
      toOption: $_41pgl8jhjctdj3jt.none
    };
  };
  var $_e11ky0mrjctdj411 = {
    value: value$1,
    error: error
  };

  var measure = function (startAddress, gridA, gridB) {
    if (startAddress.row() >= gridA.length || startAddress.column() > $_7xgnk1mdjctdj3yz.cellLength(gridA[0]))
      return $_e11ky0mrjctdj411.error('invalid start address out of table bounds, row: ' + startAddress.row() + ', column: ' + startAddress.column());
    var rowRemainder = gridA.slice(startAddress.row());
    var colRemainder = rowRemainder[0].cells().slice(startAddress.column());
    var colRequired = $_7xgnk1mdjctdj3yz.cellLength(gridB[0]);
    var rowRequired = gridB.length;
    return $_e11ky0mrjctdj411.value({
      rowDelta: $_17hg00jijctdj3jv.constant(rowRemainder.length - rowRequired),
      colDelta: $_17hg00jijctdj3jv.constant(colRemainder.length - colRequired)
    });
  };
  var measureWidth = function (gridA, gridB) {
    var colLengthA = $_7xgnk1mdjctdj3yz.cellLength(gridA[0]);
    var colLengthB = $_7xgnk1mdjctdj3yz.cellLength(gridB[0]);
    return {
      rowDelta: $_17hg00jijctdj3jv.constant(0),
      colDelta: $_17hg00jijctdj3jv.constant(colLengthA - colLengthB)
    };
  };
  var fill = function (cells, generator) {
    return $_cya8qajgjctdj3jm.map(cells, function () {
      return $_6gworajrjctdj3ky.elementnew(generator.cell(), true);
    });
  };
  var rowFill = function (grid, amount, generator) {
    return grid.concat($_eahflsmhjctdj3zz.repeat(amount, function (_row) {
      return $_7xgnk1mdjctdj3yz.setCells(grid[grid.length - 1], fill(grid[grid.length - 1].cells(), generator));
    }));
  };
  var colFill = function (grid, amount, generator) {
    return $_cya8qajgjctdj3jm.map(grid, function (row) {
      return $_7xgnk1mdjctdj3yz.setCells(row, row.cells().concat(fill($_eahflsmhjctdj3zz.range(0, amount), generator)));
    });
  };
  var tailor = function (gridA, delta, generator) {
    var fillCols = delta.colDelta() < 0 ? colFill : $_17hg00jijctdj3jv.identity;
    var fillRows = delta.rowDelta() < 0 ? rowFill : $_17hg00jijctdj3jv.identity;
    var modifiedCols = fillCols(gridA, Math.abs(delta.colDelta()), generator);
    var tailoredGrid = fillRows(modifiedCols, Math.abs(delta.rowDelta()), generator);
    return tailoredGrid;
  };
  var $_9gok7lmqjctdj40w = {
    measure: measure,
    measureWidth: measureWidth,
    tailor: tailor
  };

  var merge$3 = function (grid, bounds, comparator, substitution) {
    if (grid.length === 0)
      return grid;
    for (var i = bounds.startRow(); i <= bounds.finishRow(); i++) {
      for (var j = bounds.startCol(); j <= bounds.finishCol(); j++) {
        $_7xgnk1mdjctdj3yz.mutateCell(grid[i], j, $_6gworajrjctdj3ky.elementnew(substitution(), false));
      }
    }
    return grid;
  };
  var unmerge = function (grid, target, comparator, substitution) {
    var first = true;
    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < $_7xgnk1mdjctdj3yz.cellLength(grid[0]); j++) {
        var current = $_7xgnk1mdjctdj3yz.getCellElement(grid[i], j);
        var isToReplace = comparator(current, target);
        if (isToReplace === true && first === false) {
          $_7xgnk1mdjctdj3yz.mutateCell(grid[i], j, $_6gworajrjctdj3ky.elementnew(substitution(), true));
        } else if (isToReplace === true) {
          first = false;
        }
      }
    }
    return grid;
  };
  var uniqueCells = function (row, comparator) {
    return $_cya8qajgjctdj3jm.foldl(row, function (rest, cell) {
      return $_cya8qajgjctdj3jm.exists(rest, function (currentCell) {
        return comparator(currentCell.element(), cell.element());
      }) ? rest : rest.concat([cell]);
    }, []);
  };
  var splitRows = function (grid, index, comparator, substitution) {
    if (index > 0 && index < grid.length) {
      var rowPrevCells = grid[index - 1].cells();
      var cells = uniqueCells(rowPrevCells, comparator);
      $_cya8qajgjctdj3jm.each(cells, function (cell) {
        var replacement = $_41pgl8jhjctdj3jt.none();
        for (var i = index; i < grid.length; i++) {
          for (var j = 0; j < $_7xgnk1mdjctdj3yz.cellLength(grid[0]); j++) {
            var current = grid[i].cells()[j];
            var isToReplace = comparator(current.element(), cell.element());
            if (isToReplace) {
              if (replacement.isNone()) {
                replacement = $_41pgl8jhjctdj3jt.some(substitution());
              }
              replacement.each(function (sub) {
                $_7xgnk1mdjctdj3yz.mutateCell(grid[i], j, $_6gworajrjctdj3ky.elementnew(sub, true));
              });
            }
          }
        }
      });
    }
    return grid;
  };
  var $_8outfxmsjctdj416 = {
    merge: merge$3,
    unmerge: unmerge,
    splitRows: splitRows
  };

  var isSpanning = function (grid, row, col, comparator) {
    var candidate = $_7xgnk1mdjctdj3yz.getCell(grid[row], col);
    var matching = $_17hg00jijctdj3jv.curry(comparator, candidate.element());
    var currentRow = grid[row];
    return grid.length > 1 && $_7xgnk1mdjctdj3yz.cellLength(currentRow) > 1 && (col > 0 && matching($_7xgnk1mdjctdj3yz.getCellElement(currentRow, col - 1)) || col < currentRow.length - 1 && matching($_7xgnk1mdjctdj3yz.getCellElement(currentRow, col + 1)) || row > 0 && matching($_7xgnk1mdjctdj3yz.getCellElement(grid[row - 1], col)) || row < grid.length - 1 && matching($_7xgnk1mdjctdj3yz.getCellElement(grid[row + 1], col)));
  };
  var mergeTables = function (startAddress, gridA, gridB, generator, comparator) {
    var startRow = startAddress.row();
    var startCol = startAddress.column();
    var mergeHeight = gridB.length;
    var mergeWidth = $_7xgnk1mdjctdj3yz.cellLength(gridB[0]);
    var endRow = startRow + mergeHeight;
    var endCol = startCol + mergeWidth;
    for (var r = startRow; r < endRow; r++) {
      for (var c = startCol; c < endCol; c++) {
        if (isSpanning(gridA, r, c, comparator)) {
          $_8outfxmsjctdj416.unmerge(gridA, $_7xgnk1mdjctdj3yz.getCellElement(gridA[r], c), comparator, generator.cell);
        }
        var newCell = $_7xgnk1mdjctdj3yz.getCellElement(gridB[r - startRow], c - startCol);
        var replacement = generator.replace(newCell);
        $_7xgnk1mdjctdj3yz.mutateCell(gridA[r], c, $_6gworajrjctdj3ky.elementnew(replacement, true));
      }
    }
    return gridA;
  };
  var merge$2 = function (startAddress, gridA, gridB, generator, comparator) {
    var result = $_9gok7lmqjctdj40w.measure(startAddress, gridA, gridB);
    return result.map(function (delta) {
      var fittedGrid = $_9gok7lmqjctdj40w.tailor(gridA, delta, generator);
      return mergeTables(startAddress, fittedGrid, gridB, generator, comparator);
    });
  };
  var insert$1 = function (index, gridA, gridB, generator, comparator) {
    $_8outfxmsjctdj416.splitRows(gridA, index, comparator, generator.cell);
    var delta = $_9gok7lmqjctdj40w.measureWidth(gridB, gridA);
    var fittedNewGrid = $_9gok7lmqjctdj40w.tailor(gridB, delta, generator);
    var secondDelta = $_9gok7lmqjctdj40w.measureWidth(gridA, fittedNewGrid);
    var fittedOldGrid = $_9gok7lmqjctdj40w.tailor(gridA, secondDelta, generator);
    return fittedOldGrid.slice(0, index).concat(fittedNewGrid).concat(fittedOldGrid.slice(index, fittedOldGrid.length));
  };
  var $_5xg1ivmpjctdj40s = {
    merge: merge$2,
    insert: insert$1
  };

  var insertRowAt = function (grid, index, example, comparator, substitution) {
    var before = grid.slice(0, index);
    var after = grid.slice(index);
    var between = $_7xgnk1mdjctdj3yz.mapCells(grid[example], function (ex, c) {
      var withinSpan = index > 0 && index < grid.length && comparator($_7xgnk1mdjctdj3yz.getCellElement(grid[index - 1], c), $_7xgnk1mdjctdj3yz.getCellElement(grid[index], c));
      var ret = withinSpan ? $_7xgnk1mdjctdj3yz.getCell(grid[index], c) : $_6gworajrjctdj3ky.elementnew(substitution(ex.element(), comparator), true);
      return ret;
    });
    return before.concat([between]).concat(after);
  };
  var insertColumnAt = function (grid, index, example, comparator, substitution) {
    return $_cya8qajgjctdj3jm.map(grid, function (row) {
      var withinSpan = index > 0 && index < $_7xgnk1mdjctdj3yz.cellLength(row) && comparator($_7xgnk1mdjctdj3yz.getCellElement(row, index - 1), $_7xgnk1mdjctdj3yz.getCellElement(row, index));
      var sub = withinSpan ? $_7xgnk1mdjctdj3yz.getCell(row, index) : $_6gworajrjctdj3ky.elementnew(substitution($_7xgnk1mdjctdj3yz.getCellElement(row, example), comparator), true);
      return $_7xgnk1mdjctdj3yz.addCell(row, index, sub);
    });
  };
  var splitCellIntoColumns$1 = function (grid, exampleRow, exampleCol, comparator, substitution) {
    var index = exampleCol + 1;
    return $_cya8qajgjctdj3jm.map(grid, function (row, i) {
      var isTargetCell = i === exampleRow;
      var sub = isTargetCell ? $_6gworajrjctdj3ky.elementnew(substitution($_7xgnk1mdjctdj3yz.getCellElement(row, exampleCol), comparator), true) : $_7xgnk1mdjctdj3yz.getCell(row, exampleCol);
      return $_7xgnk1mdjctdj3yz.addCell(row, index, sub);
    });
  };
  var splitCellIntoRows$1 = function (grid, exampleRow, exampleCol, comparator, substitution) {
    var index = exampleRow + 1;
    var before = grid.slice(0, index);
    var after = grid.slice(index);
    var between = $_7xgnk1mdjctdj3yz.mapCells(grid[exampleRow], function (ex, i) {
      var isTargetCell = i === exampleCol;
      return isTargetCell ? $_6gworajrjctdj3ky.elementnew(substitution(ex.element(), comparator), true) : ex;
    });
    return before.concat([between]).concat(after);
  };
  var deleteColumnsAt = function (grid, start, finish) {
    var rows = $_cya8qajgjctdj3jm.map(grid, function (row) {
      var cells = row.cells().slice(0, start).concat(row.cells().slice(finish + 1));
      return $_6gworajrjctdj3ky.rowcells(cells, row.section());
    });
    return $_cya8qajgjctdj3jm.filter(rows, function (row) {
      return row.cells().length > 0;
    });
  };
  var deleteRowsAt = function (grid, start, finish) {
    return grid.slice(0, start).concat(grid.slice(finish + 1));
  };
  var $_6ysl9xmtjctdj41b = {
    insertRowAt: insertRowAt,
    insertColumnAt: insertColumnAt,
    splitCellIntoColumns: splitCellIntoColumns$1,
    splitCellIntoRows: splitCellIntoRows$1,
    deleteRowsAt: deleteRowsAt,
    deleteColumnsAt: deleteColumnsAt
  };

  var replaceIn = function (grid, targets, comparator, substitution) {
    var isTarget = function (cell) {
      return $_cya8qajgjctdj3jm.exists(targets, function (target) {
        return comparator(cell.element(), target.element());
      });
    };
    return $_cya8qajgjctdj3jm.map(grid, function (row) {
      return $_7xgnk1mdjctdj3yz.mapCells(row, function (cell) {
        return isTarget(cell) ? $_6gworajrjctdj3ky.elementnew(substitution(cell.element(), comparator), true) : cell;
      });
    });
  };
  var notStartRow = function (grid, rowIndex, colIndex, comparator) {
    return $_7xgnk1mdjctdj3yz.getCellElement(grid[rowIndex], colIndex) !== undefined && (rowIndex > 0 && comparator($_7xgnk1mdjctdj3yz.getCellElement(grid[rowIndex - 1], colIndex), $_7xgnk1mdjctdj3yz.getCellElement(grid[rowIndex], colIndex)));
  };
  var notStartColumn = function (row, index, comparator) {
    return index > 0 && comparator($_7xgnk1mdjctdj3yz.getCellElement(row, index - 1), $_7xgnk1mdjctdj3yz.getCellElement(row, index));
  };
  var replaceColumn = function (grid, index, comparator, substitution) {
    var targets = $_cya8qajgjctdj3jm.bind(grid, function (row, i) {
      var alreadyAdded = notStartRow(grid, i, index, comparator) || notStartColumn(row, index, comparator);
      return alreadyAdded ? [] : [$_7xgnk1mdjctdj3yz.getCell(row, index)];
    });
    return replaceIn(grid, targets, comparator, substitution);
  };
  var replaceRow = function (grid, index, comparator, substitution) {
    var targetRow = grid[index];
    var targets = $_cya8qajgjctdj3jm.bind(targetRow.cells(), function (item, i) {
      var alreadyAdded = notStartRow(grid, index, i, comparator) || notStartColumn(targetRow, i, comparator);
      return alreadyAdded ? [] : [item];
    });
    return replaceIn(grid, targets, comparator, substitution);
  };
  var $_d1icalmujctdj41f = {
    replaceColumn: replaceColumn,
    replaceRow: replaceRow
  };

  var none$1 = function () {
    return folder(function (n, o, l, m, r) {
      return n();
    });
  };
  var only = function (index) {
    return folder(function (n, o, l, m, r) {
      return o(index);
    });
  };
  var left = function (index, next) {
    return folder(function (n, o, l, m, r) {
      return l(index, next);
    });
  };
  var middle = function (prev, index, next) {
    return folder(function (n, o, l, m, r) {
      return m(prev, index, next);
    });
  };
  var right = function (prev, index) {
    return folder(function (n, o, l, m, r) {
      return r(prev, index);
    });
  };
  var folder = function (fold) {
    return { fold: fold };
  };
  var $_45f8vtmxjctdj41u = {
    none: none$1,
    only: only,
    left: left,
    middle: middle,
    right: right
  };

  var neighbours$1 = function (input, index) {
    if (input.length === 0)
      return $_45f8vtmxjctdj41u.none();
    if (input.length === 1)
      return $_45f8vtmxjctdj41u.only(0);
    if (index === 0)
      return $_45f8vtmxjctdj41u.left(0, 1);
    if (index === input.length - 1)
      return $_45f8vtmxjctdj41u.right(index - 1, index);
    if (index > 0 && index < input.length - 1)
      return $_45f8vtmxjctdj41u.middle(index - 1, index, index + 1);
    return $_45f8vtmxjctdj41u.none();
  };
  var determine = function (input, column, step, tableSize) {
    var result = input.slice(0);
    var context = neighbours$1(input, column);
    var zero = function (array) {
      return $_cya8qajgjctdj3jm.map(array, $_17hg00jijctdj3jv.constant(0));
    };
    var onNone = $_17hg00jijctdj3jv.constant(zero(result));
    var onOnly = function (index) {
      return tableSize.singleColumnWidth(result[index], step);
    };
    var onChange = function (index, next) {
      if (step >= 0) {
        var newNext = Math.max(tableSize.minCellWidth(), result[next] - step);
        return zero(result.slice(0, index)).concat([
          step,
          newNext - result[next]
        ]).concat(zero(result.slice(next + 1)));
      } else {
        var newThis = Math.max(tableSize.minCellWidth(), result[index] + step);
        var diffx = result[index] - newThis;
        return zero(result.slice(0, index)).concat([
          newThis - result[index],
          diffx
        ]).concat(zero(result.slice(next + 1)));
      }
    };
    var onLeft = onChange;
    var onMiddle = function (prev, index, next) {
      return onChange(index, next);
    };
    var onRight = function (prev, index) {
      if (step >= 0) {
        return zero(result.slice(0, index)).concat([step]);
      } else {
        var size = Math.max(tableSize.minCellWidth(), result[index] + step);
        return zero(result.slice(0, index)).concat([size - result[index]]);
      }
    };
    return context.fold(onNone, onOnly, onLeft, onMiddle, onRight);
  };
  var $_5epqq2mwjctdj41p = { determine: determine };

  var getSpan$1 = function (cell, type) {
    return $_fdrkf1kgjctdj3no.has(cell, type) && parseInt($_fdrkf1kgjctdj3no.get(cell, type), 10) > 1;
  };
  var hasColspan = function (cell) {
    return getSpan$1(cell, 'colspan');
  };
  var hasRowspan = function (cell) {
    return getSpan$1(cell, 'rowspan');
  };
  var getInt = function (element, property) {
    return parseInt($_43s1eukpjctdj3p3.get(element, property), 10);
  };
  var $_cflbi5mzjctdj422 = {
    hasColspan: hasColspan,
    hasRowspan: hasRowspan,
    minWidth: $_17hg00jijctdj3jv.constant(10),
    minHeight: $_17hg00jijctdj3jv.constant(10),
    getInt: getInt
  };

  var getRaw$1 = function (cell, property, getter) {
    return $_43s1eukpjctdj3p3.getRaw(cell, property).fold(function () {
      return getter(cell) + 'px';
    }, function (raw) {
      return raw;
    });
  };
  var getRawW = function (cell) {
    return getRaw$1(cell, 'width', $_3ilspslpjctdj3v5.getPixelWidth);
  };
  var getRawH = function (cell) {
    return getRaw$1(cell, 'height', $_3ilspslpjctdj3v5.getHeight);
  };
  var getWidthFrom = function (warehouse, direction, getWidth, fallback, tableSize) {
    var columns = $_17hcg1mgjctdj3zt.columns(warehouse);
    var backups = $_cya8qajgjctdj3jm.map(columns, function (cellOption) {
      return cellOption.map(direction.edge);
    });
    return $_cya8qajgjctdj3jm.map(columns, function (cellOption, c) {
      var columnCell = cellOption.filter($_17hg00jijctdj3jv.not($_cflbi5mzjctdj422.hasColspan));
      return columnCell.fold(function () {
        var deduced = $_eahflsmhjctdj3zz.deduce(backups, c);
        return fallback(deduced);
      }, function (cell) {
        return getWidth(cell, tableSize);
      });
    });
  };
  var getDeduced = function (deduced) {
    return deduced.map(function (d) {
      return d + 'px';
    }).getOr('');
  };
  var getRawWidths = function (warehouse, direction) {
    return getWidthFrom(warehouse, direction, getRawW, getDeduced);
  };
  var getPercentageWidths = function (warehouse, direction, tableSize) {
    return getWidthFrom(warehouse, direction, $_3ilspslpjctdj3v5.getPercentageWidth, function (deduced) {
      return deduced.fold(function () {
        return tableSize.minCellWidth();
      }, function (cellWidth) {
        return cellWidth / tableSize.pixelWidth() * 100;
      });
    }, tableSize);
  };
  var getPixelWidths = function (warehouse, direction, tableSize) {
    return getWidthFrom(warehouse, direction, $_3ilspslpjctdj3v5.getPixelWidth, function (deduced) {
      return deduced.getOrThunk(tableSize.minCellWidth);
    }, tableSize);
  };
  var getHeightFrom = function (warehouse, direction, getHeight, fallback) {
    var rows = $_17hcg1mgjctdj3zt.rows(warehouse);
    var backups = $_cya8qajgjctdj3jm.map(rows, function (cellOption) {
      return cellOption.map(direction.edge);
    });
    return $_cya8qajgjctdj3jm.map(rows, function (cellOption, c) {
      var rowCell = cellOption.filter($_17hg00jijctdj3jv.not($_cflbi5mzjctdj422.hasRowspan));
      return rowCell.fold(function () {
        var deduced = $_eahflsmhjctdj3zz.deduce(backups, c);
        return fallback(deduced);
      }, function (cell) {
        return getHeight(cell);
      });
    });
  };
  var getPixelHeights = function (warehouse, direction) {
    return getHeightFrom(warehouse, direction, $_3ilspslpjctdj3v5.getHeight, function (deduced) {
      return deduced.getOrThunk($_cflbi5mzjctdj422.minHeight);
    });
  };
  var getRawHeights = function (warehouse, direction) {
    return getHeightFrom(warehouse, direction, getRawH, getDeduced);
  };
  var $_fwnm93myjctdj41w = {
    getRawWidths: getRawWidths,
    getPixelWidths: getPixelWidths,
    getPercentageWidths: getPercentageWidths,
    getPixelHeights: getPixelHeights,
    getRawHeights: getRawHeights
  };

  var total = function (start, end, measures) {
    var r = 0;
    for (var i = start; i < end; i++) {
      r += measures[i] !== undefined ? measures[i] : 0;
    }
    return r;
  };
  var recalculateWidth = function (warehouse, widths) {
    var all = $_13w1akojctdj3op.justCells(warehouse);
    return $_cya8qajgjctdj3jm.map(all, function (cell) {
      var width = total(cell.column(), cell.column() + cell.colspan(), widths);
      return {
        element: cell.element,
        width: $_17hg00jijctdj3jv.constant(width),
        colspan: cell.colspan
      };
    });
  };
  var recalculateHeight = function (warehouse, heights) {
    var all = $_13w1akojctdj3op.justCells(warehouse);
    return $_cya8qajgjctdj3jm.map(all, function (cell) {
      var height = total(cell.row(), cell.row() + cell.rowspan(), heights);
      return {
        element: cell.element,
        height: $_17hg00jijctdj3jv.constant(height),
        rowspan: cell.rowspan
      };
    });
  };
  var matchRowHeight = function (warehouse, heights) {
    return $_cya8qajgjctdj3jm.map(warehouse.all(), function (row, i) {
      return {
        element: row.element,
        height: $_17hg00jijctdj3jv.constant(heights[i])
      };
    });
  };
  var $_b9e68on0jctdj428 = {
    recalculateWidth: recalculateWidth,
    recalculateHeight: recalculateHeight,
    matchRowHeight: matchRowHeight
  };

  var percentageSize = function (width, element) {
    var floatWidth = parseFloat(width);
    var pixelWidth = $_386unjltjctdj3vv.get(element);
    var getCellDelta = function (delta) {
      return delta / pixelWidth * 100;
    };
    var singleColumnWidth = function (width, _delta) {
      return [100 - width];
    };
    var minCellWidth = function () {
      return $_cflbi5mzjctdj422.minWidth() / pixelWidth * 100;
    };
    var setTableWidth = function (table, _newWidths, delta) {
      var total = floatWidth + delta;
      $_3ilspslpjctdj3v5.setPercentageWidth(table, total);
    };
    return {
      width: $_17hg00jijctdj3jv.constant(floatWidth),
      pixelWidth: $_17hg00jijctdj3jv.constant(pixelWidth),
      getWidths: $_fwnm93myjctdj41w.getPercentageWidths,
      getCellDelta: getCellDelta,
      singleColumnWidth: singleColumnWidth,
      minCellWidth: minCellWidth,
      setElementWidth: $_3ilspslpjctdj3v5.setPercentageWidth,
      setTableWidth: setTableWidth
    };
  };
  var pixelSize = function (width) {
    var intWidth = parseInt(width, 10);
    var getCellDelta = $_17hg00jijctdj3jv.identity;
    var singleColumnWidth = function (width, delta) {
      var newNext = Math.max($_cflbi5mzjctdj422.minWidth(), width + delta);
      return [newNext - width];
    };
    var setTableWidth = function (table, newWidths, _delta) {
      var total = $_cya8qajgjctdj3jm.foldr(newWidths, function (b, a) {
        return b + a;
      }, 0);
      $_3ilspslpjctdj3v5.setPixelWidth(table, total);
    };
    return {
      width: $_17hg00jijctdj3jv.constant(intWidth),
      pixelWidth: $_17hg00jijctdj3jv.constant(intWidth),
      getWidths: $_fwnm93myjctdj41w.getPixelWidths,
      getCellDelta: getCellDelta,
      singleColumnWidth: singleColumnWidth,
      minCellWidth: $_cflbi5mzjctdj422.minWidth,
      setElementWidth: $_3ilspslpjctdj3v5.setPixelWidth,
      setTableWidth: setTableWidth
    };
  };
  var chooseSize = function (element, width) {
    if ($_3ilspslpjctdj3v5.percentageBasedSizeRegex().test(width)) {
      var percentMatch = $_3ilspslpjctdj3v5.percentageBasedSizeRegex().exec(width);
      return percentageSize(percentMatch[1], element);
    } else if ($_3ilspslpjctdj3v5.pixelBasedSizeRegex().test(width)) {
      var pixelMatch = $_3ilspslpjctdj3v5.pixelBasedSizeRegex().exec(width);
      return pixelSize(pixelMatch[1]);
    } else {
      var fallbackWidth = $_386unjltjctdj3vv.get(element);
      return pixelSize(fallbackWidth);
    }
  };
  var getTableSize = function (element) {
    var width = $_3ilspslpjctdj3v5.getRawWidth(element);
    return width.fold(function () {
      var fallbackWidth = $_386unjltjctdj3vv.get(element);
      return pixelSize(fallbackWidth);
    }, function (width) {
      return chooseSize(element, width);
    });
  };
  var $_4p5rm9n1jctdj42j = { getTableSize: getTableSize };

  var getWarehouse$1 = function (list) {
    return $_13w1akojctdj3op.generate(list);
  };
  var sumUp = function (newSize) {
    return $_cya8qajgjctdj3jm.foldr(newSize, function (b, a) {
      return b + a;
    }, 0);
  };
  var getTableWarehouse = function (table) {
    var list = $_1x2v4fjqjctdj3ks.fromTable(table);
    return getWarehouse$1(list);
  };
  var adjustWidth = function (table, delta, index, direction) {
    var tableSize = $_4p5rm9n1jctdj42j.getTableSize(table);
    var step = tableSize.getCellDelta(delta);
    var warehouse = getTableWarehouse(table);
    var widths = tableSize.getWidths(warehouse, direction, tableSize);
    var deltas = $_5epqq2mwjctdj41p.determine(widths, index, step, tableSize);
    var newWidths = $_cya8qajgjctdj3jm.map(deltas, function (dx, i) {
      return dx + widths[i];
    });
    var newSizes = $_b9e68on0jctdj428.recalculateWidth(warehouse, newWidths);
    $_cya8qajgjctdj3jm.each(newSizes, function (cell) {
      tableSize.setElementWidth(cell.element(), cell.width());
    });
    if (index === warehouse.grid().columns() - 1) {
      tableSize.setTableWidth(table, newWidths, step);
    }
  };
  var adjustHeight = function (table, delta, index, direction) {
    var warehouse = getTableWarehouse(table);
    var heights = $_fwnm93myjctdj41w.getPixelHeights(warehouse, direction);
    var newHeights = $_cya8qajgjctdj3jm.map(heights, function (dy, i) {
      return index === i ? Math.max(delta + dy, $_cflbi5mzjctdj422.minHeight()) : dy;
    });
    var newCellSizes = $_b9e68on0jctdj428.recalculateHeight(warehouse, newHeights);
    var newRowSizes = $_b9e68on0jctdj428.matchRowHeight(warehouse, newHeights);
    $_cya8qajgjctdj3jm.each(newRowSizes, function (row) {
      $_3ilspslpjctdj3v5.setHeight(row.element(), row.height());
    });
    $_cya8qajgjctdj3jm.each(newCellSizes, function (cell) {
      $_3ilspslpjctdj3v5.setHeight(cell.element(), cell.height());
    });
    var total = sumUp(newHeights);
    $_3ilspslpjctdj3v5.setHeight(table, total);
  };
  var adjustWidthTo = function (table, list, direction) {
    var tableSize = $_4p5rm9n1jctdj42j.getTableSize(table);
    var warehouse = getWarehouse$1(list);
    var widths = tableSize.getWidths(warehouse, direction, tableSize);
    var newSizes = $_b9e68on0jctdj428.recalculateWidth(warehouse, widths);
    $_cya8qajgjctdj3jm.each(newSizes, function (cell) {
      tableSize.setElementWidth(cell.element(), cell.width());
    });
    var total = $_cya8qajgjctdj3jm.foldr(widths, function (b, a) {
      return a + b;
    }, 0);
    if (newSizes.length > 0) {
      tableSize.setElementWidth(table, total);
    }
  };
  var $_5yf2zlmvjctdj41j = {
    adjustWidth: adjustWidth,
    adjustHeight: adjustHeight,
    adjustWidthTo: adjustWidthTo
  };

  var prune = function (table) {
    var cells = $_1mbzcijsjctdj3l1.cells(table);
    if (cells.length === 0)
      $_7l6mlmksjctdj3pm.remove(table);
  };
  var outcome = $_2gilnfjljctdj3kj.immutable('grid', 'cursor');
  var elementFromGrid = function (grid, row, column) {
    return findIn(grid, row, column).orThunk(function () {
      return findIn(grid, 0, 0);
    });
  };
  var findIn = function (grid, row, column) {
    return $_41pgl8jhjctdj3jt.from(grid[row]).bind(function (r) {
      return $_41pgl8jhjctdj3jt.from(r.cells()[column]).bind(function (c) {
        return $_41pgl8jhjctdj3jt.from(c.element());
      });
    });
  };
  var bundle = function (grid, row, column) {
    return outcome(grid, findIn(grid, row, column));
  };
  var uniqueRows = function (details) {
    return $_cya8qajgjctdj3jm.foldl(details, function (rest, detail) {
      return $_cya8qajgjctdj3jm.exists(rest, function (currentDetail) {
        return currentDetail.row() === detail.row();
      }) ? rest : rest.concat([detail]);
    }, []).sort(function (detailA, detailB) {
      return detailA.row() - detailB.row();
    });
  };
  var uniqueColumns = function (details) {
    return $_cya8qajgjctdj3jm.foldl(details, function (rest, detail) {
      return $_cya8qajgjctdj3jm.exists(rest, function (currentDetail) {
        return currentDetail.column() === detail.column();
      }) ? rest : rest.concat([detail]);
    }, []).sort(function (detailA, detailB) {
      return detailA.column() - detailB.column();
    });
  };
  var insertRowBefore = function (grid, detail, comparator, genWrappers) {
    var example = detail.row();
    var targetIndex = detail.row();
    var newGrid = $_6ysl9xmtjctdj41b.insertRowAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
    return bundle(newGrid, targetIndex, detail.column());
  };
  var insertRowsBefore = function (grid, details, comparator, genWrappers) {
    var example = details[0].row();
    var targetIndex = details[0].row();
    var rows = uniqueRows(details);
    var newGrid = $_cya8qajgjctdj3jm.foldl(rows, function (newGrid, _row) {
      return $_6ysl9xmtjctdj41b.insertRowAt(newGrid, targetIndex, example, comparator, genWrappers.getOrInit);
    }, grid);
    return bundle(newGrid, targetIndex, details[0].column());
  };
  var insertRowAfter = function (grid, detail, comparator, genWrappers) {
    var example = detail.row();
    var targetIndex = detail.row() + detail.rowspan();
    var newGrid = $_6ysl9xmtjctdj41b.insertRowAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
    return bundle(newGrid, targetIndex, detail.column());
  };
  var insertRowsAfter = function (grid, details, comparator, genWrappers) {
    var rows = uniqueRows(details);
    var example = rows[rows.length - 1].row();
    var targetIndex = rows[rows.length - 1].row() + rows[rows.length - 1].rowspan();
    var newGrid = $_cya8qajgjctdj3jm.foldl(rows, function (newGrid, _row) {
      return $_6ysl9xmtjctdj41b.insertRowAt(newGrid, targetIndex, example, comparator, genWrappers.getOrInit);
    }, grid);
    return bundle(newGrid, targetIndex, details[0].column());
  };
  var insertColumnBefore = function (grid, detail, comparator, genWrappers) {
    var example = detail.column();
    var targetIndex = detail.column();
    var newGrid = $_6ysl9xmtjctdj41b.insertColumnAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
    return bundle(newGrid, detail.row(), targetIndex);
  };
  var insertColumnsBefore = function (grid, details, comparator, genWrappers) {
    var columns = uniqueColumns(details);
    var example = columns[0].column();
    var targetIndex = columns[0].column();
    var newGrid = $_cya8qajgjctdj3jm.foldl(columns, function (newGrid, _row) {
      return $_6ysl9xmtjctdj41b.insertColumnAt(newGrid, targetIndex, example, comparator, genWrappers.getOrInit);
    }, grid);
    return bundle(newGrid, details[0].row(), targetIndex);
  };
  var insertColumnAfter = function (grid, detail, comparator, genWrappers) {
    var example = detail.column();
    var targetIndex = detail.column() + detail.colspan();
    var newGrid = $_6ysl9xmtjctdj41b.insertColumnAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
    return bundle(newGrid, detail.row(), targetIndex);
  };
  var insertColumnsAfter = function (grid, details, comparator, genWrappers) {
    var example = details[details.length - 1].column();
    var targetIndex = details[details.length - 1].column() + details[details.length - 1].colspan();
    var columns = uniqueColumns(details);
    var newGrid = $_cya8qajgjctdj3jm.foldl(columns, function (newGrid, _row) {
      return $_6ysl9xmtjctdj41b.insertColumnAt(newGrid, targetIndex, example, comparator, genWrappers.getOrInit);
    }, grid);
    return bundle(newGrid, details[0].row(), targetIndex);
  };
  var makeRowHeader = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_d1icalmujctdj41f.replaceRow(grid, detail.row(), comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var makeColumnHeader = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_d1icalmujctdj41f.replaceColumn(grid, detail.column(), comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var unmakeRowHeader = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_d1icalmujctdj41f.replaceRow(grid, detail.row(), comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var unmakeColumnHeader = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_d1icalmujctdj41f.replaceColumn(grid, detail.column(), comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var splitCellIntoColumns = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_6ysl9xmtjctdj41b.splitCellIntoColumns(grid, detail.row(), detail.column(), comparator, genWrappers.getOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var splitCellIntoRows = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_6ysl9xmtjctdj41b.splitCellIntoRows(grid, detail.row(), detail.column(), comparator, genWrappers.getOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var eraseColumns = function (grid, details, comparator, _genWrappers) {
    var columns = uniqueColumns(details);
    var newGrid = $_6ysl9xmtjctdj41b.deleteColumnsAt(grid, columns[0].column(), columns[columns.length - 1].column());
    var cursor = elementFromGrid(newGrid, details[0].row(), details[0].column());
    return outcome(newGrid, cursor);
  };
  var eraseRows = function (grid, details, comparator, _genWrappers) {
    var rows = uniqueRows(details);
    var newGrid = $_6ysl9xmtjctdj41b.deleteRowsAt(grid, rows[0].row(), rows[rows.length - 1].row());
    var cursor = elementFromGrid(newGrid, details[0].row(), details[0].column());
    return outcome(newGrid, cursor);
  };
  var mergeCells = function (grid, mergable, comparator, _genWrappers) {
    var cells = mergable.cells();
    $_wskufm5jctdj3xg.merge(cells);
    var newGrid = $_8outfxmsjctdj416.merge(grid, mergable.bounds(), comparator, $_17hg00jijctdj3jv.constant(cells[0]));
    return outcome(newGrid, $_41pgl8jhjctdj3jt.from(cells[0]));
  };
  var unmergeCells = function (grid, unmergable, comparator, genWrappers) {
    var newGrid = $_cya8qajgjctdj3jm.foldr(unmergable, function (b, cell) {
      return $_8outfxmsjctdj416.unmerge(b, cell, comparator, genWrappers.combine(cell));
    }, grid);
    return outcome(newGrid, $_41pgl8jhjctdj3jt.from(unmergable[0]));
  };
  var pasteCells = function (grid, pasteDetails, comparator, genWrappers) {
    var gridify = function (table, generators) {
      var list = $_1x2v4fjqjctdj3ks.fromTable(table);
      var wh = $_13w1akojctdj3op.generate(list);
      return $_2fkjidmbjctdj3yr.toGrid(wh, generators, true);
    };
    var gridB = gridify(pasteDetails.clipboard(), pasteDetails.generators());
    var startAddress = $_6gworajrjctdj3ky.address(pasteDetails.row(), pasteDetails.column());
    var mergedGrid = $_5xg1ivmpjctdj40s.merge(startAddress, grid, gridB, pasteDetails.generators(), comparator);
    return mergedGrid.fold(function () {
      return outcome(grid, $_41pgl8jhjctdj3jt.some(pasteDetails.element()));
    }, function (nuGrid) {
      var cursor = elementFromGrid(nuGrid, pasteDetails.row(), pasteDetails.column());
      return outcome(nuGrid, cursor);
    });
  };
  var gridifyRows = function (rows, generators, example) {
    var pasteDetails = $_1x2v4fjqjctdj3ks.fromPastedRows(rows, example);
    var wh = $_13w1akojctdj3op.generate(pasteDetails);
    return $_2fkjidmbjctdj3yr.toGrid(wh, generators, true);
  };
  var pasteRowsBefore = function (grid, pasteDetails, comparator, genWrappers) {
    var example = grid[pasteDetails.cells[0].row()];
    var index = pasteDetails.cells[0].row();
    var gridB = gridifyRows(pasteDetails.clipboard(), pasteDetails.generators(), example);
    var mergedGrid = $_5xg1ivmpjctdj40s.insert(index, grid, gridB, pasteDetails.generators(), comparator);
    var cursor = elementFromGrid(mergedGrid, pasteDetails.cells[0].row(), pasteDetails.cells[0].column());
    return outcome(mergedGrid, cursor);
  };
  var pasteRowsAfter = function (grid, pasteDetails, comparator, genWrappers) {
    var example = grid[pasteDetails.cells[0].row()];
    var index = pasteDetails.cells[pasteDetails.cells.length - 1].row() + pasteDetails.cells[pasteDetails.cells.length - 1].rowspan();
    var gridB = gridifyRows(pasteDetails.clipboard(), pasteDetails.generators(), example);
    var mergedGrid = $_5xg1ivmpjctdj40s.insert(index, grid, gridB, pasteDetails.generators(), comparator);
    var cursor = elementFromGrid(mergedGrid, pasteDetails.cells[0].row(), pasteDetails.cells[0].column());
    return outcome(mergedGrid, cursor);
  };
  var resize = $_5yf2zlmvjctdj41j.adjustWidthTo;
  var $_7lm2zrm1jctdj3wi = {
    insertRowBefore: $_7v3lefm8jctdj3y6.run(insertRowBefore, $_7v3lefm8jctdj3y6.onCell, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    insertRowsBefore: $_7v3lefm8jctdj3y6.run(insertRowsBefore, $_7v3lefm8jctdj3y6.onCells, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    insertRowAfter: $_7v3lefm8jctdj3y6.run(insertRowAfter, $_7v3lefm8jctdj3y6.onCell, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    insertRowsAfter: $_7v3lefm8jctdj3y6.run(insertRowsAfter, $_7v3lefm8jctdj3y6.onCells, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    insertColumnBefore: $_7v3lefm8jctdj3y6.run(insertColumnBefore, $_7v3lefm8jctdj3y6.onCell, resize, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    insertColumnsBefore: $_7v3lefm8jctdj3y6.run(insertColumnsBefore, $_7v3lefm8jctdj3y6.onCells, resize, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    insertColumnAfter: $_7v3lefm8jctdj3y6.run(insertColumnAfter, $_7v3lefm8jctdj3y6.onCell, resize, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    insertColumnsAfter: $_7v3lefm8jctdj3y6.run(insertColumnsAfter, $_7v3lefm8jctdj3y6.onCells, resize, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    splitCellIntoColumns: $_7v3lefm8jctdj3y6.run(splitCellIntoColumns, $_7v3lefm8jctdj3y6.onCell, resize, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    splitCellIntoRows: $_7v3lefm8jctdj3y6.run(splitCellIntoRows, $_7v3lefm8jctdj3y6.onCell, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    eraseColumns: $_7v3lefm8jctdj3y6.run(eraseColumns, $_7v3lefm8jctdj3y6.onCells, resize, prune, $_g9a63gm2jctdj3x2.modification),
    eraseRows: $_7v3lefm8jctdj3y6.run(eraseRows, $_7v3lefm8jctdj3y6.onCells, $_17hg00jijctdj3jv.noop, prune, $_g9a63gm2jctdj3x2.modification),
    makeColumnHeader: $_7v3lefm8jctdj3y6.run(makeColumnHeader, $_7v3lefm8jctdj3y6.onCell, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.transform('row', 'th')),
    unmakeColumnHeader: $_7v3lefm8jctdj3y6.run(unmakeColumnHeader, $_7v3lefm8jctdj3y6.onCell, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.transform(null, 'td')),
    makeRowHeader: $_7v3lefm8jctdj3y6.run(makeRowHeader, $_7v3lefm8jctdj3y6.onCell, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.transform('col', 'th')),
    unmakeRowHeader: $_7v3lefm8jctdj3y6.run(unmakeRowHeader, $_7v3lefm8jctdj3y6.onCell, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.transform(null, 'td')),
    mergeCells: $_7v3lefm8jctdj3y6.run(mergeCells, $_7v3lefm8jctdj3y6.onMergable, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.merging),
    unmergeCells: $_7v3lefm8jctdj3y6.run(unmergeCells, $_7v3lefm8jctdj3y6.onUnmergable, resize, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.merging),
    pasteCells: $_7v3lefm8jctdj3y6.run(pasteCells, $_7v3lefm8jctdj3y6.onPaste, resize, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    pasteRowsBefore: $_7v3lefm8jctdj3y6.run(pasteRowsBefore, $_7v3lefm8jctdj3y6.onPasteRows, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification),
    pasteRowsAfter: $_7v3lefm8jctdj3y6.run(pasteRowsAfter, $_7v3lefm8jctdj3y6.onPasteRows, $_17hg00jijctdj3jv.noop, $_17hg00jijctdj3jv.noop, $_g9a63gm2jctdj3x2.modification)
  };

  var getBody$1 = function (editor) {
    return $_4jfq4gjvjctdj3lt.fromDom(editor.getBody());
  };
  var getIsRoot = function (editor) {
    return function (element) {
      return $_dptc54jzjctdj3ma.eq(element, getBody$1(editor));
    };
  };
  var removePxSuffix = function (size) {
    return size ? size.replace(/px$/, '') : '';
  };
  var addSizeSuffix = function (size) {
    if (/^[0-9]+$/.test(size)) {
      size += 'px';
    }
    return size;
  };
  var $_63yklhn2jctdj42q = {
    getBody: getBody$1,
    getIsRoot: getIsRoot,
    addSizeSuffix: addSizeSuffix,
    removePxSuffix: removePxSuffix
  };

  var onDirection = function (isLtr, isRtl) {
    return function (element) {
      return getDirection(element) === 'rtl' ? isRtl : isLtr;
    };
  };
  var getDirection = function (element) {
    return $_43s1eukpjctdj3p3.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };
  var $_eldx4wn4jctdj42v = {
    onDirection: onDirection,
    getDirection: getDirection
  };

  var ltr$1 = { isRtl: $_17hg00jijctdj3jv.constant(false) };
  var rtl$1 = { isRtl: $_17hg00jijctdj3jv.constant(true) };
  var directionAt = function (element) {
    var dir = $_eldx4wn4jctdj42v.getDirection(element);
    return dir === 'rtl' ? rtl$1 : ltr$1;
  };
  var $_xrgsdn3jctdj42t = { directionAt: directionAt };

  var TableActions = function (editor, lazyWire) {
    var isTableBody = function (editor) {
      return $_gao3elkhjctdj3nw.name($_63yklhn2jctdj42q.getBody(editor)) === 'table';
    };
    var lastRowGuard = function (table) {
      var size = $_4i1xy4m0jctdj3wf.getGridSize(table);
      return isTableBody(editor) === false || size.rows() > 1;
    };
    var lastColumnGuard = function (table) {
      var size = $_4i1xy4m0jctdj3wf.getGridSize(table);
      return isTableBody(editor) === false || size.columns() > 1;
    };
    var fireNewRow = function (node) {
      editor.fire('newrow', { node: node.dom() });
      return node.dom();
    };
    var fireNewCell = function (node) {
      editor.fire('newcell', { node: node.dom() });
      return node.dom();
    };
    var cloneFormatsArray;
    if (editor.settings.table_clone_elements !== false) {
      if (typeof editor.settings.table_clone_elements === 'string') {
        cloneFormatsArray = editor.settings.table_clone_elements.split(/[ ,]/);
      } else if (Array.isArray(editor.settings.table_clone_elements)) {
        cloneFormatsArray = editor.settings.table_clone_elements;
      }
    }
    var cloneFormats = $_41pgl8jhjctdj3jt.from(cloneFormatsArray);
    var execute = function (operation, guard, mutate, lazyWire) {
      return function (table, target) {
        var dataStyleCells = $_cifrp6kijctdj3ny.descendants(table, 'td[data-mce-style],th[data-mce-style]');
        $_cya8qajgjctdj3jm.each(dataStyleCells, function (cell) {
          $_fdrkf1kgjctdj3no.remove(cell, 'data-mce-style');
        });
        var wire = lazyWire();
        var doc = $_4jfq4gjvjctdj3lt.fromDom(editor.getDoc());
        var direction = TableDirection($_xrgsdn3jctdj42t.directionAt);
        var generators = $_23eg8kujctdj3pt.cellOperations(mutate, doc, cloneFormats);
        return guard(table) ? operation(wire, table, target, generators, direction).bind(function (result) {
          $_cya8qajgjctdj3jm.each(result.newRows(), function (row) {
            fireNewRow(row);
          });
          $_cya8qajgjctdj3jm.each(result.newCells(), function (cell) {
            fireNewCell(cell);
          });
          return result.cursor().map(function (cell) {
            var rng = editor.dom.createRng();
            rng.setStart(cell.dom(), 0);
            rng.setEnd(cell.dom(), 0);
            return rng;
          });
        }) : $_41pgl8jhjctdj3jt.none();
      };
    };
    var deleteRow = execute($_7lm2zrm1jctdj3wi.eraseRows, lastRowGuard, $_17hg00jijctdj3jv.noop, lazyWire);
    var deleteColumn = execute($_7lm2zrm1jctdj3wi.eraseColumns, lastColumnGuard, $_17hg00jijctdj3jv.noop, lazyWire);
    var insertRowsBefore = execute($_7lm2zrm1jctdj3wi.insertRowsBefore, $_17hg00jijctdj3jv.always, $_17hg00jijctdj3jv.noop, lazyWire);
    var insertRowsAfter = execute($_7lm2zrm1jctdj3wi.insertRowsAfter, $_17hg00jijctdj3jv.always, $_17hg00jijctdj3jv.noop, lazyWire);
    var insertColumnsBefore = execute($_7lm2zrm1jctdj3wi.insertColumnsBefore, $_17hg00jijctdj3jv.always, $_91q8iilojctdj3v3.halve, lazyWire);
    var insertColumnsAfter = execute($_7lm2zrm1jctdj3wi.insertColumnsAfter, $_17hg00jijctdj3jv.always, $_91q8iilojctdj3v3.halve, lazyWire);
    var mergeCells = execute($_7lm2zrm1jctdj3wi.mergeCells, $_17hg00jijctdj3jv.always, $_17hg00jijctdj3jv.noop, lazyWire);
    var unmergeCells = execute($_7lm2zrm1jctdj3wi.unmergeCells, $_17hg00jijctdj3jv.always, $_17hg00jijctdj3jv.noop, lazyWire);
    var pasteRowsBefore = execute($_7lm2zrm1jctdj3wi.pasteRowsBefore, $_17hg00jijctdj3jv.always, $_17hg00jijctdj3jv.noop, lazyWire);
    var pasteRowsAfter = execute($_7lm2zrm1jctdj3wi.pasteRowsAfter, $_17hg00jijctdj3jv.always, $_17hg00jijctdj3jv.noop, lazyWire);
    var pasteCells = execute($_7lm2zrm1jctdj3wi.pasteCells, $_17hg00jijctdj3jv.always, $_17hg00jijctdj3jv.noop, lazyWire);
    return {
      deleteRow: deleteRow,
      deleteColumn: deleteColumn,
      insertRowsBefore: insertRowsBefore,
      insertRowsAfter: insertRowsAfter,
      insertColumnsBefore: insertColumnsBefore,
      insertColumnsAfter: insertColumnsAfter,
      mergeCells: mergeCells,
      unmergeCells: unmergeCells,
      pasteRowsBefore: pasteRowsBefore,
      pasteRowsAfter: pasteRowsAfter,
      pasteCells: pasteCells
    };
  };

  var copyRows = function (table, target, generators) {
    var list = $_1x2v4fjqjctdj3ks.fromTable(table);
    var house = $_13w1akojctdj3op.generate(list);
    var details = $_7v3lefm8jctdj3y6.onCells(house, target);
    return details.map(function (selectedCells) {
      var grid = $_2fkjidmbjctdj3yr.toGrid(house, generators, false);
      var slicedGrid = grid.slice(selectedCells[0].row(), selectedCells[selectedCells.length - 1].row() + selectedCells[selectedCells.length - 1].rowspan());
      var slicedDetails = $_7v3lefm8jctdj3y6.toDetailList(slicedGrid, generators);
      return $_c5h8jcmejctdj3z2.copy(slicedDetails);
    });
  };
  var $_cfbwlrn6jctdj43f = { copyRows: copyRows };

  var Tools = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var Env = tinymce.util.Tools.resolve('tinymce.Env');

  var getTDTHOverallStyle = function (dom, elm, name) {
    var cells = dom.select('td,th', elm);
    var firstChildStyle;
    var checkChildren = function (firstChildStyle, elms) {
      for (var i = 0; i < elms.length; i++) {
        var currentStyle = dom.getStyle(elms[i], name);
        if (typeof firstChildStyle === 'undefined') {
          firstChildStyle = currentStyle;
        }
        if (firstChildStyle !== currentStyle) {
          return '';
        }
      }
      return firstChildStyle;
    };
    firstChildStyle = checkChildren(firstChildStyle, cells);
    return firstChildStyle;
  };
  var applyAlign = function (editor, elm, name) {
    if (name) {
      editor.formatter.apply('align' + name, {}, elm);
    }
  };
  var applyVAlign = function (editor, elm, name) {
    if (name) {
      editor.formatter.apply('valign' + name, {}, elm);
    }
  };
  var unApplyAlign = function (editor, elm) {
    Tools.each('left center right'.split(' '), function (name) {
      editor.formatter.remove('align' + name, {}, elm);
    });
  };
  var unApplyVAlign = function (editor, elm) {
    Tools.each('top middle bottom'.split(' '), function (name) {
      editor.formatter.remove('valign' + name, {}, elm);
    });
  };
  var $_7m6xqsnajctdj43q = {
    applyAlign: applyAlign,
    applyVAlign: applyVAlign,
    unApplyAlign: unApplyAlign,
    unApplyVAlign: unApplyVAlign,
    getTDTHOverallStyle: getTDTHOverallStyle
  };

  var buildListItems = function (inputList, itemCallback, startItems) {
    var appendItems = function (values, output) {
      output = output || [];
      Tools.each(values, function (item) {
        var menuItem = { text: item.text || item.title };
        if (item.menu) {
          menuItem.menu = appendItems(item.menu);
        } else {
          menuItem.value = item.value;
          if (itemCallback) {
            itemCallback(menuItem);
          }
        }
        output.push(menuItem);
      });
      return output;
    };
    return appendItems(inputList, startItems || []);
  };
  var updateStyleField = function (editor, evt) {
    var dom = editor.dom;
    var rootControl = evt.control.rootControl;
    var data = rootControl.toJSON();
    var css = dom.parseStyle(data.style);
    if (evt.control.name() === 'style') {
      rootControl.find('#borderStyle').value(css['border-style'] || '')[0].fire('select');
      rootControl.find('#borderColor').value(css['border-color'] || '')[0].fire('change');
      rootControl.find('#backgroundColor').value(css['background-color'] || '')[0].fire('change');
      rootControl.find('#width').value(css.width || '').fire('change');
      rootControl.find('#height').value(css.height || '').fire('change');
    } else {
      css['border-style'] = data.borderStyle;
      css['border-color'] = data.borderColor;
      css['background-color'] = data.backgroundColor;
      css.width = data.width ? $_63yklhn2jctdj42q.addSizeSuffix(data.width) : '';
      css.height = data.height ? $_63yklhn2jctdj42q.addSizeSuffix(data.height) : '';
    }
    rootControl.find('#style').value(dom.serializeStyle(dom.parseStyle(dom.serializeStyle(css))));
  };
  var extractAdvancedStyles = function (dom, elm) {
    var css = dom.parseStyle(dom.getAttrib(elm, 'style'));
    var data = {};
    if (css['border-style']) {
      data.borderStyle = css['border-style'];
    }
    if (css['border-color']) {
      data.borderColor = css['border-color'];
    }
    if (css['background-color']) {
      data.backgroundColor = css['background-color'];
    }
    data.style = dom.serializeStyle(css);
    return data;
  };
  var createStyleForm = function (editor) {
    var createColorPickAction = function () {
      var colorPickerCallback = editor.settings.color_picker_callback;
      if (colorPickerCallback) {
        return function (evt) {
          return colorPickerCallback.call(editor, function (value) {
            evt.control.value(value).fire('change');
          }, evt.control.value());
        };
      }
    };
    return {
      title: 'Advanced',
      type: 'form',
      defaults: { onchange: $_17hg00jijctdj3jv.curry(updateStyleField, editor) },
      items: [
        {
          label: 'Style',
          name: 'style',
          type: 'textbox'
        },
        {
          type: 'form',
          padding: 0,
          formItemDefaults: {
            layout: 'grid',
            alignH: [
              'start',
              'right'
            ]
          },
          defaults: { size: 7 },
          items: [
            {
              label: 'Border style',
              type: 'listbox',
              name: 'borderStyle',
              width: 90,
              onselect: $_17hg00jijctdj3jv.curry(updateStyleField, editor),
              values: [
                {
                  text: 'Select...',
                  value: ''
                },
                {
                  text: 'Solid',
                  value: 'solid'
                },
                {
                  text: 'Dotted',
                  value: 'dotted'
                },
                {
                  text: 'Dashed',
                  value: 'dashed'
                },
                {
                  text: 'Double',
                  value: 'double'
                },
                {
                  text: 'Groove',
                  value: 'groove'
                },
                {
                  text: 'Ridge',
                  value: 'ridge'
                },
                {
                  text: 'Inset',
                  value: 'inset'
                },
                {
                  text: 'Outset',
                  value: 'outset'
                },
                {
                  text: 'None',
                  value: 'none'
                },
                {
                  text: 'Hidden',
                  value: 'hidden'
                }
              ]
            },
            {
              label: 'Border color',
              type: 'colorbox',
              name: 'borderColor',
              onaction: createColorPickAction()
            },
            {
              label: 'Background color',
              type: 'colorbox',
              name: 'backgroundColor',
              onaction: createColorPickAction()
            }
          ]
        }
      ]
    };
  };
  var $_7h0p4znbjctdj43s = {
    createStyleForm: createStyleForm,
    buildListItems: buildListItems,
    updateStyleField: updateStyleField,
    extractAdvancedStyles: extractAdvancedStyles
  };

  function styleTDTH(dom, elm, name, value) {
    if (elm.tagName === 'TD' || elm.tagName === 'TH') {
      dom.setStyle(elm, name, value);
    } else {
      if (elm.children) {
        for (var i = 0; i < elm.children.length; i++) {
          styleTDTH(dom, elm.children[i], name, value);
        }
      }
    }
  }
  var extractDataFromElement = function (editor, tableElm) {
    var dom = editor.dom;
    var data = {
      width: dom.getStyle(tableElm, 'width') || dom.getAttrib(tableElm, 'width'),
      height: dom.getStyle(tableElm, 'height') || dom.getAttrib(tableElm, 'height'),
      cellspacing: dom.getStyle(tableElm, 'border-spacing') || dom.getAttrib(tableElm, 'cellspacing'),
      cellpadding: dom.getAttrib(tableElm, 'data-mce-cell-padding') || dom.getAttrib(tableElm, 'cellpadding') || $_7m6xqsnajctdj43q.getTDTHOverallStyle(editor.dom, tableElm, 'padding'),
      border: dom.getAttrib(tableElm, 'data-mce-border') || dom.getAttrib(tableElm, 'border') || $_7m6xqsnajctdj43q.getTDTHOverallStyle(editor.dom, tableElm, 'border'),
      borderColor: dom.getAttrib(tableElm, 'data-mce-border-color'),
      caption: !!dom.select('caption', tableElm)[0],
      class: dom.getAttrib(tableElm, 'class')
    };
    Tools.each('left center right'.split(' '), function (name) {
      if (editor.formatter.matchNode(tableElm, 'align' + name)) {
        data.align = name;
      }
    });
    if (editor.settings.table_advtab !== false) {
      Tools.extend(data, $_7h0p4znbjctdj43s.extractAdvancedStyles(dom, tableElm));
    }
    return data;
  };
  var applyDataToElement = function (editor, tableElm, data) {
    var dom = editor.dom;
    var attrs = {};
    var styles = {};
    attrs.class = data.class;
    styles.height = $_63yklhn2jctdj42q.addSizeSuffix(data.height);
    if (dom.getAttrib(tableElm, 'width') && !editor.settings.table_style_by_css) {
      attrs.width = $_63yklhn2jctdj42q.removePxSuffix(data.width);
    } else {
      styles.width = $_63yklhn2jctdj42q.addSizeSuffix(data.width);
    }
    if (editor.settings.table_style_by_css) {
      styles['border-width'] = $_63yklhn2jctdj42q.addSizeSuffix(data.border);
      styles['border-spacing'] = $_63yklhn2jctdj42q.addSizeSuffix(data.cellspacing);
      Tools.extend(attrs, {
        'data-mce-border-color': data.borderColor,
        'data-mce-cell-padding': data.cellpadding,
        'data-mce-border': data.border
      });
    } else {
      Tools.extend(attrs, {
        border: data.border,
        cellpadding: data.cellpadding,
        cellspacing: data.cellspacing
      });
    }
    if (editor.settings.table_style_by_css) {
      if (tableElm.children) {
        for (var i = 0; i < tableElm.children.length; i++) {
          styleTDTH(dom, tableElm.children[i], {
            'border-width': $_63yklhn2jctdj42q.addSizeSuffix(data.border),
            'border-color': data.borderColor,
            'padding': $_63yklhn2jctdj42q.addSizeSuffix(data.cellpadding)
          });
        }
      }
    }
    if (data.style) {
      Tools.extend(styles, dom.parseStyle(data.style));
    } else {
      styles = Tools.extend({}, dom.parseStyle(dom.getAttrib(tableElm, 'style')), styles);
    }
    attrs.style = dom.serializeStyle(styles);
    dom.setAttribs(tableElm, attrs);
  };
  var onSubmitTableForm = function (editor, tableElm, evt) {
    var dom = editor.dom;
    var captionElm;
    var data;
    $_7h0p4znbjctdj43s.updateStyleField(editor, evt);
    data = evt.control.rootControl.toJSON();
    if (data.class === false) {
      delete data.class;
    }
    editor.undoManager.transact(function () {
      if (!tableElm) {
        tableElm = $_ddzxjrljjctdj3u3.insert(editor, data.cols || 1, data.rows || 1);
      }
      applyDataToElement(editor, tableElm, data);
      captionElm = dom.select('caption', tableElm)[0];
      if (captionElm && !data.caption) {
        dom.remove(captionElm);
      }
      if (!captionElm && data.caption) {
        captionElm = dom.create('caption');
        captionElm.innerHTML = !Env.ie ? '<br data-mce-bogus="1"/>' : '\xA0';
        tableElm.insertBefore(captionElm, tableElm.firstChild);
      }
      $_7m6xqsnajctdj43q.unApplyAlign(editor, tableElm);
      if (data.align) {
        $_7m6xqsnajctdj43q.applyAlign(editor, tableElm, data.align);
      }
      editor.focus();
      editor.addVisual();
    });
  };
  var open = function (editor, isProps) {
    var dom = editor.dom;
    var tableElm, colsCtrl, rowsCtrl, classListCtrl, data = {}, generalTableForm;
    if (isProps === true) {
      tableElm = dom.getParent(editor.selection.getStart(), 'table');
      if (tableElm) {
        data = extractDataFromElement(editor, tableElm);
      }
    } else {
      colsCtrl = {
        label: 'Cols',
        name: 'cols'
      };
      rowsCtrl = {
        label: 'Rows',
        name: 'rows'
      };
    }
    if (editor.settings.table_class_list) {
      if (data.class) {
        data.class = data.class.replace(/\s*mce\-item\-table\s*/g, '');
      }
      classListCtrl = {
        name: 'class',
        type: 'listbox',
        label: 'Class',
        values: $_7h0p4znbjctdj43s.buildListItems(editor.settings.table_class_list, function (item) {
          if (item.value) {
            item.textStyle = function () {
              return editor.formatter.getCssText({
                block: 'table',
                classes: [item.value]
              });
            };
          }
        })
      };
    }
    generalTableForm = {
      type: 'form',
      layout: 'flex',
      direction: 'column',
      labelGapCalc: 'children',
      padding: 0,
      items: [
        {
          type: 'form',
          labelGapCalc: false,
          padding: 0,
          layout: 'grid',
          columns: 2,
          defaults: {
            type: 'textbox',
            maxWidth: 50
          },
          items: editor.settings.table_appearance_options !== false ? [
            colsCtrl,
            rowsCtrl,
            {
              label: 'Width',
              name: 'width',
              onchange: $_17hg00jijctdj3jv.curry($_7h0p4znbjctdj43s.updateStyleField, editor)
            },
            {
              label: 'Height',
              name: 'height',
              onchange: $_17hg00jijctdj3jv.curry($_7h0p4znbjctdj43s.updateStyleField, editor)
            },
            {
              label: 'Cell spacing',
              name: 'cellspacing'
            },
            {
              label: 'Cell padding',
              name: 'cellpadding'
            },
            {
              label: 'Border',
              name: 'border'
            },
            {
              label: 'Caption',
              name: 'caption',
              type: 'checkbox'
            }
          ] : [
            colsCtrl,
            rowsCtrl,
            {
              label: 'Width',
              name: 'width',
              onchange: $_17hg00jijctdj3jv.curry($_7h0p4znbjctdj43s.updateStyleField, editor)
            },
            {
              label: 'Height',
              name: 'height',
              onchange: $_17hg00jijctdj3jv.curry($_7h0p4znbjctdj43s.updateStyleField, editor)
            }
          ]
        },
        {
          label: 'Alignment',
          name: 'align',
          type: 'listbox',
          text: 'None',
          values: [
            {
              text: 'None',
              value: ''
            },
            {
              text: 'Left',
              value: 'left'
            },
            {
              text: 'Center',
              value: 'center'
            },
            {
              text: 'Right',
              value: 'right'
            }
          ]
        },
        classListCtrl
      ]
    };
    if (editor.settings.table_advtab !== false) {
      editor.windowManager.open({
        title: 'Table properties',
        data: data,
        bodyType: 'tabpanel',
        body: [
          {
            title: 'General',
            type: 'form',
            items: generalTableForm
          },
          $_7h0p4znbjctdj43s.createStyleForm(editor)
        ],
        onsubmit: $_17hg00jijctdj3jv.curry(onSubmitTableForm, editor, tableElm)
      });
    } else {
      editor.windowManager.open({
        title: 'Table properties',
        data: data,
        body: generalTableForm,
        onsubmit: $_17hg00jijctdj3jv.curry(onSubmitTableForm, editor, tableElm)
      });
    }
  };
  var $_y2di3n8jctdj43j = { open: open };

  var extractDataFromElement$1 = function (editor, elm) {
    var dom = editor.dom;
    var data = {
      height: dom.getStyle(elm, 'height') || dom.getAttrib(elm, 'height'),
      scope: dom.getAttrib(elm, 'scope'),
      class: dom.getAttrib(elm, 'class')
    };
    data.type = elm.parentNode.nodeName.toLowerCase();
    Tools.each('left center right'.split(' '), function (name) {
      if (editor.formatter.matchNode(elm, 'align' + name)) {
        data.align = name;
      }
    });
    if (editor.settings.table_row_advtab !== false) {
      Tools.extend(data, $_7h0p4znbjctdj43s.extractAdvancedStyles(dom, elm));
    }
    return data;
  };
  var switchRowType = function (dom, rowElm, toType) {
    var tableElm = dom.getParent(rowElm, 'table');
    var oldParentElm = rowElm.parentNode;
    var parentElm = dom.select(toType, tableElm)[0];
    if (!parentElm) {
      parentElm = dom.create(toType);
      if (tableElm.firstChild) {
        if (tableElm.firstChild.nodeName === 'CAPTION') {
          dom.insertAfter(parentElm, tableElm.firstChild);
        } else {
          tableElm.insertBefore(parentElm, tableElm.firstChild);
        }
      } else {
        tableElm.appendChild(parentElm);
      }
    }
    parentElm.appendChild(rowElm);
    if (!oldParentElm.hasChildNodes()) {
      dom.remove(oldParentElm);
    }
  };
  function onSubmitRowForm(editor, rows, evt) {
    var dom = editor.dom;
    var data;
    function setAttrib(elm, name, value) {
      if (value) {
        dom.setAttrib(elm, name, value);
      }
    }
    function setStyle(elm, name, value) {
      if (value) {
        dom.setStyle(elm, name, value);
      }
    }
    $_7h0p4znbjctdj43s.updateStyleField(editor, evt);
    data = evt.control.rootControl.toJSON();
    editor.undoManager.transact(function () {
      Tools.each(rows, function (rowElm) {
        setAttrib(rowElm, 'scope', data.scope);
        setAttrib(rowElm, 'style', data.style);
        setAttrib(rowElm, 'class', data.class);
        setStyle(rowElm, 'height', $_63yklhn2jctdj42q.addSizeSuffix(data.height));
        if (data.type !== rowElm.parentNode.nodeName.toLowerCase()) {
          switchRowType(editor.dom, rowElm, data.type);
        }
        if (rows.length === 1) {
          $_7m6xqsnajctdj43q.unApplyAlign(editor, rowElm);
        }
        if (data.align) {
          $_7m6xqsnajctdj43q.applyAlign(editor, rowElm, data.align);
        }
      });
      editor.focus();
    });
  }
  var open$1 = function (editor) {
    var dom = editor.dom;
    var tableElm, cellElm, rowElm, classListCtrl, data;
    var rows = [];
    var generalRowForm;
    tableElm = dom.getParent(editor.selection.getStart(), 'table');
    cellElm = dom.getParent(editor.selection.getStart(), 'td,th');
    Tools.each(tableElm.rows, function (row) {
      Tools.each(row.cells, function (cell) {
        if (dom.getAttrib(cell, 'data-mce-selected') || cell === cellElm) {
          rows.push(row);
          return false;
        }
      });
    });
    rowElm = rows[0];
    if (!rowElm) {
      return;
    }
    if (rows.length > 1) {
      data = {
        height: '',
        scope: '',
        class: '',
        align: '',
        type: rowElm.parentNode.nodeName.toLowerCase()
      };
    } else {
      data = extractDataFromElement$1(editor, rowElm);
    }
    if (editor.settings.table_row_class_list) {
      classListCtrl = {
        name: 'class',
        type: 'listbox',
        label: 'Class',
        values: $_7h0p4znbjctdj43s.buildListItems(editor.settings.table_row_class_list, function (item) {
          if (item.value) {
            item.textStyle = function () {
              return editor.formatter.getCssText({
                block: 'tr',
                classes: [item.value]
              });
            };
          }
        })
      };
    }
    generalRowForm = {
      type: 'form',
      columns: 2,
      padding: 0,
      defaults: { type: 'textbox' },
      items: [
        {
          type: 'listbox',
          name: 'type',
          label: 'Row type',
          text: 'Header',
          maxWidth: null,
          values: [
            {
              text: 'Header',
              value: 'thead'
            },
            {
              text: 'Body',
              value: 'tbody'
            },
            {
              text: 'Footer',
              value: 'tfoot'
            }
          ]
        },
        {
          type: 'listbox',
          name: 'align',
          label: 'Alignment',
          text: 'None',
          maxWidth: null,
          values: [
            {
              text: 'None',
              value: ''
            },
            {
              text: 'Left',
              value: 'left'
            },
            {
              text: 'Center',
              value: 'center'
            },
            {
              text: 'Right',
              value: 'right'
            }
          ]
        },
        {
          label: 'Height',
          name: 'height'
        },
        classListCtrl
      ]
    };
    if (editor.settings.table_row_advtab !== false) {
      editor.windowManager.open({
        title: 'Row properties',
        data: data,
        bodyType: 'tabpanel',
        body: [
          {
            title: 'General',
            type: 'form',
            items: generalRowForm
          },
          $_7h0p4znbjctdj43s.createStyleForm(editor)
        ],
        onsubmit: $_17hg00jijctdj3jv.curry(onSubmitRowForm, editor, rows)
      });
    } else {
      editor.windowManager.open({
        title: 'Row properties',
        data: data,
        body: generalRowForm,
        onsubmit: $_17hg00jijctdj3jv.curry(onSubmitRowForm, editor, rows)
      });
    }
  };
  var $_dce215ncjctdj43y = { open: open$1 };

  var updateStyles = function (elm, cssText) {
    elm.style.cssText += ';' + cssText;
  };
  var extractDataFromElement$2 = function (editor, elm) {
    var dom = editor.dom;
    var data = {
      width: dom.getStyle(elm, 'width') || dom.getAttrib(elm, 'width'),
      height: dom.getStyle(elm, 'height') || dom.getAttrib(elm, 'height'),
      scope: dom.getAttrib(elm, 'scope'),
      class: dom.getAttrib(elm, 'class')
    };
    data.type = elm.nodeName.toLowerCase();
    Tools.each('left center right'.split(' '), function (name) {
      if (editor.formatter.matchNode(elm, 'align' + name)) {
        data.align = name;
      }
    });
    Tools.each('top middle bottom'.split(' '), function (name) {
      if (editor.formatter.matchNode(elm, 'valign' + name)) {
        data.valign = name;
      }
    });
    if (editor.settings.table_cell_advtab !== false) {
      Tools.extend(data, $_7h0p4znbjctdj43s.extractAdvancedStyles(dom, elm));
    }
    return data;
  };
  var onSubmitCellForm = function (editor, cells, evt) {
    var dom = editor.dom;
    var data;
    function setAttrib(elm, name, value) {
      if (value) {
        dom.setAttrib(elm, name, value);
      }
    }
    function setStyle(elm, name, value) {
      if (value) {
        dom.setStyle(elm, name, value);
      }
    }
    $_7h0p4znbjctdj43s.updateStyleField(editor, evt);
    data = evt.control.rootControl.toJSON();
    editor.undoManager.transact(function () {
      Tools.each(cells, function (cellElm) {
        setAttrib(cellElm, 'scope', data.scope);
        if (cells.length === 1) {
          setAttrib(cellElm, 'style', data.style);
        } else {
          updateStyles(cellElm, data.style);
        }
        setAttrib(cellElm, 'class', data.class);
        setStyle(cellElm, 'width', $_63yklhn2jctdj42q.addSizeSuffix(data.width));
        setStyle(cellElm, 'height', $_63yklhn2jctdj42q.addSizeSuffix(data.height));
        if (data.type && cellElm.nodeName.toLowerCase() !== data.type) {
          cellElm = dom.rename(cellElm, data.type);
        }
        if (cells.length === 1) {
          $_7m6xqsnajctdj43q.unApplyAlign(editor, cellElm);
          $_7m6xqsnajctdj43q.unApplyVAlign(editor, cellElm);
        }
        if (data.align) {
          $_7m6xqsnajctdj43q.applyAlign(editor, cellElm, data.align);
        }
        if (data.valign) {
          $_7m6xqsnajctdj43q.applyVAlign(editor, cellElm, data.valign);
        }
      });
      editor.focus();
    });
  };
  var open$2 = function (editor) {
    var cellElm, data, classListCtrl, cells = [];
    cells = editor.dom.select('td[data-mce-selected],th[data-mce-selected]');
    cellElm = editor.dom.getParent(editor.selection.getStart(), 'td,th');
    if (!cells.length && cellElm) {
      cells.push(cellElm);
    }
    cellElm = cellElm || cells[0];
    if (!cellElm) {
      return;
    }
    if (cells.length > 1) {
      data = {
        width: '',
        height: '',
        scope: '',
        class: '',
        align: '',
        style: '',
        type: cellElm.nodeName.toLowerCase()
      };
    } else {
      data = extractDataFromElement$2(editor, cellElm);
    }
    if (editor.settings.table_cell_class_list) {
      classListCtrl = {
        name: 'class',
        type: 'listbox',
        label: 'Class',
        values: $_7h0p4znbjctdj43s.buildListItems(editor.settings.table_cell_class_list, function (item) {
          if (item.value) {
            item.textStyle = function () {
              return editor.formatter.getCssText({
                block: 'td',
                classes: [item.value]
              });
            };
          }
        })
      };
    }
    var generalCellForm = {
      type: 'form',
      layout: 'flex',
      direction: 'column',
      labelGapCalc: 'children',
      padding: 0,
      items: [
        {
          type: 'form',
          layout: 'grid',
          columns: 2,
          labelGapCalc: false,
          padding: 0,
          defaults: {
            type: 'textbox',
            maxWidth: 50
          },
          items: [
            {
              label: 'Width',
              name: 'width',
              onchange: $_17hg00jijctdj3jv.curry($_7h0p4znbjctdj43s.updateStyleField, editor)
            },
            {
              label: 'Height',
              name: 'height',
              onchange: $_17hg00jijctdj3jv.curry($_7h0p4znbjctdj43s.updateStyleField, editor)
            },
            {
              label: 'Cell type',
              name: 'type',
              type: 'listbox',
              text: 'None',
              minWidth: 90,
              maxWidth: null,
              values: [
                {
                  text: 'Cell',
                  value: 'td'
                },
                {
                  text: 'Header cell',
                  value: 'th'
                }
              ]
            },
            {
              label: 'Scope',
              name: 'scope',
              type: 'listbox',
              text: 'None',
              minWidth: 90,
              maxWidth: null,
              values: [
                {
                  text: 'None',
                  value: ''
                },
                {
                  text: 'Row',
                  value: 'row'
                },
                {
                  text: 'Column',
                  value: 'col'
                },
                {
                  text: 'Row group',
                  value: 'rowgroup'
                },
                {
                  text: 'Column group',
                  value: 'colgroup'
                }
              ]
            },
            {
              label: 'H Align',
              name: 'align',
              type: 'listbox',
              text: 'None',
              minWidth: 90,
              maxWidth: null,
              values: [
                {
                  text: 'None',
                  value: ''
                },
                {
                  text: 'Left',
                  value: 'left'
                },
                {
                  text: 'Center',
                  value: 'center'
                },
                {
                  text: 'Right',
                  value: 'right'
                }
              ]
            },
            {
              label: 'V Align',
              name: 'valign',
              type: 'listbox',
              text: 'None',
              minWidth: 90,
              maxWidth: null,
              values: [
                {
                  text: 'None',
                  value: ''
                },
                {
                  text: 'Top',
                  value: 'top'
                },
                {
                  text: 'Middle',
                  value: 'middle'
                },
                {
                  text: 'Bottom',
                  value: 'bottom'
                }
              ]
            }
          ]
        },
        classListCtrl
      ]
    };
    if (editor.settings.table_cell_advtab !== false) {
      editor.windowManager.open({
        title: 'Cell properties',
        bodyType: 'tabpanel',
        data: data,
        body: [
          {
            title: 'General',
            type: 'form',
            items: generalCellForm
          },
          $_7h0p4znbjctdj43s.createStyleForm(editor)
        ],
        onsubmit: $_17hg00jijctdj3jv.curry(onSubmitCellForm, editor, cells)
      });
    } else {
      editor.windowManager.open({
        title: 'Cell properties',
        data: data,
        body: generalCellForm,
        onsubmit: $_17hg00jijctdj3jv.curry(onSubmitCellForm, editor, cells)
      });
    }
  };
  var $_48kdxgndjctdj444 = { open: open$2 };

  var each$3 = Tools.each;
  var clipboardRows = $_41pgl8jhjctdj3jt.none();
  var getClipboardRows = function () {
    return clipboardRows.fold(function () {
      return;
    }, function (rows) {
      return $_cya8qajgjctdj3jm.map(rows, function (row) {
        return row.dom();
      });
    });
  };
  var setClipboardRows = function (rows) {
    var sugarRows = $_cya8qajgjctdj3jm.map(rows, $_4jfq4gjvjctdj3lt.fromDom);
    clipboardRows = $_41pgl8jhjctdj3jt.from(sugarRows);
  };
  var registerCommands = function (editor, actions, cellSelection, selections) {
    var isRoot = $_63yklhn2jctdj42q.getIsRoot(editor);
    var eraseTable = function () {
      var cell = $_4jfq4gjvjctdj3lt.fromDom(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
      var table = $_1mbzcijsjctdj3l1.table(cell, isRoot);
      table.filter($_17hg00jijctdj3jv.not(isRoot)).each(function (table) {
        var cursor = $_4jfq4gjvjctdj3lt.fromText('');
        $_a6a55bkrjctdj3pl.after(table, cursor);
        $_7l6mlmksjctdj3pm.remove(table);
        var rng = editor.dom.createRng();
        rng.setStart(cursor.dom(), 0);
        rng.setEnd(cursor.dom(), 0);
        editor.selection.setRng(rng);
      });
    };
    var getSelectionStartCell = function () {
      return $_4jfq4gjvjctdj3lt.fromDom(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
    };
    var getTableFromCell = function (cell) {
      return $_1mbzcijsjctdj3l1.table(cell, isRoot);
    };
    var actOnSelection = function (execute) {
      var cell = getSelectionStartCell();
      var table = getTableFromCell(cell);
      table.each(function (table) {
        var targets = $_8dhzxcl1jctdj3qr.forMenu(selections, table, cell);
        execute(table, targets).each(function (rng) {
          editor.selection.setRng(rng);
          editor.focus();
          cellSelection.clear(table);
        });
      });
    };
    var copyRowSelection = function (execute) {
      var cell = getSelectionStartCell();
      var table = getTableFromCell(cell);
      return table.bind(function (table) {
        var doc = $_4jfq4gjvjctdj3lt.fromDom(editor.getDoc());
        var targets = $_8dhzxcl1jctdj3qr.forMenu(selections, table, cell);
        var generators = $_23eg8kujctdj3pt.cellOperations($_17hg00jijctdj3jv.noop, doc, $_41pgl8jhjctdj3jt.none());
        return $_cfbwlrn6jctdj43f.copyRows(table, targets, generators);
      });
    };
    var pasteOnSelection = function (execute) {
      clipboardRows.each(function (rows) {
        var clonedRows = $_cya8qajgjctdj3jm.map(rows, function (row) {
          return $_43w7amkvjctdj3q9.deep(row);
        });
        var cell = getSelectionStartCell();
        var table = getTableFromCell(cell);
        table.bind(function (table) {
          var doc = $_4jfq4gjvjctdj3lt.fromDom(editor.getDoc());
          var generators = $_23eg8kujctdj3pt.paste(doc);
          var targets = $_8dhzxcl1jctdj3qr.pasteRows(selections, table, cell, clonedRows, generators);
          execute(table, targets).each(function (rng) {
            editor.selection.setRng(rng);
            editor.focus();
            cellSelection.clear(table);
          });
        });
      });
    };
    each$3({
      mceTableSplitCells: function () {
        actOnSelection(actions.unmergeCells);
      },
      mceTableMergeCells: function () {
        actOnSelection(actions.mergeCells);
      },
      mceTableInsertRowBefore: function () {
        actOnSelection(actions.insertRowsBefore);
      },
      mceTableInsertRowAfter: function () {
        actOnSelection(actions.insertRowsAfter);
      },
      mceTableInsertColBefore: function () {
        actOnSelection(actions.insertColumnsBefore);
      },
      mceTableInsertColAfter: function () {
        actOnSelection(actions.insertColumnsAfter);
      },
      mceTableDeleteCol: function () {
        actOnSelection(actions.deleteColumn);
      },
      mceTableDeleteRow: function () {
        actOnSelection(actions.deleteRow);
      },
      mceTableCutRow: function (grid) {
        clipboardRows = copyRowSelection();
        actOnSelection(actions.deleteRow);
      },
      mceTableCopyRow: function (grid) {
        clipboardRows = copyRowSelection();
      },
      mceTablePasteRowBefore: function (grid) {
        pasteOnSelection(actions.pasteRowsBefore);
      },
      mceTablePasteRowAfter: function (grid) {
        pasteOnSelection(actions.pasteRowsAfter);
      },
      mceTableDelete: eraseTable
    }, function (func, name) {
      editor.addCommand(name, func);
    });
    each$3({
      mceInsertTable: $_17hg00jijctdj3jv.curry($_y2di3n8jctdj43j.open, editor),
      mceTableProps: $_17hg00jijctdj3jv.curry($_y2di3n8jctdj43j.open, editor, true),
      mceTableRowProps: $_17hg00jijctdj3jv.curry($_dce215ncjctdj43y.open, editor),
      mceTableCellProps: $_17hg00jijctdj3jv.curry($_48kdxgndjctdj444.open, editor)
    }, function (func, name) {
      editor.addCommand(name, function (ui, val) {
        func(val);
      });
    });
  };
  var $_axulq9n5jctdj42y = {
    registerCommands: registerCommands,
    getClipboardRows: getClipboardRows,
    setClipboardRows: setClipboardRows
  };

  var only$1 = function (element) {
    var parent = $_41pgl8jhjctdj3jt.from(element.dom().documentElement).map($_4jfq4gjvjctdj3lt.fromDom).getOr(element);
    return {
      parent: $_17hg00jijctdj3jv.constant(parent),
      view: $_17hg00jijctdj3jv.constant(element),
      origin: $_17hg00jijctdj3jv.constant(r(0, 0))
    };
  };
  var detached = function (editable, chrome) {
    var origin = $_17hg00jijctdj3jv.curry($_eb1nr3lxjctdj3w8.absolute, chrome);
    return {
      parent: $_17hg00jijctdj3jv.constant(chrome),
      view: $_17hg00jijctdj3jv.constant(editable),
      origin: origin
    };
  };
  var body$1 = function (editable, chrome) {
    return {
      parent: $_17hg00jijctdj3jv.constant(chrome),
      view: $_17hg00jijctdj3jv.constant(editable),
      origin: $_17hg00jijctdj3jv.constant(r(0, 0))
    };
  };
  var $_2613ennfjctdj44r = {
    only: only$1,
    detached: detached,
    body: body$1
  };

  var Event = function (fields) {
    var struct = $_2gilnfjljctdj3kj.immutable.apply(null, fields);
    var handlers = [];
    var bind = function (handler) {
      if (handler === undefined) {
        throw 'Event bind error: undefined handler';
      }
      handlers.push(handler);
    };
    var unbind = function (handler) {
      handlers = $_cya8qajgjctdj3jm.filter(handlers, function (h) {
        return h !== handler;
      });
    };
    var trigger = function () {
      var event = struct.apply(null, arguments);
      $_cya8qajgjctdj3jm.each(handlers, function (handler) {
        handler(event);
      });
    };
    return {
      bind: bind,
      unbind: unbind,
      trigger: trigger
    };
  };

  var create = function (typeDefs) {
    var registry = $_5bka9ljkjctdj3kc.map(typeDefs, function (event) {
      return {
        bind: event.bind,
        unbind: event.unbind
      };
    });
    var trigger = $_5bka9ljkjctdj3kc.map(typeDefs, function (event) {
      return event.trigger;
    });
    return {
      registry: registry,
      trigger: trigger
    };
  };
  var $_bv0ox2nijctdj459 = { create: create };

  var mode = $_fapub0m4jctdj3xd.exactly([
    'compare',
    'extract',
    'mutate',
    'sink'
  ]);
  var sink$1 = $_fapub0m4jctdj3xd.exactly([
    'element',
    'start',
    'stop',
    'destroy'
  ]);
  var api$3 = $_fapub0m4jctdj3xd.exactly([
    'forceDrop',
    'drop',
    'move',
    'delayDrop'
  ]);
  var $_dot8vfnmjctdj46d = {
    mode: mode,
    sink: sink$1,
    api: api$3
  };

  var styles$1 = $_gdj6f7mkjctdj40c.css('ephox-dragster');
  var $_3mp7v4nojctdj46p = { resolve: styles$1.resolve };

  var Blocker = function (options) {
    var settings = $_1hzsjvm9jctdj3yh.merge({ 'layerClass': $_3mp7v4nojctdj46p.resolve('blocker') }, options);
    var div = $_4jfq4gjvjctdj3lt.fromTag('div');
    $_fdrkf1kgjctdj3no.set(div, 'role', 'presentation');
    $_43s1eukpjctdj3p3.setAll(div, {
      position: 'fixed',
      left: '0px',
      top: '0px',
      width: '100%',
      height: '100%'
    });
    $_uldqkmljctdj40d.add(div, $_3mp7v4nojctdj46p.resolve('blocker'));
    $_uldqkmljctdj40d.add(div, settings.layerClass);
    var element = function () {
      return div;
    };
    var destroy = function () {
      $_7l6mlmksjctdj3pm.remove(div);
    };
    return {
      element: element,
      destroy: destroy
    };
  };

  var mkEvent = function (target, x, y, stop, prevent, kill, raw) {
    return {
      'target': $_17hg00jijctdj3jv.constant(target),
      'x': $_17hg00jijctdj3jv.constant(x),
      'y': $_17hg00jijctdj3jv.constant(y),
      'stop': stop,
      'prevent': prevent,
      'kill': kill,
      'raw': $_17hg00jijctdj3jv.constant(raw)
    };
  };
  var handle = function (filter, handler) {
    return function (rawEvent) {
      if (!filter(rawEvent))
        return;
      var target = $_4jfq4gjvjctdj3lt.fromDom(rawEvent.target);
      var stop = function () {
        rawEvent.stopPropagation();
      };
      var prevent = function () {
        rawEvent.preventDefault();
      };
      var kill = $_17hg00jijctdj3jv.compose(prevent, stop);
      var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
      handler(evt);
    };
  };
  var binder = function (element, event, filter, handler, useCapture) {
    var wrapped = handle(filter, handler);
    element.dom().addEventListener(event, wrapped, useCapture);
    return { unbind: $_17hg00jijctdj3jv.curry(unbind, element, event, wrapped, useCapture) };
  };
  var bind$2 = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, false);
  };
  var capture$1 = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, true);
  };
  var unbind = function (element, event, handler, useCapture) {
    element.dom().removeEventListener(event, handler, useCapture);
  };
  var $_d2rhihnqjctdj46u = {
    bind: bind$2,
    capture: capture$1
  };

  var filter$1 = $_17hg00jijctdj3jv.constant(true);
  var bind$1 = function (element, event, handler) {
    return $_d2rhihnqjctdj46u.bind(element, event, filter$1, handler);
  };
  var capture = function (element, event, handler) {
    return $_d2rhihnqjctdj46u.capture(element, event, filter$1, handler);
  };
  var $_6uarfwnpjctdj46r = {
    bind: bind$1,
    capture: capture
  };

  var compare = function (old, nu) {
    return r(nu.left() - old.left(), nu.top() - old.top());
  };
  var extract$1 = function (event) {
    return $_41pgl8jhjctdj3jt.some(r(event.x(), event.y()));
  };
  var mutate$1 = function (mutation, info) {
    mutation.mutate(info.left(), info.top());
  };
  var sink = function (dragApi, settings) {
    var blocker = Blocker(settings);
    var mdown = $_6uarfwnpjctdj46r.bind(blocker.element(), 'mousedown', dragApi.forceDrop);
    var mup = $_6uarfwnpjctdj46r.bind(blocker.element(), 'mouseup', dragApi.drop);
    var mmove = $_6uarfwnpjctdj46r.bind(blocker.element(), 'mousemove', dragApi.move);
    var mout = $_6uarfwnpjctdj46r.bind(blocker.element(), 'mouseout', dragApi.delayDrop);
    var destroy = function () {
      blocker.destroy();
      mup.unbind();
      mmove.unbind();
      mout.unbind();
      mdown.unbind();
    };
    var start = function (parent) {
      $_a6a55bkrjctdj3pl.append(parent, blocker.element());
    };
    var stop = function () {
      $_7l6mlmksjctdj3pm.remove(blocker.element());
    };
    return $_dot8vfnmjctdj46d.sink({
      element: blocker.element,
      start: start,
      stop: stop,
      destroy: destroy
    });
  };
  var MouseDrag = $_dot8vfnmjctdj46d.mode({
    compare: compare,
    extract: extract$1,
    sink: sink,
    mutate: mutate$1
  });

  var InDrag = function () {
    var previous = $_41pgl8jhjctdj3jt.none();
    var reset = function () {
      previous = $_41pgl8jhjctdj3jt.none();
    };
    var update = function (mode, nu) {
      var result = previous.map(function (old) {
        return mode.compare(old, nu);
      });
      previous = $_41pgl8jhjctdj3jt.some(nu);
      return result;
    };
    var onEvent = function (event, mode) {
      var dataOption = mode.extract(event);
      dataOption.each(function (data) {
        var offset = update(mode, data);
        offset.each(function (d) {
          events.trigger.move(d);
        });
      });
    };
    var events = $_bv0ox2nijctdj459.create({ move: Event(['info']) });
    return {
      onEvent: onEvent,
      reset: reset,
      events: events.registry
    };
  };

  var NoDrag = function (anchor) {
    var onEvent = function (event, mode) {
    };
    return {
      onEvent: onEvent,
      reset: $_17hg00jijctdj3jv.noop
    };
  };

  var Movement = function () {
    var noDragState = NoDrag();
    var inDragState = InDrag();
    var dragState = noDragState;
    var on = function () {
      dragState.reset();
      dragState = inDragState;
    };
    var off = function () {
      dragState.reset();
      dragState = noDragState;
    };
    var onEvent = function (event, mode) {
      dragState.onEvent(event, mode);
    };
    var isOn = function () {
      return dragState === inDragState;
    };
    return {
      on: on,
      off: off,
      isOn: isOn,
      onEvent: onEvent,
      events: inDragState.events
    };
  };

  var adaptable = function (fn, rate) {
    var timer = null;
    var args = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
        args = null;
      }
    };
    var throttle = function () {
      args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var first$4 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var last$3 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer !== null)
        clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(null, args);
        timer = null;
        args = null;
      }, rate);
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var $_6r5o3onvjctdj47a = {
    adaptable: adaptable,
    first: first$4,
    last: last$3
  };

  var setup = function (mutation, mode, settings) {
    var active = false;
    var events = $_bv0ox2nijctdj459.create({
      start: Event([]),
      stop: Event([])
    });
    var movement = Movement();
    var drop = function () {
      sink.stop();
      if (movement.isOn()) {
        movement.off();
        events.trigger.stop();
      }
    };
    var throttledDrop = $_6r5o3onvjctdj47a.last(drop, 200);
    var go = function (parent) {
      sink.start(parent);
      movement.on();
      events.trigger.start();
    };
    var mousemove = function (event, ui) {
      throttledDrop.cancel();
      movement.onEvent(event, mode);
    };
    movement.events.move.bind(function (event) {
      mode.mutate(mutation, event.info());
    });
    var on = function () {
      active = true;
    };
    var off = function () {
      active = false;
    };
    var runIfActive = function (f) {
      return function () {
        var args = Array.prototype.slice.call(arguments, 0);
        if (active) {
          return f.apply(null, args);
        }
      };
    };
    var sink = mode.sink($_dot8vfnmjctdj46d.api({
      forceDrop: drop,
      drop: runIfActive(drop),
      move: runIfActive(mousemove),
      delayDrop: runIfActive(throttledDrop.throttle)
    }), settings);
    var destroy = function () {
      sink.destroy();
    };
    return {
      element: sink.element,
      go: go,
      on: on,
      off: off,
      destroy: destroy,
      events: events.registry
    };
  };
  var $_6mi1zbnrjctdj46x = { setup: setup };

  var transform$1 = function (mutation, options) {
    var settings = options !== undefined ? options : {};
    var mode = settings.mode !== undefined ? settings.mode : MouseDrag;
    return $_6mi1zbnrjctdj46x.setup(mutation, mode, options);
  };
  var $_2rep31nkjctdj45w = { transform: transform$1 };

  var Mutation = function () {
    var events = $_bv0ox2nijctdj459.create({
      'drag': Event([
        'xDelta',
        'yDelta'
      ])
    });
    var mutate = function (x, y) {
      events.trigger.drag(x, y);
    };
    return {
      mutate: mutate,
      events: events.registry
    };
  };

  var BarMutation = function () {
    var events = $_bv0ox2nijctdj459.create({
      drag: Event([
        'xDelta',
        'yDelta',
        'target'
      ])
    });
    var target = $_41pgl8jhjctdj3jt.none();
    var delegate = Mutation();
    delegate.events.drag.bind(function (event) {
      target.each(function (t) {
        events.trigger.drag(event.xDelta(), event.yDelta(), t);
      });
    });
    var assign = function (t) {
      target = $_41pgl8jhjctdj3jt.some(t);
    };
    var get = function () {
      return target;
    };
    return {
      assign: assign,
      get: get,
      mutate: delegate.mutate,
      events: events.registry
    };
  };

  var any = function (selector) {
    return $_8qdzookljctdj3o9.first(selector).isSome();
  };
  var ancestor$2 = function (scope, selector, isRoot) {
    return $_8qdzookljctdj3o9.ancestor(scope, selector, isRoot).isSome();
  };
  var sibling$2 = function (scope, selector) {
    return $_8qdzookljctdj3o9.sibling(scope, selector).isSome();
  };
  var child$3 = function (scope, selector) {
    return $_8qdzookljctdj3o9.child(scope, selector).isSome();
  };
  var descendant$2 = function (scope, selector) {
    return $_8qdzookljctdj3o9.descendant(scope, selector).isSome();
  };
  var closest$2 = function (scope, selector, isRoot) {
    return $_8qdzookljctdj3o9.closest(scope, selector, isRoot).isSome();
  };
  var $_ea9d1unyjctdj47l = {
    any: any,
    ancestor: ancestor$2,
    sibling: sibling$2,
    child: child$3,
    descendant: descendant$2,
    closest: closest$2
  };

  var resizeBarDragging = $_28s9vfmjjctdj40a.resolve('resizer-bar-dragging');
  var BarManager = function (wire, direction, hdirection) {
    var mutation = BarMutation();
    var resizing = $_2rep31nkjctdj45w.transform(mutation, {});
    var hoverTable = $_41pgl8jhjctdj3jt.none();
    var getResizer = function (element, type) {
      return $_41pgl8jhjctdj3jt.from($_fdrkf1kgjctdj3no.get(element, type));
    };
    mutation.events.drag.bind(function (event) {
      getResizer(event.target(), 'data-row').each(function (_dataRow) {
        var currentRow = $_cflbi5mzjctdj422.getInt(event.target(), 'top');
        $_43s1eukpjctdj3p3.set(event.target(), 'top', currentRow + event.yDelta() + 'px');
      });
      getResizer(event.target(), 'data-column').each(function (_dataCol) {
        var currentCol = $_cflbi5mzjctdj422.getInt(event.target(), 'left');
        $_43s1eukpjctdj3p3.set(event.target(), 'left', currentCol + event.xDelta() + 'px');
      });
    });
    var getDelta = function (target, direction) {
      var newX = $_cflbi5mzjctdj422.getInt(target, direction);
      var oldX = parseInt($_fdrkf1kgjctdj3no.get(target, 'data-initial-' + direction), 10);
      return newX - oldX;
    };
    resizing.events.stop.bind(function () {
      mutation.get().each(function (target) {
        hoverTable.each(function (table) {
          getResizer(target, 'data-row').each(function (row) {
            var delta = getDelta(target, 'top');
            $_fdrkf1kgjctdj3no.remove(target, 'data-initial-top');
            events.trigger.adjustHeight(table, delta, parseInt(row, 10));
          });
          getResizer(target, 'data-column').each(function (column) {
            var delta = getDelta(target, 'left');
            $_fdrkf1kgjctdj3no.remove(target, 'data-initial-left');
            events.trigger.adjustWidth(table, delta, parseInt(column, 10));
          });
          $_4t0ps8mfjctdj3zh.refresh(wire, table, hdirection, direction);
        });
      });
    });
    var handler = function (target, direction) {
      events.trigger.startAdjust();
      mutation.assign(target);
      $_fdrkf1kgjctdj3no.set(target, 'data-initial-' + direction, parseInt($_43s1eukpjctdj3p3.get(target, direction), 10));
      $_uldqkmljctdj40d.add(target, resizeBarDragging);
      $_43s1eukpjctdj3p3.set(target, 'opacity', '0.2');
      resizing.go(wire.parent());
    };
    var mousedown = $_6uarfwnpjctdj46r.bind(wire.parent(), 'mousedown', function (event) {
      if ($_4t0ps8mfjctdj3zh.isRowBar(event.target()))
        handler(event.target(), 'top');
      if ($_4t0ps8mfjctdj3zh.isColBar(event.target()))
        handler(event.target(), 'left');
    });
    var isRoot = function (e) {
      return $_dptc54jzjctdj3ma.eq(e, wire.view());
    };
    var mouseover = $_6uarfwnpjctdj46r.bind(wire.view(), 'mouseover', function (event) {
      if ($_gao3elkhjctdj3nw.name(event.target()) === 'table' || $_ea9d1unyjctdj47l.ancestor(event.target(), 'table', isRoot)) {
        hoverTable = $_gao3elkhjctdj3nw.name(event.target()) === 'table' ? $_41pgl8jhjctdj3jt.some(event.target()) : $_8qdzookljctdj3o9.ancestor(event.target(), 'table', isRoot);
        hoverTable.each(function (ht) {
          $_4t0ps8mfjctdj3zh.refresh(wire, ht, hdirection, direction);
        });
      } else if ($_75el39kkjctdj3o5.inBody(event.target())) {
        $_4t0ps8mfjctdj3zh.destroy(wire);
      }
    });
    var destroy = function () {
      mousedown.unbind();
      mouseover.unbind();
      resizing.destroy();
      $_4t0ps8mfjctdj3zh.destroy(wire);
    };
    var refresh = function (tbl) {
      $_4t0ps8mfjctdj3zh.refresh(wire, tbl, hdirection, direction);
    };
    var events = $_bv0ox2nijctdj459.create({
      adjustHeight: Event([
        'table',
        'delta',
        'row'
      ]),
      adjustWidth: Event([
        'table',
        'delta',
        'column'
      ]),
      startAdjust: Event([])
    });
    return {
      destroy: destroy,
      refresh: refresh,
      on: resizing.on,
      off: resizing.off,
      hideBars: $_17hg00jijctdj3jv.curry($_4t0ps8mfjctdj3zh.hide, wire),
      showBars: $_17hg00jijctdj3jv.curry($_4t0ps8mfjctdj3zh.show, wire),
      events: events.registry
    };
  };

  var TableResize = function (wire, vdirection) {
    var hdirection = $_9p78gglwjctdj3w0.height;
    var manager = BarManager(wire, vdirection, hdirection);
    var events = $_bv0ox2nijctdj459.create({
      beforeResize: Event(['table']),
      afterResize: Event(['table']),
      startDrag: Event([])
    });
    manager.events.adjustHeight.bind(function (event) {
      events.trigger.beforeResize(event.table());
      var delta = hdirection.delta(event.delta(), event.table());
      $_5yf2zlmvjctdj41j.adjustHeight(event.table(), delta, event.row(), hdirection);
      events.trigger.afterResize(event.table());
    });
    manager.events.startAdjust.bind(function (event) {
      events.trigger.startDrag();
    });
    manager.events.adjustWidth.bind(function (event) {
      events.trigger.beforeResize(event.table());
      var delta = vdirection.delta(event.delta(), event.table());
      $_5yf2zlmvjctdj41j.adjustWidth(event.table(), delta, event.column(), vdirection);
      events.trigger.afterResize(event.table());
    });
    return {
      on: manager.on,
      off: manager.off,
      hideBars: manager.hideBars,
      showBars: manager.showBars,
      destroy: manager.destroy,
      events: events.registry
    };
  };

  var createContainer = function () {
    var container = $_4jfq4gjvjctdj3lt.fromTag('div');
    $_43s1eukpjctdj3p3.setAll(container, {
      position: 'static',
      height: '0',
      width: '0',
      padding: '0',
      margin: '0',
      border: '0'
    });
    $_a6a55bkrjctdj3pl.append($_75el39kkjctdj3o5.body(), container);
    return container;
  };
  var get$8 = function (editor, container) {
    return editor.inline ? $_2613ennfjctdj44r.body($_63yklhn2jctdj42q.getBody(editor), createContainer()) : $_2613ennfjctdj44r.only($_4jfq4gjvjctdj3lt.fromDom(editor.getDoc()));
  };
  var remove$6 = function (editor, wire) {
    if (editor.inline) {
      $_7l6mlmksjctdj3pm.remove(wire.parent());
    }
  };
  var $_255zanzjctdj47n = {
    get: get$8,
    remove: remove$6
  };

  var ResizeHandler = function (editor) {
    var selectionRng = $_41pgl8jhjctdj3jt.none();
    var resize = $_41pgl8jhjctdj3jt.none();
    var wire = $_41pgl8jhjctdj3jt.none();
    var percentageBasedSizeRegex = /(\d+(\.\d+)?)%/;
    var startW, startRawW;
    var isTable = function (elm) {
      return elm.nodeName === 'TABLE';
    };
    var getRawWidth = function (elm) {
      return editor.dom.getStyle(elm, 'width') || editor.dom.getAttrib(elm, 'width');
    };
    var lazyResize = function () {
      return resize;
    };
    var lazyWire = function () {
      return wire.getOr($_2613ennfjctdj44r.only($_4jfq4gjvjctdj3lt.fromDom(editor.getBody())));
    };
    var destroy = function () {
      resize.each(function (sz) {
        sz.destroy();
      });
      wire.each(function (w) {
        $_255zanzjctdj47n.remove(editor, w);
      });
    };
    editor.on('init', function () {
      var direction = TableDirection($_xrgsdn3jctdj42t.directionAt);
      var rawWire = $_255zanzjctdj47n.get(editor);
      wire = $_41pgl8jhjctdj3jt.some(rawWire);
      if (editor.settings.object_resizing && editor.settings.table_resize_bars !== false && (editor.settings.object_resizing === true || editor.settings.object_resizing === 'table')) {
        var sz = TableResize(rawWire, direction);
        sz.on();
        sz.events.startDrag.bind(function (event) {
          selectionRng = $_41pgl8jhjctdj3jt.some(editor.selection.getRng());
        });
        sz.events.afterResize.bind(function (event) {
          var table = event.table();
          var dataStyleCells = $_cifrp6kijctdj3ny.descendants(table, 'td[data-mce-style],th[data-mce-style]');
          $_cya8qajgjctdj3jm.each(dataStyleCells, function (cell) {
            $_fdrkf1kgjctdj3no.remove(cell, 'data-mce-style');
          });
          selectionRng.each(function (rng) {
            editor.selection.setRng(rng);
            editor.focus();
          });
          editor.undoManager.add();
        });
        resize = $_41pgl8jhjctdj3jt.some(sz);
      }
    });
    editor.on('ObjectResizeStart', function (e) {
      if (isTable(e.target)) {
        startW = e.width;
        startRawW = getRawWidth(e.target);
      }
    });
    editor.on('ObjectResized', function (e) {
      if (isTable(e.target)) {
        var table = e.target;
        if (percentageBasedSizeRegex.test(startRawW)) {
          var percentW = parseFloat(percentageBasedSizeRegex.exec(startRawW)[1]);
          var targetPercentW = e.width * percentW / startW;
          editor.dom.setStyle(table, 'width', targetPercentW + '%');
        } else {
          var newCellSizes_1 = [];
          Tools.each(table.rows, function (row) {
            Tools.each(row.cells, function (cell) {
              var width = editor.dom.getStyle(cell, 'width', true);
              newCellSizes_1.push({
                cell: cell,
                width: width
              });
            });
          });
          Tools.each(newCellSizes_1, function (newCellSize) {
            editor.dom.setStyle(newCellSize.cell, 'width', newCellSize.width);
            editor.dom.setAttrib(newCellSize.cell, 'width', null);
          });
        }
      }
    });
    return {
      lazyResize: lazyResize,
      lazyWire: lazyWire,
      destroy: destroy
    };
  };

  var none$2 = function (current) {
    return folder$1(function (n, f, m, l) {
      return n(current);
    });
  };
  var first$5 = function (current) {
    return folder$1(function (n, f, m, l) {
      return f(current);
    });
  };
  var middle$1 = function (current, target) {
    return folder$1(function (n, f, m, l) {
      return m(current, target);
    });
  };
  var last$4 = function (current) {
    return folder$1(function (n, f, m, l) {
      return l(current);
    });
  };
  var folder$1 = function (fold) {
    return { fold: fold };
  };
  var $_5cudjho2jctdj48g = {
    none: none$2,
    first: first$5,
    middle: middle$1,
    last: last$4
  };

  var detect$4 = function (current, isRoot) {
    return $_1mbzcijsjctdj3l1.table(current, isRoot).bind(function (table) {
      var all = $_1mbzcijsjctdj3l1.cells(table);
      var index = $_cya8qajgjctdj3jm.findIndex(all, function (x) {
        return $_dptc54jzjctdj3ma.eq(current, x);
      });
      return index.map(function (ind) {
        return {
          index: $_17hg00jijctdj3jv.constant(ind),
          all: $_17hg00jijctdj3jv.constant(all)
        };
      });
    });
  };
  var next = function (current, isRoot) {
    var detection = detect$4(current, isRoot);
    return detection.fold(function () {
      return $_5cudjho2jctdj48g.none(current);
    }, function (info) {
      return info.index() + 1 < info.all().length ? $_5cudjho2jctdj48g.middle(current, info.all()[info.index() + 1]) : $_5cudjho2jctdj48g.last(current);
    });
  };
  var prev = function (current, isRoot) {
    var detection = detect$4(current, isRoot);
    return detection.fold(function () {
      return $_5cudjho2jctdj48g.none();
    }, function (info) {
      return info.index() - 1 >= 0 ? $_5cudjho2jctdj48g.middle(current, info.all()[info.index() - 1]) : $_5cudjho2jctdj48g.first(current);
    });
  };
  var $_6eahlro1jctdj48b = {
    next: next,
    prev: prev
  };

  var adt = $_3ek5yplijctdj3u0.generate([
    { 'before': ['element'] },
    {
      'on': [
        'element',
        'offset'
      ]
    },
    { after: ['element'] }
  ]);
  var cata$1 = function (subject, onBefore, onOn, onAfter) {
    return subject.fold(onBefore, onOn, onAfter);
  };
  var getStart$1 = function (situ) {
    return situ.fold($_17hg00jijctdj3jv.identity, $_17hg00jijctdj3jv.identity, $_17hg00jijctdj3jv.identity);
  };
  var $_c4mk9ko4jctdj48l = {
    before: adt.before,
    on: adt.on,
    after: adt.after,
    cata: cata$1,
    getStart: getStart$1
  };

  var type$2 = $_3ek5yplijctdj3u0.generate([
    { domRange: ['rng'] },
    {
      relative: [
        'startSitu',
        'finishSitu'
      ]
    },
    {
      exact: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var range$2 = $_2gilnfjljctdj3kj.immutable('start', 'soffset', 'finish', 'foffset');
  var exactFromRange = function (simRange) {
    return type$2.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
  };
  var getStart = function (selection) {
    return selection.match({
      domRange: function (rng) {
        return $_4jfq4gjvjctdj3lt.fromDom(rng.startContainer);
      },
      relative: function (startSitu, finishSitu) {
        return $_c4mk9ko4jctdj48l.getStart(startSitu);
      },
      exact: function (start, soffset, finish, foffset) {
        return start;
      }
    });
  };
  var getWin = function (selection) {
    var start = getStart(selection);
    return $_4vj6djjxjctdj3lz.defaultView(start);
  };
  var $_f3us1oo3jctdj48i = {
    domRange: type$2.domRange,
    relative: type$2.relative,
    exact: type$2.exact,
    exactFromRange: exactFromRange,
    range: range$2,
    getWin: getWin
  };

  var makeRange = function (start, soffset, finish, foffset) {
    var doc = $_4vj6djjxjctdj3lz.owner(start);
    var rng = doc.dom().createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var commonAncestorContainer = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    return $_4jfq4gjvjctdj3lt.fromDom(r.commonAncestorContainer);
  };
  var after$2 = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    var same = $_dptc54jzjctdj3ma.eq(start, finish) && soffset === foffset;
    return r.collapsed && !same;
  };
  var $_67iz6to6jctdj48u = {
    after: after$2,
    commonAncestorContainer: commonAncestorContainer
  };

  var fromElements = function (elements, scope) {
    var doc = scope || document;
    var fragment = doc.createDocumentFragment();
    $_cya8qajgjctdj3jm.each(elements, function (element) {
      fragment.appendChild(element.dom());
    });
    return $_4jfq4gjvjctdj3lt.fromDom(fragment);
  };
  var $_exh55so7jctdj491 = { fromElements: fromElements };

  var selectNodeContents = function (win, element) {
    var rng = win.document.createRange();
    selectNodeContentsUsing(rng, element);
    return rng;
  };
  var selectNodeContentsUsing = function (rng, element) {
    rng.selectNodeContents(element.dom());
  };
  var isWithin$1 = function (outerRange, innerRange) {
    return innerRange.compareBoundaryPoints(outerRange.END_TO_START, outerRange) < 1 && innerRange.compareBoundaryPoints(outerRange.START_TO_END, outerRange) > -1;
  };
  var create$1 = function (win) {
    return win.document.createRange();
  };
  var setStart = function (rng, situ) {
    situ.fold(function (e) {
      rng.setStartBefore(e.dom());
    }, function (e, o) {
      rng.setStart(e.dom(), o);
    }, function (e) {
      rng.setStartAfter(e.dom());
    });
  };
  var setFinish = function (rng, situ) {
    situ.fold(function (e) {
      rng.setEndBefore(e.dom());
    }, function (e, o) {
      rng.setEnd(e.dom(), o);
    }, function (e) {
      rng.setEndAfter(e.dom());
    });
  };
  var replaceWith = function (rng, fragment) {
    deleteContents(rng);
    rng.insertNode(fragment.dom());
  };
  var relativeToNative = function (win, startSitu, finishSitu) {
    var range = win.document.createRange();
    setStart(range, startSitu);
    setFinish(range, finishSitu);
    return range;
  };
  var exactToNative = function (win, start, soffset, finish, foffset) {
    var rng = win.document.createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var deleteContents = function (rng) {
    rng.deleteContents();
  };
  var cloneFragment = function (rng) {
    var fragment = rng.cloneContents();
    return $_4jfq4gjvjctdj3lt.fromDom(fragment);
  };
  var toRect = function (rect) {
    return {
      left: $_17hg00jijctdj3jv.constant(rect.left),
      top: $_17hg00jijctdj3jv.constant(rect.top),
      right: $_17hg00jijctdj3jv.constant(rect.right),
      bottom: $_17hg00jijctdj3jv.constant(rect.bottom),
      width: $_17hg00jijctdj3jv.constant(rect.width),
      height: $_17hg00jijctdj3jv.constant(rect.height)
    };
  };
  var getFirstRect$1 = function (rng) {
    var rects = rng.getClientRects();
    var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? $_41pgl8jhjctdj3jt.some(rect).map(toRect) : $_41pgl8jhjctdj3jt.none();
  };
  var getBounds$2 = function (rng) {
    var rect = rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? $_41pgl8jhjctdj3jt.some(rect).map(toRect) : $_41pgl8jhjctdj3jt.none();
  };
  var toString = function (rng) {
    return rng.toString();
  };
  var $_7c56kqo8jctdj494 = {
    create: create$1,
    replaceWith: replaceWith,
    selectNodeContents: selectNodeContents,
    selectNodeContentsUsing: selectNodeContentsUsing,
    relativeToNative: relativeToNative,
    exactToNative: exactToNative,
    deleteContents: deleteContents,
    cloneFragment: cloneFragment,
    getFirstRect: getFirstRect$1,
    getBounds: getBounds$2,
    isWithin: isWithin$1,
    toString: toString
  };

  var adt$1 = $_3ek5yplijctdj3u0.generate([
    {
      ltr: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    },
    {
      rtl: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var fromRange = function (win, type, range) {
    return type($_4jfq4gjvjctdj3lt.fromDom(range.startContainer), range.startOffset, $_4jfq4gjvjctdj3lt.fromDom(range.endContainer), range.endOffset);
  };
  var getRanges = function (win, selection) {
    return selection.match({
      domRange: function (rng) {
        return {
          ltr: $_17hg00jijctdj3jv.constant(rng),
          rtl: $_41pgl8jhjctdj3jt.none
        };
      },
      relative: function (startSitu, finishSitu) {
        return {
          ltr: $_frqvtyk5jctdj3mw.cached(function () {
            return $_7c56kqo8jctdj494.relativeToNative(win, startSitu, finishSitu);
          }),
          rtl: $_frqvtyk5jctdj3mw.cached(function () {
            return $_41pgl8jhjctdj3jt.some($_7c56kqo8jctdj494.relativeToNative(win, finishSitu, startSitu));
          })
        };
      },
      exact: function (start, soffset, finish, foffset) {
        return {
          ltr: $_frqvtyk5jctdj3mw.cached(function () {
            return $_7c56kqo8jctdj494.exactToNative(win, start, soffset, finish, foffset);
          }),
          rtl: $_frqvtyk5jctdj3mw.cached(function () {
            return $_41pgl8jhjctdj3jt.some($_7c56kqo8jctdj494.exactToNative(win, finish, foffset, start, soffset));
          })
        };
      }
    });
  };
  var doDiagnose = function (win, ranges) {
    var rng = ranges.ltr();
    if (rng.collapsed) {
      var reversed = ranges.rtl().filter(function (rev) {
        return rev.collapsed === false;
      });
      return reversed.map(function (rev) {
        return adt$1.rtl($_4jfq4gjvjctdj3lt.fromDom(rev.endContainer), rev.endOffset, $_4jfq4gjvjctdj3lt.fromDom(rev.startContainer), rev.startOffset);
      }).getOrThunk(function () {
        return fromRange(win, adt$1.ltr, rng);
      });
    } else {
      return fromRange(win, adt$1.ltr, rng);
    }
  };
  var diagnose = function (win, selection) {
    var ranges = getRanges(win, selection);
    return doDiagnose(win, ranges);
  };
  var asLtrRange = function (win, selection) {
    var diagnosis = diagnose(win, selection);
    return diagnosis.match({
      ltr: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(start.dom(), soffset);
        rng.setEnd(finish.dom(), foffset);
        return rng;
      },
      rtl: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(finish.dom(), foffset);
        rng.setEnd(start.dom(), soffset);
        return rng;
      }
    });
  };
  var $_czwlzuo9jctdj49a = {
    ltr: adt$1.ltr,
    rtl: adt$1.rtl,
    diagnose: diagnose,
    asLtrRange: asLtrRange
  };

  var searchForPoint = function (rectForOffset, x, y, maxX, length) {
    if (length === 0)
      return 0;
    else if (x === maxX)
      return length - 1;
    var xDelta = maxX;
    for (var i = 1; i < length; i++) {
      var rect = rectForOffset(i);
      var curDeltaX = Math.abs(x - rect.left);
      if (y > rect.bottom) {
      } else if (y < rect.top || curDeltaX > xDelta) {
        return i - 1;
      } else {
        xDelta = curDeltaX;
      }
    }
    return 0;
  };
  var inRect = function (rect, x, y) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };
  var $_1iymtxocjctdj49p = {
    inRect: inRect,
    searchForPoint: searchForPoint
  };

  var locateOffset = function (doc, textnode, x, y, rect) {
    var rangeForOffset = function (offset) {
      var r = doc.dom().createRange();
      r.setStart(textnode.dom(), offset);
      r.collapse(true);
      return r;
    };
    var rectForOffset = function (offset) {
      var r = rangeForOffset(offset);
      return r.getBoundingClientRect();
    };
    var length = $_4wxri4kyjctdj3qj.get(textnode).length;
    var offset = $_1iymtxocjctdj49p.searchForPoint(rectForOffset, x, y, rect.right, length);
    return rangeForOffset(offset);
  };
  var locate$1 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rects = r.getClientRects();
    var foundRect = $_5ravs6majctdj3yj.findMap(rects, function (rect) {
      return $_1iymtxocjctdj49p.inRect(rect, x, y) ? $_41pgl8jhjctdj3jt.some(rect) : $_41pgl8jhjctdj3jt.none();
    });
    return foundRect.map(function (rect) {
      return locateOffset(doc, node, x, y, rect);
    });
  };
  var $_2rf4feodjctdj49r = { locate: locate$1 };

  var searchInChildren = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    var nodes = $_4vj6djjxjctdj3lz.children(node);
    return $_5ravs6majctdj3yj.findMap(nodes, function (n) {
      r.selectNode(n.dom());
      return $_1iymtxocjctdj49p.inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : $_41pgl8jhjctdj3jt.none();
    });
  };
  var locateNode = function (doc, node, x, y) {
    var locator = $_gao3elkhjctdj3nw.isText(node) ? $_2rf4feodjctdj49r.locate : searchInChildren;
    return locator(doc, node, x, y);
  };
  var locate = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return locateNode(doc, node, boundedX, boundedY);
  };
  var $_7trozuobjctdj49l = { locate: locate };

  var COLLAPSE_TO_LEFT = true;
  var COLLAPSE_TO_RIGHT = false;
  var getCollapseDirection = function (rect, x) {
    return x - rect.left < rect.right - x ? COLLAPSE_TO_LEFT : COLLAPSE_TO_RIGHT;
  };
  var createCollapsedNode = function (doc, target, collapseDirection) {
    var r = doc.dom().createRange();
    r.selectNode(target.dom());
    r.collapse(collapseDirection);
    return r;
  };
  var locateInElement = function (doc, node, x) {
    var cursorRange = doc.dom().createRange();
    cursorRange.selectNode(node.dom());
    var rect = cursorRange.getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    var f = collapseDirection === COLLAPSE_TO_LEFT ? $_bc2n4jkwjctdj3qd.first : $_bc2n4jkwjctdj3qd.last;
    return f(node).map(function (target) {
      return createCollapsedNode(doc, target, collapseDirection);
    });
  };
  var locateInEmpty = function (doc, node, x) {
    var rect = node.dom().getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    return $_41pgl8jhjctdj3jt.some(createCollapsedNode(doc, node, collapseDirection));
  };
  var search = function (doc, node, x) {
    var f = $_4vj6djjxjctdj3lz.children(node).length === 0 ? locateInEmpty : locateInElement;
    return f(doc, node, x);
  };
  var $_1ow4u8oejctdj49u = { search: search };

  var caretPositionFromPoint = function (doc, x, y) {
    return $_41pgl8jhjctdj3jt.from(doc.dom().caretPositionFromPoint(x, y)).bind(function (pos) {
      if (pos.offsetNode === null)
        return $_41pgl8jhjctdj3jt.none();
      var r = doc.dom().createRange();
      r.setStart(pos.offsetNode, pos.offset);
      r.collapse();
      return $_41pgl8jhjctdj3jt.some(r);
    });
  };
  var caretRangeFromPoint = function (doc, x, y) {
    return $_41pgl8jhjctdj3jt.from(doc.dom().caretRangeFromPoint(x, y));
  };
  var searchTextNodes = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return $_7trozuobjctdj49l.locate(doc, node, boundedX, boundedY);
  };
  var searchFromPoint = function (doc, x, y) {
    return $_4jfq4gjvjctdj3lt.fromPoint(doc, x, y).bind(function (elem) {
      var fallback = function () {
        return $_1ow4u8oejctdj49u.search(doc, elem, x);
      };
      return $_4vj6djjxjctdj3lz.children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
    });
  };
  var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
  var fromPoint$1 = function (win, x, y) {
    var doc = $_4jfq4gjvjctdj3lt.fromDom(win.document);
    return availableSearch(doc, x, y).map(function (rng) {
      return $_f3us1oo3jctdj48i.range($_4jfq4gjvjctdj3lt.fromDom(rng.startContainer), rng.startOffset, $_4jfq4gjvjctdj3lt.fromDom(rng.endContainer), rng.endOffset);
    });
  };
  var $_f4ldfeoajctdj49i = { fromPoint: fromPoint$1 };

  var withinContainer = function (win, ancestor, outerRange, selector) {
    var innerRange = $_7c56kqo8jctdj494.create(win);
    var self = $_659m8xjujctdj3li.is(ancestor, selector) ? [ancestor] : [];
    var elements = self.concat($_cifrp6kijctdj3ny.descendants(ancestor, selector));
    return $_cya8qajgjctdj3jm.filter(elements, function (elem) {
      $_7c56kqo8jctdj494.selectNodeContentsUsing(innerRange, elem);
      return $_7c56kqo8jctdj494.isWithin(outerRange, innerRange);
    });
  };
  var find$3 = function (win, selection, selector) {
    var outerRange = $_czwlzuo9jctdj49a.asLtrRange(win, selection);
    var ancestor = $_4jfq4gjvjctdj3lt.fromDom(outerRange.commonAncestorContainer);
    return $_gao3elkhjctdj3nw.isElement(ancestor) ? withinContainer(win, ancestor, outerRange, selector) : [];
  };
  var $_e0j66eofjctdj49x = { find: find$3 };

  var beforeSpecial = function (element, offset) {
    var name = $_gao3elkhjctdj3nw.name(element);
    if ('input' === name)
      return $_c4mk9ko4jctdj48l.after(element);
    else if (!$_cya8qajgjctdj3jm.contains([
        'br',
        'img'
      ], name))
      return $_c4mk9ko4jctdj48l.on(element, offset);
    else
      return offset === 0 ? $_c4mk9ko4jctdj48l.before(element) : $_c4mk9ko4jctdj48l.after(element);
  };
  var preprocessRelative = function (startSitu, finishSitu) {
    var start = startSitu.fold($_c4mk9ko4jctdj48l.before, beforeSpecial, $_c4mk9ko4jctdj48l.after);
    var finish = finishSitu.fold($_c4mk9ko4jctdj48l.before, beforeSpecial, $_c4mk9ko4jctdj48l.after);
    return $_f3us1oo3jctdj48i.relative(start, finish);
  };
  var preprocessExact = function (start, soffset, finish, foffset) {
    var startSitu = beforeSpecial(start, soffset);
    var finishSitu = beforeSpecial(finish, foffset);
    return $_f3us1oo3jctdj48i.relative(startSitu, finishSitu);
  };
  var preprocess = function (selection) {
    return selection.match({
      domRange: function (rng) {
        var start = $_4jfq4gjvjctdj3lt.fromDom(rng.startContainer);
        var finish = $_4jfq4gjvjctdj3lt.fromDom(rng.endContainer);
        return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
      },
      relative: preprocessRelative,
      exact: preprocessExact
    });
  };
  var $_6n8fp0ogjctdj4a1 = {
    beforeSpecial: beforeSpecial,
    preprocess: preprocess,
    preprocessRelative: preprocessRelative,
    preprocessExact: preprocessExact
  };

  var doSetNativeRange = function (win, rng) {
    $_41pgl8jhjctdj3jt.from(win.getSelection()).each(function (selection) {
      selection.removeAllRanges();
      selection.addRange(rng);
    });
  };
  var doSetRange = function (win, start, soffset, finish, foffset) {
    var rng = $_7c56kqo8jctdj494.exactToNative(win, start, soffset, finish, foffset);
    doSetNativeRange(win, rng);
  };
  var findWithin = function (win, selection, selector) {
    return $_e0j66eofjctdj49x.find(win, selection, selector);
  };
  var setRangeFromRelative = function (win, relative) {
    return $_czwlzuo9jctdj49a.diagnose(win, relative).match({
      ltr: function (start, soffset, finish, foffset) {
        doSetRange(win, start, soffset, finish, foffset);
      },
      rtl: function (start, soffset, finish, foffset) {
        var selection = win.getSelection();
        if (selection.extend) {
          selection.collapse(start.dom(), soffset);
          selection.extend(finish.dom(), foffset);
        } else {
          doSetRange(win, finish, foffset, start, soffset);
        }
      }
    });
  };
  var setExact = function (win, start, soffset, finish, foffset) {
    var relative = $_6n8fp0ogjctdj4a1.preprocessExact(start, soffset, finish, foffset);
    setRangeFromRelative(win, relative);
  };
  var setRelative = function (win, startSitu, finishSitu) {
    var relative = $_6n8fp0ogjctdj4a1.preprocessRelative(startSitu, finishSitu);
    setRangeFromRelative(win, relative);
  };
  var toNative = function (selection) {
    var win = $_f3us1oo3jctdj48i.getWin(selection).dom();
    var getDomRange = function (start, soffset, finish, foffset) {
      return $_7c56kqo8jctdj494.exactToNative(win, start, soffset, finish, foffset);
    };
    var filtered = $_6n8fp0ogjctdj4a1.preprocess(selection);
    return $_czwlzuo9jctdj49a.diagnose(win, filtered).match({
      ltr: getDomRange,
      rtl: getDomRange
    });
  };
  var readRange = function (selection) {
    if (selection.rangeCount > 0) {
      var firstRng = selection.getRangeAt(0);
      var lastRng = selection.getRangeAt(selection.rangeCount - 1);
      return $_41pgl8jhjctdj3jt.some($_f3us1oo3jctdj48i.range($_4jfq4gjvjctdj3lt.fromDom(firstRng.startContainer), firstRng.startOffset, $_4jfq4gjvjctdj3lt.fromDom(lastRng.endContainer), lastRng.endOffset));
    } else {
      return $_41pgl8jhjctdj3jt.none();
    }
  };
  var doGetExact = function (selection) {
    var anchorNode = $_4jfq4gjvjctdj3lt.fromDom(selection.anchorNode);
    var focusNode = $_4jfq4gjvjctdj3lt.fromDom(selection.focusNode);
    return $_67iz6to6jctdj48u.after(anchorNode, selection.anchorOffset, focusNode, selection.focusOffset) ? $_41pgl8jhjctdj3jt.some($_f3us1oo3jctdj48i.range($_4jfq4gjvjctdj3lt.fromDom(selection.anchorNode), selection.anchorOffset, $_4jfq4gjvjctdj3lt.fromDom(selection.focusNode), selection.focusOffset)) : readRange(selection);
  };
  var setToElement = function (win, element) {
    var rng = $_7c56kqo8jctdj494.selectNodeContents(win, element);
    doSetNativeRange(win, rng);
  };
  var forElement = function (win, element) {
    var rng = $_7c56kqo8jctdj494.selectNodeContents(win, element);
    return $_f3us1oo3jctdj48i.range($_4jfq4gjvjctdj3lt.fromDom(rng.startContainer), rng.startOffset, $_4jfq4gjvjctdj3lt.fromDom(rng.endContainer), rng.endOffset);
  };
  var getExact = function (win) {
    var selection = win.getSelection();
    return selection.rangeCount > 0 ? doGetExact(selection) : $_41pgl8jhjctdj3jt.none();
  };
  var get$9 = function (win) {
    return getExact(win).map(function (range) {
      return $_f3us1oo3jctdj48i.exact(range.start(), range.soffset(), range.finish(), range.foffset());
    });
  };
  var getFirstRect = function (win, selection) {
    var rng = $_czwlzuo9jctdj49a.asLtrRange(win, selection);
    return $_7c56kqo8jctdj494.getFirstRect(rng);
  };
  var getBounds$1 = function (win, selection) {
    var rng = $_czwlzuo9jctdj49a.asLtrRange(win, selection);
    return $_7c56kqo8jctdj494.getBounds(rng);
  };
  var getAtPoint = function (win, x, y) {
    return $_f4ldfeoajctdj49i.fromPoint(win, x, y);
  };
  var getAsString = function (win, selection) {
    var rng = $_czwlzuo9jctdj49a.asLtrRange(win, selection);
    return $_7c56kqo8jctdj494.toString(rng);
  };
  var clear$1 = function (win) {
    var selection = win.getSelection();
    selection.removeAllRanges();
  };
  var clone$2 = function (win, selection) {
    var rng = $_czwlzuo9jctdj49a.asLtrRange(win, selection);
    return $_7c56kqo8jctdj494.cloneFragment(rng);
  };
  var replace$1 = function (win, selection, elements) {
    var rng = $_czwlzuo9jctdj49a.asLtrRange(win, selection);
    var fragment = $_exh55so7jctdj491.fromElements(elements, win.document);
    $_7c56kqo8jctdj494.replaceWith(rng, fragment);
  };
  var deleteAt = function (win, selection) {
    var rng = $_czwlzuo9jctdj49a.asLtrRange(win, selection);
    $_7c56kqo8jctdj494.deleteContents(rng);
  };
  var isCollapsed = function (start, soffset, finish, foffset) {
    return $_dptc54jzjctdj3ma.eq(start, finish) && soffset === foffset;
  };
  var $_ey8pu9o5jctdj48p = {
    setExact: setExact,
    getExact: getExact,
    get: get$9,
    setRelative: setRelative,
    toNative: toNative,
    setToElement: setToElement,
    clear: clear$1,
    clone: clone$2,
    replace: replace$1,
    deleteAt: deleteAt,
    forElement: forElement,
    getFirstRect: getFirstRect,
    getBounds: getBounds$1,
    getAtPoint: getAtPoint,
    findWithin: findWithin,
    getAsString: getAsString,
    isCollapsed: isCollapsed
  };

  var VK = tinymce.util.Tools.resolve('tinymce.util.VK');

  var forward = function (editor, isRoot, cell, lazyWire) {
    return go(editor, isRoot, $_6eahlro1jctdj48b.next(cell), lazyWire);
  };
  var backward = function (editor, isRoot, cell, lazyWire) {
    return go(editor, isRoot, $_6eahlro1jctdj48b.prev(cell), lazyWire);
  };
  var getCellFirstCursorPosition = function (editor, cell) {
    var selection = $_f3us1oo3jctdj48i.exact(cell, 0, cell, 0);
    return $_ey8pu9o5jctdj48p.toNative(selection);
  };
  var getNewRowCursorPosition = function (editor, table) {
    var rows = $_cifrp6kijctdj3ny.descendants(table, 'tr');
    return $_cya8qajgjctdj3jm.last(rows).bind(function (last) {
      return $_8qdzookljctdj3o9.descendant(last, 'td,th').map(function (first) {
        return getCellFirstCursorPosition(editor, first);
      });
    });
  };
  var go = function (editor, isRoot, cell, actions, lazyWire) {
    return cell.fold($_41pgl8jhjctdj3jt.none, $_41pgl8jhjctdj3jt.none, function (current, next) {
      return $_bc2n4jkwjctdj3qd.first(next).map(function (cell) {
        return getCellFirstCursorPosition(editor, cell);
      });
    }, function (current) {
      return $_1mbzcijsjctdj3l1.table(current, isRoot).bind(function (table) {
        var targets = $_8dhzxcl1jctdj3qr.noMenu(current);
        editor.undoManager.transact(function () {
          actions.insertRowsAfter(table, targets);
        });
        return getNewRowCursorPosition(editor, table);
      });
    });
  };
  var rootElements = [
    'table',
    'li',
    'dl'
  ];
  var handle$1 = function (event, editor, actions, lazyWire) {
    if (event.keyCode === VK.TAB) {
      var body_1 = $_63yklhn2jctdj42q.getBody(editor);
      var isRoot_1 = function (element) {
        var name = $_gao3elkhjctdj3nw.name(element);
        return $_dptc54jzjctdj3ma.eq(element, body_1) || $_cya8qajgjctdj3jm.contains(rootElements, name);
      };
      var rng = editor.selection.getRng();
      if (rng.collapsed) {
        var start = $_4jfq4gjvjctdj3lt.fromDom(rng.startContainer);
        $_1mbzcijsjctdj3l1.cell(start, isRoot_1).each(function (cell) {
          event.preventDefault();
          var navigation = event.shiftKey ? backward : forward;
          var rng = navigation(editor, isRoot_1, cell, actions, lazyWire);
          rng.each(function (range) {
            editor.selection.setRng(range);
          });
        });
      }
    }
  };
  var $_8h5fcbo0jctdj47v = { handle: handle$1 };

  var response = $_2gilnfjljctdj3kj.immutable('selection', 'kill');
  var $_d5j1pjokjctdj4az = { response: response };

  var isKey = function (key) {
    return function (keycode) {
      return keycode === key;
    };
  };
  var isUp = isKey(38);
  var isDown = isKey(40);
  var isNavigation = function (keycode) {
    return keycode >= 37 && keycode <= 40;
  };
  var $_dubdd6oljctdj4b1 = {
    ltr: {
      isBackward: isKey(37),
      isForward: isKey(39)
    },
    rtl: {
      isBackward: isKey(39),
      isForward: isKey(37)
    },
    isUp: isUp,
    isDown: isDown,
    isNavigation: isNavigation
  };

  var convertToRange = function (win, selection) {
    var rng = $_czwlzuo9jctdj49a.asLtrRange(win, selection);
    return {
      start: $_17hg00jijctdj3jv.constant($_4jfq4gjvjctdj3lt.fromDom(rng.startContainer)),
      soffset: $_17hg00jijctdj3jv.constant(rng.startOffset),
      finish: $_17hg00jijctdj3jv.constant($_4jfq4gjvjctdj3lt.fromDom(rng.endContainer)),
      foffset: $_17hg00jijctdj3jv.constant(rng.endOffset)
    };
  };
  var makeSitus = function (start, soffset, finish, foffset) {
    return {
      start: $_17hg00jijctdj3jv.constant($_c4mk9ko4jctdj48l.on(start, soffset)),
      finish: $_17hg00jijctdj3jv.constant($_c4mk9ko4jctdj48l.on(finish, foffset))
    };
  };
  var $_9k8utronjctdj4bc = {
    convertToRange: convertToRange,
    makeSitus: makeSitus
  };

  var isSafari = $_61ae92k4jctdj3mu.detect().browser.isSafari();
  var get$10 = function (_doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    var x = doc.body.scrollLeft || doc.documentElement.scrollLeft;
    var y = doc.body.scrollTop || doc.documentElement.scrollTop;
    return r(x, y);
  };
  var to = function (x, y, _doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    var win = doc.defaultView;
    win.scrollTo(x, y);
  };
  var by = function (x, y, _doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    var win = doc.defaultView;
    win.scrollBy(x, y);
  };
  var setToElement$1 = function (win, element) {
    var pos = $_eb1nr3lxjctdj3w8.absolute(element);
    var doc = $_4jfq4gjvjctdj3lt.fromDom(win.document);
    to(pos.left(), pos.top(), doc);
  };
  var preserve$1 = function (doc, f) {
    var before = get$10(doc);
    f();
    var after = get$10(doc);
    if (before.top() !== after.top() || before.left() !== after.left()) {
      to(before.left(), before.top(), doc);
    }
  };
  var capture$2 = function (doc) {
    var previous = $_41pgl8jhjctdj3jt.none();
    var save = function () {
      previous = $_41pgl8jhjctdj3jt.some(get$10(doc));
    };
    var restore = function () {
      previous.each(function (p) {
        to(p.left(), p.top(), doc);
      });
    };
    save();
    return {
      save: save,
      restore: restore
    };
  };
  var intoView = function (element, alignToTop) {
    if (isSafari && $_exkoajjpjctdj3kq.isFunction(element.dom().scrollIntoViewIfNeeded)) {
      element.dom().scrollIntoViewIfNeeded(false);
    } else {
      element.dom().scrollIntoView(alignToTop);
    }
  };
  var intoViewIfNeeded = function (element, container) {
    var containerBox = container.dom().getBoundingClientRect();
    var elementBox = element.dom().getBoundingClientRect();
    if (elementBox.top < containerBox.top) {
      intoView(element, true);
    } else if (elementBox.bottom > containerBox.bottom) {
      intoView(element, false);
    }
  };
  var scrollBarWidth = function () {
    var scrollDiv = $_4jfq4gjvjctdj3lt.fromHtml('<div style="width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;"></div>');
    $_a6a55bkrjctdj3pl.after($_75el39kkjctdj3o5.body(), scrollDiv);
    var w = scrollDiv.dom().offsetWidth - scrollDiv.dom().clientWidth;
    $_7l6mlmksjctdj3pm.remove(scrollDiv);
    return w;
  };
  var $_cv4nl0oojctdj4bj = {
    get: get$10,
    to: to,
    by: by,
    preserve: preserve$1,
    capture: capture$2,
    intoView: intoView,
    intoViewIfNeeded: intoViewIfNeeded,
    setToElement: setToElement$1,
    scrollBarWidth: scrollBarWidth
  };

  var WindowBridge = function (win) {
    var elementFromPoint = function (x, y) {
      return $_41pgl8jhjctdj3jt.from(win.document.elementFromPoint(x, y)).map($_4jfq4gjvjctdj3lt.fromDom);
    };
    var getRect = function (element) {
      return element.dom().getBoundingClientRect();
    };
    var getRangedRect = function (start, soffset, finish, foffset) {
      var sel = $_f3us1oo3jctdj48i.exact(start, soffset, finish, foffset);
      return $_ey8pu9o5jctdj48p.getFirstRect(win, sel).map(function (structRect) {
        return $_5bka9ljkjctdj3kc.map(structRect, $_17hg00jijctdj3jv.apply);
      });
    };
    var getSelection = function () {
      return $_ey8pu9o5jctdj48p.get(win).map(function (exactAdt) {
        return $_9k8utronjctdj4bc.convertToRange(win, exactAdt);
      });
    };
    var fromSitus = function (situs) {
      var relative = $_f3us1oo3jctdj48i.relative(situs.start(), situs.finish());
      return $_9k8utronjctdj4bc.convertToRange(win, relative);
    };
    var situsFromPoint = function (x, y) {
      return $_ey8pu9o5jctdj48p.getAtPoint(win, x, y).map(function (exact) {
        return {
          start: $_17hg00jijctdj3jv.constant($_c4mk9ko4jctdj48l.on(exact.start(), exact.soffset())),
          finish: $_17hg00jijctdj3jv.constant($_c4mk9ko4jctdj48l.on(exact.finish(), exact.foffset()))
        };
      });
    };
    var clearSelection = function () {
      $_ey8pu9o5jctdj48p.clear(win);
    };
    var selectContents = function (element) {
      $_ey8pu9o5jctdj48p.setToElement(win, element);
    };
    var setSelection = function (sel) {
      $_ey8pu9o5jctdj48p.setExact(win, sel.start(), sel.soffset(), sel.finish(), sel.foffset());
    };
    var setRelativeSelection = function (start, finish) {
      $_ey8pu9o5jctdj48p.setRelative(win, start, finish);
    };
    var getInnerHeight = function () {
      return win.innerHeight;
    };
    var getScrollY = function () {
      var pos = $_cv4nl0oojctdj4bj.get($_4jfq4gjvjctdj3lt.fromDom(win.document));
      return pos.top();
    };
    var scrollBy = function (x, y) {
      $_cv4nl0oojctdj4bj.by(x, y, $_4jfq4gjvjctdj3lt.fromDom(win.document));
    };
    return {
      elementFromPoint: elementFromPoint,
      getRect: getRect,
      getRangedRect: getRangedRect,
      getSelection: getSelection,
      fromSitus: fromSitus,
      situsFromPoint: situsFromPoint,
      clearSelection: clearSelection,
      setSelection: setSelection,
      setRelativeSelection: setRelativeSelection,
      selectContents: selectContents,
      getInnerHeight: getInnerHeight,
      getScrollY: getScrollY,
      scrollBy: scrollBy
    };
  };

  var sync = function (container, isRoot, start, soffset, finish, foffset, selectRange) {
    if (!($_dptc54jzjctdj3ma.eq(start, finish) && soffset === foffset)) {
      return $_8qdzookljctdj3o9.closest(start, 'td,th', isRoot).bind(function (s) {
        return $_8qdzookljctdj3o9.closest(finish, 'td,th', isRoot).bind(function (f) {
          return detect$5(container, isRoot, s, f, selectRange);
        });
      });
    } else {
      return $_41pgl8jhjctdj3jt.none();
    }
  };
  var detect$5 = function (container, isRoot, start, finish, selectRange) {
    if (!$_dptc54jzjctdj3ma.eq(start, finish)) {
      return $_et8bsml4jctdj3rf.identify(start, finish, isRoot).bind(function (cellSel) {
        var boxes = cellSel.boxes().getOr([]);
        if (boxes.length > 0) {
          selectRange(container, boxes, cellSel.start(), cellSel.finish());
          return $_41pgl8jhjctdj3jt.some($_d5j1pjokjctdj4az.response($_41pgl8jhjctdj3jt.some($_9k8utronjctdj4bc.makeSitus(start, 0, start, $_br7eb1kxjctdj3qf.getEnd(start))), true));
        } else {
          return $_41pgl8jhjctdj3jt.none();
        }
      });
    }
  };
  var update = function (rows, columns, container, selected, annotations) {
    var updateSelection = function (newSels) {
      annotations.clear(container);
      annotations.selectRange(container, newSels.boxes(), newSels.start(), newSels.finish());
      return newSels.boxes();
    };
    return $_et8bsml4jctdj3rf.shiftSelection(selected, rows, columns, annotations.firstSelectedSelector(), annotations.lastSelectedSelector()).map(updateSelection);
  };
  var $_2dj8kyopjctdj4bv = {
    sync: sync,
    detect: detect$5,
    update: update
  };

  var nu$3 = $_2gilnfjljctdj3kj.immutableBag([
    'left',
    'top',
    'right',
    'bottom'
  ], []);
  var moveDown = function (caret, amount) {
    return nu$3({
      left: caret.left(),
      top: caret.top() + amount,
      right: caret.right(),
      bottom: caret.bottom() + amount
    });
  };
  var moveUp = function (caret, amount) {
    return nu$3({
      left: caret.left(),
      top: caret.top() - amount,
      right: caret.right(),
      bottom: caret.bottom() - amount
    });
  };
  var moveBottomTo = function (caret, bottom) {
    var height = caret.bottom() - caret.top();
    return nu$3({
      left: caret.left(),
      top: bottom - height,
      right: caret.right(),
      bottom: bottom
    });
  };
  var moveTopTo = function (caret, top) {
    var height = caret.bottom() - caret.top();
    return nu$3({
      left: caret.left(),
      top: top,
      right: caret.right(),
      bottom: top + height
    });
  };
  var translate = function (caret, xDelta, yDelta) {
    return nu$3({
      left: caret.left() + xDelta,
      top: caret.top() + yDelta,
      right: caret.right() + xDelta,
      bottom: caret.bottom() + yDelta
    });
  };
  var getTop$1 = function (caret) {
    return caret.top();
  };
  var getBottom = function (caret) {
    return caret.bottom();
  };
  var toString$1 = function (caret) {
    return '(' + caret.left() + ', ' + caret.top() + ') -> (' + caret.right() + ', ' + caret.bottom() + ')';
  };
  var $_cefyldosjctdj4cp = {
    nu: nu$3,
    moveUp: moveUp,
    moveDown: moveDown,
    moveBottomTo: moveBottomTo,
    moveTopTo: moveTopTo,
    getTop: getTop$1,
    getBottom: getBottom,
    translate: translate,
    toString: toString$1
  };

  var getPartialBox = function (bridge, element, offset) {
    if (offset >= 0 && offset < $_br7eb1kxjctdj3qf.getEnd(element))
      return bridge.getRangedRect(element, offset, element, offset + 1);
    else if (offset > 0)
      return bridge.getRangedRect(element, offset - 1, element, offset);
    return $_41pgl8jhjctdj3jt.none();
  };
  var toCaret = function (rect) {
    return $_cefyldosjctdj4cp.nu({
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom
    });
  };
  var getElemBox = function (bridge, element) {
    return $_41pgl8jhjctdj3jt.some(bridge.getRect(element));
  };
  var getBoxAt = function (bridge, element, offset) {
    if ($_gao3elkhjctdj3nw.isElement(element))
      return getElemBox(bridge, element).map(toCaret);
    else if ($_gao3elkhjctdj3nw.isText(element))
      return getPartialBox(bridge, element, offset).map(toCaret);
    else
      return $_41pgl8jhjctdj3jt.none();
  };
  var getEntireBox = function (bridge, element) {
    if ($_gao3elkhjctdj3nw.isElement(element))
      return getElemBox(bridge, element).map(toCaret);
    else if ($_gao3elkhjctdj3nw.isText(element))
      return bridge.getRangedRect(element, 0, element, $_br7eb1kxjctdj3qf.getEnd(element)).map(toCaret);
    else
      return $_41pgl8jhjctdj3jt.none();
  };
  var $_apjfd0otjctdj4cs = {
    getBoxAt: getBoxAt,
    getEntireBox: getEntireBox
  };

  var traverse = $_2gilnfjljctdj3kj.immutable('item', 'mode');
  var backtrack = function (universe, item, direction, _transition) {
    var transition = _transition !== undefined ? _transition : sidestep;
    return universe.property().parent(item).map(function (p) {
      return traverse(p, transition);
    });
  };
  var sidestep = function (universe, item, direction, _transition) {
    var transition = _transition !== undefined ? _transition : advance;
    return direction.sibling(universe, item).map(function (p) {
      return traverse(p, transition);
    });
  };
  var advance = function (universe, item, direction, _transition) {
    var transition = _transition !== undefined ? _transition : advance;
    var children = universe.property().children(item);
    var result = direction.first(children);
    return result.map(function (r) {
      return traverse(r, transition);
    });
  };
  var successors = [
    {
      current: backtrack,
      next: sidestep,
      fallback: $_41pgl8jhjctdj3jt.none()
    },
    {
      current: sidestep,
      next: advance,
      fallback: $_41pgl8jhjctdj3jt.some(backtrack)
    },
    {
      current: advance,
      next: advance,
      fallback: $_41pgl8jhjctdj3jt.some(sidestep)
    }
  ];
  var go$1 = function (universe, item, mode, direction, rules) {
    var rules = rules !== undefined ? rules : successors;
    var ruleOpt = $_cya8qajgjctdj3jm.find(rules, function (succ) {
      return succ.current === mode;
    });
    return ruleOpt.bind(function (rule) {
      return rule.current(universe, item, direction, rule.next).orThunk(function () {
        return rule.fallback.bind(function (fb) {
          return go$1(universe, item, fb, direction);
        });
      });
    });
  };
  var $_792lm1oyjctdj4dm = {
    backtrack: backtrack,
    sidestep: sidestep,
    advance: advance,
    go: go$1
  };

  var left$2 = function () {
    var sibling = function (universe, item) {
      return universe.query().prevSibling(item);
    };
    var first = function (children) {
      return children.length > 0 ? $_41pgl8jhjctdj3jt.some(children[children.length - 1]) : $_41pgl8jhjctdj3jt.none();
    };
    return {
      sibling: sibling,
      first: first
    };
  };
  var right$2 = function () {
    var sibling = function (universe, item) {
      return universe.query().nextSibling(item);
    };
    var first = function (children) {
      return children.length > 0 ? $_41pgl8jhjctdj3jt.some(children[0]) : $_41pgl8jhjctdj3jt.none();
    };
    return {
      sibling: sibling,
      first: first
    };
  };
  var $_dp27ldozjctdj4dr = {
    left: left$2,
    right: right$2
  };

  var hone = function (universe, item, predicate, mode, direction, isRoot) {
    var next = $_792lm1oyjctdj4dm.go(universe, item, mode, direction);
    return next.bind(function (n) {
      if (isRoot(n.item()))
        return $_41pgl8jhjctdj3jt.none();
      else
        return predicate(n.item()) ? $_41pgl8jhjctdj3jt.some(n.item()) : hone(universe, n.item(), predicate, n.mode(), direction, isRoot);
    });
  };
  var left$1 = function (universe, item, predicate, isRoot) {
    return hone(universe, item, predicate, $_792lm1oyjctdj4dm.sidestep, $_dp27ldozjctdj4dr.left(), isRoot);
  };
  var right$1 = function (universe, item, predicate, isRoot) {
    return hone(universe, item, predicate, $_792lm1oyjctdj4dm.sidestep, $_dp27ldozjctdj4dr.right(), isRoot);
  };
  var $_8wiyyjoxjctdj4de = {
    left: left$1,
    right: right$1
  };

  var isLeaf = function (universe, element) {
    return universe.property().children(element).length === 0;
  };
  var before$3 = function (universe, item, isRoot) {
    return seekLeft$1(universe, item, $_17hg00jijctdj3jv.curry(isLeaf, universe), isRoot);
  };
  var after$4 = function (universe, item, isRoot) {
    return seekRight$1(universe, item, $_17hg00jijctdj3jv.curry(isLeaf, universe), isRoot);
  };
  var seekLeft$1 = function (universe, item, predicate, isRoot) {
    return $_8wiyyjoxjctdj4de.left(universe, item, predicate, isRoot);
  };
  var seekRight$1 = function (universe, item, predicate, isRoot) {
    return $_8wiyyjoxjctdj4de.right(universe, item, predicate, isRoot);
  };
  var walkers$1 = function () {
    return {
      left: $_dp27ldozjctdj4dr.left,
      right: $_dp27ldozjctdj4dr.right
    };
  };
  var walk$1 = function (universe, item, mode, direction, _rules) {
    return $_792lm1oyjctdj4dm.go(universe, item, mode, direction, _rules);
  };
  var $_6ekfoxowjctdj4db = {
    before: before$3,
    after: after$4,
    seekLeft: seekLeft$1,
    seekRight: seekRight$1,
    walkers: walkers$1,
    walk: walk$1,
    backtrack: $_792lm1oyjctdj4dm.backtrack,
    sidestep: $_792lm1oyjctdj4dm.sidestep,
    advance: $_792lm1oyjctdj4dm.advance
  };

  var universe$2 = DomUniverse();
  var gather = function (element, prune, transform) {
    return $_6ekfoxowjctdj4db.gather(universe$2, element, prune, transform);
  };
  var before$2 = function (element, isRoot) {
    return $_6ekfoxowjctdj4db.before(universe$2, element, isRoot);
  };
  var after$3 = function (element, isRoot) {
    return $_6ekfoxowjctdj4db.after(universe$2, element, isRoot);
  };
  var seekLeft = function (element, predicate, isRoot) {
    return $_6ekfoxowjctdj4db.seekLeft(universe$2, element, predicate, isRoot);
  };
  var seekRight = function (element, predicate, isRoot) {
    return $_6ekfoxowjctdj4db.seekRight(universe$2, element, predicate, isRoot);
  };
  var walkers = function () {
    return $_6ekfoxowjctdj4db.walkers();
  };
  var walk = function (item, mode, direction, _rules) {
    return $_6ekfoxowjctdj4db.walk(universe$2, item, mode, direction, _rules);
  };
  var $_e3omcmovjctdj4d8 = {
    gather: gather,
    before: before$2,
    after: after$3,
    seekLeft: seekLeft,
    seekRight: seekRight,
    walkers: walkers,
    walk: walk
  };

  var JUMP_SIZE = 5;
  var NUM_RETRIES = 100;
  var adt$2 = $_3ek5yplijctdj3u0.generate([
    { 'none': [] },
    { 'retry': ['caret'] }
  ]);
  var isOutside = function (caret, box) {
    return caret.left() < box.left() || Math.abs(box.right() - caret.left()) < 1 || caret.left() > box.right();
  };
  var inOutsideBlock = function (bridge, element, caret) {
    return $_3ulq7wkmjctdj3ob.closest(element, $_7v9vg4m6jctdj3xu.isBlock).fold($_17hg00jijctdj3jv.constant(false), function (cell) {
      return $_apjfd0otjctdj4cs.getEntireBox(bridge, cell).exists(function (box) {
        return isOutside(caret, box);
      });
    });
  };
  var adjustDown = function (bridge, element, guessBox, original, caret) {
    var lowerCaret = $_cefyldosjctdj4cp.moveDown(caret, JUMP_SIZE);
    if (Math.abs(guessBox.bottom() - original.bottom()) < 1)
      return adt$2.retry(lowerCaret);
    else if (guessBox.top() > caret.bottom())
      return adt$2.retry(lowerCaret);
    else if (guessBox.top() === caret.bottom())
      return adt$2.retry($_cefyldosjctdj4cp.moveDown(caret, 1));
    else
      return inOutsideBlock(bridge, element, caret) ? adt$2.retry($_cefyldosjctdj4cp.translate(lowerCaret, JUMP_SIZE, 0)) : adt$2.none();
  };
  var adjustUp = function (bridge, element, guessBox, original, caret) {
    var higherCaret = $_cefyldosjctdj4cp.moveUp(caret, JUMP_SIZE);
    if (Math.abs(guessBox.top() - original.top()) < 1)
      return adt$2.retry(higherCaret);
    else if (guessBox.bottom() < caret.top())
      return adt$2.retry(higherCaret);
    else if (guessBox.bottom() === caret.top())
      return adt$2.retry($_cefyldosjctdj4cp.moveUp(caret, 1));
    else
      return inOutsideBlock(bridge, element, caret) ? adt$2.retry($_cefyldosjctdj4cp.translate(higherCaret, JUMP_SIZE, 0)) : adt$2.none();
  };
  var upMovement = {
    point: $_cefyldosjctdj4cp.getTop,
    adjuster: adjustUp,
    move: $_cefyldosjctdj4cp.moveUp,
    gather: $_e3omcmovjctdj4d8.before
  };
  var downMovement = {
    point: $_cefyldosjctdj4cp.getBottom,
    adjuster: adjustDown,
    move: $_cefyldosjctdj4cp.moveDown,
    gather: $_e3omcmovjctdj4d8.after
  };
  var isAtTable = function (bridge, x, y) {
    return bridge.elementFromPoint(x, y).filter(function (elm) {
      return $_gao3elkhjctdj3nw.name(elm) === 'table';
    }).isSome();
  };
  var adjustForTable = function (bridge, movement, original, caret, numRetries) {
    return adjustTil(bridge, movement, original, movement.move(caret, JUMP_SIZE), numRetries);
  };
  var adjustTil = function (bridge, movement, original, caret, numRetries) {
    if (numRetries === 0)
      return $_41pgl8jhjctdj3jt.some(caret);
    if (isAtTable(bridge, caret.left(), movement.point(caret)))
      return adjustForTable(bridge, movement, original, caret, numRetries - 1);
    return bridge.situsFromPoint(caret.left(), movement.point(caret)).bind(function (guess) {
      return guess.start().fold($_41pgl8jhjctdj3jt.none, function (element, offset) {
        return $_apjfd0otjctdj4cs.getEntireBox(bridge, element, offset).bind(function (guessBox) {
          return movement.adjuster(bridge, element, guessBox, original, caret).fold($_41pgl8jhjctdj3jt.none, function (newCaret) {
            return adjustTil(bridge, movement, original, newCaret, numRetries - 1);
          });
        }).orThunk(function () {
          return $_41pgl8jhjctdj3jt.some(caret);
        });
      }, $_41pgl8jhjctdj3jt.none);
    });
  };
  var ieTryDown = function (bridge, caret) {
    return bridge.situsFromPoint(caret.left(), caret.bottom() + JUMP_SIZE);
  };
  var ieTryUp = function (bridge, caret) {
    return bridge.situsFromPoint(caret.left(), caret.top() - JUMP_SIZE);
  };
  var checkScroll = function (movement, adjusted, bridge) {
    if (movement.point(adjusted) > bridge.getInnerHeight())
      return $_41pgl8jhjctdj3jt.some(movement.point(adjusted) - bridge.getInnerHeight());
    else if (movement.point(adjusted) < 0)
      return $_41pgl8jhjctdj3jt.some(-movement.point(adjusted));
    else
      return $_41pgl8jhjctdj3jt.none();
  };
  var retry = function (movement, bridge, caret) {
    var moved = movement.move(caret, JUMP_SIZE);
    var adjusted = adjustTil(bridge, movement, caret, moved, NUM_RETRIES).getOr(moved);
    return checkScroll(movement, adjusted, bridge).fold(function () {
      return bridge.situsFromPoint(adjusted.left(), movement.point(adjusted));
    }, function (delta) {
      bridge.scrollBy(0, delta);
      return bridge.situsFromPoint(adjusted.left(), movement.point(adjusted) - delta);
    });
  };
  var $_f06v6coujctdj4cx = {
    tryUp: $_17hg00jijctdj3jv.curry(retry, upMovement),
    tryDown: $_17hg00jijctdj3jv.curry(retry, downMovement),
    ieTryUp: ieTryUp,
    ieTryDown: ieTryDown,
    getJumpSize: $_17hg00jijctdj3jv.constant(JUMP_SIZE)
  };

  var adt$3 = $_3ek5yplijctdj3u0.generate([
    { 'none': ['message'] },
    { 'success': [] },
    { 'failedUp': ['cell'] },
    { 'failedDown': ['cell'] }
  ]);
  var isOverlapping = function (bridge, before, after) {
    var beforeBounds = bridge.getRect(before);
    var afterBounds = bridge.getRect(after);
    return afterBounds.right > beforeBounds.left && afterBounds.left < beforeBounds.right;
  };
  var verify = function (bridge, before, beforeOffset, after, afterOffset, failure, isRoot) {
    return $_8qdzookljctdj3o9.closest(after, 'td,th', isRoot).bind(function (afterCell) {
      return $_8qdzookljctdj3o9.closest(before, 'td,th', isRoot).map(function (beforeCell) {
        if (!$_dptc54jzjctdj3ma.eq(afterCell, beforeCell)) {
          return $_2uu2y5l5jctdj3rz.sharedOne(isRow, [
            afterCell,
            beforeCell
          ]).fold(function () {
            return isOverlapping(bridge, beforeCell, afterCell) ? adt$3.success() : failure(beforeCell);
          }, function (sharedRow) {
            return failure(beforeCell);
          });
        } else {
          return $_dptc54jzjctdj3ma.eq(after, afterCell) && $_br7eb1kxjctdj3qf.getEnd(afterCell) === afterOffset ? failure(beforeCell) : adt$3.none('in same cell');
        }
      });
    }).getOr(adt$3.none('default'));
  };
  var isRow = function (elem) {
    return $_8qdzookljctdj3o9.closest(elem, 'tr');
  };
  var cata$2 = function (subject, onNone, onSuccess, onFailedUp, onFailedDown) {
    return subject.fold(onNone, onSuccess, onFailedUp, onFailedDown);
  };
  var $_dmsodmp0jctdj4du = {
    verify: verify,
    cata: cata$2,
    adt: adt$3
  };

  var point = $_2gilnfjljctdj3kj.immutable('element', 'offset');
  var delta = $_2gilnfjljctdj3kj.immutable('element', 'deltaOffset');
  var range$3 = $_2gilnfjljctdj3kj.immutable('element', 'start', 'finish');
  var points = $_2gilnfjljctdj3kj.immutable('begin', 'end');
  var text = $_2gilnfjljctdj3kj.immutable('element', 'text');
  var $_8tu0ppp2jctdj4ee = {
    point: point,
    delta: delta,
    range: range$3,
    points: points,
    text: text
  };

  var inAncestor = $_2gilnfjljctdj3kj.immutable('ancestor', 'descendants', 'element', 'index');
  var inParent = $_2gilnfjljctdj3kj.immutable('parent', 'children', 'element', 'index');
  var childOf = function (element, ancestor) {
    return $_3ulq7wkmjctdj3ob.closest(element, function (elem) {
      return $_4vj6djjxjctdj3lz.parent(elem).exists(function (parent) {
        return $_dptc54jzjctdj3ma.eq(parent, ancestor);
      });
    });
  };
  var indexInParent = function (element) {
    return $_4vj6djjxjctdj3lz.parent(element).bind(function (parent) {
      var children = $_4vj6djjxjctdj3lz.children(parent);
      return indexOf$1(children, element).map(function (index) {
        return inParent(parent, children, element, index);
      });
    });
  };
  var indexOf$1 = function (elements, element) {
    return $_cya8qajgjctdj3jm.findIndex(elements, $_17hg00jijctdj3jv.curry($_dptc54jzjctdj3ma.eq, element));
  };
  var selectorsInParent = function (element, selector) {
    return $_4vj6djjxjctdj3lz.parent(element).bind(function (parent) {
      var children = $_cifrp6kijctdj3ny.children(parent, selector);
      return indexOf$1(children, element).map(function (index) {
        return inParent(parent, children, element, index);
      });
    });
  };
  var descendantsInAncestor = function (element, ancestorSelector, descendantSelector) {
    return $_8qdzookljctdj3o9.closest(element, ancestorSelector).bind(function (ancestor) {
      var descendants = $_cifrp6kijctdj3ny.descendants(ancestor, descendantSelector);
      return indexOf$1(descendants, element).map(function (index) {
        return inAncestor(ancestor, descendants, element, index);
      });
    });
  };
  var $_68cgocp3jctdj4eh = {
    childOf: childOf,
    indexOf: indexOf$1,
    indexInParent: indexInParent,
    selectorsInParent: selectorsInParent,
    descendantsInAncestor: descendantsInAncestor
  };

  var isBr = function (elem) {
    return $_gao3elkhjctdj3nw.name(elem) === 'br';
  };
  var gatherer = function (cand, gather, isRoot) {
    return gather(cand, isRoot).bind(function (target) {
      return $_gao3elkhjctdj3nw.isText(target) && $_4wxri4kyjctdj3qj.get(target).trim().length === 0 ? gatherer(target, gather, isRoot) : $_41pgl8jhjctdj3jt.some(target);
    });
  };
  var handleBr = function (isRoot, element, direction) {
    return direction.traverse(element).orThunk(function () {
      return gatherer(element, direction.gather, isRoot);
    }).map(direction.relative);
  };
  var findBr = function (element, offset) {
    return $_4vj6djjxjctdj3lz.child(element, offset).filter(isBr).orThunk(function () {
      return $_4vj6djjxjctdj3lz.child(element, offset - 1).filter(isBr);
    });
  };
  var handleParent = function (isRoot, element, offset, direction) {
    return findBr(element, offset).bind(function (br) {
      return direction.traverse(br).fold(function () {
        return gatherer(br, direction.gather, isRoot).map(direction.relative);
      }, function (adjacent) {
        return $_68cgocp3jctdj4eh.indexInParent(adjacent).map(function (info) {
          return $_c4mk9ko4jctdj48l.on(info.parent(), info.index());
        });
      });
    });
  };
  var tryBr = function (isRoot, element, offset, direction) {
    var target = isBr(element) ? handleBr(isRoot, element, direction) : handleParent(isRoot, element, offset, direction);
    return target.map(function (tgt) {
      return {
        start: $_17hg00jijctdj3jv.constant(tgt),
        finish: $_17hg00jijctdj3jv.constant(tgt)
      };
    });
  };
  var process = function (analysis) {
    return $_dmsodmp0jctdj4du.cata(analysis, function (message) {
      return $_41pgl8jhjctdj3jt.none('BR ADT: none');
    }, function () {
      return $_41pgl8jhjctdj3jt.none();
    }, function (cell) {
      return $_41pgl8jhjctdj3jt.some($_8tu0ppp2jctdj4ee.point(cell, 0));
    }, function (cell) {
      return $_41pgl8jhjctdj3jt.some($_8tu0ppp2jctdj4ee.point(cell, $_br7eb1kxjctdj3qf.getEnd(cell)));
    });
  };
  var $_2u90vrp1jctdj4e2 = {
    tryBr: tryBr,
    process: process
  };

  var MAX_RETRIES = 20;
  var platform$1 = $_61ae92k4jctdj3mu.detect();
  var findSpot = function (bridge, isRoot, direction) {
    return bridge.getSelection().bind(function (sel) {
      return $_2u90vrp1jctdj4e2.tryBr(isRoot, sel.finish(), sel.foffset(), direction).fold(function () {
        return $_41pgl8jhjctdj3jt.some($_8tu0ppp2jctdj4ee.point(sel.finish(), sel.foffset()));
      }, function (brNeighbour) {
        var range = bridge.fromSitus(brNeighbour);
        var analysis = $_dmsodmp0jctdj4du.verify(bridge, sel.finish(), sel.foffset(), range.finish(), range.foffset(), direction.failure, isRoot);
        return $_2u90vrp1jctdj4e2.process(analysis);
      });
    });
  };
  var scan = function (bridge, isRoot, element, offset, direction, numRetries) {
    if (numRetries === 0)
      return $_41pgl8jhjctdj3jt.none();
    return tryCursor(bridge, isRoot, element, offset, direction).bind(function (situs) {
      var range = bridge.fromSitus(situs);
      var analysis = $_dmsodmp0jctdj4du.verify(bridge, element, offset, range.finish(), range.foffset(), direction.failure, isRoot);
      return $_dmsodmp0jctdj4du.cata(analysis, function () {
        return $_41pgl8jhjctdj3jt.none();
      }, function () {
        return $_41pgl8jhjctdj3jt.some(situs);
      }, function (cell) {
        if ($_dptc54jzjctdj3ma.eq(element, cell) && offset === 0)
          return tryAgain(bridge, element, offset, $_cefyldosjctdj4cp.moveUp, direction);
        else
          return scan(bridge, isRoot, cell, 0, direction, numRetries - 1);
      }, function (cell) {
        if ($_dptc54jzjctdj3ma.eq(element, cell) && offset === $_br7eb1kxjctdj3qf.getEnd(cell))
          return tryAgain(bridge, element, offset, $_cefyldosjctdj4cp.moveDown, direction);
        else
          return scan(bridge, isRoot, cell, $_br7eb1kxjctdj3qf.getEnd(cell), direction, numRetries - 1);
      });
    });
  };
  var tryAgain = function (bridge, element, offset, move, direction) {
    return $_apjfd0otjctdj4cs.getBoxAt(bridge, element, offset).bind(function (box) {
      return tryAt(bridge, direction, move(box, $_f06v6coujctdj4cx.getJumpSize()));
    });
  };
  var tryAt = function (bridge, direction, box) {
    if (platform$1.browser.isChrome() || platform$1.browser.isSafari() || platform$1.browser.isFirefox() || platform$1.browser.isEdge())
      return direction.otherRetry(bridge, box);
    else if (platform$1.browser.isIE())
      return direction.ieRetry(bridge, box);
    else
      return $_41pgl8jhjctdj3jt.none();
  };
  var tryCursor = function (bridge, isRoot, element, offset, direction) {
    return $_apjfd0otjctdj4cs.getBoxAt(bridge, element, offset).bind(function (box) {
      return tryAt(bridge, direction, box);
    });
  };
  var handle$2 = function (bridge, isRoot, direction) {
    return findSpot(bridge, isRoot, direction).bind(function (spot) {
      return scan(bridge, isRoot, spot.element(), spot.offset(), direction, MAX_RETRIES).map(bridge.fromSitus);
    });
  };
  var $_bd6wsiorjctdj4ch = { handle: handle$2 };

  var any$1 = function (predicate) {
    return $_3ulq7wkmjctdj3ob.first(predicate).isSome();
  };
  var ancestor$3 = function (scope, predicate, isRoot) {
    return $_3ulq7wkmjctdj3ob.ancestor(scope, predicate, isRoot).isSome();
  };
  var closest$3 = function (scope, predicate, isRoot) {
    return $_3ulq7wkmjctdj3ob.closest(scope, predicate, isRoot).isSome();
  };
  var sibling$3 = function (scope, predicate) {
    return $_3ulq7wkmjctdj3ob.sibling(scope, predicate).isSome();
  };
  var child$4 = function (scope, predicate) {
    return $_3ulq7wkmjctdj3ob.child(scope, predicate).isSome();
  };
  var descendant$3 = function (scope, predicate) {
    return $_3ulq7wkmjctdj3ob.descendant(scope, predicate).isSome();
  };
  var $_a98rzzp4jctdj4eo = {
    any: any$1,
    ancestor: ancestor$3,
    closest: closest$3,
    sibling: sibling$3,
    child: child$4,
    descendant: descendant$3
  };

  var detection = $_61ae92k4jctdj3mu.detect();
  var inSameTable = function (elem, table) {
    return $_a98rzzp4jctdj4eo.ancestor(elem, function (e) {
      return $_4vj6djjxjctdj3lz.parent(e).exists(function (p) {
        return $_dptc54jzjctdj3ma.eq(p, table);
      });
    });
  };
  var simulate = function (bridge, isRoot, direction, initial, anchor) {
    return $_8qdzookljctdj3o9.closest(initial, 'td,th', isRoot).bind(function (start) {
      return $_8qdzookljctdj3o9.closest(start, 'table', isRoot).bind(function (table) {
        if (!inSameTable(anchor, table))
          return $_41pgl8jhjctdj3jt.none();
        return $_bd6wsiorjctdj4ch.handle(bridge, isRoot, direction).bind(function (range) {
          return $_8qdzookljctdj3o9.closest(range.finish(), 'td,th', isRoot).map(function (finish) {
            return {
              start: $_17hg00jijctdj3jv.constant(start),
              finish: $_17hg00jijctdj3jv.constant(finish),
              range: $_17hg00jijctdj3jv.constant(range)
            };
          });
        });
      });
    });
  };
  var navigate = function (bridge, isRoot, direction, initial, anchor, precheck) {
    if (detection.browser.isIE()) {
      return $_41pgl8jhjctdj3jt.none();
    } else {
      return precheck(initial, isRoot).orThunk(function () {
        return simulate(bridge, isRoot, direction, initial, anchor).map(function (info) {
          var range = info.range();
          return $_d5j1pjokjctdj4az.response($_41pgl8jhjctdj3jt.some($_9k8utronjctdj4bc.makeSitus(range.start(), range.soffset(), range.finish(), range.foffset())), true);
        });
      });
    }
  };
  var firstUpCheck = function (initial, isRoot) {
    return $_8qdzookljctdj3o9.closest(initial, 'tr', isRoot).bind(function (startRow) {
      return $_8qdzookljctdj3o9.closest(startRow, 'table', isRoot).bind(function (table) {
        var rows = $_cifrp6kijctdj3ny.descendants(table, 'tr');
        if ($_dptc54jzjctdj3ma.eq(startRow, rows[0])) {
          return $_e3omcmovjctdj4d8.seekLeft(table, function (element) {
            return $_bc2n4jkwjctdj3qd.last(element).isSome();
          }, isRoot).map(function (last) {
            var lastOffset = $_br7eb1kxjctdj3qf.getEnd(last);
            return $_d5j1pjokjctdj4az.response($_41pgl8jhjctdj3jt.some($_9k8utronjctdj4bc.makeSitus(last, lastOffset, last, lastOffset)), true);
          });
        } else {
          return $_41pgl8jhjctdj3jt.none();
        }
      });
    });
  };
  var lastDownCheck = function (initial, isRoot) {
    return $_8qdzookljctdj3o9.closest(initial, 'tr', isRoot).bind(function (startRow) {
      return $_8qdzookljctdj3o9.closest(startRow, 'table', isRoot).bind(function (table) {
        var rows = $_cifrp6kijctdj3ny.descendants(table, 'tr');
        if ($_dptc54jzjctdj3ma.eq(startRow, rows[rows.length - 1])) {
          return $_e3omcmovjctdj4d8.seekRight(table, function (element) {
            return $_bc2n4jkwjctdj3qd.first(element).isSome();
          }, isRoot).map(function (first) {
            return $_d5j1pjokjctdj4az.response($_41pgl8jhjctdj3jt.some($_9k8utronjctdj4bc.makeSitus(first, 0, first, 0)), true);
          });
        } else {
          return $_41pgl8jhjctdj3jt.none();
        }
      });
    });
  };
  var select = function (bridge, container, isRoot, direction, initial, anchor, selectRange) {
    return simulate(bridge, isRoot, direction, initial, anchor).bind(function (info) {
      return $_2dj8kyopjctdj4bv.detect(container, isRoot, info.start(), info.finish(), selectRange);
    });
  };
  var $_3o2vb7oqjctdj4c2 = {
    navigate: navigate,
    select: select,
    firstUpCheck: firstUpCheck,
    lastDownCheck: lastDownCheck
  };

  var findCell = function (target, isRoot) {
    return $_8qdzookljctdj3o9.closest(target, 'td,th', isRoot);
  };
  var MouseSelection = function (bridge, container, isRoot, annotations) {
    var cursor = $_41pgl8jhjctdj3jt.none();
    var clearState = function () {
      cursor = $_41pgl8jhjctdj3jt.none();
    };
    var mousedown = function (event) {
      annotations.clear(container);
      cursor = findCell(event.target(), isRoot);
    };
    var mouseover = function (event) {
      cursor.each(function (start) {
        annotations.clear(container);
        findCell(event.target(), isRoot).each(function (finish) {
          $_et8bsml4jctdj3rf.identify(start, finish, isRoot).each(function (cellSel) {
            var boxes = cellSel.boxes().getOr([]);
            if (boxes.length > 1 || boxes.length === 1 && !$_dptc54jzjctdj3ma.eq(start, finish)) {
              annotations.selectRange(container, boxes, cellSel.start(), cellSel.finish());
              bridge.selectContents(finish);
            }
          });
        });
      });
    };
    var mouseup = function () {
      cursor.each(clearState);
    };
    return {
      mousedown: mousedown,
      mouseover: mouseover,
      mouseup: mouseup
    };
  };

  var $_ejgis7p6jctdj4eu = {
    down: {
      traverse: $_4vj6djjxjctdj3lz.nextSibling,
      gather: $_e3omcmovjctdj4d8.after,
      relative: $_c4mk9ko4jctdj48l.before,
      otherRetry: $_f06v6coujctdj4cx.tryDown,
      ieRetry: $_f06v6coujctdj4cx.ieTryDown,
      failure: $_dmsodmp0jctdj4du.adt.failedDown
    },
    up: {
      traverse: $_4vj6djjxjctdj3lz.prevSibling,
      gather: $_e3omcmovjctdj4d8.before,
      relative: $_c4mk9ko4jctdj48l.before,
      otherRetry: $_f06v6coujctdj4cx.tryUp,
      ieRetry: $_f06v6coujctdj4cx.ieTryUp,
      failure: $_dmsodmp0jctdj4du.adt.failedUp
    }
  };

  var rc = $_2gilnfjljctdj3kj.immutable('rows', 'cols');
  var mouse = function (win, container, isRoot, annotations) {
    var bridge = WindowBridge(win);
    var handlers = MouseSelection(bridge, container, isRoot, annotations);
    return {
      mousedown: handlers.mousedown,
      mouseover: handlers.mouseover,
      mouseup: handlers.mouseup
    };
  };
  var keyboard = function (win, container, isRoot, annotations) {
    var bridge = WindowBridge(win);
    var clearToNavigate = function () {
      annotations.clear(container);
      return $_41pgl8jhjctdj3jt.none();
    };
    var keydown = function (event, start, soffset, finish, foffset, direction) {
      var keycode = event.raw().which;
      var shiftKey = event.raw().shiftKey === true;
      var handler = $_et8bsml4jctdj3rf.retrieve(container, annotations.selectedSelector()).fold(function () {
        if ($_dubdd6oljctdj4b1.isDown(keycode) && shiftKey) {
          return $_17hg00jijctdj3jv.curry($_3o2vb7oqjctdj4c2.select, bridge, container, isRoot, $_ejgis7p6jctdj4eu.down, finish, start, annotations.selectRange);
        } else if ($_dubdd6oljctdj4b1.isUp(keycode) && shiftKey) {
          return $_17hg00jijctdj3jv.curry($_3o2vb7oqjctdj4c2.select, bridge, container, isRoot, $_ejgis7p6jctdj4eu.up, finish, start, annotations.selectRange);
        } else if ($_dubdd6oljctdj4b1.isDown(keycode)) {
          return $_17hg00jijctdj3jv.curry($_3o2vb7oqjctdj4c2.navigate, bridge, isRoot, $_ejgis7p6jctdj4eu.down, finish, start, $_3o2vb7oqjctdj4c2.lastDownCheck);
        } else if ($_dubdd6oljctdj4b1.isUp(keycode)) {
          return $_17hg00jijctdj3jv.curry($_3o2vb7oqjctdj4c2.navigate, bridge, isRoot, $_ejgis7p6jctdj4eu.up, finish, start, $_3o2vb7oqjctdj4c2.firstUpCheck);
        } else {
          return $_41pgl8jhjctdj3jt.none;
        }
      }, function (selected) {
        var update = function (attempts) {
          return function () {
            var navigation = $_5ravs6majctdj3yj.findMap(attempts, function (delta) {
              return $_2dj8kyopjctdj4bv.update(delta.rows(), delta.cols(), container, selected, annotations);
            });
            return navigation.fold(function () {
              return $_et8bsml4jctdj3rf.getEdges(container, annotations.firstSelectedSelector(), annotations.lastSelectedSelector()).map(function (edges) {
                var relative = $_dubdd6oljctdj4b1.isDown(keycode) || direction.isForward(keycode) ? $_c4mk9ko4jctdj48l.after : $_c4mk9ko4jctdj48l.before;
                bridge.setRelativeSelection($_c4mk9ko4jctdj48l.on(edges.first(), 0), relative(edges.table()));
                annotations.clear(container);
                return $_d5j1pjokjctdj4az.response($_41pgl8jhjctdj3jt.none(), true);
              });
            }, function (_) {
              return $_41pgl8jhjctdj3jt.some($_d5j1pjokjctdj4az.response($_41pgl8jhjctdj3jt.none(), true));
            });
          };
        };
        if ($_dubdd6oljctdj4b1.isDown(keycode) && shiftKey)
          return update([rc(+1, 0)]);
        else if ($_dubdd6oljctdj4b1.isUp(keycode) && shiftKey)
          return update([rc(-1, 0)]);
        else if (direction.isBackward(keycode) && shiftKey)
          return update([
            rc(0, -1),
            rc(-1, 0)
          ]);
        else if (direction.isForward(keycode) && shiftKey)
          return update([
            rc(0, +1),
            rc(+1, 0)
          ]);
        else if ($_dubdd6oljctdj4b1.isNavigation(keycode) && shiftKey === false)
          return clearToNavigate;
        else
          return $_41pgl8jhjctdj3jt.none;
      });
      return handler();
    };
    var keyup = function (event, start, soffset, finish, foffset) {
      return $_et8bsml4jctdj3rf.retrieve(container, annotations.selectedSelector()).fold(function () {
        var keycode = event.raw().which;
        var shiftKey = event.raw().shiftKey === true;
        if (shiftKey === false)
          return $_41pgl8jhjctdj3jt.none();
        if ($_dubdd6oljctdj4b1.isNavigation(keycode))
          return $_2dj8kyopjctdj4bv.sync(container, isRoot, start, soffset, finish, foffset, annotations.selectRange);
        else
          return $_41pgl8jhjctdj3jt.none();
      }, $_41pgl8jhjctdj3jt.none);
    };
    return {
      keydown: keydown,
      keyup: keyup
    };
  };
  var $_3z9dsxojjctdj4ar = {
    mouse: mouse,
    keyboard: keyboard
  };

  var add$3 = function (element, classes) {
    $_cya8qajgjctdj3jm.each(classes, function (x) {
      $_uldqkmljctdj40d.add(element, x);
    });
  };
  var remove$7 = function (element, classes) {
    $_cya8qajgjctdj3jm.each(classes, function (x) {
      $_uldqkmljctdj40d.remove(element, x);
    });
  };
  var toggle$2 = function (element, classes) {
    $_cya8qajgjctdj3jm.each(classes, function (x) {
      $_uldqkmljctdj40d.toggle(element, x);
    });
  };
  var hasAll = function (element, classes) {
    return $_cya8qajgjctdj3jm.forall(classes, function (clazz) {
      return $_uldqkmljctdj40d.has(element, clazz);
    });
  };
  var hasAny = function (element, classes) {
    return $_cya8qajgjctdj3jm.exists(classes, function (clazz) {
      return $_uldqkmljctdj40d.has(element, clazz);
    });
  };
  var getNative = function (element) {
    var classList = element.dom().classList;
    var r = new Array(classList.length);
    for (var i = 0; i < classList.length; i++) {
      r[i] = classList.item(i);
    }
    return r;
  };
  var get$11 = function (element) {
    return $_4vszm3mnjctdj40m.supports(element) ? getNative(element) : $_4vszm3mnjctdj40m.get(element);
  };
  var $_bb9zu6p9jctdj4fd = {
    add: add$3,
    remove: remove$7,
    toggle: toggle$2,
    hasAll: hasAll,
    hasAny: hasAny,
    get: get$11
  };

  var addClass = function (clazz) {
    return function (element) {
      $_uldqkmljctdj40d.add(element, clazz);
    };
  };
  var removeClass = function (clazz) {
    return function (element) {
      $_uldqkmljctdj40d.remove(element, clazz);
    };
  };
  var removeClasses = function (classes) {
    return function (element) {
      $_bb9zu6p9jctdj4fd.remove(element, classes);
    };
  };
  var hasClass = function (clazz) {
    return function (element) {
      return $_uldqkmljctdj40d.has(element, clazz);
    };
  };
  var $_512rrfp8jctdj4fb = {
    addClass: addClass,
    removeClass: removeClass,
    removeClasses: removeClasses,
    hasClass: hasClass
  };

  var byClass = function (ephemera) {
    var addSelectionClass = $_512rrfp8jctdj4fb.addClass(ephemera.selected());
    var removeSelectionClasses = $_512rrfp8jctdj4fb.removeClasses([
      ephemera.selected(),
      ephemera.lastSelected(),
      ephemera.firstSelected()
    ]);
    var clear = function (container) {
      var sels = $_cifrp6kijctdj3ny.descendants(container, ephemera.selectedSelector());
      $_cya8qajgjctdj3jm.each(sels, removeSelectionClasses);
    };
    var selectRange = function (container, cells, start, finish) {
      clear(container);
      $_cya8qajgjctdj3jm.each(cells, addSelectionClass);
      $_uldqkmljctdj40d.add(start, ephemera.firstSelected());
      $_uldqkmljctdj40d.add(finish, ephemera.lastSelected());
    };
    return {
      clear: clear,
      selectRange: selectRange,
      selectedSelector: ephemera.selectedSelector,
      firstSelectedSelector: ephemera.firstSelectedSelector,
      lastSelectedSelector: ephemera.lastSelectedSelector
    };
  };
  var byAttr = function (ephemera) {
    var removeSelectionAttributes = function (element) {
      $_fdrkf1kgjctdj3no.remove(element, ephemera.selected());
      $_fdrkf1kgjctdj3no.remove(element, ephemera.firstSelected());
      $_fdrkf1kgjctdj3no.remove(element, ephemera.lastSelected());
    };
    var addSelectionAttribute = function (element) {
      $_fdrkf1kgjctdj3no.set(element, ephemera.selected(), '1');
    };
    var clear = function (container) {
      var sels = $_cifrp6kijctdj3ny.descendants(container, ephemera.selectedSelector());
      $_cya8qajgjctdj3jm.each(sels, removeSelectionAttributes);
    };
    var selectRange = function (container, cells, start, finish) {
      clear(container);
      $_cya8qajgjctdj3jm.each(cells, addSelectionAttribute);
      $_fdrkf1kgjctdj3no.set(start, ephemera.firstSelected(), '1');
      $_fdrkf1kgjctdj3no.set(finish, ephemera.lastSelected(), '1');
    };
    return {
      clear: clear,
      selectRange: selectRange,
      selectedSelector: ephemera.selectedSelector,
      firstSelectedSelector: ephemera.firstSelectedSelector,
      lastSelectedSelector: ephemera.lastSelectedSelector
    };
  };
  var $_12vge1p7jctdj4ez = {
    byClass: byClass,
    byAttr: byAttr
  };

  var CellSelection$1 = function (editor, lazyResize) {
    var handlerStruct = $_2gilnfjljctdj3kj.immutableBag([
      'mousedown',
      'mouseover',
      'mouseup',
      'keyup',
      'keydown'
    ], []);
    var handlers = $_41pgl8jhjctdj3jt.none();
    var annotations = $_12vge1p7jctdj4ez.byAttr($_fxid8jlgjctdj3tv);
    editor.on('init', function (e) {
      var win = editor.getWin();
      var body = $_63yklhn2jctdj42q.getBody(editor);
      var isRoot = $_63yklhn2jctdj42q.getIsRoot(editor);
      var syncSelection = function () {
        var sel = editor.selection;
        var start = $_4jfq4gjvjctdj3lt.fromDom(sel.getStart());
        var end = $_4jfq4gjvjctdj3lt.fromDom(sel.getEnd());
        var startTable = $_1mbzcijsjctdj3l1.table(start);
        var endTable = $_1mbzcijsjctdj3l1.table(end);
        var sameTable = startTable.bind(function (tableStart) {
          return endTable.bind(function (tableEnd) {
            return $_dptc54jzjctdj3ma.eq(tableStart, tableEnd) ? $_41pgl8jhjctdj3jt.some(true) : $_41pgl8jhjctdj3jt.none();
          });
        });
        sameTable.fold(function () {
          annotations.clear(body);
        }, $_17hg00jijctdj3jv.noop);
      };
      var mouseHandlers = $_3z9dsxojjctdj4ar.mouse(win, body, isRoot, annotations);
      var keyHandlers = $_3z9dsxojjctdj4ar.keyboard(win, body, isRoot, annotations);
      var handleResponse = function (event, response) {
        if (response.kill()) {
          event.kill();
        }
        response.selection().each(function (ns) {
          var relative = $_f3us1oo3jctdj48i.relative(ns.start(), ns.finish());
          var rng = $_czwlzuo9jctdj49a.asLtrRange(win, relative);
          editor.selection.setRng(rng);
        });
      };
      var keyup = function (event) {
        var wrappedEvent = wrapEvent(event);
        if (wrappedEvent.raw().shiftKey && $_dubdd6oljctdj4b1.isNavigation(wrappedEvent.raw().which)) {
          var rng = editor.selection.getRng();
          var start = $_4jfq4gjvjctdj3lt.fromDom(rng.startContainer);
          var end = $_4jfq4gjvjctdj3lt.fromDom(rng.endContainer);
          keyHandlers.keyup(wrappedEvent, start, rng.startOffset, end, rng.endOffset).each(function (response) {
            handleResponse(wrappedEvent, response);
          });
        }
      };
      var checkLast = function (last) {
        return !$_fdrkf1kgjctdj3no.has(last, 'data-mce-bogus') && $_gao3elkhjctdj3nw.name(last) !== 'br' && !($_gao3elkhjctdj3nw.isText(last) && $_4wxri4kyjctdj3qj.get(last).length === 0);
      };
      var getLast = function () {
        var body = $_4jfq4gjvjctdj3lt.fromDom(editor.getBody());
        var lastChild = $_4vj6djjxjctdj3lz.lastChild(body);
        var getPrevLast = function (last) {
          return $_4vj6djjxjctdj3lz.prevSibling(last).bind(function (prevLast) {
            return checkLast(prevLast) ? $_41pgl8jhjctdj3jt.some(prevLast) : getPrevLast(prevLast);
          });
        };
        return lastChild.bind(function (last) {
          return checkLast(last) ? $_41pgl8jhjctdj3jt.some(last) : getPrevLast(last);
        });
      };
      var keydown = function (event) {
        var wrappedEvent = wrapEvent(event);
        lazyResize().each(function (resize) {
          resize.hideBars();
        });
        if (event.which === 40) {
          getLast().each(function (last) {
            if ($_gao3elkhjctdj3nw.name(last) === 'table') {
              if (editor.settings.forced_root_block) {
                editor.dom.add(editor.getBody(), editor.settings.forced_root_block, editor.settings.forced_root_block_attrs, '<br/>');
              } else {
                editor.dom.add(editor.getBody(), 'br');
              }
            }
          });
        }
        var rng = editor.selection.getRng();
        var startContainer = $_4jfq4gjvjctdj3lt.fromDom(editor.selection.getStart());
        var start = $_4jfq4gjvjctdj3lt.fromDom(rng.startContainer);
        var end = $_4jfq4gjvjctdj3lt.fromDom(rng.endContainer);
        var direction = $_xrgsdn3jctdj42t.directionAt(startContainer).isRtl() ? $_dubdd6oljctdj4b1.rtl : $_dubdd6oljctdj4b1.ltr;
        keyHandlers.keydown(wrappedEvent, start, rng.startOffset, end, rng.endOffset, direction).each(function (response) {
          handleResponse(wrappedEvent, response);
        });
        lazyResize().each(function (resize) {
          resize.showBars();
        });
      };
      var wrapEvent = function (event) {
        var target = $_4jfq4gjvjctdj3lt.fromDom(event.target);
        var stop = function () {
          event.stopPropagation();
        };
        var prevent = function () {
          event.preventDefault();
        };
        var kill = $_17hg00jijctdj3jv.compose(prevent, stop);
        return {
          target: $_17hg00jijctdj3jv.constant(target),
          x: $_17hg00jijctdj3jv.constant(event.x),
          y: $_17hg00jijctdj3jv.constant(event.y),
          stop: stop,
          prevent: prevent,
          kill: kill,
          raw: $_17hg00jijctdj3jv.constant(event)
        };
      };
      var isLeftMouse = function (raw) {
        return raw.button === 0;
      };
      var isLeftButtonPressed = function (raw) {
        if (raw.buttons === undefined) {
          return true;
        }
        return (raw.buttons & 1) !== 0;
      };
      var mouseDown = function (e) {
        if (isLeftMouse(e)) {
          mouseHandlers.mousedown(wrapEvent(e));
        }
      };
      var mouseOver = function (e) {
        if (isLeftButtonPressed(e)) {
          mouseHandlers.mouseover(wrapEvent(e));
        }
      };
      var mouseUp = function (e) {
        if (isLeftMouse) {
          mouseHandlers.mouseup(wrapEvent(e));
        }
      };
      editor.on('mousedown', mouseDown);
      editor.on('mouseover', mouseOver);
      editor.on('mouseup', mouseUp);
      editor.on('keyup', keyup);
      editor.on('keydown', keydown);
      editor.on('nodechange', syncSelection);
      handlers = $_41pgl8jhjctdj3jt.some(handlerStruct({
        mousedown: mouseDown,
        mouseover: mouseOver,
        mouseup: mouseUp,
        keyup: keyup,
        keydown: keydown
      }));
    });
    var destroy = function () {
      handlers.each(function (handlers) {
      });
    };
    return {
      clear: annotations.clear,
      destroy: destroy
    };
  };

  var Selections = function (editor) {
    var get = function () {
      var body = $_63yklhn2jctdj42q.getBody(editor);
      return $_1tporrl3jctdj3r8.retrieve(body, $_fxid8jlgjctdj3tv.selectedSelector()).fold(function () {
        if (editor.selection.getStart() === undefined) {
          return $_ejtj79lhjctdj3tx.none();
        } else {
          return $_ejtj79lhjctdj3tx.single(editor.selection);
        }
      }, function (cells) {
        return $_ejtj79lhjctdj3tx.multiple(cells);
      });
    };
    return { get: get };
  };

  var each$4 = Tools.each;
  var addButtons = function (editor) {
    var menuItems = [];
    each$4('inserttable tableprops deletetable | cell row column'.split(' '), function (name) {
      if (name === '|') {
        menuItems.push({ text: '-' });
      } else {
        menuItems.push(editor.menuItems[name]);
      }
    });
    editor.addButton('table', {
      type: 'menubutton',
      title: 'Table',
      menu: menuItems
    });
    function cmd(command) {
      return function () {
        editor.execCommand(command);
      };
    }
    editor.addButton('tableprops', {
      title: 'Table properties',
      onclick: $_17hg00jijctdj3jv.curry($_y2di3n8jctdj43j.open, editor, true),
      icon: 'table'
    });
    editor.addButton('tabledelete', {
      title: 'Delete table',
      onclick: cmd('mceTableDelete')
    });
    editor.addButton('tablecellprops', {
      title: 'Cell properties',
      onclick: cmd('mceTableCellProps')
    });
    editor.addButton('tablemergecells', {
      title: 'Merge cells',
      onclick: cmd('mceTableMergeCells')
    });
    editor.addButton('tablesplitcells', {
      title: 'Split cell',
      onclick: cmd('mceTableSplitCells')
    });
    editor.addButton('tableinsertrowbefore', {
      title: 'Insert row before',
      onclick: cmd('mceTableInsertRowBefore')
    });
    editor.addButton('tableinsertrowafter', {
      title: 'Insert row after',
      onclick: cmd('mceTableInsertRowAfter')
    });
    editor.addButton('tabledeleterow', {
      title: 'Delete row',
      onclick: cmd('mceTableDeleteRow')
    });
    editor.addButton('tablerowprops', {
      title: 'Row properties',
      onclick: cmd('mceTableRowProps')
    });
    editor.addButton('tablecutrow', {
      title: 'Cut row',
      onclick: cmd('mceTableCutRow')
    });
    editor.addButton('tablecopyrow', {
      title: 'Copy row',
      onclick: cmd('mceTableCopyRow')
    });
    editor.addButton('tablepasterowbefore', {
      title: 'Paste row before',
      onclick: cmd('mceTablePasteRowBefore')
    });
    editor.addButton('tablepasterowafter', {
      title: 'Paste row after',
      onclick: cmd('mceTablePasteRowAfter')
    });
    editor.addButton('tableinsertcolbefore', {
      title: 'Insert column before',
      onclick: cmd('mceTableInsertColBefore')
    });
    editor.addButton('tableinsertcolafter', {
      title: 'Insert column after',
      onclick: cmd('mceTableInsertColAfter')
    });
    editor.addButton('tabledeletecol', {
      title: 'Delete column',
      onclick: cmd('mceTableDeleteCol')
    });
  };
  var addToolbars = function (editor) {
    var isTable = function (table) {
      var selectorMatched = editor.dom.is(table, 'table') && editor.getBody().contains(table);
      return selectorMatched;
    };
    var toolbarItems = editor.settings.table_toolbar;
    if (toolbarItems === '' || toolbarItems === false) {
      return;
    }
    if (!toolbarItems) {
      toolbarItems = 'tableprops tabledelete | ' + 'tableinsertrowbefore tableinsertrowafter tabledeleterow | ' + 'tableinsertcolbefore tableinsertcolafter tabledeletecol';
    }
    editor.addContextToolbar(isTable, toolbarItems);
  };
  var $_26ovubpbjctdj4fk = {
    addButtons: addButtons,
    addToolbars: addToolbars
  };

  var addMenuItems = function (editor, selections) {
    var targets = $_41pgl8jhjctdj3jt.none();
    var tableCtrls = [];
    var cellCtrls = [];
    var mergeCtrls = [];
    var unmergeCtrls = [];
    var noTargetDisable = function (ctrl) {
      ctrl.disabled(true);
    };
    var ctrlEnable = function (ctrl) {
      ctrl.disabled(false);
    };
    var pushTable = function () {
      var self = this;
      tableCtrls.push(self);
      targets.fold(function () {
        noTargetDisable(self);
      }, function (targets) {
        ctrlEnable(self);
      });
    };
    var pushCell = function () {
      var self = this;
      cellCtrls.push(self);
      targets.fold(function () {
        noTargetDisable(self);
      }, function (targets) {
        ctrlEnable(self);
      });
    };
    var pushMerge = function () {
      var self = this;
      mergeCtrls.push(self);
      targets.fold(function () {
        noTargetDisable(self);
      }, function (targets) {
        self.disabled(targets.mergable().isNone());
      });
    };
    var pushUnmerge = function () {
      var self = this;
      unmergeCtrls.push(self);
      targets.fold(function () {
        noTargetDisable(self);
      }, function (targets) {
        self.disabled(targets.unmergable().isNone());
      });
    };
    var setDisabledCtrls = function () {
      targets.fold(function () {
        $_cya8qajgjctdj3jm.each(tableCtrls, noTargetDisable);
        $_cya8qajgjctdj3jm.each(cellCtrls, noTargetDisable);
        $_cya8qajgjctdj3jm.each(mergeCtrls, noTargetDisable);
        $_cya8qajgjctdj3jm.each(unmergeCtrls, noTargetDisable);
      }, function (targets) {
        $_cya8qajgjctdj3jm.each(tableCtrls, ctrlEnable);
        $_cya8qajgjctdj3jm.each(cellCtrls, ctrlEnable);
        $_cya8qajgjctdj3jm.each(mergeCtrls, function (mergeCtrl) {
          mergeCtrl.disabled(targets.mergable().isNone());
        });
        $_cya8qajgjctdj3jm.each(unmergeCtrls, function (unmergeCtrl) {
          unmergeCtrl.disabled(targets.unmergable().isNone());
        });
      });
    };
    editor.on('init', function () {
      editor.on('nodechange', function (e) {
        var cellOpt = $_41pgl8jhjctdj3jt.from(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
        targets = cellOpt.bind(function (cellDom) {
          var cell = $_4jfq4gjvjctdj3lt.fromDom(cellDom);
          var table = $_1mbzcijsjctdj3l1.table(cell);
          return table.map(function (table) {
            return $_8dhzxcl1jctdj3qr.forMenu(selections, table, cell);
          });
        });
        setDisabledCtrls();
      });
    });
    var generateTableGrid = function () {
      var html = '';
      html = '<table role="grid" class="mce-grid mce-grid-border" aria-readonly="true">';
      for (var y = 0; y < 10; y++) {
        html += '<tr>';
        for (var x = 0; x < 10; x++) {
          html += '<td role="gridcell" tabindex="-1"><a id="mcegrid' + (y * 10 + x) + '" href="#" ' + 'data-mce-x="' + x + '" data-mce-y="' + y + '"></a></td>';
        }
        html += '</tr>';
      }
      html += '</table>';
      html += '<div class="mce-text-center" role="presentation">1 x 1</div>';
      return html;
    };
    var selectGrid = function (editor, tx, ty, control) {
      var table = control.getEl().getElementsByTagName('table')[0];
      var x, y, focusCell, cell, active;
      var rtl = control.isRtl() || control.parent().rel === 'tl-tr';
      table.nextSibling.innerHTML = tx + 1 + ' x ' + (ty + 1);
      if (rtl) {
        tx = 9 - tx;
      }
      for (y = 0; y < 10; y++) {
        for (x = 0; x < 10; x++) {
          cell = table.rows[y].childNodes[x].firstChild;
          active = (rtl ? x >= tx : x <= tx) && y <= ty;
          editor.dom.toggleClass(cell, 'mce-active', active);
          if (active) {
            focusCell = cell;
          }
        }
      }
      return focusCell.parentNode;
    };
    var insertTable = editor.settings.table_grid === false ? {
      text: 'Table',
      icon: 'table',
      context: 'table',
      onclick: $_17hg00jijctdj3jv.curry($_y2di3n8jctdj43j.open, editor)
    } : {
      text: 'Table',
      icon: 'table',
      context: 'table',
      ariaHideMenu: true,
      onclick: function (e) {
        if (e.aria) {
          this.parent().hideAll();
          e.stopImmediatePropagation();
          $_y2di3n8jctdj43j.open(editor);
        }
      },
      onshow: function () {
        selectGrid(editor, 0, 0, this.menu.items()[0]);
      },
      onhide: function () {
        var elements = this.menu.items()[0].getEl().getElementsByTagName('a');
        editor.dom.removeClass(elements, 'mce-active');
        editor.dom.addClass(elements[0], 'mce-active');
      },
      menu: [{
          type: 'container',
          html: generateTableGrid(),
          onPostRender: function () {
            this.lastX = this.lastY = 0;
          },
          onmousemove: function (e) {
            var target = e.target;
            var x, y;
            if (target.tagName.toUpperCase() === 'A') {
              x = parseInt(target.getAttribute('data-mce-x'), 10);
              y = parseInt(target.getAttribute('data-mce-y'), 10);
              if (this.isRtl() || this.parent().rel === 'tl-tr') {
                x = 9 - x;
              }
              if (x !== this.lastX || y !== this.lastY) {
                selectGrid(editor, x, y, e.control);
                this.lastX = x;
                this.lastY = y;
              }
            }
          },
          onclick: function (e) {
            var self = this;
            if (e.target.tagName.toUpperCase() === 'A') {
              e.preventDefault();
              e.stopPropagation();
              self.parent().cancel();
              editor.undoManager.transact(function () {
                $_ddzxjrljjctdj3u3.insert(editor, self.lastX + 1, self.lastY + 1);
              });
              editor.addVisual();
            }
          }
        }]
    };
    function cmd(command) {
      return function () {
        editor.execCommand(command);
      };
    }
    var tableProperties = {
      text: 'Table properties',
      context: 'table',
      onPostRender: pushTable,
      onclick: $_17hg00jijctdj3jv.curry($_y2di3n8jctdj43j.open, editor, true)
    };
    var deleteTable = {
      text: 'Delete table',
      context: 'table',
      onPostRender: pushTable,
      cmd: 'mceTableDelete'
    };
    var row = {
      text: 'Row',
      context: 'table',
      menu: [
        {
          text: 'Insert row before',
          onclick: cmd('mceTableInsertRowBefore'),
          onPostRender: pushCell
        },
        {
          text: 'Insert row after',
          onclick: cmd('mceTableInsertRowAfter'),
          onPostRender: pushCell
        },
        {
          text: 'Delete row',
          onclick: cmd('mceTableDeleteRow'),
          onPostRender: pushCell
        },
        {
          text: 'Row properties',
          onclick: cmd('mceTableRowProps'),
          onPostRender: pushCell
        },
        { text: '-' },
        {
          text: 'Cut row',
          onclick: cmd('mceTableCutRow'),
          onPostRender: pushCell
        },
        {
          text: 'Copy row',
          onclick: cmd('mceTableCopyRow'),
          onPostRender: pushCell
        },
        {
          text: 'Paste row before',
          onclick: cmd('mceTablePasteRowBefore'),
          onPostRender: pushCell
        },
        {
          text: 'Paste row after',
          onclick: cmd('mceTablePasteRowAfter'),
          onPostRender: pushCell
        }
      ]
    };
    var column = {
      text: 'Column',
      context: 'table',
      menu: [
        {
          text: 'Insert column before',
          onclick: cmd('mceTableInsertColBefore'),
          onPostRender: pushCell
        },
        {
          text: 'Insert column after',
          onclick: cmd('mceTableInsertColAfter'),
          onPostRender: pushCell
        },
        {
          text: 'Delete column',
          onclick: cmd('mceTableDeleteCol'),
          onPostRender: pushCell
        }
      ]
    };
    var cell = {
      separator: 'before',
      text: 'Cell',
      context: 'table',
      menu: [
        {
          text: 'Cell properties',
          onclick: cmd('mceTableCellProps'),
          onPostRender: pushCell
        },
        {
          text: 'Merge cells',
          onclick: cmd('mceTableMergeCells'),
          onPostRender: pushMerge
        },
        {
          text: 'Split cell',
          onclick: cmd('mceTableSplitCells'),
          onPostRender: pushUnmerge
        }
      ]
    };
    editor.addMenuItem('inserttable', insertTable);
    editor.addMenuItem('tableprops', tableProperties);
    editor.addMenuItem('deletetable', deleteTable);
    editor.addMenuItem('row', row);
    editor.addMenuItem('column', column);
    editor.addMenuItem('cell', cell);
  };
  var $_9qt5nkpcjctdj4fp = { addMenuItems: addMenuItems };

  function Plugin(editor) {
    var self = this;
    var resizeHandler = ResizeHandler(editor);
    var cellSelection = CellSelection$1(editor, resizeHandler.lazyResize);
    var actions = TableActions(editor, resizeHandler.lazyWire);
    var selections = Selections(editor);
    $_axulq9n5jctdj42y.registerCommands(editor, actions, cellSelection, selections);
    $_datyonjfjctdj3j7.registerEvents(editor, selections, actions, cellSelection);
    $_9qt5nkpcjctdj4fp.addMenuItems(editor, selections);
    $_26ovubpbjctdj4fk.addButtons(editor);
    $_26ovubpbjctdj4fk.addToolbars(editor);
    editor.on('PreInit', function () {
      editor.serializer.addTempAttr($_fxid8jlgjctdj3tv.firstSelected());
      editor.serializer.addTempAttr($_fxid8jlgjctdj3tv.lastSelected());
    });
    if (editor.settings.table_tab_navigation !== false) {
      editor.on('keydown', function (e) {
        $_8h5fcbo0jctdj47v.handle(e, editor, actions, resizeHandler.lazyWire);
      });
    }
    editor.on('remove', function () {
      resizeHandler.destroy();
      cellSelection.destroy();
    });
    self.insertTable = function (columns, rows) {
      return $_ddzxjrljjctdj3u3.insert(editor, columns, rows);
    };
    self.setClipboardRows = $_axulq9n5jctdj42y.setClipboardRows;
    self.getClipboardRows = $_axulq9n5jctdj42y.getClipboardRows;
  }
  PluginManager.add('table', Plugin);
  var Plugin$1 = function () {
  };

  return Plugin$1;

}());
})()
