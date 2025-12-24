"""
AI-like Career Guidance System (Rule-Based)
A console-based application for personalized career recommendations
using rule-based logic and dictionary mapping.
"""

# Career Knowledge Base
INTERESTS = {
    "coding": ["Software Engineer", "Data Analyst", "Web Developer", "DevOps Engineer"],
    "design": ["UI/UX Designer", "Graphic Designer", "Product Designer", "Motion Graphics Artist"],
    "mathematics": ["Data Scientist", "Mathematician", "Actuary", "Financial Analyst"],
    "biology": ["Biologist", "Medical Professional", "Environmental Scientist", "Pharmacist"],
    "business": ["Business Analyst", "Project Manager", "Entrepreneur", "Consultant"],
    "electronics": ["Electronics Engineer", "Hardware Engineer", "IoT Developer", "Roboticist"]
}

STRENGTHS = {
    "problem-solving": ["Software Engineer", "Data Analyst", "Consultant", "Mathematician"],
    "creativity": ["UI/UX Designer", "Graphic Designer", "Product Designer", "Entrepreneur"],
    "communication": ["Project Manager", "Business Analyst", "Consultant", "Sales Manager"],
    "logical thinking": ["Data Scientist", "Electronics Engineer", "Actuary", "Software Engineer"],
    "analysis": ["Data Analyst", "Financial Analyst", "Business Analyst", "Research Scientist"]
}

CAREER_DETAILS = {
    "Software Engineer": {
        "skills": ["Programming", "System Design", "Problem-solving", "Version Control"],
        "learning": ["Data Structures", "Algorithms", "Web Development", "Cloud Computing"]
    },
    "Data Analyst": {
        "skills": ["Statistical Analysis", "Data Visualization", "SQL", "Problem-solving"],
        "learning": ["Python/R", "SQL Databases", "Excel Advanced", "Business Intelligence"]
    },
    "UI/UX Designer": {
        "skills": ["User Research", "Wireframing", "Prototyping", "Design Tools"],
        "learning": ["Design Thinking", "User Testing", "Figma/Adobe XD", "Psychology"]
    },
    "Project Manager": {
        "skills": ["Leadership", "Communication", "Planning", "Risk Management"],
        "learning": ["Agile/Scrum", "JIRA", "Communication Skills", "Strategic Planning"]
    },
    "Data Scientist": {
        "skills": ["Machine Learning", "Statistics", "Programming", "Data Analysis"],
        "learning": ["Python/R", "Statistics", "Linear Algebra", "ML Algorithms"]
    },
    "Web Developer": {
        "skills": ["Frontend/Backend Development", "HTML/CSS/JavaScript", "Databases", "APIs"],
        "learning": ["JavaScript Frameworks", "Backend Languages", "Databases", "DevOps"]
    },
    "Business Analyst": {
        "skills": ["Requirements Analysis", "Communication", "Data Analysis", "Problem-solving"],
        "learning": ["Business Processes", "SQL", "Data Visualization", "Domain Knowledge"]
    },
    "Consultant": {
        "skills": ["Strategic Thinking", "Communication", "Analysis", "Client Management"],
        "learning": ["Industry Knowledge", "Case Study Analysis", "Presentation Skills", "Economics"]
    },
    "Graphic Designer": {
        "skills": ["Visual Design", "Color Theory", "Typography", "Design Tools"],
        "learning": ["Design Software", "Brand Development", "Illustration", "Motion Design"]
    },
    "Product Designer": {
        "skills": ["Design Thinking", "Prototyping", "User Research", "Communication"],
        "learning": ["User Testing", "Analytics", "Strategic Design", "Business Strategy"]
    },
    "Entrepreneur": {
        "skills": ["Innovation", "Leadership", "Finance Basics", "Communication"],
        "learning": ["Business Planning", "Marketing", "Finance", "Networking"]
    },
    "Electronics Engineer": {
        "skills": ["Circuit Design", "Programming", "CAD", "Testing & Debugging"],
        "learning": ["Digital Electronics", "Embedded Systems", "VHDL/Verilog", "PCB Design"]
    }
}


def display_welcome():
    """Display a professional welcome message."""
    print("\n" + "="*70)
    print(" "*15 + "🎯 AI-LIKE CAREER GUIDANCE SYSTEM 🎯")
    print("="*70)
    print("\nWelcome! This intelligent system analyzes your interests and strengths")
    print("to provide personalized career recommendations tailored to your profile.")
    print("\n" + "-"*70)


def get_user_name():
    """Collect user's name with validation."""
    while True:
        name = input("\n📝 Enter your full name: ").strip()
        if name and len(name) >= 2 and name.replace(" ", "").isalpha():
            return name
        print("⚠️  Invalid input. Please enter a valid name (minimum 2 characters).")


def get_interest_area():
    """Collect and validate user's interest area."""
    print("\n📌 Select your primary area of interest:")
    interests_list = list(INTERESTS.keys())
    for idx, interest in enumerate(interests_list, 1):
        print(f"   {idx}. {interest.capitalize()}")
    
    while True:
        try:
            choice = input(f"\nEnter number (1-{len(interests_list)}): ").strip()
            if not choice.isdigit():
                raise ValueError("Please enter a valid number")
            idx = int(choice) - 1
            if 0 <= idx < len(interests_list):
                return interests_list[idx]
            print(f"⚠️  Please enter a number between 1 and {len(interests_list)}.")
        except ValueError as e:
            print(f"⚠️  Invalid input: {e}")


def get_strengths():
    """Collect and validate user's strengths (multiple selections)."""
    print("\n💪 Select your top 2-3 strengths (enter comma-separated numbers):")
    strengths_list = list(STRENGTHS.keys())
    for idx, strength in enumerate(strengths_list, 1):
        print(f"   {idx}. {strength.capitalize()}")
    
    while True:
        try:
            choices = input(f"\nEnter numbers (e.g., 1,2,3): ").strip().split(",")
            selected_strengths = []
            
            for choice in choices:
                choice = choice.strip()
                if not choice.isdigit():
                    raise ValueError("Each entry must be a number")
                idx = int(choice) - 1
                if 0 <= idx < len(strengths_list):
                    selected_strengths.append(strengths_list[idx])
                else:
                    raise ValueError(f"Number {choice} is out of range")
            
            if 2 <= len(selected_strengths) <= 3:
                return selected_strengths
            print("⚠️  Please select exactly 2-3 strengths.")
        except ValueError as e:
            print(f"⚠️  Invalid input: {e}")


def analyze_career_fit(interest, strengths):
    """
    Rule-based analysis to determine career recommendations.
    Uses interest and strengths data to find matching careers.
    """
    # Get careers from interest
    interest_careers = set(INTERESTS.get(interest, []))
    
    # Get careers from strengths
    strength_careers = set()
    for strength in strengths:
        strength_careers.update(STRENGTHS.get(strength, []))
    
    # Find intersection (careers matching both interest and strengths)
    matching_careers = interest_careers.intersection(strength_careers)
    
    # If no perfect match, use strength-based careers as fallback
    if not matching_careers:
        matching_careers = strength_careers if strength_careers else interest_careers
    
    # Return top 2-3 recommendations
    return list(matching_careers)[:3]


def display_career_recommendation(career_name):
    """Display detailed information about a specific career."""
    print(f"\n   🏆 {career_name}")
    print("   " + "-" * 50)
    
    details = CAREER_DETAILS.get(career_name, {})
    
    if "skills" in details:
        print(f"   Required Skills:")
        for skill in details["skills"]:
            print(f"      • {skill}")
    
    if "learning" in details:
        print(f"   Recommended Learning Areas:")
        for area in details["learning"]:
            print(f"      • {area}")


def display_results(user_name, interest, strengths, recommendations):
    """Display comprehensive analysis and recommendations."""
    print("\n" + "="*70)
    print(" "*20 + "📊 YOUR CAREER ANALYSIS 📊")
    print("="*70)
    
    print(f"\n👤 User Profile:")
    print(f"   Name: {user_name}")
    print(f"   Primary Interest: {interest.capitalize()}")
    print(f"   Key Strengths: {', '.join(strength.capitalize() for strength in strengths)}")
    
    print(f"\n{'='*70}")
    print(f"🎯 PERSONALIZED CAREER RECOMMENDATIONS")
    print(f"{'='*70}")
    
    if recommendations:
        for idx, career in enumerate(recommendations, 1):
            print(f"\n({idx}) {career.upper()}")
            display_career_recommendation(career)
    else:
        print("\n⚠️  No recommendations found. Please try different inputs.")
    
    print(f"\n{'='*70}")
    print("📌 Next Steps:")
    print("   1. Research the recommended careers in detail")
    print("   2. Start learning the recommended areas at your own pace")
    print("   3. Seek mentorship from professionals in these fields")
    print("   4. Build projects to develop practical skills")
    print(f"{'='*70}\n")


def run_system():
    """Main orchestration function."""
    display_welcome()
    
    # Collect user input
    user_name = get_user_name()
    interest = get_interest_area()
    strengths = get_strengths()
    
    # Analyze and get recommendations
    recommendations = analyze_career_fit(interest, strengths)
    
    # Display results
    display_results(user_name, interest, strengths, recommendations)
    
    # Option to restart
    while True:
        restart = input("Would you like to get recommendations again? (yes/no): ").strip().lower()
        if restart in ["yes", "y"]:
            run_system()
            break
        elif restart in ["no", "n"]:
            print("\n✨ Thank you for using the Career Guidance System. Good luck! ✨\n")
            break
        else:
            print("⚠️  Please enter 'yes' or 'no'.")


if __name__ == "__main__":
    run_system()
