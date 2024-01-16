const express = require("express");
const usersModel = require("../../models/usersModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await usersModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { name, age, email, password, address, interests } = req.body;
  try {
    const users = new usersModel({
      name,
      age,
      email,
      password,
      address,
      interests,
    });
    const newUser = await users.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await usersModel.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await usersModel.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    res.json({ message: "User has been updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await usersModel.findByIdAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// async function getUserById(req, res, next) {
//   let user;
//   try {
//     const result = await usersModel.findById(req.params.id);
//     // if (!result) {
//     //   res.status(404).json({ message: "user not found" });
//     // }
//     user = result;
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
//   res.user = user;
//   next();
// }

module.exports = router;
