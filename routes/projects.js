const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Implement logic to retrieve a list of projects from GCP here
  // Example response:
  const projects = [
    {
      projectId: "my-project-1",
      projectName: "My Project 1",
      projectNumber: "123456789",
      createTime: "2023-09-20T10:00:00Z",
    },
    {
      projectId: "my-project-2",
      projectName: "My Project 2",
      projectNumber: "987654321",
      createTime: "2023-09-21T11:30:00Z",
    },
  ];
  res.json({ projects });
});

module.exports = router;
