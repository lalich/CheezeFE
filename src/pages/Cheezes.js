import { Link, useLoaderData, Form } from 'react-router-dom'

const Index = (props) => {
    const cheeze = useLoaderData()

    return (
        <div>
            <h3>Churn sum Cheeze</h3>
            <Form action='/create' method="post">
                <input type='text' name='name' placeholder='Cheeze Name'/>
                <input type='text' name='title' placeholder='Title Earned'/>
                <input type='text' name='image' placeholder='Cheeze piC'/>
                <input type='submit' value='Churn dat Cheeze!'/>
            </Form>

            {cheeze.map((cheeze, index) => {
                return (
                    <div key={cheeze._id} classname='cheeze'>
                        <Link to={`/${cheeze._id}`}>
                            <h2>{cheeze.name}</h2>
                        </Link>
                        <img src={cheeze.image} alt={cheeze.name} />
                            <h3>{cheeze.title}</h3>
                            </div>
                )
            })}
        </div>
    )
}

export default Index