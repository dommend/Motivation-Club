const express = require('express')
const Motivation = require('../models/motivation')
const router = new express.Router()

router.post('/motivations', async (req, res) => {
    const motivation = new Motivation(req.body)
    try {
        await motivation.save()
        res.status(201).send(motivation)
    } catch(error) {
        res.status(400).send()
    }
})

router.get('/motivations', async (req, res) => {
    try {
        const motivation = await Motivation.find({})
        res.send(motivation)
      } catch (error) {
        res.status(500).send()
      }
})
 

router.get('/motivation/:id', async (req, res) => {
    const _id = req.params.id
    try {
       const motivation = await Motivation.findById(_id)
       if(!motivation) {
        return res.status(404).send() 
     }
     res.send(motivation)
      } catch (error) {
        res.status(500).send()
}
})

router.delete('/motivation/:id', async (req, res) => {
    try {
        const motivation = Motivation.findByIdAndDelete(req.params.id)
        if(!motivation) {
            return res.status(404).send()
        }
        res.send(motivation)

    } catch (error) {
        res.status(500).send()
    }
})
 
module.exports = router