import sqlite3
def get_cart_items(email):
        conn = sqlite3.connect('database.db')
        cur = conn.cursor()
        cur.execute("SELECT id FROM users WHERE email = ?", (email,))
        userId = cur.fetchone()
        if userId is None:
            return [], 0  # User not found
        userId = int(userId[0])
        cur.execute("""SELECT products.id, products.name, products.price, products.image 
                       FROM products 
                       INNER JOIN cart ON products.id = cart.ProductId 
                       WHERE cart.userId = ?""", (userId,))
        products_tuples = cur.fetchall()
        # Convert list of tuples to list of dictionaries, handling price conversion
        cart = [{"id": row[0], "name": row[1], "price": row[2], "image": row[3]} for row in products_tuples]
        # Sum prices using the dictionary key, after conversion
        prices = [{"price": int(row[2].replace('₫', '').replace(',', ''))} for row in products_tuples]
        cur.execute("SELECT quantity FROM cart WHERE userId = ?", (userId,))
        quantities = cur.fetchall()
        for i, quantity in enumerate(quantities):
            cart[i]["quantity"] = quantity[0]
        conn.close()
        totalPrice = sum([price["price"] * quantity[0] for price, quantity in zip(prices, quantities)])
        totalPrice = "{:,}".format(totalPrice) + "₫"
        return cart, totalPrice