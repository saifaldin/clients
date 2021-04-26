"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.MediaApi = void 0;
var base_1 = require("./base");
var index_1 = require("./index");
var API = require("./index");
var MediaApi = /** @class */ (function (_super) {
    __extends(MediaApi, _super);
    function MediaApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @summary Add the media data related to a post
     * @param {any} [file]
     * @param {string} [entityType]
     * @param {string} [entityId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    MediaApi.prototype.uploadOneMedia = function (file, entityType, entityId, options) {
        var _this = this;
        return index_1.MediaApiFp(this.configuration)
            .uploadOneMedia()
            .then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return MediaApi;
}(base_1.BaseAPI));
exports.MediaApi = MediaApi;
exports["default"] = __assign(__assign({}, API), { MediaApi: MediaApi });
