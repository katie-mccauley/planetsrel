import { Auth0Provider } from "@bcwdev/auth0provider";
import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAllPlanets)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPlanets)
  }

  async getAllPlanets(req, res, next) {
    try {
      const planets = await planetsService.getAllPlanets(req.query)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async createPlanets(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const planet = await planetsService.createPlanets(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}