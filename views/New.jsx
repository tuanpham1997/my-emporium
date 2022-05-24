const React = require('react')


class New extends React.Component {
    render() {
        return(
            <>
            <form action="/products" method='POST'>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' name='name'/>
                <label htmlFor="description">Description:</label>
                <input type="text" id='description' name='description'/>
                <label htmlFor="price">Price:</label>
                <input type="text" id='price' name='price'/>
                <label htmlFor="quantity">Quantity</label>
                <input type="text" id='quantity' name='quantity'/>
                <input type="submit" value='Create Product' />
            </form>
            <button><a href="/products">Back</a></button>
            </>
        )
    }
}
module.exports = New