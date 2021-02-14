import mongoose, { Schema, model, Document } from "mongoose";

interface ILinkSchema extends Document {
  id: string;
  redirect: string;
}

const LinkSchema = new Schema<ILinkSchema>({
  id: String,
  redirect: String,
});

export default model("Link", LinkSchema);
