const Heatmap = require('../database/models/heatmap');
const schemaValidation = require('../validation/heatmap');
const validate = require('../utils/validate');
const utils = require('../utils');


module.exports = {
    get: async (req, res) => {
        try {
            let params = req.params;

            /* validate request data */
            const validation = validate(schemaValidation.get, params);
            if (validation?.error) return res.status(400).json(validation.error);

            const heatmap = await Heatmap.findOne({ _id: utils.mongoID(params.id) });

            if (!heatmap) {
                return res.status(404).json({
                    status: 'failed',
                    message: 'heatmap not found'
                });
            }

            return res.status(200).json({
                status: 'success',
                data: heatmap
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 'failed',
                message: error.message
            });
        }
    },
    all: async (req, res) => {
        try {
            let query = req.query;

            /* validate request data */
            // const validation = validate(schemaValidation.search, query);
            // if (validation?.error) return res.status(400).json(validation.error);

            // get all
            const heatmaps = await Heatmap.find();
            return res.status(200).json({
                status: 'success',
                data: heatmaps
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 'failed',
                message: error.message
            });
        }
    },
    create: async (req, res) => {
        try {
            let body = req.body;

            /* validate request data */
            const validation = validate(schemaValidation.create, body);
            if (validation?.error) return res.status(400).json(validation.error);

            const heatmap = new Heatmap(body);
            await heatmap.save();

            return res.status(200).json({
                status: 'success',
                data: heatmap
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 'failed',
                message: error.message
            });
        }
    },
    update: async (req, res) => {
        try {
            let body = req.body;
            let params = req.params;

            /* validate request data */
            const validation = validate(schemaValidation.update, body);
            if (validation?.error) return res.status(400).json(validation.error);

            if (body.email) {
                const user = await User.findOne({ email: body.email });
                if (user && user._id != params.id) {
                    return res.status(400).json({
                        status: 'failed',
                        message: 'email already exists'
                    });
                }
            }

            await Heatmap.updateOne({ _id: utils.mongoID(params.id) }, { $set: body });

            return res.status(200).json({
                status: 'success',
                message: 'heatmap updated'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 'failed',
                message: error.message
            });
        }
    },
    remove: async (req, res) => {
        try {
            let params = req.params;

            /* validate request data */
            const validation = validate(schemaValidation.remove, params);
            if (validation?.error) return res.status(400).json(validation.error);

            await Heatmap.deleteOne({ _id: utils.mongoID(params.id) });

            return res.status(200).json({
                status: 'success',
                message: 'heatmap deleted'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 'failed',
                message: error.message
            });
        }
    }
};