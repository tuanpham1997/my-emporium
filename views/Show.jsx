const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


class Show extends React.Component {
    render() {
        const { product } = this.props
        return (
            <DefaultLayout title={`${product.name}'s page`}>

                <p>{product.name}</p>
                <img src={`${product.image}`} alt={product.name} />
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
                <hr />
                <form action={`/products/${product._id}?_method=DELETE`} method="POST"><input type="submit" value="Delete" /></form>
                <button><a href="/products">Back</a></button>

            </DefaultLayout>
        )
    }
}

module.exports = Show