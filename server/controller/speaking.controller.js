export const handleFileReqest = (req, res) => {
    res.send(`
    <h1>Upload Audio</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="uploadedFile" accept="audio/*" />
      <button type="submit">Upload</button>
    </form>
  `);
};

export const handleFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded or invalid file type.");
    }
    res.send(`File uploaded: ${req.file.filename}`);
};