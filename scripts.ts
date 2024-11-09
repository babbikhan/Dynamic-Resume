// Defining the structure of the resume data
interface ResumeData {
    name: string;
    jobTitle: string;
    experience: string;
    education: string;
    skills: string[];
}

// Function to generate resume preview
function generateResumePreview(): void {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const jobTitleInput = document.getElementById('job-title') as HTMLInputElement;
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
    const educationInput = document.getElementById('education') as HTMLTextAreaElement;
    const skillsInput = document.getElementById('skills') as HTMLInputElement;

    const resumeData: ResumeData = {
        name: nameInput.value,
        jobTitle: jobTitleInput.value,
        experience: experienceInput.value,
        education: educationInput.value,
        skills: skillsInput.value.split(',').map(skill => skill.trim())
    };

    displayPreview(resumeData);
}

// Function to display the resume preview
function displayPreview(data: ResumeData): void {
    const previewSection = document.getElementById('preview-section') as HTMLElement;
    const previewContent = document.getElementById('preview-content') as HTMLElement;

    // Clear any previous content
    previewContent.innerHTML = '';

    // Create the HTML structure for the preview
    const previewHTML = `
        <h3>${data.name}</h3>
        <p><strong>${data.jobTitle}</strong></p>
        <h4>Experience</h4>
        <p>${data.experience}</p>
        <h4>Education</h4>
        <p>${data.education}</p>
        <h4>Skills</h4>
        <p>${data.skills.join(', ')}</p>
    `;

    previewContent.innerHTML = previewHTML;

    // Show the preview section and hide the input section
    previewSection.classList.remove('hidden');
    const inputSection = document.getElementById('input-section') as HTMLElement;
    inputSection.classList.add('hidden');
}

// Function to initialize the event listeners
function init(): void {
    const generateButton = document.getElementById('generate-btn') as HTMLButtonElement;
    generateButton.onclick = generateResumePreview;

    const editButton = document.getElementById('edit-btn') as HTMLButtonElement;
    editButton.onclick = () => {
        const previewSection = document.getElementById('preview-section') as HTMLElement;
        const inputSection = document.getElementById('input-section') as HTMLElement;
        previewSection.classList.add('hidden');
        inputSection.classList.remove('hidden');
    };
}

// Run the init function when the window loads
window.onload = init;
