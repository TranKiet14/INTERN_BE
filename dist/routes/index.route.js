"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_route_1 = require("routes/category.route");
const product_route_1 = require("routes/product.route");
const city_route_1 = require("routes/city.route");
const feedback_route_1 = require("routes/feedback.route");
const logo_route_1 = require("routes/logo.route");
const question_route_1 = require("routes/question.route");
const routes = (app) => {
    app.use("/categories", category_route_1.categoryRoutes);
    app.use("/products", product_route_1.productRoutes);
    app.use("/cities", city_route_1.cityRoutes);
    app.use("/feedbacks", feedback_route_1.feedbackRoutes);
    app.use("/logos", logo_route_1.logoRoutes);
    app.use("/questions", question_route_1.questionRoutes);
};
exports.default = routes;
