// data type 
export interface IService {
  id: number;
  icon: string;
  title: string;
  desc: string;
  long_dec: string;
  page: string;
  image: string;
}

const service_data:IService[] = [
  // home 1
  {
    id:1,
    icon:'/assets/images/icon/advance.svg',
    title:'Salary Advance Loans',
    desc:'Swift financial support for civil servants with flexible terms, ensuring quick access to funds between paychecks.',
    long_dec: 'Our Swift Financial Support program is dedicated to providing civil servants with immediate access to funds, ensuring financial stability between paychecks. This service offers tailored solutions with fast processing times, so you can cover unexpected expenses or bridge gaps in your budget without delay. Enjoy the convenience of flexible repayment terms that align with your salary schedule, making it easier to manage your finances with minimal stress.',
    page:'salary_advance_loans',
    image:'/assets/images/media/personal.webp',
  },
  {
    id:2,
    icon:'/assets/images/icon/scheme.svg',
    title:'Scheme-backed Loans',
    desc: 'Short-term solutions for emergencies, offering quick funds with competitive rates and personalized repayment plans. (Requires a contract with your employer).',
    long_dec: 'When emergencies strike, our Scheme-backed Loans offer a quick and reliable solution. These loans are designed for short-term needs, providing rapid access to funds with competitive interest rates. To qualify, you will need to have a contract with your employer, which helps streamline the application process. Our loans are crafted to offer personalized repayment plans, ensuring that you receive the support you need while maintaining control over your financial commitments.',
    page:'scheme_backed_loans',
    image:'/assets/images/media/mou.webp',
  },
  {
    id:3,
    icon:'/assets/images/icon/business.svg',
    title:'Medium-term Loans',
    desc:'Support for business growth with longer-term financing options, flexible repayment terms, and assistance for investments in projects or working capital.',
    long_dec: '',
    page:'medium_term_loans',
    image:'/assets/images/media/business.webp',
  },
 
]

export default service_data;