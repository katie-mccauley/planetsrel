import { Auth0Provider } from "@bcwdev/auth0provider";
import { moonsService } from "../services/MoonsService";
import BaseController from "../utils/BaseController";

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getAllMoons)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createMoon)
  }

  async getAllMoons(req, res, next) {
    try {
      const moons = await moonsService.getAllMoons(req.query)
      return res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async createMoon(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const moon = await moonsService.createMoon(req.body)
      return res.send(moon)
    } catch (error) {
      next(error)
    }
  }
}