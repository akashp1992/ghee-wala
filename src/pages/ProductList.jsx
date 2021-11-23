import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import NewsLatter from "../components/NewsLatter";
import Footer from "../components/Footer";
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
  Title,
} from "../Theme/ProductList";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="ghee" onChange={handleFilter}>
            <Option disabled>Select Ghee</Option>
            <Option>Desi Ghee</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>ML</Option>
            <Option>100</Option>
            <Option>250</Option>
            <Option>500</Option>
            <Option>1000</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc"> Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLatter />
      <Footer />
    </Container>
  );
};
export default ProductList;
