import sqlite3

def get_blogs():
    connect = sqlite3.connect('blogs.db')
    cursor = connect.cursor()
    query = "SELECT id, title, content, image FROM blogs ORDER BY id DESC"
    cursor.execute(query)
    rows = cursor.fetchall()
    connect.close()
    blogs = []
    for row in rows:
        blog = {
            'id': row[0],
            'title': row[1],
            'content': row[2],
            'image': row[3]
        }
        blogs.append(blog)
    return blogs

def get_blog_detail(blog_id):
    connect = sqlite3.connect('blogs.db')
    cursor = connect.cursor()
    query = "SELECT title, content, image FROM blogs WHERE id = ?"
    cursor.execute(query, (blog_id,))
    blog = cursor.fetchone()
    connect.close()
    blog_detail = {
        "title": blog[0],
        "date": blog[1],
        "content": blog[2],
        "image": blog[3]
    }
    return blog_detail