/*!
* openroberta-lab-configuration - Open Roberta Lab is a learning platform that uses graphical programming language (based on blockly) to generate code for robots and embedded systems for educational purposes. The platform has a configuration tab to define the connections of the devices used. The problem is that this guide is not user friendly. My proposal is to add a more realistic view in the configuration tab, using images like those on fritzing.org, allowing the user to add sensors/actuators in a user-friendly way.
* @version 1.0.0
* https://github.com/santorsilas/openroberta-lab-configuration#readme
*
* @copyright Silas Ribeiro <santorsilas@gmail.com>
* @license ISC
*
* BUILT: Mon Jul 27 2020 03:49:27 GMT-0300 (Brasilia Standard Time)
*/;
var configuration = (function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire();
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	   module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var iterators = {};

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line no-undef
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func
	  Function('return this')();

	// Thank's IE8 for his funny defineProperty
	var descriptors = !fails(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var document$1 = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	// `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var toPrimitive = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	var f = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var setGlobal = function (key, value) {
	  try {
	    createNonEnumerableProperty(global_1, key, value);
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store = global_1[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store;

	var functionToString = Function.toString;

	// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
	if (typeof sharedStore.inspectSource != 'function') {
	  sharedStore.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap = global_1.WeakMap;

	var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var isPure = true;

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.6.4',
	  mode:  'pure' ,
	  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys = {};

	var WeakMap$1 = global_1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap) {
	  var store$1 = new WeakMap$1();
	  var wmget = store$1.get;
	  var wmhas = store$1.has;
	  var wmset = store$1.set;
	  set = function (it, metadata) {
	    wmset.call(store$1, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store$1, it) || {};
	  };
	  has$1 = function (it) {
	    return wmhas.call(store$1, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };
	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
	var f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f$1
	};

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	var f$2 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$2
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var path = {};

	var aFunction = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	// optional / simple context binding
	var functionBindContext = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof NativeConstructor) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return NativeConstructor.apply(this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;

	  var nativeSource = GLOBAL ? global_1 : STATIC ? global_1[TARGET] : (global_1[TARGET] || {}).prototype;

	  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
	  var targetPrototype = target.prototype;

	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contains in native
	    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

	    targetProperty = target[key];

	    if (USE_NATIVE) if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];

	    // export native or implementation
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

	    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

	    // bind timers to global for call from export context
	    if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global_1);
	    // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    // make static versions for prototype methods
	    else if (PROTO && typeof sourceProperty == 'function') resultProperty = functionBindContext(Function.call, sourceProperty);
	    // default case
	    else resultProperty = sourceProperty;

	    // add a flag to not completely full polyfills
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(resultProperty, 'sham', true);
	    }

	    target[key] = resultProperty;

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!has(path, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
	      // export real prototype methods
	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	// `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	var correctPrototypeGetter = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO = sharedKey('IE_PROTO');
	var ObjectPrototype = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof
	var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype : null;
	};

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});

	var useSymbolAsUid = nativeSymbol
	  // eslint-disable-next-line no-undef
	  && !Symbol.sham
	  // eslint-disable-next-line no-undef
	  && typeof Symbol.iterator == 'symbol';

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$1 = global_1.Symbol;
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!has(WellKnownSymbolsStore, name)) {
	    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
	    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};

	var ITERATOR = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS = false;

	// `%IteratorPrototype%` object
	// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
	  }
	}

	if (IteratorPrototype == undefined) IteratorPrototype = {};

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
	};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger
	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var indexOf = arrayIncludes.indexOf;


	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
	  return O;
	};

	var aFunction$1 = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global_1[namespace])
	    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
	};

	var html = getBuiltIn('document', 'documentElement');

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    /* global ActiveXObject */
	    activeXDocument = document.domain && new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : objectDefineProperties(result, Properties);
	};

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = toStringTagSupport ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	// `Object.prototype.toString` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	var objectToString = toStringTagSupport ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};

	var defineProperty = objectDefineProperty.f;





	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!has(target, TO_STRING_TAG$2)) {
	      defineProperty(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !toStringTagSupport) {
	      createNonEnumerableProperty(target, 'toString', objectToString);
	    }
	  }
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





	var returnThis = function () { return this; };

	var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
	  iterators[TO_STRING_TAG] = returnThis;
	  return IteratorConstructor;
	};

	var aPossiblePrototype = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var redefine = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty(target, key, value);
	};

	var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$1 = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis$1 = function () { return this; };

	var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$1]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      iterators[TO_STRING_TAG] = returnThis$1;
	    }
	  }

	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if (( FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
	    createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
	  }
	  iterators[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.github.io/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
	iterators.Arguments = iterators.Array;

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');

	for (var COLLECTION_NAME in domIterables) {
	  var Collection = global_1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG$3) {
	    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
	  }
	  iterators[COLLECTION_NAME] = iterators.Array;
	}

	var entryVirtual = function (CONSTRUCTOR) {
	  return path[CONSTRUCTOR + 'Prototype'];
	};

	var keys$1 = entryVirtual('Array').keys;

	var keys$2 = keys$1;

	var ArrayPrototype = Array.prototype;

	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var keys_1 = function (it) {
	  var own = it.keys;
	  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.keys)
	    // eslint-disable-next-line no-prototype-builtins
	    || DOMIterables.hasOwnProperty(classof(it)) ? keys$2 : own;
	};

	var keys$3 = keys_1;

	// `IsArray` abstract operation
	// https://tc39.github.io/ecma262/#sec-isarray
	var isArray = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	var SPECIES = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = functionBindContext(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else if (IS_EVERY) return false;  // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6)
	};

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process = global_1.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] + match[1];
	} else if (engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var engineV8Version = version && +version;

	var SPECIES$1 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var defineProperty$1 = Object.defineProperty;
	var cache = {};

	var thrower = function (it) { throw it; };

	var arrayMethodUsesToLength = function (METHOD_NAME, options) {
	  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
	  if (!options) options = {};
	  var method = [][METHOD_NAME];
	  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
	  var argument0 = has(options, 0) ? options[0] : thrower;
	  var argument1 = has(options, 1) ? options[1] : undefined;

	  return cache[METHOD_NAME] = !!method && !fails(function () {
	    if (ACCESSORS && !descriptors) return true;
	    var O = { length: -1 };

	    if (ACCESSORS) defineProperty$1(O, 1, { enumerable: true, get: thrower });
	    else O[1] = 1;

	    method.call(O, argument0, argument1);
	  });
	};

	var $filter = arrayIteration.filter;



	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
	// Edge 14- issue
	var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

	// `Array.prototype.filter` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var filter = entryVirtual('Array').filter;

	var ArrayPrototype$1 = Array.prototype;

	var filter_1 = function (it) {
	  var own = it.filter;
	  return it === ArrayPrototype$1 || (it instanceof Array && own === ArrayPrototype$1.filter) ? filter : own;
	};

	var filter$1 = filter_1;

	var filter$2 = filter$1;

	var arrayMethodIsStrict = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var $forEach = arrayIteration.forEach;



	var STRICT_METHOD = arrayMethodIsStrict('forEach');
	var USES_TO_LENGTH$1 = arrayMethodUsesToLength('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	var arrayForEach = (!STRICT_METHOD || !USES_TO_LENGTH$1) ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	// `Array.prototype.forEach` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
	  forEach: arrayForEach
	});

	var forEach = entryVirtual('Array').forEach;

	var forEach$1 = forEach;

	var ArrayPrototype$2 = Array.prototype;

	var DOMIterables$1 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach_1 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$2 || (it instanceof Array && own === ArrayPrototype$2.forEach)
	    // eslint-disable-next-line no-prototype-builtins
	    || DOMIterables$1.hasOwnProperty(classof(it)) ? forEach$1 : own;
	};

	var forEach$2 = forEach_1;

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
	  defineProperty: objectDefineProperty.f
	});

	var defineProperty_1 = createCommonjsModule(function (module) {
	var Object = path.Object;

	var defineProperty = module.exports = function defineProperty(it, key, desc) {
	  return Object.defineProperty(it, key, desc);
	};

	if (Object.defineProperty.sham) defineProperty.sham = true;
	});

	var defineProperty$2 = defineProperty_1;

	var defineProperty$3 = defineProperty$2;

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
	  defineProperties: objectDefineProperties
	});

	var defineProperties_1 = createCommonjsModule(function (module) {
	var Object = path.Object;

	var defineProperties = module.exports = function defineProperties(T, D) {
	  return Object.defineProperties(T, D);
	};

	if (Object.defineProperties.sham) defineProperties.sham = true;
	});

	var defineProperties = defineProperties_1;

	var defineProperties$1 = defineProperties;

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
	};

	var f$4 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$4
	};

	// all object keys, includes non-enumerable and symbols
	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var createProperty = function (object, key, value) {
	  var propertyKey = toPrimitive(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	_export({ target: 'Object', stat: true, sham: !descriptors }, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject(object);
	    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;
	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty(result, key, descriptor);
	    }
	    return result;
	  }
	});

	var getOwnPropertyDescriptors = path.Object.getOwnPropertyDescriptors;

	var getOwnPropertyDescriptors$1 = getOwnPropertyDescriptors;

	var getOwnPropertyDescriptors$2 = getOwnPropertyDescriptors$1;

	var forEach$3 = forEach_1;

	var forEach$4 = forEach$3;

	var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;


	var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor$1(1); });
	var FORCED = !descriptors || FAILS_ON_PRIMITIVES;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	_export({ target: 'Object', stat: true, forced: FORCED, sham: !descriptors }, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor$1(toIndexedObject(it), key);
	  }
	});

	var getOwnPropertyDescriptor_1 = createCommonjsModule(function (module) {
	var Object = path.Object;

	var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
	  return Object.getOwnPropertyDescriptor(it, key);
	};

	if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;
	});

	var getOwnPropertyDescriptor$2 = getOwnPropertyDescriptor_1;

	var getOwnPropertyDescriptor$3 = getOwnPropertyDescriptor$2;

	var filter$3 = filter_1;

	var filter$4 = filter$3;

	var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;

	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return nativeGetOwnPropertyNames(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]'
	    ? getWindowNames(it)
	    : nativeGetOwnPropertyNames(toIndexedObject(it));
	};

	var objectGetOwnPropertyNamesExternal = {
		f: f$5
	};

	var f$6 = wellKnownSymbol;

	var wellKnownSymbolWrapped = {
		f: f$6
	};

	var defineProperty$4 = objectDefineProperty.f;

	var defineWellKnownSymbol = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!has(Symbol, NAME)) defineProperty$4(Symbol, NAME, {
	    value: wellKnownSymbolWrapped.f(NAME)
	  });
	};

	var $forEach$1 = arrayIteration.forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE$1 = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
	var setInternalState$1 = internalState.set;
	var getInternalState$1 = internalState.getterFor(SYMBOL);
	var ObjectPrototype$1 = Object[PROTOTYPE$1];
	var $Symbol = global_1.Symbol;
	var $stringify = getBuiltIn('JSON', 'stringify');
	var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var nativeDefineProperty$1 = objectDefineProperty.f;
	var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore$1 = shared('wks');
	var QObject = global_1.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = descriptors && fails(function () {
	  return objectCreate(nativeDefineProperty$1({}, 'a', {
	    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype$1, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
	  nativeDefineProperty$1(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
	    nativeDefineProperty$1(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty$1;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
	  setInternalState$1(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!descriptors) symbol.description = description;
	  return symbol;
	};

	var isSymbol = useSymbolAsUid ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return Object(it) instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject(O);
	  var key = toPrimitive(P, true);
	  anObject(Attributes);
	  if (has(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty$1(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject(O);
	  var properties = toIndexedObject(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPrimitive(V, true);
	  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
	  if (this === ObjectPrototype$1 && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject(O);
	  var key = toPrimitive(P, true);
	  if (it === ObjectPrototype$1 && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$2(it, key);
	  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
	  var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype$1, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.github.io/ecma262/#sec-symbol-constructor
	if (!nativeSymbol) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype$1) setter.call(ObjectPrototypeSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };
	    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
	    return getInternalState$1(this).tag;
	  });

	  redefine($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid(description), description);
	  });

	  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
	  objectDefineProperty.f = $defineProperty;
	  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
	  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

	  wellKnownSymbolWrapped.f = function (name) {
	    return wrap(wellKnownSymbol(name), name);
	  };

	  if (descriptors) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$1(this).description;
	      }
	    });
	  }
	}

	_export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
	  Symbol: $Symbol
	});

	$forEach$1(objectKeys(WellKnownSymbolsStore$1), function (name) {
	  defineWellKnownSymbol(name);
	});

	_export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
	  // `Symbol.for` method
	  // https://tc39.github.io/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = String(key);
	    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	_export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
	  // `Object.create` method
	  // https://tc39.github.io/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	_export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	_export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return objectGetOwnPropertySymbols.f(toObject(it));
	  }
	});

	// `JSON.stringify` method behavior with symbols
	// https://tc39.github.io/ecma262/#sec-json.stringify
	if ($stringify) {
	  var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
	    var symbol = $Symbol();
	    // MS Edge converts symbol values to JSON as {}
	    return $stringify([symbol]) != '[null]'
	      // WebKit converts symbol values to JSON as null
	      || $stringify({ a: symbol }) != '{}'
	      // V8 throws on boxed symbols
	      || $stringify(Object(symbol)) != '{}';
	  });

	  _export({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
	    // eslint-disable-next-line no-unused-vars
	    stringify: function stringify(it, replacer, space) {
	      var args = [it];
	      var index = 1;
	      var $replacer;
	      while (arguments.length > index) args.push(arguments[index++]);
	      $replacer = replacer;
	      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	      if (!isArray(replacer)) replacer = function (key, value) {
	        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	        if (!isSymbol(value)) return value;
	      };
	      args[1] = replacer;
	      return $stringify.apply(null, args);
	    }
	  });
	}

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
	if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
	  createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
	}
	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag($Symbol, SYMBOL);

	hiddenKeys[HIDDEN] = true;

	var getOwnPropertySymbols = path.Object.getOwnPropertySymbols;

	var getOwnPropertySymbols$1 = getOwnPropertySymbols;

	var getOwnPropertySymbols$2 = getOwnPropertySymbols$1;

	var FAILS_ON_PRIMITIVES$1 = fails(function () { objectKeys(1); });

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
	  keys: function keys(it) {
	    return objectKeys(toObject(it));
	  }
	});

	var keys$4 = path.Object.keys;

	var keys$5 = keys$4;

	var keys$6 = keys$5;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    defineProperty$3(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function ownKeys$1(object, enumerableOnly) {
	  var keys = keys$6(object);

	  if (getOwnPropertySymbols$2) {
	    var symbols = getOwnPropertySymbols$2(object);

	    if (enumerableOnly) symbols = filter$4(symbols).call(symbols, function (sym) {
	      return getOwnPropertyDescriptor$3(object, sym).enumerable;
	    });
	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      var _context;

	      forEach$4(_context = ownKeys$1(Object(source), true)).call(_context, function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (getOwnPropertyDescriptors$2) {
	      defineProperties$1(target, getOwnPropertyDescriptors$2(source));
	    } else {
	      var _context2;

	      forEach$4(_context2 = ownKeys$1(Object(source))).call(_context2, function (key) {
	        defineProperty$3(target, key, getOwnPropertyDescriptor$3(source, key));
	      });
	    }
	  }

	  return target;
	}

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod$2 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$2(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$2(true)
	};

	var charAt = stringMultibyte.charAt;



	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$2 = internalState.set;
	var getInternalState$2 = internalState.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState$2(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$2(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	var nativePromiseConstructor = global_1.Promise;

	var redefineAll = function (target, src, options) {
	  for (var key in src) {
	    if (options && options.unsafe && target[key]) target[key] = src[key];
	    else redefine(target, key, src[key], options);
	  } return target;
	};

	var SPECIES$2 = wellKnownSymbol('species');

	var setSpecies = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = objectDefineProperty.f;

	  if (descriptors && Constructor && !Constructor[SPECIES$2]) {
	    defineProperty(Constructor, SPECIES$2, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var anInstance = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  } return it;
	};

	var ITERATOR$2 = wellKnownSymbol('iterator');
	var ArrayPrototype$3 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype$3[ITERATOR$2] === it);
	};

	var ITERATOR$3 = wellKnownSymbol('iterator');

	var getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$3]
	    || it['@@iterator']
	    || iterators[classof(it)];
	};

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (error) {
	    var returnMethod = iterator['return'];
	    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
	    throw error;
	  }
	};

	var iterate_1 = createCommonjsModule(function (module) {
	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
	  var boundFunction = functionBindContext(fn, that, AS_ENTRIES ? 2 : 1);
	  var iterator, iterFn, index, length, result, next, step;

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = toLength(iterable.length); length > index; index++) {
	        result = AS_ENTRIES
	          ? boundFunction(anObject(step = iterable[index])[0], step[1])
	          : boundFunction(iterable[index]);
	        if (result && result instanceof Result) return result;
	      } return new Result(false);
	    }
	    iterator = iterFn.call(iterable);
	  }

	  next = iterator.next;
	  while (!(step = next.call(iterator)).done) {
	    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
	    if (typeof result == 'object' && result && result instanceof Result) return result;
	  } return new Result(false);
	};

	iterate.stop = function (result) {
	  return new Result(true, result);
	};
	});

	var ITERATOR$4 = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$4] = function () {
	    return this;
	  };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$4] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var SPECIES$3 = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.github.io/ecma262/#sec-speciesconstructor
	var speciesConstructor = function (O, defaultConstructor) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES$3]) == undefined ? defaultConstructor : aFunction(S);
	};

	var engineIsIos = /(iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);

	var location = global_1.location;
	var set$1 = global_1.setImmediate;
	var clear = global_1.clearImmediate;
	var process$1 = global_1.process;
	var MessageChannel = global_1.MessageChannel;
	var Dispatch = global_1.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;

	var run = function (id) {
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var listener = function (event) {
	  run(event.data);
	};

	var post = function (id) {
	  // old engines have not location.origin
	  global_1.postMessage(id + '', location.protocol + '//' + location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set$1 || !clear) {
	  set$1 = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (classofRaw(process$1) == 'process') {
	    defer = function (id) {
	      process$1.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel && !engineIsIos) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = functionBindContext(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    global_1.addEventListener &&
	    typeof postMessage == 'function' &&
	    !global_1.importScripts &&
	    !fails(post) &&
	    location.protocol !== 'file:'
	  ) {
	    defer = post;
	    global_1.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
	    defer = function (id) {
	      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	var task = {
	  set: set$1,
	  clear: clear
	};

	var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;

	var macrotask = task.set;


	var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
	var process$2 = global_1.process;
	var Promise$1 = global_1.Promise;
	var IS_NODE = classofRaw(process$2) == 'process';
	// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor$4(global_1, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

	var flush, head, last, notify, toggle, node, promise, then;

	// modern engines have queueMicrotask method
	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (IS_NODE && (parent = process$2.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (error) {
	        if (head) notify();
	        else last = undefined;
	        throw error;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (IS_NODE) {
	    notify = function () {
	      process$2.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  } else if (MutationObserver && !engineIsIos) {
	    toggle = true;
	    node = document.createTextNode('');
	    new MutationObserver(flush).observe(node, { characterData: true });
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise = Promise$1.resolve(undefined);
	    then = promise.then;
	    notify = function () {
	      then.call(promise, flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global_1, flush);
	    };
	  }
	}

	var microtask = queueMicrotask || function (fn) {
	  var task = { fn: fn, next: undefined };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify();
	  } last = task;
	};

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};

	// 25.4.1.5 NewPromiseCapability(C)
	var f$7 = function (C) {
	  return new PromiseCapability(C);
	};

	var newPromiseCapability = {
		f: f$7
	};

	var promiseResolve = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var hostReportErrors = function (a, b) {
	  var console = global_1.console;
	  if (console && console.error) {
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var task$1 = task.set;










	var SPECIES$4 = wellKnownSymbol('species');
	var PROMISE = 'Promise';
	var getInternalState$3 = internalState.get;
	var setInternalState$3 = internalState.set;
	var getInternalPromiseState = internalState.getterFor(PROMISE);
	var PromiseConstructor = nativePromiseConstructor;
	var TypeError$1 = global_1.TypeError;
	var document$2 = global_1.document;
	var process$3 = global_1.process;
	var newPromiseCapability$1 = newPromiseCapability.f;
	var newGenericPromiseCapability = newPromiseCapability$1;
	var IS_NODE$1 = classofRaw(process$3) == 'process';
	var DISPATCH_EVENT = !!(document$2 && document$2.createEvent && global_1.dispatchEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var Internal, OwnPromiseCapability, PromiseWrapper;

	var FORCED$1 = isForced_1(PROMISE, function () {
	  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
	  if (!GLOBAL_CORE_JS_PROMISE) {
	    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	    // We can't detect it synchronously, so just check versions
	    if (engineV8Version === 66) return true;
	    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    if (!IS_NODE$1 && typeof PromiseRejectionEvent != 'function') return true;
	  }
	  // We need Promise#finally in the pure version for preventing prototype pollution
	  if ( !PromiseConstructor.prototype['finally']) return true;
	  // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if (engineV8Version >= 51 && /native code/.test(PromiseConstructor)) return false;
	  // Detect correctness of subclassing with @@species support
	  var promise = PromiseConstructor.resolve(1);
	  var FakePromise = function (exec) {
	    exec(function () { /* empty */ }, function () { /* empty */ });
	  };
	  var constructor = promise.constructor = {};
	  constructor[SPECIES$4] = FakePromise;
	  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
	});

	var INCORRECT_ITERATION = FORCED$1 || !checkCorrectnessOfIteration(function (iterable) {
	  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
	});

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};

	var notify$1 = function (promise, state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  var chain = state.reactions;
	  microtask(function () {
	    var value = state.value;
	    var ok = state.state == FULFILLED;
	    var index = 0;
	    // variable length - can't use forEach
	    while (chain.length > index) {
	      var reaction = chain[index++];
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
	            state.rejection = HANDLED;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // can throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (error) {
	        if (domain && !exited) domain.exit();
	        reject(error);
	      }
	    }
	    state.reactions = [];
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(promise, state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$2.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global_1.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (handler = global_1['on' + name]) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (promise, state) {
	  task$1.call(global_1, function () {
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform(function () {
	        if (IS_NODE$1) {
	          process$3.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (promise, state) {
	  task$1.call(global_1, function () {
	    if (IS_NODE$1) {
	      process$3.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind = function (fn, promise, state, unwrap) {
	  return function (value) {
	    fn(promise, state, value, unwrap);
	  };
	};

	var internalReject = function (promise, state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify$1(promise, state, true);
	};

	var internalResolve = function (promise, state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          then.call(value,
	            bind(internalResolve, promise, wrapper, state),
	            bind(internalReject, promise, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(promise, wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify$1(promise, state, false);
	    }
	  } catch (error) {
	    internalReject(promise, { done: false }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED$1) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance(this, PromiseConstructor, PROMISE);
	    aFunction(executor);
	    Internal.call(this);
	    var state = getInternalState$3(this);
	    try {
	      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
	    } catch (error) {
	      internalReject(this, state, error);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    setInternalState$3(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: [],
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };
	  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
	    // `Promise.prototype.then` method
	    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
	    then: function then(onFulfilled, onRejected) {
	      var state = getInternalPromiseState(this);
	      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = IS_NODE$1 ? process$3.domain : undefined;
	      state.parent = true;
	      state.reactions.push(reaction);
	      if (state.state != PENDING) notify$1(this, state, false);
	      return reaction.promise;
	    },
	    // `Promise.prototype.catch` method
	    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalState$3(promise);
	    this.promise = promise;
	    this.resolve = bind(internalResolve, promise, state);
	    this.reject = bind(internalReject, promise, state);
	  };
	  newPromiseCapability.f = newPromiseCapability$1 = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	_export({ global: true, wrap: true, forced: FORCED$1 }, {
	  Promise: PromiseConstructor
	});

	setToStringTag(PromiseConstructor, PROMISE, false, true);
	setSpecies(PROMISE);

	PromiseWrapper = getBuiltIn(PROMISE);

	// statics
	_export({ target: PROMISE, stat: true, forced: FORCED$1 }, {
	  // `Promise.reject` method
	  // https://tc39.github.io/ecma262/#sec-promise.reject
	  reject: function reject(r) {
	    var capability = newPromiseCapability$1(this);
	    capability.reject.call(undefined, r);
	    return capability.promise;
	  }
	});

	_export({ target: PROMISE, stat: true, forced: isPure  }, {
	  // `Promise.resolve` method
	  // https://tc39.github.io/ecma262/#sec-promise.resolve
	  resolve: function resolve(x) {
	    return promiseResolve( this === PromiseWrapper ? PromiseConstructor : this, x);
	  }
	});

	_export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
	  // `Promise.all` method
	  // https://tc39.github.io/ecma262/#sec-promise.all
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability$1(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aFunction(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate_1(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        $promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  },
	  // `Promise.race` method
	  // https://tc39.github.io/ecma262/#sec-promise.race
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability$1(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aFunction(C.resolve);
	      iterate_1(iterable, function (promise) {
	        $promiseResolve.call(C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	// `Promise.allSettled` method
	// https://github.com/tc39/proposal-promise-allSettled
	_export({ target: 'Promise', stat: true }, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapability.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var promiseResolve = aFunction(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate_1(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'fulfilled', value: value };
	          --remaining || resolve(values);
	        }, function (e) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'rejected', reason: e };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
	var NON_GENERIC = !!nativePromiseConstructor && fails(function () {
	  nativePromiseConstructor.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
	});

	// `Promise.prototype.finally` method
	// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
	_export({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
	  'finally': function (onFinally) {
	    var C = speciesConstructor(this, getBuiltIn('Promise'));
	    var isFunction = typeof onFinally == 'function';
	    return this.then(
	      isFunction ? function (x) {
	        return promiseResolve(C, onFinally()).then(function () { return x; });
	      } : onFinally,
	      isFunction ? function (e) {
	        return promiseResolve(C, onFinally()).then(function () { throw e; });
	      } : onFinally
	    );
	  }
	});

	var promise$1 = path.Promise;

	var setInternalState$4 = internalState.set;
	var getInternalAggregateErrorState = internalState.getterFor('AggregateError');

	var $AggregateError = function AggregateError(errors, message) {
	  var that = this;
	  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
	  if (objectSetPrototypeOf) {
	    that = objectSetPrototypeOf(new Error(message), objectGetPrototypeOf(that));
	  }
	  var errorsArray = [];
	  iterate_1(errors, errorsArray.push, errorsArray);
	  if (descriptors) setInternalState$4(that, { errors: errorsArray, type: 'AggregateError' });
	  else that.errors = errorsArray;
	  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
	  return that;
	};

	$AggregateError.prototype = objectCreate(Error.prototype, {
	  constructor: createPropertyDescriptor(5, $AggregateError),
	  message: createPropertyDescriptor(5, ''),
	  name: createPropertyDescriptor(5, 'AggregateError')
	});

	if (descriptors) objectDefineProperty.f($AggregateError.prototype, 'errors', {
	  get: function () {
	    return getInternalAggregateErrorState(this).errors;
	  },
	  configurable: true
	});

	_export({ global: true }, {
	  AggregateError: $AggregateError
	});

	// `Promise.try` method
	// https://github.com/tc39/proposal-promise-try
	_export({ target: 'Promise', stat: true }, {
	  'try': function (callbackfn) {
	    var promiseCapability = newPromiseCapability.f(this);
	    var result = perform(callbackfn);
	    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
	    return promiseCapability.promise;
	  }
	});

	var PROMISE_ANY_ERROR = 'No one promise resolved';

	// `Promise.any` method
	// https://github.com/tc39/proposal-promise-any
	_export({ target: 'Promise', stat: true }, {
	  any: function any(iterable) {
	    var C = this;
	    var capability = newPromiseCapability.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var promiseResolve = aFunction(C.resolve);
	      var errors = [];
	      var counter = 0;
	      var remaining = 1;
	      var alreadyResolved = false;
	      iterate_1(iterable, function (promise) {
	        var index = counter++;
	        var alreadyRejected = false;
	        errors.push(undefined);
	        remaining++;
	        promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyResolved = true;
	          resolve(value);
	        }, function (e) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyRejected = true;
	          errors[index] = e;
	          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
	        });
	      });
	      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	// TODO: Remove from `core-js@4`




	var promise$2 = promise$1;

	var promise$3 = promise$2;

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    promise$3.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new promise$3(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;

	    defineProperty$3(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var $map = arrayIteration.map;



	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map');
	// FF49- issue
	var USES_TO_LENGTH$2 = arrayMethodUsesToLength('map');

	// `Array.prototype.map` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$2 }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var map = entryVirtual('Array').map;

	var ArrayPrototype$4 = Array.prototype;

	var map_1 = function (it) {
	  var own = it.map;
	  return it === ArrayPrototype$4 || (it instanceof Array && own === ArrayPrototype$4.map) ? map : own;
	};

	var map$1 = map_1;

	var map$2 = map$1;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	_export({ target: 'Array', proto: true, forced: FORCED$2 }, {
	  concat: function concat(arg) { // eslint-disable-line no-unused-vars
	    var O = toObject(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = toLength(E.length);
	        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var concat = entryVirtual('Array').concat;

	var ArrayPrototype$5 = Array.prototype;

	var concat_1 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$5 || (it instanceof Array && own === ArrayPrototype$5.concat) ? concat : own;
	};

	var concat$1 = concat_1;

	var concat$2 = concat$1;

	// a string of all valid unicode whitespaces
	// eslint-disable-next-line max-len
	var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$3 = function (TYPE) {
	  return function ($this) {
	    var string = String(requireObjectCoercible($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$3(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
	  end: createMethod$3(2),
	  // `String.prototype.trim` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
	  trim: createMethod$3(3)
	};

	var non = '\u200B\u0085\u180E';

	// check that a method works with the correct list
	// of whitespaces and has a correct name
	var stringTrimForced = function (METHOD_NAME) {
	  return fails(function () {
	    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
	  });
	};

	var $trim = stringTrim.trim;


	// `String.prototype.trim` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.trim
	_export({ target: 'String', proto: true, forced: stringTrimForced('trim') }, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var trim = entryVirtual('String').trim;

	var StringPrototype = String.prototype;

	var trim_1 = function (it) {
	  var own = it.trim;
	  return typeof it === 'string' || it === StringPrototype
	    || (it instanceof String && own === StringPrototype.trim) ? trim : own;
	};

	var trim$1 = trim_1;

	var trim$2 = trim$1;

	var trim$3 = stringTrim.trim;


	var $parseFloat = global_1.parseFloat;
	var FORCED$3 = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

	// `parseFloat` method
	// https://tc39.github.io/ecma262/#sec-parsefloat-string
	var numberParseFloat = FORCED$3 ? function parseFloat(string) {
	  var trimmedString = trim$3(String(string));
	  var result = $parseFloat(trimmedString);
	  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

	// `parseFloat` method
	// https://tc39.github.io/ecma262/#sec-parsefloat-string
	_export({ global: true, forced: parseFloat != numberParseFloat }, {
	  parseFloat: numberParseFloat
	});

	var _parseFloat = path.parseFloat;

	var _parseFloat$1 = _parseFloat;

	var _parseFloat$2 = _parseFloat$1;

	/**
	 * 
	 * @param {string} robot 
	 * @param {string} name 
	 * @returns {array}
	 */
	function getFixedPortsByComponentName(robot, name) {
	  var key = name.replace('robConf_', '');
	  var fixedPorts = confBlocks[key][robot].fixedPorts;
	  return fixedPorts || [];
	}
	/**
	 * 
	 * @param {string} data 
	 * @returns {object}
	 */


	function configDecode(data) {
	  var domParser = new DOMParser();
	  var xmlConfig = domParser.parseFromString(data, "text/xml").querySelector('config');
	  var board = {};
	  var robotElement = xmlConfig.querySelector('block_set');
	  board['name'] = robotElement.getAttribute('robottype');
	  var components = {};
	  var blocks = xmlConfig.querySelectorAll('instance');

	  forEach$2(blocks).call(blocks, function (instance) {
	    var _context;

	    var x = _parseFloat$2(instance.getAttribute('x'));

	    var y = _parseFloat$2(instance.getAttribute('y'));

	    var block = instance.querySelector('block');
	    var id = block.getAttribute('id');
	    var type = block.getAttribute('type');
	    var name = block.querySelector('field[name=NAME]').innerHTML;
	    var ports = [];

	    forEach$2(_context = block.querySelectorAll('field:not([name=NAME])')).call(_context, function (el) {
	      var _context2;

	      var name = el.getAttribute('name');

	      var pinStr = trim$2(_context2 = el.innerHTML).call(_context2);

	      ports.push({
	        name: name,
	        isFixed: false,
	        connectedTo: {
	          component: 'board',
	          pin: pinStr === '' ? null : pinStr
	        }
	      });
	    });

	    var fixedPorts = getFixedPortsByComponentName(board.name, type);

	    forEach$2(fixedPorts).call(fixedPorts, function (port) {
	      ports.push({
	        name: port[0],
	        isFixed: true,
	        connectedTo: {
	          component: 'board',
	          pin: port[1]
	        }
	      });
	    });

	    components[id] = {
	      name: name,
	      type: type,
	      position: {
	        x: x,
	        y: y
	      },
	      ports: ports
	    };
	  });

	  return {
	    board: board,
	    components: components
	  };
	}
	/**
	 * 
	 * @param {object} config 
	 * @returns {string}
	 */

	function configEncode(_ref) {
	  var _context11, _context12;

	  var board = _ref.board,
	      components = _ref.components;
	  var instances = '';

	  for (var key in components) {
	    var _context3, _context4, _context5, _context6, _context7, _context8, _context9;

	    var _components$key = components[key],
	        name = _components$key.name,
	        position = _components$key.position,
	        ports = _components$key.ports,
	        type = _components$key.type;
	    instances += trim$2(_context3 = concat$2(_context4 = concat$2(_context5 = concat$2(_context6 = concat$2(_context7 = concat$2(_context8 = "\n      <instance x=\"".concat(position.x, "\" y=\"")).call(_context8, position.y, "\">\n        <block type=\"")).call(_context7, type, "\" id=\"")).call(_context6, key, "\" intask=\"true\">\n          <field name=\"NAME\">")).call(_context5, name, "</field>\n          ")).call(_context4, map$2(_context9 = filter$2(ports).call(ports, function (_ref2) {
	      var isFixed = _ref2.isFixed;
	      return !isFixed;
	    })).call(_context9, function (_ref3) {
	      var _context10, _connectedTo$pin;

	      var name = _ref3.name,
	          connectedTo = _ref3.connectedTo;
	      return concat$2(_context10 = "<field name=\"".concat(name, "\">")).call(_context10, (_connectedTo$pin = connectedTo === null || connectedTo === void 0 ? void 0 : connectedTo.pin) !== null && _connectedTo$pin !== void 0 ? _connectedTo$pin : '', "</field>");
	    }).join(''), "\n        </block>\n      </instance>\n    ")).call(_context3);
	  }

	  return trim$2(_context11 = concat$2(_context12 = "\n    <config>\n      <block_set xmlns=\"http://de.fhg.iais.roberta.blockly\" robottype=\"".concat(board.name, "\" xmlversion=\"2.0\" description=\"\" tags=\"\">\n        ")).call(_context12, instances, "\n      </block_set>\n    </config>\n  ")).call(_context11);
	}

	var image = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg>\n<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"2.94961in\" x=\"0px\" version=\"1.1\" y=\"0px\" gorn=\"0\"  height=\"2.1in\" viewBox=\"0 0 212.372 151.2\" xmlns:xml=\"http://www.w3.org/XML/1998/namespace\" id=\"_x30_\" enable-background=\"new 0 0 212.372 151.2\" xml:space=\"preserve\">\n    <desc >\n        <referenceFile >arduino_Uno_Rev3-02-TH_breadboard.svg</referenceFile>\n    </desc>\n    <desc  id=\"0.0\">Fritzing breadboard generated by brd2svg</desc>\n    <g gorn=\"0.2\"  id=\"breadboardbreadboard\">\n        <g gorn=\"0.2.0\"  id=\"icon\">\n            <path fill=\"#0F7391\" gorn=\"0.2.0.0\"  id=\"_x30_.1.0.0\" d=\"M200.852,0l4.32,4.32v32.4l7.199,7.2v92.879L205.172,144v4.36c0,1.565-1.271,2.837-2.834,2.837c-0.002,0-0.002,0-0.002,0H20.806c-1.565,0-2.834-1.271-2.834-2.834c0,0,0,0,0-0.003V2.834C17.972,1.269,19.241,0,20.806,0l0,0H200.852 M200.635,50.4c-0.004,2.505,2.023,4.539,4.527,4.543c2.506,0.004,4.539-2.023,4.545-4.528c0-0.005,0-0.01,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543s-4.539,2.022-4.544,4.527C200.635,50.39,200.635,50.395,200.635,50.4z M200.635,129.6c-0.004,2.505,2.023,4.539,4.527,4.543c2.506,0.004,4.539-2.021,4.545-4.527c0-0.006,0-0.011,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.006-4.539,2.021-4.544,4.527C200.635,129.588,200.635,129.594,200.635,129.6z M56.636,7.2c-0.004,2.504,2.023,4.539,4.528,4.543c2.504,0.004,4.539-2.022,4.543-4.527c0-0.005,0-0.011,0-0.016c0.004-2.505-2.024-4.539-4.529-4.542c-2.505-0.003-4.539,2.024-4.542,4.529C56.636,7.191,56.636,7.196,56.636,7.2L56.636,7.2z M53.036,144c-0.003,2.504,2.024,4.537,4.529,4.541s4.539-2.023,4.542-4.528c0-0.005,0-0.009,0-0.013c0.004-2.506-2.024-4.539-4.529-4.543s-4.538,2.021-4.542,4.525C53.036,143.991,53.036,143.997,53.036,144z M160.767,144c-0.001,0.664,0.536,1.205,1.202,1.207c0.664,0.002,1.205-0.537,1.207-1.203c0-0.002,0-0.004,0-0.004c0.002-0.666-0.537-1.207-1.201-1.209c-0.666,0-1.207,0.537-1.208,1.203C160.767,143.997,160.767,143.999,160.767,144z M167.967,144c-0.002,0.664,0.537,1.205,1.201,1.207c0.666,0.002,1.207-0.537,1.207-1.203c0-0.002,0-0.004,0-0.004c0.002-0.666-0.535-1.207-1.201-1.209c-0.666,0-1.207,0.537-1.207,1.203C167.967,143.997,167.967,143.999,167.967,144z M175.167,144c0,0.664,0.537,1.205,1.203,1.207s1.205-0.537,1.207-1.203c0-0.002,0-0.004,0-0.004c0.002-0.666-0.537-1.207-1.201-1.209c-0.666,0-1.207,0.537-1.209,1.203C175.167,143.997,175.167,143.999,175.167,144z M182.368,144c-0.002,0.664,0.536,1.205,1.201,1.207c0.666,0.002,1.206-0.537,1.207-1.203c0-0.002,0-0.004,0-0.004c0.002-0.666-0.535-1.207-1.201-1.209c-0.666,0-1.205,0.537-1.207,1.203C182.368,143.997,182.368,143.999,182.368,144z M189.567,144c-0.002,0.664,0.537,1.205,1.202,1.207s1.206-0.537,1.208-1.203c0-0.002,0-0.004,0-0.004c0.001-0.666-0.537-1.207-1.203-1.209c-0.665,0-1.205,0.537-1.207,1.203C189.567,143.997,189.567,143.999,189.567,144z M196.767,144c-0.001,0.664,0.536,1.205,1.202,1.207c0.664,0.002,1.205-0.537,1.207-1.203c0-0.002,0-0.004,0-0.004c0.002-0.666-0.537-1.207-1.201-1.209c-0.666,0-1.207,0.537-1.208,1.203C196.767,143.997,196.767,143.999,196.767,144z M196.986,64.8c-0.001,0.744,0.601,1.348,1.345,1.349s1.352-0.601,1.352-1.344c0-0.001,0-0.003,0-0.004c0.002-0.744-0.604-1.347-1.348-1.348s-1.348,0.601-1.349,1.344C196.986,64.797,196.986,64.799,196.986,64.8z M204.186,64.8c-0.001,0.744,0.602,1.348,1.344,1.349c0.744,0.001,1.348-0.601,1.35-1.344c0-0.001,0-0.003,0-0.004c0-0.744-0.602-1.347-1.344-1.348c-0.744-0.001-1.349,0.601-1.35,1.344C204.186,64.797,204.186,64.799,204.186,64.8z M196.986,72c-0.001,0.744,0.601,1.347,1.345,1.349c0.744,0.001,1.352-0.601,1.352-1.345c0-0.001,0-0.002,0-0.004c0.002-0.744-0.604-1.347-1.348-1.349c-0.744-0.001-1.348,0.601-1.349,1.345C196.986,71.997,196.986,71.999,196.986,72z M204.186,72c-0.001,0.744,0.602,1.347,1.344,1.349c0.744,0.001,1.348-0.601,1.35-1.345c0-0.001,0-0.002,0-0.004c0-0.744-0.602-1.347-1.344-1.349c-0.744-0.001-1.349,0.601-1.35,1.345C204.186,71.997,204.186,71.999,204.186,72z M196.986,79.2c-0.001,0.744,0.601,1.348,1.345,1.35c0.744,0,1.352-0.602,1.352-1.346c0,0,0-0.002,0-0.004c0.002-0.742-0.604-1.348-1.348-1.348c-0.744-0.002-1.348,0.6-1.349,1.344C196.986,79.198,196.986,79.2,196.986,79.2z M204.186,79.2c-0.001,0.744,0.602,1.348,1.344,1.35c0.744,0,1.348-0.602,1.35-1.346c0,0,0-0.002,0-0.004c0-0.742-0.602-1.348-1.344-1.348c-0.744-0.002-1.349,0.6-1.35,1.344C204.186,79.198,204.186,79.2,204.186,79.2z M75.666,16.56c-0.001,0.744,0.601,1.347,1.344,1.349c0.744,0.001,1.348-0.601,1.349-1.345c0-0.001,0-0.002,0-0.004c0.001-0.744-0.601-1.348-1.344-1.349c-0.743-0.001-1.348,0.601-1.349,1.345C75.666,16.557,75.666,16.559,75.666,16.56z M75.666,23.76c-0.001,0.743,0.601,1.347,1.344,1.348c0.744,0.001,1.348-0.601,1.349-1.344c0-0.001,0-0.003,0-0.004c0.001-0.744-0.601-1.348-1.344-1.349c-0.744-0.001-1.348,0.601-1.349,1.344C75.666,23.757,75.666,23.759,75.666,23.76z M68.465,16.56c-0.001,0.744,0.601,1.347,1.344,1.349c0.744,0.001,1.348-0.601,1.349-1.345c0-0.001,0-0.002,0-0.004c0.001-0.744-0.601-1.348-1.345-1.349c-0.743-0.001-1.347,0.601-1.348,1.345C68.465,16.557,68.465,16.559,68.465,16.56z M68.465,23.76c-0.001,0.743,0.601,1.347,1.344,1.348c0.744,0.001,1.348-0.601,1.349-1.344c0-0.001,0-0.003,0-0.004c0.001-0.744-0.601-1.348-1.345-1.349c-0.743-0.001-1.347,0.601-1.348,1.344C68.465,23.757,68.465,23.759,68.465,23.76z M61.265,16.56c0,0.744,0.603,1.346,1.347,1.346c0.744,0,1.346-0.604,1.346-1.346c0-0.743-0.603-1.347-1.346-1.347C61.869,15.213,61.265,15.816,61.265,16.56z M61.265,23.76c0,0.743,0.603,1.346,1.347,1.346c0.744,0,1.346-0.603,1.346-1.346c0-0.744-0.603-1.347-1.346-1.347C61.869,22.413,61.265,23.016,61.265,23.76z M134.847,7.2c-0.001,0.665,0.536,1.206,1.202,1.207c0.664,0.001,1.205-0.537,1.207-1.202c0-0.001,0-0.003,0-0.005c0.002-0.666-0.537-1.206-1.202-1.208c-0.665-0.002-1.206,0.537-1.207,1.202C134.847,7.197,134.847,7.198,134.847,7.2z M127.647,7.2c-0.002,0.665,0.537,1.206,1.202,1.207c0.665,0.001,1.206-0.537,1.208-1.202c0-0.001,0-0.003,0-0.005c0.002-0.666-0.536-1.207-1.201-1.209c-0.666-0.002-1.207,0.536-1.209,1.201C127.647,7.195,127.647,7.197,127.647,7.2L127.647,7.2z M120.448,7.2c-0.003,0.665,0.535,1.207,1.199,1.208c0.666,0.002,1.207-0.535,1.209-1.201c0-0.002,0-0.005,0-0.008c0.002-0.666-0.535-1.207-1.199-1.209c-0.666-0.002-1.207,0.536-1.209,1.201C120.448,7.195,120.448,7.197,120.448,7.2z M113.247,7.2c-0.002,0.665,0.535,1.207,1.201,1.208c0.666,0.002,1.207-0.535,1.209-1.201c0-0.002,0-0.005,0-0.008c0.002-0.666-0.535-1.207-1.201-1.209c-0.664-0.002-1.207,0.536-1.209,1.201C113.247,7.195,113.247,7.197,113.247,7.2z M106.047,7.2c-0.002,0.665,0.536,1.207,1.202,1.208c0.664,0.002,1.205-0.535,1.209-1.201c0-0.002,0-0.005,0-0.008c0.002-0.666-0.537-1.207-1.201-1.209c-0.666-0.002-1.207,0.536-1.208,1.201C106.047,7.195,106.047,7.197,106.047,7.2z M98.847,7.2c-0.002,0.665,0.535,1.207,1.201,1.208c0.666,0.002,1.207-0.535,1.208-1.201c0-0.002,0-0.005,0-0.008c0.002-0.666-0.535-1.207-1.201-1.209c-0.665-0.002-1.207,0.536-1.208,1.201C98.847,7.195,98.847,7.197,98.847,7.2z M91.646,7.2c-0.002,0.665,0.536,1.207,1.201,1.208c0.666,0.002,1.207-0.535,1.209-1.201c0-0.002,0-0.005,0-0.008c0.002-0.666-0.536-1.207-1.201-1.209c-0.666-0.002-1.207,0.536-1.209,1.201C91.646,7.195,91.646,7.197,91.646,7.2z M84.447,7.2c-0.002,0.665,0.535,1.207,1.201,1.208c0.665,0.002,1.207-0.535,1.208-1.201c0-0.002,0-0.005,0-0.008c0.002-0.666-0.535-1.207-1.201-1.209c-0.665-0.002-1.207,0.536-1.208,1.201C84.447,7.195,84.447,7.197,84.447,7.2z M77.247,7.2c-0.002,0.665,0.536,1.207,1.201,1.208c0.666,0.002,1.207-0.535,1.209-1.201c0-0.002,0-0.005,0-0.008c0.002-0.666-0.536-1.207-1.201-1.209c-0.665-0.002-1.206,0.536-1.208,1.201C77.247,7.195,77.247,7.197,77.247,7.2z M70.047,7.2c-0.002,0.665,0.535,1.207,1.201,1.208c0.666,0.002,1.207-0.535,1.209-1.201c0-0.002,0-0.005,0-0.008c0.002-0.666-0.536-1.207-1.201-1.209c-0.666-0.002-1.207,0.536-1.209,1.201C70.047,7.195,70.047,7.197,70.047,7.2z M196.767,7.2c-0.001,0.665,0.536,1.206,1.202,1.207c0.664,0.001,1.205-0.537,1.207-1.202c0-0.001,0-0.003,0-0.005c0.002-0.666-0.537-1.206-1.201-1.208c-0.666-0.001-1.207,0.537-1.208,1.202C196.767,7.197,196.767,7.198,196.767,7.2z M189.567,7.2c-0.002,0.665,0.537,1.206,1.202,1.207c0.665,0.001,1.206-0.537,1.208-1.202c0-0.001,0-0.003,0-0.005c0.001-0.666-0.537-1.206-1.203-1.208c-0.665-0.001-1.205,0.537-1.207,1.202C189.567,7.197,189.567,7.198,189.567,7.2z M182.368,7.2c-0.002,0.665,0.536,1.206,1.201,1.207c0.666,0.001,1.206-0.537,1.207-1.202c0-0.001,0-0.003,0-0.005c0.002-0.666-0.535-1.206-1.201-1.208c-0.666-0.001-1.205,0.537-1.207,1.202C182.368,7.197,182.368,7.198,182.368,7.2z M175.167,7.2c0,0.665,0.537,1.206,1.203,1.207c0.666,0.001,1.205-0.537,1.207-1.202c0-0.001,0-0.003,0-0.005c0.002-0.666-0.537-1.206-1.201-1.208c-0.666-0.002-1.207,0.537-1.209,1.202C175.167,7.197,175.167,7.198,175.167,7.2z M167.967,7.2c-0.002,0.665,0.537,1.206,1.201,1.207c0.666,0.001,1.207-0.537,1.207-1.202c0-0.001,0-0.003,0-0.005c0.002-0.666-0.535-1.206-1.201-1.208c-0.666-0.002-1.207,0.537-1.207,1.202C167.967,7.197,167.967,7.198,167.967,7.2z M160.767,7.2c-0.001,0.665,0.536,1.206,1.202,1.207c0.664,0.001,1.205-0.537,1.207-1.202c0-0.001,0-0.003,0-0.005c0.002-0.666-0.537-1.206-1.201-1.208c-0.666-0.001-1.207,0.537-1.208,1.202C160.767,7.197,160.767,7.198,160.767,7.2z M153.567,7.2c-0.002,0.665,0.537,1.206,1.202,1.207c0.665,0.001,1.206-0.537,1.208-1.202c0-0.001,0-0.003,0-0.005c0.001-0.666-0.537-1.206-1.203-1.208c-0.665-0.001-1.205,0.537-1.207,1.202C153.567,7.197,153.567,7.198,153.567,7.2z M146.368,7.2c-0.002,0.665,0.536,1.206,1.201,1.207c0.666,0.001,1.206-0.537,1.207-1.202c0-0.001,0-0.003,0-0.005c0.002-0.666-0.535-1.206-1.201-1.208c-0.666-0.001-1.205,0.537-1.207,1.202C146.368,7.197,146.368,7.198,146.368,7.2z M103.167,144c-0.002,0.664,0.535,1.205,1.201,1.207c0.666,0.004,1.207-0.535,1.208-1.199c0-0.004,0-0.006,0-0.008c0.002-0.666-0.535-1.207-1.2-1.209c-0.666-0.002-1.207,0.535-1.209,1.201C103.167,143.995,103.167,143.999,103.167,144z M95.968,144c-0.002,0.664,0.535,1.205,1.201,1.207c0.666,0.004,1.207-0.535,1.208-1.199c0-0.004,0-0.006,0-0.008c0.002-0.666-0.535-1.207-1.2-1.209c-0.666-0.002-1.207,0.535-1.209,1.201C95.968,143.995,95.968,143.999,95.968,144z M110.368,144c-0.002,0.664,0.535,1.205,1.2,1.207c0.665,0.004,1.206-0.535,1.208-1.199c0-0.004,0-0.006,0-0.008c0.003-0.666-0.535-1.207-1.199-1.209c-0.666-0.002-1.207,0.535-1.209,1.201C110.368,143.995,110.368,143.999,110.368,144z M117.567,144c-0.002,0.664,0.535,1.205,1.201,1.207c0.665,0.004,1.206-0.535,1.209-1.199c0-0.004,0-0.006,0-0.008c0.002-0.666-0.536-1.207-1.201-1.209c-0.666-0.002-1.207,0.535-1.209,1.201C117.567,143.995,117.567,143.999,117.567,144z M124.767,144c-0.003,0.664,0.534,1.205,1.2,1.207c0.666,0.004,1.207-0.535,1.209-1.199c0-0.004,0-0.006,0-0.008c0.002-0.666-0.535-1.207-1.201-1.209c-0.664-0.002-1.206,0.535-1.208,1.201C124.767,143.995,124.767,143.999,124.767,144z M131.967,144c-0.002,0.664,0.537,1.205,1.201,1.207c0.666,0.002,1.207-0.537,1.207-1.203c0-0.002,0-0.004,0-0.004c0.002-0.666-0.535-1.207-1.201-1.209c-0.666,0-1.207,0.537-1.207,1.203C131.967,143.997,131.967,143.999,131.967,144z M139.167,144c0,0.664,0.537,1.205,1.203,1.207s1.205-0.537,1.207-1.203c0-0.002,0-0.004,0-0.004c0.002-0.666-0.537-1.207-1.201-1.209c-0.666,0-1.207,0.537-1.209,1.203C139.167,143.997,139.167,143.999,139.167,144z M146.368,144c-0.002,0.664,0.536,1.205,1.201,1.207c0.666,0.002,1.206-0.537,1.207-1.203c0-0.002,0-0.004,0-0.004c0.002-0.666-0.535-1.207-1.201-1.209c-0.666,0-1.205,0.537-1.207,1.203C146.368,143.997,146.368,143.999,146.368,144z\"/>\n            <g gorn=\"0.2.0.1\"  id=\"_x30_.1.0.1\">\n                <title  id=\"0.1.0.1.0\">layer 21</title>\n                <circle fill=\"none\" cx=\"80.612\" gorn=\"0.2.0.1.1\"  cy=\"12.96\" stroke=\"#FFFFFF\" id=\"_x30_.1.0.1.1\" r=\"0.72\" stroke-width=\"0.72\"/>\n                <g gorn=\"0.2.0.1.2\"  id=\"_x30_.1.0.1.2\">\n                    <title  id=\"0.1.0.1.2.0\">text:MADE IN</title>\n                </g>\n                <g gorn=\"0.2.0.1.3\"  id=\"_x30_.1.0.1.3\">\n                    <title  id=\"0.1.0.1.3.0\">text:ITALY</title>\n                </g>\n                <g gorn=\"0.2.0.1.4\"  id=\"_x30_.1.0.1.4\">\n                    <title  id=\"0.1.0.1.4.0\">text:Prototype</title>\n                </g>\n                <g gorn=\"0.2.0.1.5\"  id=\"_x30_.1.0.1.5\">\n                    <title  id=\"0.1.0.1.5.0\">text:Limited</title>\n                </g>\n                <g gorn=\"0.2.0.1.6\"  id=\"_x30_.1.0.1.6\">\n                    <title  id=\"0.1.0.1.6.0\">text:Edition</title>\n                </g>\n                <g gorn=\"0.2.0.1.7\"  id=\"_x30_.1.0.1.7\">\n                    <g gorn=\"0.2.0.1.7.0\"  id=\"_x30_.1.0.1.7.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 102.569, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.7.0.0.0.0.0\"  id=\"_x30_.1.0.1.7.0.0\">\n                                        <g gorn=\"0.2.0.1.7.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.7.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.7.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.7.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.7.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.7.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -5.1472 -0.9391)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.7.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.7.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 -3.051758e-005 -3.051758e-005)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.7.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.7.0.0.0.0.0.0.0\" font-size=\"3.75\">13</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.8\"  id=\"_x30_.1.0.1.8\">\n                    <g gorn=\"0.2.0.1.8.0\"  id=\"_x30_.1.0.1.8.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 109.769, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.8.0.0.0.0.0\"  id=\"_x30_.1.0.1.8.0.0\">\n                                        <g gorn=\"0.2.0.1.8.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.8.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.8.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.8.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.8.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.8.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -5.1472 -0.9384)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.8.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.8.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 -3.051758e-005 0)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.8.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.8.0.0.0.0.0.0.0\" font-size=\"3.75\">12</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.9\"  id=\"_x30_.1.0.1.9\">\n                    <g gorn=\"0.2.0.1.9.0\"  id=\"_x30_.1.0.1.9.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 116.969, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.9.0.0.0.0.0\"  id=\"_x30_.1.0.1.9.0.0\">\n                                        <g gorn=\"0.2.0.1.9.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.9.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.9.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.9.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.9.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.9.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -5.1472 -0.9392)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.9.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.9.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 -3.051758e-005 0)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.9.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.9.0.0.0.0.0.0.0\" font-size=\"3.75\">11</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.10\"  id=\"_x30_.1.0.1.10\">\n                    <g gorn=\"0.2.0.1.10.0\"  id=\"_x30_.1.0.1.10.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 124.169, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.10.0.0.0.0.0\"  id=\"_x30_.1.0.1.10.0.0\">\n                                        <g gorn=\"0.2.0.1.10.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.10.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.10.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.10.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.10.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.10.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -5.1472 -0.94)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.10.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 -3.051758e-005 0)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.10.0.0.0.0.0.0.0\" font-size=\"3.75\">10</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.11\"  id=\"_x30_.1.0.1.11\">\n                    <g gorn=\"0.2.0.1.11.0\"  id=\"_x30_.1.0.1.11.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 131.369, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.11.0.0.0.0.0\"  id=\"_x30_.1.0.1.11.0.0\">\n                                        <g gorn=\"0.2.0.1.11.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.11.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.11.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.11.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.11.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.11.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -2.4402 -0.9388)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.11.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 0 -6.103516e-005)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.11.0.0.0.0.0.0.0\" font-size=\"3.75\">9</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.12\"  id=\"_x30_.1.0.1.12\">\n                    <g gorn=\"0.2.0.1.12.0\"  id=\"_x30_.1.0.1.12.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 138.569, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.12.0.0.0.0.0\"  id=\"_x30_.1.0.1.12.0.0\">\n                                        <g gorn=\"0.2.0.1.12.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.12.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.12.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.12.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.12.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.12.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -2.4402 -0.9396)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.12.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.12.0.0.0.0.0.0\">\n                                                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.12.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.12.0.0.0.0.0.0.0\" font-size=\"3.75\">8</text>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.13\"  id=\"_x30_.1.0.1.13\">\n                    <g gorn=\"0.2.0.1.13.0\"  id=\"_x30_.1.0.1.13.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 150.089, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.13.0.0.0.0.0\"  id=\"_x30_.1.0.1.13.0.0\">\n                                        <g gorn=\"0.2.0.1.13.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.13.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.13.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.13.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.13.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.13.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -2.4402 -0.9401)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.13.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 0 6.103516e-005)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.13.0.0.0.0.0.0.0\" font-size=\"3.75\">7</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.14\"  id=\"_x30_.1.0.1.14\">\n                    <g gorn=\"0.2.0.1.14.0\"  id=\"_x30_.1.0.1.14.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 157.289, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.14.0.0.0.0.0\"  id=\"_x30_.1.0.1.14.0.0\">\n                                        <g gorn=\"0.2.0.1.14.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.14.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.14.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.14.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.14.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.14.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -2.4402 -0.9389)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.14.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.14.0.0.0.0.0.0\">\n                                                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.14.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.14.0.0.0.0.0.0.0\" font-size=\"3.75\">6</text>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.15\"  id=\"_x30_.1.0.1.15\">\n                    <g gorn=\"0.2.0.1.15.0\"  id=\"_x30_.1.0.1.15.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 164.489, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.15.0.0.0.0.0\"  id=\"_x30_.1.0.1.15.0.0\">\n                                        <g gorn=\"0.2.0.1.15.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.15.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.15.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.15.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.15.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.15.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -2.4402 -0.9397)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.15.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.15.0.0.0.0.0.0\">\n                                                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.15.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.15.0.0.0.0.0.0.0\" font-size=\"3.75\">5</text>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.16\"  id=\"_x30_.1.0.1.16\">\n                    <g gorn=\"0.2.0.1.16.0\"  id=\"_x30_.1.0.1.16.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 171.689, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.16.0.0.0.0.0\"  id=\"_x30_.1.0.1.16.0.0\">\n                                        <g gorn=\"0.2.0.1.16.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.16.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.16.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.16.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.16.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.16.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -2.4402 -0.9405)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.16.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.16.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 0 6.103516e-005)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.16.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.16.0.0.0.0.0.0.0\" font-size=\"3.75\">4</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.17\"  id=\"_x30_.1.0.1.17\">\n                    <g gorn=\"0.2.0.1.17.0\"  id=\"_x30_.1.0.1.17.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 178.889, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.17.0.0.0.0.0\"  id=\"_x30_.1.0.1.17.0.0\">\n                                        <g gorn=\"0.2.0.1.17.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.17.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.17.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.17.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.17.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.17.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -2.4402 -0.9393)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.17.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.17.0.0.0.0.0.0\">\n                                                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.17.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.17.0.0.0.0.0.0.0\" font-size=\"3.75\">3</text>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.18\"  id=\"_x30_.1.0.1.18\">\n                    <g gorn=\"0.2.0.1.18.0\"  id=\"_x30_.1.0.1.18.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 186.089, 12.24)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.18.0.0.0.0.0\"  id=\"_x30_.1.0.1.18.0.0\">\n                                        <g gorn=\"0.2.0.1.18.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.18.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.1.18.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.18.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.1.18.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.18.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -2.4402 -0.9401)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.1.18.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.18.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 0 6.103516e-005)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.18.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.18.0.0.0.0.0.0.0\" font-size=\"3.75\">2</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.19\"  id=\"_x30_.1.0.1.20\">\n                    <title  id=\"0.1.0.1.20.0\">element:C1</title>\n                    <g gorn=\"0.2.0.1.19.1\"  id=\"_x30_.1.0.1.20.1\">\n                        <title  id=\"0.1.0.1.20.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.20\"  id=\"_x30_.1.0.1.21\">\n                    <title  id=\"0.1.0.1.21.0\">element:C2</title>\n                    <g gorn=\"0.2.0.1.20.1\"  id=\"_x30_.1.0.1.21.1\">\n                        <title  id=\"0.1.0.1.21.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.21\"  id=\"_x30_.1.0.1.22\">\n                    <title  id=\"0.1.0.1.22.0\">element:C3</title>\n                    <g gorn=\"0.2.0.1.21.1\"  id=\"_x30_.1.0.1.22.1\">\n                        <title  id=\"0.1.0.1.22.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.22\"  id=\"_x30_.1.0.1.23\">\n                    <title  id=\"0.1.0.1.23.0\">element:C4</title>\n                    <g gorn=\"0.2.0.1.22.1\"  id=\"_x30_.1.0.1.23.1\">\n                        <title  id=\"0.1.0.1.23.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.23\"  id=\"_x30_.1.0.1.24\">\n                    <title  id=\"0.1.0.1.24.0\">element:C5</title>\n                    <g gorn=\"0.2.0.1.23.1\"  id=\"_x30_.1.0.1.24.1\">\n                        <title  id=\"0.1.0.1.24.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.24\"  id=\"_x30_.1.0.1.25\">\n                    <title  id=\"0.1.0.1.25.0\">element:C6</title>\n                    <g gorn=\"0.2.0.1.24.1\"  id=\"_x30_.1.0.1.25.1\">\n                        <title  id=\"0.1.0.1.25.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.25\"  id=\"_x30_.1.0.1.26\">\n                    <title  id=\"0.1.0.1.26.0\">element:C7</title>\n                    <g gorn=\"0.2.0.1.25.1\"  id=\"_x30_.1.0.1.26.1\">\n                        <title  id=\"0.1.0.1.26.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.26\"  id=\"_x30_.1.0.1.27\">\n                    <title  id=\"0.1.0.1.27.0\">element:C8</title>\n                    <g gorn=\"0.2.0.1.26.1\"  id=\"_x30_.1.0.1.27.1\">\n                        <title  id=\"0.1.0.1.27.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.27\"  id=\"_x30_.1.0.1.28\">\n                    <title  id=\"0.1.0.1.28.0\">element:C9</title>\n                    <g gorn=\"0.2.0.1.27.1\"  id=\"_x30_.1.0.1.28.1\">\n                        <title  id=\"0.1.0.1.28.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.28\"  id=\"_x30_.1.0.1.29\">\n                    <title  id=\"0.1.0.1.29.0\">element:C11</title>\n                    <g gorn=\"0.2.0.1.28.1\"  id=\"_x30_.1.0.1.29.1\">\n                        <title  id=\"0.1.0.1.29.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.29\"  id=\"_x30_.1.0.1.31\">\n                    <title  id=\"0.1.0.1.31.0\">element:F1</title>\n                    <g gorn=\"0.2.0.1.29.1\"  id=\"_x30_.1.0.1.31.1\">\n                        <title  id=\"0.1.0.1.31.1.0\">package:L1812</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.30\"  id=\"_x30_.1.0.1.32\">\n                    <title  id=\"0.1.0.1.32.0\">element:FD1</title>\n                    <g gorn=\"0.2.0.1.30.1\"  id=\"_x30_.1.0.1.32.1\">\n                        <title  id=\"0.1.0.1.32.1.0\">package:FIDUCIA-MOUNT</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.31\"  id=\"_x30_.1.0.1.33\">\n                    <title  id=\"0.1.0.1.33.0\">element:FD2</title>\n                    <g gorn=\"0.2.0.1.31.1\"  id=\"_x30_.1.0.1.33.1\">\n                        <title  id=\"0.1.0.1.33.1.0\">package:FIDUCIA-MOUNT</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.32\"  id=\"_x30_.1.0.1.34\">\n                    <title  id=\"0.1.0.1.34.0\">element:FD3</title>\n                    <g gorn=\"0.2.0.1.32.1\"  id=\"_x30_.1.0.1.34.1\">\n                        <title  id=\"0.1.0.1.34.1.0\">package:FIDUCIA-MOUNT</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.33\"  id=\"_x30_.1.0.1.35\">\n                    <title  id=\"0.1.0.1.35.0\">element:GROUND</title>\n                    <g gorn=\"0.2.0.1.33.1\"  id=\"_x30_.1.0.1.35.1\">\n                        <title  id=\"0.1.0.1.35.1.0\">package:SJ</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.34\"  id=\"_x30_.1.0.1.40\">\n                    <title  id=\"0.1.0.1.40.0\">element:L</title>\n                    <g gorn=\"0.2.0.1.34.1\"  id=\"_x30_.1.0.1.40.1\">\n                        <title  id=\"0.1.0.1.40.1.0\">text:L</title>\n                        <g  transform=\"matrix(1 0 0 1 88.3521 36.1958)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.1.34.1.1.0.0.0\"  id=\"_x30_.1.0.1.40.1.1\">\n                                        <g  transform=\"matrix(1 0 0 1 -6.103516e-005 0)\">\n                                            <g >\n                                                <g >\n                                                    <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.1.34.1.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.1.40.1.1.0\" font-size=\"4.6771\">L</text>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.35\"  id=\"_x30_.1.0.1.44\">\n                    <title  id=\"0.1.0.1.44.0\">element:R1</title>\n                    <g gorn=\"0.2.0.1.35.1\"  id=\"_x30_.1.0.1.44.1\">\n                        <title  id=\"0.1.0.1.44.1.0\">package:R0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.36\"  id=\"_x30_.1.0.1.45\">\n                    <title  id=\"0.1.0.1.45.0\">element:R2</title>\n                    <g gorn=\"0.2.0.1.36.1\"  id=\"_x30_.1.0.1.45.1\">\n                        <title  id=\"0.1.0.1.45.1.0\">package:R0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.37\"  id=\"_x30_.1.0.1.46\">\n                    <title  id=\"0.1.0.1.46.0\">element:RN1</title>\n                    <g gorn=\"0.2.0.1.37.1\"  id=\"_x30_.1.0.1.46.1\">\n                        <title  id=\"0.1.0.1.46.1.0\">package:CAY16</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.38\"  id=\"_x30_.1.0.1.47\">\n                    <title  id=\"0.1.0.1.47.0\">element:RN2</title>\n                    <g gorn=\"0.2.0.1.38.1\"  id=\"_x30_.1.0.1.47.1\">\n                        <title  id=\"0.1.0.1.47.1.0\">package:CAY16</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.39\"  id=\"_x30_.1.0.1.48\">\n                    <title  id=\"0.1.0.1.48.0\">element:RN3</title>\n                    <g gorn=\"0.2.0.1.39.1\"  id=\"_x30_.1.0.1.48.1\">\n                        <title  id=\"0.1.0.1.48.1.0\">package:CAY16</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.40\"  id=\"_x30_.1.0.1.49\">\n                    <title  id=\"0.1.0.1.49.0\">element:RN4</title>\n                    <g gorn=\"0.2.0.1.40.1\"  id=\"_x30_.1.0.1.49.1\">\n                        <title  id=\"0.1.0.1.49.1.0\">package:CAY16</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.41\"  id=\"_x30_.1.0.1.52\">\n                    <title  id=\"0.1.0.1.52.0\">element:Z1</title>\n                    <g gorn=\"0.2.0.1.41.1\"  id=\"_x30_.1.0.1.52.1\">\n                        <title  id=\"0.1.0.1.52.1.0\">package:CT/CN0603</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.1.42\"  id=\"_x30_.1.0.1.53\">\n                    <title  id=\"0.1.0.1.53.0\">element:Z2</title>\n                    <g gorn=\"0.2.0.1.42.1\"  id=\"_x30_.1.0.1.53.1\">\n                        <title  id=\"0.1.0.1.53.1.0\">package:CT/CN0603</title>\n                    </g>\n                </g>\n            </g>\n            <g gorn=\"0.2.0.2\"  id=\"_x30_.1.0.2\">\n                <title  id=\"0.1.0.2.0\">layer 25</title>\n                <g gorn=\"0.2.0.2.1\"  id=\"_x30_.1.0.2.1\">\n                    <g gorn=\"0.2.0.2.1.0\"  id=\"_x30_.1.0.2.1.0\">\n                        <g  transform=\"matrix(0 -1 1 0 127.3638 138.9966)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.1.0.0.0.0.0\"  id=\"_x30_.1.0.2.1.0.0\">\n                                        <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.1.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.1.0.0.0\" font-size=\"3.3408\">5V</text>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.2\"  id=\"_x30_.1.0.2.2\">\n                    <title  id=\"0.1.0.2.2.0\">text:A0</title>\n                    <g  transform=\"matrix(-4.371139e-008 -1 1 -4.371139e-008 163.2192 138.9966)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.2.1.0.0.0\"  id=\"_x30_.1.0.2.2.1\">\n                                    <g  transform=\"matrix(1 0 0 1 0 6.103516e-005)\">\n                                        <g >\n                                            <g >\n                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.2.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.2.1.0\" font-size=\"3.3408\">A0</text>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.3\"  id=\"_x30_.1.0.2.3\">\n                    <g gorn=\"0.2.0.2.3.0\"  id=\"_x30_.1.0.2.3.0\">\n                        <g  transform=\"matrix(1 0 0 1 175.6724 130.811)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.3.0.0.0.0.0\"  id=\"_x30_.1.0.2.3.0.0\">\n                                        <g  transform=\"matrix(1 0 0 1 0 3.051758e-005)\">\n                                            <g >\n                                                <g >\n                                                    <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.3.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.3.0.0.0\" font-size=\"3.6749\">ANALOG IN</text>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.4\"  id=\"_x30_.1.0.2.4\">\n                    <g gorn=\"0.2.0.2.4.0\"  id=\"_x30_.1.0.2.4.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 87.8933, 11.8426)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.4.0.0.0.0.0\"  id=\"_x30_.1.0.2.4.0.0\">\n                                        <g gorn=\"0.2.0.2.4.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.4.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.4.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.4.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.2.4.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.4.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -11.0056 -0.9392)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.2.4.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.4.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 6.103516e-005 3.051758e-005)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.4.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.4.0.0.0.0.0.0.0\" font-size=\"3.75\">AREF</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.5\"  id=\"_x30_.1.0.2.5\">\n                    <title  id=\"0.1.0.2.5.0\">text:1</title>\n                    <g  transform=\"matrix(1 0 0 1 191.1313 64.604)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.5.1.0.0.0\"  id=\"_x30_.1.0.2.5.1\">\n                                    <g  transform=\"matrix(1 0 0 1 6.103516e-005 0)\">\n                                        <g >\n                                            <g >\n                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.5.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.5.1.0\" font-size=\"4.176\">1</text>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.6\"  id=\"_x30_.1.0.2.6\">\n                    <g gorn=\"0.2.0.2.6.0\"  id=\"_x30_.1.0.2.6.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 95.4223, 11.9146)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.6.0.0.0.0.0\"  id=\"_x30_.1.0.2.6.0.0\">\n                                        <g gorn=\"0.2.0.2.6.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.6.0.0.0\">\n                                            <g  transform=\"rotate(-90)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.6.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.6.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.2.6.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.6.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -8.246 -0.9399)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.6.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 -3.051758e-005 3.051758e-005)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.6.0.0.0.0.0.0.0\" font-size=\"3.75\">GND</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.7\"  id=\"_x30_.1.0.2.7\">\n                    <title  id=\"0.1.0.2.7.0\">text:M.Banzi</title>\n                </g>\n                <g gorn=\"0.2.0.2.8\"  id=\"_x30_.1.0.2.8\">\n                    <title  id=\"0.1.0.2.8.0\">text:D.Cuartielles</title>\n                </g>\n                <g gorn=\"0.2.0.2.9\"  id=\"_x30_.1.0.2.9\">\n                    <title  id=\"0.1.0.2.9.0\">text:D.Mellis</title>\n                </g>\n                <g gorn=\"0.2.0.2.10\"  id=\"_x30_.1.0.2.10\">\n                    <title  id=\"0.1.0.2.10.0\">text:TX</title>\n                    <g  transform=\"matrix(1 0 0 1 84.5728 49.3169)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.10.1.0.0.0\"  id=\"_x30_.1.0.2.10.1\">\n                                    <g  transform=\"matrix(1 0 0 1 -6.103516e-005 0)\">\n                                        <g >\n                                            <g >\n                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.10.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.10.1.0\" font-size=\"4.6771\">TX</text>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.11\"  id=\"_x30_.1.0.2.11\">\n                    <title  id=\"0.1.0.2.11.0\">text:RX</title>\n                    <g  transform=\"matrix(1 0 0 1 84.6489 56.1567)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.11.1.0.0.0\"  id=\"_x30_.1.0.2.11.1\">\n                                    <g  transform=\"matrix(1 0 0 1 3.051758e-005 3.051758e-005)\">\n                                        <g >\n                                            <g >\n                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.11.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.11.1.0\" font-size=\"4.6771\">RX</text>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.12\"  id=\"_x30_.1.0.2.12\">\n                    <title  id=\"0.1.0.2.12.0\">text:G.Martino</title>\n                </g>\n                <g gorn=\"0.2.0.2.13\"  id=\"_x30_.1.0.2.13\">\n                    <title  id=\"0.1.0.2.13.0\">text:T.Igoe</title>\n                </g>\n                <g gorn=\"0.2.0.2.14\"  id=\"_x30_.1.0.2.14\">\n                    <g gorn=\"0.2.0.2.14.0\"  id=\"_x30_.1.0.2.14.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 112.292, 138.6)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.14.0.0.0.0.0\"  id=\"_x30_.1.0.2.14.0.0\">\n                                        <g gorn=\"0.2.0.2.14.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.14.0.0.0\">\n                                            <g  transform=\"rotate(270)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.14.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.14.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.2.14.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.14.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -9.155273e-005 -4.882813e-004)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.2.14.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.14.0.0.0.0.0.0\">\n                                                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.14.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.14.0.0.0.0.0.0.0\" font-size=\"3.3408\">RESET</text>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.15\"  id=\"_x30_.1.0.2.15\">\n                    <g gorn=\"0.2.0.2.15.0\"  id=\"_x30_.1.0.2.15.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 120.212, 138.96)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.15.0.0.0.0.0\"  id=\"_x30_.1.0.2.15.0.0\">\n                                        <g gorn=\"0.2.0.2.15.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.15.0.0.0\">\n                                            <g  transform=\"rotate(270)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.15.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.15.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.2.15.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.15.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 5.340576e-004 -5.798340e-004)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.2.15.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.15.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 3.051758e-005 6.103516e-005)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.15.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.15.0.0.0.0.0.0.0\" font-size=\"3.3408\">3V3</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.16\"  id=\"_x30_.1.0.2.16\">\n                    <title  id=\"0.1.0.2.16.0\">text:A1</title>\n                    <g  transform=\"matrix(-4.371139e-008 -1 1 -4.371139e-008 170.4185 138.9966)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.16.1.0.0.0\"  id=\"_x30_.1.0.2.16.1\">\n                                    <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.16.1.0.0.0.0\"  id=\"_x30_.1.0.2.16.1.0\" font-size=\"3.3408\">A1</text>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.17\"  id=\"_x30_.1.0.2.17\">\n                    <title  id=\"0.1.0.2.17.0\">text:A2</title>\n                    <g  transform=\"matrix(-4.371139e-008 -1 1 -4.371139e-008 177.6216 138.9966)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.17.1.0.0.0\"  id=\"_x30_.1.0.2.17.1\">\n                                    <g  transform=\"matrix(1 0 0 1 0 6.103516e-005)\">\n                                        <g >\n                                            <g >\n                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.17.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.17.1.0\" font-size=\"3.3408\">A2</text>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.18\"  id=\"_x30_.1.0.2.18\">\n                    <title  id=\"0.1.0.2.18.0\">text:A3</title>\n                    <g  transform=\"matrix(-4.371139e-008 -1 1 -4.371139e-008 184.8188 138.9966)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.18.1.0.0.0\"  id=\"_x30_.1.0.2.18.1\">\n                                    <g  transform=\"matrix(1 0 0 1 0 1.220703e-004)\">\n                                        <g >\n                                            <g >\n                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.18.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.18.1.0\" font-size=\"3.3408\">A3</text>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.19\"  id=\"_x30_.1.0.2.19\">\n                    <title  id=\"0.1.0.2.19.0\">text:A4</title>\n                    <g  transform=\"matrix(-4.371139e-008 -1 1 -4.371139e-008 192.02 138.9966)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.19.1.0.0.0\"  id=\"_x30_.1.0.2.19.1\">\n                                    <g  transform=\"matrix(1 0 0 1 0 6.103516e-005)\">\n                                        <g >\n                                            <g >\n                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.19.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.19.1.0\" font-size=\"3.3408\">A4</text>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.20\"  id=\"_x30_.1.0.2.20\">\n                    <title  id=\"0.1.0.2.20.0\">text:A5</title>\n                    <g  transform=\"matrix(-4.371139e-008 -1 1 -4.371139e-008 199.2192 138.9966)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.20.1.0.0.0\"  id=\"_x30_.1.0.2.20.1\">\n                                    <g  transform=\"matrix(1 0 0 1 0 1.220703e-004)\">\n                                        <g >\n                                            <g >\n                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.20.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.20.1.0\" font-size=\"3.3408\">A5</text>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.21\"  id=\"_x30_.1.0.2.21\">\n                    <g gorn=\"0.2.0.2.21.0\"  id=\"_x30_.1.0.2.21.0\">\n                        <g  transform=\"matrix(-4.371139e-008 -1 1 -4.371139e-008 148.9653 138.9966)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.21.0.0.0.0.0\"  id=\"_x30_.1.0.2.21.0.0\">\n                                        <g  transform=\"matrix(1 0 0 1 0 1.220703e-004)\">\n                                            <g >\n                                                <g >\n                                                    <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.21.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.21.0.0.0\" font-size=\"3.3408\">VIN</text>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.22\"  id=\"_x30_.1.0.2.22\">\n                    <g gorn=\"0.2.0.2.22.0\"  id=\"_x30_.1.0.2.22.0\">\n                        <g  transform=\"matrix(-4.371139e-008 -1 1 -4.371139e-008 134.561 138.9966)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.22.0.0.0.0.0\"  id=\"_x30_.1.0.2.22.0.0\">\n                                        <g  transform=\"matrix(1 0 0 1 0 1.220703e-004)\">\n                                            <g >\n                                                <g >\n                                                    <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.22.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.22.0.0.0\" font-size=\"3.3408\">GND</text>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.23\"  id=\"_x30_.1.0.2.23\">\n                    <g gorn=\"0.2.0.2.23.0\"  id=\"_x30_.1.0.2.23.0\">\n                        <g  transform=\"matrix(-4.371139e-008 -1 1 -4.371139e-008 141.5571 138.9595)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.23.0.0.0.0.0\"  id=\"_x30_.1.0.2.23.0.0\">\n                                        <g  transform=\"matrix(1 0 0 1 3.051758e-005 1.220703e-004)\">\n                                            <g >\n                                                <g >\n                                                    <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.23.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.23.0.0.0\" font-size=\"3.3408\">GND</text>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.24\"  id=\"_x30_.1.0.2.24\">\n                    <title  id=\"0.1.0.2.24.0\">text:[#=PWM]</title>\n                    <g  transform=\"matrix(1 0 0 1 145.1567 27.2759)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.24.1.0.0.0\"  id=\"_x30_.1.0.2.24.1\">\n                                    <g  transform=\"matrix(1 0 0 1 1.220703e-004 -3.051758e-005)\">\n                                        <g >\n                                            <g >\n                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.24.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.24.1.0\" font-size=\"3.6749\">DIGITAL (PWM=</text>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                    <g  transform=\"matrix(1 0 0 1 179.6958 27.2759)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.24.2.0.0.0\"  id=\"_x30_.1.0.2.24.2\"/>\n                            </g>\n                        </g>\n                    </g>\n                    <g  transform=\"matrix(1 0 0 1 182.0278 27.2759)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.24.3.0.0.0\"  id=\"_x30_.1.0.2.24.3\">\n                                    <g  transform=\"matrix(1 0 0 1 1.220703e-004 -3.051758e-005)\">\n                                        <g >\n                                            <g >\n                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.24.3.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.24.3.0\" font-size=\"3.6749\">)</text>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.25\"  id=\"_x30_.1.0.2.25\">\n                    <g gorn=\"0.2.0.2.25.0\"  id=\"_x30_.1.0.2.25.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 123.452, 22.68)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.25.0.0.0.0.0\"  id=\"_x30_.1.0.2.25.0.0\">\n                                        <g gorn=\"0.2.0.2.25.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.25.0.0.0\">\n                                            <g  transform=\"rotate(270)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.25.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.25.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.2.25.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.25.0.0.0.0.0\">\n                                                                <g gorn=\"0.2.0.2.25.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.25.0.0.0.0.0.0\" enable-background=\"new    \">\n                                                                    <path fill=\"#FFFFFF\" gorn=\"0.2.0.2.25.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.25.0.0.0.0.0.0.0\" d=\"M1.565-1.051c-0.021-0.5,0.25-0.756,0.596-0.756c0.21,0,0.37,0.064,0.706,0.225c0.255,0.121,0.44,0.211,0.625,0.211c0.181,0,0.266-0.145,0.271-0.42h0.3C4.088-1.23,3.798-1.035,3.487-1.035c-0.2,0-0.38-0.061-0.726-0.221C2.526-1.371,2.341-1.477,2.16-1.477s-0.29,0.125-0.3,0.426H1.565z\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.26\"  id=\"_x30_.1.0.2.26\">\n                    <g gorn=\"0.2.0.2.26.0\"  id=\"_x30_.1.0.2.26.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 123.452, 22.68)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.26.0.0.0.0.0\"  id=\"_x30_.1.0.2.26.0.0\">\n                                        <g gorn=\"0.2.0.2.26.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.26.0.0.0\">\n                                            <g  transform=\"rotate(270)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.26.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.26.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.2.26.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.26.0.0.0.0.0\">\n                                                                <g gorn=\"0.2.0.2.26.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.26.0.0.0.0.0.0\" enable-background=\"new    \">\n                                                                    <path fill=\"#FFFFFF\" gorn=\"0.2.0.2.26.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.26.0.0.0.0.0.0.0\" d=\"M1.565-8.473c-0.021-0.5,0.25-0.756,0.596-0.756c0.21,0,0.37,0.064,0.706,0.225c0.255,0.121,0.44,0.211,0.625,0.211c0.181,0,0.266-0.145,0.271-0.42h0.3c0.025,0.561-0.265,0.756-0.576,0.756c-0.2,0-0.38-0.061-0.726-0.221C2.526-8.793,2.341-8.899,2.16-8.899s-0.29,0.125-0.3,0.426H1.565L1.565-8.473z\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.27\"  id=\"_x30_.1.0.2.27\">\n                    <g gorn=\"0.2.0.2.27.0\"  id=\"_x30_.1.0.2.27.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 163.412, 19.08)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.27.0.0.0.0.0\"  id=\"_x30_.1.0.2.27.0.0\">\n                                        <g gorn=\"0.2.0.2.27.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.27.0.0.0\">\n                                            <g  transform=\"rotate(270)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.27.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.27.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.2.27.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.27.0.0.0.0.0\">\n                                                                <g gorn=\"0.2.0.2.27.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.27.0.0.0.0.0.0\" enable-background=\"new    \">\n                                                                    <path fill=\"#FFFFFF\" gorn=\"0.2.0.2.27.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.27.0.0.0.0.0.0.0\" d=\"M0.994-1.05c-0.02-0.502,0.25-0.756,0.596-0.756c0.21,0,0.37,0.064,0.706,0.225C2.55-1.46,2.735-1.37,2.92-1.37c0.181,0,0.266-0.146,0.271-0.422h0.3C3.516-1.23,3.226-1.036,2.915-1.036c-0.2,0-0.38-0.059-0.726-0.219c-0.234-0.115-0.42-0.221-0.6-0.221c-0.18,0-0.29,0.125-0.3,0.426H0.994z\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.28\"  id=\"_x30_.1.0.2.28\">\n                    <title  id=\"0.1.0.2.28.0\">text:#</title>\n                    <g  transform=\"matrix(1, 0, 0, 1, 177.812, 19.08)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.2.28.1.0.0.0\"  id=\"_x30_.1.0.2.28.1\">\n                                    <g gorn=\"0.2.0.2.28.1.0.0.0.0\"  id=\"_x30_.1.0.2.28.1.0\">\n                                        <g  transform=\"rotate(270)\">\n                                            <g >\n                                                <g >\n                                                    <g gorn=\"0.2.0.2.28.1.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.28.1.0.0\">\n                                                        <g gorn=\"0.2.0.2.28.1.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.28.1.0.0.0\">\n                                                            <g gorn=\"0.2.0.2.28.1.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.28.1.0.0.0.0\" enable-background=\"new    \">\n                                                                <path fill=\"#FFFFFF\" gorn=\"0.2.0.2.28.1.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.28.1.0.0.0.0.0\" d=\"M0.994-1.051c-0.02-0.501,0.25-0.757,0.596-0.757c0.21,0,0.37,0.063,0.706,0.226C2.55-1.461,2.735-1.371,2.92-1.371c0.181,0,0.266-0.146,0.271-0.421h0.3c0.025,0.561-0.265,0.756-0.576,0.756c-0.2,0-0.38-0.061-0.726-0.22c-0.235-0.115-0.42-0.222-0.601-0.222c-0.181,0-0.29,0.125-0.3,0.427H0.994z\"/>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.29\"  id=\"_x30_.1.0.2.29\">\n                    <g gorn=\"0.2.0.2.29.0\"  id=\"_x30_.1.0.2.29.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 156.572, 19.08)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.29.0.0.0.0.0\"  id=\"_x30_.1.0.2.29.0.0\">\n                                        <g gorn=\"0.2.0.2.29.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.29.0.0.0\">\n                                            <g  transform=\"rotate(270)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.29.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.29.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.2.29.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.29.0.0.0.0.0\">\n                                                                <g gorn=\"0.2.0.2.29.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.29.0.0.0.0.0.0\" enable-background=\"new    \">\n                                                                    <path fill=\"#FFFFFF\" gorn=\"0.2.0.2.29.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.29.0.0.0.0.0.0.0\" d=\"M0.994-1.05c-0.02-0.502,0.25-0.756,0.596-0.756c0.21,0,0.37,0.064,0.706,0.225C2.55-1.46,2.735-1.37,2.92-1.37c0.181,0,0.266-0.146,0.271-0.422h0.3c0.025,0.561-0.265,0.756-0.576,0.756c-0.2,0-0.38-0.059-0.726-0.219c-0.234-0.115-0.42-0.221-0.6-0.221c-0.18,0-0.29,0.125-0.3,0.426H0.994z\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.30\"  id=\"_x30_.1.0.2.30\">\n                    <g gorn=\"0.2.0.2.30.0\"  id=\"_x30_.1.0.2.30.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 130.292, 19.08)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.30.0.0.0.0.0\"  id=\"_x30_.1.0.2.30.0.0\">\n                                        <g gorn=\"0.2.0.2.30.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.30.0.0.0\">\n                                            <g  transform=\"rotate(270)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.30.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.30.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.2.30.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.30.0.0.0.0.0\">\n                                                                <g gorn=\"0.2.0.2.30.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.30.0.0.0.0.0.0\" enable-background=\"new    \">\n                                                                    <path fill=\"#FFFFFF\" gorn=\"0.2.0.2.30.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.30.0.0.0.0.0.0.0\" d=\"M0.994-1.051c-0.02-0.5,0.25-0.756,0.596-0.756c0.21,0,0.37,0.064,0.706,0.225C2.55-1.461,2.735-1.372,2.92-1.372c0.181,0,0.266-0.146,0.271-0.42h0.3c0.025,0.561-0.265,0.756-0.576,0.756c-0.2,0-0.38-0.063-0.726-0.221C1.954-1.372,1.769-1.48,1.588-1.48c-0.181,0-0.29,0.125-0.3,0.429H0.994L0.994-1.051z\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.31\"  id=\"_x30_.1.0.2.31\">\n                    <g gorn=\"0.2.0.2.31.0\"  id=\"_x30_.1.0.2.31.0\">\n                        <title  id=\"0.1.0.2.31.0.0\">text:Arduino</title>\n                        <g  transform=\"matrix(1 0 0 1 109.0161 55.1792)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.31.0.1.0.0.0\"  id=\"_x30_.1.0.2.31.0.1\">\n                                        <g  transform=\"matrix(1 0 0 1 6.103516e-005 0)\">\n                                            <g >\n                                                <g >\n                                                    <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.31.0.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.31.0.1.0\" font-size=\"6.1209\">Arduino</text>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                    <g gorn=\"0.2.0.2.31.1\"  id=\"_x30_.1.0.2.31.1\">\n                        <title  id=\"0.1.0.2.31.1.0\">text:TM</title>\n                        <g  transform=\"matrix(1 0 0 1 138.9976 51.5815)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.31.1.1.0.0.0\"  id=\"_x30_.1.0.2.31.1.1\">\n                                        <g  transform=\"matrix(1 0 0 1 0 3.051758e-005)\">\n                                            <g >\n                                                <g >\n                                                    <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.31.1.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.31.1.1.0\" font-size=\"2.2258\">TM</text>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.32\"  id=\"_x30_.1.0.2.32\">\n                    <g gorn=\"0.2.0.2.32.0\"  id=\"_x30_.1.0.2.32.0\">\n                        <g  transform=\"matrix(1, 0, 0, 1, 106.172, 138.6)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.32.0.0.0.0.0\"  id=\"_x30_.1.0.2.32.0.0\">\n                                        <g gorn=\"0.2.0.2.32.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.32.0.0.0\">\n                                            <g  transform=\"rotate(270)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.32.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.32.0.0.0.0\">\n                                                            <g gorn=\"0.2.0.2.32.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.32.0.0.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -9.155273e-005 -1.220703e-004)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.2.32.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.32.0.0.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 0 6.103516e-005)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.32.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.32.0.0.0.0.0.0.0\" font-size=\"3.3408\">IOREF</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.33\"  id=\"_x30_.1.0.2.33\">\n                    <title  id=\"0.1.0.2.33.0\">text:SDA</title>\n                </g>\n                <g gorn=\"0.2.0.2.34\"  id=\"_x30_.1.0.2.34\">\n                    <title  id=\"0.1.0.2.34.0\">text:SCL</title>\n                </g>\n                <g gorn=\"0.2.0.2.35\"  id=\"_x30_.1.0.2.35\">\n                    <title  id=\"0.1.0.2.35.0\">element:AD</title>\n                    <g gorn=\"0.2.0.2.35.1\"  id=\"_x30_.1.0.2.35.1\">\n                        <title  id=\"0.1.0.2.35.1.0\">package:1X06</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.36\"  id=\"_x30_.1.0.2.36\">\n                    <title  id=\"0.1.0.2.36.0\">element:C1</title>\n                    <g gorn=\"0.2.0.2.36.1\"  id=\"_x30_.1.0.2.36.1\">\n                        <title  id=\"0.1.0.2.36.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.37\"  id=\"_x30_.1.0.2.37\">\n                    <title  id=\"0.1.0.2.37.0\">element:C2</title>\n                    <g gorn=\"0.2.0.2.37.1\"  id=\"_x30_.1.0.2.37.1\">\n                        <title  id=\"0.1.0.2.37.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.38\"  id=\"_x30_.1.0.2.38\">\n                    <title  id=\"0.1.0.2.38.0\">element:C3</title>\n                    <g gorn=\"0.2.0.2.38.1\"  id=\"_x30_.1.0.2.38.1\">\n                        <title  id=\"0.1.0.2.38.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.39\"  id=\"_x30_.1.0.2.39\">\n                    <title  id=\"0.1.0.2.39.0\">element:C4</title>\n                    <g gorn=\"0.2.0.2.39.1\"  id=\"_x30_.1.0.2.39.1\">\n                        <title  id=\"0.1.0.2.39.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.40\"  id=\"_x30_.1.0.2.40\">\n                    <title  id=\"0.1.0.2.40.0\">element:C5</title>\n                    <g gorn=\"0.2.0.2.40.1\"  id=\"_x30_.1.0.2.40.1\">\n                        <title  id=\"0.1.0.2.40.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.41\"  id=\"_x30_.1.0.2.41\">\n                    <title  id=\"0.1.0.2.41.0\">element:C6</title>\n                    <g gorn=\"0.2.0.2.41.1\"  id=\"_x30_.1.0.2.41.1\">\n                        <title  id=\"0.1.0.2.41.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.42\"  id=\"_x30_.1.0.2.42\">\n                    <title  id=\"0.1.0.2.42.0\">element:C7</title>\n                    <g gorn=\"0.2.0.2.42.1\"  id=\"_x30_.1.0.2.42.1\">\n                        <title  id=\"0.1.0.2.42.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.43\"  id=\"_x30_.1.0.2.43\">\n                    <title  id=\"0.1.0.2.43.0\">element:C8</title>\n                    <g gorn=\"0.2.0.2.43.1\"  id=\"_x30_.1.0.2.43.1\">\n                        <title  id=\"0.1.0.2.43.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.44\"  id=\"_x30_.1.0.2.44\">\n                    <title  id=\"0.1.0.2.44.0\">element:C9</title>\n                    <g gorn=\"0.2.0.2.44.1\"  id=\"_x30_.1.0.2.44.1\">\n                        <title  id=\"0.1.0.2.44.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.45\"  id=\"_x30_.1.0.2.45\">\n                    <title  id=\"0.1.0.2.45.0\">element:C11</title>\n                    <g gorn=\"0.2.0.2.45.1\"  id=\"_x30_.1.0.2.45.1\">\n                        <title  id=\"0.1.0.2.45.1.0\">package:C0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.46\"  id=\"_x30_.1.0.2.46\">\n                    <title  id=\"0.1.0.2.46.0\">element:D1</title>\n                    <g gorn=\"0.2.0.2.46.1\"  id=\"_x30_.1.0.2.46.1\">\n                        <title  id=\"0.1.0.2.46.1.0\">package:SMB</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.47\"  id=\"_x30_.1.0.2.47\">\n                    <title  id=\"0.1.0.2.47.0\">element:D2</title>\n                    <g gorn=\"0.2.0.2.47.1\"  id=\"_x30_.1.0.2.47.1\">\n                        <title  id=\"0.1.0.2.47.1.0\">package:MINIMELF</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.48\"  id=\"_x30_.1.0.2.48\">\n                    <title  id=\"0.1.0.2.48.0\">element:D3</title>\n                    <g gorn=\"0.2.0.2.48.1\"  id=\"_x30_.1.0.2.48.1\">\n                        <title  id=\"0.1.0.2.48.1.0\">package:MINIMELF</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.49\"  id=\"_x30_.1.0.2.49\">\n                    <title  id=\"0.1.0.2.49.0\">element:F1</title>\n                    <g gorn=\"0.2.0.2.49.1\"  id=\"_x30_.1.0.2.49.1\">\n                        <title  id=\"0.1.0.2.49.1.0\">package:L1812</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.50\"  id=\"_x30_.1.0.2.50\">\n                    <title  id=\"0.1.0.2.50.0\">element:FD1</title>\n                    <g gorn=\"0.2.0.2.50.1\"  id=\"_x30_.1.0.2.50.1\">\n                        <title  id=\"0.1.0.2.50.1.0\">package:FIDUCIA-MOUNT</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.51\"  id=\"_x30_.1.0.2.51\">\n                    <title  id=\"0.1.0.2.51.0\">element:FD2</title>\n                    <g gorn=\"0.2.0.2.51.1\"  id=\"_x30_.1.0.2.51.1\">\n                        <title  id=\"0.1.0.2.51.1.0\">package:FIDUCIA-MOUNT</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.52\"  id=\"_x30_.1.0.2.52\">\n                    <title  id=\"0.1.0.2.52.0\">element:FD3</title>\n                    <g gorn=\"0.2.0.2.52.1\"  id=\"_x30_.1.0.2.52.1\">\n                        <title  id=\"0.1.0.2.52.1.0\">package:FIDUCIA-MOUNT</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.53\"  id=\"_x30_.1.0.2.53\">\n                    <title  id=\"0.1.0.2.53.0\">element:GROUND</title>\n                    <g gorn=\"0.2.0.2.53.1\"  id=\"_x30_.1.0.2.53.1\">\n                        <title  id=\"0.1.0.2.53.1.0\">package:SJ</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.54\"  id=\"_x30_.1.0.2.54\">\n                    <title  id=\"0.1.0.2.54.0\">element:ICSP</title>\n                    <g gorn=\"0.2.0.2.54.1\"  id=\"_x30_.1.0.2.54.1\">\n                        <title  id=\"0.1.0.2.54.1.0\">text:ICSP</title>\n                        <g  transform=\"matrix(1, 0, 0, 1, 194.553, 82.3349)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.54.1.1.0.0.0\"  id=\"_x30_.1.0.2.54.1.1\">\n                                        <g gorn=\"0.2.0.2.54.1.1.0.0.0.0\"  id=\"_x30_.1.0.2.54.1.1.0\">\n                                            <g  transform=\"rotate(270)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.54.1.1.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.54.1.1.0.0\">\n                                                            <g gorn=\"0.2.0.2.54.1.1.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.54.1.1.0.0.0\">\n                                                                <g  transform=\"matrix(1 0 0 1 -0.7808 -0.783)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.2.54.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.54.1.1.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 -3.051758e-005 1.220703e-004)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.54.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.54.1.1.0.0.0.0.0\" font-size=\"4.176\">ICSP</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                    <g gorn=\"0.2.0.2.54.2\"  id=\"_x30_.1.0.2.54.2\">\n                        <title  id=\"0.1.0.2.54.2.0\">package:2X03</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.55\"  id=\"_x30_.1.0.2.55\">\n                    <title  id=\"0.1.0.2.55.0\">element:ICSP</title>\n                    <g gorn=\"0.2.0.2.55.1\"  id=\"_x30_.1.0.2.55.1\">\n                        <title  id=\"0.1.0.2.55.1.0\">text:ICSP</title>\n                        <g  transform=\"matrix(1, 0, 0, 1, 194.553, 82.3349)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.55.1.1.0.0.0\"  id=\"_x30_.1.0.2.55.1.1\">\n                                        <g gorn=\"0.2.0.2.55.1.1.0.0.0.0\"  id=\"_x30_.1.0.2.55.1.1.0\">\n                                            <g  transform=\"rotate(270)\">\n                                                <g >\n                                                    <g >\n                                                        <g gorn=\"0.2.0.2.55.1.1.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.55.1.1.0.0\">\n                                                            <g gorn=\"0.2.0.2.55.1.1.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.55.1.1.0.0.0\">\n                                                                <g  transform=\"matrix(0 1 -1 0 50.2719 -135.1814)\">\n                                                                    <g >\n                                                                        <g >\n                                                                            <g gorn=\"0.2.0.2.55.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.55.1.1.0.0.0.0\">\n                                                                                <g  transform=\"matrix(1 0 0 1 6.103516e-005 0)\">\n                                                                                    <g >\n                                                                                        <g >\n                                                                                            <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.55.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.2.55.1.1.0.0.0.0.0\" font-size=\"4.176\">ICSP2</text>\n                                                                                        </g>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                    <g gorn=\"0.2.0.2.55.2\"  id=\"_x30_.1.0.2.55.2\">\n                        <title  id=\"0.1.0.2.55.2.0\">package:2X03</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.56\"  id=\"_x30_.1.0.2.56\">\n                    <title  id=\"0.1.0.2.56.0\">element:ICSP1</title>\n                    <g gorn=\"0.2.0.2.56.1\"  id=\"_x30_.1.0.2.56.1\">\n                        <title  id=\"0.1.0.2.56.1.0\">package:2X03</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.57\"  id=\"_x30_.1.0.2.57\">\n                    <title  id=\"0.1.0.2.57.0\">element:IOH</title>\n                    <g gorn=\"0.2.0.2.57.1\"  id=\"_x30_.1.0.2.57.1\">\n                        <title  id=\"0.1.0.2.57.1.0\">package:1X10@1</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.58\"  id=\"_x30_.1.0.2.58\">\n                    <title  id=\"0.1.0.2.58.0\">element:IOL</title>\n                    <g gorn=\"0.2.0.2.58.1\"  id=\"_x30_.1.0.2.58.1\">\n                        <title  id=\"0.1.0.2.58.1.0\">package:1X08</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.59\"  id=\"_x30_.1.0.2.59\">\n                    <title  id=\"0.1.0.2.59.0\">element:JP2</title>\n                    <g gorn=\"0.2.0.2.59.1\"  id=\"_x30_.1.0.2.59.1\">\n                        <title  id=\"0.1.0.2.59.1.0\">package:2X02</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.60\"  id=\"_x30_.1.0.2.60\">\n                    <title  id=\"0.1.0.2.60.0\">element:L</title>\n                    <g gorn=\"0.2.0.2.60.1\"  id=\"_x30_.1.0.2.60.1\">\n                        <title  id=\"0.1.0.2.60.1.0\">package:CHIP-LED0805</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.61\"  id=\"_x30_.1.0.2.61\">\n                    <title  id=\"0.1.0.2.61.0\">element:L1</title>\n                    <g gorn=\"0.2.0.2.61.1\"  id=\"_x30_.1.0.2.61.1\">\n                        <title  id=\"0.1.0.2.61.1.0\">package:0805</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.62\"  id=\"_x30_.1.0.2.62\">\n                    <title  id=\"0.1.0.2.62.0\">element:ON</title>\n                    <g gorn=\"0.2.0.2.62.1\"  id=\"_x30_.1.0.2.62.1\">\n                        <title  id=\"0.1.0.2.62.1.0\">text:ON</title>\n                        <g  transform=\"matrix(1 0 0 1 190.772 49.3208)\">\n                            <g >\n                                <g >\n                                    <g gorn=\"0.2.0.2.62.1.1.0.0.0\"  id=\"_x30_.1.0.2.62.1.1\">\n                                        <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.2.62.1.1.0.0.0.0\"  id=\"_x30_.1.0.2.62.1.1.0\" font-size=\"4.6771\">ON</text>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                    <g gorn=\"0.2.0.2.62.2\"  id=\"_x30_.1.0.2.62.2\">\n                        <title  id=\"0.1.0.2.62.2.0\">package:CHIP-LED0805</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.63\"  id=\"_x30_.1.0.2.63\">\n                    <title  id=\"0.1.0.2.63.0\">element:PC1</title>\n                    <g gorn=\"0.2.0.2.63.1\"  id=\"_x30_.1.0.2.63.1\">\n                        <title  id=\"0.1.0.2.63.1.0\">package:PANASONIC_D</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.64\"  id=\"_x30_.1.0.2.64\">\n                    <title  id=\"0.1.0.2.64.0\">element:PC2</title>\n                    <g gorn=\"0.2.0.2.64.1\"  id=\"_x30_.1.0.2.64.1\">\n                        <title  id=\"0.1.0.2.64.1.0\">package:PANASONIC_D</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.65\"  id=\"_x30_.1.0.2.65\">\n                    <title  id=\"0.1.0.2.65.0\">element:R1</title>\n                    <g gorn=\"0.2.0.2.65.1\"  id=\"_x30_.1.0.2.65.1\">\n                        <title  id=\"0.1.0.2.65.1.0\">package:R0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.66\"  id=\"_x30_.1.0.2.66\">\n                    <title  id=\"0.1.0.2.66.0\">element:R2</title>\n                    <g gorn=\"0.2.0.2.66.1\"  id=\"_x30_.1.0.2.66.1\">\n                        <title  id=\"0.1.0.2.66.1.0\">package:R0603-ROUND</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.67\"  id=\"_x30_.1.0.2.67\">\n                    <title  id=\"0.1.0.2.67.0\">element:RESET</title>\n                    <g gorn=\"0.2.0.2.67.1\"  id=\"_x30_.1.0.2.67.1\">\n                        <title  id=\"0.1.0.2.67.1.0\">package:TS42</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.68\"  id=\"_x30_.1.0.2.68\">\n                    <title  id=\"0.1.0.2.68.0\">element:RESET-EN</title>\n                    <g gorn=\"0.2.0.2.68.1\"  id=\"_x30_.1.0.2.68.1\">\n                        <title  id=\"0.1.0.2.68.1.0\">package:SJ</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.69\"  id=\"_x30_.1.0.2.69\">\n                    <title  id=\"0.1.0.2.69.0\">element:RN1</title>\n                    <g gorn=\"0.2.0.2.69.1\"  id=\"_x30_.1.0.2.69.1\">\n                        <title  id=\"0.1.0.2.69.1.0\">package:CAY16</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.70\"  id=\"_x30_.1.0.2.70\">\n                    <title  id=\"0.1.0.2.70.0\">element:RN2</title>\n                    <g gorn=\"0.2.0.2.70.1\"  id=\"_x30_.1.0.2.70.1\">\n                        <title  id=\"0.1.0.2.70.1.0\">package:CAY16</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.71\"  id=\"_x30_.1.0.2.71\">\n                    <title  id=\"0.1.0.2.71.0\">element:RN3</title>\n                    <g gorn=\"0.2.0.2.71.1\"  id=\"_x30_.1.0.2.71.1\">\n                        <title  id=\"0.1.0.2.71.1.0\">package:CAY16</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.72\"  id=\"_x30_.1.0.2.72\">\n                    <title  id=\"0.1.0.2.72.0\">element:RN4</title>\n                    <g gorn=\"0.2.0.2.72.1\"  id=\"_x30_.1.0.2.72.1\">\n                        <title  id=\"0.1.0.2.72.1.0\">package:CAY16</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.73\"  id=\"_x30_.1.0.2.73\">\n                    <title  id=\"0.1.0.2.73.0\">element:RX</title>\n                    <g gorn=\"0.2.0.2.73.1\"  id=\"_x30_.1.0.2.73.1\">\n                        <title  id=\"0.1.0.2.73.1.0\">package:CHIP-LED0805</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.74\"  id=\"_x30_.1.0.2.74\">\n                    <title  id=\"0.1.0.2.74.0\">element:T1</title>\n                    <g gorn=\"0.2.0.2.74.1\"  id=\"_x30_.1.0.2.74.1\">\n                        <title  id=\"0.1.0.2.74.1.0\">package:SOT-23</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.75\"  id=\"_x30_.1.0.2.75\">\n                    <title  id=\"0.1.0.2.75.0\">element:TX</title>\n                    <g gorn=\"0.2.0.2.75.1\"  id=\"_x30_.1.0.2.75.1\">\n                        <title  id=\"0.1.0.2.75.1.0\">package:CHIP-LED0805</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.76\"  id=\"_x30_.1.0.2.76\">\n                    <title  id=\"0.1.0.2.76.0\">element:U1</title>\n                    <g gorn=\"0.2.0.2.76.1\"  id=\"_x30_.1.0.2.76.1\">\n                        <title  id=\"0.1.0.2.76.1.0\">package:SOT223</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.77\"  id=\"_x30_.1.0.2.77\">\n                    <title  id=\"0.1.0.2.77.0\">element:U2</title>\n                    <g gorn=\"0.2.0.2.77.1\"  id=\"_x30_.1.0.2.77.1\">\n                        <title  id=\"0.1.0.2.77.1.0\">package:SOT23-DBV</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.78\"  id=\"_x30_.1.0.2.78\">\n                    <title  id=\"0.1.0.2.78.0\">element:U3</title>\n                    <g gorn=\"0.2.0.2.78.1\"  id=\"_x30_.1.0.2.78.1\">\n                        <title  id=\"0.1.0.2.78.1.0\">package:MLF32</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.79\"  id=\"_x30_.1.0.2.79\">\n                    <title  id=\"0.1.0.2.79.0\">element:U5</title>\n                    <g gorn=\"0.2.0.2.79.1\"  id=\"_x30_.1.0.2.79.1\">\n                        <title  id=\"0.1.0.2.79.1.0\">package:MSOP08</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.80\"  id=\"_x30_.1.0.2.80\">\n                    <title  id=\"0.1.0.2.80.0\">element:X1</title>\n                    <g gorn=\"0.2.0.2.80.1\"  id=\"_x30_.1.0.2.80.1\">\n                        <title  id=\"0.1.0.2.80.1.0\">package:POWERSUPPLY_DC-21MM</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.81\"  id=\"_x30_.1.0.2.81\">\n                    <title  id=\"0.1.0.2.81.0\">element:X2</title>\n                    <g gorn=\"0.2.0.2.81.1\"  id=\"_x30_.1.0.2.81.1\">\n                        <title  id=\"0.1.0.2.81.1.0\">package:PN61729</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.82\"  id=\"_x30_.1.0.2.82\">\n                    <title  id=\"0.1.0.2.82.0\">element:Y1</title>\n                    <g gorn=\"0.2.0.2.82.1\"  id=\"_x30_.1.0.2.82.1\">\n                        <title  id=\"0.1.0.2.82.1.0\">package:QS</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.83\"  id=\"_x30_.1.0.2.83\">\n                    <title  id=\"0.1.0.2.83.0\">element:Y2</title>\n                    <g gorn=\"0.2.0.2.83.1\"  id=\"_x30_.1.0.2.83.1\">\n                        <title  id=\"0.1.0.2.83.1.0\">package:RESONATOR</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.84\"  id=\"_x30_.1.0.2.84\">\n                    <title  id=\"0.1.0.2.84.0\">element:Z1</title>\n                    <g gorn=\"0.2.0.2.84.1\"  id=\"_x30_.1.0.2.84.1\">\n                        <title  id=\"0.1.0.2.84.1.0\">package:CT/CN0603</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.85\"  id=\"_x30_.1.0.2.85\">\n                    <title  id=\"0.1.0.2.85.0\">element:Z2</title>\n                    <g gorn=\"0.2.0.2.85.1\"  id=\"_x30_.1.0.2.85.1\">\n                        <title  id=\"0.1.0.2.85.1.0\">package:CT/CN0603</title>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.2.86\"  id=\"_x30_.1.0.2.86\">\n                    <title  id=\"0.1.0.2.86.0\">element:ZU4</title>\n                    <g gorn=\"0.2.0.2.86.1\"  id=\"_x30_.1.0.2.86.1\">\n                        <title  id=\"0.1.0.2.86.1.0\">package:DIL28-3</title>\n                    </g>\n                </g>\n            </g>\n            <rect width=\"14.173\" x=\"67.405\" y=\"45.833\" fill=\"#333333\" gorn=\"0.2.0.3\"  height=\"14.173\" id=\"_x30_.1.0.6\"/>\n            <rect width=\"105.12\" x=\"96.812\" y=\"96.84\" fill=\"#333333\" gorn=\"0.2.0.4\"  height=\"15.84\" id=\"_x30_.1.0.8\"/>\n            <circle fill=\"none\" cx=\"161.972\" gorn=\"0.2.0.5\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector0pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.6\"  id=\"_x30_.1.0.10\" d=\"M160.361,140.295h3.222v7.408h-3.222V140.295 M160.361,144c0,0.889,0.722,1.605,1.61,1.605c0.89,0,1.609-0.721,1.609-1.605l0,0c0-0.894-0.724-1.611-1.609-1.611C161.083,142.389,160.361,143.111,160.361,144z\"/>\n            <circle fill=\"none\" cx=\"169.172\" gorn=\"0.2.0.7\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector1pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.8\"  id=\"_x30_.1.0.12\" d=\"M167.561,140.295h3.221v7.408h-3.221V140.295 M167.561,144c0,0.889,0.721,1.605,1.609,1.605c0.89,0,1.608-0.721,1.608-1.605l0,0c0-0.894-0.722-1.611-1.608-1.611C168.282,142.389,167.561,143.111,167.561,144z\"/>\n            <circle fill=\"none\" cx=\"176.372\" gorn=\"0.2.0.9\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector2pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.10\"  id=\"_x30_.1.0.14\" d=\"M174.76,140.295h3.222v7.408h-3.222V140.295 M174.76,144c0,0.889,0.722,1.605,1.611,1.605c0.889,0,1.606-0.721,1.606-1.605l0,0c0-0.894-0.726-1.611-1.606-1.611C175.482,142.389,174.76,143.111,174.76,144z\"/>\n            <circle fill=\"none\" cx=\"183.573\" gorn=\"0.2.0.11\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector3pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.12\"  id=\"_x30_.1.0.16\" d=\"M181.961,140.295h3.221v7.408h-3.221V140.295 M181.961,144c0,0.889,0.721,1.605,1.605,1.605c0.895,0,1.611-0.721,1.611-1.605l0,0c0-0.894-0.725-1.611-1.611-1.611C182.682,142.389,181.961,143.111,181.961,144z\"/>\n            <circle fill=\"none\" cx=\"190.772\" gorn=\"0.2.0.13\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector4pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.14\"  id=\"_x30_.1.0.18\" d=\"M189.161,140.295h3.221v7.408h-3.221V140.295 M189.161,144c0,0.889,0.721,1.605,1.611,1.605c0.889,0,1.609-0.721,1.609-1.605l0,0c0-0.894-0.721-1.611-1.609-1.611C189.881,142.389,189.161,143.111,189.161,144z\"/>\n            <circle fill=\"none\" cx=\"197.972\" gorn=\"0.2.0.15\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector5pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.16\"  id=\"_x30_.1.0.20\" d=\"M196.361,140.295h3.222v7.408h-3.222V140.295 M196.361,144c0,0.889,0.722,1.605,1.61,1.605c0.89,0,1.609-0.721,1.609-1.605l0,0c0-0.894-0.724-1.611-1.609-1.611C197.083,142.389,196.361,143.111,196.361,144z\"/>\n            <circle fill=\"none\" cx=\"198.333\" gorn=\"0.2.0.17\"  cy=\"64.8\" stroke=\"#9A916C\" id=\"connector39pin\" r=\"1.772\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"205.532\" gorn=\"0.2.0.18\"  cy=\"64.8\" stroke=\"#9A916C\" id=\"connector40pin\" r=\"1.772\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"198.333\" gorn=\"0.2.0.19\"  cy=\"72\" stroke=\"#9A916C\" id=\"connector41pin\" r=\"1.771\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"205.532\" gorn=\"0.2.0.20\"  cy=\"72\" stroke=\"#9A916C\" id=\"connector42pin\" r=\"1.771\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"198.333\" gorn=\"0.2.0.21\"  cy=\"79.2\" stroke=\"#9A916C\" id=\"connector43pin\" r=\"1.771\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"205.532\" gorn=\"0.2.0.22\"  cy=\"79.2\" stroke=\"#9A916C\" id=\"connector44pin\" r=\"1.771\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"77.012\" gorn=\"0.2.0.23\"  cy=\"16.56\" stroke=\"#9A916C\" id=\"connector45pin\" r=\"1.771\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"77.012\" gorn=\"0.2.0.24\"  cy=\"23.76\" stroke=\"#9A916C\" id=\"connector46pin\" r=\"1.772\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"69.812\" gorn=\"0.2.0.25\"  cy=\"16.56\" stroke=\"#9A916C\" id=\"connector47pin\" r=\"1.771\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"69.812\" gorn=\"0.2.0.26\"  cy=\"23.76\" stroke=\"#9A916C\" id=\"connector48pin\" r=\"1.772\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"62.611\" gorn=\"0.2.0.27\"  cy=\"16.56\" stroke=\"#9A916C\" id=\"connector49pin\" r=\"1.771\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"62.611\" gorn=\"0.2.0.28\"  cy=\"23.76\" stroke=\"#9A916C\" id=\"connector50pin\" r=\"1.772\" stroke-width=\"0.8504\"/>\n            <circle fill=\"none\" cx=\"136.051\" gorn=\"0.2.0.29\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector51pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.30\"  id=\"_x30_.1.0.34\" d=\"M134.441,3.496h3.222v7.408h-3.222V3.496 M134.441,7.2c0,0.889,0.722,1.61,1.61,1.61c0.89,0,1.609-0.721,1.609-1.61c0-0.89-0.724-1.61-1.609-1.61C135.163,5.59,134.441,6.311,134.441,7.2z\"/>\n            <circle fill=\"none\" cx=\"128.852\" gorn=\"0.2.0.31\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector52pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.32\"  id=\"_x30_.1.0.36\" d=\"M127.241,3.496h3.221v7.408h-3.221V3.496 M127.241,7.2c0,0.889,0.721,1.61,1.611,1.61c0.889,0,1.609-0.721,1.609-1.61c0-0.89-0.721-1.61-1.609-1.61C127.961,5.59,127.241,6.311,127.241,7.2z\"/>\n            <circle fill=\"none\" cx=\"121.652\" gorn=\"0.2.0.33\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector53pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.34\"  id=\"_x30_.1.0.38\" d=\"M120.042,3.496h3.225v7.408h-3.225V3.496 M120.042,7.2c0,0.889,0.725,1.61,1.609,1.61c0.891,0,1.611-0.721,1.611-1.61c0-0.89-0.721-1.61-1.611-1.61C120.762,5.59,120.042,6.311,120.042,7.2z\"/>\n            <circle fill=\"none\" cx=\"114.452\" gorn=\"0.2.0.35\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector54pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.36\"  id=\"_x30_.1.0.40\" d=\"M112.84,3.496h3.221v7.408h-3.221V3.496 M112.84,7.2c0,0.889,0.722,1.61,1.611,1.61c0.889,0,1.605-0.721,1.605-1.61c0-0.89-0.725-1.61-1.605-1.61C113.562,5.59,112.84,6.311,112.84,7.2z\"/>\n            <circle fill=\"none\" cx=\"107.252\" gorn=\"0.2.0.37\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector55pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.38\"  id=\"_x30_.1.0.42\" d=\"M105.641,3.496h3.221v7.408h-3.221V3.496 M105.641,7.2c0,0.889,0.721,1.61,1.609,1.61c0.89,0,1.607-0.721,1.607-1.61c0-0.89-0.721-1.61-1.607-1.61C106.362,5.59,105.641,6.311,105.641,7.2z\"/>\n            <circle fill=\"none\" cx=\"100.052\" gorn=\"0.2.0.39\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector56pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.40\"  id=\"_x30_.1.0.44\" d=\"M98.441,3.496h3.221v7.408h-3.221V3.496 M98.441,7.2c0,0.889,0.721,1.61,1.61,1.61c0.889,0,1.61-0.721,1.61-1.61c0-0.89-0.721-1.61-1.61-1.61C99.162,5.59,98.441,6.311,98.441,7.2z\"/>\n            <circle fill=\"none\" cx=\"92.852\" gorn=\"0.2.0.41\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector57pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.42\"  id=\"_x30_.1.0.46\" d=\"M91.241,3.496h3.221v7.408h-3.221V3.496 M91.241,7.2c0,0.889,0.721,1.61,1.61,1.61c0.89,0,1.61-0.721,1.61-1.61c0-0.89-0.721-1.61-1.61-1.61S91.241,6.311,91.241,7.2z\"/>\n            <circle fill=\"none\" cx=\"85.652\" gorn=\"0.2.0.43\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector58pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.44\"  id=\"_x30_.1.0.48\" d=\"M84.042,3.496h3.221v7.408h-3.221V3.496 M84.042,7.2c0,0.889,0.721,1.61,1.61,1.61c0.889,0,1.61-0.721,1.61-1.61c0-0.89-0.721-1.61-1.61-1.61C84.762,5.59,84.042,6.311,84.042,7.2z\"/>\n            <circle fill=\"none\" cx=\"78.452\" gorn=\"0.2.0.45\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector59pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.46\"  id=\"_x30_.1.0.50\" d=\"M76.841,3.496h3.221v7.408h-3.221V3.496 M76.841,7.2c0,0.889,0.721,1.61,1.61,1.61c0.889,0,1.61-0.721,1.61-1.61c0-0.89-0.721-1.61-1.61-1.61C77.562,5.59,76.841,6.311,76.841,7.2z\"/>\n            <circle fill=\"none\" cx=\"71.251\" gorn=\"0.2.0.47\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector60pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.48\"  id=\"_x30_.1.0.52\" d=\"M69.641,3.496h3.221v7.408h-3.221V3.496 M69.641,7.2c0,0.889,0.721,1.61,1.61,1.61c0.89,0,1.611-0.721,1.611-1.61c0-0.89-0.721-1.61-1.611-1.61C70.362,5.59,69.641,6.311,69.641,7.2z\"/>\n            <circle fill=\"none\" cx=\"197.972\" gorn=\"0.2.0.49\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector61pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.50\"  id=\"_x30_.1.0.54\" d=\"M196.361,3.496h3.222v7.408h-3.222V3.496 M196.361,7.2c0,0.889,0.722,1.61,1.61,1.61c0.89,0,1.609-0.721,1.609-1.61c0-0.89-0.724-1.61-1.609-1.61C197.083,5.59,196.361,6.311,196.361,7.2z\"/>\n            <circle fill=\"none\" cx=\"190.772\" gorn=\"0.2.0.51\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector62pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.52\"  id=\"_x30_.1.0.56\" d=\"M189.161,3.496h3.221v7.408h-3.221V3.496 M189.161,7.2c0,0.889,0.721,1.61,1.611,1.61c0.889,0,1.609-0.721,1.609-1.61c0-0.89-0.721-1.61-1.609-1.61C189.881,5.59,189.161,6.311,189.161,7.2z\"/>\n            <circle fill=\"none\" cx=\"183.573\" gorn=\"0.2.0.53\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector63pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.54\"  id=\"_x30_.1.0.58\" d=\"M181.961,3.496h3.221v7.408h-3.221V3.496 M181.961,7.2c0,0.889,0.721,1.61,1.605,1.61c0.895,0,1.611-0.721,1.611-1.61c0-0.89-0.725-1.61-1.611-1.61C182.682,5.59,181.961,6.311,181.961,7.2z\"/>\n            <circle fill=\"none\" cx=\"176.372\" gorn=\"0.2.0.55\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector64pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.56\"  id=\"_x30_.1.0.60\" d=\"M174.76,3.496h3.222v7.408h-3.222V3.496 M174.76,7.2c0,0.889,0.722,1.61,1.611,1.61c0.889,0,1.606-0.721,1.606-1.61c0-0.89-0.726-1.61-1.606-1.61C175.482,5.59,174.76,6.311,174.76,7.2z\"/>\n            <circle fill=\"none\" cx=\"169.172\" gorn=\"0.2.0.57\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector65pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.58\"  id=\"_x30_.1.0.62\" d=\"M167.561,3.496h3.221v7.408h-3.221V3.496 M167.561,7.2c0,0.889,0.721,1.61,1.609,1.61c0.89,0,1.608-0.721,1.608-1.61c0-0.89-0.722-1.61-1.608-1.61C168.282,5.59,167.561,6.311,167.561,7.2z\"/>\n            <circle fill=\"none\" cx=\"161.972\" gorn=\"0.2.0.59\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector66pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.60\"  id=\"_x30_.1.0.64\" d=\"M160.361,3.496h3.222v7.408h-3.222V3.496 M160.361,7.2c0,0.889,0.722,1.61,1.61,1.61c0.89,0,1.609-0.721,1.609-1.61c0-0.89-0.724-1.61-1.609-1.61C161.083,5.59,160.361,6.311,160.361,7.2z\"/>\n            <circle fill=\"none\" cx=\"154.772\" gorn=\"0.2.0.61\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector67pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.62\"  id=\"_x30_.1.0.66\" d=\"M153.161,3.496h3.221v7.408h-3.221V3.496 M153.161,7.2c0,0.889,0.721,1.61,1.611,1.61c0.889,0,1.609-0.721,1.609-1.61c0-0.89-0.721-1.61-1.609-1.61C153.881,5.59,153.161,6.311,153.161,7.2z\"/>\n            <circle fill=\"none\" cx=\"147.573\" gorn=\"0.2.0.63\"  cy=\"7.2\" stroke=\"#9A916C\" id=\"connector68pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.64\"  id=\"_x30_.1.0.68\" d=\"M145.961,3.496h3.221v7.408h-3.221V3.496 M145.961,7.2c0,0.889,0.721,1.61,1.605,1.61c0.895,0,1.611-0.721,1.611-1.61c0-0.89-0.725-1.61-1.611-1.61C146.682,5.59,145.961,6.311,145.961,7.2z\"/>\n            <circle fill=\"none\" cx=\"104.372\" gorn=\"0.2.0.65\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector84pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <circle fill=\"none\" cx=\"97.172\" gorn=\"0.2.0.66\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector91pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.67\"  id=\"_x30_.1.0.71\" d=\"M102.761,140.295h3.221v7.408h-3.221V140.295 M102.761,144c0,0.889,0.721,1.605,1.61,1.605c0.89,0,1.611-0.721,1.611-1.605l0,0c0-0.894-0.721-1.611-1.611-1.611C103.482,142.389,102.761,143.111,102.761,144z\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.68\"  id=\"_x30_.1.0.72\" d=\"M95.562,140.295h3.221v7.408h-3.221V140.295 M95.562,144c0,0.889,0.721,1.605,1.61,1.605c0.89,0,1.611-0.721,1.611-1.605l0,0c0-0.894-0.721-1.611-1.611-1.611C96.282,142.389,95.562,143.111,95.562,144z\"/>\n            <circle fill=\"none\" cx=\"111.573\" gorn=\"0.2.0.69\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector85pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.70\"  id=\"_x30_.1.0.74\" d=\"M109.961,140.295h3.221v7.408h-3.221V140.295 M109.961,144c0,0.889,0.721,1.605,1.605,1.605c0.895,0,1.611-0.721,1.611-1.605l0,0c0-0.894-0.725-1.611-1.611-1.611C110.682,142.389,109.961,143.111,109.961,144z\"/>\n            <circle fill=\"none\" cx=\"118.772\" gorn=\"0.2.0.71\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector86pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.72\"  id=\"_x30_.1.0.76\" d=\"M117.161,140.295h3.221v7.408h-3.221V140.295 M117.161,144c0,0.889,0.721,1.605,1.611,1.605c0.889,0,1.609-0.721,1.609-1.605l0,0c0-0.894-0.721-1.611-1.609-1.611C117.881,142.389,117.161,143.111,117.161,144z\"/>\n            <circle fill=\"none\" cx=\"125.972\" gorn=\"0.2.0.73\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector87pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.74\"  id=\"_x30_.1.0.78\" d=\"M124.361,140.295h3.222v7.408h-3.222V140.295 M124.361,144c0,0.889,0.722,1.605,1.61,1.605c0.89,0,1.609-0.721,1.609-1.605l0,0c0-0.894-0.724-1.611-1.609-1.611C125.083,142.389,124.361,143.111,124.361,144z\"/>\n            <circle fill=\"none\" cx=\"133.172\" gorn=\"0.2.0.75\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector88pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.76\"  id=\"_x30_.1.0.80\" d=\"M131.561,140.295h3.221v7.408h-3.221V140.295 M131.561,144c0,0.889,0.721,1.605,1.609,1.605c0.89,0,1.608-0.721,1.608-1.605l0,0c0-0.894-0.722-1.611-1.608-1.611C132.282,142.389,131.561,143.111,131.561,144z\"/>\n            <circle fill=\"none\" cx=\"140.372\" gorn=\"0.2.0.77\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector89pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.78\"  id=\"_x30_.1.0.82\" d=\"M138.76,140.295h3.222v7.408h-3.222V140.295 M138.76,144c0,0.889,0.722,1.605,1.611,1.605c0.889,0,1.606-0.721,1.606-1.605l0,0c0-0.894-0.726-1.611-1.606-1.611C139.482,142.389,138.76,143.111,138.76,144z\"/>\n            <circle fill=\"none\" cx=\"147.573\" gorn=\"0.2.0.79\"  cy=\"144\" stroke=\"#9A916C\" id=\"connector90pin\" r=\"1.61\" stroke-width=\"0.8113\"/>\n            <path fill=\"#9A916C\" gorn=\"0.2.0.80\"  id=\"_x30_.1.0.84\" d=\"M145.961,140.295h3.221v7.408h-3.221V140.295 M145.961,144c0,0.889,0.721,1.605,1.605,1.605c0.895,0,1.611-0.721,1.611-1.605l0,0c0-0.894-0.725-1.611-1.611-1.611C146.682,142.389,145.961,143.111,145.961,144z\"/>\n            <line fill=\"none\" gorn=\"0.2.0.81\"  stroke=\"#FFFFFF\" id=\"_x30_.1.0.85\" stroke-linecap=\"round\" y1=\"29.16\" stroke-width=\"0.864\" x1=\"92.794\" y2=\"29.16\" x2=\"199.704\"/>\n            <line fill=\"none\" gorn=\"0.2.0.82\"  stroke=\"#FFFFFF\" id=\"_x30_.1.0.86\" stroke-linecap=\"round\" y1=\"126.206\" stroke-width=\"0.864\" x1=\"160.068\" y2=\"126.206\" x2=\"199.704\"/>\n            <g gorn=\"0.2.0.83\"  id=\"_x30_.1.0.87\">\n                <g gorn=\"0.2.0.83.0\"  id=\"_x30_.1.0.87.0\">\n                    <g  transform=\"matrix(1 0 0 1 137.9556 130.811)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.83.0.0.0.0.0\"  id=\"_x30_.1.0.87.0.0\">\n                                    <g  transform=\"matrix(1 0 0 1 0 3.051758e-005)\">\n                                        <g >\n                                            <g >\n                                                <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.83.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.87.0.0.0\" font-size=\"3.6749\">POWER</text>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n            <line fill=\"none\" gorn=\"0.2.0.84\"  stroke=\"#FFFFFF\" id=\"_x30_.1.0.88\" stroke-linecap=\"round\" y1=\"126.206\" stroke-width=\"0.864\" x1=\"115.172\" y2=\"126.206\" x2=\"151.085\"/>\n            <g gorn=\"0.2.0.85\"  id=\"_x30_.1.0.89\">\n                <g gorn=\"0.2.0.85.0\"  id=\"_x30_.1.0.89.0\">\n                    <g  transform=\"matrix(1, 0, 0, 1, 199.772, 16.2)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.85.0.0.0.0.0\"  id=\"_x30_.1.0.89.0.0\">\n                                    <g gorn=\"0.2.0.85.0.0.0.0.0.0\"  id=\"_x30_.1.0.89.0.0.0\">\n                                        <g  transform=\"rotate(270)\">\n                                            <g >\n                                                <g >\n                                                    <g gorn=\"0.2.0.85.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.89.0.0.0.0\">\n                                                        <g gorn=\"0.2.0.85.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.89.0.0.0.0.0\">\n                                                            <g  transform=\"matrix(1 0 0 1 1.5198 -0.0449)\">\n                                                                <g >\n                                                                    <g >\n                                                                        <g gorn=\"0.2.0.85.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.89.0.0.0.0.0.0\">\n                                                                            <g  transform=\"matrix(1 0 0 1 3.051758e-005 0)\">\n                                                                                <g >\n                                                                                    <g >\n                                                                                        <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.85.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.89.0.0.0.0.0.0.0\" font-size=\"3.75\">0</text>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n            <g gorn=\"0.2.0.86\"  id=\"_x30_.1.0.90\">\n                <g gorn=\"0.2.0.86.0\"  id=\"_x30_.1.0.90.0\">\n                    <g  transform=\"matrix(1, 0, 0, 1, 192.572, 16.2)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.86.0.0.0.0.0\"  id=\"_x30_.1.0.90.0.0\">\n                                    <g gorn=\"0.2.0.86.0.0.0.0.0.0\"  id=\"_x30_.1.0.90.0.0.0\">\n                                        <g  transform=\"rotate(270)\">\n                                            <g >\n                                                <g >\n                                                    <g gorn=\"0.2.0.86.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.90.0.0.0.0\">\n                                                        <g gorn=\"0.2.0.86.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.90.0.0.0.0.0\">\n                                                            <g  transform=\"matrix(1 0 0 1 1.5198 -0.0441)\">\n                                                                <g >\n                                                                    <g >\n                                                                        <g gorn=\"0.2.0.86.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.90.0.0.0.0.0.0\">\n                                                                            <g  transform=\"matrix(1 0 0 1 3.051758e-005 0)\">\n                                                                                <g >\n                                                                                    <g >\n                                                                                        <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.86.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.90.0.0.0.0.0.0.0\" font-size=\"3.75\">1</text>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n            <g gorn=\"0.2.0.87\"  id=\"_x30_.1.0.91\">\n                <g gorn=\"0.2.0.87.0\"  id=\"_x30_.1.0.91.0\">\n                    <g  transform=\"matrix(1, 0, 0, 1, 192.572, 30.96)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.87.0.0.0.0.0\"  id=\"_x30_.1.0.91.0.0\">\n                                    <g gorn=\"0.2.0.87.0.0.0.0.0.0\"  id=\"_x30_.1.0.91.0.0.0\">\n                                        <g  transform=\"rotate(270)\">\n                                            <g >\n                                                <g >\n                                                    <g gorn=\"0.2.0.87.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.91.0.0.0.0\">\n                                                        <g gorn=\"0.2.0.87.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.91.0.0.0.0.0\">\n                                                            <g  transform=\"matrix(1 0 0 1 3.524 -0.0441)\">\n                                                                <g >\n                                                                    <g >\n                                                                        <g gorn=\"0.2.0.87.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.91.0.0.0.0.0.0\">\n                                                                            <g  transform=\"matrix(1 0 0 1 -3.051758e-005 0)\">\n                                                                                <g >\n                                                                                    <g >\n                                                                                        <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.87.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.91.0.0.0.0.0.0.0\" font-size=\"3.75\">TX0</text>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n            <g gorn=\"0.2.0.88\"  id=\"_x30_.1.0.92\">\n                <g gorn=\"0.2.0.88.0\"  id=\"_x30_.1.0.92.0\">\n                    <g  transform=\"matrix(1, 0, 0, 1, 199.772, 30.96)\">\n                        <g >\n                            <g >\n                                <g gorn=\"0.2.0.88.0.0.0.0.0\"  id=\"_x30_.1.0.92.0.0\">\n                                    <g gorn=\"0.2.0.88.0.0.0.0.0.0\"  id=\"_x30_.1.0.92.0.0.0\">\n                                        <g  transform=\"rotate(270)\">\n                                            <g >\n                                                <g >\n                                                    <g gorn=\"0.2.0.88.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.92.0.0.0.0\">\n                                                        <g gorn=\"0.2.0.88.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.92.0.0.0.0.0\">\n                                                            <g  transform=\"matrix(1 0 0 1 3.524 -0.0449)\">\n                                                                <g >\n                                                                    <g >\n                                                                        <g gorn=\"0.2.0.88.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.92.0.0.0.0.0.0\">\n                                                                            <g  transform=\"matrix(1 0 0 1 -3.051758e-005 0)\">\n                                                                                <g >\n                                                                                    <g >\n                                                                                        <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.0.88.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.0.92.0.0.0.0.0.0.0\" font-size=\"3.75\">RX0</text>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n            <g gorn=\"0.2.0.89\"  id=\"_x30_.1.0.93\">\n                <path fill=\"#FFFFFF\" gorn=\"0.2.0.89.0\"  id=\"_x30_.1.0.93.0\" d=\"M192.11,18.007c-0.004,0-0.01,0-0.014,0h-1.945c-0.125,0-0.236-0.068-0.297-0.179c-0.061-0.11-0.053-0.243,0.018-0.347l0.978-1.459c0.125-0.188,0.438-0.188,0.563,0l0.93,1.394c0.066,0.062,0.113,0.152,0.113,0.253C192.448,17.856,192.297,18.007,192.11,18.007z\"/>\n            </g>\n            <g gorn=\"0.2.0.90\"  id=\"_x30_.1.0.94\">\n                <path fill=\"#FFFFFF\" gorn=\"0.2.0.90.0\"  id=\"_x30_.1.0.94.0\" d=\"M197.409,15.88c0.006,0,0.01,0,0.016,0h1.939c0.125,0,0.238,0.068,0.301,0.178c0.063,0.111,0.053,0.244-0.02,0.348l-0.973,1.459c-0.125,0.188-0.438,0.188-0.563,0l-0.93-1.396c-0.07-0.063-0.113-0.151-0.113-0.252C197.07,16.032,197.222,15.88,197.409,15.88z\"/>\n            </g>\n            <g gorn=\"0.2.0.91\"  id=\"_x30_.1.0.95\">\n                <path fill=\"#FFFFFF\" gorn=\"0.2.0.91.0\"  id=\"_x30_.1.0.95.0\" d=\"M179.901,26.121c-0.021-0.549,0.273-0.829,0.653-0.829c0.229,0,0.405,0.071,0.774,0.247c0.276,0.132,0.479,0.23,0.687,0.23c0.198,0,0.291-0.159,0.297-0.461h0.329c0.027,0.615-0.291,0.829-0.631,0.829c-0.221,0-0.418-0.066-0.797-0.242c-0.258-0.126-0.461-0.242-0.659-0.242s-0.318,0.138-0.329,0.467L179.901,26.121L179.901,26.121z\"/>\n            </g>\n            <g gorn=\"0.2.0.92\"  id=\"_x30_.1.0.96\">\n                <g gorn=\"0.2.0.92.0\"  id=\"_x30_.1.0.96.0\">\n                    <g gorn=\"0.2.0.92.0.0\"  id=\"_x30_.1.0.96.0.0\">\n                        <path fill=\"#FFFFFF\" gorn=\"0.2.0.92.0.0.0\"  id=\"_x30_.1.0.96.0.0.0\" d=\"M125.862,37.068c0.848-0.93,1.498-1.778,2.281-2.478c2.966-2.656,6.307-3.641,10.131-2.03c3.618,1.524,5.575,5.294,4.788,9.14c-0.726,3.549-4.138,6.252-7.864,6.379c-3.453,0.117-6.047-1.427-8.21-3.934c-0.331-0.385-0.646-0.786-1.063-1.297c-0.299,0.351-0.533,0.618-0.758,0.899c-2.313,2.913-5.187,4.567-9.047,4.32c-3.785-0.243-7.248-3.72-7.48-7.501c-0.301-4.792,3.354-8.726,8.432-8.769c3.362-0.029,5.991,1.707,8.042,4.321C125.336,36.405,125.563,36.69,125.862,37.068z\"/>\n                        <path fill=\"#0F7391\" gorn=\"0.2.0.92.0.0.1\"  id=\"_x30_.1.0.96.0.0.1\" d=\"M117.56,34.457c-3.496-0.006-6.05,2.237-6.332,5.133c-0.251,2.569,1.789,5.137,4.597,5.746c2.766,0.6,4.977-0.55,6.643-2.557c2.558-3.073,2.466-2.542,0.031-5.591C121.145,35.492,119.297,34.542,117.56,34.457z\"/>\n                        <path fill=\"#0F7391\" gorn=\"0.2.0.92.0.0.2\"  id=\"_x30_.1.0.96.0.0.2\" d=\"M134.883,34.434c-0.428,0.03-0.74,0.019-1.041,0.079c-2.965,0.599-4.824,2.568-6.221,5.082c-0.109,0.198-0.113,0.564-0.004,0.757c1.262,2.183,2.838,4.053,5.348,4.841c2.433,0.763,4.563,0.132,6.24-1.735c1.504-1.675,1.846-3.656,0.852-5.72C139.002,35.555,137.124,34.592,134.883,34.434z\"/>\n                    </g>\n                    <g gorn=\"0.2.0.92.0.1\"  id=\"_x30_.1.0.96.0.1\">\n                        <path fill=\"#FFFFFF\" gorn=\"0.2.0.92.0.1.0\"  id=\"_x30_.1.0.96.0.1.0\" d=\"M120.061,40.583c0,0.078-0.063,0.142-0.143,0.142h-5.168c-0.078,0-0.145-0.064-0.145-0.142v-1.561c0-0.078,0.063-0.142,0.145-0.142h5.168c0.078,0,0.143,0.064,0.143,0.142V40.583z\"/>\n                    </g>\n                    <g gorn=\"0.2.0.92.0.2\"  id=\"_x30_.1.0.96.0.2\">\n                        <path fill=\"#FFFFFF\" gorn=\"0.2.0.92.0.2.0\"  id=\"_x30_.1.0.96.0.2.0\" d=\"M137.129,39.024c0-0.078-0.063-0.142-0.144-0.142h-1.521c-0.077,0-0.144-0.064-0.144-0.142v-1.521c0-0.078-0.063-0.142-0.142-0.142h-1.563c-0.078,0-0.143,0.064-0.143,0.142v1.521c0,0.078-0.063,0.142-0.143,0.142h-1.521c-0.078,0-0.145,0.064-0.145,0.142v1.561c0,0.078,0.063,0.142,0.145,0.142h1.521c0.078,0,0.143,0.064,0.143,0.142v1.52c0,0.078,0.063,0.142,0.143,0.142h1.563c0.076,0,0.142-0.064,0.142-0.142v-1.52c0-0.078,0.063-0.142,0.144-0.142h1.521c0.078,0,0.144-0.064,0.144-0.142V39.024z\"/>\n                    </g>\n                    <g gorn=\"0.2.0.92.0.3\"  id=\"_x30_.1.0.96.0.3\">\n                        <circle fill=\"#FFFFFF\" cx=\"172.388\" gorn=\"0.2.0.92.0.3.0\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.0\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"170.971\" gorn=\"0.2.0.92.0.3.1\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.1\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"169.554\" gorn=\"0.2.0.92.0.3.2\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.2\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"168.137\" gorn=\"0.2.0.92.0.3.3\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.3\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"166.72\" gorn=\"0.2.0.92.0.3.4\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.4\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"165.303\" gorn=\"0.2.0.92.0.3.5\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.5\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"163.886\" gorn=\"0.2.0.92.0.3.6\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.6\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"162.469\" gorn=\"0.2.0.92.0.3.7\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.7\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"161.051\" gorn=\"0.2.0.92.0.3.8\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.8\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"159.635\" gorn=\"0.2.0.92.0.3.9\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.9\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"158.217\" gorn=\"0.2.0.92.0.3.10\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.10\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"156.801\" gorn=\"0.2.0.92.0.3.11\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.11\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"155.383\" gorn=\"0.2.0.92.0.3.12\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.12\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"153.967\" gorn=\"0.2.0.92.0.3.13\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.3.13\" r=\"0.568\"/>\n                    </g>\n                    <g gorn=\"0.2.0.92.0.4\"  id=\"_x30_.1.0.96.0.4\">\n                        <circle fill=\"#FFFFFF\" cx=\"172.445\" gorn=\"0.2.0.92.0.4.0\"  cy=\"47.404\" id=\"_x30_.1.0.96.0.4.0\" r=\"0.567\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"173.793\" gorn=\"0.2.0.92.0.4.1\"  cy=\"47.137\" id=\"_x30_.1.0.96.0.4.1\" r=\"0.567\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"175.071\" gorn=\"0.2.0.92.0.4.2\"  cy=\"46.628\" id=\"_x30_.1.0.96.0.4.2\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"176.233\" gorn=\"0.2.0.92.0.4.3\"  cy=\"45.894\" id=\"_x30_.1.0.96.0.4.3\" r=\"0.567\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"177.241\" gorn=\"0.2.0.92.0.4.4\"  cy=\"44.959\" id=\"_x30_.1.0.96.0.4.4\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"178.061\" gorn=\"0.2.0.92.0.4.5\"  cy=\"43.855\" id=\"_x30_.1.0.96.0.4.5\" r=\"0.567\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"178.665\" gorn=\"0.2.0.92.0.4.6\"  cy=\"42.62\" id=\"_x30_.1.0.96.0.4.6\" r=\"0.567\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"179.032\" gorn=\"0.2.0.92.0.4.7\"  cy=\"41.295\" id=\"_x30_.1.0.96.0.4.7\" r=\"0.567\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"179.151\" gorn=\"0.2.0.92.0.4.8\"  cy=\"39.925\" id=\"_x30_.1.0.96.0.4.8\" r=\"0.567\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"179.017\" gorn=\"0.2.0.92.0.4.9\"  cy=\"38.557\" id=\"_x30_.1.0.96.0.4.9\" r=\"0.567\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"178.633\" gorn=\"0.2.0.92.0.4.10\"  cy=\"37.236\" id=\"_x30_.1.0.96.0.4.10\" r=\"0.567\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"178.017\" gorn=\"0.2.0.92.0.4.11\"  cy=\"36.008\" id=\"_x30_.1.0.96.0.4.11\" r=\"0.567\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"177.185\" gorn=\"0.2.0.92.0.4.12\"  cy=\"34.914\" id=\"_x30_.1.0.96.0.4.12\" r=\"0.567\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"176.167\" gorn=\"0.2.0.92.0.4.13\"  cy=\"33.99\" id=\"_x30_.1.0.96.0.4.13\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"174.997\" gorn=\"0.2.0.92.0.4.14\"  cy=\"33.269\" id=\"_x30_.1.0.96.0.4.14\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"173.713\" gorn=\"0.2.0.92.0.4.15\"  cy=\"32.774\" id=\"_x30_.1.0.96.0.4.15\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"172.361\" gorn=\"0.2.0.92.0.4.16\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.4.16\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"170.986\" gorn=\"0.2.0.92.0.4.17\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.4.17\" r=\"0.568\"/>\n                    </g>\n                    <g gorn=\"0.2.0.92.0.5\"  id=\"_x30_.1.0.96.0.5\">\n                        <circle fill=\"#FFFFFF\" cx=\"152.413\" gorn=\"0.2.0.92.0.5.0\"  cy=\"47.309\" id=\"_x30_.1.0.96.0.5.0\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"151.083\" gorn=\"0.2.0.92.0.5.1\"  cy=\"47.026\" id=\"_x30_.1.0.96.0.5.1\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"149.825\" gorn=\"0.2.0.92.0.5.2\"  cy=\"46.506\" id=\"_x30_.1.0.96.0.5.2\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"148.684\" gorn=\"0.2.0.92.0.5.3\"  cy=\"45.765\" id=\"_x30_.1.0.96.0.5.3\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"147.697\" gorn=\"0.2.0.92.0.5.4\"  cy=\"44.828\" id=\"_x30_.1.0.96.0.5.4\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"146.897\" gorn=\"0.2.0.92.0.5.5\"  cy=\"43.727\" id=\"_x30_.1.0.96.0.5.5\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"146.312\" gorn=\"0.2.0.92.0.5.6\"  cy=\"42.499\" id=\"_x30_.1.0.96.0.5.6\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"145.96\" gorn=\"0.2.0.92.0.5.7\"  cy=\"41.185\" id=\"_x30_.1.0.96.0.5.7\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"145.853\" gorn=\"0.2.0.92.0.5.8\"  cy=\"39.829\" id=\"_x30_.1.0.96.0.5.8\" r=\"0.568\"/>\n                        <path fill=\"#FFFFFF\" gorn=\"0.2.0.92.0.5.9\"  id=\"_x30_.1.0.96.0.5.9\" d=\"M146.054,37.911c0.31,0.033,0.538,0.313,0.505,0.623c-0.033,0.313-0.313,0.54-0.624,0.507c-0.312-0.033-0.537-0.313-0.505-0.627C145.463,38.104,145.743,37.877,146.054,37.911z\"/>\n                        <path fill=\"#FFFFFF\" gorn=\"0.2.0.92.0.5.10\"  id=\"_x30_.1.0.96.0.5.10\" d=\"M146.543,36.626c0.299,0.089,0.472,0.406,0.383,0.705c-0.09,0.302-0.405,0.474-0.706,0.385c-0.3-0.089-0.472-0.406-0.382-0.708C145.926,36.709,146.243,36.537,146.543,36.626z\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"146.999\" gorn=\"0.2.0.92.0.5.11\"  cy=\"35.959\" id=\"_x30_.1.0.96.0.5.11\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"147.827\" gorn=\"0.2.0.92.0.5.12\"  cy=\"34.879\" id=\"_x30_.1.0.96.0.5.12\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"148.836\" gorn=\"0.2.0.92.0.5.13\"  cy=\"33.969\" id=\"_x30_.1.0.96.0.5.13\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"149.999\" gorn=\"0.2.0.92.0.5.14\"  cy=\"33.258\" id=\"_x30_.1.0.96.0.5.14\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"151.268\" gorn=\"0.2.0.92.0.5.15\"  cy=\"32.77\" id=\"_x30_.1.0.96.0.5.15\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"152.606\" gorn=\"0.2.0.92.0.5.16\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.5.16\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"153.967\" gorn=\"0.2.0.92.0.5.17\"  cy=\"32.522\" id=\"_x30_.1.0.96.0.5.17\" r=\"0.568\"/>\n                    </g>\n                    <g gorn=\"0.2.0.92.0.6\"  id=\"_x30_.1.0.96.0.6\">\n                        <circle fill=\"#FFFFFF\" cx=\"172.388\" gorn=\"0.2.0.92.0.6.0\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.0\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"170.971\" gorn=\"0.2.0.92.0.6.1\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.1\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"169.554\" gorn=\"0.2.0.92.0.6.2\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.2\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"168.137\" gorn=\"0.2.0.92.0.6.3\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.3\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"166.72\" gorn=\"0.2.0.92.0.6.4\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.4\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"165.303\" gorn=\"0.2.0.92.0.6.5\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.5\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"163.886\" gorn=\"0.2.0.92.0.6.6\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.6\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"162.469\" gorn=\"0.2.0.92.0.6.7\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.7\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"161.051\" gorn=\"0.2.0.92.0.6.8\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.8\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"159.635\" gorn=\"0.2.0.92.0.6.9\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.9\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"158.217\" gorn=\"0.2.0.92.0.6.10\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.10\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"156.801\" gorn=\"0.2.0.92.0.6.11\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.11\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"155.383\" gorn=\"0.2.0.92.0.6.12\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.12\" r=\"0.568\"/>\n                        <circle fill=\"#FFFFFF\" cx=\"153.967\" gorn=\"0.2.0.92.0.6.13\"  cy=\"47.454\" id=\"_x30_.1.0.96.0.6.13\" r=\"0.568\"/>\n                    </g>\n                </g>\n                <g gorn=\"0.2.0.92.1\"  id=\"_x30_.1.0.96.1\">\n                    <path fill=\"#FFFFFF\" gorn=\"0.2.0.92.1.0\"  id=\"_x30_.1.0.96.1.0\" d=\"M154.165,44.561c-0.994,0-1.742-0.206-2.244-0.618c-0.485-0.401-0.799-0.879-0.936-1.434c-0.07-0.28-0.119-0.58-0.15-0.899c-0.027-0.319-0.045-0.661-0.045-1.025v-5.236h0.939v5.22c0,1.183,0.189,2.117,0.572,2.498c0.377,0.375,0.932,0.563,1.664,0.563c0.738,0,1.494-0.188,1.871-0.563c0.381-0.38,0.572-1.314,0.572-2.498v-5.22h0.959v5.236c0,1.088-0.125,1.896-0.377,2.424C156.491,44.044,155.67,44.561,154.165,44.561z\"/>\n                    <path fill=\"#FFFFFF\" gorn=\"0.2.0.92.1.1\"  id=\"_x30_.1.0.96.1.1\" d=\"M166.251,44.39h-0.944l-4.742-7.433v7.446h-0.797v-9.054h0.88l4.659,7.455v-7.455h0.944V44.39z\"/>\n                    <path fill=\"#FFFFFF\" gorn=\"0.2.0.92.1.2\"  id=\"_x30_.1.0.96.1.2\" d=\"M171.911,35.131c0.576,0,1.107,0.115,1.594,0.346c0.488,0.231,0.906,0.555,1.256,0.975c0.354,0.42,0.623,0.926,0.818,1.517c0.196,0.59,0.295,1.247,0.295,1.968c0,0.72-0.099,1.376-0.295,1.966c-0.195,0.592-0.468,1.099-0.818,1.521c-0.35,0.422-0.77,0.749-1.256,0.979c-0.483,0.23-1.018,0.345-1.594,0.345c-0.58,0-1.113-0.115-1.602-0.345c-0.484-0.231-0.904-0.557-1.258-0.979c-0.354-0.422-0.629-0.93-0.823-1.521c-0.194-0.589-0.294-1.246-0.294-1.966c0-0.721,0.1-1.377,0.294-1.968c0.194-0.591,0.47-1.097,0.823-1.517c0.353-0.42,0.773-0.745,1.258-0.975C170.795,35.247,171.331,35.131,171.911,35.131z M171.905,43.692c0.41,0,0.789-0.085,1.135-0.256s0.646-0.418,0.896-0.74c0.251-0.323,0.447-0.716,0.588-1.179c0.141-0.464,0.211-0.991,0.211-1.581c0-0.591-0.07-1.118-0.211-1.582c-0.141-0.463-0.335-0.856-0.585-1.179c-0.248-0.322-0.545-0.568-0.888-0.736c-0.346-0.167-0.719-0.252-1.125-0.252c-0.412,0-0.793,0.084-1.141,0.252c-0.352,0.168-0.65,0.412-0.904,0.732s-0.451,0.713-0.596,1.178c-0.144,0.467-0.216,0.995-0.216,1.586c0,0.59,0.07,1.117,0.214,1.581c0.141,0.463,0.336,0.856,0.588,1.179c0.25,0.322,0.551,0.569,0.896,0.74C171.113,43.606,171.493,43.692,171.905,43.692z\"/>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 157.652, 140.628)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.1.0.0.0\"  id=\"_x30_.1.1\">\n                        <g gorn=\"0.2.1.0.0.0.0\"  id=\"_x31_x06\">\n                            <rect width=\"43.199\" x=\"0.722\" y=\"-0.228\" fill=\"#404040\" gorn=\"0.2.1.0.0.0.0.0\"  height=\"7.199\" id=\"_x30_.1.1.0.0\"/>\n                            <rect width=\"2.781\" x=\"2.931\" y=\"1.981\" gorn=\"0.2.1.0.0.0.0.1\"  height=\"2.783\" id=\"_x30_.1.1.0.1\"/>\n                            <polygon fill=\"#2A2A29\" points=\"1.905,0.956 2.929,1.981 5.714,1.981 6.737,0.956 \" gorn=\"0.2.1.0.0.0.0.2\"  id=\"_x30_.1.1.0.2\"/>\n                            <polygon fill=\"#474747\" points=\"6.737,0.956 5.714,1.985 5.714,4.766 6.737,5.789 \" gorn=\"0.2.1.0.0.0.0.3\"  id=\"_x30_.1.1.0.3\"/>\n                            <polygon fill=\"#595959\" points=\"6.737,5.789 5.712,4.766 2.929,4.766 1.905,5.789 \" gorn=\"0.2.1.0.0.0.0.4\"  id=\"_x30_.1.1.0.4\"/>\n                            <polygon fill=\"#373737\" points=\"1.903,5.789 2.929,4.764 2.929,1.981 1.903,0.956 \" gorn=\"0.2.1.0.0.0.0.5\"  id=\"_x30_.1.1.0.5\"/>\n                            <rect width=\"2.781\" x=\"10.132\" y=\"1.981\" gorn=\"0.2.1.0.0.0.0.6\"  height=\"2.783\" id=\"_x30_.1.1.0.6\"/>\n                            <polygon fill=\"#2A2A29\" points=\"9.104,0.956 10.13,1.981 12.911,1.981 13.936,0.956 \" gorn=\"0.2.1.0.0.0.0.7\"  id=\"_x30_.1.1.0.7\"/>\n                            <polygon fill=\"#474747\" points=\"13.936,0.956 12.911,1.985 12.911,4.766 13.936,5.789 \" gorn=\"0.2.1.0.0.0.0.8\"  id=\"_x30_.1.1.0.8\"/>\n                            <polygon fill=\"#595959\" points=\"13.936,5.789 12.911,4.766 10.13,4.766 9.104,5.789 \" gorn=\"0.2.1.0.0.0.0.9\"  id=\"_x30_.1.1.0.9\"/>\n                            <polygon fill=\"#373737\" points=\"9.102,5.789 10.13,4.764 10.13,1.981 9.102,0.956 \" gorn=\"0.2.1.0.0.0.0.10\"  id=\"_x30_.1.1.0.10\"/>\n                            <rect width=\"2.781\" x=\"17.331\" y=\"1.981\" gorn=\"0.2.1.0.0.0.0.11\"  height=\"2.783\" id=\"_x30_.1.1.0.11\"/>\n                            <polygon fill=\"#2A2A29\" points=\"16.306,0.956 17.329,1.981 20.112,1.981 21.138,0.956 \" gorn=\"0.2.1.0.0.0.0.12\"  id=\"_x30_.1.1.0.12\"/>\n                            <polygon fill=\"#474747\" points=\"21.138,0.956 20.112,1.985 20.112,4.766 21.138,5.789 \" gorn=\"0.2.1.0.0.0.0.13\"  id=\"_x30_.1.1.0.13\"/>\n                            <polygon fill=\"#595959\" points=\"21.138,5.789 20.112,4.766 17.329,4.766 16.306,5.789 \" gorn=\"0.2.1.0.0.0.0.14\"  id=\"_x30_.1.1.0.14\"/>\n                            <polygon fill=\"#373737\" points=\"16.304,5.789 17.329,4.764 17.329,1.981 16.304,0.956 \" gorn=\"0.2.1.0.0.0.0.15\"  id=\"_x30_.1.1.0.15\"/>\n                            <rect width=\"2.781\" x=\"24.532\" y=\"1.981\" gorn=\"0.2.1.0.0.0.0.16\"  height=\"2.783\" id=\"_x30_.1.1.0.16\"/>\n                            <polygon fill=\"#2A2A29\" points=\"23.507,0.956 24.53,1.981 27.313,1.981 28.339,0.956 \" gorn=\"0.2.1.0.0.0.0.17\"  id=\"_x30_.1.1.0.17\"/>\n                            <polygon fill=\"#474747\" points=\"28.339,0.956 27.313,1.985 27.313,4.766 28.339,5.789 \" gorn=\"0.2.1.0.0.0.0.18\"  id=\"_x30_.1.1.0.18\"/>\n                            <polygon fill=\"#595959\" points=\"28.337,5.789 27.311,4.766 24.53,4.766 23.507,5.789 \" gorn=\"0.2.1.0.0.0.0.19\"  id=\"_x30_.1.1.0.19\"/>\n                            <polygon fill=\"#373737\" points=\"23.503,5.789 24.53,4.764 24.53,1.981 23.503,0.956 \" gorn=\"0.2.1.0.0.0.0.20\"  id=\"_x30_.1.1.0.20\"/>\n                            <rect width=\"2.779\" x=\"31.731\" y=\"1.981\" gorn=\"0.2.1.0.0.0.0.21\"  height=\"2.783\" id=\"_x30_.1.1.0.21\"/>\n                            <polygon fill=\"#2A2A29\" points=\"30.706,0.956 31.729,1.981 34.513,1.981 35.538,0.956 \" gorn=\"0.2.1.0.0.0.0.22\"  id=\"_x30_.1.1.0.22\"/>\n                            <polygon fill=\"#474747\" points=\"35.538,0.956 34.513,1.985 34.513,4.766 35.538,5.789 \" gorn=\"0.2.1.0.0.0.0.23\"  id=\"_x30_.1.1.0.23\"/>\n                            <polygon fill=\"#595959\" points=\"35.536,5.789 34.513,4.766 31.729,4.766 30.706,5.789 \" gorn=\"0.2.1.0.0.0.0.24\"  id=\"_x30_.1.1.0.24\"/>\n                            <polygon fill=\"#373737\" points=\"30.704,5.789 31.729,4.764 31.729,1.981 30.704,0.956 \" gorn=\"0.2.1.0.0.0.0.25\"  id=\"_x30_.1.1.0.25\"/>\n                            <rect width=\"2.781\" x=\"38.931\" y=\"1.981\" gorn=\"0.2.1.0.0.0.0.26\"  height=\"2.783\" id=\"_x30_.1.1.0.26\"/>\n                            <polygon fill=\"#2A2A29\" points=\"37.905,0.956 38.929,1.981 41.714,1.981 42.737,0.956 \" gorn=\"0.2.1.0.0.0.0.27\"  id=\"_x30_.1.1.0.27\"/>\n                            <polygon fill=\"#474747\" points=\"42.737,0.956 41.714,1.985 41.714,4.766 42.737,5.789 \" gorn=\"0.2.1.0.0.0.0.28\"  id=\"_x30_.1.1.0.28\"/>\n                            <polygon fill=\"#595959\" points=\"42.737,5.789 41.712,4.766 38.929,4.766 37.905,5.789 \" gorn=\"0.2.1.0.0.0.0.29\"  id=\"_x30_.1.1.0.29\"/>\n                            <polygon fill=\"#373737\" points=\"37.903,5.789 38.929,4.764 38.929,1.981 37.903,0.956 \" gorn=\"0.2.1.0.0.0.0.30\"  id=\"_x30_.1.1.0.30\"/>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 191.155, 64.2515)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.2.0.0.0\"  id=\"_x30_.1.2\">\n                        <g gorn=\"0.2.2.0.0.0.0\"  id=\"_x32_x03\">\n                            <g  transform=\"matrix(0, -1, 1, 0, 3.52001, 17.793)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.2.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.2.0.0\">\n                                            <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.2.0.0.0\">\n                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.2.0.0.0.0\">\n                                                    <polygon fill=\"#404040\" points=\"20.748,12.861 20.748,8.927 20.748,5.587 20.748,1.654 19.236,0.143 15.306,0.143 13.796,1.654 13.796,5.587 13.796,8.927 13.796,12.861 15.306,14.372 19.236,14.372 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.0\"/>\n                                                    <polygon fill=\"#404040\" points=\"13.566,12.861 13.566,8.927 13.566,5.587 13.566,1.654 12.057,0.143 8.125,0.143 6.611,1.654 6.611,5.587 6.611,8.927 6.611,12.861 8.125,14.372 12.057,14.372 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.1\"  id=\"_x30_.1.2.0.0.0.0.1\"/>\n                                                    <polygon fill=\"#404040\" points=\"6.389,12.861 6.389,8.927 6.389,5.587 6.389,1.654 4.877,0.143 0.942,0.143 -0.565,1.654 -0.565,5.587 -0.565,8.927 -0.565,12.861 0.942,14.372 4.877,14.372 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.2\"  id=\"_x30_.1.2.0.0.0.0.2\"/>\n                                                    <polygon fill=\"#404040\" points=\"20.748,12.861 20.748,8.927 20.748,5.587 20.748,1.654 19.236,0.143 15.306,0.143 13.796,1.654 13.796,5.587 13.796,8.927 13.796,12.861 15.306,14.372 19.236,14.372 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.3\"  id=\"_x30_.1.2.0.0.0.0.3\"/>\n                                                    <polygon fill=\"#404040\" points=\"13.566,12.861 13.566,8.927 13.566,5.587 13.566,1.654 12.057,0.143 8.125,0.143 6.611,1.654 6.611,5.587 6.611,8.927 6.611,12.861 8.125,14.372 12.057,14.372 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.4\"  id=\"_x30_.1.2.0.0.0.0.4\"/>\n                                                    <polygon fill=\"#404040\" points=\"6.389,12.861 6.389,8.927 6.389,5.587 6.389,1.654 4.877,0.143 0.942,0.143 -0.565,1.654 -0.565,5.587 -0.565,8.927 -0.565,12.861 0.942,14.372 4.877,14.372 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.5\"  id=\"_x30_.1.2.0.0.0.0.5\"/>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -0.656 6.746)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.6.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.6\">\n                                                                    <rect width=\"2.298\" x=\"1.898\" y=\"2.555\" fill=\"#8D8C8C\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.6.0.0.0.0\"  height=\"2.299\" id=\"_x30_.1.2.0.0.0.0.6.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -7.8547 13.9447)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.7.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.7\">\n                                                                    <rect width=\"2.297\" x=\"1.9\" y=\"9.754\" fill=\"#8D8C8C\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.7.0.0.0.0\"  height=\"2.299\" id=\"_x30_.1.2.0.0.0.0.7.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 6.5428 13.9447)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.8.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.8\">\n                                                                    <rect width=\"2.299\" x=\"9.097\" y=\"2.556\" fill=\"#8D8C8C\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.8.0.0.0.0\"  height=\"2.298\" id=\"_x30_.1.2.0.0.0.0.8.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -0.6552 21.1442)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.9.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.9\">\n                                                                    <rect width=\"2.297\" x=\"9.098\" y=\"9.755\" fill=\"#8D8C8C\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.9.0.0.0.0\"  height=\"2.298\" id=\"_x30_.1.2.0.0.0.0.9.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 13.7415 21.1424)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.10.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.10\">\n                                                                    <rect width=\"2.297\" x=\"16.297\" y=\"2.556\" fill=\"#8D8C8C\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.10.0.0.0.0\"  height=\"2.298\" id=\"_x30_.1.2.0.0.0.0.10.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 6.5423 28.3417)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.11.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.11\">\n                                                                    <rect width=\"2.297\" x=\"16.297\" y=\"9.755\" fill=\"#8D8455\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.11.0.0.0.0\"  height=\"2.298\" id=\"_x30_.1.2.0.0.0.0.11.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 6.5401 28.3434)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.12.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.12\">\n                                                                    <rect width=\"1.185\" x=\"16.852\" y=\"10.314\" fill=\"#8C8663\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.12.0.0.0.0\"  height=\"1.183\" id=\"_x30_.1.2.0.0.0.0.12.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <polygon fill=\"#B8AF82\" points=\"18.594,9.748 18.035,10.306 18.035,11.486 18.594,12.046 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.13\"  id=\"_x30_.1.2.0.0.0.0.13\"/>\n                                                    <polygon fill=\"#80795B\" points=\"16.855,11.486 18.035,11.486 18.594,12.046 16.297,12.046 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.14\"  id=\"_x30_.1.2.0.0.0.0.14\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"16.855,10.306 16.855,11.486 16.297,12.046 16.297,9.748 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.15\"  id=\"_x30_.1.2.0.0.0.0.15\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"18.594,9.748 18.035,10.306 16.855,10.306 16.297,9.748 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.16\"  id=\"_x30_.1.2.0.0.0.0.16\"/>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 13.7423 21.1432)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.17.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.17\">\n                                                                    <rect width=\"1.185\" x=\"16.853\" y=\"3.113\" fill=\"#8C8663\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.17.0.0.0.0\"  height=\"1.183\" id=\"_x30_.1.2.0.0.0.0.17.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <polygon fill=\"#B8AF82\" points=\"18.594,2.55 18.035,3.107 18.035,4.287 18.594,4.845 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.18\"  id=\"_x30_.1.2.0.0.0.0.18\"/>\n                                                    <polygon fill=\"#80795B\" points=\"16.855,4.287 18.035,4.287 18.594,4.845 16.297,4.845 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.19\"  id=\"_x30_.1.2.0.0.0.0.19\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"16.855,3.107 16.855,4.287 16.297,4.845 16.297,2.55 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.20\"  id=\"_x30_.1.2.0.0.0.0.20\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"18.594,2.55 18.035,3.107 16.855,3.107 16.297,2.55 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.21\"  id=\"_x30_.1.2.0.0.0.0.21\"/>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -0.6572 21.1461)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.22.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.22\">\n                                                                    <rect width=\"1.185\" x=\"9.656\" y=\"10.314\" fill=\"#8C8663\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.22.0.0.0.0\"  height=\"1.184\" id=\"_x30_.1.2.0.0.0.0.22.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <polygon fill=\"#B8AF82\" points=\"11.396,9.748 10.839,10.306 10.839,11.486 11.396,12.046 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.23\"  id=\"_x30_.1.2.0.0.0.0.23\"/>\n                                                    <polygon fill=\"#80795B\" points=\"9.655,11.486 10.839,11.486 11.396,12.046 9.099,12.046 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.24\"  id=\"_x30_.1.2.0.0.0.0.24\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"9.655,10.306 9.655,11.486 9.099,12.046 9.099,9.748 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.25\"  id=\"_x30_.1.2.0.0.0.0.25\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"11.396,9.748 10.839,10.306 9.655,10.306 9.099,9.748 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.26\"  id=\"_x30_.1.2.0.0.0.0.26\"/>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 6.543 13.9439)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.27.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.27\">\n                                                                    <rect width=\"1.185\" x=\"9.655\" y=\"3.112\" fill=\"#8C8663\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.27.0.0.0.0\"  height=\"1.184\" id=\"_x30_.1.2.0.0.0.0.27.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <polygon fill=\"#B8AF82\" points=\"11.396,2.55 10.839,3.107 10.839,4.287 11.396,4.845 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.28\"  id=\"_x30_.1.2.0.0.0.0.28\"/>\n                                                    <polygon fill=\"#80795B\" points=\"9.655,4.287 10.839,4.287 11.396,4.845 9.099,4.845 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.29\"  id=\"_x30_.1.2.0.0.0.0.29\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"9.655,3.107 9.655,4.287 9.099,4.845 9.099,2.55 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.30\"  id=\"_x30_.1.2.0.0.0.0.30\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"11.396,2.55 10.839,3.107 9.655,3.107 9.099,2.55 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.31\"  id=\"_x30_.1.2.0.0.0.0.31\"/>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -7.8591 13.9442)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.32.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.32\">\n                                                                    <rect width=\"1.184\" x=\"2.454\" y=\"10.313\" fill=\"#8C8663\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.32.0.0.0.0\"  height=\"1.185\" id=\"_x30_.1.2.0.0.0.0.32.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <polygon fill=\"#B8AF82\" points=\"4.196,9.748 3.639,10.306 3.639,11.486 4.196,12.046 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.33\"  id=\"_x30_.1.2.0.0.0.0.33\"/>\n                                                    <polygon fill=\"#80795B\" points=\"2.454,11.486 3.639,11.486 4.196,12.046 1.899,12.046 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.34\"  id=\"_x30_.1.2.0.0.0.0.34\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"2.454,10.306 2.454,11.486 1.899,12.046 1.899,9.748 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.35\"  id=\"_x30_.1.2.0.0.0.0.35\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"4.196,9.748 3.639,10.306 2.454,10.306 1.899,9.748 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.36\"  id=\"_x30_.1.2.0.0.0.0.36\"/>\n                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -0.6574 6.7435)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.37.0.0.0\"  id=\"_x30_.1.2.0.0.0.0.37\">\n                                                                    <rect width=\"1.184\" x=\"2.455\" y=\"3.111\" fill=\"#8C8663\" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.37.0.0.0.0\"  height=\"1.187\" id=\"_x30_.1.2.0.0.0.0.37.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <polygon fill=\"#B8AF82\" points=\"4.196,2.55 3.639,3.107 3.639,4.287 4.196,4.846 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.38\"  id=\"_x30_.1.2.0.0.0.0.38\"/>\n                                                    <polygon fill=\"#80795B\" points=\"2.454,4.287 3.639,4.287 4.196,4.846 1.899,4.846 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.39\"  id=\"_x30_.1.2.0.0.0.0.39\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"2.454,3.107 2.454,4.287 1.899,4.846 1.899,2.55 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.40\"  id=\"_x30_.1.2.0.0.0.0.40\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"4.196,2.55 3.639,3.107 2.454,3.107 1.899,2.55 \" gorn=\"0.2.2.0.0.0.0.0.0.0.0.0.0.41\"  id=\"_x30_.1.2.0.0.0.0.41\"/>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 59.7671, 12.9035)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.3.0.0.0\"  id=\"_x30_.1.3\">\n                        <g gorn=\"0.2.3.0.0.0.0\"  id=\"_x32_x03_1_\">\n                            <g  transform=\"matrix(-1, 0, 0, -1, 21.313, 14.273)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.3.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.3.0.0\">\n                                            <g gorn=\"0.2.3.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.3.0.0.0\">\n                                                <g gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.3.0.0.0.0\">\n                                                    <polygon fill=\"#404040\" points=\"21.925,12.619 21.925,8.687 21.925,5.347 21.925,1.413 20.414,-0.098 16.483,-0.098 14.973,1.413 14.973,5.347 14.973,8.687 14.973,12.619 16.483,14.131 20.414,14.131 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.3.0.0.0.0.0\"/>\n                                                    <polygon fill=\"#404040\" points=\"14.743,12.619 14.743,8.687 14.743,5.347 14.743,1.413 13.234,-0.098 9.302,-0.098 7.789,1.413 7.789,5.347 7.789,8.687 7.789,12.619 9.302,14.131 13.234,14.131 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.1\"  id=\"_x30_.1.3.0.0.0.0.1\"/>\n                                                    <polygon fill=\"#404040\" points=\"7.566,12.619 7.566,8.687 7.566,5.347 7.566,1.413 6.054,-0.098 2.121,-0.098 0.612,1.413 0.612,5.347 0.612,8.687 0.612,12.619 2.121,14.131 6.054,14.131 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.2\"  id=\"_x30_.1.3.0.0.0.0.2\"/>\n                                                    <polygon fill=\"#404040\" points=\"21.925,12.619 21.925,8.687 21.925,5.347 21.925,1.413 20.414,-0.098 16.483,-0.098 14.973,1.413 14.973,5.347 14.973,8.687 14.973,12.619 16.483,14.131 20.414,14.131 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.3\"  id=\"_x30_.1.3.0.0.0.0.3\"/>\n                                                    <polygon fill=\"#404040\" points=\"14.743,12.619 14.743,8.687 14.743,5.347 14.743,1.413 13.234,-0.098 9.302,-0.098 7.789,1.413 7.789,5.347 7.789,8.687 7.789,12.619 9.302,14.131 13.234,14.131 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.4\"  id=\"_x30_.1.3.0.0.0.0.4\"/>\n                                                    <polygon fill=\"#404040\" points=\"7.566,12.619 7.566,8.687 7.566,5.347 7.566,1.413 6.054,-0.098 2.121,-0.098 0.612,1.413 0.612,5.347 0.612,8.687 0.612,12.619 2.121,14.131 6.054,14.131 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.5\"  id=\"_x30_.1.3.0.0.0.0.5\"/>\n                                                    <rect width=\"2.299\" x=\"3.073\" y=\"2.311\" fill=\"#8D8C8C\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.6\"  height=\"2.298\" id=\"_x30_.1.3.0.0.0.0.6\"/>\n                                                    <rect width=\"2.299\" x=\"3.073\" y=\"9.51\" fill=\"#8D8C8C\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.7\"  height=\"2.298\" id=\"_x30_.1.3.0.0.0.0.7\"/>\n                                                    <rect width=\"2.298\" x=\"10.272\" y=\"2.311\" fill=\"#8D8C8C\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.8\"  height=\"2.298\" id=\"_x30_.1.3.0.0.0.0.8\"/>\n                                                    <rect width=\"2.298\" x=\"10.272\" y=\"9.51\" fill=\"#8D8C8C\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.9\"  height=\"2.298\" id=\"_x30_.1.3.0.0.0.0.9\"/>\n                                                    <rect width=\"2.298\" x=\"17.47\" y=\"2.311\" fill=\"#8D8C8C\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.10\"  height=\"2.298\" id=\"_x30_.1.3.0.0.0.0.10\"/>\n                                                    <rect width=\"2.298\" x=\"17.47\" y=\"9.51\" fill=\"#8D8455\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.11\"  height=\"2.298\" id=\"_x30_.1.3.0.0.0.0.11\"/>\n                                                    <rect width=\"1.183\" x=\"18.028\" y=\"10.069\" fill=\"#8C8663\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.12\"  height=\"1.184\" id=\"_x30_.1.3.0.0.0.0.12\"/>\n                                                    <polygon fill=\"#B8AF82\" points=\"19.769,9.51 19.209,10.069 19.209,11.25 19.769,11.808 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.13\"  id=\"_x30_.1.3.0.0.0.0.13\"/>\n                                                    <polygon fill=\"#80795B\" points=\"18.028,11.25 19.209,11.25 19.769,11.808 17.47,11.808 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.14\"  id=\"_x30_.1.3.0.0.0.0.14\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"18.028,10.069 18.028,11.25 17.47,11.808 17.47,9.51 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.15\"  id=\"_x30_.1.3.0.0.0.0.15\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"19.769,9.51 19.209,10.069 18.028,10.069 17.47,9.51 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.16\"  id=\"_x30_.1.3.0.0.0.0.16\"/>\n                                                    <rect width=\"1.183\" x=\"18.028\" y=\"2.869\" fill=\"#8C8663\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.17\"  height=\"1.182\" id=\"_x30_.1.3.0.0.0.0.17\"/>\n                                                    <polygon fill=\"#B8AF82\" points=\"19.769,2.311 19.209,2.869 19.209,4.05 19.769,4.608 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.18\"  id=\"_x30_.1.3.0.0.0.0.18\"/>\n                                                    <polygon fill=\"#80795B\" points=\"18.028,4.05 19.209,4.05 19.769,4.608 17.47,4.608 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.19\"  id=\"_x30_.1.3.0.0.0.0.19\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"18.028,2.869 18.028,4.05 17.47,4.608 17.47,2.311 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.20\"  id=\"_x30_.1.3.0.0.0.0.20\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"19.769,2.311 19.209,2.869 18.028,2.869 17.47,2.311 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.21\"  id=\"_x30_.1.3.0.0.0.0.21\"/>\n                                                    <rect width=\"1.184\" x=\"10.829\" y=\"10.069\" fill=\"#8C8663\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.22\"  height=\"1.184\" id=\"_x30_.1.3.0.0.0.0.22\"/>\n                                                    <polygon fill=\"#B8AF82\" points=\"12.569,9.51 12.012,10.069 12.012,11.25 12.569,11.808 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.23\"  id=\"_x30_.1.3.0.0.0.0.23\"/>\n                                                    <polygon fill=\"#80795B\" points=\"10.829,11.25 12.012,11.25 12.569,11.808 10.272,11.808 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.24\"  id=\"_x30_.1.3.0.0.0.0.24\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"10.829,10.069 10.829,11.25 10.272,11.808 10.272,9.51 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.25\"  id=\"_x30_.1.3.0.0.0.0.25\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"12.569,9.51 12.012,10.069 10.829,10.069 10.272,9.51 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.26\"  id=\"_x30_.1.3.0.0.0.0.26\"/>\n                                                    <rect width=\"1.184\" x=\"10.829\" y=\"2.869\" fill=\"#8C8663\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.27\"  height=\"1.182\" id=\"_x30_.1.3.0.0.0.0.27\"/>\n                                                    <polygon fill=\"#B8AF82\" points=\"12.569,2.311 12.012,2.869 12.012,4.05 12.569,4.608 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.28\"  id=\"_x30_.1.3.0.0.0.0.28\"/>\n                                                    <polygon fill=\"#80795B\" points=\"10.829,4.05 12.012,4.05 12.569,4.608 10.272,4.608 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.29\"  id=\"_x30_.1.3.0.0.0.0.29\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"10.829,2.869 10.829,4.05 10.272,4.608 10.272,2.311 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.30\"  id=\"_x30_.1.3.0.0.0.0.30\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"12.569,2.311 12.012,2.869 10.829,2.869 10.272,2.311 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.31\"  id=\"_x30_.1.3.0.0.0.0.31\"/>\n                                                    <rect width=\"1.185\" x=\"3.628\" y=\"10.069\" fill=\"#8C8663\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.32\"  height=\"1.184\" id=\"_x30_.1.3.0.0.0.0.32\"/>\n                                                    <polygon fill=\"#B8AF82\" points=\"5.371,9.51 4.813,10.069 4.813,11.25 5.371,11.808 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.33\"  id=\"_x30_.1.3.0.0.0.0.33\"/>\n                                                    <polygon fill=\"#80795B\" points=\"3.628,11.25 4.813,11.25 5.371,11.808 3.073,11.808 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.34\"  id=\"_x30_.1.3.0.0.0.0.34\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"3.628,10.069 3.628,11.25 3.073,11.808 3.073,9.51 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.35\"  id=\"_x30_.1.3.0.0.0.0.35\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"5.371,9.51 4.813,10.069 3.628,10.069 3.073,9.51 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.36\"  id=\"_x30_.1.3.0.0.0.0.36\"/>\n                                                    <rect width=\"1.185\" x=\"3.628\" y=\"2.869\" fill=\"#8C8663\" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.37\"  height=\"1.182\" id=\"_x30_.1.3.0.0.0.0.37\"/>\n                                                    <polygon fill=\"#B8AF82\" points=\"5.371,2.311 4.813,2.869 4.813,4.05 5.371,4.608 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.38\"  id=\"_x30_.1.3.0.0.0.0.38\"/>\n                                                    <polygon fill=\"#80795B\" points=\"3.628,4.05 4.813,4.05 5.371,4.608 3.073,4.608 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.39\"  id=\"_x30_.1.3.0.0.0.0.39\"/>\n                                                    <polygon fill=\"#5E5B43\" points=\"3.628,2.869 3.628,4.05 3.073,4.608 3.073,2.311 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.40\"  id=\"_x30_.1.3.0.0.0.0.40\"/>\n                                                    <polygon fill=\"#9A916C\" points=\"5.371,2.311 4.813,2.869 3.628,2.869 3.073,2.311 \" gorn=\"0.2.3.0.0.0.0.0.0.0.0.0.0.41\"  id=\"_x30_.1.3.0.0.0.0.41\"/>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 144.692, 3.372)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.4.0.0.0\"  id=\"_x30_.1.4\">\n                        <g gorn=\"0.2.4.0.0.0.0\"  id=\"_x31_x08\">\n                            <g  transform=\"matrix(-1, 0, 0, -1, 57.6, 7.2)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.4.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.4.0.0\">\n                                            <g gorn=\"0.2.4.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.4.0.0.0\">\n                                                <rect width=\"57.6\" x=\"0.72\" y=\"-0.228\" fill=\"#404040\" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.0\"  height=\"7.199\" id=\"_x30_.1.4.0.0.0.0\"/>\n                                                <rect width=\"2.78\" x=\"53.331\" y=\"1.98\" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.1\"  height=\"2.782\" id=\"_x30_.1.4.0.0.0.1\"/>\n                                                <polygon fill=\"#2A2A29\" points=\"57.135,5.787 56.113,4.762 53.331,4.762 52.303,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.2\"  id=\"_x30_.1.4.0.0.0.2\"/>\n                                                <polygon fill=\"#474747\" points=\"52.303,5.787 53.331,4.759 53.331,1.978 52.303,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.3\"  id=\"_x30_.1.4.0.0.0.3\"/>\n                                                <polygon fill=\"#595959\" points=\"52.304,0.955 53.331,1.978 56.113,1.978 57.135,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.4\"  id=\"_x30_.1.4.0.0.0.4\"/>\n                                                <polygon fill=\"#373737\" points=\"57.137,0.955 56.113,1.98 56.113,4.762 57.137,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.5\"  id=\"_x30_.1.4.0.0.0.5\"/>\n                                                <rect width=\"2.779\" x=\"46.13\" y=\"1.98\" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.6\"  height=\"2.782\" id=\"_x30_.1.4.0.0.0.6\"/>\n                                                <polygon fill=\"#2A2A29\" points=\"49.937,5.787 48.913,4.762 46.128,4.762 45.103,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.7\"  id=\"_x30_.1.4.0.0.0.7\"/>\n                                                <polygon fill=\"#474747\" points=\"45.103,5.787 46.128,4.759 46.128,1.978 45.103,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.8\"  id=\"_x30_.1.4.0.0.0.8\"/>\n                                                <polygon fill=\"#595959\" points=\"45.105,0.955 46.13,1.978 48.913,1.978 49.937,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.9\"  id=\"_x30_.1.4.0.0.0.9\"/>\n                                                <polygon fill=\"#373737\" points=\"49.939,0.955 48.913,1.98 48.913,4.762 49.939,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.10\"  id=\"_x30_.1.4.0.0.0.10\"/>\n                                                <rect width=\"2.781\" x=\"38.928\" y=\"1.98\" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.11\"  height=\"2.782\" id=\"_x30_.1.4.0.0.0.11\"/>\n                                                <polygon fill=\"#2A2A29\" points=\"42.736,5.787 41.712,4.762 38.928,4.762 37.904,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.12\"  id=\"_x30_.1.4.0.0.0.12\"/>\n                                                <polygon fill=\"#474747\" points=\"37.904,5.787 38.928,4.759 38.928,1.978 37.904,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.13\"  id=\"_x30_.1.4.0.0.0.13\"/>\n                                                <polygon fill=\"#595959\" points=\"37.907,0.955 38.929,1.978 41.712,1.978 42.736,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.14\"  id=\"_x30_.1.4.0.0.0.14\"/>\n                                                <polygon fill=\"#373737\" points=\"42.738,0.955 41.712,1.98 41.712,4.762 42.738,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.15\"  id=\"_x30_.1.4.0.0.0.15\"/>\n                                                <rect width=\"2.78\" x=\"31.728\" y=\"1.98\" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.16\"  height=\"2.782\" id=\"_x30_.1.4.0.0.0.16\"/>\n                                                <polygon fill=\"#2A2A29\" points=\"35.538,5.787 34.51,4.762 31.728,4.762 30.706,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.17\"  id=\"_x30_.1.4.0.0.0.17\"/>\n                                                <polygon fill=\"#474747\" points=\"30.706,5.787 31.728,4.759 31.728,1.978 30.706,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.18\"  id=\"_x30_.1.4.0.0.0.18\"/>\n                                                <polygon fill=\"#595959\" points=\"30.706,0.955 31.73,1.978 34.51,1.978 35.538,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.19\"  id=\"_x30_.1.4.0.0.0.19\"/>\n                                                <polygon fill=\"#373737\" points=\"35.54,0.955 34.51,1.98 34.51,4.762 35.54,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.20\"  id=\"_x30_.1.4.0.0.0.20\"/>\n                                                <rect width=\"2.781\" x=\"24.529\" y=\"1.98\" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.21\"  height=\"2.782\" id=\"_x30_.1.4.0.0.0.21\"/>\n                                                <polygon fill=\"#2A2A29\" points=\"28.335,5.787 27.312,4.762 24.529,4.762 23.503,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.22\"  id=\"_x30_.1.4.0.0.0.22\"/>\n                                                <polygon fill=\"#474747\" points=\"23.503,5.787 24.529,4.759 24.529,1.978 23.503,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.23\"  id=\"_x30_.1.4.0.0.0.23\"/>\n                                                <polygon fill=\"#595959\" points=\"23.505,0.955 24.532,1.978 27.312,1.978 28.335,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.24\"  id=\"_x30_.1.4.0.0.0.24\"/>\n                                                <polygon fill=\"#373737\" points=\"28.337,0.955 27.312,1.98 27.312,4.762 28.337,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.25\"  id=\"_x30_.1.4.0.0.0.25\"/>\n                                                <rect width=\"2.78\" x=\"17.331\" y=\"1.98\" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.26\"  height=\"2.782\" id=\"_x30_.1.4.0.0.0.26\"/>\n                                                <polygon fill=\"#2A2A29\" points=\"21.135,5.787 20.113,4.762 17.331,4.762 16.303,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.27\"  id=\"_x30_.1.4.0.0.0.27\"/>\n                                                <polygon fill=\"#474747\" points=\"16.303,5.787 17.331,4.759 17.331,1.978 16.303,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.28\"  id=\"_x30_.1.4.0.0.0.28\"/>\n                                                <polygon fill=\"#595959\" points=\"16.304,0.955 17.331,1.978 20.113,1.978 21.135,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.29\"  id=\"_x30_.1.4.0.0.0.29\"/>\n                                                <polygon fill=\"#373737\" points=\"21.137,0.955 20.113,1.98 20.113,4.762 21.137,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.30\"  id=\"_x30_.1.4.0.0.0.30\"/>\n                                                <rect width=\"2.779\" x=\"10.13\" y=\"1.98\" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.31\"  height=\"2.782\" id=\"_x30_.1.4.0.0.0.31\"/>\n                                                <polygon fill=\"#2A2A29\" points=\"13.937,5.787 12.913,4.762 10.128,4.762 9.103,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.32\"  id=\"_x30_.1.4.0.0.0.32\"/>\n                                                <polygon fill=\"#474747\" points=\"9.103,5.787 10.128,4.759 10.128,1.978 9.103,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.33\"  id=\"_x30_.1.4.0.0.0.33\"/>\n                                                <polygon fill=\"#595959\" points=\"9.105,0.955 10.13,1.978 12.913,1.978 13.937,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.34\"  id=\"_x30_.1.4.0.0.0.34\"/>\n                                                <polygon fill=\"#373737\" points=\"13.939,0.955 12.913,1.98 12.913,4.762 13.939,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.35\"  id=\"_x30_.1.4.0.0.0.35\"/>\n                                                <rect width=\"2.781\" x=\"2.928\" y=\"1.98\" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.36\"  height=\"2.782\" id=\"_x30_.1.4.0.0.0.36\"/>\n                                                <polygon fill=\"#2A2A29\" points=\"6.736,5.787 5.712,4.762 2.928,4.762 1.904,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.37\"  id=\"_x30_.1.4.0.0.0.37\"/>\n                                                <polygon fill=\"#474747\" points=\"1.904,5.787 2.928,4.759 2.928,1.978 1.904,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.38\"  id=\"_x30_.1.4.0.0.0.38\"/>\n                                                <polygon fill=\"#595959\" points=\"1.907,0.955 2.929,1.978 5.712,1.978 6.736,0.955 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.39\"  id=\"_x30_.1.4.0.0.0.39\"/>\n                                                <polygon fill=\"#373737\" points=\"6.738,0.955 5.712,1.98 5.712,4.762 6.738,5.787 \" gorn=\"0.2.4.0.0.0.0.0.0.0.0.0.40\"  id=\"_x30_.1.4.0.0.0.40\"/>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 101.471, 28.0955)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.5.0.0.0\"  id=\"_x30_.1.5\">\n                        <g gorn=\"0.2.5.0.0.0.0\"  id=\"chip-led0805\">\n                            <g  transform=\"matrix(0, -1, 1, 0, -1.77951, 5.62951)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.5.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.5.0.0\">\n                                            <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.5.0.0.0\">\n                                                <g  transform=\"matrix(1, 0, 0, 1, 21.5539, 31.3385)\">\n                                                    <g >\n                                                        <g >\n                                                            <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.5.0.0.0.0\">\n                                                                <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"led-0603_1_\">\n                                                                    <line fill=\"none\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.5.0.0.0.0.0.0\" y1=\"-37.873\" x1=\"-23.902\" y2=\"-30.637\" x2=\"-23.902\"/>\n                                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 12.2098 -56.1861)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.0.0.0\"  id=\"_x30_.1.5.0.0.0.0.0.1\">\n                                                                                    <rect width=\"7.348\" x=\"-25.658\" y=\"-36.111\" fill=\"#F2F2F2\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.0.0.0.0\"  height=\"3.833\" id=\"_x30_.1.5.0.0.0.0.0.1.0\"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path fill=\"#22B573\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.2\"  fill-opacity=\"0.7\" id=\"_x30_.1.5.0.0.0.0.0.2\" d=\"M-23.902-33.129c0,0,0.467,0.645,0.426,0.867c-0.041,0.219,0.148,0.541,0,0.676l-0.424-0.018L-23.902-33.129z\"/>\n                                                                    <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3\"  id=\"_x30_.1.5.0.0.0.0.0.3\">\n                                                                        <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 12.3107 -56.2284)\">\n                                                                            <g >\n                                                                                <g >\n                                                                                    <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.0.0.0.0\"  id=\"_x30_.1.5.0.0.0.0.0.3.0\">\n                                                                                        <rect width=\"0.854\" x=\"-22.382\" y=\"-34.748\" fill=\"#FFFFFF\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.0.0.0.0.0\"  height=\"0.961\" id=\"_x30_.1.5.0.0.0.0.0.3.0.0\"/>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                        <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 11.8297 -56.7093)\">\n                                                                            <g >\n                                                                                <g >\n                                                                                    <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.1.0.0.0\"  id=\"_x30_.1.5.0.0.0.0.0.3.1\">\n                                                                                        <rect width=\"0.854\" x=\"-22.863\" y=\"-34.29\" fill=\"#B3B3B3\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.1.0.0.0.0\"  height=\"0.049\" id=\"_x30_.1.5.0.0.0.0.0.3.1.0\"/>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4\"  id=\"_x30_.1.5.0.0.0.0.0.4\">\n                                                                        <polygon fill=\"#D1C690\" points=\"-23.476,-32.549 -23.582,-31.585 -22.849,-31.585 -22.954,-32.549 \" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.0\"  id=\"_x30_.1.5.0.0.0.0.0.4.0\"/>\n                                                                        <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.1\"  id=\"_x30_.1.5.0.0.0.0.0.4.1\">\n                                                                            <path fill=\"#D1C690\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.1.0\"  id=\"_x30_.1.5.0.0.0.0.0.4.1.0\" d=\"M-23.279-32.488c0-0.002,0-0.004,0-0.008c0.035-0.266,0.104-0.447,0.162-0.598c0.08-0.209,0.782-0.559,0.696-0.828c-0.012-0.027,0.011-0.06,0.043-0.066c0.035-0.008,0.068,0.01,0.078,0.039c0.095,0.305-0.617,0.674-0.701,0.893c-0.06,0.148-0.123,0.318-0.155,0.572c-0.004,0.029-0.033,0.055-0.068,0.049C-23.254-32.436-23.279-32.46-23.279-32.488z\"/>\n                                                                        </g>\n                                                                        <polygon fill=\"#D1C690\" points=\"-20.59,-35.969 -20.487,-36.933 -21.217,-36.933 -21.114,-35.969 \" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.2\"  id=\"_x30_.1.5.0.0.0.0.0.4.2\"/>\n                                                                        <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.3\"  id=\"_x30_.1.5.0.0.0.0.0.4.3\">\n                                                                            <path fill=\"#D1C690\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.3.0\"  id=\"_x30_.1.5.0.0.0.0.0.4.3.0\" d=\"M-22.111-34.316c0-0.025,0.02-0.049,0.047-0.055c0.292-0.063,1.152-1.088,1.152-1.885c0-0.033,0.026-0.057,0.063-0.057c0.034,0.002,0.063,0.025,0.063,0.057v0.002c0,0.749-0.77,1.891-1.245,1.993c-0.035,0.008-0.068-0.012-0.078-0.041C-22.111-34.304-22.111-34.309-22.111-34.316z\"/>\n                                                                        </g>\n                                                                        <path fill=\"#D1C690\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.4\"  id=\"_x30_.1.5.0.0.0.0.0.4.4\" d=\"M-22.127-33.845c0,0,0.002-0.356-0.311-0.383c0,0.07,0,0.383,0,0.383H-22.127z\"/>\n                                                                        <path fill=\"#D1C690\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.5\"  id=\"_x30_.1.5.0.0.0.0.0.4.5\" d=\"M-21.806-34.281c0,0-0.306,0.158-0.351,0.053c-0.048-0.107-0.052-0.178,0.028-0.24C-22.047-34.529-21.806-34.281-21.806-34.281z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.6\"  id=\"_x30_.1.5.0.0.0.0.0.4.6\" d=\"M-22.474-33.922c0.084,0.27-0.618,0.619-0.698,0.828c-0.06,0.145-0.127,0.33-0.162,0.598h0.059c0.035-0.266,0.104-0.447,0.162-0.598c0.08-0.209,0.782-0.559,0.696-0.828H-22.474z\"/>\n                                                                        <polygon fill=\"#9D956C\" points=\"-21.169,-35.969 -21.272,-36.933 -21.217,-36.933 -21.114,-35.969 \" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.7\"  id=\"_x30_.1.5.0.0.0.0.0.4.7\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.8\"  id=\"_x30_.1.5.0.0.0.0.0.4.8\" d=\"M-22.119-34.371c0.291-0.062,1.212-1.07,1.149-1.885h0.06c0.06,0.877-0.86,1.826-1.152,1.887L-22.119-34.371z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.9\"  id=\"_x30_.1.5.0.0.0.0.0.4.9\" d=\"M-22.492-34.227c0,0.07,0,0.381,0,0.381h0.057c0,0,0-0.311,0-0.381H-22.492z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.10\"  id=\"_x30_.1.5.0.0.0.0.0.4.10\" d=\"M-22.181-34.469c-0.08,0.063-0.076,0.131-0.031,0.238l0.06,0.002c-0.049-0.107-0.052-0.179,0.028-0.24H-22.181L-22.181-34.469z\"/>\n                                                                    </g>\n                                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 14.1869 -54.3814)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.5.0.0.0\"  id=\"_x30_.1.5.0.0.0.0.0.5\">\n                                                                                    <rect width=\"4.223\" x=\"-22.205\" opacity=\"0.5\" y=\"-34.308\" fill=\"#FFFFFF\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.5.0.0.0.0\"  height=\"0.051\" id=\"_x30_.1.5.0.0.0.0.0.5.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path opacity=\"0.5\" fill=\"#F2F2F2\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.6\"  id=\"_x30_.1.5.0.0.0.0.0.6\" enable-background=\"new    \" d=\"M-20.069-36.916H-23.9l0,5.317l3.831,0.004L-20.069-36.916z\"/>\n                                                                    <path opacity=\"0.55\" fill=\"#FFFFFF\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.7\"  id=\"_x30_.1.5.0.0.0.0.0.7\" enable-background=\"new    \" d=\"M-20.719-36.866h0.271c0.151,0.018,0.271-0.012,0.271,0.098c0,0.611,0,4.703,0,4.854c0,0.168-0.065,0.176-0.065-0.012c0-0.131,0-3.893,0-4.346c0-0.457-0.105-0.518-0.197-0.518l-0.272,0.002C-20.893-36.788-20.893-36.866-20.719-36.866z\"/>\n                                                                    <path opacity=\"0.03\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8\"  id=\"_x30_.1.5.0.0.0.0.0.8\" enable-background=\"new    \" d=\"M-23.678-31.74c-0.068,0-0.138,0.012-0.138-0.098c0-0.611,0-4.667,0-4.817c0-0.168,0.065-0.176,0.065,0.008c0,0.135,0.002,3.138,0.002,3.589C-23.75-32.463-23.678-31.74-23.678-31.74z\"/>\n                                                                    <path fill=\"#D1C690\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.9\"  id=\"_x30_.1.5.0.0.0.0.0.9\" d=\"M-23.902-37.874v0.771h0.521c0.125,0,0.213,0.08,0.268,0.188h3.047v-1.01h-3.784h-0.05\"/>\n                                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 17.3219 -57.5155)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.10.0.0.0\"  id=\"_x30_.1.5.0.0.0.0.0.10\">\n                                                                                    <rect width=\"1.006\" x=\"-20.596\" opacity=\"0.5\" y=\"-37.443\" fill=\"#FFFFFF\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.10.0.0.0.0\"  height=\"0.052\" id=\"_x30_.1.5.0.0.0.0.0.10.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path fill=\"#D1C690\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.11\"  id=\"_x30_.1.5.0.0.0.0.0.11\" d=\"M-23.902-30.529h0.049h3.784V-31.6h-3.464c-0.056,0.104-0.146,0.191-0.271,0.191h-0.1v0.829\"/>\n                                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 10.966 -51.159)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.12.0.0.0\"  id=\"_x30_.1.5.0.0.0.0.0.12\">\n                                                                                    <rect width=\"1.072\" x=\"-20.628\" opacity=\"0.5\" y=\"-31.084\" fill=\"#FFFFFF\" gorn=\"0.2.5.0.0.0.0.0.0.0.0.0.0.0.0.0.0.12.0.0.0.0\"  height=\"0.052\" id=\"_x30_.1.5.0.0.0.0.0.12.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 186.214, 43.9355)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.6.0.0.0\"  id=\"_x30_.1.6\">\n                        <g gorn=\"0.2.6.0.0.0.0\"  id=\"chip-led0805_1_\">\n                            <g  transform=\"matrix(0, -1, 1, 0, -1.77951, 5.62951)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.6.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.6.0.0\">\n                                            <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.6.0.0.0\">\n                                                <g  transform=\"matrix(1, 0, 0, 1, 21.5539, 31.3385)\">\n                                                    <g >\n                                                        <g >\n                                                            <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.6.0.0.0.0\">\n                                                                <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"led-0603_2_\">\n                                                                    <line fill=\"none\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.6.0.0.0.0.0.0\" y1=\"-33.306\" x1=\"-21.535\" y2=\"-26.07\" x2=\"-21.535\"/>\n                                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 10.012 -49.2526)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.0.0.0\"  id=\"_x30_.1.6.0.0.0.0.0.1\">\n                                                                                    <rect width=\"7.349\" x=\"-23.291\" y=\"-31.546\" fill=\"#F2F2F2\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.0.0.0.0\"  height=\"3.833\" id=\"_x30_.1.6.0.0.0.0.0.1.0\"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path fill=\"#22B573\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.2\"  fill-opacity=\"0.7\" id=\"_x30_.1.6.0.0.0.0.0.2\" d=\"M-21.533-28.561c0,0,0.467,0.646,0.426,0.865c-0.041,0.219,0.148,0.541,0,0.678l-0.424-0.021L-21.533-28.561z\"/>\n                                                                    <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3\"  id=\"_x30_.1.6.0.0.0.0.0.3\">\n                                                                        <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 10.1107 -49.2956)\">\n                                                                            <g >\n                                                                                <g >\n                                                                                    <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.0.0.0.0\"  id=\"_x30_.1.6.0.0.0.0.0.3.0\">\n                                                                                        <rect width=\"0.854\" x=\"-20.017\" y=\"-30.18\" fill=\"#FFFFFF\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.0.0.0.0.0\"  height=\"0.961\" id=\"_x30_.1.6.0.0.0.0.0.3.0.0\"/>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                        <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 9.6297 -49.7766)\">\n                                                                            <g >\n                                                                                <g >\n                                                                                    <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.1.0.0.0\"  id=\"_x30_.1.6.0.0.0.0.0.3.1\">\n                                                                                        <rect width=\"0.854\" x=\"-20.497\" y=\"-29.724\" fill=\"#B3B3B3\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.1.0.0.0.0\"  height=\"0.049\" id=\"_x30_.1.6.0.0.0.0.0.3.1.0\"/>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4\"  id=\"_x30_.1.6.0.0.0.0.0.4\">\n                                                                        <polygon fill=\"#D1C690\" points=\"-21.109,-27.981 -21.213,-27.018 -20.482,-27.018 -20.586,-27.981 \" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.0\"  id=\"_x30_.1.6.0.0.0.0.0.4.0\"/>\n                                                                        <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.1\"  id=\"_x30_.1.6.0.0.0.0.0.4.1\">\n                                                                            <path fill=\"#D1C690\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.1.0\"  id=\"_x30_.1.6.0.0.0.0.0.4.1.0\" d=\"M-20.91-27.919c0-0.002,0-0.004,0-0.008c0.035-0.269,0.104-0.447,0.162-0.601c0.08-0.209,0.782-0.561,0.696-0.826c-0.012-0.026,0.011-0.063,0.043-0.065c0.035-0.008,0.068,0.011,0.078,0.039c0.095,0.306-0.617,0.674-0.701,0.894c-0.06,0.147-0.123,0.317-0.155,0.571c-0.004,0.029-0.033,0.056-0.068,0.05C-20.885-27.871-20.91-27.893-20.91-27.919z\"/>\n                                                                        </g>\n                                                                        <polygon fill=\"#D1C690\" points=\"-18.221,-31.401 -18.118,-32.368 -18.848,-32.368 -18.745,-31.401 \" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.2\"  id=\"_x30_.1.6.0.0.0.0.0.4.2\"/>\n                                                                        <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.3\"  id=\"_x30_.1.6.0.0.0.0.0.4.3\">\n                                                                            <path fill=\"#D1C690\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.3.0\"  id=\"_x30_.1.6.0.0.0.0.0.4.3.0\" d=\"M-19.742-29.749c0-0.025,0.021-0.049,0.047-0.055c0.292-0.063,1.152-1.088,1.152-1.885c0-0.033,0.026-0.062,0.063-0.062c0.034,0.002,0.063,0.022,0.063,0.062v0.002c0,0.748-0.77,1.891-1.245,1.992c-0.035,0.008-0.068-0.016-0.078-0.041C-19.742-29.739-19.742-29.743-19.742-29.749z\"/>\n                                                                        </g>\n                                                                        <path fill=\"#D1C690\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.4\"  id=\"_x30_.1.6.0.0.0.0.0.4.4\" d=\"M-19.758-29.278c0,0,0.002-0.354-0.311-0.383c0,0.068,0,0.383,0,0.383H-19.758z\"/>\n                                                                        <path fill=\"#D1C690\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.5\"  id=\"_x30_.1.6.0.0.0.0.0.4.5\" d=\"M-19.439-29.712c0,0-0.306,0.157-0.351,0.054c-0.048-0.107-0.052-0.179,0.028-0.24C-19.678-29.96-19.439-29.712-19.439-29.712z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.6\"  id=\"_x30_.1.6.0.0.0.0.0.4.6\" d=\"M-20.107-29.354c0.084,0.271-0.618,0.617-0.698,0.826c-0.06,0.146-0.127,0.33-0.162,0.601h0.059c0.035-0.269,0.104-0.447,0.162-0.601c0.08-0.209,0.782-0.561,0.696-0.826H-20.107z\"/>\n                                                                        <polygon fill=\"#9D956C\" points=\"-18.8,-31.401 -18.903,-32.368 -18.848,-32.368 -18.745,-31.401 \" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.7\"  id=\"_x30_.1.6.0.0.0.0.0.4.7\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.8\"  id=\"_x30_.1.6.0.0.0.0.0.4.8\" d=\"M-19.752-29.805c0.291-0.063,1.212-1.069,1.149-1.885h0.06c0.06,0.877-0.86,1.824-1.152,1.888L-19.752-29.805z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.9\"  id=\"_x30_.1.6.0.0.0.0.0.4.9\" d=\"M-20.125-29.661c0,0.068,0,0.381,0,0.381h0.057c0,0,0-0.313,0-0.381H-20.125z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.10\"  id=\"_x30_.1.6.0.0.0.0.0.4.10\" d=\"M-19.814-29.901c-0.08,0.063-0.076,0.131-0.031,0.237l0.06,0.003c-0.049-0.107-0.052-0.18,0.028-0.24H-19.814z\"/>\n                                                                    </g>\n                                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 11.9871 -47.4465)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.5.0.0.0\"  id=\"_x30_.1.6.0.0.0.0.0.5\">\n                                                                                    <rect width=\"4.225\" x=\"-19.839\" opacity=\"0.5\" y=\"-29.738\" fill=\"#FFFFFF\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.5.0.0.0.0\"  height=\"0.051\" id=\"_x30_.1.6.0.0.0.0.0.5.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path opacity=\"0.5\" fill=\"#F2F2F2\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.6\"  id=\"_x30_.1.6.0.0.0.0.0.6\" enable-background=\"new    \" d=\"M-17.701-32.35h-3.831v5.316l3.831,0.004V-32.35z\"/>\n                                                                    <path opacity=\"0.55\" fill=\"#FFFFFF\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.7\"  id=\"_x30_.1.6.0.0.0.0.0.7\" enable-background=\"new    \" d=\"M-18.352-32.298h0.271c0.151,0.019,0.271-0.013,0.271,0.099c0,0.61,0,4.702,0,4.854c0,0.168-0.065,0.176-0.065-0.014c0-0.131,0-3.895,0-4.348c0-0.457-0.105-0.52-0.197-0.52l-0.272,0.004C-18.526-32.223-18.526-32.298-18.352-32.298z\"/>\n                                                                    <path opacity=\"0.03\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8\"  id=\"_x30_.1.6.0.0.0.0.0.8\" enable-background=\"new    \" d=\"M-21.311-27.171c-0.068,0-0.138,0.013-0.138-0.099c0-0.61,0-4.668,0-4.817c0-0.168,0.065-0.177,0.065,0.009c0,0.137,0.002,3.139,0.002,3.59C-21.381-27.895-21.311-27.171-21.311-27.171z\"/>\n                                                                    <path fill=\"#D1C690\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.9\"  id=\"_x30_.1.6.0.0.0.0.0.9\" d=\"M-21.533-33.309v0.771h0.521c0.125,0,0.213,0.08,0.268,0.188h3.047v-1.01h-3.784h-0.05\"/>\n                                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 15.1234 -50.5798)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.10.0.0.0\"  id=\"_x30_.1.6.0.0.0.0.0.10\">\n                                                                                    <rect width=\"1.007\" x=\"-18.229\" opacity=\"0.5\" y=\"-32.873\" fill=\"#FFFFFF\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.10.0.0.0.0\"  height=\"0.052\" id=\"_x30_.1.6.0.0.0.0.0.10.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path fill=\"#D1C690\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.11\"  id=\"_x30_.1.6.0.0.0.0.0.11\" d=\"M-21.533-25.96h0.049h3.784l0-1.071h-3.464c-0.056,0.104-0.146,0.19-0.271,0.19h-0.1v0.83\"/>\n                                                                    <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 8.7664 -44.2238)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.12.0.0.0\"  id=\"_x30_.1.6.0.0.0.0.0.12\">\n                                                                                    <rect width=\"1.07\" x=\"-18.26\" opacity=\"0.5\" y=\"-26.517\" fill=\"#FFFFFF\" gorn=\"0.2.6.0.0.0.0.0.0.0.0.0.0.0.0.0.0.12.0.0.0.0\"  height=\"0.052\" id=\"_x30_.1.6.0.0.0.0.0.12.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 80.1173, 116.104)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.7.0.0.0\"  id=\"_x30_.1.7\">\n                        <g gorn=\"0.2.7.0.0.0.0\"  id=\"panasonic_d\">\n                            <g  transform=\"matrix(0, 1, -1, 0, 19.39, -1.039)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.7.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.7.0.0\">\n                                            <g gorn=\"0.2.7.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.7.0.0.0\">\n                                                <g gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.7.0.0.0.0\">\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 9.7242 8.6814)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.7.0.0.0.0.0\">\n                                                                    <rect width=\"1.272\" x=\"-0.167\" y=\"-10.702\" fill=\"#CCCCCC\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  height=\"1.039\" id=\"_x30_.1.7.0.0.0.0.0.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 29.1148 -10.7073)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.1.0.0.0\"  id=\"_x30_.1.7.0.0.0.0.1\">\n                                                                    <rect width=\"1.272\" x=\"19.221\" y=\"28.079\" fill=\"#CCCCCC\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.1.0.0.0.0\"  height=\"1.037\" id=\"_x30_.1.7.0.0.0.0.1.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 10.2611 9.2182)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.2.0.0.0\"  id=\"_x30_.1.7.0.0.0.0.2\">\n                                                                    <rect width=\"0.203\" x=\"-0.706\" opacity=\"0.1\" y=\"-10.165\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.2.0.0.0.0\"  height=\"1.039\" id=\"_x30_.1.7.0.0.0.0.2.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 29.6512 -10.1709)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.3.0.0.0\"  id=\"_x30_.1.7.0.0.0.0.3\">\n                                                                    <rect width=\"0.203\" x=\"18.682\" opacity=\"0.1\" y=\"28.616\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.3.0.0.0.0\"  height=\"1.037\" id=\"_x30_.1.7.0.0.0.0.3.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 9.1903 8.1474)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.4.0.0.0\"  id=\"_x30_.1.7.0.0.0.0.4\">\n                                                                    <rect width=\"0.204\" x=\"1.435\" opacity=\"0.2\" y=\"-11.236\" fill=\"#FFFFFF\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.4.0.0.0.0\"  height=\"1.039\" id=\"_x30_.1.7.0.0.0.0.4.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 28.5809 -11.2412)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.5.0.0.0\"  id=\"_x30_.1.7.0.0.0.0.5\">\n                                                                    <rect width=\"0.204\" x=\"20.822\" opacity=\"0.2\" y=\"27.545\" fill=\"#FFFFFF\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.5.0.0.0.0\"  height=\"1.037\" id=\"_x30_.1.7.0.0.0.0.5.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <path fill=\"#1A1A1A\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.6\"  id=\"_x30_.1.7.0.0.0.0.6\" d=\"M4.845,18.353l13.157,0c0.76,0,1.385-0.623,1.385-1.383l0-15.58c0-0.764-0.625-1.387-1.385-1.387l-13.157,0l-3.81,3.811v3.633v3.635l0,3.463L4.845,18.353z\"/>\n                                                    <circle fill=\"#E6E6E6\" cx=\"10.211\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.7\"  cy=\"9.178\" id=\"_x30_.1.7.0.0.0.0.7\" r=\"8.703\"/>\n                                                    <path fill=\"#333333\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.8\"  id=\"_x30_.1.7.0.0.0.0.8\" d=\"M4.845,18.353l13.157,0c0.76,0,1.385-0.623,1.385-1.383l0-15.58c0-0.764-0.625-1.387-1.385-1.387H15.25l-10.405,0l-3.81,3.811v3.633v3.635l0,3.463L4.845,18.353z\"/>\n                                                    <path gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.9\"  id=\"_x30_.1.7.0.0.0.0.9\" d=\"M1.036,3.997l3.811-3.811l10.404,0h2.752c0.76,0,1.385,0.623,1.385,1.387V1.389c0-0.764-0.625-1.387-1.385-1.387H15.25l-10.405,0l-3.81,3.811V3.997L1.036,3.997z\"/>\n                                                    <path opacity=\"0.1\" fill=\"#FFFFFF\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.10\"  id=\"_x30_.1.7.0.0.0.0.10\" enable-background=\"new    \" d=\"M19.386,16.785c0,0.761-0.625,1.384-1.385,1.384l-13.157,0l-3.811-3.807v0.183l3.811,3.808l13.157,0c0.76,0,1.385-0.623,1.385-1.383V16.785z\"/>\n                                                    <path fill=\"#E6E6E6\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.11\"  id=\"_x30_.1.7.0.0.0.0.11\" d=\"M10.211,0.354c1.881,0,3.615,0.604,5.039,1.614c2.215,1.579,3.664,4.163,3.664,7.088c0,2.927-1.449,5.509-3.664,7.087c-1.424,1.013-3.158,1.615-5.039,1.615c-4.805,0-8.702-3.896-8.702-8.703C1.509,4.251,5.407,0.354,10.211,0.354z\"/>\n                                                    <path gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.12\"  id=\"_x30_.1.7.0.0.0.0.12\" d=\"M18.915,9.178c0-2.926-1.449-5.509-3.664-7.088l0,14.175C17.465,14.688,18.915,12.105,18.915,9.178z\"/>\n                                                    <path opacity=\"0.3\" fill=\"#FFFFFF\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.13\"  id=\"_x30_.1.7.0.0.0.0.13\" enable-background=\"new    \" d=\"M1.509,8.934c0,4.807,3.897,8.703,8.702,8.703c1.881,0,3.615-0.604,5.039-1.616c2.215-1.578,3.664-4.161,3.664-7.087v0.244c0,2.927-1.449,5.51-3.664,7.087c-1.424,1.014-3.158,1.615-5.039,1.615c-4.805,0-8.702-3.896-8.702-8.702V8.934z\"/>\n                                                    <path opacity=\"0.5\" fill=\"#FFFFFF\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.14\"  id=\"_x30_.1.7.0.0.0.0.14\" enable-background=\"new    \" d=\"M18.915,9.407c0-2.925-1.449-5.508-3.664-7.088V2.09c2.215,1.579,3.664,4.162,3.664,7.088V9.407z\"/>\n                                                    <path opacity=\"0.2\" gorn=\"0.2.7.0.0.0.0.0.0.0.0.0.0.15\"  id=\"_x30_.1.7.0.0.0.0.15\" enable-background=\"new    \" d=\"M15.25,2.319c-1.424-1.012-3.158-1.615-5.039-1.615c-4.805,0-8.702,3.898-8.702,8.703V9.178c0-4.805,3.897-8.703,8.702-8.703c1.881,0,3.615,0.604,5.039,1.615V2.319z\"/>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 59.9571, 116.104)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.8.0.0.0\"  id=\"_x30_.1.8\">\n                        <g gorn=\"0.2.8.0.0.0.0\"  id=\"panasonic_d_1_\">\n                            <g  transform=\"matrix(0, 1, -1, 0, 19.39, -1.039)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.8.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.8.0.0\">\n                                            <g gorn=\"0.2.8.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.8.0.0.0\">\n                                                <g gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.8.0.0.0.0\">\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 9.7247 8.6818)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.8.0.0.0.0.0\">\n                                                                    <rect width=\"1.272\" x=\"-0.168\" y=\"-10.702\" fill=\"#CCCCCC\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  height=\"1.038\" id=\"_x30_.1.8.0.0.0.0.0.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 29.1148 -10.7074)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.1.0.0.0\"  id=\"_x30_.1.8.0.0.0.0.1\">\n                                                                    <rect width=\"1.272\" x=\"19.22\" y=\"28.078\" fill=\"#CCCCCC\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.1.0.0.0.0\"  height=\"1.037\" id=\"_x30_.1.8.0.0.0.0.1.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 10.261 9.2182)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.2.0.0.0\"  id=\"_x30_.1.8.0.0.0.0.2\">\n                                                                    <rect width=\"0.203\" x=\"-0.707\" opacity=\"0.1\" y=\"-10.165\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.2.0.0.0.0\"  height=\"1.039\" id=\"_x30_.1.8.0.0.0.0.2.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 29.6506 -10.1715)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.3.0.0.0\"  id=\"_x30_.1.8.0.0.0.0.3\">\n                                                                    <rect width=\"0.203\" x=\"18.683\" opacity=\"0.1\" y=\"28.615\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.3.0.0.0.0\"  height=\"1.037\" id=\"_x30_.1.8.0.0.0.0.3.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 9.1902 8.1474)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.4.0.0.0\"  id=\"_x30_.1.8.0.0.0.0.4\">\n                                                                    <rect width=\"0.204\" x=\"1.435\" opacity=\"0.2\" y=\"-11.237\" fill=\"#FFFFFF\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.4.0.0.0.0\"  height=\"1.039\" id=\"_x30_.1.8.0.0.0.0.4.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 28.5808 -11.2413)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.5.0.0.0\"  id=\"_x30_.1.8.0.0.0.0.5\">\n                                                                    <rect width=\"0.204\" x=\"20.822\" opacity=\"0.2\" y=\"27.544\" fill=\"#FFFFFF\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.5.0.0.0.0\"  height=\"1.037\" id=\"_x30_.1.8.0.0.0.0.5.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <path fill=\"#1A1A1A\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.6\"  id=\"_x30_.1.8.0.0.0.0.6\" d=\"M4.846,18.353l13.157,0c0.76,0,1.385-0.623,1.385-1.383l0-15.58c0-0.764-0.625-1.387-1.385-1.387l-13.157,0l-3.81,3.811v3.633v3.635l0,3.463L4.846,18.353z\"/>\n                                                    <circle fill=\"#E6E6E6\" cx=\"10.212\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.7\"  cy=\"9.178\" id=\"_x30_.1.8.0.0.0.0.7\" r=\"8.703\"/>\n                                                    <path fill=\"#333333\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.8\"  id=\"_x30_.1.8.0.0.0.0.8\" d=\"M4.846,18.353l13.157,0c0.76,0,1.385-0.623,1.385-1.383l0-15.58c0-0.764-0.625-1.387-1.385-1.387h-2.752l-10.405,0l-3.81,3.811v3.633v3.635l0,3.463L4.846,18.353z\"/>\n                                                    <path gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.9\"  id=\"_x30_.1.8.0.0.0.0.9\" d=\"M1.037,3.997l3.811-3.811l10.404,0h2.752c0.76,0,1.385,0.623,1.385,1.387l0-0.184c0-0.764-0.625-1.387-1.385-1.387h-2.752l-10.405,0l-3.81,3.811V3.997L1.037,3.997z\"/>\n                                                    <path opacity=\"0.1\" fill=\"#FFFFFF\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.10\"  id=\"_x30_.1.8.0.0.0.0.10\" enable-background=\"new    \" d=\"M19.387,16.785c0,0.761-0.625,1.384-1.385,1.384l-13.157,0l-3.811-3.807v0.183l3.811,3.808l13.157,0c0.76,0,1.385-0.623,1.385-1.383V16.785z\"/>\n                                                    <path fill=\"#E6E6E6\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.11\"  id=\"_x30_.1.8.0.0.0.0.11\" d=\"M10.212,0.354c1.881,0,3.615,0.604,5.039,1.614c2.215,1.579,3.664,4.163,3.664,7.088c0,2.927-1.449,5.509-3.664,7.087c-1.424,1.013-3.158,1.615-5.039,1.615c-4.805,0-8.702-3.896-8.702-8.703C1.51,4.251,5.408,0.354,10.212,0.354z\"/>\n                                                    <path gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.12\"  id=\"_x30_.1.8.0.0.0.0.12\" d=\"M18.915,9.178c0-2.926-1.449-5.509-3.664-7.088l0,14.175C17.466,14.688,18.916,12.105,18.915,9.178z\"/>\n                                                    <path opacity=\"0.3\" fill=\"#FFFFFF\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.13\"  id=\"_x30_.1.8.0.0.0.0.13\" enable-background=\"new    \" d=\"M1.51,8.934c0,4.807,3.897,8.703,8.702,8.703c1.881,0,3.615-0.604,5.039-1.616c2.215-1.578,3.664-4.161,3.664-7.087v0.244c0,2.927-1.449,5.51-3.664,7.087c-1.424,1.014-3.158,1.615-5.039,1.615c-4.805,0-8.702-3.896-8.702-8.702V8.934z\"/>\n                                                    <path opacity=\"0.5\" fill=\"#FFFFFF\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.14\"  id=\"_x30_.1.8.0.0.0.0.14\" enable-background=\"new    \" d=\"M18.915,9.407c0-2.925-1.449-5.508-3.664-7.088V2.09c2.215,1.579,3.664,4.162,3.664,7.088V9.407z\"/>\n                                                    <path opacity=\"0.2\" gorn=\"0.2.8.0.0.0.0.0.0.0.0.0.0.15\"  id=\"_x30_.1.8.0.0.0.0.15\" enable-background=\"new    \" d=\"M15.251,2.319c-1.424-1.012-3.158-1.615-5.039-1.615c-4.805,0-8.702,3.898-8.702,8.703V9.178c0-4.805,3.897-8.703,8.702-8.703c1.881,0,3.615,0.604,5.039,1.615V2.319z\"/>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 92.8519, 140.628)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.9.0.0.0\"  id=\"_x30_.1.9\">\n                        <g gorn=\"0.2.9.0.0.0.0\"  id=\"_x31_x08_1_\">\n                            <rect width=\"57.601\" x=\"0.72\" y=\"-0.228\" fill=\"#404040\" gorn=\"0.2.9.0.0.0.0.0\"  height=\"7.199\" id=\"_x30_.1.9.0.0\"/>\n                            <rect width=\"2.781\" x=\"2.93\" y=\"1.981\" gorn=\"0.2.9.0.0.0.0.1\"  height=\"2.783\" id=\"_x30_.1.9.0.1\"/>\n                            <polygon fill=\"#2A2A29\" points=\"1.905,0.956 2.928,1.981 5.711,1.981 6.737,0.956 \" gorn=\"0.2.9.0.0.0.0.2\"  id=\"_x30_.1.9.0.2\"/>\n                            <polygon fill=\"#474747\" points=\"6.737,0.956 5.711,1.985 5.711,4.766 6.737,5.789 \" gorn=\"0.2.9.0.0.0.0.3\"  id=\"_x30_.1.9.0.3\"/>\n                            <polygon fill=\"#595959\" points=\"6.736,5.789 5.71,4.766 2.928,4.766 1.905,5.789 \" gorn=\"0.2.9.0.0.0.0.4\"  id=\"_x30_.1.9.0.4\"/>\n                            <polygon fill=\"#373737\" points=\"1.903,5.789 2.928,4.764 2.928,1.981 1.903,0.956 \" gorn=\"0.2.9.0.0.0.0.5\"  id=\"_x30_.1.9.0.5\"/>\n                            <rect width=\"2.781\" x=\"10.13\" y=\"1.981\" gorn=\"0.2.9.0.0.0.0.6\"  height=\"2.783\" id=\"_x30_.1.9.0.6\"/>\n                            <polygon fill=\"#2A2A29\" points=\"9.104,0.956 10.128,1.981 12.912,1.981 13.938,0.956 \" gorn=\"0.2.9.0.0.0.0.7\"  id=\"_x30_.1.9.0.7\"/>\n                            <polygon fill=\"#474747\" points=\"13.938,0.956 12.912,1.985 12.912,4.766 13.938,5.789 \" gorn=\"0.2.9.0.0.0.0.8\"  id=\"_x30_.1.9.0.8\"/>\n                            <polygon fill=\"#595959\" points=\"13.936,5.789 12.911,4.766 10.128,4.766 9.104,5.789 \" gorn=\"0.2.9.0.0.0.0.9\"  id=\"_x30_.1.9.0.9\"/>\n                            <polygon fill=\"#373737\" points=\"9.102,5.789 10.128,4.764 10.128,1.981 9.102,0.956 \" gorn=\"0.2.9.0.0.0.0.10\"  id=\"_x30_.1.9.0.10\"/>\n                            <rect width=\"2.78\" x=\"17.331\" y=\"1.981\" gorn=\"0.2.9.0.0.0.0.11\"  height=\"2.783\" id=\"_x30_.1.9.0.11\"/>\n                            <polygon fill=\"#2A2A29\" points=\"16.304,0.956 17.328,1.981 20.112,1.981 21.136,0.956 \" gorn=\"0.2.9.0.0.0.0.12\"  id=\"_x30_.1.9.0.12\"/>\n                            <polygon fill=\"#474747\" points=\"21.136,0.956 20.112,1.985 20.112,4.766 21.136,5.789 \" gorn=\"0.2.9.0.0.0.0.13\"  id=\"_x30_.1.9.0.13\"/>\n                            <polygon fill=\"#595959\" points=\"21.135,5.789 20.11,4.766 17.328,4.766 16.304,5.789 \" gorn=\"0.2.9.0.0.0.0.14\"  id=\"_x30_.1.9.0.14\"/>\n                            <polygon fill=\"#373737\" points=\"16.302,5.789 17.328,4.764 17.328,1.981 16.302,0.956 \" gorn=\"0.2.9.0.0.0.0.15\"  id=\"_x30_.1.9.0.15\"/>\n                            <rect width=\"2.781\" x=\"24.53\" y=\"1.981\" gorn=\"0.2.9.0.0.0.0.16\"  height=\"2.783\" id=\"_x30_.1.9.0.16\"/>\n                            <polygon fill=\"#2A2A29\" points=\"23.503,0.956 24.528,1.981 27.313,1.981 28.335,0.956 \" gorn=\"0.2.9.0.0.0.0.17\"  id=\"_x30_.1.9.0.17\"/>\n                            <polygon fill=\"#474747\" points=\"28.335,0.956 27.313,1.985 27.313,4.766 28.335,5.789 \" gorn=\"0.2.9.0.0.0.0.18\"  id=\"_x30_.1.9.0.18\"/>\n                            <polygon fill=\"#595959\" points=\"28.335,5.789 27.311,4.766 24.528,4.766 23.503,5.789 \" gorn=\"0.2.9.0.0.0.0.19\"  id=\"_x30_.1.9.0.19\"/>\n                            <polygon fill=\"#373737\" points=\"23.501,5.789 24.528,4.764 24.528,1.981 23.501,0.956 \" gorn=\"0.2.9.0.0.0.0.20\"  id=\"_x30_.1.9.0.20\"/>\n                            <rect width=\"2.78\" x=\"31.731\" y=\"1.981\" gorn=\"0.2.9.0.0.0.0.21\"  height=\"2.783\" id=\"_x30_.1.9.0.21\"/>\n                            <polygon fill=\"#2A2A29\" points=\"30.703,0.956 31.729,1.981 34.511,1.981 35.535,0.956 \" gorn=\"0.2.9.0.0.0.0.22\"  id=\"_x30_.1.9.0.22\"/>\n                            <polygon fill=\"#474747\" points=\"35.535,0.956 34.511,1.985 34.511,4.766 35.535,5.789 \" gorn=\"0.2.9.0.0.0.0.23\"  id=\"_x30_.1.9.0.23\"/>\n                            <polygon fill=\"#595959\" points=\"35.535,5.789 34.51,4.766 31.729,4.766 30.703,5.789 \" gorn=\"0.2.9.0.0.0.0.24\"  id=\"_x30_.1.9.0.24\"/>\n                            <polygon fill=\"#373737\" points=\"30.701,5.789 31.729,4.764 31.729,1.981 30.701,0.956 \" gorn=\"0.2.9.0.0.0.0.25\"  id=\"_x30_.1.9.0.25\"/>\n                            <rect width=\"2.78\" x=\"38.93\" y=\"1.981\" gorn=\"0.2.9.0.0.0.0.26\"  height=\"2.783\" id=\"_x30_.1.9.0.26\"/>\n                            <polygon fill=\"#2A2A29\" points=\"37.905,0.956 38.928,1.981 41.71,1.981 42.737,0.956 \" gorn=\"0.2.9.0.0.0.0.27\"  id=\"_x30_.1.9.0.27\"/>\n                            <polygon fill=\"#474747\" points=\"42.737,0.956 41.71,1.985 41.71,4.766 42.737,5.789 \" gorn=\"0.2.9.0.0.0.0.28\"  id=\"_x30_.1.9.0.28\"/>\n                            <polygon fill=\"#595959\" points=\"42.735,5.789 41.71,4.766 38.928,4.766 37.905,5.789 \" gorn=\"0.2.9.0.0.0.0.29\"  id=\"_x30_.1.9.0.29\"/>\n                            <polygon fill=\"#373737\" points=\"37.903,5.789 38.928,4.764 38.928,1.981 37.903,0.956 \" gorn=\"0.2.9.0.0.0.0.30\"  id=\"_x30_.1.9.0.30\"/>\n                            <rect width=\"2.78\" x=\"46.13\" y=\"1.981\" gorn=\"0.2.9.0.0.0.0.31\"  height=\"2.783\" id=\"_x30_.1.9.0.31\"/>\n                            <polygon fill=\"#2A2A29\" points=\"45.104,0.956 46.128,1.981 48.91,1.981 49.938,0.956 \" gorn=\"0.2.9.0.0.0.0.32\"  id=\"_x30_.1.9.0.32\"/>\n                            <polygon fill=\"#474747\" points=\"49.938,0.956 48.91,1.985 48.91,4.766 49.938,5.789 \" gorn=\"0.2.9.0.0.0.0.33\"  id=\"_x30_.1.9.0.33\"/>\n                            <polygon fill=\"#595959\" points=\"49.936,5.789 48.91,4.766 46.128,4.766 45.104,5.789 \" gorn=\"0.2.9.0.0.0.0.34\"  id=\"_x30_.1.9.0.34\"/>\n                            <polygon fill=\"#373737\" points=\"45.102,5.789 46.128,4.764 46.128,1.981 45.102,0.956 \" gorn=\"0.2.9.0.0.0.0.35\"  id=\"_x30_.1.9.0.35\"/>\n                            <rect width=\"2.78\" x=\"53.331\" y=\"1.981\" gorn=\"0.2.9.0.0.0.0.36\"  height=\"2.783\" id=\"_x30_.1.9.0.36\"/>\n                            <polygon fill=\"#2A2A29\" points=\"52.304,0.956 53.328,1.981 56.112,1.981 57.136,0.956 \" gorn=\"0.2.9.0.0.0.0.37\"  id=\"_x30_.1.9.0.37\"/>\n                            <polygon fill=\"#474747\" points=\"57.136,0.956 56.112,1.985 56.112,4.766 57.136,5.789 \" gorn=\"0.2.9.0.0.0.0.38\"  id=\"_x30_.1.9.0.38\"/>\n                            <polygon fill=\"#595959\" points=\"57.135,5.789 56.11,4.766 53.328,4.766 52.304,5.789 \" gorn=\"0.2.9.0.0.0.0.39\"  id=\"_x30_.1.9.0.39\"/>\n                            <polygon fill=\"#373737\" points=\"52.302,5.789 53.328,4.764 53.328,1.981 52.302,0.956 \" gorn=\"0.2.9.0.0.0.0.40\"  id=\"_x30_.1.9.0.40\"/>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 89.0222, 50.1755)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.10.0.0.0\"  id=\"_x30_.1.10\">\n                        <g gorn=\"0.2.10.0.0.0.0\"  id=\"chip-led0805_2_\">\n                            <g  transform=\"matrix(0, 1, -1, 0, 5.62951, 1.77951)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.10.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.10.0.0\">\n                                            <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.10.0.0.0\">\n                                                <g  transform=\"matrix(1, 0, 0, 1, 21.5539, 31.3385)\">\n                                                    <g >\n                                                        <g >\n                                                            <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.10.0.0.0.0\">\n                                                                <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"led-0603_3_\">\n                                                                    <line fill=\"none\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.10.0.0.0.0.0.0\" y1=\"-37.083\" x1=\"-21.535\" y2=\"-29.847\" x2=\"-21.535\"/>\n                                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -53.0294 -13.7889)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.0.0.0\"  id=\"_x30_.1.10.0.0.0.0.0.1\">\n                                                                                    <rect width=\"7.348\" x=\"-23.292\" y=\"-35.322\" fill=\"#F2F2F2\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.0.0.0.0\"  height=\"3.833\" id=\"_x30_.1.10.0.0.0.0.0.1.0\"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path fill=\"#22B573\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.2\"  fill-opacity=\"0.7\" id=\"_x30_.1.10.0.0.0.0.0.2\" d=\"M-21.541-32.333c0,0,0.467,0.645,0.426,0.867c-0.041,0.219,0.148,0.541,0,0.676l-0.424-0.018L-21.541-32.333z\"/>\n                                                                    <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3\"  id=\"_x30_.1.10.0.0.0.0.0.3\">\n                                                                        <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -53.0695 -13.8875)\">\n                                                                            <g >\n                                                                                <g >\n                                                                                    <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.0.0.0.0\"  id=\"_x30_.1.10.0.0.0.0.0.3.0\">\n                                                                                        <rect width=\"0.854\" x=\"-20.016\" y=\"-33.957\" fill=\"#FFFFFF\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.0.0.0.0.0\"  height=\"0.961\" id=\"_x30_.1.10.0.0.0.0.0.3.0.0\"/>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                        <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -53.5526 -13.4083)\">\n                                                                            <g >\n                                                                                <g >\n                                                                                    <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.1.0.0.0\"  id=\"_x30_.1.10.0.0.0.0.0.3.1\">\n                                                                                        <rect width=\"0.854\" x=\"-20.497\" y=\"-33.503\" fill=\"#B3B3B3\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.1.0.0.0.0\"  height=\"0.049\" id=\"_x30_.1.10.0.0.0.0.0.3.1.0\"/>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4\"  id=\"_x30_.1.10.0.0.0.0.0.4\">\n                                                                        <polygon fill=\"#D1C690\" points=\"-21.115,-31.753 -21.219,-30.79 -20.488,-30.79 -20.592,-31.753 \" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.0\"  id=\"_x30_.1.10.0.0.0.0.0.4.0\"/>\n                                                                        <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.1\"  id=\"_x30_.1.10.0.0.0.0.0.4.1\">\n                                                                            <path fill=\"#D1C690\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.1.0\"  id=\"_x30_.1.10.0.0.0.0.0.4.1.0\" d=\"M-20.918-31.692c0-0.002,0-0.004,0-0.008c0.035-0.266,0.104-0.447,0.162-0.598c0.08-0.209,0.782-0.559,0.696-0.828c-0.012-0.027,0.011-0.06,0.043-0.066c0.035-0.008,0.068,0.01,0.078,0.039c0.095,0.305-0.617,0.674-0.701,0.893c-0.06,0.148-0.123,0.318-0.155,0.572c-0.004,0.029-0.033,0.055-0.068,0.049C-20.893-31.642-20.918-31.665-20.918-31.692z\"/>\n                                                                        </g>\n                                                                        <polygon fill=\"#D1C690\" points=\"-18.229,-35.173 -18.126,-36.139 -18.856,-36.139 -18.753,-35.173 \" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.2\"  id=\"_x30_.1.10.0.0.0.0.0.4.2\"/>\n                                                                        <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.3\"  id=\"_x30_.1.10.0.0.0.0.0.4.3\">\n                                                                            <path fill=\"#D1C690\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.3.0\"  id=\"_x30_.1.10.0.0.0.0.0.4.3.0\" d=\"M-19.75-33.52c0-0.025,0.02-0.049,0.047-0.055c0.292-0.063,1.152-1.088,1.152-1.885c0-0.033,0.026-0.057,0.063-0.057c0.034,0.002,0.063,0.025,0.063,0.057v0.002c0,0.749-0.77,1.891-1.245,1.993c-0.035,0.008-0.068-0.012-0.078-0.041C-19.75-33.511-19.75-33.515-19.75-33.52z\"/>\n                                                                        </g>\n                                                                        <path fill=\"#D1C690\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.4\"  id=\"_x30_.1.10.0.0.0.0.0.4.4\" d=\"M-19.766-33.05c0,0,0.002-0.356-0.311-0.383c0,0.07,0,0.383,0,0.383H-19.766z\"/>\n                                                                        <path fill=\"#D1C690\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.5\"  id=\"_x30_.1.10.0.0.0.0.0.4.5\" d=\"M-19.446-33.485c0,0-0.306,0.158-0.351,0.053c-0.048-0.107-0.052-0.178,0.028-0.24C-19.686-33.733-19.446-33.485-19.446-33.485z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.6\"  id=\"_x30_.1.10.0.0.0.0.0.4.6\" d=\"M-20.113-33.126c0.084,0.27-0.618,0.619-0.698,0.828c-0.06,0.145-0.127,0.33-0.162,0.598h0.059c0.035-0.266,0.104-0.447,0.162-0.598c0.08-0.209,0.782-0.559,0.696-0.828H-20.113z\"/>\n                                                                        <polygon fill=\"#9D956C\" points=\"-18.808,-35.173 -18.909,-36.139 -18.856,-36.139 -18.753,-35.173 \" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.7\"  id=\"_x30_.1.10.0.0.0.0.0.4.7\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.8\"  id=\"_x30_.1.10.0.0.0.0.0.4.8\" d=\"M-19.759-33.577c0.291-0.062,1.212-1.07,1.149-1.885h0.06c0.06,0.877-0.86,1.826-1.152,1.887L-19.759-33.577z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.9\"  id=\"_x30_.1.10.0.0.0.0.0.4.9\" d=\"M-20.133-33.433c0,0.07,0,0.381,0,0.381h0.057c0,0,0-0.311,0-0.381H-20.133z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.10\"  id=\"_x30_.1.10.0.0.0.0.0.4.10\" d=\"M-19.821-33.673c-0.08,0.063-0.076,0.131-0.031,0.238l0.06,0.002c-0.049-0.107-0.052-0.179,0.028-0.24H-19.821z\"/>\n                                                                    </g>\n                                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -51.2218 -15.764)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.5.0.0.0\"  id=\"_x30_.1.10.0.0.0.0.0.5\">\n                                                                                    <rect width=\"4.223\" x=\"-19.838\" opacity=\"0.5\" y=\"-33.517\" fill=\"#FFFFFF\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.5.0.0.0.0\"  height=\"0.051\" id=\"_x30_.1.10.0.0.0.0.0.5.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path opacity=\"0.5\" fill=\"#F2F2F2\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.6\"  id=\"_x30_.1.10.0.0.0.0.0.6\" enable-background=\"new    \" d=\"M-17.708-36.122h-3.831l0,5.317l3.831,0.004L-17.708-36.122z\"/>\n                                                                    <path opacity=\"0.55\" fill=\"#FFFFFF\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.7\"  id=\"_x30_.1.10.0.0.0.0.0.7\" enable-background=\"new    \" d=\"M-18.36-36.071h0.271c0.151,0.018,0.271-0.012,0.271,0.098c0,0.611,0,4.703,0,4.854c0,0.168-0.065,0.176-0.065-0.012c0-0.131,0-3.893,0-4.346c0-0.457-0.105-0.518-0.197-0.518l-0.272,0.002C-18.532-35.994-18.532-36.071-18.36-36.071z\"/>\n                                                                    <path opacity=\"0.03\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8\"  id=\"_x30_.1.10.0.0.0.0.0.8\" enable-background=\"new    \" d=\"M-21.319-30.944c-0.068,0-0.138,0.012-0.138-0.098c0-0.611,0-4.667,0-4.817c0-0.168,0.065-0.176,0.065,0.008c0,0.135,0.002,3.138,0.002,3.589C-21.387-31.667-21.319-30.944-21.319-30.944z\"/>\n                                                                    <path fill=\"#D1C690\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.9\"  id=\"_x30_.1.10.0.0.0.0.0.9\" d=\"M-21.541-37.08v0.771h0.521c0.125,0,0.213,0.08,0.268,0.188h3.047v-1.01h-3.784h-0.05\"/>\n                                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -54.3568 -18.9)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.10.0.0.0\"  id=\"_x30_.1.10.0.0.0.0.0.10\">\n                                                                                    <rect width=\"1.006\" x=\"-18.23\" opacity=\"0.5\" y=\"-36.653\" fill=\"#FFFFFF\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.10.0.0.0.0\"  height=\"0.052\" id=\"_x30_.1.10.0.0.0.0.0.10.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path fill=\"#D1C690\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.11\"  id=\"_x30_.1.10.0.0.0.0.0.11\" d=\"M-21.541-29.733h0.049h3.784v-1.072h-3.464c-0.056,0.105-0.146,0.191-0.271,0.191h-0.1v0.83\"/>\n                                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -47.9999 -12.5431)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.12.0.0.0\"  id=\"_x30_.1.10.0.0.0.0.0.12\">\n                                                                                    <rect width=\"1.072\" x=\"-18.262\" opacity=\"0.5\" y=\"-30.296\" fill=\"#FFFFFF\" gorn=\"0.2.10.0.0.0.0.0.0.0.0.0.0.0.0.0.0.12.0.0.0.0\"  height=\"0.052\" id=\"_x30_.1.10.0.0.0.0.0.12.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 89.0222, 43.6955)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.11.0.0.0\"  id=\"_x30_.1.11\">\n                        <g gorn=\"0.2.11.0.0.0.0\"  id=\"chip-led0805_3_\">\n                            <g  transform=\"matrix(0, 1, -1, 0, 5.62951, 1.77951)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.11.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.11.0.0\">\n                                            <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.11.0.0.0\">\n                                                <g  transform=\"matrix(1, 0, 0, 1, 21.5539, 31.3385)\">\n                                                    <g >\n                                                        <g >\n                                                            <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.11.0.0.0.0\">\n                                                                <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"led-0603_4_\">\n                                                                    <line fill=\"none\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.11.0.0.0.0.0.0\" y1=\"-37.083\" x1=\"-21.535\" y2=\"-29.847\" x2=\"-21.535\"/>\n                                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -53.0294 -13.788)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.0.0.0\"  id=\"_x30_.1.11.0.0.0.0.0.1\">\n                                                                                    <rect width=\"7.348\" x=\"-23.292\" y=\"-35.322\" fill=\"#F2F2F2\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.0.0.0.0\"  height=\"3.833\" id=\"_x30_.1.11.0.0.0.0.0.1.0\"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path fill=\"#22B573\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.2\"  fill-opacity=\"0.7\" id=\"_x30_.1.11.0.0.0.0.0.2\" d=\"M-21.541-32.333c0,0,0.467,0.645,0.426,0.867c-0.041,0.219,0.148,0.541,0,0.676l-0.424-0.018L-21.541-32.333z\"/>\n                                                                    <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3\"  id=\"_x30_.1.11.0.0.0.0.0.3\">\n                                                                        <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -53.0694 -13.8876)\">\n                                                                            <g >\n                                                                                <g >\n                                                                                    <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.0.0.0.0\"  id=\"_x30_.1.11.0.0.0.0.0.3.0\">\n                                                                                        <rect width=\"0.854\" x=\"-20.016\" y=\"-33.957\" fill=\"#FFFFFF\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.0.0.0.0.0\"  height=\"0.961\" id=\"_x30_.1.11.0.0.0.0.0.3.0.0\"/>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                        <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -53.5514 -13.4056)\">\n                                                                            <g >\n                                                                                <g >\n                                                                                    <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.1.0.0.0\"  id=\"_x30_.1.11.0.0.0.0.0.3.1\">\n                                                                                        <rect width=\"0.854\" x=\"-20.498\" y=\"-33.501\" fill=\"#B3B3B3\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.1.0.0.0.0\"  height=\"0.049\" id=\"_x30_.1.11.0.0.0.0.0.3.1.0\"/>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4\"  id=\"_x30_.1.11.0.0.0.0.0.4\">\n                                                                        <polygon fill=\"#D1C690\" points=\"-21.115,-31.753 -21.219,-30.79 -20.488,-30.79 -20.592,-31.753 \" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.0\"  id=\"_x30_.1.11.0.0.0.0.0.4.0\"/>\n                                                                        <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.1\"  id=\"_x30_.1.11.0.0.0.0.0.4.1\">\n                                                                            <path fill=\"#D1C690\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.1.0\"  id=\"_x30_.1.11.0.0.0.0.0.4.1.0\" d=\"M-20.918-31.692c0-0.002,0-0.004,0-0.008c0.035-0.266,0.104-0.447,0.162-0.598c0.08-0.209,0.782-0.559,0.696-0.828c-0.012-0.027,0.011-0.06,0.043-0.066c0.035-0.008,0.068,0.01,0.078,0.039c0.095,0.305-0.617,0.674-0.701,0.893c-0.06,0.148-0.123,0.318-0.155,0.572c-0.004,0.029-0.033,0.055-0.068,0.049C-20.892-31.642-20.918-31.665-20.918-31.692z\"/>\n                                                                        </g>\n                                                                        <polygon fill=\"#D1C690\" points=\"-18.229,-35.173 -18.126,-36.139 -18.856,-36.139 -18.753,-35.173 \" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.2\"  id=\"_x30_.1.11.0.0.0.0.0.4.2\"/>\n                                                                        <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.3\"  id=\"_x30_.1.11.0.0.0.0.0.4.3\">\n                                                                            <path fill=\"#D1C690\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.3.0\"  id=\"_x30_.1.11.0.0.0.0.0.4.3.0\" d=\"M-19.75-33.52c0-0.025,0.02-0.049,0.047-0.055c0.292-0.063,1.152-1.088,1.152-1.885c0-0.033,0.026-0.057,0.063-0.057c0.034,0.002,0.063,0.025,0.063,0.057v0.002c0,0.749-0.77,1.891-1.245,1.993c-0.035,0.008-0.068-0.012-0.078-0.041C-19.75-33.511-19.75-33.515-19.75-33.52z\"/>\n                                                                        </g>\n                                                                        <path fill=\"#D1C690\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.4\"  id=\"_x30_.1.11.0.0.0.0.0.4.4\" d=\"M-19.764-33.05c0,0,0.002-0.356-0.311-0.383c0,0.07,0,0.383,0,0.383H-19.764z\"/>\n                                                                        <path fill=\"#D1C690\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.5\"  id=\"_x30_.1.11.0.0.0.0.0.4.5\" d=\"M-19.445-33.485c0,0-0.306,0.158-0.351,0.053c-0.048-0.107-0.052-0.178,0.028-0.24C-19.686-33.733-19.445-33.485-19.445-33.485z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.6\"  id=\"_x30_.1.11.0.0.0.0.0.4.6\" d=\"M-20.113-33.126c0.084,0.27-0.618,0.619-0.698,0.828c-0.06,0.145-0.127,0.33-0.162,0.598h0.059c0.035-0.266,0.104-0.447,0.162-0.598c0.08-0.209,0.782-0.559,0.696-0.828H-20.113z\"/>\n                                                                        <polygon fill=\"#9D956C\" points=\"-18.806,-35.173 -18.91,-36.139 -18.856,-36.139 -18.753,-35.173 \" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.7\"  id=\"_x30_.1.11.0.0.0.0.0.4.7\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.8\"  id=\"_x30_.1.11.0.0.0.0.0.4.8\" d=\"M-19.758-33.577c0.291-0.062,1.212-1.07,1.149-1.885h0.06c0.06,0.877-0.86,1.826-1.152,1.887L-19.758-33.577z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.9\"  id=\"_x30_.1.11.0.0.0.0.0.4.9\" d=\"M-20.131-33.433c0,0.07,0,0.381,0,0.381h0.057c0,0,0-0.311,0-0.381H-20.131z\"/>\n                                                                        <path fill=\"#9D956C\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4.10\"  id=\"_x30_.1.11.0.0.0.0.0.4.10\" d=\"M-19.82-33.673c-0.08,0.063-0.076,0.131-0.031,0.238l0.06,0.002c-0.049-0.107-0.052-0.179,0.028-0.24H-19.82z\"/>\n                                                                    </g>\n                                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -51.2218 -15.7626)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.5.0.0.0\"  id=\"_x30_.1.11.0.0.0.0.0.5\">\n                                                                                    <rect width=\"4.223\" x=\"-19.839\" opacity=\"0.5\" y=\"-33.516\" fill=\"#FFFFFF\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.5.0.0.0.0\"  height=\"0.051\" id=\"_x30_.1.11.0.0.0.0.0.5.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path opacity=\"0.5\" fill=\"#F2F2F2\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.6\"  id=\"_x30_.1.11.0.0.0.0.0.6\" enable-background=\"new    \" d=\"M-17.708-36.122l-3.831,0l0,5.317l3.831,0.004L-17.708-36.122z\"/>\n                                                                    <path opacity=\"0.55\" fill=\"#FFFFFF\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.7\"  id=\"_x30_.1.11.0.0.0.0.0.7\" enable-background=\"new    \" d=\"M-18.359-36.071h0.271c0.151,0.018,0.271-0.012,0.271,0.098c0,0.611,0,4.703,0,4.854c0,0.168-0.065,0.176-0.065-0.012c0-0.131,0-3.893,0-4.346c0-0.457-0.105-0.518-0.197-0.518l-0.272,0.002C-18.532-35.994-18.532-36.071-18.359-36.071z\"/>\n                                                                    <path opacity=\"0.03\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8\"  id=\"_x30_.1.11.0.0.0.0.0.8\" enable-background=\"new    \" d=\"M-21.317-30.944c-0.068,0-0.138,0.012-0.138-0.098c0-0.611,0-4.667,0-4.817c0-0.168,0.065-0.176,0.065,0.008c0,0.135,0.002,3.138,0.002,3.589C-21.387-31.667-21.317-30.944-21.317-30.944z\"/>\n                                                                    <path fill=\"#D1C690\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.9\"  id=\"_x30_.1.11.0.0.0.0.0.9\" d=\"M-21.541-37.08v0.771h0.521c0.125,0,0.213,0.08,0.268,0.188l3.047,0v-1.01l-3.784,0h-0.05\"/>\n                                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -54.3578 -18.8995)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.10.0.0.0\"  id=\"_x30_.1.11.0.0.0.0.0.10\">\n                                                                                    <rect width=\"1.006\" x=\"-18.23\" opacity=\"0.5\" y=\"-36.653\" fill=\"#FFFFFF\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.10.0.0.0.0\"  height=\"0.052\" id=\"_x30_.1.11.0.0.0.0.0.10.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                    <path fill=\"#D1C690\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.11\"  id=\"_x30_.1.11.0.0.0.0.0.11\" d=\"M-21.541-29.733h0.049l3.784,0v-1.072l-3.464,0c-0.056,0.105-0.146,0.191-0.271,0.191h-0.1v0.83\"/>\n                                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 -48.0001 -12.5429)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.12.0.0.0\"  id=\"_x30_.1.11.0.0.0.0.0.12\">\n                                                                                    <rect width=\"1.072\" x=\"-18.262\" opacity=\"0.5\" y=\"-30.294\" fill=\"#FFFFFF\" gorn=\"0.2.11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.12.0.0.0.0\"  height=\"0.052\" id=\"_x30_.1.11.0.0.0.0.0.12.0\" enable-background=\"new    \"/>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 31.1856, 77.2272)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.12.0.0.0\"  id=\"_x30_.1.12\">\n                        <g gorn=\"0.2.12.0.0.0.0\"  id=\"sot223\">\n                            <g  transform=\"matrix(0, 1, -1, 0, 19.6385, 0.486504)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.12.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.12.0.0\">\n                                            <g gorn=\"0.2.12.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.12.0.0.0\">\n                                                <g gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.12.0.0.0.0\">\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 34.358 -27.0816)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.12.0.0.0.0.0\">\n                                                                    <rect width=\"4.896\" x=\"28.274\" y=\"1.913\" fill=\"#999999\" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  height=\"3.458\" id=\"_x30_.1.12.0.0.0.0.0.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 27.8034 -20.526)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.1.0.0.0\"  id=\"_x30_.1.12.0.0.0.0.1\">\n                                                                    <rect width=\"4.896\" x=\"21.719\" y=\"1.913\" fill=\"#999999\" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.1.0.0.0.0\"  height=\"3.459\" id=\"_x30_.1.12.0.0.0.0.1.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 21.2482 -13.9718)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.2.0.0.0\"  id=\"_x30_.1.12.0.0.0.0.2\">\n                                                                    <rect width=\"4.896\" x=\"15.164\" y=\"1.914\" fill=\"#999999\" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.2.0.0.0.0\"  height=\"3.455\" id=\"_x30_.1.12.0.0.0.0.2.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 31.983 -29.4566)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.3.0.0.0\"  id=\"_x30_.1.12.0.0.0.0.3\">\n                                                                    <rect width=\"0.146\" x=\"30.649\" opacity=\"0.2\" y=\"-0.462\" fill=\"#FFFFFF\" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.3.0.0.0.0\"  height=\"3.458\" id=\"_x30_.1.12.0.0.0.0.3.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 25.4284 -22.901)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.4.0.0.0\"  id=\"_x30_.1.12.0.0.0.0.4\">\n                                                                    <rect width=\"0.146\" x=\"24.094\" opacity=\"0.2\" y=\"-0.462\" fill=\"#FFFFFF\" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.4.0.0.0.0\"  height=\"3.459\" id=\"_x30_.1.12.0.0.0.0.4.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 18.8732 -16.3468)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.5.0.0.0\"  id=\"_x30_.1.12.0.0.0.0.5\">\n                                                                    <rect width=\"0.146\" x=\"17.539\" opacity=\"0.2\" y=\"-0.461\" fill=\"#FFFFFF\" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.5.0.0.0.0\"  height=\"3.455\" id=\"_x30_.1.12.0.0.0.0.5.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 42.8349 -5.4926)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.6.0.0.0\"  id=\"_x30_.1.12.0.0.0.0.6\">\n                                                                    <rect width=\"5.285\" x=\"21.523\" y=\"13.571\" fill=\"#999999\" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.6.0.0.0.0\"  height=\"10.207\" id=\"_x30_.1.12.0.0.0.0.6.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 45.3969 -2.9306)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.7.0.0.0\"  id=\"_x30_.1.12.0.0.0.0.7\">\n                                                                    <rect width=\"0.161\" x=\"24.085\" opacity=\"0.2\" y=\"16.133\" fill=\"#FFFFFF\" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.7.0.0.0.0\"  height=\"10.207\" id=\"_x30_.1.12.0.0.0.0.7.0\" enable-background=\"new    \"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g  transform=\"matrix(2.578893e-006 1 -1 2.578893e-006 35.224 -13.1073)\">\n                                                        <g >\n                                                            <g >\n                                                                <g gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.8.0.0.0\"  id=\"_x30_.1.12.0.0.0.0.8\">\n                                                                    <rect width=\"9.943\" x=\"19.196\" y=\"1.482\" fill=\"#303030\" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.8.0.0.0.0\"  height=\"19.16\" id=\"_x30_.1.12.0.0.0.0.8.0\"/>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <polygon fill=\"#1F1F1F\" points=\"33.744,16.031 14.582,16.031 15.301,15.31 33.021,15.31 \" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.9\"  id=\"_x30_.1.12.0.0.0.0.9\"/>\n                                                    <polygon fill=\"#1F1F1F\" points=\"33.744,6.088 14.582,6.088 15.301,6.811 33.021,6.811 \" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.10\"  id=\"_x30_.1.12.0.0.0.0.10\"/>\n                                                    <polygon points=\"33.744,16.031 33.744,6.088 33.021,6.811 33.021,15.31 \" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.11\"  id=\"_x30_.1.12.0.0.0.0.11\"/>\n                                                    <polygon fill=\"#3D3D3D\" points=\"14.582,16.031 14.582,6.088 15.301,6.811 15.301,15.31 \" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.12\"  id=\"_x30_.1.12.0.0.0.0.12\"/>\n                                                    <circle fill=\"#1F1F1F\" cx=\"31.582\" gorn=\"0.2.12.0.0.0.0.0.0.0.0.0.0.13\"  cy=\"8.251\" id=\"_x30_.1.12.0.0.0.0.13\" r=\"0.72\"/>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, -3.65847, 104.535)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.13.0.0.0\"  id=\"_x30_.1.13\">\n                        <g gorn=\"0.2.13.0.0.0.0\"  id=\"powersupply_dc-21mm\">\n                            <g  transform=\"matrix(0, 1, -1, 0, 32.3005, 6.84151)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.13.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.13.0.0\">\n                                            <g gorn=\"0.2.13.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.13.0.0.0\">\n                                                <g  transform=\"matrix(1, 0, 0, 1, 16.998, 98.8718)\">\n                                                    <g >\n                                                        <g >\n                                                            <g gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.13.0.0.0.0\">\n                                                                <g gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"dc-21mm\">\n                                                                    <g  transform=\"matrix(0, 1, -1, 0, 38.6844, 13.1725)\">\n                                                                        <g >\n                                                                            <g >\n                                                                                <g gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.13.0.0.0.0.0.0\">\n                                                                                    <g gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.13.0.0.0.0.0.0.0\">\n                                                                                        <g gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.13.0.0.0.0.0.0.0.0\">\n                                                                                            <g gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.13.0.0.0.0.0.0.0.0.0\">\n                                                                                                <rect width=\"32.972\" x=\"-134.003\" y=\"26.131\" fill=\"#232323\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0\"  height=\"23.732\" id=\"_x30_.1.13.0.0.0.0.0.0.0.0.0.0\"/>\n                                                                                                <rect width=\"31.937\" x=\"-133.572\" y=\"47.644\" fill=\"#494949\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1\"  height=\"1.646\" id=\"_x30_.1.13.0.0.0.0.0.0.0.0.0.1\"/>\n                                                                                                <rect width=\"31.936\" x=\"-133.57\" y=\"42.273\" fill=\"#3D3D3D\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.2\"  height=\"5.369\" fill-opacity=\"0.3\" id=\"_x30_.1.13.0.0.0.0.0.0.0.0.0.2\"/>\n                                                                                                <rect width=\"32.973\" x=\"-133.572\" y=\"26.648\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3\"  height=\"1.619\" id=\"_x30_.1.13.0.0.0.0.0.0.0.0.0.3\"/>\n                                                                                                <rect width=\"32.973\" x=\"-133.572\" y=\"28.221\" fill=\"#0F0F0F\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4\"  height=\"5.826\" fill-opacity=\"0.4\" id=\"_x30_.1.13.0.0.0.0.0.0.0.0.0.4\"/>\n                                                                                            </g>\n                                                                                            <rect width=\"0.592\" x=\"-134.003\" opacity=\"0.2\" y=\"26.133\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1\"  height=\"23.73\" id=\"_x30_.1.13.0.0.0.0.0.0.0.0.1\" enable-background=\"new    \"/>\n                                                                                        </g>\n                                                                                        <line opacity=\"0.5\" fill=\"none\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1\"  stroke=\"#000000\" id=\"_x30_.1.13.0.0.0.0.0.0.0.1\" enable-background=\"new    \" y1=\"26.131\" stroke-width=\"0.25\" x1=\"-131.193\" y2=\"49.863\" x2=\"-131.193\" stroke-miterlimit=\"10\"/>\n                                                                                        <g gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.2\"  id=\"_x30_.1.13.0.0.0.0.0.0.0.2\">\n                                                                                            <rect width=\"1.287\" x=\"-104.529\" opacity=\"0.25\" y=\"26.109\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.2.0\"  height=\"23.729\" id=\"_x30_.1.13.0.0.0.0.0.0.0.2.0\" enable-background=\"new    \"/>\n                                                                                            <path opacity=\"0.25\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.2.1\"  stroke=\"#565656\" id=\"_x30_.1.13.0.0.0.0.0.0.0.2.1\" enable-background=\"new    \" stroke-width=\"0.25\" d=\"M-103.525,45.54V30.46h-13.296c-4.166,0-7.541,3.375-7.541,7.541c0,4.164,3.375,7.541,7.541,7.541L-103.525,45.54L-103.525,45.54z\" stroke-miterlimit=\"10\"/>\n                                                                                        </g>\n                                                                                        <g gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3\"  id=\"_x30_.1.13.0.0.0.0.0.0.0.3\">\n                                                                                            <path fill=\"#232323\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.0\"  id=\"_x30_.1.13.0.0.0.0.0.0.0.3.0\" d=\"M-103.525,45.54V30.46h-13.296c-4.166,0-7.541,3.375-7.541,7.541c0,4.164,3.375,7.541,7.541,7.541L-103.525,45.54L-103.525,45.54z\"/>\n                                                                                            <rect width=\"7.688\" x=\"-104.251\" y=\"25.242\" fill=\"#232323\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.3.1\"  height=\"25.514\" id=\"_x30_.1.13.0.0.0.0.0.0.0.3.1\"/>\n                                                                                        </g>\n                                                                                        <rect width=\"1.701\" x=\"-135.705\" y=\"35.142\" fill=\"#6D6D6D\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.4\"  height=\"5.713\" id=\"_x30_.1.13.0.0.0.0.0.0.0.4\"/>\n                                                                                        <rect width=\"0.976\" x=\"-134.977\" y=\"32.387\" fill=\"#494949\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.5\"  height=\"11.226\" id=\"_x30_.1.13.0.0.0.0.0.0.0.5\"/>\n                                                                                        <rect width=\"6.266\" x=\"-103.524\" y=\"49.291\" fill=\"#494949\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.6\"  height=\"1.051\" id=\"_x30_.1.13.0.0.0.0.0.0.0.6\"/>\n                                                                                        <rect width=\"6.267\" x=\"-103.524\" y=\"25.603\" gorn=\"0.2.13.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.7\"  height=\"1.051\" id=\"_x30_.1.13.0.0.0.0.0.0.0.7\"/>\n                                                                                    </g>\n                                                                                </g>\n                                                                            </g>\n                                                                        </g>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 3.4818, 23.55)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.14.0.0.0\"  id=\"_x30_.1.14\">\n                        <g gorn=\"0.2.14.0.0.0.0\"  id=\"pn61729\">\n                            <g  transform=\"matrix(0, -1, 1, 0, 1.809, 42.439)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.14.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.14.0.0\">\n                                            <g gorn=\"0.2.14.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.14.0.0.0\">\n                                                <g gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.14.0.0.0.0\">\n                                                    <g gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.14.0.0.0.0.0\">\n                                                        <path fill=\"#999999\" gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.14.0.0.0.0.0.0\" d=\"M43.103,14.31v2.956h-2.039h-2.035l-0.002-2.956v-1.928h3.17c0.502,0,0.908,0.406,0.908,0.907C43.105,13.289,43.105,14.31,43.103,14.31z\"/>\n                                                        <path fill=\"#808080\" gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.0.1\"  id=\"_x30_.1.14.0.0.0.0.0.1\" d=\"M43.103,13.189h-4.076v-0.807c0,0,3.049,0,3.318,0C42.748,12.382,43.103,12.942,43.103,13.189z\"/>\n                                                    </g>\n                                                    <g gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.1\"  id=\"_x30_.1.14.0.0.0.0.1\">\n                                                        <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 1.9763 43.6033)\">\n                                                            <g >\n                                                                <g >\n                                                                    <g gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.1.0.0.0.0\"  id=\"_x30_.1.14.0.0.0.0.1.0\">\n                                                                        <rect width=\"36.682\" x=\"4.451\" y=\"4.577\" fill=\"#B3B3B3\" gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.1.0.0.0.0.0\"  height=\"32.479\" id=\"_x30_.1.14.0.0.0.0.1.0.0\"/>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                        <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 24.0981 21.481)\">\n                                                            <g >\n                                                                <g >\n                                                                    <g gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.1.1.0.0.0\"  id=\"_x30_.1.14.0.0.0.0.1.1\">\n                                                                        <rect width=\"7.565\" x=\"19.009\" y=\"-17.546\" fill=\"#999999\" gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.1.1.0.0.0.0\"  height=\"32.479\" id=\"_x30_.1.14.0.0.0.0.1.1.0\"/>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                        <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -9.4585 24.6065)\">\n                                                            <g >\n                                                                <g >\n                                                                    <g gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.1.2.0.0.0\"  id=\"_x30_.1.14.0.0.0.0.1.2\">\n                                                                        <rect width=\"44.247\" x=\"-14.548\" opacity=\"0.5\" y=\"16.012\" fill=\"#CCCCCC\" gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.1.2.0.0.0.0\"  height=\"2.046\" id=\"_x30_.1.14.0.0.0.0.1.2.0\" enable-background=\"new    \"/>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                        <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 20.9742 55.0381)\">\n                                                            <g >\n                                                                <g >\n                                                                    <g gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.1.3.0.0.0\"  id=\"_x30_.1.14.0.0.0.0.1.3\">\n                                                                        <rect width=\"44.247\" x=\"15.885\" opacity=\"0.2\" y=\"16.011\" gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.1.3.0.0.0.0\"  height=\"2.047\" id=\"_x30_.1.14.0.0.0.0.1.3.0\" enable-background=\"new    \"/>\n                                                                    </g>\n                                                                </g>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                    <g gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.2\"  id=\"_x30_.1.14.0.0.0.0.2\">\n                                                        <path fill=\"#B3B3B3\" gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.2.0\"  id=\"_x30_.1.14.0.0.0.0.2.0\" d=\"M2.476,14.308v2.956h2.039h2.038v-2.956V12.38H3.381c-0.502,0-0.905,0.406-0.905,0.907V14.308z\"/>\n                                                        <path fill=\"#E6E6E6\" gorn=\"0.2.14.0.0.0.0.0.0.0.0.0.0.2.1\"  id=\"_x30_.1.14.0.0.0.0.2.1\" d=\"M2.476,13.187h4.077V12.38c0,0-3.051,0-3.319,0C2.83,12.38,2.476,12.94,2.476,13.187z\"/>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 8.7817, 8.95615)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.15.0.0.0\"  id=\"_x30_.1.15\">\n                        <g gorn=\"0.2.15.0.0.0.0\"  id=\"smd_157sw\">\n                            <g  transform=\"matrix(0, -1, 1, 0, 0.777996, 13.82)\">\n                                <g >\n                                    <g >\n                                        <g gorn=\"0.2.15.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.15.0.0\">\n                                            <g gorn=\"0.2.15.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.15.0.0.0\">\n                                                <polygon fill=\"#CCCCCC\" points=\"3.229,21.262 3.597,21.262 3.597,29.526 3.229,29.526 3.229,35.772 19.208,35.772 19.208,15.015 3.229,15.015 \" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.0\"  id=\"_x30_.1.15.0.0.0.0\"/>\n                                                <polygon fill=\"#CCCCCC\" points=\"21.768,29.526 21.399,29.526 21.399,21.262 21.768,21.262 21.768,15.015 5.908,15.015 5.908,35.772 21.768,35.772 \" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.1\"  id=\"_x30_.1.15.0.0.0.1\"/>\n                                                <circle fill=\"#641D1C\" cx=\"12.496\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.2\"  cy=\"25.395\" id=\"_x30_.1.15.0.0.0.2\" r=\"5.117\"/>\n                                                <path opacity=\"0.2\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.3\"  id=\"_x30_.1.15.0.0.0.3\" enable-background=\"new    \" d=\"M12.746,30.51c2.827,0,5.118-2.289,5.118-5.114c0-2.826-2.289-5.12-5.118-5.12h-0.249c2.827,0,5.118,2.292,5.118,5.12c0,2.825-2.291,5.114-5.118,5.114H12.746z\"/>\n                                                <circle fill=\"#852725\" cx=\"12.497\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.4\"  cy=\"25.395\" id=\"_x30_.1.15.0.0.0.4\" r=\"4.93\"/>\n                                                <circle fill=\"#852725\" cx=\"12.381\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.5\"  cy=\"25.395\" id=\"_x30_.1.15.0.0.0.5\" r=\"4.929\"/>\n                                                <g gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.6\"  id=\"_x30_.1.15.0.0.0.6\">\n                                                    <path opacity=\"0.1\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.6.0\"  id=\"_x30_.1.15.0.0.0.6.0\" enable-background=\"new    \" d=\"M7.568,25.512c0,2.724,2.206,4.931,4.931,4.931c2.724,0,4.929-2.207,4.929-4.931v-0.233c0,2.724-2.208,4.931-4.929,4.931c-2.725,0-4.931-2.207-4.931-4.931V25.512z\"/>\n                                                    <path opacity=\"0.2\" fill=\"#FFFFFF\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.6.1\"  id=\"_x30_.1.15.0.0.0.6.1\" enable-background=\"new    \" d=\"M17.427,25.512c0-2.725-2.208-4.93-4.929-4.93c-2.725,0-4.931,2.205-4.931,4.93v-0.233c0-2.724,2.206-4.931,4.931-4.931c2.724,0,4.929,2.207,4.929,4.931V25.512z\"/>\n                                                </g>\n                                                <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -14.7248 21.5506)\">\n                                                    <g >\n                                                        <g >\n                                                            <g gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.7.0.0.0\"  id=\"_x30_.1.15.0.0.0.7\">\n                                                                <rect width=\"6.248\" x=\"0.291\" opacity=\"0.2\" y=\"17.954\" fill=\"#FFFFFF\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.7.0.0.0.0\"  height=\"0.371\" id=\"_x30_.1.15.0.0.0.7.0\" enable-background=\"new    \"/>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                                <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -29.2355 36.0623)\">\n                                                    <g >\n                                                        <g >\n                                                            <g gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.8.0.0.0\"  id=\"_x30_.1.15.0.0.0.8\">\n                                                                <rect width=\"6.244\" x=\"0.293\" opacity=\"0.2\" y=\"32.465\" fill=\"#FFFFFF\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.8.0.0.0.0\"  height=\"0.371\" id=\"_x30_.1.15.0.0.0.8.0\" enable-background=\"new    \"/>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                                <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -21.6146 29.1724)\">\n                                                    <g >\n                                                        <g >\n                                                            <g gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.9.0.0.0\"  id=\"_x30_.1.15.0.0.0.9\">\n                                                                <rect width=\"8.266\" x=\"-0.352\" opacity=\"0.2\" y=\"25.212\" fill=\"#FFFFFF\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.9.0.0.0.0\"  height=\"0.368\" id=\"_x30_.1.15.0.0.0.9.0\" enable-background=\"new    \"/>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                                <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 3.4298 39.7056)\">\n                                                    <g >\n                                                        <g >\n                                                            <g gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.10.0.0.0\"  id=\"_x30_.1.15.0.0.0.10\">\n                                                                <rect width=\"6.248\" x=\"18.446\" opacity=\"0.2\" y=\"17.957\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.10.0.0.0.0\"  height=\"0.368\" id=\"_x30_.1.15.0.0.0.10.0\" enable-background=\"new    \"/>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                                <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -11.0816 54.2142)\">\n                                                    <g >\n                                                        <g >\n                                                            <g gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.11.0.0.0\"  id=\"_x30_.1.15.0.0.0.11\">\n                                                                <rect width=\"6.244\" x=\"18.446\" opacity=\"0.2\" y=\"32.465\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.11.0.0.0.0\"  height=\"0.369\" id=\"_x30_.1.15.0.0.0.11.0\" enable-background=\"new    \"/>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                                <g  transform=\"matrix(-2.547107e-006 -1 1 -2.547107e-006 -4.1966 46.5918)\">\n                                                    <g >\n                                                        <g >\n                                                            <g gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.12.0.0.0\"  id=\"_x30_.1.15.0.0.0.12\">\n                                                                <rect width=\"8.267\" x=\"17.066\" opacity=\"0.2\" y=\"25.212\" gorn=\"0.2.15.0.0.0.0.0.0.0.0.0.12.0.0.0.0\"  height=\"0.369\" id=\"_x30_.1.15.0.0.0.12.0\" enable-background=\"new    \"/>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                            <g gorn=\"0.2.15.0.0.0.0.1\"  id=\"_x30_.1.15.0.1\">\n                                <rect width=\"2.75\" x=\"36.573\" y=\"6.322\" fill=\"#E6E6E6\" gorn=\"0.2.15.0.0.0.0.1.0\"  height=\"2.251\" id=\"_x30_.1.15.0.1.0\"/>\n                                <rect width=\"2.75\" x=\"36.573\" y=\"-5.929\" fill=\"#E6E6E6\" gorn=\"0.2.15.0.0.0.0.1.1\"  height=\"2.252\" id=\"_x30_.1.15.0.1.1\"/>\n                                <rect width=\"2.75\" x=\"13.198\" y=\"-0.47\" fill=\"#E6E6E6\" gorn=\"0.2.15.0.0.0.0.1.2\"  height=\"3.417\" id=\"_x30_.1.15.0.1.2\"/>\n                                <rect width=\"2.75\" x=\"13.198\" y=\"6.322\" fill=\"#E6E6E6\" gorn=\"0.2.15.0.0.0.0.1.3\"  height=\"2.251\" id=\"_x30_.1.15.0.1.3\"/>\n                                <rect width=\"2.75\" x=\"13.198\" y=\"-5.929\" fill=\"#E6E6E6\" gorn=\"0.2.15.0.0.0.0.1.4\"  height=\"2.252\" id=\"_x30_.1.15.0.1.4\"/>\n                                <rect width=\"0.334\" x=\"13.198\" opacity=\"0.2\" y=\"-0.47\" fill=\"#FFFFFF\" gorn=\"0.2.15.0.0.0.0.1.5\"  height=\"3.417\" id=\"_x30_.1.15.0.1.5\" enable-background=\"new    \"/>\n                                <rect width=\"0.334\" x=\"13.198\" opacity=\"0.2\" y=\"6.322\" fill=\"#FFFFFF\" gorn=\"0.2.15.0.0.0.0.1.6\"  height=\"2.251\" id=\"_x30_.1.15.0.1.6\" enable-background=\"new    \"/>\n                                <rect width=\"0.334\" x=\"13.198\" opacity=\"0.2\" y=\"-5.929\" fill=\"#FFFFFF\" gorn=\"0.2.15.0.0.0.0.1.7\"  height=\"2.252\" id=\"_x30_.1.15.0.1.7\" enable-background=\"new    \"/>\n                                <rect width=\"0.104\" x=\"39.263\" opacity=\"0.2\" y=\"6.303\" gorn=\"0.2.15.0.0.0.0.1.8\"  height=\"2.251\" id=\"_x30_.1.15.0.1.8\" enable-background=\"new    \"/>\n                                <rect width=\"0.104\" x=\"39.263\" opacity=\"0.2\" y=\"-5.948\" gorn=\"0.2.15.0.0.0.0.1.9\"  height=\"2.252\" id=\"_x30_.1.15.0.1.9\" enable-background=\"new    \"/>\n                                <rect width=\"0.334\" x=\"36.589\" opacity=\"0.1\" y=\"6.335\" gorn=\"0.2.15.0.0.0.0.1.10\"  height=\"2.251\" id=\"_x30_.1.15.0.1.10\" enable-background=\"new    \"/>\n                                <rect width=\"0.334\" x=\"36.589\" opacity=\"0.1\" y=\"-5.916\" gorn=\"0.2.15.0.0.0.0.1.11\"  height=\"2.252\" id=\"_x30_.1.15.0.1.11\" enable-background=\"new    \"/>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g gorn=\"0.2.16\"  id=\"_x30_.1.16\">\n            <title  id=\"0.1.16.0\">text:RESET</title>\n            <g  transform=\"matrix(1 0 0 1 27.4678 23.4009)\">\n                <g >\n                    <g >\n                        <g gorn=\"0.2.16.1.0.0.0\"  id=\"_x30_.1.16.1\">\n                            <g  transform=\"matrix(1 0 0 1 -9.155273e-005 -6.103516e-005)\">\n                                <g >\n                                    <g >\n                                        <text fill=\"#FFFFFF\" font-family=\"'OCRA'\" gorn=\"0.2.16.1.0.0.0.0.0.0.0\"  id=\"_x30_.1.16.1.0\" font-size=\"4.176\">RESET</text>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g  transform=\"matrix(1, 0, 0, 1, 67.6403, 3.60123)\">\n            <g >\n                <g >\n                    <g gorn=\"0.2.17.0.0.0\"  id=\"_x30_.1.17\">\n                        <g gorn=\"0.2.17.0.0.0.0\"  id=\"_x31_x10\">\n                            <rect width=\"72\" x=\"-0.049\" y=\"-0.001\" fill=\"#404040\" gorn=\"0.2.17.0.0.0.0.0\"  height=\"7.199\" id=\"_x30_.1.17.0.0\"/>\n                            <rect width=\"2.779\" x=\"2.162\" y=\"2.208\" gorn=\"0.2.17.0.0.0.0.1\"  height=\"2.782\" id=\"_x30_.1.17.0.1\"/>\n                            <polygon fill=\"#2A2A29\" points=\"1.137,1.183 2.16,2.208 4.943,2.208 5.969,1.183 \" gorn=\"0.2.17.0.0.0.0.2\"  id=\"_x30_.1.17.0.2\"/>\n                            <polygon fill=\"#474747\" points=\"5.969,1.183 4.943,2.211 4.943,4.992 5.969,6.015 \" gorn=\"0.2.17.0.0.0.0.3\"  id=\"_x30_.1.17.0.3\"/>\n                            <polygon fill=\"#595959\" points=\"5.969,6.015 4.943,4.992 2.16,4.992 1.137,6.015 \" gorn=\"0.2.17.0.0.0.0.4\"  id=\"_x30_.1.17.0.4\"/>\n                            <polygon fill=\"#373737\" points=\"1.135,6.015 2.16,4.99 2.16,2.208 1.135,1.183 \" gorn=\"0.2.17.0.0.0.0.5\"  id=\"_x30_.1.17.0.5\"/>\n                            <rect width=\"2.781\" x=\"9.363\" y=\"2.208\" gorn=\"0.2.17.0.0.0.0.6\"  height=\"2.782\" id=\"_x30_.1.17.0.6\"/>\n                            <polygon fill=\"#2A2A29\" points=\"8.336,1.183 9.359,2.208 12.142,2.208 13.168,1.183 \" gorn=\"0.2.17.0.0.0.0.7\"  id=\"_x30_.1.17.0.7\"/>\n                            <polygon fill=\"#474747\" points=\"13.168,1.183 12.142,2.211 12.142,4.992 13.168,6.015 \" gorn=\"0.2.17.0.0.0.0.8\"  id=\"_x30_.1.17.0.8\"/>\n                            <polygon fill=\"#595959\" points=\"13.168,6.015 12.14,4.992 9.359,4.992 8.336,6.015 \" gorn=\"0.2.17.0.0.0.0.9\"  id=\"_x30_.1.17.0.9\"/>\n                            <polygon fill=\"#373737\" points=\"8.334,6.015 9.359,4.99 9.359,2.208 8.334,1.183 \" gorn=\"0.2.17.0.0.0.0.10\"  id=\"_x30_.1.17.0.10\"/>\n                            <rect width=\"2.779\" x=\"16.562\" y=\"2.208\" gorn=\"0.2.17.0.0.0.0.11\"  height=\"2.782\" id=\"_x30_.1.17.0.11\"/>\n                            <polygon fill=\"#2A2A29\" points=\"15.535,1.183 16.558,2.208 19.344,2.208 20.369,1.183 \" gorn=\"0.2.17.0.0.0.0.12\"  id=\"_x30_.1.17.0.12\"/>\n                            <polygon fill=\"#474747\" points=\"20.369,1.183 19.344,2.211 19.344,4.992 20.369,6.015 \" gorn=\"0.2.17.0.0.0.0.13\"  id=\"_x30_.1.17.0.13\"/>\n                            <polygon fill=\"#595959\" points=\"20.367,6.015 19.344,4.992 16.558,4.992 15.535,6.015 \" gorn=\"0.2.17.0.0.0.0.14\"  id=\"_x30_.1.17.0.14\"/>\n                            <polygon fill=\"#373737\" points=\"15.535,6.015 16.558,4.99 16.558,2.208 15.535,1.183 \" gorn=\"0.2.17.0.0.0.0.15\"  id=\"_x30_.1.17.0.15\"/>\n                            <rect width=\"2.781\" x=\"23.763\" y=\"2.208\" gorn=\"0.2.17.0.0.0.0.16\"  height=\"2.782\" id=\"_x30_.1.17.0.16\"/>\n                            <polygon fill=\"#2A2A29\" points=\"22.736,1.183 23.762,2.208 26.545,2.208 27.568,1.183 \" gorn=\"0.2.17.0.0.0.0.17\"  id=\"_x30_.1.17.0.17\"/>\n                            <polygon fill=\"#474747\" points=\"27.568,1.183 26.545,2.211 26.545,4.992 27.568,6.015 \" gorn=\"0.2.17.0.0.0.0.18\"  id=\"_x30_.1.17.0.18\"/>\n                            <polygon fill=\"#595959\" points=\"27.568,6.015 26.543,4.992 23.762,4.992 22.736,6.015 \" gorn=\"0.2.17.0.0.0.0.19\"  id=\"_x30_.1.17.0.19\"/>\n                            <polygon fill=\"#373737\" points=\"22.734,6.015 23.762,4.99 23.762,2.208 22.734,1.183 \" gorn=\"0.2.17.0.0.0.0.20\"  id=\"_x30_.1.17.0.20\"/>\n                            <rect width=\"2.779\" x=\"30.963\" y=\"2.208\" gorn=\"0.2.17.0.0.0.0.21\"  height=\"2.782\" id=\"_x30_.1.17.0.21\"/>\n                            <polygon fill=\"#2A2A29\" points=\"29.935,1.183 30.961,2.208 33.744,2.208 34.767,1.183 \" gorn=\"0.2.17.0.0.0.0.22\"  id=\"_x30_.1.17.0.22\"/>\n                            <polygon fill=\"#474747\" points=\"34.767,1.183 33.744,2.211 33.744,4.992 34.767,6.015 \" gorn=\"0.2.17.0.0.0.0.23\"  id=\"_x30_.1.17.0.23\"/>\n                            <polygon fill=\"#595959\" points=\"34.765,6.015 33.742,4.992 30.961,4.992 29.935,6.015 \" gorn=\"0.2.17.0.0.0.0.24\"  id=\"_x30_.1.17.0.24\"/>\n                            <polygon fill=\"#373737\" points=\"29.933,6.015 30.961,4.99 30.961,2.208 29.933,1.183 \" gorn=\"0.2.17.0.0.0.0.25\"  id=\"_x30_.1.17.0.25\"/>\n                            <rect width=\"2.779\" x=\"38.164\" y=\"2.208\" gorn=\"0.2.17.0.0.0.0.26\"  height=\"2.782\" id=\"_x30_.1.17.0.26\"/>\n                            <polygon fill=\"#2A2A29\" points=\"37.137,1.183 38.16,2.208 40.943,2.208 41.97,1.183 \" gorn=\"0.2.17.0.0.0.0.27\"  id=\"_x30_.1.17.0.27\"/>\n                            <polygon fill=\"#474747\" points=\"41.97,1.183 40.943,2.211 40.943,4.992 41.97,6.015 \" gorn=\"0.2.17.0.0.0.0.28\"  id=\"_x30_.1.17.0.28\"/>\n                            <polygon fill=\"#595959\" points=\"41.97,6.015 40.94,4.992 38.16,4.992 37.137,6.015 \" gorn=\"0.2.17.0.0.0.0.29\"  id=\"_x30_.1.17.0.29\"/>\n                            <polygon fill=\"#373737\" points=\"37.135,6.015 38.16,4.99 38.16,2.208 37.135,1.183 \" gorn=\"0.2.17.0.0.0.0.30\"  id=\"_x30_.1.17.0.30\"/>\n                            <rect width=\"2.78\" x=\"45.361\" y=\"2.208\" gorn=\"0.2.17.0.0.0.0.31\"  height=\"2.782\" id=\"_x30_.1.17.0.31\"/>\n                            <polygon fill=\"#2A2A29\" points=\"44.339,1.183 45.359,2.208 48.141,2.208 49.17,1.183 \" gorn=\"0.2.17.0.0.0.0.32\"  id=\"_x30_.1.17.0.32\"/>\n                            <polygon fill=\"#474747\" points=\"49.17,1.183 48.141,2.211 48.141,4.992 49.17,6.015 \" gorn=\"0.2.17.0.0.0.0.33\"  id=\"_x30_.1.17.0.33\"/>\n                            <polygon fill=\"#595959\" points=\"49.168,6.015 48.139,4.992 45.359,4.992 44.339,6.015 \" gorn=\"0.2.17.0.0.0.0.34\"  id=\"_x30_.1.17.0.34\"/>\n                            <polygon fill=\"#373737\" points=\"44.336,6.015 45.359,4.99 45.359,2.208 44.336,1.183 \" gorn=\"0.2.17.0.0.0.0.35\"  id=\"_x30_.1.17.0.35\"/>\n                            <rect width=\"2.779\" x=\"52.561\" y=\"2.208\" gorn=\"0.2.17.0.0.0.0.36\"  height=\"2.782\" id=\"_x30_.1.17.0.36\"/>\n                            <polygon fill=\"#2A2A29\" points=\"51.535,1.183 52.557,2.208 55.345,2.208 56.367,1.183 \" gorn=\"0.2.17.0.0.0.0.37\"  id=\"_x30_.1.17.0.37\"/>\n                            <polygon fill=\"#474747\" points=\"56.367,1.183 55.345,2.211 55.345,4.992 56.367,6.015 \" gorn=\"0.2.17.0.0.0.0.38\"  id=\"_x30_.1.17.0.38\"/>\n                            <polygon fill=\"#595959\" points=\"56.367,6.015 55.345,4.992 52.557,4.992 51.535,6.015 \" gorn=\"0.2.17.0.0.0.0.39\"  id=\"_x30_.1.17.0.39\"/>\n                            <polygon fill=\"#373737\" points=\"51.533,6.015 52.557,4.99 52.557,2.208 51.533,1.183 \" gorn=\"0.2.17.0.0.0.0.40\"  id=\"_x30_.1.17.0.40\"/>\n                            <rect width=\"2.78\" x=\"59.762\" y=\"2.208\" gorn=\"0.2.17.0.0.0.0.41\"  height=\"2.782\" id=\"_x30_.1.17.0.41\"/>\n                            <polygon fill=\"#2A2A29\" points=\"58.736,1.183 59.762,2.208 62.546,2.208 63.568,1.183 \" gorn=\"0.2.17.0.0.0.0.42\"  id=\"_x30_.1.17.0.42\"/>\n                            <polygon fill=\"#474747\" points=\"63.568,1.183 62.546,2.211 62.546,4.992 63.568,6.015 \" gorn=\"0.2.17.0.0.0.0.43\"  id=\"_x30_.1.17.0.43\"/>\n                            <polygon fill=\"#595959\" points=\"63.565,6.015 62.543,4.992 59.762,4.992 58.736,6.015 \" gorn=\"0.2.17.0.0.0.0.44\"  id=\"_x30_.1.17.0.44\"/>\n                            <polygon fill=\"#373737\" points=\"58.734,6.015 59.762,4.99 59.762,2.208 58.734,1.183 \" gorn=\"0.2.17.0.0.0.0.45\"  id=\"_x30_.1.17.0.45\"/>\n                            <rect width=\"2.778\" x=\"66.964\" y=\"2.208\" gorn=\"0.2.17.0.0.0.0.46\"  height=\"2.782\" id=\"_x30_.1.17.0.46\"/>\n                            <polygon fill=\"#2A2A29\" points=\"65.934,1.183 66.961,2.208 69.742,2.208 70.766,1.183 \" gorn=\"0.2.17.0.0.0.0.47\"  id=\"_x30_.1.17.0.47\"/>\n                            <polygon fill=\"#474747\" points=\"70.766,1.183 69.742,2.211 69.742,4.992 70.766,6.015 \" gorn=\"0.2.17.0.0.0.0.48\"  id=\"_x30_.1.17.0.48\"/>\n                            <polygon fill=\"#595959\" points=\"70.764,6.015 69.742,4.992 66.961,4.992 65.934,6.015 \" gorn=\"0.2.17.0.0.0.0.49\"  id=\"_x30_.1.17.0.49\"/>\n                            <polygon fill=\"#373737\" points=\"65.932,6.015 66.961,4.99 66.961,2.208 65.932,1.183 \" gorn=\"0.2.17.0.0.0.0.50\"  id=\"_x30_.1.17.0.50\"/>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>";

	var arduino = {
	  name: 'arduino',
	  image: image,
	  type: 'robot_board',
	  ports: [{
	    name: 'SCL',
	    position: {
	      x: 68.75,
	      y: 4.88
	    }
	  }, {
	    name: 'SDA',
	    position: {
	      x: 75.81,
	      y: 4.88
	    }
	  }, {
	    name: 'AREF',
	    position: {
	      x: 82.87,
	      y: 4.88
	    }
	  }, {
	    name: 'GND',
	    position: {
	      x: 89.93,
	      y: 4.88
	    }
	  }, {
	    name: '13',
	    position: {
	      x: 96.99,
	      y: 4.88
	    }
	  }, {
	    name: '12',
	    position: {
	      x: 104.05,
	      y: 4.88
	    }
	  }, {
	    name: '11',
	    position: {
	      x: 111.11,
	      y: 4.88
	    }
	  }, {
	    name: '10',
	    position: {
	      x: 118.17,
	      y: 4.88
	    }
	  }, {
	    name: '9',
	    position: {
	      x: 125.23,
	      y: 4.88
	    }
	  }, {
	    name: '8',
	    position: {
	      x: 132.29,
	      y: 4.88
	    }
	  }, {
	    name: '7',
	    position: {
	      x: 145.36,
	      y: 4.88
	    }
	  }, {
	    name: '6',
	    position: {
	      x: 152.42,
	      y: 4.88
	    }
	  }, {
	    name: '5',
	    position: {
	      x: 159.48,
	      y: 4.88
	    }
	  }, {
	    name: '4',
	    position: {
	      x: 166.54,
	      y: 4.88
	    }
	  }, {
	    name: '3',
	    position: {
	      x: 173.6,
	      y: 4.88
	    }
	  }, {
	    name: '2',
	    position: {
	      x: 180.66,
	      y: 4.88
	    }
	  }, {
	    name: '1',
	    position: {
	      x: 187.72,
	      y: 4.88
	    }
	  }, {
	    name: '0',
	    position: {
	      x: 194.78,
	      y: 4.88
	    }
	  }, {
	    name: 'NOTUSER',
	    position: {
	      x: 96.99,
	      y: 141.97
	    }
	  }, {
	    name: 'IOREF',
	    position: {
	      x: 104.05,
	      y: 141.97
	    }
	  }, {
	    name: 'RESET',
	    position: {
	      x: 111.11,
	      y: 141.97
	    }
	  }, {
	    name: '3,3V',
	    position: {
	      x: 118.17,
	      y: 141.97
	    }
	  }, {
	    name: '5V',
	    position: {
	      x: 125.23,
	      y: 141.97
	    }
	  }, {
	    name: 'GND',
	    position: {
	      x: 132.29,
	      y: 141.97
	    }
	  }, {
	    name: 'GND',
	    position: {
	      x: 139.35,
	      y: 141.97
	    }
	  }, {
	    name: 'Vin',
	    position: {
	      x: 146.41,
	      y: 141.97
	    }
	  }, {
	    name: 'A5',
	    position: {
	      x: 159.48,
	      y: 141.97
	    }
	  }, {
	    name: 'A4',
	    position: {
	      x: 166.54,
	      y: 141.97
	    }
	  }, {
	    name: 'A3',
	    position: {
	      x: 173.6,
	      y: 141.97
	    }
	  }, {
	    name: 'A2',
	    position: {
	      x: 180.66,
	      y: 141.97
	    }
	  }, {
	    name: 'A1',
	    position: {
	      x: 187.72,
	      y: 141.97
	    }
	  }, {
	    name: 'A0',
	    position: {
	      x: 194.78,
	      y: 141.97
	    }
	  }]
	};

	var slice = [].slice;
	var factories = {};

	var construct = function (C, argsLength, args) {
	  if (!(argsLength in factories)) {
	    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
	  } return factories[argsLength](C, args);
	};

	// `Function.prototype.bind` method implementation
	// https://tc39.github.io/ecma262/#sec-function.prototype.bind
	var functionBind = Function.bind || function bind(that /* , ...args */) {
	  var fn = aFunction(this);
	  var partArgs = slice.call(arguments, 1);
	  var boundFunction = function bound(/* args... */) {
	    var args = partArgs.concat(slice.call(arguments));
	    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
	  };
	  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
	  return boundFunction;
	};

	// `Function.prototype.bind` method
	// https://tc39.github.io/ecma262/#sec-function.prototype.bind
	_export({ target: 'Function', proto: true }, {
	  bind: functionBind
	});

	var bind$1 = entryVirtual('Function').bind;

	var FunctionPrototype = Function.prototype;

	var bind_1 = function (it) {
	  var own = it.bind;
	  return it === FunctionPrototype || (it instanceof Function && own === FunctionPrototype.bind) ? bind$1 : own;
	};

	var bind$2 = bind_1;

	var bind$3 = bind$2;

	function parseSVG(data) {
	  var parser = new DOMParser();
	  var svg = parser.parseFromString(data, "image/svg+xml");
	  return svg.querySelector('g');
	}
	/**
	 * Create a new svg element
	 * @param {string} name 
	 * @param {Object<string, any>}} attrs
	 * @returns {SVGElement}
	 */

	function svg(name, attrs) {
	  var element = document.createElementNS('http://www.w3.org/2000/svg', name);

	  if (attrs) {
	    for (var attrName in attrs) {
	      var value = attrs[attrName];
	      element.setAttribute(attrName, value);
	    }
	  }

	  return element;
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	_export({ target: 'Object', stat: true, sham: !descriptors }, {
	  create: objectCreate
	});

	var Object$1 = path.Object;

	var create = function create(P, D) {
	  return Object$1.create(P, D);
	};

	var create$1 = create;

	var create$2 = create$1;

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	_export({ target: 'Object', stat: true }, {
	  setPrototypeOf: objectSetPrototypeOf
	});

	var setPrototypeOf = path.Object.setPrototypeOf;

	var setPrototypeOf$1 = setPrototypeOf;

	var setPrototypeOf$2 = setPrototypeOf$1;

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = setPrototypeOf$2 || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = create$2(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	var nativeConstruct = getBuiltIn('Reflect', 'construct');

	// `Reflect.construct` method
	// https://tc39.github.io/ecma262/#sec-reflect.construct
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() { /* empty */ }
	  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  nativeConstruct(function () { /* empty */ });
	});
	var FORCED$4 = NEW_TARGET_BUG || ARGS_BUG;

	_export({ target: 'Reflect', stat: true, forced: FORCED$4, sham: FORCED$4 }, {
	  construct: function construct(Target, args /* , newTarget */) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (functionBind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = objectCreate(isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

	var construct$1 = path.Reflect.construct;

	var construct$2 = construct$1;

	var construct$3 = construct$2;

	var FAILS_ON_PRIMITIVES$2 = fails(function () { objectGetPrototypeOf(1); });

	// `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof
	_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2, sham: !correctPrototypeGetter }, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return objectGetPrototypeOf(toObject(it));
	  }
	});

	var getPrototypeOf = path.Object.getPrototypeOf;

	var getPrototypeOf$1 = getPrototypeOf;

	var getPrototypeOf$2 = getPrototypeOf$1;

	function _getPrototypeOf(o) {
	  _getPrototypeOf = setPrototypeOf$2 ? getPrototypeOf$2 : function _getPrototypeOf(o) {
	    return o.__proto__ || getPrototypeOf$2(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !construct$3) return false;
	  if (construct$3.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Date.prototype.toString.call(construct$3(Date, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	// `Symbol.iterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol('iterator');

	var iterator = wellKnownSymbolWrapped.f('iterator');

	var iterator$1 = iterator;

	var iterator$2 = iterator$1;

	// `Symbol.asyncIterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
	defineWellKnownSymbol('asyncIterator');

	// `Symbol.hasInstance` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
	defineWellKnownSymbol('hasInstance');

	// `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
	defineWellKnownSymbol('isConcatSpreadable');

	// `Symbol.match` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.match
	defineWellKnownSymbol('match');

	// `Symbol.matchAll` well-known symbol
	defineWellKnownSymbol('matchAll');

	// `Symbol.replace` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.replace
	defineWellKnownSymbol('replace');

	// `Symbol.search` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.search
	defineWellKnownSymbol('search');

	// `Symbol.species` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.species
	defineWellKnownSymbol('species');

	// `Symbol.split` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.split
	defineWellKnownSymbol('split');

	// `Symbol.toPrimitive` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
	defineWellKnownSymbol('toPrimitive');

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol('toStringTag');

	// `Symbol.unscopables` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.unscopables
	defineWellKnownSymbol('unscopables');

	// Math[@@toStringTag] property
	// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
	setToStringTag(Math, 'Math', true);

	// JSON[@@toStringTag] property
	// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
	setToStringTag(global_1.JSON, 'JSON', true);

	var symbol = path.Symbol;

	// `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol('asyncDispose');

	// `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol('dispose');

	// `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable
	defineWellKnownSymbol('observable');

	// `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol('patternMatch');

	// TODO: remove from `core-js@4`


	defineWellKnownSymbol('replaceAll');

	// TODO: Remove from `core-js@4`


	var symbol$1 = symbol;

	var symbol$2 = symbol$1;

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof symbol$2 === "function" && typeof iterator$2 === "symbol") {
	    _typeof = function _typeof(obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function _typeof(obj) {
	      return obj && typeof symbol$2 === "function" && obj.constructor === symbol$2 && obj !== symbol$2.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();
	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;
	      result = construct$3(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn(this, result);
	  };
	}

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');
	var USES_TO_LENGTH$3 = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

	var SPECIES$5 = wellKnownSymbol('species');
	var nativeSlice = [].slice;
	var max$1 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$3 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = toLength(O.length);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES$5];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var slice$1 = entryVirtual('Array').slice;

	var ArrayPrototype$6 = Array.prototype;

	var slice_1 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$6 || (it instanceof Array && own === ArrayPrototype$6.slice) ? slice$1 : own;
	};

	var slice$2 = slice_1;

	var slice$3 = slice$2;

	var $findIndex = arrayIteration.findIndex;



	var FIND_INDEX = 'findIndex';
	var SKIPS_HOLES = true;

	var USES_TO_LENGTH$4 = arrayMethodUsesToLength(FIND_INDEX);

	// Shouldn't skip holes
	if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

	// `Array.prototype.findIndex` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
	_export({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH$4 }, {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var findIndex = entryVirtual('Array').findIndex;

	var ArrayPrototype$7 = Array.prototype;

	var findIndex_1 = function (it) {
	  var own = it.findIndex;
	  return it === ArrayPrototype$7 || (it instanceof Array && own === ArrayPrototype$7.findIndex) ? findIndex : own;
	};

	var findIndex$1 = findIndex_1;

	var findIndex$2 = findIndex$1;

	var ChangeNotifier = /*#__PURE__*/function () {
	  function ChangeNotifier() {
	    _classCallCheck(this, ChangeNotifier);

	    this.listeners = [];
	  }

	  _createClass(ChangeNotifier, [{
	    key: "hasListener",
	    value: function hasListener() {
	      return this.listeners.length > 0;
	    }
	  }, {
	    key: "addListener",
	    value: function addListener(listener) {
	      this.listeners.push(listener);
	    }
	  }, {
	    key: "removeListener",
	    value: function removeListener(listener) {
	      var _context;

	      var removeIndex = findIndex$2(_context = this.listeners).call(_context, function (lst) {
	        return listener === lst;
	      });

	      if (removeIndex !== -1) {
	        var _context2;

	        this.listeners = slice$3(_context2 = this.listeners).call(_context2, removeIndex, 1);
	      }
	    }
	  }, {
	    key: "notifyListeners",
	    value: function notifyListeners() {
	      if (this.hasListener) {
	        var _context3;

	        forEach$2(_context3 = this.listeners).call(_context3, function (listener) {
	          return listener();
	        });
	      }
	    }
	  }]);

	  return ChangeNotifier;
	}();

	var Port = /*#__PURE__*/function (_ChangeNotifier) {
	  _inherits(Port, _ChangeNotifier);

	  var _super = _createSuper(Port);

	  function Port(_ref) {
	    var _this;

	    var name = _ref.name,
	        position = _ref.position,
	        connectedTo = _ref.connectedTo,
	        isFixed = _ref.isFixed,
	        onClick = _ref.onClick,
	        component = _ref.component;

	    _classCallCheck(this, Port);

	    _this = _super.call(this);
	    _this.name = name;
	    _this.isFixed = isFixed;
	    _this.component = component;
	    _this._position = position;
	    _this.connectedTo = connectedTo;
	    _this.element = svg('rect', {
	      'width': 5,
	      'height': 5,
	      'fill': 'red',
	      'stroke': 'black',
	      'stroke-width': 1,
	      'x': position.x,
	      'y': position.y,
	      'r': 3,
	      'opacity': 0
	    });

	    _this.element.addEventListener('click', function () {
	      return onClick(_assertThisInitialized(_this));
	    });

	    _this.element.addEventListener('mouseover', function () {
	      return _this.element.setAttribute('opacity', '1');
	    });

	    _this.element.addEventListener('mouseout', function () {
	      return _this.element.setAttribute('opacity', '0');
	    }); //TODO: refactor to use vanilla js
	    //$(this.element).popover({ content: name, trigger: 'hover', placement: 'bottom' });


	    return _this;
	  }

	  _createClass(Port, [{
	    key: "center",
	    get: function get() {
	      return {
	        x: this._position.x + 2.5,
	        y: this._position.y + 2.5
	      };
	    }
	  }, {
	    key: "position",
	    set: function set(position) {
	      this._position = position;
	      this.element.setAttribute('x', position.x);
	      this.element.setAttribute('y', position.y);
	    },
	    get: function get() {
	      return this._position;
	    }
	  }]);

	  return Port;
	}(ChangeNotifier);

	// Unique ID creation requires a high quality random # generator. In the browser we therefore
	// require the crypto API and do not support built-in fallback to lower quality random number
	// generators (like Math.random()).
	// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
	// find the complete implementation of crypto (msCrypto) on IE11.
	var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
	var rnds8 = new Uint8Array(16);
	function rng() {
	  if (!getRandomValues) {
	    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
	  }

	  return getRandomValues(rnds8);
	}

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */
	var byteToHex = [];

	for (var i = 0; i < 256; ++i) {
	  byteToHex.push((i + 0x100).toString(16).substr(1));
	}

	function bytesToUuid(buf, offset_) {
	  var offset = offset_ || 0; // Note: Be careful editing this code!  It's been tuned for performance
	  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

	  return (byteToHex[buf[offset + 0]] + byteToHex[buf[offset + 1]] + byteToHex[buf[offset + 2]] + byteToHex[buf[offset + 3]] + '-' + byteToHex[buf[offset + 4]] + byteToHex[buf[offset + 5]] + '-' + byteToHex[buf[offset + 6]] + byteToHex[buf[offset + 7]] + '-' + byteToHex[buf[offset + 8]] + byteToHex[buf[offset + 9]] + '-' + byteToHex[buf[offset + 10]] + byteToHex[buf[offset + 11]] + byteToHex[buf[offset + 12]] + byteToHex[buf[offset + 13]] + byteToHex[buf[offset + 14]] + byteToHex[buf[offset + 15]]).toLowerCase();
	}

	function v4(options, buf, offset) {
	  options = options || {};
	  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

	  rnds[6] = rnds[6] & 0x0f | 0x40;
	  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

	  if (buf) {
	    offset = offset || 0;

	    for (var i = 0; i < 16; ++i) {
	      buf[offset + i] = rnds[i];
	    }

	    return buf;
	  }

	  return bytesToUuid(rnds);
	}

	var Wire = /*#__PURE__*/function () {
	  function Wire(_ref) {
	    var _this = this,
	        _context4;

	    var _origin = _ref.origin,
	        destination = _ref.destination;

	    _classCallCheck(this, Wire);

	    this.drawPath = function () {
	      var _context, _context2, _context3, _this$_origin$connect;

	      var origin = _this._origin.center;
	      var dest = _this._destination.center;

	      var path = concat$2(_context = concat$2(_context2 = concat$2(_context3 = "M ".concat(origin.x, " ")).call(_context3, origin.y, " L ")).call(_context2, dest.x, " ")).call(_context, dest.y);

	      _this.wire.setAttribute('d', path);

	      _this.wireShadow.setAttribute('d', path);

	      if ((_this$_origin$connect = _this._origin.connectedTo) === null || _this$_origin$connect === void 0 ? void 0 : _this$_origin$connect.pin) {
	        _this.element.addEventListener('mouseover', function () {
	          return _this.showHighlight();
	        });

	        _this.element.addEventListener('mouseout', function () {
	          return _this.hideHighlight();
	        });
	      }
	    };

	    this.id = v4();
	    this.wireShadow = svg('path', {
	      'fill': 'none',
	      'stroke': '#3b8ed7',
	      'stroke-width': 5,
	      'stroke-linecap': 'round',
	      'stroke-linejoin': 'round',
	      'opacity': 0
	    });
	    this.wire = svg('path', {
	      'fill': 'none',
	      'stroke': '#40B942',
	      'stroke-width': 1.8,
	      'stroke-linecap': 'round',
	      'stroke-linejoin': 'round'
	    });
	    this.element = svg('g');
	    this.element.appendChild(this.wireShadow);
	    this.element.appendChild(this.wire);
	    this.origin = _origin;
	    this.destination = destination;
	    this._selected = false;
	    this.drawPath = bind$3(_context4 = this.drawPath).call(_context4, this);
	  }

	  _createClass(Wire, [{
	    key: "onClicked",
	    value: function onClicked(onClickEvent) {
	      var _this2 = this;

	      this.element.addEventListener('click', function (evt) {
	        evt.stopPropagation();
	        onClickEvent(_this2);
	      });
	    }
	  }, {
	    key: "showHighlight",
	    value: function showHighlight() {
	      this.wireShadow.setAttribute('opacity', '0.5');
	    }
	  }, {
	    key: "hideHighlight",
	    value: function hideHighlight() {
	      if (!this._selected) this.wireShadow.setAttribute('opacity', '0');
	    }
	  }, {
	    key: "select",
	    value: function select() {
	      var _context5;

	      this._selected = true;

	      bind$3(_context5 = this.showHighlight).call(_context5, this)();
	    }
	  }, {
	    key: "unselect",
	    value: function unselect() {
	      var _context6;

	      this._selected = false;

	      bind$3(_context6 = this.hideHighlight).call(_context6, this)();
	    }
	  }, {
	    key: "dispose",
	    value: function dispose() {
	      this._origin.connectedTo = null;
	      this._destination.connectedTo = null;
	      this.element.remove();
	    }
	  }, {
	    key: "origin",
	    get: function get() {
	      return this._origin;
	    },
	    set: function set(port) {
	      var _this3 = this;

	      this._origin = port;

	      if (this._destination) {
	        this._destination.connectedTo = {
	          component: port.component,
	          pin: port.name
	        };
	        this.drawPath();
	      }

	      if (port instanceof Port) {
	        this._origin.addListener(function () {
	          return _this3.drawPath();
	        });
	      }
	    }
	  }, {
	    key: "destination",
	    get: function get() {
	      return this._destination;
	    },
	    set: function set(port) {
	      var _this4 = this;

	      this._destination = port;

	      if (this._origin) {
	        this._origin.connectedTo = {
	          component: port.component,
	          pin: port.name
	        };
	        this.drawPath();
	      }

	      if (port instanceof Port) {
	        this._destination.addListener(function () {
	          return _this4.drawPath();
	        });
	      }
	    }
	  }]);

	  return Wire;
	}();

	function connector(container, onCreated) {
	  var currentWire;
	  var connecting = false;
	  document.addEventListener('keydown', function (evt) {
	    if (evt.key === "Escape" && connecting) {
	      var _currentWire;

	      (_currentWire = currentWire) === null || _currentWire === void 0 ? void 0 : _currentWire.dispose();
	      connecting = false;
	    }
	  });
	  document.addEventListener('mousemove', function (evt) {
	    if (connecting) {
	      var CTM = container.wiresContainer.parentNode.getScreenCTM();
	      currentWire.destination = {
	        center: {
	          x: (evt.clientX - CTM.e) / CTM.a,
	          y: (evt.clientY - CTM.f) / CTM.d
	        }
	      };
	    }
	  });
	  return function (port) {
	    if (!connecting) {
	      currentWire = new Wire({
	        origin: port,
	        destination: {
	          center: port.center
	        }
	      });
	      container.addWire(currentWire);
	      connecting = true;
	      return;
	    }

	    currentWire.destination = port;
	    onCreated(currentWire);
	    connecting = false;
	  };
	}

	var $indexOf = arrayIncludes.indexOf;



	var nativeIndexOf = [].indexOf;

	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var STRICT_METHOD$1 = arrayMethodIsStrict('indexOf');
	var USES_TO_LENGTH$5 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

	// `Array.prototype.indexOf` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD$1 || !USES_TO_LENGTH$5 }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? nativeIndexOf.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var indexOf$1 = entryVirtual('Array').indexOf;

	var ArrayPrototype$8 = Array.prototype;

	var indexOf_1 = function (it) {
	  var own = it.indexOf;
	  return it === ArrayPrototype$8 || (it instanceof Array && own === ArrayPrototype$8.indexOf) ? indexOf$1 : own;
	};

	var indexOf$2 = indexOf_1;

	var indexOf$3 = indexOf$2;

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};

	  var sourceKeys = keys$6(source);

	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (indexOf$3(excluded).call(excluded, key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = _objectWithoutPropertiesLoose(source, excluded);
	  var key, i;

	  if (getOwnPropertySymbols$2) {
	    var sourceSymbolKeys = getOwnPropertySymbols$2(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (indexOf$3(excluded).call(excluded, key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	var Component = /*#__PURE__*/function (_ChangeNotifier) {
	  _inherits(Component, _ChangeNotifier);

	  var _super = _createSuper(Component);

	  function Component(_ref) {
	    var _this;

	    var id = _ref.id,
	        element = _ref.element,
	        name = _ref.name,
	        type = _ref.type;

	    _classCallCheck(this, Component);

	    _this = _super.call(this);
	    _this.id = id;
	    _this.element = element;
	    _this.name = name;
	    _this.type = type;
	    _this.ports = [];
	    return _this;
	  }

	  _createClass(Component, [{
	    key: "addPort",
	    value: function addPort(port) {
	      this.ports.push(port);
	    }
	  }, {
	    key: "getPort",
	    value: function getPort(name) {
	      var _context;

	      var index = findIndex$2(_context = this.ports).call(_context, function (port) {
	        return port.name == name;
	      });

	      if (index > -1) {
	        return this.ports[index];
	      }
	    }
	  }, {
	    key: "position",
	    get: function get() {
	      var transforms = this.element.transform.baseVal;
	      var transform = transforms.getItem(0);
	      return {
	        x: transform.matrix.e,
	        y: transform.matrix.f
	      };
	    }
	  }]);

	  return Component;
	}(ChangeNotifier);

	function makeComponent (_ref) {
	  var container = _ref.container,
	      connector = _ref.connector;
	  return /*#__PURE__*/function () {
	    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(properties) {
	      var _context;

	      var image, name, position, ports, type, wrapper, placeholderPosition, _svg, background, label, element, component;

	      return regeneratorRuntime.wrap(function _callee$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              image = properties.image, name = properties.name, position = properties.position, ports = properties.ports, type = properties.type;
	              wrapper = svg('svg', {
	                'class': type,
	                'viewBox': '-1000 -1000 2000 2000',
	                'width': 2000,
	                'height': 2000,
	                'x': -1000,
	                'y': -1000
	              });
	              placeholderPosition = {
	                x: 150 / ports.length / 2,
	                y: 40
	              };

	              if (image) {
	                _svg = parseSVG(image);
	                wrapper.appendChild(_svg);
	              } else {
	                background = svg('path', {
	                  'fill': 'lightgrey',
	                  'd': 'm0,2 H 150 v 50 H 0 z'
	                });
	                label = svg('text', {
	                  'x': 75,
	                  'y': 25,
	                  'dominant-baseline': 'middle',
	                  'text-anchor': 'middle'
	                });
	                label.innerHTML = name;
	                wrapper.appendChild(background);
	                wrapper.appendChild(label);

	                forEach$2(ports).call(ports, function (_, i) {
	                  if (!image) {
	                    wrapper.appendChild(svg('rect', {
	                      'width': 5,
	                      'height': 5,
	                      'fill': 'black',
	                      'x': placeholderPosition.x * (i + 1),
	                      'y': placeholderPosition.y,
	                      'r': 3
	                    }));
	                  }
	                });
	              }

	              element = svg('g', {
	                'transform': concat$2(_context = "translate(".concat(position.x, ", ")).call(_context, position.y, ") rotate(0) scale(1,1)"),
	                'class': 'draggable'
	              });
	              element.appendChild(wrapper);
	              component = new Component(_objectSpread2({
	                element: element
	              }, properties));

	              forEach$2(ports).call(ports, function (_ref3, i) {
	                var position = _ref3.position,
	                    others = _objectWithoutProperties(_ref3, ["position"]);

	                if (!position) position = {
	                  x: placeholderPosition.x * (i + 1),
	                  y: placeholderPosition.y
	                };
	                var port = new Port(_objectSpread2(_objectSpread2({
	                  component: properties.id,
	                  position: {
	                    x: component.position.x + position.x,
	                    y: component.position.y + position.y
	                  }
	                }, others), {}, {
	                  onClick: connector
	                }));
	                component.addPort(port);
	                component.addListener(function () {
	                  port.position = {
	                    x: component.position.x + position.x,
	                    y: component.position.y + position.y
	                  };
	                  port.notifyListeners();
	                });
	                container.portsContainer.appendChild(port.element);
	              });

	              container.addComponent(component);
	              return _context2.abrupt("return", {
	                id: properties.id,
	                component: component
	              });

	            case 10:
	            case "end":
	              return _context2.stop();
	          }
	        }
	      }, _callee);
	    }));

	    return function (_x) {
	      return _ref2.apply(this, arguments);
	    };
	  }();
	}

	var ElementTransformer = /*#__PURE__*/function () {
	  /**
	   * @param {SVGElement} element 
	   */
	  function ElementTransformer(element) {
	    var _this = this,
	        _values$,
	        _values$2;

	    _classCallCheck(this, ElementTransformer);

	    this._values = function () {
	      var _context;

	      return map$2(_context = _this._element.getAttribute('transform').match(/[+-]?\d+(\.\d+)?/g)).call(_context, function (value) {
	        return _parseFloat$2(value);
	      });
	    };

	    this._transform = function () {
	      var _context2, _context3, _context4, _context5;

	      _this._element.setAttribute('transform', concat$2(_context2 = concat$2(_context3 = concat$2(_context4 = concat$2(_context5 = "translate(".concat(_this._x, ", ")).call(_context5, _this._y, ") rotate(")).call(_context4, _this._rotate, ") scale(")).call(_context3, _this._scale, ", ")).call(_context2, _this._scale, ")"));
	    };

	    this._element = element;

	    var values = this._values();

	    this._x = values[0];
	    this._y = values[1];
	    this._rotate = (_values$ = values[2]) !== null && _values$ !== void 0 ? _values$ : 0;
	    this._scale = (_values$2 = values[3]) !== null && _values$2 !== void 0 ? _values$2 : 1;

	    this._transform();
	  }

	  _createClass(ElementTransformer, [{
	    key: "position",
	    get: function get() {
	      return {
	        x: this._x,
	        y: this._y
	      };
	    }
	    /**
	     * @param {double} x
	     * @param {double} y
	     */
	    ,
	    set: function set(_ref) {
	      var x = _ref.x,
	          y = _ref.y;
	      this._x = x;
	      this._y = y;

	      this._transform();
	    }
	  }, {
	    key: "scale",
	    get: function get() {
	      return this._scale;
	    }
	    /**
	     * @param {double} scale
	     */
	    ,
	    set: function set(scale) {
	      this._scale = scale;

	      this._transform();
	    }
	  }, {
	    key: "rotate",
	    get: function get() {
	      return this._rotate;
	    }
	    /**
	     * @param {double} rotate
	     */
	    ,
	    set: function set(rotate) {
	      this._rotate = rotate;

	      this._transform();
	    }
	  }]);

	  return ElementTransformer;
	}();

	var EditorContainer = /*#__PURE__*/function (_ChangeNotifier) {
	  _inherits(EditorContainer, _ChangeNotifier);

	  var _super = _createSuper(EditorContainer);

	  /**
	   * @param {string} selector 
	   */
	  function EditorContainer(selector) {
	    var _context;

	    var _this;

	    _classCallCheck(this, EditorContainer);

	    _this = _super.call(this);

	    _this._mousePosition = function (evt) {
	      var CTM = _this.svg.getScreenCTM();

	      return {
	        x: (evt.clientX - CTM.e) / CTM.a,
	        y: (evt.clientY - CTM.f) / CTM.d
	      };
	    };

	    _this._bindEvents = function () {
	      _this.svg.addEventListener('mousemove', function (evt) {
	        if (_this.currentElement) {
	          evt.preventDefault();

	          var coords = _this._mousePosition(evt);

	          _this.currentElement.position = {
	            x: coords.x - _this.offset.x,
	            y: coords.y - _this.offset.y
	          };

	          _this.notifyListeners();
	        }
	      });

	      _this.svg.addEventListener('mousedown', function (evt) {
	        if (!_this._isElement) {
	          _this._currentElement = _this.wrapper;
	          _this.offset = _this._mousePosition(evt);
	          _this.offset.x -= _this.currentElement.position.x;
	          _this.offset.y -= _this.currentElement.position.y;
	        }
	      });

	      _this.svg.addEventListener('wheel', function (event) {
	        event.preventDefault();
	        _this._scale += event.deltaY * -0.01;
	        _this._scale = Math.min(Math.max(.125, _this._scale), 4);
	        _this.wrapper.scale = _this._scale;

	        _this.notifyListeners();
	      });

	      var endDrag = function endDrag() {
	        _this.currentElement = null;
	        _this._isElement = false;
	      };

	      _this.svg.addEventListener('mouseup', endDrag);

	      _this.svg.addEventListener('mouseleave', endDrag);
	    };

	    _this._scale = 1;
	    _this._currentElement = null;
	    _this._isElement = false;
	    _this.offset = {};
	    _this.componentsContainer = svg('g');
	    _this.wiresContainer = svg('g');
	    _this.portsContainer = svg('g');
	    var wrapper = svg('g', {
	      'transform': concat$2(_context = "scale(".concat(_this._scale, ", ")).call(_context, _this._scale, ")")
	    });
	    wrapper.appendChild(_this.componentsContainer);
	    wrapper.appendChild(_this.wiresContainer);
	    wrapper.appendChild(_this.portsContainer);
	    _this.svg = svg('svg', {
	      'xmlns': 'http://www.w3.org/2000/svg',
	      'version': '1.1',
	      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
	      'width': '100%',
	      'height': '100%'
	    });

	    _this.svg.appendChild(wrapper);

	    _this.wrapper = new ElementTransformer(wrapper);
	    document.querySelector(selector).appendChild(_this.svg);

	    _this._bindEvents();

	    return _this;
	  }
	  /**
	   * @param {SVGElement} element
	   */


	  _createClass(EditorContainer, [{
	    key: "addComponent",
	    value: function addComponent(component) {
	      var _this2 = this;

	      var element = component.element;
	      this.componentsContainer.appendChild(element);
	      element.addEventListener('mousedown', function (evt) {
	        _this2._isElement = true;
	        _this2.currentElement = element;
	        _this2.offset = _this2._mousePosition(evt);
	        _this2.offset.x -= _this2.currentElement.position.x;
	        _this2.offset.y -= _this2.currentElement.position.y;
	      });
	      this.addListener(function () {
	        component.notifyListeners();
	      });
	    }
	  }, {
	    key: "addWire",
	    value: function addWire(wire) {
	      var element = wire.element;
	      this.wiresContainer.appendChild(element);
	    }
	  }, {
	    key: "currentElement",
	    set: function set(element) {
	      if (element) {
	        this._currentElement = new ElementTransformer(element);
	      } else {
	        this._currentElement = null;
	      }
	    },
	    get: function get() {
	      return this._currentElement;
	    }
	  }]);

	  return EditorContainer;
	}(ChangeNotifier);

	var Editor = /*#__PURE__*/function () {
	  function Editor(containerSelector) {
	    var _this = this;

	    _classCallCheck(this, Editor);

	    this.addComponent = /*#__PURE__*/function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(properties) {
	        var _yield$_this$componen, id, component;

	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _this.componentCreator(properties);

	              case 2:
	                _yield$_this$componen = _context.sent;
	                id = _yield$_this$componen.id;
	                component = _yield$_this$componen.component;
	                _this.components[id] = component;

	              case 6:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee);
	      }));

	      return function (_x) {
	        return _ref.apply(this, arguments);
	      };
	    }();

	    this.setBoard = /*#__PURE__*/function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(properties) {
	        var _yield$_this$componen2, component;

	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.next = 2;
	                return _this.componentCreator(_objectSpread2({
	                  id: 'board'
	                }, properties));

	              case 2:
	                _yield$_this$componen2 = _context2.sent;
	                component = _yield$_this$componen2.component;
	                _this.board = component;

	              case 5:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2);
	      }));

	      return function (_x2) {
	        return _ref2.apply(this, arguments);
	      };
	    }();

	    this.wireClicked = function (wire) {
	      var _context3;

	      forEach$2(_context3 = _this.wires).call(_context3, function (wire) {
	        return wire.unselect();
	      });

	      _this.selectedWire = wire;

	      _this.selectedWire.select();
	    };

	    this._loadWires = function () {
	      for (var key in _this.components) {
	        var ports = _this.components[key].ports;

	        forEach$2(ports).call(ports, function (port) {
	          if (port.connectedTo) {
	            var _port$connectedTo = port.connectedTo,
	                component = _port$connectedTo.component,
	                pin = _port$connectedTo.pin;
	            var destComponent = component === 'board' ? _this.board : _this.components[component];
	            var destPort = destComponent.getPort(pin);
	            var wire = new Wire({
	              origin: port,
	              destination: destPort
	            });
	            wire.onClicked(_this.wireClicked);

	            _this.container.addWire(wire);

	            _this.wires.push(wire);
	          }
	        });
	      }
	    };

	    this.container = new EditorContainer(containerSelector);
	    this.board = null;
	    this.components = {};
	    this.wires = [];
	    this.selectedWire = null;
	    this.container.svg.addEventListener('click', function () {
	      if (_this.selectedWire) {
	        var _context4;

	        _this.selectedWire = null;

	        forEach$2(_context4 = _this.wires).call(_context4, function (wire) {
	          return wire.unselect();
	        });
	      }
	    });
	    document.addEventListener('keydown', function (evt) {
	      if (evt.key === "Escape" && _this.selectedWire) {
	        var _context5;

	        forEach$2(_context5 = _this.wires).call(_context5, function (wire) {
	          return wire.unselect();
	        });

	        _this.selectedWire = null;
	      } else if (evt.keyCode == 46) {
	        var _context6;

	        _this.selectedWire.dispose();

	        _this.wires = filter$2(_context6 = _this.wires).call(_context6, function (wire) {
	          return wire.id !== _this.selectedWire.id;
	        });
	        _this.selectedWire = null;
	      }
	    });
	    var connector$1 = connector(this.container, function (wire) {
	      wire.onClicked(_this.wireClicked);

	      _this.wires.push(wire);
	    });
	    this.componentCreator = makeComponent({
	      container: this.container,
	      connector: connector$1
	    });
	  }

	  _createClass(Editor, [{
	    key: "load",
	    value: function () {
	      var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(file) {
	        var _configDecode, components, id, properties;

	        return regeneratorRuntime.wrap(function _callee3$(_context7) {
	          while (1) {
	            switch (_context7.prev = _context7.next) {
	              case 0:
	                // read configurations
	                _configDecode = configDecode(file), components = _configDecode.components; // create robot board

	                _context7.next = 3;
	                return this.setBoard(_objectSpread2(_objectSpread2({}, arduino), {}, {
	                  position: {
	                    x: 230,
	                    y: 230
	                  }
	                }));

	              case 3:
	                _context7.t0 = keys$3(regeneratorRuntime).call(regeneratorRuntime, components);

	              case 4:
	                if ((_context7.t1 = _context7.t0()).done) {
	                  _context7.next = 11;
	                  break;
	                }

	                id = _context7.t1.value;
	                properties = components[id];
	                _context7.next = 9;
	                return this.addComponent(_objectSpread2({
	                  id: id
	                }, properties));

	              case 9:
	                _context7.next = 4;
	                break;

	              case 11:
	                this._loadWires();

	              case 12:
	              case "end":
	                return _context7.stop();
	            }
	          }
	        }, _callee3, this);
	      }));

	      function load(_x3) {
	        return _load.apply(this, arguments);
	      }

	      return load;
	    }()
	  }, {
	    key: "xml",
	    get: function get() {
	      //return { components: this.components };
	      return configEncode({
	        board: this.board,
	        components: this.components
	      });
	    }
	  }]);

	  return Editor;
	}();

	function main (selector) {
	  var editor = new Editor(selector);
	  return editor;
	}

	return main;

}());
//# sourceMappingURL=open-roberta-configuration.js.map
