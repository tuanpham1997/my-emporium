const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


class Cart extends React.Component {
    render() {
        const { cart } = this.props
        const price = cart.items.map(item => { return item.price }).reduce((item1, item2) => { return item1 + item2 }, 0)
        // console.log(price)
        return (
            <DefaultLayout title='The Actual Emporium!'>
                {cart.items < 1 ? <h2 className='centered'>YOUR CART IS EMPTY!</h2> :
                    <ul className='card-container'>
                        {cart.items.map((product, i) => {
                            return (
                                <li className='card' key={product._id}>
                                    <p><a href={`/products/${product._id}`}>{product.name}</a></p>
                                    <a className='img' href={`/products/${product._id}`}><img src={`${product.image}`} alt={product.name} /></a>
                                    <p className='full'>{product.description}</p>
                                    <div className='sub-card'>
                                        <p>{`Price:${product.price} ${product.price > 1 ? 'rows' : 'row'}`}</p>
                                        <form action={`/products/6295a013cd690abd0097a1a9/${i}/delete?_method=PUT`} method="POST"><input type="submit" value="Return Item" /></form>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                }
                {cart.items < 1 ? null : <p className='centered'>{`Total cost of items is ${price} ${price > 1 ? 'rows' : 'row'}`}</p>}
            </DefaultLayout>
        )
    }
}

module.exports = Cart