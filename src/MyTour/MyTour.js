import { Button, Card, Col } from "react-bootstrap";

const MyTour = (params) => {
  let { orderName, orderImg, orderDescription, _id, orderStatus } =
    params.order;

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you really went to delete!");
    if (confirm) {
      fetch(`https://morning-brook-19447.herokuapp.com/orderDetails/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Product successfully deleted");
            window.location.reload();
          }
        });
    }
  };

  const handleUpdate = (e) => {
    orderStatus = "Approved";
    fetch(`https://morning-brook-19447.herokuapp.com/orderDetails/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(params.order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("user updated succesfully");
        }
      });
  };

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={orderImg} />
        <Card.Body>
          <Card.Title>{orderName}</Card.Title>
          <Card.Subtitle className="text-primary">{orderStatus} </Card.Subtitle>
          <Card.Text>{orderDescription}</Card.Text>
          <Button variant="warning" onClick={() => handleDelete(_id)}>
            Cancel
          </Button>
          {params.children && (
            <Button variant="success" onClick={() => handleUpdate(_id)}>
              Update to Approved
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyTour;
