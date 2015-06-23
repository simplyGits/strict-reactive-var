Thin strictly type checking wrapper around reactive-var.

[![Build Status](https://travis-ci.org/simplyGits/strict-reactive-var.svg)](https://travis-ci.org/simplyGits/strict-reactive-var)

```
meteor add simply:strict-reactive-var
```

```javascript
var val = new SReactiveVar(Number);
val.set(5);
val.set('kaas'); // throws
```
