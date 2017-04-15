(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main$lambda(f, res) {
    res.type('text/plain');
    return res.send('Hello world, from Kotlin JS');
  }
  function main$lambda_0(req, res) {
    var name = req.params.nameParam;
    res.type('text/plain');
    return res.send('Hello ' + name + ', from Kotlin JS');
  }
  function main$lambda_1(req, res) {
    var params = JavascriptDataClass$Companion_getInstance().from_za3rmp$(req);
    res.type('text/plain');
    return res.send('Hello ' + params.name + ', from ' + params.from);
  }
  function main$lambda_2() {
    println('Listening on port 8080');
  }
  function main(args) {
    println('================================================================');
    println('||                 Starting up Kotlin NodeJS                  ||');
    println('================================================================');
    var express = require('express');
    var app = express();
    app.get('/', main$lambda);
    app.get('/name/:nameParam', main$lambda_0);
    app.get('/name/:nameParam/from/:fromParam', main$lambda_1);
    app.listen(8080, main$lambda_2);
  }
  function JavascriptDataClass(name, from) {
    JavascriptDataClass$Companion_getInstance();
    this.name = name;
    this.from = from;
  }
  function JavascriptDataClass$Companion() {
    JavascriptDataClass$Companion_instance = this;
  }
  JavascriptDataClass$Companion.prototype.from_za3rmp$ = function (req) {
    return new JavascriptDataClass(req.params.nameParam, req.params.fromParam);
  };
  JavascriptDataClass$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JavascriptDataClass$Companion_instance = null;
  function JavascriptDataClass$Companion_getInstance() {
    if (JavascriptDataClass$Companion_instance === null) {
      new JavascriptDataClass$Companion();
    }
    return JavascriptDataClass$Companion_instance;
  }
  JavascriptDataClass.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JavascriptDataClass',
    interfaces: []
  };
  JavascriptDataClass.prototype.component1 = function () {
    return this.name;
  };
  JavascriptDataClass.prototype.component2 = function () {
    return this.from;
  };
  JavascriptDataClass.prototype.copy_puj7f4$ = function (name, from) {
    return new JavascriptDataClass(name === void 0 ? this.name : name, from === void 0 ? this.from : from);
  };
  JavascriptDataClass.prototype.toString = function () {
    return 'JavascriptDataClass(name=' + Kotlin.toString(this.name) + (', from=' + Kotlin.toString(this.from)) + ')';
  };
  JavascriptDataClass.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    return result;
  };
  JavascriptDataClass.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.from, other.from)))));
  };
  _.main_kand9s$ = main;
  Object.defineProperty(JavascriptDataClass, 'Companion', {
    get: JavascriptDataClass$Companion_getInstance
  });
  _.JavascriptDataClass = JavascriptDataClass;
  Kotlin.defineModule('index', _);
  main([]);
  return _;
}(module.exports, require('kotlin')));
