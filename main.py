from flask import Flask, render_template, session, redirect, url_for, request
from productPages import get_products, get_product_detail
from blogPages import get_blogs, get_blog_detail
from cart import get_cart_items
from werkzeug.utils import secure_filename
import os
import hashlib
import sqlite3

app = Flask(__name__)
app.secret_key = 'super secret key'

# email is a key in session dictionary
# once user logs in, we store their email in their session cookie
# so that we can use it to identify them later
# if email is in session, user is logged in
# if email is not in session, user is not logged in

def getLoginDetails():
    if 'email' not in session:
        loggedIn = False
        email = ''
    else:
        loggedIn = True
        email = session['email']
    return (loggedIn, email)

@app.route("/loginForm")
def loginForm():
    if 'email' in session:
        return redirect(url_for('index'))
    else:
        return render_template('login.html')


@app.route("/login", methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        validation = is_valid(email, password)
        if validation == True:
            session['email'] = email
            return redirect(url_for('index'))
        elif validation == "email":
            return render_template('login.html', error='email')
        else:
            return render_template('login.html', error='password')

@app.route("/logout")
def logout():
    session.pop('email', None)
    return redirect(url_for('index'))

# Check if email and password are in the database and match
def is_valid(email, password):
    con = sqlite3.connect('database.db')
    cur = con.cursor()
    cur.execute('SELECT email, password FROM users')
    # Fetch all rows from the database table users
    data = cur.fetchall()
    con.close()
    for row in data:
        #row  col 0              col 1
        #row0 [email@sample.com] [password]
        #row1 [email@sample.com] [password]
        if row[0] == email and row[1] == hashlib.md5(password.encode()).hexdigest():
            #hashlib.md5(password.encode()).hexdigest() is the hashed password
            return True
        else:
            if row[0] == email:
                return 'password'
            else:
                return 'email'
    return False

@app.route("/register", methods = ['GET', 'POST'])
def register():
    if request.method == 'POST':

        password = request.form['password']
        email = request.form['email']

        #Hash password
        password = hashlib.md5(password.encode()).hexdigest()

        conn = sqlite3.connect('database.db')
        cur = conn.cursor()
        cur.execute('SELECT email FROM users WHERE email = ?', (email,))
        existing_email = cur.fetchone()
        if existing_email:
            return render_template('register.html', error=True)
        cur.execute('''
        INSERT INTO users (email, password) VALUES (?, ?)
        ''', (email, password))
        conn.commit()
        conn.close()
        return redirect(url_for('loginForm'))

@app.route("/registerForm")
def registerForm():
    return render_template("register.html")

@app.route('/')
def index():
    products = get_products()
    loggedIn, email = getLoginDetails()
    cart, totalPrice = get_cart_items(email)
    return render_template('index.html', products=products, loggedIn=loggedIn, cart=cart, totalPrice=totalPrice)

@app.route('/product/<int:product_id>')
def product_detail(product_id):
    product = get_product_detail(product_id)
    loggedIn, email = getLoginDetails()
    cart, totalPrice = get_cart_items(email)
    if not product:
        return "Sản phẩm không khả dụng - Product is not available", 404 
    return render_template('product_detail.html', product=product,  loggedIn=loggedIn, cart=cart, totalPrice=totalPrice)

@app.route("/addToCart", methods = ['POST', 'GET'])
def addToCart():
    if 'email' not in session:
        return redirect(url_for('loginForm'))
    else:
        productId = int(request.form.get('productId'))
        with sqlite3.connect('database.db') as conn:
            cur = conn.cursor()
            cur.execute("SELECT id FROM users WHERE email = ?", (session['email'],))
            userId = cur.fetchone()[0]
            
            # Check if the item is already in the cart
            cur.execute("SELECT quantity FROM cart WHERE userId = ? AND productId = ?", (userId, productId))
            result = cur.fetchone()
            
            try:
                if result:
                    # If item is already in the cart, update the quantity
                    new_quantity = result[0] + 1
                    cur.execute("UPDATE cart SET quantity = ? WHERE userId = ? AND productId = ?", (new_quantity, userId, productId))
                else:
                    # If item is not in the cart, insert it with quantity = 1
                    cur.execute("INSERT INTO cart (userId, productId, quantity) VALUES (?, ?, 1)", (userId, productId))
                conn.commit()
            except:
                conn.rollback()
                # If there is an error, rollback the database to the last commit
        conn.close()
        return redirect(url_for('index'))

@app.route("/removeFromCart", methods=['POST', 'GET'])
def removeFromCart():
    if 'email' not in session:
        return redirect(url_for('loginForm'))
    else:
        productId = int(request.form.get('productId'))
        with sqlite3.connect('database.db') as conn:
            cur = conn.cursor()
            cur.execute("SELECT id FROM users WHERE email = ?", (session['email'],))
            userId = cur.fetchone()[0]
            
            # Check the current quantity of the item in the cart
            cur.execute("SELECT quantity FROM cart WHERE userId = ? AND productId = ?", (userId, productId))
            result = cur.fetchone()
            
            try:
                if result and result[0] > 1:
                    # If quantity is greater than 1, decrease it by 1
                    new_quantity = result[0] - 1
                    cur.execute("UPDATE cart SET quantity = ? WHERE userId = ? AND productId = ?", (new_quantity, userId, productId))
                elif result and result[0] == 1:
                    # If quantity is 1, remove the item from the cart
                    cur.execute("DELETE FROM cart WHERE userId = ? AND productId = ?", (userId, productId))
                conn.commit()
            except:
                conn.rollback()
        conn.close()
        return redirect(url_for('index'))

@app.route("/checkout")
def checkout():
    loggedIn, email = getLoginDetails()
    cart, totalPrice = get_cart_items(email)
    return render_template('checkout.html', loggedIn=loggedIn, cart=cart, totalPrice=totalPrice)


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

@app.route('/blogs/<int:blog_id>')
def blog_detail(blog_id):
    blog = get_blog_detail(blog_id)
    if not blog:
        return "Blog không khả dụng - Blog is not available", 404
    if len(blog) > 0:
        return render_template('blog_detail.html', blog=blog)
    else:
        return "Blog không khả dụng - Blog is not available", 404

if __name__ == '__main__':
    app.run(debug=True)
