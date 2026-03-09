 document.getElementById('cutiForm').onsubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        try {
            const response = await fetch('http://localhost:3000/api/pengajuan-cuti', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            alert('Pengajuan berhasil dikirim!');
        } catch (error) {
            alert('Gagal mengirim: ' + error.message);
        }
    };