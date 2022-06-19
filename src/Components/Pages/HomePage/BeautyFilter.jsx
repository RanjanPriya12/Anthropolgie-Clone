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

  export const Beautyfilter=()=>{
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
        const res=await fetch('http://localhost:8080/beautyproducts');
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
        if (x === "nykka") {
          setPriceState1(!priceState1);
          setProduct(product.filter((a) => a.brand === "nyakka"));
          console.log(product)
        } else if (x === "neviya") {
          setPriceState2(!priceState2);
          setProduct(
            product.filter(
              (a) => a.brand=== "neviya"
            )
          );
        } else if (x === "mamaearth") {
          setPriceState4(!priceState4);
          setProduct(
            product.filter(
              (a) => a.brandr==="mamaearth"
            )
          );
        }
        else if (x === "luckme") {
            setPriceState3(!priceState3);
            setProduct(
              product.filter(
                (a) => a.brand==="luckme"
              )
            );
          } else if (x === "patanjali") {
            setPriceState5(!priceState5);
            setProduct(
              product.filter(
                (a) => a.brand==="patanjali"
              )
            );
          }
      };
    
      const categorySort = (x) => {
        console.log('x',x)
        if (x === "cream") {
          setPriceState15(!priceState15);
          setProduct(product.filter((a) => a.product_type === "cream"));
        } else if (x === "facewash") {
          setPriceState13(!priceState13);
          setProduct(
            product.filter(
              (a) => a.product_type=== "facewash"
            )
          );
        } else if (x === "makeup") {
          setPriceState11(!priceState11);
          setProduct(
            product.filter(
              (a) => a.product_type==="makeup"
            )
          );
        }
        else if (x === "faceserum") {
            setPriceState14(!priceState14);
            setProduct(
              product.filter(
                (a) => a.product_type==="faceserum"
              )
            );
          } else if (x === "shampoo") {
            setPriceState12(!priceState12);
            setProduct(
              product.filter(
                (a) => a.product_type==="shampoo"
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
                    
                      value="nyakka"
                      checked={priceState1}
                      onChange={() => {
                        brandSort("nyakka");
                      }}
                    >
                      NYKKA
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="neviya"
                      checked={priceState2}
                      onChange={() => {
                        brandSort("neviya");
                      }}
                    >
                      NEVIYA
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="luckme"
                      checked={priceState3}
                      onChange={() => {
                        brandSort("luckme");
                      }}
                    >
                      LUCKME
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="mamaearth"
                      checked={priceState4}
                      onChange={() => {
                        brandSort("mamaearth");
                      }}
                    >
                      MAMAEARTH
                    </Checkbox>
                    <br></br>
                    <Checkbox
                      value="patanjali"
                      checked={priceState5}
                      onChange={() => {
                        brandSort("patanjali");
                      }}
                    >
                      PATANJALI
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
                        categorySort("makeup");
                      }}
                      value="makeup"
                    >
                      MAKEUP KIT
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState12}
                      onChange={() => {
                        categorySort("shampoo");
                      }}
                      value="shampoo"
                    >
                      SHAMPOO/ CONDITIONER
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState13}
                      onChange={() => {
                        categorySort("facewah");
                      }}
                      value="facewash"
                    >
                      FACE WASH
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState14}
                      onChange={() => {
                        categorySort("faceserum");
                      }}
                      value="faceserum"
                    >
                      FACE SERUM
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState15}
                      onChange={() => {
                        categorySort("cream");
                      }}
                      value="cream"
                    >
                      Face CREAM
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