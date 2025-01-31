const UpdateDocumentDto = require("../dto/update.document.dto");
const documentService = require("../service/document.service");

class DocumentController{
    constructor(){}
    
    async CreateDocument(req, res){
       try{
        const document = await documentService.createDocument(req.body)
        res.status(201).json(document);
       }catch(error){
        res.status(400).json({ message: "Ошибка создания документа", error: error.message });
       }
    }

    async findDocument(req, res){
      try{
        const documents = await documentService.findDocument()
        res.status(201).json(documents)
      }catch(error){
        res.status(400).json({message: "Ошибка при получений документов"})
      }
    }
  
    async updateDocument(req, res) {
      console.log(req.body);
      try {
        const { id } = req.params;
        const data = req.body;
          if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ message: "No data to update" });
          }
          const updatedDocument = await documentService.updateDocument(id, data);
          res.status(200).json(updatedDocument);
      } catch (error) {
          res.status(400).json({ message: "Error updating document", error: error.message });
      }
  }
  
  async deleteDocument(req, res) {
    try {
      const { id } = req.params; 
        if (!id) {
        return res.status(400).json({ message: 'Document ID not specified' });
        }
        const result = await documentService.deleteDocument(id);
        res.status(200).json(result); 
      } catch (error) {
        console.error('Error when deleting a document:', error);
        res.status(400).json({ message: 'Error when deleting document', error: error.message });
      }
  }
  
  }
module.exports = new DocumentController()