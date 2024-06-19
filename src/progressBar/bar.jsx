import { useState } from "react";
import { Button, ButtonGroup, Container, ProgressBar } from "react-bootstrap";
import { TbReload, TbPlus, TbMinus } from "react-icons/tb";

const Bar = () => {
  const [now, setNow] = useState(0);

  console.log(now);

  return (
    <Container className="p-5 text-center" style={{ height: "100vh" }}>
      <ButtonGroup aria-label="Basic example" size="lg">
        <Button className="p-0">
          <TbPlus
            onClick={now < 100 && (() => setNow((prev) => prev + 10))}
            className="fs-3"
          />
        </Button>
        <Button variant="secondary" className="p-0">
          <TbReload onClick={() => setNow(0)} className="fs-3" />
        </Button>
        <Button className="p-0">
          <TbMinus
            onClick={now > 0 && (() => setNow((prev) => prev - 10))}
            className="fs-3"
          />
        </Button>
      </ButtonGroup>

      <div className="pt-5">
        <ProgressBar animated variant="primary" now={now} label={`${now}%`} />
      </div>
    </Container>
  );
};

export default Bar;
