const DocumentEntity = require("../database/entity/document.entity");
const { AppDataSource } = require("../database/connect");

class DocumentRepository {
    constructor() {
       this.documentRepository = AppDataSource.getRepository(DocumentEntity)
    }

    async create(data){
        try {
        const newDocument = this.documentRepository.create(data);
        return await this.documentRepository.save(newDocument); 
        } catch (error) {
        console.error("Error creating document:", error);
        throw error;
        }
    }

    async find(){
        try{
          return await this.documentRepository.find()
        }catch(error){
          console.error("Error when receiving documents", error)
          throw error
        }
    }
    
    async update(id, data) {
        try {
            if (!data || Object.keys(data).length === 0) {
                throw new Error("No data to update");
            }
            const document = await this.documentRepository.findOne({ where: { id } });
            if (!document) {
                throw new Error("Document not found");
            }
            const result = Object.assign(document, data);
            return await this.documentRepository.save(result);
        } catch (error) {
            console.error("Error updating document:", error.message);
            throw error;
        }
    }
    
    async delete(id){
       try{
        const document = await this.documentRepository.findOne({
            where: {id}
         })
         if(!document){
            throw new Error('Document not found'); 
         }
         await this.documentRepository.remove(document);
         return { message: 'The document was successfully deleted' };
         }catch (error) {
            console.error("Error when deleting a document", error);
            throw error;
        }
    }
    
}
module.exports = new DocumentRepository();