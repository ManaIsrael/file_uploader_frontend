import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FileUploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');

  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!file || !description) {
      alert('Please select a file and provide a description.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);

    try {
      await axios.post('/api/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file.');
    }

    // Navigate to the FilesTable component after uploading
    navigate('/files');
  };

  return (
    <form className="form" onSubmit={handleSubmit} encType='multipart/form-data'>
      <div>
        <input className="file-input" name="file" type="file" multiple={true} onChange={handleFileChange} />
        <input className="description" name="descriiption" type="text" value={description} onChange={handleDescriptionChange} placeholder="Description" />
        <button className="upload-btn" type="submit">Upload</button>
      </div>
    </form>
  );
};

export default FileUploadForm;