const express = require("express");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
//const multer = require('multer');
//const upload = multer();
const cookieParser = require('cookie-parser');
// const userLogueado = require('../src/middlewares/userLoggedMiddleware');

// Express //
const app = express();
const PORT = 3000;
const publicPath = path.join(__dirname, "../public");

// Template Engine //
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

// Middleware //
app.use(express.static(publicPath));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
// app.use(multer());
app.use(express.json());
app.use(cookieParser());
// app.use(userLogueado);

// Route System //
const mainRoute = require("./routes/main");
const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");
const apiProductsRoute = require("./routes/api/apiProducts.js")
const apiUsersRoute = require("./routes/api/apiUsers")
//const User = require("../models/User")

app.use("/", mainRoute);
app.use("/users", usersRoute);
app.use("/products", productsRoute);

app.use("/api/products", apiProductsRoute);
app.use("/api/users", apiUsersRoute);

// app.use((req,res,next)=> {
//     res.status(404).render('404-page');//HACER VISTA DE ERROR
//     next();
// })

app.listen(process.env.PORT || PORT, () => console.log("server up at: http://localhost:3000/"));