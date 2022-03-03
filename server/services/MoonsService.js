import { dbContext } from "../db/DbContext"

class MoonsService {

  async getAllMoons(query = {}) {
    const moons = await dbContext.Moons.find(query)
    return moons
  }

  async createMoon(body) {
    const moon = await dbContext.Moons.create(body)
    return moon
  }

}

export const moonsService = new MoonsService()