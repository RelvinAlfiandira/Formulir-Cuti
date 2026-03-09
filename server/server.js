const express = require('express');
const app = express();
app.use(express.json());

// API endpoint menerima data dari form
app.post('/api/pengajuan-cuti', async (req, res) => {
    const data = req.body;
    console.log('Data diterima:', data);
    
    try {
        // Kirim data ke BPM engine Anda
        // Ganti URL dengan alamat BPM engine Anda
        const bpmResponse = await fetch('http://localhost:3001/bpm/start', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                workflow: 'pengajuan-cuti',
                data: data
            })
        });
        
        res.json({ 
            status: 'success', 
            message: 'Data diteruskan ke BPM' 
        });
        
    } catch (error) {
        res.status(500).json({ 
            status: 'error', 
            message: error.message 
        });
    }
});

app.listen(3000, () => {
    console.log('API berjalan di http://localhost:3000');
});