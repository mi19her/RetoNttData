
export const formatDate = (dates: string) =>{
    const date = new Date(dates);

    const meses =[ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const day = date.getUTCDate();
    const month = meses[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${day} de ${month} de ${year}`;
}
