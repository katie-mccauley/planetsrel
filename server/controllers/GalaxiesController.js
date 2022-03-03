import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxiesService } from "../services/GalaxiesService";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/stars', this.getAllStarsByGalaxyId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createGalaxy)
  }
  async getAllStarsByGalaxyId(req, res, next) {
    try {
      const star = await starsService.getAllStarsByGalaxyId({ galaxyId: req.params.id })
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAll(req.query)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const galaxy = await galaxiesService.getById(req.params.id)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
  async createGalaxy(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const galaxy = await galaxiesService.createGalaxy(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}