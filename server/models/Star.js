import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    creatorId: { type: ObjectId, ref: 'Accounts', required: true },
    galaxyId: { type: ObjectId, ref: 'Galaxy', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }

)