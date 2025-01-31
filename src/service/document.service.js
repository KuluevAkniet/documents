const DocumentEntity = require("../database/entity/document.entity");
const CreateDocumentDto = require("../dto/document.dto");
const UpdateDocumentDto  = require("../dto/update.document.dto");
const DocumentRepository = require("../repositories/document.repository");

class DocumentService {
   constructor(){}

    async createDocument(data){
        const documentDto = new CreateDocumentDto(data);
        return await DocumentRepository.create(documentDto);
    }

    async findDocument(){
        return await DocumentRepository.find()
    }

    async updateDocument(id, data) {
        const documentDto = new UpdateDocumentDto(data)
        return await DocumentRepository.update(id, documentDto)
    }

    async deleteDocument(id){
       return await DocumentRepository.delete(id);
    }
}
module.exports = new DocumentService()