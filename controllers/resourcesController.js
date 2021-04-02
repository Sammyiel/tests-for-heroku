import Resources from "../models/resources.model.js";

// Add a resource
export async function addResource(req, res) {
    try {
        let resource = await Resources.create(req.body);
        if (resource) {
            res.status(200).json({
                success: true,
                message: "Resource added successfully",
                data: resource
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Resource could not be added at this time"
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

// Search resource by topic
export async function searchResourceByTopic(req, res) {
    try {
        let topic = req.params.topic;
        let theResources = await Resources.findAll({
            where: {
                topic: topic
            }
        });
        if (theResources) {
            res.json({
                success: true,
                message: "Resource records retrieved successfully",
                data: theResources
            })
        } else {
            res.json({
                success: false,
                message: `Resources with the topic ${topic} could not be found`
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

// Search resource by ID
export async function searchResourceById(req, res) {
    try {
        let theResource = await Resources.findAll({
            where: { resource_id: req.params.resource_id }
        });
        if (theResource) {
            res.json({
                success: true,
                message: "Resource retrieved successfully",
                data: theResource
            })
        } else {
            res.json({
                success: false,
                message: "Resource could be found",
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

// View all resources
export async function viewAllResources(req, res) {
    try {
        let allResources = await Resources.findAll();
        if (allResources) {
            res.json({
                success: true,
                message: "Resources retrieved successfully",
                data: allResources
            })
        } else {
            res.json({
                success: false,
                message: "No resource records retrieved",
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

// Update a resource
export async function updateResource(req, res) {
    try {
        let theResource = await Resources.update({
            admin_name: "Samwel Maisiba"
        }, {
            where: { email_address: req.params.email_address }
        });
        if (theResource) {
            res.json({
                success: true,
                message: "Resource records updated successfully",
                data: theResource
            })
        } else {
            res.json({
                success: false,
                message: "Resource records could not be updated",
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
export async function deleteResource(req, res) {
    try {
        let email_address = req.params.email_address;
        let toBeDeleted = await Resources.destroy({
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
                message: "Resource(s) could not be deleted",
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