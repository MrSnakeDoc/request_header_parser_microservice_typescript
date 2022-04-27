import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  const ip: string =
    req.header("x-forwarded-for") ?? req.connection.remoteAddress;
  const language: string = req.header("Accept-Language");
  const system: string = req.header("User-Agent");
  res.json({
    ipaddress: ip,
    language,
    software: system,
  });
});

export default router;
