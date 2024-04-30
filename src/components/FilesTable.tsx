import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FilesTable: React.FC = () => {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('/api/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/files/${id}`);
      setFiles(files.filter((file) => file.id !== id));
      alert('File deleted successfully!');
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('An error occurred while deleting the file.');
    }
  };

  const handleViewFile = async (id: number) => {
    console.log('View file with ID:', id);
    // Implement logic to view file with fileId
  };

  const handleUpdateFile = (id: number) => {
    console.log('Update file with ID:', id);
    // Implement logic to update file with fileId
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>File</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file) => (
          <tr key={file.id}>
            <td>{file.description}</td>
            <td>
              <a href={file.fileUrl} download>
                Download
              </a>
            </td>
            <td>
              <button onClick={() => handleDelete(file.id)}>Delete</button>
              <button onClick={() => handleViewFile(file.id)}>View</button>
              <button onClick={() => handleUpdateFile(file.id)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FilesTable;
