import { Router } from 'express'
import filterValidate from '../middlewares/filter/index.js'
import * as filterControllers from '../controllers/filter.controllers.js'

const router = Router()

router.get('/console/price', ...filterValidate.PRICE, filterControllers.filterPriceConsole)
router.get('/periferic/price', ...filterValidate.PRICE, filterControllers.filterPricePeriferic)
router.get('/videogame/price', ...filterValidate.PRICE, filterControllers.filterPriceVideogame)

router.get('/console/state', ...filterValidate.SOLD_USED, filterControllers.filterSoldUsedConsole)
router.get('/periferic/state', ...filterValidate.SOLD_USED, filterControllers.filterSoldUsedPeriferic)
router.get('/videogame/state', ...filterValidate.SOLD_USED, filterControllers.filterSoldUsedVideogame)

export default router