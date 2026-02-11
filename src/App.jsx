import { PDFViewer } from '@embedpdf/react-pdf-viewer';
import './App.css'

export default function App() {
  return (
    <div style={{ height: '100vh' }}>
      <PDFViewer 
        config={{
          src: '/pdf-viewer/ACWI Facilities Handbook_v080425 (1).pdf',
          theme: { preference: 'light' }
        }}
      />
    </div>
  );
}
