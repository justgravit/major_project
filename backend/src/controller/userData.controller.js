const express = require('express')
const router = express.Router()
const User = require("../model/auth.model.js")



router.post("/:id", async (req, res) => {
  try {
    const data = await User.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {
          quizAttempted: {
            $each: [{ quizId: req.body.quizId, quizResult: req.body.quizResult }],
          },
        },
      },
      { new: true }
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/saveScore/:id", async (req, res) => {
  try {
    const { score } = req.body;
    const userId = req.params.id;
    const data = await User.findByIdAndUpdate(
      req.params.id,
      {
        
         Points:score,
      
      },
      { new: true }
    );
    console.log(score);
    res.status(200).json("Data Pushed");
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router