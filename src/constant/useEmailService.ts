import emailjs from "@emailjs/browser";

export const useEmailService = () => {
  const sendEmail = async (form: HTMLFormElement) => {
    try {
      const result = await emailjs.sendForm(
        "service_qmy5lbg",   // ⚙️ Your actual Service ID
        "template_ulfiz8a",  // ⚙️ Your actual Template ID
        form,
        "DU6QvuP4z0eWoXxbO"   // ⚙️ Your actual Public Key
      );

      return { success: true, message: result.text };
    } catch (error: any) {
      console.error("Email sending failed:", error);
      return { success: false, message: error.text || "Error sending email" };
    }
  };

  return { sendEmail };
};
