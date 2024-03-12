import { db } from "../models/index.js";
const FollowUser = db.FollowUserç;

export const createFollowUser = async (req, res) => {
  try {
    let followUser = await FollowUser.create(req.body);
    res.status(200).send({ message: followUser });
  } catch (err) {
    res.status(500).send({ message: "Error creating the user follow" });
  }
};

export const getAllUserYouFollow = async (req, res) => {
  try {
    let { id } = req.params;
    let usersYouFollow = await FollowUser.findAll({
      where: { follow_user: id },
    });
    if (!usersYouFollow)
      res.status(400).send({ message: "The user don´t follow anyone yet." });
    res.status(200).send(usersYouFollow);
  } catch (err) {
    res.status(500).send({ message: "Error getting the users" });
  }
};
