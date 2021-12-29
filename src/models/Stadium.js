import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Stadium';
const COLLECTION_NAME = 'stadiums';

export const stadiumSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    location: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    capacity: {
        type: mongoose.Schema.Types.Number,
        required: true,
    }
}, {
    timestamps: true,
});

export const StadiumModel = mongoose.model(DOCUMENT_NAME, stadiumSchema, COLLECTION_NAME);