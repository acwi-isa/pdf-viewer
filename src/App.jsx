import { PDFViewer } from '@embedpdf/react-pdf-viewer';
import './App.css'

export default function App() {
  return (
    <div style={{ height: '100vh' }}>
      <PDFViewer 
        config={{
          src: '/pdf-viewer/your-pdf-file.pdf',
          theme: { preference: 'light' }
        }}
      />
    </div>
  );
}