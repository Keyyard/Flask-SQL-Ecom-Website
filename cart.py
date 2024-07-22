import sqlite3
def get_cart_items(user):
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row  # This enables column access by name
    cur = conn.cursor()

    cur.execute('''
    SELECT product_id, product_price FROM Cart_Items
    JOIN products ON Cart_Items.product_id = products.id
    JOIN Carts ON Cart_Items.cart_id = Carts.cart_id
    WHERE Carts.user = ?
    ''', (user,))

    items = [dict(row) for row in cur.fetchall()]
    conn.close()
    return items

def add_to_cart(user, product_id, quantity=1):
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()
    # Get the cart_id of the user
    cur.execute('''
    SELECT cart_id FROM Carts WHERE user = ?
    ''', (user,))
    cart_id = cur.fetchone()
    # If the user does not have a cart, create one
    if not cart_id:
        # Create a new cart for the user
        cur.execute('''
        INSERT INTO Carts (user) VALUES (?)
        ''', (user,))
        conn.commit()
        # Get the cart_id of the user
        cur.execute('''
        SELECT cart_id FROM Carts WHERE user = ?
        ''', (user,))
        cart_id = cur.fetchone()
    # Add the product to the cart
    cur.execute('''
    INSERT INTO Cart_Items (cart_id, product_id, quantity)
    VALUES (?, ?, ?)
    ''', (cart_id[0], product_id, quantity))
    conn.commit()
    conn.close()


