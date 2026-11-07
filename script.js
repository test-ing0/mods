//onclick="downloadAllMods()

function downloadAllMods() {
    //  השינוי כאן: מחפשים רק קישורי button שנמצאים בתוך הדיב של המודים (class="b")
    const links = document.querySelectorAll('.cm a.button');
    
    if (links.length === 0) {
        alert("לא נמצאו מודים להורדה בתוך תיקיית המודים!");
        return;
    }

    // רץ על כל קישור ומוריד אותו בהפרש של 300 מילישניות
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
