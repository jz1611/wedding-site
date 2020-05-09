module.exports = {
    getMessages: async (req, res, next) => {
        const db = req.app.get('db')
        db.collection('messages').find().toArray()
                .then(results => {
                    res.status(200).send(results)
                })
                .catch(error => console.error(error));
    },

    addMessage: async (req, res) => {
        const db = req.app.get('db');
        db.collection('messages').insertOne(req.body)
            .then(result => {
                res.sendStatus(200);
            })
            .catch(error => console.error(error));
    }
}