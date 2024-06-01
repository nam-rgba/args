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
     namecv: 'untitled',
        jobTitle: 'a',
        fname: '',
        lname: '',
        email:'',
        phone: '',
        city: '',
        dob: '',
        profileSummary: '',
        employmentHistory: [

        ],
        education: [

        ],
        activities: [

        ],
        projects: [
 
        ],
        link:[''],
        skill:[''],
        language:[
        ]
}

const getNewCV = () => initialState;

export { getNewCV }