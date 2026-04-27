import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout';
import {
  HomePage,
  ConvocatoriasPage,
  InstitucionalPage,
  CampanaPage,
  AuditorioPage,
  ZoomPage,
} from '@/pages';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
