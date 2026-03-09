users:

/users/:id GET:
get user with id 'id'

res:
User


/users/ GET:
get all users

res:
User[]


/users/ POST:
add user

req:
body: {
    name, dateOfBirth, gender
}
res:
User


/users/:id PATCH:
update user with id 'id'

req:
body: {
    name?, dateOfBirth?, gender?
}
res:
User


/users/:id DELETE:
delete user with id 'id'

res:
User
