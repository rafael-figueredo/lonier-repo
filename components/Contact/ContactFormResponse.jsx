import Backdrop from "../../components/Backdrop";
const ContactFormResponse = (params) => {
  const openResponse = params.showResponse ? "block" : "hidden";
  return (
    <div
      className={`${openResponse} absolute w-full flex justify-center py-2  bottom-0 left-0 h-full`}
    >
      <div
        className="text-center z-50 lg:w-1/2 sm:w-3/4 w-11/12 absolute inset-x-2/4 rounded-lg xl:p-24 sm:p-16 py-10 px-4"
        style={{ backgroundColor: "#fbfbef", bottom: "8%" }}
      >
        <div className="px-10 sm:px-2">
          <h2
            className="sm:text-xl font-bold mb-4"
            style={{ color: "rgba(113, 63, 18, 1)" }}
          >
            {params.responseCode === 200
              ? "Obrigado por entrar em contato com o Studio Lonier!"
              : "Ops! Algo deu errado!"}
          </h2>
          <p>
            {params.responseCode === 200
              ? "Entraremos em contato em breve. Se você quiser agendar, alterar ou cancelar o horário, ligue para nós no (617) 559‑0660."
              : "Se você quiser agendar, alterar ou cancelar o horário, ligue para nós no (617) 559‑0660."}
          </p>
          <picture>
            <source type="image/webp" srcSet="contact-confirmation.webp" />
            <source type="image/png" srcSet="contact-confirmation.png" />
            <img
              src="/contact-confirmation.png"
              alt="Telefone"
              className="w-24 mx-auto mt-6"
            />
          </picture>
        </div>
        <span
          className="absolute cursor-pointer right-0 text-3xl leading-none"
          onClick={() => params.setShowResponse(false)}
          style={{ top: "-6px" }}
        >
          &times;
        </span>
      </div>
      <Backdrop
        toggle={openResponse}
        onClick={() => params.setShowResponse(false)}
        blur={true}
      />
    </div>
  );
};
export default ContactFormResponse;
