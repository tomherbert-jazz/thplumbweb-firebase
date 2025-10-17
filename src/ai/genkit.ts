import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

const apiKey = "AIzaSyBQ88h0F01Zvcjc2Z1pqmKFcVV3Pp7iWv4"; // User provided API key
export const ai = genkit({
  plugins: [googleAI({apiKey: apiKey})],
  model: 'googleai/gemini-2.5-flash',
});
