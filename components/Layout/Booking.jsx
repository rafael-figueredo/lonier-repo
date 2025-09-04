import Image from "next/image";
import Backdrop from "../Backdrop";
import React from "react";
export default function Booking(props) {
  return (
    <div className="justify-center flex fixed z-50 inset-x-0">
      <div className={`absolute sm:w-max z-50 bg-white container top-0 my-24`}>
        <div className="mx-auto">
          <div className="py-4 px-8 border-b-2 relative flex justify-between items-center">
            <h2 className="text-xl font-bold">Política de Agendamento</h2>
            <span
              className="cursor-pointer text-3xl"
              onClick={() => props.setShowBooking(false)}
            >
              &times;
            </span>
          </div>
          <div className="flex gap-4 flex-col py-6 px-8 h-60vh overflow-y-scroll">
            {/* <p className="font-bold">First-Time Clients</p>
            <p>
              Welcome to Studio Lonier Cut & Color Group. All first-time visitors,
              please call the salon at{" "}
              <a href="tel:617-559-0660" className="font-bold">
                617-559-0660{" "}
              </a>
              in order for us to properly assess your service needs and provide
              the best possible stylist.
            </p> */}
            {/* <p className="font-bold">Returning Clients</p> */}
            <p>
              Bem-vindo ao Studio Lonier Cut & Color Group. Importante lembrar:
            </p>
            <ol className="list-decimal	px-6">
              <li>
                Agende qualquer serviço de coloração/químico antes de um corte ou
                secagem.
              </li>
              <li>
                Para agendar um horário para extensões, tratamentos de alisamento
                ou permanente, exigimos um cartão de crédito em arquivo.
              </li>
            </ol>
            <p className="font-bold">Cancelamentos de Horários</p>
            <p>
              Exigimos 24 horas de antecedência para cancelar ou reagendar qualquer
              serviço. Caso contrário, você será cobrado 100% do valor total
              estimado do serviço, e um cartão de crédito será necessário para agendar
              horários futuros.
            </p>
            <p className="font-bold">Formas de Pagamento</p>
            <p>
              Aceitamos todos os principais cartões de crédito e dinheiro. Infelizmente, a gorjeta
              não pode ser cobrada no cartão de crédito.
            </p>
            <p className="font-bold">Crianças</p>
            <p>
              Para a segurança e conforto de nossos clientes, não podemos acomodar
              crianças sem supervisão de adultos.
            </p>
          </div>
          <div className="border-t-2">
            <a
              className="contents "
              target="_blank"
              rel="noopener noreferrer"
              href="https://login.meevo.com/studiolonier/ob?locationId=106145"
            >
              <button className="block mx-auto hover:opacity-75 shadow-lg my-3 bg-primary-500 rounded-2xl py-3 px-12 text-white font-bold text-base">
                Agendar Online{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      <Backdrop
        toggle={props.showBooking}
        onClick={() => props.setShowBooking(false)}
        blur={true}
      />
    </div>
  );
}
