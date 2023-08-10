import { baseUrl } from "./baseurl";
import { redirect } from 'react-router-dom'

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newCheeze = {
        name: formData.get('name'),
        image: formData.get('image'),
        title: formData.get('title')
    }
    await fetch(`${baseUrl}/cheeze`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCheeze)
    })
    return redirect('/')
}

export const updateAction = async ({request, params}) => {
    const id = params.id
    const formData = await request.formData()
    const updateCheeze = {
        name: formData.get('name'),
        image: formData.get('image'),
        title: formData.get('title')
    }
    await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateCheeze)
    })
    return redirect(`${id}`)
}

export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
     
    })
    return redirect ('/')
}
