const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


class Edit extends React.Component {
    render() {
        const { product } = this.props
        return (
            <DefaultLayout title="Edit">

                <form action={`/products/${product.id}?_method=PUT`} method='POST'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name'
                        defaultValue={product.name} />
                    <label htmlFor="image">Image URL:</label>
                    <input type="text" id='image' name='image'
                        defaultValue={product.image} />
                    <label htmlFor="description">Description:</label>
                    <input type="text" id='description' name='description'
                        defaultValue={product.description} />
                    <label htmlFor="price">Price:</label>
                    <input type="text" id='price' name='price'
                        defaultValue={product.price} />
                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" id='quantity' name='quantity'
                        defaultValue={product.quantity} />
                    <input type="submit" value='Edit Product' />
                </form>
                <button><a href="/products">Back</a></button>

            </DefaultLayout>
        )
    }
}
module.exports = Edit