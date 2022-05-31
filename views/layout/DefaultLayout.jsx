const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/style.css" />
                </head>
                <body>
                    <div className='nav-wrapper'>
                        <nav className='navbar'>
                            <h1>The Emporium</h1>
                            <ul>
                                <li className="nav-item"><a href="/products">Emporium</a></li>
                                <li className="nav-item"><a href="/products/new">Profile</a></li>
                                <li className="nav-item"><a href="/products/6295a013cd690abd0097a1a9/cart">Cart</a></li>
                                <li className="nav-item"><a href="/products/new">Add Product</a></li>
                            </ul>
                        </nav>
                    </div>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout