import Admin from "../models/admin.model.js";

// Create an admin
export async function addAdmin(req, res) {
    try {
        let admin = await Admin.create(req.body);
        if (admin) {
            res.status(200).json({
                success: true,
                message: "Admin added successfully",
                data: admin
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Member could not be added at this time"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something went wrong..."
        })
    }
}

// Search admin by email address
export async function searchAdminByEmail(req, res) {
    try {
        let theAdmin = await Admin.findAll({
            where: {
                email_address: req.params.email_address
            }
        });
        if (theAdmin) {
            res.json({
                success: true,
                message: "Admin records retrieved successfully",
                data: theAdmin
            })
        } else {
            res.json({
                success: false,
                message: "No Admin records retrieved",
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something went wrong..."
        })
    }
}

// Search admin by ID
export async function searchAdminById(req, res) {
    try {
        let theAdmin = await Admin.findAll({ where: { admin_id: req.params.admin_id } });
        if (theAdmin) {
            res.json({
                success: true,
                message: "Admin records retrieved successfully",
                data: theAdmin
            })
        } else {
            res.json({
                success: false,
                message: "No Admin records retrieved",
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something went wrong..."
        })
    }
}

// View all admins
export async function viewAllAdmins(req, res) {
    try {
        let allAdmins = await Admin.findAll();
        if (allAdmins) {
            res.json({
                success: true,
                message: "Admin records retrieved successfully",
                data: allAdmins
            })
        } else {
            res.json({
                success: false,
                message: "No Admin records retrieved",
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something went wrong..."
        })
    }
}

// Update an admin
export async function updateAdmin(req, res) {
    try {
        // let admin_name: "Samwel Momanyi Maisiba";
        let theAdmin = await Admin.update({
            admin_name: "Samwel Maisiba"
        }, {
            where: { email_address: req.params.email_address }
        });
        if (theAdmin) {
            res.json({
                success: true,
                message: "Admin records updated successfully",
                data: theAdmin
            })
        } else {
            res.json({
                success: false,
                message: "Admin records could not be updated"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something went wrong..."
        })
    }
}

// Delete an admin
export async function deleteAdmin(req, res) {
    try {
        let email_address = req.params.email_address;
        let toBeDeleted = await Admin.destroy({
            where: { email_address: email_address }
        });
        if (toBeDeleted) {
            res.json({
                success: true,
                message: `Admin with email address ${email_address} is deleted successfully`,
            })
        } else {
            res.json({
                success: false,
                message: "Admin(s) could not be deleted",
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something went wrong..."
        })
    }
}