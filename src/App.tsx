import React from 'react';
import FileUploadForm from './components/FileUploadForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilesTable from './components/FilesTable';
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FileUploadForm />} />
          <Route path="/files" element={<FilesTable />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
