const nodemailer = require('nodemailer')

exports.handler = async (event, context) => {
    const { fName, lName, userEmail, userRequest } = JSON.parse(event.body)

    const transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: 'tagusportus@outlook.pt',
            pass: 'TP2024!!'
        }
    })

    const mailOptions = {
        from: userEmail,
        to: 'tagusportus@outlook.pt',
        subject: ` ${fName} ${lName} - Pedido de Esclarecimento / Orçamento`,
        text: userRequest
    }

    try {
        await transporter.sendMail(mailOptions)
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'E-mail enviado com sucesso!' })
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Não foi possível enviar o e-mail', err })
        }
    }
}