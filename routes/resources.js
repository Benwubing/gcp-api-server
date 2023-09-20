const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const projectId = req.params.projectId;

  // Implement logic to retrieve a list of resources for the specified project from GCP here
  // Example response:
  const resources = [
    {
      resourceId: "instance-1",
      resourceName: "My Compute Engine Instance 1",
      resourceType: "Compute Engine",
    },
    {
      resourceId: "dataset-1",
      resourceName: "My BigQuery Dataset 1",
      resourceType: "BigQuery",
    },
  ];
  res.json({ resources });
});

module.exports = router;
