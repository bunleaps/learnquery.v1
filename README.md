# Learn Query

Just a simple query application that I learned. I learned to use Next.js and javascript for validation and filtering the data based on JSON data provided from the server.

```json
{
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      age: 30,
      position: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@example.com",
      age: 25,
      position: "Data Scientist",
    },
    {
      id: 3,
      name: "Peter Smith",
      email: "petersmith@example.com",
      age: 40,
      position: "Manager",
    },
```

### Server

The server is just a simple express.js server that send the json like provided above.

### Client

The client is a simple nextjs app that use useEffect fetch and javascript useState for all filtering. I also use tailwind css for styling of the page.

### Result

I want to query data without too much work on the backend, so I tried to query data on the front-end instead because it might reduce time working on the backend. And this is just a first version. The next project I want to try backend query instead which also a better options because it is being used in a lot of the modern apps.
