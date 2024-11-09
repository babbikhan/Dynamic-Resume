// Function to generate the resume
function generateResume() {
    // Get the input values
    const name = document.getElementById("name").value;
    const jobTitle = document.getElementById("job-title").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const about = document.getElementById("about").value;
    const skills = document.getElementById("skills").value;
    const educationLevel = document.getElementById("education-level").value;

    // Validate required fields
    if (!name || !jobTitle || !email || !phone || !about || !skills || !educationLevel) {
        alert("Please fill in all the required fields.");
        return;
    }

    let schoolName = '';
    let collegeName = '';
    let graduationInstitution = '';

    // Determine which education fields to get based on the education level
    if (educationLevel === 'matric') {
        schoolName = document.getElementById("school-name").value;
        if (!schoolName) {
            alert("Please fill in the school name for Matric.");
            return;
        }
    } else if (educationLevel === 'o-level' || educationLevel === 'a-level' || educationLevel === 'intermediate') {
        collegeName = document.getElementById("college-name").value;
        if (!collegeName) {
            alert("Please fill in the college name for O Level, A Level, or Intermediate.");
            return;
        }
    } else if (educationLevel === 'graduate') {
        graduationInstitution = document.getElementById("graduation-institution").value;
        if (!graduationInstitution) {
            alert("Please fill in the graduation institution for Graduate.");
            return;
        }
    }

    const company = document.getElementById("company").value;
    const experienceYears = document.getElementById("experience").value;

    // Validate work experience fields
    if (!company || !experienceYears) {
        alert("Please fill in all work experience fields.");
        return;
    }

    // Update the preview section with user inputs
    document.getElementById("preview-contact-name").innerText = name;
    document.getElementById("preview-job-title").innerText = jobTitle;
    document.getElementById("preview-about").innerText = about;
    document.getElementById("preview-email").innerText = email;
    document.getElementById("preview-phone").innerText = phone;
    document.getElementById("preview-skills").innerText = skills;

    // Update education previews based on the selected level
    document.getElementById("preview-school-name").innerText = schoolName || 'N/A';
    document.getElementById("preview-college-name").innerText = collegeName || 'N/A';
    document.getElementById("preview-graduation-institution").innerText = graduationInstitution || 'N/A';

    // Update work experience previews
    document.getElementById("preview-experience-job-title").innerText = jobTitle;
    document.getElementById("preview-company").innerText = company;
    document.getElementById("preview-years-of-experience").innerText = experienceYears;

    // Show the preview section and hide the form
    document.getElementById("resume-form").style.display = "none";
    document.getElementById("preview-section").style.display = "block";
}

// Function to preview the uploaded image
function previewImage(event) {
    const imageContainer = document.getElementById("preview-image");
    imageContainer.src = URL.createObjectURL(event.target.files[0]);
}

// Function to show the appropriate school field based on the education level selected
function showSchoolField() {
    const level = document.getElementById("education-level").value;

    // Show/hide fields based on education level
    document.getElementById("school-field").style.display = level === 'matric' ? 'block' : 'none';
    document.getElementById("college-field").style.display = (level === 'o-level' || level === 'a-level' || level === 'intermediate') ? 'block' : 'none';
    document.getElementById("graduation-field").style.display = level === 'graduate' ? 'block' : 'none';

    // Clear inputs when switching education levels
    if (level !== 'matric') {
        document.getElementById("school-name").value = '';
    }
    if (level !== 'o-level' && level !== 'a-level' && level !== 'intermediate') {
        document.getElementById("college-name").value = '';
    }
    if (level !== 'graduate') {
        document.getElementById("graduation-institution").value = '';
    }
}

// Function to go back to the form for editing
function editAgain() {
    // Show the form section and hide the preview section
    document.getElementById("resume-form").style.display = "block";
    document.getElementById("preview-section").style.display = "none";
}

// Function to generate PDF
function generatePDF() {
    const { jsPDF } = window.jspdf;  // Ensure jsPDF is available

    // Initialize jsPDF instance
    const doc = new jsPDF();

    // Get the content you want to include in the PDF
    const content = document.querySelector('.resume');  // Assuming `.resume` is the content you want in the PDF

    // Use jsPDF's `html` method to add content to the PDF
    doc.html(content, {
        callback: function (doc) {
            doc.save('resume.pdf');  // Save the PDF with a filename
        },
        margin: [10, 10, 10, 10],  // Optional margin for the document
        x: 10,
        y: 10
    });
}

// Add event listener to the "Generate PDF" button
document.getElementById('generatePdfBtn').addEventListener('click', generatePDF);
