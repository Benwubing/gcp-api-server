const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /projects/{projectId}/resources/{resourceId}/roles:
 *   get:
 *     summary: List Roles for a Resource
 *     description: Retrieve a list of roles associated with a specific GCP resource.
 *     parameters:
 *       - name: projectId
 *         in: path
 *         required: true
 *         description: The unique project ID.
 *         schema:
 *           type: string
 *       - name: resourceId
 *         in: path
 *         required: true
 *         description: The unique resource ID.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/RoleListResponse"
 */
router.get("/", (req, res) => {
  const projectId = req.params.projectId;
  const resourceId = req.params.resourceId;

  // Implement logic to retrieve a list of roles associated with the specified resource from GCP here
  // Example response:
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
