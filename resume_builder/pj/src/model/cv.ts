import { employmentHistory, education, projects, activities, language } from "../utils/type"


export type CVStore = {
    namecv: string,
    jobTitle: string,
    fname: string,
    lname: string,
    email:string,
    phone: string,
    city: string,
    dob: string,
    profileSummary: string,
  employmentHistory: employmentHistory[],
  education: education[],
  activities: activities[],
  projects: projects[],
  link: string[],
  skill: string[],
  language: language[],

}

const initialState: CVStore = {
     namecv: '',
        jobTitle: '',
        fname: '',
        lname: '',
        email:'',
        phone: '',
        city: '',
        dob: '',
        profileSummary: '',
        employmentHistory: [
            {
                jobTitle: '',
                company: '',
                startDate: '',
                endDate: '',
                description: '',
            }
        ],
        education: [
            {
                degree: '',
                school: '',
                startDate: '',
                endDate: '',
                description: '',
            }
        ],
        activities: [
            {
                title: '',
                description: '',
            }
        ],
        projects: [
            {
                name: '',
                description: '',
            }
        ],
        link:[''],
        skill:[''],
        language:[
            {language: '', level: '',}
        ]
}

const getNewCV = () => initialState;

export { getNewCV }