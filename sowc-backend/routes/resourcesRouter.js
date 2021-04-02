import express from "express";
import { addResource, searchResourceByTopic, viewAllResources, updateResource, deleteResource, searchResourceById } from "../controllers/resourcesController.js"

const resourceRouter = express.Router();

// Adding a resource
resourceRouter.post("/", addResource);

// Searching a resource by topic
resourceRouter.get("/topic/:topic", searchResourceByTopic);

// Searching a resource by ID
resourceRouter.get("/resource-id/:resource_id", searchResourceById);

// Viewing all resources
resourceRouter.get("/", viewAllResources);

// Updating resource records
resourceRouter.put("/:email_address", updateResource);

// Deleting a resource
resourceRouter.delete("/:email_address", deleteResource);

// export router
export default resourceRouter;