import Accordion from "react-bootstrap/Accordion";
function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>ХТО ????</Accordion.Header>
        <Accordion.Body>
          <img src="завантаження.png" alt="павук" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
