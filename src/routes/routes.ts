import { Router } from "express";

const routers = Router();

routers.get("/", (request, response) => {
    console.log("Olá");
    
    response.json({message: "Hello World"}).sendStatus(200);
});

export {routers}