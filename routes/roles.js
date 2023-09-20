const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const projectId = req.params.projectId;
  const resourceId = req.params.resourceId;

  // Implement logic to retrieve a list of roles associated with the specified resource from GCP here
  // Example response:

  console.log("Roles called");
  console.log(req.params);
  const roles = [
    {
      roleName: "editor",
      roleDescription: "Editor role",
      permissions: ["read", "write"],
    },
    {
      roleName: "viewer",
      roleDescription: "Viewer role",
      permissions: ["read"],
    },
  ];
  res.json({ roles });
});

module.exports = router;
