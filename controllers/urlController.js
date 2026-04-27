import { urlMap } from '../data/store.js';
import { generateCode } from '../utils/generateCode.js';

//Handles generating a short URL.
//POST /shorten

export const shortenUrl = (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Validate URL format
  try {
    new URL(url);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  // Generate unique code
  let code = generateCode(6);
  while (urlMap[code]) {
    code = generateCode(6);
  }

  // Store in memory
  urlMap[code] = {
    originalUrl: url,
    clicks: 0
  };

  const shortUrl = `http://localhost:3000/${code}`;

  return res.status(200).json({ shortUrl });
};

//Redirects to the original URL.
//GET /:code

export const redirectToOriginal = (req, res) => {
  const { code } = req.params;
  const entry = urlMap[code];

  if (!entry) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  // Increment click count
  entry.clicks += 1;

  return res.redirect(entry.originalUrl);
};

//Gets stats for a short URL.
//GET /stats/:code

export const getStats = (req, res) => {
  const { code } = req.params;
  const entry = urlMap[code];

  if (!entry) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  return res.status(200).json({
    originalUrl: entry.originalUrl,
    clicks: entry.clicks
  });
};
