const Finance = require("../models/Finance");

exports.create = async(req,res)=>{

const data = await Finance.create(req.body);

res.json(data);

}

exports.getAll = async(req,res)=>{

const data = await Finance.find();

res.json(data);

}

exports.update = async(req,res)=>{

const data = await Finance.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);

res.json(data);

}

exports.delete = async(req,res)=>{

await Finance.findByIdAndDelete(req.params.id);

res.json("Deleted");

}