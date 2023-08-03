import { Client } from "./Client";

const client = new Client()

const res = await client.get({
  path: '/api/1.0/tasks/:taskID',
  params: {
    taskID: '123'
  }
})
res.title

{
  // GET
  const res = await client.get({
    path: "/api/1.0/tasks",
  })

  console.log(res.map(task => task.title))
}

{
  // GET
  const res = await client.get({
    path: "/api/1.0/tasks/:taskID",
    params: {
      taskID: "123"
    }
  })

  console.log(res.title)
}

{
  // POST
  const res = await client.post({
    path: "/api/1.0/tasks",
    body: {
      title: "New Task",
      description: "This is a new task",
      completed: false
    }
  })

  console.log(res.title)
}

{
  // PUT
  const res = await client.put({
    path: "/api/1.0/tasks/:taskID",
    params: {
      taskID: "123"
    },
    body: {
      title: "New Task",
      description: "This is a new task",
      completed: false
    }
  })

  console.log(res.title)
}

{
  // DELETE
  const _ = await client.delete({
    path: "/api/1.0/tasks/:taskID",
    params: {
      taskID: "123"
    }
  })
}
