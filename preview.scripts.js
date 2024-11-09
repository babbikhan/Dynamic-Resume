// Load data from localStorage and populate preview
function loadResumeData() {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));
    if (resumeData) {
        document.getElementById('preview-name').textContent = resumeData.name || 'Your Name';
        document.getElementById('preview-web').textContent = resumeData.web || 'www.example.com';
        document.getElementById('preview-email').textContent = resumeData.email || 'you@example.com';
        document.getElementById('preview-phone').textContent = resumeData.phone || '+1 234 567 890';
        document.getElementById('preview-about').textContent = resumeData.about || 'A brief bio goes here...';
        document.getElementById('preview-skills').textContent = resumeData.skills || 'HTML, CSS, JavaScript';
        document.getElementById('preview-education').textContent = resumeData.education || 'Your educational background goes here...';
        document.getElementById('preview-experience').textContent = resumeData.experience || 'Your work experience goes here...';
    }
}

// Generate PDF from preview
function generatePDF() {
    const element = document.getElementById('resume-preview');
    const options = {
        margin:       0.5,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
}

// Load data on page load
window.onload = loadResumeData;
