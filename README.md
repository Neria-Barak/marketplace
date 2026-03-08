users:

/users/:id GET:
get user with id 'id'

res:
{
    _id, name
}


/users/ GET:
get all users

res:
[
    {
        _id, name
    },
    .
    .
    .
]


/users/ POST:
add user

req:
body: {
    name
}
res:
{
    _id, name
}


/users/:id PATCH:
update user with id 'id'

req:
body: {
    name
}
res:
{
    _id, name
}


/users/:id DELETE:
delete user with id 'id'

res:
{
    _id, name
}
