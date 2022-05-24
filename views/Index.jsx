const React = require('react')


class Index extends React.Component{
    render () {
        const {product} = this.props
        return(
            <>
            <nav>
                <a href="/products/new">Post a product</a>
            </nav>
            <ul>
                {product.map(product => {
                    return(
                        <li key={product._id}>
                            <p><a href={`/products/${product._id}`}>{product.name}</a></p>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <p>{product.quantity}</p>
                        </li>
                    )
                })}
            </ul>
            </>
        )
    }
}

module.exports = Index