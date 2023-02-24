import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    content: {
        type: String,
        maxLength: 500
    },

    date: {
        type: String,
        default: new Date().toLocaleString()
    }
});

const DataModel = mongoose.model('information', dataSchema);

export default DataModel;