import fs, { read } from "fs";
import { stringify } from "querystring";
import util from "util";

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const path = "./src/models/compras.json";

export const readCompras = async () => {
    try {
        const file = await readFile(path, 'utf8')

        const parseJSON = JSON.parse(file)
        console.log("PARSEJSON-READ:", parseJSON)

        return parseJSON.data

    } catch (e) {
        console.log(e.message)
    }
}

export const createCompra = async (compraCreate) => {
    try {
        const file = await readFile(path, 'utf8')

        const parseJSON = JSON.parse(file)
        console.log("PARSEJSON-CREATE:", parseJSON)

        compraCreate.id = Math.floor(Math.random() * 100)

        parseJSON.data.push(compraCreate)
        console.log("PARSEJSON-CREATE:", parseJSON)

        const stringfiedJSON = JSON.stringify(parseJSON)
        writeFile(path, stringfiedJSON)

    } catch (e) {
        console.log(e.message)
    }
}

export const updateCompra = async (compraUpdate) => {
    try {
        const file = await readFile(path, 'utf8')

        const parseJSON = JSON.parse(file)
        console.log("PARSEJSON-CREATE:", parseJSON)

        const newListCompra = parseJSON.data.map((compra) => {
            if (compra.id === compraUpdate.id) {
                return Object.assign({}, compra, compraUpdate)
            }
            return compra
        })
        console.log("NEWLIST:", newListCompra)

        const stringfiedJSON = JSON.stringify({
            data: newListCompra
        })

        await writeFile(path, stringfiedJSON)

    } catch (e) {
        console.log(e.message)
    }
}

export const deleteCompra = async (id) => {
    try {
        const file = await readFile(path, 'utf8')

        const parseJSON = JSON.parse(file)

        const newListCompra = []

        parseJSON.data.forEach((compra) => {
            if (compra.id !== id) {
                newListCompra.push(compra)
            }
        })
        console.log("NEWLIST:", newListCompra)

        const stringfiedJSON = JSON.stringify({
            data: newListCompra
        })

        await writeFile(path, stringfiedJSON)

    } catch (e) {
        console.log(e.message)
    }
}