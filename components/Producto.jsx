import Image from "next/image";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hook/useQuiosco";

const Producto = ({ producto }) => {
  const { nombre, imagen, precio } = producto;
  const { handleSetProducto, handleChangeModal } = useQuiosco();
  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/assets/img/${imagen}.jpg`}
        alt={`imagen platillo ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-3xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleChangeModal();
            handleSetProducto(producto);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
