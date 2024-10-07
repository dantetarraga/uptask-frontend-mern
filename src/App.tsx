import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { appRouter } from './router/AppRouter';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
}

export default App;
