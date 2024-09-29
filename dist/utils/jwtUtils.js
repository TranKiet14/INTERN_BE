"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("configs");
const jwt = require("jsonwebtoken");
const jwtUtils = {
    sign: (userId, userRole) => {
        const access_token = jwt.sign({
            userId: userId,
            role: userRole,
        }, configs_1.config.jwt.secret, {
            expiresIn: configs_1.config.jwt.ttl,
        });
        return access_token;
    },
    signRefreshToken: (userId, userRole) => {
        const refresh_token = jwt.sign({
            userId: userId,
            role: userRole,
        }, configs_1.config.jwt.secret, {
            expiresIn: "1y",
        });
        return refresh_token;
    },
};
exports.default = jwtUtils;
