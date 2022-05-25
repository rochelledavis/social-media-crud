const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThoughtById,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/<userId>
router.route("/").get(getAllThought).post(addThought);

router.route("/:thoughtId").get(getThoughtById).put(updateThoughtById);

// /api/comments/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
