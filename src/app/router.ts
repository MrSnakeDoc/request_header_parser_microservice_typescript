import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  const ip: string =
    req.header("x-forwarded-for") ?? req.connection.remoteAddress;
  const language: string = req.header("Accept-Language");
  const system: string = req.header("User-Agent");

  class Output {
    ip?: string;
    language?: string;
    system: string;
  }

  const output: Output = {
    ip,
    language,
    system,
  };

  res.json(output);
});

export default router;
