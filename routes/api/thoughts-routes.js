const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/comments/<userId>
router.route("/:userId").post(addThought);

router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

// /api/comments/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").delete(removeThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
