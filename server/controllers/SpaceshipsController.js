import { Auth0Provider } from "@bcwdev/auth0provider";
import { spaceshipsService } from "../services/SpaceshipsService";
import BaseController from "../utils/BaseController";

export class SpaceshipsController extends BaseController {
  constructor() {
    super('api/spaceships')
    this.router
      .get('', this.getAllSpaceships)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSpaceship)
  }

  async getAllSpaceships(req, res, next) {
    try {
      const spaceships = await spaceshipsService.getAllSpaceships(req.query)
      return res.send(spaceships)
    } catch (error) {
      next(error)
    }
  }
  async createSpaceship(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const spaceships = await spaceshipsService.createSpaceship(req.body)
      return res.send(spaceships)
    } catch (error) {
      next(error)
    }
  }
}