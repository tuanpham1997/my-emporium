const React = require('react')


class Show extends React.Component {
    render(){
        const {product} = this.props
        return(
            <>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <button><a href="/products">Back</a></button>
            </>
        )
    }
}

module.exports = Show