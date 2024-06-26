import express from 'express'
import DealsController from '../controllers/dealsController.js'
import { authenticateToken } from '../middleware/authenticate.js'

const router = express.Router()

router.get('/', DealsController.getAll)

export default router
