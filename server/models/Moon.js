import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const MoonSchema = new Schema(

  {
    name: { type: String, required: true },
    size: { type: Number, required: true },
    creatorId: { type: ObjectId, ref: 'Accounts', required: true },
    planetId: { type: ObjectId, ref: 'Planet', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

