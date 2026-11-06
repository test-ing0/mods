function downloadAllMods() {
    // מוצא את כל הקישורים של המודים שיש להם את הקלאס button
    const links = document.querySelectorAll('a.button');
    
    if (links.length === 0) {
        alert("לא נמצאו מודים להורדה בדף!");
        return;
    }

    // רץ על כל קישור ומוריד אותו בהפרש של 300 מילישניות כדי שהדפדפן לא ייחסם
    links.forEach((link, index) => {
        setTimeout(() => {
            const downloadLink = document.createElement('a');
            downloadLink.href = link.href;
            downloadLink.download = link.getAttribute('download') || '';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }, index * 300); // רווח זמן קטן בין הורדה להורדה
    });
}
