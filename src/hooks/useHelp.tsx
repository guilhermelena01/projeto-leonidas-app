import { useEffect, useState } from "react"
import { FormEvent } from "react";

export function useHelp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [topic, setTopic] = useState("")
    const [message, setMessage] = useState("")
    const [file, setFile] = useState<File>()
    const [pictureId, setPictureId] = useState(0)
    const [scrollTop, setScrollTop] = useState(0)

    function switchPicToRight() {
        if (pictureId == 0) {
            setPictureId(1)
        } else if (pictureId == 1) {
            setPictureId(2)
        }
    }

    function switchPicTLeft() {
        if (pictureId == 2) {
            setPictureId(1)
        } else if (pictureId == 1) {
            setPictureId(0)
        }
    }

    useEffect(() => {
        const handleScroll = (event: any) => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function sendEmail(event: FormEvent) {
        event.preventDefault();
        const reader = new FileReader();

        if (file) {

            reader.readAsDataURL(file)

            reader.onloadend = () => {

                const payload = {
                    name: name,
                    email: email,
                    phone: phone,
                    topic: topic,
                    message: message,
                    base64: reader.result!.toString().replace("data:image/png;base64,", "")
                }

                fetch('api/email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'aplication/json',
                    },
                    body: JSON.stringify(payload)
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error);
                    alert('Ocorreu um erro')
                })
            }

        } else {
            const payload = {
                name: name,
                email: email,
                phone: phone,
                topic: topic,
                message: message,
            }

            fetch('api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'aplication/json',
                },
                body: JSON.stringify(payload)
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error);
                alert('Ocorreu um erro')
            })
        }
    }

    return {
        name,
        email,
        phone,
        topic,
        message,
        file,
        pictureId,
        scrollTop,
        setEmail,
        setName,
        setPhone,
        setTopic,
        setMessage,
        setFile,
        setScrollTop,
        setPictureId,
        sendEmail,
        switchPicTLeft,
        switchPicToRight
    }
}