import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import {
  HomePage,
  ConvocatoriasPage,
  InstitucionalPage,
  CampanaPage,
  AuditorioPage,
  ZoomPage,
  BoletinesPage,
} from '@/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout activePage="inicio">
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/convocatorias"
          element={
            <Layout activePage="convocatorias">
              <ConvocatoriasPage />
            </Layout>
          }
        />
        <Route
          path="/convocatorias/1"
          element={
            <Layout activePage="convocatorias">
              <ConvocatoriasPage />
            </Layout>
          }
        />
        <Route
          path="/institucional"
          element={
            <Layout activePage="institucional">
              <InstitucionalPage />
            </Layout>
          }
        />
        <Route
          path="/campañas/:slug"
          element={
            <Layout activePage="campañas">
              <CampanaPage />
            </Layout>
          }
        />
        <Route
          path="/auditorio"
          element={
            <Layout activePage="reuniones">
              <AuditorioPage />
            </Layout>
          }
        />
        <Route
          path="/zoom"
          element={
            <Layout activePage="reuniones">
              <ZoomPage />
            </Layout>
          }
        />
        <Route
          path="/boletines/:id"
          element={
            <Layout>
              <BoletinesPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
