const feathers = require('@feathersjs/feathers')

const app = feathers()

app.use('todos', {
    async get(name) {
        return {
            name,
            text: 'just some text'
        }
    }
})

async function getTodo(name) {
    const service = app.service('todos')
    const todo = await service.get(name)

    console.log(todo)
}

getTodo('dishes')