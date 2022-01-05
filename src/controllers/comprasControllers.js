import { createCompra, deleteCompra, readCompras, updateCompra } from "../services/jsonServices"

export default (app) => {
    if (app) {

        app.get('/compras', async (request, response) => {
            console.log("Cheguei aqui")
            const compras = await readCompras()

            const data = {
                response: compras
            }

            response.json(data)
        })

        app.post('/compras/nova', async (request, response) => {
            const body = request.body
            console.log(body)
            const idCreateCompra = await createCompra(body)

            response.json(idCreateCompra)
        })

        app.put('/compras/:id', async (request, response) => {
            const body = request.body
            const id = request.params.id
            body.id = Number(id)
            const idUpdateCompra = await updateCompra(body)

            response.json(idUpdateCompra)
        })

        app.delete('/compras/:id', async (request, response) => {
            const id = Number(request.params.id);

            const idDeleteCompra = await deleteCompra(id)

            response.json(idDeleteCompra)
        })

    }

}