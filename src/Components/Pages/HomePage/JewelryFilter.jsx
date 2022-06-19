import React,{ useState, useEffect } from "react";

import {
    Accordion,
    AccordionItem,
    AccordionButton, 
    AccordionPanel,
    AccordionIcon,
    Box,
    Checkbox,
  } from "@chakra-ui/react";

  export const Jewelryfilter=()=>{
    const [product,setProduct]=useState([]);
    let [priceState1, setPriceState1] = useState(false);
    let [priceState2, setPriceState2] = useState(false);
    let [priceState3, setPriceState3] = useState(false);
    let [priceState4, setPriceState4] = useState(false);
  
    let [priceState5, setPriceState5] = useState(false);
    let [priceState6, setPriceState6] = useState(false);
    let [priceState7, setPriceState7] = useState(false);
    let [priceState8, setPriceState8] = useState(false);
    let [priceState9, setPriceState9] = useState(false);
    let [priceState10, setPriceState10] = useState(false);
    let [priceState11, setPriceState11] = useState(false);
  
    let [priceState12, setPriceState12] = useState(false);
    let [priceState13, setPriceState13] = useState(false);
    let [priceState14, setPriceState14] = useState(false);
    let [priceState15, setPriceState15] = useState(false);
    let [priceState16, setPriceState16] = useState(false);
    let [priceState17, setPriceState17] = useState(false);
    let [priceState18, setPriceState18] = useState(false);
    let [priceState19, setPriceState19] = useState(false);

    let [priceState20, setPriceState20] = useState(false);
    let [priceState21, setPriceState21] = useState(false);
    let [priceState22, setPriceState22] = useState(false);
    let [priceState23, setPriceState23] = useState(false);
    let [priceState24, setPriceState24] = useState(false);

    
    useEffect(()=>{
getData();
    },[]);

    const getData=async()=>{
        const res=await fetch('http://localhost:8080/jewelry');
        const data=await res.json();
        setProduct(data);
        console.log('data',data)
    }

    const priceSort = (x) => {
        console.log('x',x)
        if (x === "99") {
          setPriceState16(!priceState16);
          setProduct(product.filter((a) => a.price <= 99));
        } else if (x === "299") {
          setPriceState17(!priceState17);
          setProduct(
            product.filter(
              (a) => a.price > 99 && a.price <= 299
            )
          );
        } else if (x === "499") {
          setPriceState18(!priceState18);
          setProduct(
            product.filter(
              (a) => a.price > 299 && a.price <= 499
            )
          );
        } else{
          setPriceState19(!priceState19);
          setProduct(product.filter((a) => a.price >=500));
        }
      };

      const colorSort = (x) => {
        console.log('x',x)
        if (x === "blue") {
          setPriceState6(!priceState6);
          setProduct(product.filter((a) => a.color === "blue"));
        } else if (x === "white") {
          setPriceState8(!priceState8);
          setProduct(
            product.filter(
              (a) => a.color=== "white"
            )
          );
        } else if (x === "yellow") {
          setPriceState10(!priceState10);
          setProduct(
            product.filter(
              (a) => a.color==="yellow"
            )
          );
        }
        else if (x === "silver") {
            setPriceState9(!priceState9);
            setProduct(
              product.filter(
                (a) => a.color==="silver"
              )
            );
          } else if (x === "multicolor") {
            setPriceState7(!priceState7);
            setProduct(
              product.filter(
                (a) => a.color==="multicolor"
              )
            );
          }
      };
    

      const brandSort = (x) => {
        console.log('x',x)
        if (x === "alohas") {
          setPriceState1(!priceState1);
          setProduct(product.filter((a) => a.brand === "alohas"));
          console.log(product)
        } else if (x === "anitaberisa") {
          setPriceState2(!priceState2);
          setProduct(
            product.filter(
              (a) => a.brand=== "anitaberisa"
            )
          );
        } else if (x === "arestano") {
          setPriceState4(!priceState4);
          setProduct(
            product.filter(
              (a) => a.brandr==="arestano"
            )
          );
        }
        else if (x === "banbe") {
            setPriceState3(!priceState3);
            setProduct(
              product.filter(
                (a) => a.brand==="banbe"
              )
            );
          } else if (x === "chimi") {
            setPriceState5(!priceState5);
            setProduct(
              product.filter(
                (a) => a.brand==="chimi"
              )
            );
          }
      };

      const typeSort = (x) => {
        console.log('x',x)
        if (x === "gold") {
          setPriceState20(!priceState20);
          setProduct(product.filter((a) => a.product_type === "gold"));
        } else if (x === "stone") {
          setPriceState21(!priceState21);
          setProduct(
            product.filter(
              (a) => a.type=== "stone"
            )
          );
        } else if (x === "silver") {
          setPriceState22(!priceState22);
          setProduct(
            product.filter(
              (a) => a.type==="silver"
            )
          );
        }
        else if (x === "pearl") {
            setPriceState23(!priceState23);
            setProduct(
              product.filter(
                (a) => a.type==="pearl"
              )
            );
          } else if (x === "diamond") {
            setPriceState24(!priceState24);
            setProduct(
              product.filter(
                (a) => a.type==="diamond"
              )
            );
          }
      };
    
      const categorySort = (x) => {
        console.log('x',x)
        if (x === "earing") {
          setPriceState15(!priceState15);
          setProduct(product.filter((a) => a.type === "earing"));
        } else if (x === "ring") {
          setPriceState13(!priceState13);
          setProduct(
            product.filter(
              (a) => a.type=== "ring"
            )
          );
        } else if (x === "necklace") {
          setPriceState11(!priceState11);
          setProduct(
            product.filter(
              (a) => a.type==="necklace"
            )
          );
        }
        else if (x === "bracelet") {
            setPriceState14(!priceState14);
            setProduct(
              product.filter(
                (a) => a.type==="bracelet"
              )
            );
          } else if (x === "anklet") {
            setPriceState12(!priceState12);
            setProduct(
              product.filter(
                (a) => a.type==="anklet"
              )
            );
          }
      };
    

    return(
        <div style={{marginTop:"-650px"}}>
<div className="splitmainpage">
    Filter Products
          <div className="filter">
            <div  className="az">
              <Accordion  allowMultiple>
                {/* filter by product type */}
                <AccordionItem>
                  
                  {/* Brand Filter */}
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        MATERIAL TYPE
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    <Checkbox
                    
                      value="gold"
                      checked={priceState20}
                      onChange={() => {
                        typeSort("gold");
                      }}
                    >
                      GOLD
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="stone"
                      checked={priceState21}
                      onChange={() => {
                        typeSort("stone");
                      }}
                    >
                      STONE
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="silver"
                      checked={priceState22}
                      onChange={() => {
                        typeSort("silver");
                      }}
                    >
                      SILVER
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="pearl"
                      checked={priceState23}
                      onChange={() => {
                        typeSort("pearl");
                      }}
                    >
                      PEARL
                    </Checkbox>
                    <br></br>
                    <Checkbox
                      value="diamond"
                      checked={priceState24}
                      onChange={() => {
                        typeSort("diamond");
                      }}
                    >
                      DIAMOND
                    </Checkbox>
                  </AccordionPanel>
                </AccordionItem>
                {/* filter according to brand */}
                <AccordionItem>
                  
                  {/* Brand Filter */}
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        BRAND
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    <Checkbox
                    
                      value="alohas"
                      checked={priceState1}
                      onChange={() => {
                        brandSort("alohas");
                      }}
                    >
                      ALOHASH
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="anitaberisa"
                      checked={priceState2}
                      onChange={() => {
                        brandSort("anitaberisa");
                      }}
                    >
                      ANITABERISA
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="banbe"
                      checked={priceState3}
                      onChange={() => {
                        brandSort("banbe");
                      }}
                    >
                      BANBE
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="arestano"
                      checked={priceState4}
                      onChange={() => {
                        brandSort("arestano");
                      }}
                    >
                      ARESTANO
                    </Checkbox>
                    <br></br>
                    <Checkbox
                      value="chimi"
                      checked={priceState5}
                      onChange={() => {
                        brandSort("chimi");
                      }}
                    >
                      CHIMI
                    </Checkbox>
                  </AccordionPanel>
                </AccordionItem>
                {/* -------------------------filter-color ---------------------*/}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        COLOR
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    <Checkbox
                      value="blue"
                      checked={priceState6}
                      onChange={() => {
                        colorSort("blue");
                      }}
                    >
                      BLUE
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="multicolor"
                      checked={priceState7}
                      onChange={() => {
                        colorSort("multicolor");
                      }}
                    >
                      MULTICOLOR
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="white"
                      checked={priceState8}
                      onChange={() => {
                        colorSort("white");
                      }}
                    >
                      WHITE
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="silver"
                      checked={priceState9}
                      onChange={() => {
                        colorSort("silver");
                      }}
                    >
                      SILVER
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="yellow"
                      checked={priceState10}
                      onChange={() => {
                        colorSort("yellow");
                      }}
                    >
                      YELLOW
                    </Checkbox>
                    <br />
                  </AccordionPanel>
                </AccordionItem>

                {/* -------------------------filter-Dress type ---------------------*/}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        CATEGORY
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    <Checkbox
                      checked={priceState11}
                      onChange={() => {
                        categorySort("necklace");
                      }}
                      value="necklace"
                    >
                      NECKLACE
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState12}
                      onChange={() => {
                        categorySort("anklet");
                      }}
                      value="anklet"
                    >
                      ANKLET
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState13}
                      onChange={() => {
                        categorySort("ring");
                      }}
                      value="ring"
                    >
                      RING
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState14}
                      onChange={() => {
                        categorySort("bracelet");
                      }}
                      value="bracelet"
                    >
                      BRACELET
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState15}
                      onChange={() => {
                        categorySort("earing");
                      }}
                      value="earing"
                    >
                      EARING
                    </Checkbox>
                    <br />
                  </AccordionPanel>
                </AccordionItem>

                {/* -------------------------filter-Price ---------------------*/}

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        PRICE RANGE
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    <Checkbox
                      checked={priceState16}
                      onChange={() => {
                        priceSort("99");
                      }}
                      value="99"
                    >
                      Below $99
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState17}
                      onChange={() => {
                        priceSort("299");
                      }}
                      value="299"
                    >
                      From $100 - $299
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState18}
                      onChange={() => {
                        priceSort("499");
                      }}
                      value="499"
                    >
                      From $300 - $499
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState19}
                      onChange={() => {
                        priceSort("500");
                      }}
                      value="500"
                    >
                      Above 500
                    </Checkbox>
                    <br />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div></div>
      
        </div>
    )
  }