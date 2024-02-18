//import PORT from '../../../env.development.local';
const PORT=3031;
const API_BASE_URL = 'http://localhost:' + PORT;

export async function getProfessions(){
    try{
        const response = await fetch(API_BASE_URL + '/professions');
        const data = await response.json();
        
        if(response.status !== 200) throw new Error('Error al conectarse con el endpoint');
        return data;
    
    }catch(error){
            console.log(error);
    }
}

export async function getProfession(id){
    try{
        const response = await fetch(API_BASE_URL + `/professions/${id}`);
        const data = await response.json();
        
        if(response.status !== 200) throw new Error('Error al conectarse con el endpoint');
        
        return data;
    
    }catch(error){
            console.log(error);
    }
}