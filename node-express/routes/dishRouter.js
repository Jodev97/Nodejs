const express = require('express');
const dishRouter = express.Router();

dishRouter.get('/',(req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('View all Dishes!');
})

dishRouter.post('/',(req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

dishRouter.put('/',(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishs');
})

dishRouter.delete('/',(req, res, next) => {
    res.end('Deleting all dishes');
});
dishRouter.get('/:dishId',(req,res,next) => {
    res.end('View only dish: '+req.params.dishId);
})

dishRouter.post('/:dishId',(req, res, next) => {
    res.end('Add the dish whit ID: '+req.params.dishId);
})

dishRouter.put('/:dishId',(req, res, next) => {
    res.statusCode = 202;
    res.end('update dish: '+req.params.dishId);
})

dishRouter.delete('/:dishId',(req, res, next) => {
    res.end('Deleted dish: '+req.params.dishId);
});

module.exports = dishRouter;