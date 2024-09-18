import * as React from "react";
import { useState } from "react";
import { Box, Typography, Button, Stack } from '@mui/material';
import * as XLSX from "xlsx";
import { API_URL, x_API_key } from "../../globalVariables/GlobalVariables";
import templateFile from "../../../assets/UploadTemplate.xlsx";


export default function Upload() {
  const [data, setData] = useState(0);
  const [error, setError] = useState(null);
  
  const downloadExcelTemplate = () => {
    const downloadLink = document.createElement('a');
     downloadLink.href = templateFile; // Replace with the actual file path on the server
     downloadLink.download = 'template.xlsx'; // Specify the file name for the downloaded file
     downloadLink.click();
  }
  function sendJson(payload){
    console.log('starting fetch');
    fetch(`${API_URL}Upload`, {
      method: 'POST',
      headers: {'x-api-key': x_API_key, 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":"http://pmvision.it.pri:5003/, http://pmvisionapi.prod/"},
      body: JSON.stringify(payload),
      credentials: 'include',
      mode: 'cors'
    })
    .then(response => {
      if (!response.ok) {
        response.text().then(text => setError(text));
        return
      }
      response.text()
    })
    .then(data => console.log(data))
  }
  
  function addfile(event) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (e) => {
      let arrayBuffer = fileReader.result;
      console.log(arrayBuffer);
      var data = new Uint8Array(arrayBuffer);
      var arr = new Array();
      for (var i = 0; i !== data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];    
      var arraylist = XLSX.utils.sheet_to_json(worksheet, {raw: false});
      sendJson(arraylist);
      console.log(arraylist);
    };
  }
  
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" component="div" sx={{ textAlign: 'center' }} gutterBottom>Quotes & Opportunity Generator</Typography>
      <Typography variant="h5" gutterBottom>Welcome to PMVision!</Typography>
      <br></br>
      <Typography variant="h5" >To get started, download the excel template below.</Typography>
      <br></br>
      <Typography>1. Begin filling the rows "Serial Number", "Template", and "Action".</Typography>
      <Typography>2. Leave "AssignedPSSR" empty if you'd like to assign the quote/opportunity to yourself.
      <br></br>If you'd like to select a specific Wagner employee, populate the cell with their Employee Number.</Typography>
      <Typography>3. Ensure there are no additional cells populated. There can only be full rows with each serial numbers. 
      <br></br>Leaving additional cells will break the quote creator. </Typography>
      <Typography>4. Save and Upload the File</Typography>
      
      <br></br>
      <Stack sx={{mt: 5}} spacing={4} alignItems='center'>
        <Button variant="contained" component="label" sx={{width: "25%"}}>
          Upload Excel File
          <input hidden
            type="file"
            accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={(event) => {
              addfile(event);
            }}
          />
        </Button>
        <br></br>
        <Button variant="contained" component="label" sx={{width: "15%"}}>
          Download Template
          <input hidden
          onClick ={downloadExcelTemplate}/>
        </Button>
        
      </Stack>
    </Box>
  );
}
