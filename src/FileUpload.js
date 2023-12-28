import { useState } from "react";
import axios from "axios";


const FileUpload = () => {

    const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:6969/upload', formData, {
        headers: {

          'Content-Type': 'multipart/form-data',
        },
      });
      let data = (response.data)
      let data_j = data['info']
var responseString = data_j
var cleanedString = responseString.replace(/'/g, '"');

cleanedString = cleanedString.trim().replace(/\n/g, '');

try {
  var infoo = JSON.parse(cleanedString);
} catch (error) {
  console.error('Error parsing JSON:', error);
}

      console.log(infoo)
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file');
    }}

    return ( 
        <div>FileUpload
            <form onSubmit={handleUpload}>
                <input type="file" name = 'file' onChange={handleFile}/>
                <button type="submit">Upload</button>
                <label>
                <input type = 'text' name = 'Name'></input>
                </label>
            </form>
        </div>
     );
}
 
export default FileUpload;