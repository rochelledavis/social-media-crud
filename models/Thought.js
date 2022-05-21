const { Schema, model } = require("mondgoose");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      validate: [({ length }) => length <= 280],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal), //need to find a replacement for "dateFormat"
    },
    username: [
      {
        type: Schema.Types.username,
        ref: "User",
      },
    ],
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    validate: [({ length }) => length <= 280],
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal), //need to find a replacement for "dateFormat"
  },
});

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.reduce(
    (total, reactions) => total + reactions.replies.length + 1,
    0
  );
});

const Thoughts = model("Thoughts", ThoughtsSchema);

module.exports = Thought;
