const PORT=3031;
const API_BASE_URL = 'http://localhost:' + PORT;

export async function getCompanies(){
    try{
        const response = await fetch(API_BASE_URL + '/companies');
        const data = await response.json();
        
        if(response.status !== 200) throw new Error('Error al conectarse con el endpoint');
        console.log(data);
        return data;
    
    }catch(error){
            console.log(error);
    }
}