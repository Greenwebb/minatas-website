export type IFaq =  {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
}

const faq_data: IFaq[] = [
  {
    id: "One",
    title: "How can I apply for a loan with Minatas Resources?",
    desc: "You can apply for a loan directly through our website by filling out our online application form. Simply select the type of loan you're interested in, provide the required information, and submit your application. Our team will review your request and get back to you promptly with the next steps.",
    isShow: true,
  },
  {
    id: "Two",
    title: "What documents do I need to submit for a loan application?",
    desc: "To apply for a loan, you'll typically need to provide a valid ID, proof of income (such as a recent payslip), and proof of residence. Depending on the type of loan and your specific circumstances, additional documentation may be required.",
  },
  {
    id: "Three",
    title: "How long does it take to get approval for a loan?",
    desc: "Loan approval times can vary depending on the type of loan and the completeness of your application. In most cases, you can expect to receive a decision within 1 to 5 hours after submitting all necessary documents.",
  },
  {
    id: "Four",
    title: "What happens if I miss a loan repayment?",
    desc: "If you miss a loan repayment, it's important to contact us immediately to discuss your situation. We understand that unexpected events can happen, and we're here to help. We'll work with you to explore possible solutions, such as restructuring your repayment plan, to ensure that you stay on track.",
  },
];

export default faq_data;