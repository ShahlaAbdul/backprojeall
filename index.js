import express from "express";
const app = express();
import cors from "cors";
const port = 7000;
import mongoose, { Schema } from "mongoose";


app.use(cors())
app.use(express.json())
const eduSchema = new Schema({
  image: String, 
  name: String,
  price: Number,

});
const EduModel = mongoose.model("Edu", eduSchema);
app.get('/',async(req, res) => {
    try {
      const edudata= await EduModel.find({})
    res.send(edudata)
  } catch (error) {
    res.send(error.message)
  }
})
app.get("/:id", async (req, res) => {
    try {
      const {id}=req.params
    const edudata = await EduModel.findById(id)
    res.send(edudata);
  } catch (error) {
    res.send(error.message);
  }
});

app.post('/', async (req, res) => {
    try {
        const { image, name, price } = req.body
        const newEdudata = EduModel({ image, name, price })
        await newEdudata.save()
        res.send(newEdudata)
    } catch (error) {
        res.send(edudata)
    }
})

app.put("/:id", async (req, res) => {
  try {
      const { id } = req.params;
        const { image, name, price } = req.body;
    const newEdudata = await EduModel.findByIdAndUpdate(id);
    res.send(newEdudata);
  } catch (error) {
    res.send(error.message);
  }
});
app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newEdudata = await EduModel.findByIdAndUpdate(id);
    res.send(newEdudata);
  } catch (error) {
    res.send(error.message);
  }
});
mongoose
  .connect("mongodb+srv://Shahla:sehla200415@mycluster.vpdzf3b.mongodb.net/")
  .then(() => console.log("Connected")); 
    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
