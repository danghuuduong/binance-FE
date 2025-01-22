import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  // ...existing code...
  {
    future: {
      v7_startTransition: true,
    },
  }
  // ...existing code...
);

export default router;
