

const getAllTasks = (req,res)=>{
    res.send('all items')
}
const createtask = (req,res)=>{
    res.json(req.body)
}
const gettask = (req,res)=>{
    res.json({id:req.params.id})
}
const updatetask = (req,res)=>{
    res.json({id:req.params.id,success:'task updated'})
}
const deletetask = (req,res)=>{
    res.json({id:req.params.id,success:'task deleted'})
}


module.exports = {
    getAllTasks,
    createtask,
    gettask,
    updatetask,
    deletetask
}