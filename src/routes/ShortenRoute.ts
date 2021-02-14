import { Request, Response, Router } from "express";
import Link from "../models/Link";
import validUrl from "valid-url";

const router: Router = Router();

router.post("/api/v1/shorten", (req: Request, res: Response) => {
  if (validUrl.isUri(req.body.redirect)) {
    Link.create({
      id: req.body.id,
      redirect: req.body.redirect,
    }).then(() => res.send("saved to db"));
  } else {
    return res.send("That is not a valid URL");
  }
});

export default router;
