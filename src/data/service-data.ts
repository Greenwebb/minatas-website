


// data type 
interface IService {
    id: number;
    icon: string;
    title: string;
    desc: string;
    page: string;
}

const service_data:IService[] = [
  // home 1
  {
    id:1,
    icon:'/assets/images/icon/advance.svg',
    title:'Salary Advance Loans',
    desc:'Swift financial support for civil servants with flexible terms, ensuring quick access to funds between paychecks.',
    page:'home'
  },
  {
    id:2,
    icon:'/assets/images/icon/scheme.svg',
    title:'Scheme-backed Loans',
    desc: 'Short-term solutions for emergencies, offering quick funds with competitive rates and personalized repayment plans. (Requires a contract with your employer).',
    page:'home'
  },
  {
    id:3,
    icon:'/assets/images/icon/business.svg',
    title:'Medium-term Loans',
    desc:'Support for business growth with longer-term financing options, flexible repayment terms, and assistance for investments in projects or working capital.',
    page:'home'
  },
 
]

export default service_data;