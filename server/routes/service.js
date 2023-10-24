const express = require("express");
const router = express.Router();
const Service = require("../models/Service"); 
router.post("/add-service", async (req, res) => {
  try {
    const { backgroundImageUrl, cardTitle, cardSubServices, cardServices } =
      req.body;

    const newService = new Service({
      backgroundImageUrl,
      cardTitle,
      cardSubServices,
      cardServices: cardServices.split(","),
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

router.get("/service-details/:serviceId", async (req, res) => {
  try {
    const serviceId = req.params.serviceId;
    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    console.error("Error fetching service details:", error);
    res.status(500).json({ error: "Failed to retrieve service details" });
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

router.put("/update-service/:serviceId", async (req, res) => {
  try {
    const serviceId = req.params.serviceId;
    const { backgroundImageUrl, cardTitle, cardSubServices, cardServices } = req.body;

    const updatedService = {
      backgroundImageUrl,
      cardTitle,
      cardSubServices,
      cardServices: cardServices.split(","),
    };

    await Service.findByIdAndUpdate(serviceId, updatedService);

    res.status(200).json({ message: "Service updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update service" });
  }
});

module.exports = router;
