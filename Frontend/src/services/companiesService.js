const PORT = 3031;
const API_BASE_URL = 'http://localhost:' + PORT;

export async function getCompanies() {
  try {
    const response = await fetch(API_BASE_URL + '/companies');
    const data = await response.json();

    if (response.status !== 200) throw new Error('Error al conectarse con el endpoint');
    console.log(data);
    return data;

  } catch (error) {
    console.log(error);
  }
}

export async function getCompany(id) {
  try {
    const response = await fetch(API_BASE_URL + `/companies/${id}`);
    const data = await response.json();

    if (response.status !== 200) throw new Error('Error al conectarse con el endpoint');
    console.log(data);
    return data;

  } catch (error) {
    console.log(error);
  }
}

export async function postCompany(props) {
  try {
    const response = await fetch(API_BASE_URL + "/companies/create", {
      method: "POST",
      body: props
    });

    const data = await response.json();
    if (response.status === 400) {
      return data;
    }
    
    if (response.status !== 201) throw new Error('Error al conectarse con el endpoint'); 
  } catch (error) {
    console.error('Ha sucedido un error:', error);
  }
}

export async function putCompany(props) {
  try {
    const response = await fetch(API_BASE_URL + `/companies/edit/${props.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props)
    });

    if (response.status !== 200) throw new Error('Error al conectarse con el endpoint');

  } catch (error) {
    console.log("Error: ", error);
  }
}