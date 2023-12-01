const Clothing = require("../model/clothing")

exports.create = async (req, res, next) => {
  const { name, number } = req.body
  try {

    await Clothing.create({
      name, number,

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