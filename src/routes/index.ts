import {Router} from 'express';

import { api } from '../api';

const router = Router()

router.get('/', (request, response) =>{
    return response.status(201).send("Back-end Challenge 2021 🏅 - Space Flight News")
});
router.get('/articles/', async(request, response) =>{
    try {
        const {data} = await api.get('/articles');

        return response.json(data);
    } catch (error) {
        console.error(error);
    }

});

router.get('/articles/:id', async (request, response) =>{
    const { id } = request.params;
    try {
        const {data} = await api.get(`/articles/${id}`);

        return response.json(data);
    } catch (error) {
        console.error(error);
    }
    
});

router.post('/articles/', (request, response) =>{
    return response.status(201).send("atualizar artigo baseado no id")
});

router.put('/articles/{id}:', (request, response) =>{
    return response.status(201).send("atualizar artigo baseado no id")
});

router.delete('/articles/{id}:', (request, response) =>{
    return response.status(201).send()
});


export {router}