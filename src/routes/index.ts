import {Router} from 'express'

const router = Router()

router.use('/', (request, response)=>{
    return response.status(201).send("Back-end Challenge 2021 🏅 - Space Flight News")
});

export {router}