import { dbContext } from "../db/DbContext"

class StarsService {
  async getAllStarsByGalaxyId(id) {
    const star = await dbContext.Stars.find(id)
    return star
  }
  async createStar(body) {
    const star = await dbContext.Stars.create(body)
    return star
  }

  async getAllStars(query = {}) {
    const stars = await dbContext.Stars.find(query)
    return stars
  }
}

export const starsService = new StarsService()