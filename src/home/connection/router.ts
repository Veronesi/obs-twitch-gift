import { Router } from "src/shared/domain/Router";
import { HomeController } from "./controller";

export class HomeRouter extends Router {
  constructor() {
    super();
    const controller = new HomeController();
    this.get('', controller.home);
  }
}