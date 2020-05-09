module.exports = {
    getMessages: async (req, res, next) => {
        const db = req.app.get('db');
        const messages = await db.get_messages;
        res.status(200).send(messages);
    }
}