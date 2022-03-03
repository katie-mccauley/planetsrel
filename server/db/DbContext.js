import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GalaxySchema } from "../models/Galaxy";
import { MoonSchema } from "../models/Moon";
import { PlanetSchema } from "../models/Planet";
import { StarSchema } from "../models/Star";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Galaxies = mongoose.model('Galaxy', GalaxySchema);

  Stars = mongoose.model('Star', StarSchema)

  Planets = mongoose.model('Planet', PlanetSchema)

  Moons = mongoose.model('Moon', MoonSchema)
}

export const dbContext = new DbContext()
