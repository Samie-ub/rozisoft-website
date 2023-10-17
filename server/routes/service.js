const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

const generatePathName = (cardTitle) => {
  return cardTitle.toLowerCase().replace(/ /g, "-");
};
router.post("/add-service", async (req, res) => {
  try {
    const { backgroundImageUrl, cardTitle, cardSubServices, cardServices } =
      req.body;

      const newService = new Service({
        backgroundImageUrl,
        cardTitle,
        cardSubServices,
        cardServices: cardServices.split(","),
        pathName: generatePathName(cardTitle),
      });

    await newService.save();

    res.status(201).json({ message: "Service added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add service" });
  }
});

router.get("/all-service", async (req, res) => {
  try {
    console.log("Attempting to fetch services...");
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Failed to retrieve services" });
  }
});

router.delete("/delete-service/:serviceId", async (req, res) => {
  try {
    const serviceId = req.params.serviceId;
    await Service.findByIdAndDelete(serviceId);

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete service" });
  }
});

module.exports = router;
