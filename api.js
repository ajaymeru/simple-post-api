export default async function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({
      message: "POST received!",
      data: req.body
    });
  }

  res.status(405).json({ error: "Use POST" });
}
