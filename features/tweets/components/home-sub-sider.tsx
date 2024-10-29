import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Search } from "lucide-react";

export const HomeSubSider = () => {
  return (
    <>
      <div className="p-2">
        <Input
          placeholder="Search"
          startContent={<Search />}
          variant="bordered"
          radius="full"
        />
      </div>
      <Card className="m-2">
        <CardHeader>Subscribe to Premium</CardHeader>
        <CardBody>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </CardBody>
        <CardFooter>
          <Button radius="full">Subscribe</Button>
        </CardFooter>
      </Card>
      <Card className="m-2">
        <CardHeader>Whats Happening</CardHeader>
        <CardBody>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </CardBody>
        <CardBody>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </CardBody>
        <CardBody>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </CardBody>
        <CardBody>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </CardBody>
      </Card>
    </>
  );
};
