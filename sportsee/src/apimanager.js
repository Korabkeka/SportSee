class Manager{

    async getUser(id){
        try {
            let userData = await fetch(`http://localhost:3000/user/${id}`).then(res => res.json()).then(data =>  data);
            console.log(userData);
        } catch (error) {
            console.log(error)
        }

        return;
    }

    async getBarChartData(){
        //fetch url data
        return;
    }

    async getLineChartData(){

        return;
    }

    async getRadarChartData(){

        return;
    }

    async getRadialChartData(){

        return;
    }
}

export const manager = new Manager();