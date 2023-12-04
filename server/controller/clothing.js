const Clothing = require("../model/clothing")


//create
exports.create = async (req, res, next) => {
  const { name, number } = req.body
  try {

    await Clothing.create({
      name, number

    }).then(clothing =>
      res.status(200).json({
        message: "Clothing successfully created",
        clothing,
      })
    )
  } catch (error) {
    res.status(401).json({
      message: "Clothing not successful created",
      error: error.mesage,
    })
  }
}

//update

exports.update = async (req, res) => {
  try {
    const item = await Clothing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//delete//

exports.remove = async (req, res) => {

  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send({ message: "The item has been deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
//get All clothing function
exports.getAllClothing = async (req, res) => {
  try {
    const all_Clothing = await Task.find({});
    res.json(all_Clothing);
  } catch (error) {
    res.json({
      message: "Something went wrong, try again later",
      error: error.message,
    });
  }
};

//get one clothes
exports.getOneClothing = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.json({ message: "Task id does not exit" });
  }
  const clothing = await Clothing.findById(id)
  res.json(clothing)
}
