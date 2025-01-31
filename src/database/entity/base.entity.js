const { EntitySchema } = require("typeorm");

const BaseEntity = new EntitySchema({
  name: "BaseEntity", 
  columns: {
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
  },
});

module.exports = BaseEntity;
