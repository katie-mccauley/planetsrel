import { dbContext } from "../db/DbContext"

class SpaceshipsService {

  async getAllSpaceships(query = {}) {
    const spaceships = await dbContext.Spaceships.find(query)
    return spaceships
  }

  async createSpaceship(body) {
    const spaceship = await dbContext.Spaceships.create(body)
    return spaceship
  }
}

export const spaceshipsService = new SpaceshipsService()