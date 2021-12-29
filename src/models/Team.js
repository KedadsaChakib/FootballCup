import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Team';
const COLLECTION_NAME = 'teams';

export const teamSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    nickname: {
        type: mongoose.Schema.Types.String,
        required: false,
    },
    fifaRanking: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    points: {
        type: mongoose.Schema.Types.Number,
    },
    coach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach',
        required: true,
    }
}, {
    timestamps: true,
});

export const TeamModel = mongoose.model(DOCUMENT_NAME, teamSchema, COLLECTION_NAME);