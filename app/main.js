/**
 * Created by Jeremy on 2016-05-22.
 */
"use strict";
// Imports for loading & configuring the in-memory web api
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var in_memory_backend_service_1 = require('angular2-in-memory-web-api/in-memory-backend.service');
var in_memory_data_service_1 = require('./in-memory-data.service');
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_2.HTTP_PROVIDERS,
    core_1.provide(http_1.XHRBackend, { useClass: in_memory_backend_service_1.InMemoryBackendService }),
    core_1.provide(in_memory_backend_service_1.SEED_DATA, { useClass: in_memory_data_service_1.InMemoryDataService }) // in-mem server data
]);
//# sourceMappingURL=main.js.map