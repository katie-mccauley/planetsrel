import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class GalaxiesService {
  async getAll(query = {}) {
    const galaxies = await dbContext.Galaxies.find(query)
    return galaxies
  }

  async getById(id) {
    const galaxy = await dbContext.Galaxies.findById(id)
    if (!galaxy) {
      throw new BadRequest('Invalid galaxy')
    }
    return galaxy
  }
  async createGalaxy(body) {
    const galaxy = await dbContext.Galaxies.create(body)
    return galaxy
  }

}

export const galaxiesService = new GalaxiesService()