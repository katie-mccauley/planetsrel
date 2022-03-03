import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: ObjectId, ref: 'Accounts', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }

)