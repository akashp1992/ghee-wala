import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {
  Arrow,
  Button,
  Container,
  Desc,
  Image,
  ImgContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from "../Theme/Slider";
import { sliderItems } from "../data";
import { useSelector, useDispatch } from "react-redux";
import { gotoLeft, gotoRight } from "../actions";
const Slider = () => {
  const changeSlide = useSelector((state) => state.changeTheSlider);
  const dispatch = useDispatch();
  return (
    <Container>
      <Arrow direction="left" onClick={() => dispatch(gotoLeft())}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={changeSlide}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => dispatch(gotoRight())}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
