CREATE TABLE Blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    image TEXT NOT NULL
);

INSERT INTO Blogs (title, content, image) VALUES
('Blog 1', 'Blog 1 content', 'https://dummyimage.com/300x120/000/ffffff&text=tmh-keyyard')
,('Blog 2', 'Blog 2 content', 'https://dummyimage.com/300x120/000/ffffff&text=tmh-keyyard')
,('Blog 3', 'Blog 3 content', 'https://dummyimage.com/300x120/000/ffffff&text=tmh-keyyard')
,('Blog 4', 'Blog 4 content', 'https://dummyimage.com/300x120/000/ffffff&text=tmh-keyyard')
,('Blog 5', 'Blog 5 content', 'https://dummyimage.com/300x120/000/ffffff&text=tmh-keyyard');

CREATE TABLE BlogDetails (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    blog_id INTEGER NOT NULL,
    date TEXT NOT NULL,
    brief TEXT NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (blog_id) REFERENCES Blogs(id)
);

INSERT INTO BlogDetails (blog_id, date, brief, content) VALUES
(1, '2024-01-01', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique urna mi, at luctus justo blandit ut. Sed urna ipsum, molestie in tincidunt vel, elementum non sem.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique urna mi, at luctus justo blandit ut. Sed urna ipsum, molestie in tincidunt vel, elementum non sem. Maecenas condimentum aliquam metus, vitae facilisis diam porttitor vel. Donec a aliquet nisi. Maecenas luctus pellentesque erat id hendrerit. Etiam vitae tellus vitae diam elementum tempus. Sed et maximus eros, eu bibendum dui. Praesent eget turpis sit amet turpis tincidunt interdum. Fusce at sem non sapien suscipit ultrices ullamcorper eget nunc. Aenean tincidunt facilisis libero at sollicitudin. Aliquam velit neque, lobortis sit amet nulla sed, pretium cursus felis. Phasellus ut augue eu risus auctor porttitor eu id lectus.
'),
(2, '2024-01-02', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique urna mi, at luctus justo blandit ut. Sed urna ipsum, molestie in tincidunt vel, elementum non sem.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique urna mi, at luctus justo blandit ut. Sed urna ipsum, molestie in tincidunt vel, elementum non sem. Maecenas condimentum aliquam metus, vitae facilisis diam porttitor vel. Donec a aliquet nisi. Maecenas luctus pellentesque erat id hendrerit. Etiam vitae tellus vitae diam elementum tempus. Sed et maximus eros, eu bibendum dui. Praesent eget turpis sit amet turpis tincidunt interdum. Fusce at sem non sapien suscipit ultrices ullamcorper eget nunc. Aenean tincidunt facilisis libero at sollicitudin. Aliquam velit neque, lobortis sit amet nulla sed, pretium cursus felis. Phasellus ut augue eu risus auctor porttitor eu id lectus.
'),
(3, '2024-01-03', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique urna mi, at luctus justo blandit ut. Sed urna ipsum, molestie in tincidunt vel, elementum non sem.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique urna mi, at luctus justo blandit ut. Sed urna ipsum, molestie in tincidunt vel, elementum non sem. Maecenas condimentum aliquam metus, vitae facilisis diam porttitor vel. Donec a aliquet nisi. Maecenas luctus pellentesque erat id hendrerit. Etiam vitae tellus vitae diam elementum tempus. Sed et maximus eros, eu bibendum dui. Praesent eget turpis sit amet turpis tincidunt interdum. Fusce at sem non sapien suscipit ultrices ullamcorper eget nunc. Aenean tincidunt facilisis libero at sollicitudin. Aliquam velit neque, lobortis sit amet nulla sed, pretium cursus felis. Phasellus ut augue eu risus auctor porttitor eu id lectus.
'),
(4, '2024-01-04', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique urna mi, at luctus justo blandit ut. Sed urna ipsum, molestie in tincidunt vel, elementum non sem.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique urna mi, at luctus justo blandit ut. Sed urna ipsum, molestie in tincidunt vel, elementum non sem. Maecenas condimentum aliquam metus, vitae facilisis diam porttitor vel. Donec a aliquet nisi. Maecenas luctus pellentesque erat id hendrerit. Etiam vitae tellus vitae diam elementum tempus. Sed et maximus eros, eu bibendum dui. Praesent eget turpis sit amet turpis tincidunt interdum. Fusce at sem non sapien suscipit ultrices ullamcorper eget nunc. Aenean tincidunt facilisis libero at sollicitudin. Aliquam velit neque, lobortis sit amet nulla sed, pretium cursus felis. Phasellus ut augue eu risus auctor porttitor eu id lectus.
'),
(5, '2024-01-05', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique urna mi, at luctus justo blandit ut. Sed urna ipsum, molestie in tincidunt vel, elementum non sem.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique urna mi, at luctus justo blandit ut. Sed urna ipsum, molestie in tincidunt vel, elementum non sem. Maecenas condimentum aliquam metus, vitae facilisis diam porttitor vel. Donec a aliquet nisi. Maecenas luctus pellentesque erat id hendrerit. Etiam vitae tellus vitae diam elementum tempus. Sed et maximus eros, eu bibendum dui. Praesent eget turpis sit amet turpis tincidunt interdum. Fusce at sem non sapien suscipit ultrices ullamcorper eget nunc. Aenean tincidunt facilisis libero at sollicitudin. Aliquam velit neque, lobortis sit amet nulla sed, pretium cursus felis. Phasellus ut augue eu risus auctor porttitor eu id lectus.
');
