import express from 'express'
import productCtrl from '../controllers/product.controller.js'

const router = express.Router()

router.param('id', productCtrl.productByID)
router.route('/api/products')
    .post(productCtrl.create)
    .get(productCtrl.list)
    .delete(productCtrl.removeAll)
router.route('/api/products/:id')
    .get(productCtrl.read)
    .put(productCtrl.update)
    .delete(productCtrl.remove)




export default router