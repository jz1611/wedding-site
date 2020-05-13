module.exports = {
    getSuggestions: async (req, res) => {
        const db = req.app.get('db');
        db.collection('suggestions').find().toArray()
            .then(results => {
                res.status(200).send(results);
            })
            .catch(error => console.error(error));
    },

    addSuggestion: async (req, res) => {
        const db = req.app.get('db');
        db.collection('suggestions').insertOne(req.body)
            .then(result => {
                res.sendStatus(200);
            })
            .catch(error => console.error(error));
    }
}