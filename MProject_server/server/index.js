import express from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import models, { sequelize } from "./models/init-models";
import routes from "./Routes/indexRoutes";
import routeActionsCtrl from "./controller/routeActionsCtrl";

const port = process.env.port || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(async (req, res, next) => {
  req.context = { models };
  next();
});

app.use("/program", routes.ProgRoute);
app.use("/courses", routes.CorsesRoute);
app.use("/contents", routes.ContentRoute);
app.use("/contentSection", routes.ContentSecRoute);
app.use("/contentSectionMaterial", routes.ContentSecMatRoute);
app.use("/studentCourse", routes.StudentCoRoute);
app.use("/courseReview", routes.CourRevRoute);
app.use("/instructor", routes.InstructorRoute);
app.use("/studentEvaluation", routes.StudEvRoute);
//bootcamp
app.use("/bootcampApply", routes.BootcampApplyRoute);
app.use("/bootcampApplyProgress", routes.BootcampApplyProgressRoute);
app.use("/batch", routes.BatchRoutes);
app.use("/batchStudent", routes.BatchStudentRoutes);
app.use("/batchStudentEvaluation", routes.BatchStudentEvaluationRoutes);
app.use("/programReview", routes.ProgramReviewRoutes);
//module master
app.use("/modules", routes.ModulesRoute);
app.use("/routeActions", routes.RouteActionsRoute);

const dropDatabaseSync = false;

sequelize.sync({ force: dropDatabaseSync }).then(async () => {
  if (dropDatabaseSync) {
    console.log("Database do not drop");
  }
  app.listen(port, () => console.log("Server is listen on port" + port));
});

export default app;
