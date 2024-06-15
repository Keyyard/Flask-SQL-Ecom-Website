from flask import Flask, render_template
from productPages import get_products, get_product_detail

app = Flask(__name__)

@app.route('/')
def index():
    products = get_products()
    return render_template('index.html', products=products)

@app.route('/product/<int:product_id>')
def product_detail(product_id):
    product = get_product_detail(product_id)
    if not product:
      return "Sản phẩm không khả dụng - Product is not available", 404 
    return render_template('product_detail.html', product=product)

if __name__ == '__main__':
    app.run(debug=True)
