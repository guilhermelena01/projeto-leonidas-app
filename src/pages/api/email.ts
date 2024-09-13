
import { EmailData } from '@/src/util/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const payload: EmailData = JSON.parse(req.body);

  if (!process.env.NEXT_PUBLIC_USERNAME || !process.env.NEXT_PUBLIC_PASSWORD) {
    console.error('Missing environment variables for email');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const message = {
    from: "leonidas_sanduba2024@outlook.com",
    to: "leonidas_sanduba2024@outlook.com",
    subject: "Contato landing page Leonidas Sanduba",
    text: payload.name + payload.topic,
    attachments: [
      {
        filename: 'UserContact.png',
        content: payload.base64,
        encoding: 'base64'
      }
    ],
    html: `<h3>Contato formulário Landing Page</h3>
            </br>
            <h4>Nome: </h4><p>${payload.name}</p>
            <h4>E-mail: </h4><p>${payload.email}</p>
            <h4>Telefone:</h4><p>${payload.phone}</p>
            <h4>Assunto:</h4><p>${payload.topic}</p>
            <h4>Mensagem:</h4><p>${payload.message}</p>`,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_USERNAME,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const user = process.env.NEXT_PUBLIC_USERNAME
  

  try {
    console.log('Tentando enviar o e-mail...');
    await transporter.sendMail(message);
    console.log('E-mail enviado com sucesso');
    res.status(200).end();  

  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    const errMesage = 'Ocorreu um erro ao enviar a mensagem. Tente novamente!!!!!';

    res.status(500).json({ errMesage: errMesage });
  }
}