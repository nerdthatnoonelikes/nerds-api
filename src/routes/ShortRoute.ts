import { Request, Response, Router } from "express";
import Link from "../models/Link";

const router: Router = Router();

router.get("/short/:id", async (req: Request, res: Response) => {
  const data = await Link.findOne({
    id: req.params.id,
  });

  if (!data) return res.status(429).json({ message: "Invalid id" });

  res.redirect(data.redirect);
});

export default router;
