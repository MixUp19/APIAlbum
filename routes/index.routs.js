import {Router} from 'express'
const router = Router()
//route
router.get('/', (req, res)=>res.send('hello world'))

router.get('/ping', (req, res)=>res.send('pong'))

export default router