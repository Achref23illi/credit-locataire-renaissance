import emailjs from 'emailjs-com';

// Initialize EmailJS with the user ID
emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  userId: import.meta.env.VITE_EMAILJS_USER_ID,
  templates: {
    contact: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
    consent: import.meta.env.VITE_EMAILJS_CONSENT_TEMPLATE_ID,
    request: import.meta.env.VITE_EMAILJS_REQUEST_TEMPLATE_ID,
  }
};

export const sendEmail = async (templateId: string, templateParams: Record<string, unknown>) => {
  try {
    console.log(`Sending email with template ID: ${templateId}`);
    console.log('Template parameters:', JSON.stringify(templateParams, null, 2));
    
    const response = await emailjs.send(
      emailConfig.serviceId,
      templateId,
      templateParams,
      emailConfig.userId
    );
    
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Email sending failed. Details:', error);
    
    // Try to get more information about the error
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    throw error;
  }
};

export default emailjs;
