import { Auth0Provider } from "@bcwdev/auth0provider";
import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .get('', this.getAllSpecies)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSpecies)
  }

  async getAllSpecies(req, res, next) {
    try {
      const species = await speciesService.getAllSpecies(req.query)
      return res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async createSpecies(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const species = await speciesService.createSpecies(req.body)
      return res.send(species)
    } catch (error) {
      next(error)
    }
  }
}