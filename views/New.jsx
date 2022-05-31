const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New Product">
                <div className='centered'>
                    <div className='formC'>
                        <form className='show' action="/products" method='POST'>
                            <div className="formGr">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id='name' name='name' />
                            </div>
                            <div className="formGr">
                                <label htmlFor="image">Image Url:</label>
                                <input type="text" id='image' name='image' />
                            </div>
                            <div className="formGr">
                                <label htmlFor="description">Description:</label>
                                <textarea name="description" id="description" cols="30" rows="10"></textarea>
                            </div>
                            <div className="formGr">
                                <label htmlFor="price">Price:</label>
                                <input type="text" id='price' name='price' />
                            </div>
                            <div className="formGr">
                                <label htmlFor="quantity">Quantity</label>
                                <input type="text" id='quantity' name='quantity' />
                            </div>
                            <div className='formGr reverse'>
                                <input type="submit" value='Create Product' />
                            </div>
                        </form>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}
module.exports = New