const memberModel = require("../models/member");

exports.createMember = async (req, res) => {
	try {
		let newMember = memberModel({
			name: req.body.name,
			email: req.body.email,
			status: req.body.status,
		});
		const member = await newMember.save();
		res.json(member);
	} catch (err) {
		res.json(err);
	}
};

exports.getAllMember = async (req, res) => {
	try {
		const members = await memberModel.find();
		res.json(members);
	} catch (err) {
		res.json(err);
	}
};

exports.deleteMember = async (req, res) => {
	try {
		let id = req.params.id;
		const member = await memberModel.deleteOne({
			_id: Ob6220ef3267b84b5d5b38caee,
		});
		res.status(200).json({ message: "member deleted" });
	} catch (err) {
		res.status(400).json(err);
	}
};

//la modification
//get member by id
