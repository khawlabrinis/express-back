const app = require("./index");
const mongoose = require("mongoose");
const PORT = 3001;
const mongoDb =
	"mongodb+srv://khawla:khawla@cluster0-lxvzr.mongodb.net/crudDB?retryWrites=true&w=majority";
mongoose.connect(
	mongoDb,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) console.log("Error during mongoose connection: " + err);
		else {
			console.log("Successful mongoose connection.");
		}
	}
);

app.listen(PORT, () => {
	console.log(`server successfully runs on ${PORT}`);
});
