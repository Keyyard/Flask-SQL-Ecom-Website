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
    try:
        query = "SELECT title, content, image FROM blogs WHERE id = ?"
        cursor.execute(query, (blog_id,))
        blog = cursor.fetchone()

        query2 = "SELECT date, brief, content FROM blogdetails WHERE id = ?"
        cursor.execute(query2, (blog_id,))
        blog_detail_data = cursor.fetchone()

        if blog and blog_detail_data:
            blog_detail = {
                "title": blog[0],
                "content": blog_detail_data[2], 
                "image": blog[2],
                "date": blog_detail_data[0],
                "brief": blog_detail_data[1]
            }
            return blog_detail
        else:
            return None
    finally:
        connect.close()