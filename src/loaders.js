import { baseUrl } from "./baseurl";

export const cheezesLoader = async () => {
    const response = await fetch(`${baseUrl}/cheeze`)
    const cheeze = await response.json()
    return cheeze
}

export const cheezeLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${baseUrl}/cheeze/${id}`)
    const cheeze = await response.json()
    return cheeze
}