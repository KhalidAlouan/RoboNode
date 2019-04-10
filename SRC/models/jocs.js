const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const vdJocs=new Schema({
	titulo: String,
	descripcion: String,
});


//module.exports=mongoose.model('vdJocs'.vdJocs);
var Jocs = mongoose.model('vdJocs', vdJocs);
module.exports={
	vdJocs:Jocs,
}