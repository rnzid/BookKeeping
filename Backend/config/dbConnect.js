const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://Ranjit:J6wNDYQU75huyi4k@cluster0.qdyia3u.mongodb.net/book-keeping-app"
    )
    .then(() => console.log("Db connected"))
    .catch((err) => console.log(err));
};

module.exports = dbConnect;