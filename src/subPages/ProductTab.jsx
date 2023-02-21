import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductDetails from './ProductDetails';
import ProductInformation from './ProductInformation';
import ProductReview from './ProductReview';
import ProductShipping from './ProductShipping';

import "./ProductTab.modul.css"


function ProductTab() {
  return (
    <Tabs
      defaultActiveKey="Details"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Information" title="상품 필수 표기 정보">
        <ProductInformation />
      </Tab>
      <Tab eventKey="Details" title="상품 상세 정보">
        <ProductDetails />
      </Tab>
      <Tab eventKey="Shipping" title="배송 안내" >
        <ProductShipping /> 
      </Tab>
      <Tab eventKey="Viewed" title="리뷰" >
        <ProductReview />
      </Tab>
    </Tabs>
  );
}

export default ProductTab;