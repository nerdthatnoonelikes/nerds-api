import { Request, Response, Router } from "express";
import { Canvas, resolveImage } from "canvas-constructor";

const router: Router = Router();

router.get("/api/v1/duckduckgo", async (req: Request, res: Response) => {
  if (req.query.search.toString().length > 50) {
    return res.send("Length exceeds 50");
  }

  const img = await resolveImage(
    "https://cdn.searchenginejournal.com/wp-content/uploads/2017/01/Untitled-design-31.png"
  );

  res.writeHead(200, {
    "Content-Type": "image/png",
  });

  return res.end(
    new Canvas(1680, 840)
      .printImage(img, 0, 0, 1680, 840)
      .setTextFont("28px Ubuntu Mono")
      .printText(req.query.search.toString(), 201, 602)
      .toBuffer()
  );
});

export default router;
