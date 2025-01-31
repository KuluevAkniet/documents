class UpdateDocumentDto {
    constructor({ title, description, status }) {
        if (!title || typeof title !== "string") {
            throw new Error("Title is required and must be a string");
        }
        if (description && typeof description !== "string") {
            throw new Error("Description must be a string");
        }
        if (!status || !["active", "inactive"].includes(status)) {
            throw new Error('Status is required and must be "active" or "inactive"');
        }
        this.title = title;
        this.description = description || null;
        this.status = status;
    }
}

module.exports = UpdateDocumentDto;
