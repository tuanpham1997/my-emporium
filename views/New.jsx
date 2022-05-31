const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New Product">

                <form action="/products" method='POST'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name' />
                    <label htmlFor="image">Image Url:</label>
                    <input type="text" id='image' name='image' />
                    <label htmlFor="description">Description:</label>
                    <input type="text" id='description' name='description' />
                    <label htmlFor="price">Price:</label>
                    <input type="text" id='price' name='price' />
                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" id='quantity' name='quantity' />
                    <input type="submit" value='Create Product' />
                </form>
                <button><a href="/products">Back</a></button>

            </DefaultLayout>
        )
    }
}
module.exports = New