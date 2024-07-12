from flask import Flask, render_template
from productPages import get_products, get_product_detail
from blogPages import get_blogs, get_blog_detail
app = Flask(__name__)

@app.route('/')
@app.route('/index.html')
def index():
    products = get_products()
    return render_template('index.html', products=products)

@app.route('/product/<int:product_id>')
def product_detail(product_id):
    product = get_product_detail(product_id)
    if not product:
      return "Sản phẩm không khả dụng - Product is not available", 404 
    return render_template('product_detail.html', product=product)

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/contact.html')
def contact():
    return render_template('contact.html')

@app.route('/faq.html')
def faq():
    return render_template('faq.html')

@app.route('/blog.html')
def blog():
    blogs = get_blogs()
    return render_template('blog.html', blogs=blogs)

@app.route('/blog/<int:blog_id>')


@app.route('/checkout.html')
def checkout():
    return render_template('checkout.html')

if __name__ == '__main__':
    app.run(debug=True)
