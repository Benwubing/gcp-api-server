const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: List GCP Projects
 *     description: Retrieve a list of projects in Google Cloud Platform.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 projects:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       projectId:
 *                         type: string
 *                         description: The unique project ID.
 *                       projectName:
 *                         type: string
 *                         description: The name of the project.
 *                       projectNumber:
 *                         type: string
 *                         description: The project's number.
 *                       createTime:
 *                         type: string
 *                         format: date-time
 *                         description: The creation timestamp of the project.
 *               example:
 *                 projects:
 *                   - projectId: my-project-1
 *                     projectName: My Project 1
 *                     projectNumber: 123456789
 *                     createTime: "2023-09-20T10:00:00Z"
 *                   - projectId: my-project-2
 *                     projectName: My Project 2
 *                     projectNumber: 987654321
 *                     createTime: "2023-09-21T11:30:00Z"
 */
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
