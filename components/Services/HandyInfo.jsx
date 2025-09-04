export default function HandyInfo() {
  return (
    <div
      className="w-1/4 ml-auto xl:mr-auto lg:mr-auto xl:w-auto lg:w-auto xl:h-auto lg:h-auto xl:pb-8 lg:pb-8 slide-query"
      style={{ background: "#fbfbef" }}
    >
      <div className="max-w-90 mx-auto">
        <h2 className="text-center font-bold text-black mt-10 mb-8">
          Informações Úteis
        </h2>
        {/* Blowdry */}
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-10 h-10 mx-auto inline">
            <source type="image/webp" srcSet="blowdry.webp" />
            <source type="image/png" srcSet="blowdry.png" />
            <img src="blowdry.png" alt="Agendar secagem" />
          </picture>
          <div className="col-span-4">
            <p className="inline text-sm text-black">
              Agende o secador junto com seu agendamento de coloração.
            </p>
          </div>
        </div>
        {/* Kids */}
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-8 h-8 mx-auto inline">
            <source type="image/webp" srcSet="baby.webp" />
            <source type="image/png" srcSet="baby.png" />
            <img src="baby.png" alt="Crianças" />
          </picture>
          <div className="col-span-4">
            <p className="inline text-sm text-black">
              Crianças devem estar sob supervisão de adultos o tempo todo.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-8 h-8 mx-auto inline my-auto">
            <source type="image/webp" srcSet="phone-contact.webp" />
            <source type="image/png" srcSet="phone-contact.png" />
            <img src="phone-contact.png" alt="Contato" />
          </picture>
          {/* Contact */}
          <div className="col-span-4">
            <p className="inline text-sm text-black">
              Para agendar, alterar ou cancelar seu horário, ligue para nós no
              617-559-0660.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-8 mx-auto inline my-auto">
            <source type="image/webp" srcSet="schedule.webp" />
            <source type="image/png" srcSet="schedule.png" />
            <img src="schedule.png" alt="Agendamento" />
          </picture>
          {/* Cancellations */}
          <div className="col-span-4">
            <p className="inline text-sm text-black">
              Cancelamentos com menos de 24 horas de antecedência podem resultar em taxa.
            </p>
          </div>
        </div>
        {/* Payment */}
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-10 h-10 mx-auto inline">
            <source type="image/webp" srcSet="payment.webp" />
            <source type="image/png" srcSet="payment.png" />
            <img src="payment.png" alt="Pagamento" />
          </picture>
          <div className="col-span-4">
            <p className="inline text-sm text-black">
              Aceitamos todos os principais cartões de crédito.
              <br />
              (infelizmente a gorjeta não pode ser cobrada no cartão de crédito).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
