import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css'

interface Message {
    _id: string;
    from: string;
    to: string;
    subject: string;
    text: string;
}

const Admin = () => {

    const [emails, setEmails] = useState<Message[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/email');
                if(response.data && response.data.message){
                    setEmails(response.data.message);
                    console.log(response.data.message)
                } else {
                    console.error("Resposta da API não está no formato esperado", response);
                }
            } catch (error) {
                console.log("Erro ao buscar dados da API", error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteEmail = async (emailId: string) => {
        try {
            await axios.delete(`http://localhost:3001/email/${emailId}`);
            setEmails((prevEmails) => prevEmails.filter(email => email._id !== emailId));
        } catch (error) {
            console.log("Erro ao excluir e-mail", error);
        }
    };

    if(!emails || emails.length === 0){
        return <div>Carregando...</div>
    }


    return (
        <section className='container'>
            <h2 className='titulo'>Lista de Emails:</h2>
            <div className='email__container'>
                {emails.map((email) => (
                    <div className='email__box' style={{marginBottom: 40}} key={email._id}>
                        <strong>De: </strong><p>{email.from}</p>
                        <strong>Para: </strong><p>{email.to}</p>
                        <strong>Mensagem: </strong><p>{email.text}</p>

                        <button className='button' onClick={() => handleDeleteEmail(email._id)}>Excluir</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Admin;
 