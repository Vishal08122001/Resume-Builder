// import * as ActionTypes from "./ActionTypes";


// const initialTemplateState = {
//     selectedTemplateId: null,
//     selectedResumeId: null
// }


// const initialPersonalInfoState = {
//     personalInfo: {
//         profileImg: "",
//         firstName: "",
//         lastName: "",
//         mobile: "",
//         email: "",
//         address: "",
//         city: "",
//         state: "",
//         postalCode: "",
//         objective: "",
//     },
// }



// const initialSkillsState = {
//     skills: ["", "", ""],
// };



// const initialWorkExpState = {
//     experiences: [
//         {
//             id: 1,
//             jobTitle: "",
//             organizationName: "",
//             startYear: "",
//             endYear: " "
//         }
//     ]
// }



// const initialEducationState = {
//     educationInfo: {
//         domain: "",
//         university: "",
//         degree: "",
//         startYear: "",
//         endYear: "",
//     },
// };


// export const selectedTemplateReducer = (state = initialTemplateState, action) => {
//     switch (action.type) {
//         case ActionTypes.SelectTemplate:
//             return { ...state, selectedTemplateId: action.payload }

//         case ActionTypes.SelectResume:
//             return { ...state, selectedResumeId: action.payload }
//         default:
//             return state;

//     }
// }


// export const EducationInfo = (state = initialEducationState, action) => {
//     switch (action.type) {
//         case ActionTypes.AddEducation:
//             return { ...state, educationInfo: action.payload }
//         default:
//             return state;
//     }
// }


// export const workExpReducer = (state = initialWorkExpState, action) => {
//     switch (action.type) {
//         case ActionTypes.AddExperience:
//             return { ...state, experiences: [...state.experiences, action.payload] }

//         case ActionTypes.AddExperienceAll:
//             return { ...state, experiences: action.payload }

//         default:
//             return state;
//     }
// }




// export const personalInfoReducer = (state = initialPersonalInfoState, action) => {
//     switch (action.type) {
//         case ActionTypes.AddPersonalInfo:
//             return { ...state, personalInfo: { ...state.personalInfo, ...action.payload }, 
//         };
//         default:
//             return state;
//     }
// }








// export const SkillReducer = (state = initialSkillsState, action) => {
//     switch (action.type) {
//         case ActionTypes.AddNewSkills:
//             return { ...state, skills: [...state.skills, " "] }
//         case ActionTypes.DeleteSkill:
//             {
//                 const newSkills = state.skills.filter(
//                     (skill, id) => id !== action.payload)
//                 return { ...state, skills: newSkills }
//             }

//         case ActionTypes.EditSkill:
//             return { ...state, skills: action.payload }
//         default:
//             return state;
//     }
// }










import * as actionTypes from "./ActionTypes";

const initialSelectedTemplateState = {
    selectedTemplateId: null,
    selectedResumeId: null,
};

const initialPersonalInfoState = {
    personalInfo: {
        profileImg: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        objective: "",
    },
};

const initialWorkExperienceState = {
    experiences: [
        {
            id: 1,
            jobTitle: "",
            organizationName: "",
            startYear: "",
            endYear: "",
        },
    ],
};

const initialEducationState = {
    educationInfo: {
        domain: "",
        university: "",
        degree: "",
        startYear: "",
        endYear: "",
    },
};

const initialSkillsState = {
    skills: ["", "", ""],
};

export const selectedTemplateReducer = (
    state = initialSelectedTemplateState,
    action
) => {
    switch (action.type) {
        case actionTypes.SelectTemplate:
            return { ...state, selectedTemplateId: action.payload };
        case actionTypes.SelectResume:
            return { ...state, selectedResumeId: action.payload };
        default:
            return state;
    }
};


export const personalInfoReducer = (
    state = initialPersonalInfoState,
    action
) => {
    switch (action.type) {
        case actionTypes.AddPersonalInfo:
            return {
                ...state,
                personalInfo: { ...state.personalInfo, ...action.payload },
            };
        default:
            return state;
    }
};

export const workExpReducer = (
    state = initialWorkExperienceState,
    action
) => {
    switch (action.type) {
        case actionTypes.AddExperience:
            return {
                ...state,
                experiences: [...state.experiences, action.payload],
            };
        case actionTypes.AddExperienceAll:
            return {
                ...state,
                experiences: action.payload,
            };
        default:
            return state;
    }
};

export const SkillReducer = (state = initialSkillsState, action) => {
    switch (action.type) {
        case actionTypes.AddNewSkills:
            return { ...state, skills: [...state.skills, ""] };
        case actionTypes.EditSkill: {
            return {
                ...state,
                skills: action.payload,
            };
        }
        case actionTypes.DeleteSkill: {
            const newSkills = state.skills.filter(
                (skill, id) => id !== action.payload
            );

            return { ...state, skills: newSkills };
        }
        default:
            return state;
    }
};

export const EducationInfo = (
    state = initialEducationState,
    action
) => {
    switch (action.type) {
        case actionTypes.AddEducation:
            return { ...state, educationInfo: action.payload };
        default:
            return state;
    }
};
