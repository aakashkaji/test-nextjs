export async function GET(request) {
  return new Response('Hello, Next.js!')
}

export const login = async() => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Call your already built API with email and password parameters
    const apiRes = await fetch('https://auth.dev-damensch.com/oAuth/Token');
    const data = await apiRes.json();

    // Return the data from the API as JSON
    res.status(200).json(data);
  } else {
    res.status(405).end();
  }
}
