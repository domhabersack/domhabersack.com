export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body

    const response = await fetch(`${process.env.CONVERTKIT_API_URL}/forms/${process.env.CONVERTKIT_API_FORM_ID}/subscribe`, {
      body: JSON.stringify({
        api_secret: process.env.CONVERTKIT_API_SECRET,
        email,
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      method: 'POST',
    })

    const json = await response.json()

    if (!response.ok) {
      console.error(json)
    }

    res.status(response.status).json(json)
  }
}
