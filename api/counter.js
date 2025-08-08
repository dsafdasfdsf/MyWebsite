let visitorCount = 0;
let bannedIPs = new Set();

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  if (bannedIPs.has(ip)) {
    return res.status(403).json({ error: 'You are banned' });
  }

  visitorCount++;
  res.status(200).json({ count: visitorCount });
}
