webpackHotUpdate("static/development/pages/books.js",{

/***/ "./node_modules/apollo-boost/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/apollo-boost/lib/index.js ***!
  \************************************************/
/*! exports provided: ApolloClient, ApolloError, FetchType, NetworkStatus, ObservableQuery, isApolloError, Observable, getOperationName, createOperation, makePromise, toPromise, fromPromise, fromError, empty, from, split, concat, ApolloLink, execute, HeuristicFragmentMatcher, InMemoryCache, IntrospectionFragmentMatcher, ObjectCache, StoreReader, StoreWriter, WriteError, assertIdValue, defaultDataIdFromObject, defaultNormalizedCacheFactory, enhanceErrorWithDocument, gql, HttpLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchType", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["FetchType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["NetworkStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["ObservableQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["isApolloError"]; });

/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["getOperationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["createOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["makePromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["toPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["fromPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["fromError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["from"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["split"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"]; });

/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeuristicFragmentMatcher", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["HeuristicFragmentMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntrospectionFragmentMatcher", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["IntrospectionFragmentMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectCache", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["ObjectCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreReader", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["StoreReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreWriter", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["StoreWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WriteError", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["WriteError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertIdValue", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["assertIdValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["defaultDataIdFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultNormalizedCacheFactory", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["defaultNormalizedCacheFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enhanceErrorWithDocument", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["enhanceErrorWithDocument"]; });

/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]; });

/* harmony import */ var apollo_link_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-state */ "./node_modules/apollo-link-state/lib/index.js");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return graphql_tag__WEBPACK_IMPORTED_MODULE_7___default.a; });












var PRESET_CONFIG_KEYS = [
    'request',
    'uri',
    'credentials',
    'headers',
    'fetch',
    'fetchOptions',
    'clientState',
    'onError',
    'cacheRedirects',
    'cache',
    'name',
    'version',
];
var DefaultClient = (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DefaultClient, _super);
    function DefaultClient(config) {
        if (config === void 0) { config = {}; }
        var _this = this;
        if (config) {
            var diff = Object.keys(config).filter(function (key) { return PRESET_CONFIG_KEYS.indexOf(key) === -1; });
            if (diff.length > 0) {
                console.warn('ApolloBoost was initialized with unsupported options: ' +
                    ("" + diff.join(' ')));
            }
        }
        var request = config.request, uri = config.uri, credentials = config.credentials, headers = config.headers, fetch = config.fetch, fetchOptions = config.fetchOptions, clientState = config.clientState, cacheRedirects = config.cacheRedirects, errorCallback = config.onError, name = config.name, version = config.version;
        var cache = config.cache;
        if (cache && cacheRedirects) {
            throw new Error('Incompatible cache configuration. If providing `cache` then ' +
                'configure the provided instance with `cacheRedirects` instead.');
        }
        if (!cache) {
            cache = cacheRedirects
                ? new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]({ cacheRedirects: cacheRedirects })
                : new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]();
        }
        var stateLink = clientState
            ? Object(apollo_link_state__WEBPACK_IMPORTED_MODULE_5__["withClientState"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, clientState, { cache: cache }))
            : false;
        var errorLink = errorCallback
            ? Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_6__["onError"])(errorCallback)
            : Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_6__["onError"])(function (_a) {
                var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError;
                if (graphQLErrors) {
                    graphQLErrors.map(function (_a) {
                        var message = _a.message, locations = _a.locations, path = _a.path;
                        return console.log("[GraphQL error]: Message: " + message + ", Location: " +
                            (locations + ", Path: " + path));
                    });
                }
                if (networkError) {
                    console.log("[Network error]: " + networkError);
                }
            });
        var requestHandler = request
            ? new apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"](function (operation, forward) {
                return new apollo_link__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    var handle;
                    Promise.resolve(operation)
                        .then(function (oper) { return request(oper); })
                        .then(function () {
                        handle = forward(operation).subscribe({
                            next: observer.next.bind(observer),
                            error: observer.error.bind(observer),
                            complete: observer.complete.bind(observer),
                        });
                    })
                        .catch(observer.error.bind(observer));
                    return function () {
                        if (handle) {
                            handle.unsubscribe();
                        }
                    };
                });
            })
            : false;
        var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]({
            uri: uri || '/graphql',
            fetch: fetch,
            fetchOptions: fetchOptions || {},
            credentials: credentials || 'same-origin',
            headers: headers || {},
        });
        var link = apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"].from([
            errorLink,
            requestHandler,
            stateLink,
            httpLink,
        ].filter(function (x) { return !!x; }));
        _this = _super.call(this, { cache: cache, link: link, name: name, version: version }) || this;
        return _this;
    }
    return DefaultClient;
}(apollo_client__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (DefaultClient);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/apollo-link-error/lib/bundle.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/apollo-link-error/lib/bundle.esm.js ***!
  \**********************************************************/
/*! exports provided: onError, ErrorLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLink", function() { return ErrorLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");



function onError(errorHandler) {
    return new apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"](function (operation, forward) {
        return new apollo_link__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var sub;
            var retriedSub;
            var retriedResult;
            try {
                sub = forward(operation).subscribe({
                    next: function (result) {
                        if (result.errors) {
                            retriedResult = errorHandler({
                                graphQLErrors: result.errors,
                                response: result,
                                operation: operation,
                                forward: forward,
                            });
                            if (retriedResult) {
                                retriedSub = retriedResult.subscribe({
                                    next: observer.next.bind(observer),
                                    error: observer.error.bind(observer),
                                    complete: observer.complete.bind(observer),
                                });
                                return;
                            }
                        }
                        observer.next(result);
                    },
                    error: function (networkError) {
                        retriedResult = errorHandler({
                            operation: operation,
                            networkError: networkError,
                            graphQLErrors: networkError &&
                                networkError.result &&
                                networkError.result.errors,
                            forward: forward,
                        });
                        if (retriedResult) {
                            retriedSub = retriedResult.subscribe({
                                next: observer.next.bind(observer),
                                error: observer.error.bind(observer),
                                complete: observer.complete.bind(observer),
                            });
                            return;
                        }
                        observer.error(networkError);
                    },
                    complete: function () {
                        if (!retriedResult) {
                            observer.complete.bind(observer)();
                        }
                    },
                });
            }
            catch (e) {
                errorHandler({ networkError: e, operation: operation, forward: forward });
                observer.error(e);
            }
            return function () {
                if (sub)
                    sub.unsubscribe();
                if (retriedSub)
                    sub.unsubscribe();
            };
        });
    });
}
var ErrorLink = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorLink, _super);
    function ErrorLink(errorHandler) {
        var _this = _super.call(this) || this;
        _this.link = onError(errorHandler);
        return _this;
    }
    ErrorLink.prototype.request = function (operation, forward) {
        return this.link.request(operation, forward);
    };
    return ErrorLink;
}(apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-state/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/apollo-link-state/lib/index.js ***!
  \*****************************************************/
/*! exports provided: withClientState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withClientState", function() { return withClientState; });
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony import */ var graphql_anywhere_lib_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-anywhere/lib/async */ "./node_modules/graphql-anywhere/lib/async.js");
/* harmony import */ var graphql_anywhere_lib_async__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_anywhere_lib_async__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/apollo-link-state/lib/utils.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var graphql = graphql_anywhere_lib_async__WEBPACK_IMPORTED_MODULE_2__["graphql"];

var capitalizeFirstLetter = function (str) { return str.charAt(0).toUpperCase() + str.slice(1); };
var withClientState = function (clientStateConfig) {
    if (clientStateConfig === void 0) { clientStateConfig = { resolvers: {}, defaults: {} }; }
    var defaults = clientStateConfig.defaults, cache = clientStateConfig.cache, typeDefs = clientStateConfig.typeDefs, fragmentMatcher = clientStateConfig.fragmentMatcher;
    if (cache && defaults) {
        cache.writeData({ data: defaults });
    }
    return new (function (_super) {
        __extends(StateLink, _super);
        function StateLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StateLink.prototype.writeDefaults = function () {
            if (cache && defaults) {
                cache.writeData({ data: defaults });
            }
        };
        StateLink.prototype.request = function (operation, forward) {
            if (forward === void 0) { forward = function () { return apollo_link__WEBPACK_IMPORTED_MODULE_0__["Observable"].of({ data: {} }); }; }
            if (typeDefs) {
                var directives_1 = 'directive @client on FIELD';
                var definition_1 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["normalizeTypeDefs"])(typeDefs);
                operation.setContext(function (_a) {
                    var _b = _a.schemas, schemas = _b === void 0 ? [] : _b;
                    return ({
                        schemas: schemas.concat([{ definition: definition_1, directives: directives_1 }]),
                    });
                });
            }
            var isClient = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasDirectives"])(['client'], operation.query);
            if (!isClient)
                return forward(operation);
            var resolvers = typeof clientStateConfig.resolvers === 'function'
                ? clientStateConfig.resolvers()
                : clientStateConfig.resolvers;
            var server = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["removeClientSetsFromDocument"])(operation.query);
            var query = operation.query;
            var type = capitalizeFirstLetter((Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getMainDefinition"])(query) || {}).operation) || 'Query';
            var resolver = function (fieldName, rootValue, args, context, info) {
                if (rootValue === void 0) { rootValue = {}; }
                var resultKey = info.resultKey;
                var aliasedNode = rootValue[resultKey];
                var preAliasingNode = rootValue[fieldName];
                var aliasNeeded = resultKey !== fieldName;
                if (aliasedNode !== undefined || preAliasingNode !== undefined) {
                    return aliasedNode || preAliasingNode;
                }
                var resolverMap = resolvers[rootValue.__typename || type];
                if (resolverMap) {
                    var resolve = resolverMap[fieldName];
                    if (resolve)
                        return resolve(rootValue, args, context, info);
                }
                return ((aliasNeeded ? aliasedNode : preAliasingNode) ||
                    (defaults || {})[fieldName]);
            };
            if (server)
                operation.query = server;
            var obs = server && forward
                ? forward(operation)
                : apollo_link__WEBPACK_IMPORTED_MODULE_0__["Observable"].of({
                    data: {},
                });
            return new apollo_link__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
                var complete = false;
                var handlingNext = false;
                obs.subscribe({
                    next: function (_a) {
                        var data = _a.data, errors = _a.errors;
                        var observerErrorHandler = observer.error.bind(observer);
                        var context = operation.getContext();
                        handlingNext = true;
                        graphql(resolver, query, data, context, operation.variables, {
                            fragmentMatcher: fragmentMatcher,
                        })
                            .then(function (nextData) {
                            observer.next({
                                data: nextData,
                                errors: errors,
                            });
                            if (complete) {
                                observer.complete();
                            }
                            handlingNext = false;
                        })
                            .catch(observerErrorHandler);
                    },
                    error: observer.error.bind(observer),
                    complete: function () {
                        if (!handlingNext) {
                            observer.complete();
                        }
                        complete = true;
                    },
                });
            });
        };
        return StateLink;
    }(apollo_link__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"]))();
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/apollo-link-state/lib/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/apollo-link-state/lib/utils.js ***!
  \*****************************************************/
/*! exports provided: removeClientSetsFromDocument, normalizeTypeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClientSetsFromDocument", function() { return removeClientSetsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeTypeDefs", function() { return normalizeTypeDefs; });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");


var connectionRemoveConfig = {
    test: function (directive) { return directive.name.value === 'client'; },
    remove: true,
};
var removed = new Map();
function removeClientSetsFromDocument(query) {
    var cached = removed.get(query);
    if (cached)
        return cached;
    Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["checkDocument"])(query);
    var docClone = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["removeDirectivesFromDocument"])([connectionRemoveConfig], query);
    removed.set(query, docClone);
    return docClone;
}
function normalizeTypeDefs(typeDefs) {
    var defs = Array.isArray(typeDefs) ? typeDefs : [typeDefs];
    return defs
        .map(function (typeDef) { return (typeof typeDef === 'string' ? typeDef : Object(graphql__WEBPACK_IMPORTED_MODULE_0__["print"])(typeDef)); })
        .map(function (str) { return str.trim(); })
        .join('\n');
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/graphql-anywhere/lib/async.js":
/*!****************************************************!*\
  !*** ./node_modules/graphql-anywhere/lib/async.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var apollo_utilities_1 = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
var graphql_1 = __webpack_require__(/*! ./graphql */ "./node_modules/graphql-anywhere/lib/graphql.js");
function graphql(resolver, document, rootValue, contextValue, variableValues, execOptions) {
    if (execOptions === void 0) { execOptions = {}; }
    var mainDefinition = apollo_utilities_1.getMainDefinition(document);
    var fragments = apollo_utilities_1.getFragmentDefinitions(document);
    var fragmentMap = apollo_utilities_1.createFragmentMap(fragments);
    var resultMapper = execOptions.resultMapper;
    var fragmentMatcher = execOptions.fragmentMatcher || (function () { return true; });
    var execContext = {
        fragmentMap: fragmentMap,
        contextValue: contextValue,
        variableValues: variableValues,
        resultMapper: resultMapper,
        resolver: resolver,
        fragmentMatcher: fragmentMatcher,
    };
    return executeSelectionSet(mainDefinition.selectionSet, rootValue, execContext);
}
exports.graphql = graphql;
function executeSelectionSet(selectionSet, rootValue, execContext) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var fragmentMap, contextValue, variables, result, execute;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
                    result = {};
                    execute = function (selection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var fieldResult, resultFieldKey, fragment, typeCondition, fragmentResult;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!apollo_utilities_1.shouldInclude(selection, variables)) {
                                        return [2];
                                    }
                                    if (!apollo_utilities_1.isField(selection)) return [3, 2];
                                    return [4, executeField(selection, rootValue, execContext)];
                                case 1:
                                    fieldResult = _a.sent();
                                    resultFieldKey = apollo_utilities_1.resultKeyNameFromField(selection);
                                    if (fieldResult !== undefined) {
                                        if (result[resultFieldKey] === undefined) {
                                            result[resultFieldKey] = fieldResult;
                                        }
                                        else {
                                            graphql_1.merge(result[resultFieldKey], fieldResult);
                                        }
                                    }
                                    return [2];
                                case 2:
                                    if (apollo_utilities_1.isInlineFragment(selection)) {
                                        fragment = selection;
                                    }
                                    else {
                                        fragment = fragmentMap[selection.name.value];
                                        if (!fragment) {
                                            throw new Error("No fragment named " + selection.name.value);
                                        }
                                    }
                                    typeCondition = fragment.typeCondition.name.value;
                                    if (!execContext.fragmentMatcher(rootValue, typeCondition, contextValue)) return [3, 4];
                                    return [4, executeSelectionSet(fragment.selectionSet, rootValue, execContext)];
                                case 3:
                                    fragmentResult = _a.sent();
                                    graphql_1.merge(result, fragmentResult);
                                    _a.label = 4;
                                case 4: return [2];
                            }
                        });
                    }); };
                    return [4, Promise.all(selectionSet.selections.map(execute))];
                case 1:
                    _a.sent();
                    if (execContext.resultMapper) {
                        return [2, execContext.resultMapper(result, rootValue)];
                    }
                    return [2, result];
            }
        });
    });
}
function executeField(field, rootValue, execContext) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var variables, contextValue, resolver, fieldName, args, info, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    variables = execContext.variableValues, contextValue = execContext.contextValue, resolver = execContext.resolver;
                    fieldName = field.name.value;
                    args = apollo_utilities_1.argumentsObjectFromField(field, variables);
                    info = {
                        isLeaf: !field.selectionSet,
                        resultKey: apollo_utilities_1.resultKeyNameFromField(field),
                        directives: apollo_utilities_1.getDirectiveInfoFromField(field, variables),
                        field: field,
                    };
                    return [4, resolver(fieldName, rootValue, args, contextValue, info)];
                case 1:
                    result = _a.sent();
                    if (!field.selectionSet) {
                        return [2, result];
                    }
                    if (result == null) {
                        return [2, result];
                    }
                    if (Array.isArray(result)) {
                        return [2, executeSubSelectedArray(field, result, execContext)];
                    }
                    return [2, executeSelectionSet(field.selectionSet, result, execContext)];
            }
        });
    });
}
function executeSubSelectedArray(field, result, execContext) {
    return Promise.all(result.map(function (item) {
        if (item === null) {
            return null;
        }
        if (Array.isArray(item)) {
            return executeSubSelectedArray(field, item, execContext);
        }
        return executeSelectionSet(field.selectionSet, item, execContext);
    }));
}
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/graphql-anywhere/lib/graphql.js":
/*!******************************************************!*\
  !*** ./node_modules/graphql-anywhere/lib/graphql.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var apollo_utilities_1 = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
function graphql(resolver, document, rootValue, contextValue, variableValues, execOptions) {
    if (variableValues === void 0) { variableValues = {}; }
    if (execOptions === void 0) { execOptions = {}; }
    var mainDefinition = apollo_utilities_1.getMainDefinition(document);
    var fragments = apollo_utilities_1.getFragmentDefinitions(document);
    var fragmentMap = apollo_utilities_1.createFragmentMap(fragments);
    var resultMapper = execOptions.resultMapper;
    var fragmentMatcher = execOptions.fragmentMatcher || (function () { return true; });
    var execContext = {
        fragmentMap: fragmentMap,
        contextValue: contextValue,
        variableValues: variableValues,
        resultMapper: resultMapper,
        resolver: resolver,
        fragmentMatcher: fragmentMatcher,
    };
    return executeSelectionSet(mainDefinition.selectionSet, rootValue, execContext);
}
exports.graphql = graphql;
function executeSelectionSet(selectionSet, rootValue, execContext) {
    var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
    var result = {};
    selectionSet.selections.forEach(function (selection) {
        if (variables && !apollo_utilities_1.shouldInclude(selection, variables)) {
            return;
        }
        if (apollo_utilities_1.isField(selection)) {
            var fieldResult = executeField(selection, rootValue, execContext);
            var resultFieldKey = apollo_utilities_1.resultKeyNameFromField(selection);
            if (fieldResult !== undefined) {
                if (result[resultFieldKey] === undefined) {
                    result[resultFieldKey] = fieldResult;
                }
                else {
                    merge(result[resultFieldKey], fieldResult);
                }
            }
        }
        else {
            var fragment = void 0;
            if (apollo_utilities_1.isInlineFragment(selection)) {
                fragment = selection;
            }
            else {
                fragment = fragmentMap[selection.name.value];
                if (!fragment) {
                    throw new Error("No fragment named " + selection.name.value);
                }
            }
            var typeCondition = fragment.typeCondition.name.value;
            if (execContext.fragmentMatcher(rootValue, typeCondition, contextValue)) {
                var fragmentResult = executeSelectionSet(fragment.selectionSet, rootValue, execContext);
                merge(result, fragmentResult);
            }
        }
    });
    if (execContext.resultMapper) {
        return execContext.resultMapper(result, rootValue);
    }
    return result;
}
function executeField(field, rootValue, execContext) {
    var variables = execContext.variableValues, contextValue = execContext.contextValue, resolver = execContext.resolver;
    var fieldName = field.name.value;
    var args = apollo_utilities_1.argumentsObjectFromField(field, variables);
    var info = {
        isLeaf: !field.selectionSet,
        resultKey: apollo_utilities_1.resultKeyNameFromField(field),
        directives: apollo_utilities_1.getDirectiveInfoFromField(field, variables),
        field: field,
    };
    var result = resolver(fieldName, rootValue, args, contextValue, info);
    if (!field.selectionSet) {
        return result;
    }
    if (result == null) {
        return result;
    }
    if (Array.isArray(result)) {
        return executeSubSelectedArray(field, result, execContext);
    }
    return executeSelectionSet(field.selectionSet, result, execContext);
}
function executeSubSelectedArray(field, result, execContext) {
    return result.map(function (item) {
        if (item === null) {
            return null;
        }
        if (Array.isArray(item)) {
            return executeSubSelectedArray(field, item, execContext);
        }
        return executeSelectionSet(field.selectionSet, item, execContext);
    });
}
var hasOwn = Object.prototype.hasOwnProperty;
function merge(dest, src) {
    if (src !== null && typeof src === 'object') {
        Object.keys(src).forEach(function (key) {
            var srcVal = src[key];
            if (!hasOwn.call(dest, key)) {
                dest[key] = srcVal;
            }
            else {
                merge(dest[key], srcVal);
            }
        });
    }
}
exports.merge = merge;
//# sourceMappingURL=graphql.js.map

/***/ }),

/***/ "./node_modules/graphql/execution/execute.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/execution/execute.mjs ***!
  \****************************************************/
/*! exports provided: execute, responsePathAsArray, addPath, assertValidExecutionArguments, buildExecutionContext, collectFields, buildResolveInfo, resolveFieldValueOrError, defaultTypeResolver, defaultFieldResolver, getFieldDef */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsePathAsArray", function() { return responsePathAsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPath", function() { return addPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidExecutionArguments", function() { return assertValidExecutionArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildExecutionContext", function() { return buildExecutionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectFields", function() { return collectFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildResolveInfo", function() { return buildResolveInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveFieldValueOrError", function() { return resolveFieldValueOrError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTypeResolver", function() { return defaultTypeResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return defaultFieldResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldDef", function() { return getFieldDef; });
/* harmony import */ var iterall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iterall */ "./node_modules/iterall/index.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _error_locatedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error/locatedError */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/isInvalid */ "./node_modules/graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _jsutils_isNullish__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/isNullish */ "./node_modules/graphql/jsutils/isNullish.mjs");
/* harmony import */ var _jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/isPromise */ "./node_modules/graphql/jsutils/isPromise.mjs");
/* harmony import */ var _jsutils_memoize3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/memoize3 */ "./node_modules/graphql/jsutils/memoize3.mjs");
/* harmony import */ var _jsutils_promiseForObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jsutils/promiseForObject */ "./node_modules/graphql/jsutils/promiseForObject.mjs");
/* harmony import */ var _jsutils_promiseReduce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jsutils/promiseReduce */ "./node_modules/graphql/jsutils/promiseReduce.mjs");
/* harmony import */ var _utilities_getOperationRootType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilities/getOperationRootType */ "./node_modules/graphql/utilities/getOperationRootType.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utilities/typeFromAST */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./values */ "./node_modules/graphql/execution/values.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../type/introspection */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../type/directives */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_validate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../type/validate */ "./node_modules/graphql/type/validate.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



















function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? executeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver, argsOrSchema.typeResolver) : executeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver);
}

function executeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  // If arguments are missing or incorrect, throw an error.
  assertValidExecutionArguments(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.

  var exeContext = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver); // Return early errors if execution context failed.

  if (Array.isArray(exeContext)) {
    return {
      errors: exeContext
    };
  } // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.


  var data = executeOperation(exeContext, exeContext.operation, rootValue);
  return buildResponse(exeContext, data);
}
/**
 * Given a completed execution context and data, build the { errors, data }
 * response defined by the "Response" section of the GraphQL specification.
 */


function buildResponse(exeContext, data) {
  if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(data)) {
    return data.then(function (resolved) {
      return buildResponse(exeContext, resolved);
    });
  }

  return exeContext.errors.length === 0 ? {
    data: data
  } : {
    errors: exeContext.errors,
    data: data
  };
}
/**
 * Given a ResponsePath (found in the `path` entry in the information provided
 * as the last argument to a field resolver), return an Array of the path keys.
 */


function responsePathAsArray(path) {
  var flattened = [];
  var curr = path;

  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }

  return flattened.reverse();
}
/**
 * Given a ResponsePath and a key, return a new ResponsePath containing the
 * new key.
 */

function addPath(prev, key) {
  return {
    prev: prev,
    key: key
  };
}
/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 */

function assertValidExecutionArguments(schema, document, rawVariableValues) {
  !document ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Must provide document') : void 0; // If the schema used for execution is invalid, throw an error.

  Object(_type_validate__WEBPACK_IMPORTED_MODULE_18__["assertValidSchema"])(schema); // Variables, if provided, must be an object.

  !(!rawVariableValues || _typeof(rawVariableValues) === 'object') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Variables must be provided as an Object where each property is a ' + 'variable value. Perhaps look to see if an unparsed JSON string ' + 'was provided.') : void 0;
}
/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 */

function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver, typeResolver) {
  var errors = [];
  var operation;
  var hasMultipleAssumedOperations = false;
  var fragments = Object.create(null);

  for (var i = 0; i < document.definitions.length; i++) {
    var definition = document.definitions[i];

    switch (definition.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_13__["Kind"].OPERATION_DEFINITION:
        if (!operationName && operation) {
          hasMultipleAssumedOperations = true;
        } else if (!operationName || definition.name && definition.name.value === operationName) {
          operation = definition;
        }

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_13__["Kind"].FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;
    }
  }

  if (!operation) {
    if (operationName) {
      errors.push(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Unknown operation named \"".concat(operationName, "\".")));
    } else {
      errors.push(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]('Must provide an operation.'));
    }
  } else if (hasMultipleAssumedOperations) {
    errors.push(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]('Must provide operation name if query contains multiple operations.'));
  }

  var variableValues;

  if (operation) {
    var coercedVariableValues = Object(_values__WEBPACK_IMPORTED_MODULE_14__["getVariableValues"])(schema, operation.variableDefinitions || [], rawVariableValues || {});

    if (coercedVariableValues.errors) {
      errors.push.apply(errors, coercedVariableValues.errors);
    } else {
      variableValues = coercedVariableValues.coerced;
    }
  }

  if (errors.length !== 0) {
    return errors;
  }

  !operation ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Has operation if no errors.') : void 0;
  !variableValues ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Has variables if no errors.') : void 0;
  return {
    schema: schema,
    fragments: fragments,
    rootValue: rootValue,
    contextValue: contextValue,
    operation: operation,
    variableValues: variableValues,
    fieldResolver: fieldResolver || defaultFieldResolver,
    typeResolver: typeResolver || defaultTypeResolver,
    errors: errors
  };
}
/**
 * Implements the "Evaluating operations" section of the spec.
 */

function executeOperation(exeContext, operation, rootValue) {
  var type = Object(_utilities_getOperationRootType__WEBPACK_IMPORTED_MODULE_11__["getOperationRootType"])(exeContext.schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));
  var path = undefined; // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.
  //
  // Similar to completeValueCatchingError.

  try {
    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
      return result.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }

    return result;
  } catch (error) {
    exeContext.errors.push(error);
    return null;
  }
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "write" mode.
 */


function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return Object(_jsutils_promiseReduce__WEBPACK_IMPORTED_MODULE_10__["default"])(Object.keys(fields), function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result === undefined) {
      return results;
    }

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
      return result.then(function (resolvedResult) {
        results[responseName] = resolvedResult;
        return results;
      });
    }

    results[responseName] = result;
    return results;
  }, Object.create(null));
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "read" mode.
 */


function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var results = Object.create(null);
  var containsPromise = false;

  for (var i = 0, keys = Object.keys(fields); i < keys.length; ++i) {
    var responseName = keys[i];
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result !== undefined) {
      results[responseName] = result;

      if (!containsPromise && Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
        containsPromise = true;
      }
    }
  } // If there are no promises, we can just return the object


  if (!containsPromise) {
    return results;
  } // Otherwise, results is a map from field name to the result of resolving that
  // field, which is possibly a promise. Return a promise that will return this
  // same map, but with any promises replaced with the values they resolved to.


  return Object(_jsutils_promiseForObject__WEBPACK_IMPORTED_MODULE_9__["default"])(results);
}
/**
 * Given a selectionSet, adds all of the fields in that selection to
 * the passed in map of fields, and returns it at the end.
 *
 * CollectFields requires the "runtime type" of an object. For a field which
 * returns an Interface or Union type, the "runtime type" will be the actual
 * Object type returned by that field.
 */


function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (var i = 0; i < selectionSet.selections.length; i++) {
    var selection = selectionSet.selections[i];

    switch (selection.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_13__["Kind"].FIELD:
        {
          if (!shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          var name = getFieldEntryKey(selection);

          if (!fields[name]) {
            fields[name] = [];
          }

          fields[name].push(selection);
          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_13__["Kind"].INLINE_FRAGMENT:
        {
          if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_13__["Kind"].FRAGMENT_SPREAD:
        {
          var fragName = selection.name.value;

          if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          visitedFragmentNames[fragName] = true;
          var fragment = exeContext.fragments[fragName];

          if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
          break;
        }
    }
  }

  return fields;
}
/**
 * Determines if a field should be included based on the @include and @skip
 * directives, where @skip has higher precedence than @include.
 */

function shouldIncludeNode(exeContext, node) {
  var skip = Object(_values__WEBPACK_IMPORTED_MODULE_14__["getDirectiveValues"])(_type_directives__WEBPACK_IMPORTED_MODULE_17__["GraphQLSkipDirective"], node, exeContext.variableValues);

  if (skip && skip.if === true) {
    return false;
  }

  var include = Object(_values__WEBPACK_IMPORTED_MODULE_14__["getDirectiveValues"])(_type_directives__WEBPACK_IMPORTED_MODULE_17__["GraphQLIncludeDirective"], node, exeContext.variableValues);

  if (include && include.if === false) {
    return false;
  }

  return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */


function doesFragmentConditionMatch(exeContext, fragment, type) {
  var typeConditionNode = fragment.typeCondition;

  if (!typeConditionNode) {
    return true;
  }

  var conditionalType = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_12__["typeFromAST"])(exeContext.schema, typeConditionNode);

  if (conditionalType === type) {
    return true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_15__["isAbstractType"])(conditionalType)) {
    return exeContext.schema.isPossibleType(conditionalType, type);
  }

  return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */


function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
/**
 * Resolves the field on the given source object. In particular, this
 * figures out the value that the field returns by calling its resolve function,
 * then calls completeValue to complete promises, serialize scalars, or execute
 * the sub-selection-set for objects.
 */


function resolveField(exeContext, parentType, source, fieldNodes, path) {
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;
  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);

  if (!fieldDef) {
    return;
  }

  var resolveFn = fieldDef.resolve || exeContext.fieldResolver;
  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path); // Get the resolve function, regardless of if its result is normal
  // or abrupt (error).

  var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);
  return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path, result);
}

function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldDef.name,
    fieldNodes: fieldNodes,
    returnType: fieldDef.type,
    parentType: parentType,
    path: path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
} // Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
// function. Returns the result of resolveFn or the abrupt-return Error object.

function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    var args = Object(_values__WEBPACK_IMPORTED_MODULE_14__["getArgumentValues"])(fieldDef, fieldNodes[0], exeContext.variableValues); // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.

    var _contextValue = exeContext.contextValue;
    var result = resolveFn(source, args, _contextValue, info);
    return Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result) ? result.then(undefined, asErrorInstance) : result;
  } catch (error) {
    return asErrorInstance(error);
  }
} // Sometimes a non-error is thrown, wrap it as an Error instance to ensure a
// consistent Error interface.

function asErrorInstance(error) {
  if (error instanceof Error) {
    return error;
  }

  return new Error('Unexpected error value: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_3__["default"])(error));
} // This is a small wrapper around completeValue which detects and logs errors
// in the execution context.


function completeValueCatchingError(exeContext, returnType, fieldNodes, info, path, result) {
  try {
    var completed;

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
      completed = result.then(function (resolved) {
        return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
      });
    } else {
      completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    }

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(completed)) {
      // Note: we don't rely on a `catch` method, but we do expect "thenable"
      // to take a second callback for the error case.
      return completed.then(undefined, function (error) {
        return handleFieldError(error, fieldNodes, path, returnType, exeContext);
      });
    }

    return completed;
  } catch (error) {
    return handleFieldError(error, fieldNodes, path, returnType, exeContext);
  }
}

function handleFieldError(rawError, fieldNodes, path, returnType, exeContext) {
  var error = Object(_error_locatedError__WEBPACK_IMPORTED_MODULE_2__["locatedError"])(asErrorInstance(rawError), fieldNodes, responsePathAsArray(path)); // If the field type is non-nullable, then it is resolved without any
  // protection from errors, however it still properly locates the error.

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_15__["isNonNullType"])(returnType)) {
    throw error;
  } // Otherwise, error protection is applied, logging the error and resolving
  // a null value for this field if one is encountered.


  exeContext.errors.push(error);
  return null;
}
/**
 * Implements the instructions for completeValue as defined in the
 * "Field entries" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by evaluating all sub-selections.
 */


function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If result is an Error, throw a located error.
  if (result instanceof Error) {
    throw result;
  } // If field type is NonNull, complete for inner type, and throw field error
  // if result is null.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_15__["isNonNullType"])(returnType)) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);

    if (completed === null) {
      throw new Error("Cannot return null for non-nullable field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
    }

    return completed;
  } // If result value is null-ish (null, undefined, or NaN) then return null.


  if (Object(_jsutils_isNullish__WEBPACK_IMPORTED_MODULE_6__["default"])(result)) {
    return null;
  } // If field type is List, complete each item in the list with the inner type


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_15__["isListType"])(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
  // returning null if serialization is not possible.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_15__["isLeafType"])(returnType)) {
    return completeLeafValue(returnType, result);
  } // If field type is an abstract type, Interface or Union, determine the
  // runtime Object type and complete for that type.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_15__["isAbstractType"])(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is Object, execute and complete all sub-selections.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_15__["isObjectType"])(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  } // Not reachable. All possible output types have been considered.

  /* istanbul ignore next */


  throw new Error("Cannot complete value of unexpected output type: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_3__["default"])(returnType), "\"."));
}
/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */


function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  !Object(iterall__WEBPACK_IMPORTED_MODULE_0__["isCollection"])(result) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(0, "Expected Iterable, but did not find one for field ".concat(info.parentType.name, ".").concat(info.fieldName, ".")) : void 0; // This is specified as a simple map, however we're optimizing the path
  // where the list contains no Promises by avoiding creating another Promise.

  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = [];
  Object(iterall__WEBPACK_IMPORTED_MODULE_0__["forEach"])(result, function (item, index) {
    // No need to modify the info object containing the path,
    // since from here on it is not ever accessed by resolver functions.
    var fieldPath = addPath(path, index);
    var completedItem = completeValueCatchingError(exeContext, itemType, fieldNodes, info, fieldPath, item);

    if (!containsPromise && Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(completedItem)) {
      containsPromise = true;
    }

    completedResults.push(completedItem);
  });
  return containsPromise ? Promise.all(completedResults) : completedResults;
}
/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */


function completeLeafValue(returnType, result) {
  !returnType.serialize ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Missing serialize method on type') : void 0;
  var serializedResult = returnType.serialize(result);

  if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_5__["default"])(serializedResult)) {
    throw new Error("Expected a value of type \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_3__["default"])(returnType), "\" but ") + "received: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_3__["default"])(result)));
  }

  return serializedResult;
}
/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */


function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var resolveTypeFn = returnType.resolveType || exeContext.typeResolver;
  var contextValue = exeContext.contextValue;
  var runtimeType = resolveTypeFn(result, contextValue, info, returnType);

  if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(runtimeType)) {
    return runtimeType.then(function (resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    });
  }

  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}

function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
  var runtimeType = typeof runtimeTypeOrName === 'string' ? exeContext.schema.getType(runtimeTypeOrName) : runtimeTypeOrName;

  if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_15__["isObjectType"])(runtimeType)) {
    throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Abstract type ".concat(returnType.name, " must resolve to an Object type at ") + "runtime for field ".concat(info.parentType.name, ".").concat(info.fieldName, " with ") + "value ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_3__["default"])(result), ", received \"").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_3__["default"])(runtimeType), "\". ") + "Either the ".concat(returnType.name, " type should provide a \"resolveType\" ") + 'function or each possible type should provide an "isTypeOf" function.', fieldNodes);
  }

  if (!exeContext.schema.isPossibleType(returnType, runtimeType)) {
    throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Runtime Object type \"".concat(runtimeType.name, "\" is not a possible type ") + "for \"".concat(returnType.name, "\"."), fieldNodes);
  }

  return runtimeType;
}
/**
 * Complete an Object value by executing all sub-selections.
 */


function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If there is an isTypeOf predicate function, call it with the
  // current result. If isTypeOf returns false, then raise an error rather
  // than continuing execution.
  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(isTypeOf)) {
      return isTypeOf.then(function (resolvedIsTypeOf) {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }

        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
      });
    }

    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }

  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
}

function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Expected value of type \"".concat(returnType.name, "\" but got: ").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_3__["default"])(result), "."), fieldNodes);
}

function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result) {
  // Collect sub-fields to execute to complete this value.
  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}
/**
 * A memoized collection of relevant subfields with regard to the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */


var collectSubfields = Object(_jsutils_memoize3__WEBPACK_IMPORTED_MODULE_8__["default"])(_collectSubfields);

function _collectSubfields(exeContext, returnType, fieldNodes) {
  var subFieldNodes = Object.create(null);
  var visitedFragmentNames = Object.create(null);

  for (var i = 0; i < fieldNodes.length; i++) {
    var selectionSet = fieldNodes[i].selectionSet;

    if (selectionSet) {
      subFieldNodes = collectFields(exeContext, returnType, selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }

  return subFieldNodes;
}
/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which attempts two strategies:
 *
 * First, See if the provided value has a `__typename` field defined, if so, use
 * that value as name of the resolved type.
 *
 * Otherwise, test each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */


var defaultTypeResolver = function defaultTypeResolver(value, contextValue, info, abstractType) {
  // First, look for `__typename`.
  if (value !== null && _typeof(value) === 'object' && typeof value.__typename === 'string') {
    return value.__typename;
  } // Otherwise, test each possible type.


  var possibleTypes = info.schema.getPossibleTypes(abstractType);
  var promisedIsTypeOfResults = [];

  for (var i = 0; i < possibleTypes.length; i++) {
    var type = possibleTypes[i];

    if (type.isTypeOf) {
      var isTypeOfResult = type.isTypeOf(value, contextValue, info);

      if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(isTypeOfResult)) {
        promisedIsTypeOfResults[i] = isTypeOfResult;
      } else if (isTypeOfResult) {
        return type;
      }
    }
  }

  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
      for (var _i = 0; _i < isTypeOfResults.length; _i++) {
        if (isTypeOfResults[_i]) {
          return possibleTypes[_i];
        }
      }
    });
  }
};
/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context value.
 */

var defaultFieldResolver = function defaultFieldResolver(source, args, contextValue, info) {
  // ensure source is a value for which property access is acceptable.
  if (_typeof(source) === 'object' || typeof source === 'function') {
    var property = source[info.fieldName];

    if (typeof property === 'function') {
      return source[info.fieldName](args, contextValue, info);
    }

    return property;
  }
};
/**
 * This method looks up the field on the given type definition.
 * It has special casing for the two introspection fields, __schema
 * and __typename. __typename is special because it can always be
 * queried as a field, even in situations where no other fields
 * are allowed, like on a Union. __schema could get automatically
 * added to the query type, but that would require mutating type
 * definitions, which would cause issues.
 */

function getFieldDef(schema, parentType, fieldName) {
  if (fieldName === _type_introspection__WEBPACK_IMPORTED_MODULE_16__["SchemaMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_16__["SchemaMetaFieldDef"];
  } else if (fieldName === _type_introspection__WEBPACK_IMPORTED_MODULE_16__["TypeMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_16__["TypeMetaFieldDef"];
  } else if (fieldName === _type_introspection__WEBPACK_IMPORTED_MODULE_16__["TypeNameMetaFieldDef"].name) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_16__["TypeNameMetaFieldDef"];
  }

  return parentType.getFields()[fieldName];
}


/***/ }),

/***/ "./node_modules/graphql/execution/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/execution/index.mjs ***!
  \**************************************************/
/*! exports provided: execute, defaultFieldResolver, defaultTypeResolver, responsePathAsArray, getDirectiveValues */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _execute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./execute */ "./node_modules/graphql/execution/execute.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _execute__WEBPACK_IMPORTED_MODULE_0__["execute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return _execute__WEBPACK_IMPORTED_MODULE_0__["defaultFieldResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTypeResolver", function() { return _execute__WEBPACK_IMPORTED_MODULE_0__["defaultTypeResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsePathAsArray", function() { return _execute__WEBPACK_IMPORTED_MODULE_0__["responsePathAsArray"]; });

/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values */ "./node_modules/graphql/execution/values.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveValues", function() { return _values__WEBPACK_IMPORTED_MODULE_1__["getDirectiveValues"]; });

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/***/ }),

/***/ "./node_modules/graphql/execution/values.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/execution/values.mjs ***!
  \***************************************************/
/*! exports provided: getVariableValues, getArgumentValues, getDirectiveValues */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVariableValues", function() { return getVariableValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArgumentValues", function() { return getArgumentValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveValues", function() { return getDirectiveValues; });
/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/keyMap */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _utilities_coerceValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/coerceValue */ "./node_modules/graphql/utilities/coerceValue.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/typeFromAST */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_valueFromAST__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/valueFromAST */ "./node_modules/graphql/utilities/valueFromAST.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */












/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getVariableValues(schema, varDefNodes, inputs) {
  var errors = [];
  var coercedValues = {};

  for (var i = 0; i < varDefNodes.length; i++) {
    var varDefNode = varDefNodes[i];
    var varName = varDefNode.variable.name.value;
    var varType = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_6__["typeFromAST"])(schema, varDefNode.type);

    if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["isInputType"])(varType)) {
      // Must use input types for variables. This should be caught during
      // validation, however is checked again here for safety.
      errors.push(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Variable \"$".concat(varName, "\" expected value of type ") + "\"".concat(Object(_language_printer__WEBPACK_IMPORTED_MODULE_9__["print"])(varDefNode.type), "\" which cannot be used as an input type."), varDefNode.type));
    } else {
      var hasValue = hasOwnProperty(inputs, varName);
      var value = hasValue ? inputs[varName] : undefined;

      if (!hasValue && varDefNode.defaultValue) {
        // If no value was provided to a variable with a default value,
        // use the default value.
        coercedValues[varName] = Object(_utilities_valueFromAST__WEBPACK_IMPORTED_MODULE_7__["valueFromAST"])(varDefNode.defaultValue, varType);
      } else if ((!hasValue || value === null) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["isNonNullType"])(varType)) {
        // If no value or a nullish value was provided to a variable with a
        // non-null type (required), produce an error.
        errors.push(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](hasValue ? "Variable \"$".concat(varName, "\" of non-null type ") + "\"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(varType), "\" must not be null.") : "Variable \"$".concat(varName, "\" of required type ") + "\"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(varType), "\" was not provided."), varDefNode));
      } else if (hasValue) {
        if (value === null) {
          // If the explicit value `null` was provided, an entry in the coerced
          // values must exist as the value `null`.
          coercedValues[varName] = null;
        } else {
          // Otherwise, a non-null value was provided, coerce it to the expected
          // type or report an error if coercion fails.
          var coerced = Object(_utilities_coerceValue__WEBPACK_IMPORTED_MODULE_5__["coerceValue"])(value, varType, varDefNode);
          var coercionErrors = coerced.errors;

          if (coercionErrors) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = coercionErrors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var error = _step.value;
                error.message = "Variable \"$".concat(varName, "\" got invalid value ").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value), "; ") + error.message;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            errors.push.apply(errors, coercionErrors);
          } else {
            coercedValues[varName] = coerced.value;
          }
        }
      }
    }
  }

  return errors.length === 0 ? {
    errors: undefined,
    coerced: coercedValues
  } : {
    errors: errors,
    coerced: undefined
  };
}
/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */

function getArgumentValues(def, node, variableValues) {
  var coercedValues = {};
  var argDefs = def.args;
  var argNodes = node.arguments;

  if (!argDefs || !argNodes) {
    return coercedValues;
  }

  var argNodeMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_4__["default"])(argNodes, function (arg) {
    return arg.name.value;
  });

  for (var i = 0; i < argDefs.length; i++) {
    var argDef = argDefs[i];
    var name = argDef.name;
    var argType = argDef.type;
    var argumentNode = argNodeMap[name];
    var hasValue = void 0;
    var isNull = void 0;

    if (argumentNode && argumentNode.value.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_8__["Kind"].VARIABLE) {
      var variableName = argumentNode.value.name.value;
      hasValue = variableValues != null && hasOwnProperty(variableValues, variableName);
      isNull = variableValues != null && variableValues[variableName] === null;
    } else {
      hasValue = argumentNode != null;
      isNull = argumentNode != null && argumentNode.value.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_8__["Kind"].NULL;
    }

    if (!hasValue && argDef.defaultValue !== undefined) {
      // If no argument was provided where the definition has a default value,
      // use the default value.
      coercedValues[name] = argDef.defaultValue;
    } else if ((!hasValue || isNull) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_10__["isNonNullType"])(argType)) {
      // If no argument or a null value was provided to an argument with a
      // non-null type (required), produce a field error.
      if (isNull) {
        throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Argument \"".concat(name, "\" of non-null type \"").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(argType), "\" ") + 'must not be null.', argumentNode.value);
      } else if (argumentNode && argumentNode.value.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_8__["Kind"].VARIABLE) {
        var _variableName = argumentNode.value.name.value;
        throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Argument \"".concat(name, "\" of required type \"").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(argType), "\" ") + "was provided the variable \"$".concat(_variableName, "\" ") + 'which was not provided a runtime value.', argumentNode.value);
      } else {
        throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Argument \"".concat(name, "\" of required type \"").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(argType), "\" ") + 'was not provided.', node);
      }
    } else if (hasValue) {
      if (argumentNode.value.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_8__["Kind"].NULL) {
        // If the explicit value `null` was provided, an entry in the coerced
        // values must exist as the value `null`.
        coercedValues[name] = null;
      } else if (argumentNode.value.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_8__["Kind"].VARIABLE) {
        var _variableName2 = argumentNode.value.name.value;
        !variableValues ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(0, 'Must exist for hasValue to be true.') : void 0; // Note: This does no further checking that this variable is correct.
        // This assumes that this query has been validated and the variable
        // usage here is of the correct type.

        coercedValues[name] = variableValues[_variableName2];
      } else {
        var valueNode = argumentNode.value;
        var coercedValue = Object(_utilities_valueFromAST__WEBPACK_IMPORTED_MODULE_7__["valueFromAST"])(valueNode, argType, variableValues);

        if (coercedValue === undefined) {
          // Note: ValuesOfCorrectType validation should catch this before
          // execution. This is a runtime check to ensure execution does not
          // continue with an invalid argument value.
          throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Argument \"".concat(name, "\" has invalid value ").concat(Object(_language_printer__WEBPACK_IMPORTED_MODULE_9__["print"])(valueNode), "."), argumentNode.value);
        }

        coercedValues[name] = coercedValue;
      }
    }
  }

  return coercedValues;
}
/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */

function getDirectiveValues(directiveDef, node, variableValues) {
  var directiveNode = node.directives && Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(node.directives, function (directive) {
    return directive.name.value === directiveDef.name;
  });

  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),

/***/ "./node_modules/graphql/graphql.mjs":
/*!******************************************!*\
  !*** ./node_modules/graphql/graphql.mjs ***!
  \******************************************/
/*! exports provided: graphql, graphqlSync */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphqlSync", function() { return graphqlSync; });
/* harmony import */ var _jsutils_isPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsutils/isPromise */ "./node_modules/graphql/jsutils/isPromise.mjs");
/* harmony import */ var _type_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type/validate */ "./node_modules/graphql/type/validate.mjs");
/* harmony import */ var _language_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/parser */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _validation_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation/validate */ "./node_modules/graphql/validation/validate.mjs");
/* harmony import */ var _execution_execute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./execution/execute */ "./node_modules/graphql/execution/execute.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  var _arguments = arguments;

  /* eslint-enable no-redeclare */
  // Always return a Promise for a consistent API.
  return new Promise(function (resolve) {
    return resolve( // Extract arguments from object args if provided.
    _arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver, argsOrSchema.typeResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver));
  });
}
/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

function graphqlSync(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  var result = arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver, argsOrSchema.typeResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver); // Assert that the execution was synchronous.

  if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_0__["default"])(result)) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }

  return result;
}

function graphqlImpl(schema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  // Validate Schema
  var schemaValidationErrors = Object(_type_validate__WEBPACK_IMPORTED_MODULE_1__["validateSchema"])(schema);

  if (schemaValidationErrors.length > 0) {
    return {
      errors: schemaValidationErrors
    };
  } // Parse


  var document;

  try {
    document = Object(_language_parser__WEBPACK_IMPORTED_MODULE_2__["parse"])(source);
  } catch (syntaxError) {
    return {
      errors: [syntaxError]
    };
  } // Validate


  var validationErrors = Object(_validation_validate__WEBPACK_IMPORTED_MODULE_3__["validate"])(schema, document);

  if (validationErrors.length > 0) {
    return {
      errors: validationErrors
    };
  } // Execute


  return Object(_execution_execute__WEBPACK_IMPORTED_MODULE_4__["execute"])(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver);
}


/***/ }),

/***/ "./node_modules/graphql/index.mjs":
/*!****************************************!*\
  !*** ./node_modules/graphql/index.mjs ***!
  \****************************************/
/*! exports provided: graphql, graphqlSync, GraphQLSchema, GraphQLDirective, GraphQLScalarType, GraphQLObjectType, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, specifiedScalarTypes, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLID, specifiedDirectives, GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective, TypeKind, DEFAULT_DEPRECATION_REASON, introspectionTypes, __Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind, SchemaMetaFieldDef, TypeMetaFieldDef, TypeNameMetaFieldDef, isSchema, isDirective, isType, isScalarType, isObjectType, isInterfaceType, isUnionType, isEnumType, isInputObjectType, isListType, isNonNullType, isInputType, isOutputType, isLeafType, isCompositeType, isAbstractType, isWrappingType, isNullableType, isNamedType, isRequiredArgument, isRequiredInputField, isSpecifiedScalarType, isIntrospectionType, isSpecifiedDirective, assertSchema, assertDirective, assertType, assertScalarType, assertObjectType, assertInterfaceType, assertUnionType, assertEnumType, assertInputObjectType, assertListType, assertNonNullType, assertInputType, assertOutputType, assertLeafType, assertCompositeType, assertAbstractType, assertWrappingType, assertNullableType, assertNamedType, getNullableType, getNamedType, validateSchema, assertValidSchema, Source, getLocation, createLexer, TokenKind, parse, parseValue, parseType, print, visit, visitInParallel, visitWithTypeInfo, getVisitFn, BREAK, Kind, DirectiveLocation, isDefinitionNode, isExecutableDefinitionNode, isSelectionNode, isValueNode, isTypeNode, isTypeSystemDefinitionNode, isTypeDefinitionNode, isTypeSystemExtensionNode, isTypeExtensionNode, execute, defaultFieldResolver, defaultTypeResolver, responsePathAsArray, getDirectiveValues, subscribe, createSourceEventStream, validate, ValidationContext, specifiedRules, FieldsOnCorrectTypeRule, FragmentsOnCompositeTypesRule, KnownArgumentNamesRule, KnownDirectivesRule, KnownFragmentNamesRule, KnownTypeNamesRule, LoneAnonymousOperationRule, NoFragmentCyclesRule, NoUndefinedVariablesRule, NoUnusedFragmentsRule, NoUnusedVariablesRule, OverlappingFieldsCanBeMergedRule, PossibleFragmentSpreadsRule, ProvidedRequiredArgumentsRule, ScalarLeafsRule, SingleFieldSubscriptionsRule, UniqueArgumentNamesRule, UniqueDirectivesPerLocationRule, UniqueFragmentNamesRule, UniqueInputFieldNamesRule, UniqueOperationNamesRule, UniqueVariableNamesRule, ValuesOfCorrectTypeRule, VariablesAreInputTypesRule, VariablesInAllowedPositionRule, GraphQLError, syntaxError, locatedError, printError, formatError, getIntrospectionQuery, introspectionQuery, getOperationAST, getOperationRootType, introspectionFromSchema, buildClientSchema, buildASTSchema, buildSchema, getDescription, extendSchema, lexicographicSortSchema, printSchema, printType, printIntrospectionSchema, typeFromAST, valueFromAST, valueFromASTUntyped, astFromValue, TypeInfo, coerceValue, isValidJSValue, isValidLiteralValue, concatAST, separateOperations, stripIgnoredCharacters, isEqualType, isTypeSubTypeOf, doTypesOverlap, assertValidName, isValidNameError, BreakingChangeType, DangerousChangeType, findBreakingChanges, findDangerousChanges, findDeprecatedUsages */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphql */ "./node_modules/graphql/graphql.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return _graphql__WEBPACK_IMPORTED_MODULE_0__["graphql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphqlSync", function() { return _graphql__WEBPACK_IMPORTED_MODULE_0__["graphqlSync"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/graphql/type/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSchema", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedScalarTypes", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["specifiedScalarTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInt", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLFloat", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLString", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLBoolean", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLID", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedDirectives", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["specifiedDirectives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLIncludeDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLIncludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSkipDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLSkipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDeprecatedDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["GraphQLDeprecatedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeKind", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DEPRECATION_REASON", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_DEPRECATION_REASON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionTypes", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["introspectionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Schema", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["__Schema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Directive", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["__Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DirectiveLocation", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["__DirectiveLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Type", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["__Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Field", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["__Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__InputValue", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["__InputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__EnumValue", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["__EnumValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__TypeKind", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["__TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaMetaFieldDef", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["SchemaMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeMetaFieldDef", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["TypeMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeNameMetaFieldDef", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["TypeNameMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSchema", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isListType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredArgument", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isRequiredArgument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredInputField", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isRequiredInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedScalarType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isSpecifiedScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIntrospectionType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isIntrospectionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["isSpecifiedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertSchema", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertDirective", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertListType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["getNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["getNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["validateSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["assertValidSchema"]; });

/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language */ "./node_modules/graphql/language/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["Source"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLexer", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["createLexer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["TokenKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["parseValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["parseType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["print"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["visit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["visitInParallel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["visitWithTypeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["getVisitFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["BREAK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["Kind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefinitionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["isDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExecutableDefinitionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["isExecutableDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelectionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["isSelectionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValueNode", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["isValueNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeNode", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["isTypeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemDefinitionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["isTypeSystemDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeDefinitionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["isTypeDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemExtensionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["isTypeSystemExtensionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeExtensionNode", function() { return _language__WEBPACK_IMPORTED_MODULE_2__["isTypeExtensionNode"]; });

/* harmony import */ var _execution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./execution */ "./node_modules/graphql/execution/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _execution__WEBPACK_IMPORTED_MODULE_3__["execute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return _execution__WEBPACK_IMPORTED_MODULE_3__["defaultFieldResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTypeResolver", function() { return _execution__WEBPACK_IMPORTED_MODULE_3__["defaultTypeResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsePathAsArray", function() { return _execution__WEBPACK_IMPORTED_MODULE_3__["responsePathAsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveValues", function() { return _execution__WEBPACK_IMPORTED_MODULE_3__["getDirectiveValues"]; });

/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscription */ "./node_modules/graphql/subscription/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return _subscription__WEBPACK_IMPORTED_MODULE_4__["subscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSourceEventStream", function() { return _subscription__WEBPACK_IMPORTED_MODULE_4__["createSourceEventStream"]; });

/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation */ "./node_modules/graphql/validation/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["validate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationContext", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["ValidationContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedRules", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["specifiedRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldsOnCorrectTypeRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["FieldsOnCorrectTypeRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FragmentsOnCompositeTypesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["FragmentsOnCompositeTypesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["KnownArgumentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownDirectivesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["KnownDirectivesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownFragmentNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["KnownFragmentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownTypeNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["KnownTypeNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoneAnonymousOperationRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["LoneAnonymousOperationRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoFragmentCyclesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["NoFragmentCyclesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUndefinedVariablesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["NoUndefinedVariablesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedFragmentsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["NoUnusedFragmentsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedVariablesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["NoUnusedVariablesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlappingFieldsCanBeMergedRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["OverlappingFieldsCanBeMergedRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreadsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["PossibleFragmentSpreadsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArgumentsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["ProvidedRequiredArgumentsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScalarLeafsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["ScalarLeafsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleFieldSubscriptionsRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["SingleFieldSubscriptionsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueArgumentNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["UniqueArgumentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectivesPerLocationRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["UniqueDirectivesPerLocationRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueFragmentNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["UniqueFragmentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueInputFieldNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["UniqueInputFieldNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["UniqueOperationNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueVariableNamesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["UniqueVariableNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValuesOfCorrectTypeRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["ValuesOfCorrectTypeRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesAreInputTypesRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["VariablesAreInputTypesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesInAllowedPositionRule", function() { return _validation__WEBPACK_IMPORTED_MODULE_5__["VariablesInAllowedPositionRule"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error */ "./node_modules/graphql/error/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return _error__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return _error__WEBPACK_IMPORTED_MODULE_6__["syntaxError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return _error__WEBPACK_IMPORTED_MODULE_6__["locatedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return _error__WEBPACK_IMPORTED_MODULE_6__["printError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return _error__WEBPACK_IMPORTED_MODULE_6__["formatError"]; });

/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities */ "./node_modules/graphql/utilities/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIntrospectionQuery", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["getIntrospectionQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionQuery", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["introspectionQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationAST", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["getOperationAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationRootType", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["getOperationRootType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionFromSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["introspectionFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClientSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["buildClientSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildASTSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["buildASTSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["buildSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["getDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["extendSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexicographicSortSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["lexicographicSortSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["printSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printType", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["printType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printIntrospectionSchema", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["printIntrospectionSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["typeFromAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromAST", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["valueFromAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["valueFromASTUntyped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "astFromValue", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["astFromValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["TypeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceValue", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["coerceValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidJSValue", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["isValidJSValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidLiteralValue", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["isValidLiteralValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatAST", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["concatAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "separateOperations", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["separateOperations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripIgnoredCharacters", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["stripIgnoredCharacters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["isEqualType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["isTypeSubTypeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["doTypesOverlap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidName", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["assertValidName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNameError", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["isValidNameError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakingChangeType", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["BreakingChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DangerousChangeType", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["DangerousChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findBreakingChanges", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["findBreakingChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDangerousChanges", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["findDangerousChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDeprecatedUsages", function() { return _utilities__WEBPACK_IMPORTED_MODULE_7__["findDeprecatedUsages"]; });

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * GraphQL.js provides a reference implementation for the GraphQL specification
 * but is also a useful utility for operating on GraphQL files and building
 * sophisticated tools.
 *
 * This primary module exports a general purpose function for fulfilling all
 * steps of the GraphQL specification in a single operation, but also includes
 * utilities for every part of the GraphQL specification:
 *
 *   - Parsing the GraphQL language.
 *   - Building a GraphQL type schema.
 *   - Validating a GraphQL request against a type schema.
 *   - Executing a GraphQL request against a type schema.
 *
 * This also includes utility functions for operating on GraphQL types and
 * GraphQL documents to facilitate building tools.
 *
 * You may also import from each sub-directory directly. For example, the
 * following two import statements are equivalent:
 *
 *     import { parse } from 'graphql';
 *     import { parse } from 'graphql/language';
 */
// The primary entry point into fulfilling a GraphQL request.
 // Create and operate on GraphQL type definitions and schema.


// Parse and operate on GraphQL language source files.

// Execute GraphQL queries.

 // Validate GraphQL documents.


// Create, format, and print GraphQL errors.

// Utilities for operating on GraphQL type schema and parsed sources.



/***/ }),

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/instanceOf.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
/* harmony default export */ __webpack_exports__["default"] = ( false ? // eslint-disable-next-line no-shadow
undefined : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;

    if (className && valueClass && valueClass.name === className) {
      throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
});


/***/ }),

/***/ "./node_modules/graphql/jsutils/isInvalid.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/isInvalid.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isInvalid; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Returns true if a value is undefined, or NaN.
 */
function isInvalid(value) {
  return value === undefined || value !== value;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isNullish.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/isNullish.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNullish; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Returns true if a value is null, undefined, or NaN.
 */
function isNullish(value) {
  return value === null || value === undefined || value !== value;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isPromise.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/isPromise.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPromise; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Returns true if the value acts like a Promise, i.e. has a "then" function,
 * otherwise returns false.
 */
// eslint-disable-next-line no-redeclare
function isPromise(value) {
  return Boolean(value && typeof value.then === 'function');
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/keyMap.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/jsutils/keyMap.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyMap; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = item;
    return map;
  }, Object.create(null));
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/keyValMap.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/keyValMap.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyValMap; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = valFn(item);
    return map;
  }, Object.create(null));
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/mapValue.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/jsutils/mapValue.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapValue; });
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Creates an object map with the same keys as `map` and values generated by
 * running each value of `map` thru `fn`.
 */

function mapValue(map, fn) {
  var result = Object.create(null);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(map)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref2 = _step.value;
      var _key = _ref2[0];
      var _value = _ref2[1];
      result[_key] = fn(_value, _key);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/memoize3.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/jsutils/memoize3.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize3; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Memoizes the provided three-argument function.
 */
function memoize3(fn) {
  var cache0;

  function memoized(a1, a2, a3) {
    if (!cache0) {
      cache0 = new WeakMap();
    }

    var cache1 = cache0.get(a1);
    var cache2;

    if (cache1) {
      cache2 = cache1.get(a2);

      if (cache2) {
        var cachedValue = cache2.get(a3);

        if (cachedValue !== undefined) {
          return cachedValue;
        }
      }
    } else {
      cache1 = new WeakMap();
      cache0.set(a1, cache1);
    }

    if (!cache2) {
      cache2 = new WeakMap();
      cache1.set(a2, cache2);
    }

    var newValue = fn(a1, a2, a3);
    cache2.set(a3, newValue);
    return newValue;
  }

  return memoized;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/orList.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/jsutils/orList.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orList; });
/* harmony import */ var _invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var MAX_LENGTH = 5;
/**
 * Given [ A, B, C ] return 'A, B, or C'.
 */

function orList(items) {
  !(items.length !== 0) ? Object(_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(0) : void 0;

  if (items.length === 1) {
    return items[0];
  }

  if (items.length === 2) {
    return items[0] + ' or ' + items[1];
  }

  var selected = items.slice(0, MAX_LENGTH);
  var lastItem = selected.pop();
  return selected.join(', ') + ', or ' + lastItem;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/promiseForObject.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/graphql/jsutils/promiseForObject.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return promiseForObject; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
function promiseForObject(object) {
  var keys = Object.keys(object);
  var valuesAndPromises = keys.map(function (name) {
    return object[name];
  });
  return Promise.all(valuesAndPromises).then(function (values) {
    return values.reduce(function (resolvedObject, value, i) {
      resolvedObject[keys[i]] = value;
      return resolvedObject;
    }, Object.create(null));
  });
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/promiseReduce.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/jsutils/promiseReduce.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return promiseReduce; });
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPromise */ "./node_modules/graphql/jsutils/isPromise.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */
function promiseReduce(values, callback, initialValue) {
  return values.reduce(function (previous, value) {
    return Object(_isPromise__WEBPACK_IMPORTED_MODULE_0__["default"])(previous) ? previous.then(function (resolved) {
      return callback(resolved, value);
    }) : callback(previous, value);
  }, initialValue);
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/quotedOrList.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/quotedOrList.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quotedOrList; });
/* harmony import */ var _orList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orList */ "./node_modules/graphql/jsutils/orList.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Given [ A, B, C ] return '"A", "B", or "C"'.
 */

function quotedOrList(items) {
  return Object(_orList__WEBPACK_IMPORTED_MODULE_0__["default"])(items.map(function (item) {
    return "\"".concat(item, "\"");
  }));
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/suggestionList.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/jsutils/suggestionList.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return suggestionList; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */
function suggestionList(input, options) {
  var optionsByDistance = Object.create(null);
  var oLength = options.length;
  var inputThreshold = input.length / 2;

  for (var i = 0; i < oLength; i++) {
    var distance = lexicalDistance(input, options[i]);
    var threshold = Math.max(inputThreshold, options[i].length / 2, 1);

    if (distance <= threshold) {
      optionsByDistance[options[i]] = distance;
    }
  }

  return Object.keys(optionsByDistance).sort(function (a, b) {
    return optionsByDistance[a] - optionsByDistance[b];
  });
}
/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number
 * of edits needed to transform string A into string B. An edit can be an
 * insertion, deletion, or substitution of a single character, or a swap of two
 * adjacent characters.
 *
 * Includes a custom alteration from Damerau-Levenshtein to treat case changes
 * as a single edit which helps identify mis-cased values with an edit distance
 * of 1.
 *
 * This distance can be useful for detecting typos in input or sorting
 *
 * @param {string} a
 * @param {string} b
 * @return {int} distance in number of edits
 */

function lexicalDistance(aStr, bStr) {
  if (aStr === bStr) {
    return 0;
  }

  var i;
  var j;
  var d = [];
  var a = aStr.toLowerCase();
  var b = bStr.toLowerCase();
  var aLength = a.length;
  var bLength = b.length; // Any case change counts as a single edit

  if (a === b) {
    return 1;
  }

  for (i = 0; i <= aLength; i++) {
    d[i] = [i];
  }

  for (j = 1; j <= bLength; j++) {
    d[0][j] = j;
  }

  for (i = 1; i <= aLength; i++) {
    for (j = 1; j <= bLength; j++) {
      var cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);

      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
      }
    }
  }

  return d[aLength][bLength];
}


/***/ }),

/***/ "./node_modules/graphql/language/index.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/index.mjs ***!
  \*************************************************/
/*! exports provided: Source, getLocation, Kind, createLexer, TokenKind, parse, parseValue, parseType, print, visit, visitInParallel, visitWithTypeInfo, getVisitFn, BREAK, isDefinitionNode, isExecutableDefinitionNode, isSelectionNode, isValueNode, isTypeNode, isTypeSystemDefinitionNode, isTypeDefinitionNode, isTypeSystemExtensionNode, isTypeExtensionNode, DirectiveLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./node_modules/graphql/language/source.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return _source__WEBPACK_IMPORTED_MODULE_0__["Source"]; });

/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "./node_modules/graphql/language/location.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _location__WEBPACK_IMPORTED_MODULE_1__["getLocation"]; });

/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return _kinds__WEBPACK_IMPORTED_MODULE_2__["Kind"]; });

/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lexer */ "./node_modules/graphql/language/lexer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLexer", function() { return _lexer__WEBPACK_IMPORTED_MODULE_3__["createLexer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return _lexer__WEBPACK_IMPORTED_MODULE_3__["TokenKind"]; });

/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parser */ "./node_modules/graphql/language/parser.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parser__WEBPACK_IMPORTED_MODULE_4__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _parser__WEBPACK_IMPORTED_MODULE_4__["parseValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return _parser__WEBPACK_IMPORTED_MODULE_4__["parseType"]; });

/* harmony import */ var _printer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _printer__WEBPACK_IMPORTED_MODULE_5__["print"]; });

/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return _visitor__WEBPACK_IMPORTED_MODULE_6__["visit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return _visitor__WEBPACK_IMPORTED_MODULE_6__["visitInParallel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return _visitor__WEBPACK_IMPORTED_MODULE_6__["visitWithTypeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return _visitor__WEBPACK_IMPORTED_MODULE_6__["getVisitFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return _visitor__WEBPACK_IMPORTED_MODULE_6__["BREAK"]; });

/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./predicates */ "./node_modules/graphql/language/predicates.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefinitionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_7__["isDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExecutableDefinitionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_7__["isExecutableDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelectionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_7__["isSelectionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValueNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_7__["isValueNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_7__["isTypeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemDefinitionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_7__["isTypeSystemDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeDefinitionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_7__["isTypeDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemExtensionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_7__["isTypeSystemExtensionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeExtensionNode", function() { return _predicates__WEBPACK_IMPORTED_MODULE_7__["isTypeExtensionNode"]; });

/* harmony import */ var _directiveLocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directiveLocation */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return _directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"]; });

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */











/***/ }),

/***/ "./node_modules/graphql/language/predicates.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/language/predicates.mjs ***!
  \******************************************************/
/*! exports provided: isDefinitionNode, isExecutableDefinitionNode, isSelectionNode, isValueNode, isTypeNode, isTypeSystemDefinitionNode, isTypeDefinitionNode, isTypeSystemExtensionNode, isTypeExtensionNode */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefinitionNode", function() { return isDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExecutableDefinitionNode", function() { return isExecutableDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectionNode", function() { return isSelectionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueNode", function() { return isValueNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeNode", function() { return isTypeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemDefinitionNode", function() { return isTypeSystemDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeDefinitionNode", function() { return isTypeDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemExtensionNode", function() { return isTypeSystemExtensionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeExtensionNode", function() { return isTypeExtensionNode; });
/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kinds */ "./node_modules/graphql/language/kinds.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function isDefinitionNode(node) {
  return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
}
function isExecutableDefinitionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].OPERATION_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].FRAGMENT_DEFINITION;
}
function isSelectionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].FIELD || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].FRAGMENT_SPREAD || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INLINE_FRAGMENT;
}
function isValueNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].VARIABLE || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INT || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].FLOAT || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].STRING || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].BOOLEAN || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].NULL || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].ENUM || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].LIST || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].OBJECT;
}
function isTypeNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].NAMED_TYPE || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].LIST_TYPE || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].NON_NULL_TYPE;
}
function isTypeSystemDefinitionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCALAR_TYPE_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].OBJECT_TYPE_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INTERFACE_TYPE_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].UNION_TYPE_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].ENUM_TYPE_DEFINITION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
  return node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCALAR_TYPE_EXTENSION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].OBJECT_TYPE_EXTENSION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INTERFACE_TYPE_EXTENSION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].UNION_TYPE_EXTENSION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].ENUM_TYPE_EXTENSION || node.kind === _kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].INPUT_OBJECT_TYPE_EXTENSION;
}


/***/ }),

/***/ "./node_modules/graphql/polyfills/find.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/polyfills/find.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-disable no-redeclare */
// $FlowFixMe
var find = Array.prototype.find ? function (list, predicate) {
  return Array.prototype.find.call(list, predicate);
} : function (list, predicate) {
  for (var i = 0; i < list.length; i++) {
    var value = list[i];

    if (predicate(value)) {
      return value;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (find);


/***/ }),

/***/ "./node_modules/graphql/polyfills/flatMap.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/polyfills/flatMap.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-disable no-redeclare */
// $FlowFixMe
var flatMap = Array.prototype.flatMap ? function (list, fn) {
  // $FlowFixMe
  return Array.prototype.flatMap.call(list, fn);
} : function (list, fn) {
  var result = [];

  for (var i = 0; i < list.length; i++) {
    var value = fn(list[i]);

    if (Array.isArray(value)) {
      result = result.concat(value);
    } else {
      result.push(value);
    }
  }

  return result;
};
/* harmony default export */ __webpack_exports__["default"] = (flatMap);


/***/ }),

/***/ "./node_modules/graphql/polyfills/isFinite.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/polyfills/isFinite.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/4441
var isFinite = Number.isFinite || function (value) {
  return typeof value === 'number' && isFinite(value);
};

/* harmony default export */ __webpack_exports__["default"] = (isFinite);


/***/ }),

/***/ "./node_modules/graphql/polyfills/isInteger.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/polyfills/isInteger.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/4441
var isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

/* harmony default export */ __webpack_exports__["default"] = (isInteger);


/***/ }),

/***/ "./node_modules/graphql/polyfills/objectEntries.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/graphql/polyfills/objectEntries.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/5838
var objectEntries = Object.entries || function (obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (objectEntries);


/***/ }),

/***/ "./node_modules/graphql/polyfills/objectValues.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/polyfills/objectValues.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/2221
var objectValues = Object.values || function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (objectValues);


/***/ }),

/***/ "./node_modules/graphql/subscription/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/subscription/index.mjs ***!
  \*****************************************************/
/*! exports provided: subscribe, createSourceEventStream */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribe */ "./node_modules/graphql/subscription/subscribe.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return _subscribe__WEBPACK_IMPORTED_MODULE_0__["subscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSourceEventStream", function() { return _subscribe__WEBPACK_IMPORTED_MODULE_0__["createSourceEventStream"]; });

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/***/ }),

/***/ "./node_modules/graphql/subscription/mapAsyncIterator.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/subscription/mapAsyncIterator.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapAsyncIterator; });
/* harmony import */ var iterall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iterall */ "./node_modules/iterall/index.mjs");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterable, callback, rejectCallback) {
  var iterator = Object(iterall__WEBPACK_IMPORTED_MODULE_0__["getAsyncIterator"])(iterable);
  var $return;
  var abruptClose; // $FlowFixMe(>=0.68.0)

  if (typeof iterator.return === 'function') {
    $return = iterator.return;

    abruptClose = function abruptClose(error) {
      var rethrow = function rethrow() {
        return Promise.reject(error);
      };

      return $return.call(iterator).then(rethrow, rethrow);
    };
  }

  function mapResult(result) {
    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
  }

  var mapReject;

  if (rejectCallback) {
    // Capture rejectCallback to ensure it cannot be null.
    var reject = rejectCallback;

    mapReject = function mapReject(error) {
      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
    };
  }
  /* TODO: Flow doesn't support symbols as keys:
     https://github.com/facebook/flow/issues/3258 */


  return _defineProperty({
    next: function next() {
      return iterator.next().then(mapResult, mapReject);
    },
    return: function _return() {
      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({
        value: undefined,
        done: true
      });
    },
    throw: function _throw(error) {
      // $FlowFixMe(>=0.68.0)
      if (typeof iterator.throw === 'function') {
        return iterator.throw(error).then(mapResult, mapReject);
      }

      return Promise.reject(error).catch(abruptClose);
    }
  }, iterall__WEBPACK_IMPORTED_MODULE_0__["$$asyncIterator"], function () {
    return this;
  });
}

function asyncMapValue(value, callback) {
  return new Promise(function (resolve) {
    return resolve(callback(value));
  });
}

function iteratorResult(value) {
  return {
    value: value,
    done: false
  };
}


/***/ }),

/***/ "./node_modules/graphql/subscription/subscribe.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/subscription/subscribe.mjs ***!
  \*********************************************************/
/*! exports provided: subscribe, createSourceEventStream */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSourceEventStream", function() { return createSourceEventStream; });
/* harmony import */ var iterall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iterall */ "./node_modules/iterall/index.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _error_locatedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/locatedError */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony import */ var _execution_execute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../execution/execute */ "./node_modules/graphql/execution/execute.mjs");
/* harmony import */ var _mapAsyncIterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapAsyncIterator */ "./node_modules/graphql/subscription/mapAsyncIterator.mjs");
/* harmony import */ var _utilities_getOperationRootType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/getOperationRootType */ "./node_modules/graphql/utilities/getOperationRootType.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */







/**
 * Implements the "Subscribe" algorithm described in the GraphQL specification.
 *
 * Returns a Promise which resolves to either an AsyncIterator (if successful)
 * or an ExecutionResult (client error). The promise will be rejected if a
 * server error occurs.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to an AsyncIterator, which
 * yields a stream of ExecutionResults representing the response stream.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */

function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? subscribeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver, argsOrSchema.subscribeFieldResolver) : subscribeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver);
}
/**
 * This function checks if the error is a GraphQLError. If it is, report it as
 * an ExecutionResult, containing only errors and no data. Otherwise treat the
 * error as a system-class error and re-throw it.
 */

function reportGraphQLError(error) {
  if (error instanceof _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"]) {
    return {
      errors: [error]
    };
  }

  throw error;
}

function subscribeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  var sourcePromise = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver); // For each payload yielded from a subscription, map it over the normal
  // GraphQL `execute` function, with `payload` as the rootValue.
  // This implements the "MapSourceToResponseEvent" algorithm described in
  // the GraphQL specification. The `execute` function provides the
  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
  // "ExecuteQuery" algorithm, for which `execute` is also used.

  var mapSourceToResponse = function mapSourceToResponse(payload) {
    return Object(_execution_execute__WEBPACK_IMPORTED_MODULE_4__["execute"])(schema, document, payload, contextValue, variableValues, operationName, fieldResolver);
  }; // Resolve the Source Stream, then map every source value to a
  // ExecutionResult value as described above.


  return sourcePromise.then(function (resultOrStream) {
    return (// Note: Flow can't refine isAsyncIterable, so explicit casts are used.
      Object(iterall__WEBPACK_IMPORTED_MODULE_0__["isAsyncIterable"])(resultOrStream) ? Object(_mapAsyncIterator__WEBPACK_IMPORTED_MODULE_5__["default"])(resultOrStream, mapSourceToResponse, reportGraphQLError) : resultOrStream
    );
  }, reportGraphQLError);
}
/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise<AsyncIterable>.
 *
 * If the client-provided invalid arguments, the source stream could not be
 * created, or the resolver did not return an AsyncIterable, this function will
 * will throw an error, which should be caught and handled by the caller.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */


function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrectly typed, this is an internal
  // developer mistake which should throw an early error.
  Object(_execution_execute__WEBPACK_IMPORTED_MODULE_4__["assertValidExecutionArguments"])(schema, document, variableValues);

  try {
    // If a valid context cannot be created due to incorrect arguments,
    // this will throw an error.
    var exeContext = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_4__["buildExecutionContext"])(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver); // Return early errors if execution context failed.

    if (Array.isArray(exeContext)) {
      return Promise.resolve({
        errors: exeContext
      });
    }

    var type = Object(_utilities_getOperationRootType__WEBPACK_IMPORTED_MODULE_6__["getOperationRootType"])(schema, exeContext.operation);
    var fields = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_4__["collectFields"])(exeContext, type, exeContext.operation.selectionSet, Object.create(null), Object.create(null));
    var responseNames = Object.keys(fields);
    var responseName = responseNames[0];
    var fieldNodes = fields[responseName];
    var fieldNode = fieldNodes[0];
    var fieldName = fieldNode.name.value;
    var fieldDef = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_4__["getFieldDef"])(schema, type, fieldName);

    if (!fieldDef) {
      throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"]("The subscription field \"".concat(fieldName, "\" is not defined."), fieldNodes);
    } // Call the `subscribe()` resolver or the default resolver to produce an
    // AsyncIterable yielding raw payloads.


    var resolveFn = fieldDef.subscribe || exeContext.fieldResolver;
    var path = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_4__["addPath"])(undefined, responseName);
    var info = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_4__["buildResolveInfo"])(exeContext, fieldDef, fieldNodes, type, path); // resolveFieldValueOrError implements the "ResolveFieldEventStream"
    // algorithm from GraphQL specification. It differs from
    // "ResolveFieldValue" due to providing a different `resolveFn`.

    var result = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_4__["resolveFieldValueOrError"])(exeContext, fieldDef, fieldNodes, resolveFn, rootValue, info); // Coerce to Promise for easier error handling and consistent return type.

    return Promise.resolve(result).then(function (eventStream) {
      // If eventStream is an Error, rethrow a located error.
      if (eventStream instanceof Error) {
        throw Object(_error_locatedError__WEBPACK_IMPORTED_MODULE_3__["locatedError"])(eventStream, fieldNodes, Object(_execution_execute__WEBPACK_IMPORTED_MODULE_4__["responsePathAsArray"])(path));
      } // Assert field returned an event stream, otherwise yield an error.


      if (Object(iterall__WEBPACK_IMPORTED_MODULE_0__["isAsyncIterable"])(eventStream)) {
        // Note: isAsyncIterable above ensures this will be correct.
        return eventStream;
      }

      throw new Error('Subscription field must return Async Iterable. Received: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(eventStream));
    });
  } catch (error) {
    return Promise.reject(error);
  }
}


/***/ }),

/***/ "./node_modules/graphql/type/definition.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/type/definition.mjs ***!
  \**************************************************/
/*! exports provided: isType, assertType, isScalarType, assertScalarType, isObjectType, assertObjectType, isInterfaceType, assertInterfaceType, isUnionType, assertUnionType, isEnumType, assertEnumType, isInputObjectType, assertInputObjectType, isListType, assertListType, isNonNullType, assertNonNullType, isInputType, assertInputType, isOutputType, assertOutputType, isLeafType, assertLeafType, isCompositeType, assertCompositeType, isAbstractType, assertAbstractType, GraphQLList, GraphQLNonNull, isWrappingType, assertWrappingType, isNullableType, assertNullableType, getNullableType, isNamedType, assertNamedType, getNamedType, GraphQLScalarType, GraphQLObjectType, argsToArgsConfig, isRequiredArgument, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, GraphQLInputObjectType, isRequiredInputField */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return assertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return isScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return assertScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return isObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return assertObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return isInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return assertInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return isUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return assertUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return isEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return assertEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return isInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return assertInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isListType", function() { return isListType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertListType", function() { return assertListType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return isNonNullType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return assertNonNullType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputType", function() { return isInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return assertInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return isOutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return assertOutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return isLeafType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return assertLeafType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return isCompositeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return assertCompositeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return isAbstractType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return assertAbstractType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return GraphQLList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return GraphQLNonNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return isWrappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return assertWrappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return isNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return assertNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return getNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return isNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return assertNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return getNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return GraphQLScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return GraphQLObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argsToArgsConfig", function() { return argsToArgsConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequiredArgument", function() { return isRequiredArgument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return GraphQLInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return GraphQLUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return GraphQLEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return GraphQLInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequiredInputField", function() { return isRequiredInputField; });
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/defineToJSON */ "./node_modules/graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/defineToStringTag */ "./node_modules/graphql/jsutils/defineToStringTag.mjs");
/* harmony import */ var _jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/instanceOf */ "./node_modules/graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/keyMap */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/keyValMap */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_mapValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/mapValue */ "./node_modules/graphql/jsutils/mapValue.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _utilities_valueFromASTUntyped__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/valueFromASTUntyped */ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */











function isType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}
function assertType(type) {
  !isType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL type.")) : void 0;
  return type;
}
/**
 * There are predicates for each kind of GraphQL type.
 */

// eslint-disable-next-line no-redeclare
function isScalarType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_3__["default"])(type, GraphQLScalarType);
}
function assertScalarType(type) {
  !isScalarType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL Scalar type.")) : void 0;
  return type;
}
// eslint-disable-next-line no-redeclare
function isObjectType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_3__["default"])(type, GraphQLObjectType);
}
function assertObjectType(type) {
  !isObjectType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL Object type.")) : void 0;
  return type;
}
// eslint-disable-next-line no-redeclare
function isInterfaceType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_3__["default"])(type, GraphQLInterfaceType);
}
function assertInterfaceType(type) {
  !isInterfaceType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL Interface type.")) : void 0;
  return type;
}
// eslint-disable-next-line no-redeclare
function isUnionType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_3__["default"])(type, GraphQLUnionType);
}
function assertUnionType(type) {
  !isUnionType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL Union type.")) : void 0;
  return type;
}
// eslint-disable-next-line no-redeclare
function isEnumType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_3__["default"])(type, GraphQLEnumType);
}
function assertEnumType(type) {
  !isEnumType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL Enum type.")) : void 0;
  return type;
}
// eslint-disable-next-line no-redeclare
function isInputObjectType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_3__["default"])(type, GraphQLInputObjectType);
}
function assertInputObjectType(type) {
  !isInputObjectType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL Input Object type.")) : void 0;
  return type;
}
// eslint-disable-next-line no-redeclare
function isListType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_3__["default"])(type, GraphQLList);
}
function assertListType(type) {
  !isListType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL List type.")) : void 0;
  return type;
}
// eslint-disable-next-line no-redeclare
function isNonNullType(type) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_3__["default"])(type, GraphQLNonNull);
}
function assertNonNullType(type) {
  !isNonNullType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL Non-Null type.")) : void 0;
  return type;
}
/**
 * These types may be used as input types for arguments and directives.
 */

function isInputType(type) {
  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}
function assertInputType(type) {
  !isInputType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL input type.")) : void 0;
  return type;
}
/**
 * These types may be used as output types as the result of fields.
 */

function isOutputType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
}
function assertOutputType(type) {
  !isOutputType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL output type.")) : void 0;
  return type;
}
/**
 * These types may describe types which may be leaf values.
 */

function isLeafType(type) {
  return isScalarType(type) || isEnumType(type);
}
function assertLeafType(type) {
  !isLeafType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL leaf type.")) : void 0;
  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isCompositeType(type) {
  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}
function assertCompositeType(type) {
  !isCompositeType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL composite type.")) : void 0;
  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isAbstractType(type) {
  return isInterfaceType(type) || isUnionType(type);
}
function assertAbstractType(type) {
  !isAbstractType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL abstract type.")) : void 0;
  return type;
}
/**
 * List Type Wrapper
 *
 * A list is a wrapping type which points to another type.
 * Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: GraphQLList(PersonType) },
 *         children: { type: GraphQLList(PersonType) },
 *       })
 *     })
 *
 */

// eslint-disable-next-line no-redeclare
function GraphQLList(ofType) {
  if (this instanceof GraphQLList) {
    this.ofType = assertType(ofType);
  } else {
    return new GraphQLList(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLList.prototype.toString = function toString() {
  return '[' + String(this.ofType) + ']';
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_2__["default"])(GraphQLList);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_1__["default"])(GraphQLList);
/**
 * Non-Null Type Wrapper
 *
 * A non-null is a wrapping type which points to another type.
 * Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */

// eslint-disable-next-line no-redeclare
function GraphQLNonNull(ofType) {
  if (this instanceof GraphQLNonNull) {
    this.ofType = assertNullableType(ofType);
  } else {
    return new GraphQLNonNull(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLNonNull.prototype.toString = function toString() {
  return String(this.ofType) + '!';
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_2__["default"])(GraphQLNonNull);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_1__["default"])(GraphQLNonNull);
/**
 * These types wrap and modify other types
 */

function isWrappingType(type) {
  return isListType(type) || isNonNullType(type);
}
function assertWrappingType(type) {
  !isWrappingType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL wrapping type.")) : void 0;
  return type;
}
/**
 * These types can all accept null as a value.
 */

function isNullableType(type) {
  return isType(type) && !isNonNullType(type);
}
function assertNullableType(type) {
  !isNullableType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL nullable type.")) : void 0;
  return type;
}
/* eslint-disable no-redeclare */

function getNullableType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    return isNonNullType(type) ? type.ofType : type;
  }
}
/**
 * These named types do not include modifiers like List or NonNull.
 */

function isNamedType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
}
function assertNamedType(type) {
  !isNamedType(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), " to be a GraphQL named type.")) : void 0;
  return type;
}
/* eslint-disable no-redeclare */

function getNamedType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    var unwrappedType = type;

    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }

    return unwrappedType;
  }
}
/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */

function resolveThunk(thunk) {
  // $FlowFixMe(>=0.90.0)
  return typeof thunk === 'function' ? thunk() : thunk;
}

function undefineIfEmpty(arr) {
  return arr && arr.length > 0 ? arr : undefined;
}
/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function does not return a value (i.e. it returns
 * `undefined`) then an error will be raised and a `null` value will be returned
 * in the response. If the serialize function returns `null`, then no error will
 * be included in the response.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         if (value % 2 === 1) {
 *           return value;
 *         }
 *       }
 *     });
 *
 */


var GraphQLScalarType =
/*#__PURE__*/
function () {
  function GraphQLScalarType(config) {
    this.name = config.name;
    this.description = config.description;
    this.serialize = config.serialize;

    this.parseValue = config.parseValue || function (value) {
      return value;
    };

    this.parseLiteral = config.parseLiteral || _utilities_valueFromASTUntyped__WEBPACK_IMPORTED_MODULE_10__["valueFromASTUntyped"];
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    !(typeof config.name === 'string') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.') : void 0;
    !(typeof config.serialize === 'function') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"serialize\" function. If this custom Scalar ") + 'is also used as an input type, ensure "parseValue" and "parseLiteral" ' + 'functions are also provided.') : void 0;

    if (config.parseValue || config.parseLiteral) {
      !(typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide both \"parseValue\" and \"parseLiteral\" ") + 'functions.') : void 0;
    }
  }

  var _proto = GraphQLScalarType.prototype;

  _proto.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto.toString = function toString() {
    return this.name;
  };

  return GraphQLScalarType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_2__["default"])(GraphQLScalarType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_1__["default"])(GraphQLScalarType);

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType =
/*#__PURE__*/
function () {
  function GraphQLObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this.isTypeOf = config.isTypeOf;
    this._fields = defineFieldMap.bind(undefined, config);
    this._interfaces = defineInterfaces.bind(undefined, config);
    !(typeof config.name === 'string') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.') : void 0;
    !(config.isTypeOf == null || typeof config.isTypeOf === 'function') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"isTypeOf\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(config.isTypeOf), ".")) : void 0;
  }

  var _proto2 = GraphQLObjectType.prototype;

  _proto2.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto2.getInterfaces = function getInterfaces() {
    if (typeof this._interfaces === 'function') {
      this._interfaces = this._interfaces();
    }

    return this._interfaces;
  };

  _proto2.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      isTypeOf: this.isTypeOf,
      interfaces: this.getInterfaces(),
      fields: fieldsToFieldsConfig(this.getFields()),
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto2.toString = function toString() {
    return this.name;
  };

  return GraphQLObjectType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_2__["default"])(GraphQLObjectType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_1__["default"])(GraphQLObjectType);

function defineInterfaces(config) {
  var interfaces = resolveThunk(config.interfaces) || [];
  !Array.isArray(interfaces) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, " interfaces must be an Array or a function which returns ") + 'an Array.') : void 0;
  return interfaces;
}

function defineFieldMap(config) {
  var fieldMap = resolveThunk(config.fields) || {};
  !isPlainObj(fieldMap) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, " fields must be an object with field names as keys or a ") + 'function which returns such an object.') : void 0;
  return Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_8__["default"])(fieldMap, function (fieldConfig, fieldName) {
    !isPlainObj(fieldConfig) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field config must be an object")) : void 0;
    !!('isDeprecated' in fieldConfig) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " should provide \"deprecationReason\" ") + 'instead of "isDeprecated".') : void 0;
    !(fieldConfig.resolve == null || typeof fieldConfig.resolve === 'function') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field resolver must be a function if ") + "provided, but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(fieldConfig.resolve), ".")) : void 0;
    var argsConfig = fieldConfig.args || {};
    !isPlainObj(argsConfig) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " args must be an object with argument ") + 'names as keys.') : void 0;
    var args = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(argsConfig).map(function (_ref) {
      var argName = _ref[0],
          arg = _ref[1];
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        astNode: arg.astNode
      };
    });
    return _objectSpread({}, fieldConfig, {
      isDeprecated: Boolean(fieldConfig.deprecationReason),
      name: fieldName,
      args: args
    });
  });
}

function isPlainObj(obj) {
  return obj && _typeof(obj) === 'object' && !Array.isArray(obj);
}

function fieldsToFieldsConfig(fields) {
  return Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_8__["default"])(fields, function (field) {
    return {
      type: field.type,
      args: argsToArgsConfig(field.args),
      resolve: field.resolve,
      subscribe: field.subscribe,
      deprecationReason: field.deprecationReason,
      description: field.description,
      astNode: field.astNode
    };
  });
}

function argsToArgsConfig(args) {
  return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_7__["default"])(args, function (arg) {
    return arg.name;
  }, function (arg) {
    return {
      type: arg.type,
      defaultValue: arg.defaultValue,
      description: arg.description,
      astNode: arg.astNode
    };
  });
}
function isRequiredArgument(arg) {
  return isNonNullType(arg.type) && arg.defaultValue === undefined;
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType =
/*#__PURE__*/
function () {
  function GraphQLInterfaceType(config) {
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this.resolveType = config.resolveType;
    this._fields = defineFieldMap.bind(undefined, config);
    !(typeof config.name === 'string') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.') : void 0;
    !(config.resolveType == null || typeof config.resolveType === 'function') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(config.resolveType), ".")) : void 0;
  }

  var _proto3 = GraphQLInterfaceType.prototype;

  _proto3.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto3.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      resolveType: this.resolveType,
      fields: fieldsToFieldsConfig(this.getFields()),
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto3.toString = function toString() {
    return this.name;
  };

  return GraphQLInterfaceType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_2__["default"])(GraphQLInterfaceType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_1__["default"])(GraphQLInterfaceType);

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType =
/*#__PURE__*/
function () {
  function GraphQLUnionType(config) {
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this.resolveType = config.resolveType;
    this._types = defineTypes.bind(undefined, config);
    !(typeof config.name === 'string') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.') : void 0;
    !(config.resolveType == null || typeof config.resolveType === 'function') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(config.resolveType), ".")) : void 0;
  }

  var _proto4 = GraphQLUnionType.prototype;

  _proto4.getTypes = function getTypes() {
    if (typeof this._types === 'function') {
      this._types = this._types();
    }

    return this._types;
  };

  _proto4.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      resolveType: this.resolveType,
      types: this.getTypes(),
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto4.toString = function toString() {
    return this.name;
  };

  return GraphQLUnionType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_2__["default"])(GraphQLUnionType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_1__["default"])(GraphQLUnionType);

function defineTypes(config) {
  var types = resolveThunk(config.types) || [];
  !Array.isArray(types) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide Array of types or a function which returns ' + "such an array for Union ".concat(config.name, ".")) : void 0;
  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType
/* <T> */
=
/*#__PURE__*/
function () {
  function GraphQLEnumType(config) {
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._values = defineEnumValues(this, config.values);
    this._valueLookup = new Map(this._values.map(function (enumValue) {
      return [enumValue.value, enumValue];
    }));
    this._nameLookup = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_6__["default"])(this._values, function (value) {
      return value.name;
    });
    !(typeof config.name === 'string') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.') : void 0;
  }

  var _proto5 = GraphQLEnumType.prototype;

  _proto5.getValues = function getValues() {
    return this._values;
  };

  _proto5.getValue = function getValue(name) {
    return this._nameLookup[name];
  };

  _proto5.serialize = function serialize(value) {
    var enumValue = this._valueLookup.get(value);

    if (enumValue) {
      return enumValue.name;
    }
  };

  _proto5.parseValue = function parseValue(value)
  /* T */
  {
    if (typeof value === 'string') {
      var enumValue = this.getValue(value);

      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  _proto5.parseLiteral = function parseLiteral(valueNode, _variables)
  /* T */
  {
    // Note: variables will be resolved to a value before calling this function.
    if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_9__["Kind"].ENUM) {
      var enumValue = this.getValue(valueNode.value);

      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  _proto5.toConfig = function toConfig() {
    var values = Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_7__["default"])(this.getValues(), function (value) {
      return value.name;
    }, function (value) {
      return {
        description: value.description,
        value: value.value,
        deprecationReason: value.deprecationReason,
        astNode: value.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      values: values,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto5.toString = function toString() {
    return this.name;
  };

  return GraphQLEnumType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_2__["default"])(GraphQLEnumType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_1__["default"])(GraphQLEnumType);

function defineEnumValues(type, valueMap) {
  !isPlainObj(valueMap) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(type.name, " values must be an object with value names as keys.")) : void 0;
  return Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(valueMap).map(function (_ref2) {
    var valueName = _ref2[0],
        value = _ref2[1];
    !isPlainObj(value) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(type.name, ".").concat(valueName, " must refer to an object with a \"value\" key ") + "representing an internal value but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(value), ".")) : void 0;
    !!('isDeprecated' in value) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(type.name, ".").concat(valueName, " should provide \"deprecationReason\" instead ") + 'of "isDeprecated".') : void 0;
    return {
      name: valueName,
      description: value.description,
      isDeprecated: Boolean(value.deprecationReason),
      deprecationReason: value.deprecationReason,
      astNode: value.astNode,
      value: 'value' in value ? value.value : valueName
    };
  });
}

/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType =
/*#__PURE__*/
function () {
  function GraphQLInputObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineInputFieldMap.bind(undefined, config);
    !(typeof config.name === 'string') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide name.') : void 0;
  }

  var _proto6 = GraphQLInputObjectType.prototype;

  _proto6.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto6.toConfig = function toConfig() {
    var fields = Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_8__["default"])(this.getFields(), function (field) {
      return {
        description: field.description,
        type: field.type,
        defaultValue: field.defaultValue,
        astNode: field.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      fields: fields,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto6.toString = function toString() {
    return this.name;
  };

  return GraphQLInputObjectType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_2__["default"])(GraphQLInputObjectType);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_1__["default"])(GraphQLInputObjectType);

function defineInputFieldMap(config) {
  var fieldMap = resolveThunk(config.fields) || {};
  !isPlainObj(fieldMap) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, " fields must be an object with field names as keys or a ") + 'function which returns such an object.') : void 0;
  return Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_8__["default"])(fieldMap, function (fieldConfig, fieldName) {
    !!('resolve' in fieldConfig) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_5__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field has a resolve property, but ") + 'Input Types cannot define resolvers.') : void 0;
    return _objectSpread({}, fieldConfig, {
      name: fieldName
    });
  });
}

function isRequiredInputField(field) {
  return isNonNullType(field.type) && field.defaultValue === undefined;
}


/***/ }),

/***/ "./node_modules/graphql/type/directives.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/type/directives.mjs ***!
  \**************************************************/
/*! exports provided: isDirective, assertDirective, GraphQLDirective, GraphQLIncludeDirective, GraphQLSkipDirective, DEFAULT_DEPRECATION_REASON, GraphQLDeprecatedDirective, specifiedDirectives, isSpecifiedDirective */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertDirective", function() { return assertDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLDirective", function() { return GraphQLDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLIncludeDirective", function() { return GraphQLIncludeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLSkipDirective", function() { return GraphQLSkipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DEPRECATION_REASON", function() { return DEFAULT_DEPRECATION_REASON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLDeprecatedDirective", function() { return GraphQLDeprecatedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedDirectives", function() { return specifiedDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedDirective", function() { return isSpecifiedDirective; });
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _scalars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scalars */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/defineToStringTag */ "./node_modules/graphql/jsutils/defineToStringTag.mjs");
/* harmony import */ var _jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/defineToJSON */ "./node_modules/graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/instanceOf */ "./node_modules/graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language/directiveLocation */ "./node_modules/graphql/language/directiveLocation.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */









/**
 * Test if the given value is a GraphQL directive.
 */

// eslint-disable-next-line no-redeclare
function isDirective(directive) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_5__["default"])(directive, GraphQLDirective);
}
function assertDirective(directive) {
  !isDirective(directive) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_7__["default"])(directive), " to be a GraphQL directive.")) : void 0;
  return directive;
}
/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */

var GraphQLDirective =
/*#__PURE__*/
function () {
  function GraphQLDirective(config) {
    this.name = config.name;
    this.description = config.description;
    this.locations = config.locations;
    this.astNode = config.astNode;
    !config.name ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 'Directive must be named.') : void 0;
    !Array.isArray(config.locations) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "@".concat(config.name, " locations must be an Array.")) : void 0;
    var args = config.args || {};
    !(_typeof(args) === 'object' && !Array.isArray(args)) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "@".concat(config.name, " args must be an object with argument names as keys.")) : void 0;
    this.args = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_0__["default"])(args).map(function (_ref) {
      var argName = _ref[0],
          arg = _ref[1];
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        astNode: arg.astNode
      };
    });
  }

  var _proto = GraphQLDirective.prototype;

  _proto.toString = function toString() {
    return '@' + this.name;
  };

  _proto.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: Object(_definition__WEBPACK_IMPORTED_MODULE_1__["argsToArgsConfig"])(this.args),
      astNode: this.astNode
    };
  };

  return GraphQLDirective;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_3__["default"])(GraphQLDirective);
Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_4__["default"])(GraphQLDirective);

/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when ' + 'the `if` argument is true.',
  locations: [_language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FIELD, _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FRAGMENT_SPREAD, _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].INLINE_FRAGMENT],
  args: {
    if: {
      type: Object(_definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_2__["GraphQLBoolean"]),
      description: 'Included when true.'
    }
  }
});
/**
 * Used to conditionally skip (exclude) fields or fragments.
 */

var GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` ' + 'argument is true.',
  locations: [_language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FIELD, _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FRAGMENT_SPREAD, _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].INLINE_FRAGMENT],
  args: {
    if: {
      type: Object(_definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_2__["GraphQLBoolean"]),
      description: 'Skipped when true.'
    }
  }
});
/**
 * Constant string used for default reason for a deprecation.
 */

var DEFAULT_DEPRECATION_REASON = 'No longer supported';
/**
 * Used to declare element of a GraphQL schema as deprecated.
 */

var GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [_language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FIELD_DEFINITION, _language_directiveLocation__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].ENUM_VALUE],
  args: {
    reason: {
      type: _scalars__WEBPACK_IMPORTED_MODULE_2__["GraphQLString"],
      description: 'Explains why this element was deprecated, usually also including a ' + 'suggestion for how to access supported similar data. Formatted using ' + 'the Markdown syntax (as specified by [CommonMark](https://commonmark.org/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});
/**
 * The full list of specified directives.
 */

var specifiedDirectives = [GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective];
function isSpecifiedDirective(directive) {
  return isDirective(directive) && specifiedDirectives.some(function (_ref2) {
    var name = _ref2.name;
    return name === directive.name;
  });
}


/***/ }),

/***/ "./node_modules/graphql/type/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/graphql/type/index.mjs ***!
  \*********************************************/
/*! exports provided: isSchema, assertSchema, GraphQLSchema, isType, isScalarType, isObjectType, isInterfaceType, isUnionType, isEnumType, isInputObjectType, isListType, isNonNullType, isInputType, isOutputType, isLeafType, isCompositeType, isAbstractType, isWrappingType, isNullableType, isNamedType, isRequiredArgument, isRequiredInputField, assertType, assertScalarType, assertObjectType, assertInterfaceType, assertUnionType, assertEnumType, assertInputObjectType, assertListType, assertNonNullType, assertInputType, assertOutputType, assertLeafType, assertCompositeType, assertAbstractType, assertWrappingType, assertNullableType, assertNamedType, getNullableType, getNamedType, GraphQLScalarType, GraphQLObjectType, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, isDirective, assertDirective, GraphQLDirective, isSpecifiedDirective, specifiedDirectives, GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective, DEFAULT_DEPRECATION_REASON, isSpecifiedScalarType, specifiedScalarTypes, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLID, isIntrospectionType, introspectionTypes, __Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind, TypeKind, SchemaMetaFieldDef, TypeMetaFieldDef, TypeNameMetaFieldDef, validateSchema, assertValidSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./node_modules/graphql/type/schema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSchema", function() { return _schema__WEBPACK_IMPORTED_MODULE_0__["isSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertSchema", function() { return _schema__WEBPACK_IMPORTED_MODULE_0__["assertSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSchema", function() { return _schema__WEBPACK_IMPORTED_MODULE_0__["GraphQLSchema"]; });

/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isListType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredArgument", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isRequiredArgument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredInputField", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["isRequiredInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertListType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["assertNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["getNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["getNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return _definition__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives */ "./node_modules/graphql/type/directives.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["assertDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["GraphQLDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["isSpecifiedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedDirectives", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["specifiedDirectives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLIncludeDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["GraphQLIncludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSkipDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["GraphQLSkipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDeprecatedDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["GraphQLDeprecatedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DEPRECATION_REASON", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_DEPRECATION_REASON"]; });

/* harmony import */ var _scalars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scalars */ "./node_modules/graphql/type/scalars.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedScalarType", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["isSpecifiedScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedScalarTypes", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["specifiedScalarTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInt", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["GraphQLInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLFloat", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["GraphQLFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLString", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["GraphQLString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLBoolean", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["GraphQLBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLID", function() { return _scalars__WEBPACK_IMPORTED_MODULE_3__["GraphQLID"]; });

/* harmony import */ var _introspection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./introspection */ "./node_modules/graphql/type/introspection.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIntrospectionType", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["isIntrospectionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionTypes", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["introspectionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Schema", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__Schema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Directive", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DirectiveLocation", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__DirectiveLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Type", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Field", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__InputValue", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__InputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__EnumValue", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__EnumValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__TypeKind", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["__TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeKind", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaMetaFieldDef", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["SchemaMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeMetaFieldDef", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["TypeMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeNameMetaFieldDef", function() { return _introspection__WEBPACK_IMPORTED_MODULE_4__["TypeNameMetaFieldDef"]; });

/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validate */ "./node_modules/graphql/type/validate.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return _validate__WEBPACK_IMPORTED_MODULE_5__["validateSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return _validate__WEBPACK_IMPORTED_MODULE_5__["assertValidSchema"]; });

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



// Common built-in scalar instances.


// Validate GraphQL schema.



/***/ }),

/***/ "./node_modules/graphql/type/introspection.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/type/introspection.mjs ***!
  \*****************************************************/
/*! exports provided: __Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, TypeKind, __TypeKind, SchemaMetaFieldDef, TypeMetaFieldDef, TypeNameMetaFieldDef, introspectionTypes, isIntrospectionType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Schema", function() { return __Schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Directive", function() { return __Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DirectiveLocation", function() { return __DirectiveLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Type", function() { return __Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Field", function() { return __Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__InputValue", function() { return __InputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__EnumValue", function() { return __EnumValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeKind", function() { return TypeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__TypeKind", function() { return __TypeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaMetaFieldDef", function() { return SchemaMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeMetaFieldDef", function() { return TypeMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeNameMetaFieldDef", function() { return TypeNameMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introspectionTypes", function() { return introspectionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIntrospectionType", function() { return isIntrospectionType; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _utilities_astFromValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/astFromValue */ "./node_modules/graphql/utilities/astFromValue.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _scalars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scalars */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language/directiveLocation */ "./node_modules/graphql/language/directiveLocation.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */







var __Schema = new _definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLObjectType"]({
  name: '__Schema',
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It ' + 'exposes all available types and directives on the server, as well as ' + 'the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      types: {
        description: 'A list of all types supported by this server.',
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__Type))),
        resolve: function resolve(schema) {
          return Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(schema.getTypeMap());
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that ' + 'mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that ' + 'subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
});
var __Directive = new _definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLObjectType"]({
  name: '__Directive',
  description: 'A Directive provides a way to describe alternate runtime execution and ' + 'type validation behavior in a GraphQL document.' + "\n\nIn some cases, you need to provide options to alter GraphQL's " + 'execution behavior in ways field arguments will not suffice, such as ' + 'conditionally including or skipping a field. Directives provide this by ' + 'describing additional information to the executor.',
  fields: function fields() {
    return {
      name: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"]),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      locations: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__DirectiveLocation))),
        resolve: function resolve(obj) {
          return obj.locations;
        }
      },
      args: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__InputValue))),
        resolve: function resolve(directive) {
          return directive.args || [];
        }
      }
    };
  }
});
var __DirectiveLocation = new _definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLEnumType"]({
  name: '__DirectiveLocation',
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a ' + '__DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    VARIABLE_DEFINITION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].VARIABLE_DEFINITION,
      description: 'Location adjacent to a variable definition.'
    },
    SCHEMA: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: _language_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});
var __Type = new _definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLObjectType"]({
  name: '__Type',
  description: 'The fundamental unit of any GraphQL Schema is the type. There are ' + 'many kinds of types in GraphQL as represented by the `__TypeKind` enum.' + '\n\nDepending on the kind of a type, certain fields describe ' + 'information about that type. Scalar types provide no information ' + 'beyond a name and description, while Enum types provide their values. ' + 'Object and Interface types provide the fields they describe. Abstract ' + 'types, Union and Interface, provide the Object types possible ' + 'at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__TypeKind),
        resolve: function resolve(type) {
          if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isScalarType"])(type)) {
            return TypeKind.SCALAR;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isObjectType"])(type)) {
            return TypeKind.OBJECT;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isInterfaceType"])(type)) {
            return TypeKind.INTERFACE;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isUnionType"])(type)) {
            return TypeKind.UNION;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isEnumType"])(type)) {
            return TypeKind.ENUM;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isInputObjectType"])(type)) {
            return TypeKind.INPUT_OBJECT;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isListType"])(type)) {
            return TypeKind.LIST;
          } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isNonNullType"])(type)) {
            return TypeKind.NON_NULL;
          } // Not reachable. All possible types have been considered.

          /* istanbul ignore next */


          throw new Error("Unexpected type: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), "\"."));
        }
      },
      name: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      fields: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__Field)),
        args: {
          includeDeprecated: {
            type: _scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLBoolean"],
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref) {
          var includeDeprecated = _ref.includeDeprecated;

          if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isObjectType"])(type) || Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isInterfaceType"])(type)) {
            var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields());

            if (!includeDeprecated) {
              fields = fields.filter(function (field) {
                return !field.deprecationReason;
              });
            }

            return fields;
          }

          return null;
        }
      },
      interfaces: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__Type)),
        resolve: function resolve(type) {
          if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isObjectType"])(type)) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__Type)),
        resolve: function resolve(type, args, context, _ref2) {
          var schema = _ref2.schema;

          if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isAbstractType"])(type)) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__EnumValue)),
        args: {
          includeDeprecated: {
            type: _scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLBoolean"],
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref3) {
          var includeDeprecated = _ref3.includeDeprecated;

          if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isEnumType"])(type)) {
            var values = type.getValues();

            if (!includeDeprecated) {
              values = values.filter(function (value) {
                return !value.deprecationReason;
              });
            }

            return values;
          }
        }
      },
      inputFields: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__InputValue)),
        resolve: function resolve(type) {
          if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isInputObjectType"])(type)) {
            return Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields());
          }
        }
      },
      ofType: {
        type: __Type,
        resolve: function resolve(obj) {
          return obj.ofType;
        }
      }
    };
  }
});
var __Field = new _definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLObjectType"]({
  name: '__Field',
  description: 'Object and Interface types are described by a list of Fields, each of ' + 'which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"]),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      args: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLList"])(Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__InputValue))),
        resolve: function resolve(field) {
          return field.args || [];
        }
      },
      type: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__Type),
        resolve: function resolve(obj) {
          return obj.type;
        }
      },
      isDeprecated: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLBoolean"]),
        resolve: function resolve(obj) {
          return obj.isDeprecated;
        }
      },
      deprecationReason: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.deprecationReason;
        }
      }
    };
  }
});
var __InputValue = new _definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLObjectType"]({
  name: '__InputValue',
  description: 'Arguments provided to Fields or Directives and the input fields of an ' + 'InputObject are represented as Input Values which describe their type ' + 'and optionally a default value.',
  fields: function fields() {
    return {
      name: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"]),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      type: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__Type),
        resolve: function resolve(obj) {
          return obj.type;
        }
      },
      defaultValue: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"],
        description: 'A GraphQL-formatted string representing the default value for this ' + 'input value.',
        resolve: function resolve(inputVal) {
          var valueAST = Object(_utilities_astFromValue__WEBPACK_IMPORTED_MODULE_2__["astFromValue"])(inputVal.defaultValue, inputVal.type);
          return valueAST ? Object(_language_printer__WEBPACK_IMPORTED_MODULE_3__["print"])(valueAST) : null;
        }
      }
    };
  }
});
var __EnumValue = new _definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLObjectType"]({
  name: '__EnumValue',
  description: 'One possible value for a given Enum. Enum values are unique values, not ' + 'a placeholder for a string or numeric value. However an Enum value is ' + 'returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"]),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      isDeprecated: {
        type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLBoolean"]),
        resolve: function resolve(obj) {
          return obj.isDeprecated;
        }
      },
      deprecationReason: {
        type: _scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"],
        resolve: function resolve(obj) {
          return obj.deprecationReason;
        }
      }
    };
  }
});
var TypeKind = {
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  INPUT_OBJECT: 'INPUT_OBJECT',
  LIST: 'LIST',
  NON_NULL: 'NON_NULL'
};
var __TypeKind = new _definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLEnumType"]({
  name: '__TypeKind',
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. ' + '`fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. ' + '`fields` and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. `possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. `enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. ' + '`inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. `ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. `ofType` is a valid field.'
    }
  }
});
/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

var SchemaMetaFieldDef = {
  name: '__schema',
  type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(source, args, context, _ref4) {
    var schema = _ref4.schema;
    return schema;
  }
};
var TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{
    name: 'name',
    type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"])
  }],
  resolve: function resolve(source, _ref5, context, _ref6) {
    var name = _ref5.name;
    var schema = _ref6.schema;
    return schema.getType(name);
  }
};
var TypeNameMetaFieldDef = {
  name: '__typename',
  type: Object(_definition__WEBPACK_IMPORTED_MODULE_4__["GraphQLNonNull"])(_scalars__WEBPACK_IMPORTED_MODULE_5__["GraphQLString"]),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(source, args, context, _ref7) {
    var parentType = _ref7.parentType;
    return parentType.name;
  }
};
var introspectionTypes = [__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind];
function isIntrospectionType(type) {
  return Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isNamedType"])(type) && introspectionTypes.some(function (_ref8) {
    var name = _ref8.name;
    return type.name === name;
  });
}


/***/ }),

/***/ "./node_modules/graphql/type/scalars.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/type/scalars.mjs ***!
  \***********************************************/
/*! exports provided: GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLID, specifiedScalarTypes, isSpecifiedScalarType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInt", function() { return GraphQLInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLFloat", function() { return GraphQLFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLString", function() { return GraphQLString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLBoolean", function() { return GraphQLBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLID", function() { return GraphQLID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedScalarTypes", function() { return specifiedScalarTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedScalarType", function() { return isSpecifiedScalarType; });
/* harmony import */ var _polyfills_isFinite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/isFinite */ "./node_modules/graphql/polyfills/isFinite.mjs");
/* harmony import */ var _polyfills_isInteger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/isInteger */ "./node_modules/graphql/polyfills/isInteger.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




 // As per the GraphQL Spec, Integers are only treated as valid when a valid
// 32-bit signed integer, providing the broadest support across platforms.
//
// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
// they are internally represented as IEEE 754 doubles.

var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

function serializeInt(value) {
  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  var num = value;

  if (typeof value === 'string' && value !== '') {
    num = Number(value);
  }

  if (!Object(_polyfills_isInteger__WEBPACK_IMPORTED_MODULE_1__["default"])(num)) {
    throw new TypeError("Int cannot represent non-integer value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  if (num > MAX_INT || num < MIN_INT) {
    throw new TypeError("Int cannot represent non 32-bit signed integer value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return num;
}

function coerceInt(value) {
  if (!Object(_polyfills_isInteger__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    throw new TypeError("Int cannot represent non-integer value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  if (value > MAX_INT || value < MIN_INT) {
    throw new TypeError("Int cannot represent non 32-bit signed integer value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return value;
}

var GraphQLInt = new _definition__WEBPACK_IMPORTED_MODULE_3__["GraphQLScalarType"]({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric ' + 'values. Int can represent values between -(2^31) and 2^31 - 1. ',
  serialize: serializeInt,
  parseValue: coerceInt,
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT) {
      var num = parseInt(ast.value, 10);

      if (num <= MAX_INT && num >= MIN_INT) {
        return num;
      }
    }

    return undefined;
  }
});

function serializeFloat(value) {
  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  var num = value;

  if (typeof value === 'string' && value !== '') {
    num = Number(value);
  }

  if (!Object(_polyfills_isFinite__WEBPACK_IMPORTED_MODULE_0__["default"])(num)) {
    throw new TypeError("Float cannot represent non numeric value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return num;
}

function coerceFloat(value) {
  if (!Object(_polyfills_isFinite__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    throw new TypeError("Float cannot represent non numeric value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return value;
}

var GraphQLFloat = new _definition__WEBPACK_IMPORTED_MODULE_3__["GraphQLScalarType"]({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional ' + 'values as specified by ' + '[IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). ',
  serialize: serializeFloat,
  parseValue: coerceFloat,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FLOAT || ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT ? parseFloat(ast.value) : undefined;
  }
}); // Support serializing objects with custom valueOf() or toJSON() functions -
// a common way to represent a complex value which can be represented as
// a string (ex: MongoDB id objects).

function serializeObject(value) {
  if (_typeof(value) === 'object' && value !== null) {
    if (typeof value.valueOf === 'function') {
      var valueOfResult = value.valueOf();

      if (_typeof(valueOfResult) !== 'object') {
        return valueOfResult;
      }
    }

    if (typeof value.toJSON === 'function') {
      // $FlowFixMe(>=0.90.0)
      return value.toJSON();
    }
  }

  return value;
}

function serializeString(rawValue) {
  var value = serializeObject(rawValue); // Serialize string, boolean and number values to a string, but do not
  // attempt to coerce object, function, symbol, or other types as strings.

  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  if (Object(_polyfills_isFinite__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value.toString();
  }

  throw new TypeError("String cannot represent value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(rawValue)));
}

function coerceString(value) {
  if (typeof value !== 'string') {
    throw new TypeError("String cannot represent a non string value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return value;
}

var GraphQLString = new _definition__WEBPACK_IMPORTED_MODULE_3__["GraphQLScalarType"]({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 ' + 'character sequences. The String type is most often used by GraphQL to ' + 'represent free-form human-readable text.',
  serialize: serializeString,
  parseValue: coerceString,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].STRING ? ast.value : undefined;
  }
});

function serializeBoolean(value) {
  if (typeof value === 'boolean') {
    return value;
  }

  if (Object(_polyfills_isFinite__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value !== 0;
  }

  throw new TypeError("Boolean cannot represent a non boolean value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
}

function coerceBoolean(value) {
  if (typeof value !== 'boolean') {
    throw new TypeError("Boolean cannot represent a non boolean value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
  }

  return value;
}

var GraphQLBoolean = new _definition__WEBPACK_IMPORTED_MODULE_3__["GraphQLScalarType"]({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: serializeBoolean,
  parseValue: coerceBoolean,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].BOOLEAN ? ast.value : undefined;
  }
});

function serializeID(rawValue) {
  var value = serializeObject(rawValue);

  if (typeof value === 'string') {
    return value;
  }

  if (Object(_polyfills_isInteger__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return String(value);
  }

  throw new TypeError("ID cannot represent value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(rawValue)));
}

function coerceID(value) {
  if (typeof value === 'string') {
    return value;
  }

  if (Object(_polyfills_isInteger__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return value.toString();
  }

  throw new TypeError("ID cannot represent value: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(value)));
}

var GraphQLID = new _definition__WEBPACK_IMPORTED_MODULE_3__["GraphQLScalarType"]({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to ' + 'refetch an object or as key for a cache. The ID type appears in a JSON ' + 'response as a String; however, it is not intended to be human-readable. ' + 'When expected as an input type, any string (such as `"4"`) or integer ' + '(such as `4`) input value will be accepted as an ID.',
  serialize: serializeID,
  parseValue: coerceID,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].STRING || ast.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT ? ast.value : undefined;
  }
});
var specifiedScalarTypes = [GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID];
function isSpecifiedScalarType(type) {
  return Object(_definition__WEBPACK_IMPORTED_MODULE_3__["isScalarType"])(type) && specifiedScalarTypes.some(function (_ref) {
    var name = _ref.name;
    return type.name === name;
  });
}


/***/ }),

/***/ "./node_modules/graphql/type/schema.mjs":
/*!**********************************************!*\
  !*** ./node_modules/graphql/type/schema.mjs ***!
  \**********************************************/
/*! exports provided: isSchema, assertSchema, GraphQLSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSchema", function() { return isSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertSchema", function() { return assertSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLSchema", function() { return GraphQLSchema; });
/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _introspection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introspection */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/defineToStringTag */ "./node_modules/graphql/jsutils/defineToStringTag.mjs");
/* harmony import */ var _jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/instanceOf */ "./node_modules/graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */









// eslint-disable-next-line no-redeclare
function isSchema(schema) {
  return Object(_jsutils_instanceOf__WEBPACK_IMPORTED_MODULE_7__["default"])(schema, GraphQLSchema);
}
function assertSchema(schema) {
  !isSchema(schema) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(0, "Expected ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(schema), " to be a GraphQL schema.")) : void 0;
  return schema;
}
/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: When the schema is constructed, by default only the types that are
 * reachable by traversing the root types are included, other types must be
 * explicitly referenced.
 *
 * Example:
 *
 *     const characterInterface = new GraphQLInterfaceType({
 *       name: 'Character',
 *       ...
 *     });
 *
 *     const humanType = new GraphQLObjectType({
 *       name: 'Human',
 *       interfaces: [characterInterface],
 *       ...
 *     });
 *
 *     const droidType = new GraphQLObjectType({
 *       name: 'Droid',
 *       interfaces: [characterInterface],
 *       ...
 *     });
 *
 *     const schema = new GraphQLSchema({
 *       query: new GraphQLObjectType({
 *         name: 'Query',
 *         fields: {
 *           hero: { type: characterInterface, ... },
 *         }
 *       }),
 *       ...
 *       // Since this schema references only the `Character` interface it's
 *       // necessary to explicitly list the types that implement it if
 *       // you want them to be included in the final schema.
 *       types: [humanType, droidType],
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */

var GraphQLSchema =
/*#__PURE__*/
function () {
  // Used as a cache for validateSchema().
  // Referenced by validateSchema().
  function GraphQLSchema(config) {
    // If this schema was built from a source known to be valid, then it may be
    // marked with assumeValid to avoid an additional type system validation.
    if (config && config.assumeValid) {
      this.__validationErrors = [];
    } else {
      this.__validationErrors = undefined; // Otherwise check for common mistakes during construction to produce
      // clear and early error messages.

      !(_typeof(config) === 'object') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(0, 'Must provide configuration object.') : void 0;
      !(!config.types || Array.isArray(config.types)) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(0, "\"types\" must be Array if provided but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(config.types), ".")) : void 0;
      !(!config.directives || Array.isArray(config.directives)) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(0, '"directives" must be Array if provided but got: ' + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(config.directives), ".")) : void 0;
      !(!config.allowedLegacyNames || Array.isArray(config.allowedLegacyNames)) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(0, '"allowedLegacyNames" must be Array if provided but got: ' + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(config.allowedLegacyNames), ".")) : void 0;
    }

    this.__allowedLegacyNames = config.allowedLegacyNames || [];
    this._queryType = config.query;
    this._mutationType = config.mutation;
    this._subscriptionType = config.subscription; // Provide specified directives (e.g. @include and @skip) by default.

    this._directives = config.directives || _directives__WEBPACK_IMPORTED_MODULE_3__["specifiedDirectives"];
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes; // Build type map now to detect any errors within this schema.

    var initialTypes = [this.getQueryType(), this.getMutationType(), this.getSubscriptionType(), _introspection__WEBPACK_IMPORTED_MODULE_5__["__Schema"]];
    var types = config.types;

    if (types) {
      initialTypes = initialTypes.concat(types);
    } // Keep track of all types referenced within the schema.


    var typeMap = Object.create(null); // First by deeply visiting all initial types.

    typeMap = initialTypes.reduce(typeMapReducer, typeMap); // Then by deeply visiting all directive types.

    typeMap = this._directives.reduce(typeMapDirectiveReducer, typeMap); // Storing the resulting map for reference by the schema.

    this._typeMap = typeMap;
    this._possibleTypeMap = Object.create(null); // Keep track of all implementations by interface name.

    this._implementations = Object.create(null);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(this._typeMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var type = _step.value;

        if (Object(_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(type)) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = type.getInterfaces()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var iface = _step2.value;

              if (Object(_definition__WEBPACK_IMPORTED_MODULE_2__["isInterfaceType"])(iface)) {
                var impls = this._implementations[iface.name];

                if (impls) {
                  impls.push(type);
                } else {
                  this._implementations[iface.name] = [type];
                }
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_2__["isAbstractType"])(type) && !this._implementations[type.name]) {
          this._implementations[type.name] = [];
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  var _proto = GraphQLSchema.prototype;

  _proto.getQueryType = function getQueryType() {
    return this._queryType;
  };

  _proto.getMutationType = function getMutationType() {
    return this._mutationType;
  };

  _proto.getSubscriptionType = function getSubscriptionType() {
    return this._subscriptionType;
  };

  _proto.getTypeMap = function getTypeMap() {
    return this._typeMap;
  };

  _proto.getType = function getType(name) {
    return this.getTypeMap()[name];
  };

  _proto.getPossibleTypes = function getPossibleTypes(abstractType) {
    if (Object(_definition__WEBPACK_IMPORTED_MODULE_2__["isUnionType"])(abstractType)) {
      return abstractType.getTypes();
    }

    return this._implementations[abstractType.name];
  };

  _proto.isPossibleType = function isPossibleType(abstractType, possibleType) {
    var possibleTypeMap = this._possibleTypeMap;

    if (!possibleTypeMap[abstractType.name]) {
      var possibleTypes = this.getPossibleTypes(abstractType);
      possibleTypeMap[abstractType.name] = possibleTypes.reduce(function (map, type) {
        map[type.name] = true;
        return map;
      }, Object.create(null));
    }

    return Boolean(possibleTypeMap[abstractType.name][possibleType.name]);
  };

  _proto.getDirectives = function getDirectives() {
    return this._directives;
  };

  _proto.getDirective = function getDirective(name) {
    return Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getDirectives(), function (directive) {
      return directive.name === name;
    });
  };

  _proto.toConfig = function toConfig() {
    return {
      types: Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(this.getTypeMap()),
      directives: this.getDirectives().slice(),
      query: this.getQueryType(),
      mutation: this.getMutationType(),
      subscription: this.getSubscriptionType(),
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || [],
      assumeValid: this.__validationErrors !== undefined,
      allowedLegacyNames: this.__allowedLegacyNames
    };
  };

  return GraphQLSchema;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_6__["default"])(GraphQLSchema);

function typeMapReducer(map, type) {
  if (!type) {
    return map;
  }

  if (Object(_definition__WEBPACK_IMPORTED_MODULE_2__["isWrappingType"])(type)) {
    return typeMapReducer(map, type.ofType);
  }

  if (map[type.name]) {
    !(map[type.name] === type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(0, 'Schema must contain uniquely named types but contains multiple ' + "types named \"".concat(type.name, "\".")) : void 0;
    return map;
  }

  map[type.name] = type;
  var reducedMap = map;

  if (Object(_definition__WEBPACK_IMPORTED_MODULE_2__["isUnionType"])(type)) {
    reducedMap = type.getTypes().reduce(typeMapReducer, reducedMap);
  }

  if (Object(_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(type)) {
    reducedMap = type.getInterfaces().reduce(typeMapReducer, reducedMap);
  }

  if (Object(_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(type) || Object(_definition__WEBPACK_IMPORTED_MODULE_2__["isInterfaceType"])(type)) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(type.getFields())[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var field = _step3.value;

        if (field.args) {
          var fieldArgTypes = field.args.map(function (arg) {
            return arg.type;
          });
          reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
        }

        reducedMap = typeMapReducer(reducedMap, field.type);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }

  if (Object(_definition__WEBPACK_IMPORTED_MODULE_2__["isInputObjectType"])(type)) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(type.getFields())[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _field = _step4.value;
        reducedMap = typeMapReducer(reducedMap, _field.type);
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  }

  return reducedMap;
}

function typeMapDirectiveReducer(map, directive) {
  // Directives are not validated until validateSchema() is called.
  if (!Object(_directives__WEBPACK_IMPORTED_MODULE_3__["isDirective"])(directive)) {
    return map;
  }

  return directive.args.reduce(function (_map, arg) {
    return typeMapReducer(_map, arg.type);
  }, map);
}


/***/ }),

/***/ "./node_modules/graphql/type/validate.mjs":
/*!************************************************!*\
  !*** ./node_modules/graphql/type/validate.mjs ***!
  \************************************************/
/*! exports provided: validateSchema, assertValidSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return validateSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return assertValidSchema; });
/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_flatMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/flatMap */ "./node_modules/graphql/polyfills/flatMap.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/objectEntries */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _introspection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./introspection */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schema */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _utilities_assertValidName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/assertValidName */ "./node_modules/graphql/utilities/assertValidName.mjs");
/* harmony import */ var _utilities_typeComparators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilities/typeComparators */ "./node_modules/graphql/utilities/typeComparators.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */












/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */

function validateSchema(schema) {
  // First check to ensure the provided value is in fact a GraphQLSchema.
  Object(_schema__WEBPACK_IMPORTED_MODULE_7__["assertSchema"])(schema); // If this Schema has already been validated, return the previous results.

  if (schema.__validationErrors) {
    return schema.__validationErrors;
  } // Validate the schema, producing a list of errors.


  var context = new SchemaValidationContext(schema);
  validateRootTypes(context);
  validateDirectives(context);
  validateTypes(context); // Persist the results of validation before returning to ensure validation
  // does not run multiple times for this schema.

  var errors = context.getErrors();
  schema.__validationErrors = errors;
  return errors;
}
/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */

function assertValidSchema(schema) {
  var errors = validateSchema(schema);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}

var SchemaValidationContext =
/*#__PURE__*/
function () {
  function SchemaValidationContext(schema) {
    this._errors = [];
    this.schema = schema;
  }

  var _proto = SchemaValidationContext.prototype;

  _proto.reportError = function reportError(message, nodes) {
    var _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;

    this.addError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_9__["GraphQLError"](message, _nodes));
  };

  _proto.addError = function addError(error) {
    this._errors.push(error);
  };

  _proto.getErrors = function getErrors() {
    return this._errors;
  };

  return SchemaValidationContext;
}();

function validateRootTypes(context) {
  var schema = context.schema;
  var queryType = schema.getQueryType();

  if (!queryType) {
    context.reportError("Query root type must be provided.", schema.astNode);
  } else if (!Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isObjectType"])(queryType)) {
    context.reportError("Query root type must be Object type, it cannot be ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(queryType), "."), getOperationTypeNode(schema, queryType, 'query'));
  }

  var mutationType = schema.getMutationType();

  if (mutationType && !Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isObjectType"])(mutationType)) {
    context.reportError('Mutation root type must be Object type if provided, it cannot be ' + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(mutationType), "."), getOperationTypeNode(schema, mutationType, 'mutation'));
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && !Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isObjectType"])(subscriptionType)) {
    context.reportError('Subscription root type must be Object type if provided, it cannot be ' + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(subscriptionType), "."), getOperationTypeNode(schema, subscriptionType, 'subscription'));
  }
}

function getOperationTypeNode(schema, type, operation) {
  var operationNodes = getAllSubNodes(schema, function (node) {
    return node.operationTypes;
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = operationNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var node = _step.value;

      if (node.operation === operation) {
        return node.type;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return type.astNode;
}

function validateDirectives(context) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = context.schema.getDirectives()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var directive = _step2.value;

      // Ensure all directives are in fact GraphQL directives.
      if (!Object(_directives__WEBPACK_IMPORTED_MODULE_5__["isDirective"])(directive)) {
        context.reportError("Expected directive but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(directive), "."), directive && directive.astNode);
        continue;
      } // Ensure they are named correctly.


      validateName(context, directive); // TODO: Ensure proper locations.
      // Ensure the arguments are valid.

      var argNames = Object.create(null);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = directive.args[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var arg = _step3.value;
          var argName = arg.name; // Ensure they are named correctly.

          validateName(context, arg); // Ensure they are unique per directive.

          if (argNames[argName]) {
            context.reportError("Argument @".concat(directive.name, "(").concat(argName, ":) can only be defined once."), getAllDirectiveArgNodes(directive, argName));
            continue;
          }

          argNames[argName] = true; // Ensure the type is an input type.

          if (!Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isInputType"])(arg.type)) {
            context.reportError("The type of @".concat(directive.name, "(").concat(argName, ":) must be Input Type ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(arg.type), "."), getDirectiveArgTypeNode(directive, argName));
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function validateName(context, node) {
  // If a schema explicitly allows some legacy name which is no longer valid,
  // allow it to be assumed valid.
  if (context.schema.__allowedLegacyNames.indexOf(node.name) !== -1) {
    return;
  } // Ensure names are valid, however introspection types opt out.


  var error = Object(_utilities_assertValidName__WEBPACK_IMPORTED_MODULE_10__["isValidNameError"])(node.name, node.astNode || undefined);

  if (error) {
    context.addError(error);
  }
}

function validateTypes(context) {
  var typeMap = context.schema.getTypeMap();
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_2__["default"])(typeMap)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var type = _step4.value;

      // Ensure all provided types are in fact GraphQL type.
      if (!Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isNamedType"])(type)) {
        context.reportError("Expected GraphQL named type but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(type), "."), type && type.astNode);
        continue;
      } // Ensure it is named correctly (excluding introspection types).


      if (!Object(_introspection__WEBPACK_IMPORTED_MODULE_6__["isIntrospectionType"])(type)) {
        validateName(context, type);
      }

      if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isObjectType"])(type)) {
        // Ensure fields are valid
        validateFields(context, type); // Ensure objects implement the interfaces they claim to.

        validateObjectInterfaces(context, type);
      } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isInterfaceType"])(type)) {
        // Ensure fields are valid.
        validateFields(context, type);
      } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isUnionType"])(type)) {
        // Ensure Unions include valid member types.
        validateUnionMembers(context, type);
      } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isEnumType"])(type)) {
        // Ensure Enums have valid values.
        validateEnumValues(context, type);
      } else if (Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isInputObjectType"])(type)) {
        // Ensure Input Object fields are valid.
        validateInputFields(context, type);
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
}

function validateFields(context, type) {
  var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_2__["default"])(type.getFields()); // Objects and Interfaces both must define one or more fields.

  if (fields.length === 0) {
    context.reportError("Type ".concat(type.name, " must define one or more fields."), getAllNodes(type));
  }

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = fields[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var field = _step5.value;
      // Ensure they are named correctly.
      validateName(context, field); // Ensure the type is an output type

      if (!Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isOutputType"])(field.type)) {
        context.reportError("The type of ".concat(type.name, ".").concat(field.name, " must be Output Type ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(field.type), "."), getFieldTypeNode(type, field.name));
      } // Ensure the arguments are valid


      var argNames = Object.create(null);
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = field.args[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var arg = _step6.value;
          var argName = arg.name; // Ensure they are named correctly.

          validateName(context, arg); // Ensure they are unique per field.

          if (argNames[argName]) {
            context.reportError("Field argument ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) can only ") + 'be defined once.', getAllFieldArgNodes(type, field.name, argName));
          }

          argNames[argName] = true; // Ensure the type is an input type

          if (!Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isInputType"])(arg.type)) {
            context.reportError("The type of ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) must be Input ") + "Type but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(arg.type), "."), getFieldArgTypeNode(type, field.name, argName));
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }
}

function validateObjectInterfaces(context, object) {
  var implementedTypeNames = Object.create(null);
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = object.getInterfaces()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var iface = _step7.value;

      if (!Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isInterfaceType"])(iface)) {
        context.reportError("Type ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(object), " must only implement Interface types, ") + "it cannot implement ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(iface), "."), getImplementsInterfaceNode(object, iface));
        continue;
      }

      if (implementedTypeNames[iface.name]) {
        context.reportError("Type ".concat(object.name, " can only implement ").concat(iface.name, " once."), getAllImplementsInterfaceNodes(object, iface));
        continue;
      }

      implementedTypeNames[iface.name] = true;
      validateObjectImplementsInterface(context, object, iface);
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
        _iterator7.return();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }
}

function validateObjectImplementsInterface(context, object, iface) {
  var objectFieldMap = object.getFields();
  var ifaceFieldMap = iface.getFields(); // Assert each interface field is implemented.

  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_3__["default"])(ifaceFieldMap)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var _ref2 = _step8.value;
      var fieldName = _ref2[0];
      var ifaceField = _ref2[1];
      var objectField = objectFieldMap[fieldName]; // Assert interface field exists on object.

      if (!objectField) {
        context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expected but ") + "".concat(object.name, " does not provide it."), [getFieldNode(iface, fieldName)].concat(getAllNodes(object)));
        continue;
      } // Assert interface field type is satisfied by object field type, by being
      // a valid subtype. (covariant)


      if (!Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_11__["isTypeSubTypeOf"])(context.schema, objectField.type, ifaceField.type)) {
        context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expects type ") + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(ifaceField.type), " but ").concat(object.name, ".").concat(fieldName, " ") + "is type ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(objectField.type), "."), [getFieldTypeNode(iface, fieldName), getFieldTypeNode(object, fieldName)]);
      } // Assert each interface field arg is implemented.


      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        var _loop = function _loop() {
          var ifaceArg = _step9.value;
          var argName = ifaceArg.name;
          var objectArg = Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(objectField.args, function (arg) {
            return arg.name === argName;
          }); // Assert interface field arg exists on object field.

          if (!objectArg) {
            context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) ") + "expected but ".concat(object.name, ".").concat(fieldName, " does not provide it."), [getFieldArgNode(iface, fieldName, argName), getFieldNode(object, fieldName)]);
            return "continue";
          } // Assert interface field arg type matches object field arg type.
          // (invariant)
          // TODO: change to contravariant?


          if (!Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_11__["isEqualType"])(ifaceArg.type, objectArg.type)) {
            context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) ") + "expects type ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(ifaceArg.type), " but ") + "".concat(object.name, ".").concat(fieldName, "(").concat(argName, ":) is type ") + "".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(objectArg.type), "."), [getFieldArgTypeNode(iface, fieldName, argName), getFieldArgTypeNode(object, fieldName, argName)]);
          } // TODO: validate default values?

        };

        for (var _iterator9 = ifaceField.args[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        } // Assert additional arguments must not be required.

      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
            _iterator9.return();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }

      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        var _loop2 = function _loop2() {
          var objectArg = _step10.value;
          var argName = objectArg.name;
          var ifaceArg = Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(ifaceField.args, function (arg) {
            return arg.name === argName;
          });

          if (!ifaceArg && Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isRequiredArgument"])(objectArg)) {
            context.reportError("Object field ".concat(object.name, ".").concat(fieldName, " includes required ") + "argument ".concat(argName, " that is missing from the Interface field ") + "".concat(iface.name, ".").concat(fieldName, "."), [getFieldArgNode(object, fieldName, argName), getFieldNode(iface, fieldName)]);
          }
        };

        for (var _iterator10 = objectField.args[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          _loop2();
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
            _iterator10.return();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
        _iterator8.return();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }
}

function validateUnionMembers(context, union) {
  var memberTypes = union.getTypes();

  if (memberTypes.length === 0) {
    context.reportError("Union type ".concat(union.name, " must define one or more member types."), getAllNodes(union));
  }

  var includedTypeNames = Object.create(null);
  var _iteratorNormalCompletion11 = true;
  var _didIteratorError11 = false;
  var _iteratorError11 = undefined;

  try {
    for (var _iterator11 = memberTypes[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
      var memberType = _step11.value;

      if (includedTypeNames[memberType.name]) {
        context.reportError("Union type ".concat(union.name, " can only include type ") + "".concat(memberType.name, " once."), getUnionMemberTypeNodes(union, memberType.name));
        continue;
      }

      includedTypeNames[memberType.name] = true;

      if (!Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isObjectType"])(memberType)) {
        context.reportError("Union type ".concat(union.name, " can only include Object types, ") + "it cannot include ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(memberType), "."), getUnionMemberTypeNodes(union, String(memberType)));
      }
    }
  } catch (err) {
    _didIteratorError11 = true;
    _iteratorError11 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
        _iterator11.return();
      }
    } finally {
      if (_didIteratorError11) {
        throw _iteratorError11;
      }
    }
  }
}

function validateEnumValues(context, enumType) {
  var enumValues = enumType.getValues();

  if (enumValues.length === 0) {
    context.reportError("Enum type ".concat(enumType.name, " must define one or more values."), getAllNodes(enumType));
  }

  var _iteratorNormalCompletion12 = true;
  var _didIteratorError12 = false;
  var _iteratorError12 = undefined;

  try {
    for (var _iterator12 = enumValues[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
      var enumValue = _step12.value;
      var valueName = enumValue.name; // Ensure valid name.

      validateName(context, enumValue);

      if (valueName === 'true' || valueName === 'false' || valueName === 'null') {
        context.reportError("Enum type ".concat(enumType.name, " cannot include value: ").concat(valueName, "."), enumValue.astNode);
      }
    }
  } catch (err) {
    _didIteratorError12 = true;
    _iteratorError12 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
        _iterator12.return();
      }
    } finally {
      if (_didIteratorError12) {
        throw _iteratorError12;
      }
    }
  }
}

function validateInputFields(context, inputObj) {
  var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_2__["default"])(inputObj.getFields());

  if (fields.length === 0) {
    context.reportError("Input Object type ".concat(inputObj.name, " must define one or more fields."), getAllNodes(inputObj));
  } // Ensure the arguments are valid


  var _iteratorNormalCompletion13 = true;
  var _didIteratorError13 = false;
  var _iteratorError13 = undefined;

  try {
    for (var _iterator13 = fields[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
      var field = _step13.value;
      // Ensure they are named correctly.
      validateName(context, field); // Ensure the type is an input type

      if (!Object(_definition__WEBPACK_IMPORTED_MODULE_4__["isInputType"])(field.type)) {
        context.reportError("The type of ".concat(inputObj.name, ".").concat(field.name, " must be Input Type ") + "but got: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_8__["default"])(field.type), "."), field.astNode && field.astNode.type);
      }
    }
  } catch (err) {
    _didIteratorError13 = true;
    _iteratorError13 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
        _iterator13.return();
      }
    } finally {
      if (_didIteratorError13) {
        throw _iteratorError13;
      }
    }
  }
}

function getAllNodes(object) {
  var astNode = object.astNode,
      extensionASTNodes = object.extensionASTNodes;
  return astNode ? extensionASTNodes ? [astNode].concat(extensionASTNodes) : [astNode] : extensionASTNodes || [];
}

function getAllSubNodes(object, getter) {
  return Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_1__["default"])(getAllNodes(object), function (item) {
    return getter(item) || [];
  });
}

function getImplementsInterfaceNode(type, iface) {
  return getAllImplementsInterfaceNodes(type, iface)[0];
}

function getAllImplementsInterfaceNodes(type, iface) {
  return getAllSubNodes(type, function (typeNode) {
    return typeNode.interfaces;
  }).filter(function (ifaceNode) {
    return ifaceNode.name.value === iface.name;
  });
}

function getFieldNode(type, fieldName) {
  return Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(getAllSubNodes(type, function (typeNode) {
    return typeNode.fields;
  }), function (fieldNode) {
    return fieldNode.name.value === fieldName;
  });
}

function getFieldTypeNode(type, fieldName) {
  var fieldNode = getFieldNode(type, fieldName);
  return fieldNode && fieldNode.type;
}

function getFieldArgNode(type, fieldName, argName) {
  return getAllFieldArgNodes(type, fieldName, argName)[0];
}

function getAllFieldArgNodes(type, fieldName, argName) {
  var argNodes = [];
  var fieldNode = getFieldNode(type, fieldName);

  if (fieldNode && fieldNode.arguments) {
    var _iteratorNormalCompletion14 = true;
    var _didIteratorError14 = false;
    var _iteratorError14 = undefined;

    try {
      for (var _iterator14 = fieldNode.arguments[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
        var node = _step14.value;

        if (node.name.value === argName) {
          argNodes.push(node);
        }
      }
    } catch (err) {
      _didIteratorError14 = true;
      _iteratorError14 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
          _iterator14.return();
        }
      } finally {
        if (_didIteratorError14) {
          throw _iteratorError14;
        }
      }
    }
  }

  return argNodes;
}

function getFieldArgTypeNode(type, fieldName, argName) {
  var fieldArgNode = getFieldArgNode(type, fieldName, argName);
  return fieldArgNode && fieldArgNode.type;
}

function getAllDirectiveArgNodes(directive, argName) {
  return getAllSubNodes(directive, function (directiveNode) {
    return directiveNode.arguments;
  }).filter(function (argNode) {
    return argNode.name.value === argName;
  });
}

function getDirectiveArgTypeNode(directive, argName) {
  var argNode = getAllDirectiveArgNodes(directive, argName)[0];
  return argNode && argNode.type;
}

function getUnionMemberTypeNodes(union, typeName) {
  return getAllSubNodes(union, function (unionNode) {
    return unionNode.types;
  }).filter(function (typeNode) {
    return typeNode.name.value === typeName;
  });
}


/***/ }),

/***/ "./node_modules/graphql/utilities/TypeInfo.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/utilities/TypeInfo.mjs ***!
  \*****************************************************/
/*! exports provided: TypeInfo */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return TypeInfo; });
/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/introspection */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _typeFromAST__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeFromAST */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */

var TypeInfo =
/*#__PURE__*/
function () {
  function TypeInfo(schema, // NOTE: this experimental optional second parameter is only needed in order
  // to support non-spec-compliant codebases. You should never need to use it.
  // It may disappear in the future.
  getFieldDefFn, // Initial type may be provided in rare cases to facilitate traversals
  // beginning somewhere other than documents.
  initialType) {
    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._defaultValueStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn || getFieldDef;

    if (initialType) {
      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(initialType)) {
        this._inputTypeStack.push(initialType);
      }

      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(initialType)) {
        this._parentTypeStack.push(initialType);
      }

      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isOutputType"])(initialType)) {
        this._typeStack.push(initialType);
      }
    }
  }

  var _proto = TypeInfo.prototype;

  _proto.getType = function getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  };

  _proto.getParentType = function getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  };

  _proto.getInputType = function getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  };

  _proto.getParentInputType = function getParentInputType() {
    if (this._inputTypeStack.length > 1) {
      return this._inputTypeStack[this._inputTypeStack.length - 2];
    }
  };

  _proto.getFieldDef = function getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  };

  _proto.getDefaultValue = function getDefaultValue() {
    if (this._defaultValueStack.length > 0) {
      return this._defaultValueStack[this._defaultValueStack.length - 1];
    }
  };

  _proto.getDirective = function getDirective() {
    return this._directive;
  };

  _proto.getArgument = function getArgument() {
    return this._argument;
  };

  _proto.getEnumValue = function getEnumValue() {
    return this._enumValue;
  };

  _proto.enter = function enter(node) {
    var schema = this._schema; // Note: many of the types below are explicitly typed as "mixed" to drop
    // any assumptions of a valid schema to ensure runtime types are properly
    // checked before continuing since TypeInfo is used as part of validation
    // which occurs before guarantees of schema and document validity.

    switch (node.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SELECTION_SET:
        {
          var namedType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(this.getType());

          this._parentTypeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(namedType) ? namedType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD:
        {
          var parentType = this.getParentType();
          var fieldDef;
          var fieldType;

          if (parentType) {
            fieldDef = this._getFieldDef(schema, parentType, node);

            if (fieldDef) {
              fieldType = fieldDef.type;
            }
          }

          this._fieldDefStack.push(fieldDef);

          this._typeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isOutputType"])(fieldType) ? fieldType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION:
        {
          var type;

          if (node.operation === 'query') {
            type = schema.getQueryType();
          } else if (node.operation === 'mutation') {
            type = schema.getMutationType();
          } else if (node.operation === 'subscription') {
            type = schema.getSubscriptionType();
          }

          this._typeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(type) ? type : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INLINE_FRAGMENT:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION:
        {
          var typeConditionAST = node.typeCondition;
          var outputType = typeConditionAST ? Object(_typeFromAST__WEBPACK_IMPORTED_MODULE_4__["typeFromAST"])(schema, typeConditionAST) : Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(this.getType());

          this._typeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isOutputType"])(outputType) ? outputType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE_DEFINITION:
        {
          var inputType = Object(_typeFromAST__WEBPACK_IMPORTED_MODULE_4__["typeFromAST"])(schema, node.type);

          this._inputTypeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(inputType) ? inputType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ARGUMENT:
        {
          var argDef;
          var argType;
          var fieldOrDirective = this.getDirective() || this.getFieldDef();

          if (fieldOrDirective) {
            argDef = Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(fieldOrDirective.args, function (arg) {
              return arg.name === node.name.value;
            });

            if (argDef) {
              argType = argDef.type;
            }
          }

          this._argument = argDef;

          this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);

          this._inputTypeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(argType) ? argType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].LIST:
        {
          var listType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNullableType"])(this.getInputType());
          var itemType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isListType"])(listType) ? listType.ofType : listType; // List positions never have a default value.

          this._defaultValueStack.push(undefined);

          this._inputTypeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(itemType) ? itemType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_FIELD:
        {
          var objectType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(this.getInputType());
          var inputFieldType;
          var inputField;

          if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputObjectType"])(objectType)) {
            inputField = objectType.getFields()[node.name.value];

            if (inputField) {
              inputFieldType = inputField.type;
            }
          }

          this._defaultValueStack.push(inputField ? inputField.defaultValue : undefined);

          this._inputTypeStack.push(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(inputFieldType) ? inputFieldType : undefined);

          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM:
        {
          var enumType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(this.getInputType());
          var enumValue;

          if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isEnumType"])(enumType)) {
            enumValue = enumType.getValue(node.value);
          }

          this._enumValue = enumValue;
          break;
        }
    }
  };

  _proto.leave = function leave(node) {
    switch (node.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SELECTION_SET:
        this._parentTypeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD:
        this._fieldDefStack.pop();

        this._typeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE:
        this._directive = null;
        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INLINE_FRAGMENT:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION:
        this._typeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE_DEFINITION:
        this._inputTypeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ARGUMENT:
        this._argument = null;

        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].LIST:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_FIELD:
        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM:
        this._enumValue = null;
        break;
    }
  };

  return TypeInfo;
}();
/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */

function getFieldDef(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;

  if (name === _type_introspection__WEBPACK_IMPORTED_MODULE_3__["SchemaMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_3__["SchemaMetaFieldDef"];
  }

  if (name === _type_introspection__WEBPACK_IMPORTED_MODULE_3__["TypeMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_3__["TypeMetaFieldDef"];
  }

  if (name === _type_introspection__WEBPACK_IMPORTED_MODULE_3__["TypeNameMetaFieldDef"].name && Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(parentType)) {
    return _type_introspection__WEBPACK_IMPORTED_MODULE_3__["TypeNameMetaFieldDef"];
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(parentType) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInterfaceType"])(parentType)) {
    return parentType.getFields()[name];
  }
}


/***/ }),

/***/ "./node_modules/graphql/utilities/assertValidName.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/utilities/assertValidName.mjs ***!
  \************************************************************/
/*! exports provided: assertValidName, isValidNameError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidName", function() { return assertValidName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNameError", function() { return isValidNameError; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
/**
 * Upholds the spec rules about naming.
 */

function assertValidName(name) {
  var error = isValidNameError(name);

  if (error) {
    throw error;
  }

  return name;
}
/**
 * Returns an Error if a name is invalid.
 */

function isValidNameError(name, node) {
  !(typeof name === 'string') ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(0, 'Expected string') : void 0;

  if (name.length > 1 && name[0] === '_' && name[1] === '_') {
    return new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Name \"".concat(name, "\" must not begin with \"__\", which is reserved by ") + 'GraphQL introspection.', node);
  }

  if (!NAME_RX.test(name)) {
    return new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but \"".concat(name, "\" does not."), node);
  }
}


/***/ }),

/***/ "./node_modules/graphql/utilities/astFromValue.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/utilities/astFromValue.mjs ***!
  \*********************************************************/
/*! exports provided: astFromValue */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "astFromValue", function() { return astFromValue; });
/* harmony import */ var iterall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iterall */ "./node_modules/iterall/index.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_isNullish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/isNullish */ "./node_modules/graphql/jsutils/isNullish.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/isInvalid */ "./node_modules/graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/scalars */ "./node_modules/graphql/type/scalars.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */








/**
 * Produces a GraphQL Value AST given a JavaScript value.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */

function astFromValue(value, type) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type)) {
    var astValue = astFromValue(value, type.ofType);

    if (astValue && astValue.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].NULL) {
      return null;
    }

    return astValue;
  } // only explicit null, not undefined, NaN


  if (value === null) {
    return {
      kind: _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].NULL
    };
  } // undefined, NaN


  if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_4__["default"])(value)) {
    return null;
  } // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(type)) {
    var itemType = type.ofType;

    if (Object(iterall__WEBPACK_IMPORTED_MODULE_0__["isCollection"])(value)) {
      var valuesNodes = [];
      Object(iterall__WEBPACK_IMPORTED_MODULE_0__["forEach"])(value, function (item) {
        var itemNode = astFromValue(item, itemType);

        if (itemNode) {
          valuesNodes.push(itemNode);
        }
      });
      return {
        kind: _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].LIST,
        values: valuesNodes
      };
    }

    return astFromValue(value, itemType);
  } // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInputObjectType"])(type)) {
    if (value === null || _typeof(value) !== 'object') {
      return null;
    }

    var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(type.getFields());
    var fieldNodes = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var field = _step.value;
        var fieldValue = astFromValue(value[field.name], field.type);

        if (fieldValue) {
          fieldNodes.push({
            kind: _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].OBJECT_FIELD,
            name: {
              kind: _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].NAME,
              value: field.name
            },
            value: fieldValue
          });
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return {
      kind: _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].OBJECT,
      fields: fieldNodes
    };
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isLeafType"])(type)) {
    // Since value is an internally represented value, it must be serialized
    // to an externally represented value before converting into an AST.
    var serialized = type.serialize(value);

    if (Object(_jsutils_isNullish__WEBPACK_IMPORTED_MODULE_3__["default"])(serialized)) {
      return null;
    } // Others serialize based on their corresponding JavaScript scalar types.


    if (typeof serialized === 'boolean') {
      return {
        kind: _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].BOOLEAN,
        value: serialized
      };
    } // JavaScript numbers can be Int or Float values.


    if (typeof serialized === 'number') {
      var stringNum = String(serialized);
      return integerStringRegExp.test(stringNum) ? {
        kind: _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].INT,
        value: stringNum
      } : {
        kind: _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].FLOAT,
        value: stringNum
      };
    }

    if (typeof serialized === 'string') {
      // Enum types use Enum literals.
      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isEnumType"])(type)) {
        return {
          kind: _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].ENUM,
          value: serialized
        };
      } // ID types can use Int literals.


      if (type === _type_scalars__WEBPACK_IMPORTED_MODULE_7__["GraphQLID"] && integerStringRegExp.test(serialized)) {
        return {
          kind: _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].INT,
          value: serialized
        };
      }

      return {
        kind: _language_kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].STRING,
        value: serialized
      };
    }

    throw new TypeError("Cannot convert value to AST: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(serialized)));
  } // Not reachable. All possible input types have been considered.

  /* istanbul ignore next */


  throw new Error("Unexpected input type: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type), "\"."));
}
/**
 * IntValue:
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit ( Digit+ )?
 */

var integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;


/***/ }),

/***/ "./node_modules/graphql/utilities/buildASTSchema.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/graphql/utilities/buildASTSchema.mjs ***!
  \***********************************************************/
/*! exports provided: buildASTSchema, ASTDefinitionBuilder, getDescription, buildSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildASTSchema", function() { return buildASTSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASTDefinitionBuilder", function() { return ASTDefinitionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return getDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSchema", function() { return buildSchema; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/keyMap */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/keyValMap */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _valueFromAST__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./valueFromAST */ "./node_modules/graphql/utilities/valueFromAST.mjs");
/* harmony import */ var _validation_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validation/validate */ "./node_modules/graphql/validation/validate.mjs");
/* harmony import */ var _language_blockString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../language/blockString */ "./node_modules/graphql/language/blockString.mjs");
/* harmony import */ var _language_lexer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language/lexer */ "./node_modules/graphql/language/lexer.mjs");
/* harmony import */ var _language_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language/parser */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _execution_values__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../execution/values */ "./node_modules/graphql/execution/values.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../language/predicates */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../type/directives */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../type/introspection */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../type/scalars */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_schema__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../type/schema */ "./node_modules/graphql/type/schema.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



















/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function buildASTSchema(documentAST, options) {
  !(documentAST && documentAST.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_11__["Kind"].DOCUMENT) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 'Must provide valid Document AST') : void 0;

  if (!options || !(options.assumeValid || options.assumeValidSDL)) {
    Object(_validation_validate__WEBPACK_IMPORTED_MODULE_6__["assertValidSDL"])(documentAST);
  }

  var schemaDef;
  var typeDefs = [];
  var directiveDefs = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = documentAST.definitions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var def = _step.value;

      if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_11__["Kind"].SCHEMA_DEFINITION) {
        schemaDef = def;
      } else if (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_12__["isTypeDefinitionNode"])(def)) {
        typeDefs.push(def);
      } else if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_11__["Kind"].DIRECTIVE_DEFINITION) {
        directiveDefs.push(def);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var astBuilder = new ASTDefinitionBuilder(options, function (typeName) {
    var type = typeMap[typeName];
    !type ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(0, "Type \"".concat(typeName, "\" not found in document.")) : void 0;
    return type;
  });
  var typeMap = keyByNameNode(typeDefs, function (node) {
    return astBuilder.buildType(node);
  });
  var operationTypes = schemaDef ? getOperationTypes(schemaDef) : {
    query: 'Query',
    mutation: 'Mutation',
    subscription: 'Subscription'
  };
  var directives = directiveDefs.map(function (def) {
    return astBuilder.buildDirective(def);
  }); // If specified directives were not explicitly declared, add them.

  if (!directives.some(function (directive) {
    return directive.name === 'skip';
  })) {
    directives.push(_type_directives__WEBPACK_IMPORTED_MODULE_14__["GraphQLSkipDirective"]);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'include';
  })) {
    directives.push(_type_directives__WEBPACK_IMPORTED_MODULE_14__["GraphQLIncludeDirective"]);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'deprecated';
  })) {
    directives.push(_type_directives__WEBPACK_IMPORTED_MODULE_14__["GraphQLDeprecatedDirective"]);
  }

  return new _type_schema__WEBPACK_IMPORTED_MODULE_17__["GraphQLSchema"]({
    // Note: While this could make early assertions to get the correctly
    // typed values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    query: operationTypes.query ? typeMap[operationTypes.query] : null,
    mutation: operationTypes.mutation ? typeMap[operationTypes.mutation] : null,
    subscription: operationTypes.subscription ? typeMap[operationTypes.subscription] : null,
    types: Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(typeMap),
    directives: directives,
    astNode: schemaDef,
    assumeValid: options && options.assumeValid,
    allowedLegacyNames: options && options.allowedLegacyNames
  });

  function getOperationTypes(schema) {
    var opTypes = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = schema.operationTypes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var operationType = _step2.value;
        opTypes[operationType.operation] = operationType.type.name.value;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return opTypes;
  }
}
var stdTypeMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_3__["default"])(_type_scalars__WEBPACK_IMPORTED_MODULE_16__["specifiedScalarTypes"].concat(_type_introspection__WEBPACK_IMPORTED_MODULE_15__["introspectionTypes"]), function (type) {
  return type.name;
});
var ASTDefinitionBuilder =
/*#__PURE__*/
function () {
  function ASTDefinitionBuilder(options, resolveType) {
    this._options = options;
    this._resolveType = resolveType;
  }

  var _proto = ASTDefinitionBuilder.prototype;

  _proto.getNamedType = function getNamedType(node) {
    var name = node.name.value;
    return stdTypeMap[name] || this._resolveType(name);
  };

  _proto.getWrappedType = function getWrappedType(node) {
    if (node.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_11__["Kind"].LIST_TYPE) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_13__["GraphQLList"](this.getWrappedType(node.type));
    }

    if (node.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_11__["Kind"].NON_NULL_TYPE) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_13__["GraphQLNonNull"](this.getWrappedType(node.type));
    }

    return this.getNamedType(node);
  };

  _proto.buildDirective = function buildDirective(directive) {
    var _this = this;

    var locations = directive.locations.map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    return new _type_directives__WEBPACK_IMPORTED_MODULE_14__["GraphQLDirective"]({
      name: directive.name.value,
      description: getDescription(directive, this._options),
      locations: locations,
      args: keyByNameNode(directive.arguments || [], function (arg) {
        return _this.buildArg(arg);
      }),
      astNode: directive
    });
  };

  _proto.buildField = function buildField(field) {
    var _this2 = this;

    return {
      // Note: While this could make assertions to get the correctly typed
      // value, that would throw immediately while type system validation
      // with validateSchema() will produce more actionable results.
      type: this.getWrappedType(field.type),
      description: getDescription(field, this._options),
      args: keyByNameNode(field.arguments || [], function (arg) {
        return _this2.buildArg(arg);
      }),
      deprecationReason: getDeprecationReason(field),
      astNode: field
    };
  };

  _proto.buildArg = function buildArg(value) {
    // Note: While this could make assertions to get the correctly typed
    // value, that would throw immediately while type system validation
    // with validateSchema() will produce more actionable results.
    var type = this.getWrappedType(value.type);
    return {
      type: type,
      description: getDescription(value, this._options),
      defaultValue: Object(_valueFromAST__WEBPACK_IMPORTED_MODULE_5__["valueFromAST"])(value.defaultValue, type),
      astNode: value
    };
  };

  _proto.buildInputField = function buildInputField(value) {
    // Note: While this could make assertions to get the correctly typed
    // value, that would throw immediately while type system validation
    // with validateSchema() will produce more actionable results.
    var type = this.getWrappedType(value.type);
    return {
      type: type,
      description: getDescription(value, this._options),
      defaultValue: Object(_valueFromAST__WEBPACK_IMPORTED_MODULE_5__["valueFromAST"])(value.defaultValue, type),
      astNode: value
    };
  };

  _proto.buildEnumValue = function buildEnumValue(value) {
    return {
      description: getDescription(value, this._options),
      deprecationReason: getDeprecationReason(value),
      astNode: value
    };
  };

  _proto.buildType = function buildType(astNode) {
    var name = astNode.name.value;

    if (stdTypeMap[name]) {
      return stdTypeMap[name];
    }

    switch (astNode.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_11__["Kind"].OBJECT_TYPE_DEFINITION:
        return this._makeTypeDef(astNode);

      case _language_kinds__WEBPACK_IMPORTED_MODULE_11__["Kind"].INTERFACE_TYPE_DEFINITION:
        return this._makeInterfaceDef(astNode);

      case _language_kinds__WEBPACK_IMPORTED_MODULE_11__["Kind"].ENUM_TYPE_DEFINITION:
        return this._makeEnumDef(astNode);

      case _language_kinds__WEBPACK_IMPORTED_MODULE_11__["Kind"].UNION_TYPE_DEFINITION:
        return this._makeUnionDef(astNode);

      case _language_kinds__WEBPACK_IMPORTED_MODULE_11__["Kind"].SCALAR_TYPE_DEFINITION:
        return this._makeScalarDef(astNode);

      case _language_kinds__WEBPACK_IMPORTED_MODULE_11__["Kind"].INPUT_OBJECT_TYPE_DEFINITION:
        return this._makeInputObjectDef(astNode);
    } // Not reachable. All possible type definition nodes have been considered.

    /* istanbul ignore next */


    throw new Error("Unexpected type definition node: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(astNode), "\"."));
  };

  _proto._makeTypeDef = function _makeTypeDef(astNode) {
    var _this3 = this;

    var interfaceNodes = astNode.interfaces;
    var fieldNodes = astNode.fields; // Note: While this could make assertions to get the correctly typed
    // values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.

    var interfaces = interfaceNodes && interfaceNodes.length > 0 ? function () {
      return interfaceNodes.map(function (ref) {
        return _this3.getNamedType(ref);
      });
    } : [];
    var fields = fieldNodes && fieldNodes.length > 0 ? function () {
      return keyByNameNode(fieldNodes, function (field) {
        return _this3.buildField(field);
      });
    } : Object.create(null);
    return new _type_definition__WEBPACK_IMPORTED_MODULE_13__["GraphQLObjectType"]({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      interfaces: interfaces,
      fields: fields,
      astNode: astNode
    });
  };

  _proto._makeInterfaceDef = function _makeInterfaceDef(astNode) {
    var _this4 = this;

    var fieldNodes = astNode.fields;
    var fields = fieldNodes && fieldNodes.length > 0 ? function () {
      return keyByNameNode(fieldNodes, function (field) {
        return _this4.buildField(field);
      });
    } : Object.create(null);
    return new _type_definition__WEBPACK_IMPORTED_MODULE_13__["GraphQLInterfaceType"]({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      fields: fields,
      astNode: astNode
    });
  };

  _proto._makeEnumDef = function _makeEnumDef(astNode) {
    var _this5 = this;

    var valueNodes = astNode.values || [];
    return new _type_definition__WEBPACK_IMPORTED_MODULE_13__["GraphQLEnumType"]({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      values: keyByNameNode(valueNodes, function (value) {
        return _this5.buildEnumValue(value);
      }),
      astNode: astNode
    });
  };

  _proto._makeUnionDef = function _makeUnionDef(astNode) {
    var _this6 = this;

    var typeNodes = astNode.types; // Note: While this could make assertions to get the correctly typed
    // values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.

    var types = typeNodes && typeNodes.length > 0 ? function () {
      return typeNodes.map(function (ref) {
        return _this6.getNamedType(ref);
      });
    } : [];
    return new _type_definition__WEBPACK_IMPORTED_MODULE_13__["GraphQLUnionType"]({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      types: types,
      astNode: astNode
    });
  };

  _proto._makeScalarDef = function _makeScalarDef(astNode) {
    return new _type_definition__WEBPACK_IMPORTED_MODULE_13__["GraphQLScalarType"]({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      astNode: astNode,
      serialize: function serialize(value) {
        return value;
      }
    });
  };

  _proto._makeInputObjectDef = function _makeInputObjectDef(def) {
    var _this7 = this;

    var fields = def.fields;
    return new _type_definition__WEBPACK_IMPORTED_MODULE_13__["GraphQLInputObjectType"]({
      name: def.name.value,
      description: getDescription(def, this._options),
      fields: fields ? function () {
        return keyByNameNode(fields, function (field) {
          return _this7.buildInputField(field);
        });
      } : Object.create(null),
      astNode: def
    });
  };

  return ASTDefinitionBuilder;
}();

function keyByNameNode(list, valFn) {
  return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_4__["default"])(list, function (_ref2) {
    var name = _ref2.name;
    return name.value;
  }, valFn);
}
/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */


function getDeprecationReason(node) {
  var deprecated = Object(_execution_values__WEBPACK_IMPORTED_MODULE_10__["getDirectiveValues"])(_type_directives__WEBPACK_IMPORTED_MODULE_14__["GraphQLDeprecatedDirective"], node);
  return deprecated && deprecated.reason;
}
/**
 * Given an ast node, returns its string description.
 * @deprecated: provided to ease adoption and will be removed in v16.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */


function getDescription(node, options) {
  if (node.description) {
    return node.description.value;
  }

  if (options && options.commentDescriptions) {
    var rawValue = getLeadingCommentBlock(node);

    if (rawValue !== undefined) {
      return Object(_language_blockString__WEBPACK_IMPORTED_MODULE_7__["dedentBlockStringValue"])('\n' + rawValue);
    }
  }
}

function getLeadingCommentBlock(node) {
  var loc = node.loc;

  if (!loc) {
    return;
  }

  var comments = [];
  var token = loc.startToken.prev;

  while (token && token.kind === _language_lexer__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
    var value = String(token.value);
    comments.push(value);
    token = token.prev;
  }

  return comments.reverse().join('\n');
}
/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */


function buildSchema(source, options) {
  return buildASTSchema(Object(_language_parser__WEBPACK_IMPORTED_MODULE_9__["parse"])(source, options), options);
}


/***/ }),

/***/ "./node_modules/graphql/utilities/buildClientSchema.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/graphql/utilities/buildClientSchema.mjs ***!
  \**************************************************************/
/*! exports provided: buildClientSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildClientSchema", function() { return buildClientSchema; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/keyValMap */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _valueFromAST__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./valueFromAST */ "./node_modules/graphql/utilities/valueFromAST.mjs");
/* harmony import */ var _language_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/parser */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _type_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/schema */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../type/directives */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../type/introspection */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../type/scalars */ "./node_modules/graphql/type/scalars.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */












/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */
function buildClientSchema(introspection, options) {
  // Get the schema from the introspection result.
  var schemaIntrospection = introspection.__schema; // Iterate through all types, getting the type definition for each.

  var typeMap = Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__["default"])(schemaIntrospection.types, function (typeIntrospection) {
    return typeIntrospection.name;
  }, function (typeIntrospection) {
    return buildType(typeIntrospection);
  });

  for (var _i = 0, _arr = [].concat(_type_scalars__WEBPACK_IMPORTED_MODULE_10__["specifiedScalarTypes"], _type_introspection__WEBPACK_IMPORTED_MODULE_9__["introspectionTypes"]); _i < _arr.length; _i++) {
    var stdType = _arr[_i];

    if (typeMap[stdType.name]) {
      typeMap[stdType.name] = stdType;
    }
  } // Get the root Query, Mutation, and Subscription types.


  var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null; // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.

  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : []; // Then produce and return a Schema with these types.

  return new _type_schema__WEBPACK_IMPORTED_MODULE_6__["GraphQLSchema"]({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(typeMap),
    directives: directives,
    assumeValid: options && options.assumeValid,
    allowedLegacyNames: options && options.allowedLegacyNames
  }); // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.

  function getType(typeRef) {
    if (typeRef.kind === _type_introspection__WEBPACK_IMPORTED_MODULE_9__["TypeKind"].LIST) {
      var itemRef = typeRef.ofType;

      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      return Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(getType(itemRef));
    }

    if (typeRef.kind === _type_introspection__WEBPACK_IMPORTED_MODULE_9__["TypeKind"].NON_NULL) {
      var nullableRef = typeRef.ofType;

      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      var nullableType = getType(nullableRef);
      return Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["assertNullableType"])(nullableType));
    }

    if (!typeRef.name) {
      throw new Error('Unknown type reference: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(typeRef));
    }

    return getNamedType(typeRef.name);
  }

  function getNamedType(typeName) {
    var type = typeMap[typeName];

    if (!type) {
      throw new Error("Invalid or incomplete schema, unknown type: ".concat(typeName, ". Ensure ") + 'that a full introspection query is used in order to build a ' + 'client schema.');
    }

    return type;
  }

  function getInputType(typeRef) {
    var type = getType(typeRef);
    !Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isInputType"])(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 'Introspection must provide input type for arguments, but received: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type) + '.') : void 0;
    return type;
  }

  function getOutputType(typeRef) {
    var type = getType(typeRef);
    !Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isOutputType"])(type) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 'Introspection must provide output type for fields, but received: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type) + '.') : void 0;
    return type;
  }

  function getObjectType(typeRef) {
    var type = getType(typeRef);
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["assertObjectType"])(type);
  }

  function getInterfaceType(typeRef) {
    var type = getType(typeRef);
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["assertInterfaceType"])(type);
  } // Given a type's introspection result, construct the correct
  // GraphQLType instance.


  function buildType(type) {
    if (type && type.name && type.kind) {
      switch (type.kind) {
        case _type_introspection__WEBPACK_IMPORTED_MODULE_9__["TypeKind"].SCALAR:
          return buildScalarDef(type);

        case _type_introspection__WEBPACK_IMPORTED_MODULE_9__["TypeKind"].OBJECT:
          return buildObjectDef(type);

        case _type_introspection__WEBPACK_IMPORTED_MODULE_9__["TypeKind"].INTERFACE:
          return buildInterfaceDef(type);

        case _type_introspection__WEBPACK_IMPORTED_MODULE_9__["TypeKind"].UNION:
          return buildUnionDef(type);

        case _type_introspection__WEBPACK_IMPORTED_MODULE_9__["TypeKind"].ENUM:
          return buildEnumDef(type);

        case _type_introspection__WEBPACK_IMPORTED_MODULE_9__["TypeKind"].INPUT_OBJECT:
          return buildInputObjectDef(type);
      }
    }

    throw new Error('Invalid or incomplete introspection result. Ensure that a full ' + 'introspection query is used in order to build a client schema:' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type));
  }

  function buildScalarDef(scalarIntrospection) {
    return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLScalarType"]({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description,
      serialize: function serialize(value) {
        return value;
      }
    });
  }

  function buildObjectDef(objectIntrospection) {
    if (!objectIntrospection.interfaces) {
      throw new Error('Introspection result missing interfaces: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(objectIntrospection));
    }

    return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: function interfaces() {
        return objectIntrospection.interfaces.map(getInterfaceType);
      },
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLInterfaceType"]({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      }
    });
  }

  function buildUnionDef(unionIntrospection) {
    if (!unionIntrospection.possibleTypes) {
      throw new Error('Introspection result missing possibleTypes: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(unionIntrospection));
    }

    return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLUnionType"]({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: function types() {
        return unionIntrospection.possibleTypes.map(getObjectType);
      }
    });
  }

  function buildEnumDef(enumIntrospection) {
    if (!enumIntrospection.enumValues) {
      throw new Error('Introspection result missing enumValues: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(enumIntrospection));
    }

    return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLEnumType"]({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__["default"])(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    if (!inputObjectIntrospection.inputFields) {
      throw new Error('Introspection result missing inputFields: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(inputObjectIntrospection));
    }

    return new _type_definition__WEBPACK_IMPORTED_MODULE_7__["GraphQLInputObjectType"]({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    if (!typeIntrospection.fields) {
      throw new Error('Introspection result missing fields: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(typeIntrospection));
    }

    return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__["default"])(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, function (fieldIntrospection) {
      if (!fieldIntrospection.args) {
        throw new Error('Introspection result missing field args: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldIntrospection));
      }

      return {
        description: fieldIntrospection.description,
        deprecationReason: fieldIntrospection.deprecationReason,
        type: getOutputType(fieldIntrospection.type),
        args: buildInputValueDefMap(fieldIntrospection.args)
      };
    });
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_3__["default"])(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }

  function buildInputValue(inputValueIntrospection) {
    var type = getInputType(inputValueIntrospection.type);
    var defaultValue = inputValueIntrospection.defaultValue ? Object(_valueFromAST__WEBPACK_IMPORTED_MODULE_4__["valueFromAST"])(Object(_language_parser__WEBPACK_IMPORTED_MODULE_5__["parseValue"])(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue
    };
  }

  function buildDirective(directiveIntrospection) {
    if (!directiveIntrospection.args) {
      throw new Error('Introspection result missing directive args: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(directiveIntrospection));
    }

    if (!directiveIntrospection.locations) {
      throw new Error('Introspection result missing directive locations: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(directiveIntrospection));
    }

    return new _type_directives__WEBPACK_IMPORTED_MODULE_8__["GraphQLDirective"]({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      locations: directiveIntrospection.locations.slice(),
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }
}


/***/ }),

/***/ "./node_modules/graphql/utilities/coerceValue.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/utilities/coerceValue.mjs ***!
  \********************************************************/
/*! exports provided: coerceValue */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceValue", function() { return coerceValue; });
/* harmony import */ var iterall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iterall */ "./node_modules/iterall/index.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/isInvalid */ "./node_modules/graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _jsutils_orList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/orList */ "./node_modules/graphql/jsutils/orList.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/suggestionList */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */









/**
 * Coerces a JavaScript value given a GraphQL Type.
 *
 * Returns either a value which is valid for the provided type or a list of
 * encountered coercion errors.
 *
 */
function coerceValue(value, type, blameNode, path) {
  // A value must be provided if the type is non-null.
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(type)) {
    if (value == null) {
      return ofErrors([coercionError("Expected non-nullable type ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " not to be null"), blameNode, path)]);
    }

    return coerceValue(value, type.ofType, blameNode, path);
  }

  if (value == null) {
    // Explicitly return the value null.
    return ofValue(null);
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isScalarType"])(type)) {
    // Scalars determine if a value is valid via parseValue(), which can
    // throw to indicate failure. If it throws, maintain a reference to
    // the original error.
    try {
      var parseResult = type.parseValue(value);

      if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(parseResult)) {
        return ofErrors([coercionError("Expected type ".concat(type.name), blameNode, path)]);
      }

      return ofValue(parseResult);
    } catch (error) {
      return ofErrors([coercionError("Expected type ".concat(type.name), blameNode, path, error.message, error)]);
    }
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isEnumType"])(type)) {
    if (typeof value === 'string') {
      var enumValue = type.getValue(value);

      if (enumValue) {
        return ofValue(enumValue.value);
      }
    }

    var suggestions = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_5__["default"])(String(value), type.getValues().map(function (enumValue) {
      return enumValue.name;
    }));
    var didYouMean = suggestions.length !== 0 ? "did you mean ".concat(Object(_jsutils_orList__WEBPACK_IMPORTED_MODULE_4__["default"])(suggestions), "?") : undefined;
    return ofErrors([coercionError("Expected type ".concat(type.name), blameNode, path, didYouMean)]);
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isListType"])(type)) {
    var itemType = type.ofType;

    if (Object(iterall__WEBPACK_IMPORTED_MODULE_0__["isCollection"])(value)) {
      var errors;
      var coercedValue = [];
      Object(iterall__WEBPACK_IMPORTED_MODULE_0__["forEach"])(value, function (itemValue, index) {
        var coercedItem = coerceValue(itemValue, itemType, blameNode, atPath(path, index));

        if (coercedItem.errors) {
          errors = add(errors, coercedItem.errors);
        } else if (!errors) {
          coercedValue.push(coercedItem.value);
        }
      });
      return errors ? ofErrors(errors) : ofValue(coercedValue);
    } // Lists accept a non-list value as a list of one.


    var coercedItem = coerceValue(value, itemType, blameNode);
    return coercedItem.errors ? coercedItem : ofValue([coercedItem.value]);
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(type)) {
    if (_typeof(value) !== 'object') {
      return ofErrors([coercionError("Expected type ".concat(type.name, " to be an object"), blameNode, path)]);
    }

    var _errors;

    var _coercedValue = {};
    var fields = type.getFields(); // Ensure every defined field is valid.

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(fields)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var field = _step.value;
        var fieldValue = value[field.name];

        if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(fieldValue)) {
          if (!Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(field.defaultValue)) {
            _coercedValue[field.name] = field.defaultValue;
          } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(field.type)) {
            _errors = add(_errors, coercionError("Field ".concat(printPath(atPath(path, field.name)), " of required ") + "type ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(field.type), " was not provided"), blameNode));
          }
        } else {
          var coercedField = coerceValue(fieldValue, field.type, blameNode, atPath(path, field.name));

          if (coercedField.errors) {
            _errors = add(_errors, coercedField.errors);
          } else if (!_errors) {
            _coercedValue[field.name] = coercedField.value;
          }
        }
      } // Ensure every provided field is defined.

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    for (var _i = 0, _Object$keys = Object.keys(value); _i < _Object$keys.length; _i++) {
      var fieldName = _Object$keys[_i];

      if (!fields[fieldName]) {
        var _suggestions = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_5__["default"])(fieldName, Object.keys(fields));

        var _didYouMean = _suggestions.length !== 0 ? "did you mean ".concat(Object(_jsutils_orList__WEBPACK_IMPORTED_MODULE_4__["default"])(_suggestions), "?") : undefined;

        _errors = add(_errors, coercionError("Field \"".concat(fieldName, "\" is not defined by type ").concat(type.name), blameNode, path, _didYouMean));
      }
    }

    return _errors ? ofErrors(_errors) : ofValue(_coercedValue);
  } // Not reachable. All possible input types have been considered.

  /* istanbul ignore next */


  throw new Error("Unexpected input type: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type), "\"."));
}

function ofValue(value) {
  return {
    errors: undefined,
    value: value
  };
}

function ofErrors(errors) {
  return {
    errors: errors,
    value: undefined
  };
}

function add(errors, moreErrors) {
  return (errors || []).concat(moreErrors);
}

function atPath(prev, key) {
  return {
    prev: prev,
    key: key
  };
}

function coercionError(message, blameNode, path, subMessage, originalError) {
  var pathStr = printPath(path); // Return a GraphQLError instance

  return new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"](message + (pathStr ? ' at ' + pathStr : '') + (subMessage ? '; ' + subMessage : '.'), blameNode, undefined, undefined, undefined, originalError);
} // Build a string describing the path into the value where the error was found


function printPath(path) {
  var pathStr = '';
  var currentPath = path;

  while (currentPath) {
    pathStr = (typeof currentPath.key === 'string' ? '.' + currentPath.key : '[' + String(currentPath.key) + ']') + pathStr;
    currentPath = currentPath.prev;
  }

  return pathStr ? 'value' + pathStr : '';
}


/***/ }),

/***/ "./node_modules/graphql/utilities/concatAST.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/utilities/concatAST.mjs ***!
  \******************************************************/
/*! exports provided: concatAST */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAST", function() { return concatAST; });
/* harmony import */ var _polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/flatMap */ "./node_modules/graphql/polyfills/flatMap.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
function concatAST(asts) {
  return {
    kind: 'Document',
    definitions: Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(asts, function (ast) {
      return ast.definitions;
    })
  };
}


/***/ }),

/***/ "./node_modules/graphql/utilities/extendSchema.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/utilities/extendSchema.mjs ***!
  \*********************************************************/
/*! exports provided: extendSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendSchema", function() { return extendSchema; });
/* harmony import */ var _polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/flatMap */ "./node_modules/graphql/polyfills/flatMap.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_mapValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/mapValue */ "./node_modules/graphql/jsutils/mapValue.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/keyValMap */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _buildASTSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildASTSchema */ "./node_modules/graphql/utilities/buildASTSchema.mjs");
/* harmony import */ var _validation_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validation/validate */ "./node_modules/graphql/validation/validate.mjs");
/* harmony import */ var _type_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../type/schema */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../type/introspection */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../type/scalars */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../type/directives */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../language/predicates */ "./node_modules/graphql/language/predicates.mjs");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
















/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 *
 * Accepts options as a third argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function extendSchema(schema, documentAST, options) {
  Object(_type_schema__WEBPACK_IMPORTED_MODULE_8__["assertSchema"])(schema);
  !(documentAST && documentAST.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_13__["Kind"].DOCUMENT) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(0, 'Must provide valid Document AST') : void 0;

  if (!options || !(options.assumeValid || options.assumeValidSDL)) {
    Object(_validation_validate__WEBPACK_IMPORTED_MODULE_7__["assertValidSDLExtension"])(documentAST, schema);
  } // Collect the type definitions and extensions found in the document.


  var typeDefs = [];
  var typeExtsMap = Object.create(null); // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".

  var directiveDefs = [];
  var schemaDef; // Schema extensions are collected which may add additional operation types.

  var schemaExts = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = documentAST.definitions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var def = _step.value;

      if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_13__["Kind"].SCHEMA_DEFINITION) {
        schemaDef = def;
      } else if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_13__["Kind"].SCHEMA_EXTENSION) {
        schemaExts.push(def);
      } else if (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_14__["isTypeDefinitionNode"])(def)) {
        typeDefs.push(def);
      } else if (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_14__["isTypeExtensionNode"])(def)) {
        var extendedTypeName = def.name.value;
        var existingTypeExts = typeExtsMap[extendedTypeName];
        typeExtsMap[extendedTypeName] = existingTypeExts ? existingTypeExts.concat([def]) : [def];
      } else if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_13__["Kind"].DIRECTIVE_DEFINITION) {
        directiveDefs.push(def);
      }
    } // If this document contains no new types, extensions, or directives then
    // return the same unmodified GraphQLSchema instance.

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (Object.keys(typeExtsMap).length === 0 && typeDefs.length === 0 && directiveDefs.length === 0 && schemaExts.length === 0 && !schemaDef) {
    return schema;
  }

  var schemaConfig = schema.toConfig();
  var astBuilder = new _buildASTSchema__WEBPACK_IMPORTED_MODULE_6__["ASTDefinitionBuilder"](options, function (typeName) {
    var type = typeMap[typeName];
    !type ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(0, "Unknown type: \"".concat(typeName, "\".")) : void 0;
    return type;
  });
  var typeMap = Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_5__["default"])(typeDefs, function (node) {
    return node.name.value;
  }, function (node) {
    return astBuilder.buildType(node);
  });
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = schemaConfig.types[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var existingType = _step2.value;
      typeMap[existingType.name] = extendNamedType(existingType);
    } // Get the extended root operation types.

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var operationTypes = {
    query: schemaConfig.query && schemaConfig.query.name,
    mutation: schemaConfig.mutation && schemaConfig.mutation.name,
    subscription: schemaConfig.subscription && schemaConfig.subscription.name
  };

  if (schemaDef) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = schemaDef.operationTypes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _ref2 = _step3.value;
        var operation = _ref2.operation;
        var type = _ref2.type;
        operationTypes[operation] = type.name.value;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  } // Then, incorporate schema definition and all schema extensions.


  for (var _i = 0, _schemaExts = schemaExts; _i < _schemaExts.length; _i++) {
    var schemaExt = _schemaExts[_i];

    if (schemaExt.operationTypes) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = schemaExt.operationTypes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _ref4 = _step4.value;
          var _operation = _ref4.operation;
          var _type = _ref4.type;
          operationTypes[_operation] = _type.name.value;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  } // Support both original legacy names and extended legacy names.


  var allowedLegacyNames = schemaConfig.allowedLegacyNames.concat(options && options.allowedLegacyNames || []); // Then produce and return a Schema with these types.

  return new _type_schema__WEBPACK_IMPORTED_MODULE_8__["GraphQLSchema"]({
    // Note: While this could make early assertions to get the correctly
    // typed values, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    query: getMaybeTypeByName(operationTypes.query),
    mutation: getMaybeTypeByName(operationTypes.mutation),
    subscription: getMaybeTypeByName(operationTypes.subscription),
    types: Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(typeMap),
    directives: getMergedDirectives(),
    astNode: schemaDef || schemaConfig.astNode,
    extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExts),
    allowedLegacyNames: allowedLegacyNames
  }); // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function replaceType(type) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_11__["isListType"])(type)) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_11__["GraphQLList"](replaceType(type.ofType));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_11__["isNonNullType"])(type)) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_11__["GraphQLNonNull"](replaceType(type.ofType));
    }

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    return typeMap[type.name];
  }

  function getMaybeTypeByName(typeName) {
    return typeName ? typeMap[typeName] : null;
  }

  function getMergedDirectives() {
    var existingDirectives = schema.getDirectives().map(extendDirective);
    !existingDirectives ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(0, 'schema must have default directives') : void 0;
    return existingDirectives.concat(directiveDefs.map(function (node) {
      return astBuilder.buildDirective(node);
    }));
  }

  function extendNamedType(type) {
    if (Object(_type_introspection__WEBPACK_IMPORTED_MODULE_9__["isIntrospectionType"])(type) || Object(_type_scalars__WEBPACK_IMPORTED_MODULE_10__["isSpecifiedScalarType"])(type)) {
      // Builtin types are not extended.
      return type;
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_11__["isScalarType"])(type)) {
      return extendScalarType(type);
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(type)) {
      return extendObjectType(type);
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_11__["isInterfaceType"])(type)) {
      return extendInterfaceType(type);
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_11__["isUnionType"])(type)) {
      return extendUnionType(type);
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_11__["isEnumType"])(type)) {
      return extendEnumType(type);
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_11__["isInputObjectType"])(type)) {
      return extendInputObjectType(type);
    } // Not reachable. All possible types have been considered.

    /* istanbul ignore next */


    throw new Error("Unexpected type: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type), "\"."));
  }

  function extendDirective(directive) {
    var config = directive.toConfig();
    return new _type_directives__WEBPACK_IMPORTED_MODULE_12__["GraphQLDirective"](_objectSpread({}, config, {
      args: Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_4__["default"])(config.args, extendArg)
    }));
  }

  function extendInputObjectType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var fieldNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.fields || [];
    });
    return new _type_definition__WEBPACK_IMPORTED_MODULE_11__["GraphQLInputObjectType"](_objectSpread({}, config, {
      fields: function fields() {
        return _objectSpread({}, Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_4__["default"])(config.fields, function (field) {
          return _objectSpread({}, field, {
            type: replaceType(field.type)
          });
        }), Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_5__["default"])(fieldNodes, function (field) {
          return field.name.value;
        }, function (field) {
          return astBuilder.buildInputField(field);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendEnumType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[type.name] || [];
    var valueNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.values || [];
    });
    return new _type_definition__WEBPACK_IMPORTED_MODULE_11__["GraphQLEnumType"](_objectSpread({}, config, {
      values: _objectSpread({}, config.values, Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_5__["default"])(valueNodes, function (value) {
        return value.name.value;
      }, function (value) {
        return astBuilder.buildEnumValue(value);
      })),
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendScalarType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    return new _type_definition__WEBPACK_IMPORTED_MODULE_11__["GraphQLScalarType"](_objectSpread({}, config, {
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendObjectType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var interfaceNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.interfaces || [];
    });
    var fieldNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.fields || [];
    });
    return new _type_definition__WEBPACK_IMPORTED_MODULE_11__["GraphQLObjectType"](_objectSpread({}, config, {
      interfaces: function interfaces() {
        return [].concat(type.getInterfaces().map(replaceNamedType), interfaceNodes.map(function (node) {
          return astBuilder.getNamedType(node);
        }));
      },
      fields: function fields() {
        return _objectSpread({}, Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_4__["default"])(config.fields, extendField), Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_5__["default"])(fieldNodes, function (node) {
          return node.name.value;
        }, function (node) {
          return astBuilder.buildField(node);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendInterfaceType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var fieldNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.fields || [];
    });
    return new _type_definition__WEBPACK_IMPORTED_MODULE_11__["GraphQLInterfaceType"](_objectSpread({}, config, {
      fields: function fields() {
        return _objectSpread({}, Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_4__["default"])(config.fields, extendField), Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_5__["default"])(fieldNodes, function (node) {
          return node.name.value;
        }, function (node) {
          return astBuilder.buildField(node);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendUnionType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var typeNodes = Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions, function (node) {
      return node.types || [];
    });
    return new _type_definition__WEBPACK_IMPORTED_MODULE_11__["GraphQLUnionType"](_objectSpread({}, config, {
      types: function types() {
        return [].concat(type.getTypes().map(replaceNamedType), typeNodes.map(function (node) {
          return astBuilder.getNamedType(node);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendField(field) {
    return _objectSpread({}, field, {
      type: replaceType(field.type),
      args: Object(_jsutils_mapValue__WEBPACK_IMPORTED_MODULE_4__["default"])(field.args, extendArg)
    });
  }

  function extendArg(arg) {
    return _objectSpread({}, arg, {
      type: replaceType(arg.type)
    });
  }
}


/***/ }),

/***/ "./node_modules/graphql/utilities/findBreakingChanges.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/utilities/findBreakingChanges.mjs ***!
  \****************************************************************/
/*! exports provided: BreakingChangeType, DangerousChangeType, findBreakingChanges, findDangerousChanges */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakingChangeType", function() { return BreakingChangeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangerousChangeType", function() { return DangerousChangeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBreakingChanges", function() { return findBreakingChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDangerousChanges", function() { return findDangerousChanges; });
/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/keyMap */ "./node_modules/graphql/jsutils/keyMap.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




var BreakingChangeType = {
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
  FIELD_REMOVED: 'FIELD_REMOVED',
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
  TYPE_REMOVED: 'TYPE_REMOVED',
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
  ARG_REMOVED: 'ARG_REMOVED',
  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
  REQUIRED_ARG_ADDED: 'REQUIRED_ARG_ADDED',
  REQUIRED_INPUT_FIELD_ADDED: 'REQUIRED_INPUT_FIELD_ADDED',
  INTERFACE_REMOVED_FROM_OBJECT: 'INTERFACE_REMOVED_FROM_OBJECT',
  DIRECTIVE_REMOVED: 'DIRECTIVE_REMOVED',
  DIRECTIVE_ARG_REMOVED: 'DIRECTIVE_ARG_REMOVED',
  DIRECTIVE_LOCATION_REMOVED: 'DIRECTIVE_LOCATION_REMOVED',
  REQUIRED_DIRECTIVE_ARG_ADDED: 'REQUIRED_DIRECTIVE_ARG_ADDED'
};
var DangerousChangeType = {
  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE',
  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
  INTERFACE_ADDED_TO_OBJECT: 'INTERFACE_ADDED_TO_OBJECT',
  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION',
  OPTIONAL_INPUT_FIELD_ADDED: 'OPTIONAL_INPUT_FIELD_ADDED',
  OPTIONAL_ARG_ADDED: 'OPTIONAL_ARG_ADDED'
};

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  return [].concat(findRemovedTypes(oldSchema, newSchema), findTypesThatChangedKind(oldSchema, newSchema), findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema).breakingChanges, findTypesRemovedFromUnions(oldSchema, newSchema), findValuesRemovedFromEnums(oldSchema, newSchema), findArgChanges(oldSchema, newSchema).breakingChanges, findInterfacesRemovedFromObjectTypes(oldSchema, newSchema), findRemovedDirectives(oldSchema, newSchema), findRemovedDirectiveArgs(oldSchema, newSchema), findAddedNonNullDirectiveArgs(oldSchema, newSchema), findRemovedDirectiveLocations(oldSchema, newSchema));
}
/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */

function findDangerousChanges(oldSchema, newSchema) {
  return [].concat(findArgChanges(oldSchema, newSchema).dangerousChanges, findValuesAddedToEnums(oldSchema, newSchema), findInterfacesAddedToObjectTypes(oldSchema, newSchema), findTypesAddedToUnions(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema).dangerousChanges);
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing an entire type.
 */

function findRemovedTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];

  for (var _i = 0, _Object$keys = Object.keys(oldTypeMap); _i < _Object$keys.length; _i++) {
    var typeName = _Object$keys[_i];

    if (!newTypeMap[typeName]) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_REMOVED,
        description: "".concat(typeName, " was removed.")
      });
    }
  }

  return breakingChanges;
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to changing the type of a type.
 */


function findTypesThatChangedKind(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];

  for (var _i2 = 0, _Object$keys2 = Object.keys(oldTypeMap); _i2 < _Object$keys2.length; _i2++) {
    var typeName = _Object$keys2[_i2];

    if (!newTypeMap[typeName]) {
      continue;
    }

    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (oldType.constructor !== newType.constructor) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: "".concat(typeName, " changed from ") + "".concat(typeKindName(oldType), " to ").concat(typeKindName(newType), ".")
      });
    }
  }

  return breakingChanges;
}
/**
 * Given two schemas, returns an Array containing descriptions of any
 * breaking or dangerous changes in the newSchema related to arguments
 * (such as removal or change of type of an argument, or a change in an
 * argument's default value).
 */


function findArgChanges(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];
  var dangerousChanges = [];

  for (var _i3 = 0, _Object$keys3 = Object.keys(oldTypeMap); _i3 < _Object$keys3.length; _i3++) {
    var typeName = _Object$keys3[_i3];
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(oldType) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInterfaceType"])(oldType)) || !(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(newType) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInterfaceType"])(newType)) || newType.constructor !== oldType.constructor) {
      continue;
    }

    var oldTypeFields = oldType.getFields();
    var newTypeFields = newType.getFields();

    for (var _i4 = 0, _Object$keys4 = Object.keys(oldTypeFields); _i4 < _Object$keys4.length; _i4++) {
      var fieldName = _Object$keys4[_i4];

      if (!newTypeFields[fieldName]) {
        continue;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var oldArgDef = _step.value;
          var newArgs = newTypeFields[fieldName].args;
          var newArgDef = Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(newArgs, function (arg) {
            return arg.name === oldArgDef.name;
          }); // Arg not present

          if (!newArgDef) {
            breakingChanges.push({
              type: BreakingChangeType.ARG_REMOVED,
              description: "".concat(oldType.name, ".").concat(fieldName, " arg ") + "".concat(oldArgDef.name, " was removed")
            });
          } else {
            var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldArgDef.type, newArgDef.type);

            if (!isSafe) {
              breakingChanges.push({
                type: BreakingChangeType.ARG_CHANGED_KIND,
                description: "".concat(oldType.name, ".").concat(fieldName, " arg ") + "".concat(oldArgDef.name, " has changed type from ") + "".concat(oldArgDef.type.toString(), " to ").concat(newArgDef.type.toString())
              });
            } else if (oldArgDef.defaultValue !== undefined && oldArgDef.defaultValue !== newArgDef.defaultValue) {
              dangerousChanges.push({
                type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
                description: "".concat(oldType.name, ".").concat(fieldName, " arg ") + "".concat(oldArgDef.name, " has changed defaultValue")
              });
            }
          }
        };

        for (var _iterator = oldTypeFields[fieldName].args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        } // Check if arg was added to the field

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop2 = function _loop2() {
          var newArgDef = _step2.value;
          var oldArgs = oldTypeFields[fieldName].args;
          var oldArgDef = Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(oldArgs, function (arg) {
            return arg.name === newArgDef.name;
          });

          if (!oldArgDef) {
            var argName = newArgDef.name;

            if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isRequiredArgument"])(newArgDef)) {
              breakingChanges.push({
                type: BreakingChangeType.REQUIRED_ARG_ADDED,
                description: "A required arg ".concat(argName, " on ") + "".concat(typeName, ".").concat(fieldName, " was added")
              });
            } else {
              dangerousChanges.push({
                type: DangerousChangeType.OPTIONAL_ARG_ADDED,
                description: "An optional arg ".concat(argName, " on ") + "".concat(typeName, ".").concat(fieldName, " was added")
              });
            }
          }
        };

        for (var _iterator2 = newTypeFields[fieldName].args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop2();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }

  return {
    breakingChanges: breakingChanges,
    dangerousChanges: dangerousChanges
  };
}

function typeKindName(type) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isScalarType"])(type)) {
    return 'a Scalar type';
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(type)) {
    return 'an Object type';
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInterfaceType"])(type)) {
    return 'an Interface type';
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isUnionType"])(type)) {
    return 'a Union type';
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isEnumType"])(type)) {
    return 'an Enum type';
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputObjectType"])(type)) {
    return 'an Input type';
  } // Not reachable. All possible named types have been considered.

  /* istanbul ignore next */


  throw new TypeError("Unexpected type: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), "."));
}

function findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];

  for (var _i5 = 0, _Object$keys5 = Object.keys(oldTypeMap); _i5 < _Object$keys5.length; _i5++) {
    var typeName = _Object$keys5[_i5];
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(oldType) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInterfaceType"])(oldType)) || !(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(newType) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInterfaceType"])(newType)) || newType.constructor !== oldType.constructor) {
      continue;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();

    for (var _i6 = 0, _Object$keys6 = Object.keys(oldTypeFieldsDef); _i6 < _Object$keys6.length; _i6++) {
      var fieldName = _Object$keys6[_i6];

      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: "".concat(typeName, ".").concat(fieldName, " was removed.")
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;
        var isSafe = isChangeSafeForObjectOrInterfaceField(oldFieldType, newFieldType);

        if (!isSafe) {
          var oldFieldTypeString = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNamedType"])(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNamedType"])(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: "".concat(typeName, ".").concat(fieldName, " changed type from ") + "".concat(oldFieldTypeString, " to ").concat(newFieldTypeString, ".")
          });
        }
      }
    }
  }

  return breakingChanges;
}

function findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];
  var dangerousChanges = [];

  for (var _i7 = 0, _Object$keys7 = Object.keys(oldTypeMap); _i7 < _Object$keys7.length; _i7++) {
    var typeName = _Object$keys7[_i7];
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputObjectType"])(oldType) || !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputObjectType"])(newType)) {
      continue;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();

    for (var _i8 = 0, _Object$keys8 = Object.keys(oldTypeFieldsDef); _i8 < _Object$keys8.length; _i8++) {
      var fieldName = _Object$keys8[_i8];

      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: "".concat(typeName, ".").concat(fieldName, " was removed.")
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;
        var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldFieldType, newFieldType);

        if (!isSafe) {
          var oldFieldTypeString = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNamedType"])(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNamedType"])(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: "".concat(typeName, ".").concat(fieldName, " changed type from ") + "".concat(oldFieldTypeString, " to ").concat(newFieldTypeString, ".")
          });
        }
      }
    } // Check if a field was added to the input object type


    for (var _i9 = 0, _Object$keys9 = Object.keys(newTypeFieldsDef); _i9 < _Object$keys9.length; _i9++) {
      var _fieldName = _Object$keys9[_i9];

      if (!(_fieldName in oldTypeFieldsDef)) {
        if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isRequiredInputField"])(newTypeFieldsDef[_fieldName])) {
          breakingChanges.push({
            type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
            description: "A required field ".concat(_fieldName, " on ") + "input type ".concat(typeName, " was added.")
          });
        } else {
          dangerousChanges.push({
            type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
            description: "An optional field ".concat(_fieldName, " on ") + "input type ".concat(typeName, " was added.")
          });
        }
      }
    }
  }

  return {
    breakingChanges: breakingChanges,
    dangerousChanges: dangerousChanges
  };
}

function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isListType"])(oldType)) {
    return (// if they're both lists, make sure the underlying types are compatible
      Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isListType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) || // moving from nullable to non-null of the same underlying type is safe
      Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNonNullType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNonNullType"])(oldType)) {
    // if they're both non-null, make sure the underlying types are compatible
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNonNullType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }

  return (// if they're both named types, see if their names are equivalent
    Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNamedType"])(newType) && oldType.name === newType.name || // moving from nullable to non-null of the same underlying type is safe
    Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNonNullType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
  );
}

function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isListType"])(oldType)) {
    // if they're both lists, make sure the underlying types are compatible
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isListType"])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNonNullType"])(oldType)) {
    return (// if they're both non-null, make sure the underlying types are
      // compatible
      Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNonNullType"])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) || // moving from non-null to nullable of the same underlying type is safe
      !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNonNullType"])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
    );
  } // if they're both named types, see if their names are equivalent


  return Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isNamedType"])(newType) && oldType.name === newType.name;
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing types from a union type.
 */


function findTypesRemovedFromUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var typesRemovedFromUnion = [];

  for (var _i10 = 0, _Object$keys10 = Object.keys(oldTypeMap); _i10 < _Object$keys10.length; _i10++) {
    var typeName = _Object$keys10[_i10];
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isUnionType"])(oldType) || !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isUnionType"])(newType)) {
      continue;
    }

    var typeNamesInNewUnion = Object.create(null);
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = newType.getTypes()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var type = _step3.value;
        typeNamesInNewUnion[type.name] = true;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = oldType.getTypes()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _type = _step4.value;

        if (!typeNamesInNewUnion[_type.name]) {
          typesRemovedFromUnion.push({
            type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
            description: "".concat(_type.name, " was removed from union type ").concat(typeName, ".")
          });
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  }

  return typesRemovedFromUnion;
}
/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding types to a union type.
 */


function findTypesAddedToUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var typesAddedToUnion = [];

  for (var _i11 = 0, _Object$keys11 = Object.keys(newTypeMap); _i11 < _Object$keys11.length; _i11++) {
    var typeName = _Object$keys11[_i11];
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isUnionType"])(oldType) || !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isUnionType"])(newType)) {
      continue;
    }

    var typeNamesInOldUnion = Object.create(null);
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = oldType.getTypes()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var type = _step5.value;
        typeNamesInOldUnion[type.name] = true;
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = newType.getTypes()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _type2 = _step6.value;

        if (!typeNamesInOldUnion[_type2.name]) {
          typesAddedToUnion.push({
            type: DangerousChangeType.TYPE_ADDED_TO_UNION,
            description: "".concat(_type2.name, " was added to union type ").concat(typeName, ".")
          });
        }
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
          _iterator6.return();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }
  }

  return typesAddedToUnion;
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing values from an enum type.
 */


function findValuesRemovedFromEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var valuesRemovedFromEnums = [];

  for (var _i12 = 0, _Object$keys12 = Object.keys(oldTypeMap); _i12 < _Object$keys12.length; _i12++) {
    var typeName = _Object$keys12[_i12];
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isEnumType"])(oldType) || !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isEnumType"])(newType)) {
      continue;
    }

    var valuesInNewEnum = Object.create(null);
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = newType.getValues()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var value = _step7.value;
        valuesInNewEnum[value.name] = true;
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
          _iterator7.return();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }

    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = oldType.getValues()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var _value = _step8.value;

        if (!valuesInNewEnum[_value.name]) {
          valuesRemovedFromEnums.push({
            type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
            description: "".concat(_value.name, " was removed from enum type ").concat(typeName, ".")
          });
        }
      }
    } catch (err) {
      _didIteratorError8 = true;
      _iteratorError8 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
          _iterator8.return();
        }
      } finally {
        if (_didIteratorError8) {
          throw _iteratorError8;
        }
      }
    }
  }

  return valuesRemovedFromEnums;
}
/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding values to an enum type.
 */


function findValuesAddedToEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var valuesAddedToEnums = [];

  for (var _i13 = 0, _Object$keys13 = Object.keys(oldTypeMap); _i13 < _Object$keys13.length; _i13++) {
    var typeName = _Object$keys13[_i13];
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isEnumType"])(oldType) || !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isEnumType"])(newType)) {
      continue;
    }

    var valuesInOldEnum = Object.create(null);
    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
      for (var _iterator9 = oldType.getValues()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var value = _step9.value;
        valuesInOldEnum[value.name] = true;
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
          _iterator9.return();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
        }
      }
    }

    var _iteratorNormalCompletion10 = true;
    var _didIteratorError10 = false;
    var _iteratorError10 = undefined;

    try {
      for (var _iterator10 = newType.getValues()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
        var _value2 = _step10.value;

        if (!valuesInOldEnum[_value2.name]) {
          valuesAddedToEnums.push({
            type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
            description: "".concat(_value2.name, " was added to enum type ").concat(typeName, ".")
          });
        }
      }
    } catch (err) {
      _didIteratorError10 = true;
      _iteratorError10 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
          _iterator10.return();
        }
      } finally {
        if (_didIteratorError10) {
          throw _iteratorError10;
        }
      }
    }
  }

  return valuesAddedToEnums;
}

function findInterfacesRemovedFromObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];

  for (var _i14 = 0, _Object$keys14 = Object.keys(oldTypeMap); _i14 < _Object$keys14.length; _i14++) {
    var typeName = _Object$keys14[_i14];
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(oldType) || !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(newType)) {
      continue;
    }

    var oldInterfaces = oldType.getInterfaces();
    var newInterfaces = newType.getInterfaces();
    var _iteratorNormalCompletion11 = true;
    var _didIteratorError11 = false;
    var _iteratorError11 = undefined;

    try {
      var _loop3 = function _loop3() {
        var oldInterface = _step11.value;

        if (!newInterfaces.some(function (int) {
          return int.name === oldInterface.name;
        })) {
          breakingChanges.push({
            type: BreakingChangeType.INTERFACE_REMOVED_FROM_OBJECT,
            description: "".concat(typeName, " no longer implements interface ") + "".concat(oldInterface.name, ".")
          });
        }
      };

      for (var _iterator11 = oldInterfaces[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
        _loop3();
      }
    } catch (err) {
      _didIteratorError11 = true;
      _iteratorError11 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
          _iterator11.return();
        }
      } finally {
        if (_didIteratorError11) {
          throw _iteratorError11;
        }
      }
    }
  }

  return breakingChanges;
}

function findInterfacesAddedToObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var interfacesAddedToObjectTypes = [];

  for (var _i15 = 0, _Object$keys15 = Object.keys(newTypeMap); _i15 < _Object$keys15.length; _i15++) {
    var typeName = _Object$keys15[_i15];
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(oldType) || !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isObjectType"])(newType)) {
      continue;
    }

    var oldInterfaces = oldType.getInterfaces();
    var newInterfaces = newType.getInterfaces();
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      var _loop4 = function _loop4() {
        var newInterface = _step12.value;

        if (!oldInterfaces.some(function (int) {
          return int.name === newInterface.name;
        })) {
          interfacesAddedToObjectTypes.push({
            type: DangerousChangeType.INTERFACE_ADDED_TO_OBJECT,
            description: "".concat(newInterface.name, " added to interfaces implemented ") + "by ".concat(typeName, ".")
          });
        }
      };

      for (var _iterator12 = newInterfaces[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        _loop4();
      }
    } catch (err) {
      _didIteratorError12 = true;
      _iteratorError12 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
          _iterator12.return();
        }
      } finally {
        if (_didIteratorError12) {
          throw _iteratorError12;
        }
      }
    }
  }

  return interfacesAddedToObjectTypes;
}

function findRemovedDirectives(oldSchema, newSchema) {
  var removedDirectives = [];
  var newSchemaDirectiveMap = getDirectiveMapForSchema(newSchema);
  var _iteratorNormalCompletion13 = true;
  var _didIteratorError13 = false;
  var _iteratorError13 = undefined;

  try {
    for (var _iterator13 = oldSchema.getDirectives()[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
      var directive = _step13.value;

      if (!newSchemaDirectiveMap[directive.name]) {
        removedDirectives.push({
          type: BreakingChangeType.DIRECTIVE_REMOVED,
          description: "".concat(directive.name, " was removed")
        });
      }
    }
  } catch (err) {
    _didIteratorError13 = true;
    _iteratorError13 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
        _iterator13.return();
      }
    } finally {
      if (_didIteratorError13) {
        throw _iteratorError13;
      }
    }
  }

  return removedDirectives;
}

function findRemovedArgsForDirective(oldDirective, newDirective) {
  var removedArgs = [];
  var newArgMap = getArgumentMapForDirective(newDirective);
  var _iteratorNormalCompletion14 = true;
  var _didIteratorError14 = false;
  var _iteratorError14 = undefined;

  try {
    for (var _iterator14 = oldDirective.args[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
      var arg = _step14.value;

      if (!newArgMap[arg.name]) {
        removedArgs.push(arg);
      }
    }
  } catch (err) {
    _didIteratorError14 = true;
    _iteratorError14 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
        _iterator14.return();
      }
    } finally {
      if (_didIteratorError14) {
        throw _iteratorError14;
      }
    }
  }

  return removedArgs;
}

function findRemovedDirectiveArgs(oldSchema, newSchema) {
  var removedDirectiveArgs = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);
  var _iteratorNormalCompletion15 = true;
  var _didIteratorError15 = false;
  var _iteratorError15 = undefined;

  try {
    for (var _iterator15 = newSchema.getDirectives()[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
      var newDirective = _step15.value;
      var oldDirective = oldSchemaDirectiveMap[newDirective.name];

      if (!oldDirective) {
        continue;
      }

      var _iteratorNormalCompletion16 = true;
      var _didIteratorError16 = false;
      var _iteratorError16 = undefined;

      try {
        for (var _iterator16 = findRemovedArgsForDirective(oldDirective, newDirective)[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
          var arg = _step16.value;
          removedDirectiveArgs.push({
            type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
            description: "".concat(arg.name, " was removed from ").concat(newDirective.name)
          });
        }
      } catch (err) {
        _didIteratorError16 = true;
        _iteratorError16 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
            _iterator16.return();
          }
        } finally {
          if (_didIteratorError16) {
            throw _iteratorError16;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError15 = true;
    _iteratorError15 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
        _iterator15.return();
      }
    } finally {
      if (_didIteratorError15) {
        throw _iteratorError15;
      }
    }
  }

  return removedDirectiveArgs;
}

function findAddedArgsForDirective(oldDirective, newDirective) {
  var addedArgs = [];
  var oldArgMap = getArgumentMapForDirective(oldDirective);
  var _iteratorNormalCompletion17 = true;
  var _didIteratorError17 = false;
  var _iteratorError17 = undefined;

  try {
    for (var _iterator17 = newDirective.args[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
      var arg = _step17.value;

      if (!oldArgMap[arg.name]) {
        addedArgs.push(arg);
      }
    }
  } catch (err) {
    _didIteratorError17 = true;
    _iteratorError17 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
        _iterator17.return();
      }
    } finally {
      if (_didIteratorError17) {
        throw _iteratorError17;
      }
    }
  }

  return addedArgs;
}

function findAddedNonNullDirectiveArgs(oldSchema, newSchema) {
  var addedNonNullableArgs = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);
  var _iteratorNormalCompletion18 = true;
  var _didIteratorError18 = false;
  var _iteratorError18 = undefined;

  try {
    for (var _iterator18 = newSchema.getDirectives()[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
      var newDirective = _step18.value;
      var oldDirective = oldSchemaDirectiveMap[newDirective.name];

      if (!oldDirective) {
        continue;
      }

      var _iteratorNormalCompletion19 = true;
      var _didIteratorError19 = false;
      var _iteratorError19 = undefined;

      try {
        for (var _iterator19 = findAddedArgsForDirective(oldDirective, newDirective)[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
          var arg = _step19.value;

          if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isRequiredArgument"])(arg)) {
            addedNonNullableArgs.push({
              type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
              description: "A required arg ".concat(arg.name, " on directive ") + "".concat(newDirective.name, " was added")
            });
          }
        }
      } catch (err) {
        _didIteratorError19 = true;
        _iteratorError19 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
            _iterator19.return();
          }
        } finally {
          if (_didIteratorError19) {
            throw _iteratorError19;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError18 = true;
    _iteratorError18 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
        _iterator18.return();
      }
    } finally {
      if (_didIteratorError18) {
        throw _iteratorError18;
      }
    }
  }

  return addedNonNullableArgs;
}

function findRemovedLocationsForDirective(oldDirective, newDirective) {
  var removedLocations = [];
  var newLocationSet = new Set(newDirective.locations);
  var _iteratorNormalCompletion20 = true;
  var _didIteratorError20 = false;
  var _iteratorError20 = undefined;

  try {
    for (var _iterator20 = oldDirective.locations[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
      var oldLocation = _step20.value;

      if (!newLocationSet.has(oldLocation)) {
        removedLocations.push(oldLocation);
      }
    }
  } catch (err) {
    _didIteratorError20 = true;
    _iteratorError20 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
        _iterator20.return();
      }
    } finally {
      if (_didIteratorError20) {
        throw _iteratorError20;
      }
    }
  }

  return removedLocations;
}

function findRemovedDirectiveLocations(oldSchema, newSchema) {
  var removedLocations = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);
  var _iteratorNormalCompletion21 = true;
  var _didIteratorError21 = false;
  var _iteratorError21 = undefined;

  try {
    for (var _iterator21 = newSchema.getDirectives()[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
      var newDirective = _step21.value;
      var oldDirective = oldSchemaDirectiveMap[newDirective.name];

      if (!oldDirective) {
        continue;
      }

      var _iteratorNormalCompletion22 = true;
      var _didIteratorError22 = false;
      var _iteratorError22 = undefined;

      try {
        for (var _iterator22 = findRemovedLocationsForDirective(oldDirective, newDirective)[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
          var location = _step22.value;
          removedLocations.push({
            type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
            description: "".concat(location, " was removed from ").concat(newDirective.name)
          });
        }
      } catch (err) {
        _didIteratorError22 = true;
        _iteratorError22 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
            _iterator22.return();
          }
        } finally {
          if (_didIteratorError22) {
            throw _iteratorError22;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError21 = true;
    _iteratorError21 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
        _iterator21.return();
      }
    } finally {
      if (_didIteratorError21) {
        throw _iteratorError21;
      }
    }
  }

  return removedLocations;
}

function getDirectiveMapForSchema(schema) {
  return Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_3__["default"])(schema.getDirectives(), function (dir) {
    return dir.name;
  });
}

function getArgumentMapForDirective(directive) {
  return Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_3__["default"])(directive.args, function (arg) {
    return arg.name;
  });
}


/***/ }),

/***/ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/graphql/utilities/findDeprecatedUsages.mjs ***!
  \*****************************************************************/
/*! exports provided: findDeprecatedUsages */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDeprecatedUsages", function() { return findDeprecatedUsages; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _TypeInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypeInfo */ "./node_modules/graphql/utilities/TypeInfo.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */

function findDeprecatedUsages(schema, ast) {
  var errors = [];
  var typeInfo = new _TypeInfo__WEBPACK_IMPORTED_MODULE_3__["TypeInfo"](schema);
  Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(ast, Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visitWithTypeInfo"])(typeInfo, {
    Field: function Field(node) {
      var fieldDef = typeInfo.getFieldDef();

      if (fieldDef && fieldDef.isDeprecated) {
        var parentType = typeInfo.getParentType();

        if (parentType) {
          var reason = fieldDef.deprecationReason;
          errors.push(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("The field ".concat(parentType.name, ".").concat(fieldDef.name, " is deprecated.") + (reason ? ' ' + reason : ''), node));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumVal = typeInfo.getEnumValue();

      if (enumVal && enumVal.isDeprecated) {
        var type = Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(typeInfo.getInputType());

        if (type) {
          var reason = enumVal.deprecationReason;
          errors.push(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("The enum value ".concat(type.name, ".").concat(enumVal.name, " is deprecated.") + (reason ? ' ' + reason : ''), node));
        }
      }
    }
  }));
  return errors;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/getOperationAST.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/utilities/getOperationAST.mjs ***!
  \************************************************************/
/*! exports provided: getOperationAST */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationAST", function() { return getOperationAST; });
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */
function getOperationAST(documentAST, operationName) {
  var operation = null;

  for (var i = 0; i < documentAST.definitions.length; i++) {
    var definition = documentAST.definitions[i];

    if (definition.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_0__["Kind"].OPERATION_DEFINITION) {
      if (!operationName) {
        // If no operation name was provided, only return an Operation if there
        // is one defined in the document. Upon encountering the second, return
        // null.
        if (operation) {
          return null;
        }

        operation = definition;
      } else if (definition.name && definition.name.value === operationName) {
        return definition;
      }
    }
  }

  return operation;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/getOperationRootType.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/graphql/utilities/getOperationRootType.mjs ***!
  \*****************************************************************/
/*! exports provided: getOperationRootType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationRootType", function() { return getOperationRootType; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * Extracts the root type of the operation from the schema.
 */
function getOperationRootType(schema, operation) {
  if (operation.operation === 'query') {
    var queryType = schema.getQueryType();

    if (!queryType) {
      throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Schema does not define the required query root type.', operation);
    }

    return queryType;
  }

  if (operation.operation === 'mutation') {
    var mutationType = schema.getMutationType();

    if (!mutationType) {
      throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Schema is not configured for mutations.', operation);
    }

    return mutationType;
  }

  if (operation.operation === 'subscription') {
    var subscriptionType = schema.getSubscriptionType();

    if (!subscriptionType) {
      throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Schema is not configured for subscriptions.', operation);
    }

    return subscriptionType;
  }

  throw new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Can only have query, mutation and subscription operations.', operation);
}


/***/ }),

/***/ "./node_modules/graphql/utilities/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/utilities/index.mjs ***!
  \**************************************************/
/*! exports provided: getIntrospectionQuery, introspectionQuery, getOperationAST, getOperationRootType, introspectionFromSchema, buildClientSchema, buildASTSchema, buildSchema, getDescription, extendSchema, lexicographicSortSchema, printSchema, printType, printIntrospectionSchema, typeFromAST, valueFromAST, valueFromASTUntyped, astFromValue, TypeInfo, coerceValue, isValidJSValue, isValidLiteralValue, concatAST, separateOperations, stripIgnoredCharacters, isEqualType, isTypeSubTypeOf, doTypesOverlap, assertValidName, isValidNameError, BreakingChangeType, DangerousChangeType, findBreakingChanges, findDangerousChanges, findDeprecatedUsages */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _introspectionQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introspectionQuery */ "./node_modules/graphql/utilities/introspectionQuery.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIntrospectionQuery", function() { return _introspectionQuery__WEBPACK_IMPORTED_MODULE_0__["getIntrospectionQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionQuery", function() { return _introspectionQuery__WEBPACK_IMPORTED_MODULE_0__["introspectionQuery"]; });

/* harmony import */ var _getOperationAST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOperationAST */ "./node_modules/graphql/utilities/getOperationAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationAST", function() { return _getOperationAST__WEBPACK_IMPORTED_MODULE_1__["getOperationAST"]; });

/* harmony import */ var _getOperationRootType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getOperationRootType */ "./node_modules/graphql/utilities/getOperationRootType.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationRootType", function() { return _getOperationRootType__WEBPACK_IMPORTED_MODULE_2__["getOperationRootType"]; });

/* harmony import */ var _introspectionFromSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introspectionFromSchema */ "./node_modules/graphql/utilities/introspectionFromSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionFromSchema", function() { return _introspectionFromSchema__WEBPACK_IMPORTED_MODULE_3__["introspectionFromSchema"]; });

/* harmony import */ var _buildClientSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buildClientSchema */ "./node_modules/graphql/utilities/buildClientSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClientSchema", function() { return _buildClientSchema__WEBPACK_IMPORTED_MODULE_4__["buildClientSchema"]; });

/* harmony import */ var _buildASTSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buildASTSchema */ "./node_modules/graphql/utilities/buildASTSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildASTSchema", function() { return _buildASTSchema__WEBPACK_IMPORTED_MODULE_5__["buildASTSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSchema", function() { return _buildASTSchema__WEBPACK_IMPORTED_MODULE_5__["buildSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return _buildASTSchema__WEBPACK_IMPORTED_MODULE_5__["getDescription"]; });

/* harmony import */ var _extendSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extendSchema */ "./node_modules/graphql/utilities/extendSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendSchema", function() { return _extendSchema__WEBPACK_IMPORTED_MODULE_6__["extendSchema"]; });

/* harmony import */ var _lexicographicSortSchema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lexicographicSortSchema */ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexicographicSortSchema", function() { return _lexicographicSortSchema__WEBPACK_IMPORTED_MODULE_7__["lexicographicSortSchema"]; });

/* harmony import */ var _schemaPrinter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schemaPrinter */ "./node_modules/graphql/utilities/schemaPrinter.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printSchema", function() { return _schemaPrinter__WEBPACK_IMPORTED_MODULE_8__["printSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printType", function() { return _schemaPrinter__WEBPACK_IMPORTED_MODULE_8__["printType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printIntrospectionSchema", function() { return _schemaPrinter__WEBPACK_IMPORTED_MODULE_8__["printIntrospectionSchema"]; });

/* harmony import */ var _typeFromAST__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typeFromAST */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return _typeFromAST__WEBPACK_IMPORTED_MODULE_9__["typeFromAST"]; });

/* harmony import */ var _valueFromAST__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./valueFromAST */ "./node_modules/graphql/utilities/valueFromAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromAST", function() { return _valueFromAST__WEBPACK_IMPORTED_MODULE_10__["valueFromAST"]; });

/* harmony import */ var _valueFromASTUntyped__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./valueFromASTUntyped */ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return _valueFromASTUntyped__WEBPACK_IMPORTED_MODULE_11__["valueFromASTUntyped"]; });

/* harmony import */ var _astFromValue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./astFromValue */ "./node_modules/graphql/utilities/astFromValue.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "astFromValue", function() { return _astFromValue__WEBPACK_IMPORTED_MODULE_12__["astFromValue"]; });

/* harmony import */ var _TypeInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TypeInfo */ "./node_modules/graphql/utilities/TypeInfo.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return _TypeInfo__WEBPACK_IMPORTED_MODULE_13__["TypeInfo"]; });

/* harmony import */ var _coerceValue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./coerceValue */ "./node_modules/graphql/utilities/coerceValue.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceValue", function() { return _coerceValue__WEBPACK_IMPORTED_MODULE_14__["coerceValue"]; });

/* harmony import */ var _isValidJSValue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isValidJSValue */ "./node_modules/graphql/utilities/isValidJSValue.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidJSValue", function() { return _isValidJSValue__WEBPACK_IMPORTED_MODULE_15__["isValidJSValue"]; });

/* harmony import */ var _isValidLiteralValue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isValidLiteralValue */ "./node_modules/graphql/utilities/isValidLiteralValue.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidLiteralValue", function() { return _isValidLiteralValue__WEBPACK_IMPORTED_MODULE_16__["isValidLiteralValue"]; });

/* harmony import */ var _concatAST__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./concatAST */ "./node_modules/graphql/utilities/concatAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatAST", function() { return _concatAST__WEBPACK_IMPORTED_MODULE_17__["concatAST"]; });

/* harmony import */ var _separateOperations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./separateOperations */ "./node_modules/graphql/utilities/separateOperations.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "separateOperations", function() { return _separateOperations__WEBPACK_IMPORTED_MODULE_18__["separateOperations"]; });

/* harmony import */ var _stripIgnoredCharacters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./stripIgnoredCharacters */ "./node_modules/graphql/utilities/stripIgnoredCharacters.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripIgnoredCharacters", function() { return _stripIgnoredCharacters__WEBPACK_IMPORTED_MODULE_19__["stripIgnoredCharacters"]; });

/* harmony import */ var _typeComparators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./typeComparators */ "./node_modules/graphql/utilities/typeComparators.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return _typeComparators__WEBPACK_IMPORTED_MODULE_20__["isEqualType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return _typeComparators__WEBPACK_IMPORTED_MODULE_20__["isTypeSubTypeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return _typeComparators__WEBPACK_IMPORTED_MODULE_20__["doTypesOverlap"]; });

/* harmony import */ var _assertValidName__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assertValidName */ "./node_modules/graphql/utilities/assertValidName.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidName", function() { return _assertValidName__WEBPACK_IMPORTED_MODULE_21__["assertValidName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNameError", function() { return _assertValidName__WEBPACK_IMPORTED_MODULE_21__["isValidNameError"]; });

/* harmony import */ var _findBreakingChanges__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./findBreakingChanges */ "./node_modules/graphql/utilities/findBreakingChanges.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakingChangeType", function() { return _findBreakingChanges__WEBPACK_IMPORTED_MODULE_22__["BreakingChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DangerousChangeType", function() { return _findBreakingChanges__WEBPACK_IMPORTED_MODULE_22__["DangerousChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findBreakingChanges", function() { return _findBreakingChanges__WEBPACK_IMPORTED_MODULE_22__["findBreakingChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDangerousChanges", function() { return _findBreakingChanges__WEBPACK_IMPORTED_MODULE_22__["findDangerousChanges"]; });

/* harmony import */ var _findDeprecatedUsages__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./findDeprecatedUsages */ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDeprecatedUsages", function() { return _findDeprecatedUsages__WEBPACK_IMPORTED_MODULE_23__["findDeprecatedUsages"]; });

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// The GraphQL query recommended for a full schema introspection.

// Gets the target Operation from a Document.
 // Gets the Type for the target Operation AST.

 // Convert a GraphQLSchema to an IntrospectionQuery.

 // Build a GraphQLSchema from an introspection result.

 // Build a GraphQLSchema from GraphQL Schema language.


// Extends an existing GraphQLSchema from a parsed GraphQL Schema language AST.
 // Sort a GraphQLSchema.

 // Print a GraphQLSchema to GraphQL Schema language.

 // Create a GraphQLType from a GraphQL language AST.

 // Create a JavaScript value from a GraphQL language AST with a type.

 // Create a JavaScript value from a GraphQL language AST without a type.

 // Create a GraphQL language AST from a JavaScript value.

 // A helper to use within recursive-descent visitors which need to be aware of
// the GraphQL type system.

 // Coerces a JavaScript value to a GraphQL type, or produces errors.

 // @deprecated use coerceValue - will be removed in v15.

 // @deprecated use validation - will be removed in v15

 // Concatenates multiple AST together.

 // Separates an AST into an AST per Operation.

 // Strips characters that are not significant to the validity or execution
// of a GraphQL document.

 // Comparators for types

 // Asserts that a string is a valid GraphQL name

 // Compares two GraphQLSchemas and detects breaking changes.


// Report all deprecated usage within a GraphQL document.



/***/ }),

/***/ "./node_modules/graphql/utilities/introspectionFromSchema.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/utilities/introspectionFromSchema.mjs ***!
  \********************************************************************/
/*! exports provided: introspectionFromSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introspectionFromSchema", function() { return introspectionFromSchema; });
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_isPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/isPromise */ "./node_modules/graphql/jsutils/isPromise.mjs");
/* harmony import */ var _execution_execute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../execution/execute */ "./node_modules/graphql/execution/execute.mjs");
/* harmony import */ var _language_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/parser */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _introspectionQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./introspectionQuery */ "./node_modules/graphql/utilities/introspectionQuery.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */

function introspectionFromSchema(schema, options) {
  var queryAST = Object(_language_parser__WEBPACK_IMPORTED_MODULE_3__["parse"])(Object(_introspectionQuery__WEBPACK_IMPORTED_MODULE_4__["getIntrospectionQuery"])(options));
  var result = Object(_execution_execute__WEBPACK_IMPORTED_MODULE_2__["execute"])(schema, queryAST);
  !(!Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_1__["default"])(result) && !result.errors && result.data) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(0) : void 0;
  return result.data;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/introspectionQuery.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/graphql/utilities/introspectionQuery.mjs ***!
  \***************************************************************/
/*! exports provided: getIntrospectionQuery, introspectionQuery */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntrospectionQuery", function() { return getIntrospectionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introspectionQuery", function() { return introspectionQuery; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function getIntrospectionQuery(options) {
  var descriptions = !(options && options.descriptions === false);
  return "\n    query IntrospectionQuery {\n      __schema {\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ".concat(descriptions ? 'description' : '', "\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(descriptions ? 'description' : '', "\n      fields(includeDeprecated: true) {\n        name\n        ").concat(descriptions ? 'description' : '', "\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(descriptions ? 'description' : '', "\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(descriptions ? 'description' : '', "\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ");
}
/**
 * Deprecated, call getIntrospectionQuery directly.
 *
 * This function will be removed in v15
 */

var introspectionQuery = getIntrospectionQuery();


/***/ }),

/***/ "./node_modules/graphql/utilities/isValidJSValue.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/graphql/utilities/isValidJSValue.mjs ***!
  \***********************************************************/
/*! exports provided: isValidJSValue */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidJSValue", function() { return isValidJSValue; });
/* harmony import */ var _coerceValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coerceValue */ "./node_modules/graphql/utilities/coerceValue.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* istanbul ignore file */


/**
 * Deprecated. Use coerceValue() directly for richer information.
 *
 * This function will be removed in v15
 */
function isValidJSValue(value, type) {
  var errors = Object(_coerceValue__WEBPACK_IMPORTED_MODULE_0__["coerceValue"])(value, type).errors;
  return errors ? errors.map(function (error) {
    return error.message;
  }) : [];
}


/***/ }),

/***/ "./node_modules/graphql/utilities/isValidLiteralValue.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/utilities/isValidLiteralValue.mjs ***!
  \****************************************************************/
/*! exports provided: isValidLiteralValue */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidLiteralValue", function() { return isValidLiteralValue; });
/* harmony import */ var _TypeInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypeInfo */ "./node_modules/graphql/utilities/TypeInfo.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_visitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _type_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/schema */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _validation_rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation/rules/ValuesOfCorrectType */ "./node_modules/graphql/validation/rules/ValuesOfCorrectType.mjs");
/* harmony import */ var _validation_ValidationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validation/ValidationContext */ "./node_modules/graphql/validation/ValidationContext.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */






/**
 * Utility which determines if a value literal node is valid for an input type.
 *
 * Deprecated. Rely on validation for documents containing literal values.
 *
 * This function will be removed in v15
 */

function isValidLiteralValue(type, valueNode) {
  var emptySchema = new _type_schema__WEBPACK_IMPORTED_MODULE_3__["GraphQLSchema"]({});
  var emptyDoc = {
    kind: _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].DOCUMENT,
    definitions: []
  };
  var typeInfo = new _TypeInfo__WEBPACK_IMPORTED_MODULE_0__["TypeInfo"](emptySchema, undefined, type);
  var context = new _validation_ValidationContext__WEBPACK_IMPORTED_MODULE_5__["ValidationContext"](emptySchema, emptyDoc, typeInfo);
  var visitor = Object(_validation_rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_4__["ValuesOfCorrectType"])(context);
  Object(_language_visitor__WEBPACK_IMPORTED_MODULE_2__["visit"])(valueNode, Object(_language_visitor__WEBPACK_IMPORTED_MODULE_2__["visitWithTypeInfo"])(typeInfo, visitor));
  return context.getErrors();
}


/***/ }),

/***/ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/utilities/lexicographicSortSchema.mjs ***!
  \********************************************************************/
/*! exports provided: lexicographicSortSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lexicographicSortSchema", function() { return lexicographicSortSchema; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/keyValMap */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _type_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/schema */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/directives */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/introspection */ "./node_modules/graphql/type/introspection.mjs");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */







/**
 * Sort GraphQLSchema.
 */

function lexicographicSortSchema(schema) {
  var schemaConfig = schema.toConfig();
  var typeMap = Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_2__["default"])(sortByName(schemaConfig.types), function (type) {
    return type.name;
  }, sortNamedType);
  return new _type_schema__WEBPACK_IMPORTED_MODULE_3__["GraphQLSchema"](_objectSpread({}, schemaConfig, {
    types: Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(typeMap),
    directives: sortByName(schemaConfig.directives).map(sortDirective),
    query: replaceMaybeType(schemaConfig.query),
    mutation: replaceMaybeType(schemaConfig.mutation),
    subscription: replaceMaybeType(schemaConfig.subscription)
  }));

  function replaceType(type) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isListType"])(type)) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLList"](replaceType(type.ofType));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isNonNullType"])(type)) {
      return new _type_definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLNonNull"](replaceType(type.ofType));
    }

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    return typeMap[type.name];
  }

  function replaceMaybeType(maybeType) {
    return maybeType && replaceNamedType(maybeType);
  }

  function sortDirective(directive) {
    var config = directive.toConfig();
    return new _type_directives__WEBPACK_IMPORTED_MODULE_4__["GraphQLDirective"](_objectSpread({}, config, {
      locations: sortBy(config.locations, function (x) {
        return x;
      }),
      args: sortArgs(config.args)
    }));
  }

  function sortArgs(args) {
    return sortObjMap(args, function (arg) {
      return _objectSpread({}, arg, {
        type: replaceType(arg.type)
      });
    });
  }

  function sortFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread({}, field, {
        type: replaceType(field.type),
        args: sortArgs(field.args)
      });
    });
  }

  function sortInputFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread({}, field, {
        type: replaceType(field.type)
      });
    });
  }

  function sortTypes(arr) {
    return sortByName(arr).map(replaceNamedType);
  }

  function sortNamedType(type) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isScalarType"])(type) || Object(_type_introspection__WEBPACK_IMPORTED_MODULE_6__["isIntrospectionType"])(type)) {
      return type;
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isObjectType"])(type)) {
      var config = type.toConfig();
      return new _type_definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLObjectType"](_objectSpread({}, config, {
        interfaces: function interfaces() {
          return sortTypes(config.interfaces);
        },
        fields: function fields() {
          return sortFields(config.fields);
        }
      }));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isInterfaceType"])(type)) {
      var _config = type.toConfig();

      return new _type_definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLInterfaceType"](_objectSpread({}, _config, {
        fields: function fields() {
          return sortFields(_config.fields);
        }
      }));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isUnionType"])(type)) {
      var _config2 = type.toConfig();

      return new _type_definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLUnionType"](_objectSpread({}, _config2, {
        types: function types() {
          return sortTypes(_config2.types);
        }
      }));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isEnumType"])(type)) {
      var _config3 = type.toConfig();

      return new _type_definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLEnumType"](_objectSpread({}, _config3, {
        values: sortObjMap(_config3.values)
      }));
    } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isInputObjectType"])(type)) {
      var _config4 = type.toConfig();

      return new _type_definition__WEBPACK_IMPORTED_MODULE_5__["GraphQLInputObjectType"](_objectSpread({}, _config4, {
        fields: function fields() {
          return sortInputFields(_config4.fields);
        }
      }));
    } // Not reachable. All possible types have been considered.

    /* istanbul ignore next */


    throw new Error("Unexpected type: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), "\"."));
  }
}

function sortObjMap(map, sortValueFn) {
  var sortedMap = Object.create(null);
  var sortedKeys = sortBy(Object.keys(map), function (x) {
    return x;
  });

  for (var _i = 0, _sortedKeys = sortedKeys; _i < _sortedKeys.length; _i++) {
    var key = _sortedKeys[_i];
    var value = map[key];
    sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
  }

  return sortedMap;
}

function sortByName(array) {
  return sortBy(array, function (obj) {
    return obj.name;
  });
}

function sortBy(array, mapToKey) {
  return array.slice().sort(function (obj1, obj2) {
    var key1 = mapToKey(obj1);
    var key2 = mapToKey(obj2);
    return key1.localeCompare(key2);
  });
}


/***/ }),

/***/ "./node_modules/graphql/utilities/schemaPrinter.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/graphql/utilities/schemaPrinter.mjs ***!
  \**********************************************************/
/*! exports provided: printSchema, printIntrospectionSchema, printType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printSchema", function() { return printSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printIntrospectionSchema", function() { return printIntrospectionSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printType", function() { return printType; });
/* harmony import */ var _polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/flatMap */ "./node_modules/graphql/polyfills/flatMap.mjs");
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _utilities_astFromValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/astFromValue */ "./node_modules/graphql/utilities/astFromValue.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _language_blockString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/blockString */ "./node_modules/graphql/language/blockString.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/scalars */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../type/directives */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../type/introspection */ "./node_modules/graphql/type/introspection.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */











/**
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function printSchema(schema, options) {
  return printFilteredSchema(schema, function (n) {
    return !Object(_type_directives__WEBPACK_IMPORTED_MODULE_8__["isSpecifiedDirective"])(n);
  }, isDefinedType, options);
}
function printIntrospectionSchema(schema, options) {
  return printFilteredSchema(schema, _type_directives__WEBPACK_IMPORTED_MODULE_8__["isSpecifiedDirective"], _type_introspection__WEBPACK_IMPORTED_MODULE_9__["isIntrospectionType"], options);
}

function isDefinedType(type) {
  return !Object(_type_scalars__WEBPACK_IMPORTED_MODULE_7__["isSpecifiedScalarType"])(type) && !Object(_type_introspection__WEBPACK_IMPORTED_MODULE_9__["isIntrospectionType"])(type);
}

function printFilteredSchema(schema, directiveFilter, typeFilter, options) {
  var directives = schema.getDirectives().filter(directiveFilter);
  var typeMap = schema.getTypeMap();
  var types = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(typeMap).sort(function (type1, type2) {
    return type1.name.localeCompare(type2.name);
  }).filter(typeFilter);
  return [printSchemaDefinition(schema)].concat(directives.map(function (directive) {
    return printDirective(directive, options);
  }), types.map(function (type) {
    return printType(type, options);
  })).filter(Boolean).join('\n\n') + '\n';
}

function printSchemaDefinition(schema) {
  if (isSchemaOfCommonNames(schema)) {
    return;
  }

  var operationTypes = [];
  var queryType = schema.getQueryType();

  if (queryType) {
    operationTypes.push("  query: ".concat(queryType.name));
  }

  var mutationType = schema.getMutationType();

  if (mutationType) {
    operationTypes.push("  mutation: ".concat(mutationType.name));
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType) {
    operationTypes.push("  subscription: ".concat(subscriptionType.name));
  }

  return "schema {\n".concat(operationTypes.join('\n'), "\n}");
}
/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *   }
 *
 * When using this naming convention, the schema description can be omitted.
 */


function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();

  if (queryType && queryType.name !== 'Query') {
    return false;
  }

  var mutationType = schema.getMutationType();

  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }

  return true;
}

function printType(type, options) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isScalarType"])(type)) {
    return printScalar(type, options);
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(type)) {
    return printObject(type, options);
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInterfaceType"])(type)) {
    return printInterface(type, options);
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isUnionType"])(type)) {
    return printUnion(type, options);
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isEnumType"])(type)) {
    return printEnum(type, options);
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInputObjectType"])(type)) {
    return printInputObject(type, options);
  } // Not reachable. All possible types have been considered.

  /* istanbul ignore next */


  throw new Error("Unexpected type: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(type), "\"."));
}

function printScalar(type, options) {
  return printDescription(options, type) + "scalar ".concat(type.name);
}

function printObject(type, options) {
  var interfaces = type.getInterfaces();
  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(' & ') : '';
  return printDescription(options, type) + "type ".concat(type.name).concat(implementedInterfaces) + printFields(options, type);
}

function printInterface(type, options) {
  return printDescription(options, type) + "interface ".concat(type.name) + printFields(options, type);
}

function printUnion(type, options) {
  var types = type.getTypes();
  var possibleTypes = types.length ? ' = ' + types.join(' | ') : '';
  return printDescription(options, type) + 'union ' + type.name + possibleTypes;
}

function printEnum(type, options) {
  var values = type.getValues().map(function (value, i) {
    return printDescription(options, value, '  ', !i) + '  ' + value.name + printDeprecated(value);
  });
  return printDescription(options, type) + "enum ".concat(type.name) + printBlock(values);
}

function printInputObject(type, options) {
  var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(type.getFields()).map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + printInputValue(f);
  });
  return printDescription(options, type) + "input ".concat(type.name) + printBlock(fields);
}

function printFields(options, type) {
  var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_1__["default"])(type.getFields()).map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + f.name + printArgs(options, f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
  });
  return printBlock(fields);
}

function printBlock(items) {
  return items.length !== 0 ? ' {\n' + items.join('\n') + '\n}' : '';
}

function printArgs(options, args) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (args.length === 0) {
    return '';
  } // If every arg does not have a description, print them on one line.


  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }

  return '(\n' + args.map(function (arg, i) {
    return printDescription(options, arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}

function printInputValue(arg) {
  var defaultAST = Object(_utilities_astFromValue__WEBPACK_IMPORTED_MODULE_3__["astFromValue"])(arg.defaultValue, arg.type);
  var argDecl = arg.name + ': ' + String(arg.type);

  if (defaultAST) {
    argDecl += " = ".concat(Object(_language_printer__WEBPACK_IMPORTED_MODULE_4__["print"])(defaultAST));
  }

  return argDecl;
}

function printDirective(directive, options) {
  return printDescription(options, directive) + 'directive @' + directive.name + printArgs(options, directive.args) + ' on ' + directive.locations.join(' | ');
}

function printDeprecated(fieldOrEnumVal) {
  if (!fieldOrEnumVal.isDeprecated) {
    return '';
  }

  var reason = fieldOrEnumVal.deprecationReason;
  var reasonAST = Object(_utilities_astFromValue__WEBPACK_IMPORTED_MODULE_3__["astFromValue"])(reason, _type_scalars__WEBPACK_IMPORTED_MODULE_7__["GraphQLString"]);

  if (reasonAST && reason !== '' && reason !== _type_directives__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_DEPRECATION_REASON"]) {
    return ' @deprecated(reason: ' + Object(_language_printer__WEBPACK_IMPORTED_MODULE_4__["print"])(reasonAST) + ')';
  }

  return ' @deprecated';
}

function printDescription(options, def) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var firstInBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!def.description) {
    return '';
  }

  var lines = descriptionLines(def.description, 120 - indentation.length);

  if (options && options.commentDescriptions) {
    return printDescriptionWithComments(lines, indentation, firstInBlock);
  }

  var text = lines.join('\n');
  var preferMultipleLines = text.length > 70;
  var blockString = Object(_language_blockString__WEBPACK_IMPORTED_MODULE_5__["printBlockString"])(text, '', preferMultipleLines);
  var prefix = indentation && !firstInBlock ? '\n' + indentation : indentation;
  return prefix + blockString.replace(/\n/g, '\n' + indentation) + '\n';
}

function printDescriptionWithComments(lines, indentation, firstInBlock) {
  var description = indentation && !firstInBlock ? '\n' : '';

  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '') {
      description += indentation + '#\n';
    } else {
      description += indentation + '# ' + lines[i] + '\n';
    }
  }

  return description;
}

function descriptionLines(description, maxLen) {
  var rawLines = description.split('\n');
  return Object(_polyfills_flatMap__WEBPACK_IMPORTED_MODULE_0__["default"])(rawLines, function (line) {
    if (line.length < maxLen + 5) {
      return line;
    } // For > 120 character long lines, cut at space boundaries into sublines
    // of ~80 chars.


    return breakLine(line, maxLen);
  });
}

function breakLine(line, maxLen) {
  var parts = line.split(new RegExp("((?: |^).{15,".concat(maxLen - 40, "}(?= |$))")));

  if (parts.length < 4) {
    return [line];
  }

  var sublines = [parts[0] + parts[1] + parts[2]];

  for (var i = 3; i < parts.length; i += 2) {
    sublines.push(parts[i].slice(1) + parts[i + 1]);
  }

  return sublines;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/separateOperations.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/graphql/utilities/separateOperations.mjs ***!
  \***************************************************************/
/*! exports provided: separateOperations */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateOperations", function() { return separateOperations; });
/* harmony import */ var _language_visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */
function separateOperations(documentAST) {
  var operations = [];
  var fragments = Object.create(null);
  var positions = new Map();
  var depGraph = Object.create(null);
  var fromName;
  var idx = 0; // Populate metadata and build a dependency graph.

  Object(_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(documentAST, {
    OperationDefinition: function OperationDefinition(node) {
      fromName = opName(node);
      operations.push(node);
      positions.set(node, idx++);
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fromName = node.name.value;
      fragments[fromName] = node;
      positions.set(node, idx++);
    },
    FragmentSpread: function FragmentSpread(node) {
      var toName = node.name.value;
      (depGraph[fromName] || (depGraph[fromName] = Object.create(null)))[toName] = true;
    }
  }); // For each operation, produce a new synthesized AST which includes only what
  // is necessary for completing that operation.

  var separatedDocumentASTs = Object.create(null);

  for (var _i = 0, _operations = operations; _i < _operations.length; _i++) {
    var operation = _operations[_i];
    var operationName = opName(operation);
    var dependencies = Object.create(null);
    collectTransitiveDependencies(dependencies, depGraph, operationName); // The list of definition nodes to be included for this operation, sorted
    // to retain the same order as the original document.

    var definitions = [operation];

    for (var _i2 = 0, _Object$keys = Object.keys(dependencies); _i2 < _Object$keys.length; _i2++) {
      var name = _Object$keys[_i2];
      definitions.push(fragments[name]);
    }

    definitions.sort(function (n1, n2) {
      return (positions.get(n1) || 0) - (positions.get(n2) || 0);
    });
    separatedDocumentASTs[operationName] = {
      kind: 'Document',
      definitions: definitions
    };
  }

  return separatedDocumentASTs;
}

// Provides the empty string for anonymous operations.
function opName(operation) {
  return operation.name ? operation.name.value : '';
} // From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.


function collectTransitiveDependencies(collected, depGraph, fromName) {
  var immediateDeps = depGraph[fromName];

  if (immediateDeps) {
    for (var _i3 = 0, _Object$keys2 = Object.keys(immediateDeps); _i3 < _Object$keys2.length; _i3++) {
      var toName = _Object$keys2[_i3];

      if (!collected[toName]) {
        collected[toName] = true;
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/utilities/stripIgnoredCharacters.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql/utilities/stripIgnoredCharacters.mjs ***!
  \*******************************************************************/
/*! exports provided: stripIgnoredCharacters */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripIgnoredCharacters", function() { return stripIgnoredCharacters; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _language_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/source */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _language_lexer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/lexer */ "./node_modules/graphql/language/lexer.mjs");
/* harmony import */ var _language_blockString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/blockString */ "./node_modules/graphql/language/blockString.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * Strips characters that are not significant to the validity or execution
 * of a GraphQL document:
 *   - UnicodeBOM
 *   - WhiteSpace
 *   - LineTerminator
 *   - Comment
 *   - Comma
 *   - BlockString indentation
 *
 * Note: It is required to have a delimiter character between neighboring
 * non-punctuator tokens and this function always uses single space as delimiter.
 *
 * It is guaranteed that both input and output documents if parsed would result
 * in the exact same AST except for nodes location.
 *
 * Warning: It is guaranteed that this function will always produce stable results.
 * However, it's not guaranteed that it will stay the same between different
 * releases due to bugfixes or changes in the GraphQL specification.
 *
 * Query example:
 *
 * query SomeQuery($foo: String!, $bar: String) {
 *   someField(foo: $foo, bar: $bar) {
 *     a
 *     b {
 *       c
 *       d
 *     }
 *   }
 * }
 *
 * Becomes:
 *
 * query SomeQuery($foo:String!$bar:String){someField(foo:$foo bar:$bar){a b{c d}}}
 *
 * SDL example:
 *
 * """
 * Type description
 * """
 * type Foo {
 *   """
 *   Field description
 *   """
 *   bar: String
 * }
 *
 * Becomes:
 *
 * """Type description""" type Foo{"""Field description""" bar:String}
 */

function stripIgnoredCharacters(source) {
  var sourceObj = typeof source === 'string' ? new _language_source__WEBPACK_IMPORTED_MODULE_1__["Source"](source) : source;

  if (!(sourceObj instanceof _language_source__WEBPACK_IMPORTED_MODULE_1__["Source"])) {
    throw new TypeError("Must provide string or Source. Received: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceObj)));
  }

  var body = sourceObj.body;
  var lexer = Object(_language_lexer__WEBPACK_IMPORTED_MODULE_2__["createLexer"])(sourceObj);
  var strippedBody = '';
  var wasLastAddedTokenNonPunctuator = false;

  while (lexer.advance().kind !== _language_lexer__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF) {
    var currentToken = lexer.token;
    var tokenKind = currentToken.kind;
    /**
     * Every two non-punctuator tokens should have space between them.
     * Also prevent case of non-punctuator token following by spread resulting
     * in invalid token (e.g. `1...` is invalid Float token).
     */

    var isNonPunctuator = !Object(_language_lexer__WEBPACK_IMPORTED_MODULE_2__["isPunctuatorToken"])(currentToken);

    if (wasLastAddedTokenNonPunctuator) {
      if (isNonPunctuator || currentToken.kind === _language_lexer__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SPREAD) {
        strippedBody += ' ';
      }
    }

    var tokenBody = body.slice(currentToken.start, currentToken.end);

    if (tokenKind === _language_lexer__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BLOCK_STRING) {
      strippedBody += dedentBlockString(tokenBody);
    } else {
      strippedBody += tokenBody;
    }

    wasLastAddedTokenNonPunctuator = isNonPunctuator;
  }

  return strippedBody;
}

function dedentBlockString(blockStr) {
  // skip leading and trailing triple quotations
  var rawStr = blockStr.slice(3, -3);
  var body = Object(_language_blockString__WEBPACK_IMPORTED_MODULE_3__["dedentBlockStringValue"])(rawStr);
  var lines = body.split(/\r\n|[\n\r]/g);

  if (Object(_language_blockString__WEBPACK_IMPORTED_MODULE_3__["getBlockStringIndentation"])(lines) > 0) {
    body = '\n' + body;
  }

  var lastChar = body[body.length - 1];
  var hasTrailingQuote = lastChar === '"' && body.slice(-4) !== '\\"""';

  if (hasTrailingQuote || lastChar === '\\') {
    body += '\n';
  }

  return '"""' + body + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/utilities/typeComparators.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/utilities/typeComparators.mjs ***!
  \************************************************************/
/*! exports provided: isEqualType, isTypeSubTypeOf, doTypesOverlap */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return isEqualType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return isTypeSubTypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return doTypesOverlap; });
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * Provided two types, return true if the types are equal (invariant).
 */
function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  } // If either type is non-null, the other must also be non-null.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(typeA) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // If either type is a list, the other must also be a list.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(typeA) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // Otherwise the types are not equal.


  return false;
}
/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */

function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  } // If superType is non-null, maybeSubType must also be non-null.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(superType)) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(maybeSubType)) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  } // If superType type is a list, maybeSubType type must also be a list.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(superType)) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isListType"])(maybeSubType)) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  } // If superType type is an abstract type, maybeSubType type may be a currently
  // possible object type.


  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(superType) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isObjectType"])(maybeSubType) && schema.isPossibleType(superType, maybeSubType)) {
    return true;
  } // Otherwise, the child type is not a valid subtype of the parent type.


  return false;
}
/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */

function doTypesOverlap(schema, typeA, typeB) {
  // Equivalent types overlap
  if (typeA === typeB) {
    return true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeA)) {
    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isPossibleType(typeB, type);
      });
    } // Determine if the latter type is a possible concrete type of the former.


    return schema.isPossibleType(typeA, typeB);
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isPossibleType(typeB, typeA);
  } // Otherwise the types do not overlap.


  return false;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/typeFromAST.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/utilities/typeFromAST.mjs ***!
  \********************************************************/
/*! exports provided: typeFromAST */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return typeFromAST; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



function typeFromAST(schema, typeNode) {
  /* eslint-enable no-redeclare */
  var innerType;

  if (typeNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["GraphQLList"])(innerType);
  }

  if (typeNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["GraphQLNonNull"])(innerType);
  }

  if (typeNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].NAMED_TYPE) {
    return schema.getType(typeNode.name.value);
  } // Not reachable. All possible type nodes have been considered.

  /* istanbul ignore next */


  throw new Error("Unexpected type node: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(typeNode), "\"."));
}


/***/ }),

/***/ "./node_modules/graphql/utilities/valueFromAST.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/utilities/valueFromAST.mjs ***!
  \*********************************************************/
/*! exports provided: valueFromAST */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromAST", function() { return valueFromAST; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/keyMap */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/isInvalid */ "./node_modules/graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/definition */ "./node_modules/graphql/type/definition.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */







/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */
function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isNonNullType"])(type)) {
    if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NULL) {
      return; // Invalid: intentionally return no value.
    }

    return valueFromAST(valueNode, type.ofType, variables);
  }

  if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NULL) {
    // This is explicitly returning the value null.
    return null;
  }

  if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE) {
    var variableName = valueNode.name.value;

    if (!variables || Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(variables[variableName])) {
      // No valid return value.
      return;
    }

    var variableValue = variables[variableName];

    if (variableValue === null && Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isNonNullType"])(type)) {
      return; // Invalid: intentionally return no value.
    } // Note: This does no further checking that this variable is correct.
    // This assumes that this query has been validated and the variable
    // usage here is of the correct type.


    return variableValue;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isListType"])(type)) {
    var itemType = type.ofType;

    if (valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].LIST) {
      var coercedValues = [];
      var itemNodes = valueNode.values;

      for (var i = 0; i < itemNodes.length; i++) {
        if (isMissingVariable(itemNodes[i], variables)) {
          // If an array contains a missing variable, it is either coerced to
          // null or if the item type is non-null, it considered invalid.
          if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isNonNullType"])(itemType)) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(null);
        } else {
          var itemValue = valueFromAST(itemNodes[i], itemType, variables);

          if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(itemValue)) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(itemValue);
        }
      }

      return coercedValues;
    }

    var coercedValue = valueFromAST(valueNode, itemType, variables);

    if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(coercedValue)) {
      return; // Invalid: intentionally return no value.
    }

    return [coercedValue];
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isInputObjectType"])(type)) {
    if (valueNode.kind !== _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT) {
      return; // Invalid: intentionally return no value.
    }

    var coercedObj = Object.create(null);
    var fieldNodes = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_2__["default"])(valueNode.fields, function (field) {
      return field.name.value;
    });
    var fields = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields());

    for (var _i = 0; _i < fields.length; _i++) {
      var field = fields[_i];
      var fieldNode = fieldNodes[field.name];

      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (field.defaultValue !== undefined) {
          coercedObj[field.name] = field.defaultValue;
        } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isNonNullType"])(field.type)) {
          return; // Invalid: intentionally return no value.
        }

        continue;
      }

      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);

      if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(fieldValue)) {
        return; // Invalid: intentionally return no value.
      }

      coercedObj[field.name] = fieldValue;
    }

    return coercedObj;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isEnumType"])(type)) {
    if (valueNode.kind !== _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM) {
      return; // Invalid: intentionally return no value.
    }

    var enumValue = type.getValue(valueNode.value);

    if (!enumValue) {
      return; // Invalid: intentionally return no value.
    }

    return enumValue.value;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isScalarType"])(type)) {
    // Scalars fulfill parsing a literal value via parseLiteral().
    // Invalid values represent a failure to parse correctly, in which case
    // no value is returned.
    var result;

    try {
      result = type.parseLiteral(valueNode, variables);
    } catch (_error) {
      return; // Invalid: intentionally return no value.
    }

    if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(result)) {
      return; // Invalid: intentionally return no value.
    }

    return result;
  } // Not reachable. All possible input types have been considered.

  /* istanbul ignore next */


  throw new Error("Unexpected input type: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__["default"])(type), "\"."));
} // Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.

function isMissingVariable(valueNode, variables) {
  return valueNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE && (!variables || Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_3__["default"])(variables[valueNode.name.value]));
}


/***/ }),

/***/ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/utilities/valueFromASTUntyped.mjs ***!
  \****************************************************************/
/*! exports provided: valueFromASTUntyped */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return valueFromASTUntyped; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/keyValMap */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/isInvalid */ "./node_modules/graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].NULL:
      return null;

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INT:
      return parseInt(valueNode.value, 10);

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].FLOAT:
      return parseFloat(valueNode.value);

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].STRING:
    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM:
    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].BOOLEAN:
      return valueNode.value;

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].LIST:
      return valueNode.values.map(function (node) {
        return valueFromASTUntyped(node, variables);
      });

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT:
      return Object(_jsutils_keyValMap__WEBPACK_IMPORTED_MODULE_1__["default"])(valueNode.fields, function (field) {
        return field.name.value;
      }, function (field) {
        return valueFromASTUntyped(field.value, variables);
      });

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].VARIABLE:
      {
        var variableName = valueNode.name.value;
        return variables && !Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_2__["default"])(variables[variableName]) ? variables[variableName] : undefined;
      }
  } // Not reachable. All possible value nodes have been considered.

  /* istanbul ignore next */


  throw new Error("Unexpected value node: \"".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(valueNode), "\"."));
}


/***/ }),

/***/ "./node_modules/graphql/validation/ValidationContext.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/graphql/validation/ValidationContext.mjs ***!
  \***************************************************************/
/*! exports provided: ASTValidationContext, SDLValidationContext, ValidationContext */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASTValidationContext", function() { return ASTValidationContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDLValidationContext", function() { return SDLValidationContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationContext", function() { return ValidationContext; });
/* harmony import */ var _language_visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _utilities_TypeInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/TypeInfo */ "./node_modules/graphql/utilities/TypeInfo.mjs");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
var ASTValidationContext =
/*#__PURE__*/
function () {
  function ASTValidationContext(ast) {
    this._ast = ast;
    this._errors = [];
    this._fragments = undefined;
    this._fragmentSpreads = new Map();
    this._recursivelyReferencedFragments = new Map();
  }

  var _proto = ASTValidationContext.prototype;

  _proto.reportError = function reportError(error) {
    this._errors.push(error);
  };

  _proto.getErrors = function getErrors() {
    return this._errors;
  };

  _proto.getDocument = function getDocument() {
    return this._ast;
  };

  _proto.getFragment = function getFragment(name) {
    var fragments = this._fragments;

    if (!fragments) {
      this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
        if (statement.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION) {
          frags[statement.name.value] = statement;
        }

        return frags;
      }, Object.create(null));
    }

    return fragments[name];
  };

  _proto.getFragmentSpreads = function getFragmentSpreads(node) {
    var spreads = this._fragmentSpreads.get(node);

    if (!spreads) {
      spreads = [];
      var setsToVisit = [node];

      while (setsToVisit.length !== 0) {
        var set = setsToVisit.pop();

        for (var i = 0; i < set.selections.length; i++) {
          var selection = set.selections[i];

          if (selection.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_SPREAD) {
            spreads.push(selection);
          } else if (selection.selectionSet) {
            setsToVisit.push(selection.selectionSet);
          }
        }
      }

      this._fragmentSpreads.set(node, spreads);
    }

    return spreads;
  };

  _proto.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
    var fragments = this._recursivelyReferencedFragments.get(operation);

    if (!fragments) {
      fragments = [];
      var collectedNames = Object.create(null);
      var nodesToVisit = [operation.selectionSet];

      while (nodesToVisit.length !== 0) {
        var node = nodesToVisit.pop();
        var spreads = this.getFragmentSpreads(node);

        for (var i = 0; i < spreads.length; i++) {
          var fragName = spreads[i].name.value;

          if (collectedNames[fragName] !== true) {
            collectedNames[fragName] = true;
            var fragment = this.getFragment(fragName);

            if (fragment) {
              fragments.push(fragment);
              nodesToVisit.push(fragment.selectionSet);
            }
          }
        }
      }

      this._recursivelyReferencedFragments.set(operation, fragments);
    }

    return fragments;
  };

  return ASTValidationContext;
}();
var SDLValidationContext =
/*#__PURE__*/
function (_ASTValidationContext) {
  _inheritsLoose(SDLValidationContext, _ASTValidationContext);

  function SDLValidationContext(ast, schema) {
    var _this;

    _this = _ASTValidationContext.call(this, ast) || this;
    _this._schema = schema;
    return _this;
  }

  var _proto2 = SDLValidationContext.prototype;

  _proto2.getSchema = function getSchema() {
    return this._schema;
  };

  return SDLValidationContext;
}(ASTValidationContext);
var ValidationContext =
/*#__PURE__*/
function (_ASTValidationContext2) {
  _inheritsLoose(ValidationContext, _ASTValidationContext2);

  function ValidationContext(schema, ast, typeInfo) {
    var _this2;

    _this2 = _ASTValidationContext2.call(this, ast) || this;
    _this2._schema = schema;
    _this2._typeInfo = typeInfo;
    _this2._variableUsages = new Map();
    _this2._recursiveVariableUsages = new Map();
    return _this2;
  }

  var _proto3 = ValidationContext.prototype;

  _proto3.getSchema = function getSchema() {
    return this._schema;
  };

  _proto3.getVariableUsages = function getVariableUsages(node) {
    var usages = this._variableUsages.get(node);

    if (!usages) {
      var newUsages = [];
      var typeInfo = new _utilities_TypeInfo__WEBPACK_IMPORTED_MODULE_2__["TypeInfo"](this._schema);
      Object(_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(node, Object(_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visitWithTypeInfo"])(typeInfo, {
        VariableDefinition: function VariableDefinition() {
          return false;
        },
        Variable: function Variable(variable) {
          newUsages.push({
            node: variable,
            type: typeInfo.getInputType(),
            defaultValue: typeInfo.getDefaultValue()
          });
        }
      }));
      usages = newUsages;

      this._variableUsages.set(node, usages);
    }

    return usages;
  };

  _proto3.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
    var usages = this._recursiveVariableUsages.get(operation);

    if (!usages) {
      usages = this.getVariableUsages(operation);
      var fragments = this.getRecursivelyReferencedFragments(operation);

      for (var i = 0; i < fragments.length; i++) {
        Array.prototype.push.apply(usages, this.getVariableUsages(fragments[i]));
      }

      this._recursiveVariableUsages.set(operation, usages);
    }

    return usages;
  };

  _proto3.getType = function getType() {
    return this._typeInfo.getType();
  };

  _proto3.getParentType = function getParentType() {
    return this._typeInfo.getParentType();
  };

  _proto3.getInputType = function getInputType() {
    return this._typeInfo.getInputType();
  };

  _proto3.getParentInputType = function getParentInputType() {
    return this._typeInfo.getParentInputType();
  };

  _proto3.getFieldDef = function getFieldDef() {
    return this._typeInfo.getFieldDef();
  };

  _proto3.getDirective = function getDirective() {
    return this._typeInfo.getDirective();
  };

  _proto3.getArgument = function getArgument() {
    return this._typeInfo.getArgument();
  };

  return ValidationContext;
}(ASTValidationContext);


/***/ }),

/***/ "./node_modules/graphql/validation/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/validation/index.mjs ***!
  \***************************************************/
/*! exports provided: validate, ValidationContext, specifiedRules, FieldsOnCorrectTypeRule, FragmentsOnCompositeTypesRule, KnownArgumentNamesRule, KnownDirectivesRule, KnownFragmentNamesRule, KnownTypeNamesRule, LoneAnonymousOperationRule, NoFragmentCyclesRule, NoUndefinedVariablesRule, NoUnusedFragmentsRule, NoUnusedVariablesRule, OverlappingFieldsCanBeMergedRule, PossibleFragmentSpreadsRule, ProvidedRequiredArgumentsRule, ScalarLeafsRule, SingleFieldSubscriptionsRule, UniqueArgumentNamesRule, UniqueDirectivesPerLocationRule, UniqueFragmentNamesRule, UniqueInputFieldNamesRule, UniqueOperationNamesRule, UniqueVariableNamesRule, ValuesOfCorrectTypeRule, VariablesAreInputTypesRule, VariablesInAllowedPositionRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ "./node_modules/graphql/validation/validate.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate__WEBPACK_IMPORTED_MODULE_0__["validate"]; });

/* harmony import */ var _ValidationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidationContext */ "./node_modules/graphql/validation/ValidationContext.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationContext", function() { return _ValidationContext__WEBPACK_IMPORTED_MODULE_1__["ValidationContext"]; });

/* harmony import */ var _specifiedRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specifiedRules */ "./node_modules/graphql/validation/specifiedRules.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedRules", function() { return _specifiedRules__WEBPACK_IMPORTED_MODULE_2__["specifiedRules"]; });

/* harmony import */ var _rules_FieldsOnCorrectType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rules/FieldsOnCorrectType */ "./node_modules/graphql/validation/rules/FieldsOnCorrectType.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldsOnCorrectTypeRule", function() { return _rules_FieldsOnCorrectType__WEBPACK_IMPORTED_MODULE_3__["FieldsOnCorrectType"]; });

/* harmony import */ var _rules_FragmentsOnCompositeTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rules/FragmentsOnCompositeTypes */ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypes.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FragmentsOnCompositeTypesRule", function() { return _rules_FragmentsOnCompositeTypes__WEBPACK_IMPORTED_MODULE_4__["FragmentsOnCompositeTypes"]; });

/* harmony import */ var _rules_KnownArgumentNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rules/KnownArgumentNames */ "./node_modules/graphql/validation/rules/KnownArgumentNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesRule", function() { return _rules_KnownArgumentNames__WEBPACK_IMPORTED_MODULE_5__["KnownArgumentNames"]; });

/* harmony import */ var _rules_KnownDirectives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules/KnownDirectives */ "./node_modules/graphql/validation/rules/KnownDirectives.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownDirectivesRule", function() { return _rules_KnownDirectives__WEBPACK_IMPORTED_MODULE_6__["KnownDirectives"]; });

/* harmony import */ var _rules_KnownFragmentNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/KnownFragmentNames */ "./node_modules/graphql/validation/rules/KnownFragmentNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownFragmentNamesRule", function() { return _rules_KnownFragmentNames__WEBPACK_IMPORTED_MODULE_7__["KnownFragmentNames"]; });

/* harmony import */ var _rules_KnownTypeNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules/KnownTypeNames */ "./node_modules/graphql/validation/rules/KnownTypeNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownTypeNamesRule", function() { return _rules_KnownTypeNames__WEBPACK_IMPORTED_MODULE_8__["KnownTypeNames"]; });

/* harmony import */ var _rules_LoneAnonymousOperation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/LoneAnonymousOperation */ "./node_modules/graphql/validation/rules/LoneAnonymousOperation.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoneAnonymousOperationRule", function() { return _rules_LoneAnonymousOperation__WEBPACK_IMPORTED_MODULE_9__["LoneAnonymousOperation"]; });

/* harmony import */ var _rules_NoFragmentCycles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules/NoFragmentCycles */ "./node_modules/graphql/validation/rules/NoFragmentCycles.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoFragmentCyclesRule", function() { return _rules_NoFragmentCycles__WEBPACK_IMPORTED_MODULE_10__["NoFragmentCycles"]; });

/* harmony import */ var _rules_NoUndefinedVariables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rules/NoUndefinedVariables */ "./node_modules/graphql/validation/rules/NoUndefinedVariables.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUndefinedVariablesRule", function() { return _rules_NoUndefinedVariables__WEBPACK_IMPORTED_MODULE_11__["NoUndefinedVariables"]; });

/* harmony import */ var _rules_NoUnusedFragments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rules/NoUnusedFragments */ "./node_modules/graphql/validation/rules/NoUnusedFragments.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedFragmentsRule", function() { return _rules_NoUnusedFragments__WEBPACK_IMPORTED_MODULE_12__["NoUnusedFragments"]; });

/* harmony import */ var _rules_NoUnusedVariables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rules/NoUnusedVariables */ "./node_modules/graphql/validation/rules/NoUnusedVariables.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedVariablesRule", function() { return _rules_NoUnusedVariables__WEBPACK_IMPORTED_MODULE_13__["NoUnusedVariables"]; });

/* harmony import */ var _rules_OverlappingFieldsCanBeMerged__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/OverlappingFieldsCanBeMerged */ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlappingFieldsCanBeMergedRule", function() { return _rules_OverlappingFieldsCanBeMerged__WEBPACK_IMPORTED_MODULE_14__["OverlappingFieldsCanBeMerged"]; });

/* harmony import */ var _rules_PossibleFragmentSpreads__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rules/PossibleFragmentSpreads */ "./node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreadsRule", function() { return _rules_PossibleFragmentSpreads__WEBPACK_IMPORTED_MODULE_15__["PossibleFragmentSpreads"]; });

/* harmony import */ var _rules_ProvidedRequiredArguments__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rules/ProvidedRequiredArguments */ "./node_modules/graphql/validation/rules/ProvidedRequiredArguments.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArgumentsRule", function() { return _rules_ProvidedRequiredArguments__WEBPACK_IMPORTED_MODULE_16__["ProvidedRequiredArguments"]; });

/* harmony import */ var _rules_ScalarLeafs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rules/ScalarLeafs */ "./node_modules/graphql/validation/rules/ScalarLeafs.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScalarLeafsRule", function() { return _rules_ScalarLeafs__WEBPACK_IMPORTED_MODULE_17__["ScalarLeafs"]; });

/* harmony import */ var _rules_SingleFieldSubscriptions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rules/SingleFieldSubscriptions */ "./node_modules/graphql/validation/rules/SingleFieldSubscriptions.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleFieldSubscriptionsRule", function() { return _rules_SingleFieldSubscriptions__WEBPACK_IMPORTED_MODULE_18__["SingleFieldSubscriptions"]; });

/* harmony import */ var _rules_UniqueArgumentNames__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rules/UniqueArgumentNames */ "./node_modules/graphql/validation/rules/UniqueArgumentNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueArgumentNamesRule", function() { return _rules_UniqueArgumentNames__WEBPACK_IMPORTED_MODULE_19__["UniqueArgumentNames"]; });

/* harmony import */ var _rules_UniqueDirectivesPerLocation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rules/UniqueDirectivesPerLocation */ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocation.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectivesPerLocationRule", function() { return _rules_UniqueDirectivesPerLocation__WEBPACK_IMPORTED_MODULE_20__["UniqueDirectivesPerLocation"]; });

/* harmony import */ var _rules_UniqueFragmentNames__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rules/UniqueFragmentNames */ "./node_modules/graphql/validation/rules/UniqueFragmentNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueFragmentNamesRule", function() { return _rules_UniqueFragmentNames__WEBPACK_IMPORTED_MODULE_21__["UniqueFragmentNames"]; });

/* harmony import */ var _rules_UniqueInputFieldNames__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rules/UniqueInputFieldNames */ "./node_modules/graphql/validation/rules/UniqueInputFieldNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueInputFieldNamesRule", function() { return _rules_UniqueInputFieldNames__WEBPACK_IMPORTED_MODULE_22__["UniqueInputFieldNames"]; });

/* harmony import */ var _rules_UniqueOperationNames__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rules/UniqueOperationNames */ "./node_modules/graphql/validation/rules/UniqueOperationNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationNamesRule", function() { return _rules_UniqueOperationNames__WEBPACK_IMPORTED_MODULE_23__["UniqueOperationNames"]; });

/* harmony import */ var _rules_UniqueVariableNames__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rules/UniqueVariableNames */ "./node_modules/graphql/validation/rules/UniqueVariableNames.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueVariableNamesRule", function() { return _rules_UniqueVariableNames__WEBPACK_IMPORTED_MODULE_24__["UniqueVariableNames"]; });

/* harmony import */ var _rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rules/ValuesOfCorrectType */ "./node_modules/graphql/validation/rules/ValuesOfCorrectType.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValuesOfCorrectTypeRule", function() { return _rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_25__["ValuesOfCorrectType"]; });

/* harmony import */ var _rules_VariablesAreInputTypes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rules/VariablesAreInputTypes */ "./node_modules/graphql/validation/rules/VariablesAreInputTypes.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesAreInputTypesRule", function() { return _rules_VariablesAreInputTypes__WEBPACK_IMPORTED_MODULE_26__["VariablesAreInputTypes"]; });

/* harmony import */ var _rules_VariablesInAllowedPosition__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rules/VariablesInAllowedPosition */ "./node_modules/graphql/validation/rules/VariablesInAllowedPosition.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesInAllowedPositionRule", function() { return _rules_VariablesInAllowedPosition__WEBPACK_IMPORTED_MODULE_27__["VariablesInAllowedPosition"]; });

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


// All validation rules in the GraphQL Specification.
 // Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

 // Spec Section: "Fragments on Composite Types"

 // Spec Section: "Argument Names"

 // Spec Section: "Directives Are Defined"

 // Spec Section: "Fragment spread target defined"

 // Spec Section: "Fragment Spread Type Existence"

 // Spec Section: "Lone Anonymous Operation"

 // Spec Section: "Fragments must not form cycles"

 // Spec Section: "All Variable Used Defined"

 // Spec Section: "Fragments must be used"

 // Spec Section: "All Variables Used"

 // Spec Section: "Field Selection Merging"

 // Spec Section: "Fragment spread is possible"

 // Spec Section: "Argument Optionality"

 // Spec Section: "Leaf Field Selections"

 // Spec Section: "Subscriptions with Single Root Field"

 // Spec Section: "Argument Uniqueness"

 // Spec Section: "Directives Are Unique Per Location"

 // Spec Section: "Fragment Name Uniqueness"

 // Spec Section: "Input Object Field Uniqueness"

 // Spec Section: "Operation Name Uniqueness"

 // Spec Section: "Variable Uniqueness"

 // Spec Section: "Values Type Correctness"

 // Spec Section: "Variables are Input Types"

 // Spec Section: "All Variable Usages Are Allowed"




/***/ }),

/***/ "./node_modules/graphql/validation/rules/ExecutableDefinitions.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ExecutableDefinitions.mjs ***!
  \*************************************************************************/
/*! exports provided: nonExecutableDefinitionMessage, ExecutableDefinitions */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonExecutableDefinitionMessage", function() { return nonExecutableDefinitionMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutableDefinitions", function() { return ExecutableDefinitions; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/predicates */ "./node_modules/graphql/language/predicates.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



function nonExecutableDefinitionMessage(defName) {
  return "The ".concat(defName, " definition is not executable.");
}
/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 */

function ExecutableDefinitions(context) {
  return {
    Document: function Document(node) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = node.definitions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var definition = _step.value;

          if (!Object(_language_predicates__WEBPACK_IMPORTED_MODULE_2__["isExecutableDefinitionNode"])(definition)) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](nonExecutableDefinitionMessage(definition.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_DEFINITION || definition.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_EXTENSION ? 'schema' : definition.name.value), definition));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/FieldsOnCorrectType.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/FieldsOnCorrectType.mjs ***!
  \***********************************************************************/
/*! exports provided: undefinedFieldMessage, FieldsOnCorrectType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefinedFieldMessage", function() { return undefinedFieldMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsOnCorrectType", function() { return FieldsOnCorrectType; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/suggestionList */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _jsutils_quotedOrList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/quotedOrList */ "./node_modules/graphql/jsutils/quotedOrList.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




function undefinedFieldMessage(fieldName, type, suggestedTypeNames, suggestedFieldNames) {
  var message = "Cannot query field \"".concat(fieldName, "\" on type \"").concat(type, "\".");

  if (suggestedTypeNames.length !== 0) {
    var suggestions = Object(_jsutils_quotedOrList__WEBPACK_IMPORTED_MODULE_2__["default"])(suggestedTypeNames);
    message += " Did you mean to use an inline fragment on ".concat(suggestions, "?");
  } else if (suggestedFieldNames.length !== 0) {
    message += " Did you mean ".concat(Object(_jsutils_quotedOrList__WEBPACK_IMPORTED_MODULE_2__["default"])(suggestedFieldNames), "?");
  }

  return message;
}
/**
 * Fields on correct type
 *
 * A GraphQL document is only valid if all fields selected are defined by the
 * parent type, or are an allowed meta field such as __typename.
 */

function FieldsOnCorrectType(context) {
  return {
    Field: function Field(node) {
      var type = context.getParentType();

      if (type) {
        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          // This field doesn't exist, lets look for suggestions.
          var schema = context.getSchema();
          var fieldName = node.name.value; // First determine if there are any suggested types to condition on.

          var suggestedTypeNames = getSuggestedTypeNames(schema, type, fieldName); // If there are no suggested types, then perhaps this was a typo?

          var suggestedFieldNames = suggestedTypeNames.length !== 0 ? [] : getSuggestedFieldNames(schema, type, fieldName); // Report an error, including helpful suggestions.

          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](undefinedFieldMessage(fieldName, type.name, suggestedTypeNames, suggestedFieldNames), node));
        }
      }
    }
  };
}
/**
 * Go through all of the implementations of type, as well as the interfaces that
 * they implement. If any of those types include the provided field, suggest
 * them, sorted by how often the type is referenced, starting with Interfaces.
 */

function getSuggestedTypeNames(schema, type, fieldName) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isAbstractType"])(type)) {
    var suggestedObjectTypes = [];
    var interfaceUsageCount = Object.create(null);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = schema.getPossibleTypes(type)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var possibleType = _step.value;

        if (!possibleType.getFields()[fieldName]) {
          continue;
        } // This object type defines this field.


        suggestedObjectTypes.push(possibleType.name);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = possibleType.getInterfaces()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var possibleInterface = _step2.value;

            if (!possibleInterface.getFields()[fieldName]) {
              continue;
            } // This interface type defines this field.


            interfaceUsageCount[possibleInterface.name] = (interfaceUsageCount[possibleInterface.name] || 0) + 1;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } // Suggest interface types based on how common they are.

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var suggestedInterfaceTypes = Object.keys(interfaceUsageCount).sort(function (a, b) {
      return interfaceUsageCount[b] - interfaceUsageCount[a];
    }); // Suggest both interface and object types.

    return suggestedInterfaceTypes.concat(suggestedObjectTypes);
  } // Otherwise, must be an Object type, which does not have possible fields.


  return [];
}
/**
 * For the field name provided, determine if there are any similar field names
 * that may be the result of a typo.
 */


function getSuggestedFieldNames(schema, type, fieldName) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isObjectType"])(type) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isInterfaceType"])(type)) {
    var possibleFieldNames = Object.keys(type.getFields());
    return Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldName, possibleFieldNames);
  } // Otherwise, must be a Union type, which does not define fields.


  return [];
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypes.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/FragmentsOnCompositeTypes.mjs ***!
  \*****************************************************************************/
/*! exports provided: inlineFragmentOnNonCompositeErrorMessage, fragmentOnNonCompositeErrorMessage, FragmentsOnCompositeTypes */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineFragmentOnNonCompositeErrorMessage", function() { return inlineFragmentOnNonCompositeErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fragmentOnNonCompositeErrorMessage", function() { return fragmentOnNonCompositeErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentsOnCompositeTypes", function() { return FragmentsOnCompositeTypes; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/typeFromAST */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




function inlineFragmentOnNonCompositeErrorMessage(type) {
  return "Fragment cannot condition on non composite type \"".concat(type, "\".");
}
function fragmentOnNonCompositeErrorMessage(fragName, type) {
  return "Fragment \"".concat(fragName, "\" cannot condition on non composite ") + "type \"".concat(type, "\".");
}
/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 */

function FragmentsOnCompositeTypes(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var typeCondition = node.typeCondition;

      if (typeCondition) {
        var type = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), typeCondition);

        if (type && !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(type)) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](inlineFragmentOnNonCompositeErrorMessage(Object(_language_printer__WEBPACK_IMPORTED_MODULE_1__["print"])(typeCondition)), typeCondition));
        }
      }
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var type = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), node.typeCondition);

      if (type && !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(type)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](fragmentOnNonCompositeErrorMessage(node.name.value, Object(_language_printer__WEBPACK_IMPORTED_MODULE_1__["print"])(node.typeCondition)), node.typeCondition));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownArgumentNames.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownArgumentNames.mjs ***!
  \**********************************************************************/
/*! exports provided: unknownArgMessage, unknownDirectiveArgMessage, KnownArgumentNames, KnownArgumentNamesOnDirectives */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownArgMessage", function() { return unknownArgMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownDirectiveArgMessage", function() { return unknownDirectiveArgMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNames", function() { return KnownArgumentNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesOnDirectives", function() { return KnownArgumentNamesOnDirectives; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/suggestionList */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _jsutils_quotedOrList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/quotedOrList */ "./node_modules/graphql/jsutils/quotedOrList.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/directives */ "./node_modules/graphql/type/directives.mjs");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





function unknownArgMessage(argName, fieldName, typeName, suggestedArgs) {
  var message = "Unknown argument \"".concat(argName, "\" on field \"").concat(fieldName, "\" of ") + "type \"".concat(typeName, "\".");

  if (suggestedArgs.length) {
    message += " Did you mean ".concat(Object(_jsutils_quotedOrList__WEBPACK_IMPORTED_MODULE_2__["default"])(suggestedArgs), "?");
  }

  return message;
}
function unknownDirectiveArgMessage(argName, directiveName, suggestedArgs) {
  var message = "Unknown argument \"".concat(argName, "\" on directive \"@").concat(directiveName, "\".");

  if (suggestedArgs.length) {
    message += " Did you mean ".concat(Object(_jsutils_quotedOrList__WEBPACK_IMPORTED_MODULE_2__["default"])(suggestedArgs), "?");
  }

  return message;
}
/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 */

function KnownArgumentNames(context) {
  return _objectSpread({}, KnownArgumentNamesOnDirectives(context), {
    Argument: function Argument(argNode) {
      var argDef = context.getArgument();
      var fieldDef = context.getFieldDef();
      var parentType = context.getParentType();

      if (!argDef && fieldDef && parentType) {
        var argName = argNode.name.value;
        var knownArgsNames = fieldDef.args.map(function (arg) {
          return arg.name;
        });
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](unknownArgMessage(argName, fieldDef.name, parentType.name, Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__["default"])(argName, knownArgsNames)), argNode));
      }
    }
  });
} // @internal

function KnownArgumentNamesOnDirectives(context) {
  var directiveArgs = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives__WEBPACK_IMPORTED_MODULE_4__["specifiedDirectives"];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = definedDirectives[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var directive = _step.value;
      directiveArgs[directive.name] = directive.args.map(function (arg) {
        return arg.name;
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var astDefinitions = context.getDocument().definitions;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = astDefinitions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var def = _step2.value;

      if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].DIRECTIVE_DEFINITION) {
        directiveArgs[def.name.value] = def.arguments ? def.arguments.map(function (arg) {
          return arg.name.value;
        }) : [];
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return {
    Directive: function Directive(directiveNode) {
      var directiveName = directiveNode.name.value;
      var knownArgs = directiveArgs[directiveName];

      if (directiveNode.arguments && knownArgs) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = directiveNode.arguments[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var argNode = _step3.value;
            var argName = argNode.name.value;

            if (knownArgs.indexOf(argName) === -1) {
              var suggestions = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__["default"])(argName, knownArgs);
              context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](unknownDirectiveArgMessage(argName, directiveName, suggestions), argNode));
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownDirectives.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownDirectives.mjs ***!
  \*******************************************************************/
/*! exports provided: unknownDirectiveMessage, misplacedDirectiveMessage, KnownDirectives */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownDirectiveMessage", function() { return unknownDirectiveMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "misplacedDirectiveMessage", function() { return misplacedDirectiveMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownDirectives", function() { return KnownDirectives; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/directiveLocation */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/directives */ "./node_modules/graphql/type/directives.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




function unknownDirectiveMessage(directiveName) {
  return "Unknown directive \"".concat(directiveName, "\".");
}
function misplacedDirectiveMessage(directiveName, location) {
  return "Directive \"".concat(directiveName, "\" may not be used on ").concat(location, ".");
}
/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 */

function KnownDirectives(context) {
  var locationsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives__WEBPACK_IMPORTED_MODULE_3__["specifiedDirectives"];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = definedDirectives[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var directive = _step.value;
      locationsMap[directive.name] = directive.locations;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var astDefinitions = context.getDocument().definitions;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = astDefinitions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var def = _step2.value;

      if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE_DEFINITION) {
        locationsMap[def.name.value] = def.locations.map(function (name) {
          return name.value;
        });
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return {
    Directive: function Directive(node, key, parent, path, ancestors) {
      var name = node.name.value;
      var locations = locationsMap[name];

      if (!locations) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](unknownDirectiveMessage(name), node));
        return;
      }

      var candidateLocation = getDirectiveLocationForASTPath(ancestors);

      if (candidateLocation && locations.indexOf(candidateLocation) === -1) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](misplacedDirectiveMessage(name, candidateLocation), node));
      }
    }
  };
}

function getDirectiveLocationForASTPath(ancestors) {
  var appliedTo = ancestors[ancestors.length - 1];

  if (!Array.isArray(appliedTo)) {
    switch (appliedTo.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION:
        switch (appliedTo.operation) {
          case 'query':
            return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].QUERY;

          case 'mutation':
            return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].MUTATION;

          case 'subscription':
            return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].SUBSCRIPTION;
        }

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].FIELD;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_SPREAD:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].FRAGMENT_SPREAD;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INLINE_FRAGMENT:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].INLINE_FRAGMENT;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].FRAGMENT_DEFINITION;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE_DEFINITION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].VARIABLE_DEFINITION;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].SCHEMA;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCALAR_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCALAR_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].SCALAR;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].OBJECT;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD_DEFINITION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].FIELD_DEFINITION;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INTERFACE_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INTERFACE_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].INTERFACE;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].UNION_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].UNION_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].UNION;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].ENUM;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_VALUE_DEFINITION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].ENUM_VALUE;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_OBJECT_TYPE_DEFINITION:
      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_OBJECT_TYPE_EXTENSION:
        return _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].INPUT_OBJECT;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_VALUE_DEFINITION:
        {
          var parentNode = ancestors[ancestors.length - 3];
          return parentNode.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_OBJECT_TYPE_DEFINITION ? _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].INPUT_FIELD_DEFINITION : _language_directiveLocation__WEBPACK_IMPORTED_MODULE_2__["DirectiveLocation"].ARGUMENT_DEFINITION;
        }
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownFragmentNames.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownFragmentNames.mjs ***!
  \**********************************************************************/
/*! exports provided: unknownFragmentMessage, KnownFragmentNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownFragmentMessage", function() { return unknownFragmentMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownFragmentNames", function() { return KnownFragmentNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function unknownFragmentMessage(fragName) {
  return "Unknown fragment \"".concat(fragName, "\".");
}
/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 */

function KnownFragmentNames(context) {
  return {
    FragmentSpread: function FragmentSpread(node) {
      var fragmentName = node.name.value;
      var fragment = context.getFragment(fragmentName);

      if (!fragment) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](unknownFragmentMessage(fragmentName), node.name));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownTypeNames.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownTypeNames.mjs ***!
  \******************************************************************/
/*! exports provided: unknownTypeMessage, KnownTypeNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownTypeMessage", function() { return unknownTypeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownTypeNames", function() { return KnownTypeNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/suggestionList */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _jsutils_quotedOrList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/quotedOrList */ "./node_modules/graphql/jsutils/quotedOrList.mjs");
/* harmony import */ var _language_predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/predicates */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _type_scalars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/scalars */ "./node_modules/graphql/type/scalars.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





function unknownTypeMessage(typeName, suggestedTypes) {
  var message = "Unknown type \"".concat(typeName, "\".");

  if (suggestedTypes.length) {
    message += " Did you mean ".concat(Object(_jsutils_quotedOrList__WEBPACK_IMPORTED_MODULE_2__["default"])(suggestedTypes), "?");
  }

  return message;
}
/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 */

function KnownTypeNames(context) {
  var schema = context.getSchema();
  var existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
  var definedTypes = Object.create(null);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = context.getDocument().definitions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var def = _step.value;

      if (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_3__["isTypeDefinitionNode"])(def)) {
        definedTypes[def.name.value] = true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var typeNames = Object.keys(existingTypesMap).concat(Object.keys(definedTypes));
  return {
    NamedType: function NamedType(node, _1, parent, _2, ancestors) {
      var typeName = node.name.value;

      if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
        var definitionNode = ancestors[2] || parent;
        var isSDL = isSDLNode(definitionNode);

        if (isSDL && isSpecifiedScalarName(typeName)) {
          return;
        }

        var suggestedTypes = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__["default"])(typeName, isSDL ? specifiedScalarsNames.concat(typeNames) : typeNames);
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](unknownTypeMessage(typeName, suggestedTypes), node));
      }
    }
  };
}
var specifiedScalarsNames = _type_scalars__WEBPACK_IMPORTED_MODULE_4__["specifiedScalarTypes"].map(function (type) {
  return type.name;
});

function isSpecifiedScalarName(typeName) {
  return specifiedScalarsNames.indexOf(typeName) !== -1;
}

function isSDLNode(value) {
  return Boolean(value && !Array.isArray(value) && (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_3__["isTypeSystemDefinitionNode"])(value) || Object(_language_predicates__WEBPACK_IMPORTED_MODULE_3__["isTypeSystemExtensionNode"])(value)));
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/LoneAnonymousOperation.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/LoneAnonymousOperation.mjs ***!
  \**************************************************************************/
/*! exports provided: anonOperationNotAloneMessage, LoneAnonymousOperation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anonOperationNotAloneMessage", function() { return anonOperationNotAloneMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoneAnonymousOperation", function() { return LoneAnonymousOperation; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


function anonOperationNotAloneMessage() {
  return 'This anonymous operation must be the only defined operation.';
}
/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 */

function LoneAnonymousOperation(context) {
  var operationCount = 0;
  return {
    Document: function Document(node) {
      operationCount = node.definitions.filter(function (definition) {
        return definition.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION;
      }).length;
    },
    OperationDefinition: function OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](anonOperationNotAloneMessage(), node));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/LoneSchemaDefinition.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/LoneSchemaDefinition.mjs ***!
  \************************************************************************/
/*! exports provided: schemaDefinitionNotAloneMessage, canNotDefineSchemaWithinExtensionMessage, LoneSchemaDefinition */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schemaDefinitionNotAloneMessage", function() { return schemaDefinitionNotAloneMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canNotDefineSchemaWithinExtensionMessage", function() { return canNotDefineSchemaWithinExtensionMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoneSchemaDefinition", function() { return LoneSchemaDefinition; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function schemaDefinitionNotAloneMessage() {
  return 'Must provide only one schema definition.';
}
function canNotDefineSchemaWithinExtensionMessage() {
  return 'Cannot define a new schema within a schema extension.';
}
/**
 * Lone Schema definition
 *
 * A GraphQL document is only valid if it contains only one schema definition.
 */

function LoneSchemaDefinition(context) {
  var oldSchema = context.getSchema();
  var alreadyDefined = oldSchema && (oldSchema.astNode || oldSchema.getQueryType() || oldSchema.getMutationType() || oldSchema.getSubscriptionType());
  var schemaDefinitionsCount = 0;
  return {
    SchemaDefinition: function SchemaDefinition(node) {
      if (alreadyDefined) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](canNotDefineSchemaWithinExtensionMessage(), node));
        return;
      }

      if (schemaDefinitionsCount > 0) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](schemaDefinitionNotAloneMessage(), node));
      }

      ++schemaDefinitionsCount;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoFragmentCycles.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoFragmentCycles.mjs ***!
  \********************************************************************/
/*! exports provided: cycleErrorMessage, NoFragmentCycles */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cycleErrorMessage", function() { return cycleErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoFragmentCycles", function() { return NoFragmentCycles; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function cycleErrorMessage(fragName, spreadNames) {
  var via = spreadNames.length ? ' via ' + spreadNames.join(', ') : '';
  return "Cannot spread fragment \"".concat(fragName, "\" within itself").concat(via, ".");
}
function NoFragmentCycles(context) {
  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedFrags = Object.create(null); // Array of AST nodes used to produce meaningful errors

  var spreadPath = []; // Position in the spread path

  var spreadPathIndexByName = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      detectCycleRecursive(node);
      return false;
    }
  }; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(fragment) {
    if (visitedFrags[fragment.name.value]) {
      return;
    }

    var fragmentName = fragment.name.value;
    visitedFrags[fragmentName] = true;
    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);

    if (spreadNodes.length === 0) {
      return;
    }

    spreadPathIndexByName[fragmentName] = spreadPath.length;

    for (var i = 0; i < spreadNodes.length; i++) {
      var spreadNode = spreadNodes[i];
      var spreadName = spreadNode.name.value;
      var cycleIndex = spreadPathIndexByName[spreadName];
      spreadPath.push(spreadNode);

      if (cycleIndex === undefined) {
        var spreadFragment = context.getFragment(spreadName);

        if (spreadFragment) {
          detectCycleRecursive(spreadFragment);
        }
      } else {
        var cyclePath = spreadPath.slice(cycleIndex);
        var fragmentNames = cyclePath.slice(0, -1).map(function (s) {
          return s.name.value;
        });
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](cycleErrorMessage(spreadName, fragmentNames), cyclePath));
      }

      spreadPath.pop();
    }

    spreadPathIndexByName[fragmentName] = undefined;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoUndefinedVariables.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoUndefinedVariables.mjs ***!
  \************************************************************************/
/*! exports provided: undefinedVarMessage, NoUndefinedVariables */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefinedVarMessage", function() { return undefinedVarMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUndefinedVariables", function() { return NoUndefinedVariables; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function undefinedVarMessage(varName, opName) {
  return opName ? "Variable \"$".concat(varName, "\" is not defined by operation \"").concat(opName, "\".") : "Variable \"$".concat(varName, "\" is not defined.");
}
/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 */

function NoUndefinedVariables(context) {
  var variableNameDefined = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        variableNameDefined = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = usages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref2 = _step.value;
            var node = _ref2.node;
            var varName = node.name.value;

            if (variableNameDefined[varName] !== true) {
              context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](undefinedVarMessage(varName, operation.name && operation.name.value), [node, operation]));
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoUnusedFragments.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoUnusedFragments.mjs ***!
  \*********************************************************************/
/*! exports provided: unusedFragMessage, NoUnusedFragments */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unusedFragMessage", function() { return unusedFragMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUnusedFragments", function() { return NoUnusedFragments; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function unusedFragMessage(fragName) {
  return "Fragment \"".concat(fragName, "\" is never used.");
}
/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 */

function NoUnusedFragments(context) {
  var operationDefs = [];
  var fragmentDefs = [];
  return {
    OperationDefinition: function OperationDefinition(node) {
      operationDefs.push(node);
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fragmentDefs.push(node);
      return false;
    },
    Document: {
      leave: function leave() {
        var fragmentNameUsed = Object.create(null);

        for (var _i = 0, _operationDefs = operationDefs; _i < _operationDefs.length; _i++) {
          var operation = _operationDefs[_i];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = context.getRecursivelyReferencedFragments(operation)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var fragment = _step.value;
              fragmentNameUsed[fragment.name.value] = true;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        for (var _i2 = 0, _fragmentDefs = fragmentDefs; _i2 < _fragmentDefs.length; _i2++) {
          var fragmentDef = _fragmentDefs[_i2];
          var fragName = fragmentDef.name.value;

          if (fragmentNameUsed[fragName] !== true) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](unusedFragMessage(fragName), fragmentDef));
          }
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoUnusedVariables.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoUnusedVariables.mjs ***!
  \*********************************************************************/
/*! exports provided: unusedVariableMessage, NoUnusedVariables */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unusedVariableMessage", function() { return unusedVariableMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUnusedVariables", function() { return NoUnusedVariables; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function unusedVariableMessage(varName, opName) {
  return opName ? "Variable \"$".concat(varName, "\" is never used in operation \"").concat(opName, "\".") : "Variable \"$".concat(varName, "\" is never used.");
}
/**
 * No unused variables
 *
 * A GraphQL operation is only valid if all variables defined by an operation
 * are used, either directly or within a spread fragment.
 */

function NoUnusedVariables(context) {
  var variableDefs = [];
  return {
    OperationDefinition: {
      enter: function enter() {
        variableDefs = [];
      },
      leave: function leave(operation) {
        var variableNameUsed = Object.create(null);
        var usages = context.getRecursiveVariableUsages(operation);
        var opName = operation.name ? operation.name.value : null;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = usages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref2 = _step.value;
            var node = _ref2.node;
            variableNameUsed[node.name.value] = true;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        for (var _i = 0, _variableDefs = variableDefs; _i < _variableDefs.length; _i++) {
          var variableDef = _variableDefs[_i];
          var variableName = variableDef.variable.name.value;

          if (variableNameUsed[variableName] !== true) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](unusedVariableMessage(variableName, opName), variableDef));
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(def) {
      variableDefs.push(def);
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs ***!
  \********************************************************************************/
/*! exports provided: fieldsConflictMessage, OverlappingFieldsCanBeMerged */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldsConflictMessage", function() { return fieldsConflictMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlappingFieldsCanBeMerged", function() { return OverlappingFieldsCanBeMerged; });
/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfills/find */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../polyfills/objectEntries */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/typeFromAST */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */








function fieldsConflictMessage(responseName, reason) {
  return "Fields \"".concat(responseName, "\" conflict because ").concat(reasonMessage(reason), ". ") + 'Use different aliases on the fields to fetch both if this was intentional.';
}

function reasonMessage(reason) {
  if (Array.isArray(reason)) {
    return reason.map(function (_ref) {
      var responseName = _ref[0],
          subreason = _ref[1];
      return "subfields \"".concat(responseName, "\" conflict because ").concat(reasonMessage(subreason));
    }).join(' and ');
  }

  return reason;
}
/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */


function OverlappingFieldsCanBeMerged(context) {
  // A memoization for when two fragments are compared "between" each other for
  // conflicts. Two fragments may be compared many times, so memoizing this can
  // dramatically improve the performance of this validator.
  var comparedFragmentPairs = new PairSet(); // A cache for the "field map" and list of fragment names found in any given
  // selection set. Selection sets may be asked for this information multiple
  // times, so this improves the performance of this validator.

  var cachedFieldsAndFragmentNames = new Map();
  return {
    SelectionSet: function SelectionSet(selectionSet) {
      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);

      for (var _i = 0, _conflicts = conflicts; _i < _conflicts.length; _i++) {
        var _ref3 = _conflicts[_i];
        var _ref2$ = _ref3[0];
        var responseName = _ref2$[0];
        var reason = _ref2$[1];
        var fields1 = _ref3[1];
        var fields2 = _ref3[2];
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](fieldsConflictMessage(responseName, reason), fields1.concat(fields2)));
      }
    }
  };
}

/**
 * Algorithm:
 *
 * Conflicts occur when two fields exist in a query which will produce the same
 * response name, but represent differing values, thus creating a conflict.
 * The algorithm below finds all conflicts via making a series of comparisons
 * between fields. In order to compare as few fields as possible, this makes
 * a series of comparisons "within" sets of fields and "between" sets of fields.
 *
 * Given any selection set, a collection produces both a set of fields by
 * also including all inline fragments, as well as a list of fragments
 * referenced by fragment spreads.
 *
 * A) Each selection set represented in the document first compares "within" its
 * collected set of fields, finding any conflicts between every pair of
 * overlapping fields.
 * Note: This is the *only time* that a the fields "within" a set are compared
 * to each other. After this only fields "between" sets are compared.
 *
 * B) Also, if any fragment is referenced in a selection set, then a
 * comparison is made "between" the original set of fields and the
 * referenced fragment.
 *
 * C) Also, if multiple fragments are referenced, then comparisons
 * are made "between" each referenced fragment.
 *
 * D) When comparing "between" a set of fields and a referenced fragment, first
 * a comparison is made between each field in the original set of fields and
 * each field in the the referenced set of fields.
 *
 * E) Also, if any fragment is referenced in the referenced selection set,
 * then a comparison is made "between" the original set of fields and the
 * referenced fragment (recursively referring to step D).
 *
 * F) When comparing "between" two fragments, first a comparison is made between
 * each field in the first referenced set of fields and each field in the the
 * second referenced set of fields.
 *
 * G) Also, any fragments referenced by the first must be compared to the
 * second, and any fragments referenced by the second must be compared to the
 * first (recursively referring to step F).
 *
 * H) When comparing two fields, if both have selection sets, then a comparison
 * is made "between" both selection sets, first comparing the set of fields in
 * the first selection set with the set of fields in the second.
 *
 * I) Also, if any fragment is referenced in either selection set, then a
 * comparison is made "between" the other set of fields and the
 * referenced fragment.
 *
 * J) Also, if two fragments are referenced in both selection sets, then a
 * comparison is made "between" the two fragments.
 *
 */
// Find all conflicts found "within" a selection set, including those found
// via spreading in fragments. Called when visiting each SelectionSet in the
// GraphQL Document.
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
  var conflicts = [];

  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
      fieldMap = _getFieldsAndFragment[0],
      fragmentNames = _getFieldsAndFragment[1]; // (A) Find find all conflicts "within" the fields of this selection set.
  // Note: this is the *only place* `collectConflictsWithin` is called.


  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);

  if (fragmentNames.length !== 0) {
    // (B) Then collect conflicts between these fields and those represented by
    // each spread fragment name found.
    var comparedFragments = Object.create(null);

    for (var i = 0; i < fragmentNames.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, false, fieldMap, fragmentNames[i]); // (C) Then compare this fragment with all other fragments found in this
      // selection set to collect conflicts between fragments spread together.
      // This compares each item in the list of fragment names to every other
      // item in that same list (except for itself).

      for (var j = i + 1; j < fragmentNames.length; j++) {
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
      }
    }
  }

  return conflicts;
} // Collect all conflicts found between a set of fields and a fragment reference
// including via spreading in any nested fragments.


function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
  // Memoize so a fragment is not compared for conflicts more than once.
  if (comparedFragments[fragmentName]) {
    return;
  }

  comparedFragments[fragmentName] = true;
  var fragment = context.getFragment(fragmentName);

  if (!fragment) {
    return;
  }

  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
      fieldMap2 = _getReferencedFieldsA[0],
      fragmentNames2 = _getReferencedFieldsA[1]; // Do not compare a fragment's fieldMap to itself.


  if (fieldMap === fieldMap2) {
    return;
  } // (D) First collect any conflicts between the provided collection of fields
  // and the collection of fields represented by the given fragment.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2); // (E) Then collect any conflicts between the provided collection of fields
  // and any fragment names found in the given fragment.

  for (var i = 0; i < fragmentNames2.length; i++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
  }
} // Collect all conflicts found between two fragments, including via spreading in
// any nested fragments.


function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
  // No need to compare a fragment to itself.
  if (fragmentName1 === fragmentName2) {
    return;
  } // Memoize so two fragments are not compared for conflicts more than once.


  if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
    return;
  }

  comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
  var fragment1 = context.getFragment(fragmentName1);
  var fragment2 = context.getFragment(fragmentName2);

  if (!fragment1 || !fragment2) {
    return;
  }

  var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
      fieldMap1 = _getReferencedFieldsA2[0],
      fragmentNames1 = _getReferencedFieldsA2[1];

  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
      fieldMap2 = _getReferencedFieldsA3[0],
      fragmentNames2 = _getReferencedFieldsA3[1]; // (F) First, collect all conflicts between these two collections of fields
  // (not including any nested fragments).


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (G) Then collect conflicts between the first fragment and any nested
  // fragments spread in the second fragment.

  for (var j = 0; j < fragmentNames2.length; j++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
  } // (G) Then collect conflicts between the second fragment and any nested
  // fragments spread in the first fragment.


  for (var i = 0; i < fragmentNames1.length; i++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
  }
} // Find all conflicts found between two selection sets, including those found
// via spreading in fragments. Called when determining if conflicts exist
// between the sub-fields of two overlapping fields.


function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
  var conflicts = [];

  var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
      fieldMap1 = _getFieldsAndFragment2[0],
      fragmentNames1 = _getFieldsAndFragment2[1];

  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
      fieldMap2 = _getFieldsAndFragment3[0],
      fragmentNames2 = _getFieldsAndFragment3[1]; // (H) First, collect all conflicts between these two collections of field.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (I) Then collect conflicts between the first collection of fields and
  // those referenced by each fragment name associated with the second.

  if (fragmentNames2.length !== 0) {
    var comparedFragments = Object.create(null);

    for (var j = 0; j < fragmentNames2.length; j++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
    }
  } // (I) Then collect conflicts between the second collection of fields and
  // those referenced by each fragment name associated with the first.


  if (fragmentNames1.length !== 0) {
    var _comparedFragments = Object.create(null);

    for (var i = 0; i < fragmentNames1.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, _comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
    }
  } // (J) Also collect conflicts between any fragment names by the first and
  // fragment names by the second. This compares each item in the first set of
  // names to each item in the second set of names.


  for (var _i2 = 0; _i2 < fragmentNames1.length; _i2++) {
    for (var _j = 0; _j < fragmentNames2.length; _j++) {
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[_i2], fragmentNames2[_j]);
    }
  }

  return conflicts;
} // Collect all Conflicts "within" one collection of fields.


function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For every response name, if there are multiple fields, they
  // must be compared to find a potential conflict.
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object(_polyfills_objectEntries__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref5 = _step.value;
      var responseName = _ref5[0];
      var fields = _ref5[1];

      // This compares every field in the list to every other field in this list
      // (except to itself). If the list only has one item, nothing needs to
      // be compared.
      if (fields.length > 1) {
        for (var i = 0; i < fields.length; i++) {
          for (var j = i + 1; j < fields.length; j++) {
            var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, // within one collection is never mutually exclusive
            responseName, fields[i], fields[j]);

            if (conflict) {
              conflicts.push(conflict);
            }
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
} // Collect all Conflicts between two collections of fields. This is similar to,
// but different from the `collectConflictsWithin` function above. This check
// assumes that `collectConflictsWithin` has already been called on each
// provided collection of fields. This is true because this validator traverses
// each individual selection set.


function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For any response name which appears in both provided field
  // maps, each field from the first field map must be compared to every field
  // in the second field map to find potential conflicts.
  for (var _i3 = 0, _Object$keys = Object.keys(fieldMap1); _i3 < _Object$keys.length; _i3++) {
    var responseName = _Object$keys[_i3];
    var fields2 = fieldMap2[responseName];

    if (fields2) {
      var fields1 = fieldMap1[responseName];

      for (var i = 0; i < fields1.length; i++) {
        for (var j = 0; j < fields2.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);

          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
} // Determines if there is a conflict between two particular fields, including
// comparing their sub-fields.


function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
  var parentType1 = field1[0],
      node1 = field1[1],
      def1 = field1[2];
  var parentType2 = field2[0],
      node2 = field2[1],
      def2 = field2[2]; // If it is known that two fields could not possibly apply at the same
  // time, due to the parent types, then it is safe to permit them to diverge
  // in aliased field or arguments used as they will not present any ambiguity
  // by differing.
  // It is known that two parent types could never overlap if they are
  // different Object types. Interface or Union types might overlap - if not
  // in the current state of the schema, then perhaps in some future version,
  // thus may not safely diverge.

  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(parentType1) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(parentType2); // The return type for each field.

  var type1 = def1 && def1.type;
  var type2 = def2 && def2.type;

  if (!areMutuallyExclusive) {
    // Two aliases must refer to the same field.
    var name1 = node1.name.value;
    var name2 = node2.name.value;

    if (name1 !== name2) {
      return [[responseName, "".concat(name1, " and ").concat(name2, " are different fields")], [node1], [node2]];
    } // Two field calls must have the same arguments.


    if (!sameArguments(node1.arguments || [], node2.arguments || [])) {
      return [[responseName, 'they have differing arguments'], [node1], [node2]];
    }
  }

  if (type1 && type2 && doTypesConflict(type1, type2)) {
    return [[responseName, "they return conflicting types ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_3__["default"])(type1), " and ").concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_3__["default"])(type2))], [node1], [node2]];
  } // Collect and compare sub-fields. Use the same "visited fragment names" list
  // for both collections so fields in a fragment reference are never
  // compared to themselves.


  var selectionSet1 = node1.selectionSet;
  var selectionSet2 = node2.selectionSet;

  if (selectionSet1 && selectionSet2) {
    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["getNamedType"])(type1), selectionSet1, Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["getNamedType"])(type2), selectionSet2);
    return subfieldConflicts(conflicts, responseName, node1, node2);
  }
}

function sameArguments(arguments1, arguments2) {
  if (arguments1.length !== arguments2.length) {
    return false;
  }

  return arguments1.every(function (argument1) {
    var argument2 = Object(_polyfills_find__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments2, function (argument) {
      return argument.name.value === argument1.name.value;
    });

    if (!argument2) {
      return false;
    }

    return sameValue(argument1.value, argument2.value);
  });
}

function sameValue(value1, value2) {
  return !value1 && !value2 || Object(_language_printer__WEBPACK_IMPORTED_MODULE_5__["print"])(value1) === Object(_language_printer__WEBPACK_IMPORTED_MODULE_5__["print"])(value2);
} // Two types conflict if both types could not apply to a value simultaneously.
// Composite types are ignored as their individual field types will be compared
// later recursively. However List and Non-Null types must match.


function doTypesConflict(type1, type2) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(type1)) {
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isListType"])(type2)) {
    return true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type1)) {
    return Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type2)) {
    return true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isLeafType"])(type1) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isLeafType"])(type2)) {
    return type1 !== type2;
  }

  return false;
} // Given a selection set, return the collection of fields (a mapping of response
// name to field nodes and definitions) as well as a list of fragment names
// referenced via fragment spreads.


function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
  var cached = cachedFieldsAndFragmentNames.get(selectionSet);

  if (!cached) {
    var nodeAndDefs = Object.create(null);
    var fragmentNames = Object.create(null);

    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);

    cached = [nodeAndDefs, Object.keys(fragmentNames)];
    cachedFieldsAndFragmentNames.set(selectionSet, cached);
  }

  return cached;
} // Given a reference to a fragment, return the represented collection of fields
// as well as a list of nested fragment names referenced via fragment spreads.


function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
  // Short-circuit building a type from the node if possible.
  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);

  if (cached) {
    return cached;
  }

  var fragmentType = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_7__["typeFromAST"])(context.getSchema(), fragment.typeCondition);
  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}

function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
  for (var i = 0; i < selectionSet.selections.length; i++) {
    var selection = selectionSet.selections[i];

    switch (selection.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FIELD:
        {
          var fieldName = selection.name.value;
          var fieldDef = void 0;

          if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(parentType) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_6__["isInterfaceType"])(parentType)) {
            fieldDef = parentType.getFields()[fieldName];
          }

          var responseName = selection.alias ? selection.alias.value : fieldName;

          if (!nodeAndDefs[responseName]) {
            nodeAndDefs[responseName] = [];
          }

          nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_SPREAD:
        fragmentNames[selection.name.value] = true;
        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INLINE_FRAGMENT:
        {
          var typeCondition = selection.typeCondition;
          var inlineFragmentType = typeCondition ? Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_7__["typeFromAST"])(context.getSchema(), typeCondition) : parentType;

          _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);

          break;
        }
    }
  }
} // Given a series of Conflicts which occurred between two sub-fields, generate
// a single Conflict.


function subfieldConflicts(conflicts, responseName, node1, node2) {
  if (conflicts.length > 0) {
    return [[responseName, conflicts.map(function (_ref6) {
      var reason = _ref6[0];
      return reason;
    })], conflicts.reduce(function (allFields, _ref7) {
      var fields1 = _ref7[1];
      return allFields.concat(fields1);
    }, [node1]), conflicts.reduce(function (allFields, _ref8) {
      var fields2 = _ref8[2];
      return allFields.concat(fields2);
    }, [node2])];
  }
}
/**
 * A way to keep track of pairs of things when the ordering of the pair does
 * not matter. We do this by maintaining a sort of double adjacency sets.
 */


var PairSet =
/*#__PURE__*/
function () {
  function PairSet() {
    this._data = Object.create(null);
  }

  var _proto = PairSet.prototype;

  _proto.has = function has(a, b, areMutuallyExclusive) {
    var first = this._data[a];
    var result = first && first[b];

    if (result === undefined) {
      return false;
    } // areMutuallyExclusive being false is a superset of being true,
    // hence if we want to know if this PairSet "has" these two with no
    // exclusivity, we have to ensure it was added as such.


    if (areMutuallyExclusive === false) {
      return result === false;
    }

    return true;
  };

  _proto.add = function add(a, b, areMutuallyExclusive) {
    _pairSetAdd(this._data, a, b, areMutuallyExclusive);

    _pairSetAdd(this._data, b, a, areMutuallyExclusive);
  };

  return PairSet;
}();

function _pairSetAdd(data, a, b, areMutuallyExclusive) {
  var map = data[a];

  if (!map) {
    map = Object.create(null);
    data[a] = map;
  }

  map[b] = areMutuallyExclusive;
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs ***!
  \***************************************************************************/
/*! exports provided: typeIncompatibleSpreadMessage, typeIncompatibleAnonSpreadMessage, PossibleFragmentSpreads */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeIncompatibleSpreadMessage", function() { return typeIncompatibleSpreadMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeIncompatibleAnonSpreadMessage", function() { return typeIncompatibleAnonSpreadMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreads", function() { return PossibleFragmentSpreads; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _utilities_typeComparators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/typeComparators */ "./node_modules/graphql/utilities/typeComparators.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/typeFromAST */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
  return "Fragment \"".concat(fragName, "\" cannot be spread here as objects of ") + "type \"".concat(parentType, "\" can never be of type \"").concat(fragType, "\".");
}
function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
  return 'Fragment cannot be spread here as objects of ' + "type \"".concat(parentType, "\" can never be of type \"").concat(fragType, "\".");
}
/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */

function PossibleFragmentSpreads(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var fragType = context.getType();
      var parentType = context.getParentType();

      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_4__["isCompositeType"])(fragType) && Object(_type_definition__WEBPACK_IMPORTED_MODULE_4__["isCompositeType"])(parentType) && !Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_2__["doTypesOverlap"])(context.getSchema(), fragType, parentType)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](typeIncompatibleAnonSpreadMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(parentType), Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(fragType)), node));
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var fragName = node.name.value;
      var fragType = getFragmentType(context, fragName);
      var parentType = context.getParentType();

      if (fragType && parentType && !Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_2__["doTypesOverlap"])(context.getSchema(), fragType, parentType)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](typeIncompatibleSpreadMessage(fragName, Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(parentType), Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(fragType)), node));
      }
    }
  };
}

function getFragmentType(context, name) {
  var frag = context.getFragment(name);

  if (frag) {
    var type = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), frag.typeCondition);

    if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_4__["isCompositeType"])(type)) {
      return type;
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/PossibleTypeExtensions.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/PossibleTypeExtensions.mjs ***!
  \**************************************************************************/
/*! exports provided: extendingUnknownTypeMessage, extendingDifferentTypeKindMessage, PossibleTypeExtensions */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendingUnknownTypeMessage", function() { return extendingUnknownTypeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendingDifferentTypeKindMessage", function() { return extendingDifferentTypeKindMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibleTypeExtensions", function() { return PossibleTypeExtensions; });
/* harmony import */ var _jsutils_quotedOrList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/quotedOrList */ "./node_modules/graphql/jsutils/quotedOrList.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/suggestionList */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/predicates */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
var _defKindToExtKind;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */






function extendingUnknownTypeMessage(typeName, suggestedTypes) {
  var message = "Cannot extend type \"".concat(typeName, "\" because it is not defined.");

  if (suggestedTypes.length) {
    message += " Did you mean ".concat(Object(_jsutils_quotedOrList__WEBPACK_IMPORTED_MODULE_0__["default"])(suggestedTypes), "?");
  }

  return message;
}
function extendingDifferentTypeKindMessage(typeName, kind) {
  return "Cannot extend non-".concat(kind, " type \"").concat(typeName, "\".");
}
/**
 * Possible type extension
 *
 * A type extension is only valid if the type is defined and has the same kind.
 */

function PossibleTypeExtensions(context) {
  var schema = context.getSchema();
  var definedTypes = Object.create(null);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = context.getDocument().definitions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var def = _step.value;

      if (Object(_language_predicates__WEBPACK_IMPORTED_MODULE_4__["isTypeDefinitionNode"])(def)) {
        definedTypes[def.name.value] = def;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return {
    ScalarTypeExtension: checkExtension,
    ObjectTypeExtension: checkExtension,
    InterfaceTypeExtension: checkExtension,
    UnionTypeExtension: checkExtension,
    EnumTypeExtension: checkExtension,
    InputObjectTypeExtension: checkExtension
  };

  function checkExtension(node) {
    var typeName = node.name.value;
    var defNode = definedTypes[typeName];
    var existingType = schema && schema.getType(typeName);

    if (defNode) {
      var expectedKind = defKindToExtKind[defNode.kind];

      if (expectedKind !== node.kind) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](extendingDifferentTypeKindMessage(typeName, extensionKindToTypeName(expectedKind)), [defNode, node]));
      }
    } else if (existingType) {
      var _expectedKind = typeToExtKind(existingType);

      if (_expectedKind !== node.kind) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](extendingDifferentTypeKindMessage(typeName, extensionKindToTypeName(_expectedKind)), node));
      }
    } else {
      var allTypeNames = Object.keys(definedTypes);

      if (schema) {
        allTypeNames = allTypeNames.concat(Object.keys(schema.getTypeMap()));
      }

      var suggestedTypes = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_1__["default"])(typeName, allTypeNames);
      context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"](extendingUnknownTypeMessage(typeName, suggestedTypes), node.name));
    }
  }
}
var defKindToExtKind = (_defKindToExtKind = {}, _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_DEFINITION, _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_EXTENSION), _defKindToExtKind);

function typeToExtKind(type) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isScalarType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_EXTENSION;
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isObjectType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_EXTENSION;
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isInterfaceType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_EXTENSION;
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isUnionType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_EXTENSION;
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isEnumType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_EXTENSION;
  } else if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_5__["isInputObjectType"])(type)) {
    return _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_EXTENSION;
  }
}

function extensionKindToTypeName(kind) {
  switch (kind) {
    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_EXTENSION:
      return 'scalar';

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_EXTENSION:
      return 'object';

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_EXTENSION:
      return 'interface';

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_EXTENSION:
      return 'union';

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_EXTENSION:
      return 'enum';

    case _language_kinds__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_EXTENSION:
      return 'input object';

    default:
      return 'unknown type';
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/ProvidedRequiredArguments.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ProvidedRequiredArguments.mjs ***!
  \*****************************************************************************/
/*! exports provided: missingFieldArgMessage, missingDirectiveArgMessage, ProvidedRequiredArguments, ProvidedRequiredArgumentsOnDirectives */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingFieldArgMessage", function() { return missingFieldArgMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingDirectiveArgMessage", function() { return missingDirectiveArgMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArguments", function() { return ProvidedRequiredArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArgumentsOnDirectives", function() { return ProvidedRequiredArgumentsOnDirectives; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jsutils/keyMap */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../type/directives */ "./node_modules/graphql/type/directives.mjs");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */







function missingFieldArgMessage(fieldName, argName, type) {
  return "Field \"".concat(fieldName, "\" argument \"").concat(argName, "\" of type ") + "\"".concat(type, "\" is required, but it was not provided.");
}
function missingDirectiveArgMessage(directiveName, argName, type) {
  return "Directive \"@".concat(directiveName, "\" argument \"").concat(argName, "\" of type ") + "\"".concat(type, "\" is required, but it was not provided.");
}
/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null without a
 * default value) field arguments have been provided.
 */

function ProvidedRequiredArguments(context) {
  return _objectSpread({}, ProvidedRequiredArgumentsOnDirectives(context), {
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(fieldNode) {
        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          return false;
        }

        var argNodes = fieldNode.arguments || [];
        var argNodeMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_3__["default"])(argNodes, function (arg) {
          return arg.name.value;
        });
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = fieldDef.args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var argDef = _step.value;
            var argNode = argNodeMap[argDef.name];

            if (!argNode && Object(_type_definition__WEBPACK_IMPORTED_MODULE_4__["isRequiredArgument"])(argDef)) {
              context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](missingFieldArgMessage(fieldDef.name, argDef.name, Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(argDef.type)), fieldNode));
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  });
} // @internal

function ProvidedRequiredArgumentsOnDirectives(context) {
  var requiredArgsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives__WEBPACK_IMPORTED_MODULE_6__["specifiedDirectives"];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = definedDirectives[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var directive = _step2.value;
      requiredArgsMap[directive.name] = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_3__["default"])(directive.args.filter(_type_definition__WEBPACK_IMPORTED_MODULE_4__["isRequiredArgument"]), function (arg) {
        return arg.name;
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var astDefinitions = context.getDocument().definitions;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = astDefinitions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var def = _step3.value;

      if (def.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE_DEFINITION) {
        requiredArgsMap[def.name.value] = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_3__["default"])(def.arguments ? def.arguments.filter(isRequiredArgumentNode) : [], function (arg) {
          return arg.name.value;
        });
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return {
    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(directiveNode) {
        var directiveName = directiveNode.name.value;
        var requiredArgs = requiredArgsMap[directiveName];

        if (requiredArgs) {
          var argNodes = directiveNode.arguments || [];
          var argNodeMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_3__["default"])(argNodes, function (arg) {
            return arg.name.value;
          });

          for (var _i = 0, _Object$keys = Object.keys(requiredArgs); _i < _Object$keys.length; _i++) {
            var argName = _Object$keys[_i];

            if (!argNodeMap[argName]) {
              var argType = requiredArgs[argName].type;
              context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](missingDirectiveArgMessage(directiveName, argName, Object(_type_definition__WEBPACK_IMPORTED_MODULE_4__["isType"])(argType) ? Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_2__["default"])(argType) : Object(_language_printer__WEBPACK_IMPORTED_MODULE_5__["print"])(argType)), directiveNode));
            }
          }
        }
      }
    }
  };
}

function isRequiredArgumentNode(arg) {
  return arg.type.kind === _language_kinds__WEBPACK_IMPORTED_MODULE_1__["Kind"].NON_NULL_TYPE && arg.defaultValue == null;
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/ScalarLeafs.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ScalarLeafs.mjs ***!
  \***************************************************************/
/*! exports provided: noSubselectionAllowedMessage, requiredSubselectionMessage, ScalarLeafs */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noSubselectionAllowedMessage", function() { return noSubselectionAllowedMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredSubselectionMessage", function() { return requiredSubselectionMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalarLeafs", function() { return ScalarLeafs; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



function noSubselectionAllowedMessage(fieldName, type) {
  return "Field \"".concat(fieldName, "\" must not have a selection since ") + "type \"".concat(type, "\" has no subfields.");
}
function requiredSubselectionMessage(fieldName, type) {
  return "Field \"".concat(fieldName, "\" of type \"").concat(type, "\" must have a ") + "selection of subfields. Did you mean \"".concat(fieldName, " { ... }\"?");
}
/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */

function ScalarLeafs(context) {
  return {
    Field: function Field(node) {
      var type = context.getType();
      var selectionSet = node.selectionSet;

      if (type) {
        if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isLeafType"])(Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(type))) {
          if (selectionSet) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](noSubselectionAllowedMessage(node.name.value, Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(type)), selectionSet));
          }
        } else if (!selectionSet) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](requiredSubselectionMessage(node.name.value, Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(type)), node));
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/SingleFieldSubscriptions.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/SingleFieldSubscriptions.mjs ***!
  \****************************************************************************/
/*! exports provided: singleFieldOnlyMessage, SingleFieldSubscriptions */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleFieldOnlyMessage", function() { return singleFieldOnlyMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleFieldSubscriptions", function() { return SingleFieldSubscriptions; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function singleFieldOnlyMessage(name) {
  return (name ? "Subscription \"".concat(name, "\" ") : 'Anonymous Subscription ') + 'must select only one top level field.';
}
/**
 * Subscriptions must only include one field.
 *
 * A GraphQL subscription is valid only if it contains a single root field.
 */

function SingleFieldSubscriptions(context) {
  return {
    OperationDefinition: function OperationDefinition(node) {
      if (node.operation === 'subscription') {
        if (node.selectionSet.selections.length !== 1) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](singleFieldOnlyMessage(node.name && node.name.value), node.selectionSet.selections.slice(1)));
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueArgumentNames.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueArgumentNames.mjs ***!
  \***********************************************************************/
/*! exports provided: duplicateArgMessage, UniqueArgumentNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateArgMessage", function() { return duplicateArgMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueArgumentNames", function() { return UniqueArgumentNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateArgMessage(argName) {
  return "There can be only one argument named \"".concat(argName, "\".");
}
/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 */

function UniqueArgumentNames(context) {
  var knownArgNames = Object.create(null);
  return {
    Field: function Field() {
      knownArgNames = Object.create(null);
    },
    Directive: function Directive() {
      knownArgNames = Object.create(null);
    },
    Argument: function Argument(node) {
      var argName = node.name.value;

      if (knownArgNames[argName]) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateArgMessage(argName), [knownArgNames[argName], node.name]));
      } else {
        knownArgNames[argName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueDirectiveNames.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueDirectiveNames.mjs ***!
  \************************************************************************/
/*! exports provided: duplicateDirectiveNameMessage, existedDirectiveNameMessage, UniqueDirectiveNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateDirectiveNameMessage", function() { return duplicateDirectiveNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existedDirectiveNameMessage", function() { return existedDirectiveNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectiveNames", function() { return UniqueDirectiveNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateDirectiveNameMessage(directiveName) {
  return "There can be only one directive named \"".concat(directiveName, "\".");
}
function existedDirectiveNameMessage(directiveName) {
  return "Directive \"".concat(directiveName, "\" already exists in the schema. ") + 'It cannot be redefined.';
}
/**
 * Unique directive names
 *
 * A GraphQL document is only valid if all defined directives have unique names.
 */

function UniqueDirectiveNames(context) {
  var knownDirectiveNames = Object.create(null);
  var schema = context.getSchema();
  return {
    DirectiveDefinition: function DirectiveDefinition(node) {
      var directiveName = node.name.value;

      if (schema && schema.getDirective(directiveName)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](existedDirectiveNameMessage(directiveName), node.name));
        return;
      }

      if (knownDirectiveNames[directiveName]) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateDirectiveNameMessage(directiveName), [knownDirectiveNames[directiveName], node.name]));
      } else {
        knownDirectiveNames[directiveName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocation.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueDirectivesPerLocation.mjs ***!
  \*******************************************************************************/
/*! exports provided: duplicateDirectiveMessage, UniqueDirectivesPerLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateDirectiveMessage", function() { return duplicateDirectiveMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectivesPerLocation", function() { return UniqueDirectivesPerLocation; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateDirectiveMessage(directiveName) {
  return "The directive \"".concat(directiveName, "\" can only be used once at ") + 'this location.';
}
/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all directives at a given location
 * are uniquely named.
 */

function UniqueDirectivesPerLocation(context) {
  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter: function enter(node) {
      // Flow can't refine that node.directives will only contain directives,
      // so we cast so the rest of the code is well typed.
      var directives = node.directives;

      if (directives) {
        var knownDirectives = Object.create(null);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = directives[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var directive = _step.value;
            var directiveName = directive.name.value;

            if (knownDirectives[directiveName]) {
              context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateDirectiveMessage(directiveName), [knownDirectives[directiveName], directive]));
            } else {
              knownDirectives[directiveName] = directive;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueEnumValueNames.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueEnumValueNames.mjs ***!
  \************************************************************************/
/*! exports provided: duplicateEnumValueNameMessage, existedEnumValueNameMessage, UniqueEnumValueNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateEnumValueNameMessage", function() { return duplicateEnumValueNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existedEnumValueNameMessage", function() { return existedEnumValueNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueEnumValueNames", function() { return UniqueEnumValueNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


function duplicateEnumValueNameMessage(typeName, valueName) {
  return "Enum value \"".concat(typeName, ".").concat(valueName, "\" can only be defined once.");
}
function existedEnumValueNameMessage(typeName, valueName) {
  return "Enum value \"".concat(typeName, ".").concat(valueName, "\" already exists in the schema. ") + 'It cannot also be defined in this type extension.';
}
/**
 * Unique enum value names
 *
 * A GraphQL enum type is only valid if all its values are uniquely named.
 */

function UniqueEnumValueNames(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownValueNames = Object.create(null);
  return {
    EnumTypeDefinition: checkValueUniqueness,
    EnumTypeExtension: checkValueUniqueness
  };

  function checkValueUniqueness(node) {
    var typeName = node.name.value;

    if (!knownValueNames[typeName]) {
      knownValueNames[typeName] = Object.create(null);
    }

    if (node.values) {
      var valueNames = knownValueNames[typeName];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = node.values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var valueDef = _step.value;
          var valueName = valueDef.name.value;
          var existingType = existingTypeMap[typeName];

          if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_1__["isEnumType"])(existingType) && existingType.getValue(valueName)) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](existedEnumValueNameMessage(typeName, valueName), valueDef.name));
          } else if (valueNames[valueName]) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateEnumValueNameMessage(typeName, valueName), [valueNames[valueName], valueDef.name]));
          } else {
            valueNames[valueName] = valueDef.name;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    return false;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueFieldDefinitionNames.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueFieldDefinitionNames.mjs ***!
  \******************************************************************************/
/*! exports provided: duplicateFieldDefinitionNameMessage, existedFieldDefinitionNameMessage, UniqueFieldDefinitionNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateFieldDefinitionNameMessage", function() { return duplicateFieldDefinitionNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existedFieldDefinitionNameMessage", function() { return existedFieldDefinitionNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueFieldDefinitionNames", function() { return UniqueFieldDefinitionNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


function duplicateFieldDefinitionNameMessage(typeName, fieldName) {
  return "Field \"".concat(typeName, ".").concat(fieldName, "\" can only be defined once.");
}
function existedFieldDefinitionNameMessage(typeName, fieldName) {
  return "Field \"".concat(typeName, ".").concat(fieldName, "\" already exists in the schema. ") + 'It cannot also be defined in this type extension.';
}
/**
 * Unique field definition names
 *
 * A GraphQL complex type is only valid if all its fields are uniquely named.
 */

function UniqueFieldDefinitionNames(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownFieldNames = Object.create(null);
  return {
    InputObjectTypeDefinition: checkFieldUniqueness,
    InputObjectTypeExtension: checkFieldUniqueness,
    InterfaceTypeDefinition: checkFieldUniqueness,
    InterfaceTypeExtension: checkFieldUniqueness,
    ObjectTypeDefinition: checkFieldUniqueness,
    ObjectTypeExtension: checkFieldUniqueness
  };

  function checkFieldUniqueness(node) {
    var typeName = node.name.value;

    if (!knownFieldNames[typeName]) {
      knownFieldNames[typeName] = Object.create(null);
    }

    if (node.fields) {
      var fieldNames = knownFieldNames[typeName];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = node.fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var fieldDef = _step.value;
          var fieldName = fieldDef.name.value;

          if (hasField(existingTypeMap[typeName], fieldName)) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](existedFieldDefinitionNameMessage(typeName, fieldName), fieldDef.name));
          } else if (fieldNames[fieldName]) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateFieldDefinitionNameMessage(typeName, fieldName), [fieldNames[fieldName], fieldDef.name]));
          } else {
            fieldNames[fieldName] = fieldDef.name;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    return false;
  }
}

function hasField(type, fieldName) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_1__["isObjectType"])(type) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_1__["isInterfaceType"])(type) || Object(_type_definition__WEBPACK_IMPORTED_MODULE_1__["isInputObjectType"])(type)) {
    return type.getFields()[fieldName];
  }

  return false;
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueFragmentNames.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueFragmentNames.mjs ***!
  \***********************************************************************/
/*! exports provided: duplicateFragmentNameMessage, UniqueFragmentNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateFragmentNameMessage", function() { return duplicateFragmentNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueFragmentNames", function() { return UniqueFragmentNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateFragmentNameMessage(fragName) {
  return "There can be only one fragment named \"".concat(fragName, "\".");
}
/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 */

function UniqueFragmentNames(context) {
  var knownFragmentNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var fragmentName = node.name.value;

      if (knownFragmentNames[fragmentName]) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateFragmentNameMessage(fragmentName), [knownFragmentNames[fragmentName], node.name]));
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueInputFieldNames.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueInputFieldNames.mjs ***!
  \*************************************************************************/
/*! exports provided: duplicateInputFieldMessage, UniqueInputFieldNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateInputFieldMessage", function() { return duplicateInputFieldMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueInputFieldNames", function() { return UniqueInputFieldNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateInputFieldMessage(fieldName) {
  return "There can be only one input field named \"".concat(fieldName, "\".");
}
/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 */

function UniqueInputFieldNames(context) {
  var knownNameStack = [];
  var knownNames = Object.create(null);
  return {
    ObjectValue: {
      enter: function enter() {
        knownNameStack.push(knownNames);
        knownNames = Object.create(null);
      },
      leave: function leave() {
        knownNames = knownNameStack.pop();
      }
    },
    ObjectField: function ObjectField(node) {
      var fieldName = node.name.value;

      if (knownNames[fieldName]) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateInputFieldMessage(fieldName), [knownNames[fieldName], node.name]));
      } else {
        knownNames[fieldName] = node.name;
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueOperationNames.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueOperationNames.mjs ***!
  \************************************************************************/
/*! exports provided: duplicateOperationNameMessage, UniqueOperationNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateOperationNameMessage", function() { return duplicateOperationNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationNames", function() { return UniqueOperationNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateOperationNameMessage(operationName) {
  return "There can be only one operation named \"".concat(operationName, "\".");
}
/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 */

function UniqueOperationNames(context) {
  var knownOperationNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition(node) {
      var operationName = node.name;

      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateOperationNameMessage(operationName.value), [knownOperationNames[operationName.value], operationName]));
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }

      return false;
    },
    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueOperationTypes.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueOperationTypes.mjs ***!
  \************************************************************************/
/*! exports provided: duplicateOperationTypeMessage, existedOperationTypeMessage, UniqueOperationTypes */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateOperationTypeMessage", function() { return duplicateOperationTypeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existedOperationTypeMessage", function() { return existedOperationTypeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationTypes", function() { return UniqueOperationTypes; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateOperationTypeMessage(operation) {
  return "There can be only one ".concat(operation, " type in schema.");
}
function existedOperationTypeMessage(operation) {
  return "Type for ".concat(operation, " already defined in the schema. ") + 'It cannot be redefined.';
}
/**
 * Unique operation types
 *
 * A GraphQL document is only valid if it has only one type per operation.
 */

function UniqueOperationTypes(context) {
  var schema = context.getSchema();
  var definedOperationTypes = Object.create(null);
  var existingOperationTypes = schema ? {
    query: schema.getQueryType(),
    mutation: schema.getMutationType(),
    subscription: schema.getSubscriptionType()
  } : {};
  return {
    SchemaDefinition: checkOperationTypes,
    SchemaExtension: checkOperationTypes
  };

  function checkOperationTypes(node) {
    if (node.operationTypes) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (node.operationTypes || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var operationType = _step.value;
          var operation = operationType.operation;
          var alreadyDefinedOperationType = definedOperationTypes[operation];

          if (existingOperationTypes[operation]) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](existedOperationTypeMessage(operation), operationType));
          } else if (alreadyDefinedOperationType) {
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateOperationTypeMessage(operation), [alreadyDefinedOperationType, operationType]));
          } else {
            definedOperationTypes[operation] = operationType;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    return false;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueTypeNames.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueTypeNames.mjs ***!
  \*******************************************************************/
/*! exports provided: duplicateTypeNameMessage, existedTypeNameMessage, UniqueTypeNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateTypeNameMessage", function() { return duplicateTypeNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existedTypeNameMessage", function() { return existedTypeNameMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueTypeNames", function() { return UniqueTypeNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateTypeNameMessage(typeName) {
  return "There can be only one type named \"".concat(typeName, "\".");
}
function existedTypeNameMessage(typeName) {
  return "Type \"".concat(typeName, "\" already exists in the schema. ") + 'It cannot also be defined in this type definition.';
}
/**
 * Unique type names
 *
 * A GraphQL document is only valid if all defined types have unique names.
 */

function UniqueTypeNames(context) {
  var knownTypeNames = Object.create(null);
  var schema = context.getSchema();
  return {
    ScalarTypeDefinition: checkTypeName,
    ObjectTypeDefinition: checkTypeName,
    InterfaceTypeDefinition: checkTypeName,
    UnionTypeDefinition: checkTypeName,
    EnumTypeDefinition: checkTypeName,
    InputObjectTypeDefinition: checkTypeName
  };

  function checkTypeName(node) {
    var typeName = node.name.value;

    if (schema && schema.getType(typeName)) {
      context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](existedTypeNameMessage(typeName), node.name));
      return;
    }

    if (knownTypeNames[typeName]) {
      context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateTypeNameMessage(typeName), [knownTypeNames[typeName], node.name]));
    } else {
      knownTypeNames[typeName] = node.name;
    }

    return false;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueVariableNames.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueVariableNames.mjs ***!
  \***********************************************************************/
/*! exports provided: duplicateVariableMessage, UniqueVariableNames */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateVariableMessage", function() { return duplicateVariableMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueVariableNames", function() { return UniqueVariableNames; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function duplicateVariableMessage(variableName) {
  return "There can be only one variable named \"".concat(variableName, "\".");
}
/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */

function UniqueVariableNames(context) {
  var knownVariableNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      knownVariableNames = Object.create(null);
    },
    VariableDefinition: function VariableDefinition(node) {
      var variableName = node.variable.name.value;

      if (knownVariableNames[variableName]) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](duplicateVariableMessage(variableName), [knownVariableNames[variableName], node.variable.name]));
      } else {
        knownVariableNames[variableName] = node.variable.name;
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/ValuesOfCorrectType.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ValuesOfCorrectType.mjs ***!
  \***********************************************************************/
/*! exports provided: badValueMessage, requiredFieldMessage, unknownFieldMessage, ValuesOfCorrectType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badValueMessage", function() { return badValueMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFieldMessage", function() { return requiredFieldMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownFieldMessage", function() { return unknownFieldMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesOfCorrectType", function() { return ValuesOfCorrectType; });
/* harmony import */ var _polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfills/objectValues */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../jsutils/isInvalid */ "./node_modules/graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _jsutils_keyMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../jsutils/keyMap */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_orList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../jsutils/orList */ "./node_modules/graphql/jsutils/orList.mjs");
/* harmony import */ var _jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../jsutils/suggestionList */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */









function badValueMessage(typeName, valueName, message) {
  return "Expected type ".concat(typeName, ", found ").concat(valueName) + (message ? "; ".concat(message) : '.');
}
function requiredFieldMessage(typeName, fieldName, fieldTypeName) {
  return "Field ".concat(typeName, ".").concat(fieldName, " of required type ") + "".concat(fieldTypeName, " was not provided.");
}
function unknownFieldMessage(typeName, fieldName, message) {
  return "Field \"".concat(fieldName, "\" is not defined by type ").concat(typeName) + (message ? "; ".concat(message) : '.');
}
/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 */

function ValuesOfCorrectType(context) {
  return {
    NullValue: function NullValue(node) {
      var type = context.getInputType();

      if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isNonNullType"])(type)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](badValueMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(type), Object(_language_printer__WEBPACK_IMPORTED_MODULE_2__["print"])(node)), node));
      }
    },
    ListValue: function ListValue(node) {
      // Note: TypeInfo will traverse into a list's item type, so look to the
      // parent input type to check if it is a list.
      var type = Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["getNullableType"])(context.getParentInputType());

      if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isListType"])(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      }
    },
    ObjectValue: function ObjectValue(node) {
      var type = Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["getNamedType"])(context.getInputType());

      if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isInputObjectType"])(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      } // Ensure every required field exists.


      var fieldNodeMap = Object(_jsutils_keyMap__WEBPACK_IMPORTED_MODULE_6__["default"])(node.fields, function (field) {
        return field.name.value;
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object(_polyfills_objectValues__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var fieldDef = _step.value;
          var fieldNode = fieldNodeMap[fieldDef.name];

          if (!fieldNode && Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isRequiredInputField"])(fieldDef)) {
            var typeStr = Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(fieldDef.type);
            context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](requiredFieldMessage(type.name, fieldDef.name, typeStr), node));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    ObjectField: function ObjectField(node) {
      var parentType = Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["getNamedType"])(context.getParentInputType());
      var fieldType = context.getInputType();

      if (!fieldType && Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isInputObjectType"])(parentType)) {
        var suggestions = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_8__["default"])(node.name.value, Object.keys(parentType.getFields()));
        var didYouMean = suggestions.length !== 0 ? "Did you mean ".concat(Object(_jsutils_orList__WEBPACK_IMPORTED_MODULE_7__["default"])(suggestions), "?") : undefined;
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](unknownFieldMessage(parentType.name, node.name.value, didYouMean), node));
      }
    },
    EnumValue: function EnumValue(node) {
      var type = Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["getNamedType"])(context.getInputType());

      if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isEnumType"])(type)) {
        isValidScalar(context, node);
      } else if (!type.getValue(node.value)) {
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](badValueMessage(type.name, Object(_language_printer__WEBPACK_IMPORTED_MODULE_2__["print"])(node), enumTypeSuggestion(type, node)), node));
      }
    },
    IntValue: function IntValue(node) {
      return isValidScalar(context, node);
    },
    FloatValue: function FloatValue(node) {
      return isValidScalar(context, node);
    },
    StringValue: function StringValue(node) {
      return isValidScalar(context, node);
    },
    BooleanValue: function BooleanValue(node) {
      return isValidScalar(context, node);
    }
  };
}
/**
 * Any value literal may be a valid representation of a Scalar, depending on
 * that scalar type.
 */

function isValidScalar(context, node) {
  // Report any error at the full type expected by the location.
  var locationType = context.getInputType();

  if (!locationType) {
    return;
  }

  var type = Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["getNamedType"])(locationType);

  if (!Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isScalarType"])(type)) {
    context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](badValueMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(locationType), Object(_language_printer__WEBPACK_IMPORTED_MODULE_2__["print"])(node), enumTypeSuggestion(type, node)), node));
    return;
  } // Scalars determine if a literal value is valid via parseLiteral() which
  // may throw or return an invalid value to indicate failure.


  try {
    var parseResult = type.parseLiteral(node, undefined
    /* variables */
    );

    if (Object(_jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_5__["default"])(parseResult)) {
      context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](badValueMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(locationType), Object(_language_printer__WEBPACK_IMPORTED_MODULE_2__["print"])(node)), node));
    }
  } catch (error) {
    // Ensure a reference to the original error is maintained.
    context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](badValueMessage(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_4__["default"])(locationType), Object(_language_printer__WEBPACK_IMPORTED_MODULE_2__["print"])(node), error.message), node, undefined, undefined, undefined, error));
  }
}

function enumTypeSuggestion(type, node) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isEnumType"])(type)) {
    var suggestions = Object(_jsutils_suggestionList__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_language_printer__WEBPACK_IMPORTED_MODULE_2__["print"])(node), type.getValues().map(function (value) {
      return value.name;
    }));

    if (suggestions.length !== 0) {
      return "Did you mean the enum value ".concat(Object(_jsutils_orList__WEBPACK_IMPORTED_MODULE_7__["default"])(suggestions), "?");
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/VariablesAreInputTypes.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/VariablesAreInputTypes.mjs ***!
  \**************************************************************************/
/*! exports provided: nonInputTypeOnVarMessage, VariablesAreInputTypes */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonInputTypeOnVarMessage", function() { return nonInputTypeOnVarMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesAreInputTypes", function() { return VariablesAreInputTypes; });
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/typeFromAST */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




function nonInputTypeOnVarMessage(variableName, typeName) {
  return "Variable \"$".concat(variableName, "\" cannot be non-input type \"").concat(typeName, "\".");
}
/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 */

function VariablesAreInputTypes(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var type = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), node.type); // If the variable type is not an input type, return an error.

      if (type && !Object(_type_definition__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(type)) {
        var variableName = node.variable.name.value;
        context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](nonInputTypeOnVarMessage(variableName, Object(_language_printer__WEBPACK_IMPORTED_MODULE_1__["print"])(node.type)), node.type));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/VariablesInAllowedPosition.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/VariablesInAllowedPosition.mjs ***!
  \******************************************************************************/
/*! exports provided: badVarPosMessage, VariablesInAllowedPosition */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badVarPosMessage", function() { return badVarPosMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesInAllowedPosition", function() { return VariablesInAllowedPosition; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/definition */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeComparators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/typeComparators */ "./node_modules/graphql/utilities/typeComparators.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/typeFromAST */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */






function badVarPosMessage(varName, varType, expectedType) {
  return "Variable \"$".concat(varName, "\" of type \"").concat(varType, "\" used in ") + "position expecting type \"".concat(expectedType, "\".");
}
/**
 * Variables passed to field arguments conform to type
 */

function VariablesInAllowedPosition(context) {
  var varDefMap = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        varDefMap = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = usages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref2 = _step.value;
            var node = _ref2.node;
            var type = _ref2.type;
            var defaultValue = _ref2.defaultValue;
            var varName = node.name.value;
            var varDef = varDefMap[varName];

            if (varDef && type) {
              // A var type is allowed if it is the same or more strict (e.g. is
              // a subtype of) than the expected type. It can be more strict if
              // the variable type is non-null when the expected type is nullable.
              // If both are list types, the variable item type can be more strict
              // than the expected item type (contravariant).
              var schema = context.getSchema();
              var varType = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_5__["typeFromAST"])(schema, varDef.type);

              if (varType && !allowedVariableUsage(schema, varType, varDef.defaultValue, type, defaultValue)) {
                context.reportError(new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](badVarPosMessage(varName, Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(varType), Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(type)), [varDef, node]));
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    }
  };
}
/**
 * Returns true if the variable is allowed in the location it was found,
 * which includes considering if default values exist for either the variable
 * or the location at which it is located.
 */

function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isNonNullType"])(locationType) && !Object(_type_definition__WEBPACK_IMPORTED_MODULE_3__["isNonNullType"])(varType)) {
    var hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== _language_kinds__WEBPACK_IMPORTED_MODULE_2__["Kind"].NULL;
    var hasLocationDefaultValue = locationDefaultValue !== undefined;

    if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
      return false;
    }

    var nullableLocationType = locationType.ofType;
    return Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_4__["isTypeSubTypeOf"])(schema, varType, nullableLocationType);
  }

  return Object(_utilities_typeComparators__WEBPACK_IMPORTED_MODULE_4__["isTypeSubTypeOf"])(schema, varType, locationType);
}


/***/ }),

/***/ "./node_modules/graphql/validation/specifiedRules.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/validation/specifiedRules.mjs ***!
  \************************************************************/
/*! exports provided: specifiedRules, specifiedSDLRules */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedRules", function() { return specifiedRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedSDLRules", function() { return specifiedSDLRules; });
/* harmony import */ var _rules_ExecutableDefinitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules/ExecutableDefinitions */ "./node_modules/graphql/validation/rules/ExecutableDefinitions.mjs");
/* harmony import */ var _rules_UniqueOperationNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules/UniqueOperationNames */ "./node_modules/graphql/validation/rules/UniqueOperationNames.mjs");
/* harmony import */ var _rules_LoneAnonymousOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules/LoneAnonymousOperation */ "./node_modules/graphql/validation/rules/LoneAnonymousOperation.mjs");
/* harmony import */ var _rules_SingleFieldSubscriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rules/SingleFieldSubscriptions */ "./node_modules/graphql/validation/rules/SingleFieldSubscriptions.mjs");
/* harmony import */ var _rules_KnownTypeNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rules/KnownTypeNames */ "./node_modules/graphql/validation/rules/KnownTypeNames.mjs");
/* harmony import */ var _rules_FragmentsOnCompositeTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rules/FragmentsOnCompositeTypes */ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypes.mjs");
/* harmony import */ var _rules_VariablesAreInputTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules/VariablesAreInputTypes */ "./node_modules/graphql/validation/rules/VariablesAreInputTypes.mjs");
/* harmony import */ var _rules_ScalarLeafs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/ScalarLeafs */ "./node_modules/graphql/validation/rules/ScalarLeafs.mjs");
/* harmony import */ var _rules_FieldsOnCorrectType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules/FieldsOnCorrectType */ "./node_modules/graphql/validation/rules/FieldsOnCorrectType.mjs");
/* harmony import */ var _rules_UniqueFragmentNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/UniqueFragmentNames */ "./node_modules/graphql/validation/rules/UniqueFragmentNames.mjs");
/* harmony import */ var _rules_KnownFragmentNames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules/KnownFragmentNames */ "./node_modules/graphql/validation/rules/KnownFragmentNames.mjs");
/* harmony import */ var _rules_NoUnusedFragments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rules/NoUnusedFragments */ "./node_modules/graphql/validation/rules/NoUnusedFragments.mjs");
/* harmony import */ var _rules_PossibleFragmentSpreads__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rules/PossibleFragmentSpreads */ "./node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs");
/* harmony import */ var _rules_NoFragmentCycles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rules/NoFragmentCycles */ "./node_modules/graphql/validation/rules/NoFragmentCycles.mjs");
/* harmony import */ var _rules_UniqueVariableNames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/UniqueVariableNames */ "./node_modules/graphql/validation/rules/UniqueVariableNames.mjs");
/* harmony import */ var _rules_NoUndefinedVariables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rules/NoUndefinedVariables */ "./node_modules/graphql/validation/rules/NoUndefinedVariables.mjs");
/* harmony import */ var _rules_NoUnusedVariables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rules/NoUnusedVariables */ "./node_modules/graphql/validation/rules/NoUnusedVariables.mjs");
/* harmony import */ var _rules_KnownDirectives__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rules/KnownDirectives */ "./node_modules/graphql/validation/rules/KnownDirectives.mjs");
/* harmony import */ var _rules_UniqueDirectivesPerLocation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rules/UniqueDirectivesPerLocation */ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocation.mjs");
/* harmony import */ var _rules_KnownArgumentNames__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rules/KnownArgumentNames */ "./node_modules/graphql/validation/rules/KnownArgumentNames.mjs");
/* harmony import */ var _rules_UniqueArgumentNames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rules/UniqueArgumentNames */ "./node_modules/graphql/validation/rules/UniqueArgumentNames.mjs");
/* harmony import */ var _rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rules/ValuesOfCorrectType */ "./node_modules/graphql/validation/rules/ValuesOfCorrectType.mjs");
/* harmony import */ var _rules_ProvidedRequiredArguments__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rules/ProvidedRequiredArguments */ "./node_modules/graphql/validation/rules/ProvidedRequiredArguments.mjs");
/* harmony import */ var _rules_VariablesInAllowedPosition__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rules/VariablesInAllowedPosition */ "./node_modules/graphql/validation/rules/VariablesInAllowedPosition.mjs");
/* harmony import */ var _rules_OverlappingFieldsCanBeMerged__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rules/OverlappingFieldsCanBeMerged */ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs");
/* harmony import */ var _rules_UniqueInputFieldNames__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rules/UniqueInputFieldNames */ "./node_modules/graphql/validation/rules/UniqueInputFieldNames.mjs");
/* harmony import */ var _rules_LoneSchemaDefinition__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rules/LoneSchemaDefinition */ "./node_modules/graphql/validation/rules/LoneSchemaDefinition.mjs");
/* harmony import */ var _rules_UniqueOperationTypes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rules/UniqueOperationTypes */ "./node_modules/graphql/validation/rules/UniqueOperationTypes.mjs");
/* harmony import */ var _rules_UniqueTypeNames__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rules/UniqueTypeNames */ "./node_modules/graphql/validation/rules/UniqueTypeNames.mjs");
/* harmony import */ var _rules_UniqueEnumValueNames__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rules/UniqueEnumValueNames */ "./node_modules/graphql/validation/rules/UniqueEnumValueNames.mjs");
/* harmony import */ var _rules_UniqueFieldDefinitionNames__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rules/UniqueFieldDefinitionNames */ "./node_modules/graphql/validation/rules/UniqueFieldDefinitionNames.mjs");
/* harmony import */ var _rules_UniqueDirectiveNames__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rules/UniqueDirectiveNames */ "./node_modules/graphql/validation/rules/UniqueDirectiveNames.mjs");
/* harmony import */ var _rules_PossibleTypeExtensions__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./rules/PossibleTypeExtensions */ "./node_modules/graphql/validation/rules/PossibleTypeExtensions.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// Spec Section: "Executable Definitions"
 // Spec Section: "Operation Name Uniqueness"

 // Spec Section: "Lone Anonymous Operation"

 // Spec Section: "Subscriptions with Single Root Field"

 // Spec Section: "Fragment Spread Type Existence"

 // Spec Section: "Fragments on Composite Types"

 // Spec Section: "Variables are Input Types"

 // Spec Section: "Leaf Field Selections"

 // Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

 // Spec Section: "Fragment Name Uniqueness"

 // Spec Section: "Fragment spread target defined"

 // Spec Section: "Fragments must be used"

 // Spec Section: "Fragment spread is possible"

 // Spec Section: "Fragments must not form cycles"

 // Spec Section: "Variable Uniqueness"

 // Spec Section: "All Variable Used Defined"

 // Spec Section: "All Variables Used"

 // Spec Section: "Directives Are Defined"

 // Spec Section: "Directives Are Unique Per Location"

 // Spec Section: "Argument Names"

 // Spec Section: "Argument Uniqueness"

 // Spec Section: "Value Type Correctness"

 // Spec Section: "Argument Optionality"

 // Spec Section: "All Variable Usages Are Allowed"

 // Spec Section: "Field Selection Merging"

 // Spec Section: "Input Object Field Uniqueness"


/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */

var specifiedRules = [_rules_ExecutableDefinitions__WEBPACK_IMPORTED_MODULE_0__["ExecutableDefinitions"], _rules_UniqueOperationNames__WEBPACK_IMPORTED_MODULE_1__["UniqueOperationNames"], _rules_LoneAnonymousOperation__WEBPACK_IMPORTED_MODULE_2__["LoneAnonymousOperation"], _rules_SingleFieldSubscriptions__WEBPACK_IMPORTED_MODULE_3__["SingleFieldSubscriptions"], _rules_KnownTypeNames__WEBPACK_IMPORTED_MODULE_4__["KnownTypeNames"], _rules_FragmentsOnCompositeTypes__WEBPACK_IMPORTED_MODULE_5__["FragmentsOnCompositeTypes"], _rules_VariablesAreInputTypes__WEBPACK_IMPORTED_MODULE_6__["VariablesAreInputTypes"], _rules_ScalarLeafs__WEBPACK_IMPORTED_MODULE_7__["ScalarLeafs"], _rules_FieldsOnCorrectType__WEBPACK_IMPORTED_MODULE_8__["FieldsOnCorrectType"], _rules_UniqueFragmentNames__WEBPACK_IMPORTED_MODULE_9__["UniqueFragmentNames"], _rules_KnownFragmentNames__WEBPACK_IMPORTED_MODULE_10__["KnownFragmentNames"], _rules_NoUnusedFragments__WEBPACK_IMPORTED_MODULE_11__["NoUnusedFragments"], _rules_PossibleFragmentSpreads__WEBPACK_IMPORTED_MODULE_12__["PossibleFragmentSpreads"], _rules_NoFragmentCycles__WEBPACK_IMPORTED_MODULE_13__["NoFragmentCycles"], _rules_UniqueVariableNames__WEBPACK_IMPORTED_MODULE_14__["UniqueVariableNames"], _rules_NoUndefinedVariables__WEBPACK_IMPORTED_MODULE_15__["NoUndefinedVariables"], _rules_NoUnusedVariables__WEBPACK_IMPORTED_MODULE_16__["NoUnusedVariables"], _rules_KnownDirectives__WEBPACK_IMPORTED_MODULE_17__["KnownDirectives"], _rules_UniqueDirectivesPerLocation__WEBPACK_IMPORTED_MODULE_18__["UniqueDirectivesPerLocation"], _rules_KnownArgumentNames__WEBPACK_IMPORTED_MODULE_19__["KnownArgumentNames"], _rules_UniqueArgumentNames__WEBPACK_IMPORTED_MODULE_20__["UniqueArgumentNames"], _rules_ValuesOfCorrectType__WEBPACK_IMPORTED_MODULE_21__["ValuesOfCorrectType"], _rules_ProvidedRequiredArguments__WEBPACK_IMPORTED_MODULE_22__["ProvidedRequiredArguments"], _rules_VariablesInAllowedPosition__WEBPACK_IMPORTED_MODULE_23__["VariablesInAllowedPosition"], _rules_OverlappingFieldsCanBeMerged__WEBPACK_IMPORTED_MODULE_24__["OverlappingFieldsCanBeMerged"], _rules_UniqueInputFieldNames__WEBPACK_IMPORTED_MODULE_25__["UniqueInputFieldNames"]];






 // @internal

var specifiedSDLRules = [_rules_LoneSchemaDefinition__WEBPACK_IMPORTED_MODULE_26__["LoneSchemaDefinition"], _rules_UniqueOperationTypes__WEBPACK_IMPORTED_MODULE_27__["UniqueOperationTypes"], _rules_UniqueTypeNames__WEBPACK_IMPORTED_MODULE_28__["UniqueTypeNames"], _rules_UniqueEnumValueNames__WEBPACK_IMPORTED_MODULE_29__["UniqueEnumValueNames"], _rules_UniqueFieldDefinitionNames__WEBPACK_IMPORTED_MODULE_30__["UniqueFieldDefinitionNames"], _rules_UniqueDirectiveNames__WEBPACK_IMPORTED_MODULE_31__["UniqueDirectiveNames"], _rules_KnownTypeNames__WEBPACK_IMPORTED_MODULE_4__["KnownTypeNames"], _rules_KnownDirectives__WEBPACK_IMPORTED_MODULE_17__["KnownDirectives"], _rules_UniqueDirectivesPerLocation__WEBPACK_IMPORTED_MODULE_18__["UniqueDirectivesPerLocation"], _rules_PossibleTypeExtensions__WEBPACK_IMPORTED_MODULE_32__["PossibleTypeExtensions"], _rules_KnownArgumentNames__WEBPACK_IMPORTED_MODULE_19__["KnownArgumentNamesOnDirectives"], _rules_UniqueArgumentNames__WEBPACK_IMPORTED_MODULE_20__["UniqueArgumentNames"], _rules_UniqueInputFieldNames__WEBPACK_IMPORTED_MODULE_25__["UniqueInputFieldNames"], _rules_ProvidedRequiredArguments__WEBPACK_IMPORTED_MODULE_22__["ProvidedRequiredArgumentsOnDirectives"]];


/***/ }),

/***/ "./node_modules/graphql/validation/validate.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/validation/validate.mjs ***!
  \******************************************************/
/*! exports provided: validate, validateSDL, assertValidSDL, assertValidSDLExtension */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSDL", function() { return validateSDL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSDL", function() { return assertValidSDL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSDLExtension", function() { return assertValidSDLExtension; });
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _type_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/validate */ "./node_modules/graphql/type/validate.mjs");
/* harmony import */ var _utilities_TypeInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/TypeInfo */ "./node_modules/graphql/utilities/TypeInfo.mjs");
/* harmony import */ var _specifiedRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./specifiedRules */ "./node_modules/graphql/validation/specifiedRules.mjs");
/* harmony import */ var _ValidationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ValidationContext */ "./node_modules/graphql/validation/ValidationContext.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */






/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */

function validate(schema, documentAST) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _specifiedRules__WEBPACK_IMPORTED_MODULE_4__["specifiedRules"];
  var typeInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _utilities_TypeInfo__WEBPACK_IMPORTED_MODULE_3__["TypeInfo"](schema);
  !documentAST ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'Must provide document') : void 0; // If the schema used for validation is invalid, throw an error.

  Object(_type_validate__WEBPACK_IMPORTED_MODULE_2__["assertValidSchema"])(schema);
  var context = new _ValidationContext__WEBPACK_IMPORTED_MODULE_5__["ValidationContext"](schema, documentAST, typeInfo); // This uses a specialized visitor which runs multiple visitors in parallel,
  // while maintaining the visitor skip and break API.

  var visitor = Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visitInParallel"])(rules.map(function (rule) {
    return rule(context);
  })); // Visit the whole document with each instance of all provided rules.

  Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(documentAST, Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visitWithTypeInfo"])(typeInfo, visitor));
  return context.getErrors();
} // @internal

function validateSDL(documentAST, schemaToExtend) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _specifiedRules__WEBPACK_IMPORTED_MODULE_4__["specifiedSDLRules"];
  var context = new _ValidationContext__WEBPACK_IMPORTED_MODULE_5__["SDLValidationContext"](documentAST, schemaToExtend);
  var visitors = rules.map(function (rule) {
    return rule(context);
  });
  Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visit"])(documentAST, Object(_language_visitor__WEBPACK_IMPORTED_MODULE_1__["visitInParallel"])(visitors));
  return context.getErrors();
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDL(documentAST) {
  var errors = validateSDL(documentAST);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDLExtension(documentAST, schema) {
  var errors = validateSDL(documentAST, schema);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}


/***/ }),

/***/ "./node_modules/iterall/index.mjs":
/*!****************************************!*\
  !*** ./node_modules/iterall/index.mjs ***!
  \****************************************/
/*! exports provided: $$iterator, isIterable, isArrayLike, isCollection, getIterator, getIteratorMethod, createIterator, forEach, $$asyncIterator, isAsyncIterable, getAsyncIterator, getAsyncIteratorMethod, createAsyncIterator, forAwaitEach */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCollection", function() { return isCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIterator", function() { return getIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIteratorMethod", function() { return getIteratorMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIterator", function() { return createIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$asyncIterator", function() { return $$asyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncIterable", function() { return isAsyncIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAsyncIterator", function() { return getAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAsyncIteratorMethod", function() { return getAsyncIteratorMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncIterator", function() { return createAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAwaitEach", function() { return forAwaitEach; });
/**
 * Copyright (c) 2016, Lee Byron
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @ignore
 */

/**
 * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
 * is a *protocol* which describes a standard way to produce a sequence of
 * values, typically the values of the Iterable represented by this Iterator.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterator
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator|MDN Iteration protocols}
 */

/**
 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * their iteration behavior, such as what values are looped over in a
 * [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
 * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
 * implement the Iterable protocol, including `Array` and `Map`.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterable
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable|MDN Iteration protocols}
 */

// In ES2015 environments, Symbol exists
var SYMBOL /*: any */ = typeof Symbol === 'function' ? Symbol : void 0

// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
var SYMBOL_ITERATOR = SYMBOL && SYMBOL.iterator

/**
 * A property name to be used as the name of an Iterable's method responsible
 * for producing an Iterator, referred to as `@@iterator`. Typically represents
 * the value `Symbol.iterator` but falls back to the string `"@@iterator"` when
 * `Symbol.iterator` is not defined.
 *
 * Use `$$iterator` for defining new Iterables instead of `Symbol.iterator`,
 * but do not use it for accessing existing Iterables, instead use
 * {@link getIterator} or {@link isIterable}.
 *
 * @example
 *
 * var $$iterator = require('iterall').$$iterator
 *
 * function Counter (to) {
 *   this.to = to
 * }
 *
 * Counter.prototype[$$iterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       if (this.num >= this.to) {
 *         return { value: undefined, done: true }
 *       }
 *       return { value: this.num++, done: false }
 *     }
 *   }
 * }
 *
 * var counter = new Counter(3)
 * for (var number of counter) {
 *   console.log(number) // 0 ... 1 ... 2
 * }
 *
 * @type {Symbol|string}
 */
/*:: declare export var $$iterator: '@@iterator'; */
var $$iterator = SYMBOL_ITERATOR || '@@iterator'

/**
 * Returns true if the provided object implements the Iterator protocol via
 * either implementing a `Symbol.iterator` or `"@@iterator"` method.
 *
 * @example
 *
 * var isIterable = require('iterall').isIterable
 * isIterable([ 1, 2, 3 ]) // true
 * isIterable('ABC') // true
 * isIterable({ length: 1, 0: 'Alpha' }) // false
 * isIterable({ key: 'value' }) // false
 * isIterable(new Map()) // true
 *
 * @param obj
 *   A value which might implement the Iterable protocol.
 * @return {boolean} true if Iterable.
 */
/*:: declare export function isIterable(obj: any): boolean; */
function isIterable(obj) {
  return !!getIteratorMethod(obj)
}

/**
 * Returns true if the provided object implements the Array-like protocol via
 * defining a positive-integer `length` property.
 *
 * @example
 *
 * var isArrayLike = require('iterall').isArrayLike
 * isArrayLike([ 1, 2, 3 ]) // true
 * isArrayLike('ABC') // true
 * isArrayLike({ length: 1, 0: 'Alpha' }) // true
 * isArrayLike({ key: 'value' }) // false
 * isArrayLike(new Map()) // false
 *
 * @param obj
 *   A value which might implement the Array-like protocol.
 * @return {boolean} true if Array-like.
 */
/*:: declare export function isArrayLike(obj: any): boolean; */
function isArrayLike(obj) {
  var length = obj != null && obj.length
  return typeof length === 'number' && length >= 0 && length % 1 === 0
}

/**
 * Returns true if the provided object is an Object (i.e. not a string literal)
 * and is either Iterable or Array-like.
 *
 * This may be used in place of [Array.isArray()][isArray] to determine if an
 * object should be iterated-over. It always excludes string literals and
 * includes Arrays (regardless of if it is Iterable). It also includes other
 * Array-like objects such as NodeList, TypedArray, and Buffer.
 *
 * @example
 *
 * var isCollection = require('iterall').isCollection
 * isCollection([ 1, 2, 3 ]) // true
 * isCollection('ABC') // false
 * isCollection({ length: 1, 0: 'Alpha' }) // true
 * isCollection({ key: 'value' }) // false
 * isCollection(new Map()) // true
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 * if (isCollection(obj)) {
 *   forEach(obj, function (value) {
 *     console.log(value)
 *   })
 * }
 *
 * @param obj
 *   An Object value which might implement the Iterable or Array-like protocols.
 * @return {boolean} true if Iterable or Array-like Object.
 */
/*:: declare export function isCollection(obj: any): boolean; */
function isCollection(obj) {
  return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj))
}

/**
 * If the provided object implements the Iterator protocol, its Iterator object
 * is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getIterator = require('iterall').getIterator
 * var iterator = getIterator([ 1, 2, 3 ])
 * iterator.next() // { value: 1, done: false }
 * iterator.next() // { value: 2, done: false }
 * iterator.next() // { value: 3, done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which is the source of an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
/*:: declare export var getIterator:
  & (<+TValue>(iterable: Iterable<TValue>) => Iterator<TValue>)
  & ((iterable: mixed) => void | Iterator<mixed>); */
function getIterator(iterable) {
  var method = getIteratorMethod(iterable)
  if (method) {
    return method.call(iterable)
  }
}

/**
 * If the provided object implements the Iterator protocol, the method
 * responsible for producing its Iterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getIteratorMethod = require('iterall').getIteratorMethod
 * var myArray = [ 1, 2, 3 ]
 * var method = getIteratorMethod(myArray)
 * if (method) {
 *   var iterator = method.call(myArray)
 * }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which defines an `@@iterator` method.
 * @return {function(): Iterator<T>} `@@iterator` method.
 */
/*:: declare export var getIteratorMethod:
  & (<+TValue>(iterable: Iterable<TValue>) => (() => Iterator<TValue>))
  & ((iterable: mixed) => (void | (() => Iterator<mixed>))); */
function getIteratorMethod(iterable) {
  if (iterable != null) {
    var method =
      (SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR]) || iterable['@@iterator']
    if (typeof method === 'function') {
      return method
    }
  }
}

/**
 * Similar to {@link getIterator}, this method returns a new Iterator given an
 * Iterable. However it will also create an Iterator for a non-Iterable
 * Array-like collection, such as Array in a non-ES2015 environment.
 *
 * `createIterator` is complimentary to `forEach`, but allows a "pull"-based
 * iteration as opposed to `forEach`'s "push"-based iteration.
 *
 * `createIterator` produces an Iterator for Array-likes with the same behavior
 * as ArrayIteratorPrototype described in the ECMAScript specification, and
 * does *not* skip over "holes".
 *
 * @example
 *
 * var createIterator = require('iterall').createIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createIterator(myArraylike)
 * iterator.next() // { value: 'Alpha', done: false }
 * iterator.next() // { value: 'Bravo', done: false }
 * iterator.next() // { value: 'Charlie', done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   An Iterable or Array-like object to produce an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
/*:: declare export var createIterator:
  & (<+TValue>(collection: Iterable<TValue>) => Iterator<TValue>)
  & ((collection: {length: number}) => Iterator<mixed>)
  & ((collection: mixed) => (void | Iterator<mixed>)); */
function createIterator(collection) {
  if (collection != null) {
    var iterator = getIterator(collection)
    if (iterator) {
      return iterator
    }
    if (isArrayLike(collection)) {
      return new ArrayLikeIterator(collection)
    }
  }
}

// When the object provided to `createIterator` is not Iterable but is
// Array-like, this simple Iterator is created.
function ArrayLikeIterator(obj) {
  this._o = obj
  this._i = 0
}

// Note: all Iterators are themselves Iterable.
ArrayLikeIterator.prototype[$$iterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
ArrayLikeIterator.prototype.next = function() {
  if (this._o === void 0 || this._i >= this._o.length) {
    this._o = void 0
    return { value: void 0, done: true }
  }
  return { value: this._o[this._i++], done: false }
}

/**
 * Given an object which either implements the Iterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forEach` where you would expect to use a `for ... of` loop in ES6.
 * However `forEach` adheres to the behavior of [Array#forEach][] described in
 * the ECMAScript specification, skipping over "holes" in Array-likes. It will
 * also delegate to a `forEach` method on `collection` if one is defined,
 * ensuring native performance for `Arrays`.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * Note: providing an infinite Iterator to forEach will produce an error.
 *
 * [Array#forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 *
 * forEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES6:
 * for (let value of myIterable) {
 *   console.log(value)
 * }
 *
 * // Any JavaScript environment:
 * forEach(myIterable, function (value) {
 *   console.log(value)
 * })
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   The Iterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
/*:: declare export var forEach:
  & (<+TValue, TCollection: Iterable<TValue>>(
      collection: TCollection,
      callbackFn: (value: TValue, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => void)
  & (<TCollection: {length: number}>(
      collection: TCollection,
      callbackFn: (value: mixed, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => void); */
function forEach(collection, callback, thisArg) {
  if (collection != null) {
    if (typeof collection.forEach === 'function') {
      return collection.forEach(callback, thisArg)
    }
    var i = 0
    var iterator = getIterator(collection)
    if (iterator) {
      var step
      while (!(step = iterator.next()).done) {
        callback.call(thisArg, step.value, i++, collection)
        // Infinite Iterators could cause forEach to run forever.
        // After a very large number of iterations, produce an error.
        /* istanbul ignore if */
        if (i > 9999999) {
          throw new TypeError('Near-infinite iteration.')
        }
      }
    } else if (isArrayLike(collection)) {
      for (; i < collection.length; i++) {
        if (collection.hasOwnProperty(i)) {
          callback.call(thisArg, collection[i], i, collection)
        }
      }
    }
  }
}

/////////////////////////////////////////////////////
//                                                 //
//                 ASYNC ITERATORS                 //
//                                                 //
/////////////////////////////////////////////////////

/**
 * [AsyncIterable](https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * an asynchronous iteration behavior, such as what values are looped over in
 * a [`for-await-of`](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements)
 * loop or `iterall`'s {@link forAwaitEach} function.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterable
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface|Async Iteration Proposal}
 * @template T The type of each iterated value
 * @property {function (): AsyncIterator<T>} Symbol.asyncIterator
 *   A method which produces an AsyncIterator for this AsyncIterable.
 */

/**
 * [AsyncIterator](https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface)
 * is a *protocol* which describes a standard way to produce and consume an
 * asynchronous sequence of values, typically the values of the
 * {@link AsyncIterable} represented by this {@link AsyncIterator}.
 *
 * AsyncIterator is similar to Observable or Stream. Like an {@link Iterator} it
 * also as a `next()` method, however instead of an IteratorResult,
 * calling this method returns a {@link Promise} for a IteratorResult.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterator
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface|Async Iteration Proposal}
 */

// In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
var SYMBOL_ASYNC_ITERATOR = SYMBOL && SYMBOL.asyncIterator

/**
 * A property name to be used as the name of an AsyncIterable's method
 * responsible for producing an Iterator, referred to as `@@asyncIterator`.
 * Typically represents the value `Symbol.asyncIterator` but falls back to the
 * string `"@@asyncIterator"` when `Symbol.asyncIterator` is not defined.
 *
 * Use `$$asyncIterator` for defining new AsyncIterables instead of
 * `Symbol.asyncIterator`, but do not use it for accessing existing Iterables,
 * instead use {@link getAsyncIterator} or {@link isAsyncIterable}.
 *
 * @example
 *
 * var $$asyncIterator = require('iterall').$$asyncIterator
 *
 * function Chirper (to) {
 *   this.to = to
 * }
 *
 * Chirper.prototype[$$asyncIterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       return new Promise(resolve => {
 *         if (this.num >= this.to) {
 *           resolve({ value: undefined, done: true })
 *         } else {
 *           setTimeout(() => {
 *             resolve({ value: this.num++, done: false })
 *           }, 1000)
 *         }
 *       })
 *     }
 *   }
 * }
 *
 * var chirper = new Chirper(3)
 * for await (var number of chirper) {
 *   console.log(number) // 0 ...wait... 1 ...wait... 2
 * }
 *
 * @type {Symbol|string}
 */
/*:: declare export var $$asyncIterator: '@@asyncIterator'; */
var $$asyncIterator = SYMBOL_ASYNC_ITERATOR || '@@asyncIterator'

/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
 *
 * @example
 *
 * var isAsyncIterable = require('iterall').isAsyncIterable
 * isAsyncIterable(myStream) // true
 * isAsyncIterable('ABC') // false
 *
 * @param obj
 *   A value which might implement the AsyncIterable protocol.
 * @return {boolean} true if AsyncIterable.
 */
/*:: declare export function isAsyncIterable(obj: any): boolean; */
function isAsyncIterable(obj) {
  return !!getAsyncIteratorMethod(obj)
}

/**
 * If the provided object implements the AsyncIterator protocol, its
 * AsyncIterator object is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getAsyncIterator = require('iterall').getAsyncIterator
 * var asyncIterator = getAsyncIterator(myStream)
 * asyncIterator.next().then(console.log) // { value: 1, done: false }
 * asyncIterator.next().then(console.log) // { value: 2, done: false }
 * asyncIterator.next().then(console.log) // { value: 3, done: false }
 * asyncIterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which is the source of an AsyncIterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
/*:: declare export var getAsyncIterator:
  & (<+TValue>(asyncIterable: AsyncIterable<TValue>) => AsyncIterator<TValue>)
  & ((asyncIterable: mixed) => (void | AsyncIterator<mixed>)); */
function getAsyncIterator(asyncIterable) {
  var method = getAsyncIteratorMethod(asyncIterable)
  if (method) {
    return method.call(asyncIterable)
  }
}

/**
 * If the provided object implements the AsyncIterator protocol, the method
 * responsible for producing its AsyncIterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getAsyncIteratorMethod = require('iterall').getAsyncIteratorMethod
 * var method = getAsyncIteratorMethod(myStream)
 * if (method) {
 *   var asyncIterator = method.call(myStream)
 * }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which defines an `@@asyncIterator` method.
 * @return {function(): AsyncIterator<T>} `@@asyncIterator` method.
 */
/*:: declare export var getAsyncIteratorMethod:
  & (<+TValue>(asyncIterable: AsyncIterable<TValue>) => (() => AsyncIterator<TValue>))
  & ((asyncIterable: mixed) => (void | (() => AsyncIterator<mixed>))); */
function getAsyncIteratorMethod(asyncIterable) {
  if (asyncIterable != null) {
    var method =
      (SYMBOL_ASYNC_ITERATOR && asyncIterable[SYMBOL_ASYNC_ITERATOR]) ||
      asyncIterable['@@asyncIterator']
    if (typeof method === 'function') {
      return method
    }
  }
}

/**
 * Similar to {@link getAsyncIterator}, this method returns a new AsyncIterator
 * given an AsyncIterable. However it will also create an AsyncIterator for a
 * non-async Iterable as well as non-Iterable Array-like collection, such as
 * Array in a pre-ES2015 environment.
 *
 * `createAsyncIterator` is complimentary to `forAwaitEach`, but allows a
 * buffering "pull"-based iteration as opposed to `forAwaitEach`'s
 * "push"-based iteration.
 *
 * `createAsyncIterator` produces an AsyncIterator for non-async Iterables as
 * described in the ECMAScript proposal [Async-from-Sync Iterator Objects](https://tc39.github.io/proposal-async-iteration/#sec-async-from-sync-iterator-objects).
 *
 * > Note: Creating `AsyncIterator`s requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var createAsyncIterator = require('iterall').createAsyncIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createAsyncIterator(myArraylike)
 * iterator.next().then(console.log) // { value: 'Alpha', done: false }
 * iterator.next().then(console.log) // { value: 'Bravo', done: false }
 * iterator.next().then(console.log) // { value: 'Charlie', done: false }
 * iterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<T>|{ length: number }} source
 *   An AsyncIterable, Iterable, or Array-like object to produce an Iterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
/*:: declare export var createAsyncIterator:
  & (<+TValue>(
      collection: Iterable<Promise<TValue> | TValue> | AsyncIterable<TValue>
    ) => AsyncIterator<TValue>)
  & ((collection: {length: number}) => AsyncIterator<mixed>)
  & ((collection: mixed) => (void | AsyncIterator<mixed>)); */
function createAsyncIterator(source) {
  if (source != null) {
    var asyncIterator = getAsyncIterator(source)
    if (asyncIterator) {
      return asyncIterator
    }
    var iterator = createIterator(source)
    if (iterator) {
      return new AsyncFromSyncIterator(iterator)
    }
  }
}

// When the object provided to `createAsyncIterator` is not AsyncIterable but is
// sync Iterable, this simple wrapper is created.
function AsyncFromSyncIterator(iterator) {
  this._i = iterator
}

// Note: all AsyncIterators are themselves AsyncIterable.
AsyncFromSyncIterator.prototype[$$asyncIterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
AsyncFromSyncIterator.prototype.next = function() {
  var step = this._i.next()
  return Promise.resolve(step.value).then(function(value) {
    return { value: value, done: step.done }
  })
}

/**
 * Given an object which either implements the AsyncIterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forAwaitEach` where you would expect to use a [for-await-of](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements) loop.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * > Note: Using `forAwaitEach` requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var forAwaitEach = require('iterall').forAwaitEach
 *
 * forAwaitEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES2017:
 * for await (let value of myAsyncIterable) {
 *   console.log(await doSomethingAsync(value))
 * }
 * console.log('done')
 *
 * // Any JavaScript environment:
 * forAwaitEach(myAsyncIterable, function (value) {
 *   return doSomethingAsync(value).then(console.log)
 * }).then(function () {
 *   console.log('done')
 * })
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<Promise<T> | T>|{ length: number }} source
 *   The AsyncIterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
/*:: declare export var forAwaitEach:
  & (<+TValue, TCollection: Iterable<Promise<TValue> | TValue> | AsyncIterable<TValue>>(
      collection: TCollection,
      callbackFn: (value: TValue, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => Promise<void>)
  & (<TCollection: { length: number }>(
      collection: TCollection,
      callbackFn: (value: mixed, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => Promise<void>); */
function forAwaitEach(source, callback, thisArg) {
  var asyncIterator = createAsyncIterator(source)
  if (asyncIterator) {
    var i = 0
    return new Promise(function(resolve, reject) {
      function next() {
        asyncIterator
          .next()
          .then(function(step) {
            if (!step.done) {
              Promise.resolve(callback.call(thisArg, step.value, i++, source))
                .then(next)
                .catch(reject)
            } else {
              resolve()
            }
            // Explicitly return null, silencing bluebird-style warnings.
            return null
          })
          .catch(reject)
        // Explicitly return null, silencing bluebird-style warnings.
        return null
      }
      next()
    })
  }
}


/***/ }),

/***/ "./src/components/BookOptions.js":
/*!***************************************!*\
  !*** ./src/components/BookOptions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");
/* harmony import */ var react_icons_lib_go_plus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/lib/go/plus */ "./node_modules/react-icons/lib/go/plus.js");
/* harmony import */ var react_icons_lib_go_plus__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_go_plus__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_lib_fa_trash_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/lib/fa/trash-o */ "./node_modules/react-icons/lib/fa/trash-o.js");
/* harmony import */ var react_icons_lib_fa_trash_o__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_trash_o__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_lib_go_pencil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/lib/go/pencil */ "./node_modules/react-icons/lib/go/pencil.js");
/* harmony import */ var react_icons_lib_go_pencil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_go_pencil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Styledsection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Styledsection */ "./src/components/Styledsection.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .. */ "./src/index.js");
var _jsxFileName = "/Users/TerryDag/Documents/iLearner/workspace/dhm_StyledComponent/ui/src/components/BookOptions.js";









var Books = function Books(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styledsection__WEBPACK_IMPORTED_MODULE_6__["default"], {
    marginLeft: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "books/".concat(___WEBPACK_IMPORTED_MODULE_7__["default"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bgColour: "#216F73",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_go_plus__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), "Add Title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/editbook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bgColour: "rgba(0, 217, 255, 0.735)",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_go_pencil__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), "Edit Title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bgColour: "Red",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_fa_trash_o__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), "Delete Title")) // {props.children}
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Books);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout */ "./src/components/Layout.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
var _jsxFileName = "/Users/TerryDag/Documents/iLearner/workspace/dhm_StyledComponent/ui/src/index.js";


 // import registerServiceWorker from './registerServiceWorker';

 // import fetch from 


var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_3__["default"]({
  uri: process.env.REACT_APP_GRAPHQL_URI
});

var Main = function Main() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}; // ReactDOM.render(<Main />, document.getElementById('root'));
// registerServiceWorker();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=books.js.2f6929f183c302603d91.hot-update.js.map