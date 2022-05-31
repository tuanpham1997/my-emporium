const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


class Show extends React.Component {
    render() {
        const { product } = this.props
        return (
            <DefaultLayout title={`${product.name}'s page`}>
                <div className='centered'>
                    <div className='show-card'>
                        <p className='font-big'>{product.name}</p>
                        <img className='img' src={`${product.image}`} alt={product.name} />
                        <p className='full'>{product.description}</p>
                        <div className='sub-card'>
                            <p>{`Price:${product.price} ${product.price > 1 ? 'rows' : 'row'}`}</p>
                            <p>{product.quantity > 0 ? `Stock:${product.quantity}` : 'OUT OF STOCK'}</p>
                            <form action={`/products/${product._id}?_method=DELETE`} method="POST"><input type="submit" value="Delete" /></form>
                        </div>
                    </div>
                    <div className='holder'>
                        <button><a href="/products">Back</a></button>                            <button><a href={`/products/${product._id}/edit`}>Edit</a></button>
                        <form action={`/products/6295a013cd690abd0097a1a9/cart?_method=PUT`} method='POST'>
                            <input className='small' type="text" id='id' name='id' defaultValue={product.id}/>
                            <button type='submit'>Buy</button>
                        </form>
                    </div>


                </div>

            </DefaultLayout>
        )
    }
}

module.exports = Show