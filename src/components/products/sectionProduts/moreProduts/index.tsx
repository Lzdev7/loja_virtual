import { ArrowCircleRight } from "phosphor-react";
import { MoreProdctusContainer } from "./styles";

export function MoreProduts() {
  return(
    <>  
      <MoreProdctusContainer>
        <div className="buttonMoreProducts">
        <h1>todos os produtos</h1>
        <ArrowCircleRight size={26} />
        </div>
        <div className="linha"></div>
      </MoreProdctusContainer>
    </>
  )
}