import { Express } from "express";
import { categoryRoutes } from "routes/category.route";
import { productRoutes } from "routes/product.route";
import { cityRoutes } from "routes/city.route";
import { feedbackRoutes } from "routes/feedback.route";
import { logoRoutes } from "routes/logo.route";
import { questionRoutes } from "routes/question.route"; 
const routes = (app: Express): void => {
    app.use("/categories", categoryRoutes);
    app.use("/products", productRoutes);
    app.use("/cities", cityRoutes);
    app.use("/feedbacks", feedbackRoutes);
    app.use("/logos", logoRoutes);
    app.use("/questions", questionRoutes);
}

export default routes