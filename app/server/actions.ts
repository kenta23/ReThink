//ALL FUNCTIONS COMMUNICATING TO DATABASE GOES HERE...

export async function getData() {  //example getting all datas
    const data = await fetch('');

    return data.json();
}