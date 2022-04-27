import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log(req);

  const ip: string =
    req.header("x-forwarded-for") || req.connection.remoteAddress;
  console.log("ip:", ip);

  const language: string = req.header("Accept-Language");
  console.log("language:", language);
  const system: string = req.header("User-Agent");
  console.log("system:", system);
  res.json({
    ipaddress: ip,
    language,
    software: system,
  });
});

export default router;
