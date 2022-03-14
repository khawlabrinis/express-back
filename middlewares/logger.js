const logger = (req, res, next) => {
	console.log("heyy i am there");
	next();
};

module.exports = logger;
