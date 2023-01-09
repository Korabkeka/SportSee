class Adapter{

    static formatUserData(data){
        let score = data.data.todayScore || data.data.score;
        let keyData = {
            calories: `${data.data.keyData.calorieCount/1000}kCal`,
            proteines: `${data.data.keyData.proteinCount}g`,
            glucides: `${data.data.keyData.carbohydrateCount}g`,
            lipides: `${data.data.keyData.lipidCount}g`
        }
        return {
            score: score*100,
            keyData: keyData,
            userInfos: data.data.userInfos
        }
    }

    static formatBarChart(data){
        let _data = data.data.sessions.map((el, i)=> {
            el.day = i+1
            return el;
        });
        return _data;
    }

    static formatLineChart(data){
        return data.data.sessions.map(el=>{
            switch (el.day){
                case 1:
                    el.day = "L";
                    break;
                case 2:
                    el.day = "M";
                    break;
                case 3:
                    el.day = "M";
                    break;
                case 4:
                    el.day = "J";
                    break;
                case 5:
                    el.day = "V";
                    break;
                case 6:
                    el.day = "S";
                    break;
                case 7:
                    el.day = "D";
                    break;
                default:
                    break;
            }
            return el;
        })
    }

    static formatRadarChart(data){
        let _data = data.data.data;
        return _data.map(el=>{
            switch (el.kind){
                case 1:
                    el.kind = "cardio";
                    break;
                case 2:
                    el.kind = "energie";
                    break;
                case 3:
                    el.kind = "endurance";
                    break;
                case 4:
                    el.kind = "force";
                    break;
                case 5:
                    el.kind = "vitesse";
                    break;
                case 6:
                    el.kind = "intensité";
                    break;
                default:
                    break;
            }
            return el;
        })
    }
}

class Manager{

    async getUser(id){
        try {
            let userData = await fetch(`http://localhost:3000/user/${id}`).then(res => res.json()).then(data =>  data);
            return Adapter.formatUserData(userData);
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
            return Adapter.formatLineChart(userData);
        } catch (error) {
            console.log(error)
        }
        return;
    }

    async getRadarChartData(id){
        try {
            let userData = await fetch(`http://localhost:3000/user/${id}/performance`).then(res => res.json()).then(data =>  data);
            return Adapter.formatRadarChart(userData);
        } catch (error) {
            console.log(error)
        }
        return;
    }

}

export const manager = new Manager();