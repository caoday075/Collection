let data = {
  type: "product",
  id: "some id",
  attributes: {
    name: "Old Racket",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Real-tennis-rackets-balls.jpg",
    category: "some category",
    subcategory: 'some subcategory',
    usedPrice: 19.99,
    usedQuantity: 11,
    newPrice: 100.00,
    newQuantity: 1 } };





class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || "",
      imgUrl: props.imgUrl || "",
      category: props.category || "",
      subcategory: props.subcategory || "",
      usedPrice: props.usedPrice || 0,
      usedQuantity: props.usedQuantity || 0,
      newPrice: props.newPrice || 0,
      newQuantity: props.newQuantity || 0,
      submitText: props.submitText || "Submit" };

    this.handleName = this.handleName.bind(this);
    this.handleImageUrl = this.handleImageUrl.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleSubcategory = this.handleSubcategory.bind(this);
    this.handleUsedQuantity = this.handleUsedQuantity.bind(this);
    this.handleUsedPrice = this.handleUsedPrice.bind(this);
    this.handleNewQuantity = this.handleNewQuantity.bind(this);
    this.handleNewPrice = this.handleNewPrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleName(e) {
    this.setState({
      name: e.target.value });

  }


  handleImageUrl(e) {
    this.setState({
      imgUrl: e.target.value });

  }


  handleCategory(e) {
    this.setState({
      category: e.target.value });

  }

  handleSubcategory(e) {
    this.setState({
      subcategory: e.target.value });

  }

  handleUsedQuantity(e) {
    this.setState({
      usedQuantity: e.target.value });

  }

  handleUsedPrice(e) {
    this.setState({
      usedPrice: e.target.value });

  }

  handleNewQuantity(e) {
    this.setState({
      newQuantity: e.target.value });

  }

  handleNewPrice(e) {
    this.setState({
      newPrice: e.target.value });

  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.submitAction)
    this.props.submitAction(this.state);else

    alert(JSON.stringify(this.state, null, 2));
  }


  render() {
    return (
      React.createElement("div", { className: "ProductForm" },
      React.createElement("form", { onSubmit: this.handleSubmit },
      React.createElement("div", { className: "ProductForm--section" },

      React.createElement("div", { className: "ProductForm--img" },
      React.createElement("img", { src: this.state.imgUrl, alt: "Image of " + this.state.name })),


      React.createElement("div", { className: "ProductForm--info" },

      React.createElement("section", { className: "ProductForm--input" },
      React.createElement("label", null,
      React.createElement("i", { className: "fa fa-bookmark", "aria-hidden": "true" })),

      React.createElement("input", { placeholder: "Name", value: this.state.name, onChange: this.handleName })),


      React.createElement("section", { className: "ProductForm--input" },
      React.createElement("label", null,
      React.createElement("i", { className: "fa fa-image", "aria-hidden": "true" })),

      React.createElement("input", { placeholder: "Image URL", value: this.state.imgUrl, onChange: this.handleImageUrl })),


      React.createElement("section", { className: "ProductForm--input" },
      React.createElement("label", null,
      React.createElement("i", { className: "fa fa-cubes", "aria-hidden": "true" })),

      React.createElement("input", { placeholder: "Category", value: this.state.category, onChange: this.handleCategory })),


      React.createElement("section", { className: "ProductForm--input" },
      React.createElement("label", null,
      React.createElement("i", { className: "fa fa-cube", "aria-hidden": "true" })),

      React.createElement("input", { placeholder: "Subcategory", value: this.state.subcategory, onChange: this.handleSubcategory })))),






      React.createElement("div", { className: "ProductForm--section ProductForm--quantity-price-container" },

      React.createElement("div", { className: "ProductForm--quantity-price" },
      React.createElement("h1", null, "Used"),
      React.createElement("section", { className: "ProductForm--input" },
      React.createElement("label", null,
      React.createElement("i", { className: "fa fa-usd", "aria-hidden": "true" })),

      React.createElement("input", { placeholder: "Price", value: this.state.usedPrice, onChange: this.handleUsedPrice })),

      React.createElement("section", { className: "ProductForm--input" },
      React.createElement("label", null,
      React.createElement("i", { className: "fa fa-hashtag", "aria-hidden": "true" })),

      React.createElement("input", { placeholder: "Quantity", value: this.state.usedQuantity, onChange: this.handleUsedQuantity }))),



      React.createElement("div", { className: "ProductForm--quantity-price" },
      React.createElement("h1", null, "New"),
      React.createElement("section", { className: "ProductForm--input" },
      React.createElement("label", null,
      React.createElement("i", { className: "fa fa-usd", "aria-hidden": "true" })),

      React.createElement("input", { placeholder: "Price", value: this.state.newPrice, onChange: this.handleNewPrice })),

      React.createElement("section", { className: "ProductForm--input" },
      React.createElement("label", null,
      React.createElement("i", { className: "fa fa-hashtag", "aria-hidden": "true" })),

      React.createElement("input", { placeholder: "Quantity", value: this.state.newQuantity, onChange: this.handleNewQuantity })))),






      React.createElement("div", { className: "ProductForm--section" },
      React.createElement("button", { className: "ProductForm--submit", type: "submit" },
      React.createElement("div", { className: "ProductForm--submit--icon" },
      React.createElement("i", { className: "fa fa-check", "aria-hidden": "true" })),

      React.createElement("div", { className: "ProductForm--submit--label" }, this.state.submitText))))));





  }}



function something(data) {
  alert(JSON.stringify(data, null, 2));
}

ReactDOM.render(React.createElement(ProductForm
// name={data.attributes.name}
// imgUrl={data.attributes.img}
// category={data.attributes.category}
// subcategory={data.attributes.subcategory}
// usedPrice={data.attributes.usedPrice}
// usedQuantity={data.attributes.usedQuantity}
// newPrice={data.attributes.newPrice}
// newQuantity={data.attributes.newQuantity}
// submitText="Update"
, { submitAction: something }),
document.querySelector("#app"));