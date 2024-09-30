import { HttpController } from "src/shared/domain/HttpController";
import { FunctionRouter } from "src/shared/domain/Router";

export class HomeController extends HttpController {
  constructor() {
    super();
  }

  home: FunctionRouter = (req, res) => {
    this.html(res, 'src/public/html/home/index.html');
  }
}