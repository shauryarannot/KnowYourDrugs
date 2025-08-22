export default function basicAuth(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).send("Auth required");

  const base64 = authHeader.split(" ")[1];
  const [user, pass] = Buffer.from(base64, "base64").toString().split(":");

  if (user === process.env.AUTH_USER && pass === process.env.AUTH_PASS) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
}