import DataModel from "../persistance/model.mongoose.js";

const dataController = {};

dataController.getData = async (req, res) => {
    try {
        console.log(`METHOD getData - THIS IS BACKEND`);
    }

    catch (err) {
        console.error(err);
    }
}

export default dataController;