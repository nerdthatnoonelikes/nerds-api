import { Request, Response, Router } from "express";
import { Canvas, resolveImage } from "canvas-constructor";

const router: Router = Router();

router.get("/api/v1/google", async (req: Request, res: Response) => {
  if (req.query.search.toString().length > 30)
    return res.send("Text length exceeds 30");

  const img = await resolveImage(
    "https://searchengineland.com/figz/wp-content/seloads/2019/03/google-menu.png"
  );

  res.writeHead(200, {
    "Content-Type": "image/png",
  });

  return res.end(
    new Canvas(1558, 256)
      .printImage(img, 0, 0, 1558, 256)
      .setTextFont("28px Ubuntu Mono")
      .printText(req.query.search.toString(), 296, 80)
      .toBuffer()
  );
});

export default router;
