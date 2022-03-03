import { dbContext } from "../db/DbContext"

class SpeciesService {
  async getAllSpecies(query = {}) {
    const species = await dbContext.Species.find(query)
    return species
  }

  async createSpecies(body) {
    const species = await dbContext.Species.create(body)
    return species
  }

}

export const speciesService = new SpeciesService()