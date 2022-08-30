import dbConnect from "./dbConnect.js";

export async function getCar(req, res) {
    const db = dbConnect()
    const collection = await db.collection('cars').get()
    .catch((err) => req.status(500).send(err))
    const car = collection.docs.map((doc) => {
        let car = doc.data()
        car.id = doc.id
        return car
    })
    res.send(car)
}

export async function createCar(req, res) {
    const newCar = req.body
    if (!newCar || !newCar.car) {
        res.status(400).send({success: false, message: "Invalid request"})
        return
    }
    const db = dbConnect()
    await db
    .collection
    .add(newCar)
    .catch((err) => res.status(500).send(err))
    res.status(201)
    getCar(req, res)
}




