const router = require("express").Router()
const Alert = require("../models/Alert")

// CREATE ALERT
router.post("/", async (req,res)=>{
  const alert = new Alert(req.body)
  await alert.save()
  res.json(alert)
})

// GET ALERTS
router.get("/", async (req,res)=>{
  const alerts = await Alert.find().sort({date:-1})
  res.json(alerts)
})

module.exports = router