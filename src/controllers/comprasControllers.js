import { readCompras } from "../services/jsonServices"

export default (app) => {
    if (app) {
        app.get('./compras', async (request, response) => {
            const compras = await readCompras()

            const data = {
                response: compras
            }
            response.json(data)
        })
    }

}