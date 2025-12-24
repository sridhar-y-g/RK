// ============ ADVANCED CAREER DATABASE ============
const CAREER_DATABASE = {
    interests: {
        "coding": ["Software Engineer", "Data Analyst", "Web Developer", "DevOps Engineer", "Full Stack Developer", "Security Engineer"],
        "design": ["UI/UX Designer", "Graphic Designer", "Product Designer", "Motion Graphics Artist", "Brand Strategist", "Design Technologist"],
        "mathematics": ["Data Scientist", "Mathematician", "Actuary", "Financial Analyst", "Quantitative Analyst", "Research Scientist"],
        "biology": ["Biologist", "Medical Professional", "Environmental Scientist", "Pharmacist", "Research Scientist", "Biotech Engineer"],
        "business": ["Business Analyst", "Project Manager", "Entrepreneur", "Consultant", "Operations Manager", "Strategy Manager"],
        "electronics": ["Electronics Engineer", "Hardware Engineer", "IoT Developer", "Roboticist", "Systems Engineer", "Circuit Designer"]
    },
    
    strengths: {
        "problem-solving": ["Software Engineer", "Data Analyst", "Consultant", "Mathematician", "Product Manager", "Research Scientist"],
        "creativity": ["UI/UX Designer", "Graphic Designer", "Product Designer", "Entrepreneur", "Brand Strategist", "Design Technologist"],
        "communication": ["Project Manager", "Business Analyst", "Consultant", "Medical Professional", "Sales Manager", "Strategy Manager"],
        "logical thinking": ["Data Scientist", "Electronics Engineer", "Actuary", "Software Engineer", "Systems Engineer", "Security Engineer"],
        "analysis": ["Data Analyst", "Financial Analyst", "Business Analyst", "Research Scientist", "Operations Manager", "Quantitative Analyst"],
        "leadership": ["Project Manager", "Entrepreneur", "Consultant", "Operations Manager", "Strategy Manager", "Business Analyst"],
        "teamwork": ["Project Manager", "Business Analyst", "Consultant", "Entrepreneur", "Operations Manager", "Sales Manager"],
        "attention to detail": ["Data Analyst", "Medical Professional", "Financial Analyst", "QA Engineer", "Systems Engineer", "Research Scientist"],
        "innovation": ["Product Designer", "Entrepreneur", "UI/UX Designer", "Data Scientist", "Software Engineer", "Design Technologist"],
        "emotional intelligence": ["Project Manager", "Consultant", "Medical Professional", "Sales Manager", "Strategy Manager", "Entrepreneur"],
        "technical expertise": ["Electronics Engineer", "Software Engineer", "Data Scientist", "DevOps Engineer", "IoT Developer", "Security Engineer"],
        "adaptability": ["Consultant", "Entrepreneur", "Project Manager", "Business Analyst", "Strategy Manager", "Data Scientist"]
    },

    careers: {
        "Software Engineer": {
            skills: ["Programming", "System Design", "Problem-solving", "Version Control", "Testing"],
            learning: ["Data Structures", "Algorithms", "Web Development", "Cloud Computing", "Microservices"],
            salary: "High",
            growth: "Fast",
            workStyle: ["Remote-Friendly", "Startup", "Corporate"]
        },
        "Data Analyst": {
            skills: ["Statistical Analysis", "Data Visualization", "SQL", "Problem-solving", "Communication"],
            learning: ["Python/R", "SQL Databases", "Excel Advanced", "Business Intelligence", "Tableau/Power BI"],
            salary: "High",
            growth: "Moderate",
            workStyle: ["Corporate", "Remote-Friendly", "On-Site"]
        },
        "UI/UX Designer": {
            skills: ["User Research", "Wireframing", "Prototyping", "Design Tools", "Empathy"],
            learning: ["Design Thinking", "User Testing", "Figma/Adobe XD", "Psychology", "CSS Basics"],
            salary: "High",
            growth: "Fast",
            workStyle: ["Remote-Friendly", "Creative", "Startup"]
        },
        "Project Manager": {
            skills: ["Leadership", "Communication", "Planning", "Risk Management", "Team Building"],
            learning: ["Agile/Scrum", "JIRA", "Communication Skills", "Strategic Planning", "Finance Basics"],
            salary: "High",
            growth: "Moderate",
            workStyle: ["Corporate", "On-Site", "Hybrid"]
        },
        "Data Scientist": {
            skills: ["Machine Learning", "Statistics", "Programming", "Data Analysis", "Business Acumen"],
            learning: ["Python/R", "Statistics", "Linear Algebra", "ML Algorithms", "Deep Learning"],
            salary: "Very High",
            growth: "Fast",
            workStyle: ["Remote-Friendly", "Corporate", "Research"]
        },
        "Web Developer": {
            skills: ["Frontend/Backend Development", "HTML/CSS/JavaScript", "Databases", "APIs", "Problem-solving"],
            learning: ["JavaScript Frameworks", "Backend Languages", "Databases", "DevOps", "REST APIs"],
            salary: "High",
            growth: "Fast",
            workStyle: ["Remote-Friendly", "Startup", "Corporate"]
        },
        "Business Analyst": {
            skills: ["Requirements Analysis", "Communication", "Data Analysis", "Problem-solving", "Documentation"],
            learning: ["Business Processes", "SQL", "Data Visualization", "Domain Knowledge", "Agile"],
            salary: "High",
            growth: "Moderate",
            workStyle: ["Corporate", "Consulting", "On-Site"]
        },
        "Consultant": {
            skills: ["Strategic Thinking", "Communication", "Analysis", "Client Management", "Leadership"],
            learning: ["Industry Knowledge", "Case Study Analysis", "Presentation Skills", "Economics", "Psychology"],
            salary: "Very High",
            growth: "Fast",
            workStyle: ["Consulting", "Travel", "Corporate"]
        },
        "Graphic Designer": {
            skills: ["Visual Design", "Color Theory", "Typography", "Design Tools", "Creativity"],
            learning: ["Design Software", "Brand Development", "Illustration", "Motion Design", "UX Principles"],
            salary: "Moderate",
            growth: "Moderate",
            workStyle: ["Creative", "Remote-Friendly", "Freelance"]
        },
        "Product Designer": {
            skills: ["Design Thinking", "Prototyping", "User Research", "Communication", "Empathy"],
            learning: ["User Testing", "Analytics", "Strategic Design", "Business Strategy", "Leadership"],
            salary: "High",
            growth: "Fast",
            workStyle: ["Remote-Friendly", "Startup", "Corporate"]
        },
        "Entrepreneur": {
            skills: ["Innovation", "Leadership", "Finance Basics", "Communication", "Resilience"],
            learning: ["Business Planning", "Marketing", "Finance", "Networking", "Sales"],
            salary: "Variable",
            growth: "Variable",
            workStyle: ["Startup", "Independent", "Flexible"]
        },
        "Electronics Engineer": {
            skills: ["Circuit Design", "Programming", "CAD", "Testing & Debugging", "Problem-solving"],
            learning: ["Digital Electronics", "Embedded Systems", "VHDL/Verilog", "PCB Design", "IoT"],
            salary: "High",
            growth: "Moderate",
            workStyle: ["Corporate", "Hardware", "On-Site"]
        },
        "Mathematician": {
            skills: ["Logical Reasoning", "Problem-solving", "Research", "Analysis", "Communication"],
            learning: ["Advanced Math", "Cryptography", "Number Theory", "Abstract Algebra", "Topology"],
            salary: "High",
            growth: "Moderate",
            workStyle: ["Academic", "Research", "Corporate"]
        },
        "Biologist": {
            skills: ["Lab Techniques", "Analysis", "Research", "Communication", "Attention to Detail"],
            learning: ["Cell Biology", "Genetics", "Ecology", "Research Methods", "Microbiology"],
            salary: "Moderate",
            growth: "Moderate",
            workStyle: ["Lab", "Research", "Academic"]
        },
        "Medical Professional": {
            skills: ["Communication", "Analysis", "Problem-solving", "Empathy", "Technical Knowledge"],
            learning: ["Anatomy", "Physiology", "Pharmacology", "Patient Care", "Ethics"],
            salary: "Very High",
            growth: "Moderate",
            workStyle: ["Hospital", "Private Practice", "On-Site"]
        },
        "Financial Analyst": {
            skills: ["Data Analysis", "Financial Modeling", "Communication", "Attention to Detail", "Business Knowledge"],
            learning: ["Excel Advanced", "Financial Analysis", "Economics", "Accounting", "Investment Strategies"],
            salary: "High",
            growth: "Moderate",
            workStyle: ["Corporate", "Finance", "On-Site"]
        }
    }
};

// ============ INTEREST TO STRENGTHS MAPPING ============
const INTEREST_STRENGTH_MAP = {
    "coding": ["problem-solving", "logical thinking", "analysis", "technical expertise", "innovation"],
    "design": ["creativity", "communication", "problem-solving", "innovation", "attention to detail"],
    "mathematics": ["logical thinking", "analysis", "problem-solving", "technical expertise", "attention to detail"],
    "biology": ["analysis", "logical thinking", "communication", "attention to detail", "teamwork"],
    "business": ["communication", "problem-solving", "analysis", "leadership", "emotional intelligence"],
    "electronics": ["logical thinking", "problem-solving", "analysis", "technical expertise", "attention to detail"]
};

// ============ WORK ENVIRONMENT OPTIONS ============
const WORK_ENVIRONMENTS = {
    "Remote-Friendly": { icon: "🏠", description: "Work from anywhere, flexible location" },
    "Corporate": { icon: "🏢", description: "Traditional corporate environment" },
    "Startup": { icon: "🚀", description: "Fast-paced, innovative startup culture" },
    "Creative": { icon: "🎨", description: "Creative, collaborative workspace" },
    "Academic": { icon: "📚", description: "Research and academic settings" },
    "Lab": { icon: "🔬", description: "Laboratory or technical environment" }
};

const CAREER_PACE = {
    "Fast Growth": { icon: "⚡", description: "Quick career progression, high learning curve" },
    "Steady Growth": { icon: "📈", description: "Balanced growth, sustainable pace" },
    "Flexible Pace": { icon: "🎯", description: "Self-paced, entrepreneurial opportunities" }
};

// ============ INTELLIGENT SCORING SYSTEM ============
class CareerScorer {
    constructor(userProfile) {
        this.profile = userProfile;
        this.scores = new Map();
    }

    calculateCompatibility() {
        const allCareers = Object.keys(CAREER_DATABASE.careers);
        
        allCareers.forEach(career => {
            let score = 0;
            let details = {
                interestMatch: 0,
                strengthMatch: 0,
                workStyleMatch: 0,
                paceMatch: 0,
                total: 0
            };

            // Interest Matching (35%)
            details.interestMatch = this.scoreInterestMatch(career);
            score += details.interestMatch * 0.35;

            // Strength Matching (35%)
            details.strengthMatch = this.scoreStrengthMatch(career);
            score += details.strengthMatch * 0.35;

            // Work Style Matching (20%)
            details.workStyleMatch = this.scoreWorkStyleMatch(career);
            score += details.workStyleMatch * 0.20;

            // Career Pace Matching (10%)
            details.paceMatch = this.scoreCareerPaceMatch(career);
            score += details.paceMatch * 0.10;

            details.total = Math.round(score);
            this.scores.set(career, details);
        });

        return this.getTopRecommendations();
    }

    scoreInterestMatch(career) {
        let matchCount = 0;
        this.profile.interest.forEach(interest => {
            if (CAREER_DATABASE.interests[interest]?.includes(career)) {
                matchCount += 2;
            }
        });
        return Math.min(matchCount, 100);
    }

    scoreStrengthMatch(career) {
        let matchCount = 0;
        this.profile.strengths.forEach(strength => {
            if (CAREER_DATABASE.strengths[strength]?.includes(career)) {
                matchCount += 2;
            }
        });
        return Math.min(matchCount, 100);
    }

    scoreWorkStyleMatch(career) {
        const careerStyles = CAREER_DATABASE.careers[career]?.workStyle || [];
        let matches = 0;
        
        this.profile.workEnvironment.forEach(env => {
            if (careerStyles.includes(env)) matches++;
        });

        return matches > 0 ? (matches / this.profile.workEnvironment.length) * 100 : 50;
    }

    scoreCareerPaceMatch(career) {
        const careerGrowth = CAREER_DATABASE.careers[career]?.growth;
        const userPace = this.profile.careerPace;

        const paceMap = {
            "Fast Growth": { "Fast": 100, "Moderate": 60 },
            "Steady Growth": { "Fast": 60, "Moderate": 100 },
            "Flexible Pace": { "Fast": 70, "Moderate": 70 }
        };

        return paceMap[userPace]?.[careerGrowth] || 70;
    }

    getTopRecommendations(limit = 3) {
        return Array.from(this.scores.entries())
            .sort((a, b) => b[1].total - a[1].total)
            .slice(0, limit)
            .map(([career, score]) => ({ career, ...score }));
    }

    getScoreForCareer(career) {
        return this.scores.get(career);
    }
}

// ============ MAIN APPLICATION CLASS ============
class CareerGuidanceApp {
    constructor() {
        this.userData = {
            name: '',
            interest: [],
            strengths: [],
            otherSelected: false,
            otherStrength: '',
            workEnvironment: [],
            careerPace: '',
            timestamp: null
        };
        this.recommendations = [];
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.renderInterests();
        this.renderStrengths();
        this.renderWorkEnvironments();
        this.renderCareerPace();
        this.attachKeyboardListeners();
        // ensure header profile-mode reflects initial step
        const headerWrapper = document.querySelector('.header-title-wrapper');
        if (headerWrapper) {
            if (document.getElementById('step1') && document.getElementById('step1').classList.contains('active')) {
                headerWrapper.classList.add('profile-mode');
            } else {
                headerWrapper.classList.remove('profile-mode');
            }
        }
    }

    // ===== Storage Management =====
    loadFromStorage() {
        const stored = localStorage.getItem('careerAssessment');
        if (stored) {
            this.userData = JSON.parse(stored);
        }
    }

    saveToStorage() {
        localStorage.setItem('careerAssessment', JSON.stringify(this.userData));
    }

    // Sync checkboxes with userData
    // ===== DOM Rendering =====
    renderInterests() {
        const container = document.getElementById('interestsContainer');
        container.innerHTML = '';
        Object.keys(CAREER_DATABASE.interests).forEach(interest => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'option-btn';
            btn.textContent = this.capitalize(interest);
            btn.onclick = () => this.selectInterest(interest, btn);
            container.appendChild(btn);
        });
    }

    renderStrengths() {
        const container = document.getElementById('strengthsContainer');
        container.innerHTML = '';
        
        // Get relevant strengths for selected interest, or all strengths if none selected
        let strengthsToShow = Object.keys(CAREER_DATABASE.strengths);
        if (this.userData.interest && this.userData.interest.length > 0) {
            const selectedInterest = this.userData.interest[0];
            const relevantStrengths = INTEREST_STRENGTH_MAP[selectedInterest] || strengthsToShow;
            strengthsToShow = relevantStrengths;
        }
        
        strengthsToShow.forEach(strength => {
            const id = `strength-${strength}`;
            const div = document.createElement('div');
            div.className = 'checkbox-item';
            div.innerHTML = `
                <input type="checkbox" id="${id}" onchange="app.toggleStrength('${strength}')">
                <label for="${id}">${this.capitalize(strength)}</label>
            `;
            container.appendChild(div);
            // restore checked state if previously selected
            const cb = document.getElementById(id);
            if (cb && this.userData.strengths.includes(strength)) cb.checked = true;
        });

        // Add an 'Other' option
        const otherDiv = document.createElement('div');
        otherDiv.className = 'checkbox-item other-item';
        otherDiv.innerHTML = `
            <input type="checkbox" id="strength-other" onchange="app.toggleStrength('other')">
            <label for="strength-other">Other</label>
            <input type="text" id="otherStrengthInput" class="other-input" placeholder="Please specify..." style="display:none; margin-top:8px;">
        `;
        container.appendChild(otherDiv);

        // If other was previously selected, restore state
        const otherCheckbox = document.getElementById('strength-other');
        const otherInput = document.getElementById('otherStrengthInput');
        if (this.userData.otherSelected) {
            if (otherCheckbox) otherCheckbox.checked = true;
            if (otherInput) {
                otherInput.style.display = 'block';
                otherInput.value = this.userData.otherStrength || '';
                otherInput.oninput = (e) => {
                    this.userData.otherStrength = e.target.value;
                    this.saveToStorage();
                };
            }
        } else if (otherInput) {
            otherInput.oninput = (e) => {
                this.userData.otherStrength = e.target.value;
                this.saveToStorage();
            };
        }
    }

    renderWorkEnvironments() {
        const container = document.getElementById('workEnvironmentContainer');
        container.innerHTML = '';
        Object.entries(WORK_ENVIRONMENTS).forEach(([env, data]) => {
            const div = document.createElement('label');
            div.className = 'radio-item';
            const id = `env-${env}`;
            div.innerHTML = `
                <input type="radio" name="workEnv" id="${id}" value="${env}" onchange="app.selectWorkEnvironment('${env}')">
                <label for="${id}"><strong>${data.icon} ${env}</strong> - ${data.description}</label>
            `;
            container.appendChild(div);
        });
    }

    renderCareerPace() {
        const container = document.getElementById('careerPaceContainer');
        container.innerHTML = '';
        Object.entries(CAREER_PACE).forEach(([pace, data]) => {
            const div = document.createElement('label');
            div.className = 'radio-item';
            const id = `pace-${pace}`;
            div.innerHTML = `
                <input type="radio" name="pace" id="${id}" value="${pace}" onchange="app.selectCareerPace('${pace}')">
                <label for="${id}"><strong>${data.icon} ${pace}</strong> - ${data.description}</label>
            `;
            container.appendChild(div);
        });
    }

    // ===== Form Interactions =====
    selectInterest(interest, element) {
        document.querySelectorAll('#interestsContainer .option-btn').forEach(btn => btn.classList.remove('selected'));
        element.classList.add('selected');
        this.userData.interest = [interest];
        // Clear strengths when interest changes
        this.userData.strengths = [];
        // Re-render strengths based on new interest
        this.renderStrengths();
        this.saveToStorage();
    }

    toggleStrength(strength) {
        // strength may be a key or 'other'
        const isOther = strength === 'other';
        const checkboxId = isOther ? 'strength-other' : `strength-${strength}`;
        const checkbox = document.getElementById(checkboxId);
        if (!checkbox) return;

        // current counts (other counts as 1 if selected)
        const otherCount = this.userData.otherSelected ? 1 : 0;
        const totalSelected = this.userData.strengths.length + otherCount;

        if (checkbox.checked) {
            // Selecting
            if (isOther) {
                if (totalSelected < 3) {
                    this.userData.otherSelected = true;
                    const otherInput = document.getElementById('otherStrengthInput');
                    if (otherInput) {
                        otherInput.style.display = 'block';
                        otherInput.focus();
                    }
                    this.saveToStorage();
                } else {
                    checkbox.checked = false;
                    this.showToast('⚠️ Maximum 3 strengths allowed');
                }
            } else {
                if (totalSelected < 3) {
                    // add strength
                    if (!this.userData.strengths.includes(strength)) {
                        this.userData.strengths.push(strength);
                        // clear any previous error
                        const errorEl = document.getElementById('strengthsError');
                        if (errorEl) errorEl.classList.remove('show');
                        this.saveToStorage();
                    }
                } else {
                    checkbox.checked = false;
                    this.showToast('⚠️ Maximum 3 strengths allowed');
                }
            }
        } else {
            // Unselecting
            if (isOther) {
                this.userData.otherSelected = false;
                this.userData.otherStrength = '';
                const otherInput = document.getElementById('otherStrengthInput');
                if (otherInput) {
                    otherInput.style.display = 'none';
                    otherInput.value = '';
                }
                this.saveToStorage();
            } else {
                this.userData.strengths = this.userData.strengths.filter(s => s !== strength);
                this.saveToStorage();
            }
        }
    }

    selectWorkEnvironment(env) {
        const radio = document.querySelector(`input[value="${env}"]`);
        if (radio.checked) {
            this.userData.workEnvironment = [env];
        }
        this.saveToStorage();
    }

    selectCareerPace(pace) {
        const radio = document.querySelector(`input[value="${pace}"]`);
        if (radio.checked) {
            this.userData.careerPace = pace;
        }
        this.saveToStorage();
    }

    // ===== Validation & Navigation =====
    validateAndNext(step) {
        let isValid = false;

        if (step === 'step1') {
            isValid = this.validateName();
            if (!isValid) {
                this.showError('nameError', 'Please enter a valid name (minimum 2 characters)');
            }
        } else if (step === 'step2') {
            isValid = true; // No validation required for interest selection
        } else if (step === 'step3') {
            isValid = this.validateStrengths();
            if (!isValid) {
                // If other is selected but empty, ask to fill it
                if (this.userData.otherSelected && (!this.userData.otherStrength || this.userData.otherStrength.trim() === '')) {
                    this.showError('strengthsError', 'Please specify your Other strength');
                } else {
                    this.showError('strengthsError', 'Please select 1-3 strengths or choose Other and specify');
                }
            }
        } else if (step === 'step4') {
            isValid = this.userData.workEnvironment.length > 0 && this.userData.careerPace !== '';
            if (!isValid) {
                this.showError('workStyleError', 'Please select both work environment and career pace');
            }
        }

        if (isValid) {
            this.saveToStorage();
            if (step === 'step4') {
                this.showResults();
            } else {
                const nextStep = parseInt(step.replace('step', '')) + 1;
                this.switchStep(step, `step${nextStep}`);
            }
        }
    }

    validateName() {
        const name = document.getElementById('nameInput').value.trim();
        if (name) {
            this.userData.name = name;
            document.getElementById('nameError').classList.remove('show');
            return true;
        }
        return false;
    }

    validateStrengths() {
        // Count regular strengths and include 'Other' only if specified
        const regCount = this.userData.strengths.length;
        const otherCount = (this.userData.otherSelected && this.userData.otherStrength && this.userData.otherStrength.trim() !== '') ? 1 : 0;
        const total = regCount + otherCount;
        // valid if 1-3 selections provided, where Other must include text to count
        return total >= 1 && total <= 3;
    }

    switchStep(currentStep, nextStep) {
        document.getElementById(currentStep).classList.remove('active');
        document.getElementById(nextStep).classList.add('active');
        
        // Clear all error messages when switching steps
        document.querySelectorAll('.error-message').forEach(el => {
            el.classList.remove('show');
            el.textContent = '';
        });
        
        // Toggle header profile-mode when Step 1 is active
        const headerWrapper = document.querySelector('.header-title-wrapper');
        if (headerWrapper) {
            if (document.getElementById('step1').classList.contains('active')) {
                headerWrapper.classList.add('profile-mode');
            } else {
                headerWrapper.classList.remove('profile-mode');
            }
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    goBack(currentStep) {
        const prevStep = parseInt(currentStep.replace('step', '')) - 1;
        document.getElementById(currentStep).classList.remove('active');
        document.getElementById(`step${prevStep}`).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ===== Advanced Career Analysis =====
    showResults() {
        const scorer = new CareerScorer(this.userData);
        this.recommendations = scorer.calculateCompatibility();
        this.userData.timestamp = new Date().toISOString();
        this.saveToStorage();

        // Profile Card
        const profileCard = document.getElementById('profileCard');
        const strengthsDisplay = this.userData.strengths.map(s => this.capitalize(s)).join(', ') + (this.userData.otherSelected && this.userData.otherStrength ? (strengths => ', ' + this.userData.otherStrength) : '');
        profileCard.innerHTML = `
            <p><span class="emoji">👤</span> <strong>Name:</strong> ${this.userData.name}</p>
            <p><span class="emoji">📌</span> <strong>Interest:</strong> ${this.capitalize(this.userData.interest[0])}</p>
            <p><span class="emoji">💪</span> <strong>Strengths:</strong> ${this.userData.strengths.map(s => this.capitalize(s)).join(', ')}${this.userData.otherSelected && this.userData.otherStrength ? ', ' + this.userData.otherStrength : ''}</p>
            <p><span class="emoji">🏢</span> <strong>Work Environment:</strong> ${this.userData.workEnvironment[0]}</p>
            <p><span class="emoji">🚀</span> <strong>Career Pace:</strong> ${this.userData.careerPace}</p>
        `;

        // Stats
        const statsGrid = document.getElementById('statsGrid');
        const totalSkills = this.recommendations.reduce((sum, rec) => 
            sum + (CAREER_DATABASE.careers[rec.career]?.skills.length || 0), 0
        );
        const strengthsCount = this.userData.strengths.length + (this.userData.otherSelected && this.userData.otherStrength ? 1 : 0);
        statsGrid.innerHTML = `
            <div class="stat-card">
                <div class="stat-value">${this.recommendations.length}</div>
                <div class="stat-label">Recommendations</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${strengthsCount}</div>
                <div class="stat-label">Key Strengths</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${totalSkills}</div>
                <div class="stat-label">Total Skills to Learn</div>
            </div>
        `;

        // Compatibility Chart
        this.renderCompatibilityChart(scorer);

        // Recommendations with Real-time Scoring
        this.renderRecommendations(scorer);

        // Switch view
        document.getElementById('step1').classList.remove('active');
        document.getElementById('step2').classList.remove('active');
        document.getElementById('step3').classList.remove('active');
        document.getElementById('step4').classList.remove('active');
        document.getElementById('results').classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderCompatibilityChart(scorer) {
        const chartContainer = document.getElementById('compatibilityChart');
        let chartHTML = '<h3 style="margin-bottom: 16px; color: var(--gray-900);">🎯 Career Compatibility Scores</h3>';

        this.recommendations.forEach((rec, idx) => {
            const score = rec.total;
            chartHTML += `
                <div class="career-compat-item">
                    <div class="compat-label">
                        <span>${idx + 1}. ${rec.career}</span>
                        <span style="color: var(--primary); font-weight: 800;">${score}%</span>
                    </div>
                    <div class="compat-bar">
                        <div class="compat-fill" style="width: ${score}%; transition-delay: ${idx * 0.2}s;"></div>
                    </div>
                </div>
            `;
        });

        chartContainer.innerHTML = chartHTML;
    }

    renderRecommendations(scorer) {
        const recContainer = document.getElementById('recommendationsContainer');
        recContainer.innerHTML = '';

        this.recommendations.forEach((rec, idx) => {
            const career = rec.career;
            const details = CAREER_DATABASE.careers[career];
            const card = document.createElement('article');
            card.className = 'career-card';
            
            const scoreColor = rec.total >= 80 ? '#16a34a' : rec.total >= 60 ? '#ea580c' : '#667eea';
            
            card.innerHTML = `
                <div class="career-header">
                    <div class="career-title">
                        <span><span class="emoji">🏆</span> ${career}</span>
                        <span class="career-score" style="background: linear-gradient(135deg, ${scoreColor} 0%, ${scoreColor} 100%);">${rec.total}% Match</span>
                    </div>
                    <span class="career-badge">Recommendation #${idx + 1}</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; margin-bottom: 20px; font-size: 12px; color: var(--gray-700);">
                    <div><strong>💰 Salary:</strong> ${details.salary}</div>
                    <div><strong>📊 Growth:</strong> ${details.growth}</div>
                </div>

                <div class="skill-section">
                    <div class="section-title"><span class="emoji">🎯</span> Required Skills</div>
                    <div class="tag-list">
                        ${details.skills.map(skill => `<span class="tag skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="learning-section">
                    <div class="section-title"><span class="emoji">📚</span> Learning Areas</div>
                    <div class="tag-list">
                        ${details.learning.map(area => `<span class="tag learning-tag">${area}</span>`).join('')}
                    </div>
                </div>
            `;
            recContainer.appendChild(card);
        });
    }

    // ===== Export & Restart =====
    exportResults() {
        const text = this.generateExportText();
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `career-assessment-${new Date().toISOString().split('T')[0]}.txt`;
        link.click();
        this.showToast('✓ Results exported successfully!', true);
    }

    exportPDF() {
        // Build printable HTML from results sections
        const profileHTML = document.getElementById('profileCard')?.outerHTML || '';
        const statsHTML = document.getElementById('statsGrid')?.outerHTML || '';
        const chartHTML = document.getElementById('compatibilityChart')?.outerHTML || '';
        const recsHTML = document.getElementById('recommendationsContainer')?.outerHTML || '';

        const docHTML = `
            <html>
            <head>
                <title>Career Assessment Results</title>
                <meta charset="utf-8" />
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; color: #111827; }
                    h1,h2 { color: #1f2937; }
                    .header { display:flex; align-items:center; gap:12px; margin-bottom: 18px; }
                    .header img { width:56px; height:56px; border-radius:50%; object-fit:cover; }
                    .profile-card { margin-bottom: 12px; }
                    .career-card { border:1px solid #e5e7eb; padding:12px; border-radius:8px; margin-bottom:10px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <img src="rk logo.jpeg" alt="Profile">
                    <div>
                        <h1>Career Assessment Results</h1>
                        <div>${new Date().toLocaleString()}</div>
                    </div>
                </div>
                ${profileHTML}
                ${statsHTML}
                ${chartHTML}
                <h2>Recommendations</h2>
                ${recsHTML}
            </body>
            </html>
        `;

        const w = window.open('', '_blank');
        if (!w) {
            this.showToast('Popup blocked — please allow popups to download PDF', false);
            return;
        }
        w.document.open();
        w.document.write(docHTML);
        w.document.close();
        // Give the new window a moment to render then call print
        setTimeout(() => {
            w.focus();
            w.print();
            // do not auto-close immediately; let user handle saving
        }, 500);
    }

    generateExportText() {
        let text = '=== CAREER GUIDANCE ASSESSMENT REPORT ===\n\n';
        text += `Date: ${new Date().toLocaleDateString()}\n`;
        text += `Time: ${new Date().toLocaleTimeString()}\n\n`;

        text += `PERSONAL PROFILE\n`;
        text += `Name: ${this.userData.name}\n`;
        text += `Interest: ${this.capitalize(this.userData.interest[0])}\n`;
        // include Other if provided
        text += `Strengths: ${this.userData.strengths.map(s => this.capitalize(s)).join(', ')}${this.userData.otherSelected && this.userData.otherStrength ? ', ' + this.userData.otherStrength : ''}\n`;
        text += `Work Environment: ${this.userData.workEnvironment[0]}\n`;
        text += `Career Pace: ${this.userData.careerPace}\n\n`;

        text += `RECOMMENDATIONS\n`;
        text += `${'-'.repeat(60)}\n`;
        this.recommendations.forEach((rec, idx) => {
            const details = CAREER_DATABASE.careers[rec.career];
            text += `\n${idx + 1}. ${rec.career} (${rec.total}% Compatibility)\n`;
            text += `   Salary: ${details.salary} | Growth: ${details.growth}\n`;
            text += `   Skills: ${details.skills.join(', ')}\n`;
            text += `   Learn: ${details.learning.join(', ')}\n`;
        });

        return text;
    }

    startOver() {
        this.userData = {
            name: '',
            interest: [],
            strengths: [],
            otherSelected: false,
            otherStrength: '',
            workEnvironment: [],
            careerPace: '',
            timestamp: null
        };
        localStorage.removeItem('careerAssessment');
        document.getElementById('nameInput').value = '';
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        document.querySelectorAll('input[type="radio"]').forEach(rb => rb.checked = false);
        document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
        document.getElementById('results').classList.remove('active');
        document.getElementById('step1').classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.showToast('Assessment reset. Ready to start again!', true);
    }

    // ===== UI Helpers =====
    showError(elementId, message) {
        const el = document.getElementById(elementId);
        if (el) {
            el.textContent = message;
            el.classList.add('show');
        }
    }

    showToast(message, isSuccess = false) {
        const toast = document.createElement('div');
        toast.className = `toast ${isSuccess ? 'success' : ''}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    attachKeyboardListeners() {
        document.getElementById('nameInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.validateAndNext('step1');
        });
    }

    capitalize(str) {
        return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
}

// ============ INITIALIZATION ============
const app = new CareerGuidanceApp();
