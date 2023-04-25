import sqlite3
conn = sqlite3.connect('college.db')


curr = conn.cursor()

query = '''
insert into students
(rollno, name)
values
(2020111014, 'Shreyas')
'''
curr.execute(query)

conn.commit()

query = "select * from students"

curr.execute(query)

# print(curr.fetchall())
for row in curr.fetchall():
    print(row)
    print("--------")

conn.close()