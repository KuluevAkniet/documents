const { EntitySchema } = require("typeorm");
const BaseEntity = require("./base.entity");

const DocumentEntity = new EntitySchema({
    name: "Document",
    tableName: "Document",
    columns:{
        id: {
            type: "int",
            primary: true,
            generated: true, 
        },
        createdAt: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP", 
        },
        updatedAt: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP", 
        },
        title: {
            type: "varchar"
        },
        description: {
            type: "text"
        },
        status: {
            type: "varchar"
        }
    }
}) 
module.exports = DocumentEntity;
