const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


class Edit extends React.Component {
    render() {
        const { product } = this.props
        return (
            <DefaultLayout title="Edit">
                <div className="centered">
                    <div className="formC">
                        <form className='show' action={`/products/${product.id}?_method=PUT`} method='POST'>
                            <div className="formGr">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id='name' name='name'
                                    defaultValue={product.name} />
                            </div>
                            <div className="formGr">
                                <label htmlFor="image">Image URL:</label>
                                <input type="text" id='image' name='image'
                                    defaultValue={product.image} />
                            </div>
                            <div className="formGr">
                                <label htmlFor="description">Description:</label>
                                <textarea name="description" id="description" cols="30" rows="10"
                                    defaultValue={product.description}></textarea>
                            </div>
                            <div className="formGr">
                                <label htmlFor="price">Price:</label>
                                <input type="text" id='price' name='price'
                                    defaultValue={product.price} />
                            </div>
                            <div className="formGr">

                                <label htmlFor="quantity">Quantity</label>
                                <input type="text" id='quantity' name='quantity'
                                    defaultValue={product.quantity} />
                            </div>
                            <div className="formGr reverse">
                                <input type="submit" value='Edit Product' />
                            </div>
                        </form>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}
module.exports = Edit