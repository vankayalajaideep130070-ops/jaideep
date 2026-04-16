const router = require("express").Router()
const bcrypt = require("bcryptjs")
const User = require("../models/User")

// REGISTER USER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please fill all fields" })
  }

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    })

    const savedUser = await newUser.save()
    const { password: _password, ...userData } = savedUser.toObject()

    res.status(201).json({ message: "User registered", user: userData })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Server error" })
  }
})

// LOGIN USER
router.post("/login", async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: "Please fill all fields" })
  }

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" })
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return res.status(400).json({ error: "Invalid credentials" })
    }

    const { password: _password, ...userData } = user.toObject()
    res.json({ message: "Login successful", user: userData })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Server error" })
  }
})

module.exports = router
