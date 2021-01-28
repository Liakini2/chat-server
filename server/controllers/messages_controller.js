let messages = []
let id = 0

module.exports = {
    create:(req, res)=>{
        const {text, time} = req.body
        let message = {id, text, time}
        messages.push(message)
        id++
        res.status(200).send(messages)
    },
    read:(req, res)=>{ 
        res.status(200).send(messages)
    },
    update:(req, res)=>{
        const {text} = req.body
        const {id} = req.params
        let index = messages.findIndex(message => message.id === +id)
        messages[index] = {
            id: messages[index].id,
            text: text || messages[index].text,
            time: messages[index].time
        }
        res.status(200).send(messages)
    },
    delete:(req, res)=>{
        let index = messages.findIndex(message => message.id === +req.params.id)
        messages.splice(index, 1)
        res.status(200).send(messages)
    },
}