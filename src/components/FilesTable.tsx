import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FilesTable: React.FC = () => {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/files/${id}`);
      setFiles(files.filter((file) => file.id !== id));
      alert('File deleted successfully!');
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('An error occurred while deleting the file.');
    }
  };

  const handleViewFile = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/files/${id}`);
      const fileContent = response.data.fileUrl;
      // Display the file content
      console.log('View file with ID:', id, 'Content:', fileContent);
      // open the content in a new tab
      window.open(`data:${fileContent}`);
    } catch (error) {
      console.error('Error viewing file:', error);
      alert('An error occurred while viewing the file.');
    }
  };

  const handleUpdateFile = async (id: number, newDescription: string) => {
    try {
      await axios.put(`http://localhost:3000/api/files/${id}`, { description: newDescription });
      // Update the file description in the local state
      const updatedFiles = files.map((file) => {
        if (file.id === id) {
          return { ...file, description: newDescription };
        }
        return file;
      });
      setFiles(updatedFiles);
      alert('File updated successfully!');
    } catch (error) {
      console.error('Error updating file:', error);
      alert('An error occurred while updating the file.');
    }
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
              <button onClick={() => handleUpdateFile(file.id, file.description)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FilesTable;
