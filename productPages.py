import sqlite3

def get_products():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    query = "SELECT id, category, name, price, image, rating FROM products ORDER BY category ASC"
    # return a list of tuples (id, category, name, price, image, rating)
    cursor.execute(query)
    # store on buffer of the database server
    rows = cursor.fetchall() 
    # fetch return a list of tuples from the buffer
    conn.close()
    products = [] # create an empty list to store the dictionaries
    for row in rows: 
    # for each tuple, convert to a dictionary of each with key-value pairs
        product = {
            'id': row[0],
            'category': row[1],
            'name': row[2],
            'price': row[3],
            'image': row[4],
            'rating': row[5]
        }
        products.append(product)
    return products
# return a list of dictionaries so they are stored in our memory
# and can be accessed by flask to render the template

def get_product_detail(product_id):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    query = "SELECT category, name, price, image, rating FROM products WHERE id = ?"
    # The ? is a placeholder for a real value, a value you must bind to the compiled statement.
    # The SQLite doc on Binding Values goes into detail concerning the bind.
    # https://www.sqlite.org/c3ref/bind_blob.html
    cursor.execute(query, (product_id,)) # pass the product_id as a tuple
    product = cursor.fetchone() 
    conn.close()
    if product:
        return {
            "category": product[0],
            "name": product[1],
            "price": product[2],
            "image": product[3],
            "rating": product[4]
        }
    return None