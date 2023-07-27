import { CardApresentationContainer } from "./styles";
import secaocsa from "../../../assets/itensdecasa.jpg"

export function CardApresentation() {
  return(
    <>
    
    <CardApresentationContainer>

        <div className="cardApresentation">

          <img src={secaocsa} className="secaocasaImg" />

          <div className="cartApresntatationContent">
            <h1>Utencilios de casa</h1>
            <button>Shop Now</button>
          </div>
        </div>

    </CardApresentationContainer>

    </>
  )
}