import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const SpaceshipSchema = new Schema(
  {
    creatorId: { type: ObjectId, ref: "Accounts", required: true },
    speciesId: { type: ObjectId, ref: "Species", required: true },
    planetId: { type: ObjectId, ref: "Planet", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }

)
SpaceshipSchema.virtual('species', {
  localField: 'speciesId',
  foreignField: '_id',
  justOne: true,
  ref: 'Species'
})
SpaceshipSchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  justOne: true,
  ref: 'Planet'
})
