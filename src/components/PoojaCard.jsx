import { ArrowUpRight } from "lucide-react";

const PoojaCard = ({ pooja }) => {
  return (
    <article
      className={`
        group
        relative
        min-h-[220px]
        overflow-hidden
        rounded-[22px]
        border
        border-white/10
        bg-[#151515]
        ${pooja.className}
      `}
    >
      {/* Image */}
      <img
        src={pooja.image}
        alt={pooja.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/30
          to-black/5
        "
      />

      {/* Badge */}
      <div
        className="
          absolute
          left-4
          top-4
          rounded-full
          border
          border-white/10
          bg-black/30
          px-3
          py-1
          text-[10px]
          text-white/70
          backdrop-blur-md
        "
      >
        Puja
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {pooja.title}
            </h3>

            <p className="mt-1 text-xs text-white/55">{pooja.subtitle}</p>
          </div>

          <button
            aria-label={`View ${pooja.title}`}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:bg-white
              group-hover:text-black
            "
          >
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PoojaCard;
