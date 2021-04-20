import { Request, Response, Router } from "express";
import Link from "../models/Link";
import validUrl from "valid-url";
import short from "shortid";

const router: Router = Router();

router.post("/api/v1/shorten", (req: Request, res: Response) => {
  const id = short.generate();
  if (validUrl.isUri(req.body.redirect)) {
    Link.create({
      id: id,
      redirect: req.body.redirect,
    }).then(() => res.json({ id: id, redirect: req.body.redirect }));
  } else {
    return res.send("That is not a valid URL");
  }
});

export default router;
