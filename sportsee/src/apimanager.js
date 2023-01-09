class Adapter{

    static formatUserData(data){
        
    }

    static formatBarChart(data){
        let _data = data.data.sessions.map((el, i)=> {
            el.day = i+1
            return el;
        });
        return _data;
    }

}

class Manager{

    async getUser(id){
        try {
            let userData = await fetch(`http://localhost:3000/user/${id}`).then(res => res.json()).then(data =>  data);
            console.log('user info', userData);
            return userData;
        } catch (error) {
            console.log(error)
        }
        return;
    }

    async getBarChartData(id){
        try {
            let userData = await fetch(`http://localhost:3000/user/${id}/activity`).then(res => res.json()).then(data =>  data);
            
            return Adapter.formatBarChart(userData);
        } catch (error) {
            console.log(error)
        }
        return;
    }

    async getLineChartData(id){
        try {
            let userData = await fetch(`http://localhost:3000/user/${id}/average-sessions`).then(res => res.json()).then(data =>  data);
            console.log("line chart", userData)
            return userData;
        } catch (error) {
            console.log(error)
        }
        return;
    }

    async getRadarChartData(id){
        try {
            let userData = await fetch(`http://localhost:3000/user/${id}/performance`).then(res => res.json()).then(data =>  data);
            console.log("radar chart", userData);
            return userData;
        } catch (error) {
            console.log(error)
        }
        return;
    }

}

export const manager = new Manager();