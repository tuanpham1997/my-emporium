const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


class Index extends React.Component {
    render() {
        const { product } = this.props
        return (
            <DefaultLayout title='The Actual Emporium!'>
                <ul className='card-container'>
                    {product.map(product => {
                        return (
                            <li className='card' key={product._id}>
                                <p><a href={`/products/${product._id}`}>{product.name}</a></p>
                                <a className='img' href={`/products/${product._id}`}><img src={`${product.image}`} alt={product.name} /></a>
                                <p className='full'>{product.description}</p>
                                <div className='sub-card'>
                                    <p>{`Price:${product.price} ${product.price > 1 ? 'rows' : 'row'}`}</p>
                                    <p>{product.quantity > 0 ? `Stock:${product.quantity}` : 'OUT OF STOCK'}</p>
                                    <form action={`/products/${product._id}?_method=DELETE`} method="POST"><input type="submit" value="Delete" /></form>
                                    <a href={`/products/${product._id}/edit`}><button>Edit</button></a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index