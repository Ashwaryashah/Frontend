import "./home.scss"
import { AcUnit } from "@material-ui/icons"
import NAVBAR from "../components/navbar/NAVBAR"
import Featured from "../components/featured/Featured"
import List from "../components/list/List"

function HOME() {
    return (
        <div className='home'>
            <NAVBAR/>
            <Featured/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
            
        </div>
    )
}

export default HOME
