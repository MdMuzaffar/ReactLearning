import { connect } from "react-redux";
import { addToCart } from "../Service/Actions/Action";
import Home from "../components/Home";

const mapStateToProps = () => ({});
// const mapDispatchToProps = (dispatch) => ({
//   addToCartHandler: (data) => dispatch(addToCart(data)),
// });

export default connect(mapStateToProps)(Home);
