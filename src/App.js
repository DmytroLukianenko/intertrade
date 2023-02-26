import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react'
import Layout from './components/Layout';
import ThemeProvider from './theme';

const HomePage = lazy(() => import('./Pages/HomePage'))

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
