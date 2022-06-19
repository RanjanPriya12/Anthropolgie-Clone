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

  export const Gardenfilter=()=>{
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
        const res=await fetch('http://localhost:8080/garden');
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
        if (x === "cocooil") {
          setPriceState1(!priceState1);
          setProduct(product.filter((a) => a.brand === "cocooil"));
          console.log(product)
        } else if (x === "pernici") {
          setPriceState2(!priceState2);
          setProduct(
            product.filter(
              (a) => a.brand=== "pernici"
            )
          );
        } else if (x === "terrain") {
          setPriceState4(!priceState4);
          setProduct(
            product.filter(
              (a) => a.brandr==="terrain"
            )
          );
        }
        else if (x === "umbra") {
            setPriceState3(!priceState3);
            setProduct(
              product.filter(
                (a) => a.brand==="umbra"
              )
            );
          } else if (x === "olliella") {
            setPriceState5(!priceState5);
            setProduct(
              product.filter(
                (a) => a.brand==="olliella"
              )
            );
          }
      };
    
      const categorySort = (x) => {
        console.log('x',x)
        if (x === "flowerpot") {
          setPriceState15(!priceState15);
          setProduct(product.filter((a) => a.product_type === "flowerpot"));
        } else if (x === "chair") {
          setPriceState13(!priceState13);
          setProduct(
            product.filter(
              (a) => a.product_type=== "chair"
            )
          );
        } else if (x === "table") {
          setPriceState11(!priceState11);
          setProduct(
            product.filter(
              (a) => a.product_type==="table"
            )
          );
        }
        else if (x === "lamp") {
            setPriceState14(!priceState14);
            setProduct(
              product.filter(
                (a) => a.product_type==="lamp"
              )
            );
          } else if (x === "flower") {
            setPriceState12(!priceState12);
            setProduct(
              product.filter(
                (a) => a.product_type==="flower"
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
                    
                      value="cocooil"
                      checked={priceState1}
                      onChange={() => {
                        brandSort("cocooil");
                      }}
                    >
                      COCOOIL
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="pernici"
                      checked={priceState2}
                      onChange={() => {
                        brandSort("pernici");
                      }}
                    >
                      PERNICI
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="umbra"
                      checked={priceState3}
                      onChange={() => {
                        brandSort("umbra");
                      }}
                    >
                      UMBRA
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="terrain"
                      checked={priceState4}
                      onChange={() => {
                        brandSort("terrain");
                      }}
                    >
                      TERRAIN
                    </Checkbox>
                    <br></br>
                    <Checkbox
                      value="olliella"
                      checked={priceState5}
                      onChange={() => {
                        brandSort("olliella");
                      }}
                    >
                      OLLI ELLA
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
                        categorySort("table");
                      }}
                      value="table"
                    >
                      TABLE
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState12}
                      onChange={() => {
                        categorySort("flower");
                      }}
                      value="flower"
                    >
                      FLOWER
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState13}
                      onChange={() => {
                        categorySort("chair");
                      }}
                      value="chair"
                    >
                      CHAIR
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState14}
                      onChange={() => {
                        categorySort("lamp");
                      }}
                      value="lamp"
                    >
                      LAMP
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState15}
                      onChange={() => {
                        categorySort("flowerpot");
                      }}
                      value="flowerpot"
                    >
                      FLOWER POT
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