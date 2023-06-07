import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  quote: {
    type: String,
    required: [true, "Quote is required."],
  },
  tag: {
    type: String,
    required: [true, "tag is required."],
  },
});

const Quote = models.Quote || model("Quote", QuoteSchema);

export default Quote;
