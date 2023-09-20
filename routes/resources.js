const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /projects/{projectId}/resources:
 *   get:
 *     summary: List Resources in a Project
 *     description: Retrieve a list of resources in a specific GCP project.
 *     parameters:
 *       - name: projectId
 *         in: path
 *         required: true
 *         description: The unique project ID.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ResourceListResponse"
 */
router.get("/", (req, res) => {
  const projectId = req.params.projectId;

  // Implement logic to retrieve a list of resources for the specified project from GCP here
  // Example response:
  const resources = [
    {
      projectId: projectId,
      resourceId: "instance-1",
      resourceName: "My Compute Engine Instance 1",
      resourceType: "Compute Engine",
    },
    {
      projectId: projectId,
      resourceId: "dataset-1",
      resourceName: "My BigQuery Dataset 1",
      resourceType: "BigQuery",
    },
  ];
  res.json({ resources });
});

module.exports = router;
