import fastify from 'fastify'

const app = fastify({
  logger: console.log
})

app.get('/', (request, reply) => {
  return reply.send({
    message: "hello 👋"
  })
})

await app.listen(80, '0.0.0.0')
console.log("Fastify server started successfully.")