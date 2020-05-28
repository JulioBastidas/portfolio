const nodemailer = require('nodemailer');


module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'hotmail',
 auth: {
 user: 'juliobastidas98@hotmail.com', // Cambialo por tu email
 pass: 'gokusuper12' // Cambialo por tu password
 }
 });
const mailOptions = {
 from: `"${formulario.name} 👻" <${formulario.email}>`,
 to: 'juliobastidas98@hotmail.com', // Cambia esta parte por el destinatario
 subject: formulario.subject,
 html: `
 <strong>Nombre:</strong> ${formulario.name} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.message}
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}