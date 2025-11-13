import { Helix } from 'ldrs/react'
import 'ldrs/react/Helix.css'


export default function Loader() {

    return (

        <div id='loader_container'>

            <Helix
                size="45"
                speed="2.5"
                color="black"
            />
        </div>
    )
}