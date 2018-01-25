(function () {
var mobile = (function () {
  'use strict';

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
  var $_nsetdwbjctdj67z = {
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

  var never = $_nsetdwbjctdj67z.never;
  var always = $_nsetdwbjctdj67z.always;
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
      toString: $_nsetdwbjctdj67z.constant('none()')
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
  var $_1k5gi0wajctdj67w = {
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
    return r === -1 ? $_1k5gi0wajctdj67w.none() : $_1k5gi0wajctdj67w.some(r);
  };
  var contains$1 = function (xs, x) {
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
        return $_1k5gi0wajctdj67w.some(x);
      }
    }
    return $_1k5gi0wajctdj67w.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return $_1k5gi0wajctdj67w.some(i);
      }
    }
    return $_1k5gi0wajctdj67w.none();
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
      return !contains$1(a2, x);
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
    return xs.length === 0 ? $_1k5gi0wajctdj67w.none() : $_1k5gi0wajctdj67w.some(xs[0]);
  };
  var last = function (xs) {
    return xs.length === 0 ? $_1k5gi0wajctdj67w.none() : $_1k5gi0wajctdj67w.some(xs[xs.length - 1]);
  };
  var $_85zw6hw9jctdj67p = {
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
    contains: contains$1,
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
  var $_7uk0w6wejctdj685 = {
    path: path,
    resolve: resolve,
    forge: forge,
    namespace: namespace
  };

  var unsafe = function (name, scope) {
    return $_7uk0w6wejctdj685.resolve(name, scope);
  };
  var getOrDie = function (name, scope) {
    var actual = unsafe(name, scope);
    if (actual === undefined || actual === null)
      throw name + ' not available on this browser';
    return actual;
  };
  var $_1oxumhwdjctdj683 = { getOrDie: getOrDie };

  var node = function () {
    var f = $_1oxumhwdjctdj683.getOrDie('Node');
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
  var $_9xh6u3wcjctdj682 = {
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
  var $_c9x4bqwhjctdj689 = { cached: cached };

  var firstMatch = function (regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];
      if (x.test(s))
        return x;
    }
    return undefined;
  };
  var find$1 = function (regexes, agent) {
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
    return find$1(versionRegexes, cleanedAgent);
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
  var $_26uorkwkjctdj68e = {
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
      version: $_26uorkwkjctdj68e.unknown()
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
  var $_7olemrwjjctdj68b = {
    unknown: unknown,
    nu: nu,
    edge: $_nsetdwbjctdj67z.constant(edge),
    chrome: $_nsetdwbjctdj67z.constant(chrome),
    ie: $_nsetdwbjctdj67z.constant(ie),
    opera: $_nsetdwbjctdj67z.constant(opera),
    firefox: $_nsetdwbjctdj67z.constant(firefox),
    safari: $_nsetdwbjctdj67z.constant(safari)
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
      version: $_26uorkwkjctdj68e.unknown()
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
  var $_37cdbiwljctdj68g = {
    unknown: unknown$2,
    nu: nu$2,
    windows: $_nsetdwbjctdj67z.constant(windows),
    ios: $_nsetdwbjctdj67z.constant(ios),
    android: $_nsetdwbjctdj67z.constant(android),
    linux: $_nsetdwbjctdj67z.constant(linux),
    osx: $_nsetdwbjctdj67z.constant(osx),
    solaris: $_nsetdwbjctdj67z.constant(solaris),
    freebsd: $_nsetdwbjctdj67z.constant(freebsd)
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
      isiPad: $_nsetdwbjctdj67z.constant(isiPad),
      isiPhone: $_nsetdwbjctdj67z.constant(isiPhone),
      isTablet: $_nsetdwbjctdj67z.constant(isTablet),
      isPhone: $_nsetdwbjctdj67z.constant(isPhone),
      isTouch: $_nsetdwbjctdj67z.constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: $_nsetdwbjctdj67z.constant(iOSwebview)
    };
  };

  var detect$3 = function (candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return $_85zw6hw9jctdj67p.find(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };
  var detectBrowser = function (browsers, userAgent) {
    return detect$3(browsers, userAgent).map(function (browser) {
      var version = $_26uorkwkjctdj68e.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };
  var detectOs = function (oses, userAgent) {
    return detect$3(oses, userAgent).map(function (os) {
      var version = $_26uorkwkjctdj68e.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };
  var $_57zbttwnjctdj68l = {
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
  var $_7mpcktwqjctdj68v = {
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
    return str === '' ? $_1k5gi0wajctdj67w.none() : $_1k5gi0wajctdj67w.some(str.substr(0, 1));
  };
  var tail = function (str) {
    return str === '' ? $_1k5gi0wajctdj67w.none() : $_1k5gi0wajctdj67w.some(str.substring(1));
  };
  var $_e6edngwrjctdj694 = {
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
    return startsWith(str, prefix) ? $_7mpcktwqjctdj68v.removeFromStart(str, prefix.length) : str;
  };
  var removeTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? $_7mpcktwqjctdj68v.removeFromEnd(str, prefix.length) : str;
  };
  var ensureLeading = function (str, prefix) {
    return startsWith(str, prefix) ? str : $_7mpcktwqjctdj68v.addToStart(str, prefix);
  };
  var ensureTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? str : $_7mpcktwqjctdj68v.addToEnd(str, prefix);
  };
  var contains$2 = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };
  var capitalize = function (str) {
    return $_e6edngwrjctdj694.head(str).bind(function (head) {
      return $_e6edngwrjctdj694.tail(str).map(function (tail) {
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
  var $_c6n415wpjctdj68s = {
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
      return $_c6n415wpjctdj68s.contains(uastring, target);
    };
  };
  var browsers = [
    {
      name: 'Edge',
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function (uastring) {
        var monstrosity = $_c6n415wpjctdj68s.contains(uastring, 'edge/') && $_c6n415wpjctdj68s.contains(uastring, 'chrome') && $_c6n415wpjctdj68s.contains(uastring, 'safari') && $_c6n415wpjctdj68s.contains(uastring, 'applewebkit');
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
        return $_c6n415wpjctdj68s.contains(uastring, 'chrome') && !$_c6n415wpjctdj68s.contains(uastring, 'chromeframe');
      }
    },
    {
      name: 'IE',
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: function (uastring) {
        return $_c6n415wpjctdj68s.contains(uastring, 'msie') || $_c6n415wpjctdj68s.contains(uastring, 'trident');
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
        return ($_c6n415wpjctdj68s.contains(uastring, 'safari') || $_c6n415wpjctdj68s.contains(uastring, 'mobile/')) && $_c6n415wpjctdj68s.contains(uastring, 'applewebkit');
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
        return $_c6n415wpjctdj68s.contains(uastring, 'iphone') || $_c6n415wpjctdj68s.contains(uastring, 'ipad');
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
  var $_g3rasywojctdj68o = {
    browsers: $_nsetdwbjctdj67z.constant(browsers),
    oses: $_nsetdwbjctdj67z.constant(oses)
  };

  var detect$1 = function (userAgent) {
    var browsers = $_g3rasywojctdj68o.browsers();
    var oses = $_g3rasywojctdj68o.oses();
    var browser = $_57zbttwnjctdj68l.detectBrowser(browsers, userAgent).fold($_7olemrwjjctdj68b.unknown, $_7olemrwjjctdj68b.nu);
    var os = $_57zbttwnjctdj68l.detectOs(oses, userAgent).fold($_37cdbiwljctdj68g.unknown, $_37cdbiwljctdj68g.nu);
    var deviceType = DeviceType(os, browser, userAgent);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };
  var $_7083p6wijctdj68a = { detect: detect$1 };

  var detect = $_c9x4bqwhjctdj689.cached(function () {
    var userAgent = navigator.userAgent;
    return $_7083p6wijctdj68a.detect(userAgent);
  });
  var $_3owkqnwgjctdj687 = { detect: detect };

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
    return { dom: $_nsetdwbjctdj67z.constant(node) };
  };
  var fromPoint = function (doc, x, y) {
    return $_1k5gi0wajctdj67w.from(doc.dom().elementFromPoint(x, y)).map(fromDom);
  };
  var $_bvayi3wtjctdj69a = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var $_6mtp59wujctdj69d = {
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

  var ELEMENT = $_6mtp59wujctdj69d.ELEMENT;
  var DOCUMENT = $_6mtp59wujctdj69d.DOCUMENT;
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
    return bypassSelector(base) ? [] : $_85zw6hw9jctdj67p.map(base.querySelectorAll(selector), $_bvayi3wtjctdj69a.fromDom);
  };
  var one = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? $_1k5gi0wajctdj67w.none() : $_1k5gi0wajctdj67w.from(base.querySelector(selector)).map($_bvayi3wtjctdj69a.fromDom);
  };
  var $_ecdommwsjctdj696 = {
    all: all,
    is: is,
    one: one
  };

  var eq = function (e1, e2) {
    return e1.dom() === e2.dom();
  };
  var isEqualNode = function (e1, e2) {
    return e1.dom().isEqualNode(e2.dom());
  };
  var member = function (element, elements) {
    return $_85zw6hw9jctdj67p.exists(elements, $_nsetdwbjctdj67z.curry(eq, element));
  };
  var regularContains = function (e1, e2) {
    var d1 = e1.dom(), d2 = e2.dom();
    return d1 === d2 ? false : d1.contains(d2);
  };
  var ieContains = function (e1, e2) {
    return $_9xh6u3wcjctdj682.documentPositionContainedBy(e1.dom(), e2.dom());
  };
  var browser = $_3owkqnwgjctdj687.detect().browser;
  var contains = browser.isIE() ? ieContains : regularContains;
  var $_a6ax5bw8jctdj67h = {
    eq: eq,
    isEqualNode: isEqualNode,
    member: member,
    contains: contains,
    is: $_ecdommwsjctdj696.is
  };

  var isSource = function (component, simulatedEvent) {
    return $_a6ax5bw8jctdj67h.eq(component.element(), simulatedEvent.event().target());
  };
  var $_rs355w7jctdj67f = { isSource: isSource };

  var $_3mycfwxjctdj69n = {
    contextmenu: $_nsetdwbjctdj67z.constant('contextmenu'),
    touchstart: $_nsetdwbjctdj67z.constant('touchstart'),
    touchmove: $_nsetdwbjctdj67z.constant('touchmove'),
    touchend: $_nsetdwbjctdj67z.constant('touchend'),
    gesturestart: $_nsetdwbjctdj67z.constant('gesturestart'),
    mousedown: $_nsetdwbjctdj67z.constant('mousedown'),
    mousemove: $_nsetdwbjctdj67z.constant('mousemove'),
    mouseout: $_nsetdwbjctdj67z.constant('mouseout'),
    mouseup: $_nsetdwbjctdj67z.constant('mouseup'),
    mouseover: $_nsetdwbjctdj67z.constant('mouseover'),
    focusin: $_nsetdwbjctdj67z.constant('focusin'),
    keydown: $_nsetdwbjctdj67z.constant('keydown'),
    input: $_nsetdwbjctdj67z.constant('input'),
    change: $_nsetdwbjctdj67z.constant('change'),
    focus: $_nsetdwbjctdj67z.constant('focus'),
    click: $_nsetdwbjctdj67z.constant('click'),
    transitionend: $_nsetdwbjctdj67z.constant('transitionend'),
    selectstart: $_nsetdwbjctdj67z.constant('selectstart')
  };

  var alloy = { tap: $_nsetdwbjctdj67z.constant('alloy.tap') };
  var $_8rri5bwwjctdj69j = {
    focus: $_nsetdwbjctdj67z.constant('alloy.focus'),
    postBlur: $_nsetdwbjctdj67z.constant('alloy.blur.post'),
    receive: $_nsetdwbjctdj67z.constant('alloy.receive'),
    execute: $_nsetdwbjctdj67z.constant('alloy.execute'),
    focusItem: $_nsetdwbjctdj67z.constant('alloy.focus.item'),
    tap: alloy.tap,
    tapOrClick: $_3owkqnwgjctdj687.detect().deviceType.isTouch() ? alloy.tap : $_3mycfwxjctdj69n.click,
    longpress: $_nsetdwbjctdj67z.constant('alloy.longpress'),
    sandboxClose: $_nsetdwbjctdj67z.constant('alloy.sandbox.close'),
    systemInit: $_nsetdwbjctdj67z.constant('alloy.system.init'),
    windowScroll: $_nsetdwbjctdj67z.constant('alloy.system.scroll'),
    attachedToDom: $_nsetdwbjctdj67z.constant('alloy.system.attached'),
    detachedFromDom: $_nsetdwbjctdj67z.constant('alloy.system.detached'),
    changeTab: $_nsetdwbjctdj67z.constant('alloy.change.tab'),
    dismissTab: $_nsetdwbjctdj67z.constant('alloy.dismiss.tab')
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
  var $_1lp13rwzjctdj69r = {
    isString: isType('string'),
    isObject: isType('object'),
    isArray: isType('array'),
    isNull: isType('null'),
    isBoolean: isType('boolean'),
    isUndefined: isType('undefined'),
    isFunction: isType('function'),
    isNumber: isType('number')
  };

  var shallow = function (old, nu) {
    return nu;
  };
  var deep = function (old, nu) {
    var bothObjects = $_1lp13rwzjctdj69r.isObject(old) && $_1lp13rwzjctdj69r.isObject(nu);
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
  var deepMerge = baseMerge(deep);
  var merge = baseMerge(shallow);
  var $_fwvrcwwyjctdj69p = {
    deepMerge: deepMerge,
    merge: merge
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
  var find$2 = function (obj, pred) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      if (pred(x, i, obj)) {
        return $_1k5gi0wajctdj67w.some(x);
      }
    }
    return $_1k5gi0wajctdj67w.none();
  };
  var values = function (obj) {
    return mapToArray(obj, function (v) {
      return v;
    });
  };
  var size = function (obj) {
    return values(obj).length;
  };
  var $_sbi53x0jctdj69s = {
    bifilter: bifilter,
    each: each$1,
    map: objectMap,
    mapToArray: mapToArray,
    tupleMap: tupleMap,
    find: find$2,
    keys: keys,
    values: values,
    size: size
  };

  var emit = function (component, event) {
    dispatchWith(component, component.element(), event, {});
  };
  var emitWith = function (component, event, properties) {
    dispatchWith(component, component.element(), event, properties);
  };
  var emitExecute = function (component) {
    emit(component, $_8rri5bwwjctdj69j.execute());
  };
  var dispatch = function (component, target, event) {
    dispatchWith(component, target, event, {});
  };
  var dispatchWith = function (component, target, event, properties) {
    var data = $_fwvrcwwyjctdj69p.deepMerge({ target: target }, properties);
    component.getSystem().triggerEvent(event, target, $_sbi53x0jctdj69s.map(data, $_nsetdwbjctdj67z.constant));
  };
  var dispatchEvent = function (component, target, event, simulatedEvent) {
    component.getSystem().triggerEvent(event, target, simulatedEvent.event());
  };
  var dispatchFocus = function (component, target) {
    component.getSystem().triggerFocus(target, component.element());
  };
  var $_axzm60wvjctdj69e = {
    emit: emit,
    emitWith: emitWith,
    emitExecute: emitExecute,
    dispatch: dispatch,
    dispatchWith: dispatchWith,
    dispatchEvent: dispatchEvent,
    dispatchFocus: dispatchFocus
  };

  var generate = function (cases) {
    if (!$_1lp13rwzjctdj69r.isArray(cases)) {
      throw new Error('cases must be an array');
    }
    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }
    var constructors = [];
    var adt = {};
    $_85zw6hw9jctdj67p.each(cases, function (acase, count) {
      var keys = $_sbi53x0jctdj69s.keys(acase);
      if (keys.length !== 1) {
        throw new Error('one and only one name per case');
      }
      var key = keys[0];
      var value = acase[key];
      if (adt[key] !== undefined) {
        throw new Error('duplicate key detected:' + key);
      } else if (key === 'cata') {
        throw new Error('cannot have a case named cata (sorry)');
      } else if (!$_1lp13rwzjctdj69r.isArray(value)) {
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
          var branchKeys = $_sbi53x0jctdj69s.keys(branches);
          if (constructors.length !== branchKeys.length) {
            throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
          }
          var allReqd = $_85zw6hw9jctdj67p.forall(constructors, function (reqKey) {
            return $_85zw6hw9jctdj67p.contains(branchKeys, reqKey);
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
  var $_e0y7kwx4jctdj6ap = { generate: generate };

  var adt = $_e0y7kwx4jctdj6ap.generate([
    { strict: [] },
    { defaultedThunk: ['fallbackThunk'] },
    { asOption: [] },
    { asDefaultedOptionThunk: ['fallbackThunk'] },
    { mergeWithThunk: ['baseThunk'] }
  ]);
  var defaulted$1 = function (fallback) {
    return adt.defaultedThunk($_nsetdwbjctdj67z.constant(fallback));
  };
  var asDefaultedOption = function (fallback) {
    return adt.asDefaultedOptionThunk($_nsetdwbjctdj67z.constant(fallback));
  };
  var mergeWith = function (base) {
    return adt.mergeWithThunk($_nsetdwbjctdj67z.constant(base));
  };
  var $_2nm6jxx3jctdj6am = {
    strict: adt.strict,
    asOption: adt.asOption,
    defaulted: defaulted$1,
    defaultedThunk: adt.defaultedThunk,
    asDefaultedOption: asDefaultedOption,
    asDefaultedOptionThunk: adt.asDefaultedOptionThunk,
    mergeWith: mergeWith,
    mergeWithThunk: adt.mergeWithThunk
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
      return $_1k5gi0wajctdj67w.some(o);
    };
    return {
      is: is,
      isValue: $_nsetdwbjctdj67z.constant(true),
      isError: $_nsetdwbjctdj67z.constant(false),
      getOr: $_nsetdwbjctdj67z.constant(o),
      getOrThunk: $_nsetdwbjctdj67z.constant(o),
      getOrDie: $_nsetdwbjctdj67z.constant(o),
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
      return $_nsetdwbjctdj67z.die(message)();
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
      is: $_nsetdwbjctdj67z.constant(false),
      isValue: $_nsetdwbjctdj67z.constant(false),
      isError: $_nsetdwbjctdj67z.constant(true),
      getOr: $_nsetdwbjctdj67z.identity,
      getOrThunk: getOrThunk,
      getOrDie: getOrDie,
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: $_nsetdwbjctdj67z.noop,
      bind: bind,
      exists: $_nsetdwbjctdj67z.constant(false),
      forall: $_nsetdwbjctdj67z.constant(true),
      toOption: $_1k5gi0wajctdj67w.none
    };
  };
  var $_dk7ndjx8jctdj6bo = {
    value: value$1,
    error: error
  };

  var comparison = $_e0y7kwx4jctdj6ap.generate([
    {
      bothErrors: [
        'error1',
        'error2'
      ]
    },
    {
      firstError: [
        'error1',
        'value2'
      ]
    },
    {
      secondError: [
        'value1',
        'error2'
      ]
    },
    {
      bothValues: [
        'value1',
        'value2'
      ]
    }
  ]);
  var partition$1 = function (results) {
    var errors = [];
    var values = [];
    $_85zw6hw9jctdj67p.each(results, function (result) {
      result.fold(function (err) {
        errors.push(err);
      }, function (value) {
        values.push(value);
      });
    });
    return {
      errors: errors,
      values: values
    };
  };
  var compare = function (result1, result2) {
    return result1.fold(function (err1) {
      return result2.fold(function (err2) {
        return comparison.bothErrors(err1, err2);
      }, function (val2) {
        return comparison.firstError(err1, val2);
      });
    }, function (val1) {
      return result2.fold(function (err2) {
        return comparison.secondError(val1, err2);
      }, function (val2) {
        return comparison.bothValues(val1, val2);
      });
    });
  };
  var $_61t4j8x9jctdj6bq = {
    partition: partition$1,
    compare: compare
  };

  var mergeValues = function (values, base) {
    return $_dk7ndjx8jctdj6bo.value($_fwvrcwwyjctdj69p.deepMerge.apply(undefined, [base].concat(values)));
  };
  var mergeErrors = function (errors) {
    return $_nsetdwbjctdj67z.compose($_dk7ndjx8jctdj6bo.error, $_85zw6hw9jctdj67p.flatten)(errors);
  };
  var consolidateObj = function (objects, base) {
    var partitions = $_61t4j8x9jctdj6bq.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : mergeValues(partitions.values, base);
  };
  var consolidateArr = function (objects) {
    var partitions = $_61t4j8x9jctdj6bq.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : $_dk7ndjx8jctdj6bo.value(partitions.values);
  };
  var $_c34pdxx7jctdj6bi = {
    consolidateObj: consolidateObj,
    consolidateArr: consolidateArr
  };

  var narrow$1 = function (obj, fields) {
    var r = {};
    $_85zw6hw9jctdj67p.each(fields, function (field) {
      if (obj[field] !== undefined && obj.hasOwnProperty(field))
        r[field] = obj[field];
    });
    return r;
  };
  var indexOnKey$1 = function (array, key) {
    var obj = {};
    $_85zw6hw9jctdj67p.each(array, function (a) {
      var keyValue = a[key];
      obj[keyValue] = a;
    });
    return obj;
  };
  var exclude$1 = function (obj, fields) {
    var r = {};
    $_sbi53x0jctdj69s.each(obj, function (v, k) {
      if (!$_85zw6hw9jctdj67p.contains(fields, k)) {
        r[k] = v;
      }
    });
    return r;
  };
  var $_2yht5yxajctdj6bs = {
    narrow: narrow$1,
    exclude: exclude$1,
    indexOnKey: indexOnKey$1
  };

  var readOpt$1 = function (key) {
    return function (obj) {
      return obj.hasOwnProperty(key) ? $_1k5gi0wajctdj67w.from(obj[key]) : $_1k5gi0wajctdj67w.none();
    };
  };
  var readOr$1 = function (key, fallback) {
    return function (obj) {
      return readOpt$1(key)(obj).getOr(fallback);
    };
  };
  var readOptFrom$1 = function (obj, key) {
    return readOpt$1(key)(obj);
  };
  var hasKey$1 = function (obj, key) {
    return obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null;
  };
  var $_etjp2oxbjctdj6bw = {
    readOpt: readOpt$1,
    readOr: readOr$1,
    readOptFrom: readOptFrom$1,
    hasKey: hasKey$1
  };

  var wrap$1 = function (key, value) {
    var r = {};
    r[key] = value;
    return r;
  };
  var wrapAll$1 = function (keyvalues) {
    var r = {};
    $_85zw6hw9jctdj67p.each(keyvalues, function (kv) {
      r[kv.key] = kv.value;
    });
    return r;
  };
  var $_5le3waxcjctdj6by = {
    wrap: wrap$1,
    wrapAll: wrapAll$1
  };

  var narrow = function (obj, fields) {
    return $_2yht5yxajctdj6bs.narrow(obj, fields);
  };
  var exclude = function (obj, fields) {
    return $_2yht5yxajctdj6bs.exclude(obj, fields);
  };
  var readOpt = function (key) {
    return $_etjp2oxbjctdj6bw.readOpt(key);
  };
  var readOr = function (key, fallback) {
    return $_etjp2oxbjctdj6bw.readOr(key, fallback);
  };
  var readOptFrom = function (obj, key) {
    return $_etjp2oxbjctdj6bw.readOptFrom(obj, key);
  };
  var wrap = function (key, value) {
    return $_5le3waxcjctdj6by.wrap(key, value);
  };
  var wrapAll = function (keyvalues) {
    return $_5le3waxcjctdj6by.wrapAll(keyvalues);
  };
  var indexOnKey = function (array, key) {
    return $_2yht5yxajctdj6bs.indexOnKey(array, key);
  };
  var consolidate = function (objs, base) {
    return $_c34pdxx7jctdj6bi.consolidateObj(objs, base);
  };
  var hasKey = function (obj, key) {
    return $_etjp2oxbjctdj6bw.hasKey(obj, key);
  };
  var $_41rzpex6jctdj6bg = {
    narrow: narrow,
    exclude: exclude,
    readOpt: readOpt,
    readOr: readOr,
    readOptFrom: readOptFrom,
    wrap: wrap,
    wrapAll: wrapAll,
    indexOnKey: indexOnKey,
    hasKey: hasKey,
    consolidate: consolidate
  };

  var json = function () {
    return $_1oxumhwdjctdj683.getOrDie('JSON');
  };
  var parse = function (obj) {
    return json().parse(obj);
  };
  var stringify = function (obj, replacer, space) {
    return json().stringify(obj, replacer, space);
  };
  var $_e3y33nxfjctdj6c9 = {
    parse: parse,
    stringify: stringify
  };

  var formatObj = function (input) {
    return $_1lp13rwzjctdj69r.isObject(input) && $_sbi53x0jctdj69s.keys(input).length > 100 ? ' removed due to size' : $_e3y33nxfjctdj6c9.stringify(input, null, 2);
  };
  var formatErrors = function (errors) {
    var es = errors.length > 10 ? errors.slice(0, 10).concat([{
        path: [],
        getErrorInfo: function () {
          return '... (only showing first ten failures)';
        }
      }]) : errors;
    return $_85zw6hw9jctdj67p.map(es, function (e) {
      return 'Failed path: (' + e.path.join(' > ') + ')\n' + e.getErrorInfo();
    });
  };
  var $_2nt8rzxejctdj6c3 = {
    formatObj: formatObj,
    formatErrors: formatErrors
  };

  var nu$4 = function (path, getErrorInfo) {
    return $_dk7ndjx8jctdj6bo.error([{
        path: path,
        getErrorInfo: getErrorInfo
      }]);
  };
  var missingStrict = function (path, key, obj) {
    return nu$4(path, function () {
      return 'Could not find valid *strict* value for "' + key + '" in ' + $_2nt8rzxejctdj6c3.formatObj(obj);
    });
  };
  var missingKey = function (path, key) {
    return nu$4(path, function () {
      return 'Choice schema did not contain choice key: "' + key + '"';
    });
  };
  var missingBranch = function (path, branches, branch) {
    return nu$4(path, function () {
      return 'The chosen schema: "' + branch + '" did not exist in branches: ' + $_2nt8rzxejctdj6c3.formatObj(branches);
    });
  };
  var unsupportedFields = function (path, unsupported) {
    return nu$4(path, function () {
      return 'There are unsupported fields: [' + unsupported.join(', ') + '] specified';
    });
  };
  var custom = function (path, err) {
    return nu$4(path, function () {
      return err;
    });
  };
  var toString = function (error) {
    return 'Failed path: (' + error.path.join(' > ') + ')\n' + error.getErrorInfo();
  };
  var $_crmekexdjctdj6c0 = {
    missingStrict: missingStrict,
    missingKey: missingKey,
    missingBranch: missingBranch,
    unsupportedFields: unsupportedFields,
    custom: custom,
    toString: toString
  };

  var typeAdt = $_e0y7kwx4jctdj6ap.generate([
    {
      setOf: [
        'validator',
        'valueType'
      ]
    },
    { arrOf: ['valueType'] },
    { objOf: ['fields'] },
    { itemOf: ['validator'] },
    {
      choiceOf: [
        'key',
        'branches'
      ]
    }
  ]);
  var fieldAdt = $_e0y7kwx4jctdj6ap.generate([
    {
      field: [
        'name',
        'presence',
        'type'
      ]
    },
    { state: ['name'] }
  ]);
  var $_cg4bqvxgjctdj6ca = {
    typeAdt: typeAdt,
    fieldAdt: fieldAdt
  };

  var adt$1 = $_e0y7kwx4jctdj6ap.generate([
    {
      field: [
        'key',
        'okey',
        'presence',
        'prop'
      ]
    },
    {
      state: [
        'okey',
        'instantiator'
      ]
    }
  ]);
  var output = function (okey, value) {
    return adt$1.state(okey, $_nsetdwbjctdj67z.constant(value));
  };
  var snapshot = function (okey) {
    return adt$1.state(okey, $_nsetdwbjctdj67z.identity);
  };
  var strictAccess = function (path, obj, key) {
    return $_etjp2oxbjctdj6bw.readOptFrom(obj, key).fold(function () {
      return $_crmekexdjctdj6c0.missingStrict(path, key, obj);
    }, $_dk7ndjx8jctdj6bo.value);
  };
  var fallbackAccess = function (obj, key, fallbackThunk) {
    var v = $_etjp2oxbjctdj6bw.readOptFrom(obj, key).fold(function () {
      return fallbackThunk(obj);
    }, $_nsetdwbjctdj67z.identity);
    return $_dk7ndjx8jctdj6bo.value(v);
  };
  var optionAccess = function (obj, key) {
    return $_dk7ndjx8jctdj6bo.value($_etjp2oxbjctdj6bw.readOptFrom(obj, key));
  };
  var optionDefaultedAccess = function (obj, key, fallback) {
    var opt = $_etjp2oxbjctdj6bw.readOptFrom(obj, key).map(function (val) {
      return val === true ? fallback(obj) : val;
    });
    return $_dk7ndjx8jctdj6bo.value(opt);
  };
  var cExtractOne = function (path, obj, field, strength) {
    return field.fold(function (key, okey, presence, prop) {
      var bundle = function (av) {
        return prop.extract(path.concat([key]), strength, av).map(function (res) {
          return $_5le3waxcjctdj6by.wrap(okey, strength(res));
        });
      };
      var bundleAsOption = function (optValue) {
        return optValue.fold(function () {
          var outcome = $_5le3waxcjctdj6by.wrap(okey, strength($_1k5gi0wajctdj67w.none()));
          return $_dk7ndjx8jctdj6bo.value(outcome);
        }, function (ov) {
          return prop.extract(path.concat([key]), strength, ov).map(function (res) {
            return $_5le3waxcjctdj6by.wrap(okey, strength($_1k5gi0wajctdj67w.some(res)));
          });
        });
      };
      return function () {
        return presence.fold(function () {
          return strictAccess(path, obj, key).bind(bundle);
        }, function (fallbackThunk) {
          return fallbackAccess(obj, key, fallbackThunk).bind(bundle);
        }, function () {
          return optionAccess(obj, key).bind(bundleAsOption);
        }, function (fallbackThunk) {
          return optionDefaultedAccess(obj, key, fallbackThunk).bind(bundleAsOption);
        }, function (baseThunk) {
          var base = baseThunk(obj);
          return fallbackAccess(obj, key, $_nsetdwbjctdj67z.constant({})).map(function (v) {
            return $_fwvrcwwyjctdj69p.deepMerge(base, v);
          }).bind(bundle);
        });
      }();
    }, function (okey, instantiator) {
      var state = instantiator(obj);
      return $_dk7ndjx8jctdj6bo.value($_5le3waxcjctdj6by.wrap(okey, strength(state)));
    });
  };
  var cExtract = function (path, obj, fields, strength) {
    var results = $_85zw6hw9jctdj67p.map(fields, function (field) {
      return cExtractOne(path, obj, field, strength);
    });
    return $_c34pdxx7jctdj6bi.consolidateObj(results, {});
  };
  var value = function (validator) {
    var extract = function (path, strength, val) {
      return validator(val).fold(function (err) {
        return $_crmekexdjctdj6c0.custom(path, err);
      }, $_dk7ndjx8jctdj6bo.value);
    };
    var toString = function () {
      return 'val';
    };
    var toDsl = function () {
      return $_cg4bqvxgjctdj6ca.typeAdt.itemOf(validator);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var getSetKeys = function (obj) {
    var keys = $_sbi53x0jctdj69s.keys(obj);
    return $_85zw6hw9jctdj67p.filter(keys, function (k) {
      return $_41rzpex6jctdj6bg.hasKey(obj, k);
    });
  };
  var objOnly = function (fields) {
    var delegate = obj(fields);
    var fieldNames = $_85zw6hw9jctdj67p.foldr(fields, function (acc, f) {
      return f.fold(function (key) {
        return $_fwvrcwwyjctdj69p.deepMerge(acc, $_41rzpex6jctdj6bg.wrap(key, true));
      }, $_nsetdwbjctdj67z.constant(acc));
    }, {});
    var extract = function (path, strength, o) {
      var keys = $_1lp13rwzjctdj69r.isBoolean(o) ? [] : getSetKeys(o);
      var extra = $_85zw6hw9jctdj67p.filter(keys, function (k) {
        return !$_41rzpex6jctdj6bg.hasKey(fieldNames, k);
      });
      return extra.length === 0 ? delegate.extract(path, strength, o) : $_crmekexdjctdj6c0.unsupportedFields(path, extra);
    };
    return {
      extract: extract,
      toString: delegate.toString,
      toDsl: delegate.toDsl
    };
  };
  var obj = function (fields) {
    var extract = function (path, strength, o) {
      return cExtract(path, o, fields, strength);
    };
    var toString = function () {
      var fieldStrings = $_85zw6hw9jctdj67p.map(fields, function (field) {
        return field.fold(function (key, okey, presence, prop) {
          return key + ' -> ' + prop.toString();
        }, function (okey, instantiator) {
          return 'state(' + okey + ')';
        });
      });
      return 'obj{\n' + fieldStrings.join('\n') + '}';
    };
    var toDsl = function () {
      return $_cg4bqvxgjctdj6ca.typeAdt.objOf($_85zw6hw9jctdj67p.map(fields, function (f) {
        return f.fold(function (key, okey, presence, prop) {
          return $_cg4bqvxgjctdj6ca.fieldAdt.field(key, presence, prop);
        }, function (okey, instantiator) {
          return $_cg4bqvxgjctdj6ca.fieldAdt.state(okey);
        });
      }));
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var arr = function (prop) {
    var extract = function (path, strength, array) {
      var results = $_85zw6hw9jctdj67p.map(array, function (a, i) {
        return prop.extract(path.concat(['[' + i + ']']), strength, a);
      });
      return $_c34pdxx7jctdj6bi.consolidateArr(results);
    };
    var toString = function () {
      return 'array(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_cg4bqvxgjctdj6ca.typeAdt.arrOf(prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var setOf = function (validator, prop) {
    var validateKeys = function (path, keys) {
      return arr(value(validator)).extract(path, $_nsetdwbjctdj67z.identity, keys);
    };
    var extract = function (path, strength, o) {
      var keys = $_sbi53x0jctdj69s.keys(o);
      return validateKeys(path, keys).bind(function (validKeys) {
        var schema = $_85zw6hw9jctdj67p.map(validKeys, function (vk) {
          return adt$1.field(vk, vk, $_2nm6jxx3jctdj6am.strict(), prop);
        });
        return obj(schema).extract(path, strength, o);
      });
    };
    var toString = function () {
      return 'setOf(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_cg4bqvxgjctdj6ca.typeAdt.setOf(validator, prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var anyValue = value($_dk7ndjx8jctdj6bo.value);
  var arrOfObj = $_nsetdwbjctdj67z.compose(arr, obj);
  var $_g9k68px5jctdj6at = {
    anyValue: $_nsetdwbjctdj67z.constant(anyValue),
    value: value,
    obj: obj,
    objOnly: objOnly,
    arr: arr,
    setOf: setOf,
    arrOfObj: arrOfObj,
    state: adt$1.state,
    field: adt$1.field,
    output: output,
    snapshot: snapshot
  };

  var strict = function (key) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.strict(), $_g9k68px5jctdj6at.anyValue());
  };
  var strictOf = function (key, schema) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.strict(), schema);
  };
  var strictFunction = function (key) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.strict(), $_g9k68px5jctdj6at.value(function (f) {
      return $_1lp13rwzjctdj69r.isFunction(f) ? $_dk7ndjx8jctdj6bo.value(f) : $_dk7ndjx8jctdj6bo.error('Not a function');
    }));
  };
  var forbid = function (key, message) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.asOption(), $_g9k68px5jctdj6at.value(function (v) {
      return $_dk7ndjx8jctdj6bo.error('The field: ' + key + ' is forbidden. ' + message);
    }));
  };
  var strictArrayOf = function (key, prop) {
    return strictOf(key, prop);
  };
  var strictObjOf = function (key, objSchema) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.strict(), $_g9k68px5jctdj6at.obj(objSchema));
  };
  var strictArrayOfObj = function (key, objFields) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.strict(), $_g9k68px5jctdj6at.arrOfObj(objFields));
  };
  var option = function (key) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.asOption(), $_g9k68px5jctdj6at.anyValue());
  };
  var optionOf = function (key, schema) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.asOption(), schema);
  };
  var optionObjOf = function (key, objSchema) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.asOption(), $_g9k68px5jctdj6at.obj(objSchema));
  };
  var optionObjOfOnly = function (key, objSchema) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.asOption(), $_g9k68px5jctdj6at.objOnly(objSchema));
  };
  var defaulted = function (key, fallback) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.defaulted(fallback), $_g9k68px5jctdj6at.anyValue());
  };
  var defaultedOf = function (key, fallback, schema) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.defaulted(fallback), schema);
  };
  var defaultedObjOf = function (key, fallback, objSchema) {
    return $_g9k68px5jctdj6at.field(key, key, $_2nm6jxx3jctdj6am.defaulted(fallback), $_g9k68px5jctdj6at.obj(objSchema));
  };
  var field = function (key, okey, presence, prop) {
    return $_g9k68px5jctdj6at.field(key, okey, presence, prop);
  };
  var state = function (okey, instantiator) {
    return $_g9k68px5jctdj6at.state(okey, instantiator);
  };
  var $_e1v8vrx2jctdj6ag = {
    strict: strict,
    strictOf: strictOf,
    strictObjOf: strictObjOf,
    strictArrayOf: strictArrayOf,
    strictArrayOfObj: strictArrayOfObj,
    strictFunction: strictFunction,
    forbid: forbid,
    option: option,
    optionOf: optionOf,
    optionObjOf: optionObjOf,
    optionObjOfOnly: optionObjOfOnly,
    defaulted: defaulted,
    defaultedOf: defaultedOf,
    defaultedObjOf: defaultedObjOf,
    field: field,
    state: state
  };

  var chooseFrom = function (path, strength, input, branches, ch) {
    var fields = $_41rzpex6jctdj6bg.readOptFrom(branches, ch);
    return fields.fold(function () {
      return $_crmekexdjctdj6c0.missingBranch(path, branches, ch);
    }, function (fs) {
      return $_g9k68px5jctdj6at.obj(fs).extract(path.concat(['branch: ' + ch]), strength, input);
    });
  };
  var choose$1 = function (key, branches) {
    var extract = function (path, strength, input) {
      var choice = $_41rzpex6jctdj6bg.readOptFrom(input, key);
      return choice.fold(function () {
        return $_crmekexdjctdj6c0.missingKey(path, key);
      }, function (chosen) {
        return chooseFrom(path, strength, input, branches, chosen);
      });
    };
    var toString = function () {
      return 'chooseOn(' + key + '). Possible values: ' + $_sbi53x0jctdj69s.keys(branches);
    };
    var toDsl = function () {
      return $_cg4bqvxgjctdj6ca.typeAdt.choiceOf(key, branches);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var $_g9gbjxxijctdj6ch = { choose: choose$1 };

  var anyValue$1 = $_g9k68px5jctdj6at.value($_dk7ndjx8jctdj6bo.value);
  var arrOfObj$1 = function (objFields) {
    return $_g9k68px5jctdj6at.arrOfObj(objFields);
  };
  var arrOfVal = function () {
    return $_g9k68px5jctdj6at.arr(anyValue$1);
  };
  var arrOf = $_g9k68px5jctdj6at.arr;
  var objOf = $_g9k68px5jctdj6at.obj;
  var objOfOnly = $_g9k68px5jctdj6at.objOnly;
  var setOf$1 = $_g9k68px5jctdj6at.setOf;
  var valueOf = function (validator) {
    return $_g9k68px5jctdj6at.value(validator);
  };
  var extract = function (label, prop, strength, obj) {
    return prop.extract([label], strength, obj).fold(function (errs) {
      return $_dk7ndjx8jctdj6bo.error({
        input: obj,
        errors: errs
      });
    }, $_dk7ndjx8jctdj6bo.value);
  };
  var asStruct = function (label, prop, obj) {
    return extract(label, prop, $_nsetdwbjctdj67z.constant, obj);
  };
  var asRaw = function (label, prop, obj) {
    return extract(label, prop, $_nsetdwbjctdj67z.identity, obj);
  };
  var getOrDie$1 = function (extraction) {
    return extraction.fold(function (errInfo) {
      throw new Error(formatError(errInfo));
    }, $_nsetdwbjctdj67z.identity);
  };
  var asRawOrDie = function (label, prop, obj) {
    return getOrDie$1(asRaw(label, prop, obj));
  };
  var asStructOrDie = function (label, prop, obj) {
    return getOrDie$1(asStruct(label, prop, obj));
  };
  var formatError = function (errInfo) {
    return 'Errors: \n' + $_2nt8rzxejctdj6c3.formatErrors(errInfo.errors) + '\n\nInput object: ' + $_2nt8rzxejctdj6c3.formatObj(errInfo.input);
  };
  var choose = function (key, branches) {
    return $_g9gbjxxijctdj6ch.choose(key, branches);
  };
  var $_ebkmgyxhjctdj6cd = {
    anyValue: $_nsetdwbjctdj67z.constant(anyValue$1),
    arrOfObj: arrOfObj$1,
    arrOf: arrOf,
    arrOfVal: arrOfVal,
    valueOf: valueOf,
    setOf: setOf$1,
    objOf: objOf,
    objOfOnly: objOfOnly,
    asStruct: asStruct,
    asRaw: asRaw,
    asStructOrDie: asStructOrDie,
    asRawOrDie: asRawOrDie,
    getOrDie: getOrDie$1,
    formatError: formatError,
    choose: choose
  };

  var nu$3 = function (parts) {
    if (!$_41rzpex6jctdj6bg.hasKey(parts, 'can') && !$_41rzpex6jctdj6bg.hasKey(parts, 'abort') && !$_41rzpex6jctdj6bg.hasKey(parts, 'run'))
      throw new Error('EventHandler defined by: ' + $_e3y33nxfjctdj6c9.stringify(parts, null, 2) + ' does not have can, abort, or run!');
    return $_ebkmgyxhjctdj6cd.asRawOrDie('Extracting event.handler', $_ebkmgyxhjctdj6cd.objOfOnly([
      $_e1v8vrx2jctdj6ag.defaulted('can', $_nsetdwbjctdj67z.constant(true)),
      $_e1v8vrx2jctdj6ag.defaulted('abort', $_nsetdwbjctdj67z.constant(false)),
      $_e1v8vrx2jctdj6ag.defaulted('run', $_nsetdwbjctdj67z.noop)
    ]), parts);
  };
  var all$1 = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_85zw6hw9jctdj67p.foldl(handlers, function (acc, handler) {
        return acc && f(handler).apply(undefined, args);
      }, true);
    };
  };
  var any = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_85zw6hw9jctdj67p.foldl(handlers, function (acc, handler) {
        return acc || f(handler).apply(undefined, args);
      }, false);
    };
  };
  var read = function (handler) {
    return $_1lp13rwzjctdj69r.isFunction(handler) ? {
      can: $_nsetdwbjctdj67z.constant(true),
      abort: $_nsetdwbjctdj67z.constant(false),
      run: handler
    } : handler;
  };
  var fuse = function (handlers) {
    var can = all$1(handlers, function (handler) {
      return handler.can;
    });
    var abort = any(handlers, function (handler) {
      return handler.abort;
    });
    var run = function () {
      var args = Array.prototype.slice.call(arguments, 0);
      $_85zw6hw9jctdj67p.each(handlers, function (handler) {
        handler.run.apply(undefined, args);
      });
    };
    return nu$3({
      can: can,
      abort: abort,
      run: run
    });
  };
  var $_dazu4ux1jctdj69v = {
    read: read,
    fuse: fuse,
    nu: nu$3
  };

  var derive$1 = $_41rzpex6jctdj6bg.wrapAll;
  var abort = function (name, predicate) {
    return {
      key: name,
      value: $_dazu4ux1jctdj69v.nu({ abort: predicate })
    };
  };
  var can = function (name, predicate) {
    return {
      key: name,
      value: $_dazu4ux1jctdj69v.nu({ can: predicate })
    };
  };
  var preventDefault = function (name) {
    return {
      key: name,
      value: $_dazu4ux1jctdj69v.nu({
        run: function (component, simulatedEvent) {
          simulatedEvent.event().prevent();
        }
      })
    };
  };
  var run = function (name, handler) {
    return {
      key: name,
      value: $_dazu4ux1jctdj69v.nu({ run: handler })
    };
  };
  var runActionExtra = function (name, action, extra) {
    return {
      key: name,
      value: $_dazu4ux1jctdj69v.nu({
        run: function (component) {
          action.apply(undefined, [component].concat(extra));
        }
      })
    };
  };
  var runOnName = function (name) {
    return function (handler) {
      return run(name, handler);
    };
  };
  var runOnSourceName = function (name) {
    return function (handler) {
      return {
        key: name,
        value: $_dazu4ux1jctdj69v.nu({
          run: function (component, simulatedEvent) {
            if ($_rs355w7jctdj67f.isSource(component, simulatedEvent))
              handler(component, simulatedEvent);
          }
        })
      };
    };
  };
  var redirectToUid = function (name, uid) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByUid(uid).each(function (redirectee) {
        $_axzm60wvjctdj69e.dispatchEvent(redirectee, redirectee.element(), name, simulatedEvent);
      });
    });
  };
  var redirectToPart = function (name, detail, partName) {
    var uid = detail.partUids()[partName];
    return redirectToUid(name, uid);
  };
  var runWithTarget = function (name, f) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByDom(simulatedEvent.event().target()).each(function (target) {
        f(component, target, simulatedEvent);
      });
    });
  };
  var cutter = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.cut();
    });
  };
  var stopper = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.stop();
    });
  };
  var $_2lvgrhw6jctdj67b = {
    derive: derive$1,
    run: run,
    preventDefault: preventDefault,
    runActionExtra: runActionExtra,
    runOnAttached: runOnSourceName($_8rri5bwwjctdj69j.attachedToDom()),
    runOnDetached: runOnSourceName($_8rri5bwwjctdj69j.detachedFromDom()),
    runOnInit: runOnSourceName($_8rri5bwwjctdj69j.systemInit()),
    runOnExecute: runOnName($_8rri5bwwjctdj69j.execute()),
    redirectToUid: redirectToUid,
    redirectToPart: redirectToPart,
    runWithTarget: runWithTarget,
    abort: abort,
    can: can,
    cutter: cutter,
    stopper: stopper
  };

  var markAsBehaviourApi = function (f, apiName, apiFunction) {
    return f;
  };
  var markAsExtraApi = function (f, extraName) {
    return f;
  };
  var markAsSketchApi = function (f, apiFunction) {
    return f;
  };
  var getAnnotation = $_1k5gi0wajctdj67w.none;
  var $_aklxnoxjjctdj6cl = {
    markAsBehaviourApi: markAsBehaviourApi,
    markAsExtraApi: markAsExtraApi,
    markAsSketchApi: markAsSketchApi,
    getAnnotation: getAnnotation
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
      $_85zw6hw9jctdj67p.each(fields, function (name, i) {
        struct[name] = $_nsetdwbjctdj67z.constant(values[i]);
      });
      return struct;
    };
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
    if (!$_1lp13rwzjctdj69r.isArray(array))
      throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    $_85zw6hw9jctdj67p.each(array, function (a) {
      if (!$_1lp13rwzjctdj69r.isString(a))
        throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
    });
  };
  var invalidTypeMessage = function (incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort$1(incorrect).join(', ') + ') were not.');
  };
  var checkDupes = function (everything) {
    var sorted = sort$1(everything);
    var dupe = $_85zw6hw9jctdj67p.find(sorted, function (s, i) {
      return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
      throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
  };
  var $_e6ls6wxpjctdj6da = {
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
    $_e6ls6wxpjctdj6da.validateStrArr('required', required);
    $_e6ls6wxpjctdj6da.validateStrArr('optional', optional);
    $_e6ls6wxpjctdj6da.checkDupes(everything);
    return function (obj) {
      var keys = $_sbi53x0jctdj69s.keys(obj);
      var allReqd = $_85zw6hw9jctdj67p.forall(required, function (req) {
        return $_85zw6hw9jctdj67p.contains(keys, req);
      });
      if (!allReqd)
        $_e6ls6wxpjctdj6da.reqMessage(required, keys);
      var unsupported = $_85zw6hw9jctdj67p.filter(keys, function (key) {
        return !$_85zw6hw9jctdj67p.contains(everything, key);
      });
      if (unsupported.length > 0)
        $_e6ls6wxpjctdj6da.unsuppMessage(unsupported);
      var r = {};
      $_85zw6hw9jctdj67p.each(required, function (req) {
        r[req] = $_nsetdwbjctdj67z.constant(obj[req]);
      });
      $_85zw6hw9jctdj67p.each(optional, function (opt) {
        r[opt] = $_nsetdwbjctdj67z.constant(Object.prototype.hasOwnProperty.call(obj, opt) ? $_1k5gi0wajctdj67w.some(obj[opt]) : $_1k5gi0wajctdj67w.none());
      });
      return r;
    };
  };

  var $_es1bl5xmjctdj6d5 = {
    immutable: Immutable,
    immutableBag: MixedBag
  };

  var nu$6 = $_es1bl5xmjctdj6d5.immutableBag(['tag'], [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'domChildren',
    'defChildren'
  ]);
  var defToStr = function (defn) {
    var raw = defToRaw(defn);
    return $_e3y33nxfjctdj6c9.stringify(raw, null, 2);
  };
  var defToRaw = function (defn) {
    return {
      tag: defn.tag(),
      classes: defn.classes().getOr([]),
      attributes: defn.attributes().getOr({}),
      styles: defn.styles().getOr({}),
      value: defn.value().getOr('<none>'),
      innerHtml: defn.innerHtml().getOr('<none>'),
      defChildren: defn.defChildren().getOr('<none>'),
      domChildren: defn.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var $_96sxedxljctdj6d2 = {
    nu: nu$6,
    defToStr: defToStr,
    defToRaw: defToRaw
  };

  var fields = [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'defChildren',
    'domChildren'
  ];
  var nu$5 = $_es1bl5xmjctdj6d5.immutableBag([], fields);
  var derive$2 = function (settings) {
    var r = {};
    var keys = $_sbi53x0jctdj69s.keys(settings);
    $_85zw6hw9jctdj67p.each(keys, function (key) {
      settings[key].each(function (v) {
        r[key] = v;
      });
    });
    return nu$5(r);
  };
  var modToStr = function (mod) {
    var raw = modToRaw(mod);
    return $_e3y33nxfjctdj6c9.stringify(raw, null, 2);
  };
  var modToRaw = function (mod) {
    return {
      classes: mod.classes().getOr('<none>'),
      attributes: mod.attributes().getOr('<none>'),
      styles: mod.styles().getOr('<none>'),
      value: mod.value().getOr('<none>'),
      innerHtml: mod.innerHtml().getOr('<none>'),
      defChildren: mod.defChildren().getOr('<none>'),
      domChildren: mod.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var clashingOptArrays = function (key, oArr1, oArr2) {
    return oArr1.fold(function () {
      return oArr2.fold(function () {
        return {};
      }, function (arr2) {
        return $_41rzpex6jctdj6bg.wrap(key, arr2);
      });
    }, function (arr1) {
      return oArr2.fold(function () {
        return $_41rzpex6jctdj6bg.wrap(key, arr1);
      }, function (arr2) {
        return $_41rzpex6jctdj6bg.wrap(key, arr2);
      });
    });
  };
  var merge$1 = function (defnA, mod) {
    var raw = $_fwvrcwwyjctdj69p.deepMerge({
      tag: defnA.tag(),
      classes: mod.classes().getOr([]).concat(defnA.classes().getOr([])),
      attributes: $_fwvrcwwyjctdj69p.merge(defnA.attributes().getOr({}), mod.attributes().getOr({})),
      styles: $_fwvrcwwyjctdj69p.merge(defnA.styles().getOr({}), mod.styles().getOr({}))
    }, mod.innerHtml().or(defnA.innerHtml()).map(function (innerHtml) {
      return $_41rzpex6jctdj6bg.wrap('innerHtml', innerHtml);
    }).getOr({}), clashingOptArrays('domChildren', mod.domChildren(), defnA.domChildren()), clashingOptArrays('defChildren', mod.defChildren(), defnA.defChildren()), mod.value().or(defnA.value()).map(function (value) {
      return $_41rzpex6jctdj6bg.wrap('value', value);
    }).getOr({}));
    return $_96sxedxljctdj6d2.nu(raw);
  };
  var $_1zwhwxkjctdj6cn = {
    nu: nu$5,
    derive: derive$2,
    merge: merge$1,
    modToStr: modToStr,
    modToRaw: modToRaw
  };

  var executeEvent = function (bConfig, bState, executor) {
    return $_2lvgrhw6jctdj67b.runOnExecute(function (component) {
      executor(component, bConfig, bState);
    });
  };
  var loadEvent = function (bConfig, bState, f) {
    return $_2lvgrhw6jctdj67b.runOnInit(function (component, simulatedEvent) {
      f(component, bConfig, bState);
    });
  };
  var create$1 = function (schema, name, active, apis, extra, state) {
    var configSchema = $_ebkmgyxhjctdj6cd.objOfOnly(schema);
    var schemaSchema = $_e1v8vrx2jctdj6ag.optionObjOf(name, [$_e1v8vrx2jctdj6ag.optionObjOfOnly('config', schema)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var createModes$1 = function (modes, name, active, apis, extra, state) {
    var configSchema = modes;
    var schemaSchema = $_e1v8vrx2jctdj6ag.optionObjOf(name, [$_e1v8vrx2jctdj6ag.optionOf('config', modes)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var wrapApi = function (bName, apiFunction, apiName) {
    var f = function (component) {
      var args = arguments;
      return component.config({ name: $_nsetdwbjctdj67z.constant(bName) }).fold(function () {
        throw new Error('We could not find any behaviour configuration for: ' + bName + '. Using API: ' + apiName);
      }, function (info) {
        var rest = Array.prototype.slice.call(args, 1);
        return apiFunction.apply(undefined, [
          component,
          info.config,
          info.state
        ].concat(rest));
      });
    };
    return $_aklxnoxjjctdj6cl.markAsBehaviourApi(f, apiName, apiFunction);
  };
  var revokeBehaviour = function (name) {
    return {
      key: name,
      value: undefined
    };
  };
  var doCreate = function (configSchema, schemaSchema, name, active, apis, extra, state) {
    var getConfig = function (info) {
      return $_41rzpex6jctdj6bg.hasKey(info, name) ? info[name]() : $_1k5gi0wajctdj67w.none();
    };
    var wrappedApis = $_sbi53x0jctdj69s.map(apis, function (apiF, apiName) {
      return wrapApi(name, apiF, apiName);
    });
    var wrappedExtra = $_sbi53x0jctdj69s.map(extra, function (extraF, extraName) {
      return $_aklxnoxjjctdj6cl.markAsExtraApi(extraF, extraName);
    });
    var me = $_fwvrcwwyjctdj69p.deepMerge(wrappedExtra, wrappedApis, {
      revoke: $_nsetdwbjctdj67z.curry(revokeBehaviour, name),
      config: function (spec) {
        var prepared = $_ebkmgyxhjctdj6cd.asStructOrDie(name + '-config', configSchema, spec);
        return {
          key: name,
          value: {
            config: prepared,
            me: me,
            configAsRaw: $_c9x4bqwhjctdj689.cached(function () {
              return $_ebkmgyxhjctdj6cd.asRawOrDie(name + '-config', configSchema, spec);
            }),
            initialConfig: spec,
            state: state
          }
        };
      },
      schema: function () {
        return schemaSchema;
      },
      exhibit: function (info, base) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_41rzpex6jctdj6bg.readOptFrom(active, 'exhibit').map(function (exhibitor) {
            return exhibitor(base, behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr($_1zwhwxkjctdj6cn.nu({}));
      },
      name: function () {
        return name;
      },
      handlers: function (info) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_41rzpex6jctdj6bg.readOptFrom(active, 'events').map(function (events) {
            return events(behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr({});
      }
    });
    return me;
  };
  var $_9fnyw4w5jctdj66r = {
    executeEvent: executeEvent,
    loadEvent: loadEvent,
    create: create$1,
    createModes: createModes$1
  };

  var base = function (handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
      validate: $_1lp13rwzjctdj69r.isFunction,
      label: 'function'
    });
  };
  var baseWith = function (handleUnsupported, required, pred) {
    if (required.length === 0)
      throw new Error('You must specify at least one required field.');
    $_e6ls6wxpjctdj6da.validateStrArr('required', required);
    $_e6ls6wxpjctdj6da.checkDupes(required);
    return function (obj) {
      var keys = $_sbi53x0jctdj69s.keys(obj);
      var allReqd = $_85zw6hw9jctdj67p.forall(required, function (req) {
        return $_85zw6hw9jctdj67p.contains(keys, req);
      });
      if (!allReqd)
        $_e6ls6wxpjctdj6da.reqMessage(required, keys);
      handleUnsupported(required, keys);
      var invalidKeys = $_85zw6hw9jctdj67p.filter(required, function (key) {
        return !pred.validate(obj[key], key);
      });
      if (invalidKeys.length > 0)
        $_e6ls6wxpjctdj6da.invalidTypeMessage(invalidKeys, pred.label);
      return obj;
    };
  };
  var handleExact = function (required, keys) {
    var unsupported = $_85zw6hw9jctdj67p.filter(keys, function (key) {
      return !$_85zw6hw9jctdj67p.contains(required, key);
    });
    if (unsupported.length > 0)
      $_e6ls6wxpjctdj6da.unsuppMessage(unsupported);
  };
  var allowExtra = $_nsetdwbjctdj67z.noop;
  var $_3sjm94xsjctdj6df = {
    exactly: $_nsetdwbjctdj67z.curry(base, handleExact),
    ensure: $_nsetdwbjctdj67z.curry(base, allowExtra),
    ensureWith: $_nsetdwbjctdj67z.curry(baseWith, allowExtra)
  };

  var BehaviourState = $_3sjm94xsjctdj6df.ensure(['readState']);

  var init = function () {
    return BehaviourState({
      readState: function () {
        return 'No State required';
      }
    });
  };
  var $_atjv2ixqjctdj6dd = { init: init };

  var derive = function (capabilities) {
    return $_41rzpex6jctdj6bg.wrapAll(capabilities);
  };
  var simpleSchema = $_ebkmgyxhjctdj6cd.objOfOnly([
    $_e1v8vrx2jctdj6ag.strict('fields'),
    $_e1v8vrx2jctdj6ag.strict('name'),
    $_e1v8vrx2jctdj6ag.defaulted('active', {}),
    $_e1v8vrx2jctdj6ag.defaulted('apis', {}),
    $_e1v8vrx2jctdj6ag.defaulted('extra', {}),
    $_e1v8vrx2jctdj6ag.defaulted('state', $_atjv2ixqjctdj6dd)
  ]);
  var create = function (data) {
    var value = $_ebkmgyxhjctdj6cd.asRawOrDie('Creating behaviour: ' + data.name, simpleSchema, data);
    return $_9fnyw4w5jctdj66r.create(value.fields, value.name, value.active, value.apis, value.extra, value.state);
  };
  var modeSchema = $_ebkmgyxhjctdj6cd.objOfOnly([
    $_e1v8vrx2jctdj6ag.strict('branchKey'),
    $_e1v8vrx2jctdj6ag.strict('branches'),
    $_e1v8vrx2jctdj6ag.strict('name'),
    $_e1v8vrx2jctdj6ag.defaulted('active', {}),
    $_e1v8vrx2jctdj6ag.defaulted('apis', {}),
    $_e1v8vrx2jctdj6ag.defaulted('extra', {}),
    $_e1v8vrx2jctdj6ag.defaulted('state', $_atjv2ixqjctdj6dd)
  ]);
  var createModes = function (data) {
    var value = $_ebkmgyxhjctdj6cd.asRawOrDie('Creating behaviour: ' + data.name, modeSchema, data);
    return $_9fnyw4w5jctdj66r.createModes($_ebkmgyxhjctdj6cd.choose(value.branchKey, value.branches), value.name, value.active, value.apis, value.extra, value.state);
  };
  var $_b61y2hw4jctdj66j = {
    derive: derive,
    revoke: $_nsetdwbjctdj67z.constant(undefined),
    noActive: $_nsetdwbjctdj67z.constant({}),
    noApis: $_nsetdwbjctdj67z.constant({}),
    noExtra: $_nsetdwbjctdj67z.constant({}),
    noState: $_nsetdwbjctdj67z.constant($_atjv2ixqjctdj6dd),
    create: create,
    createModes: createModes
  };

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

  var name = function (element) {
    var r = element.dom().nodeName;
    return r.toLowerCase();
  };
  var type = function (element) {
    return element.dom().nodeType;
  };
  var value$2 = function (element) {
    return element.dom().nodeValue;
  };
  var isType$1 = function (t) {
    return function (element) {
      return type(element) === t;
    };
  };
  var isComment = function (element) {
    return type(element) === $_6mtp59wujctdj69d.COMMENT || name(element) === '#comment';
  };
  var isElement = isType$1($_6mtp59wujctdj69d.ELEMENT);
  var isText = isType$1($_6mtp59wujctdj69d.TEXT);
  var isDocument = isType$1($_6mtp59wujctdj69d.DOCUMENT);
  var $_13f4i6xxjctdj6dv = {
    name: name,
    type: type,
    value: value$2,
    isElement: isElement,
    isText: isText,
    isDocument: isDocument,
    isComment: isComment
  };

  var rawSet = function (dom, key, value) {
    if ($_1lp13rwzjctdj69r.isString(value) || $_1lp13rwzjctdj69r.isBoolean(value) || $_1lp13rwzjctdj69r.isNumber(value)) {
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
    $_sbi53x0jctdj69s.each(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };
  var get = function (element, key) {
    var v = element.dom().getAttribute(key);
    return v === null ? undefined : v;
  };
  var has$1 = function (element, key) {
    var dom = element.dom();
    return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
  };
  var remove$1 = function (element, key) {
    element.dom().removeAttribute(key);
  };
  var hasNone = function (element) {
    var attrs = element.dom().attributes;
    return attrs === undefined || attrs === null || attrs.length === 0;
  };
  var clone = function (element) {
    return $_85zw6hw9jctdj67p.foldl(element.dom().attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };
  var transferOne = function (source, destination, attr) {
    if (has$1(source, attr) && !has$1(destination, attr))
      set(destination, attr, get(source, attr));
  };
  var transfer = function (source, destination, attrs) {
    if (!$_13f4i6xxjctdj6dv.isElement(source) || !$_13f4i6xxjctdj6dv.isElement(destination))
      return;
    $_85zw6hw9jctdj67p.each(attrs, function (attr) {
      transferOne(source, destination, attr);
    });
  };
  var $_ftckpcxwjctdj6dp = {
    clone: clone,
    set: set,
    setAll: setAll,
    get: get,
    has: has$1,
    remove: remove$1,
    hasNone: hasNone,
    transfer: transfer
  };

  var read$1 = function (element, attr) {
    var value = $_ftckpcxwjctdj6dp.get(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };
  var add$2 = function (element, attr, id) {
    var old = read$1(element, attr);
    var nu = old.concat([id]);
    $_ftckpcxwjctdj6dp.set(element, attr, nu.join(' '));
  };
  var remove$3 = function (element, attr, id) {
    var nu = $_85zw6hw9jctdj67p.filter(read$1(element, attr), function (v) {
      return v !== id;
    });
    if (nu.length > 0)
      $_ftckpcxwjctdj6dp.set(element, attr, nu.join(' '));
    else
      $_ftckpcxwjctdj6dp.remove(element, attr);
  };
  var $_9q5oxlxzjctdj6dy = {
    read: read$1,
    add: add$2,
    remove: remove$3
  };

  var supports = function (element) {
    return element.dom().classList !== undefined;
  };
  var get$1 = function (element) {
    return $_9q5oxlxzjctdj6dy.read(element, 'class');
  };
  var add$1 = function (element, clazz) {
    return $_9q5oxlxzjctdj6dy.add(element, 'class', clazz);
  };
  var remove$2 = function (element, clazz) {
    return $_9q5oxlxzjctdj6dy.remove(element, 'class', clazz);
  };
  var toggle$1 = function (element, clazz) {
    if ($_85zw6hw9jctdj67p.contains(get$1(element), clazz)) {
      remove$2(element, clazz);
    } else {
      add$1(element, clazz);
    }
  };
  var $_b8aco6xyjctdj6dw = {
    get: get$1,
    add: add$1,
    remove: remove$2,
    toggle: toggle$1,
    supports: supports
  };

  var add = function (element, clazz) {
    if ($_b8aco6xyjctdj6dw.supports(element))
      element.dom().classList.add(clazz);
    else
      $_b8aco6xyjctdj6dw.add(element, clazz);
  };
  var cleanClass = function (element) {
    var classList = $_b8aco6xyjctdj6dw.supports(element) ? element.dom().classList : $_b8aco6xyjctdj6dw.get(element);
    if (classList.length === 0) {
      $_ftckpcxwjctdj6dp.remove(element, 'class');
    }
  };
  var remove = function (element, clazz) {
    if ($_b8aco6xyjctdj6dw.supports(element)) {
      var classList = element.dom().classList;
      classList.remove(clazz);
    } else
      $_b8aco6xyjctdj6dw.remove(element, clazz);
    cleanClass(element);
  };
  var toggle = function (element, clazz) {
    return $_b8aco6xyjctdj6dw.supports(element) ? element.dom().classList.toggle(clazz) : $_b8aco6xyjctdj6dw.toggle(element, clazz);
  };
  var toggler = function (element, clazz) {
    var hasClasslist = $_b8aco6xyjctdj6dw.supports(element);
    var classList = element.dom().classList;
    var off = function () {
      if (hasClasslist)
        classList.remove(clazz);
      else
        $_b8aco6xyjctdj6dw.remove(element, clazz);
    };
    var on = function () {
      if (hasClasslist)
        classList.add(clazz);
      else
        $_b8aco6xyjctdj6dw.add(element, clazz);
    };
    return Toggler(off, on, has(element, clazz));
  };
  var has = function (element, clazz) {
    return $_b8aco6xyjctdj6dw.supports(element) && element.dom().classList.contains(clazz);
  };
  var $_4vb8dhxujctdj6dm = {
    add: add,
    remove: remove,
    toggle: toggle,
    toggler: toggler,
    has: has
  };

  var swap = function (element, addCls, removeCls) {
    $_4vb8dhxujctdj6dm.remove(element, removeCls);
    $_4vb8dhxujctdj6dm.add(element, addCls);
  };
  var toAlpha = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.alpha(), swapConfig.omega());
  };
  var toOmega = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.omega(), swapConfig.alpha());
  };
  var clear = function (component, swapConfig, swapState) {
    $_4vb8dhxujctdj6dm.remove(component.element(), swapConfig.alpha());
    $_4vb8dhxujctdj6dm.remove(component.element(), swapConfig.omega());
  };
  var isAlpha = function (component, swapConfig, swapState) {
    return $_4vb8dhxujctdj6dm.has(component.element(), swapConfig.alpha());
  };
  var isOmega = function (component, swapConfig, swapState) {
    return $_4vb8dhxujctdj6dm.has(component.element(), swapConfig.omega());
  };
  var $_exxqwzxtjctdj6di = {
    toAlpha: toAlpha,
    toOmega: toOmega,
    isAlpha: isAlpha,
    isOmega: isOmega,
    clear: clear
  };

  var SwapSchema = [
    $_e1v8vrx2jctdj6ag.strict('alpha'),
    $_e1v8vrx2jctdj6ag.strict('omega')
  ];

  var Swapping = $_b61y2hw4jctdj66j.create({
    fields: SwapSchema,
    name: 'swapping',
    apis: $_exxqwzxtjctdj6di
  });

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
  var $_7qwzary4jctdj6kd = { toArray: toArray };

  var owner = function (element) {
    return $_bvayi3wtjctdj69a.fromDom(element.dom().ownerDocument);
  };
  var documentElement = function (element) {
    var doc = owner(element);
    return $_bvayi3wtjctdj69a.fromDom(doc.dom().documentElement);
  };
  var defaultView = function (element) {
    var el = element.dom();
    var defaultView = el.ownerDocument.defaultView;
    return $_bvayi3wtjctdj69a.fromDom(defaultView);
  };
  var parent = function (element) {
    var dom = element.dom();
    return $_1k5gi0wajctdj67w.from(dom.parentNode).map($_bvayi3wtjctdj69a.fromDom);
  };
  var findIndex$1 = function (element) {
    return parent(element).bind(function (p) {
      var kin = children(p);
      return $_85zw6hw9jctdj67p.findIndex(kin, function (elem) {
        return $_a6ax5bw8jctdj67h.eq(element, elem);
      });
    });
  };
  var parents = function (element, isRoot) {
    var stop = $_1lp13rwzjctdj69r.isFunction(isRoot) ? isRoot : $_nsetdwbjctdj67z.constant(false);
    var dom = element.dom();
    var ret = [];
    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var parent = $_bvayi3wtjctdj69a.fromDom(rawParent);
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
      return $_85zw6hw9jctdj67p.filter(elements, function (x) {
        return !$_a6ax5bw8jctdj67h.eq(element, x);
      });
    };
    return parent(element).map(children).map(filterSelf).getOr([]);
  };
  var offsetParent = function (element) {
    var dom = element.dom();
    return $_1k5gi0wajctdj67w.from(dom.offsetParent).map($_bvayi3wtjctdj69a.fromDom);
  };
  var prevSibling = function (element) {
    var dom = element.dom();
    return $_1k5gi0wajctdj67w.from(dom.previousSibling).map($_bvayi3wtjctdj69a.fromDom);
  };
  var nextSibling = function (element) {
    var dom = element.dom();
    return $_1k5gi0wajctdj67w.from(dom.nextSibling).map($_bvayi3wtjctdj69a.fromDom);
  };
  var prevSiblings = function (element) {
    return $_85zw6hw9jctdj67p.reverse($_7qwzary4jctdj6kd.toArray(element, prevSibling));
  };
  var nextSiblings = function (element) {
    return $_7qwzary4jctdj6kd.toArray(element, nextSibling);
  };
  var children = function (element) {
    var dom = element.dom();
    return $_85zw6hw9jctdj67p.map(dom.childNodes, $_bvayi3wtjctdj69a.fromDom);
  };
  var child = function (element, index) {
    var children = element.dom().childNodes;
    return $_1k5gi0wajctdj67w.from(children[index]).map($_bvayi3wtjctdj69a.fromDom);
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
  var spot = $_es1bl5xmjctdj6d5.immutable('element', 'offset');
  var leaf = function (element, offset) {
    var cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
  };
  var $_83fh6gy3jctdj6ef = {
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

  var before = function (marker, element) {
    var parent = $_83fh6gy3jctdj6ef.parent(marker);
    parent.each(function (v) {
      v.dom().insertBefore(element.dom(), marker.dom());
    });
  };
  var after = function (marker, element) {
    var sibling = $_83fh6gy3jctdj6ef.nextSibling(marker);
    sibling.fold(function () {
      var parent = $_83fh6gy3jctdj6ef.parent(marker);
      parent.each(function (v) {
        append(v, element);
      });
    }, function (v) {
      before(v, element);
    });
  };
  var prepend = function (parent, element) {
    var firstChild = $_83fh6gy3jctdj6ef.firstChild(parent);
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
    $_83fh6gy3jctdj6ef.child(parent, index).fold(function () {
      append(parent, element);
    }, function (v) {
      before(v, element);
    });
  };
  var wrap$2 = function (element, wrapper) {
    before(element, wrapper);
    append(wrapper, element);
  };
  var $_2enstby2jctdj6ed = {
    before: before,
    after: after,
    prepend: prepend,
    append: append,
    appendAt: appendAt,
    wrap: wrap$2
  };

  var before$1 = function (marker, elements) {
    $_85zw6hw9jctdj67p.each(elements, function (x) {
      $_2enstby2jctdj6ed.before(marker, x);
    });
  };
  var after$1 = function (marker, elements) {
    $_85zw6hw9jctdj67p.each(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      $_2enstby2jctdj6ed.after(e, x);
    });
  };
  var prepend$1 = function (parent, elements) {
    $_85zw6hw9jctdj67p.each(elements.slice().reverse(), function (x) {
      $_2enstby2jctdj6ed.prepend(parent, x);
    });
  };
  var append$1 = function (parent, elements) {
    $_85zw6hw9jctdj67p.each(elements, function (x) {
      $_2enstby2jctdj6ed.append(parent, x);
    });
  };
  var $_9d7i1ky6jctdj6ki = {
    before: before$1,
    after: after$1,
    prepend: prepend$1,
    append: append$1
  };

  var empty = function (element) {
    element.dom().textContent = '';
    $_85zw6hw9jctdj67p.each($_83fh6gy3jctdj6ef.children(element), function (rogue) {
      remove$4(rogue);
    });
  };
  var remove$4 = function (element) {
    var dom = element.dom();
    if (dom.parentNode !== null)
      dom.parentNode.removeChild(dom);
  };
  var unwrap = function (wrapper) {
    var children = $_83fh6gy3jctdj6ef.children(wrapper);
    if (children.length > 0)
      $_9d7i1ky6jctdj6ki.before(wrapper, children);
    remove$4(wrapper);
  };
  var $_7upgfty5jctdj6kf = {
    empty: empty,
    remove: remove$4,
    unwrap: unwrap
  };

  var inBody = function (element) {
    var dom = $_13f4i6xxjctdj6dv.isText(element) ? element.dom().parentNode : element.dom();
    return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
  };
  var body = $_c9x4bqwhjctdj689.cached(function () {
    return getBody($_bvayi3wtjctdj69a.fromDom(document));
  });
  var getBody = function (doc) {
    var body = doc.dom().body;
    if (body === null || body === undefined)
      throw 'Body is not available yet';
    return $_bvayi3wtjctdj69a.fromDom(body);
  };
  var $_bi2sxwy7jctdj6kl = {
    body: body,
    getBody: getBody,
    inBody: inBody
  };

  var fireDetaching = function (component) {
    $_axzm60wvjctdj69e.emit(component, $_8rri5bwwjctdj69j.detachedFromDom());
    var children = component.components();
    $_85zw6hw9jctdj67p.each(children, fireDetaching);
  };
  var fireAttaching = function (component) {
    var children = component.components();
    $_85zw6hw9jctdj67p.each(children, fireAttaching);
    $_axzm60wvjctdj69e.emit(component, $_8rri5bwwjctdj69j.attachedToDom());
  };
  var attach = function (parent, child) {
    attachWith(parent, child, $_2enstby2jctdj6ed.append);
  };
  var attachWith = function (parent, child, insertion) {
    parent.getSystem().addToWorld(child);
    insertion(parent.element(), child.element());
    if ($_bi2sxwy7jctdj6kl.inBody(parent.element()))
      fireAttaching(child);
    parent.syncComponents();
  };
  var doDetach = function (component) {
    fireDetaching(component);
    $_7upgfty5jctdj6kf.remove(component.element());
    component.getSystem().removeFromWorld(component);
  };
  var detach = function (component) {
    var parent = $_83fh6gy3jctdj6ef.parent(component.element()).bind(function (p) {
      return component.getSystem().getByDom(p).fold($_1k5gi0wajctdj67w.none, $_1k5gi0wajctdj67w.some);
    });
    doDetach(component);
    parent.each(function (p) {
      p.syncComponents();
    });
  };
  var detachChildren = function (component) {
    var subs = component.components();
    $_85zw6hw9jctdj67p.each(subs, doDetach);
    $_7upgfty5jctdj6kf.empty(component.element());
    component.syncComponents();
  };
  var attachSystem = function (element, guiSystem) {
    $_2enstby2jctdj6ed.append(element, guiSystem.element());
    var children = $_83fh6gy3jctdj6ef.children(guiSystem.element());
    $_85zw6hw9jctdj67p.each(children, function (child) {
      guiSystem.getByDom(child).each(fireAttaching);
    });
  };
  var detachSystem = function (guiSystem) {
    var children = $_83fh6gy3jctdj6ef.children(guiSystem.element());
    $_85zw6hw9jctdj67p.each(children, function (child) {
      guiSystem.getByDom(child).each(fireDetaching);
    });
    $_7upgfty5jctdj6kf.remove(guiSystem.element());
  };
  var $_9uszbdy1jctdj6e3 = {
    attach: attach,
    attachWith: attachWith,
    detach: detach,
    detachChildren: detachChildren,
    attachSystem: attachSystem,
    detachSystem: detachSystem
  };

  var fromHtml$1 = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    return $_83fh6gy3jctdj6ef.children($_bvayi3wtjctdj69a.fromDom(div));
  };
  var fromTags = function (tags, scope) {
    return $_85zw6hw9jctdj67p.map(tags, function (x) {
      return $_bvayi3wtjctdj69a.fromTag(x, scope);
    });
  };
  var fromText$1 = function (texts, scope) {
    return $_85zw6hw9jctdj67p.map(texts, function (x) {
      return $_bvayi3wtjctdj69a.fromText(x, scope);
    });
  };
  var fromDom$1 = function (nodes) {
    return $_85zw6hw9jctdj67p.map(nodes, $_bvayi3wtjctdj69a.fromDom);
  };
  var $_3ywxkoycjctdj6l2 = {
    fromHtml: fromHtml$1,
    fromTags: fromTags,
    fromText: fromText$1,
    fromDom: fromDom$1
  };

  var get$2 = function (element) {
    return element.dom().innerHTML;
  };
  var set$1 = function (element, content) {
    var owner = $_83fh6gy3jctdj6ef.owner(element);
    var docDom = owner.dom();
    var fragment = $_bvayi3wtjctdj69a.fromDom(docDom.createDocumentFragment());
    var contentElements = $_3ywxkoycjctdj6l2.fromHtml(content, docDom);
    $_9d7i1ky6jctdj6ki.append(fragment, contentElements);
    $_7upgfty5jctdj6kf.empty(element);
    $_2enstby2jctdj6ed.append(element, fragment);
  };
  var getOuter = function (element) {
    var container = $_bvayi3wtjctdj69a.fromTag('div');
    var clone = $_bvayi3wtjctdj69a.fromDom(element.dom().cloneNode(true));
    $_2enstby2jctdj6ed.append(container, clone);
    return get$2(container);
  };
  var $_edp5zaybjctdj6l1 = {
    get: get$2,
    set: set$1,
    getOuter: getOuter
  };

  var clone$1 = function (original, deep) {
    return $_bvayi3wtjctdj69a.fromDom(original.dom().cloneNode(deep));
  };
  var shallow$1 = function (original) {
    return clone$1(original, false);
  };
  var deep$1 = function (original) {
    return clone$1(original, true);
  };
  var shallowAs = function (original, tag) {
    var nu = $_bvayi3wtjctdj69a.fromTag(tag);
    var attributes = $_ftckpcxwjctdj6dp.clone(original);
    $_ftckpcxwjctdj6dp.setAll(nu, attributes);
    return nu;
  };
  var copy = function (original, tag) {
    var nu = shallowAs(original, tag);
    var cloneChildren = $_83fh6gy3jctdj6ef.children(deep$1(original));
    $_9d7i1ky6jctdj6ki.append(nu, cloneChildren);
    return nu;
  };
  var mutate = function (original, tag) {
    var nu = shallowAs(original, tag);
    $_2enstby2jctdj6ed.before(original, nu);
    var children = $_83fh6gy3jctdj6ef.children(original);
    $_9d7i1ky6jctdj6ki.append(nu, children);
    $_7upgfty5jctdj6kf.remove(original);
    return nu;
  };
  var $_783yjpydjctdj6l5 = {
    shallow: shallow$1,
    shallowAs: shallowAs,
    deep: deep$1,
    copy: copy,
    mutate: mutate
  };

  var getHtml = function (element) {
    var clone = $_783yjpydjctdj6l5.shallow(element);
    return $_edp5zaybjctdj6l1.getOuter(clone);
  };
  var $_bklsokyajctdj6ky = { getHtml: getHtml };

  var element = function (elem) {
    return $_bklsokyajctdj6ky.getHtml(elem);
  };
  var $_e0dlb6y9jctdj6kx = { element: element };

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
    return $_1k5gi0wajctdj67w.none();
  };
  var liftN = function (arr, f) {
    var r = [];
    for (var i = 0; i < arr.length; i++) {
      var x = arr[i];
      if (x.isSome()) {
        r.push(x.getOrDie());
      } else {
        return $_1k5gi0wajctdj67w.none();
      }
    }
    return $_1k5gi0wajctdj67w.some(f.apply(null, r));
  };
  var $_3dekh2yejctdj6l8 = {
    cat: cat,
    findMap: findMap,
    liftN: liftN
  };

  var unknown$3 = 'unknown';
  var debugging = true;
  var CHROME_INSPECTOR_GLOBAL = '__CHROME_INSPECTOR_CONNECTION_TO_ALLOY__';
  var eventsMonitored = [];
  var path$1 = [
    'alloy/data/Fields',
    'alloy/debugging/Debugging'
  ];
  var getTrace = function () {
    if (debugging === false)
      return unknown$3;
    var err = new Error();
    if (err.stack !== undefined) {
      var lines = err.stack.split('\n');
      return $_85zw6hw9jctdj67p.find(lines, function (line) {
        return line.indexOf('alloy') > 0 && !$_85zw6hw9jctdj67p.exists(path$1, function (p) {
          return line.indexOf(p) > -1;
        });
      }).getOr(unknown$3);
    } else {
      return unknown$3;
    }
  };
  var logHandler = function (label, handlerName, trace) {
  };
  var ignoreEvent = {
    logEventCut: $_nsetdwbjctdj67z.noop,
    logEventStopped: $_nsetdwbjctdj67z.noop,
    logNoParent: $_nsetdwbjctdj67z.noop,
    logEventNoHandlers: $_nsetdwbjctdj67z.noop,
    logEventResponse: $_nsetdwbjctdj67z.noop,
    write: $_nsetdwbjctdj67z.noop
  };
  var monitorEvent = function (eventName, initialTarget, f) {
    var logger = debugging && (eventsMonitored === '*' || $_85zw6hw9jctdj67p.contains(eventsMonitored, eventName)) ? function () {
      var sequence = [];
      return {
        logEventCut: function (name, target, purpose) {
          sequence.push({
            outcome: 'cut',
            target: target,
            purpose: purpose
          });
        },
        logEventStopped: function (name, target, purpose) {
          sequence.push({
            outcome: 'stopped',
            target: target,
            purpose: purpose
          });
        },
        logNoParent: function (name, target, purpose) {
          sequence.push({
            outcome: 'no-parent',
            target: target,
            purpose: purpose
          });
        },
        logEventNoHandlers: function (name, target) {
          sequence.push({
            outcome: 'no-handlers-left',
            target: target
          });
        },
        logEventResponse: function (name, target, purpose) {
          sequence.push({
            outcome: 'response',
            purpose: purpose,
            target: target
          });
        },
        write: function () {
          if ($_85zw6hw9jctdj67p.contains([
              'mousemove',
              'mouseover',
              'mouseout',
              $_8rri5bwwjctdj69j.systemInit()
            ], eventName))
            return;
          console.log(eventName, {
            event: eventName,
            target: initialTarget.dom(),
            sequence: $_85zw6hw9jctdj67p.map(sequence, function (s) {
              if (!$_85zw6hw9jctdj67p.contains([
                  'cut',
                  'stopped',
                  'response'
                ], s.outcome))
                return s.outcome;
              else
                return '{' + s.purpose + '} ' + s.outcome + ' at (' + $_e0dlb6y9jctdj6kx.element(s.target) + ')';
            })
          });
        }
      };
    }() : ignoreEvent;
    var output = f(logger);
    logger.write();
    return output;
  };
  var inspectorInfo = function (comp) {
    var go = function (c) {
      var cSpec = c.spec();
      return {
        '(original.spec)': cSpec,
        '(dom.ref)': c.element().dom(),
        '(element)': $_e0dlb6y9jctdj6kx.element(c.element()),
        '(initComponents)': $_85zw6hw9jctdj67p.map(cSpec.components !== undefined ? cSpec.components : [], go),
        '(components)': $_85zw6hw9jctdj67p.map(c.components(), go),
        '(bound.events)': $_sbi53x0jctdj69s.mapToArray(c.events(), function (v, k) {
          return [k];
        }).join(', '),
        '(behaviours)': cSpec.behaviours !== undefined ? $_sbi53x0jctdj69s.map(cSpec.behaviours, function (v, k) {
          return v === undefined ? '--revoked--' : {
            config: v.configAsRaw(),
            'original-config': v.initialConfig,
            state: c.readState(k)
          };
        }) : 'none'
      };
    };
    return go(comp);
  };
  var getOrInitConnection = function () {
    if (window[CHROME_INSPECTOR_GLOBAL] !== undefined)
      return window[CHROME_INSPECTOR_GLOBAL];
    else {
      window[CHROME_INSPECTOR_GLOBAL] = {
        systems: {},
        lookup: function (uid) {
          var systems = window[CHROME_INSPECTOR_GLOBAL].systems;
          var connections = $_sbi53x0jctdj69s.keys(systems);
          return $_3dekh2yejctdj6l8.findMap(connections, function (conn) {
            var connGui = systems[conn];
            return connGui.getByUid(uid).toOption().map(function (comp) {
              return $_41rzpex6jctdj6bg.wrap($_e0dlb6y9jctdj6kx.element(comp.element()), inspectorInfo(comp));
            });
          });
        }
      };
      return window[CHROME_INSPECTOR_GLOBAL];
    }
  };
  var registerInspector = function (name, gui) {
    var connection = getOrInitConnection();
    connection.systems[name] = gui;
  };
  var $_8bd8kpy8jctdj6ko = {
    logHandler: logHandler,
    noLogger: $_nsetdwbjctdj67z.constant(ignoreEvent),
    getTrace: getTrace,
    monitorEvent: monitorEvent,
    isDebugging: $_nsetdwbjctdj67z.constant(debugging),
    registerInspector: registerInspector
  };

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

  var ClosestOrAncestor = function (is, ancestor, scope, a, isRoot) {
    return is(scope, a) ? $_1k5gi0wajctdj67w.some(scope) : $_1lp13rwzjctdj69r.isFunction(isRoot) && isRoot(scope) ? $_1k5gi0wajctdj67w.none() : ancestor(scope, a, isRoot);
  };

  var first$1 = function (predicate) {
    return descendant$1($_bi2sxwy7jctdj6kl.body(), predicate);
  };
  var ancestor$1 = function (scope, predicate, isRoot) {
    var element = scope.dom();
    var stop = $_1lp13rwzjctdj69r.isFunction(isRoot) ? isRoot : $_nsetdwbjctdj67z.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_bvayi3wtjctdj69a.fromDom(element);
      if (predicate(el))
        return $_1k5gi0wajctdj67w.some(el);
      else if (stop(el))
        break;
    }
    return $_1k5gi0wajctdj67w.none();
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
      return $_1k5gi0wajctdj67w.none();
    return child$2($_bvayi3wtjctdj69a.fromDom(element.parentNode), function (x) {
      return !$_a6ax5bw8jctdj67h.eq(scope, x) && predicate(x);
    });
  };
  var child$2 = function (scope, predicate) {
    var result = $_85zw6hw9jctdj67p.find(scope.dom().childNodes, $_nsetdwbjctdj67z.compose(predicate, $_bvayi3wtjctdj69a.fromDom));
    return result.map($_bvayi3wtjctdj69a.fromDom);
  };
  var descendant$1 = function (scope, predicate) {
    var descend = function (element) {
      for (var i = 0; i < element.childNodes.length; i++) {
        if (predicate($_bvayi3wtjctdj69a.fromDom(element.childNodes[i])))
          return $_1k5gi0wajctdj67w.some($_bvayi3wtjctdj69a.fromDom(element.childNodes[i]));
        var res = descend(element.childNodes[i]);
        if (res.isSome())
          return res;
      }
      return $_1k5gi0wajctdj67w.none();
    };
    return descend(scope.dom());
  };
  var $_as3f1tyijctdj6lg = {
    first: first$1,
    ancestor: ancestor$1,
    closest: closest$1,
    sibling: sibling$1,
    child: child$2,
    descendant: descendant$1
  };

  var any$1 = function (predicate) {
    return $_as3f1tyijctdj6lg.first(predicate).isSome();
  };
  var ancestor = function (scope, predicate, isRoot) {
    return $_as3f1tyijctdj6lg.ancestor(scope, predicate, isRoot).isSome();
  };
  var closest = function (scope, predicate, isRoot) {
    return $_as3f1tyijctdj6lg.closest(scope, predicate, isRoot).isSome();
  };
  var sibling = function (scope, predicate) {
    return $_as3f1tyijctdj6lg.sibling(scope, predicate).isSome();
  };
  var child$1 = function (scope, predicate) {
    return $_as3f1tyijctdj6lg.child(scope, predicate).isSome();
  };
  var descendant = function (scope, predicate) {
    return $_as3f1tyijctdj6lg.descendant(scope, predicate).isSome();
  };
  var $_7j727byhjctdj6le = {
    any: any$1,
    ancestor: ancestor,
    closest: closest,
    sibling: sibling,
    child: child$1,
    descendant: descendant
  };

  var focus = function (element) {
    element.dom().focus();
  };
  var blur = function (element) {
    element.dom().blur();
  };
  var hasFocus = function (element) {
    var doc = $_83fh6gy3jctdj6ef.owner(element).dom();
    return element.dom() === doc.activeElement;
  };
  var active = function (_doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    return $_1k5gi0wajctdj67w.from(doc.activeElement).map($_bvayi3wtjctdj69a.fromDom);
  };
  var focusInside = function (element) {
    var doc = $_83fh6gy3jctdj6ef.owner(element);
    var inside = active(doc).filter(function (a) {
      return $_7j727byhjctdj6le.closest(a, $_nsetdwbjctdj67z.curry($_a6ax5bw8jctdj67h.eq, element));
    });
    inside.fold(function () {
      focus(element);
    }, $_nsetdwbjctdj67z.noop);
  };
  var search = function (element) {
    return active($_83fh6gy3jctdj6ef.owner(element)).filter(function (e) {
      return element.dom().contains(e.dom());
    });
  };
  var $_3yi9jcygjctdj6la = {
    hasFocus: hasFocus,
    focus: focus,
    blur: blur,
    active: active,
    search: search,
    focusInside: focusInside
  };

  var ThemeManager = tinymce.util.Tools.resolve('tinymce.ThemeManager');

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var openLink = function (target) {
    var link = document.createElement('a');
    link.target = '_blank';
    link.href = target.href;
    link.rel = 'noreferrer noopener';
    var nuEvt = document.createEvent('MouseEvents');
    nuEvt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.body.appendChild(link);
    link.dispatchEvent(nuEvt);
    document.body.removeChild(link);
  };
  var $_7yezdrymjctdj6lr = { openLink: openLink };

  var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
  };
  var $_dzneqrynjctdj6ls = { isSkinDisabled: isSkinDisabled };

  var formatChanged = 'formatChanged';
  var orientationChanged = 'orientationChanged';
  var dropupDismissed = 'dropupDismissed';
  var $_7zq7xmyojctdj6lt = {
    formatChanged: $_nsetdwbjctdj67z.constant(formatChanged),
    orientationChanged: $_nsetdwbjctdj67z.constant(orientationChanged),
    dropupDismissed: $_nsetdwbjctdj67z.constant(dropupDismissed)
  };

  var chooseChannels = function (channels, message) {
    return message.universal() ? channels : $_85zw6hw9jctdj67p.filter(channels, function (ch) {
      return $_85zw6hw9jctdj67p.contains(message.channels(), ch);
    });
  };
  var events = function (receiveConfig) {
    return $_2lvgrhw6jctdj67b.derive([$_2lvgrhw6jctdj67b.run($_8rri5bwwjctdj69j.receive(), function (component, message) {
        var channelMap = receiveConfig.channels();
        var channels = $_sbi53x0jctdj69s.keys(channelMap);
        var targetChannels = chooseChannels(channels, message);
        $_85zw6hw9jctdj67p.each(targetChannels, function (ch) {
          var channelInfo = channelMap[ch]();
          var channelSchema = channelInfo.schema();
          var data = $_ebkmgyxhjctdj6cd.asStructOrDie('channel[' + ch + '] data\nReceiver: ' + $_e0dlb6y9jctdj6kx.element(component.element()), channelSchema, message.data());
          channelInfo.onReceive()(component, data);
        });
      })]);
  };
  var $_1ug7lbyrjctdj6m5 = { events: events };

  var menuFields = [
    $_e1v8vrx2jctdj6ag.strict('menu'),
    $_e1v8vrx2jctdj6ag.strict('selectedMenu')
  ];
  var itemFields = [
    $_e1v8vrx2jctdj6ag.strict('item'),
    $_e1v8vrx2jctdj6ag.strict('selectedItem')
  ];
  var schema = $_ebkmgyxhjctdj6cd.objOfOnly(itemFields.concat(menuFields));
  var itemSchema = $_ebkmgyxhjctdj6cd.objOfOnly(itemFields);
  var $_8ckw8qyujctdj6mu = {
    menuFields: $_nsetdwbjctdj67z.constant(menuFields),
    itemFields: $_nsetdwbjctdj67z.constant(itemFields),
    schema: $_nsetdwbjctdj67z.constant(schema),
    itemSchema: $_nsetdwbjctdj67z.constant(itemSchema)
  };

  var initSize = $_e1v8vrx2jctdj6ag.strictObjOf('initSize', [
    $_e1v8vrx2jctdj6ag.strict('numColumns'),
    $_e1v8vrx2jctdj6ag.strict('numRows')
  ]);
  var itemMarkers = function () {
    return $_e1v8vrx2jctdj6ag.strictOf('markers', $_8ckw8qyujctdj6mu.itemSchema());
  };
  var menuMarkers = function () {
    return $_e1v8vrx2jctdj6ag.strictOf('markers', $_8ckw8qyujctdj6mu.schema());
  };
  var tieredMenuMarkers = function () {
    return $_e1v8vrx2jctdj6ag.strictObjOf('markers', [$_e1v8vrx2jctdj6ag.strict('backgroundMenu')].concat($_8ckw8qyujctdj6mu.menuFields()).concat($_8ckw8qyujctdj6mu.itemFields()));
  };
  var markers = function (required) {
    return $_e1v8vrx2jctdj6ag.strictObjOf('markers', $_85zw6hw9jctdj67p.map(required, $_e1v8vrx2jctdj6ag.strict));
  };
  var onPresenceHandler = function (label, fieldName, presence) {
    var trace = $_8bd8kpy8jctdj6ko.getTrace();
    return $_e1v8vrx2jctdj6ag.field(fieldName, fieldName, presence, $_ebkmgyxhjctdj6cd.valueOf(function (f) {
      return $_dk7ndjx8jctdj6bo.value(function () {
        $_8bd8kpy8jctdj6ko.logHandler(label, fieldName, trace);
        return f.apply(undefined, arguments);
      });
    }));
  };
  var onHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_2nm6jxx3jctdj6am.defaulted($_nsetdwbjctdj67z.noop));
  };
  var onKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_2nm6jxx3jctdj6am.defaulted($_1k5gi0wajctdj67w.none));
  };
  var onStrictHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_2nm6jxx3jctdj6am.strict());
  };
  var onStrictKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_2nm6jxx3jctdj6am.strict());
  };
  var output$1 = function (name, value) {
    return $_e1v8vrx2jctdj6ag.state(name, $_nsetdwbjctdj67z.constant(value));
  };
  var snapshot$1 = function (name) {
    return $_e1v8vrx2jctdj6ag.state(name, $_nsetdwbjctdj67z.identity);
  };
  var $_37rg8yytjctdj6ml = {
    initSize: $_nsetdwbjctdj67z.constant(initSize),
    itemMarkers: itemMarkers,
    menuMarkers: menuMarkers,
    tieredMenuMarkers: tieredMenuMarkers,
    markers: markers,
    onHandler: onHandler,
    onKeyboardHandler: onKeyboardHandler,
    onStrictHandler: onStrictHandler,
    onStrictKeyboardHandler: onStrictKeyboardHandler,
    output: output$1,
    snapshot: snapshot$1
  };

  var ReceivingSchema = [$_e1v8vrx2jctdj6ag.strictOf('channels', $_ebkmgyxhjctdj6cd.setOf($_dk7ndjx8jctdj6bo.value, $_ebkmgyxhjctdj6cd.objOfOnly([
      $_37rg8yytjctdj6ml.onStrictHandler('onReceive'),
      $_e1v8vrx2jctdj6ag.defaulted('schema', $_ebkmgyxhjctdj6cd.anyValue())
    ])))];

  var Receiving = $_b61y2hw4jctdj66j.create({
    fields: ReceivingSchema,
    name: 'receiving',
    active: $_1ug7lbyrjctdj6m5
  });

  var updateAriaState = function (component, toggleConfig) {
    var pressed = isOn(component, toggleConfig);
    var ariaInfo = toggleConfig.aria();
    ariaInfo.update()(component, ariaInfo, pressed);
  };
  var toggle$2 = function (component, toggleConfig, toggleState) {
    $_4vb8dhxujctdj6dm.toggle(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var on = function (component, toggleConfig, toggleState) {
    $_4vb8dhxujctdj6dm.add(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var off = function (component, toggleConfig, toggleState) {
    $_4vb8dhxujctdj6dm.remove(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var isOn = function (component, toggleConfig) {
    return $_4vb8dhxujctdj6dm.has(component.element(), toggleConfig.toggleClass());
  };
  var onLoad = function (component, toggleConfig, toggleState) {
    var api = toggleConfig.selected() ? on : off;
    api(component, toggleConfig, toggleState);
  };
  var $_duq1ayxjctdj6n3 = {
    onLoad: onLoad,
    toggle: toggle$2,
    isOn: isOn,
    on: on,
    off: off
  };

  var exhibit = function (base, toggleConfig, toggleState) {
    return $_1zwhwxkjctdj6cn.nu({});
  };
  var events$1 = function (toggleConfig, toggleState) {
    var execute = $_9fnyw4w5jctdj66r.executeEvent(toggleConfig, toggleState, $_duq1ayxjctdj6n3.toggle);
    var load = $_9fnyw4w5jctdj66r.loadEvent(toggleConfig, toggleState, $_duq1ayxjctdj6n3.onLoad);
    return $_2lvgrhw6jctdj67b.derive($_85zw6hw9jctdj67p.flatten([
      toggleConfig.toggleOnExecute() ? [execute] : [],
      [load]
    ]));
  };
  var $_4gs310ywjctdj6n1 = {
    exhibit: exhibit,
    events: events$1
  };

  var updatePressed = function (component, ariaInfo, status) {
    $_ftckpcxwjctdj6dp.set(component.element(), 'aria-pressed', status);
    if (ariaInfo.syncWithExpanded())
      updateExpanded(component, ariaInfo, status);
  };
  var updateSelected = function (component, ariaInfo, status) {
    $_ftckpcxwjctdj6dp.set(component.element(), 'aria-selected', status);
  };
  var updateChecked = function (component, ariaInfo, status) {
    $_ftckpcxwjctdj6dp.set(component.element(), 'aria-checked', status);
  };
  var updateExpanded = function (component, ariaInfo, status) {
    $_ftckpcxwjctdj6dp.set(component.element(), 'aria-expanded', status);
  };
  var tagAttributes = {
    button: ['aria-pressed'],
    'input:checkbox': ['aria-checked']
  };
  var roleAttributes = {
    'button': ['aria-pressed'],
    'listbox': [
      'aria-pressed',
      'aria-expanded'
    ],
    'menuitemcheckbox': ['aria-checked']
  };
  var detectFromTag = function (component) {
    var elem = component.element();
    var rawTag = $_13f4i6xxjctdj6dv.name(elem);
    var suffix = rawTag === 'input' && $_ftckpcxwjctdj6dp.has(elem, 'type') ? ':' + $_ftckpcxwjctdj6dp.get(elem, 'type') : '';
    return $_41rzpex6jctdj6bg.readOptFrom(tagAttributes, rawTag + suffix);
  };
  var detectFromRole = function (component) {
    var elem = component.element();
    if (!$_ftckpcxwjctdj6dp.has(elem, 'role'))
      return $_1k5gi0wajctdj67w.none();
    else {
      var role = $_ftckpcxwjctdj6dp.get(elem, 'role');
      return $_41rzpex6jctdj6bg.readOptFrom(roleAttributes, role);
    }
  };
  var updateAuto = function (component, ariaInfo, status) {
    var attributes = detectFromRole(component).orThunk(function () {
      return detectFromTag(component);
    }).getOr([]);
    $_85zw6hw9jctdj67p.each(attributes, function (attr) {
      $_ftckpcxwjctdj6dp.set(component.element(), attr, status);
    });
  };
  var $_vbl04yzjctdj6nb = {
    updatePressed: updatePressed,
    updateSelected: updateSelected,
    updateChecked: updateChecked,
    updateExpanded: updateExpanded,
    updateAuto: updateAuto
  };

  var ToggleSchema = [
    $_e1v8vrx2jctdj6ag.defaulted('selected', false),
    $_e1v8vrx2jctdj6ag.strict('toggleClass'),
    $_e1v8vrx2jctdj6ag.defaulted('toggleOnExecute', true),
    $_e1v8vrx2jctdj6ag.defaultedOf('aria', { mode: 'none' }, $_ebkmgyxhjctdj6cd.choose('mode', {
      'pressed': [
        $_e1v8vrx2jctdj6ag.defaulted('syncWithExpanded', false),
        $_37rg8yytjctdj6ml.output('update', $_vbl04yzjctdj6nb.updatePressed)
      ],
      'checked': [$_37rg8yytjctdj6ml.output('update', $_vbl04yzjctdj6nb.updateChecked)],
      'expanded': [$_37rg8yytjctdj6ml.output('update', $_vbl04yzjctdj6nb.updateExpanded)],
      'selected': [$_37rg8yytjctdj6ml.output('update', $_vbl04yzjctdj6nb.updateSelected)],
      'none': [$_37rg8yytjctdj6ml.output('update', $_nsetdwbjctdj67z.noop)]
    }))
  ];

  var Toggling = $_b61y2hw4jctdj66j.create({
    fields: ToggleSchema,
    name: 'toggling',
    active: $_4gs310ywjctdj6n1,
    apis: $_duq1ayxjctdj6n3
  });

  var format = function (command, update) {
    return Receiving.config({
      channels: $_41rzpex6jctdj6bg.wrap($_7zq7xmyojctdj6lt.formatChanged(), {
        onReceive: function (button, data) {
          if (data.command === command) {
            update(button, data.state);
          }
        }
      })
    });
  };
  var orientation = function (onReceive) {
    return Receiving.config({ channels: $_41rzpex6jctdj6bg.wrap($_7zq7xmyojctdj6lt.orientationChanged(), { onReceive: onReceive }) });
  };
  var receive = function (channel, onReceive) {
    return {
      key: channel,
      value: { onReceive: onReceive }
    };
  };
  var $_bd3cf7z0jctdj6nk = {
    format: format,
    orientation: orientation,
    receive: receive
  };

  var prefix = 'tinymce-mobile';
  var resolve$1 = function (p) {
    return prefix + '-' + p;
  };
  var $_79dnpgz1jctdj6nm = {
    resolve: resolve$1,
    prefix: $_nsetdwbjctdj67z.constant(prefix)
  };

  var exhibit$1 = function (base, unselectConfig) {
    return $_1zwhwxkjctdj6cn.nu({
      styles: {
        '-webkit-user-select': 'none',
        'user-select': 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': '-moz-none'
      },
      attributes: { 'unselectable': 'on' }
    });
  };
  var events$2 = function (unselectConfig) {
    return $_2lvgrhw6jctdj67b.derive([$_2lvgrhw6jctdj67b.abort($_3mycfwxjctdj69n.selectstart(), $_nsetdwbjctdj67z.constant(true))]);
  };
  var $_6diwesz4jctdj6nw = {
    events: events$2,
    exhibit: exhibit$1
  };

  var Unselecting = $_b61y2hw4jctdj66j.create({
    fields: [],
    name: 'unselecting',
    active: $_6diwesz4jctdj6nw
  });

  var focus$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_3yi9jcygjctdj6la.focus(component.element());
      focusConfig.onFocus()(component);
    }
  };
  var blur$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_3yi9jcygjctdj6la.blur(component.element());
    }
  };
  var isFocused = function (component) {
    return $_3yi9jcygjctdj6la.hasFocus(component.element());
  };
  var $_4scfogz8jctdj6od = {
    focus: focus$1,
    blur: blur$1,
    isFocused: isFocused
  };

  var exhibit$2 = function (base, focusConfig) {
    if (focusConfig.ignore())
      return $_1zwhwxkjctdj6cn.nu({});
    else
      return $_1zwhwxkjctdj6cn.nu({ attributes: { 'tabindex': '-1' } });
  };
  var events$3 = function (focusConfig) {
    return $_2lvgrhw6jctdj67b.derive([$_2lvgrhw6jctdj67b.run($_8rri5bwwjctdj69j.focus(), function (component, simulatedEvent) {
        $_4scfogz8jctdj6od.focus(component, focusConfig);
        simulatedEvent.stop();
      })]);
  };
  var $_yg8kpz7jctdj6ob = {
    exhibit: exhibit$2,
    events: events$3
  };

  var FocusSchema = [
    $_37rg8yytjctdj6ml.onHandler('onFocus'),
    $_e1v8vrx2jctdj6ag.defaulted('ignore', false)
  ];

  var Focusing = $_b61y2hw4jctdj66j.create({
    fields: FocusSchema,
    name: 'focusing',
    active: $_yg8kpz7jctdj6ob,
    apis: $_4scfogz8jctdj6od
  });

  var $_5b6xk3zejctdj6p2 = {
    BACKSPACE: $_nsetdwbjctdj67z.constant([8]),
    TAB: $_nsetdwbjctdj67z.constant([9]),
    ENTER: $_nsetdwbjctdj67z.constant([13]),
    SHIFT: $_nsetdwbjctdj67z.constant([16]),
    CTRL: $_nsetdwbjctdj67z.constant([17]),
    ALT: $_nsetdwbjctdj67z.constant([18]),
    CAPSLOCK: $_nsetdwbjctdj67z.constant([20]),
    ESCAPE: $_nsetdwbjctdj67z.constant([27]),
    SPACE: $_nsetdwbjctdj67z.constant([32]),
    PAGEUP: $_nsetdwbjctdj67z.constant([33]),
    PAGEDOWN: $_nsetdwbjctdj67z.constant([34]),
    END: $_nsetdwbjctdj67z.constant([35]),
    HOME: $_nsetdwbjctdj67z.constant([36]),
    LEFT: $_nsetdwbjctdj67z.constant([37]),
    UP: $_nsetdwbjctdj67z.constant([38]),
    RIGHT: $_nsetdwbjctdj67z.constant([39]),
    DOWN: $_nsetdwbjctdj67z.constant([40]),
    INSERT: $_nsetdwbjctdj67z.constant([45]),
    DEL: $_nsetdwbjctdj67z.constant([46]),
    META: $_nsetdwbjctdj67z.constant([
      91,
      93,
      224
    ]),
    F10: $_nsetdwbjctdj67z.constant([121])
  };

  var cycleBy = function (value, delta, min, max) {
    var r = value + delta;
    if (r > max)
      return min;
    else
      return r < min ? max : r;
  };
  var cap = function (value, min, max) {
    if (value <= min)
      return min;
    else
      return value >= max ? max : value;
  };
  var $_9xt29hzjjctdj6pp = {
    cycleBy: cycleBy,
    cap: cap
  };

  var all$3 = function (predicate) {
    return descendants$1($_bi2sxwy7jctdj6kl.body(), predicate);
  };
  var ancestors$1 = function (scope, predicate, isRoot) {
    return $_85zw6hw9jctdj67p.filter($_83fh6gy3jctdj6ef.parents(scope, isRoot), predicate);
  };
  var siblings$2 = function (scope, predicate) {
    return $_85zw6hw9jctdj67p.filter($_83fh6gy3jctdj6ef.siblings(scope), predicate);
  };
  var children$2 = function (scope, predicate) {
    return $_85zw6hw9jctdj67p.filter($_83fh6gy3jctdj6ef.children(scope), predicate);
  };
  var descendants$1 = function (scope, predicate) {
    var result = [];
    $_85zw6hw9jctdj67p.each($_83fh6gy3jctdj6ef.children(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }
      result = result.concat(descendants$1(x, predicate));
    });
    return result;
  };
  var $_8u9gdhzljctdj6pr = {
    all: all$3,
    ancestors: ancestors$1,
    siblings: siblings$2,
    children: children$2,
    descendants: descendants$1
  };

  var all$2 = function (selector) {
    return $_ecdommwsjctdj696.all(selector);
  };
  var ancestors = function (scope, selector, isRoot) {
    return $_8u9gdhzljctdj6pr.ancestors(scope, function (e) {
      return $_ecdommwsjctdj696.is(e, selector);
    }, isRoot);
  };
  var siblings$1 = function (scope, selector) {
    return $_8u9gdhzljctdj6pr.siblings(scope, function (e) {
      return $_ecdommwsjctdj696.is(e, selector);
    });
  };
  var children$1 = function (scope, selector) {
    return $_8u9gdhzljctdj6pr.children(scope, function (e) {
      return $_ecdommwsjctdj696.is(e, selector);
    });
  };
  var descendants = function (scope, selector) {
    return $_ecdommwsjctdj696.all(selector, scope);
  };
  var $_aw19z0zkjctdj6pq = {
    all: all$2,
    ancestors: ancestors,
    siblings: siblings$1,
    children: children$1,
    descendants: descendants
  };

  var first$2 = function (selector) {
    return $_ecdommwsjctdj696.one(selector);
  };
  var ancestor$2 = function (scope, selector, isRoot) {
    return $_as3f1tyijctdj6lg.ancestor(scope, function (e) {
      return $_ecdommwsjctdj696.is(e, selector);
    }, isRoot);
  };
  var sibling$2 = function (scope, selector) {
    return $_as3f1tyijctdj6lg.sibling(scope, function (e) {
      return $_ecdommwsjctdj696.is(e, selector);
    });
  };
  var child$3 = function (scope, selector) {
    return $_as3f1tyijctdj6lg.child(scope, function (e) {
      return $_ecdommwsjctdj696.is(e, selector);
    });
  };
  var descendant$2 = function (scope, selector) {
    return $_ecdommwsjctdj696.one(selector, scope);
  };
  var closest$2 = function (scope, selector, isRoot) {
    return ClosestOrAncestor($_ecdommwsjctdj696.is, ancestor$2, scope, selector, isRoot);
  };
  var $_82w6dszmjctdj6pu = {
    first: first$2,
    ancestor: ancestor$2,
    sibling: sibling$2,
    child: child$3,
    descendant: descendant$2,
    closest: closest$2
  };

  var dehighlightAll = function (component, hConfig, hState) {
    var highlighted = $_aw19z0zkjctdj6pq.descendants(component.element(), '.' + hConfig.highlightClass());
    $_85zw6hw9jctdj67p.each(highlighted, function (h) {
      $_4vb8dhxujctdj6dm.remove(h, hConfig.highlightClass());
      component.getSystem().getByDom(h).each(function (target) {
        hConfig.onDehighlight()(component, target);
      });
    });
  };
  var dehighlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    $_4vb8dhxujctdj6dm.remove(target.element(), hConfig.highlightClass());
    if (wasHighlighted)
      hConfig.onDehighlight()(component, target);
  };
  var highlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    dehighlightAll(component, hConfig, hState);
    $_4vb8dhxujctdj6dm.add(target.element(), hConfig.highlightClass());
    if (!wasHighlighted)
      hConfig.onHighlight()(component, target);
  };
  var highlightFirst = function (component, hConfig, hState) {
    getFirst(component, hConfig, hState).each(function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightLast = function (component, hConfig, hState) {
    getLast(component, hConfig, hState).each(function (lastComp) {
      highlight(component, hConfig, hState, lastComp);
    });
  };
  var highlightAt = function (component, hConfig, hState, index) {
    getByIndex(component, hConfig, hState, index).fold(function (err) {
      throw new Error(err);
    }, function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightBy = function (component, hConfig, hState, predicate) {
    var items = $_aw19z0zkjctdj6pq.descendants(component.element(), '.' + hConfig.itemClass());
    var itemComps = $_3dekh2yejctdj6l8.cat($_85zw6hw9jctdj67p.map(items, function (i) {
      return component.getSystem().getByDom(i).toOption();
    }));
    var targetComp = $_85zw6hw9jctdj67p.find(itemComps, predicate);
    targetComp.each(function (c) {
      highlight(component, hConfig, hState, c);
    });
  };
  var isHighlighted = function (component, hConfig, hState, queryTarget) {
    return $_4vb8dhxujctdj6dm.has(queryTarget.element(), hConfig.highlightClass());
  };
  var getHighlighted = function (component, hConfig, hState) {
    return $_82w6dszmjctdj6pu.descendant(component.element(), '.' + hConfig.highlightClass()).bind(component.getSystem().getByDom);
  };
  var getByIndex = function (component, hConfig, hState, index) {
    var items = $_aw19z0zkjctdj6pq.descendants(component.element(), '.' + hConfig.itemClass());
    return $_1k5gi0wajctdj67w.from(items[index]).fold(function () {
      return $_dk7ndjx8jctdj6bo.error('No element found with index ' + index);
    }, component.getSystem().getByDom);
  };
  var getFirst = function (component, hConfig, hState) {
    return $_82w6dszmjctdj6pu.descendant(component.element(), '.' + hConfig.itemClass()).bind(component.getSystem().getByDom);
  };
  var getLast = function (component, hConfig, hState) {
    var items = $_aw19z0zkjctdj6pq.descendants(component.element(), '.' + hConfig.itemClass());
    var last = items.length > 0 ? $_1k5gi0wajctdj67w.some(items[items.length - 1]) : $_1k5gi0wajctdj67w.none();
    return last.bind(component.getSystem().getByDom);
  };
  var getDelta = function (component, hConfig, hState, delta) {
    var items = $_aw19z0zkjctdj6pq.descendants(component.element(), '.' + hConfig.itemClass());
    var current = $_85zw6hw9jctdj67p.findIndex(items, function (item) {
      return $_4vb8dhxujctdj6dm.has(item, hConfig.highlightClass());
    });
    return current.bind(function (selected) {
      var dest = $_9xt29hzjjctdj6pp.cycleBy(selected, delta, 0, items.length - 1);
      return component.getSystem().getByDom(items[dest]);
    });
  };
  var getPrevious = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, -1);
  };
  var getNext = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, +1);
  };
  var $_g74ivqzijctdj6pe = {
    dehighlightAll: dehighlightAll,
    dehighlight: dehighlight,
    highlight: highlight,
    highlightFirst: highlightFirst,
    highlightLast: highlightLast,
    highlightAt: highlightAt,
    highlightBy: highlightBy,
    isHighlighted: isHighlighted,
    getHighlighted: getHighlighted,
    getFirst: getFirst,
    getLast: getLast,
    getPrevious: getPrevious,
    getNext: getNext
  };

  var HighlightSchema = [
    $_e1v8vrx2jctdj6ag.strict('highlightClass'),
    $_e1v8vrx2jctdj6ag.strict('itemClass'),
    $_37rg8yytjctdj6ml.onHandler('onHighlight'),
    $_37rg8yytjctdj6ml.onHandler('onDehighlight')
  ];

  var Highlighting = $_b61y2hw4jctdj66j.create({
    fields: HighlightSchema,
    name: 'highlighting',
    apis: $_g74ivqzijctdj6pe
  });

  var dom = function () {
    var get = function (component) {
      return $_3yi9jcygjctdj6la.search(component.element());
    };
    var set = function (component, focusee) {
      component.getSystem().triggerFocus(focusee, component.element());
    };
    return {
      get: get,
      set: set
    };
  };
  var highlights = function () {
    var get = function (component) {
      return Highlighting.getHighlighted(component).map(function (item) {
        return item.element();
      });
    };
    var set = function (component, element) {
      component.getSystem().getByDom(element).fold($_nsetdwbjctdj67z.noop, function (item) {
        Highlighting.highlight(component, item);
      });
    };
    return {
      get: get,
      set: set
    };
  };
  var $_al44jgzgjctdj6p9 = {
    dom: dom,
    highlights: highlights
  };

  var inSet = function (keys) {
    return function (event) {
      return $_85zw6hw9jctdj67p.contains(keys, event.raw().which);
    };
  };
  var and = function (preds) {
    return function (event) {
      return $_85zw6hw9jctdj67p.forall(preds, function (pred) {
        return pred(event);
      });
    };
  };
  var is$1 = function (key) {
    return function (event) {
      return event.raw().which === key;
    };
  };
  var isShift = function (event) {
    return event.raw().shiftKey === true;
  };
  var isControl = function (event) {
    return event.raw().ctrlKey === true;
  };
  var $_pon0uzpjctdj6q6 = {
    inSet: inSet,
    and: and,
    is: is$1,
    isShift: isShift,
    isNotShift: $_nsetdwbjctdj67z.not(isShift),
    isControl: isControl,
    isNotControl: $_nsetdwbjctdj67z.not(isControl)
  };

  var basic = function (key, action) {
    return {
      matches: $_pon0uzpjctdj6q6.is(key),
      classification: action
    };
  };
  var rule = function (matches, action) {
    return {
      matches: matches,
      classification: action
    };
  };
  var choose$2 = function (transitions, event) {
    var transition = $_85zw6hw9jctdj67p.find(transitions, function (t) {
      return t.matches(event);
    });
    return transition.map(function (t) {
      return t.classification;
    });
  };
  var $_cmap8qzojctdj6q3 = {
    basic: basic,
    rule: rule,
    choose: choose$2
  };

  var typical = function (infoSchema, stateInit, getRules, getEvents, getApis, optFocusIn) {
    var schema = function () {
      return infoSchema.concat([
        $_e1v8vrx2jctdj6ag.defaulted('focusManager', $_al44jgzgjctdj6p9.dom()),
        $_37rg8yytjctdj6ml.output('handler', me),
        $_37rg8yytjctdj6ml.output('state', stateInit)
      ]);
    };
    var processKey = function (component, simulatedEvent, keyingConfig, keyingState) {
      var rules = getRules(component, simulatedEvent, keyingConfig, keyingState);
      return $_cmap8qzojctdj6q3.choose(rules, simulatedEvent.event()).bind(function (rule) {
        return rule(component, simulatedEvent, keyingConfig, keyingState);
      });
    };
    var toEvents = function (keyingConfig, keyingState) {
      var otherEvents = getEvents(keyingConfig, keyingState);
      var keyEvents = $_2lvgrhw6jctdj67b.derive(optFocusIn.map(function (focusIn) {
        return $_2lvgrhw6jctdj67b.run($_8rri5bwwjctdj69j.focus(), function (component, simulatedEvent) {
          focusIn(component, keyingConfig, keyingState, simulatedEvent);
          simulatedEvent.stop();
        });
      }).toArray().concat([$_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.keydown(), function (component, simulatedEvent) {
          processKey(component, simulatedEvent, keyingConfig, keyingState).each(function (_) {
            simulatedEvent.stop();
          });
        })]));
      return $_fwvrcwwyjctdj69p.deepMerge(otherEvents, keyEvents);
    };
    var me = {
      schema: schema,
      processKey: processKey,
      toEvents: toEvents,
      toApis: getApis
    };
    return me;
  };
  var $_9swlcezfjctdj6p5 = { typical: typical };

  var cyclePrev = function (values, index, predicate) {
    var before = $_85zw6hw9jctdj67p.reverse(values.slice(0, index));
    var after = $_85zw6hw9jctdj67p.reverse(values.slice(index + 1));
    return $_85zw6hw9jctdj67p.find(before.concat(after), predicate);
  };
  var tryPrev = function (values, index, predicate) {
    var before = $_85zw6hw9jctdj67p.reverse(values.slice(0, index));
    return $_85zw6hw9jctdj67p.find(before, predicate);
  };
  var cycleNext = function (values, index, predicate) {
    var before = values.slice(0, index);
    var after = values.slice(index + 1);
    return $_85zw6hw9jctdj67p.find(after.concat(before), predicate);
  };
  var tryNext = function (values, index, predicate) {
    var after = values.slice(index + 1);
    return $_85zw6hw9jctdj67p.find(after, predicate);
  };
  var $_4zlc0qzqjctdj6qa = {
    cyclePrev: cyclePrev,
    cycleNext: cycleNext,
    tryPrev: tryPrev,
    tryNext: tryNext
  };

  var isSupported = function (dom) {
    return dom.style !== undefined;
  };
  var $_c74wnzztjctdj6qo = { isSupported: isSupported };

  var internalSet = function (dom, property, value) {
    if (!$_1lp13rwzjctdj69r.isString(value)) {
      console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
      throw new Error('CSS value must be a string: ' + value);
    }
    if ($_c74wnzztjctdj6qo.isSupported(dom))
      dom.style.setProperty(property, value);
  };
  var internalRemove = function (dom, property) {
    if ($_c74wnzztjctdj6qo.isSupported(dom))
      dom.style.removeProperty(property);
  };
  var set$3 = function (element, property, value) {
    var dom = element.dom();
    internalSet(dom, property, value);
  };
  var setAll$1 = function (element, css) {
    var dom = element.dom();
    $_sbi53x0jctdj69s.each(css, function (v, k) {
      internalSet(dom, k, v);
    });
  };
  var setOptions = function (element, css) {
    var dom = element.dom();
    $_sbi53x0jctdj69s.each(css, function (v, k) {
      v.fold(function () {
        internalRemove(dom, k);
      }, function (value) {
        internalSet(dom, k, value);
      });
    });
  };
  var get$4 = function (element, property) {
    var dom = element.dom();
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    var v = r === '' && !$_bi2sxwy7jctdj6kl.inBody(element) ? getUnsafeProperty(dom, property) : r;
    return v === null ? undefined : v;
  };
  var getUnsafeProperty = function (dom, property) {
    return $_c74wnzztjctdj6qo.isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };
  var getRaw = function (element, property) {
    var dom = element.dom();
    var raw = getUnsafeProperty(dom, property);
    return $_1k5gi0wajctdj67w.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };
  var getAllRaw = function (element) {
    var css = {};
    var dom = element.dom();
    if ($_c74wnzztjctdj6qo.isSupported(dom)) {
      for (var i = 0; i < dom.style.length; i++) {
        var ruleName = dom.style.item(i);
        css[ruleName] = dom.style[ruleName];
      }
    }
    return css;
  };
  var isValidValue = function (tag, property, value) {
    var element = $_bvayi3wtjctdj69a.fromTag(tag);
    set$3(element, property, value);
    var style = getRaw(element, property);
    return style.isSome();
  };
  var remove$5 = function (element, property) {
    var dom = element.dom();
    internalRemove(dom, property);
    if ($_ftckpcxwjctdj6dp.has(element, 'style') && $_c6n415wpjctdj68s.trim($_ftckpcxwjctdj6dp.get(element, 'style')) === '') {
      $_ftckpcxwjctdj6dp.remove(element, 'style');
    }
  };
  var preserve = function (element, f) {
    var oldStyles = $_ftckpcxwjctdj6dp.get(element, 'style');
    var result = f(element);
    var restore = oldStyles === undefined ? $_ftckpcxwjctdj6dp.remove : $_ftckpcxwjctdj6dp.set;
    restore(element, 'style', oldStyles);
    return result;
  };
  var copy$1 = function (source, target) {
    var sourceDom = source.dom();
    var targetDom = target.dom();
    if ($_c74wnzztjctdj6qo.isSupported(sourceDom) && $_c74wnzztjctdj6qo.isSupported(targetDom)) {
      targetDom.style.cssText = sourceDom.style.cssText;
    }
  };
  var reflow = function (e) {
    return e.dom().offsetWidth;
  };
  var transferOne$1 = function (source, destination, style) {
    getRaw(source, style).each(function (value) {
      if (getRaw(destination, style).isNone())
        set$3(destination, style, value);
    });
  };
  var transfer$1 = function (source, destination, styles) {
    if (!$_13f4i6xxjctdj6dv.isElement(source) || !$_13f4i6xxjctdj6dv.isElement(destination))
      return;
    $_85zw6hw9jctdj67p.each(styles, function (style) {
      transferOne$1(source, destination, style);
    });
  };
  var $_c7wjf9zsjctdj6qf = {
    copy: copy$1,
    set: set$3,
    preserve: preserve,
    setAll: setAll$1,
    setOptions: setOptions,
    remove: remove$5,
    get: get$4,
    getRaw: getRaw,
    getAllRaw: getAllRaw,
    isValidValue: isValidValue,
    reflow: reflow,
    transfer: transfer$1
  };

  var Dimension = function (name, getOffset) {
    var set = function (element, h) {
      if (!$_1lp13rwzjctdj69r.isNumber(h) && !h.match(/^[0-9]+$/))
        throw name + '.set accepts only positive integer values. Value was ' + h;
      var dom = element.dom();
      if ($_c74wnzztjctdj6qo.isSupported(dom))
        dom.style[name] = h + 'px';
    };
    var get = function (element) {
      var r = getOffset(element);
      if (r <= 0 || r === null) {
        var css = $_c7wjf9zsjctdj6qf.get(element, name);
        return parseFloat(css) || 0;
      }
      return r;
    };
    var getOuter = get;
    var aggregate = function (element, properties) {
      return $_85zw6hw9jctdj67p.foldl(properties, function (acc, property) {
        var val = $_c7wjf9zsjctdj6qf.get(element, property);
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

  var api = Dimension('height', function (element) {
    return $_bi2sxwy7jctdj6kl.inBody(element) ? element.dom().getBoundingClientRect().height : element.dom().offsetHeight;
  });
  var set$2 = function (element, h) {
    api.set(element, h);
  };
  var get$3 = function (element) {
    return api.get(element);
  };
  var getOuter$1 = function (element) {
    return api.getOuter(element);
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
    var absMax = api.max(element, value, inclusions);
    $_c7wjf9zsjctdj6qf.set(element, 'max-height', absMax + 'px');
  };
  var $_g7q7mszrjctdj6qd = {
    set: set$2,
    get: get$3,
    getOuter: getOuter$1,
    setMax: setMax
  };

  var create$2 = function (cyclicField) {
    var schema = [
      $_e1v8vrx2jctdj6ag.option('onEscape'),
      $_e1v8vrx2jctdj6ag.option('onEnter'),
      $_e1v8vrx2jctdj6ag.defaulted('selector', '[data-alloy-tabstop="true"]'),
      $_e1v8vrx2jctdj6ag.defaulted('firstTabstop', 0),
      $_e1v8vrx2jctdj6ag.defaulted('useTabstopAt', $_nsetdwbjctdj67z.constant(true)),
      $_e1v8vrx2jctdj6ag.option('visibilitySelector')
    ].concat([cyclicField]);
    var isVisible = function (tabbingConfig, element) {
      var target = tabbingConfig.visibilitySelector().bind(function (sel) {
        return $_82w6dszmjctdj6pu.closest(element, sel);
      }).getOr(element);
      return $_g7q7mszrjctdj6qd.get(target) > 0;
    };
    var findInitial = function (component, tabbingConfig) {
      var tabstops = $_aw19z0zkjctdj6pq.descendants(component.element(), tabbingConfig.selector());
      var visibles = $_85zw6hw9jctdj67p.filter(tabstops, function (elem) {
        return isVisible(tabbingConfig, elem);
      });
      return $_1k5gi0wajctdj67w.from(visibles[tabbingConfig.firstTabstop()]);
    };
    var findCurrent = function (component, tabbingConfig) {
      return tabbingConfig.focusManager().get(component).bind(function (elem) {
        return $_82w6dszmjctdj6pu.closest(elem, tabbingConfig.selector());
      });
    };
    var isTabstop = function (tabbingConfig, element) {
      return isVisible(tabbingConfig, element) && tabbingConfig.useTabstopAt()(element);
    };
    var focusIn = function (component, tabbingConfig, tabbingState) {
      findInitial(component, tabbingConfig).each(function (target) {
        tabbingConfig.focusManager().set(component, target);
      });
    };
    var goFromTabstop = function (component, tabstops, stopIndex, tabbingConfig, cycle) {
      return cycle(tabstops, stopIndex, function (elem) {
        return isTabstop(tabbingConfig, elem);
      }).fold(function () {
        return tabbingConfig.cyclic() ? $_1k5gi0wajctdj67w.some(true) : $_1k5gi0wajctdj67w.none();
      }, function (target) {
        tabbingConfig.focusManager().set(component, target);
        return $_1k5gi0wajctdj67w.some(true);
      });
    };
    var go = function (component, simulatedEvent, tabbingConfig, cycle) {
      var tabstops = $_aw19z0zkjctdj6pq.descendants(component.element(), tabbingConfig.selector());
      return findCurrent(component, tabbingConfig).bind(function (tabstop) {
        var optStopIndex = $_85zw6hw9jctdj67p.findIndex(tabstops, $_nsetdwbjctdj67z.curry($_a6ax5bw8jctdj67h.eq, tabstop));
        return optStopIndex.bind(function (stopIndex) {
          return goFromTabstop(component, tabstops, stopIndex, tabbingConfig, cycle);
        });
      });
    };
    var goBackwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_4zlc0qzqjctdj6qa.cyclePrev : $_4zlc0qzqjctdj6qa.tryPrev;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var goForwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_4zlc0qzqjctdj6qa.cycleNext : $_4zlc0qzqjctdj6qa.tryNext;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var execute = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEnter().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var exit = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEscape().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var getRules = $_nsetdwbjctdj67z.constant([
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.and([
        $_pon0uzpjctdj6q6.isShift,
        $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.TAB())
      ]), goBackwards),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.TAB()), goForwards),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.ESCAPE()), exit),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.and([
        $_pon0uzpjctdj6q6.isNotShift,
        $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.ENTER())
      ]), execute)
    ]);
    var getEvents = $_nsetdwbjctdj67z.constant({});
    var getApis = $_nsetdwbjctdj67z.constant({});
    return $_9swlcezfjctdj6p5.typical(schema, $_atjv2ixqjctdj6dd.init, getRules, getEvents, getApis, $_1k5gi0wajctdj67w.some(focusIn));
  };
  var $_ecwl3fzdjctdj6op = { create: create$2 };

  var AcyclicType = $_ecwl3fzdjctdj6op.create($_e1v8vrx2jctdj6ag.state('cyclic', $_nsetdwbjctdj67z.constant(false)));

  var CyclicType = $_ecwl3fzdjctdj6op.create($_e1v8vrx2jctdj6ag.state('cyclic', $_nsetdwbjctdj67z.constant(true)));

  var inside = function (target) {
    return $_13f4i6xxjctdj6dv.name(target) === 'input' && $_ftckpcxwjctdj6dp.get(target, 'type') !== 'radio' || $_13f4i6xxjctdj6dv.name(target) === 'textarea';
  };
  var $_dl0liazxjctdj6r1 = { inside: inside };

  var doDefaultExecute = function (component, simulatedEvent, focused) {
    $_axzm60wvjctdj69e.dispatch(component, focused, $_8rri5bwwjctdj69j.execute());
    return $_1k5gi0wajctdj67w.some(true);
  };
  var defaultExecute = function (component, simulatedEvent, focused) {
    return $_dl0liazxjctdj6r1.inside(focused) && $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.SPACE())(simulatedEvent.event()) ? $_1k5gi0wajctdj67w.none() : doDefaultExecute(component, simulatedEvent, focused);
  };
  var $_dv7xlezyjctdj6r4 = { defaultExecute: defaultExecute };

  var schema$1 = [
    $_e1v8vrx2jctdj6ag.defaulted('execute', $_dv7xlezyjctdj6r4.defaultExecute),
    $_e1v8vrx2jctdj6ag.defaulted('useSpace', false),
    $_e1v8vrx2jctdj6ag.defaulted('useEnter', true),
    $_e1v8vrx2jctdj6ag.defaulted('useControlEnter', false),
    $_e1v8vrx2jctdj6ag.defaulted('useDown', false)
  ];
  var execute = function (component, simulatedEvent, executeConfig, executeState) {
    return executeConfig.execute()(component, simulatedEvent, component.element());
  };
  var getRules = function (component, simulatedEvent, executeConfig, executeState) {
    var spaceExec = executeConfig.useSpace() && !$_dl0liazxjctdj6r1.inside(component.element()) ? $_5b6xk3zejctdj6p2.SPACE() : [];
    var enterExec = executeConfig.useEnter() ? $_5b6xk3zejctdj6p2.ENTER() : [];
    var downExec = executeConfig.useDown() ? $_5b6xk3zejctdj6p2.DOWN() : [];
    var execKeys = spaceExec.concat(enterExec).concat(downExec);
    return [$_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet(execKeys), execute)].concat(executeConfig.useControlEnter() ? [$_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.and([
        $_pon0uzpjctdj6q6.isControl,
        $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.ENTER())
      ]), execute)] : []);
  };
  var getEvents = $_nsetdwbjctdj67z.constant({});
  var getApis = $_nsetdwbjctdj67z.constant({});
  var ExecutionType = $_9swlcezfjctdj6p5.typical(schema$1, $_atjv2ixqjctdj6dd.init, getRules, getEvents, getApis, $_1k5gi0wajctdj67w.none());

  var flatgrid = function (spec) {
    var dimensions = Cell($_1k5gi0wajctdj67w.none());
    var setGridSize = function (numRows, numColumns) {
      dimensions.set($_1k5gi0wajctdj67w.some({
        numRows: $_nsetdwbjctdj67z.constant(numRows),
        numColumns: $_nsetdwbjctdj67z.constant(numColumns)
      }));
    };
    var getNumRows = function () {
      return dimensions.get().map(function (d) {
        return d.numRows();
      });
    };
    var getNumColumns = function () {
      return dimensions.get().map(function (d) {
        return d.numColumns();
      });
    };
    return BehaviourState({
      readState: $_nsetdwbjctdj67z.constant({}),
      setGridSize: setGridSize,
      getNumRows: getNumRows,
      getNumColumns: getNumColumns
    });
  };
  var init$1 = function (spec) {
    return spec.state()(spec);
  };
  var $_bnqrke100jctdj6re = {
    flatgrid: flatgrid,
    init: init$1
  };

  var onDirection = function (isLtr, isRtl) {
    return function (element) {
      return getDirection(element) === 'rtl' ? isRtl : isLtr;
    };
  };
  var getDirection = function (element) {
    return $_c7wjf9zsjctdj6qf.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };
  var $_2sk0lc102jctdj6rn = {
    onDirection: onDirection,
    getDirection: getDirection
  };

  var useH = function (movement) {
    return function (component, simulatedEvent, config, state) {
      var move = movement(component.element());
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var west = function (moveLeft, moveRight) {
    var movement = $_2sk0lc102jctdj6rn.onDirection(moveLeft, moveRight);
    return useH(movement);
  };
  var east = function (moveLeft, moveRight) {
    var movement = $_2sk0lc102jctdj6rn.onDirection(moveRight, moveLeft);
    return useH(movement);
  };
  var useV = function (move) {
    return function (component, simulatedEvent, config, state) {
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var use = function (move, component, simulatedEvent, config, state) {
    var outcome = config.focusManager().get(component).bind(function (focused) {
      return move(component.element(), focused, config, state);
    });
    return outcome.map(function (newFocus) {
      config.focusManager().set(component, newFocus);
      return true;
    });
  };
  var $_6tvei0101jctdj6rk = {
    east: east,
    west: west,
    north: useV,
    south: useV,
    move: useV
  };

  var indexInfo = $_es1bl5xmjctdj6d5.immutableBag([
    'index',
    'candidates'
  ], []);
  var locate = function (candidates, predicate) {
    return $_85zw6hw9jctdj67p.findIndex(candidates, predicate).map(function (index) {
      return indexInfo({
        index: index,
        candidates: candidates
      });
    });
  };
  var $_8x2m9b104jctdj6s1 = { locate: locate };

  var visibilityToggler = function (element, property, hiddenValue, visibleValue) {
    var initial = $_c7wjf9zsjctdj6qf.get(element, property);
    if (initial === undefined)
      initial = '';
    var value = initial === hiddenValue ? visibleValue : hiddenValue;
    var off = $_nsetdwbjctdj67z.curry($_c7wjf9zsjctdj6qf.set, element, property, initial);
    var on = $_nsetdwbjctdj67z.curry($_c7wjf9zsjctdj6qf.set, element, property, value);
    return Toggler(off, on, false);
  };
  var toggler$1 = function (element) {
    return visibilityToggler(element, 'visibility', 'hidden', 'visible');
  };
  var displayToggler = function (element, value) {
    return visibilityToggler(element, 'display', 'none', value);
  };
  var isHidden = function (dom) {
    return dom.offsetWidth <= 0 && dom.offsetHeight <= 0;
  };
  var isVisible = function (element) {
    var dom = element.dom();
    return !isHidden(dom);
  };
  var $_flcljk105jctdj6s4 = {
    toggler: toggler$1,
    displayToggler: displayToggler,
    isVisible: isVisible
  };

  var locateVisible = function (container, current, selector) {
    var filter = $_flcljk105jctdj6s4.isVisible;
    return locateIn(container, current, selector, filter);
  };
  var locateIn = function (container, current, selector, filter) {
    var predicate = $_nsetdwbjctdj67z.curry($_a6ax5bw8jctdj67h.eq, current);
    var candidates = $_aw19z0zkjctdj6pq.descendants(container, selector);
    var visible = $_85zw6hw9jctdj67p.filter(candidates, $_flcljk105jctdj6s4.isVisible);
    return $_8x2m9b104jctdj6s1.locate(visible, predicate);
  };
  var findIndex$2 = function (elements, target) {
    return $_85zw6hw9jctdj67p.findIndex(elements, function (elem) {
      return $_a6ax5bw8jctdj67h.eq(target, elem);
    });
  };
  var $_e1gyap103jctdj6ro = {
    locateVisible: locateVisible,
    locateIn: locateIn,
    findIndex: findIndex$2
  };

  var withGrid = function (values, index, numCols, f) {
    var oldRow = Math.floor(index / numCols);
    var oldColumn = index % numCols;
    return f(oldRow, oldColumn).bind(function (address) {
      var newIndex = address.row() * numCols + address.column();
      return newIndex >= 0 && newIndex < values.length ? $_1k5gi0wajctdj67w.some(values[newIndex]) : $_1k5gi0wajctdj67w.none();
    });
  };
  var cycleHorizontal = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var onLastRow = oldRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - oldRow * numCols : numCols;
      var newColumn = $_9xt29hzjjctdj6pp.cycleBy(oldColumn, delta, 0, colsInRow - 1);
      return $_1k5gi0wajctdj67w.some({
        row: $_nsetdwbjctdj67z.constant(oldRow),
        column: $_nsetdwbjctdj67z.constant(newColumn)
      });
    });
  };
  var cycleVertical = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var newRow = $_9xt29hzjjctdj6pp.cycleBy(oldRow, delta, 0, numRows - 1);
      var onLastRow = newRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - newRow * numCols : numCols;
      var newCol = $_9xt29hzjjctdj6pp.cap(oldColumn, 0, colsInRow - 1);
      return $_1k5gi0wajctdj67w.some({
        row: $_nsetdwbjctdj67z.constant(newRow),
        column: $_nsetdwbjctdj67z.constant(newCol)
      });
    });
  };
  var cycleRight = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, +1);
  };
  var cycleLeft = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, -1);
  };
  var cycleUp = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, -1);
  };
  var cycleDown = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, +1);
  };
  var $_29bioq106jctdj6s7 = {
    cycleDown: cycleDown,
    cycleUp: cycleUp,
    cycleLeft: cycleLeft,
    cycleRight: cycleRight
  };

  var schema$2 = [
    $_e1v8vrx2jctdj6ag.strict('selector'),
    $_e1v8vrx2jctdj6ag.defaulted('execute', $_dv7xlezyjctdj6r4.defaultExecute),
    $_37rg8yytjctdj6ml.onKeyboardHandler('onEscape'),
    $_e1v8vrx2jctdj6ag.defaulted('captureTab', false),
    $_37rg8yytjctdj6ml.initSize()
  ];
  var focusIn = function (component, gridConfig, gridState) {
    $_82w6dszmjctdj6pu.descendant(component.element(), gridConfig.selector()).each(function (first) {
      gridConfig.focusManager().set(component, first);
    });
  };
  var findCurrent = function (component, gridConfig) {
    return gridConfig.focusManager().get(component).bind(function (elem) {
      return $_82w6dszmjctdj6pu.closest(elem, gridConfig.selector());
    });
  };
  var execute$1 = function (component, simulatedEvent, gridConfig, gridState) {
    return findCurrent(component, gridConfig).bind(function (focused) {
      return gridConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var doMove = function (cycle) {
    return function (element, focused, gridConfig, gridState) {
      return $_e1gyap103jctdj6ro.locateVisible(element, focused, gridConfig.selector()).bind(function (identified) {
        return cycle(identified.candidates(), identified.index(), gridState.getNumRows().getOr(gridConfig.initSize().numRows()), gridState.getNumColumns().getOr(gridConfig.initSize().numColumns()));
      });
    };
  };
  var handleTab = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.captureTab() ? $_1k5gi0wajctdj67w.some(true) : $_1k5gi0wajctdj67w.none();
  };
  var doEscape = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.onEscape()(component, simulatedEvent);
  };
  var moveLeft = doMove($_29bioq106jctdj6s7.cycleLeft);
  var moveRight = doMove($_29bioq106jctdj6s7.cycleRight);
  var moveNorth = doMove($_29bioq106jctdj6s7.cycleUp);
  var moveSouth = doMove($_29bioq106jctdj6s7.cycleDown);
  var getRules$1 = $_nsetdwbjctdj67z.constant([
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.LEFT()), $_6tvei0101jctdj6rk.west(moveLeft, moveRight)),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.RIGHT()), $_6tvei0101jctdj6rk.east(moveLeft, moveRight)),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.UP()), $_6tvei0101jctdj6rk.north(moveNorth)),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.DOWN()), $_6tvei0101jctdj6rk.south(moveSouth)),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.and([
      $_pon0uzpjctdj6q6.isShift,
      $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.TAB())
    ]), handleTab),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.and([
      $_pon0uzpjctdj6q6.isNotShift,
      $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.TAB())
    ]), handleTab),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.ESCAPE()), doEscape),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.SPACE().concat($_5b6xk3zejctdj6p2.ENTER())), execute$1)
  ]);
  var getEvents$1 = $_nsetdwbjctdj67z.constant({});
  var getApis$1 = {};
  var FlatgridType = $_9swlcezfjctdj6p5.typical(schema$2, $_bnqrke100jctdj6re.flatgrid, getRules$1, getEvents$1, getApis$1, $_1k5gi0wajctdj67w.some(focusIn));

  var horizontal = function (container, selector, current, delta) {
    return $_e1gyap103jctdj6ro.locateVisible(container, current, selector, $_nsetdwbjctdj67z.constant(true)).bind(function (identified) {
      var index = identified.index();
      var candidates = identified.candidates();
      var newIndex = $_9xt29hzjjctdj6pp.cycleBy(index, delta, 0, candidates.length - 1);
      return $_1k5gi0wajctdj67w.from(candidates[newIndex]);
    });
  };
  var $_92zxw3108jctdj6sn = { horizontal: horizontal };

  var schema$3 = [
    $_e1v8vrx2jctdj6ag.strict('selector'),
    $_e1v8vrx2jctdj6ag.defaulted('getInitial', $_1k5gi0wajctdj67w.none),
    $_e1v8vrx2jctdj6ag.defaulted('execute', $_dv7xlezyjctdj6r4.defaultExecute),
    $_e1v8vrx2jctdj6ag.defaulted('executeOnMove', false)
  ];
  var findCurrent$1 = function (component, flowConfig) {
    return flowConfig.focusManager().get(component).bind(function (elem) {
      return $_82w6dszmjctdj6pu.closest(elem, flowConfig.selector());
    });
  };
  var execute$2 = function (component, simulatedEvent, flowConfig) {
    return findCurrent$1(component, flowConfig).bind(function (focused) {
      return flowConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$1 = function (component, flowConfig) {
    flowConfig.getInitial()(component).or($_82w6dszmjctdj6pu.descendant(component.element(), flowConfig.selector())).each(function (first) {
      flowConfig.focusManager().set(component, first);
    });
  };
  var moveLeft$1 = function (element, focused, info) {
    return $_92zxw3108jctdj6sn.horizontal(element, info.selector(), focused, -1);
  };
  var moveRight$1 = function (element, focused, info) {
    return $_92zxw3108jctdj6sn.horizontal(element, info.selector(), focused, +1);
  };
  var doMove$1 = function (movement) {
    return function (component, simulatedEvent, flowConfig) {
      return movement(component, simulatedEvent, flowConfig).bind(function () {
        return flowConfig.executeOnMove() ? execute$2(component, simulatedEvent, flowConfig) : $_1k5gi0wajctdj67w.some(true);
      });
    };
  };
  var getRules$2 = function (_) {
    return [
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.LEFT().concat($_5b6xk3zejctdj6p2.UP())), doMove$1($_6tvei0101jctdj6rk.west(moveLeft$1, moveRight$1))),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.RIGHT().concat($_5b6xk3zejctdj6p2.DOWN())), doMove$1($_6tvei0101jctdj6rk.east(moveLeft$1, moveRight$1))),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.ENTER()), execute$2),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.SPACE()), execute$2)
    ];
  };
  var getEvents$2 = $_nsetdwbjctdj67z.constant({});
  var getApis$2 = $_nsetdwbjctdj67z.constant({});
  var FlowType = $_9swlcezfjctdj6p5.typical(schema$3, $_atjv2ixqjctdj6dd.init, getRules$2, getEvents$2, getApis$2, $_1k5gi0wajctdj67w.some(focusIn$1));

  var outcome = $_es1bl5xmjctdj6d5.immutableBag([
    'rowIndex',
    'columnIndex',
    'cell'
  ], []);
  var toCell = function (matrix, rowIndex, columnIndex) {
    return $_1k5gi0wajctdj67w.from(matrix[rowIndex]).bind(function (row) {
      return $_1k5gi0wajctdj67w.from(row[columnIndex]).map(function (cell) {
        return outcome({
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          cell: cell
        });
      });
    });
  };
  var cycleHorizontal$1 = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_9xt29hzjjctdj6pp.cycleBy(startCol, deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var cycleVertical$1 = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_9xt29hzjjctdj6pp.cycleBy(startRow, deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_9xt29hzjjctdj6pp.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var moveHorizontal = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_9xt29hzjjctdj6pp.cap(startCol + deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var moveVertical = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_9xt29hzjjctdj6pp.cap(startRow + deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_9xt29hzjjctdj6pp.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var cycleRight$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, +1);
  };
  var cycleLeft$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, -1);
  };
  var cycleUp$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, -1);
  };
  var cycleDown$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, +1);
  };
  var moveLeft$3 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, -1);
  };
  var moveRight$3 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, +1);
  };
  var moveUp = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, -1);
  };
  var moveDown = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, +1);
  };
  var $_q05b710ajctdj6t4 = {
    cycleRight: cycleRight$1,
    cycleLeft: cycleLeft$1,
    cycleUp: cycleUp$1,
    cycleDown: cycleDown$1,
    moveLeft: moveLeft$3,
    moveRight: moveRight$3,
    moveUp: moveUp,
    moveDown: moveDown
  };

  var schema$4 = [
    $_e1v8vrx2jctdj6ag.strictObjOf('selectors', [
      $_e1v8vrx2jctdj6ag.strict('row'),
      $_e1v8vrx2jctdj6ag.strict('cell')
    ]),
    $_e1v8vrx2jctdj6ag.defaulted('cycles', true),
    $_e1v8vrx2jctdj6ag.defaulted('previousSelector', $_1k5gi0wajctdj67w.none),
    $_e1v8vrx2jctdj6ag.defaulted('execute', $_dv7xlezyjctdj6r4.defaultExecute)
  ];
  var focusIn$2 = function (component, matrixConfig) {
    var focused = matrixConfig.previousSelector()(component).orThunk(function () {
      var selectors = matrixConfig.selectors();
      return $_82w6dszmjctdj6pu.descendant(component.element(), selectors.cell());
    });
    focused.each(function (cell) {
      matrixConfig.focusManager().set(component, cell);
    });
  };
  var execute$3 = function (component, simulatedEvent, matrixConfig) {
    return $_3yi9jcygjctdj6la.search(component.element()).bind(function (focused) {
      return matrixConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var toMatrix = function (rows, matrixConfig) {
    return $_85zw6hw9jctdj67p.map(rows, function (row) {
      return $_aw19z0zkjctdj6pq.descendants(row, matrixConfig.selectors().cell());
    });
  };
  var doMove$2 = function (ifCycle, ifMove) {
    return function (element, focused, matrixConfig) {
      var move = matrixConfig.cycles() ? ifCycle : ifMove;
      return $_82w6dszmjctdj6pu.closest(focused, matrixConfig.selectors().row()).bind(function (inRow) {
        var cellsInRow = $_aw19z0zkjctdj6pq.descendants(inRow, matrixConfig.selectors().cell());
        return $_e1gyap103jctdj6ro.findIndex(cellsInRow, focused).bind(function (colIndex) {
          var allRows = $_aw19z0zkjctdj6pq.descendants(element, matrixConfig.selectors().row());
          return $_e1gyap103jctdj6ro.findIndex(allRows, inRow).bind(function (rowIndex) {
            var matrix = toMatrix(allRows, matrixConfig);
            return move(matrix, rowIndex, colIndex).map(function (next) {
              return next.cell();
            });
          });
        });
      });
    };
  };
  var moveLeft$2 = doMove$2($_q05b710ajctdj6t4.cycleLeft, $_q05b710ajctdj6t4.moveLeft);
  var moveRight$2 = doMove$2($_q05b710ajctdj6t4.cycleRight, $_q05b710ajctdj6t4.moveRight);
  var moveNorth$1 = doMove$2($_q05b710ajctdj6t4.cycleUp, $_q05b710ajctdj6t4.moveUp);
  var moveSouth$1 = doMove$2($_q05b710ajctdj6t4.cycleDown, $_q05b710ajctdj6t4.moveDown);
  var getRules$3 = $_nsetdwbjctdj67z.constant([
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.LEFT()), $_6tvei0101jctdj6rk.west(moveLeft$2, moveRight$2)),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.RIGHT()), $_6tvei0101jctdj6rk.east(moveLeft$2, moveRight$2)),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.UP()), $_6tvei0101jctdj6rk.north(moveNorth$1)),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.DOWN()), $_6tvei0101jctdj6rk.south(moveSouth$1)),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.SPACE().concat($_5b6xk3zejctdj6p2.ENTER())), execute$3)
  ]);
  var getEvents$3 = $_nsetdwbjctdj67z.constant({});
  var getApis$3 = $_nsetdwbjctdj67z.constant({});
  var MatrixType = $_9swlcezfjctdj6p5.typical(schema$4, $_atjv2ixqjctdj6dd.init, getRules$3, getEvents$3, getApis$3, $_1k5gi0wajctdj67w.some(focusIn$2));

  var schema$5 = [
    $_e1v8vrx2jctdj6ag.strict('selector'),
    $_e1v8vrx2jctdj6ag.defaulted('execute', $_dv7xlezyjctdj6r4.defaultExecute),
    $_e1v8vrx2jctdj6ag.defaulted('moveOnTab', false)
  ];
  var execute$4 = function (component, simulatedEvent, menuConfig) {
    return menuConfig.focusManager().get(component).bind(function (focused) {
      return menuConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$3 = function (component, menuConfig, simulatedEvent) {
    $_82w6dszmjctdj6pu.descendant(component.element(), menuConfig.selector()).each(function (first) {
      menuConfig.focusManager().set(component, first);
    });
  };
  var moveUp$1 = function (element, focused, info) {
    return $_92zxw3108jctdj6sn.horizontal(element, info.selector(), focused, -1);
  };
  var moveDown$1 = function (element, focused, info) {
    return $_92zxw3108jctdj6sn.horizontal(element, info.selector(), focused, +1);
  };
  var fireShiftTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_6tvei0101jctdj6rk.move(moveUp$1)(component, simulatedEvent, menuConfig) : $_1k5gi0wajctdj67w.none();
  };
  var fireTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_6tvei0101jctdj6rk.move(moveDown$1)(component, simulatedEvent, menuConfig) : $_1k5gi0wajctdj67w.none();
  };
  var getRules$4 = $_nsetdwbjctdj67z.constant([
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.UP()), $_6tvei0101jctdj6rk.move(moveUp$1)),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.DOWN()), $_6tvei0101jctdj6rk.move(moveDown$1)),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.and([
      $_pon0uzpjctdj6q6.isShift,
      $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.TAB())
    ]), fireShiftTab),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.and([
      $_pon0uzpjctdj6q6.isNotShift,
      $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.TAB())
    ]), fireTab),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.ENTER()), execute$4),
    $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.SPACE()), execute$4)
  ]);
  var getEvents$4 = $_nsetdwbjctdj67z.constant({});
  var getApis$4 = $_nsetdwbjctdj67z.constant({});
  var MenuType = $_9swlcezfjctdj6p5.typical(schema$5, $_atjv2ixqjctdj6dd.init, getRules$4, getEvents$4, getApis$4, $_1k5gi0wajctdj67w.some(focusIn$3));

  var schema$6 = [
    $_37rg8yytjctdj6ml.onKeyboardHandler('onSpace'),
    $_37rg8yytjctdj6ml.onKeyboardHandler('onEnter'),
    $_37rg8yytjctdj6ml.onKeyboardHandler('onShiftEnter'),
    $_37rg8yytjctdj6ml.onKeyboardHandler('onLeft'),
    $_37rg8yytjctdj6ml.onKeyboardHandler('onRight'),
    $_37rg8yytjctdj6ml.onKeyboardHandler('onTab'),
    $_37rg8yytjctdj6ml.onKeyboardHandler('onShiftTab'),
    $_37rg8yytjctdj6ml.onKeyboardHandler('onUp'),
    $_37rg8yytjctdj6ml.onKeyboardHandler('onDown'),
    $_37rg8yytjctdj6ml.onKeyboardHandler('onEscape'),
    $_e1v8vrx2jctdj6ag.option('focusIn')
  ];
  var getRules$5 = function (component, simulatedEvent, executeInfo) {
    return [
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.SPACE()), executeInfo.onSpace()),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.and([
        $_pon0uzpjctdj6q6.isNotShift,
        $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.ENTER())
      ]), executeInfo.onEnter()),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.and([
        $_pon0uzpjctdj6q6.isShift,
        $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.ENTER())
      ]), executeInfo.onShiftEnter()),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.and([
        $_pon0uzpjctdj6q6.isShift,
        $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.TAB())
      ]), executeInfo.onShiftTab()),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.and([
        $_pon0uzpjctdj6q6.isNotShift,
        $_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.TAB())
      ]), executeInfo.onTab()),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.UP()), executeInfo.onUp()),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.DOWN()), executeInfo.onDown()),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.LEFT()), executeInfo.onLeft()),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.RIGHT()), executeInfo.onRight()),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.SPACE()), executeInfo.onSpace()),
      $_cmap8qzojctdj6q3.rule($_pon0uzpjctdj6q6.inSet($_5b6xk3zejctdj6p2.ESCAPE()), executeInfo.onEscape())
    ];
  };
  var focusIn$4 = function (component, executeInfo) {
    return executeInfo.focusIn().bind(function (f) {
      return f(component, executeInfo);
    });
  };
  var getEvents$5 = $_nsetdwbjctdj67z.constant({});
  var getApis$5 = $_nsetdwbjctdj67z.constant({});
  var SpecialType = $_9swlcezfjctdj6p5.typical(schema$6, $_atjv2ixqjctdj6dd.init, getRules$5, getEvents$5, getApis$5, $_1k5gi0wajctdj67w.some(focusIn$4));

  var $_2d68o4zbjctdj6ok = {
    acyclic: AcyclicType.schema(),
    cyclic: CyclicType.schema(),
    flow: FlowType.schema(),
    flatgrid: FlatgridType.schema(),
    matrix: MatrixType.schema(),
    execution: ExecutionType.schema(),
    menu: MenuType.schema(),
    special: SpecialType.schema()
  };

  var Keying = $_b61y2hw4jctdj66j.createModes({
    branchKey: 'mode',
    branches: $_2d68o4zbjctdj6ok,
    name: 'keying',
    active: {
      events: function (keyingConfig, keyingState) {
        var handler = keyingConfig.handler();
        return handler.toEvents(keyingConfig, keyingState);
      }
    },
    apis: {
      focusIn: function (component) {
        component.getSystem().triggerFocus(component.element(), component.element());
      },
      setGridSize: function (component, keyConfig, keyState, numRows, numColumns) {
        if (!$_41rzpex6jctdj6bg.hasKey(keyState, 'setGridSize')) {
          console.error('Layout does not support setGridSize');
        } else {
          keyState.setGridSize(numRows, numColumns);
        }
      }
    },
    state: $_bnqrke100jctdj6re
  });

  var field$1 = function (name, forbidden) {
    return $_e1v8vrx2jctdj6ag.defaultedObjOf(name, {}, $_85zw6hw9jctdj67p.map(forbidden, function (f) {
      return $_e1v8vrx2jctdj6ag.forbid(f.name(), 'Cannot configure ' + f.name() + ' for ' + name);
    }).concat([$_e1v8vrx2jctdj6ag.state('dump', $_nsetdwbjctdj67z.identity)]));
  };
  var get$5 = function (data) {
    return data.dump();
  };
  var $_accgp10djctdj6tt = {
    field: field$1,
    get: get$5
  };

  var unique = 0;
  var generate$1 = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
  };
  var $_7dzy8310gjctdj6ub = { generate: generate$1 };

  var premadeTag = $_7dzy8310gjctdj6ub.generate('alloy-premade');
  var apiConfig = $_7dzy8310gjctdj6ub.generate('api');
  var premade = function (comp) {
    return $_41rzpex6jctdj6bg.wrap(premadeTag, comp);
  };
  var getPremade = function (spec) {
    return $_41rzpex6jctdj6bg.readOptFrom(spec, premadeTag);
  };
  var makeApi = function (f) {
    return $_aklxnoxjjctdj6cl.markAsSketchApi(function (component) {
      var args = Array.prototype.slice.call(arguments, 0);
      var spi = component.config(apiConfig);
      return f.apply(undefined, [spi].concat(args));
    }, f);
  };
  var $_dhk3q810fjctdj6u6 = {
    apiConfig: $_nsetdwbjctdj67z.constant(apiConfig),
    makeApi: makeApi,
    premade: premade,
    getPremade: getPremade
  };

  var adt$2 = $_e0y7kwx4jctdj6ap.generate([
    { required: ['data'] },
    { external: ['data'] },
    { optional: ['data'] },
    { group: ['data'] }
  ]);
  var fFactory = $_e1v8vrx2jctdj6ag.defaulted('factory', { sketch: $_nsetdwbjctdj67z.identity });
  var fSchema = $_e1v8vrx2jctdj6ag.defaulted('schema', []);
  var fName = $_e1v8vrx2jctdj6ag.strict('name');
  var fPname = $_e1v8vrx2jctdj6ag.field('pname', 'pname', $_2nm6jxx3jctdj6am.defaultedThunk(function (typeSpec) {
    return '<alloy.' + $_7dzy8310gjctdj6ub.generate(typeSpec.name) + '>';
  }), $_ebkmgyxhjctdj6cd.anyValue());
  var fDefaults = $_e1v8vrx2jctdj6ag.defaulted('defaults', $_nsetdwbjctdj67z.constant({}));
  var fOverrides = $_e1v8vrx2jctdj6ag.defaulted('overrides', $_nsetdwbjctdj67z.constant({}));
  var requiredSpec = $_ebkmgyxhjctdj6cd.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var externalSpec = $_ebkmgyxhjctdj6cd.objOf([
    fFactory,
    fSchema,
    fName,
    fDefaults,
    fOverrides
  ]);
  var optionalSpec = $_ebkmgyxhjctdj6cd.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var groupSpec = $_ebkmgyxhjctdj6cd.objOf([
    fFactory,
    fSchema,
    fName,
    $_e1v8vrx2jctdj6ag.strict('unit'),
    fPname,
    fDefaults,
    fOverrides
  ]);
  var asNamedPart = function (part) {
    return part.fold($_1k5gi0wajctdj67w.some, $_1k5gi0wajctdj67w.none, $_1k5gi0wajctdj67w.some, $_1k5gi0wajctdj67w.some);
  };
  var name$1 = function (part) {
    var get = function (data) {
      return data.name();
    };
    return part.fold(get, get, get, get);
  };
  var asCommon = function (part) {
    return part.fold($_nsetdwbjctdj67z.identity, $_nsetdwbjctdj67z.identity, $_nsetdwbjctdj67z.identity, $_nsetdwbjctdj67z.identity);
  };
  var convert = function (adtConstructor, partSpec) {
    return function (spec) {
      var data = $_ebkmgyxhjctdj6cd.asStructOrDie('Converting part type', partSpec, spec);
      return adtConstructor(data);
    };
  };
  var $_a90zyw10kjctdj6v0 = {
    required: convert(adt$2.required, requiredSpec),
    external: convert(adt$2.external, externalSpec),
    optional: convert(adt$2.optional, optionalSpec),
    group: convert(adt$2.group, groupSpec),
    asNamedPart: asNamedPart,
    name: name$1,
    asCommon: asCommon,
    original: $_nsetdwbjctdj67z.constant('entirety')
  };

  var placeholder = 'placeholder';
  var adt$3 = $_e0y7kwx4jctdj6ap.generate([
    {
      single: [
        'required',
        'valueThunk'
      ]
    },
    {
      multiple: [
        'required',
        'valueThunks'
      ]
    }
  ]);
  var isSubstitute = function (uiType) {
    return $_85zw6hw9jctdj67p.contains([placeholder], uiType);
  };
  var subPlaceholder = function (owner, detail, compSpec, placeholders) {
    if (owner.exists(function (o) {
        return o !== compSpec.owner;
      }))
      return adt$3.single(true, $_nsetdwbjctdj67z.constant(compSpec));
    return $_41rzpex6jctdj6bg.readOptFrom(placeholders, compSpec.name).fold(function () {
      throw new Error('Unknown placeholder component: ' + compSpec.name + '\nKnown: [' + $_sbi53x0jctdj69s.keys(placeholders) + ']\nNamespace: ' + owner.getOr('none') + '\nSpec: ' + $_e3y33nxfjctdj6c9.stringify(compSpec, null, 2));
    }, function (newSpec) {
      return newSpec.replace();
    });
  };
  var scan = function (owner, detail, compSpec, placeholders) {
    if (compSpec.uiType === placeholder)
      return subPlaceholder(owner, detail, compSpec, placeholders);
    else
      return adt$3.single(false, $_nsetdwbjctdj67z.constant(compSpec));
  };
  var substitute = function (owner, detail, compSpec, placeholders) {
    var base = scan(owner, detail, compSpec, placeholders);
    return base.fold(function (req, valueThunk) {
      var value = valueThunk(detail, compSpec.config, compSpec.validated);
      var childSpecs = $_41rzpex6jctdj6bg.readOptFrom(value, 'components').getOr([]);
      var substituted = $_85zw6hw9jctdj67p.bind(childSpecs, function (c) {
        return substitute(owner, detail, c, placeholders);
      });
      return [$_fwvrcwwyjctdj69p.deepMerge(value, { components: substituted })];
    }, function (req, valuesThunk) {
      var values = valuesThunk(detail, compSpec.config, compSpec.validated);
      return values;
    });
  };
  var substituteAll = function (owner, detail, components, placeholders) {
    return $_85zw6hw9jctdj67p.bind(components, function (c) {
      return substitute(owner, detail, c, placeholders);
    });
  };
  var oneReplace = function (label, replacements) {
    var called = false;
    var used = function () {
      return called;
    };
    var replace = function () {
      if (called === true)
        throw new Error('Trying to use the same placeholder more than once: ' + label);
      called = true;
      return replacements;
    };
    var required = function () {
      return replacements.fold(function (req, _) {
        return req;
      }, function (req, _) {
        return req;
      });
    };
    return {
      name: $_nsetdwbjctdj67z.constant(label),
      required: required,
      used: used,
      replace: replace
    };
  };
  var substitutePlaces = function (owner, detail, components, placeholders) {
    var ps = $_sbi53x0jctdj69s.map(placeholders, function (ph, name) {
      return oneReplace(name, ph);
    });
    var outcome = substituteAll(owner, detail, components, ps);
    $_sbi53x0jctdj69s.each(ps, function (p) {
      if (p.used() === false && p.required()) {
        throw new Error('Placeholder: ' + p.name() + ' was not found in components list\nNamespace: ' + owner.getOr('none') + '\nComponents: ' + $_e3y33nxfjctdj6c9.stringify(detail.components(), null, 2));
      }
    });
    return outcome;
  };
  var singleReplace = function (detail, p) {
    var replacement = p;
    return replacement.fold(function (req, valueThunk) {
      return [valueThunk(detail)];
    }, function (req, valuesThunk) {
      return valuesThunk(detail);
    });
  };
  var $_czezkn10ljctdj6vb = {
    single: adt$3.single,
    multiple: adt$3.multiple,
    isSubstitute: isSubstitute,
    placeholder: $_nsetdwbjctdj67z.constant(placeholder),
    substituteAll: substituteAll,
    substitutePlaces: substitutePlaces,
    singleReplace: singleReplace
  };

  var combine = function (detail, data, partSpec, partValidated) {
    var spec = partSpec;
    return $_fwvrcwwyjctdj69p.deepMerge(data.defaults()(detail, partSpec, partValidated), partSpec, { uid: detail.partUids()[data.name()] }, data.overrides()(detail, partSpec, partValidated), { 'debug.sketcher': $_41rzpex6jctdj6bg.wrap('part-' + data.name(), spec) });
  };
  var subs = function (owner, detail, parts) {
    var internals = {};
    var externals = {};
    $_85zw6hw9jctdj67p.each(parts, function (part) {
      part.fold(function (data) {
        internals[data.pname()] = $_czezkn10ljctdj6vb.single(true, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        var partSpec = detail.parts()[data.name()]();
        externals[data.name()] = $_nsetdwbjctdj67z.constant(combine(detail, data, partSpec[$_a90zyw10kjctdj6v0.original()]()));
      }, function (data) {
        internals[data.pname()] = $_czezkn10ljctdj6vb.single(false, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        internals[data.pname()] = $_czezkn10ljctdj6vb.multiple(true, function (detail, _partSpec, _partValidated) {
          var units = detail[data.name()]();
          return $_85zw6hw9jctdj67p.map(units, function (u) {
            return data.factory().sketch($_fwvrcwwyjctdj69p.deepMerge(data.defaults()(detail, u), u, data.overrides()(detail, u)));
          });
        });
      });
    });
    return {
      internals: $_nsetdwbjctdj67z.constant(internals),
      externals: $_nsetdwbjctdj67z.constant(externals)
    };
  };
  var $_7firbq10jjctdj6uu = { subs: subs };

  var generate$2 = function (owner, parts) {
    var r = {};
    $_85zw6hw9jctdj67p.each(parts, function (part) {
      $_a90zyw10kjctdj6v0.asNamedPart(part).each(function (np) {
        var g = doGenerateOne(owner, np.pname());
        r[np.name()] = function (config) {
          var validated = $_ebkmgyxhjctdj6cd.asRawOrDie('Part: ' + np.name() + ' in ' + owner, $_ebkmgyxhjctdj6cd.objOf(np.schema()), config);
          return $_fwvrcwwyjctdj69p.deepMerge(g, {
            config: config,
            validated: validated
          });
        };
      });
    });
    return r;
  };
  var doGenerateOne = function (owner, pname) {
    return {
      uiType: $_czezkn10ljctdj6vb.placeholder(),
      owner: owner,
      name: pname
    };
  };
  var generateOne = function (owner, pname, config) {
    return {
      uiType: $_czezkn10ljctdj6vb.placeholder(),
      owner: owner,
      name: pname,
      config: config,
      validated: {}
    };
  };
  var schemas = function (parts) {
    return $_85zw6hw9jctdj67p.bind(parts, function (part) {
      return part.fold($_1k5gi0wajctdj67w.none, $_1k5gi0wajctdj67w.some, $_1k5gi0wajctdj67w.none, $_1k5gi0wajctdj67w.none).map(function (data) {
        return $_e1v8vrx2jctdj6ag.strictObjOf(data.name(), data.schema().concat([$_37rg8yytjctdj6ml.snapshot($_a90zyw10kjctdj6v0.original())]));
      }).toArray();
    });
  };
  var names = function (parts) {
    return $_85zw6hw9jctdj67p.map(parts, $_a90zyw10kjctdj6v0.name);
  };
  var substitutes = function (owner, detail, parts) {
    return $_7firbq10jjctdj6uu.subs(owner, detail, parts);
  };
  var components = function (owner, detail, internals) {
    return $_czezkn10ljctdj6vb.substitutePlaces($_1k5gi0wajctdj67w.some(owner), detail, detail.components(), internals);
  };
  var getPart = function (component, detail, partKey) {
    var uid = detail.partUids()[partKey];
    return component.getSystem().getByUid(uid).toOption();
  };
  var getPartOrDie = function (component, detail, partKey) {
    return getPart(component, detail, partKey).getOrDie('Could not find part: ' + partKey);
  };
  var getParts = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_85zw6hw9jctdj67p.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]);
    });
    return $_sbi53x0jctdj69s.map(r, $_nsetdwbjctdj67z.constant);
  };
  var getAllParts = function (component, detail) {
    var system = component.getSystem();
    return $_sbi53x0jctdj69s.map(detail.partUids(), function (pUid, k) {
      return $_nsetdwbjctdj67z.constant(system.getByUid(pUid));
    });
  };
  var getPartsOrDie = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_85zw6hw9jctdj67p.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]).getOrDie();
    });
    return $_sbi53x0jctdj69s.map(r, $_nsetdwbjctdj67z.constant);
  };
  var defaultUids = function (baseUid, partTypes) {
    var partNames = names(partTypes);
    return $_41rzpex6jctdj6bg.wrapAll($_85zw6hw9jctdj67p.map(partNames, function (pn) {
      return {
        key: pn,
        value: baseUid + '-' + pn
      };
    }));
  };
  var defaultUidsSchema = function (partTypes) {
    return $_e1v8vrx2jctdj6ag.field('partUids', 'partUids', $_2nm6jxx3jctdj6am.mergeWithThunk(function (spec) {
      return defaultUids(spec.uid, partTypes);
    }), $_ebkmgyxhjctdj6cd.anyValue());
  };
  var $_bsysk910ijctdj6uh = {
    generate: generate$2,
    generateOne: generateOne,
    schemas: schemas,
    names: names,
    substitutes: substitutes,
    components: components,
    defaultUids: defaultUids,
    defaultUidsSchema: defaultUidsSchema,
    getAllParts: getAllParts,
    getPart: getPart,
    getPartOrDie: getPartOrDie,
    getParts: getParts,
    getPartsOrDie: getPartsOrDie
  };

  var prefix$2 = 'alloy-id-';
  var idAttr$1 = 'data-alloy-id';
  var $_2pua8810njctdj6vz = {
    prefix: $_nsetdwbjctdj67z.constant(prefix$2),
    idAttr: $_nsetdwbjctdj67z.constant(idAttr$1)
  };

  var prefix$1 = $_2pua8810njctdj6vz.prefix();
  var idAttr = $_2pua8810njctdj6vz.idAttr();
  var write = function (label, elem) {
    var id = $_7dzy8310gjctdj6ub.generate(prefix$1 + label);
    $_ftckpcxwjctdj6dp.set(elem, idAttr, id);
    return id;
  };
  var writeOnly = function (elem, uid) {
    $_ftckpcxwjctdj6dp.set(elem, idAttr, uid);
  };
  var read$2 = function (elem) {
    var id = $_13f4i6xxjctdj6dv.isElement(elem) ? $_ftckpcxwjctdj6dp.get(elem, idAttr) : null;
    return $_1k5gi0wajctdj67w.from(id);
  };
  var find$3 = function (container, id) {
    return $_82w6dszmjctdj6pu.descendant(container, id);
  };
  var generate$3 = function (prefix) {
    return $_7dzy8310gjctdj6ub.generate(prefix);
  };
  var revoke = function (elem) {
    $_ftckpcxwjctdj6dp.remove(elem, idAttr);
  };
  var $_4uq8p610mjctdj6vs = {
    revoke: revoke,
    write: write,
    writeOnly: writeOnly,
    read: read$2,
    find: find$3,
    generate: generate$3,
    attribute: $_nsetdwbjctdj67z.constant(idAttr)
  };

  var getPartsSchema = function (partNames, _optPartNames, _owner) {
    var owner = _owner !== undefined ? _owner : 'Unknown owner';
    var fallbackThunk = function () {
      return [$_37rg8yytjctdj6ml.output('partUids', {})];
    };
    var optPartNames = _optPartNames !== undefined ? _optPartNames : fallbackThunk();
    if (partNames.length === 0 && optPartNames.length === 0)
      return fallbackThunk();
    var partsSchema = $_e1v8vrx2jctdj6ag.strictObjOf('parts', $_85zw6hw9jctdj67p.flatten([
      $_85zw6hw9jctdj67p.map(partNames, $_e1v8vrx2jctdj6ag.strict),
      $_85zw6hw9jctdj67p.map(optPartNames, function (optPart) {
        return $_e1v8vrx2jctdj6ag.defaulted(optPart, $_czezkn10ljctdj6vb.single(false, function () {
          throw new Error('The optional part: ' + optPart + ' was not specified in the config, but it was used in components');
        }));
      })
    ]));
    var partUidsSchema = $_e1v8vrx2jctdj6ag.state('partUids', function (spec) {
      if (!$_41rzpex6jctdj6bg.hasKey(spec, 'parts')) {
        throw new Error('Part uid definition for owner: ' + owner + ' requires "parts"\nExpected parts: ' + partNames.join(', ') + '\nSpec: ' + $_e3y33nxfjctdj6c9.stringify(spec, null, 2));
      }
      var uids = $_sbi53x0jctdj69s.map(spec.parts, function (v, k) {
        return $_41rzpex6jctdj6bg.readOptFrom(v, 'uid').getOrThunk(function () {
          return spec.uid + '-' + k;
        });
      });
      return uids;
    });
    return [
      partsSchema,
      partUidsSchema
    ];
  };
  var base$1 = function (label, partSchemas, partUidsSchemas, spec) {
    var ps = partSchemas.length > 0 ? [$_e1v8vrx2jctdj6ag.strictObjOf('parts', partSchemas)] : [];
    return ps.concat([
      $_e1v8vrx2jctdj6ag.strict('uid'),
      $_e1v8vrx2jctdj6ag.defaulted('dom', {}),
      $_e1v8vrx2jctdj6ag.defaulted('components', []),
      $_37rg8yytjctdj6ml.snapshot('originalSpec'),
      $_e1v8vrx2jctdj6ag.defaulted('debug.sketcher', {})
    ]).concat(partUidsSchemas);
  };
  var asRawOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, spec, partUidsSchemas);
    return $_ebkmgyxhjctdj6cd.asRawOrDie(label + ' [SpecSchema]', $_ebkmgyxhjctdj6cd.objOfOnly(baseS.concat(schema)), spec);
  };
  var asStructOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, partUidsSchemas, spec);
    return $_ebkmgyxhjctdj6cd.asStructOrDie(label + ' [SpecSchema]', $_ebkmgyxhjctdj6cd.objOfOnly(baseS.concat(schema)), spec);
  };
  var extend = function (builder, original, nu) {
    var newSpec = $_fwvrcwwyjctdj69p.deepMerge(original, nu);
    return builder(newSpec);
  };
  var addBehaviours = function (original, behaviours) {
    return $_fwvrcwwyjctdj69p.deepMerge(original, behaviours);
  };
  var $_dvs7yv10ojctdj6w2 = {
    asRawOrDie: asRawOrDie$1,
    asStructOrDie: asStructOrDie$1,
    addBehaviours: addBehaviours,
    getPartsSchema: getPartsSchema,
    extend: extend
  };

  var single$1 = function (owner, schema, factory, spec) {
    var specWithUid = supplyUid(spec);
    var detail = $_dvs7yv10ojctdj6w2.asStructOrDie(owner, schema, specWithUid, [], []);
    return $_fwvrcwwyjctdj69p.deepMerge(factory(detail, specWithUid), { 'debug.sketcher': $_41rzpex6jctdj6bg.wrap(owner, spec) });
  };
  var composite$1 = function (owner, schema, partTypes, factory, spec) {
    var specWithUid = supplyUid(spec);
    var partSchemas = $_bsysk910ijctdj6uh.schemas(partTypes);
    var partUidsSchema = $_bsysk910ijctdj6uh.defaultUidsSchema(partTypes);
    var detail = $_dvs7yv10ojctdj6w2.asStructOrDie(owner, schema, specWithUid, partSchemas, [partUidsSchema]);
    var subs = $_bsysk910ijctdj6uh.substitutes(owner, detail, partTypes);
    var components = $_bsysk910ijctdj6uh.components(owner, detail, subs.internals());
    return $_fwvrcwwyjctdj69p.deepMerge(factory(detail, components, specWithUid, subs.externals()), { 'debug.sketcher': $_41rzpex6jctdj6bg.wrap(owner, spec) });
  };
  var supplyUid = function (spec) {
    return $_fwvrcwwyjctdj69p.deepMerge({ uid: $_4uq8p610mjctdj6vs.generate('uid') }, spec);
  };
  var $_2ccrg410hjctdj6uc = {
    supplyUid: supplyUid,
    single: single$1,
    composite: composite$1
  };

  var singleSchema = $_ebkmgyxhjctdj6cd.objOfOnly([
    $_e1v8vrx2jctdj6ag.strict('name'),
    $_e1v8vrx2jctdj6ag.strict('factory'),
    $_e1v8vrx2jctdj6ag.strict('configFields'),
    $_e1v8vrx2jctdj6ag.defaulted('apis', {}),
    $_e1v8vrx2jctdj6ag.defaulted('extraApis', {})
  ]);
  var compositeSchema = $_ebkmgyxhjctdj6cd.objOfOnly([
    $_e1v8vrx2jctdj6ag.strict('name'),
    $_e1v8vrx2jctdj6ag.strict('factory'),
    $_e1v8vrx2jctdj6ag.strict('configFields'),
    $_e1v8vrx2jctdj6ag.strict('partFields'),
    $_e1v8vrx2jctdj6ag.defaulted('apis', {}),
    $_e1v8vrx2jctdj6ag.defaulted('extraApis', {})
  ]);
  var single = function (rawConfig) {
    var config = $_ebkmgyxhjctdj6cd.asRawOrDie('Sketcher for ' + rawConfig.name, singleSchema, rawConfig);
    var sketch = function (spec) {
      return $_2ccrg410hjctdj6uc.single(config.name, config.configFields, config.factory, spec);
    };
    var apis = $_sbi53x0jctdj69s.map(config.apis, $_dhk3q810fjctdj6u6.makeApi);
    var extraApis = $_sbi53x0jctdj69s.map(config.extraApis, function (f, k) {
      return $_aklxnoxjjctdj6cl.markAsExtraApi(f, k);
    });
    return $_fwvrcwwyjctdj69p.deepMerge({
      name: $_nsetdwbjctdj67z.constant(config.name),
      partFields: $_nsetdwbjctdj67z.constant([]),
      configFields: $_nsetdwbjctdj67z.constant(config.configFields),
      sketch: sketch
    }, apis, extraApis);
  };
  var composite = function (rawConfig) {
    var config = $_ebkmgyxhjctdj6cd.asRawOrDie('Sketcher for ' + rawConfig.name, compositeSchema, rawConfig);
    var sketch = function (spec) {
      return $_2ccrg410hjctdj6uc.composite(config.name, config.configFields, config.partFields, config.factory, spec);
    };
    var parts = $_bsysk910ijctdj6uh.generate(config.name, config.partFields);
    var apis = $_sbi53x0jctdj69s.map(config.apis, $_dhk3q810fjctdj6u6.makeApi);
    var extraApis = $_sbi53x0jctdj69s.map(config.extraApis, function (f, k) {
      return $_aklxnoxjjctdj6cl.markAsExtraApi(f, k);
    });
    return $_fwvrcwwyjctdj69p.deepMerge({
      name: $_nsetdwbjctdj67z.constant(config.name),
      partFields: $_nsetdwbjctdj67z.constant(config.partFields),
      configFields: $_nsetdwbjctdj67z.constant(config.configFields),
      sketch: sketch,
      parts: $_nsetdwbjctdj67z.constant(parts)
    }, apis, extraApis);
  };
  var $_8lavxg10ejctdj6ty = {
    single: single,
    composite: composite
  };

  var events$4 = function (optAction) {
    var executeHandler = function (action) {
      return $_2lvgrhw6jctdj67b.run($_8rri5bwwjctdj69j.execute(), function (component, simulatedEvent) {
        action(component);
        simulatedEvent.stop();
      });
    };
    var onClick = function (component, simulatedEvent) {
      simulatedEvent.stop();
      $_axzm60wvjctdj69e.emitExecute(component);
    };
    var onMousedown = function (component, simulatedEvent) {
      simulatedEvent.cut();
    };
    var pointerEvents = $_3owkqnwgjctdj687.detect().deviceType.isTouch() ? [$_2lvgrhw6jctdj67b.run($_8rri5bwwjctdj69j.tap(), onClick)] : [
      $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.click(), onClick),
      $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.mousedown(), onMousedown)
    ];
    return $_2lvgrhw6jctdj67b.derive($_85zw6hw9jctdj67p.flatten([
      optAction.map(executeHandler).toArray(),
      pointerEvents
    ]));
  };
  var $_9a4ww410pjctdj6we = { events: events$4 };

  var factory = function (detail, spec) {
    var events = $_9a4ww410pjctdj6we.events(detail.action());
    var optType = $_41rzpex6jctdj6bg.readOptFrom(detail.dom(), 'attributes').bind($_41rzpex6jctdj6bg.readOpt('type'));
    var optTag = $_41rzpex6jctdj6bg.readOptFrom(detail.dom(), 'tag');
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: detail.components(),
      events: events,
      behaviours: $_fwvrcwwyjctdj69p.deepMerge($_b61y2hw4jctdj66j.derive([
        Focusing.config({}),
        Keying.config({
          mode: 'execution',
          useSpace: true,
          useEnter: true
        })
      ]), $_accgp10djctdj6tt.get(detail.buttonBehaviours())),
      domModification: {
        attributes: $_fwvrcwwyjctdj69p.deepMerge(optType.fold(function () {
          return optTag.is('button') ? { type: 'button' } : {};
        }, function (t) {
          return {};
        }), { role: detail.role().getOr('button') })
      },
      eventOrder: detail.eventOrder()
    };
  };
  var Button = $_8lavxg10ejctdj6ty.single({
    name: 'Button',
    factory: factory,
    configFields: [
      $_e1v8vrx2jctdj6ag.defaulted('uid', undefined),
      $_e1v8vrx2jctdj6ag.strict('dom'),
      $_e1v8vrx2jctdj6ag.defaulted('components', []),
      $_accgp10djctdj6tt.field('buttonBehaviours', [
        Focusing,
        Keying
      ]),
      $_e1v8vrx2jctdj6ag.option('action'),
      $_e1v8vrx2jctdj6ag.option('role'),
      $_e1v8vrx2jctdj6ag.defaulted('eventOrder', {})
    ]
  });

  var getAttrs = function (elem) {
    var attributes = elem.dom().attributes !== undefined ? elem.dom().attributes : [];
    return $_85zw6hw9jctdj67p.foldl(attributes, function (b, attr) {
      if (attr.name === 'class')
        return b;
      else
        return $_fwvrcwwyjctdj69p.deepMerge(b, $_41rzpex6jctdj6bg.wrap(attr.name, attr.value));
    }, {});
  };
  var getClasses = function (elem) {
    return Array.prototype.slice.call(elem.dom().classList, 0);
  };
  var fromHtml$2 = function (html) {
    var elem = $_bvayi3wtjctdj69a.fromHtml(html);
    var children = $_83fh6gy3jctdj6ef.children(elem);
    var attrs = getAttrs(elem);
    var classes = getClasses(elem);
    var contents = children.length === 0 ? {} : { innerHtml: $_edp5zaybjctdj6l1.get(elem) };
    return $_fwvrcwwyjctdj69p.deepMerge({
      tag: $_13f4i6xxjctdj6dv.name(elem),
      classes: classes,
      attributes: attrs
    }, contents);
  };
  var sketch = function (sketcher, html, config) {
    return sketcher.sketch($_fwvrcwwyjctdj69p.deepMerge({ dom: fromHtml$2(html) }, config));
  };
  var $_eu7e5m10rjctdj6wl = {
    fromHtml: fromHtml$2,
    sketch: sketch
  };

  var dom$1 = function (rawHtml) {
    var html = $_c6n415wpjctdj68s.supplant(rawHtml, { prefix: $_79dnpgz1jctdj6nm.prefix() });
    return $_eu7e5m10rjctdj6wl.fromHtml(html);
  };
  var spec = function (rawHtml) {
    var sDom = dom$1(rawHtml);
    return { dom: sDom };
  };
  var $_80xbio10qjctdj6wi = {
    dom: dom$1,
    spec: spec
  };

  var forToolbarCommand = function (editor, command) {
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, {});
  };
  var getToggleBehaviours = function (command) {
    return $_b61y2hw4jctdj66j.derive([
      Toggling.config({
        toggleClass: $_79dnpgz1jctdj6nm.resolve('toolbar-button-selected'),
        toggleOnExecute: false,
        aria: { mode: 'pressed' }
      }),
      $_bd3cf7z0jctdj6nk.format(command, function (button, status) {
        var toggle = status ? Toggling.on : Toggling.off;
        toggle(button);
      })
    ]);
  };
  var forToolbarStateCommand = function (editor, command) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, extraBehaviours);
  };
  var forToolbarStateAction = function (editor, clazz, command, action) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(clazz, action, extraBehaviours);
  };
  var forToolbar = function (clazz, action, extraBehaviours) {
    return Button.sketch({
      dom: $_80xbio10qjctdj6wi.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-' + clazz + ' ${prefix}-icon"></span>'),
      action: action,
      buttonBehaviours: $_fwvrcwwyjctdj69p.deepMerge($_b61y2hw4jctdj66j.derive([Unselecting.config({})]), extraBehaviours)
    });
  };
  var $_2fvhv0z2jctdj6no = {
    forToolbar: forToolbar,
    forToolbarCommand: forToolbarCommand,
    forToolbarStateAction: forToolbarStateAction,
    forToolbarStateCommand: forToolbarStateCommand
  };

  var reduceBy = function (value, min, max, step) {
    if (value < min)
      return value;
    else if (value > max)
      return max;
    else if (value === min)
      return min - 1;
    else
      return Math.max(min, value - step);
  };
  var increaseBy = function (value, min, max, step) {
    if (value > max)
      return value;
    else if (value < min)
      return min;
    else if (value === max)
      return max + 1;
    else
      return Math.min(max, value + step);
  };
  var capValue = function (value, min, max) {
    return Math.max(min, Math.min(max, value));
  };
  var snapValueOfX = function (bounds, value, min, max, step, snapStart) {
    return snapStart.fold(function () {
      var initValue = value - min;
      var extraValue = Math.round(initValue / step) * step;
      return capValue(min + extraValue, min - 1, max + 1);
    }, function (start) {
      var remainder = (value - start) % step;
      var adjustment = Math.round(remainder / step);
      var rawSteps = Math.floor((value - start) / step);
      var maxSteps = Math.floor((max - start) / step);
      var numSteps = Math.min(maxSteps, rawSteps + adjustment);
      var r = start + numSteps * step;
      return Math.max(start, r);
    });
  };
  var findValueOfX = function (bounds, min, max, xValue, step, snapToGrid, snapStart) {
    var range = max - min;
    if (xValue < bounds.left)
      return min - 1;
    else if (xValue > bounds.right)
      return max + 1;
    else {
      var xOffset = Math.min(bounds.right, Math.max(xValue, bounds.left)) - bounds.left;
      var newValue = capValue(xOffset / bounds.width * range + min, min - 1, max + 1);
      var roundedValue = Math.round(newValue);
      return snapToGrid && newValue >= min && newValue <= max ? snapValueOfX(bounds, newValue, min, max, step, snapStart) : roundedValue;
    }
  };
  var $_98nawg10wjctdj6xm = {
    reduceBy: reduceBy,
    increaseBy: increaseBy,
    findValueOfX: findValueOfX
  };

  var changeEvent = 'slider.change.value';
  var isTouch$1 = $_3owkqnwgjctdj687.detect().deviceType.isTouch();
  var getEventSource = function (simulatedEvent) {
    var evt = simulatedEvent.event().raw();
    if (isTouch$1 && evt.touches !== undefined && evt.touches.length === 1)
      return $_1k5gi0wajctdj67w.some(evt.touches[0]);
    else if (isTouch$1 && evt.touches !== undefined)
      return $_1k5gi0wajctdj67w.none();
    else if (!isTouch$1 && evt.clientX !== undefined)
      return $_1k5gi0wajctdj67w.some(evt);
    else
      return $_1k5gi0wajctdj67w.none();
  };
  var getEventX = function (simulatedEvent) {
    var spot = getEventSource(simulatedEvent);
    return spot.map(function (s) {
      return s.clientX;
    });
  };
  var fireChange = function (component, value) {
    $_axzm60wvjctdj69e.emitWith(component, changeEvent, { value: value });
  };
  var moveRightFromLedge = function (ledge, detail) {
    fireChange(ledge, detail.min());
  };
  var moveLeftFromRedge = function (redge, detail) {
    fireChange(redge, detail.max());
  };
  var setToRedge = function (redge, detail) {
    fireChange(redge, detail.max() + 1);
  };
  var setToLedge = function (ledge, detail) {
    fireChange(ledge, detail.min() - 1);
  };
  var setToX = function (spectrum, spectrumBounds, detail, xValue) {
    var value = $_98nawg10wjctdj6xm.findValueOfX(spectrumBounds, detail.min(), detail.max(), xValue, detail.stepSize(), detail.snapToGrid(), detail.snapStart());
    fireChange(spectrum, value);
  };
  var setXFromEvent = function (spectrum, detail, spectrumBounds, simulatedEvent) {
    return getEventX(simulatedEvent).map(function (xValue) {
      setToX(spectrum, spectrumBounds, detail, xValue);
      return xValue;
    });
  };
  var moveLeft$4 = function (spectrum, detail) {
    var newValue = $_98nawg10wjctdj6xm.reduceBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var moveRight$4 = function (spectrum, detail) {
    var newValue = $_98nawg10wjctdj6xm.increaseBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var $_4s8nyo10vjctdj6xf = {
    setXFromEvent: setXFromEvent,
    setToLedge: setToLedge,
    setToRedge: setToRedge,
    moveLeftFromRedge: moveLeftFromRedge,
    moveRightFromLedge: moveRightFromLedge,
    moveLeft: moveLeft$4,
    moveRight: moveRight$4,
    changeEvent: $_nsetdwbjctdj67z.constant(changeEvent)
  };

  var platform = $_3owkqnwgjctdj687.detect();
  var isTouch = platform.deviceType.isTouch();
  var edgePart = function (name, action) {
    return $_a90zyw10kjctdj6v0.optional({
      name: '' + name + '-edge',
      overrides: function (detail) {
        var touchEvents = $_2lvgrhw6jctdj67b.derive([$_2lvgrhw6jctdj67b.runActionExtra($_3mycfwxjctdj69n.touchstart(), action, [detail])]);
        var mouseEvents = $_2lvgrhw6jctdj67b.derive([
          $_2lvgrhw6jctdj67b.runActionExtra($_3mycfwxjctdj69n.mousedown(), action, [detail]),
          $_2lvgrhw6jctdj67b.runActionExtra($_3mycfwxjctdj69n.mousemove(), function (l, det) {
            if (det.mouseIsDown().get())
              action(l, det);
          }, [detail])
        ]);
        return { events: isTouch ? touchEvents : mouseEvents };
      }
    });
  };
  var ledgePart = edgePart('left', $_4s8nyo10vjctdj6xf.setToLedge);
  var redgePart = edgePart('right', $_4s8nyo10vjctdj6xf.setToRedge);
  var thumbPart = $_a90zyw10kjctdj6v0.required({
    name: 'thumb',
    defaults: $_nsetdwbjctdj67z.constant({ dom: { styles: { position: 'absolute' } } }),
    overrides: function (detail) {
      return {
        events: $_2lvgrhw6jctdj67b.derive([
          $_2lvgrhw6jctdj67b.redirectToPart($_3mycfwxjctdj69n.touchstart(), detail, 'spectrum'),
          $_2lvgrhw6jctdj67b.redirectToPart($_3mycfwxjctdj69n.touchmove(), detail, 'spectrum'),
          $_2lvgrhw6jctdj67b.redirectToPart($_3mycfwxjctdj69n.touchend(), detail, 'spectrum')
        ])
      };
    }
  });
  var spectrumPart = $_a90zyw10kjctdj6v0.required({
    schema: [$_e1v8vrx2jctdj6ag.state('mouseIsDown', function () {
        return Cell(false);
      })],
    name: 'spectrum',
    overrides: function (detail) {
      var moveToX = function (spectrum, simulatedEvent) {
        var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
        $_4s8nyo10vjctdj6xf.setXFromEvent(spectrum, detail, spectrumBounds, simulatedEvent);
      };
      var touchEvents = $_2lvgrhw6jctdj67b.derive([
        $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.touchstart(), moveToX),
        $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.touchmove(), moveToX)
      ]);
      var mouseEvents = $_2lvgrhw6jctdj67b.derive([
        $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.mousedown(), moveToX),
        $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.mousemove(), function (spectrum, se) {
          if (detail.mouseIsDown().get())
            moveToX(spectrum, se);
        })
      ]);
      return {
        behaviours: $_b61y2hw4jctdj66j.derive(isTouch ? [] : [
          Keying.config({
            mode: 'special',
            onLeft: function (spectrum) {
              $_4s8nyo10vjctdj6xf.moveLeft(spectrum, detail);
              return $_1k5gi0wajctdj67w.some(true);
            },
            onRight: function (spectrum) {
              $_4s8nyo10vjctdj6xf.moveRight(spectrum, detail);
              return $_1k5gi0wajctdj67w.some(true);
            }
          }),
          Focusing.config({})
        ]),
        events: isTouch ? touchEvents : mouseEvents
      };
    }
  });
  var SliderParts = [
    ledgePart,
    redgePart,
    thumbPart,
    spectrumPart
  ];

  var onLoad$1 = function (component, repConfig, repState) {
    repConfig.store().manager().onLoad(component, repConfig, repState);
  };
  var onUnload = function (component, repConfig, repState) {
    repConfig.store().manager().onUnload(component, repConfig, repState);
  };
  var setValue = function (component, repConfig, repState, data) {
    repConfig.store().manager().setValue(component, repConfig, repState, data);
  };
  var getValue = function (component, repConfig, repState) {
    return repConfig.store().manager().getValue(component, repConfig, repState);
  };
  var $_5f5naz110jctdj6xx = {
    onLoad: onLoad$1,
    onUnload: onUnload,
    setValue: setValue,
    getValue: getValue
  };

  var events$5 = function (repConfig, repState) {
    var es = repConfig.resetOnDom() ? [
      $_2lvgrhw6jctdj67b.runOnAttached(function (comp, se) {
        $_5f5naz110jctdj6xx.onLoad(comp, repConfig, repState);
      }),
      $_2lvgrhw6jctdj67b.runOnDetached(function (comp, se) {
        $_5f5naz110jctdj6xx.onUnload(comp, repConfig, repState);
      })
    ] : [$_9fnyw4w5jctdj66r.loadEvent(repConfig, repState, $_5f5naz110jctdj6xx.onLoad)];
    return $_2lvgrhw6jctdj67b.derive(es);
  };
  var $_10winv10zjctdj6xv = { events: events$5 };

  var memory = function () {
    var data = Cell(null);
    var readState = function () {
      return {
        mode: 'memory',
        value: data.get()
      };
    };
    var isNotSet = function () {
      return data.get() === null;
    };
    var clear = function () {
      data.set(null);
    };
    return BehaviourState({
      set: data.set,
      get: data.get,
      isNotSet: isNotSet,
      clear: clear,
      readState: readState
    });
  };
  var manual = function () {
    var readState = function () {
    };
    return BehaviourState({ readState: readState });
  };
  var dataset = function () {
    var data = Cell({});
    var readState = function () {
      return {
        mode: 'dataset',
        dataset: data.get()
      };
    };
    return BehaviourState({
      readState: readState,
      set: data.set,
      get: data.get
    });
  };
  var init$2 = function (spec) {
    return spec.store().manager().state(spec);
  };
  var $_dq7365113jctdj6y5 = {
    memory: memory,
    dataset: dataset,
    manual: manual,
    init: init$2
  };

  var setValue$1 = function (component, repConfig, repState, data) {
    var dataKey = repConfig.store().getDataKey();
    repState.set({});
    repConfig.store().setData()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$1 = function (component, repConfig, repState) {
    var key = repConfig.store().getDataKey()(component);
    var dataset = repState.get();
    return $_41rzpex6jctdj6bg.readOptFrom(dataset, key).fold(function () {
      return repConfig.store().getFallbackEntry()(key);
    }, function (data) {
      return data;
    });
  };
  var onLoad$2 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      setValue$1(component, repConfig, repState, data);
    });
  };
  var onUnload$1 = function (component, repConfig, repState) {
    repState.set({});
  };
  var DatasetStore = [
    $_e1v8vrx2jctdj6ag.option('initialValue'),
    $_e1v8vrx2jctdj6ag.strict('getFallbackEntry'),
    $_e1v8vrx2jctdj6ag.strict('getDataKey'),
    $_e1v8vrx2jctdj6ag.strict('setData'),
    $_37rg8yytjctdj6ml.output('manager', {
      setValue: setValue$1,
      getValue: getValue$1,
      onLoad: onLoad$2,
      onUnload: onUnload$1,
      state: $_dq7365113jctdj6y5.dataset
    })
  ];

  var getValue$2 = function (component, repConfig, repState) {
    return repConfig.store().getValue()(component);
  };
  var setValue$2 = function (component, repConfig, repState, data) {
    repConfig.store().setValue()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var onLoad$3 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      repConfig.store().setValue()(component, data);
    });
  };
  var ManualStore = [
    $_e1v8vrx2jctdj6ag.strict('getValue'),
    $_e1v8vrx2jctdj6ag.defaulted('setValue', $_nsetdwbjctdj67z.noop),
    $_e1v8vrx2jctdj6ag.option('initialValue'),
    $_37rg8yytjctdj6ml.output('manager', {
      setValue: setValue$2,
      getValue: getValue$2,
      onLoad: onLoad$3,
      onUnload: $_nsetdwbjctdj67z.noop,
      state: $_atjv2ixqjctdj6dd.init
    })
  ];

  var setValue$3 = function (component, repConfig, repState, data) {
    repState.set(data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$3 = function (component, repConfig, repState) {
    return repState.get();
  };
  var onLoad$4 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (initVal) {
      if (repState.isNotSet())
        repState.set(initVal);
    });
  };
  var onUnload$2 = function (component, repConfig, repState) {
    repState.clear();
  };
  var MemoryStore = [
    $_e1v8vrx2jctdj6ag.option('initialValue'),
    $_37rg8yytjctdj6ml.output('manager', {
      setValue: setValue$3,
      getValue: getValue$3,
      onLoad: onLoad$4,
      onUnload: onUnload$2,
      state: $_dq7365113jctdj6y5.memory
    })
  ];

  var RepresentSchema = [
    $_e1v8vrx2jctdj6ag.defaultedOf('store', { mode: 'memory' }, $_ebkmgyxhjctdj6cd.choose('mode', {
      memory: MemoryStore,
      manual: ManualStore,
      dataset: DatasetStore
    })),
    $_37rg8yytjctdj6ml.onHandler('onSetValue'),
    $_e1v8vrx2jctdj6ag.defaulted('resetOnDom', false)
  ];

  var me = $_b61y2hw4jctdj66j.create({
    fields: RepresentSchema,
    name: 'representing',
    active: $_10winv10zjctdj6xv,
    apis: $_5f5naz110jctdj6xx,
    extra: {
      setValueFrom: function (component, source) {
        var value = me.getValue(source);
        me.setValue(component, value);
      }
    },
    state: $_dq7365113jctdj6y5
  });

  var isTouch$2 = $_3owkqnwgjctdj687.detect().deviceType.isTouch();
  var SliderSchema = [
    $_e1v8vrx2jctdj6ag.strict('min'),
    $_e1v8vrx2jctdj6ag.strict('max'),
    $_e1v8vrx2jctdj6ag.defaulted('stepSize', 1),
    $_e1v8vrx2jctdj6ag.defaulted('onChange', $_nsetdwbjctdj67z.noop),
    $_e1v8vrx2jctdj6ag.defaulted('onInit', $_nsetdwbjctdj67z.noop),
    $_e1v8vrx2jctdj6ag.defaulted('onDragStart', $_nsetdwbjctdj67z.noop),
    $_e1v8vrx2jctdj6ag.defaulted('onDragEnd', $_nsetdwbjctdj67z.noop),
    $_e1v8vrx2jctdj6ag.defaulted('snapToGrid', false),
    $_e1v8vrx2jctdj6ag.option('snapStart'),
    $_e1v8vrx2jctdj6ag.strict('getInitialValue'),
    $_accgp10djctdj6tt.field('sliderBehaviours', [
      Keying,
      me
    ]),
    $_e1v8vrx2jctdj6ag.state('value', function (spec) {
      return Cell(spec.min);
    })
  ].concat(!isTouch$2 ? [$_e1v8vrx2jctdj6ag.state('mouseIsDown', function () {
      return Cell(false);
    })] : []);

  var api$1 = Dimension('width', function (element) {
    return element.dom().offsetWidth;
  });
  var set$4 = function (element, h) {
    api$1.set(element, h);
  };
  var get$6 = function (element) {
    return api$1.get(element);
  };
  var getOuter$2 = function (element) {
    return api$1.getOuter(element);
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
    var absMax = api$1.max(element, value, inclusions);
    $_c7wjf9zsjctdj6qf.set(element, 'max-width', absMax + 'px');
  };
  var $_dzu4he117jctdj6yu = {
    set: set$4,
    get: get$6,
    getOuter: getOuter$2,
    setMax: setMax$1
  };

  var isTouch$3 = $_3owkqnwgjctdj687.detect().deviceType.isTouch();
  var sketch$2 = function (detail, components, spec, externals) {
    var range = detail.max() - detail.min();
    var getXCentre = function (component) {
      var rect = component.element().dom().getBoundingClientRect();
      return (rect.left + rect.right) / 2;
    };
    var getThumb = function (component) {
      return $_bsysk910ijctdj6uh.getPartOrDie(component, detail, 'thumb');
    };
    var getXOffset = function (slider, spectrumBounds, detail) {
      var v = detail.value().get();
      if (v < detail.min()) {
        return $_bsysk910ijctdj6uh.getPart(slider, detail, 'left-edge').fold(function () {
          return 0;
        }, function (ledge) {
          return getXCentre(ledge) - spectrumBounds.left;
        });
      } else if (v > detail.max()) {
        return $_bsysk910ijctdj6uh.getPart(slider, detail, 'right-edge').fold(function () {
          return spectrumBounds.width;
        }, function (redge) {
          return getXCentre(redge) - spectrumBounds.left;
        });
      } else {
        return (detail.value().get() - detail.min()) / range * spectrumBounds.width;
      }
    };
    var getXPos = function (slider) {
      var spectrum = $_bsysk910ijctdj6uh.getPartOrDie(slider, detail, 'spectrum');
      var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
      var sliderBounds = slider.element().dom().getBoundingClientRect();
      var xOffset = getXOffset(slider, spectrumBounds, detail);
      return spectrumBounds.left - sliderBounds.left + xOffset;
    };
    var refresh = function (component) {
      var pos = getXPos(component);
      var thumb = getThumb(component);
      var thumbRadius = $_dzu4he117jctdj6yu.get(thumb.element()) / 2;
      $_c7wjf9zsjctdj6qf.set(thumb.element(), 'left', pos - thumbRadius + 'px');
    };
    var changeValue = function (component, newValue) {
      var oldValue = detail.value().get();
      var thumb = getThumb(component);
      if (oldValue !== newValue || $_c7wjf9zsjctdj6qf.getRaw(thumb.element(), 'left').isNone()) {
        detail.value().set(newValue);
        refresh(component);
        detail.onChange()(component, thumb, newValue);
        return $_1k5gi0wajctdj67w.some(true);
      } else {
        return $_1k5gi0wajctdj67w.none();
      }
    };
    var resetToMin = function (slider) {
      changeValue(slider, detail.min());
    };
    var resetToMax = function (slider) {
      changeValue(slider, detail.max());
    };
    var uiEventsArr = isTouch$3 ? [
      $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.touchstart(), function (slider, simulatedEvent) {
        detail.onDragStart()(slider, getThumb(slider));
      }),
      $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.touchend(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
      })
    ] : [
      $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.mousedown(), function (slider, simulatedEvent) {
        simulatedEvent.stop();
        detail.onDragStart()(slider, getThumb(slider));
        detail.mouseIsDown().set(true);
      }),
      $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.mouseup(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
        detail.mouseIsDown().set(false);
      })
    ];
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_fwvrcwwyjctdj69p.deepMerge($_b61y2hw4jctdj66j.derive($_85zw6hw9jctdj67p.flatten([
        !isTouch$3 ? [Keying.config({
            mode: 'special',
            focusIn: function (slider) {
              return $_bsysk910ijctdj6uh.getPart(slider, detail, 'spectrum').map(Keying.focusIn).map($_nsetdwbjctdj67z.constant(true));
            }
          })] : [],
        [me.config({
            store: {
              mode: 'manual',
              getValue: function (_) {
                return detail.value().get();
              }
            }
          })]
      ])), $_accgp10djctdj6tt.get(detail.sliderBehaviours())),
      events: $_2lvgrhw6jctdj67b.derive([
        $_2lvgrhw6jctdj67b.run($_4s8nyo10vjctdj6xf.changeEvent(), function (slider, simulatedEvent) {
          changeValue(slider, simulatedEvent.event().value());
        }),
        $_2lvgrhw6jctdj67b.runOnAttached(function (slider, simulatedEvent) {
          detail.value().set(detail.getInitialValue()());
          var thumb = getThumb(slider);
          refresh(slider);
          detail.onInit()(slider, thumb, detail.value().get());
        })
      ].concat(uiEventsArr)),
      apis: {
        resetToMin: resetToMin,
        resetToMax: resetToMax,
        refresh: refresh
      },
      domModification: { styles: { position: 'relative' } }
    };
  };
  var $_9cqq9u116jctdj6yh = { sketch: sketch$2 };

  var Slider = $_8lavxg10ejctdj6ty.composite({
    name: 'Slider',
    configFields: SliderSchema,
    partFields: SliderParts,
    factory: $_9cqq9u116jctdj6yh.sketch,
    apis: {
      resetToMin: function (apis, slider) {
        apis.resetToMin(slider);
      },
      resetToMax: function (apis, slider) {
        apis.resetToMax(slider);
      },
      refresh: function (apis, slider) {
        apis.refresh(slider);
      }
    }
  });

  var button = function (realm, clazz, makeItems) {
    return $_2fvhv0z2jctdj6no.forToolbar(clazz, function () {
      var items = makeItems();
      realm.setContextToolbar([{
          label: clazz + ' group',
          items: items
        }]);
    }, {});
  };
  var $_aya3h2118jctdj6yw = { button: button };

  var BLACK = -1;
  var makeSlider = function (spec) {
    var getColor = function (hue) {
      if (hue < 0) {
        return 'black';
      } else if (hue > 360) {
        return 'white';
      } else {
        return 'hsl(' + hue + ', 100%, 50%)';
      }
    };
    var onInit = function (slider, thumb, value) {
      var color = getColor(value);
      $_c7wjf9zsjctdj6qf.set(thumb.element(), 'background-color', color);
    };
    var onChange = function (slider, thumb, value) {
      var color = getColor(value);
      $_c7wjf9zsjctdj6qf.set(thumb.element(), 'background-color', color);
      spec.onChange(slider, thumb, color);
    };
    return Slider.sketch({
      dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-slider ${prefix}-hue-slider-container"></div>'),
      components: [
        Slider.parts()['left-edge']($_80xbio10qjctdj6wi.spec('<div class="${prefix}-hue-slider-black"></div>')),
        Slider.parts().spectrum({
          dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-slider-gradient-container"></div>'),
          components: [$_80xbio10qjctdj6wi.spec('<div class="${prefix}-slider-gradient"></div>')],
          behaviours: $_b61y2hw4jctdj66j.derive([Toggling.config({ toggleClass: $_79dnpgz1jctdj6nm.resolve('thumb-active') })])
        }),
        Slider.parts()['right-edge']($_80xbio10qjctdj6wi.spec('<div class="${prefix}-hue-slider-white"></div>')),
        Slider.parts().thumb({
          dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_b61y2hw4jctdj66j.derive([Toggling.config({ toggleClass: $_79dnpgz1jctdj6nm.resolve('thumb-active') })])
        })
      ],
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      onInit: onInit,
      stepSize: 10,
      min: 0,
      max: 360,
      getInitialValue: spec.getInitialValue,
      sliderBehaviours: $_b61y2hw4jctdj66j.derive([$_bd3cf7z0jctdj6nk.orientation(Slider.refresh)])
    });
  };
  var makeItems = function (spec) {
    return [makeSlider(spec)];
  };
  var sketch$1 = function (realm, editor) {
    var spec = {
      onChange: function (slider, thumb, color) {
        editor.undoManager.transact(function () {
          editor.formatter.apply('forecolor', { value: color });
          editor.nodeChanged();
        });
      },
      getInitialValue: function () {
        return BLACK;
      }
    };
    return $_aya3h2118jctdj6yw.button(realm, 'color', function () {
      return makeItems(spec);
    });
  };
  var $_ci3lbb10sjctdj6wv = {
    makeItems: makeItems,
    sketch: sketch$1
  };

  var schema$7 = $_ebkmgyxhjctdj6cd.objOfOnly([
    $_e1v8vrx2jctdj6ag.strict('getInitialValue'),
    $_e1v8vrx2jctdj6ag.strict('onChange'),
    $_e1v8vrx2jctdj6ag.strict('category'),
    $_e1v8vrx2jctdj6ag.strict('sizes')
  ]);
  var sketch$4 = function (rawSpec) {
    var spec = $_ebkmgyxhjctdj6cd.asRawOrDie('SizeSlider', schema$7, rawSpec);
    var isValidValue = function (valueIndex) {
      return valueIndex >= 0 && valueIndex < spec.sizes.length;
    };
    var onChange = function (slider, thumb, valueIndex) {
      if (isValidValue(valueIndex)) {
        spec.onChange(valueIndex);
      }
    };
    return Slider.sketch({
      dom: {
        tag: 'div',
        classes: [
          $_79dnpgz1jctdj6nm.resolve('slider-' + spec.category + '-size-container'),
          $_79dnpgz1jctdj6nm.resolve('slider'),
          $_79dnpgz1jctdj6nm.resolve('slider-size-container')
        ]
      },
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      min: 0,
      max: spec.sizes.length - 1,
      stepSize: 1,
      getInitialValue: spec.getInitialValue,
      snapToGrid: true,
      sliderBehaviours: $_b61y2hw4jctdj66j.derive([$_bd3cf7z0jctdj6nk.orientation(Slider.refresh)]),
      components: [
        Slider.parts().spectrum({
          dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-slider-size-container"></div>'),
          components: [$_80xbio10qjctdj6wi.spec('<div class="${prefix}-slider-size-line"></div>')]
        }),
        Slider.parts().thumb({
          dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_b61y2hw4jctdj66j.derive([Toggling.config({ toggleClass: $_79dnpgz1jctdj6nm.resolve('thumb-active') })])
        })
      ]
    });
  };
  var $_cvnq6o11ajctdj6z4 = { sketch: sketch$4 };

  var ancestor$3 = function (scope, transform, isRoot) {
    var element = scope.dom();
    var stop = $_1lp13rwzjctdj69r.isFunction(isRoot) ? isRoot : $_nsetdwbjctdj67z.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_bvayi3wtjctdj69a.fromDom(element);
      var transformed = transform(el);
      if (transformed.isSome())
        return transformed;
      else if (stop(el))
        break;
    }
    return $_1k5gi0wajctdj67w.none();
  };
  var closest$3 = function (scope, transform, isRoot) {
    var current = transform(scope);
    return current.orThunk(function () {
      return isRoot(scope) ? $_1k5gi0wajctdj67w.none() : ancestor$3(scope, transform, isRoot);
    });
  };
  var $_byt5811cjctdj6zk = {
    ancestor: ancestor$3,
    closest: closest$3
  };

  var candidates = [
    '9px',
    '10px',
    '11px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '32px',
    '36px'
  ];
  var defaultSize = 'medium';
  var defaultIndex = 2;
  var indexToSize = function (index) {
    return $_1k5gi0wajctdj67w.from(candidates[index]);
  };
  var sizeToIndex = function (size) {
    return $_85zw6hw9jctdj67p.findIndex(candidates, function (v) {
      return v === size;
    });
  };
  var getRawOrComputed = function (isRoot, rawStart) {
    var optStart = $_13f4i6xxjctdj6dv.isElement(rawStart) ? $_1k5gi0wajctdj67w.some(rawStart) : $_83fh6gy3jctdj6ef.parent(rawStart);
    return optStart.map(function (start) {
      var inline = $_byt5811cjctdj6zk.closest(start, function (elem) {
        return $_c7wjf9zsjctdj6qf.getRaw(elem, 'font-size');
      }, isRoot);
      return inline.getOrThunk(function () {
        return $_c7wjf9zsjctdj6qf.get(start, 'font-size');
      });
    }).getOr('');
  };
  var getSize = function (editor) {
    var node = editor.selection.getStart();
    var elem = $_bvayi3wtjctdj69a.fromDom(node);
    var root = $_bvayi3wtjctdj69a.fromDom(editor.getBody());
    var isRoot = function (e) {
      return $_a6ax5bw8jctdj67h.eq(root, e);
    };
    var elemSize = getRawOrComputed(isRoot, elem);
    return $_85zw6hw9jctdj67p.find(candidates, function (size) {
      return elemSize === size;
    }).getOr(defaultSize);
  };
  var applySize = function (editor, value) {
    var currentValue = getSize(editor);
    if (currentValue !== value) {
      editor.execCommand('fontSize', false, value);
    }
  };
  var get$7 = function (editor) {
    var size = getSize(editor);
    return sizeToIndex(size).getOr(defaultIndex);
  };
  var apply$1 = function (editor, index) {
    indexToSize(index).each(function (size) {
      applySize(editor, size);
    });
  };
  var $_2lm9g11bjctdj6zb = {
    candidates: $_nsetdwbjctdj67z.constant(candidates),
    get: get$7,
    apply: apply$1
  };

  var sizes = $_2lm9g11bjctdj6zb.candidates();
  var makeSlider$1 = function (spec) {
    return $_cvnq6o11ajctdj6z4.sketch({
      onChange: spec.onChange,
      sizes: sizes,
      category: 'font',
      getInitialValue: spec.getInitialValue
    });
  };
  var makeItems$1 = function (spec) {
    return [
      $_80xbio10qjctdj6wi.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-small-font ${prefix}-icon"></span>'),
      makeSlider$1(spec),
      $_80xbio10qjctdj6wi.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-large-font ${prefix}-icon"></span>')
    ];
  };
  var sketch$3 = function (realm, editor) {
    var spec = {
      onChange: function (value) {
        $_2lm9g11bjctdj6zb.apply(editor, value);
      },
      getInitialValue: function () {
        return $_2lm9g11bjctdj6zb.get(editor);
      }
    };
    return $_aya3h2118jctdj6yw.button(realm, 'font-size', function () {
      return makeItems$1(spec);
    });
  };
  var $_e63t7y119jctdj6yx = {
    makeItems: makeItems$1,
    sketch: sketch$3
  };

  var record = function (spec) {
    var uid = $_41rzpex6jctdj6bg.hasKey(spec, 'uid') ? spec.uid : $_4uq8p610mjctdj6vs.generate('memento');
    var get = function (any) {
      return any.getSystem().getByUid(uid).getOrDie();
    };
    var getOpt = function (any) {
      return any.getSystem().getByUid(uid).fold($_1k5gi0wajctdj67w.none, $_1k5gi0wajctdj67w.some);
    };
    var asSpec = function () {
      return $_fwvrcwwyjctdj69p.deepMerge(spec, { uid: uid });
    };
    return {
      get: get,
      getOpt: getOpt,
      asSpec: asSpec
    };
  };
  var $_fcnx6311ejctdj6zx = { record: record };

  function create$3(width, height) {
    return resize(document.createElement('canvas'), width, height);
  }
  function clone$2(canvas) {
    var tCanvas, ctx;
    tCanvas = create$3(canvas.width, canvas.height);
    ctx = get2dContext(tCanvas);
    ctx.drawImage(canvas, 0, 0);
    return tCanvas;
  }
  function get2dContext(canvas) {
    return canvas.getContext('2d');
  }
  function get3dContext(canvas) {
    var gl = null;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }
    if (!gl) {
      gl = null;
    }
    return gl;
  }
  function resize(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  var $_cjxcfl11hjctdj70g = {
    create: create$3,
    clone: clone$2,
    resize: resize,
    get2dContext: get2dContext,
    get3dContext: get3dContext
  };

  function getWidth(image) {
    return image.naturalWidth || image.width;
  }
  function getHeight(image) {
    return image.naturalHeight || image.height;
  }
  var $_81q9t511ijctdj70h = {
    getWidth: getWidth,
    getHeight: getHeight
  };

  var promise = function () {
    var Promise = function (fn) {
      if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function')
        throw new TypeError('not a function');
      this._state = null;
      this._value = null;
      this._deferreds = [];
      doResolve(fn, bind(resolve, this), bind(reject, this));
    };
    var asap = Promise.immediateFn || typeof setImmediate === 'function' && setImmediate || function (fn) {
      setTimeout(fn, 1);
    };
    function bind(fn, thisArg) {
      return function () {
        fn.apply(thisArg, arguments);
      };
    }
    var isArray = Array.isArray || function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    };
    function handle(deferred) {
      var me = this;
      if (this._state === null) {
        this._deferreds.push(deferred);
        return;
      }
      asap(function () {
        var cb = me._state ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (me._state ? deferred.resolve : deferred.reject)(me._value);
          return;
        }
        var ret;
        try {
          ret = cb(me._value);
        } catch (e) {
          deferred.reject(e);
          return;
        }
        deferred.resolve(ret);
      });
    }
    function resolve(newValue) {
      try {
        if (newValue === this)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
          var then = newValue.then;
          if (typeof then === 'function') {
            doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
            return;
          }
        }
        this._state = true;
        this._value = newValue;
        finale.call(this);
      } catch (e) {
        reject.call(this, e);
      }
    }
    function reject(newValue) {
      this._state = false;
      this._value = newValue;
      finale.call(this);
    }
    function finale() {
      for (var i = 0, len = this._deferreds.length; i < len; i++) {
        handle.call(this, this._deferreds[i]);
      }
      this._deferreds = null;
    }
    function Handler(onFulfilled, onRejected, resolve, reject) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.resolve = resolve;
      this.reject = reject;
    }
    function doResolve(fn, onFulfilled, onRejected) {
      var done = false;
      try {
        fn(function (value) {
          if (done)
            return;
          done = true;
          onFulfilled(value);
        }, function (reason) {
          if (done)
            return;
          done = true;
          onRejected(reason);
        });
      } catch (ex) {
        if (done)
          return;
        done = true;
        onRejected(ex);
      }
    }
    Promise.prototype['catch'] = function (onRejected) {
      return this.then(null, onRejected);
    };
    Promise.prototype.then = function (onFulfilled, onRejected) {
      var me = this;
      return new Promise(function (resolve, reject) {
        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
      });
    };
    Promise.all = function () {
      var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);
      return new Promise(function (resolve, reject) {
        if (args.length === 0)
          return resolve([]);
        var remaining = args.length;
        function res(i, val) {
          try {
            if (val && (typeof val === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(val, function (val) {
                  res(i, val);
                }, reject);
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }
        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };
    Promise.resolve = function (value) {
      if (value && typeof value === 'object' && value.constructor === Promise) {
        return value;
      }
      return new Promise(function (resolve) {
        resolve(value);
      });
    };
    Promise.reject = function (value) {
      return new Promise(function (resolve, reject) {
        reject(value);
      });
    };
    Promise.race = function (values) {
      return new Promise(function (resolve, reject) {
        for (var i = 0, len = values.length; i < len; i++) {
          values[i].then(resolve, reject);
        }
      });
    };
    return Promise;
  };
  var Promise = window.Promise ? window.Promise : promise();

  var Blob = function (parts, properties) {
    var f = $_1oxumhwdjctdj683.getOrDie('Blob');
    return new f(parts, properties);
  };

  var FileReader = function () {
    var f = $_1oxumhwdjctdj683.getOrDie('FileReader');
    return new f();
  };

  var Uint8Array = function (arr) {
    var f = $_1oxumhwdjctdj683.getOrDie('Uint8Array');
    return new f(arr);
  };

  var requestAnimationFrame = function (callback) {
    var f = $_1oxumhwdjctdj683.getOrDie('requestAnimationFrame');
    f(callback);
  };
  var atob = function (base64) {
    var f = $_1oxumhwdjctdj683.getOrDie('atob');
    return f(base64);
  };
  var $_a588jj11njctdj70q = {
    atob: atob,
    requestAnimationFrame: requestAnimationFrame
  };

  function loadImage(image) {
    return new Promise(function (resolve) {
      function loaded() {
        image.removeEventListener('load', loaded);
        resolve(image);
      }
      if (image.complete) {
        resolve(image);
      } else {
        image.addEventListener('load', loaded);
      }
    });
  }
  function imageToBlob$1(image) {
    return loadImage(image).then(function (image) {
      var src = image.src;
      if (src.indexOf('blob:') === 0) {
        return anyUriToBlob(src);
      }
      if (src.indexOf('data:') === 0) {
        return dataUriToBlob(src);
      }
      return anyUriToBlob(src);
    });
  }
  function blobToImage$1(blob) {
    return new Promise(function (resolve, reject) {
      var blobUrl = URL.createObjectURL(blob);
      var image = new Image();
      var removeListeners = function () {
        image.removeEventListener('load', loaded);
        image.removeEventListener('error', error);
      };
      function loaded() {
        removeListeners();
        resolve(image);
      }
      function error() {
        removeListeners();
        reject('Unable to load data of type ' + blob.type + ': ' + blobUrl);
      }
      image.addEventListener('load', loaded);
      image.addEventListener('error', error);
      image.src = blobUrl;
      if (image.complete) {
        loaded();
      }
    });
  }
  function anyUriToBlob(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        }
      };
      xhr.onerror = function () {
        var _this = this;
        var corsError = function () {
          var obj = new Error('No access to download image');
          obj.code = 18;
          obj.name = 'SecurityError';
          return obj;
        };
        var genericError = function () {
          return new Error('Error ' + _this.status + ' downloading image');
        };
        reject(this.status === 0 ? corsError() : genericError());
      };
      xhr.send();
    });
  }
  function dataUriToBlobSync$1(uri) {
    var data = uri.split(',');
    var matches = /data:([^;]+)/.exec(data[0]);
    if (!matches)
      return $_1k5gi0wajctdj67w.none();
    var mimetype = matches[1];
    var base64 = data[1];
    var sliceSize = 1024;
    var byteCharacters = $_a588jj11njctdj70q.atob(base64);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);
      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = Uint8Array(bytes);
    }
    return $_1k5gi0wajctdj67w.some(Blob(byteArrays, { type: mimetype }));
  }
  function dataUriToBlob(uri) {
    return new Promise(function (resolve, reject) {
      dataUriToBlobSync$1(uri).fold(function () {
        reject('uri is not base64: ' + uri);
      }, resolve);
    });
  }
  function uriToBlob$1(url) {
    if (url.indexOf('blob:') === 0) {
      return anyUriToBlob(url);
    }
    if (url.indexOf('data:') === 0) {
      return dataUriToBlob(url);
    }
    return null;
  }
  function canvasToBlob(canvas, type, quality) {
    type = type || 'image/png';
    if (HTMLCanvasElement.prototype.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(function (blob) {
          resolve(blob);
        }, type, quality);
      });
    } else {
      return dataUriToBlob(canvas.toDataURL(type, quality));
    }
  }
  function canvasToDataURL(getCanvas, type, quality) {
    type = type || 'image/png';
    return getCanvas.then(function (canvas) {
      return canvas.toDataURL(type, quality);
    });
  }
  function blobToCanvas(blob) {
    return blobToImage$1(blob).then(function (image) {
      revokeImageUrl(image);
      var context, canvas;
      canvas = $_cjxcfl11hjctdj70g.create($_81q9t511ijctdj70h.getWidth(image), $_81q9t511ijctdj70h.getHeight(image));
      context = $_cjxcfl11hjctdj70g.get2dContext(canvas);
      context.drawImage(image, 0, 0);
      return canvas;
    });
  }
  function blobToDataUri$1(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  function blobToBase64$1(blob) {
    return blobToDataUri$1(blob).then(function (dataUri) {
      return dataUri.split(',')[1];
    });
  }
  function revokeImageUrl(image) {
    URL.revokeObjectURL(image.src);
  }
  var $_c3nmv411gjctdj706 = {
    blobToImage: blobToImage$1,
    imageToBlob: imageToBlob$1,
    blobToDataUri: blobToDataUri$1,
    blobToBase64: blobToBase64$1,
    dataUriToBlobSync: dataUriToBlobSync$1,
    canvasToBlob: canvasToBlob,
    canvasToDataURL: canvasToDataURL,
    blobToCanvas: blobToCanvas,
    uriToBlob: uriToBlob$1
  };

  var blobToImage = function (image) {
    return $_c3nmv411gjctdj706.blobToImage(image);
  };
  var imageToBlob = function (blob) {
    return $_c3nmv411gjctdj706.imageToBlob(blob);
  };
  var blobToDataUri = function (blob) {
    return $_c3nmv411gjctdj706.blobToDataUri(blob);
  };
  var blobToBase64 = function (blob) {
    return $_c3nmv411gjctdj706.blobToBase64(blob);
  };
  var dataUriToBlobSync = function (uri) {
    return $_c3nmv411gjctdj706.dataUriToBlobSync(uri);
  };
  var uriToBlob = function (uri) {
    return $_1k5gi0wajctdj67w.from($_c3nmv411gjctdj706.uriToBlob(uri));
  };
  var $_dpd3ij11fjctdj702 = {
    blobToImage: blobToImage,
    imageToBlob: imageToBlob,
    blobToDataUri: blobToDataUri,
    blobToBase64: blobToBase64,
    dataUriToBlobSync: dataUriToBlobSync,
    uriToBlob: uriToBlob
  };

  var addImage = function (editor, blob) {
    $_dpd3ij11fjctdj702.blobToBase64(blob).then(function (base64) {
      editor.undoManager.transact(function () {
        var cache = editor.editorUpload.blobCache;
        var info = cache.create($_7dzy8310gjctdj6ub.generate('mceu'), blob, base64);
        cache.add(info);
        var img = editor.dom.createHTML('img', { src: info.blobUri() });
        editor.insertContent(img);
      });
    });
  };
  var extractBlob = function (simulatedEvent) {
    var event = simulatedEvent.event();
    var files = event.raw().target.files || event.raw().dataTransfer.files;
    return $_1k5gi0wajctdj67w.from(files[0]);
  };
  var sketch$5 = function (editor) {
    var pickerDom = {
      tag: 'input',
      attributes: {
        accept: 'image/*',
        type: 'file',
        title: ''
      },
      styles: {
        visibility: 'hidden',
        position: 'absolute'
      }
    };
    var memPicker = $_fcnx6311ejctdj6zx.record({
      dom: pickerDom,
      events: $_2lvgrhw6jctdj67b.derive([
        $_2lvgrhw6jctdj67b.cutter($_3mycfwxjctdj69n.click()),
        $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.change(), function (picker, simulatedEvent) {
          extractBlob(simulatedEvent).each(function (blob) {
            addImage(editor, blob);
          });
        })
      ])
    });
    return Button.sketch({
      dom: $_80xbio10qjctdj6wi.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-image ${prefix}-icon"></span>'),
      components: [memPicker.asSpec()],
      action: function (button) {
        var picker = memPicker.get(button);
        picker.element().dom().click();
      }
    });
  };
  var $_bdr0by11djctdj6zp = { sketch: sketch$5 };

  var get$8 = function (element) {
    return element.dom().textContent;
  };
  var set$5 = function (element, value) {
    element.dom().textContent = value;
  };
  var $_eo79mz11qjctdj71a = {
    get: get$8,
    set: set$5
  };

  var isNotEmpty = function (val) {
    return val.length > 0;
  };
  var defaultToEmpty = function (str) {
    return str === undefined || str === null ? '' : str;
  };
  var noLink = function (editor) {
    var text = editor.selection.getContent({ format: 'text' });
    return {
      url: '',
      text: text,
      title: '',
      target: '',
      link: $_1k5gi0wajctdj67w.none()
    };
  };
  var fromLink = function (link) {
    var text = $_eo79mz11qjctdj71a.get(link);
    var url = $_ftckpcxwjctdj6dp.get(link, 'href');
    var title = $_ftckpcxwjctdj6dp.get(link, 'title');
    var target = $_ftckpcxwjctdj6dp.get(link, 'target');
    return {
      url: defaultToEmpty(url),
      text: text !== url ? defaultToEmpty(text) : '',
      title: defaultToEmpty(title),
      target: defaultToEmpty(target),
      link: $_1k5gi0wajctdj67w.some(link)
    };
  };
  var getInfo = function (editor) {
    return query(editor).fold(function () {
      return noLink(editor);
    }, function (link) {
      return fromLink(link);
    });
  };
  var wasSimple = function (link) {
    var prevHref = $_ftckpcxwjctdj6dp.get(link, 'href');
    var prevText = $_eo79mz11qjctdj71a.get(link);
    return prevHref === prevText;
  };
  var getTextToApply = function (link, url, info) {
    return info.text.filter(isNotEmpty).fold(function () {
      return wasSimple(link) ? $_1k5gi0wajctdj67w.some(url) : $_1k5gi0wajctdj67w.none();
    }, $_1k5gi0wajctdj67w.some);
  };
  var unlinkIfRequired = function (editor, info) {
    var activeLink = info.link.bind($_nsetdwbjctdj67z.identity);
    activeLink.each(function (link) {
      editor.execCommand('unlink');
    });
  };
  var getAttrs$1 = function (url, info) {
    var attrs = {};
    attrs.href = url;
    info.title.filter(isNotEmpty).each(function (title) {
      attrs.title = title;
    });
    info.target.filter(isNotEmpty).each(function (target) {
      attrs.target = target;
    });
    return attrs;
  };
  var applyInfo = function (editor, info) {
    info.url.filter(isNotEmpty).fold(function () {
      unlinkIfRequired(editor, info);
    }, function (url) {
      var attrs = getAttrs$1(url, info);
      var activeLink = info.link.bind($_nsetdwbjctdj67z.identity);
      activeLink.fold(function () {
        var text = info.text.filter(isNotEmpty).getOr(url);
        editor.insertContent(editor.dom.createHTML('a', attrs, editor.dom.encode(text)));
      }, function (link) {
        var text = getTextToApply(link, url, info);
        $_ftckpcxwjctdj6dp.setAll(link, attrs);
        text.each(function (newText) {
          $_eo79mz11qjctdj71a.set(link, newText);
        });
      });
    });
  };
  var query = function (editor) {
    var start = $_bvayi3wtjctdj69a.fromDom(editor.selection.getStart());
    return $_82w6dszmjctdj6pu.closest(start, 'a');
  };
  var $_be8ker11pjctdj713 = {
    getInfo: getInfo,
    applyInfo: applyInfo,
    query: query
  };

  var events$6 = function (name, eventHandlers) {
    var events = $_2lvgrhw6jctdj67b.derive(eventHandlers);
    return $_b61y2hw4jctdj66j.create({
      fields: [$_e1v8vrx2jctdj6ag.strict('enabled')],
      name: name,
      active: { events: $_nsetdwbjctdj67z.constant(events) }
    });
  };
  var config = function (name, eventHandlers) {
    var me = events$6(name, eventHandlers);
    return {
      key: name,
      value: {
        config: {},
        me: me,
        configAsRaw: $_nsetdwbjctdj67z.constant({}),
        initialConfig: {},
        state: $_b61y2hw4jctdj66j.noState()
      }
    };
  };
  var $_8fkfqe11sjctdj71q = {
    events: events$6,
    config: config
  };

  var getCurrent = function (component, composeConfig, composeState) {
    return composeConfig.find()(component);
  };
  var $_4jh5lu11ujctdj71v = { getCurrent: getCurrent };

  var ComposeSchema = [$_e1v8vrx2jctdj6ag.strict('find')];

  var Composing = $_b61y2hw4jctdj66j.create({
    fields: ComposeSchema,
    name: 'composing',
    apis: $_4jh5lu11ujctdj71v
  });

  var factory$1 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_fwvrcwwyjctdj69p.deepMerge({
        tag: 'div',
        attributes: { role: 'presentation' }
      }, detail.dom()),
      components: detail.components(),
      behaviours: $_accgp10djctdj6tt.get(detail.containerBehaviours()),
      events: detail.events(),
      domModification: detail.domModification(),
      eventOrder: detail.eventOrder()
    };
  };
  var Container = $_8lavxg10ejctdj6ty.single({
    name: 'Container',
    factory: factory$1,
    configFields: [
      $_e1v8vrx2jctdj6ag.defaulted('components', []),
      $_accgp10djctdj6tt.field('containerBehaviours', []),
      $_e1v8vrx2jctdj6ag.defaulted('events', {}),
      $_e1v8vrx2jctdj6ag.defaulted('domModification', {}),
      $_e1v8vrx2jctdj6ag.defaulted('eventOrder', {})
    ]
  });

  var factory$2 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_fwvrcwwyjctdj69p.deepMerge($_b61y2hw4jctdj66j.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.getInitialValue()()
          }
        }),
        Composing.config({ find: $_1k5gi0wajctdj67w.some })
      ]), $_accgp10djctdj6tt.get(detail.dataBehaviours())),
      events: $_2lvgrhw6jctdj67b.derive([$_2lvgrhw6jctdj67b.runOnAttached(function (component, simulatedEvent) {
          me.setValue(component, detail.getInitialValue()());
        })])
    };
  };
  var DataField = $_8lavxg10ejctdj6ty.single({
    name: 'DataField',
    factory: factory$2,
    configFields: [
      $_e1v8vrx2jctdj6ag.strict('uid'),
      $_e1v8vrx2jctdj6ag.strict('dom'),
      $_e1v8vrx2jctdj6ag.strict('getInitialValue'),
      $_accgp10djctdj6tt.field('dataBehaviours', [
        me,
        Composing
      ])
    ]
  });

  var get$9 = function (element) {
    return element.dom().value;
  };
  var set$6 = function (element, value) {
    if (value === undefined)
      throw new Error('Value.set was undefined');
    element.dom().value = value;
  };
  var $_6uidcl120jctdj72h = {
    set: set$6,
    get: get$9
  };

  var schema$8 = [
    $_e1v8vrx2jctdj6ag.option('data'),
    $_e1v8vrx2jctdj6ag.defaulted('inputAttributes', {}),
    $_e1v8vrx2jctdj6ag.defaulted('inputStyles', {}),
    $_e1v8vrx2jctdj6ag.defaulted('type', 'input'),
    $_e1v8vrx2jctdj6ag.defaulted('tag', 'input'),
    $_e1v8vrx2jctdj6ag.defaulted('inputClasses', []),
    $_37rg8yytjctdj6ml.onHandler('onSetValue'),
    $_e1v8vrx2jctdj6ag.defaulted('styles', {}),
    $_e1v8vrx2jctdj6ag.option('placeholder'),
    $_e1v8vrx2jctdj6ag.defaulted('eventOrder', {}),
    $_accgp10djctdj6tt.field('inputBehaviours', [
      me,
      Focusing
    ]),
    $_e1v8vrx2jctdj6ag.defaulted('selectOnFocus', true)
  ];
  var behaviours = function (detail) {
    return $_fwvrcwwyjctdj69p.deepMerge($_b61y2hw4jctdj66j.derive([
      me.config({
        store: {
          mode: 'manual',
          initialValue: detail.data().getOr(undefined),
          getValue: function (input) {
            return $_6uidcl120jctdj72h.get(input.element());
          },
          setValue: function (input, data) {
            var current = $_6uidcl120jctdj72h.get(input.element());
            if (current !== data) {
              $_6uidcl120jctdj72h.set(input.element(), data);
            }
          }
        },
        onSetValue: detail.onSetValue()
      }),
      Focusing.config({
        onFocus: detail.selectOnFocus() === false ? $_nsetdwbjctdj67z.noop : function (component) {
          var input = component.element();
          var value = $_6uidcl120jctdj72h.get(input);
          input.dom().setSelectionRange(0, value.length);
        }
      })
    ]), $_accgp10djctdj6tt.get(detail.inputBehaviours()));
  };
  var dom$2 = function (detail) {
    return {
      tag: detail.tag(),
      attributes: $_fwvrcwwyjctdj69p.deepMerge($_41rzpex6jctdj6bg.wrapAll([{
          key: 'type',
          value: detail.type()
        }].concat(detail.placeholder().map(function (pc) {
        return {
          key: 'placeholder',
          value: pc
        };
      }).toArray())), detail.inputAttributes()),
      styles: detail.inputStyles(),
      classes: detail.inputClasses()
    };
  };
  var $_67r60511zjctdj729 = {
    schema: $_nsetdwbjctdj67z.constant(schema$8),
    behaviours: behaviours,
    dom: dom$2
  };

  var factory$3 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_67r60511zjctdj729.dom(detail),
      components: [],
      behaviours: $_67r60511zjctdj729.behaviours(detail),
      eventOrder: detail.eventOrder()
    };
  };
  var Input = $_8lavxg10ejctdj6ty.single({
    name: 'Input',
    configFields: $_67r60511zjctdj729.schema(),
    factory: factory$3
  });

  var exhibit$3 = function (base, tabConfig) {
    return $_1zwhwxkjctdj6cn.nu({
      attributes: $_41rzpex6jctdj6bg.wrapAll([{
          key: tabConfig.tabAttr(),
          value: 'true'
        }])
    });
  };
  var $_zfyna122jctdj72j = { exhibit: exhibit$3 };

  var TabstopSchema = [$_e1v8vrx2jctdj6ag.defaulted('tabAttr', 'data-alloy-tabstop')];

  var Tabstopping = $_b61y2hw4jctdj66j.create({
    fields: TabstopSchema,
    name: 'tabstopping',
    active: $_zfyna122jctdj72j
  });

  var clearInputBehaviour = 'input-clearing';
  var field$2 = function (name, placeholder) {
    var inputSpec = $_fcnx6311ejctdj6zx.record(Input.sketch({
      placeholder: placeholder,
      onSetValue: function (input, data) {
        $_axzm60wvjctdj69e.emit(input, $_3mycfwxjctdj69n.input());
      },
      inputBehaviours: $_b61y2hw4jctdj66j.derive([
        Composing.config({ find: $_1k5gi0wajctdj67w.some }),
        Tabstopping.config({}),
        Keying.config({ mode: 'execution' })
      ]),
      selectOnFocus: false
    }));
    var buttonSpec = $_fcnx6311ejctdj6zx.record(Button.sketch({
      dom: $_80xbio10qjctdj6wi.dom('<button class="${prefix}-input-container-x ${prefix}-icon-cancel-circle ${prefix}-icon"></button>'),
      action: function (button) {
        var input = inputSpec.get(button);
        me.setValue(input, '');
      }
    }));
    return {
      name: name,
      spec: Container.sketch({
        dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-input-container"></div>'),
        components: [
          inputSpec.asSpec(),
          buttonSpec.asSpec()
        ],
        containerBehaviours: $_b61y2hw4jctdj66j.derive([
          Toggling.config({ toggleClass: $_79dnpgz1jctdj6nm.resolve('input-container-empty') }),
          Composing.config({
            find: function (comp) {
              return $_1k5gi0wajctdj67w.some(inputSpec.get(comp));
            }
          }),
          $_8fkfqe11sjctdj71q.config(clearInputBehaviour, [$_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.input(), function (iContainer) {
              var input = inputSpec.get(iContainer);
              var val = me.getValue(input);
              var f = val.length > 0 ? Toggling.off : Toggling.on;
              f(iContainer);
            })])
        ])
      })
    };
  };
  var hidden = function (name) {
    return {
      name: name,
      spec: DataField.sketch({
        dom: {
          tag: 'span',
          styles: { display: 'none' }
        },
        getInitialValue: function () {
          return $_1k5gi0wajctdj67w.none();
        }
      })
    };
  };
  var $_ewnxvh11rjctdj71c = {
    field: field$2,
    hidden: hidden
  };

  var nativeDisabled = [
    'input',
    'button',
    'textarea'
  ];
  var onLoad$5 = function (component, disableConfig, disableState) {
    if (disableConfig.disabled())
      disable(component, disableConfig, disableState);
  };
  var hasNative = function (component) {
    return $_85zw6hw9jctdj67p.contains(nativeDisabled, $_13f4i6xxjctdj6dv.name(component.element()));
  };
  var nativeIsDisabled = function (component) {
    return $_ftckpcxwjctdj6dp.has(component.element(), 'disabled');
  };
  var nativeDisable = function (component) {
    $_ftckpcxwjctdj6dp.set(component.element(), 'disabled', 'disabled');
  };
  var nativeEnable = function (component) {
    $_ftckpcxwjctdj6dp.remove(component.element(), 'disabled');
  };
  var ariaIsDisabled = function (component) {
    return $_ftckpcxwjctdj6dp.get(component.element(), 'aria-disabled') === 'true';
  };
  var ariaDisable = function (component) {
    $_ftckpcxwjctdj6dp.set(component.element(), 'aria-disabled', 'true');
  };
  var ariaEnable = function (component) {
    $_ftckpcxwjctdj6dp.set(component.element(), 'aria-disabled', 'false');
  };
  var disable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_4vb8dhxujctdj6dm.add(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeDisable : ariaDisable;
    f(component);
  };
  var enable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_4vb8dhxujctdj6dm.remove(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeEnable : ariaEnable;
    f(component);
  };
  var isDisabled = function (component) {
    return hasNative(component) ? nativeIsDisabled(component) : ariaIsDisabled(component);
  };
  var $_bnq7o2127jctdj73k = {
    enable: enable,
    disable: disable,
    isDisabled: isDisabled,
    onLoad: onLoad$5
  };

  var exhibit$4 = function (base, disableConfig, disableState) {
    return $_1zwhwxkjctdj6cn.nu({ classes: disableConfig.disabled() ? disableConfig.disableClass().map($_85zw6hw9jctdj67p.pure).getOr([]) : [] });
  };
  var events$7 = function (disableConfig, disableState) {
    return $_2lvgrhw6jctdj67b.derive([
      $_2lvgrhw6jctdj67b.abort($_8rri5bwwjctdj69j.execute(), function (component, simulatedEvent) {
        return $_bnq7o2127jctdj73k.isDisabled(component, disableConfig, disableState);
      }),
      $_9fnyw4w5jctdj66r.loadEvent(disableConfig, disableState, $_bnq7o2127jctdj73k.onLoad)
    ]);
  };
  var $_2qcpjr126jctdj73h = {
    exhibit: exhibit$4,
    events: events$7
  };

  var DisableSchema = [
    $_e1v8vrx2jctdj6ag.defaulted('disabled', false),
    $_e1v8vrx2jctdj6ag.option('disableClass')
  ];

  var Disabling = $_b61y2hw4jctdj66j.create({
    fields: DisableSchema,
    name: 'disabling',
    active: $_2qcpjr126jctdj73h,
    apis: $_bnq7o2127jctdj73k
  });

  var owner$1 = 'form';
  var schema$9 = [$_accgp10djctdj6tt.field('formBehaviours', [me])];
  var getPartName = function (name) {
    return '<alloy.field.' + name + '>';
  };
  var sketch$8 = function (fSpec) {
    var parts = function () {
      var record = [];
      var field = function (name, config) {
        record.push(name);
        return $_bsysk910ijctdj6uh.generateOne(owner$1, getPartName(name), config);
      };
      return {
        field: field,
        record: function () {
          return record;
        }
      };
    }();
    var spec = fSpec(parts);
    var partNames = parts.record();
    var fieldParts = $_85zw6hw9jctdj67p.map(partNames, function (n) {
      return $_a90zyw10kjctdj6v0.required({
        name: n,
        pname: getPartName(n)
      });
    });
    return $_2ccrg410hjctdj6uc.composite(owner$1, schema$9, fieldParts, make, spec);
  };
  var make = function (detail, components, spec) {
    return $_fwvrcwwyjctdj69p.deepMerge({
      'debug.sketcher': { 'Form': spec },
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_fwvrcwwyjctdj69p.deepMerge($_b61y2hw4jctdj66j.derive([me.config({
          store: {
            mode: 'manual',
            getValue: function (form) {
              var optPs = $_bsysk910ijctdj6uh.getAllParts(form, detail);
              return $_sbi53x0jctdj69s.map(optPs, function (optPThunk, pName) {
                return optPThunk().bind(Composing.getCurrent).map(me.getValue);
              });
            },
            setValue: function (form, values) {
              $_sbi53x0jctdj69s.each(values, function (newValue, key) {
                $_bsysk910ijctdj6uh.getPart(form, detail, key).each(function (wrapper) {
                  Composing.getCurrent(wrapper).each(function (field) {
                    me.setValue(field, newValue);
                  });
                });
              });
            }
          }
        })]), $_accgp10djctdj6tt.get(detail.formBehaviours())),
      apis: {
        getField: function (form, key) {
          return $_bsysk910ijctdj6uh.getPart(form, detail, key).bind(Composing.getCurrent);
        }
      }
    });
  };
  var $_8bvsuq129jctdj73t = {
    getField: $_dhk3q810fjctdj6u6.makeApi(function (apis, component, key) {
      return apis.getField(component, key);
    }),
    sketch: sketch$8
  };

  var revocable = function (doRevoke) {
    var subject = Cell($_1k5gi0wajctdj67w.none());
    var revoke = function () {
      subject.get().each(doRevoke);
    };
    var clear = function () {
      revoke();
      subject.set($_1k5gi0wajctdj67w.none());
    };
    var set = function (s) {
      revoke();
      subject.set($_1k5gi0wajctdj67w.some(s));
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set
    };
  };
  var destroyable = function () {
    return revocable(function (s) {
      s.destroy();
    });
  };
  var unbindable = function () {
    return revocable(function (s) {
      s.unbind();
    });
  };
  var api$2 = function () {
    var subject = Cell($_1k5gi0wajctdj67w.none());
    var revoke = function () {
      subject.get().each(function (s) {
        s.destroy();
      });
    };
    var clear = function () {
      revoke();
      subject.set($_1k5gi0wajctdj67w.none());
    };
    var set = function (s) {
      revoke();
      subject.set($_1k5gi0wajctdj67w.some(s));
    };
    var run = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set,
      run: run
    };
  };
  var value$3 = function () {
    var subject = Cell($_1k5gi0wajctdj67w.none());
    var clear = function () {
      subject.set($_1k5gi0wajctdj67w.none());
    };
    var set = function (s) {
      subject.set($_1k5gi0wajctdj67w.some(s));
    };
    var on = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      set: set,
      isSet: isSet,
      on: on
    };
  };
  var $_b95ubz12ajctdj740 = {
    destroyable: destroyable,
    unbindable: unbindable,
    api: api$2,
    value: value$3
  };

  var SWIPING_LEFT = 1;
  var SWIPING_RIGHT = -1;
  var SWIPING_NONE = 0;
  var init$3 = function (xValue) {
    return {
      xValue: xValue,
      points: []
    };
  };
  var move = function (model, xValue) {
    if (xValue === model.xValue) {
      return model;
    }
    var currentDirection = xValue - model.xValue > 0 ? SWIPING_LEFT : SWIPING_RIGHT;
    var newPoint = {
      direction: currentDirection,
      xValue: xValue
    };
    var priorPoints = function () {
      if (model.points.length === 0) {
        return [];
      } else {
        var prev = model.points[model.points.length - 1];
        return prev.direction === currentDirection ? model.points.slice(0, model.points.length - 1) : model.points;
      }
    }();
    return {
      xValue: xValue,
      points: priorPoints.concat([newPoint])
    };
  };
  var complete = function (model) {
    if (model.points.length === 0) {
      return SWIPING_NONE;
    } else {
      var firstDirection = model.points[0].direction;
      var lastDirection = model.points[model.points.length - 1].direction;
      return firstDirection === SWIPING_RIGHT && lastDirection === SWIPING_RIGHT ? SWIPING_RIGHT : firstDirection === SWIPING_LEFT && lastDirection === SWIPING_LEFT ? SWIPING_LEFT : SWIPING_NONE;
    }
  };
  var $_edxtfs12bjctdj743 = {
    init: init$3,
    move: move,
    complete: complete
  };

  var sketch$7 = function (rawSpec) {
    var navigateEvent = 'navigateEvent';
    var wrapperAdhocEvents = 'serializer-wrapper-events';
    var formAdhocEvents = 'form-events';
    var schema = $_ebkmgyxhjctdj6cd.objOf([
      $_e1v8vrx2jctdj6ag.strict('fields'),
      $_e1v8vrx2jctdj6ag.defaulted('maxFieldIndex', rawSpec.fields.length - 1),
      $_e1v8vrx2jctdj6ag.strict('onExecute'),
      $_e1v8vrx2jctdj6ag.strict('getInitialValue'),
      $_e1v8vrx2jctdj6ag.state('state', function () {
        return {
          dialogSwipeState: $_b95ubz12ajctdj740.value(),
          currentScreen: Cell(0)
        };
      })
    ]);
    var spec = $_ebkmgyxhjctdj6cd.asRawOrDie('SerialisedDialog', schema, rawSpec);
    var navigationButton = function (direction, directionName, enabled) {
      return Button.sketch({
        dom: $_80xbio10qjctdj6wi.dom('<span class="${prefix}-icon-' + directionName + ' ${prefix}-icon"></span>'),
        action: function (button) {
          $_axzm60wvjctdj69e.emitWith(button, navigateEvent, { direction: direction });
        },
        buttonBehaviours: $_b61y2hw4jctdj66j.derive([Disabling.config({
            disableClass: $_79dnpgz1jctdj6nm.resolve('toolbar-navigation-disabled'),
            disabled: !enabled
          })])
      });
    };
    var reposition = function (dialog, message) {
      $_82w6dszmjctdj6pu.descendant(dialog.element(), '.' + $_79dnpgz1jctdj6nm.resolve('serialised-dialog-chain')).each(function (parent) {
        $_c7wjf9zsjctdj6qf.set(parent, 'left', -spec.state.currentScreen.get() * message.width + 'px');
      });
    };
    var navigate = function (dialog, direction) {
      var screens = $_aw19z0zkjctdj6pq.descendants(dialog.element(), '.' + $_79dnpgz1jctdj6nm.resolve('serialised-dialog-screen'));
      $_82w6dszmjctdj6pu.descendant(dialog.element(), '.' + $_79dnpgz1jctdj6nm.resolve('serialised-dialog-chain')).each(function (parent) {
        if (spec.state.currentScreen.get() + direction >= 0 && spec.state.currentScreen.get() + direction < screens.length) {
          $_c7wjf9zsjctdj6qf.getRaw(parent, 'left').each(function (left) {
            var currentLeft = parseInt(left, 10);
            var w = $_dzu4he117jctdj6yu.get(screens[0]);
            $_c7wjf9zsjctdj6qf.set(parent, 'left', currentLeft - direction * w + 'px');
          });
          spec.state.currentScreen.set(spec.state.currentScreen.get() + direction);
        }
      });
    };
    var focusInput = function (dialog) {
      var inputs = $_aw19z0zkjctdj6pq.descendants(dialog.element(), 'input');
      var optInput = $_1k5gi0wajctdj67w.from(inputs[spec.state.currentScreen.get()]);
      optInput.each(function (input) {
        dialog.getSystem().getByDom(input).each(function (inputComp) {
          $_axzm60wvjctdj69e.dispatchFocus(dialog, inputComp.element());
        });
      });
      var dotitems = memDots.get(dialog);
      Highlighting.highlightAt(dotitems, spec.state.currentScreen.get());
    };
    var resetState = function () {
      spec.state.currentScreen.set(0);
      spec.state.dialogSwipeState.clear();
    };
    var memForm = $_fcnx6311ejctdj6zx.record($_8bvsuq129jctdj73t.sketch(function (parts) {
      return {
        dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-serialised-dialog"></div>'),
        components: [Container.sketch({
            dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-serialised-dialog-chain" style="left: 0px; position: absolute;"></div>'),
            components: $_85zw6hw9jctdj67p.map(spec.fields, function (field, i) {
              return i <= spec.maxFieldIndex ? Container.sketch({
                dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-serialised-dialog-screen"></div>'),
                components: $_85zw6hw9jctdj67p.flatten([
                  [navigationButton(-1, 'previous', i > 0)],
                  [parts.field(field.name, field.spec)],
                  [navigationButton(+1, 'next', i < spec.maxFieldIndex)]
                ])
              }) : parts.field(field.name, field.spec);
            })
          })],
        formBehaviours: $_b61y2hw4jctdj66j.derive([
          $_bd3cf7z0jctdj6nk.orientation(function (dialog, message) {
            reposition(dialog, message);
          }),
          Keying.config({
            mode: 'special',
            focusIn: function (dialog) {
              focusInput(dialog);
            },
            onTab: function (dialog) {
              navigate(dialog, +1);
              return $_1k5gi0wajctdj67w.some(true);
            },
            onShiftTab: function (dialog) {
              navigate(dialog, -1);
              return $_1k5gi0wajctdj67w.some(true);
            }
          }),
          $_8fkfqe11sjctdj71q.config(formAdhocEvents, [
            $_2lvgrhw6jctdj67b.runOnAttached(function (dialog, simulatedEvent) {
              resetState();
              var dotitems = memDots.get(dialog);
              Highlighting.highlightFirst(dotitems);
              spec.getInitialValue(dialog).each(function (v) {
                me.setValue(dialog, v);
              });
            }),
            $_2lvgrhw6jctdj67b.runOnExecute(spec.onExecute),
            $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.transitionend(), function (dialog, simulatedEvent) {
              if (simulatedEvent.event().raw().propertyName === 'left') {
                focusInput(dialog);
              }
            }),
            $_2lvgrhw6jctdj67b.run(navigateEvent, function (dialog, simulatedEvent) {
              var direction = simulatedEvent.event().direction();
              navigate(dialog, direction);
            })
          ])
        ])
      };
    }));
    var memDots = $_fcnx6311ejctdj6zx.record({
      dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-dot-container"></div>'),
      behaviours: $_b61y2hw4jctdj66j.derive([Highlighting.config({
          highlightClass: $_79dnpgz1jctdj6nm.resolve('dot-active'),
          itemClass: $_79dnpgz1jctdj6nm.resolve('dot-item')
        })]),
      components: $_85zw6hw9jctdj67p.bind(spec.fields, function (_f, i) {
        return i <= spec.maxFieldIndex ? [$_80xbio10qjctdj6wi.spec('<div class="${prefix}-dot-item ${prefix}-icon-full-dot ${prefix}-icon"></div>')] : [];
      })
    });
    return {
      dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-serializer-wrapper"></div>'),
      components: [
        memForm.asSpec(),
        memDots.asSpec()
      ],
      behaviours: $_b61y2hw4jctdj66j.derive([
        Keying.config({
          mode: 'special',
          focusIn: function (wrapper) {
            var form = memForm.get(wrapper);
            Keying.focusIn(form);
          }
        }),
        $_8fkfqe11sjctdj71q.config(wrapperAdhocEvents, [
          $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.touchstart(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.set($_edxtfs12bjctdj743.init(simulatedEvent.event().raw().touches[0].clientX));
          }),
          $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.touchmove(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.on(function (state) {
              simulatedEvent.event().prevent();
              spec.state.dialogSwipeState.set($_edxtfs12bjctdj743.move(state, simulatedEvent.event().raw().touches[0].clientX));
            });
          }),
          $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.touchend(), function (wrapper) {
            spec.state.dialogSwipeState.on(function (state) {
              var dialog = memForm.get(wrapper);
              var direction = -1 * $_edxtfs12bjctdj743.complete(state);
              navigate(dialog, direction);
            });
          })
        ])
      ])
    };
  };
  var $_7hj94124jctdj72v = { sketch: sketch$7 };

  var platform$1 = $_3owkqnwgjctdj687.detect();
  var preserve$1 = function (f, editor) {
    var rng = editor.selection.getRng();
    f();
    editor.selection.setRng(rng);
  };
  var forAndroid = function (editor, f) {
    var wrapper = platform$1.os.isAndroid() ? preserve$1 : $_nsetdwbjctdj67z.apply;
    wrapper(f, editor);
  };
  var $_ex9ua512cjctdj745 = { forAndroid: forAndroid };

  var getGroups = $_c9x4bqwhjctdj689.cached(function (realm, editor) {
    return [{
        label: 'the link group',
        items: [$_7hj94124jctdj72v.sketch({
            fields: [
              $_ewnxvh11rjctdj71c.field('url', 'Type or paste URL'),
              $_ewnxvh11rjctdj71c.field('text', 'Link text'),
              $_ewnxvh11rjctdj71c.field('title', 'Link title'),
              $_ewnxvh11rjctdj71c.field('target', 'Link target'),
              $_ewnxvh11rjctdj71c.hidden('link')
            ],
            maxFieldIndex: [
              'url',
              'text',
              'title',
              'target'
            ].length - 1,
            getInitialValue: function () {
              return $_1k5gi0wajctdj67w.some($_be8ker11pjctdj713.getInfo(editor));
            },
            onExecute: function (dialog) {
              var info = me.getValue(dialog);
              $_be8ker11pjctdj713.applyInfo(editor, info);
              realm.restoreToolbar();
              editor.focus();
            }
          })]
      }];
  });
  var sketch$6 = function (realm, editor) {
    return $_2fvhv0z2jctdj6no.forToolbarStateAction(editor, 'link', 'link', function () {
      var groups = getGroups(realm, editor);
      realm.setContextToolbar(groups);
      $_ex9ua512cjctdj745.forAndroid(editor, function () {
        realm.focusToolbar();
      });
      $_be8ker11pjctdj713.query(editor).each(function (link) {
        editor.selection.select(link.dom());
      });
    });
  };
  var $_4q5gkt11ojctdj70s = { sketch: sketch$6 };

  var DefaultStyleFormats = [
    {
      title: 'Headings',
      items: [
        {
          title: 'Heading 1',
          format: 'h1'
        },
        {
          title: 'Heading 2',
          format: 'h2'
        },
        {
          title: 'Heading 3',
          format: 'h3'
        },
        {
          title: 'Heading 4',
          format: 'h4'
        },
        {
          title: 'Heading 5',
          format: 'h5'
        },
        {
          title: 'Heading 6',
          format: 'h6'
        }
      ]
    },
    {
      title: 'Inline',
      items: [
        {
          title: 'Bold',
          icon: 'bold',
          format: 'bold'
        },
        {
          title: 'Italic',
          icon: 'italic',
          format: 'italic'
        },
        {
          title: 'Underline',
          icon: 'underline',
          format: 'underline'
        },
        {
          title: 'Strikethrough',
          icon: 'strikethrough',
          format: 'strikethrough'
        },
        {
          title: 'Superscript',
          icon: 'superscript',
          format: 'superscript'
        },
        {
          title: 'Subscript',
          icon: 'subscript',
          format: 'subscript'
        },
        {
          title: 'Code',
          icon: 'code',
          format: 'code'
        }
      ]
    },
    {
      title: 'Blocks',
      items: [
        {
          title: 'Paragraph',
          format: 'p'
        },
        {
          title: 'Blockquote',
          format: 'blockquote'
        },
        {
          title: 'Div',
          format: 'div'
        },
        {
          title: 'Pre',
          format: 'pre'
        }
      ]
    },
    {
      title: 'Alignment',
      items: [
        {
          title: 'Left',
          icon: 'alignleft',
          format: 'alignleft'
        },
        {
          title: 'Center',
          icon: 'aligncenter',
          format: 'aligncenter'
        },
        {
          title: 'Right',
          icon: 'alignright',
          format: 'alignright'
        },
        {
          title: 'Justify',
          icon: 'alignjustify',
          format: 'alignjustify'
        }
      ]
    }
  ];

  var findRoute = function (component, transConfig, transState, route) {
    return $_41rzpex6jctdj6bg.readOptFrom(transConfig.routes(), route.start()).map($_nsetdwbjctdj67z.apply).bind(function (sConfig) {
      return $_41rzpex6jctdj6bg.readOptFrom(sConfig, route.destination()).map($_nsetdwbjctdj67z.apply);
    });
  };
  var getTransition = function (comp, transConfig, transState) {
    var route = getCurrentRoute(comp, transConfig, transState);
    return route.bind(function (r) {
      return getTransitionOf(comp, transConfig, transState, r);
    });
  };
  var getTransitionOf = function (comp, transConfig, transState, route) {
    return findRoute(comp, transConfig, transState, route).bind(function (r) {
      return r.transition().map(function (t) {
        return {
          transition: $_nsetdwbjctdj67z.constant(t),
          route: $_nsetdwbjctdj67z.constant(r)
        };
      });
    });
  };
  var disableTransition = function (comp, transConfig, transState) {
    getTransition(comp, transConfig, transState).each(function (routeTransition) {
      var t = routeTransition.transition();
      $_4vb8dhxujctdj6dm.remove(comp.element(), t.transitionClass());
      $_ftckpcxwjctdj6dp.remove(comp.element(), transConfig.destinationAttr());
    });
  };
  var getNewRoute = function (comp, transConfig, transState, destination) {
    return {
      start: $_nsetdwbjctdj67z.constant($_ftckpcxwjctdj6dp.get(comp.element(), transConfig.stateAttr())),
      destination: $_nsetdwbjctdj67z.constant(destination)
    };
  };
  var getCurrentRoute = function (comp, transConfig, transState) {
    var el = comp.element();
    return $_ftckpcxwjctdj6dp.has(el, transConfig.destinationAttr()) ? $_1k5gi0wajctdj67w.some({
      start: $_nsetdwbjctdj67z.constant($_ftckpcxwjctdj6dp.get(comp.element(), transConfig.stateAttr())),
      destination: $_nsetdwbjctdj67z.constant($_ftckpcxwjctdj6dp.get(comp.element(), transConfig.destinationAttr()))
    }) : $_1k5gi0wajctdj67w.none();
  };
  var jumpTo = function (comp, transConfig, transState, destination) {
    disableTransition(comp, transConfig, transState);
    if ($_ftckpcxwjctdj6dp.has(comp.element(), transConfig.stateAttr()) && $_ftckpcxwjctdj6dp.get(comp.element(), transConfig.stateAttr()) !== destination)
      transConfig.onFinish()(comp, destination);
    $_ftckpcxwjctdj6dp.set(comp.element(), transConfig.stateAttr(), destination);
  };
  var fasttrack = function (comp, transConfig, transState, destination) {
    if ($_ftckpcxwjctdj6dp.has(comp.element(), transConfig.destinationAttr())) {
      $_ftckpcxwjctdj6dp.set(comp.element(), transConfig.stateAttr(), $_ftckpcxwjctdj6dp.get(comp.element(), transConfig.destinationAttr()));
      $_ftckpcxwjctdj6dp.remove(comp.element(), transConfig.destinationAttr());
    }
  };
  var progressTo = function (comp, transConfig, transState, destination) {
    fasttrack(comp, transConfig, transState, destination);
    var route = getNewRoute(comp, transConfig, transState, destination);
    getTransitionOf(comp, transConfig, transState, route).fold(function () {
      jumpTo(comp, transConfig, transState, destination);
    }, function (routeTransition) {
      disableTransition(comp, transConfig, transState);
      var t = routeTransition.transition();
      $_4vb8dhxujctdj6dm.add(comp.element(), t.transitionClass());
      $_ftckpcxwjctdj6dp.set(comp.element(), transConfig.destinationAttr(), destination);
    });
  };
  var getState = function (comp, transConfig, transState) {
    var e = comp.element();
    return $_ftckpcxwjctdj6dp.has(e, transConfig.stateAttr()) ? $_1k5gi0wajctdj67w.some($_ftckpcxwjctdj6dp.get(e, transConfig.stateAttr())) : $_1k5gi0wajctdj67w.none();
  };
  var $_fw9ccp12ijctdj75g = {
    findRoute: findRoute,
    disableTransition: disableTransition,
    getCurrentRoute: getCurrentRoute,
    jumpTo: jumpTo,
    progressTo: progressTo,
    getState: getState
  };

  var events$8 = function (transConfig, transState) {
    return $_2lvgrhw6jctdj67b.derive([
      $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        $_fw9ccp12ijctdj75g.getCurrentRoute(component, transConfig, transState).each(function (route) {
          $_fw9ccp12ijctdj75g.findRoute(component, transConfig, transState, route).each(function (rInfo) {
            rInfo.transition().each(function (rTransition) {
              if (raw.propertyName === rTransition.property()) {
                $_fw9ccp12ijctdj75g.jumpTo(component, transConfig, transState, route.destination());
                transConfig.onTransition()(component, route);
              }
            });
          });
        });
      }),
      $_2lvgrhw6jctdj67b.runOnAttached(function (comp, se) {
        $_fw9ccp12ijctdj75g.jumpTo(comp, transConfig, transState, transConfig.initialState());
      })
    ]);
  };
  var $_cudmwm12hjctdj75e = { events: events$8 };

  var TransitionSchema = [
    $_e1v8vrx2jctdj6ag.defaulted('destinationAttr', 'data-transitioning-destination'),
    $_e1v8vrx2jctdj6ag.defaulted('stateAttr', 'data-transitioning-state'),
    $_e1v8vrx2jctdj6ag.strict('initialState'),
    $_37rg8yytjctdj6ml.onHandler('onTransition'),
    $_37rg8yytjctdj6ml.onHandler('onFinish'),
    $_e1v8vrx2jctdj6ag.strictOf('routes', $_ebkmgyxhjctdj6cd.setOf($_dk7ndjx8jctdj6bo.value, $_ebkmgyxhjctdj6cd.setOf($_dk7ndjx8jctdj6bo.value, $_ebkmgyxhjctdj6cd.objOfOnly([$_e1v8vrx2jctdj6ag.optionObjOfOnly('transition', [
        $_e1v8vrx2jctdj6ag.strict('property'),
        $_e1v8vrx2jctdj6ag.strict('transitionClass')
      ])]))))
  ];

  var createRoutes = function (routes) {
    var r = {};
    $_sbi53x0jctdj69s.each(routes, function (v, k) {
      var waypoints = k.split('<->');
      r[waypoints[0]] = $_41rzpex6jctdj6bg.wrap(waypoints[1], v);
      r[waypoints[1]] = $_41rzpex6jctdj6bg.wrap(waypoints[0], v);
    });
    return r;
  };
  var createBistate = function (first, second, transitions) {
    return $_41rzpex6jctdj6bg.wrapAll([
      {
        key: first,
        value: $_41rzpex6jctdj6bg.wrap(second, transitions)
      },
      {
        key: second,
        value: $_41rzpex6jctdj6bg.wrap(first, transitions)
      }
    ]);
  };
  var createTristate = function (first, second, third, transitions) {
    return $_41rzpex6jctdj6bg.wrapAll([
      {
        key: first,
        value: $_41rzpex6jctdj6bg.wrapAll([
          {
            key: second,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: second,
        value: $_41rzpex6jctdj6bg.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: third,
        value: $_41rzpex6jctdj6bg.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: second,
            value: transitions
          }
        ])
      }
    ]);
  };
  var Transitioning = $_b61y2hw4jctdj66j.create({
    fields: TransitionSchema,
    name: 'transitioning',
    active: $_cudmwm12hjctdj75e,
    apis: $_fw9ccp12ijctdj75g,
    extra: {
      createRoutes: createRoutes,
      createBistate: createBistate,
      createTristate: createTristate
    }
  });

  var generateFrom$1 = function (spec, all) {
    var schema = $_85zw6hw9jctdj67p.map(all, function (a) {
      return $_e1v8vrx2jctdj6ag.field(a.name(), a.name(), $_2nm6jxx3jctdj6am.asOption(), $_ebkmgyxhjctdj6cd.objOf([
        $_e1v8vrx2jctdj6ag.strict('config'),
        $_e1v8vrx2jctdj6ag.defaulted('state', $_atjv2ixqjctdj6dd)
      ]));
    });
    var validated = $_ebkmgyxhjctdj6cd.asStruct('component.behaviours', $_ebkmgyxhjctdj6cd.objOf(schema), spec.behaviours).fold(function (errInfo) {
      throw new Error($_ebkmgyxhjctdj6cd.formatError(errInfo) + '\nComplete spec:\n' + $_e3y33nxfjctdj6c9.stringify(spec, null, 2));
    }, $_nsetdwbjctdj67z.identity);
    return {
      list: all,
      data: $_sbi53x0jctdj69s.map(validated, function (blobOptionThunk) {
        var blobOption = blobOptionThunk();
        return $_nsetdwbjctdj67z.constant(blobOption.map(function (blob) {
          return {
            config: blob.config(),
            state: blob.state().init(blob.config())
          };
        }));
      })
    };
  };
  var getBehaviours$1 = function (bData) {
    return bData.list;
  };
  var getData = function (bData) {
    return bData.data;
  };
  var $_7cioj612njctdj770 = {
    generateFrom: generateFrom$1,
    getBehaviours: getBehaviours$1,
    getData: getData
  };

  var getBehaviours = function (spec) {
    var behaviours = $_41rzpex6jctdj6bg.readOptFrom(spec, 'behaviours').getOr({});
    var keys = $_85zw6hw9jctdj67p.filter($_sbi53x0jctdj69s.keys(behaviours), function (k) {
      return behaviours[k] !== undefined;
    });
    return $_85zw6hw9jctdj67p.map(keys, function (k) {
      return spec.behaviours[k].me;
    });
  };
  var generateFrom = function (spec, all) {
    return $_7cioj612njctdj770.generateFrom(spec, all);
  };
  var generate$4 = function (spec) {
    var all = getBehaviours(spec);
    return generateFrom(spec, all);
  };
  var $_3vqmy312mjctdj76u = {
    generate: generate$4,
    generateFrom: generateFrom
  };

  var ComponentApi = $_3sjm94xsjctdj6df.exactly([
    'getSystem',
    'config',
    'hasConfigured',
    'spec',
    'connect',
    'disconnect',
    'element',
    'syncComponents',
    'readState',
    'components',
    'events'
  ]);

  var SystemApi = $_3sjm94xsjctdj6df.exactly([
    'debugInfo',
    'triggerFocus',
    'triggerEvent',
    'triggerEscape',
    'addToWorld',
    'removeFromWorld',
    'addToGui',
    'removeFromGui',
    'build',
    'getByUid',
    'getByDom',
    'broadcast',
    'broadcastOn'
  ]);

  var NoContextApi = function (getComp) {
    var fail = function (event) {
      return function () {
        throw new Error('The component must be in a context to send: ' + event + '\n' + $_e0dlb6y9jctdj6kx.element(getComp().element()) + ' is not in context.');
      };
    };
    return SystemApi({
      debugInfo: $_nsetdwbjctdj67z.constant('fake'),
      triggerEvent: fail('triggerEvent'),
      triggerFocus: fail('triggerFocus'),
      triggerEscape: fail('triggerEscape'),
      build: fail('build'),
      addToWorld: fail('addToWorld'),
      removeFromWorld: fail('removeFromWorld'),
      addToGui: fail('addToGui'),
      removeFromGui: fail('removeFromGui'),
      getByUid: fail('getByUid'),
      getByDom: fail('getByDom'),
      broadcast: fail('broadcast'),
      broadcastOn: fail('broadcastOn')
    });
  };

  var byInnerKey = function (data, tuple) {
    var r = {};
    $_sbi53x0jctdj69s.each(data, function (detail, key) {
      $_sbi53x0jctdj69s.each(detail, function (value, indexKey) {
        var chain = $_41rzpex6jctdj6bg.readOr(indexKey, [])(r);
        r[indexKey] = chain.concat([tuple(key, value)]);
      });
    });
    return r;
  };
  var $_384hef12sjctdj77w = { byInnerKey: byInnerKey };

  var behaviourDom = function (name, modification) {
    return {
      name: $_nsetdwbjctdj67z.constant(name),
      modification: modification
    };
  };
  var concat = function (chain, aspect) {
    var values = $_85zw6hw9jctdj67p.bind(chain, function (c) {
      return c.modification().getOr([]);
    });
    return $_dk7ndjx8jctdj6bo.value($_41rzpex6jctdj6bg.wrap(aspect, values));
  };
  var onlyOne = function (chain, aspect, order) {
    if (chain.length > 1)
      return $_dk7ndjx8jctdj6bo.error('Multiple behaviours have tried to change DOM "' + aspect + '". The guilty behaviours are: ' + $_e3y33nxfjctdj6c9.stringify($_85zw6hw9jctdj67p.map(chain, function (b) {
        return b.name();
      })) + '. At this stage, this ' + 'is not supported. Future releases might provide strategies for resolving this.');
    else if (chain.length === 0)
      return $_dk7ndjx8jctdj6bo.value({});
    else
      return $_dk7ndjx8jctdj6bo.value(chain[0].modification().fold(function () {
        return {};
      }, function (m) {
        return $_41rzpex6jctdj6bg.wrap(aspect, m);
      }));
  };
  var duplicate = function (aspect, k, obj, behaviours) {
    return $_dk7ndjx8jctdj6bo.error('Mulitple behaviours have tried to change the _' + k + '_ "' + aspect + '"' + '. The guilty behaviours are: ' + $_e3y33nxfjctdj6c9.stringify($_85zw6hw9jctdj67p.bind(behaviours, function (b) {
      return b.modification().getOr({})[k] !== undefined ? [b.name()] : [];
    }), null, 2) + '. This is not currently supported.');
  };
  var safeMerge = function (chain, aspect) {
    var y = $_85zw6hw9jctdj67p.foldl(chain, function (acc, c) {
      var obj = c.modification().getOr({});
      return acc.bind(function (accRest) {
        var parts = $_sbi53x0jctdj69s.mapToArray(obj, function (v, k) {
          return accRest[k] !== undefined ? duplicate(aspect, k, obj, chain) : $_dk7ndjx8jctdj6bo.value($_41rzpex6jctdj6bg.wrap(k, v));
        });
        return $_41rzpex6jctdj6bg.consolidate(parts, accRest);
      });
    }, $_dk7ndjx8jctdj6bo.value({}));
    return y.map(function (yValue) {
      return $_41rzpex6jctdj6bg.wrap(aspect, yValue);
    });
  };
  var mergeTypes = {
    classes: concat,
    attributes: safeMerge,
    styles: safeMerge,
    domChildren: onlyOne,
    defChildren: onlyOne,
    innerHtml: onlyOne,
    value: onlyOne
  };
  var combine$1 = function (info, baseMod, behaviours, base) {
    var behaviourDoms = $_fwvrcwwyjctdj69p.deepMerge({}, baseMod);
    $_85zw6hw9jctdj67p.each(behaviours, function (behaviour) {
      behaviourDoms[behaviour.name()] = behaviour.exhibit(info, base);
    });
    var byAspect = $_384hef12sjctdj77w.byInnerKey(behaviourDoms, behaviourDom);
    var usedAspect = $_sbi53x0jctdj69s.map(byAspect, function (values, aspect) {
      return $_85zw6hw9jctdj67p.bind(values, function (value) {
        return value.modification().fold(function () {
          return [];
        }, function (v) {
          return [value];
        });
      });
    });
    var modifications = $_sbi53x0jctdj69s.mapToArray(usedAspect, function (values, aspect) {
      return $_41rzpex6jctdj6bg.readOptFrom(mergeTypes, aspect).fold(function () {
        return $_dk7ndjx8jctdj6bo.error('Unknown field type: ' + aspect);
      }, function (merger) {
        return merger(values, aspect);
      });
    });
    var consolidated = $_41rzpex6jctdj6bg.consolidate(modifications, {});
    return consolidated.map($_1zwhwxkjctdj6cn.nu);
  };
  var $_5u23cd12rjctdj77l = { combine: combine$1 };

  var sortKeys = function (label, keyName, array, order) {
    var sliced = array.slice(0);
    try {
      var sorted = sliced.sort(function (a, b) {
        var aKey = a[keyName]();
        var bKey = b[keyName]();
        var aIndex = order.indexOf(aKey);
        var bIndex = order.indexOf(bKey);
        if (aIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + aKey + '.\nOrder specified: ' + $_e3y33nxfjctdj6c9.stringify(order, null, 2));
        if (bIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + bKey + '.\nOrder specified: ' + $_e3y33nxfjctdj6c9.stringify(order, null, 2));
        if (aIndex < bIndex)
          return -1;
        else if (bIndex < aIndex)
          return 1;
        else
          return 0;
      });
      return $_dk7ndjx8jctdj6bo.value(sorted);
    } catch (err) {
      return $_dk7ndjx8jctdj6bo.error([err]);
    }
  };
  var $_3lznxa12ujctdj78b = { sortKeys: sortKeys };

  var nu$7 = function (handler, purpose) {
    return {
      handler: handler,
      purpose: $_nsetdwbjctdj67z.constant(purpose)
    };
  };
  var curryArgs = function (descHandler, extraArgs) {
    return {
      handler: $_nsetdwbjctdj67z.curry.apply(undefined, [descHandler.handler].concat(extraArgs)),
      purpose: descHandler.purpose
    };
  };
  var getHandler = function (descHandler) {
    return descHandler.handler;
  };
  var $_g7cw2912vjctdj78k = {
    nu: nu$7,
    curryArgs: curryArgs,
    getHandler: getHandler
  };

  var behaviourTuple = function (name, handler) {
    return {
      name: $_nsetdwbjctdj67z.constant(name),
      handler: $_nsetdwbjctdj67z.constant(handler)
    };
  };
  var nameToHandlers = function (behaviours, info) {
    var r = {};
    $_85zw6hw9jctdj67p.each(behaviours, function (behaviour) {
      r[behaviour.name()] = behaviour.handlers(info);
    });
    return r;
  };
  var groupByEvents = function (info, behaviours, base) {
    var behaviourEvents = $_fwvrcwwyjctdj69p.deepMerge(base, nameToHandlers(behaviours, info));
    return $_384hef12sjctdj77w.byInnerKey(behaviourEvents, behaviourTuple);
  };
  var combine$2 = function (info, eventOrder, behaviours, base) {
    var byEventName = groupByEvents(info, behaviours, base);
    return combineGroups(byEventName, eventOrder);
  };
  var assemble = function (rawHandler) {
    var handler = $_dazu4ux1jctdj69v.read(rawHandler);
    return function (component, simulatedEvent) {
      var args = Array.prototype.slice.call(arguments, 0);
      if (handler.abort.apply(undefined, args)) {
        simulatedEvent.stop();
      } else if (handler.can.apply(undefined, args)) {
        handler.run.apply(undefined, args);
      }
    };
  };
  var missingOrderError = function (eventName, tuples) {
    return new $_dk7ndjx8jctdj6bo.error(['The event (' + eventName + ') has more than one behaviour that listens to it.\nWhen this occurs, you must ' + 'specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that ' + 'can trigger it are: ' + $_e3y33nxfjctdj6c9.stringify($_85zw6hw9jctdj67p.map(tuples, function (c) {
        return c.name();
      }), null, 2)]);
  };
  var fuse$1 = function (tuples, eventOrder, eventName) {
    var order = eventOrder[eventName];
    if (!order)
      return missingOrderError(eventName, tuples);
    else
      return $_3lznxa12ujctdj78b.sortKeys('Event: ' + eventName, 'name', tuples, order).map(function (sortedTuples) {
        var handlers = $_85zw6hw9jctdj67p.map(sortedTuples, function (tuple) {
          return tuple.handler();
        });
        return $_dazu4ux1jctdj69v.fuse(handlers);
      });
  };
  var combineGroups = function (byEventName, eventOrder) {
    var r = $_sbi53x0jctdj69s.mapToArray(byEventName, function (tuples, eventName) {
      var combined = tuples.length === 1 ? $_dk7ndjx8jctdj6bo.value(tuples[0].handler()) : fuse$1(tuples, eventOrder, eventName);
      return combined.map(function (handler) {
        var assembled = assemble(handler);
        var purpose = tuples.length > 1 ? $_85zw6hw9jctdj67p.filter(eventOrder, function (o) {
          return $_85zw6hw9jctdj67p.contains(tuples, function (t) {
            return t.name() === o;
          });
        }).join(' > ') : tuples[0].name();
        return $_41rzpex6jctdj6bg.wrap(eventName, $_g7cw2912vjctdj78k.nu(assembled, purpose));
      });
    });
    return $_41rzpex6jctdj6bg.consolidate(r, {});
  };
  var $_60qozl12tjctdj780 = { combine: combine$2 };

  var toInfo = function (spec) {
    return $_ebkmgyxhjctdj6cd.asStruct('custom.definition', $_ebkmgyxhjctdj6cd.objOfOnly([
      $_e1v8vrx2jctdj6ag.field('dom', 'dom', $_2nm6jxx3jctdj6am.strict(), $_ebkmgyxhjctdj6cd.objOfOnly([
        $_e1v8vrx2jctdj6ag.strict('tag'),
        $_e1v8vrx2jctdj6ag.defaulted('styles', {}),
        $_e1v8vrx2jctdj6ag.defaulted('classes', []),
        $_e1v8vrx2jctdj6ag.defaulted('attributes', {}),
        $_e1v8vrx2jctdj6ag.option('value'),
        $_e1v8vrx2jctdj6ag.option('innerHtml')
      ])),
      $_e1v8vrx2jctdj6ag.strict('components'),
      $_e1v8vrx2jctdj6ag.strict('uid'),
      $_e1v8vrx2jctdj6ag.defaulted('events', {}),
      $_e1v8vrx2jctdj6ag.defaulted('apis', $_nsetdwbjctdj67z.constant({})),
      $_e1v8vrx2jctdj6ag.field('eventOrder', 'eventOrder', $_2nm6jxx3jctdj6am.mergeWith({
        'alloy.execute': [
          'disabling',
          'alloy.base.behaviour',
          'toggling'
        ],
        'alloy.focus': [
          'alloy.base.behaviour',
          'focusing',
          'keying'
        ],
        'alloy.system.init': [
          'alloy.base.behaviour',
          'disabling',
          'toggling',
          'representing'
        ],
        'input': [
          'alloy.base.behaviour',
          'representing',
          'streaming',
          'invalidating'
        ],
        'alloy.system.detached': [
          'alloy.base.behaviour',
          'representing'
        ]
      }), $_ebkmgyxhjctdj6cd.anyValue()),
      $_e1v8vrx2jctdj6ag.option('domModification'),
      $_37rg8yytjctdj6ml.snapshot('originalSpec'),
      $_e1v8vrx2jctdj6ag.defaulted('debug.sketcher', 'unknown')
    ]), spec);
  };
  var getUid = function (info) {
    return $_41rzpex6jctdj6bg.wrap($_2pua8810njctdj6vz.idAttr(), info.uid());
  };
  var toDefinition = function (info) {
    var base = {
      tag: info.dom().tag(),
      classes: info.dom().classes(),
      attributes: $_fwvrcwwyjctdj69p.deepMerge(getUid(info), info.dom().attributes()),
      styles: info.dom().styles(),
      domChildren: $_85zw6hw9jctdj67p.map(info.components(), function (comp) {
        return comp.element();
      })
    };
    return $_96sxedxljctdj6d2.nu($_fwvrcwwyjctdj69p.deepMerge(base, info.dom().innerHtml().map(function (h) {
      return $_41rzpex6jctdj6bg.wrap('innerHtml', h);
    }).getOr({}), info.dom().value().map(function (h) {
      return $_41rzpex6jctdj6bg.wrap('value', h);
    }).getOr({})));
  };
  var toModification = function (info) {
    return info.domModification().fold(function () {
      return $_1zwhwxkjctdj6cn.nu({});
    }, $_1zwhwxkjctdj6cn.nu);
  };
  var toApis = function (info) {
    return info.apis();
  };
  var toEvents = function (info) {
    return info.events();
  };
  var $_fqd8e012wjctdj78n = {
    toInfo: toInfo,
    toDefinition: toDefinition,
    toModification: toModification,
    toApis: toApis,
    toEvents: toEvents
  };

  var add$3 = function (element, classes) {
    $_85zw6hw9jctdj67p.each(classes, function (x) {
      $_4vb8dhxujctdj6dm.add(element, x);
    });
  };
  var remove$6 = function (element, classes) {
    $_85zw6hw9jctdj67p.each(classes, function (x) {
      $_4vb8dhxujctdj6dm.remove(element, x);
    });
  };
  var toggle$3 = function (element, classes) {
    $_85zw6hw9jctdj67p.each(classes, function (x) {
      $_4vb8dhxujctdj6dm.toggle(element, x);
    });
  };
  var hasAll = function (element, classes) {
    return $_85zw6hw9jctdj67p.forall(classes, function (clazz) {
      return $_4vb8dhxujctdj6dm.has(element, clazz);
    });
  };
  var hasAny = function (element, classes) {
    return $_85zw6hw9jctdj67p.exists(classes, function (clazz) {
      return $_4vb8dhxujctdj6dm.has(element, clazz);
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
  var get$10 = function (element) {
    return $_b8aco6xyjctdj6dw.supports(element) ? getNative(element) : $_b8aco6xyjctdj6dw.get(element);
  };
  var $_901pci12yjctdj799 = {
    add: add$3,
    remove: remove$6,
    toggle: toggle$3,
    hasAll: hasAll,
    hasAny: hasAny,
    get: get$10
  };

  var getChildren = function (definition) {
    if (definition.domChildren().isSome() && definition.defChildren().isSome()) {
      throw new Error('Cannot specify children and child specs! Must be one or the other.\nDef: ' + $_96sxedxljctdj6d2.defToStr(definition));
    } else {
      return definition.domChildren().fold(function () {
        var defChildren = definition.defChildren().getOr([]);
        return $_85zw6hw9jctdj67p.map(defChildren, renderDef);
      }, function (domChildren) {
        return domChildren;
      });
    }
  };
  var renderToDom = function (definition) {
    var subject = $_bvayi3wtjctdj69a.fromTag(definition.tag());
    $_ftckpcxwjctdj6dp.setAll(subject, definition.attributes().getOr({}));
    $_901pci12yjctdj799.add(subject, definition.classes().getOr([]));
    $_c7wjf9zsjctdj6qf.setAll(subject, definition.styles().getOr({}));
    $_edp5zaybjctdj6l1.set(subject, definition.innerHtml().getOr(''));
    var children = getChildren(definition);
    $_9d7i1ky6jctdj6ki.append(subject, children);
    definition.value().each(function (value) {
      $_6uidcl120jctdj72h.set(subject, value);
    });
    return subject;
  };
  var renderDef = function (spec) {
    var definition = $_96sxedxljctdj6d2.nu(spec);
    return renderToDom(definition);
  };
  var $_uj01i12xjctdj78y = { renderToDom: renderToDom };

  var build$1 = function (spec) {
    var getMe = function () {
      return me;
    };
    var systemApi = Cell(NoContextApi(getMe));
    var info = $_ebkmgyxhjctdj6cd.getOrDie($_fqd8e012wjctdj78n.toInfo($_fwvrcwwyjctdj69p.deepMerge(spec, { behaviours: undefined })));
    var bBlob = $_3vqmy312mjctdj76u.generate(spec);
    var bList = $_7cioj612njctdj770.getBehaviours(bBlob);
    var bData = $_7cioj612njctdj770.getData(bBlob);
    var definition = $_fqd8e012wjctdj78n.toDefinition(info);
    var baseModification = { 'alloy.base.modification': $_fqd8e012wjctdj78n.toModification(info) };
    var modification = $_5u23cd12rjctdj77l.combine(bData, baseModification, bList, definition).getOrDie();
    var modDefinition = $_1zwhwxkjctdj6cn.merge(definition, modification);
    var item = $_uj01i12xjctdj78y.renderToDom(modDefinition);
    var baseEvents = { 'alloy.base.behaviour': $_fqd8e012wjctdj78n.toEvents(info) };
    var events = $_60qozl12tjctdj780.combine(bData, info.eventOrder(), bList, baseEvents).getOrDie();
    var subcomponents = Cell(info.components());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(getMe));
    };
    var syncComponents = function () {
      var children = $_83fh6gy3jctdj6ef.children(item);
      var subs = $_85zw6hw9jctdj67p.bind(children, function (child) {
        return systemApi.get().getByDom(child).fold(function () {
          return [];
        }, function (c) {
          return [c];
        });
      });
      subcomponents.set(subs);
    };
    var config = function (behaviour) {
      if (behaviour === $_dhk3q810fjctdj6u6.apiConfig())
        return info.apis();
      var b = bData;
      var f = $_1lp13rwzjctdj69r.isFunction(b[behaviour.name()]) ? b[behaviour.name()] : function () {
        throw new Error('Could not find ' + behaviour.name() + ' in ' + $_e3y33nxfjctdj6c9.stringify(spec, null, 2));
      };
      return f();
    };
    var hasConfigured = function (behaviour) {
      return $_1lp13rwzjctdj69r.isFunction(bData[behaviour.name()]);
    };
    var readState = function (behaviourName) {
      return bData[behaviourName]().map(function (b) {
        return b.state.readState();
      }).getOr('not enabled');
    };
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: config,
      hasConfigured: hasConfigured,
      spec: $_nsetdwbjctdj67z.constant(spec),
      readState: readState,
      connect: connect,
      disconnect: disconnect,
      element: $_nsetdwbjctdj67z.constant(item),
      syncComponents: syncComponents,
      components: subcomponents.get,
      events: $_nsetdwbjctdj67z.constant(events)
    });
    return me;
  };
  var $_f5r9yd12ljctdj76c = { build: build$1 };

  var isRecursive = function (component, originator, target) {
    return $_a6ax5bw8jctdj67h.eq(originator, component.element()) && !$_a6ax5bw8jctdj67h.eq(originator, target);
  };
  var $_a2s5zo12zjctdj79d = {
    events: $_2lvgrhw6jctdj67b.derive([$_2lvgrhw6jctdj67b.can($_8rri5bwwjctdj69j.focus(), function (component, simulatedEvent) {
        var originator = simulatedEvent.event().originator();
        var target = simulatedEvent.event().target();
        if (isRecursive(component, originator, target)) {
          console.warn($_8rri5bwwjctdj69j.focus() + ' did not get interpreted by the desired target. ' + '\nOriginator: ' + $_e0dlb6y9jctdj6kx.element(originator) + '\nTarget: ' + $_e0dlb6y9jctdj6kx.element(target) + '\nCheck the ' + $_8rri5bwwjctdj69j.focus() + ' event handlers');
          return false;
        } else {
          return true;
        }
      })])
  };

  var make$1 = function (spec) {
    return spec;
  };
  var $_eeur6m130jctdj79g = { make: make$1 };

  var buildSubcomponents = function (spec) {
    var components = $_41rzpex6jctdj6bg.readOr('components', [])(spec);
    return $_85zw6hw9jctdj67p.map(components, build);
  };
  var buildFromSpec = function (userSpec) {
    var spec = $_eeur6m130jctdj79g.make(userSpec);
    var components = buildSubcomponents(spec);
    var completeSpec = $_fwvrcwwyjctdj69p.deepMerge($_a2s5zo12zjctdj79d, spec, $_41rzpex6jctdj6bg.wrap('components', components));
    return $_dk7ndjx8jctdj6bo.value($_f5r9yd12ljctdj76c.build(completeSpec));
  };
  var text = function (textContent) {
    var element = $_bvayi3wtjctdj69a.fromText(textContent);
    return external({ element: element });
  };
  var external = function (spec) {
    var extSpec = $_ebkmgyxhjctdj6cd.asStructOrDie('external.component', $_ebkmgyxhjctdj6cd.objOfOnly([
      $_e1v8vrx2jctdj6ag.strict('element'),
      $_e1v8vrx2jctdj6ag.option('uid')
    ]), spec);
    var systemApi = Cell(NoContextApi());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(function () {
        return me;
      }));
    };
    extSpec.uid().each(function (uid) {
      $_4uq8p610mjctdj6vs.writeOnly(extSpec.element(), uid);
    });
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: $_1k5gi0wajctdj67w.none,
      hasConfigured: $_nsetdwbjctdj67z.constant(false),
      connect: connect,
      disconnect: disconnect,
      element: $_nsetdwbjctdj67z.constant(extSpec.element()),
      spec: $_nsetdwbjctdj67z.constant(spec),
      readState: $_nsetdwbjctdj67z.constant('No state'),
      syncComponents: $_nsetdwbjctdj67z.noop,
      components: $_nsetdwbjctdj67z.constant([]),
      events: $_nsetdwbjctdj67z.constant({})
    });
    return $_dhk3q810fjctdj6u6.premade(me);
  };
  var build = function (rawUserSpec) {
    return $_dhk3q810fjctdj6u6.getPremade(rawUserSpec).fold(function () {
      var userSpecWithUid = $_fwvrcwwyjctdj69p.deepMerge({ uid: $_4uq8p610mjctdj6vs.generate('') }, rawUserSpec);
      return buildFromSpec(userSpecWithUid).getOrDie();
    }, function (prebuilt) {
      return prebuilt;
    });
  };
  var $_2dgzqw12kjctdj75x = {
    build: build,
    premade: $_dhk3q810fjctdj6u6.premade,
    external: external,
    text: text
  };

  var hoverEvent = 'alloy.item-hover';
  var focusEvent = 'alloy.item-focus';
  var onHover = function (item) {
    if ($_3yi9jcygjctdj6la.search(item.element()).isNone() || Focusing.isFocused(item)) {
      if (!Focusing.isFocused(item))
        Focusing.focus(item);
      $_axzm60wvjctdj69e.emitWith(item, hoverEvent, { item: item });
    }
  };
  var onFocus = function (item) {
    $_axzm60wvjctdj69e.emitWith(item, focusEvent, { item: item });
  };
  var $_66iuzf134jctdj79w = {
    hover: $_nsetdwbjctdj67z.constant(hoverEvent),
    focus: $_nsetdwbjctdj67z.constant(focusEvent),
    onHover: onHover,
    onFocus: onFocus
  };

  var builder = function (info) {
    return {
      dom: $_fwvrcwwyjctdj69p.deepMerge(info.dom(), { attributes: { role: info.toggling().isSome() ? 'menuitemcheckbox' : 'menuitem' } }),
      behaviours: $_fwvrcwwyjctdj69p.deepMerge($_b61y2hw4jctdj66j.derive([
        info.toggling().fold(Toggling.revoke, function (tConfig) {
          return Toggling.config($_fwvrcwwyjctdj69p.deepMerge({ aria: { mode: 'checked' } }, tConfig));
        }),
        Focusing.config({
          ignore: info.ignoreFocus(),
          onFocus: function (component) {
            $_66iuzf134jctdj79w.onFocus(component);
          }
        }),
        Keying.config({ mode: 'execution' }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        })
      ]), info.itemBehaviours()),
      events: $_2lvgrhw6jctdj67b.derive([
        $_2lvgrhw6jctdj67b.runWithTarget($_8rri5bwwjctdj69j.tapOrClick(), $_axzm60wvjctdj69e.emitExecute),
        $_2lvgrhw6jctdj67b.cutter($_3mycfwxjctdj69n.mousedown()),
        $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.mouseover(), $_66iuzf134jctdj79w.onHover),
        $_2lvgrhw6jctdj67b.run($_8rri5bwwjctdj69j.focusItem(), Focusing.focus)
      ]),
      components: info.components(),
      domModification: info.domModification()
    };
  };
  var schema$11 = [
    $_e1v8vrx2jctdj6ag.strict('data'),
    $_e1v8vrx2jctdj6ag.strict('components'),
    $_e1v8vrx2jctdj6ag.strict('dom'),
    $_e1v8vrx2jctdj6ag.option('toggling'),
    $_e1v8vrx2jctdj6ag.defaulted('itemBehaviours', {}),
    $_e1v8vrx2jctdj6ag.defaulted('ignoreFocus', false),
    $_e1v8vrx2jctdj6ag.defaulted('domModification', {}),
    $_37rg8yytjctdj6ml.output('builder', builder)
  ];

  var builder$1 = function (detail) {
    return {
      dom: detail.dom(),
      components: detail.components(),
      events: $_2lvgrhw6jctdj67b.derive([$_2lvgrhw6jctdj67b.stopper($_8rri5bwwjctdj69j.focusItem())])
    };
  };
  var schema$12 = [
    $_e1v8vrx2jctdj6ag.strict('dom'),
    $_e1v8vrx2jctdj6ag.strict('components'),
    $_37rg8yytjctdj6ml.output('builder', builder$1)
  ];

  var owner$2 = 'item-widget';
  var partTypes = [$_a90zyw10kjctdj6v0.required({
      name: 'widget',
      overrides: function (detail) {
        return {
          behaviours: $_b61y2hw4jctdj66j.derive([me.config({
              store: {
                mode: 'manual',
                getValue: function (component) {
                  return detail.data();
                },
                setValue: function () {
                }
              }
            })])
        };
      }
    })];
  var $_8k279z137jctdj7af = {
    owner: $_nsetdwbjctdj67z.constant(owner$2),
    parts: $_nsetdwbjctdj67z.constant(partTypes)
  };

  var builder$2 = function (info) {
    var subs = $_bsysk910ijctdj6uh.substitutes($_8k279z137jctdj7af.owner(), info, $_8k279z137jctdj7af.parts());
    var components = $_bsysk910ijctdj6uh.components($_8k279z137jctdj7af.owner(), info, subs.internals());
    var focusWidget = function (component) {
      return $_bsysk910ijctdj6uh.getPart(component, info, 'widget').map(function (widget) {
        Keying.focusIn(widget);
        return widget;
      });
    };
    var onHorizontalArrow = function (component, simulatedEvent) {
      return $_dl0liazxjctdj6r1.inside(simulatedEvent.event().target()) ? $_1k5gi0wajctdj67w.none() : function () {
        if (info.autofocus()) {
          simulatedEvent.setSource(component.element());
          return $_1k5gi0wajctdj67w.none();
        } else {
          return $_1k5gi0wajctdj67w.none();
        }
      }();
    };
    return $_fwvrcwwyjctdj69p.deepMerge({
      dom: info.dom(),
      components: components,
      domModification: info.domModification(),
      events: $_2lvgrhw6jctdj67b.derive([
        $_2lvgrhw6jctdj67b.runOnExecute(function (component, simulatedEvent) {
          focusWidget(component).each(function (widget) {
            simulatedEvent.stop();
          });
        }),
        $_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.mouseover(), $_66iuzf134jctdj79w.onHover),
        $_2lvgrhw6jctdj67b.run($_8rri5bwwjctdj69j.focusItem(), function (component, simulatedEvent) {
          if (info.autofocus())
            focusWidget(component);
          else
            Focusing.focus(component);
        })
      ]),
      behaviours: $_b61y2hw4jctdj66j.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        }),
        Focusing.config({
          onFocus: function (component) {
            $_66iuzf134jctdj79w.onFocus(component);
          }
        }),
        Keying.config({
          mode: 'special',
          onLeft: onHorizontalArrow,
          onRight: onHorizontalArrow,
          onEscape: function (component, simulatedEvent) {
            if (!Focusing.isFocused(component) && !info.autofocus()) {
              Focusing.focus(component);
              return $_1k5gi0wajctdj67w.some(true);
            } else if (info.autofocus()) {
              simulatedEvent.setSource(component.element());
              return $_1k5gi0wajctdj67w.none();
            } else {
              return $_1k5gi0wajctdj67w.none();
            }
          }
        })
      ])
    });
  };
  var schema$13 = [
    $_e1v8vrx2jctdj6ag.strict('uid'),
    $_e1v8vrx2jctdj6ag.strict('data'),
    $_e1v8vrx2jctdj6ag.strict('components'),
    $_e1v8vrx2jctdj6ag.strict('dom'),
    $_e1v8vrx2jctdj6ag.defaulted('autofocus', false),
    $_e1v8vrx2jctdj6ag.defaulted('domModification', {}),
    $_bsysk910ijctdj6uh.defaultUidsSchema($_8k279z137jctdj7af.parts()),
    $_37rg8yytjctdj6ml.output('builder', builder$2)
  ];

  var itemSchema$1 = $_ebkmgyxhjctdj6cd.choose('type', {
    widget: schema$13,
    item: schema$11,
    separator: schema$12
  });
  var configureGrid = function (detail, movementInfo) {
    return {
      mode: 'flatgrid',
      selector: '.' + detail.markers().item(),
      initSize: {
        numColumns: movementInfo.initSize().numColumns(),
        numRows: movementInfo.initSize().numRows()
      },
      focusManager: detail.focusManager()
    };
  };
  var configureMenu = function (detail, movementInfo) {
    return {
      mode: 'menu',
      selector: '.' + detail.markers().item(),
      moveOnTab: movementInfo.moveOnTab(),
      focusManager: detail.focusManager()
    };
  };
  var parts = [$_a90zyw10kjctdj6v0.group({
      factory: {
        sketch: function (spec) {
          var itemInfo = $_ebkmgyxhjctdj6cd.asStructOrDie('menu.spec item', itemSchema$1, spec);
          return itemInfo.builder()(itemInfo);
        }
      },
      name: 'items',
      unit: 'item',
      defaults: function (detail, u) {
        var fallbackUid = $_4uq8p610mjctdj6vs.generate('');
        return $_fwvrcwwyjctdj69p.deepMerge({ uid: fallbackUid }, u);
      },
      overrides: function (detail, u) {
        return {
          type: u.type,
          ignoreFocus: detail.fakeFocus(),
          domModification: { classes: [detail.markers().item()] }
        };
      }
    })];
  var schema$10 = [
    $_e1v8vrx2jctdj6ag.strict('value'),
    $_e1v8vrx2jctdj6ag.strict('items'),
    $_e1v8vrx2jctdj6ag.strict('dom'),
    $_e1v8vrx2jctdj6ag.strict('components'),
    $_e1v8vrx2jctdj6ag.defaulted('eventOrder', {}),
    $_accgp10djctdj6tt.field('menuBehaviours', [
      Highlighting,
      me,
      Composing,
      Keying
    ]),
    $_e1v8vrx2jctdj6ag.defaultedOf('movement', {
      mode: 'menu',
      moveOnTab: true
    }, $_ebkmgyxhjctdj6cd.choose('mode', {
      grid: [
        $_37rg8yytjctdj6ml.initSize(),
        $_37rg8yytjctdj6ml.output('config', configureGrid)
      ],
      menu: [
        $_e1v8vrx2jctdj6ag.defaulted('moveOnTab', true),
        $_37rg8yytjctdj6ml.output('config', configureMenu)
      ]
    })),
    $_37rg8yytjctdj6ml.itemMarkers(),
    $_e1v8vrx2jctdj6ag.defaulted('fakeFocus', false),
    $_e1v8vrx2jctdj6ag.defaulted('focusManager', $_al44jgzgjctdj6p9.dom()),
    $_37rg8yytjctdj6ml.onHandler('onHighlight')
  ];
  var $_chjg63132jctdj79j = {
    name: $_nsetdwbjctdj67z.constant('Menu'),
    schema: $_nsetdwbjctdj67z.constant(schema$10),
    parts: $_nsetdwbjctdj67z.constant(parts)
  };

  var focusEvent$1 = 'alloy.menu-focus';
  var $_dg4udl139jctdj7ao = { focus: $_nsetdwbjctdj67z.constant(focusEvent$1) };

  var make$2 = function (detail, components, spec, externals) {
    return $_fwvrcwwyjctdj69p.deepMerge({
      dom: $_fwvrcwwyjctdj69p.deepMerge(detail.dom(), { attributes: { role: 'menu' } }),
      uid: detail.uid(),
      behaviours: $_fwvrcwwyjctdj69p.deepMerge($_b61y2hw4jctdj66j.derive([
        Highlighting.config({
          highlightClass: detail.markers().selectedItem(),
          itemClass: detail.markers().item(),
          onHighlight: detail.onHighlight()
        }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.value()
          }
        }),
        Composing.config({ find: $_nsetdwbjctdj67z.identity }),
        Keying.config(detail.movement().config()(detail, detail.movement()))
      ]), $_accgp10djctdj6tt.get(detail.menuBehaviours())),
      events: $_2lvgrhw6jctdj67b.derive([
        $_2lvgrhw6jctdj67b.run($_66iuzf134jctdj79w.focus(), function (menu, simulatedEvent) {
          var event = simulatedEvent.event();
          menu.getSystem().getByDom(event.target()).each(function (item) {
            Highlighting.highlight(menu, item);
            simulatedEvent.stop();
            $_axzm60wvjctdj69e.emitWith(menu, $_dg4udl139jctdj7ao.focus(), {
              menu: menu,
              item: item
            });
          });
        }),
        $_2lvgrhw6jctdj67b.run($_66iuzf134jctdj79w.hover(), function (menu, simulatedEvent) {
          var item = simulatedEvent.event().item();
          Highlighting.highlight(menu, item);
        })
      ]),
      components: components,
      eventOrder: detail.eventOrder()
    });
  };
  var $_171ifz138jctdj7aj = { make: make$2 };

  var Menu = $_8lavxg10ejctdj6ty.composite({
    name: 'Menu',
    configFields: $_chjg63132jctdj79j.schema(),
    partFields: $_chjg63132jctdj79j.parts(),
    factory: $_171ifz138jctdj7aj.make
  });

  var preserve$2 = function (f, container) {
    var ownerDoc = $_83fh6gy3jctdj6ef.owner(container);
    var refocus = $_3yi9jcygjctdj6la.active(ownerDoc).bind(function (focused) {
      var hasFocus = function (elem) {
        return $_a6ax5bw8jctdj67h.eq(focused, elem);
      };
      return hasFocus(container) ? $_1k5gi0wajctdj67w.some(container) : $_as3f1tyijctdj6lg.descendant(container, hasFocus);
    });
    var result = f(container);
    refocus.each(function (oldFocus) {
      $_3yi9jcygjctdj6la.active(ownerDoc).filter(function (newFocus) {
        return $_a6ax5bw8jctdj67h.eq(newFocus, oldFocus);
      }).orThunk(function () {
        $_3yi9jcygjctdj6la.focus(oldFocus);
      });
    });
    return result;
  };
  var $_fdyqbe13djctdj7b5 = { preserve: preserve$2 };

  var set$7 = function (component, replaceConfig, replaceState, data) {
    $_9uszbdy1jctdj6e3.detachChildren(component);
    $_fdyqbe13djctdj7b5.preserve(function () {
      var children = $_85zw6hw9jctdj67p.map(data, component.getSystem().build);
      $_85zw6hw9jctdj67p.each(children, function (l) {
        $_9uszbdy1jctdj6e3.attach(component, l);
      });
    }, component.element());
  };
  var insert = function (component, replaceConfig, insertion, childSpec) {
    var child = component.getSystem().build(childSpec);
    $_9uszbdy1jctdj6e3.attachWith(component, child, insertion);
  };
  var append$2 = function (component, replaceConfig, replaceState, appendee) {
    insert(component, replaceConfig, $_2enstby2jctdj6ed.append, appendee);
  };
  var prepend$2 = function (component, replaceConfig, replaceState, prependee) {
    insert(component, replaceConfig, $_2enstby2jctdj6ed.prepend, prependee);
  };
  var remove$7 = function (component, replaceConfig, replaceState, removee) {
    var children = contents(component, replaceConfig);
    var foundChild = $_85zw6hw9jctdj67p.find(children, function (child) {
      return $_a6ax5bw8jctdj67h.eq(removee.element(), child.element());
    });
    foundChild.each($_9uszbdy1jctdj6e3.detach);
  };
  var contents = function (component, replaceConfig) {
    return component.components();
  };
  var $_ezgkkr13cjctdj7aw = {
    append: append$2,
    prepend: prepend$2,
    remove: remove$7,
    set: set$7,
    contents: contents
  };

  var Replacing = $_b61y2hw4jctdj66j.create({
    fields: [],
    name: 'replacing',
    apis: $_ezgkkr13cjctdj7aw
  });

  var transpose = function (obj) {
    return $_sbi53x0jctdj69s.tupleMap(obj, function (v, k) {
      return {
        k: v,
        v: k
      };
    });
  };
  var trace = function (items, byItem, byMenu, finish) {
    return $_41rzpex6jctdj6bg.readOptFrom(byMenu, finish).bind(function (triggerItem) {
      return $_41rzpex6jctdj6bg.readOptFrom(items, triggerItem).bind(function (triggerMenu) {
        var rest = trace(items, byItem, byMenu, triggerMenu);
        return $_1k5gi0wajctdj67w.some([triggerMenu].concat(rest));
      });
    }).getOr([]);
  };
  var generate$5 = function (menus, expansions) {
    var items = {};
    $_sbi53x0jctdj69s.each(menus, function (menuItems, menu) {
      $_85zw6hw9jctdj67p.each(menuItems, function (item) {
        items[item] = menu;
      });
    });
    var byItem = expansions;
    var byMenu = transpose(expansions);
    var menuPaths = $_sbi53x0jctdj69s.map(byMenu, function (triggerItem, submenu) {
      return [submenu].concat(trace(items, byItem, byMenu, submenu));
    });
    return $_sbi53x0jctdj69s.map(items, function (path) {
      return $_41rzpex6jctdj6bg.readOptFrom(menuPaths, path).getOr([path]);
    });
  };
  var $_9bk9li13gjctdj7cg = { generate: generate$5 };

  var LayeredState = function () {
    var expansions = Cell({});
    var menus = Cell({});
    var paths = Cell({});
    var primary = Cell($_1k5gi0wajctdj67w.none());
    var toItemValues = Cell($_nsetdwbjctdj67z.constant([]));
    var clear = function () {
      expansions.set({});
      menus.set({});
      paths.set({});
      primary.set($_1k5gi0wajctdj67w.none());
    };
    var isClear = function () {
      return primary.get().isNone();
    };
    var setContents = function (sPrimary, sMenus, sExpansions, sToItemValues) {
      primary.set($_1k5gi0wajctdj67w.some(sPrimary));
      expansions.set(sExpansions);
      menus.set(sMenus);
      toItemValues.set(sToItemValues);
      var menuValues = sToItemValues(sMenus);
      var sPaths = $_9bk9li13gjctdj7cg.generate(menuValues, sExpansions);
      paths.set(sPaths);
    };
    var expand = function (itemValue) {
      return $_41rzpex6jctdj6bg.readOptFrom(expansions.get(), itemValue).map(function (menu) {
        var current = $_41rzpex6jctdj6bg.readOptFrom(paths.get(), itemValue).getOr([]);
        return [menu].concat(current);
      });
    };
    var collapse = function (itemValue) {
      return $_41rzpex6jctdj6bg.readOptFrom(paths.get(), itemValue).bind(function (path) {
        return path.length > 1 ? $_1k5gi0wajctdj67w.some(path.slice(1)) : $_1k5gi0wajctdj67w.none();
      });
    };
    var refresh = function (itemValue) {
      return $_41rzpex6jctdj6bg.readOptFrom(paths.get(), itemValue);
    };
    var lookupMenu = function (menuValue) {
      return $_41rzpex6jctdj6bg.readOptFrom(menus.get(), menuValue);
    };
    var otherMenus = function (path) {
      var menuValues = toItemValues.get()(menus.get());
      return $_85zw6hw9jctdj67p.difference($_sbi53x0jctdj69s.keys(menuValues), path);
    };
    var getPrimary = function () {
      return primary.get().bind(lookupMenu);
    };
    var getMenus = function () {
      return menus.get();
    };
    return {
      setContents: setContents,
      expand: expand,
      refresh: refresh,
      collapse: collapse,
      lookupMenu: lookupMenu,
      otherMenus: otherMenus,
      getPrimary: getPrimary,
      getMenus: getMenus,
      clear: clear,
      isClear: isClear
    };
  };

  var make$3 = function (detail, rawUiSpec) {
    var buildMenus = function (container, menus) {
      return $_sbi53x0jctdj69s.map(menus, function (spec, name) {
        var data = Menu.sketch($_fwvrcwwyjctdj69p.deepMerge(spec, {
          value: name,
          items: spec.items,
          markers: $_41rzpex6jctdj6bg.narrow(rawUiSpec.markers, [
            'item',
            'selectedItem'
          ]),
          fakeFocus: detail.fakeFocus(),
          onHighlight: detail.onHighlight(),
          focusManager: detail.fakeFocus() ? $_al44jgzgjctdj6p9.highlights() : $_al44jgzgjctdj6p9.dom()
        }));
        return container.getSystem().build(data);
      });
    };
    var state = LayeredState();
    var setup = function (container) {
      var componentMap = buildMenus(container, detail.data().menus());
      state.setContents(detail.data().primary(), componentMap, detail.data().expansions(), function (sMenus) {
        return toMenuValues(container, sMenus);
      });
      return state.getPrimary();
    };
    var getItemValue = function (item) {
      return me.getValue(item).value;
    };
    var toMenuValues = function (container, sMenus) {
      return $_sbi53x0jctdj69s.map(detail.data().menus(), function (data, menuName) {
        return $_85zw6hw9jctdj67p.bind(data.items, function (item) {
          return item.type === 'separator' ? [] : [item.data.value];
        });
      });
    };
    var setActiveMenu = function (container, menu) {
      Highlighting.highlight(container, menu);
      Highlighting.getHighlighted(menu).orThunk(function () {
        return Highlighting.getFirst(menu);
      }).each(function (item) {
        $_axzm60wvjctdj69e.dispatch(container, item.element(), $_8rri5bwwjctdj69j.focusItem());
      });
    };
    var getMenus = function (state, menuValues) {
      return $_3dekh2yejctdj6l8.cat($_85zw6hw9jctdj67p.map(menuValues, state.lookupMenu));
    };
    var updateMenuPath = function (container, state, path) {
      return $_1k5gi0wajctdj67w.from(path[0]).bind(state.lookupMenu).map(function (activeMenu) {
        var rest = getMenus(state, path.slice(1));
        $_85zw6hw9jctdj67p.each(rest, function (r) {
          $_4vb8dhxujctdj6dm.add(r.element(), detail.markers().backgroundMenu());
        });
        if (!$_bi2sxwy7jctdj6kl.inBody(activeMenu.element())) {
          Replacing.append(container, $_2dgzqw12kjctdj75x.premade(activeMenu));
        }
        $_901pci12yjctdj799.remove(activeMenu.element(), [detail.markers().backgroundMenu()]);
        setActiveMenu(container, activeMenu);
        var others = getMenus(state, state.otherMenus(path));
        $_85zw6hw9jctdj67p.each(others, function (o) {
          $_901pci12yjctdj799.remove(o.element(), [detail.markers().backgroundMenu()]);
          if (!detail.stayInDom())
            Replacing.remove(container, o);
        });
        return activeMenu;
      });
    };
    var expandRight = function (container, item) {
      var value = getItemValue(item);
      return state.expand(value).bind(function (path) {
        $_1k5gi0wajctdj67w.from(path[0]).bind(state.lookupMenu).each(function (activeMenu) {
          if (!$_bi2sxwy7jctdj6kl.inBody(activeMenu.element())) {
            Replacing.append(container, $_2dgzqw12kjctdj75x.premade(activeMenu));
          }
          detail.onOpenSubmenu()(container, item, activeMenu);
          Highlighting.highlightFirst(activeMenu);
        });
        return updateMenuPath(container, state, path);
      });
    };
    var collapseLeft = function (container, item) {
      var value = getItemValue(item);
      return state.collapse(value).bind(function (path) {
        return updateMenuPath(container, state, path).map(function (activeMenu) {
          detail.onCollapseMenu()(container, item, activeMenu);
          return activeMenu;
        });
      });
    };
    var updateView = function (container, item) {
      var value = getItemValue(item);
      return state.refresh(value).bind(function (path) {
        return updateMenuPath(container, state, path);
      });
    };
    var onRight = function (container, item) {
      return $_dl0liazxjctdj6r1.inside(item.element()) ? $_1k5gi0wajctdj67w.none() : expandRight(container, item);
    };
    var onLeft = function (container, item) {
      return $_dl0liazxjctdj6r1.inside(item.element()) ? $_1k5gi0wajctdj67w.none() : collapseLeft(container, item);
    };
    var onEscape = function (container, item) {
      return collapseLeft(container, item).orThunk(function () {
        return detail.onEscape()(container, item);
      });
    };
    var keyOnItem = function (f) {
      return function (container, simulatedEvent) {
        return $_82w6dszmjctdj6pu.closest(simulatedEvent.getSource(), '.' + detail.markers().item()).bind(function (target) {
          return container.getSystem().getByDom(target).bind(function (item) {
            return f(container, item);
          });
        });
      };
    };
    var events = $_2lvgrhw6jctdj67b.derive([
      $_2lvgrhw6jctdj67b.run($_dg4udl139jctdj7ao.focus(), function (sandbox, simulatedEvent) {
        var menu = simulatedEvent.event().menu();
        Highlighting.highlight(sandbox, menu);
      }),
      $_2lvgrhw6jctdj67b.runOnExecute(function (sandbox, simulatedEvent) {
        var target = simulatedEvent.event().target();
        return sandbox.getSystem().getByDom(target).bind(function (item) {
          var itemValue = getItemValue(item);
          if (itemValue.indexOf('collapse-item') === 0) {
            return collapseLeft(sandbox, item);
          }
          return expandRight(sandbox, item).orThunk(function () {
            return detail.onExecute()(sandbox, item);
          });
        });
      }),
      $_2lvgrhw6jctdj67b.runOnAttached(function (container, simulatedEvent) {
        setup(container).each(function (primary) {
          Replacing.append(container, $_2dgzqw12kjctdj75x.premade(primary));
          if (detail.openImmediately()) {
            setActiveMenu(container, primary);
            detail.onOpenMenu()(container, primary);
          }
        });
      })
    ].concat(detail.navigateOnHover() ? [$_2lvgrhw6jctdj67b.run($_66iuzf134jctdj79w.hover(), function (sandbox, simulatedEvent) {
        var item = simulatedEvent.event().item();
        updateView(sandbox, item);
        expandRight(sandbox, item);
        detail.onHover()(sandbox, item);
      })] : []));
    var collapseMenuApi = function (container) {
      Highlighting.getHighlighted(container).each(function (currentMenu) {
        Highlighting.getHighlighted(currentMenu).each(function (currentItem) {
          collapseLeft(container, currentItem);
        });
      });
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_fwvrcwwyjctdj69p.deepMerge($_b61y2hw4jctdj66j.derive([
        Keying.config({
          mode: 'special',
          onRight: keyOnItem(onRight),
          onLeft: keyOnItem(onLeft),
          onEscape: keyOnItem(onEscape),
          focusIn: function (container, keyInfo) {
            state.getPrimary().each(function (primary) {
              $_axzm60wvjctdj69e.dispatch(container, primary.element(), $_8rri5bwwjctdj69j.focusItem());
            });
          }
        }),
        Highlighting.config({
          highlightClass: detail.markers().selectedMenu(),
          itemClass: detail.markers().menu()
        }),
        Composing.config({
          find: function (container) {
            return Highlighting.getHighlighted(container);
          }
        }),
        Replacing.config({})
      ]), $_accgp10djctdj6tt.get(detail.tmenuBehaviours())),
      eventOrder: detail.eventOrder(),
      apis: { collapseMenu: collapseMenuApi },
      events: events
    };
  };
  var $_79vefp13ejctdj7bk = {
    make: make$3,
    collapseItem: $_nsetdwbjctdj67z.constant('collapse-item')
  };

  var tieredData = function (primary, menus, expansions) {
    return {
      primary: primary,
      menus: menus,
      expansions: expansions
    };
  };
  var singleData = function (name, menu) {
    return {
      primary: name,
      menus: $_41rzpex6jctdj6bg.wrap(name, menu),
      expansions: {}
    };
  };
  var collapseItem = function (text) {
    return {
      value: $_7dzy8310gjctdj6ub.generate($_79vefp13ejctdj7bk.collapseItem()),
      text: text
    };
  };
  var TieredMenu = $_8lavxg10ejctdj6ty.single({
    name: 'TieredMenu',
    configFields: [
      $_37rg8yytjctdj6ml.onStrictKeyboardHandler('onExecute'),
      $_37rg8yytjctdj6ml.onStrictKeyboardHandler('onEscape'),
      $_37rg8yytjctdj6ml.onStrictHandler('onOpenMenu'),
      $_37rg8yytjctdj6ml.onStrictHandler('onOpenSubmenu'),
      $_37rg8yytjctdj6ml.onHandler('onCollapseMenu'),
      $_e1v8vrx2jctdj6ag.defaulted('openImmediately', true),
      $_e1v8vrx2jctdj6ag.strictObjOf('data', [
        $_e1v8vrx2jctdj6ag.strict('primary'),
        $_e1v8vrx2jctdj6ag.strict('menus'),
        $_e1v8vrx2jctdj6ag.strict('expansions')
      ]),
      $_e1v8vrx2jctdj6ag.defaulted('fakeFocus', false),
      $_37rg8yytjctdj6ml.onHandler('onHighlight'),
      $_37rg8yytjctdj6ml.onHandler('onHover'),
      $_37rg8yytjctdj6ml.tieredMenuMarkers(),
      $_e1v8vrx2jctdj6ag.strict('dom'),
      $_e1v8vrx2jctdj6ag.defaulted('navigateOnHover', true),
      $_e1v8vrx2jctdj6ag.defaulted('stayInDom', false),
      $_accgp10djctdj6tt.field('tmenuBehaviours', [
        Keying,
        Highlighting,
        Composing,
        Replacing
      ]),
      $_e1v8vrx2jctdj6ag.defaulted('eventOrder', {})
    ],
    apis: {
      collapseMenu: function (apis, tmenu) {
        apis.collapseMenu(tmenu);
      }
    },
    factory: $_79vefp13ejctdj7bk.make,
    extraApis: {
      tieredData: tieredData,
      singleData: singleData,
      collapseItem: collapseItem
    }
  });

  var scrollable = $_79dnpgz1jctdj6nm.resolve('scrollable');
  var register$1 = function (element) {
    $_4vb8dhxujctdj6dm.add(element, scrollable);
  };
  var deregister = function (element) {
    $_4vb8dhxujctdj6dm.remove(element, scrollable);
  };
  var $_1wciqt13hjctdj7cp = {
    register: register$1,
    deregister: deregister,
    scrollable: $_nsetdwbjctdj67z.constant(scrollable)
  };

  var getValue$4 = function (item) {
    return $_41rzpex6jctdj6bg.readOptFrom(item, 'format').getOr(item.title);
  };
  var convert$1 = function (formats, memMenuThunk) {
    var mainMenu = makeMenu('Styles', [].concat($_85zw6hw9jctdj67p.map(formats.items, function (k) {
      return makeItem(getValue$4(k), k.title, k.isSelected(), k.getPreview(), $_41rzpex6jctdj6bg.hasKey(formats.expansions, getValue$4(k)));
    })), memMenuThunk, false);
    var submenus = $_sbi53x0jctdj69s.map(formats.menus, function (menuItems, menuName) {
      var items = $_85zw6hw9jctdj67p.map(menuItems, function (item) {
        return makeItem(getValue$4(item), item.title, item.isSelected !== undefined ? item.isSelected() : false, item.getPreview !== undefined ? item.getPreview() : '', $_41rzpex6jctdj6bg.hasKey(formats.expansions, getValue$4(item)));
      });
      return makeMenu(menuName, items, memMenuThunk, true);
    });
    var menus = $_fwvrcwwyjctdj69p.deepMerge(submenus, $_41rzpex6jctdj6bg.wrap('styles', mainMenu));
    var tmenu = TieredMenu.tieredData('styles', menus, formats.expansions);
    return { tmenu: tmenu };
  };
  var makeItem = function (value, text, selected, preview, isMenu) {
    return {
      data: {
        value: value,
        text: text
      },
      type: 'item',
      dom: {
        tag: 'div',
        classes: isMenu ? [$_79dnpgz1jctdj6nm.resolve('styles-item-is-menu')] : []
      },
      toggling: {
        toggleOnExecute: false,
        toggleClass: $_79dnpgz1jctdj6nm.resolve('format-matches'),
        selected: selected
      },
      itemBehaviours: $_b61y2hw4jctdj66j.derive(isMenu ? [] : [$_bd3cf7z0jctdj6nk.format(value, function (comp, status) {
          var toggle = status ? Toggling.on : Toggling.off;
          toggle(comp);
        })]),
      components: [{
          dom: {
            tag: 'div',
            attributes: { style: preview },
            innerHtml: text
          }
        }]
    };
  };
  var makeMenu = function (value, items, memMenuThunk, collapsable) {
    return {
      value: value,
      dom: { tag: 'div' },
      components: [
        Button.sketch({
          dom: {
            tag: 'div',
            classes: [$_79dnpgz1jctdj6nm.resolve('styles-collapser')]
          },
          components: collapsable ? [
            {
              dom: {
                tag: 'span',
                classes: [$_79dnpgz1jctdj6nm.resolve('styles-collapse-icon')]
              }
            },
            $_2dgzqw12kjctdj75x.text(value)
          ] : [$_2dgzqw12kjctdj75x.text(value)],
          action: function (item) {
            if (collapsable) {
              var comp = memMenuThunk().get(item);
              TieredMenu.collapseMenu(comp);
            }
          }
        }),
        {
          dom: {
            tag: 'div',
            classes: [$_79dnpgz1jctdj6nm.resolve('styles-menu-items-container')]
          },
          components: [Menu.parts().items({})],
          behaviours: $_b61y2hw4jctdj66j.derive([$_8fkfqe11sjctdj71q.config('adhoc-scrollable-menu', [
              $_2lvgrhw6jctdj67b.runOnAttached(function (component, simulatedEvent) {
                $_c7wjf9zsjctdj6qf.set(component.element(), 'overflow-y', 'auto');
                $_c7wjf9zsjctdj6qf.set(component.element(), '-webkit-overflow-scrolling', 'touch');
                $_1wciqt13hjctdj7cp.register(component.element());
              }),
              $_2lvgrhw6jctdj67b.runOnDetached(function (component) {
                $_c7wjf9zsjctdj6qf.remove(component.element(), 'overflow-y');
                $_c7wjf9zsjctdj6qf.remove(component.element(), '-webkit-overflow-scrolling');
                $_1wciqt13hjctdj7cp.deregister(component.element());
              })
            ])])
        }
      ],
      items: items,
      menuBehaviours: $_b61y2hw4jctdj66j.derive([Transitioning.config({
          initialState: 'after',
          routes: Transitioning.createTristate('before', 'current', 'after', {
            transition: {
              property: 'transform',
              transitionClass: 'transitioning'
            }
          })
        })])
    };
  };
  var sketch$9 = function (settings) {
    var dataset = convert$1(settings.formats, function () {
      return memMenu;
    });
    var memMenu = $_fcnx6311ejctdj6zx.record(TieredMenu.sketch({
      dom: {
        tag: 'div',
        classes: [$_79dnpgz1jctdj6nm.resolve('styles-menu')]
      },
      components: [],
      fakeFocus: true,
      stayInDom: true,
      onExecute: function (tmenu, item) {
        var v = me.getValue(item);
        settings.handle(item, v.value);
      },
      onEscape: function () {
      },
      onOpenMenu: function (container, menu) {
        var w = $_dzu4he117jctdj6yu.get(container.element());
        $_dzu4he117jctdj6yu.set(menu.element(), w);
        Transitioning.jumpTo(menu, 'current');
      },
      onOpenSubmenu: function (container, item, submenu) {
        var w = $_dzu4he117jctdj6yu.get(container.element());
        var menu = $_82w6dszmjctdj6pu.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var menuComp = container.getSystem().getByDom(menu).getOrDie();
        $_dzu4he117jctdj6yu.set(submenu.element(), w);
        Transitioning.progressTo(menuComp, 'before');
        Transitioning.jumpTo(submenu, 'after');
        Transitioning.progressTo(submenu, 'current');
      },
      onCollapseMenu: function (container, item, menu) {
        var submenu = $_82w6dszmjctdj6pu.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var submenuComp = container.getSystem().getByDom(submenu).getOrDie();
        Transitioning.progressTo(submenuComp, 'after');
        Transitioning.progressTo(menu, 'current');
      },
      navigateOnHover: false,
      openImmediately: true,
      data: dataset.tmenu,
      markers: {
        backgroundMenu: $_79dnpgz1jctdj6nm.resolve('styles-background-menu'),
        menu: $_79dnpgz1jctdj6nm.resolve('styles-menu'),
        selectedMenu: $_79dnpgz1jctdj6nm.resolve('styles-selected-menu'),
        item: $_79dnpgz1jctdj6nm.resolve('styles-item'),
        selectedItem: $_79dnpgz1jctdj6nm.resolve('styles-selected-item')
      }
    }));
    return memMenu.asSpec();
  };
  var $_19lx3j12fjctdj74n = { sketch: sketch$9 };

  var getFromExpandingItem = function (item) {
    var newItem = $_fwvrcwwyjctdj69p.deepMerge($_41rzpex6jctdj6bg.exclude(item, ['items']), { menu: true });
    var rest = expand(item.items);
    var newMenus = $_fwvrcwwyjctdj69p.deepMerge(rest.menus, $_41rzpex6jctdj6bg.wrap(item.title, rest.items));
    var newExpansions = $_fwvrcwwyjctdj69p.deepMerge(rest.expansions, $_41rzpex6jctdj6bg.wrap(item.title, item.title));
    return {
      item: newItem,
      menus: newMenus,
      expansions: newExpansions
    };
  };
  var getFromItem = function (item) {
    return $_41rzpex6jctdj6bg.hasKey(item, 'items') ? getFromExpandingItem(item) : {
      item: item,
      menus: {},
      expansions: {}
    };
  };
  var expand = function (items) {
    return $_85zw6hw9jctdj67p.foldr(items, function (acc, item) {
      var newData = getFromItem(item);
      return {
        menus: $_fwvrcwwyjctdj69p.deepMerge(acc.menus, newData.menus),
        items: [newData.item].concat(acc.items),
        expansions: $_fwvrcwwyjctdj69p.deepMerge(acc.expansions, newData.expansions)
      };
    }, {
      menus: {},
      expansions: {},
      items: []
    });
  };
  var $_65dyu13ijctdj7cs = { expand: expand };

  var register = function (editor, settings) {
    var isSelectedFor = function (format) {
      return function () {
        return editor.formatter.match(format);
      };
    };
    var getPreview = function (format) {
      return function () {
        var styles = editor.formatter.getCssText(format);
        return styles;
      };
    };
    var enrichSupported = function (item) {
      return $_fwvrcwwyjctdj69p.deepMerge(item, {
        isSelected: isSelectedFor(item.format),
        getPreview: getPreview(item.format)
      });
    };
    var enrichMenu = function (item) {
      return $_fwvrcwwyjctdj69p.deepMerge(item, {
        isSelected: $_nsetdwbjctdj67z.constant(false),
        getPreview: $_nsetdwbjctdj67z.constant('')
      });
    };
    var enrichCustom = function (item) {
      var formatName = $_7dzy8310gjctdj6ub.generate(item.title);
      var newItem = $_fwvrcwwyjctdj69p.deepMerge(item, {
        format: formatName,
        isSelected: isSelectedFor(formatName),
        getPreview: getPreview(formatName)
      });
      editor.formatter.register(formatName, newItem);
      return newItem;
    };
    var formats = $_41rzpex6jctdj6bg.readOptFrom(settings, 'style_formats').getOr(DefaultStyleFormats);
    var doEnrich = function (items) {
      return $_85zw6hw9jctdj67p.map(items, function (item) {
        if ($_41rzpex6jctdj6bg.hasKey(item, 'items')) {
          var newItems = doEnrich(item.items);
          return $_fwvrcwwyjctdj69p.deepMerge(enrichMenu(item), { items: newItems });
        } else if ($_41rzpex6jctdj6bg.hasKey(item, 'format')) {
          return enrichSupported(item);
        } else {
          return enrichCustom(item);
        }
      });
    };
    return doEnrich(formats);
  };
  var prune = function (editor, formats) {
    var doPrune = function (items) {
      return $_85zw6hw9jctdj67p.bind(items, function (item) {
        if (item.items !== undefined) {
          var newItems = doPrune(item.items);
          return newItems.length > 0 ? [item] : [];
        } else {
          var keep = $_41rzpex6jctdj6bg.hasKey(item, 'format') ? editor.formatter.canApply(item.format) : true;
          return keep ? [item] : [];
        }
      });
    };
    var prunedItems = doPrune(formats);
    return $_65dyu13ijctdj7cs.expand(prunedItems);
  };
  var ui = function (editor, formats, onDone) {
    var pruned = prune(editor, formats);
    return $_19lx3j12fjctdj74n.sketch({
      formats: pruned,
      handle: function (item, value) {
        editor.undoManager.transact(function () {
          if (Toggling.isOn(item)) {
            editor.formatter.remove(value);
          } else {
            editor.formatter.apply(value);
          }
        });
        onDone();
      }
    });
  };
  var $_cheodt12djctdj748 = {
    register: register,
    ui: ui
  };

  var defaults = [
    'undo',
    'bold',
    'italic',
    'link',
    'image',
    'bullist',
    'styleselect'
  ];
  var extract$1 = function (rawToolbar) {
    var toolbar = rawToolbar.replace(/\|/g, ' ').trim();
    return toolbar.length > 0 ? toolbar.split(/\s+/) : [];
  };
  var identifyFromArray = function (toolbar) {
    return $_85zw6hw9jctdj67p.bind(toolbar, function (item) {
      return $_1lp13rwzjctdj69r.isArray(item) ? identifyFromArray(item) : extract$1(item);
    });
  };
  var identify = function (settings) {
    var toolbar = settings.toolbar !== undefined ? settings.toolbar : defaults;
    return $_1lp13rwzjctdj69r.isArray(toolbar) ? identifyFromArray(toolbar) : extract$1(toolbar);
  };
  var setup = function (realm, editor) {
    var commandSketch = function (name) {
      return function () {
        return $_2fvhv0z2jctdj6no.forToolbarCommand(editor, name);
      };
    };
    var stateCommandSketch = function (name) {
      return function () {
        return $_2fvhv0z2jctdj6no.forToolbarStateCommand(editor, name);
      };
    };
    var actionSketch = function (name, query, action) {
      return function () {
        return $_2fvhv0z2jctdj6no.forToolbarStateAction(editor, name, query, action);
      };
    };
    var undo = commandSketch('undo');
    var redo = commandSketch('redo');
    var bold = stateCommandSketch('bold');
    var italic = stateCommandSketch('italic');
    var underline = stateCommandSketch('underline');
    var removeformat = commandSketch('removeformat');
    var link = function () {
      return $_4q5gkt11ojctdj70s.sketch(realm, editor);
    };
    var unlink = actionSketch('unlink', 'link', function () {
      editor.execCommand('unlink', null, false);
    });
    var image = function () {
      return $_bdr0by11djctdj6zp.sketch(editor);
    };
    var bullist = actionSketch('unordered-list', 'ul', function () {
      editor.execCommand('InsertUnorderedList', null, false);
    });
    var numlist = actionSketch('ordered-list', 'ol', function () {
      editor.execCommand('InsertOrderedList', null, false);
    });
    var fontsizeselect = function () {
      return $_e63t7y119jctdj6yx.sketch(realm, editor);
    };
    var forecolor = function () {
      return $_ci3lbb10sjctdj6wv.sketch(realm, editor);
    };
    var styleFormats = $_cheodt12djctdj748.register(editor, editor.settings);
    var styleFormatsMenu = function () {
      return $_cheodt12djctdj748.ui(editor, styleFormats, function () {
        editor.fire('scrollIntoView');
      });
    };
    var styleselect = function () {
      return $_2fvhv0z2jctdj6no.forToolbar('style-formats', function (button) {
        editor.fire('toReading');
        realm.dropup().appear(styleFormatsMenu, Toggling.on, button);
      }, $_b61y2hw4jctdj66j.derive([
        Toggling.config({
          toggleClass: $_79dnpgz1jctdj6nm.resolve('toolbar-button-selected'),
          toggleOnExecute: false,
          aria: { mode: 'pressed' }
        }),
        Receiving.config({
          channels: $_41rzpex6jctdj6bg.wrapAll([
            $_bd3cf7z0jctdj6nk.receive($_7zq7xmyojctdj6lt.orientationChanged(), Toggling.off),
            $_bd3cf7z0jctdj6nk.receive($_7zq7xmyojctdj6lt.dropupDismissed(), Toggling.off)
          ])
        })
      ]));
    };
    var feature = function (prereq, sketch) {
      return {
        isSupported: function () {
          return prereq.forall(function (p) {
            return $_41rzpex6jctdj6bg.hasKey(editor.buttons, p);
          });
        },
        sketch: sketch
      };
    };
    return {
      undo: feature($_1k5gi0wajctdj67w.none(), undo),
      redo: feature($_1k5gi0wajctdj67w.none(), redo),
      bold: feature($_1k5gi0wajctdj67w.none(), bold),
      italic: feature($_1k5gi0wajctdj67w.none(), italic),
      underline: feature($_1k5gi0wajctdj67w.none(), underline),
      removeformat: feature($_1k5gi0wajctdj67w.none(), removeformat),
      link: feature($_1k5gi0wajctdj67w.none(), link),
      unlink: feature($_1k5gi0wajctdj67w.none(), unlink),
      image: feature($_1k5gi0wajctdj67w.none(), image),
      bullist: feature($_1k5gi0wajctdj67w.some('bullist'), bullist),
      numlist: feature($_1k5gi0wajctdj67w.some('numlist'), numlist),
      fontsizeselect: feature($_1k5gi0wajctdj67w.none(), fontsizeselect),
      forecolor: feature($_1k5gi0wajctdj67w.none(), forecolor),
      styleselect: feature($_1k5gi0wajctdj67w.none(), styleselect)
    };
  };
  var detect$4 = function (settings, features) {
    var itemNames = identify(settings);
    var present = {};
    return $_85zw6hw9jctdj67p.bind(itemNames, function (iName) {
      var r = !$_41rzpex6jctdj6bg.hasKey(present, iName) && $_41rzpex6jctdj6bg.hasKey(features, iName) && features[iName].isSupported() ? [features[iName].sketch()] : [];
      present[iName] = true;
      return r;
    });
  };
  var $_53282eypjctdj6lv = {
    identify: identify,
    setup: setup,
    detect: detect$4
  };

  var mkEvent = function (target, x, y, stop, prevent, kill, raw) {
    return {
      'target': $_nsetdwbjctdj67z.constant(target),
      'x': $_nsetdwbjctdj67z.constant(x),
      'y': $_nsetdwbjctdj67z.constant(y),
      'stop': stop,
      'prevent': prevent,
      'kill': kill,
      'raw': $_nsetdwbjctdj67z.constant(raw)
    };
  };
  var handle = function (filter, handler) {
    return function (rawEvent) {
      if (!filter(rawEvent))
        return;
      var target = $_bvayi3wtjctdj69a.fromDom(rawEvent.target);
      var stop = function () {
        rawEvent.stopPropagation();
      };
      var prevent = function () {
        rawEvent.preventDefault();
      };
      var kill = $_nsetdwbjctdj67z.compose(prevent, stop);
      var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
      handler(evt);
    };
  };
  var binder = function (element, event, filter, handler, useCapture) {
    var wrapped = handle(filter, handler);
    element.dom().addEventListener(event, wrapped, useCapture);
    return { unbind: $_nsetdwbjctdj67z.curry(unbind, element, event, wrapped, useCapture) };
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
  var $_cwnzdt13ljctdj7d5 = {
    bind: bind$2,
    capture: capture$1
  };

  var filter$1 = $_nsetdwbjctdj67z.constant(true);
  var bind$1 = function (element, event, handler) {
    return $_cwnzdt13ljctdj7d5.bind(element, event, filter$1, handler);
  };
  var capture = function (element, event, handler) {
    return $_cwnzdt13ljctdj7d5.capture(element, event, filter$1, handler);
  };
  var $_5nc70r13kjctdj7d3 = {
    bind: bind$1,
    capture: capture
  };

  var INTERVAL = 50;
  var INSURANCE = 1000 / INTERVAL;
  var get$11 = function (outerWindow) {
    var isPortrait = outerWindow.matchMedia('(orientation: portrait)').matches;
    return { isPortrait: $_nsetdwbjctdj67z.constant(isPortrait) };
  };
  var getActualWidth = function (outerWindow) {
    var isIos = $_3owkqnwgjctdj687.detect().os.isiOS();
    var isPortrait = get$11(outerWindow).isPortrait();
    return isIos && !isPortrait ? outerWindow.screen.height : outerWindow.screen.width;
  };
  var onChange = function (outerWindow, listeners) {
    var win = $_bvayi3wtjctdj69a.fromDom(outerWindow);
    var poller = null;
    var change = function () {
      clearInterval(poller);
      var orientation = get$11(outerWindow);
      listeners.onChange(orientation);
      onAdjustment(function () {
        listeners.onReady(orientation);
      });
    };
    var orientationHandle = $_5nc70r13kjctdj7d3.bind(win, 'orientationchange', change);
    var onAdjustment = function (f) {
      clearInterval(poller);
      var flag = outerWindow.innerHeight;
      var insurance = 0;
      poller = setInterval(function () {
        if (flag !== outerWindow.innerHeight) {
          clearInterval(poller);
          f($_1k5gi0wajctdj67w.some(outerWindow.innerHeight));
        } else if (insurance > INSURANCE) {
          clearInterval(poller);
          f($_1k5gi0wajctdj67w.none());
        }
        insurance++;
      }, INTERVAL);
    };
    var destroy = function () {
      orientationHandle.unbind();
    };
    return {
      onAdjustment: onAdjustment,
      destroy: destroy
    };
  };
  var $_erf7kp13jjctdj7cw = {
    get: get$11,
    onChange: onChange,
    getActualWidth: getActualWidth
  };

  var DelayedFunction = function (fun, delay) {
    var ref = null;
    var schedule = function () {
      var args = arguments;
      ref = setTimeout(function () {
        fun.apply(null, args);
        ref = null;
      }, delay);
    };
    var cancel = function () {
      if (ref !== null) {
        clearTimeout(ref);
        ref = null;
      }
    };
    return {
      cancel: cancel,
      schedule: schedule
    };
  };

  var SIGNIFICANT_MOVE = 5;
  var LONGPRESS_DELAY = 400;
  var getTouch = function (event) {
    if (event.raw().touches === undefined || event.raw().touches.length !== 1)
      return $_1k5gi0wajctdj67w.none();
    return $_1k5gi0wajctdj67w.some(event.raw().touches[0]);
  };
  var isFarEnough = function (touch, data) {
    var distX = Math.abs(touch.clientX - data.x());
    var distY = Math.abs(touch.clientY - data.y());
    return distX > SIGNIFICANT_MOVE || distY > SIGNIFICANT_MOVE;
  };
  var monitor$1 = function (settings) {
    var startData = Cell($_1k5gi0wajctdj67w.none());
    var longpress = DelayedFunction(function (event) {
      startData.set($_1k5gi0wajctdj67w.none());
      settings.triggerEvent($_8rri5bwwjctdj69j.longpress(), event);
    }, LONGPRESS_DELAY);
    var handleTouchstart = function (event) {
      getTouch(event).each(function (touch) {
        longpress.cancel();
        var data = {
          x: $_nsetdwbjctdj67z.constant(touch.clientX),
          y: $_nsetdwbjctdj67z.constant(touch.clientY),
          target: event.target
        };
        longpress.schedule(data);
        startData.set($_1k5gi0wajctdj67w.some(data));
      });
      return $_1k5gi0wajctdj67w.none();
    };
    var handleTouchmove = function (event) {
      longpress.cancel();
      getTouch(event).each(function (touch) {
        startData.get().each(function (data) {
          if (isFarEnough(touch, data))
            startData.set($_1k5gi0wajctdj67w.none());
        });
      });
      return $_1k5gi0wajctdj67w.none();
    };
    var handleTouchend = function (event) {
      longpress.cancel();
      var isSame = function (data) {
        return $_a6ax5bw8jctdj67h.eq(data.target(), event.target());
      };
      return startData.get().filter(isSame).map(function (data) {
        return settings.triggerEvent($_8rri5bwwjctdj69j.tap(), event);
      });
    };
    var handlers = $_41rzpex6jctdj6bg.wrapAll([
      {
        key: $_3mycfwxjctdj69n.touchstart(),
        value: handleTouchstart
      },
      {
        key: $_3mycfwxjctdj69n.touchmove(),
        value: handleTouchmove
      },
      {
        key: $_3mycfwxjctdj69n.touchend(),
        value: handleTouchend
      }
    ]);
    var fireIfReady = function (event, type) {
      return $_41rzpex6jctdj6bg.readOptFrom(handlers, type).bind(function (handler) {
        return handler(event);
      });
    };
    return { fireIfReady: fireIfReady };
  };
  var $_3xl4lb13rjctdj7e6 = { monitor: monitor$1 };

  var monitor = function (editorApi) {
    var tapEvent = $_3xl4lb13rjctdj7e6.monitor({
      triggerEvent: function (type, evt) {
        editorApi.onTapContent(evt);
      }
    });
    var onTouchend = function () {
      return $_5nc70r13kjctdj7d3.bind(editorApi.body(), 'touchend', function (evt) {
        tapEvent.fireIfReady(evt, 'touchend');
      });
    };
    var onTouchmove = function () {
      return $_5nc70r13kjctdj7d3.bind(editorApi.body(), 'touchmove', function (evt) {
        tapEvent.fireIfReady(evt, 'touchmove');
      });
    };
    var fireTouchstart = function (evt) {
      tapEvent.fireIfReady(evt, 'touchstart');
    };
    return {
      fireTouchstart: fireTouchstart,
      onTouchend: onTouchend,
      onTouchmove: onTouchmove
    };
  };
  var $_2selrm13qjctdj7e2 = { monitor: monitor };

  var isAndroid6 = $_3owkqnwgjctdj687.detect().os.version.major >= 6;
  var initEvents = function (editorApi, toolstrip, alloy) {
    var tapping = $_2selrm13qjctdj7e2.monitor(editorApi);
    var outerDoc = $_83fh6gy3jctdj6ef.owner(toolstrip);
    var isRanged = function (sel) {
      return !$_a6ax5bw8jctdj67h.eq(sel.start(), sel.finish()) || sel.soffset() !== sel.foffset();
    };
    var hasRangeInUi = function () {
      return $_3yi9jcygjctdj6la.active(outerDoc).filter(function (input) {
        return $_13f4i6xxjctdj6dv.name(input) === 'input';
      }).exists(function (input) {
        return input.dom().selectionStart !== input.dom().selectionEnd;
      });
    };
    var updateMargin = function () {
      var rangeInContent = editorApi.doc().dom().hasFocus() && editorApi.getSelection().exists(isRanged);
      alloy.getByDom(toolstrip).each((rangeInContent || hasRangeInUi()) === true ? Toggling.on : Toggling.off);
    };
    var listeners = [
      $_5nc70r13kjctdj7d3.bind(editorApi.body(), 'touchstart', function (evt) {
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_5nc70r13kjctdj7d3.bind(toolstrip, 'touchstart', function (evt) {
        editorApi.onTouchToolstrip();
      }),
      editorApi.onToReading(function () {
        $_3yi9jcygjctdj6la.blur(editorApi.body());
      }),
      editorApi.onToEditing($_nsetdwbjctdj67z.noop),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        editorApi.getCursorBox().each(function (bounds) {
          var cWin = editorApi.win();
          var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
          var cScrollBy = isOutside ? bounds.bottom() - cWin.innerHeight + 50 : 0;
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      })
    ].concat(isAndroid6 === true ? [] : [
      $_5nc70r13kjctdj7d3.bind($_bvayi3wtjctdj69a.fromDom(editorApi.win()), 'blur', function () {
        alloy.getByDom(toolstrip).each(Toggling.off);
      }),
      $_5nc70r13kjctdj7d3.bind(outerDoc, 'select', updateMargin),
      $_5nc70r13kjctdj7d3.bind(editorApi.doc(), 'selectionchange', updateMargin)
    ]);
    var destroy = function () {
      $_85zw6hw9jctdj67p.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_1c1inf13pjctdj7dn = { initEvents: initEvents };

  var autocompleteHack = function () {
    return function (f) {
      setTimeout(function () {
        f();
      }, 0);
    };
  };
  var resume = function (cWin) {
    cWin.focus();
    var iBody = $_bvayi3wtjctdj69a.fromDom(cWin.document.body);
    var inInput = $_3yi9jcygjctdj6la.active().exists(function (elem) {
      return $_85zw6hw9jctdj67p.contains([
        'input',
        'textarea'
      ], $_13f4i6xxjctdj6dv.name(elem));
    });
    var transaction = inInput ? autocompleteHack() : $_nsetdwbjctdj67z.apply;
    transaction(function () {
      $_3yi9jcygjctdj6la.active().each($_3yi9jcygjctdj6la.blur);
      $_3yi9jcygjctdj6la.focus(iBody);
    });
  };
  var $_bgfgap13ujctdj7em = { resume: resume };

  var safeParse = function (element, attribute) {
    var parsed = parseInt($_ftckpcxwjctdj6dp.get(element, attribute), 10);
    return isNaN(parsed) ? 0 : parsed;
  };
  var $_65n5i313vjctdj7es = { safeParse: safeParse };

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
        return $_1k5gi0wajctdj67w.none();
      }
    };
    var getOptionSafe = function (element) {
      return is(element) ? $_1k5gi0wajctdj67w.from(element.dom().nodeValue) : $_1k5gi0wajctdj67w.none();
    };
    var browser = $_3owkqnwgjctdj687.detect().browser;
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

  var api$3 = NodeValue($_13f4i6xxjctdj6dv.isText, 'text');
  var get$12 = function (element) {
    return api$3.get(element);
  };
  var getOption = function (element) {
    return api$3.getOption(element);
  };
  var set$8 = function (element, value) {
    api$3.set(element, value);
  };
  var $_1mozsf13yjctdj7f4 = {
    get: get$12,
    getOption: getOption,
    set: set$8
  };

  var getEnd = function (element) {
    return $_13f4i6xxjctdj6dv.name(element) === 'img' ? 1 : $_1mozsf13yjctdj7f4.getOption(element).fold(function () {
      return $_83fh6gy3jctdj6ef.children(element).length;
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
    return $_1mozsf13yjctdj7f4.getOption(el).filter(function (text) {
      return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
    }).isSome();
  };
  var elementsWithCursorPosition = [
    'img',
    'br'
  ];
  var isCursorPosition = function (elem) {
    var hasCursorPosition = isTextNodeWithCursorPosition(elem);
    return hasCursorPosition || $_85zw6hw9jctdj67p.contains(elementsWithCursorPosition, $_13f4i6xxjctdj6dv.name(elem));
  };
  var $_ag88f813xjctdj7f1 = {
    getEnd: getEnd,
    isEnd: isEnd,
    isStart: isStart,
    isCursorPosition: isCursorPosition
  };

  var adt$4 = $_e0y7kwx4jctdj6ap.generate([
    { 'before': ['element'] },
    {
      'on': [
        'element',
        'offset'
      ]
    },
    { after: ['element'] }
  ]);
  var cata = function (subject, onBefore, onOn, onAfter) {
    return subject.fold(onBefore, onOn, onAfter);
  };
  var getStart$1 = function (situ) {
    return situ.fold($_nsetdwbjctdj67z.identity, $_nsetdwbjctdj67z.identity, $_nsetdwbjctdj67z.identity);
  };
  var $_61g61r141jctdj7fd = {
    before: adt$4.before,
    on: adt$4.on,
    after: adt$4.after,
    cata: cata,
    getStart: getStart$1
  };

  var type$1 = $_e0y7kwx4jctdj6ap.generate([
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
  var range$1 = $_es1bl5xmjctdj6d5.immutable('start', 'soffset', 'finish', 'foffset');
  var exactFromRange = function (simRange) {
    return type$1.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
  };
  var getStart = function (selection) {
    return selection.match({
      domRange: function (rng) {
        return $_bvayi3wtjctdj69a.fromDom(rng.startContainer);
      },
      relative: function (startSitu, finishSitu) {
        return $_61g61r141jctdj7fd.getStart(startSitu);
      },
      exact: function (start, soffset, finish, foffset) {
        return start;
      }
    });
  };
  var getWin = function (selection) {
    var start = getStart(selection);
    return $_83fh6gy3jctdj6ef.defaultView(start);
  };
  var $_8vi7z4140jctdj7f9 = {
    domRange: type$1.domRange,
    relative: type$1.relative,
    exact: type$1.exact,
    exactFromRange: exactFromRange,
    range: range$1,
    getWin: getWin
  };

  var makeRange = function (start, soffset, finish, foffset) {
    var doc = $_83fh6gy3jctdj6ef.owner(start);
    var rng = doc.dom().createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var commonAncestorContainer = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    return $_bvayi3wtjctdj69a.fromDom(r.commonAncestorContainer);
  };
  var after$2 = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    var same = $_a6ax5bw8jctdj67h.eq(start, finish) && soffset === foffset;
    return r.collapsed && !same;
  };
  var $_4sg9wy143jctdj7fm = {
    after: after$2,
    commonAncestorContainer: commonAncestorContainer
  };

  var fromElements = function (elements, scope) {
    var doc = scope || document;
    var fragment = doc.createDocumentFragment();
    $_85zw6hw9jctdj67p.each(elements, function (element) {
      fragment.appendChild(element.dom());
    });
    return $_bvayi3wtjctdj69a.fromDom(fragment);
  };
  var $_508ygn144jctdj7fn = { fromElements: fromElements };

  var selectNodeContents = function (win, element) {
    var rng = win.document.createRange();
    selectNodeContentsUsing(rng, element);
    return rng;
  };
  var selectNodeContentsUsing = function (rng, element) {
    rng.selectNodeContents(element.dom());
  };
  var isWithin = function (outerRange, innerRange) {
    return innerRange.compareBoundaryPoints(outerRange.END_TO_START, outerRange) < 1 && innerRange.compareBoundaryPoints(outerRange.START_TO_END, outerRange) > -1;
  };
  var create$5 = function (win) {
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
    return $_bvayi3wtjctdj69a.fromDom(fragment);
  };
  var toRect$1 = function (rect) {
    return {
      left: $_nsetdwbjctdj67z.constant(rect.left),
      top: $_nsetdwbjctdj67z.constant(rect.top),
      right: $_nsetdwbjctdj67z.constant(rect.right),
      bottom: $_nsetdwbjctdj67z.constant(rect.bottom),
      width: $_nsetdwbjctdj67z.constant(rect.width),
      height: $_nsetdwbjctdj67z.constant(rect.height)
    };
  };
  var getFirstRect$1 = function (rng) {
    var rects = rng.getClientRects();
    var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? $_1k5gi0wajctdj67w.some(rect).map(toRect$1) : $_1k5gi0wajctdj67w.none();
  };
  var getBounds$2 = function (rng) {
    var rect = rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? $_1k5gi0wajctdj67w.some(rect).map(toRect$1) : $_1k5gi0wajctdj67w.none();
  };
  var toString$1 = function (rng) {
    return rng.toString();
  };
  var $_b1m39h145jctdj7fv = {
    create: create$5,
    replaceWith: replaceWith,
    selectNodeContents: selectNodeContents,
    selectNodeContentsUsing: selectNodeContentsUsing,
    relativeToNative: relativeToNative,
    exactToNative: exactToNative,
    deleteContents: deleteContents,
    cloneFragment: cloneFragment,
    getFirstRect: getFirstRect$1,
    getBounds: getBounds$2,
    isWithin: isWithin,
    toString: toString$1
  };

  var adt$5 = $_e0y7kwx4jctdj6ap.generate([
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
    return type($_bvayi3wtjctdj69a.fromDom(range.startContainer), range.startOffset, $_bvayi3wtjctdj69a.fromDom(range.endContainer), range.endOffset);
  };
  var getRanges = function (win, selection) {
    return selection.match({
      domRange: function (rng) {
        return {
          ltr: $_nsetdwbjctdj67z.constant(rng),
          rtl: $_1k5gi0wajctdj67w.none
        };
      },
      relative: function (startSitu, finishSitu) {
        return {
          ltr: $_c9x4bqwhjctdj689.cached(function () {
            return $_b1m39h145jctdj7fv.relativeToNative(win, startSitu, finishSitu);
          }),
          rtl: $_c9x4bqwhjctdj689.cached(function () {
            return $_1k5gi0wajctdj67w.some($_b1m39h145jctdj7fv.relativeToNative(win, finishSitu, startSitu));
          })
        };
      },
      exact: function (start, soffset, finish, foffset) {
        return {
          ltr: $_c9x4bqwhjctdj689.cached(function () {
            return $_b1m39h145jctdj7fv.exactToNative(win, start, soffset, finish, foffset);
          }),
          rtl: $_c9x4bqwhjctdj689.cached(function () {
            return $_1k5gi0wajctdj67w.some($_b1m39h145jctdj7fv.exactToNative(win, finish, foffset, start, soffset));
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
        return adt$5.rtl($_bvayi3wtjctdj69a.fromDom(rev.endContainer), rev.endOffset, $_bvayi3wtjctdj69a.fromDom(rev.startContainer), rev.startOffset);
      }).getOrThunk(function () {
        return fromRange(win, adt$5.ltr, rng);
      });
    } else {
      return fromRange(win, adt$5.ltr, rng);
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
  var $_6s3sfa146jctdj7g0 = {
    ltr: adt$5.ltr,
    rtl: adt$5.rtl,
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
  var $_4ybzep149jctdj7ge = {
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
    var length = $_1mozsf13yjctdj7f4.get(textnode).length;
    var offset = $_4ybzep149jctdj7ge.searchForPoint(rectForOffset, x, y, rect.right, length);
    return rangeForOffset(offset);
  };
  var locate$2 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rects = r.getClientRects();
    var foundRect = $_3dekh2yejctdj6l8.findMap(rects, function (rect) {
      return $_4ybzep149jctdj7ge.inRect(rect, x, y) ? $_1k5gi0wajctdj67w.some(rect) : $_1k5gi0wajctdj67w.none();
    });
    return foundRect.map(function (rect) {
      return locateOffset(doc, node, x, y, rect);
    });
  };
  var $_d1akud14ajctdj7gg = { locate: locate$2 };

  var searchInChildren = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    var nodes = $_83fh6gy3jctdj6ef.children(node);
    return $_3dekh2yejctdj6l8.findMap(nodes, function (n) {
      r.selectNode(n.dom());
      return $_4ybzep149jctdj7ge.inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : $_1k5gi0wajctdj67w.none();
    });
  };
  var locateNode = function (doc, node, x, y) {
    var locator = $_13f4i6xxjctdj6dv.isText(node) ? $_d1akud14ajctdj7gg.locate : searchInChildren;
    return locator(doc, node, x, y);
  };
  var locate$1 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return locateNode(doc, node, boundedX, boundedY);
  };
  var $_dennab148jctdj7ga = { locate: locate$1 };

  var first$3 = function (element) {
    return $_as3f1tyijctdj6lg.descendant(element, $_ag88f813xjctdj7f1.isCursorPosition);
  };
  var last$2 = function (element) {
    return descendantRtl(element, $_ag88f813xjctdj7f1.isCursorPosition);
  };
  var descendantRtl = function (scope, predicate) {
    var descend = function (element) {
      var children = $_83fh6gy3jctdj6ef.children(element);
      for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        if (predicate(child))
          return $_1k5gi0wajctdj67w.some(child);
        var res = descend(child);
        if (res.isSome())
          return res;
      }
      return $_1k5gi0wajctdj67w.none();
    };
    return descend(scope);
  };
  var $_cb7of214cjctdj7gm = {
    first: first$3,
    last: last$2
  };

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
    var f = collapseDirection === COLLAPSE_TO_LEFT ? $_cb7of214cjctdj7gm.first : $_cb7of214cjctdj7gm.last;
    return f(node).map(function (target) {
      return createCollapsedNode(doc, target, collapseDirection);
    });
  };
  var locateInEmpty = function (doc, node, x) {
    var rect = node.dom().getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    return $_1k5gi0wajctdj67w.some(createCollapsedNode(doc, node, collapseDirection));
  };
  var search$1 = function (doc, node, x) {
    var f = $_83fh6gy3jctdj6ef.children(node).length === 0 ? locateInEmpty : locateInElement;
    return f(doc, node, x);
  };
  var $_xi1uy14bjctdj7gj = { search: search$1 };

  var caretPositionFromPoint = function (doc, x, y) {
    return $_1k5gi0wajctdj67w.from(doc.dom().caretPositionFromPoint(x, y)).bind(function (pos) {
      if (pos.offsetNode === null)
        return $_1k5gi0wajctdj67w.none();
      var r = doc.dom().createRange();
      r.setStart(pos.offsetNode, pos.offset);
      r.collapse();
      return $_1k5gi0wajctdj67w.some(r);
    });
  };
  var caretRangeFromPoint = function (doc, x, y) {
    return $_1k5gi0wajctdj67w.from(doc.dom().caretRangeFromPoint(x, y));
  };
  var searchTextNodes = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return $_dennab148jctdj7ga.locate(doc, node, boundedX, boundedY);
  };
  var searchFromPoint = function (doc, x, y) {
    return $_bvayi3wtjctdj69a.fromPoint(doc, x, y).bind(function (elem) {
      var fallback = function () {
        return $_xi1uy14bjctdj7gj.search(doc, elem, x);
      };
      return $_83fh6gy3jctdj6ef.children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
    });
  };
  var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
  var fromPoint$1 = function (win, x, y) {
    var doc = $_bvayi3wtjctdj69a.fromDom(win.document);
    return availableSearch(doc, x, y).map(function (rng) {
      return $_8vi7z4140jctdj7f9.range($_bvayi3wtjctdj69a.fromDom(rng.startContainer), rng.startOffset, $_bvayi3wtjctdj69a.fromDom(rng.endContainer), rng.endOffset);
    });
  };
  var $_e25s84147jctdj7g7 = { fromPoint: fromPoint$1 };

  var withinContainer = function (win, ancestor, outerRange, selector) {
    var innerRange = $_b1m39h145jctdj7fv.create(win);
    var self = $_ecdommwsjctdj696.is(ancestor, selector) ? [ancestor] : [];
    var elements = self.concat($_aw19z0zkjctdj6pq.descendants(ancestor, selector));
    return $_85zw6hw9jctdj67p.filter(elements, function (elem) {
      $_b1m39h145jctdj7fv.selectNodeContentsUsing(innerRange, elem);
      return $_b1m39h145jctdj7fv.isWithin(outerRange, innerRange);
    });
  };
  var find$4 = function (win, selection, selector) {
    var outerRange = $_6s3sfa146jctdj7g0.asLtrRange(win, selection);
    var ancestor = $_bvayi3wtjctdj69a.fromDom(outerRange.commonAncestorContainer);
    return $_13f4i6xxjctdj6dv.isElement(ancestor) ? withinContainer(win, ancestor, outerRange, selector) : [];
  };
  var $_frz6uv14djctdj7gq = { find: find$4 };

  var beforeSpecial = function (element, offset) {
    var name = $_13f4i6xxjctdj6dv.name(element);
    if ('input' === name)
      return $_61g61r141jctdj7fd.after(element);
    else if (!$_85zw6hw9jctdj67p.contains([
        'br',
        'img'
      ], name))
      return $_61g61r141jctdj7fd.on(element, offset);
    else
      return offset === 0 ? $_61g61r141jctdj7fd.before(element) : $_61g61r141jctdj7fd.after(element);
  };
  var preprocessRelative = function (startSitu, finishSitu) {
    var start = startSitu.fold($_61g61r141jctdj7fd.before, beforeSpecial, $_61g61r141jctdj7fd.after);
    var finish = finishSitu.fold($_61g61r141jctdj7fd.before, beforeSpecial, $_61g61r141jctdj7fd.after);
    return $_8vi7z4140jctdj7f9.relative(start, finish);
  };
  var preprocessExact = function (start, soffset, finish, foffset) {
    var startSitu = beforeSpecial(start, soffset);
    var finishSitu = beforeSpecial(finish, foffset);
    return $_8vi7z4140jctdj7f9.relative(startSitu, finishSitu);
  };
  var preprocess = function (selection) {
    return selection.match({
      domRange: function (rng) {
        var start = $_bvayi3wtjctdj69a.fromDom(rng.startContainer);
        var finish = $_bvayi3wtjctdj69a.fromDom(rng.endContainer);
        return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
      },
      relative: preprocessRelative,
      exact: preprocessExact
    });
  };
  var $_fv7e9n14ejctdj7gt = {
    beforeSpecial: beforeSpecial,
    preprocess: preprocess,
    preprocessRelative: preprocessRelative,
    preprocessExact: preprocessExact
  };

  var doSetNativeRange = function (win, rng) {
    $_1k5gi0wajctdj67w.from(win.getSelection()).each(function (selection) {
      selection.removeAllRanges();
      selection.addRange(rng);
    });
  };
  var doSetRange = function (win, start, soffset, finish, foffset) {
    var rng = $_b1m39h145jctdj7fv.exactToNative(win, start, soffset, finish, foffset);
    doSetNativeRange(win, rng);
  };
  var findWithin = function (win, selection, selector) {
    return $_frz6uv14djctdj7gq.find(win, selection, selector);
  };
  var setRangeFromRelative = function (win, relative) {
    return $_6s3sfa146jctdj7g0.diagnose(win, relative).match({
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
    var relative = $_fv7e9n14ejctdj7gt.preprocessExact(start, soffset, finish, foffset);
    setRangeFromRelative(win, relative);
  };
  var setRelative = function (win, startSitu, finishSitu) {
    var relative = $_fv7e9n14ejctdj7gt.preprocessRelative(startSitu, finishSitu);
    setRangeFromRelative(win, relative);
  };
  var toNative = function (selection) {
    var win = $_8vi7z4140jctdj7f9.getWin(selection).dom();
    var getDomRange = function (start, soffset, finish, foffset) {
      return $_b1m39h145jctdj7fv.exactToNative(win, start, soffset, finish, foffset);
    };
    var filtered = $_fv7e9n14ejctdj7gt.preprocess(selection);
    return $_6s3sfa146jctdj7g0.diagnose(win, filtered).match({
      ltr: getDomRange,
      rtl: getDomRange
    });
  };
  var readRange = function (selection) {
    if (selection.rangeCount > 0) {
      var firstRng = selection.getRangeAt(0);
      var lastRng = selection.getRangeAt(selection.rangeCount - 1);
      return $_1k5gi0wajctdj67w.some($_8vi7z4140jctdj7f9.range($_bvayi3wtjctdj69a.fromDom(firstRng.startContainer), firstRng.startOffset, $_bvayi3wtjctdj69a.fromDom(lastRng.endContainer), lastRng.endOffset));
    } else {
      return $_1k5gi0wajctdj67w.none();
    }
  };
  var doGetExact = function (selection) {
    var anchorNode = $_bvayi3wtjctdj69a.fromDom(selection.anchorNode);
    var focusNode = $_bvayi3wtjctdj69a.fromDom(selection.focusNode);
    return $_4sg9wy143jctdj7fm.after(anchorNode, selection.anchorOffset, focusNode, selection.focusOffset) ? $_1k5gi0wajctdj67w.some($_8vi7z4140jctdj7f9.range($_bvayi3wtjctdj69a.fromDom(selection.anchorNode), selection.anchorOffset, $_bvayi3wtjctdj69a.fromDom(selection.focusNode), selection.focusOffset)) : readRange(selection);
  };
  var setToElement = function (win, element) {
    var rng = $_b1m39h145jctdj7fv.selectNodeContents(win, element);
    doSetNativeRange(win, rng);
  };
  var forElement = function (win, element) {
    var rng = $_b1m39h145jctdj7fv.selectNodeContents(win, element);
    return $_8vi7z4140jctdj7f9.range($_bvayi3wtjctdj69a.fromDom(rng.startContainer), rng.startOffset, $_bvayi3wtjctdj69a.fromDom(rng.endContainer), rng.endOffset);
  };
  var getExact = function (win) {
    var selection = win.getSelection();
    return selection.rangeCount > 0 ? doGetExact(selection) : $_1k5gi0wajctdj67w.none();
  };
  var get$13 = function (win) {
    return getExact(win).map(function (range) {
      return $_8vi7z4140jctdj7f9.exact(range.start(), range.soffset(), range.finish(), range.foffset());
    });
  };
  var getFirstRect = function (win, selection) {
    var rng = $_6s3sfa146jctdj7g0.asLtrRange(win, selection);
    return $_b1m39h145jctdj7fv.getFirstRect(rng);
  };
  var getBounds$1 = function (win, selection) {
    var rng = $_6s3sfa146jctdj7g0.asLtrRange(win, selection);
    return $_b1m39h145jctdj7fv.getBounds(rng);
  };
  var getAtPoint = function (win, x, y) {
    return $_e25s84147jctdj7g7.fromPoint(win, x, y);
  };
  var getAsString = function (win, selection) {
    var rng = $_6s3sfa146jctdj7g0.asLtrRange(win, selection);
    return $_b1m39h145jctdj7fv.toString(rng);
  };
  var clear$1 = function (win) {
    var selection = win.getSelection();
    selection.removeAllRanges();
  };
  var clone$3 = function (win, selection) {
    var rng = $_6s3sfa146jctdj7g0.asLtrRange(win, selection);
    return $_b1m39h145jctdj7fv.cloneFragment(rng);
  };
  var replace = function (win, selection, elements) {
    var rng = $_6s3sfa146jctdj7g0.asLtrRange(win, selection);
    var fragment = $_508ygn144jctdj7fn.fromElements(elements, win.document);
    $_b1m39h145jctdj7fv.replaceWith(rng, fragment);
  };
  var deleteAt = function (win, selection) {
    var rng = $_6s3sfa146jctdj7g0.asLtrRange(win, selection);
    $_b1m39h145jctdj7fv.deleteContents(rng);
  };
  var isCollapsed = function (start, soffset, finish, foffset) {
    return $_a6ax5bw8jctdj67h.eq(start, finish) && soffset === foffset;
  };
  var $_8c0qky142jctdj7fh = {
    setExact: setExact,
    getExact: getExact,
    get: get$13,
    setRelative: setRelative,
    toNative: toNative,
    setToElement: setToElement,
    clear: clear$1,
    clone: clone$3,
    replace: replace,
    deleteAt: deleteAt,
    forElement: forElement,
    getFirstRect: getFirstRect,
    getBounds: getBounds$1,
    getAtPoint: getAtPoint,
    findWithin: findWithin,
    getAsString: getAsString,
    isCollapsed: isCollapsed
  };

  var COLLAPSED_WIDTH = 2;
  var collapsedRect = function (rect) {
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: $_nsetdwbjctdj67z.constant(COLLAPSED_WIDTH),
      height: rect.height
    };
  };
  var toRect = function (rawRect) {
    return {
      left: $_nsetdwbjctdj67z.constant(rawRect.left),
      top: $_nsetdwbjctdj67z.constant(rawRect.top),
      right: $_nsetdwbjctdj67z.constant(rawRect.right),
      bottom: $_nsetdwbjctdj67z.constant(rawRect.bottom),
      width: $_nsetdwbjctdj67z.constant(rawRect.width),
      height: $_nsetdwbjctdj67z.constant(rawRect.height)
    };
  };
  var getRectsFromRange = function (range) {
    if (!range.collapsed) {
      return $_85zw6hw9jctdj67p.map(range.getClientRects(), toRect);
    } else {
      var start_1 = $_bvayi3wtjctdj69a.fromDom(range.startContainer);
      return $_83fh6gy3jctdj6ef.parent(start_1).bind(function (parent) {
        var selection = $_8vi7z4140jctdj7f9.exact(start_1, range.startOffset, parent, $_ag88f813xjctdj7f1.getEnd(parent));
        var optRect = $_8c0qky142jctdj7fh.getFirstRect(range.startContainer.ownerDocument.defaultView, selection);
        return optRect.map(collapsedRect).map($_85zw6hw9jctdj67p.pure);
      }).getOr([]);
    }
  };
  var getRectangles = function (cWin) {
    var sel = cWin.getSelection();
    return sel !== undefined && sel.rangeCount > 0 ? getRectsFromRange(sel.getRangeAt(0)) : [];
  };
  var $_dps9w213wjctdj7eu = { getRectangles: getRectangles };

  var EXTRA_SPACING = 50;
  var data = 'data-' + $_79dnpgz1jctdj6nm.resolve('last-outer-height');
  var setLastHeight = function (cBody, value) {
    $_ftckpcxwjctdj6dp.set(cBody, data, value);
  };
  var getLastHeight = function (cBody) {
    return $_65n5i313vjctdj7es.safeParse(cBody, data);
  };
  var getBoundsFrom = function (rect) {
    return {
      top: $_nsetdwbjctdj67z.constant(rect.top()),
      bottom: $_nsetdwbjctdj67z.constant(rect.top() + rect.height())
    };
  };
  var getBounds = function (cWin) {
    var rects = $_dps9w213wjctdj7eu.getRectangles(cWin);
    return rects.length > 0 ? $_1k5gi0wajctdj67w.some(rects[0]).map(getBoundsFrom) : $_1k5gi0wajctdj67w.none();
  };
  var findDelta = function (outerWindow, cBody) {
    var last = getLastHeight(cBody);
    var current = outerWindow.innerHeight;
    return last > current ? $_1k5gi0wajctdj67w.some(last - current) : $_1k5gi0wajctdj67w.none();
  };
  var calculate = function (cWin, bounds, delta) {
    var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
    return isOutside ? Math.min(delta, bounds.bottom() - cWin.innerHeight + EXTRA_SPACING) : 0;
  };
  var setup$1 = function (outerWindow, cWin) {
    var cBody = $_bvayi3wtjctdj69a.fromDom(cWin.document.body);
    var toEditing = function () {
      $_bgfgap13ujctdj7em.resume(cWin);
    };
    var onResize = $_5nc70r13kjctdj7d3.bind($_bvayi3wtjctdj69a.fromDom(outerWindow), 'resize', function () {
      findDelta(outerWindow, cBody).each(function (delta) {
        getBounds(cWin).each(function (bounds) {
          var cScrollBy = calculate(cWin, bounds, delta);
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      });
      setLastHeight(cBody, outerWindow.innerHeight);
    });
    setLastHeight(cBody, outerWindow.innerHeight);
    var destroy = function () {
      onResize.unbind();
    };
    return {
      toEditing: toEditing,
      destroy: destroy
    };
  };
  var $_gd56r513tjctdj7eg = { setup: setup$1 };

  var getBodyFromFrame = function (frame) {
    return $_1k5gi0wajctdj67w.some($_bvayi3wtjctdj69a.fromDom(frame.dom().contentWindow.document.body));
  };
  var getDocFromFrame = function (frame) {
    return $_1k5gi0wajctdj67w.some($_bvayi3wtjctdj69a.fromDom(frame.dom().contentWindow.document));
  };
  var getWinFromFrame = function (frame) {
    return $_1k5gi0wajctdj67w.from(frame.dom().contentWindow);
  };
  var getSelectionFromFrame = function (frame) {
    var optWin = getWinFromFrame(frame);
    return optWin.bind($_8c0qky142jctdj7fh.getExact);
  };
  var getFrame = function (editor) {
    return editor.getFrame();
  };
  var getOrDerive = function (name, f) {
    return function (editor) {
      var g = editor[name].getOrThunk(function () {
        var frame = getFrame(editor);
        return function () {
          return f(frame);
        };
      });
      return g();
    };
  };
  var getOrListen = function (editor, doc, name, type) {
    return editor[name].getOrThunk(function () {
      return function (handler) {
        return $_5nc70r13kjctdj7d3.bind(doc, type, handler);
      };
    });
  };
  var toRect$2 = function (rect) {
    return {
      left: $_nsetdwbjctdj67z.constant(rect.left),
      top: $_nsetdwbjctdj67z.constant(rect.top),
      right: $_nsetdwbjctdj67z.constant(rect.right),
      bottom: $_nsetdwbjctdj67z.constant(rect.bottom),
      width: $_nsetdwbjctdj67z.constant(rect.width),
      height: $_nsetdwbjctdj67z.constant(rect.height)
    };
  };
  var getActiveApi = function (editor) {
    var frame = getFrame(editor);
    var tryFallbackBox = function (win) {
      var isCollapsed = function (sel) {
        return $_a6ax5bw8jctdj67h.eq(sel.start(), sel.finish()) && sel.soffset() === sel.foffset();
      };
      var toStartRect = function (sel) {
        var rect = sel.start().dom().getBoundingClientRect();
        return rect.width > 0 || rect.height > 0 ? $_1k5gi0wajctdj67w.some(rect).map(toRect$2) : $_1k5gi0wajctdj67w.none();
      };
      return $_8c0qky142jctdj7fh.getExact(win).filter(isCollapsed).bind(toStartRect);
    };
    return getBodyFromFrame(frame).bind(function (body) {
      return getDocFromFrame(frame).bind(function (doc) {
        return getWinFromFrame(frame).map(function (win) {
          var html = $_bvayi3wtjctdj69a.fromDom(doc.dom().documentElement);
          var getCursorBox = editor.getCursorBox.getOrThunk(function () {
            return function () {
              return $_8c0qky142jctdj7fh.get(win).bind(function (sel) {
                return $_8c0qky142jctdj7fh.getFirstRect(win, sel).orThunk(function () {
                  return tryFallbackBox(win);
                });
              });
            };
          });
          var setSelection = editor.setSelection.getOrThunk(function () {
            return function (start, soffset, finish, foffset) {
              $_8c0qky142jctdj7fh.setExact(win, start, soffset, finish, foffset);
            };
          });
          var clearSelection = editor.clearSelection.getOrThunk(function () {
            return function () {
              $_8c0qky142jctdj7fh.clear(win);
            };
          });
          return {
            body: $_nsetdwbjctdj67z.constant(body),
            doc: $_nsetdwbjctdj67z.constant(doc),
            win: $_nsetdwbjctdj67z.constant(win),
            html: $_nsetdwbjctdj67z.constant(html),
            getSelection: $_nsetdwbjctdj67z.curry(getSelectionFromFrame, frame),
            setSelection: setSelection,
            clearSelection: clearSelection,
            frame: $_nsetdwbjctdj67z.constant(frame),
            onKeyup: getOrListen(editor, doc, 'onKeyup', 'keyup'),
            onNodeChanged: getOrListen(editor, doc, 'onNodeChanged', 'selectionchange'),
            onDomChanged: editor.onDomChanged,
            onScrollToCursor: editor.onScrollToCursor,
            onScrollToElement: editor.onScrollToElement,
            onToReading: editor.onToReading,
            onToEditing: editor.onToEditing,
            onToolbarScrollStart: editor.onToolbarScrollStart,
            onTouchContent: editor.onTouchContent,
            onTapContent: editor.onTapContent,
            onTouchToolstrip: editor.onTouchToolstrip,
            getCursorBox: getCursorBox
          };
        });
      });
    });
  };
  var $_eflwxg14fjctdj7gw = {
    getBody: getOrDerive('getBody', getBodyFromFrame),
    getDoc: getOrDerive('getDoc', getDocFromFrame),
    getWin: getOrDerive('getWin', getWinFromFrame),
    getSelection: getOrDerive('getSelection', getSelectionFromFrame),
    getFrame: getFrame,
    getActiveApi: getActiveApi
  };

  var attr = 'data-ephox-mobile-fullscreen-style';
  var siblingStyles = 'display:none!important;';
  var ancestorPosition = 'position:absolute!important;';
  var ancestorStyles = 'top:0!important;left:0!important;margin:0' + '!important;padding:0!important;width:100%!important;';
  var bgFallback = 'background-color:rgb(255,255,255)!important;';
  var isAndroid = $_3owkqnwgjctdj687.detect().os.isAndroid();
  var matchColor = function (editorBody) {
    var color = $_c7wjf9zsjctdj6qf.get(editorBody, 'background-color');
    return color !== undefined && color !== '' ? 'background-color:' + color + '!important' : bgFallback;
  };
  var clobberStyles = function (container, editorBody) {
    var gatherSibilings = function (element) {
      var siblings = $_aw19z0zkjctdj6pq.siblings(element, '*');
      return siblings;
    };
    var clobber = function (clobberStyle) {
      return function (element) {
        var styles = $_ftckpcxwjctdj6dp.get(element, 'style');
        var backup = styles === undefined ? 'no-styles' : styles.trim();
        if (backup === clobberStyle) {
          return;
        } else {
          $_ftckpcxwjctdj6dp.set(element, attr, backup);
          $_ftckpcxwjctdj6dp.set(element, 'style', clobberStyle);
        }
      };
    };
    var ancestors = $_aw19z0zkjctdj6pq.ancestors(container, '*');
    var siblings = $_85zw6hw9jctdj67p.bind(ancestors, gatherSibilings);
    var bgColor = matchColor(editorBody);
    $_85zw6hw9jctdj67p.each(siblings, clobber(siblingStyles));
    $_85zw6hw9jctdj67p.each(ancestors, clobber(ancestorPosition + ancestorStyles + bgColor));
    var containerStyles = isAndroid === true ? '' : ancestorPosition;
    clobber(containerStyles + ancestorStyles + bgColor)(container);
  };
  var restoreStyles = function () {
    var clobberedEls = $_aw19z0zkjctdj6pq.all('[' + attr + ']');
    $_85zw6hw9jctdj67p.each(clobberedEls, function (element) {
      var restore = $_ftckpcxwjctdj6dp.get(element, attr);
      if (restore !== 'no-styles') {
        $_ftckpcxwjctdj6dp.set(element, 'style', restore);
      } else {
        $_ftckpcxwjctdj6dp.remove(element, 'style');
      }
      $_ftckpcxwjctdj6dp.remove(element, attr);
    });
  };
  var $_9ynbaq14gjctdj7h5 = {
    clobberStyles: clobberStyles,
    restoreStyles: restoreStyles
  };

  var tag = function () {
    var head = $_82w6dszmjctdj6pu.first('head').getOrDie();
    var nu = function () {
      var meta = $_bvayi3wtjctdj69a.fromTag('meta');
      $_ftckpcxwjctdj6dp.set(meta, 'name', 'viewport');
      $_2enstby2jctdj6ed.append(head, meta);
      return meta;
    };
    var element = $_82w6dszmjctdj6pu.first('meta[name="viewport"]').getOrThunk(nu);
    var backup = $_ftckpcxwjctdj6dp.get(element, 'content');
    var maximize = function () {
      $_ftckpcxwjctdj6dp.set(element, 'content', 'width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0');
    };
    var restore = function () {
      if (backup !== undefined && backup !== null && backup.length > 0) {
        $_ftckpcxwjctdj6dp.set(element, 'content', backup);
      } else {
        $_ftckpcxwjctdj6dp.set(element, 'content', 'user-scalable=yes');
      }
    };
    return {
      maximize: maximize,
      restore: restore
    };
  };
  var $_w38t314hjctdj7hb = { tag: tag };

  var create$4 = function (platform, mask) {
    var meta = $_w38t314hjctdj7hb.tag();
    var androidApi = $_b95ubz12ajctdj740.api();
    var androidEvents = $_b95ubz12ajctdj740.api();
    var enter = function () {
      mask.hide();
      $_4vb8dhxujctdj6dm.add(platform.container, $_79dnpgz1jctdj6nm.resolve('fullscreen-maximized'));
      $_4vb8dhxujctdj6dm.add(platform.container, $_79dnpgz1jctdj6nm.resolve('android-maximized'));
      meta.maximize();
      $_4vb8dhxujctdj6dm.add(platform.body, $_79dnpgz1jctdj6nm.resolve('android-scroll-reload'));
      androidApi.set($_gd56r513tjctdj7eg.setup(platform.win, $_eflwxg14fjctdj7gw.getWin(platform.editor).getOrDie('no')));
      $_eflwxg14fjctdj7gw.getActiveApi(platform.editor).each(function (editorApi) {
        $_9ynbaq14gjctdj7h5.clobberStyles(platform.container, editorApi.body());
        androidEvents.set($_1c1inf13pjctdj7dn.initEvents(editorApi, platform.toolstrip, platform.alloy));
      });
    };
    var exit = function () {
      meta.restore();
      mask.show();
      $_4vb8dhxujctdj6dm.remove(platform.container, $_79dnpgz1jctdj6nm.resolve('fullscreen-maximized'));
      $_4vb8dhxujctdj6dm.remove(platform.container, $_79dnpgz1jctdj6nm.resolve('android-maximized'));
      $_9ynbaq14gjctdj7h5.restoreStyles();
      $_4vb8dhxujctdj6dm.remove(platform.body, $_79dnpgz1jctdj6nm.resolve('android-scroll-reload'));
      androidEvents.clear();
      androidApi.clear();
    };
    return {
      enter: enter,
      exit: exit
    };
  };
  var $_8d6wdj13ojctdj7dj = { create: create$4 };

  var MobileSchema = $_ebkmgyxhjctdj6cd.objOf([
    $_e1v8vrx2jctdj6ag.strictObjOf('editor', [
      $_e1v8vrx2jctdj6ag.strict('getFrame'),
      $_e1v8vrx2jctdj6ag.option('getBody'),
      $_e1v8vrx2jctdj6ag.option('getDoc'),
      $_e1v8vrx2jctdj6ag.option('getWin'),
      $_e1v8vrx2jctdj6ag.option('getSelection'),
      $_e1v8vrx2jctdj6ag.option('setSelection'),
      $_e1v8vrx2jctdj6ag.option('clearSelection'),
      $_e1v8vrx2jctdj6ag.option('cursorSaver'),
      $_e1v8vrx2jctdj6ag.option('onKeyup'),
      $_e1v8vrx2jctdj6ag.option('onNodeChanged'),
      $_e1v8vrx2jctdj6ag.option('getCursorBox'),
      $_e1v8vrx2jctdj6ag.strict('onDomChanged'),
      $_e1v8vrx2jctdj6ag.defaulted('onTouchContent', $_nsetdwbjctdj67z.noop),
      $_e1v8vrx2jctdj6ag.defaulted('onTapContent', $_nsetdwbjctdj67z.noop),
      $_e1v8vrx2jctdj6ag.defaulted('onTouchToolstrip', $_nsetdwbjctdj67z.noop),
      $_e1v8vrx2jctdj6ag.defaulted('onScrollToCursor', $_nsetdwbjctdj67z.constant({ unbind: $_nsetdwbjctdj67z.noop })),
      $_e1v8vrx2jctdj6ag.defaulted('onScrollToElement', $_nsetdwbjctdj67z.constant({ unbind: $_nsetdwbjctdj67z.noop })),
      $_e1v8vrx2jctdj6ag.defaulted('onToEditing', $_nsetdwbjctdj67z.constant({ unbind: $_nsetdwbjctdj67z.noop })),
      $_e1v8vrx2jctdj6ag.defaulted('onToReading', $_nsetdwbjctdj67z.constant({ unbind: $_nsetdwbjctdj67z.noop })),
      $_e1v8vrx2jctdj6ag.defaulted('onToolbarScrollStart', $_nsetdwbjctdj67z.identity)
    ]),
    $_e1v8vrx2jctdj6ag.strict('socket'),
    $_e1v8vrx2jctdj6ag.strict('toolstrip'),
    $_e1v8vrx2jctdj6ag.strict('dropup'),
    $_e1v8vrx2jctdj6ag.strict('toolbar'),
    $_e1v8vrx2jctdj6ag.strict('container'),
    $_e1v8vrx2jctdj6ag.strict('alloy'),
    $_e1v8vrx2jctdj6ag.state('win', function (spec) {
      return $_83fh6gy3jctdj6ef.owner(spec.socket).dom().defaultView;
    }),
    $_e1v8vrx2jctdj6ag.state('body', function (spec) {
      return $_bvayi3wtjctdj69a.fromDom(spec.socket.dom().ownerDocument.body);
    }),
    $_e1v8vrx2jctdj6ag.defaulted('translate', $_nsetdwbjctdj67z.identity),
    $_e1v8vrx2jctdj6ag.defaulted('setReadOnly', $_nsetdwbjctdj67z.noop)
  ]);

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
  var $_eufz8p14kjctdj7hz = {
    adaptable: adaptable,
    first: first$4,
    last: last$3
  };

  var sketch$10 = function (onView, translate) {
    var memIcon = $_fcnx6311ejctdj6zx.record(Container.sketch({
      dom: $_80xbio10qjctdj6wi.dom('<div aria-hidden="true" class="${prefix}-mask-tap-icon"></div>'),
      containerBehaviours: $_b61y2hw4jctdj66j.derive([Toggling.config({
          toggleClass: $_79dnpgz1jctdj6nm.resolve('mask-tap-icon-selected'),
          toggleOnExecute: false
        })])
    }));
    var onViewThrottle = $_eufz8p14kjctdj7hz.first(onView, 200);
    return Container.sketch({
      dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-disabled-mask"></div>'),
      components: [Container.sketch({
          dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-content-container"></div>'),
          components: [Button.sketch({
              dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-content-tap-section"></div>'),
              components: [memIcon.asSpec()],
              action: function (button) {
                onViewThrottle.throttle();
              },
              buttonBehaviours: $_b61y2hw4jctdj66j.derive([Toggling.config({ toggleClass: $_79dnpgz1jctdj6nm.resolve('mask-tap-icon-selected') })])
            })]
        })]
    });
  };
  var $_3s7yes14jjctdj7hs = { sketch: sketch$10 };

  var produce = function (raw) {
    var mobile = $_ebkmgyxhjctdj6cd.asRawOrDie('Getting AndroidWebapp schema', MobileSchema, raw);
    $_c7wjf9zsjctdj6qf.set(mobile.toolstrip, 'width', '100%');
    var onTap = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_2dgzqw12kjctdj75x.build($_3s7yes14jjctdj7hs.sketch(onTap, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    $_2enstby2jctdj6ed.append(mobile.container, mask.element());
    var mode = $_8d6wdj13ojctdj7dj.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: $_nsetdwbjctdj67z.noop,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_nsetdwbjctdj67z.noop
    };
  };
  var $_6gix3l13njctdj7dd = { produce: produce };

  var schema$14 = [
    $_e1v8vrx2jctdj6ag.defaulted('shell', true),
    $_accgp10djctdj6tt.field('toolbarBehaviours', [Replacing])
  ];
  var enhanceGroups = function (detail) {
    return { behaviours: $_b61y2hw4jctdj66j.derive([Replacing.config({})]) };
  };
  var partTypes$1 = [$_a90zyw10kjctdj6v0.optional({
      name: 'groups',
      overrides: enhanceGroups
    })];
  var $_asyffg14njctdj7ii = {
    name: $_nsetdwbjctdj67z.constant('Toolbar'),
    schema: $_nsetdwbjctdj67z.constant(schema$14),
    parts: $_nsetdwbjctdj67z.constant(partTypes$1)
  };

  var factory$4 = function (detail, components, spec, _externals) {
    var setGroups = function (toolbar, groups) {
      getGroupContainer(toolbar).fold(function () {
        console.error('Toolbar was defined to not be a shell, but no groups container was specified in components');
        throw new Error('Toolbar was defined to not be a shell, but no groups container was specified in components');
      }, function (container) {
        Replacing.set(container, groups);
      });
    };
    var getGroupContainer = function (component) {
      return detail.shell() ? $_1k5gi0wajctdj67w.some(component) : $_bsysk910ijctdj6uh.getPart(component, detail, 'groups');
    };
    var extra = detail.shell() ? {
      behaviours: [Replacing.config({})],
      components: []
    } : {
      behaviours: [],
      components: components
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: extra.components,
      behaviours: $_fwvrcwwyjctdj69p.deepMerge($_b61y2hw4jctdj66j.derive(extra.behaviours), $_accgp10djctdj6tt.get(detail.toolbarBehaviours())),
      apis: { setGroups: setGroups },
      domModification: { attributes: { role: 'group' } }
    };
  };
  var Toolbar = $_8lavxg10ejctdj6ty.composite({
    name: 'Toolbar',
    configFields: $_asyffg14njctdj7ii.schema(),
    partFields: $_asyffg14njctdj7ii.parts(),
    factory: factory$4,
    apis: {
      setGroups: function (apis, toolbar, groups) {
        apis.setGroups(toolbar, groups);
      }
    }
  });

  var schema$15 = [
    $_e1v8vrx2jctdj6ag.strict('items'),
    $_37rg8yytjctdj6ml.markers(['itemClass']),
    $_accgp10djctdj6tt.field('tgroupBehaviours', [Keying])
  ];
  var partTypes$2 = [$_a90zyw10kjctdj6v0.group({
      name: 'items',
      unit: 'item',
      overrides: function (detail) {
        return { domModification: { classes: [detail.markers().itemClass()] } };
      }
    })];
  var $_qmvke14pjctdj7io = {
    name: $_nsetdwbjctdj67z.constant('ToolbarGroup'),
    schema: $_nsetdwbjctdj67z.constant(schema$15),
    parts: $_nsetdwbjctdj67z.constant(partTypes$2)
  };

  var factory$5 = function (detail, components, spec, _externals) {
    return $_fwvrcwwyjctdj69p.deepMerge({ dom: { attributes: { role: 'toolbar' } } }, {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_fwvrcwwyjctdj69p.deepMerge($_b61y2hw4jctdj66j.derive([Keying.config({
          mode: 'flow',
          selector: '.' + detail.markers().itemClass()
        })]), $_accgp10djctdj6tt.get(detail.tgroupBehaviours())),
      'debug.sketcher': spec['debug.sketcher']
    });
  };
  var ToolbarGroup = $_8lavxg10ejctdj6ty.composite({
    name: 'ToolbarGroup',
    configFields: $_qmvke14pjctdj7io.schema(),
    partFields: $_qmvke14pjctdj7io.parts(),
    factory: factory$5
  });

  var dataHorizontal = 'data-' + $_79dnpgz1jctdj6nm.resolve('horizontal-scroll');
  var canScrollVertically = function (container) {
    container.dom().scrollTop = 1;
    var result = container.dom().scrollTop !== 0;
    container.dom().scrollTop = 0;
    return result;
  };
  var canScrollHorizontally = function (container) {
    container.dom().scrollLeft = 1;
    var result = container.dom().scrollLeft !== 0;
    container.dom().scrollLeft = 0;
    return result;
  };
  var hasVerticalScroll = function (container) {
    return container.dom().scrollTop > 0 || canScrollVertically(container);
  };
  var hasHorizontalScroll = function (container) {
    return container.dom().scrollLeft > 0 || canScrollHorizontally(container);
  };
  var markAsHorizontal = function (container) {
    $_ftckpcxwjctdj6dp.set(container, dataHorizontal, 'true');
  };
  var hasScroll = function (container) {
    return $_ftckpcxwjctdj6dp.get(container, dataHorizontal) === 'true' ? hasHorizontalScroll : hasVerticalScroll;
  };
  var exclusive = function (scope, selector) {
    return $_5nc70r13kjctdj7d3.bind(scope, 'touchmove', function (event) {
      $_82w6dszmjctdj6pu.closest(event.target(), selector).filter(hasScroll).fold(function () {
        event.raw().preventDefault();
      }, $_nsetdwbjctdj67z.noop);
    });
  };
  var $_93zvkg14qjctdj7is = {
    exclusive: exclusive,
    markAsHorizontal: markAsHorizontal
  };

  var ScrollingToolbar = function () {
    var makeGroup = function (gSpec) {
      var scrollClass = gSpec.scrollable === true ? '${prefix}-toolbar-scrollable-group' : '';
      return {
        dom: $_80xbio10qjctdj6wi.dom('<div aria-label="' + gSpec.label + '" class="${prefix}-toolbar-group ' + scrollClass + '"></div>'),
        tgroupBehaviours: $_b61y2hw4jctdj66j.derive([$_8fkfqe11sjctdj71q.config('adhoc-scrollable-toolbar', gSpec.scrollable === true ? [$_2lvgrhw6jctdj67b.runOnInit(function (component, simulatedEvent) {
              $_c7wjf9zsjctdj6qf.set(component.element(), 'overflow-x', 'auto');
              $_93zvkg14qjctdj7is.markAsHorizontal(component.element());
              $_1wciqt13hjctdj7cp.register(component.element());
            })] : [])]),
        components: [Container.sketch({ components: [ToolbarGroup.parts().items({})] })],
        markers: { itemClass: $_79dnpgz1jctdj6nm.resolve('toolbar-group-item') },
        items: gSpec.items
      };
    };
    var toolbar = $_2dgzqw12kjctdj75x.build(Toolbar.sketch({
      dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-toolbar"></div>'),
      components: [Toolbar.parts().groups({})],
      toolbarBehaviours: $_b61y2hw4jctdj66j.derive([
        Toggling.config({
          toggleClass: $_79dnpgz1jctdj6nm.resolve('context-toolbar'),
          toggleOnExecute: false,
          aria: { mode: 'none' }
        }),
        Keying.config({ mode: 'cyclic' })
      ]),
      shell: true
    }));
    var wrapper = $_2dgzqw12kjctdj75x.build(Container.sketch({
      dom: { classes: [$_79dnpgz1jctdj6nm.resolve('toolstrip')] },
      components: [$_2dgzqw12kjctdj75x.premade(toolbar)],
      containerBehaviours: $_b61y2hw4jctdj66j.derive([Toggling.config({
          toggleClass: $_79dnpgz1jctdj6nm.resolve('android-selection-context-toolbar'),
          toggleOnExecute: false
        })])
    }));
    var resetGroups = function () {
      Toolbar.setGroups(toolbar, initGroups.get());
      Toggling.off(toolbar);
    };
    var initGroups = Cell([]);
    var setGroups = function (gs) {
      initGroups.set(gs);
      resetGroups();
    };
    var createGroups = function (gs) {
      return $_85zw6hw9jctdj67p.map(gs, $_nsetdwbjctdj67z.compose(ToolbarGroup.sketch, makeGroup));
    };
    var refresh = function () {
      Toolbar.refresh(toolbar);
    };
    var setContextToolbar = function (gs) {
      Toggling.on(toolbar);
      Toolbar.setGroups(toolbar, gs);
    };
    var restoreToolbar = function () {
      if (Toggling.isOn(toolbar)) {
        resetGroups();
      }
    };
    var focus = function () {
      Keying.focusIn(toolbar);
    };
    return {
      wrapper: $_nsetdwbjctdj67z.constant(wrapper),
      toolbar: $_nsetdwbjctdj67z.constant(toolbar),
      createGroups: createGroups,
      setGroups: setGroups,
      setContextToolbar: setContextToolbar,
      restoreToolbar: restoreToolbar,
      refresh: refresh,
      focus: focus
    };
  };

  var makeEditSwitch = function (webapp) {
    return $_2dgzqw12kjctdj75x.build(Button.sketch({
      dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-mask-edit-icon ${prefix}-icon"></div>'),
      action: function () {
        webapp.run(function (w) {
          w.setReadOnly(false);
        });
      }
    }));
  };
  var makeSocket = function () {
    return $_2dgzqw12kjctdj75x.build(Container.sketch({
      dom: $_80xbio10qjctdj6wi.dom('<div class="${prefix}-editor-socket"></div>'),
      components: [],
      containerBehaviours: $_b61y2hw4jctdj66j.derive([Replacing.config({})])
    }));
  };
  var showEdit = function (socket, switchToEdit) {
    Replacing.append(socket, $_2dgzqw12kjctdj75x.premade(switchToEdit));
  };
  var hideEdit = function (socket, switchToEdit) {
    Replacing.remove(socket, switchToEdit);
  };
  var updateMode = function (socket, switchToEdit, readOnly, root) {
    var swap = readOnly === true ? Swapping.toAlpha : Swapping.toOmega;
    swap(root);
    var f = readOnly ? showEdit : hideEdit;
    f(socket, switchToEdit);
  };
  var $_1yzt2z14rjctdj7iy = {
    makeEditSwitch: makeEditSwitch,
    makeSocket: makeSocket,
    updateMode: updateMode
  };

  var getAnimationRoot = function (component, slideConfig) {
    return slideConfig.getAnimationRoot().fold(function () {
      return component.element();
    }, function (get) {
      return get(component);
    });
  };
  var getDimensionProperty = function (slideConfig) {
    return slideConfig.dimension().property();
  };
  var getDimension = function (slideConfig, elem) {
    return slideConfig.dimension().getDimension()(elem);
  };
  var disableTransitions = function (component, slideConfig) {
    var root = getAnimationRoot(component, slideConfig);
    $_901pci12yjctdj799.remove(root, [
      slideConfig.shrinkingClass(),
      slideConfig.growingClass()
    ]);
  };
  var setShrunk = function (component, slideConfig) {
    $_4vb8dhxujctdj6dm.remove(component.element(), slideConfig.openClass());
    $_4vb8dhxujctdj6dm.add(component.element(), slideConfig.closedClass());
    $_c7wjf9zsjctdj6qf.set(component.element(), getDimensionProperty(slideConfig), '0px');
    $_c7wjf9zsjctdj6qf.reflow(component.element());
  };
  var measureTargetSize = function (component, slideConfig) {
    setGrown(component, slideConfig);
    var expanded = getDimension(slideConfig, component.element());
    setShrunk(component, slideConfig);
    return expanded;
  };
  var setGrown = function (component, slideConfig) {
    $_4vb8dhxujctdj6dm.remove(component.element(), slideConfig.closedClass());
    $_4vb8dhxujctdj6dm.add(component.element(), slideConfig.openClass());
    $_c7wjf9zsjctdj6qf.remove(component.element(), getDimensionProperty(slideConfig));
  };
  var doImmediateShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_c7wjf9zsjctdj6qf.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_c7wjf9zsjctdj6qf.reflow(component.element());
    disableTransitions(component, slideConfig);
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
    slideConfig.onShrunk()(component);
  };
  var doStartShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_c7wjf9zsjctdj6qf.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_c7wjf9zsjctdj6qf.reflow(component.element());
    var root = getAnimationRoot(component, slideConfig);
    $_4vb8dhxujctdj6dm.add(root, slideConfig.shrinkingClass());
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
  };
  var doStartGrow = function (component, slideConfig, slideState) {
    var fullSize = measureTargetSize(component, slideConfig);
    var root = getAnimationRoot(component, slideConfig);
    $_4vb8dhxujctdj6dm.add(root, slideConfig.growingClass());
    setGrown(component, slideConfig);
    $_c7wjf9zsjctdj6qf.set(component.element(), getDimensionProperty(slideConfig), fullSize);
    slideState.setExpanded();
    slideConfig.onStartGrow()(component);
  };
  var grow = function (component, slideConfig, slideState) {
    if (!slideState.isExpanded())
      doStartGrow(component, slideConfig, slideState);
  };
  var shrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doStartShrink(component, slideConfig, slideState);
  };
  var immediateShrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doImmediateShrink(component, slideConfig, slideState);
  };
  var hasGrown = function (component, slideConfig, slideState) {
    return slideState.isExpanded();
  };
  var hasShrunk = function (component, slideConfig, slideState) {
    return slideState.isCollapsed();
  };
  var isGrowing = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_4vb8dhxujctdj6dm.has(root, slideConfig.growingClass()) === true;
  };
  var isShrinking = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_4vb8dhxujctdj6dm.has(root, slideConfig.shrinkingClass()) === true;
  };
  var isTransitioning = function (component, slideConfig, slideState) {
    return isGrowing(component, slideConfig, slideState) === true || isShrinking(component, slideConfig, slideState) === true;
  };
  var toggleGrow = function (component, slideConfig, slideState) {
    var f = slideState.isExpanded() ? doStartShrink : doStartGrow;
    f(component, slideConfig, slideState);
  };
  var $_ah0mmo14vjctdj7jm = {
    grow: grow,
    shrink: shrink,
    immediateShrink: immediateShrink,
    hasGrown: hasGrown,
    hasShrunk: hasShrunk,
    isGrowing: isGrowing,
    isShrinking: isShrinking,
    isTransitioning: isTransitioning,
    toggleGrow: toggleGrow,
    disableTransitions: disableTransitions
  };

  var exhibit$5 = function (base, slideConfig) {
    var expanded = slideConfig.expanded();
    return expanded ? $_1zwhwxkjctdj6cn.nu({
      classes: [slideConfig.openClass()],
      styles: {}
    }) : $_1zwhwxkjctdj6cn.nu({
      classes: [slideConfig.closedClass()],
      styles: $_41rzpex6jctdj6bg.wrap(slideConfig.dimension().property(), '0px')
    });
  };
  var events$9 = function (slideConfig, slideState) {
    return $_2lvgrhw6jctdj67b.derive([$_2lvgrhw6jctdj67b.run($_3mycfwxjctdj69n.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        if (raw.propertyName === slideConfig.dimension().property()) {
          $_ah0mmo14vjctdj7jm.disableTransitions(component, slideConfig, slideState);
          if (slideState.isExpanded())
            $_c7wjf9zsjctdj6qf.remove(component.element(), slideConfig.dimension().property());
          var notify = slideState.isExpanded() ? slideConfig.onGrown() : slideConfig.onShrunk();
          notify(component, simulatedEvent);
        }
      })]);
  };
  var $_gg9mtz14ujctdj7ji = {
    exhibit: exhibit$5,
    events: events$9
  };

  var SlidingSchema = [
    $_e1v8vrx2jctdj6ag.strict('closedClass'),
    $_e1v8vrx2jctdj6ag.strict('openClass'),
    $_e1v8vrx2jctdj6ag.strict('shrinkingClass'),
    $_e1v8vrx2jctdj6ag.strict('growingClass'),
    $_e1v8vrx2jctdj6ag.option('getAnimationRoot'),
    $_37rg8yytjctdj6ml.onHandler('onShrunk'),
    $_37rg8yytjctdj6ml.onHandler('onStartShrink'),
    $_37rg8yytjctdj6ml.onHandler('onGrown'),
    $_37rg8yytjctdj6ml.onHandler('onStartGrow'),
    $_e1v8vrx2jctdj6ag.defaulted('expanded', false),
    $_e1v8vrx2jctdj6ag.strictOf('dimension', $_ebkmgyxhjctdj6cd.choose('property', {
      width: [
        $_37rg8yytjctdj6ml.output('property', 'width'),
        $_37rg8yytjctdj6ml.output('getDimension', function (elem) {
          return $_dzu4he117jctdj6yu.get(elem) + 'px';
        })
      ],
      height: [
        $_37rg8yytjctdj6ml.output('property', 'height'),
        $_37rg8yytjctdj6ml.output('getDimension', function (elem) {
          return $_g7q7mszrjctdj6qd.get(elem) + 'px';
        })
      ]
    }))
  ];

  var init$4 = function (spec) {
    var state = Cell(spec.expanded());
    var readState = function () {
      return 'expanded: ' + state.get();
    };
    return BehaviourState({
      isExpanded: function () {
        return state.get() === true;
      },
      isCollapsed: function () {
        return state.get() === false;
      },
      setCollapsed: $_nsetdwbjctdj67z.curry(state.set, false),
      setExpanded: $_nsetdwbjctdj67z.curry(state.set, true),
      readState: readState
    });
  };
  var $_3jeoh614xjctdj7jz = { init: init$4 };

  var Sliding = $_b61y2hw4jctdj66j.create({
    fields: SlidingSchema,
    name: 'sliding',
    active: $_gg9mtz14ujctdj7ji,
    apis: $_ah0mmo14vjctdj7jm,
    state: $_3jeoh614xjctdj7jz
  });

  var build$2 = function (refresh, scrollIntoView) {
    var dropup = $_2dgzqw12kjctdj75x.build(Container.sketch({
      dom: {
        tag: 'div',
        classes: $_79dnpgz1jctdj6nm.resolve('dropup')
      },
      components: [],
      containerBehaviours: $_b61y2hw4jctdj66j.derive([
        Replacing.config({}),
        Sliding.config({
          closedClass: $_79dnpgz1jctdj6nm.resolve('dropup-closed'),
          openClass: $_79dnpgz1jctdj6nm.resolve('dropup-open'),
          shrinkingClass: $_79dnpgz1jctdj6nm.resolve('dropup-shrinking'),
          growingClass: $_79dnpgz1jctdj6nm.resolve('dropup-growing'),
          dimension: { property: 'height' },
          onShrunk: function (component) {
            refresh();
            scrollIntoView();
            Replacing.set(component, []);
          },
          onGrown: function (component) {
            refresh();
            scrollIntoView();
          }
        }),
        $_bd3cf7z0jctdj6nk.orientation(function (component, data) {
          disappear($_nsetdwbjctdj67z.noop);
        })
      ])
    }));
    var appear = function (menu, update, component) {
      if (Sliding.hasShrunk(dropup) === true && Sliding.isTransitioning(dropup) === false) {
        window.requestAnimationFrame(function () {
          update(component);
          Replacing.set(dropup, [menu()]);
          Sliding.grow(dropup);
        });
      }
    };
    var disappear = function (onReadyToShrink) {
      window.requestAnimationFrame(function () {
        onReadyToShrink();
        Sliding.shrink(dropup);
      });
    };
    return {
      appear: appear,
      disappear: disappear,
      component: $_nsetdwbjctdj67z.constant(dropup),
      element: dropup.element
    };
  };
  var $_99hwrx14sjctdj7ja = { build: build$2 };

  var isDangerous = function (event) {
    return event.raw().which === $_5b6xk3zejctdj6p2.BACKSPACE()[0] && !$_85zw6hw9jctdj67p.contains([
      'input',
      'textarea'
    ], $_13f4i6xxjctdj6dv.name(event.target()));
  };
  var isFirefox = $_3owkqnwgjctdj687.detect().browser.isFirefox();
  var settingsSchema = $_ebkmgyxhjctdj6cd.objOfOnly([
    $_e1v8vrx2jctdj6ag.strictFunction('triggerEvent'),
    $_e1v8vrx2jctdj6ag.strictFunction('broadcastEvent'),
    $_e1v8vrx2jctdj6ag.defaulted('stopBackspace', true)
  ]);
  var bindFocus = function (container, handler) {
    if (isFirefox) {
      return $_5nc70r13kjctdj7d3.capture(container, 'focus', handler);
    } else {
      return $_5nc70r13kjctdj7d3.bind(container, 'focusin', handler);
    }
  };
  var bindBlur = function (container, handler) {
    if (isFirefox) {
      return $_5nc70r13kjctdj7d3.capture(container, 'blur', handler);
    } else {
      return $_5nc70r13kjctdj7d3.bind(container, 'focusout', handler);
    }
  };
  var setup$2 = function (container, rawSettings) {
    var settings = $_ebkmgyxhjctdj6cd.asRawOrDie('Getting GUI events settings', settingsSchema, rawSettings);
    var pointerEvents = $_3owkqnwgjctdj687.detect().deviceType.isTouch() ? [
      'touchstart',
      'touchmove',
      'touchend',
      'gesturestart'
    ] : [
      'mousedown',
      'mouseup',
      'mouseover',
      'mousemove',
      'mouseout',
      'click'
    ];
    var tapEvent = $_3xl4lb13rjctdj7e6.monitor(settings);
    var simpleEvents = $_85zw6hw9jctdj67p.map(pointerEvents.concat([
      'selectstart',
      'input',
      'contextmenu',
      'change',
      'transitionend',
      'dragstart',
      'dragover',
      'drop'
    ]), function (type) {
      return $_5nc70r13kjctdj7d3.bind(container, type, function (event) {
        tapEvent.fireIfReady(event, type).each(function (tapStopped) {
          if (tapStopped)
            event.kill();
        });
        var stopped = settings.triggerEvent(type, event);
        if (stopped)
          event.kill();
      });
    });
    var onKeydown = $_5nc70r13kjctdj7d3.bind(container, 'keydown', function (event) {
      var stopped = settings.triggerEvent('keydown', event);
      if (stopped)
        event.kill();
      else if (settings.stopBackspace === true && isDangerous(event)) {
        event.prevent();
      }
    });
    var onFocusIn = bindFocus(container, function (event) {
      var stopped = settings.triggerEvent('focusin', event);
      if (stopped)
        event.kill();
    });
    var onFocusOut = bindBlur(container, function (event) {
      var stopped = settings.triggerEvent('focusout', event);
      if (stopped)
        event.kill();
      setTimeout(function () {
        settings.triggerEvent($_8rri5bwwjctdj69j.postBlur(), event);
      }, 0);
    });
    var defaultView = $_83fh6gy3jctdj6ef.defaultView(container);
    var onWindowScroll = $_5nc70r13kjctdj7d3.bind(defaultView, 'scroll', function (event) {
      var stopped = settings.broadcastEvent($_8rri5bwwjctdj69j.windowScroll(), event);
      if (stopped)
        event.kill();
    });
    var unbind = function () {
      $_85zw6hw9jctdj67p.each(simpleEvents, function (e) {
        e.unbind();
      });
      onKeydown.unbind();
      onFocusIn.unbind();
      onFocusOut.unbind();
      onWindowScroll.unbind();
    };
    return { unbind: unbind };
  };
  var $_7uv1e6150jctdj7ko = { setup: setup$2 };

  var derive$3 = function (rawEvent, rawTarget) {
    var source = $_41rzpex6jctdj6bg.readOptFrom(rawEvent, 'target').map(function (getTarget) {
      return getTarget();
    }).getOr(rawTarget);
    return Cell(source);
  };
  var $_5d3fvz152jctdj7l9 = { derive: derive$3 };

  var fromSource = function (event, source) {
    var stopper = Cell(false);
    var cutter = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    var cut = function () {
      cutter.set(true);
    };
    return {
      stop: stop,
      cut: cut,
      isStopped: stopper.get,
      isCut: cutter.get,
      event: $_nsetdwbjctdj67z.constant(event),
      setSource: source.set,
      getSource: source.get
    };
  };
  var fromExternal = function (event) {
    var stopper = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    return {
      stop: stop,
      cut: $_nsetdwbjctdj67z.noop,
      isStopped: stopper.get,
      isCut: $_nsetdwbjctdj67z.constant(false),
      event: $_nsetdwbjctdj67z.constant(event),
      setTarget: $_nsetdwbjctdj67z.die(new Error('Cannot set target of a broadcasted event')),
      getTarget: $_nsetdwbjctdj67z.die(new Error('Cannot get target of a broadcasted event'))
    };
  };
  var fromTarget = function (event, target) {
    var source = Cell(target);
    return fromSource(event, source);
  };
  var $_fw9z7o153jctdj7lc = {
    fromSource: fromSource,
    fromExternal: fromExternal,
    fromTarget: fromTarget
  };

  var adt$6 = $_e0y7kwx4jctdj6ap.generate([
    { stopped: [] },
    { resume: ['element'] },
    { complete: [] }
  ]);
  var doTriggerHandler = function (lookup, eventType, rawEvent, target, source, logger) {
    var handler = lookup(eventType, target);
    var simulatedEvent = $_fw9z7o153jctdj7lc.fromSource(rawEvent, source);
    return handler.fold(function () {
      logger.logEventNoHandlers(eventType, target);
      return adt$6.complete();
    }, function (handlerInfo) {
      var descHandler = handlerInfo.descHandler();
      var eventHandler = $_g7cw2912vjctdj78k.getHandler(descHandler);
      eventHandler(simulatedEvent);
      if (simulatedEvent.isStopped()) {
        logger.logEventStopped(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.stopped();
      } else if (simulatedEvent.isCut()) {
        logger.logEventCut(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.complete();
      } else
        return $_83fh6gy3jctdj6ef.parent(handlerInfo.element()).fold(function () {
          logger.logNoParent(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.complete();
        }, function (parent) {
          logger.logEventResponse(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.resume(parent);
        });
    });
  };
  var doTriggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, source, logger) {
    return doTriggerHandler(lookup, eventType, rawEvent, rawTarget, source, logger).fold(function () {
      return true;
    }, function (parent) {
      return doTriggerOnUntilStopped(lookup, eventType, rawEvent, parent, source, logger);
    }, function () {
      return false;
    });
  };
  var triggerHandler = function (lookup, eventType, rawEvent, target, logger) {
    var source = $_5d3fvz152jctdj7l9.derive(rawEvent, target);
    return doTriggerHandler(lookup, eventType, rawEvent, target, source, logger);
  };
  var broadcast = function (listeners, rawEvent, logger) {
    var simulatedEvent = $_fw9z7o153jctdj7lc.fromExternal(rawEvent);
    $_85zw6hw9jctdj67p.each(listeners, function (listener) {
      var descHandler = listener.descHandler();
      var handler = $_g7cw2912vjctdj78k.getHandler(descHandler);
      handler(simulatedEvent);
    });
    return simulatedEvent.isStopped();
  };
  var triggerUntilStopped = function (lookup, eventType, rawEvent, logger) {
    var rawTarget = rawEvent.target();
    return triggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, logger);
  };
  var triggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, logger) {
    var source = $_5d3fvz152jctdj7l9.derive(rawEvent, rawTarget);
    return doTriggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, source, logger);
  };
  var $_7ih98y151jctdj7l3 = {
    triggerHandler: triggerHandler,
    triggerUntilStopped: triggerUntilStopped,
    triggerOnUntilStopped: triggerOnUntilStopped,
    broadcast: broadcast
  };

  var closest$4 = function (target, transform, isRoot) {
    var delegate = $_as3f1tyijctdj6lg.closest(target, function (elem) {
      return transform(elem).isSome();
    }, isRoot);
    return delegate.bind(transform);
  };
  var $_fpml01156jctdj7lr = { closest: closest$4 };

  var eventHandler = $_es1bl5xmjctdj6d5.immutable('element', 'descHandler');
  var messageHandler = function (id, handler) {
    return {
      id: $_nsetdwbjctdj67z.constant(id),
      descHandler: $_nsetdwbjctdj67z.constant(handler)
    };
  };
  var EventRegistry = function () {
    var registry = {};
    var registerId = function (extraArgs, id, events) {
      $_sbi53x0jctdj69s.each(events, function (v, k) {
        var handlers = registry[k] !== undefined ? registry[k] : {};
        handlers[id] = $_g7cw2912vjctdj78k.curryArgs(v, extraArgs);
        registry[k] = handlers;
      });
    };
    var findHandler = function (handlers, elem) {
      return $_4uq8p610mjctdj6vs.read(elem).fold(function (err) {
        return $_1k5gi0wajctdj67w.none();
      }, function (id) {
        var reader = $_41rzpex6jctdj6bg.readOpt(id);
        return handlers.bind(reader).map(function (descHandler) {
          return eventHandler(elem, descHandler);
        });
      });
    };
    var filterByType = function (type) {
      return $_41rzpex6jctdj6bg.readOptFrom(registry, type).map(function (handlers) {
        return $_sbi53x0jctdj69s.mapToArray(handlers, function (f, id) {
          return messageHandler(id, f);
        });
      }).getOr([]);
    };
    var find = function (isAboveRoot, type, target) {
      var readType = $_41rzpex6jctdj6bg.readOpt(type);
      var handlers = readType(registry);
      return $_fpml01156jctdj7lr.closest(target, function (elem) {
        return findHandler(handlers, elem);
      }, isAboveRoot);
    };
    var unregisterId = function (id) {
      $_sbi53x0jctdj69s.each(registry, function (handlersById, eventName) {
        if (handlersById.hasOwnProperty(id))
          delete handlersById[id];
      });
    };
    return {
      registerId: registerId,
      unregisterId: unregisterId,
      filterByType: filterByType,
      find: find
    };
  };

  var Registry = function () {
    var events = EventRegistry();
    var components = {};
    var readOrTag = function (component) {
      var elem = component.element();
      return $_4uq8p610mjctdj6vs.read(elem).fold(function () {
        return $_4uq8p610mjctdj6vs.write('uid-', component.element());
      }, function (uid) {
        return uid;
      });
    };
    var failOnDuplicate = function (component, tagId) {
      var conflict = components[tagId];
      if (conflict === component)
        unregister(component);
      else
        throw new Error('The tagId "' + tagId + '" is already used by: ' + $_e0dlb6y9jctdj6kx.element(conflict.element()) + '\nCannot use it for: ' + $_e0dlb6y9jctdj6kx.element(component.element()) + '\n' + 'The conflicting element is' + ($_bi2sxwy7jctdj6kl.inBody(conflict.element()) ? ' ' : ' not ') + 'already in the DOM');
    };
    var register = function (component) {
      var tagId = readOrTag(component);
      if ($_41rzpex6jctdj6bg.hasKey(components, tagId))
        failOnDuplicate(component, tagId);
      var extraArgs = [component];
      events.registerId(extraArgs, tagId, component.events());
      components[tagId] = component;
    };
    var unregister = function (component) {
      $_4uq8p610mjctdj6vs.read(component.element()).each(function (tagId) {
        components[tagId] = undefined;
        events.unregisterId(tagId);
      });
    };
    var filter = function (type) {
      return events.filterByType(type);
    };
    var find = function (isAboveRoot, type, target) {
      return events.find(isAboveRoot, type, target);
    };
    var getById = function (id) {
      return $_41rzpex6jctdj6bg.readOpt(id)(components);
    };
    return {
      find: find,
      filter: filter,
      register: register,
      unregister: unregister,
      getById: getById
    };
  };

  var create$6 = function () {
    var root = $_2dgzqw12kjctdj75x.build(Container.sketch({ dom: { tag: 'div' } }));
    return takeover(root);
  };
  var takeover = function (root) {
    var isAboveRoot = function (el) {
      return $_83fh6gy3jctdj6ef.parent(root.element()).fold(function () {
        return true;
      }, function (parent) {
        return $_a6ax5bw8jctdj67h.eq(el, parent);
      });
    };
    var registry = Registry();
    var lookup = function (eventName, target) {
      return registry.find(isAboveRoot, eventName, target);
    };
    var domEvents = $_7uv1e6150jctdj7ko.setup(root.element(), {
      triggerEvent: function (eventName, event) {
        return $_8bd8kpy8jctdj6ko.monitorEvent(eventName, event.target(), function (logger) {
          return $_7ih98y151jctdj7l3.triggerUntilStopped(lookup, eventName, event, logger);
        });
      },
      broadcastEvent: function (eventName, event) {
        var listeners = registry.filter(eventName);
        return $_7ih98y151jctdj7l3.broadcast(listeners, event);
      }
    });
    var systemApi = SystemApi({
      debugInfo: $_nsetdwbjctdj67z.constant('real'),
      triggerEvent: function (customType, target, data) {
        $_8bd8kpy8jctdj6ko.monitorEvent(customType, target, function (logger) {
          $_7ih98y151jctdj7l3.triggerOnUntilStopped(lookup, customType, data, target, logger);
        });
      },
      triggerFocus: function (target, originator) {
        $_4uq8p610mjctdj6vs.read(target).fold(function () {
          $_3yi9jcygjctdj6la.focus(target);
        }, function (_alloyId) {
          $_8bd8kpy8jctdj6ko.monitorEvent($_8rri5bwwjctdj69j.focus(), target, function (logger) {
            $_7ih98y151jctdj7l3.triggerHandler(lookup, $_8rri5bwwjctdj69j.focus(), {
              originator: $_nsetdwbjctdj67z.constant(originator),
              target: $_nsetdwbjctdj67z.constant(target)
            }, target, logger);
          });
        });
      },
      triggerEscape: function (comp, simulatedEvent) {
        systemApi.triggerEvent('keydown', comp.element(), simulatedEvent.event());
      },
      getByUid: function (uid) {
        return getByUid(uid);
      },
      getByDom: function (elem) {
        return getByDom(elem);
      },
      build: $_2dgzqw12kjctdj75x.build,
      addToGui: function (c) {
        add(c);
      },
      removeFromGui: function (c) {
        remove(c);
      },
      addToWorld: function (c) {
        addToWorld(c);
      },
      removeFromWorld: function (c) {
        removeFromWorld(c);
      },
      broadcast: function (message) {
        broadcast(message);
      },
      broadcastOn: function (channels, message) {
        broadcastOn(channels, message);
      }
    });
    var addToWorld = function (component) {
      component.connect(systemApi);
      if (!$_13f4i6xxjctdj6dv.isText(component.element())) {
        registry.register(component);
        $_85zw6hw9jctdj67p.each(component.components(), addToWorld);
        systemApi.triggerEvent($_8rri5bwwjctdj69j.systemInit(), component.element(), { target: $_nsetdwbjctdj67z.constant(component.element()) });
      }
    };
    var removeFromWorld = function (component) {
      if (!$_13f4i6xxjctdj6dv.isText(component.element())) {
        $_85zw6hw9jctdj67p.each(component.components(), removeFromWorld);
        registry.unregister(component);
      }
      component.disconnect();
    };
    var add = function (component) {
      $_9uszbdy1jctdj6e3.attach(root, component);
    };
    var remove = function (component) {
      $_9uszbdy1jctdj6e3.detach(component);
    };
    var destroy = function () {
      domEvents.unbind();
      $_7upgfty5jctdj6kf.remove(root.element());
    };
    var broadcastData = function (data) {
      var receivers = registry.filter($_8rri5bwwjctdj69j.receive());
      $_85zw6hw9jctdj67p.each(receivers, function (receiver) {
        var descHandler = receiver.descHandler();
        var handler = $_g7cw2912vjctdj78k.getHandler(descHandler);
        handler(data);
      });
    };
    var broadcast = function (message) {
      broadcastData({
        universal: $_nsetdwbjctdj67z.constant(true),
        data: $_nsetdwbjctdj67z.constant(message)
      });
    };
    var broadcastOn = function (channels, message) {
      broadcastData({
        universal: $_nsetdwbjctdj67z.constant(false),
        channels: $_nsetdwbjctdj67z.constant(channels),
        data: $_nsetdwbjctdj67z.constant(message)
      });
    };
    var getByUid = function (uid) {
      return registry.getById(uid).fold(function () {
        return $_dk7ndjx8jctdj6bo.error(new Error('Could not find component with uid: "' + uid + '" in system.'));
      }, $_dk7ndjx8jctdj6bo.value);
    };
    var getByDom = function (elem) {
      return $_4uq8p610mjctdj6vs.read(elem).bind(getByUid);
    };
    addToWorld(root);
    return {
      root: $_nsetdwbjctdj67z.constant(root),
      element: root.element,
      destroy: destroy,
      add: add,
      remove: remove,
      getByUid: getByUid,
      getByDom: getByDom,
      addToWorld: addToWorld,
      removeFromWorld: removeFromWorld,
      broadcast: broadcast,
      broadcastOn: broadcastOn
    };
  };
  var $_3ddait14zjctdj7ka = {
    create: create$6,
    takeover: takeover
  };

  var READ_ONLY_MODE_CLASS = $_nsetdwbjctdj67z.constant($_79dnpgz1jctdj6nm.resolve('readonly-mode'));
  var EDIT_MODE_CLASS = $_nsetdwbjctdj67z.constant($_79dnpgz1jctdj6nm.resolve('edit-mode'));
  var OuterContainer = function (spec) {
    var root = $_2dgzqw12kjctdj75x.build(Container.sketch({
      dom: { classes: [$_79dnpgz1jctdj6nm.resolve('outer-container')].concat(spec.classes) },
      containerBehaviours: $_b61y2hw4jctdj66j.derive([Swapping.config({
          alpha: READ_ONLY_MODE_CLASS(),
          omega: EDIT_MODE_CLASS()
        })])
    }));
    return $_3ddait14zjctdj7ka.takeover(root);
  };

  var AndroidRealm = function (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_79dnpgz1jctdj6nm.resolve('android-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_b95ubz12ajctdj740.api();
    var switchToEdit = $_1yzt2z14rjctdj7iy.makeEditSwitch(webapp);
    var socket = $_1yzt2z14rjctdj7iy.makeSocket();
    var dropup = $_99hwrx14sjctdj7ja.build($_nsetdwbjctdj67z.noop, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_6gix3l13njctdj7dd.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        w.exit();
        Replacing.remove(socket, switchToEdit);
      });
    };
    var updateMode = function (readOnly) {
      $_1yzt2z14rjctdj7iy.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_nsetdwbjctdj67z.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_nsetdwbjctdj67z.constant(socket),
      dropup: $_nsetdwbjctdj67z.constant(dropup)
    };
  };

  var initEvents$1 = function (editorApi, iosApi, toolstrip, socket, dropup) {
    var saveSelectionFirst = function () {
      iosApi.run(function (api) {
        api.highlightSelection();
      });
    };
    var refreshIosSelection = function () {
      iosApi.run(function (api) {
        api.refreshSelection();
      });
    };
    var scrollToY = function (yTop, height) {
      var y = yTop - socket.dom().scrollTop;
      iosApi.run(function (api) {
        api.scrollIntoView(y, y + height);
      });
    };
    var scrollToElement = function (target) {
      scrollToY(iosApi, socket);
    };
    var scrollToCursor = function () {
      editorApi.getCursorBox().each(function (box) {
        scrollToY(box.top(), box.height());
      });
    };
    var clearSelection = function () {
      iosApi.run(function (api) {
        api.clearSelection();
      });
    };
    var clearAndRefresh = function () {
      clearSelection();
      refreshThrottle.throttle();
    };
    var refreshView = function () {
      scrollToCursor();
      iosApi.run(function (api) {
        api.syncHeight();
      });
    };
    var reposition = function () {
      var toolbarHeight = $_g7q7mszrjctdj6qd.get(toolstrip);
      iosApi.run(function (api) {
        api.setViewportOffset(toolbarHeight);
      });
      refreshIosSelection();
      refreshView();
    };
    var toEditing = function () {
      iosApi.run(function (api) {
        api.toEditing();
      });
    };
    var toReading = function () {
      iosApi.run(function (api) {
        api.toReading();
      });
    };
    var onToolbarTouch = function (event) {
      iosApi.run(function (api) {
        api.onToolbarTouch(event);
      });
    };
    var tapping = $_2selrm13qjctdj7e2.monitor(editorApi);
    var refreshThrottle = $_eufz8p14kjctdj7hz.last(refreshView, 300);
    var listeners = [
      editorApi.onKeyup(clearAndRefresh),
      editorApi.onNodeChanged(refreshIosSelection),
      editorApi.onDomChanged(refreshThrottle.throttle),
      editorApi.onDomChanged(refreshIosSelection),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        refreshThrottle.throttle();
      }),
      editorApi.onScrollToElement(function (event) {
        scrollToElement(event.element());
      }),
      editorApi.onToEditing(toEditing),
      editorApi.onToReading(toReading),
      $_5nc70r13kjctdj7d3.bind(editorApi.doc(), 'touchend', function (touchEvent) {
        if ($_a6ax5bw8jctdj67h.eq(editorApi.html(), touchEvent.target()) || $_a6ax5bw8jctdj67h.eq(editorApi.body(), touchEvent.target())) {
        }
      }),
      $_5nc70r13kjctdj7d3.bind(toolstrip, 'transitionend', function (transitionEvent) {
        if (transitionEvent.raw().propertyName === 'height') {
          reposition();
        }
      }),
      $_5nc70r13kjctdj7d3.capture(toolstrip, 'touchstart', function (touchEvent) {
        saveSelectionFirst();
        onToolbarTouch(touchEvent);
        editorApi.onTouchToolstrip();
      }),
      $_5nc70r13kjctdj7d3.bind(editorApi.body(), 'touchstart', function (evt) {
        clearSelection();
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_5nc70r13kjctdj7d3.bind(editorApi.body(), 'click', function (event) {
        event.kill();
      }),
      $_5nc70r13kjctdj7d3.bind(toolstrip, 'touchmove', function () {
        editorApi.onToolbarScrollStart();
      })
    ];
    var destroy = function () {
      $_85zw6hw9jctdj67p.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_1be9og15ajctdj7mj = { initEvents: initEvents$1 };

  var refreshInput = function (input) {
    var start = input.dom().selectionStart;
    var end = input.dom().selectionEnd;
    var dir = input.dom().selectionDirection;
    setTimeout(function () {
      input.dom().setSelectionRange(start, end, dir);
      $_3yi9jcygjctdj6la.focus(input);
    }, 50);
  };
  var refresh = function (winScope) {
    var sel = winScope.getSelection();
    if (sel.rangeCount > 0) {
      var br = sel.getRangeAt(0);
      var r = winScope.document.createRange();
      r.setStart(br.startContainer, br.startOffset);
      r.setEnd(br.endContainer, br.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    }
  };
  var $_6bo3mi15ejctdj7nq = {
    refreshInput: refreshInput,
    refresh: refresh
  };

  var resume$1 = function (cWin, frame) {
    $_3yi9jcygjctdj6la.active().each(function (active) {
      if (!$_a6ax5bw8jctdj67h.eq(active, frame)) {
        $_3yi9jcygjctdj6la.blur(active);
      }
    });
    cWin.focus();
    $_3yi9jcygjctdj6la.focus($_bvayi3wtjctdj69a.fromDom(cWin.document.body));
    $_6bo3mi15ejctdj7nq.refresh(cWin);
  };
  var $_d70jod15djctdj7nm = { resume: resume$1 };

  var FakeSelection = function (win, frame) {
    var doc = win.document;
    var container = $_bvayi3wtjctdj69a.fromTag('div');
    $_4vb8dhxujctdj6dm.add(container, $_79dnpgz1jctdj6nm.resolve('unfocused-selections'));
    $_2enstby2jctdj6ed.append($_bvayi3wtjctdj69a.fromDom(doc.documentElement), container);
    var onTouch = $_5nc70r13kjctdj7d3.bind(container, 'touchstart', function (event) {
      event.prevent();
      $_d70jod15djctdj7nm.resume(win, frame);
      clear();
    });
    var make = function (rectangle) {
      var span = $_bvayi3wtjctdj69a.fromTag('span');
      $_901pci12yjctdj799.add(span, [
        $_79dnpgz1jctdj6nm.resolve('layer-editor'),
        $_79dnpgz1jctdj6nm.resolve('unfocused-selection')
      ]);
      $_c7wjf9zsjctdj6qf.setAll(span, {
        left: rectangle.left() + 'px',
        top: rectangle.top() + 'px',
        width: rectangle.width() + 'px',
        height: rectangle.height() + 'px'
      });
      return span;
    };
    var update = function () {
      clear();
      var rectangles = $_dps9w213wjctdj7eu.getRectangles(win);
      var spans = $_85zw6hw9jctdj67p.map(rectangles, make);
      $_9d7i1ky6jctdj6ki.append(container, spans);
    };
    var clear = function () {
      $_7upgfty5jctdj6kf.empty(container);
    };
    var destroy = function () {
      onTouch.unbind();
      $_7upgfty5jctdj6kf.remove(container);
    };
    var isActive = function () {
      return $_83fh6gy3jctdj6ef.children(container).length > 0;
    };
    return {
      update: update,
      isActive: isActive,
      destroy: destroy,
      clear: clear
    };
  };

  var nu$9 = function (baseFn) {
    var data = $_1k5gi0wajctdj67w.none();
    var callbacks = [];
    var map = function (f) {
      return nu$9(function (nCallback) {
        get(function (data) {
          nCallback(f(data));
        });
      });
    };
    var get = function (nCallback) {
      if (isReady())
        call(nCallback);
      else
        callbacks.push(nCallback);
    };
    var set = function (x) {
      data = $_1k5gi0wajctdj67w.some(x);
      run(callbacks);
      callbacks = [];
    };
    var isReady = function () {
      return data.isSome();
    };
    var run = function (cbs) {
      $_85zw6hw9jctdj67p.each(cbs, call);
    };
    var call = function (cb) {
      data.each(function (x) {
        setTimeout(function () {
          cb(x);
        }, 0);
      });
    };
    baseFn(set);
    return {
      get: get,
      map: map,
      isReady: isReady
    };
  };
  var pure$2 = function (a) {
    return nu$9(function (callback) {
      callback(a);
    });
  };
  var $_xfvu115hjctdj7o1 = {
    nu: nu$9,
    pure: pure$2
  };

  var bounce = function (f) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      var me = this;
      setTimeout(function () {
        f.apply(me, args);
      }, 0);
    };
  };
  var $_g3ll7x15ijctdj7o3 = { bounce: bounce };

  var nu$8 = function (baseFn) {
    var get = function (callback) {
      baseFn($_g3ll7x15ijctdj7o3.bounce(callback));
    };
    var map = function (fab) {
      return nu$8(function (callback) {
        get(function (a) {
          var value = fab(a);
          callback(value);
        });
      });
    };
    var bind = function (aFutureB) {
      return nu$8(function (callback) {
        get(function (a) {
          aFutureB(a).get(callback);
        });
      });
    };
    var anonBind = function (futureB) {
      return nu$8(function (callback) {
        get(function (a) {
          futureB.get(callback);
        });
      });
    };
    var toLazy = function () {
      return $_xfvu115hjctdj7o1.nu(get);
    };
    return {
      map: map,
      bind: bind,
      anonBind: anonBind,
      toLazy: toLazy,
      get: get
    };
  };
  var pure$1 = function (a) {
    return nu$8(function (callback) {
      callback(a);
    });
  };
  var $_1p26gk15gjctdj7o0 = {
    nu: nu$8,
    pure: pure$1
  };

  var adjust = function (value, destination, amount) {
    if (Math.abs(value - destination) <= amount) {
      return $_1k5gi0wajctdj67w.none();
    } else if (value < destination) {
      return $_1k5gi0wajctdj67w.some(value + amount);
    } else {
      return $_1k5gi0wajctdj67w.some(value - amount);
    }
  };
  var create$8 = function () {
    var interval = null;
    var animate = function (getCurrent, destination, amount, increment, doFinish, rate) {
      var finished = false;
      var finish = function (v) {
        finished = true;
        doFinish(v);
      };
      clearInterval(interval);
      var abort = function (v) {
        clearInterval(interval);
        finish(v);
      };
      interval = setInterval(function () {
        var value = getCurrent();
        adjust(value, destination, amount).fold(function () {
          clearInterval(interval);
          finish(destination);
        }, function (s) {
          increment(s, abort);
          if (!finished) {
            var newValue = getCurrent();
            if (newValue !== s || Math.abs(newValue - destination) > Math.abs(value - destination)) {
              clearInterval(interval);
              finish(destination);
            }
          }
        });
      }, rate);
    };
    return { animate: animate };
  };
  var $_6cbzcx15jjctdj7o5 = {
    create: create$8,
    adjust: adjust
  };

  var findDevice = function (deviceWidth, deviceHeight) {
    var devices = [
      {
        width: 320,
        height: 480,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 320,
        height: 568,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 375,
        height: 667,
        keyboard: {
          portrait: 305,
          landscape: 240
        }
      },
      {
        width: 414,
        height: 736,
        keyboard: {
          portrait: 320,
          landscape: 240
        }
      },
      {
        width: 768,
        height: 1024,
        keyboard: {
          portrait: 320,
          landscape: 400
        }
      },
      {
        width: 1024,
        height: 1366,
        keyboard: {
          portrait: 380,
          landscape: 460
        }
      }
    ];
    return $_3dekh2yejctdj6l8.findMap(devices, function (device) {
      return deviceWidth <= device.width && deviceHeight <= device.height ? $_1k5gi0wajctdj67w.some(device.keyboard) : $_1k5gi0wajctdj67w.none();
    }).getOr({
      portrait: deviceHeight / 5,
      landscape: deviceWidth / 4
    });
  };
  var $_1kwnbs15mjctdj7ou = { findDevice: findDevice };

  var softKeyboardLimits = function (outerWindow) {
    return $_1kwnbs15mjctdj7ou.findDevice(outerWindow.screen.width, outerWindow.screen.height);
  };
  var accountableKeyboardHeight = function (outerWindow) {
    var portrait = $_erf7kp13jjctdj7cw.get(outerWindow).isPortrait();
    var limits = softKeyboardLimits(outerWindow);
    var keyboard = portrait ? limits.portrait : limits.landscape;
    var visualScreenHeight = portrait ? outerWindow.screen.height : outerWindow.screen.width;
    return visualScreenHeight - outerWindow.innerHeight > keyboard ? 0 : keyboard;
  };
  var getGreenzone = function (socket, dropup) {
    var outerWindow = $_83fh6gy3jctdj6ef.owner(socket).dom().defaultView;
    var viewportHeight = $_g7q7mszrjctdj6qd.get(socket) + $_g7q7mszrjctdj6qd.get(dropup);
    var acc = accountableKeyboardHeight(outerWindow);
    return viewportHeight - acc;
  };
  var updatePadding = function (contentBody, socket, dropup) {
    var greenzoneHeight = getGreenzone(socket, dropup);
    var deltaHeight = $_g7q7mszrjctdj6qd.get(socket) + $_g7q7mszrjctdj6qd.get(dropup) - greenzoneHeight;
    $_c7wjf9zsjctdj6qf.set(contentBody, 'padding-bottom', deltaHeight + 'px');
  };
  var $_e8ifpg15ljctdj7op = {
    getGreenzone: getGreenzone,
    updatePadding: updatePadding
  };

  var fixture = $_e0y7kwx4jctdj6ap.generate([
    {
      fixed: [
        'element',
        'property',
        'offsetY'
      ]
    },
    {
      scroller: [
        'element',
        'offsetY'
      ]
    }
  ]);
  var yFixedData = 'data-' + $_79dnpgz1jctdj6nm.resolve('position-y-fixed');
  var yFixedProperty = 'data-' + $_79dnpgz1jctdj6nm.resolve('y-property');
  var yScrollingData = 'data-' + $_79dnpgz1jctdj6nm.resolve('scrolling');
  var windowSizeData = 'data-' + $_79dnpgz1jctdj6nm.resolve('last-window-height');
  var getYFixedData = function (element) {
    return $_65n5i313vjctdj7es.safeParse(element, yFixedData);
  };
  var getYFixedProperty = function (element) {
    return $_ftckpcxwjctdj6dp.get(element, yFixedProperty);
  };
  var getLastWindowSize = function (element) {
    return $_65n5i313vjctdj7es.safeParse(element, windowSizeData);
  };
  var classifyFixed = function (element, offsetY) {
    var prop = getYFixedProperty(element);
    return fixture.fixed(element, prop, offsetY);
  };
  var classifyScrolling = function (element, offsetY) {
    return fixture.scroller(element, offsetY);
  };
  var classify = function (element) {
    var offsetY = getYFixedData(element);
    var classifier = $_ftckpcxwjctdj6dp.get(element, yScrollingData) === 'true' ? classifyScrolling : classifyFixed;
    return classifier(element, offsetY);
  };
  var findFixtures = function (container) {
    var candidates = $_aw19z0zkjctdj6pq.descendants(container, '[' + yFixedData + ']');
    return $_85zw6hw9jctdj67p.map(candidates, classify);
  };
  var takeoverToolbar = function (toolbar) {
    var oldToolbarStyle = $_ftckpcxwjctdj6dp.get(toolbar, 'style');
    $_c7wjf9zsjctdj6qf.setAll(toolbar, {
      position: 'absolute',
      top: '0px'
    });
    $_ftckpcxwjctdj6dp.set(toolbar, yFixedData, '0px');
    $_ftckpcxwjctdj6dp.set(toolbar, yFixedProperty, 'top');
    var restore = function () {
      $_ftckpcxwjctdj6dp.set(toolbar, 'style', oldToolbarStyle || '');
      $_ftckpcxwjctdj6dp.remove(toolbar, yFixedData);
      $_ftckpcxwjctdj6dp.remove(toolbar, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverViewport = function (toolbarHeight, height, viewport) {
    var oldViewportStyle = $_ftckpcxwjctdj6dp.get(viewport, 'style');
    $_1wciqt13hjctdj7cp.register(viewport);
    $_c7wjf9zsjctdj6qf.setAll(viewport, {
      position: 'absolute',
      height: height + 'px',
      width: '100%',
      top: toolbarHeight + 'px'
    });
    $_ftckpcxwjctdj6dp.set(viewport, yFixedData, toolbarHeight + 'px');
    $_ftckpcxwjctdj6dp.set(viewport, yScrollingData, 'true');
    $_ftckpcxwjctdj6dp.set(viewport, yFixedProperty, 'top');
    var restore = function () {
      $_1wciqt13hjctdj7cp.deregister(viewport);
      $_ftckpcxwjctdj6dp.set(viewport, 'style', oldViewportStyle || '');
      $_ftckpcxwjctdj6dp.remove(viewport, yFixedData);
      $_ftckpcxwjctdj6dp.remove(viewport, yScrollingData);
      $_ftckpcxwjctdj6dp.remove(viewport, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverDropup = function (dropup, toolbarHeight, viewportHeight) {
    var oldDropupStyle = $_ftckpcxwjctdj6dp.get(dropup, 'style');
    $_c7wjf9zsjctdj6qf.setAll(dropup, {
      position: 'absolute',
      bottom: '0px'
    });
    $_ftckpcxwjctdj6dp.set(dropup, yFixedData, '0px');
    $_ftckpcxwjctdj6dp.set(dropup, yFixedProperty, 'bottom');
    var restore = function () {
      $_ftckpcxwjctdj6dp.set(dropup, 'style', oldDropupStyle || '');
      $_ftckpcxwjctdj6dp.remove(dropup, yFixedData);
      $_ftckpcxwjctdj6dp.remove(dropup, yFixedProperty);
    };
    return { restore: restore };
  };
  var deriveViewportHeight = function (viewport, toolbarHeight, dropupHeight) {
    var outerWindow = $_83fh6gy3jctdj6ef.owner(viewport).dom().defaultView;
    var winH = outerWindow.innerHeight;
    $_ftckpcxwjctdj6dp.set(viewport, windowSizeData, winH + 'px');
    return winH - toolbarHeight - dropupHeight;
  };
  var takeover$1 = function (viewport, contentBody, toolbar, dropup) {
    var outerWindow = $_83fh6gy3jctdj6ef.owner(viewport).dom().defaultView;
    var toolbarSetup = takeoverToolbar(toolbar);
    var toolbarHeight = $_g7q7mszrjctdj6qd.get(toolbar);
    var dropupHeight = $_g7q7mszrjctdj6qd.get(dropup);
    var viewportHeight = deriveViewportHeight(viewport, toolbarHeight, dropupHeight);
    var viewportSetup = takeoverViewport(toolbarHeight, viewportHeight, viewport);
    var dropupSetup = takeoverDropup(dropup, toolbarHeight, viewportHeight);
    var isActive = true;
    var restore = function () {
      isActive = false;
      toolbarSetup.restore();
      viewportSetup.restore();
      dropupSetup.restore();
    };
    var isExpanding = function () {
      var currentWinHeight = outerWindow.innerHeight;
      var lastWinHeight = getLastWindowSize(viewport);
      return currentWinHeight > lastWinHeight;
    };
    var refresh = function () {
      if (isActive) {
        var newToolbarHeight = $_g7q7mszrjctdj6qd.get(toolbar);
        var dropupHeight_1 = $_g7q7mszrjctdj6qd.get(dropup);
        var newHeight = deriveViewportHeight(viewport, newToolbarHeight, dropupHeight_1);
        $_ftckpcxwjctdj6dp.set(viewport, yFixedData, newToolbarHeight + 'px');
        $_c7wjf9zsjctdj6qf.set(viewport, 'height', newHeight + 'px');
        $_c7wjf9zsjctdj6qf.set(dropup, 'bottom', -(newToolbarHeight + newHeight + dropupHeight_1) + 'px');
        $_e8ifpg15ljctdj7op.updatePadding(contentBody, viewport, dropup);
      }
    };
    var setViewportOffset = function (newYOffset) {
      var offsetPx = newYOffset + 'px';
      $_ftckpcxwjctdj6dp.set(viewport, yFixedData, offsetPx);
      refresh();
    };
    $_e8ifpg15ljctdj7op.updatePadding(contentBody, viewport, dropup);
    return {
      setViewportOffset: setViewportOffset,
      isExpanding: isExpanding,
      isShrinking: $_nsetdwbjctdj67z.not(isExpanding),
      refresh: refresh,
      restore: restore
    };
  };
  var $_3ktf1615kjctdj7o8 = {
    findFixtures: findFixtures,
    takeover: takeover$1,
    getYFixedData: getYFixedData
  };

  var animator = $_6cbzcx15jjctdj7o5.create();
  var ANIMATION_STEP = 15;
  var NUM_TOP_ANIMATION_FRAMES = 10;
  var ANIMATION_RATE = 10;
  var lastScroll = 'data-' + $_79dnpgz1jctdj6nm.resolve('last-scroll-top');
  var getTop = function (element) {
    var raw = $_c7wjf9zsjctdj6qf.getRaw(element, 'top').getOr(0);
    return parseInt(raw, 10);
  };
  var getScrollTop = function (element) {
    return parseInt(element.dom().scrollTop, 10);
  };
  var moveScrollAndTop = function (element, destination, finalTop) {
    return $_1p26gk15gjctdj7o0.nu(function (callback) {
      var getCurrent = $_nsetdwbjctdj67z.curry(getScrollTop, element);
      var update = function (newScroll) {
        element.dom().scrollTop = newScroll;
        $_c7wjf9zsjctdj6qf.set(element, 'top', getTop(element) + ANIMATION_STEP + 'px');
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_c7wjf9zsjctdj6qf.set(element, 'top', finalTop + 'px');
        callback(destination);
      };
      animator.animate(getCurrent, destination, ANIMATION_STEP, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyScroll = function (element, destination) {
    return $_1p26gk15gjctdj7o0.nu(function (callback) {
      var getCurrent = $_nsetdwbjctdj67z.curry(getScrollTop, element);
      $_ftckpcxwjctdj6dp.set(element, lastScroll, getCurrent());
      var update = function (newScroll, abort) {
        var previous = $_65n5i313vjctdj7es.safeParse(element, lastScroll);
        if (previous !== element.dom().scrollTop) {
          abort(element.dom().scrollTop);
        } else {
          element.dom().scrollTop = newScroll;
          $_ftckpcxwjctdj6dp.set(element, lastScroll, newScroll);
        }
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_ftckpcxwjctdj6dp.set(element, lastScroll, destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyTop = function (element, destination) {
    return $_1p26gk15gjctdj7o0.nu(function (callback) {
      var getCurrent = $_nsetdwbjctdj67z.curry(getTop, element);
      var update = function (newTop) {
        $_c7wjf9zsjctdj6qf.set(element, 'top', newTop + 'px');
      };
      var finish = function () {
        update(destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var updateTop = function (element, amount) {
    var newTop = amount + $_3ktf1615kjctdj7o8.getYFixedData(element) + 'px';
    $_c7wjf9zsjctdj6qf.set(element, 'top', newTop);
  };
  var moveWindowScroll = function (toolbar, viewport, destY) {
    var outerWindow = $_83fh6gy3jctdj6ef.owner(toolbar).dom().defaultView;
    return $_1p26gk15gjctdj7o0.nu(function (callback) {
      updateTop(toolbar, destY);
      updateTop(viewport, destY);
      outerWindow.scrollTo(0, destY);
      callback(destY);
    });
  };
  var $_5guf3715fjctdj7nt = {
    moveScrollAndTop: moveScrollAndTop,
    moveOnlyScroll: moveOnlyScroll,
    moveOnlyTop: moveOnlyTop,
    moveWindowScroll: moveWindowScroll
  };

  var BackgroundActivity = function (doAction) {
    var action = Cell($_xfvu115hjctdj7o1.pure({}));
    var start = function (value) {
      var future = $_xfvu115hjctdj7o1.nu(function (callback) {
        return doAction(value).get(callback);
      });
      action.set(future);
    };
    var idle = function (g) {
      action.get().get(function () {
        g();
      });
    };
    return {
      start: start,
      idle: idle
    };
  };

  var scrollIntoView = function (cWin, socket, dropup, top, bottom) {
    var greenzone = $_e8ifpg15ljctdj7op.getGreenzone(socket, dropup);
    var refreshCursor = $_nsetdwbjctdj67z.curry($_6bo3mi15ejctdj7nq.refresh, cWin);
    if (top > greenzone || bottom > greenzone) {
      $_5guf3715fjctdj7nt.moveOnlyScroll(socket, socket.dom().scrollTop - greenzone + bottom).get(refreshCursor);
    } else if (top < 0) {
      $_5guf3715fjctdj7nt.moveOnlyScroll(socket, socket.dom().scrollTop + top).get(refreshCursor);
    } else {
    }
  };
  var $_8sodi315ojctdj7p1 = { scrollIntoView: scrollIntoView };

  var par$1 = function (asyncValues, nu) {
    return nu(function (callback) {
      var r = [];
      var count = 0;
      var cb = function (i) {
        return function (value) {
          r[i] = value;
          count++;
          if (count >= asyncValues.length) {
            callback(r);
          }
        };
      };
      if (asyncValues.length === 0) {
        callback([]);
      } else {
        $_85zw6hw9jctdj67p.each(asyncValues, function (asyncValue, i) {
          asyncValue.get(cb(i));
        });
      }
    });
  };
  var $_6fwrxk15rjctdj7pb = { par: par$1 };

  var par = function (futures) {
    return $_6fwrxk15rjctdj7pb.par(futures, $_1p26gk15gjctdj7o0.nu);
  };
  var mapM = function (array, fn) {
    var futures = $_85zw6hw9jctdj67p.map(array, fn);
    return par(futures);
  };
  var compose$1 = function (f, g) {
    return function (a) {
      return g(a).bind(f);
    };
  };
  var $_e07yzu15qjctdj7p9 = {
    par: par,
    mapM: mapM,
    compose: compose$1
  };

  var updateFixed = function (element, property, winY, offsetY) {
    var destination = winY + offsetY;
    $_c7wjf9zsjctdj6qf.set(element, property, destination + 'px');
    return $_1p26gk15gjctdj7o0.pure(offsetY);
  };
  var updateScrollingFixed = function (element, winY, offsetY) {
    var destTop = winY + offsetY;
    var oldProp = $_c7wjf9zsjctdj6qf.getRaw(element, 'top').getOr(offsetY);
    var delta = destTop - parseInt(oldProp, 10);
    var destScroll = element.dom().scrollTop + delta;
    return $_5guf3715fjctdj7nt.moveScrollAndTop(element, destScroll, destTop);
  };
  var updateFixture = function (fixture, winY) {
    return fixture.fold(function (element, property, offsetY) {
      return updateFixed(element, property, winY, offsetY);
    }, function (element, offsetY) {
      return updateScrollingFixed(element, winY, offsetY);
    });
  };
  var updatePositions = function (container, winY) {
    var fixtures = $_3ktf1615kjctdj7o8.findFixtures(container);
    var updates = $_85zw6hw9jctdj67p.map(fixtures, function (fixture) {
      return updateFixture(fixture, winY);
    });
    return $_e07yzu15qjctdj7p9.par(updates);
  };
  var $_fqbnme15pjctdj7p4 = { updatePositions: updatePositions };

  var input = function (parent, operation) {
    var input = $_bvayi3wtjctdj69a.fromTag('input');
    $_c7wjf9zsjctdj6qf.setAll(input, {
      opacity: '0',
      position: 'absolute',
      top: '-1000px',
      left: '-1000px'
    });
    $_2enstby2jctdj6ed.append(parent, input);
    $_3yi9jcygjctdj6la.focus(input);
    operation(input);
    $_7upgfty5jctdj6kf.remove(input);
  };
  var $_affj9a15sjctdj7pd = { input: input };

  var VIEW_MARGIN = 5;
  var register$2 = function (toolstrip, socket, container, outerWindow, structure, cWin) {
    var scroller = BackgroundActivity(function (y) {
      return $_5guf3715fjctdj7nt.moveWindowScroll(toolstrip, socket, y);
    });
    var scrollBounds = function () {
      var rects = $_dps9w213wjctdj7eu.getRectangles(cWin);
      return $_1k5gi0wajctdj67w.from(rects[0]).bind(function (rect) {
        var viewTop = rect.top() - socket.dom().scrollTop;
        var outside = viewTop > outerWindow.innerHeight + VIEW_MARGIN || viewTop < -VIEW_MARGIN;
        return outside ? $_1k5gi0wajctdj67w.some({
          top: $_nsetdwbjctdj67z.constant(viewTop),
          bottom: $_nsetdwbjctdj67z.constant(viewTop + rect.height())
        }) : $_1k5gi0wajctdj67w.none();
      });
    };
    var scrollThrottle = $_eufz8p14kjctdj7hz.last(function () {
      scroller.idle(function () {
        $_fqbnme15pjctdj7p4.updatePositions(container, outerWindow.pageYOffset).get(function () {
          var extraScroll = scrollBounds();
          extraScroll.each(function (extra) {
            socket.dom().scrollTop = socket.dom().scrollTop + extra.top();
          });
          scroller.start(0);
          structure.refresh();
        });
      });
    }, 1000);
    var onScroll = $_5nc70r13kjctdj7d3.bind($_bvayi3wtjctdj69a.fromDom(outerWindow), 'scroll', function () {
      if (outerWindow.pageYOffset < 0) {
        return;
      }
      scrollThrottle.throttle();
    });
    $_fqbnme15pjctdj7p4.updatePositions(container, outerWindow.pageYOffset).get($_nsetdwbjctdj67z.identity);
    return { unbind: onScroll.unbind };
  };
  var setup$3 = function (bag) {
    var cWin = bag.cWin();
    var ceBody = bag.ceBody();
    var socket = bag.socket();
    var toolstrip = bag.toolstrip();
    var toolbar = bag.toolbar();
    var contentElement = bag.contentElement();
    var keyboardType = bag.keyboardType();
    var outerWindow = bag.outerWindow();
    var dropup = bag.dropup();
    var structure = $_3ktf1615kjctdj7o8.takeover(socket, ceBody, toolstrip, dropup);
    var keyboardModel = keyboardType(bag.outerBody(), cWin, $_bi2sxwy7jctdj6kl.body(), contentElement, toolstrip, toolbar);
    var toEditing = function () {
      keyboardModel.toEditing();
      clearSelection();
    };
    var toReading = function () {
      keyboardModel.toReading();
    };
    var onToolbarTouch = function (event) {
      keyboardModel.onToolbarTouch(event);
    };
    var onOrientation = $_erf7kp13jjctdj7cw.onChange(outerWindow, {
      onChange: $_nsetdwbjctdj67z.noop,
      onReady: structure.refresh
    });
    onOrientation.onAdjustment(function () {
      structure.refresh();
    });
    var onResize = $_5nc70r13kjctdj7d3.bind($_bvayi3wtjctdj69a.fromDom(outerWindow), 'resize', function () {
      if (structure.isExpanding()) {
        structure.refresh();
      }
    });
    var onScroll = register$2(toolstrip, socket, bag.outerBody(), outerWindow, structure, cWin);
    var unfocusedSelection = FakeSelection(cWin, contentElement);
    var refreshSelection = function () {
      if (unfocusedSelection.isActive()) {
        unfocusedSelection.update();
      }
    };
    var highlightSelection = function () {
      unfocusedSelection.update();
    };
    var clearSelection = function () {
      unfocusedSelection.clear();
    };
    var scrollIntoView = function (top, bottom) {
      $_8sodi315ojctdj7p1.scrollIntoView(cWin, socket, dropup, top, bottom);
    };
    var syncHeight = function () {
      $_c7wjf9zsjctdj6qf.set(contentElement, 'height', contentElement.dom().contentWindow.document.body.scrollHeight + 'px');
    };
    var setViewportOffset = function (newYOffset) {
      structure.setViewportOffset(newYOffset);
      $_5guf3715fjctdj7nt.moveOnlyTop(socket, newYOffset).get($_nsetdwbjctdj67z.identity);
    };
    var destroy = function () {
      structure.restore();
      onOrientation.destroy();
      onScroll.unbind();
      onResize.unbind();
      keyboardModel.destroy();
      unfocusedSelection.destroy();
      $_affj9a15sjctdj7pd.input($_bi2sxwy7jctdj6kl.body(), $_3yi9jcygjctdj6la.blur);
    };
    return {
      toEditing: toEditing,
      toReading: toReading,
      onToolbarTouch: onToolbarTouch,
      refreshSelection: refreshSelection,
      clearSelection: clearSelection,
      highlightSelection: highlightSelection,
      scrollIntoView: scrollIntoView,
      updateToolbarPadding: $_nsetdwbjctdj67z.noop,
      setViewportOffset: setViewportOffset,
      syncHeight: syncHeight,
      refreshStructure: structure.refresh,
      destroy: destroy
    };
  };
  var $_exyzh15bjctdj7mw = { setup: setup$3 };

  var stubborn = function (outerBody, cWin, page, frame) {
    var toEditing = function () {
      $_d70jod15djctdj7nm.resume(cWin, frame);
    };
    var toReading = function () {
      $_affj9a15sjctdj7pd.input(outerBody, $_3yi9jcygjctdj6la.blur);
    };
    var captureInput = $_5nc70r13kjctdj7d3.bind(page, 'keydown', function (evt) {
      if (!$_85zw6hw9jctdj67p.contains([
          'input',
          'textarea'
        ], $_13f4i6xxjctdj6dv.name(evt.target()))) {
        toEditing();
      }
    });
    var onToolbarTouch = function () {
    };
    var destroy = function () {
      captureInput.unbind();
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: destroy
    };
  };
  var timid = function (outerBody, cWin, page, frame) {
    var dismissKeyboard = function () {
      $_3yi9jcygjctdj6la.blur(frame);
    };
    var onToolbarTouch = function () {
      dismissKeyboard();
    };
    var toReading = function () {
      dismissKeyboard();
    };
    var toEditing = function () {
      $_d70jod15djctdj7nm.resume(cWin, frame);
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: $_nsetdwbjctdj67z.noop
    };
  };
  var $_c14d4j15tjctdj7pi = {
    stubborn: stubborn,
    timid: timid
  };

  var create$7 = function (platform, mask) {
    var meta = $_w38t314hjctdj7hb.tag();
    var priorState = $_b95ubz12ajctdj740.value();
    var scrollEvents = $_b95ubz12ajctdj740.value();
    var iosApi = $_b95ubz12ajctdj740.api();
    var iosEvents = $_b95ubz12ajctdj740.api();
    var enter = function () {
      mask.hide();
      var doc = $_bvayi3wtjctdj69a.fromDom(document);
      $_eflwxg14fjctdj7gw.getActiveApi(platform.editor).each(function (editorApi) {
        priorState.set({
          socketHeight: $_c7wjf9zsjctdj6qf.getRaw(platform.socket, 'height'),
          iframeHeight: $_c7wjf9zsjctdj6qf.getRaw(editorApi.frame(), 'height'),
          outerScroll: document.body.scrollTop
        });
        scrollEvents.set({ exclusives: $_93zvkg14qjctdj7is.exclusive(doc, '.' + $_1wciqt13hjctdj7cp.scrollable()) });
        $_4vb8dhxujctdj6dm.add(platform.container, $_79dnpgz1jctdj6nm.resolve('fullscreen-maximized'));
        $_9ynbaq14gjctdj7h5.clobberStyles(platform.container, editorApi.body());
        meta.maximize();
        $_c7wjf9zsjctdj6qf.set(platform.socket, 'overflow', 'scroll');
        $_c7wjf9zsjctdj6qf.set(platform.socket, '-webkit-overflow-scrolling', 'touch');
        $_3yi9jcygjctdj6la.focus(editorApi.body());
        var setupBag = $_es1bl5xmjctdj6d5.immutableBag([
          'cWin',
          'ceBody',
          'socket',
          'toolstrip',
          'toolbar',
          'dropup',
          'contentElement',
          'cursor',
          'keyboardType',
          'isScrolling',
          'outerWindow',
          'outerBody'
        ], []);
        iosApi.set($_exyzh15bjctdj7mw.setup(setupBag({
          cWin: editorApi.win(),
          ceBody: editorApi.body(),
          socket: platform.socket,
          toolstrip: platform.toolstrip,
          toolbar: platform.toolbar,
          dropup: platform.dropup.element(),
          contentElement: editorApi.frame(),
          cursor: $_nsetdwbjctdj67z.noop,
          outerBody: platform.body,
          outerWindow: platform.win,
          keyboardType: $_c14d4j15tjctdj7pi.stubborn,
          isScrolling: function () {
            return scrollEvents.get().exists(function (s) {
              return s.socket.isScrolling();
            });
          }
        })));
        iosApi.run(function (api) {
          api.syncHeight();
        });
        iosEvents.set($_1be9og15ajctdj7mj.initEvents(editorApi, iosApi, platform.toolstrip, platform.socket, platform.dropup));
      });
    };
    var exit = function () {
      meta.restore();
      iosEvents.clear();
      iosApi.clear();
      mask.show();
      priorState.on(function (s) {
        s.socketHeight.each(function (h) {
          $_c7wjf9zsjctdj6qf.set(platform.socket, 'height', h);
        });
        s.iframeHeight.each(function (h) {
          $_c7wjf9zsjctdj6qf.set(platform.editor.getFrame(), 'height', h);
        });
        document.body.scrollTop = s.scrollTop;
      });
      priorState.clear();
      scrollEvents.on(function (s) {
        s.exclusives.unbind();
      });
      scrollEvents.clear();
      $_4vb8dhxujctdj6dm.remove(platform.container, $_79dnpgz1jctdj6nm.resolve('fullscreen-maximized'));
      $_9ynbaq14gjctdj7h5.restoreStyles();
      $_1wciqt13hjctdj7cp.deregister(platform.toolbar);
      $_c7wjf9zsjctdj6qf.remove(platform.socket, 'overflow');
      $_c7wjf9zsjctdj6qf.remove(platform.socket, '-webkit-overflow-scrolling');
      $_3yi9jcygjctdj6la.blur(platform.editor.getFrame());
      $_eflwxg14fjctdj7gw.getActiveApi(platform.editor).each(function (editorApi) {
        editorApi.clearSelection();
      });
    };
    var refreshStructure = function () {
      iosApi.run(function (api) {
        api.refreshStructure();
      });
    };
    return {
      enter: enter,
      refreshStructure: refreshStructure,
      exit: exit
    };
  };
  var $_650yuf159jctdj7m9 = { create: create$7 };

  var produce$1 = function (raw) {
    var mobile = $_ebkmgyxhjctdj6cd.asRawOrDie('Getting IosWebapp schema', MobileSchema, raw);
    $_c7wjf9zsjctdj6qf.set(mobile.toolstrip, 'width', '100%');
    $_c7wjf9zsjctdj6qf.set(mobile.container, 'position', 'relative');
    var onView = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_2dgzqw12kjctdj75x.build($_3s7yes14jjctdj7hs.sketch(onView, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    var mode = $_650yuf159jctdj7m9.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: mode.refreshStructure,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_nsetdwbjctdj67z.noop
    };
  };
  var $_cy5dw8158jctdj7m4 = { produce: produce$1 };

  var IosRealm = function (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_79dnpgz1jctdj6nm.resolve('ios-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_b95ubz12ajctdj740.api();
    var switchToEdit = $_1yzt2z14rjctdj7iy.makeEditSwitch(webapp);
    var socket = $_1yzt2z14rjctdj7iy.makeSocket();
    var dropup = $_99hwrx14sjctdj7ja.build(function () {
      webapp.run(function (w) {
        w.refreshStructure();
      });
    }, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_cy5dw8158jctdj7m4.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        Replacing.remove(socket, switchToEdit);
        w.exit();
      });
    };
    var updateMode = function (readOnly) {
      $_1yzt2z14rjctdj7iy.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_nsetdwbjctdj67z.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_nsetdwbjctdj67z.constant(socket),
      dropup: $_nsetdwbjctdj67z.constant(dropup)
    };
  };

  var EditorManager = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var derive$4 = function (editor) {
    var base = $_41rzpex6jctdj6bg.readOptFrom(editor.settings, 'skin_url').fold(function () {
      return EditorManager.baseURL + '/skins/' + 'lightgray';
    }, function (url) {
      return url;
    });
    return {
      content: base + '/content.mobile.min.css',
      ui: base + '/skin.mobile.min.css'
    };
  };
  var $_51ba915ujctdj7pp = { derive: derive$4 };

  var fontSizes = [
    'x-small',
    'small',
    'medium',
    'large',
    'x-large'
  ];
  var fireChange$1 = function (realm, command, state) {
    realm.system().broadcastOn([$_7zq7xmyojctdj6lt.formatChanged()], {
      command: command,
      state: state
    });
  };
  var init$5 = function (realm, editor) {
    var allFormats = $_sbi53x0jctdj69s.keys(editor.formatter.get());
    $_85zw6hw9jctdj67p.each(allFormats, function (command) {
      editor.formatter.formatChanged(command, function (state) {
        fireChange$1(realm, command, state);
      });
    });
    $_85zw6hw9jctdj67p.each([
      'ul',
      'ol'
    ], function (command) {
      editor.selection.selectorChanged(command, function (state, data) {
        fireChange$1(realm, command, state);
      });
    });
  };
  var $_dcaf3e15wjctdj7pr = {
    init: init$5,
    fontSizes: $_nsetdwbjctdj67z.constant(fontSizes)
  };

  var fireSkinLoaded = function (editor) {
    var done = function () {
      editor._skinLoaded = true;
      editor.fire('SkinLoaded');
    };
    return function () {
      if (editor.initialized) {
        done();
      } else {
        editor.on('init', done);
      }
    };
  };
  var $_9i620y15xjctdj7pv = { fireSkinLoaded: fireSkinLoaded };

  var READING = $_nsetdwbjctdj67z.constant('toReading');
  var EDITING = $_nsetdwbjctdj67z.constant('toEditing');
  ThemeManager.add('mobile', function (editor) {
    var renderUI = function (args) {
      var cssUrls = $_51ba915ujctdj7pp.derive(editor);
      if ($_dzneqrynjctdj6ls.isSkinDisabled(editor) === false) {
        editor.contentCSS.push(cssUrls.content);
        DOMUtils.DOM.styleSheetLoader.load(cssUrls.ui, $_9i620y15xjctdj7pv.fireSkinLoaded(editor));
      } else {
        $_9i620y15xjctdj7pv.fireSkinLoaded(editor)();
      }
      var doScrollIntoView = function () {
        editor.fire('scrollIntoView');
      };
      var wrapper = $_bvayi3wtjctdj69a.fromTag('div');
      var realm = $_3owkqnwgjctdj687.detect().os.isAndroid() ? AndroidRealm(doScrollIntoView) : IosRealm(doScrollIntoView);
      var original = $_bvayi3wtjctdj69a.fromDom(args.targetNode);
      $_2enstby2jctdj6ed.after(original, wrapper);
      $_9uszbdy1jctdj6e3.attachSystem(wrapper, realm.system());
      var findFocusIn = function (elem) {
        return $_3yi9jcygjctdj6la.search(elem).bind(function (focused) {
          return realm.system().getByDom(focused).toOption();
        });
      };
      var outerWindow = args.targetNode.ownerDocument.defaultView;
      var orientation = $_erf7kp13jjctdj7cw.onChange(outerWindow, {
        onChange: function () {
          var alloy = realm.system();
          alloy.broadcastOn([$_7zq7xmyojctdj6lt.orientationChanged()], { width: $_erf7kp13jjctdj7cw.getActualWidth(outerWindow) });
        },
        onReady: $_nsetdwbjctdj67z.noop
      });
      var setReadOnly = function (readOnlyGroups, mainGroups, ro) {
        if (ro === false) {
          editor.selection.collapse();
        }
        realm.setToolbarGroups(ro ? readOnlyGroups.get() : mainGroups.get());
        editor.setMode(ro === true ? 'readonly' : 'design');
        editor.fire(ro === true ? READING() : EDITING());
        realm.updateMode(ro);
      };
      var bindHandler = function (label, handler) {
        editor.on(label, handler);
        return {
          unbind: function () {
            editor.off(label);
          }
        };
      };
      editor.on('init', function () {
        realm.init({
          editor: {
            getFrame: function () {
              return $_bvayi3wtjctdj69a.fromDom(editor.contentAreaContainer.querySelector('iframe'));
            },
            onDomChanged: function () {
              return { unbind: $_nsetdwbjctdj67z.noop };
            },
            onToReading: function (handler) {
              return bindHandler(READING(), handler);
            },
            onToEditing: function (handler) {
              return bindHandler(EDITING(), handler);
            },
            onScrollToCursor: function (handler) {
              editor.on('scrollIntoView', function (tinyEvent) {
                handler(tinyEvent);
              });
              var unbind = function () {
                editor.off('scrollIntoView');
                orientation.destroy();
              };
              return { unbind: unbind };
            },
            onTouchToolstrip: function () {
              hideDropup();
            },
            onTouchContent: function () {
              var toolbar = $_bvayi3wtjctdj69a.fromDom(editor.editorContainer.querySelector('.' + $_79dnpgz1jctdj6nm.resolve('toolbar')));
              findFocusIn(toolbar).each($_axzm60wvjctdj69e.emitExecute);
              realm.restoreToolbar();
              hideDropup();
            },
            onTapContent: function (evt) {
              var target = evt.target();
              if ($_13f4i6xxjctdj6dv.name(target) === 'img') {
                editor.selection.select(target.dom());
                evt.kill();
              } else if ($_13f4i6xxjctdj6dv.name(target) === 'a') {
                var component = realm.system().getByDom($_bvayi3wtjctdj69a.fromDom(editor.editorContainer));
                component.each(function (container) {
                  if (Swapping.isAlpha(container)) {
                    $_7yezdrymjctdj6lr.openLink(target.dom());
                  }
                });
              }
            }
          },
          container: $_bvayi3wtjctdj69a.fromDom(editor.editorContainer),
          socket: $_bvayi3wtjctdj69a.fromDom(editor.contentAreaContainer),
          toolstrip: $_bvayi3wtjctdj69a.fromDom(editor.editorContainer.querySelector('.' + $_79dnpgz1jctdj6nm.resolve('toolstrip'))),
          toolbar: $_bvayi3wtjctdj69a.fromDom(editor.editorContainer.querySelector('.' + $_79dnpgz1jctdj6nm.resolve('toolbar'))),
          dropup: realm.dropup(),
          alloy: realm.system(),
          translate: $_nsetdwbjctdj67z.noop,
          setReadOnly: function (ro) {
            setReadOnly(readOnlyGroups, mainGroups, ro);
          }
        });
        var hideDropup = function () {
          realm.dropup().disappear(function () {
            realm.system().broadcastOn([$_7zq7xmyojctdj6lt.dropupDismissed()], {});
          });
        };
        $_8bd8kpy8jctdj6ko.registerInspector('remove this', realm.system());
        var backToMaskGroup = {
          label: 'The first group',
          scrollable: false,
          items: [$_2fvhv0z2jctdj6no.forToolbar('back', function () {
              editor.selection.collapse();
              realm.exit();
            }, {})]
        };
        var backToReadOnlyGroup = {
          label: 'Back to read only',
          scrollable: false,
          items: [$_2fvhv0z2jctdj6no.forToolbar('readonly-back', function () {
              setReadOnly(readOnlyGroups, mainGroups, true);
            }, {})]
        };
        var readOnlyGroup = {
          label: 'The read only mode group',
          scrollable: true,
          items: []
        };
        var features = $_53282eypjctdj6lv.setup(realm, editor);
        var items = $_53282eypjctdj6lv.detect(editor.settings, features);
        var actionGroup = {
          label: 'the action group',
          scrollable: true,
          items: items
        };
        var extraGroup = {
          label: 'The extra group',
          scrollable: false,
          items: []
        };
        var mainGroups = Cell([
          backToReadOnlyGroup,
          actionGroup,
          extraGroup
        ]);
        var readOnlyGroups = Cell([
          backToMaskGroup,
          readOnlyGroup,
          extraGroup
        ]);
        $_dcaf3e15wjctdj7pr.init(realm, editor);
      });
      return {
        iframeContainer: realm.socket().element().dom(),
        editorContainer: realm.element().dom()
      };
    };
    return {
      getNotificationManagerImpl: function () {
        return {
          open: $_nsetdwbjctdj67z.identity,
          close: $_nsetdwbjctdj67z.noop,
          reposition: $_nsetdwbjctdj67z.noop,
          getArgs: $_nsetdwbjctdj67z.identity
        };
      },
      renderUI: renderUI
    };
  });
  var Theme = function () {
  };

  return Theme;

}());
})()
