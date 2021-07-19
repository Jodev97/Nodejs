const express = require('express');
const leaderRouter = express.Router();

leaderRouter.get('/',(req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('View all leaders!');
})

leaderRouter.post('/',(req, res, next) => {
    res.end('Will add the leaders: ' + req.body.name + ' with details: ' + req.body.description);
})

leaderRouter.put('/',(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})

leaderRouter.delete('/',(req, res, next) => {
    res.end('Deleting all leaders');
});
leaderRouter.get('/:leaderId',(req,res,next) => {
    res.end('View only leader: '+req.params.leaderId);
})

leaderRouter.post('/:leaderId',(req, res, next) => {
    res.end('Add the leader whit ID: '+req.params.leaderId);
})

leaderRouter.put('/:leaderId',(req, res, next) => {
    res.statusCode = 202;
    res.end('update leader: '+req.params.leaderId);
})

leaderRouter.delete('/:leaderId',(req, res, next) => {
    res.end('Deleted leader: '+req.params.leaderId);
});

module.exports = leaderRouter;