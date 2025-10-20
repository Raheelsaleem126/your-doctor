import emailjs from "@emailjs/browser";

export const useOppointEmail = () => {
  const sendEmail = async (form: HTMLFormElement) => {
    try {
      const result = await emailjs.sendForm(
        "service_qmy5lbg",   
        "template_jacs1tt",  
        form,
        "DU6QvuP4z0eWoXxbO"  
      );

      return { success: true, message: result.text };
    } catch (error: any) {
      console.error("Email sending failed:", error);
      return { success: false, message: error.text || "Error sending email" };
    }
  };

  return { sendEmail };
};
