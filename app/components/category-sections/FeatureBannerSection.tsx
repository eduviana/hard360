export const FeatureBannerSection = () => {
  return (
    <section className="bg-[#E8E8ED] py-8">
     <div className="custom-container">
       <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* ITEM 1 */}
        <div className="flex items-center gap-4 w-full max-w-sm">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shrink-0">
            <img
              src="/icons/card.png"
              alt="tarjeta"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div>
            <p className="uppercase font-semibold text-[15px] text-text-secondary">
              PAGÁ EN HASTA 12 CUOTAS
            </p>
            <p className="text-sm max-w-[200px]">
              con las principales tarjetas de crédito
            </p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-center gap-4 w-full max-w-sm">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shrink-0">
            <img
              src="/icons/truck.png"
              alt="envío"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div>
            <p className="uppercase font-semibold text-[15px] text-text-secondary">
              RECIBÍ TU PRODUCTO
            </p>
            <p className="text-sm max-w-[200px]">
              en más de 100 puntos en todo el país
            </p>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};
