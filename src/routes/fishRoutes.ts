import { Request, Response, Router } from 'express';
import FishController from '../controllers/fishWikiController';
import AuthService from '../middleware/auth';

const auth = new AuthService();

const fishLogRoutes = Router();

const fishLogController = new FishController();

fishWikiRoutes.post('/', auth.authorize, (req: Request, res: Response) => {
  fishWikiController.createFish(req, res);
});

fishWikiRoutes.get('/', auth.authorize, (req: Request, res: Response) => {
  fishWikiController.getAllFish(req, res);
});

fishWikiRoutes.get('/:id', auth.authorize, (req: Request, res: Response) => {
  fishWikiController.getOneFish(req, res);
});

/*fishWikiRoutes.patch('/:id', auth.authorize, (req: Request, res: Response) => {
    fishWikiController.updateFishLog(req, res);
});

fishWikiRoutes.delete('/:id', auth.authorize, (req: Request, res: Response) => {
  fishWikiController.deleteFishLog(req, res);
});
*/
export default fishLogRoutes;