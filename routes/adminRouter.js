import express from "express";
import { addAdmin, searchAdminByEmail, viewAllAdmins, updateAdmin, deleteAdmin, searchAdminById } from "../controllers/adminController.js"

const adminRouter = express.Router();

// Creating an admin
adminRouter.post("/", addAdmin);

// Searching an admin by Email
adminRouter.get("/:email_address", searchAdminByEmail);

// Viewing all admins
adminRouter.get("/", viewAllAdmins);

// Updating an admin records
adminRouter.put("/:email_address", updateAdmin);

// Deleting an admin
adminRouter.delete("/:email_address", deleteAdmin);

// export router
export default adminRouter;