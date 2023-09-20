interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox again',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own freelance profile', 'Apply for jobs', 'View job details', 'View application status'],
  ownerAbilities: ['Manage country data', 'Manage freelance profiles', 'Manage job postings', 'Manage applications'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e0d9b062-043f-480e-a7c2-18af97b68444',
};
