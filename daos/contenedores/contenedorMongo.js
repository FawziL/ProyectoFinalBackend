import config from '../../config/config.js';
import mongoose from "mongoose"
mongoose.connect(config.mongodb)

console.log('Conexion establecida con la DBMongo')

export default class ContenedorMongo {
  constructor(nameCollection, schema) {

    this.collection = mongoose.model(nameCollection, schema);
  }

  async deleteById(id){
    await this.collection.deleteOne({_id:id});
  }
  async getById(id)  {
    const doc = await this.collection.find({ _id: id }, { __V: 0 });
    return doc;
  }
  async getAll(){
    const doc = await this.collection.find({ });
    return doc;
  }

}