import { Auth0Provider } from "@bcwdev/auth0provider"
import { query } from "express"
import { starsService } from "../services/StarsService"
import BaseController from "../utils/BaseController"

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAllStars)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createStar)
  }
  async getAllStars(req, res, next) {
    try {
      const stars = await starsService.getAllStars(req.query)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }


  async createStar(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const star = await starsService.createStar(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }
}