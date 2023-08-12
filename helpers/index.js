export const formatearDinero = cantidad => {
    if (typeof cantidad === 'number') {
        return cantidad.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    } else {
        // Manejo de error o devolución de valor por defecto
        return 'Cantidad inválida';
    }
};