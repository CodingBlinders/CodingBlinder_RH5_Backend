const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heatmapSchema = new Schema(
    {
        disease: {
            type: String,
            require: true
        },
        latitude: {
            type: String,
            require: true
        },
        longitude: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
);

const Heatmap = mongoose.model('heatmaps', heatmapSchema);
module.exports = Heatmap;