import { json } from '@remix-run/node';
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

export async function action({ request }) {
  const {
    apiKey: key,
    model = 'gpt-4o-mini',
    prompt,
    system,
  } = await request.json();

  const apiKey = key || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return json({ error: 'Missing OpenAI API key.' }, { status: 401 });
  }

  const openai = createOpenAI({ apiKey });

  try {
    const result = await generateText({
      abortSignal: request.signal,
      maxTokens: 50,
      model: openai(model),
      prompt,
      system,
      temperature: 0.7,
    });

    return json(result);
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return json(null, { status: 408 });
    }

    return json({ error: 'Failed to process AI request' }, { status: 500 });
  }
}