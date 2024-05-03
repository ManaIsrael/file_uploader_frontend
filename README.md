# Multi-File Uploader Application|Frontend
This is a multi-file uploader application built with ReactTS. It allows users to upload multiple files with descriptions, view, edit, and delete uploaded files.

## Features
User-friendly interface for uploading multiple files with descriptions.
Display of uploaded files in a table format with download links.
Support for editing and deleting individual files.
Client-side validation to ensure file size is within limits.
Backend API endpoints for CRUD operations on files.
## Technologies Used
## Frontend:
React with TypeScript
## Backend:
Node.js with TypeScript
Express
Sequelize
MySQL
## Deployment:
Frontend deployed on Vercel https://vercel.com/betelhem-yemanes-projects/file-uploader-frontend

## Setup Instructions
Clone the repository
Install dependencies
Start the server:
npm start

## Screenshots

frontend and backend run on different ports at same time
![backend and frontend run simultaneously on different ports](./screenshots/Screenshot%20(323).png "frontend and backend run on different ports at the same time")
client and server run successfuly
![successfuly run](./screenshots/Screenshot%20(324).png "cient and server successfully run")
page to upload files
![form to upload files](./screenshots/Screenshot%20(325).png "fie upload page")
select image files to upload
![select image files](./screenshots/Screenshot%20(326).png "image file selection")
![image file selected](./screenshots/Screenshot%20(328).png)
write a description for file
![write description inside the input box](./screenshots/Screenshot%20(329).png "write description for the file")
json from server for file uploads
![json file from server for uploaded files](./screenshots/Screenshot%20(330).png "file uploaded successfully")
![image uploaded from client is an id of 7](./screenshots/Screenshot%20(331).png)
disable cors inorder to make some requests to the server that is not within the same port of the client app. otherwise throws an error
![cors blocker extension website](./screenshots/Screenshot%20(333).png "install CORS blocker")
enable cors blocker extension after installation
![enabling cors blocker extension inside a browser](./screenshots/Screenshot%20(334).png "enabling the extension")
successful retrieve of files from server
![files loaded onto files page](./screenshots/Screenshot%20(335).png "files retrieved from server into files table")
test the delete request
![file deletion](./screenshots/Screenshot%20(336).png "file deleted successfully")
file is deleted
![file is deleted](./screenshots/Screenshot%20(337).png "file deleted")
the database query made to get all files when on files page
![the files uploaded together with the database query made](./screenshots/Screenshot%20(338).png "files loaded into files typescript page")
view a file on a new windows tab
![one file selected to view](./screenshots/Screenshot%20(341).png "slected file")

### Client App Deployed on Vercel
![project deployed on my vercel account](./screenshots/Screenshot%20(342).png "deployed on vercel")
![vercel project](./screenshots/Screenshot%20(344).png "project with vercel url")
![get files via vercel](./screenshots/Screenshot%20(343).png "fetch files from vercel url")