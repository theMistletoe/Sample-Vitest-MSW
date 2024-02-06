import { setupServer } from 'msw/node';
import { handlers as resetHandlers } from './rest/handlers';

export const server = setupServer(...resetHandlers);