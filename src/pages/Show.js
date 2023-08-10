import { useLoaderData, Form } from 'react-router-dom'

const Show = (props) => {
    const cheeze = useLoaderData()

        return <div className='cheeze'>
            <h1>{cheeze.name}</h1>
            <img src={cheeze.image} alt={cheeze.name}/>
            <h3>{cheeze.title}</h3>

            <h5>Change the {cheeze.name} churn</h5>
            <Form action={`/update/${cheeze._id}`} method='post'>
            <input type='text' name='name' placeholder='cheeze name' defaultValue={cheeze.name}/>
            <input type='text' name='title' placeholder='cheeze title' defaultValue={cheeze.title}/>
            <input type='text' name='image' placeholder='cheezy pic' defaultValue={cheeze.image}/>
            <input type='submit' value='Update Cheeze'/>
            </Form>
            
            <h2>Delete {cheeze.name}</h2>
            <Form action={`/delete${cheeze._id}`}
            method='post'>
                <input type='submit' value='No more churning this cheda!'/>
            </Form>
            
        </div>
}

export default Show