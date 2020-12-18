const connectToDatabase = require("../../../utils/mongodb");

module.exports = async (req, res) => {
  const {uid} = req.query 
  console.log(uid)
  
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const gates = db.collection("gates");
  
    const student = await studentCollection.findOne({ UID: "29612150" });
   
    employee || student
      ? res.status(200).json({ data: "verified" })
      : res.status(200).json({ data: "not verified" });
};
