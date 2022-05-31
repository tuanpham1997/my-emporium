const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


class Index extends React.Component {
    render() {
        const { product } = this.props
        return (
            <DefaultLayout title='Shop'>

                <nav>
                    <a href="/products/new">Post a product</a>
                </nav>
                <ul className='card-container'>
                    {product.map(product => {
                        return (
                            <li className='card' key={product._id}>
                                <p><a href={`/products/${product._id}`}>{product.name}</a></p>
                                <img src={`${product.image}`} alt={product.name} />
                                <p className='full'>{product.description}</p>
                                <div className='sub-card'>
                                <p>{`Price:${product.price} ${product.price>1 ? 'rows' :'row'}`}</p>
                                <p>{`Stock:${product.quantity}`}</p>
                                <form action={`/products/${product._id}?_method=DELETE`} method="POST"><input type="submit" value="Delete" /></form>
                                <button><a href={`/products/${product._id}/edit`}>Edit</a></button>
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