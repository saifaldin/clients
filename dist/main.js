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
var API = require("./index");
var axios = require("axios");
var MediaApi = /** @class */ (function (_super) {
    __extends(MediaApi, _super);
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
    function MediaApi(basePath) {
        var _this = _super.call(this) || this;
        basePath = basePath;
        return _this;
    }
    MediaApi.prototype.uploadOneMedia = function (file, entityType, entityId, options) {
        return axios["default"].get(this.basePath + "/media", { method: "POST" });
        // return MediaApiFp(this.configuration)
        //   .uploadOneMedia()
        //   .then((request) => request(this.axios, this.basePath));
    };
    return MediaApi;
}(base_1.BaseAPI));
exports.MediaApi = MediaApi;
exports["default"] = __assign(__assign({}, API), { MediaApi: MediaApi });
