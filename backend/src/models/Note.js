import mongoose from "mongoose";

// 1- Create a schema
// 2- Create a model

const noteScheme = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // createdAt, updatedAt
);

const Note = mongoose.model("Note", noteScheme)

export default Note;

