import nodemailer from "nodemailer"
import { GMAIL_EMAIL , GMAIL_PASSWORD } from '$env/static/private'
export const actions = {
    default: async ({request}) => {	
        const data = await request.formData();
        const name = data.get("name")?.toString()
        const email = data.get("email")?.toString()
        const message = data.get("message")?.toString()
        if (name && email && message) {
            await sendEmail(name, email, message)
        }
    }
};

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
    
      user: GMAIL_EMAIL,
      pass: GMAIL_PASSWORD,
    },
  });

const sendEmail = async(name:string, email:string, message:string) => {
    
     await transporter.sendMail({
        from: GMAIL_EMAIL, // sender address
        to: GMAIL_EMAIL, // list of receivers
        subject: "Hello ", // Subject line
        text: message, // plain text body
        html: `<p>
        name: ${name} <br>
        email: ${email} <br>
        message: ${message} <br>
        </p>`, // html body
      });
}

