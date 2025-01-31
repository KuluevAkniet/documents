const express = require("express");
const documentController = require("../controller/document.controller");
const router = express.Router();

/**
 * @swagger
 * /api/documents/:
 *   post:
 *     summary: Update a document
 *     description: Update the details of a specific document by its ID.
 *     tags:
 *       - Documents
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *             required:
 *               - title
 *               - status
 *     responses:
 *       200:
 *         description: Document updated successfully
 *       404:
 *         description: Document not found
 */
router.post("/documents", documentController.CreateDocument);

/**
 * @swagger
 * /api/documents/:
 *   get:
 *     summary: Update a document
 *     description: Update the details of a specific document by its ID.
 *     tags:
 *       - Documents
 *     responses:
 *       200:
 *         description: Document updated successfully
 *       404:
 *         description: Document not found
 */
router.get("/documents/", documentController.findDocument);

/**
 * @swagger
 * /api/documents/{id}:
 *   put:
 *     summary: update a document
 *     description: Updates an existing document by its ID.
 *     tags:
 *       - Documents
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the document to update
 *         schema:
 *           type: integer
 *       - in: body
 *         name: body
 *         description: Document update data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: "string"
 *             description:
 *               type: string
 *               example: "string"
 *             status:
 *               type: string
 *               example: "active"
 *     responses:
 *       200:
 *         description: Document updated successfully
 *       400:
 *         description: Error in request (for example, there is no data to update)
 *       404:
 *         description: Document is not defined
 */
router.put("/documents/:id", documentController.updateDocument)

/**
 * @swagger
 * /api/documents/{id}:
 *   delete:
 *     summary: Delete a document
 *     description: Delete a specific document by its ID from the system.
 *     tags:
 *       - Documents
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the document to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Document deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Документ успешно удален'
 *       400:
 *         description: Invalid ID supplied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Не указан id документа'
 *       404:
 *         description: Document not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Документ не найден'
 */
router.delete('/documents/:id', documentController.deleteDocument);



module.exports = router;