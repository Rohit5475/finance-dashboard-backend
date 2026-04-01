const Finance = require("../models/Finance");

exports.summary = async(req,res)=>{

const income = await Finance.aggregate([
{ $match:{type:"income"}},
{ $group:{_id:null,total:{$sum:"$amount"}}}
]);

const expense = await Finance.aggregate([
{ $match:{type:"expense"}},
{ $group:{_id:null,total:{$sum:"$amount"}}}
]);

res.json({
income,
expense
});

}