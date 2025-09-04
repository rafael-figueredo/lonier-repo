import React from "react";
import SectionTitle from "../../components/SectionTitle";
import emailjs from "emailjs-com";
import ContactFormResponse from "./ContactFormResponse";
import { useForm } from "../../components/Hooks/useForm";
import Button from "../Button";
export default function ContactForm() {
  const [showResponse, setShowResponse] = React.useState({
    display: false,
    code: null,
  });
  const { values, handleChange, reset } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        process.env.NEXT_PUBLIC_templateid,
        e.target,
        process.env.NEXT_PUBLIC_userid
      )
      .then(
        (result) => {
          // console.log(result.text);
          handleSubmit(200);
        },
        (error) => {
          // console.log(error.text);
          handleSubmit(404);
        }
      );
  }
  const handleSubmit = (code) => {
    setShowResponse(() => ({ display: true, code: code }));
    reset();
  };
  const responseCode = showResponse.code;
  return (
    <div className="container mx-auto max-w-sm">
      <SectionTitle title={"Entre em Contato"} />

      <div className="mx-auto lg:w-1/2 sm:w-3/4 w-11/12">
        <p className="italic text-primary-600 text-sm mb-4">
          Por favor, não altere ou cancele horários por e-mail. Para modificar seu
          horário, ligue diretamente para o salão no 617-559-0660
        </p>
        <form
          action="sumbit"
          className="mx-auto inline-block text-left w-full flex flex-col gap-4 pb-24"
          autoComplete="on"
          onSubmit={sendEmail}
        >
          <div className="w-full">
            <label className="font-bold after:content-['*'] after:text-red-500 after:text-xs after:align-top" htmlFor="name">
              Nome
            </label>
            <input
              className="w-full py-1 px-4 bg-secondary-200 bg-opacity-50 align-middle inline-block"
              type="text"
              id="name"
              name="name"
              placeholder="João Silva"
              required
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="font-bold after:content-['*'] after:text-red-500 after:text-xs after:align-top" htmlFor="email">
              Endereço de e-mail
            </label>
            <input
              className="w-full py-1 px-4 bg-secondary-200 bg-opacity-50 align-middle inline-block"
              type="text"
              id="email"
              name="email"
              placeholder="exemplo@email.com"
              required
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="font-bold after:content-['*'] after:text-red-500 after:text-xs after:align-top" htmlFor="phone">
              Número de telefone
            </label>

            <input
              className="w-full py-1 px-4 bg-secondary-200 bg-opacity-50 align-middle inline-block"
              type="text"
              id="phone"
              placeholder="***-***-****"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="font-bold after:content-['*'] after:text-red-500 after:text-xs after:align-top" htmlFor="message">
              Mensagem
            </label>
            <textarea
              className="w-full py-1 px-4 bg-secondary-200 bg-opacity-50 align-middle inline-block"
              type="text"
              id="message"
              name="message"
              required
              rows="8"
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="px-24 mx-auto">
            Enviar
          </Button>
        </form>
      </div>
      <ContactFormResponse
        setShowResponse={setShowResponse}
        responseCode={responseCode}
        showResponse={showResponse.display}
      />
    </div>
  );
}
