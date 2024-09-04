const nodemailer = require('nodemailer')

exports.handler = async (event, context) => {

    let parsedBody

    try {
        // Checks if event.body exists and parses it
        if (event.body) {
            parsedBody = JSON.parse(event.body) // Parse the body
        } else {
            throw new Error('Request body is missing')
        }
    } catch (err) {
        console.error('Error parsing JSON input', err)
        return {
            statusCode: 400, // Throw a bad request
            body: JSON.stringify({ message: 'Invalid JSON input', error: err.message })
        }
    }

    const { fName, lName, userEmail, userRequest } = parsedBody

    const transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: 'tagusportus@outlook.pt',
            pass: 'TP2024!!'
        }
    })

    //The email will come from the tagusportus adress, instead of the users adress, in order avoid complications with nodemailer authentication. 
    const mailOptions = {
        from: 'tagusportus@outlook.pt',
        to: 'tagusportus@outlook.pt',
        subject: `${fName} ${lName} - Pedido de Esclarecimento / Orçamento`,
        text: userRequest
    }

    try {
        await transporter.sendMail(mailOptions)
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'E-mail enviado com sucesso!' })
        }
    } catch (err) {
        console.error('Error sending email', err)
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Não foi possível enviar o e-mail', error: err.message })
        }
    }
}