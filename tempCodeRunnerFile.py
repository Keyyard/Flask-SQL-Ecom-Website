def get_cart_items():
    cart_items = get_cart_items(session_id="current_session_id")
    return jsonify(cart_items)