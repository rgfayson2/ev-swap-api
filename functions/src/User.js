import dbConnect from "./dbConnect.js"

export async function getUser(req, res) {
  const db = dbConnect()
  const collection = await db
    .collection("users")
    .get()
    .catch((err) => req.status(500).send(err))
  const users = collection.docs.map((doc) => {
    let user = doc.data()
    user.id = doc.id
    return user
  })
  res.send(users)
}

export async function createUser(req, res) {
  const newUser = req.body
    if (!newUser) {
      res.status(400).send({
        message: 'invalid input'
      })
      return
    }
  const db = dbConnect()
  await db
    .collection("users")
    .add(user)
    .then((doc) => res.status(201).send({message: doc.id}))
    .catch((err) => res.status(500).send(err))
}

