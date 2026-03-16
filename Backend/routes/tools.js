const express = require('express')
const router  = express.Router()
const Tool    = require('../models/Tool')

// GET /api/tools — saare tools (optional category/search filter)
router.get('/', async (req, res) => {
  try {
    const filter = {}
    if (req.query.category) filter.category = req.query.category
    if (req.query.search)   filter.title = { $regex: req.query.search, $options: 'i' }

    const tools = await Tool.find(filter)
      .populate('owner', 'name city')
      .sort({ createdAt: -1 })

    res.json({ tools })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// GET /api/tools/:id — single tool
router.get('/:id', async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id)
      .populate('owner', 'name city phone')

    if (!tool) return res.status(404).json({ message: 'Tool not found' })

    res.json({ tool })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router