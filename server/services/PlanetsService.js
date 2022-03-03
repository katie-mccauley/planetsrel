import { dbContext } from "../db/DbContext"

class PlanetsService {

  async getAllPlanets(query = {}) {
    const planets = await dbContext.Planets.find(query)
    return planets
  }
  async createPlanets(body) {
    const planet = await dbContext.Planets.create(body)
    return planet
  }
}

export const planetsService = new PlanetsService()