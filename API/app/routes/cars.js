const express = require('express');
const router = express.Router();
const CarsList = require('../model/CarsList');

router.get('/getCars', async(req, res)=>
{
    try
    {
        res.status(200).json(CarsList);
    }
    catch(error)
    {
        res.status(404).json({erro: error.message})
    }
})

module.exports=router;