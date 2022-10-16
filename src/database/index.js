import mongoose from "mongoose";

class dataBase {
  constructor(dataBaseUrl) {
    this.dataBaseUrl = dataBaseUrl;
  }
  mongooseConnect(database) {
    try {
      if (
        typeof this.dataBaseUrl === "string" &&
        typeof database === "string"
      ) {
        mongoose
          .connect(`mongodb://${this.dataBaseUrl + database}`)
          .then(() => {
            console.log("mongoDB connect with mongoose");
          })
          .catch((error) => {
            console.log("mongoDB dont connect with mongoose");
            console.log(error);
          });
      }
    } catch (err) {
      console.error(err);
    }
  }
}
export default dataBase;
