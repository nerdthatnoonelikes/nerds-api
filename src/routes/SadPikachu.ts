import { Request, Response, Router } from "express";
import { Canvas, resolveImage } from "canvas-constructor";

const router: Router = Router();

router.get("/api/v1/sadpika", async (req: Request, res: Response) => {
  if (req.query.text.toString().length > 30)
    return res.send("Text length exceeds 30");

  const img = await resolveImage(
    "https://preview.redd.it/wca1bowrjgh61.jpg?width=640&crop=smart&auto=webp&s=c05da81e30e0e09b6378019f3dc3131e77392b59"
  );

  res.writeHead(200, {
    "Content-Type": "image/png",
  });

  return res.end(
    new Canvas(400, 400)
      .printImage(img, 0, 0, 400, 400)
      .setTextFont("18px Ubuntu Mono")
      .setTextAlign("center")
      .printText(req.query.text.toString(), 196, 32)
      .toBuffer()
  );
});

export default router;
