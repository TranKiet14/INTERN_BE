"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiUtils = {
    getApiName: (originalUrl) => {
        const parts = originalUrl.split("/");
        if (parts[0] == "") {
            const result = parts[1];
            return result;
        }
        return null;
    },
};
exports.default = apiUtils;
