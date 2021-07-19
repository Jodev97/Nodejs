const express = require('express');
const promoRouter = express.Router();

promoRouter.get('/',(req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('View all promotions!');
})

promoRouter.post('/',(req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

promoRouter.put('/',(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})

promoRouter.delete('/',(req, res, next) => {
    res.end('Deleting all promotions');
});
promoRouter.get('/:promoId',(req,res,next) => {
    res.end('View only promotion: '+req.params.promoId);
})

promoRouter.post('/:promoId',(req, res, next) => {
    res.end('Add the promotion whit ID: '+req.params.promoId);
})

promoRouter.put('/:promoId',(req, res, next) => {
    res.statusCode = 202;
    res.end('update promo: '+req.params.promoId);
})

promoRouter.delete('/:promoId',(req, res, next) => {
    res.end('Deleted promo: '+req.params.promoId);
});

module.exports = promoRouter;