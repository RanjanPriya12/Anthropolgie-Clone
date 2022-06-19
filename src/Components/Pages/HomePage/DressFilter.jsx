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

  export const Dressfilter=()=>{
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

    
    useEffect(()=>{
getData();
    },[]);

    const getData=async()=>{
        const res=await fetch('http://localhost:8080/dress');
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
        else if (x === "brown") {
            setPriceState9(!priceState9);
            setProduct(
              product.filter(
                (a) => a.color==="brown"
              )
            );
          } else if (x === "black") {
            setPriceState7(!priceState7);
            setProduct(
              product.filter(
                (a) => a.color==="black"
              )
            );
          }
      };
    

      const brandSort = (x) => {
        console.log('x',x)
        if (x === "guchhi") {
          setPriceState1(!priceState1);
          setProduct(product.filter((a) => a.brand === "guchhi"));
          console.log(product)
        } else if (x === "Amadi") {
          setPriceState2(!priceState2);
          setProduct(
            product.filter(
              (a) => a.brand=== "Amadi"
            )
          );
        } else if (x === "Amanu") {
          setPriceState4(!priceState4);
          setProduct(
            product.filter(
              (a) => a.brandr==="Amanu"
            )
          );
        }
        else if (x === "lee") {
            setPriceState3(!priceState3);
            setProduct(
              product.filter(
                (a) => a.brand==="lee"
              )
            );
          } else if (x === "bhanjanan") {
            setPriceState5(!priceState5);
            setProduct(
              product.filter(
                (a) => a.brand==="bhanjanan"
              )
            );
          }
      };
    
      const categorySort = (x) => {
        console.log('x',x)
        if (x === "sweater") {
          setPriceState15(!priceState15);
          setProduct(product.filter((a) => a.product_type === "sweater"));
        } else if (x === "saree") {
          setPriceState13(!priceState13);
          setProduct(
            product.filter(
              (a) => a.product_type=== "saree"
            )
          );
        } else if (x === "pant") {
          setPriceState11(!priceState11);
          setProduct(
            product.filter(
              (a) => a.product_type==="pant"
            )
          );
        }
        else if (x === "shirt") {
            setPriceState14(!priceState14);
            setProduct(
              product.filter(
                (a) => a.product_type==="shirt"
              )
            );
          } else if (x === "one") {
            setPriceState12(!priceState12);
            setProduct(
              product.filter(
                (a) => a.product_type==="one"
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
                    
                      value="gucchi"
                      checked={priceState1}
                      onChange={() => {
                        brandSort("gucchi");
                      }}
                    >
                      GUCHHI
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="Amadi"
                      checked={priceState2}
                      onChange={() => {
                        brandSort("Amadi");
                      }}
                    >
                      AMADI
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="lee"
                      checked={priceState3}
                      onChange={() => {
                        brandSort("lee");
                      }}
                    >
                      LEE COOPER
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="Amanu"
                      checked={priceState4}
                      onChange={() => {
                        brandSort("Amanu");
                      }}
                    >
                      Amanu
                    </Checkbox>
                    <br></br>
                    <Checkbox
                      value="bhanjanan"
                      checked={priceState5}
                      onChange={() => {
                        brandSort("bhanjanan");
                      }}
                    >
                      BHANJANAN
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
                      value="black"
                      checked={priceState7}
                      onChange={() => {
                        colorSort("black");
                      }}
                    >
                      BLACK
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
                      value="brown"
                      checked={priceState9}
                      onChange={() => {
                        colorSort("brown");
                      }}
                    >
                      BROWN
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
                        categorySort("pant");
                      }}
                      value="pant"
                    >
                      PANT/ JEANS
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState12}
                      onChange={() => {
                        categorySort("one");
                      }}
                      value="one"
                    >
                      MIDI/ TOP
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState13}
                      onChange={() => {
                        categorySort("saree");
                      }}
                      value="saree"
                    >
                      SAREE
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState14}
                      onChange={() => {
                        categorySort("shirt");
                      }}
                      value="shirt"
                    >
                      SHIRT
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState15}
                      onChange={() => {
                        categorySort("top");
                      }}
                      value="top"
                    >
                      SWEATER
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